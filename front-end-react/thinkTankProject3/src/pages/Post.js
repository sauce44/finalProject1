import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Post(props) {
	const [post, setPost] = useState({});
	const [comment, setComment] = useState({
		name: '',
		message: ''
	});
	const nameInput = useRef(null);
	const messageInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/posts/${props.match.params.id}`);
				const data = await response.json();
				setPost(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleAddComment = async e => {
		e.preventDefault();
		useEffect(() => {
			(async () => {
				try {
					const response = await fetch(
						`/api/comments/${props.match.params.id}`,
						{
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify({
								name: nameInput.current.value,
								message: messageInput.current.value
							})
						}
					);
					const data = await response.json();
					setComment(data);
				} catch (error) {
					console.erorr(error);
				}
			})();
		}, []);
	};

	return (
		<div className="PostsPage">
			<h1>{post.title ? post.title : ''}</h1>
			<p>{post.body ? post.body : ''}</p>
			<Link to={`/${post._id}/edit`}>
				<button>Update this Post</button>
			</Link>
			<ul>
				{post.comments && post.comments.length
					? post.comments.map(comment => {
							return (
								<li className="Comments" key={comment._id}>
									<h3>{comment.name} says... </h3>
									<p>{comment.message}</p>
									<small>{comment.createdAt}</small>
								</li>
							);
					  })
					: ''}
			</ul>
			{/* <Link to={`/${post._id}/addComment`}> */}
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleAddComment}
			>
				<label>
					Name:{' '}
					<input type="text" ref={nameInput} defaultValue={comment.name} />
				</label>
				<label>
					Message:{' '}
					<input
						type="text"
						ref={messageInput}
						defaultValue={comment.message}
					/>
				</label>
				<input type="submit" value="Add a Comment" />
			</form>
			{/* </Link> */}
		</div>
	);
}
