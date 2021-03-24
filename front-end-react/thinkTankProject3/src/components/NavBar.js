import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../router/routes';

const NavBar = props => {
	// for (let i = 0; routes.length - 1; i++) {
	// 	let SortedRoutes = props.routes[i].key.sort();
	// }
	return (
		<nav className="NavBar">
			{props.routes.map(({ key, path }) => (
				<Link key={key} to={path}>
					{key}
				</Link>
			))}
		</nav>
	);
};

export default NavBar;
