import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import User from '../../models/user';

export default function App(props) {
	const [post, setPost] = useState([]);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/users');
				const data = await response.json();
				setPost(data);
			} catch (error) {
				console.error(error);
			}
		})();
	});

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
			setPost([...post, data]);
		} catch (error) {
			console.error(error);
		}
	};

	const filterTeams = user.filter(user => user.teamName === 'blue');

	return (
		<div className="RedPage">
			<h1>Welcome to the Red Think Tank</h1>
			<h2>You will be places with posts from the Blue team.</h2>
			{filterTeams.map(user => {
				return (
					<div className="Users" key={user._id}>
						{post.map(post => {
							return (
								<div className="Posts" key={post._id}>
									<Link to={`/${post._id}`}>
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
			})}
		</div>
	);
}
