import React, { useState } from 'react';
import './App.css';
import PopUp from './popUp'; // Corrected import path and component name
import bc from './images/bc.png';

const App = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false); // Close the PopUp
  };

  return (
    <div className="container" style={{ position: 'relative', backgroundImage: `url(${bc})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <button onClick={togglePopUp} style=
      {{ position: 'absolute', bottom: '60%', right: '93px',
      width :'170px',
       transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
        color: 'transparent', padding: '10px 20px', border: 'none',
        borderRadius: '5px', cursor: 'pointer' }}>
        Open PopUp
      </button>
      {isPopUpOpen && <PopUp onClose={handleClosePopUp} />} {/* Pass onClose function as a prop */}
    </div>
  );
}

export default App;
