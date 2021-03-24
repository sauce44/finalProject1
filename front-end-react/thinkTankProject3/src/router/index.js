import React from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import AuthenticationButton from '../components/authentication-button';

const AppRouter = props => {
	return (
		<Router>
			<NavBar routes={routes} />
			<AuthenticationButton className="Login" />
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						component={props => <Component page={key} {...props} />}
					></Route>
				))}
			</Switch>
		</Router>
	);
};

export default AppRouter;
