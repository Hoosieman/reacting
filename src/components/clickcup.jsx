import React, { useEffect, useState } from 'react';

const Clickcup = () => {
    const [selectedAddon, setSelectedAddon] = useState('--');

    const handleButtonClick = (addonName) => {
        // Update the selected drink
        setSelectedAddon(addonName);
    };

    useEffect(() => {
        // Set the value of the input field with the selected addon
        const addOnsInput = document.getElementById('cup');
        if (addOnsInput) {
            addOnsInput.value = selectedAddon;
        }
    }, [selectedAddon]);

    
    


    return (

    <div>
        <div className="drink">
        <label for="count">Cup</label>
        <input type="text" id="cup" value="--" readonly className="selected-drink" />
      </div>

      <br />
    

      <br />


      <div className="button-row">
        <table>
          <tr>
            <td>
              <button id="cupButton1" className="circle-button" onClick={() => handleButtonClick('Styrofoam')}>
                Styrofoam
              </button>
            </td>

            <td>
              <button id="cupButton2" className="circle-button" onClick={() => handleButtonClick('Paper')}>
                Paper
              </button>
            </td>

            <td>
                <button id="cupButton3" className="circle-button" onClick={() => handleButtonClick('Plastic')}>
                  Plastic
                </button>
            </td>
          </tr>
        </table>
      </div>

      <script src="Javascript/cup.js"></script>
    </div>

    );
};

export default Clickcup;