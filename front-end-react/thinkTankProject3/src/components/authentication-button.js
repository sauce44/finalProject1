import React from 'react';

import LoginButton from './login-button';
import LogoutButton from './logout-button';

const AuthenticationButton = () => {
	return AuthenticationButton.isLoggedIn ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
