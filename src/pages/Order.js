import react, { Fragment } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Clickdrink from "../components/clickdrink";
import Clickaddon from "../components/clickaddon";
import Clickice from "../components/clickice";
import Clicksize from "../components/clicksize";
import Clickcup from "../components/clickcup";
import ClearButton from "../components/clearbutton";

function Order() {
  return (
    <Fragment>

    
    <Header />

    <header>
         <link rel="stylesheet" type="text/css" href="assets/CSS/drink_buttons.css"/>
      <link rel="stylesheet" type="text/css" href="assets/CSS/format.css"/>
      <link rel="stylesheet" type="text/css" href="assets/CSS/page_buttons.css"/>
    </header>

     <main>

      
      
      <Clickdrink />

      <br />


      
  

  
    

      <br />


      <Clickaddon />

      <br />
    

      <br />

      <Clickice />  

      <br />
    

      <br />


      <Clicksize /> 


      <br />
    

      <br />


      <Clickcup />


      <br />

      <br />

      <ClearButton inputIds={['drinkType', 'addOns', 'size', 'Ice', 'cup']} />


      <script src="Javascript/reset.js"></script>

      <br />

      <div className="button-row">
        <button className="page-button">Next</button>
      </div>


    </main>

    <Footer />


    </Fragment>
  );
}

export default Order;