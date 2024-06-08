import React, { useRef, useState } from 'react';
import uploadImage from './images/upload.png';

const PopUp = ({ onClose, isGenerating, handleGenerateVideo, handleContinueProcess }) => {
  const fileInputRef = useRef(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleBrowseFromDevice = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedVideo(URL.createObjectURL(file));
    }
  };

  const closePopUp = () => {
    onClose(); // Call the onClose function passed as a prop
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div
        style={{
          backgroundColor: 'rgb(46,56,70)',
          width: '700px',
          height: '585px',
          border: '8px solid rgb(46,56,70)',
          borderRadius: '6px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            cursor: 'pointer',
            fontSize: '48px',
          }}
          onClick={closePopUp}
        >
          &times;
        </button>
        {!uploadedVideo ? (
          <>
            <div style={{ marginTop: '20px' }}>
              <img src={uploadImage} style={{ maxWidth: '70%', maxHeight: '50%', marginBottom: '0px', marginTop: '10px' }} alt="Upload" />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-10px' }}>
                <h3 style={{ color: 'white', margin: '0' }}>Drag & drop a</h3>
                <h3 style={{ color: 'white', margin: '0' }}>video to upload</h3>
              </div>
            </div>
            <div style={{ position: 'relative', width: '80%', marginTop: '-170px' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  backgroundColor: 'rgb(60,179,113)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'black',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: 1,
                }}
              >
                OR
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translateY(-50%)',
                  width: 'calc(50% - 15px)',
                  height: '2px',
                  backgroundColor: 'rgb(60,179,113)',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '50%',
                  transform: 'translateY(-50%)',
                  width: 'calc(50% - 15px)',
                  height: '2px',
                  backgroundColor: 'rgb(60,179,113)',
                  zIndex: 0,
                }}
              />
            </div>
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button
                style={{
                  border: '2px solid rgb(60,179,113)',
                  backgroundColor: 'transparent',
                  color: 'rgb(60,179,113)',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '20px', // Add margin between buttons
                }}
                onClick={handleBrowseFromDevice}
              >
                Browse from your device
              </button>
              <button
                style={{
                  border: '2px solid rgb(60,179,113)',
                  backgroundColor: 'transparent',
                  color: 'rgb(60,179,113)',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
                onClick={handleGenerateVideo}
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating...' : 'Generate video with AI'}
              </button>
            </div>
          </>
        ) : (
          <>
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ color: 'white', margin: '0' }}>Uploaded Video</h3>
              <video
                src={uploadedVideo}
                controls
                style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '20px' }}
              />
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 20px' }}>
              <button
                style={{
                  border: '2px solid rgb(60,179,113)',
                  backgroundColor: 'transparent',
                  color: 'rgb(60,179,113)',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
                onClick={handleContinueProcess}
              >
                Continue to Publish
              </button>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <label style={{ color: 'white', marginBottom: '10px' }}>Select Language for Translation:</label>
                <select
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  <option value="">Select a language</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  {/* Add more languages as needed */}
                </select>
              </div>
            </div>
          </>
        )}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="video/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default PopUp;
