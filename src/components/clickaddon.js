import React, { useEffect, useState } from 'react';

const Clickaddon = () => {
    const [selectedAddon, setSelectedAddon] = useState('--');

    const handleButtonClick = (addonName) => {
        // Update the selected drink
        setSelectedAddon(addonName);
    };

    useEffect(() => {
        // Set the value of the input field with the selected addon
        const addOnsInput = document.getElementById('addOns');
        if (addOnsInput) {
            addOnsInput.value = selectedAddon;
        }
    }, [selectedAddon]);

    
    


    return (
        <div>
        <div className="drink">
        <label for="Add-Ons">Add-Ons</label>
        <input type="text" id="addOns" value="--" readonly className="selected-drink"/>
      </div>

      <br />
    

      <br />
      
      <div className="button-row">
        <table>
          <tr>
            <td>
              <button id="addonButton1" className="circle-button" onClick={() => handleButtonClick('Vanilla')}>
                Vanilla
              </button>
            </td>

            <td>
              <button id="addonButton2" className="circle-button" onClick={() => handleButtonClick('Caramel')}>
                Caramel
              </button>
            </td>

            <td>
                <button id="addonButton3" className="circle-button" onClick={() => handleButtonClick('Raspberry')}>
                  Raspberry
                </button>
            </td>
          </tr>

          <tr>
            <td>
                <button id="addonButton4" className="circle-button" onClick={() => handleButtonClick('Cherry')}>
                  Cherry
                </button>
            </td>

            <td>
                <button id="addonButton5" className="circle-button" onClick={() => handleButtonClick('Creamer')}>
                  Creamer
                </button>
            </td>
          
            <td>
              <button id="addonButton6" className="circle-button" onClick={() => handleButtonClick('Coconut')}>
                Coconut
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button id="addonButton7" className="circle-button" onClick={() => handleButtonClick('Mango')}>
                Mango
              </button>
            </td>
            <td>
                <button id="addonButton8" className="circle-button" onClick={() => handleButtonClick('Blackberry')}>
                  Blackberry
                </button>
            </td>

            <td>
                <button id="addonButton9" className="circle-button" onClick={() => handleButtonClick('Strawberry')}>
                  Strawberry
                </button>
            </td>
          </tr>

          <tr>
              <td>
                <button id="addonButton10" className="circle-button" onClick={() => handleButtonClick('Peach')}>
                  Peach
                </button>
              </td>
            
            <td>
              <button id="addonButton11" className=" circle-button" onClick={() => handleButtonClick('Blue Raspberry')}>
                Blue Raspberry
              </button>
            </td>

            <td>
              <button id="addonButton12" className="circle-button" onClick={() => handleButtonClick('Passion Fruit')}>
                Passion Fruit
              </button>
            </td>
          </tr>

          <tr>
            <td>
                <button id="addonButton13" className="circle-button" onClick={() => handleButtonClick('Cherry Lime')} >
                  Cherry Lime
                </button>
            </td>

            <td>
                <button id="addonButton14" className="circle-button" onClick={() => handleButtonClick('Lemon')}>
                  Lemon
                </button>
            </td>

            <td>
                <button id="addonButton15" className="circle-button" onClick={() => handleButtonClick('Lime')}>
                  Lime
                </button>
              </td>
          </tr>
        </table>
      </div>

      <script src="Javascript/addons.js"></script>
      </div>

    );
};

export default Clickaddon;