import React, { useState } from 'react';
import './App.css';
import PopUp from './popUp'; // Corrected import path and component name
import bc from './images/bc.png';

const Bc = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  const handleClosePopUp = () => {
    setIsOpen(false); // Close the PopUp
  };

  // Get image dimensions
  const image = new Image();
  image.src = bc;
  const imageWidth = image.width;
  const imageHeight = image.height;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    }}>
      <div style={{
        position: 'relative',
        width: imageWidth,
        height: imageHeight,
      }}>
        <img
          src={bc}
          alt="Screen"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', border : '2px solid red', }}>
          <button
            onClick={togglePopUp}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Open PopUp
          </button>
        </div>
      </div>
      {isOpen && <PopUp onClose={handleClosePopUp} />} {/* Pass onClose function as a prop */}
    </div>
  );
}

export default Bc;
