import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function App(props) {
	const [posts, setPosts] = useState([]);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/posts');
				const data = await response.json();
				await setPosts(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		const titleValue = titleInput.current.value;
		const bodyValue = bodyInput.current.value;
		try {
			const response = await fetch('/api/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleValue,
					body: bodyValue
				})
			});
			const data = await response.json();
			await setPosts([...posts, data]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="AppPage">
			<h1 className="Welcome">Welcome to the Think Tank</h1>
			<h2 className="tagLine">Popular Posts</h2>
			{posts.map((post) => {
				return (
					<div className="Posts" key={post._id}>
						<Link to={`/posts/${post._id}`}>
							<h3>{post.title}</h3>
						</Link>
						<p>{post.body}</p>
						{/* <ul>
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
						</ul> */}
					</div>
				);
			})}
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				<label>
					Title: <input type="text" ref={titleInput} />
				</label>
				<label>
					Body: <input type="text" ref={bodyInput} />
				</label>
				<input type="submit" value="Create Tank" />
			</form>
		</div>
	);
}
