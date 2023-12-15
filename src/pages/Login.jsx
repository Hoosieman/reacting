import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LoginData from "../components/logindata";

function Login() {
  return (
    <Fragment>
      <main>
        
    <LoginData /> 

      <form method="get">
        <Link to="/signup">
        <button type="submit" id="login-button">Signup</button>
        </Link>
      </form>

    </main>
    </Fragment>
  );
}

export default Login;