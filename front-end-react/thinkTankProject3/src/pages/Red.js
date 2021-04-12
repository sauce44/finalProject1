import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Team from '../../models/team';

export default function Red(props) {
	const [post, setPost] = useState([]);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/teams');
				const data = await response.json();
				setPost(data.filter(team => team.users.teamName === 'red'));
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
			setPost([...post, data]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="RedPage">
			<div className="WelcomeHeaderRed">
				<h1 className="Welcome">Welcome to the Red Think Tank</h1>
				<h2 className="tagLine">
					You will be placed with posts from the Red team.
				</h2>
			</div>
			{post.map(team => {
				<div className="Users" key={team.users._id}>
					<div className="Posts" key={team.users.posts._id}>
						<Link to={`/post/${team.users.posts._id}`}>
							<h3>{team.users.posts.title}</h3>
						</Link>
						<p>{team.users.posts.body}</p>
						<ul>
							{team.users.posts.comments && team.users.posts.comments.length
								? team.users.posts.comments.map(comment => {
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
				</div>;
			})}
			<form className="footer" onSubmit={handleSubmit}>
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
