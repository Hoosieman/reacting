import react, { Fragment } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import WebSocketChat from "../components/websocket";

function About() {
  return (
    <Fragment>
      
    <Header />

    <main>

    <link rel="stylesheet" type="text/css" href="assets/CSS/drink_buttons.css"/>
      <link rel="stylesheet" type="text/css" href="assets/CSS/format.css"/>

      <div className="button-row">
        
      <WebSocketChat />

      </div>

      
        
      <div className="button-row">
      <h1 className="location">About</h1>
      </div>

      <p className="button-row">
        DropByDrip is a company based in Utah aimed to bring quality drinks to your door. We are a small company with a passion for customer service and speed of service. Want your favorite drink delivered and made right in front of you? You are in the right place.
      
    </p>

      <p>
        The name DropbyDrip is a registered trademark of Cole Smith. Our use of the name is for non-profit
        educational use only. No part of this code or program should be used outside of that definition.
      </p>


      <div className="button-row">
        <h1 className="location">Today's Favorite</h1>
      </div>
      <h1 className="button-row">Diet Coke</h1>

      <ul id="drinkList"></ul>
    
      
        <div>

        
        </div>
        <script src="assets/Javascript/favorite.js"></script>


      <div className="button-row">
        <h1 className="location">Other Orders</h1></div>
      

      <div id="other orders">
        <div className="button-row"></div>
            <div className="button-row">
                <button className="circle-button">Coke with Strawberry</button>
            </div>

            <br/>

        <div></div>
            <div className="button-row">
                <button className="circle-button">Root Beer with Vanilla</button>
            </div>
      </div>
    </main>

    <Footer />

    </Fragment>
  );
}

export default About;