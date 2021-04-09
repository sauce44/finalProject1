import React, { useState } from 'react';

function LoginButton(props) {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true);
	};

	return (
		<div>
			<button className="login-button" onClick={handleClick}>
				<h2>Log In</h2>
			</button>

			{
				(clicked ? (
					true
				) : (
					<form>
						<div>
							<label htmlFor="email">Email</label>
							<input type="text" name="email" onChange={props.handleInput} />
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input type="text" name="password" onChange={props.handleInput} />
						</div>
						<input value="Submit" type="submit" onClick={props.handleLogIn} />
					</form>
				),
				'')
			}
		</div>
	);
}

export default LoginButton;
