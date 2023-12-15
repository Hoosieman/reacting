import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <h1 className="D-image"> <img src="assets/Images/Drop.png" width='100' alt="Image" /></h1>

      <link rel="stylesheet" type="text/css" href="assets/CSS/hamburger.css" />
    <link rel="stylesheet" type="text/css" href="assets/CSS/header.css"></link>

      <div className={`sidebar ${isActive ? 'active' : ''}`}>
        <div className="hamburger" id="hamburger" onClick={handleToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <ul className="menu">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/order">Order</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>

    </header>
  );
};

export default Header;
