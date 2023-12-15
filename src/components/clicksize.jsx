import React, { useEffect, useState } from 'react';

const Clicksize = () => {
    const [selectedAddon, setSelectedAddon] = useState('--');

    const handleButtonClick = (addonName) => {
        // Update the selected drink
        setSelectedAddon(addonName);
    };

    useEffect(() => {
        // Set the value of the input field with the selected addon
        const addOnsInput = document.getElementById('size');
        if (addOnsInput) {
            addOnsInput.value = selectedAddon;
        }
    }, [selectedAddon]);

    
    


    return (
    <div>
        <div className="drink">
        <label for="count">Size</label>
        <input type="text" id="size" value="--" readonly className= "selected-drink"/>
      </div>

      <br />
    

      <br />


      <div className="button-row">
        <table>
          <tr>
            <td>
              <button id="sizeButton1" className="circle-button" onClick={() => handleButtonClick('Extra Small')}>
                Extra Small
              </button>
            </td>

            <td>
              <button id="sizeButton2" className="circle-button" onClick={() => handleButtonClick('Small')}>
                Small
              </button>
            </td>

            <td>
                <button id="sizeButton3" className="circle-button" onClick={() => handleButtonClick('Medium')}>
                  Medium
                </button>
            </td>
          </tr>

          <tr>
            <td>
                <button id="sizeButton4" className="circle-button" onClick={() => handleButtonClick('Large')}>
                  Large
                </button>
            </td>

            <td>
                <button id="sizeButton5" className="circle-button" onClick={() => handleButtonClick('X Large')}>
                  X Large
                </button>
            </td>

            <td>
                <button id="sizeButton6" className="circle-button" onClick={() => handleButtonClick('2X Large')}>
                  2X Large
                </button>
            </td>
          </tr>
        </table>
      </div>

      <script src="Javascript/size.js"></script>
    </div>  

    );
};

export default Clicksize;