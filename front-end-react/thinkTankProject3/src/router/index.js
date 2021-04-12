import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import AuthenticationButton from '../components/authentication-button';
import SignupButton from '../components/signup-button';

const AppRouter = props => {
	const [userData, setUserData] = useState({
		Email: '',
		Password: '',
		isLoggedIn: false
	});

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		if (localStorage.token) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [isLoggedIn]);

	const handleLogOut = () => {
		setUserData({
			Email: '',
			Password: '',
			isLoggedIn: false
		});
		localStorage.clear();
	};

	const handleInput = event => {
		setUserData({ ...userData, [event.target.name]: event.target.value });
	};

	const handleSignUp = async event => {
		event.preventDefault();
		try {
			const response = await axios.post('http://localhost:3001/register', {
				Email: state.email,
				Password: state.password
			});
			console.log(response);
			localStorage.setItem('token', response.data.token);
			setIsLoggedIn(true);
		} catch (err) {
			console.log(err);
		}
	};

	const handleLogIn = async event => {
		event.preventDefault();
		try {
			const response = await axios.post('http://localhost:3001/login', {
				Email: state.email,
				Password: state.password
			});
			localStorage.setItem('token', response.data.token);
			setIsLoggedIn(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Router>
			<div className="pageWrapper">
				<div className="WelcomeHeader">
					<h1 className="Welcome">Welcome to the Think Tank</h1>
					<h2 className="tagLine">Popular Posts</h2>
					<NavBar routes={routes} isLoggedIn={isLoggedIn} />
				</div>
				<AuthenticationButton className="Login" props={isLoggedIn} />
				<SignupButton className="Signup" props={(handleSignUp, handleInput)} />
				<Switch>
					{routes.map(({ Component, key, path }) => (
						<Route
							key={key}
							path={path}
							component={props => (
								<Component
									page={key}
									{...props}
									isLoggedIn={isLoggedIn}
									handleInput={handleInput}
									handleLogIn={handleLogIn}
									handleLogOut={handleLogOut}
									handleSignUp={handleSignUp}
								/>
							)}
						></Route>
					))}
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
