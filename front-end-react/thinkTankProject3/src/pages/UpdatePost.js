import React, { useState, useEffect, useRef } from 'react';

export default function UpdatePost(props) {
	const [post, setPost] = useState({
		title: '',
		body: ''
	});
	const [deleted, setDeleted] = useState(false);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);

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
	}, [post, deleted]);

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/posts/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleInput.current.value,
					body: bodyInput.current.value
				})
			});
			const data = await response.json();
			setPost(data);
		} catch (error) {
			console.erorr(error);
		}
	};

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/posts/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			setDeleted(!deleted);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	return (
		<div className="updatePost">
			<div className="WelcomeHeader">
				<h1 className="Welcome">Think Tank</h1>
			</div>
			<Link to={`/`}>
				<button>Back to Home</button>
			</Link>
			<div>
				<h1>{post.title ? post.title : ''}</h1>
				<p>{post.body ? post.body : ''}</p>
				<button onClick={handleDelete}>Delete Post</button>
			</div>
			<ul>
				{post.comments && post.comments.length
					? post.comments.map(comment => {
							return (
								<li key={comment._id}>
									<h3>{comment.name} says... </h3>
									<p>{comment.message}</p>
									<small>{comment.createdAt}</small>
								</li>
							);
					  })
					: ''}
			</ul>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				<label>
					Title:{' '}
					<input type="text" ref={titleInput} defaultValue={post.title} />
				</label>
				<label>
					Body: <input type="text" ref={bodyInput} defaultValue={post.body} />
				</label>
				<input type="submit" value="Update Post" />
			</form>
		</div>
	);
}
