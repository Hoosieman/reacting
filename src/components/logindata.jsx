// Import necessary dependencies
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Define the Login component
const LoginData = () => {
  const navigate = useNavigate();
  // State variables to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Send data to the server
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Login successful!');
        // Store the token securely (e.g., in a cookie or local storage)
        localStorage.setItem('token', data.token);
        // Redirect to the desired page
        navigate("/order");
      } else {
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  // JSX for the Login component
  return (

   
    <main>
       <header>
    <link rel="stylesheet" type="text/css" href="assets/CSS/login.css"/>
  </header>
      <h1>
        <img src="assets/Images/DropByDripPic.png" width="200" alt="Image" id="logo" />
      </h1>
      <form onSubmit={handleLogin} className="login-box">
        <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" id="login-button">
          Login
        </button>
      </form>
    </main>
  );
};

// Export the Login component
export default LoginData;
