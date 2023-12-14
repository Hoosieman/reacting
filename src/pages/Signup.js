import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const signup = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("backend/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add other headers if needed
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.success) {
        alert("Sign up successful!");
        // Store the token securely (e.g., in a cookie or local storage)
        localStorage.setItem("token", data.token);
        // Redirect to the desired page using react-router-dom
        navigate("/order");
      } else {
        alert("Signup failed. Please try again.");
      }

      // Handle the JSON data here
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Fragment>
      <main>
        <link rel="stylesheet" type="text/css" href="assets/CSS/login.css" />
        <h1>
          <img
            src="assets/Images/DropByDripPic.png"
            width="200"
            alt="Image"
            id="logo"
          />
        </h1>
        <h2 id="login-button" className="login-box">
          SIGN UP
        </h2>
        <form id="signupForm" className="login-box">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="button" onClick={signup} className="login-button">
            Sign Up
          </button>
        </form>
        {/* Remove the script tag, as it's not necessary for react apps */}
      </main>
    </Fragment>
  );
}

export default Signup;

