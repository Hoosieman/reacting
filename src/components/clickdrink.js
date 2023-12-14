import React, { useEffect, useState } from 'react';

const Clickdrink = () => {
  const [selectedDrink, setSelectedDrink] = useState('--');
  const [drinkClickCounts, setDrinkClickCounts] = useState({
    'Mountain Dew': 0,
    'Gatorade': 0,
    'Pepsi': 0,
    'Root Beer': 0,
    'Diet Pepsi': 0,
    'Dr Pepper': 0,
    'Fanta': 0,
    '7up': 0,
    'Sprite': 0,
    'Sierra Mist': 0,
    'Diet Coke': 0,
    'Coke': 0,
    'Sunkist': 0,
    'Coke Zero': 0,
    'Squirt': 0,
  });

  const [pastDrinks, setPastDrinks] = useState([]);

  const handleButtonClick = (drinkName) => {
    // Update the selected drink
    setSelectedDrink(drinkName);

    // Update the click count for the clicked drink
    setDrinkClickCounts((prevCounts) => ({
      ...prevCounts,
      [drinkName]: prevCounts[drinkName] + 1,
    }));

    setPastDrinks((prevDrinks) => [...prevDrinks, drinkName]);

    // Move the fetch call inside the handleButtonClick function
    fetch(`/click/${drinkName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        drinkName,
        buttonId: `drinkButton${Object.keys(drinkClickCounts).findIndex((key) => key === drinkName) + 1}`, // Assuming button ids are in sequential order
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server if needed
        console.log('Server response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handlePastDrinksClick = () => {
    // Display the list of past drinks (you can customize the display format)
    alert(`Past Drinks: ${pastDrinks.join(', ')}`);
  };

  const handleClearPastDrinksClick = () => {
    // Clear the list of past drinks
    setPastDrinks([]);
  };



  
  return (
    <div>

<div class="drink">
        Drink Orders:
      </div>
      <div class="button-row">
      <br /> <button id="pastOrdersButton" class="page-button" onClick={handlePastDrinksClick}>Past Drinks</button>
      <br /> <button id="clearOrders" class="page-button" onClick={handleClearPastDrinksClick}>Clear Past Drinks</button>

      </div>
      
      
      <br />

      <div className="drink">
        <label for="drinkType">Soda:</label>
        <input type="text" id="drinkType" value={selectedDrink} readOnly className="selected-drink" />
      </div>

      <br />
    

      <br />
    
      <div className="button-row">
          <table>
            <tr>
              <td>
                <button id="drinkButton1" className="circle-button" onClick={() => handleButtonClick('Mountain Dew')}>
                  <img src="https://seeklogo.com/images/M/Mountain_Dew-logo-59462AD228-seeklogo.com.png" width="100" height="100" alt="Mountain Dew"/>
                </button>
              </td>

              <td>
                <button id="drinkButton2" className="circle-button" onClick={() => handleButtonClick('Gatorade')}>
                  <img src="https://seeklogo.com/images/G/Gatorade-logo-B999C43B70-seeklogo.com.png" width="100" height="100" alt="Gatorade"/>
                </button>
              </td>

              <td>
                  <button id="drinkButton3" className="circle-button" onClick={() => handleButtonClick('Pepsi')}>
                    <img src="https://seeklogo.com/images/P/pepsi-vertical-logo-72846897FF-seeklogo.com.png" width="80" height="100" alt="Pepsi"/>
                  </button>
              </td>
            </tr>

            <tr>

              <td>
                  <button id="drinkButton4" className="circle-button" onClick={() => handleButtonClick('Root Beer')}>
                    <img src="https://seeklogo.com/images/A/a-w-root-beer-logo-85507C1409-seeklogo.com.png" width="100" height="100" alt="Root Beer"/>
                  </button>
              </td>

              <td>
                  <button id="drinkButton5" className="circle-button" onClick={() => handleButtonClick('Diet Pepsi')}>
                    <img src="https://seeklogo.com/images/D/diet-pepsi-logo-0CB8403228-seeklogo.com.png" width="80" height="100" alt="Diet Pepsi"/>
                  </button>
              </td>

              <td>
                <button id="drinkButton6" className="circle-button" onClick={() => handleButtonClick('Dr Pepper')}>
                  <img src="https://seeklogo.com/images/D/Dr_pepper-logo-20690DAAC9-seeklogo.com.png" width="100" height="100" alt="Dr Pepper"/>
                </button>
              </td>

            </tr>

            <tr>

              <td>
                <button id="drinkButton7" className="circle-button" onClick={() => handleButtonClick('Fanta')}>
                  <img src="https://seeklogo.com/images/F/fanta-logo-9BFEC1C2BB-seeklogo.com.png" width="100" height="100" alt="Fanta"/>
                </button>
              </td>
              <td>
                <button id="drinkButton8" className="circle-button" onClick={() => handleButtonClick('7up')}>
                  <img src="https://seeklogo.com/images/1/7up-logo-B4D7DEF8F1-seeklogo.com.png?v=638101566320000000" width="85" height="85" alt="7up"/>
                </button>
              </td>

              <td>
                <button id="drinkButton9" className="circle-button" onClick={() => handleButtonClick('Sprite')}>
                  <img src="https://seeklogo.com/images/S/sprite-cero-logo-49F54A159C-seeklogo.com.png?v=638133635770000000" width="100" height="100" alt="Sprite"/>
                </button>
              </td>

            </tr>

            <tr>

              <td>
                <button id="drinkButton10" className="circle-button" onClick={() => handleButtonClick('Sierra Mist')}>
                  <img src="https://seeklogo.com/images/S/sierra-mist-logo-37EF2B6472-seeklogo.com.png" width="100" height="100" alt="Sierra Mist"/>
                </button>
              </td>

              <td>
                <button id="drinkButton11" className="circle-button" onClick={() => handleButtonClick('Diet Coke')}>
                  <img src = 'assets/Images/DietCoke.png' width = '100' height = '100' alt = 'Diet Coke'/>
                </button>
              </td>

              <td>
                <button id="drinkButton12" className="circle-button" onClick={() => handleButtonClick('Coke')}>
                  <img src="https://seeklogo.com/images/C/coca-cola-circle-logo-A9EBD3B00A-seeklogo.com.png" width = '93' height = '93' alt ='Coke'/>
                </button>
              </td>

            </tr>

            <tr>
              <td>
                  <button id ="drinkButton13" className="circle-button" onClick={() => handleButtonClick('Sunkist')}>
                    <img src="https://seeklogo.com/images/S/Sunkist-logo-45DC566A2B-seeklogo.com.png" width="100" height="100" alt="Sunkist"/>
                  </button>
             </td>

              <td>
                  <button id="drinkButton14" className="circle-button" onClick={() => handleButtonClick('Coke Zero')}>
                    <img src="assets/Images/CokeZero.png" width="100" height="120" alt="Coke Zero"/>
                  </button>
             </td>

              <td>
                  <button id ="drinkButton15" className="circle-button" onClick={() => handleButtonClick('Squirt')}>
                    <img src="https://seeklogo.com/images/S/Squirt-logo-06C0DCFA6B-seeklogo.com.png" width="100" height="100" alt="Squirt"/>
                  </button>
                </td>
            </tr>
          </table>
      </div>

      <div>
        {/* Display the click counts for each drink */}
        {Object.entries(drinkClickCounts).map(([drink, count]) => (
          <p key={drink}>{`CLICKS ON ${drink}: ${count}`}</p>
        ))}
      </div>

    
      <script src="Javascript/drinks.js"></script>
      <script src="Javascript/pastorder.js"></script>
    </div>
  );
};

export default Clickdrink;
