import react, { Fragment } from "react";
import { Link } from "react-router-dom";
import LoginData from "../components/logindata";

function Login() {
  return (
    <Fragment>
      <main>
        
    <LoginData /> 

      <form method="get" action='/signup'>
        <button type="submit" id="login-button">Signup</button>
      </form>

      <script src="./logging.js"></script>
    </main>
    </Fragment>
  );
}

export default Login;