import React, { useState, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function useProfile(props) {
	const [user, setUser] = useState({
		userName: '',
		password: ''
	});
	const { USER, isAuthenticated } = useAuth0();
	const userNameInput = useRef(null);
	const passwordInput = useRef(null);

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

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/users/${props.match.params.user.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					userName: userNameInput.current.value,
					password: passwordInput.current.value
				})
			});
			const data = await response.json();
			setUser(data);
		} catch (error) {
			console.erorr(error);
		}
	};

	const teamSort = async e => {
		e.preventDefault();
		user.team = true;
		if (user.team === true) {
			user.teamName = 'blue';
			this.props.history.push('/blue');
		} else {
			user.teamName = 'red';
			this.props.history.push('/red');
		}
	};

	if (isAuthenticated)
		return (
			<div className="UserProfile">
				<img src={USER.picture} alt={USER.name} />
				<h2>Username: {USER.name}</h2>
				<p>Email: {USER.email}</p>
			</div>
		);

	return (
		<div className="UserProfile">
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				<Link to={`/`}>
					<button>Back to Home</button>
				</Link>
				<label>
					userName:{' '}
					<input type="text" ref={userNameInput} defaultValue={user.username} />
				</label>
				<label>
					password:{' '}
					<input type="text" ref={passwordInput} defaultValue={user.password} />
				</label>
				<label>
					Check to be placed in a Tank.
					<input type="checkbox" onClick={teamSort} />
				</label>
				<input type="submit" value="Create New User With Tank" />
			</form>
			<signup-button />
		</div>
	);
}
