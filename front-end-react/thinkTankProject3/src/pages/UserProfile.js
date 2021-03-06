import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function useProfile(props) {
	const [user, setUser] = useState({});
	const [teamData, setTeamData] = useState([]);
	const [joinedTeam, setJoinedTeam] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`/api/users/${props.match.params.user.id}`
				);
				const data = await response.json();
				setUser(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [user]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/teams`);
				const data = await response.json();
				setTeamData(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	useEffect(() => {
		async e => {
			e.preventDefault();
			// while (user.team == false) {
			// 	if (teamData.map(team => team.users.job.includes()) == false) {
			// 		async e => {
			// 			e.preventDefault();
			// 			try {
			// 				const response = await fetch(`/api/teams`, {
			// 					method: 'POST',
			// 					headers: {
			// 						'Content-Type': 'application/json'
			// 					},
			// 					body: body
			// 				});
			// 			} catch (error) {
			// 				console.error(error);
			// 			}
			// 		};
			// 	}
			// }
			try {
				const response = await fetch(
					`/api/users/${props.match.params.user.id}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: body
					}
				);
				const data = await response.json();
				setUser(data);
			} catch (error) {
				console.error(error);
			}
		};
	}, [user]);

	const selectJob = () => {
		let e = document.querySelector('.Dropdown');

		let output = e.options[e.selectedIndex].value;
		useEffect(() => {
			async e => {
				e.preventDefault();
				const body = JSON.stringify({
					users: {
						job: output
					}
				});

				try {
					const response = await fetch(
						`/api/users/${props.match.params.user.id}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: body
						}
					);
					const data = await response.json();
					setUser(data);
				} catch (error) {
					console.error(error);
				}
			};
		});
	};

	const joinTeam = () => {
		if (user.team == false) {
			for (i = 0; i < teamData.users.length; i++) {
				if (
					teamData.users[i].jobs.includes(users => users.job == output) == false
				) {
					useEffect(() => {
						async e => {
							e.preventDefault();
							const body = JSON.stringify({
								users: {
									users: user
								}
							});

							try {
								const response = await fetch(
									`/api/teams/${props.match.params.user.id}`,
									{
										method: 'PUT',
										headers: {
											'Content-Type': 'application/json'
										},
										body: body
									}
								);
								const data = await response.json();
								setTeamData(...teamData, data);
							} catch (error) {
								console.error(error);
							}
						};
					});
					setJoinedTeam(true);
				} else {
					alert(`All Team\'s Are Full, Adding You To A New Team`);
					useEffect(() => {
						async e => {
							e.preventDefault();
							const body = JSON.stringify({
								users: {
									users: user
								}
							});
							try {
								const response = await fetch(`/api/teams`, {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json'
									},
									body: body
								});
								const data = await response.json();
								setTeamData(...teamData, data);
							} catch (error) {
								console.error(error);
							}
						};
					});
					setJoinedTeam(true);
				}
			}
		}
	};
	joinTeam();

	if (props.isLoggedIn == true && joinedTeam == true) {
		return (
			<div className="UserProfile">
				{/* <img src={USER.picture} alt={USER.name} /> */}
				<div className="WelcomeHeader">
					<h1 className="Welcome">Think Tank</h1>
					<Link to={`/`}>
						<button className="backHome">Back Home</button>
					</Link>
				</div>
				<h2>Email: {user.email}</h2>
				<p>
					Posts:{' '}
					{user.map(post => {
						<div className="Posts" key={post.posts._id}>
							<div className="Card" key={post.posts._id}>
								<Link to={`/post/${post.posts._id}`}>
									<h3>{post.posts.title}</h3>
								</Link>
								<p>{post.posts.body}</p>
							</div>
						</div>;
					})}
				</p>
			</div>
		);
	}

	if (props.isLoggedIn == true && joinedTeam == false) {
		return (
			<div className="UserProfile">
				{/* <img src={USER.picture} alt={USER.name} /> */}
				<div className="WelcomeHeader">
					<h1 className="Welcome">Think Tank</h1>
					<Link to={`/`}>
						<button className="backHome">Back Home</button>
					</Link>
				</div>
				<h2>Email: {user.email}</h2>
				<div>
					<label className="job">
						It's Time To Sort You, Select Speciality
					</label>
					{/* Fill in a select on Change method */}
					<select className="Dropdown" onSelect={selectJob}>
						<option value="Tech">Tech</option>
						<option value="Art">Art</option>
						<option value="Engineer">Engineer</option>
						<option value="Farmer">Farmer</option>
					</select>
					{/* <input type="text" name="Job Title" onChange={props.handleInput} /> */}
				</div>
			</div>
		);
	}

	return (
		<div className="UserProfile">
			<div className="WelcomeHeader">
				<h1 className="Welcome">Think Tank</h1>
				<Link to={`/`}>
					<button className="backHome">Back Home</button>
				</Link>
			</div>
		</div>
	);
}
