import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

export default function App(props) {
	console.log('props', props);
	const [posts, setPosts] = useState([]);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/posts');
				const data = await response.json();
				await setPosts([data]);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		const titleValue = titleInput.current.value;
		const bodyValue = bodyInput.current.value;
		console.log('title input', titleValue);
		console.log('bodyval', bodyValue);
		console.log(
			'json stringify',
			JSON.stringify({
				title: titleValue,
				body: bodyValue
			})
		);

		try {
			const response = await fetch('/api/posts/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleValue,
					body: bodyValue
				})
				// body: JSON.stringify({
				// 	title: titleValue,
				// 	body: bodyValue
				// })
			});
			const data = await response.json();
			console.log('data', data);
			await setPosts([...posts, data]);
		} catch (error) {
			console.log('errorrrrrrr', error);
			console.error(error);
		}
		titleInput.current.value = '';
		bodyInput.current.value = '';
	};

	return (
		<div className="FullPage">
			<div className="AppPage">
				<form className="newPost" onSubmit={handleSubmit}>
					<label>
						Post Title: <input type="text" ref={titleInput} />
					</label>
					<label>
						Description: <input type="text" ref={bodyInput} />
					</label>
					<input className="submit" type="submit" value="Create Tank" />
				</form>
			</div>
			{posts &&
				posts.map(post => {
					return (
						<div className="posts" key={post._id}>
							<Link to={`/${post._id}/posts`}>
								<h3>{post.title}</h3>
							</Link>
							<p>{post.body}</p>
							<ul>
								{post.comments && post.comments.length
									? post.comments.map(comment => {
											return (
												<li className="Comments" key={comment._id}>
													<h4>{comment.name} says... </h4>
													<p>{comment.message}</p>
													<small>{comment.createdAt}</small>
												</li>
											);
									  })
									: ''}
							</ul>
						</div>
					);
				})}
		</div>
	);
}