import react, { Fragment } from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <Fragment>


    <main>
      <div className="main-logo">
        <Link to="/Login">
        <img src= "Assets/Images/DropByDripPic.png" width = '500' alt="Image" id="logo"/>
        </Link>
        <div className="hover-text" id="hover-text">CLICK LOGO</div>
      
      </div>

      
    </main>

    
    </Fragment>
  );
}

export default Index;