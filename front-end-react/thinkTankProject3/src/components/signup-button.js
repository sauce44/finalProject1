import React, { useState } from 'react';

function SignUpButton(props) {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true);
	};

	return (
		<div>
			<button className="signup-button" onClick={handleClick}>
				<h2>Sign Up</h2>
			</button>

			{clicked ? (
				<form>
					<div>
						<label htmlFor="email">Email:</label>
						<input type="text" name="Email" onChange={props.handleInput} />
					</div>

					<div>
						<label htmlFor="password">Password:</label>
						<input type="text" name="Password" onChange={props.handleInput} />
					</div>

					<input value="Submit" type="submit" onClick={props.handleSignUp} />
				</form>
			) : (
				''
			)}
		</div>
	);
}

export default SignUpButton;
