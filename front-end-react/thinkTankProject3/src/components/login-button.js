import React, { useState } from 'react';

function LoginButton(props) {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true);
	};

	const handleSubmit = () => {
		document.getElementsByClassName('login-button').style.display = 'none';
	};

	return (
		<div>
			<button className="login-button" onClick={handleClick}>
				<h2>Log In</h2>
			</button>

			{clicked ? (
				<form className="login-form">
					<div>
						<label htmlFor="email">Email:</label>
						<input type="text" name="email" onChange={props.handleInput} />
					</div>
					<div>
						<label htmlFor="password">Password:</label>
						<input type="text" name="password" onChange={props.handleInput} />
					</div>
					<input
						value="Submit"
						type="submit"
						onClick={props.handleLogIn}
						onSubmit={handleSubmit}
					/>
				</form>
			) : (
				''
			)}
		</div>
	);
}

export default LoginButton;
