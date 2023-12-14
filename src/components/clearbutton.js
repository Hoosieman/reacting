import React from 'react';

const ClearButton = ({ inputIds }) => {
  const handleClearButtonClick = () => {
    inputIds.forEach((id) => {
      const inputElement = document.getElementById(id);
      if (inputElement) {
        inputElement.value = '';
      }
    });
  };

  return (
    <div className="button-row">
    <button id="resetButton" onClick={handleClearButtonClick} className="page-button">
      Clear
    </button>
    </div>

  );
};

export default ClearButton;
