import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import 'bootstrap/scss/bootstrap.scss';
import { BrowserRouter as Router } from 'react-router-dom';
// import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const app = document.getElementById('app');

ReactDOM.render(
	<Router>
		{/* <Auth0ProviderWithHistory> */}
		<AppRouter />
		{/* </Auth0ProviderWithHistory> */}
	</Router>,

	app
);
