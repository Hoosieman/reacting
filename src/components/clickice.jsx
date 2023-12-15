import React, { useEffect, useState } from 'react';

const Clickice = () => {
    const [selectedAddon, setSelectedAddon] = useState('--');

    const handleButtonClick = (addonName) => {
        // Update the selected drink
        setSelectedAddon(addonName);
    };

    useEffect(() => {
        // Set the value of the input field with the selected addon
        const addOnsInput = document.getElementById('Ice');
        if (addOnsInput) {
            addOnsInput.value = selectedAddon;
        }
    }, [selectedAddon]);

    
    


    return (

    <div>
        <div className="drink">
        <label for="count">Ice</label>
        <input type="text" id="Ice" value="--" readonly className="selected-drink" />
      </div>

      <br />
    

      <br />


      <div className="button-row">
        <table>
          <tr>
            <td>
              <button id="iceButton1" className="circle-button" onClick={() => handleButtonClick('Cubed')}>
                Cubed
              </button>
            </td>

            <td>
              <button id="iceButton2" className="circle-button" onClick={() => handleButtonClick('Crushed')}>
                Crushed
              </button>
            </td>
          </tr>
        </table>
      </div>

      <script src="Javascript/ice.js"></script>
    </div>

    );
};

export default Clickice;