import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <Fragment>

<header>
      
      <link rel="stylesheet" type="text/css" href="assets/CSS/index.css"/>
   
    </header>


    <main>
      <div className="main-logo">
        <Link to="/Login">
        <img src= "assets/Images/DropByDripPic.png" width = '500' alt="Image" id="logo"/>
        </Link>
        <div className="hover-text" id="hover-text">CLICK LOGO</div>
      
      </div>

      
    </main>

    
    </Fragment>
  );
}

export default Index;