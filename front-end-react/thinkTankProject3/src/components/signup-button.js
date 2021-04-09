import React from "react";

function SignUpButton(props) {

  return (
    <div>
      <h2>Sign Up</h2>

      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="Email" onChange={props.handleInput} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="Password" onChange={props.handleInput} />
        </div>

        <input value="Submit" type="submit" onClick={props.handleSignUp} />
      </form>
    </div>
  );
}

export default SignUpButton;