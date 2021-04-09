import React, { useState } from 'react';

export default function Home(props) {
	const [posts, setPosts] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/posts`);
				const data = await response.json();
				setPosts(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	// const topLikes = () => {
	// 	const topLikes = 0
	// 	posts.map(post => {
	// 		if(post.likes > topLikes){
	// 			post.importance = 1

	// 		}
	// 	})
	// }

	return (
		<div className="HomePage">
			<h2>Popular Posts</h2>
			{post.map(post => {
				return (
					<div key={post._id}>
						<Link to={`/${post._id}`}>
							<h3>{post.title}</h3>
						</Link>
						<p>{post.body}</p>
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
