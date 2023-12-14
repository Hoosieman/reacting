import react, { Fragment } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Locations() {
  return (
    <Fragment>


    <Header />


        <main>

<link rel="stylesheet" type="text/css" href="assets/CSS/drink_buttons.css"/>
<link rel="stylesheet" type="text/css" href="assets/CSS/format.css"/>

<div className="button-row">
  <h1 className="location">UTAH LOCATIONS</h1>
</div>

  <div className="button-row">
      <table>
          <tr>
              <td>
                  <form method="get" action="order.html">
                      <button type="submit" className="circle-button">Salt Lake City</button>
                    </form>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.9226424849948!2d-111.8538547473686!3d40.7248278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752601efb214f43%3A0x114a7cc3b00da140!2s2111%20S%201300%20E%2C%20Salt%20Lake%20City%2C%20UT%2084106!5e0!3m2!1sen!2sus!4v1696111180123!5m2!1sen!2sus"></iframe> 
                  
              </td>

          </tr>

          <tr>


              <td>
                  <form method="get" action="order.html">
                      <button type="submit" className="circle-button">Provo</button>
                    </form>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d686.3550471312822!2d-111.66271778849733!3d40.25052709357745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d90a11f2e559b%3A0xded53cd1e4b1aa9a!2s230%20W%201230%20N%20St%2C%20Provo%2C%20UT%2084604!5e0!3m2!1sen!2sus!4v1696113357717!5m2!1sen!2sus"></iframe>
              </td>

          </tr>

          <tr>

              <td>
                  <form method="get" action="order.html">
                      <button type="submit" className="circle-button">South Jordan</button>
                    </form>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544.5622826077768!2d-111.98123235226166!3d40.5423943349092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528595e7a70487%3A0x8b3b597eb21a01b5!2s11506%2011500%20S%2C%20South%20Jordan%2C%20UT%2084095!5e0!3m2!1sen!2sus!4v1696113656271!5m2!1sen!2sus"></iframe>
              </td>

          </tr>

          <tr>

              <td>
                  <form method="get" action="order.html">
                      <button type="submit" className="circle-button">St. George</button>
                    </form>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.74070667649664!2d-113.57894192873607!3d37.09829461947173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca452a02879cab%3A0xb90d31407477085!2s201267%20E%20600%20S%2C%20St.%20George%2C%20UT%2084770!5e0!3m2!1sen!2sus!4v1696114105605!5m2!1sen!2sus"></iframe>
              </td>          
          </tr>
      </table>
  </div>

</main>

<Footer />


    </Fragment>
  );
}

export default Locations;