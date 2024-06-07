import React, { useState } from 'react';
import './App.css';
import screenImage from './images/screen.png';
import uploadImage from './images/upload.png'; // Import the image file

const randomVideos = [
  'https://www.example.com/video1.mp4',
  'https://www.example.com/video2.mp4',
  'https://www.example.com/video3.mp4',
  // Add more video URLs as needed
];

function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState('');

  const handleGenerateVideo = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      const randomIndex = Math.floor(Math.random() * randomVideos.length);
      setGeneratedVideo(randomVideos[randomIndex]);
    }, 3000);
  };

  const handleContinueAndPublish = () => {
    // Logic to continue and publish the video
    console.log("Continue and publish the video");
  };

  const handleGenerateAnotherVideo = () => {
    // Logic to generate another video
    handleGenerateVideo();
  };

  return (
    <div className="container">
      {/* Use the imported image as an <img> element */}
      <div style={{ position: 'relative' }}>
        <img
          src={screenImage}
          alt="Screen"
          style={{
            width: '100%',
            height: '100vh',
          }}
        />
        {/* Square <div> with red borders */}
        <div
          style={{
            backgroundColor: 'rgb(46,56,70)', // Use 'rgb()' as a string
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1010px',
            height: '785px',
            border: '8px solid rgb(46,56,70)',
            borderRadius: '6px',
            textAlign: 'center', // Align the content in the center vertically and horizontally
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {generatedVideo ? (
            // Render the video element if a video has been generated
            <>
              <video controls style={{ maxWidth: '100%', maxHeight: '100%' }}>
                <source src={generatedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div style={{ marginTop: '70px' }}>
                {/* Button for continuing and publishing the video */}
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
                    marginRight: '20px',
                  }}
                  onClick={handleContinueAndPublish}
                >
                  Continue and Publish
                </button>
                {/* Button for generating another video */}
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
                  onClick={handleGenerateAnotherVideo}
                >
                  Generate Another Video
                </button>
              </div>
            </>
          ) : (
            // Render the upload image and button if no video has been generated
            <>
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
              >
                &times;
              </button>
              <div style={{ marginTop: '20px' }}>
                <img src={uploadImage} style={{ maxWidth: '70%', maxHeight: '50%', marginBottom: '0px', marginTop: '10px' }} alt="Upload" />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-10px' }}>
                  <h3 style={{ color: 'white', margin: '0' }}>Drag & drop a</h3>
                  <h3 style={{ color: 'white', margin: '0' }}>video to upload</h3>
                </div>
              </div>
              {/* Add a green line below the <h3> */}
              <div style={{ position: 'relative', width: '80%', marginTop: '-180px' }}>
                {/* Add the circle and "OR" text */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '25px', // Adjust the width to make the circle smaller
                    height: '25px', // Adjust the height to make the circle smaller
                    borderRadius: '50%',
                    backgroundColor: 'rgb(60,179,113)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    fontSize: '12px', // Adjust the font size to make the text smaller
                    fontWeight: 'bold',
                    zIndex: 1,
                  }}
                >
                  OR
                </div>
                {/* End of the circle and "OR" text */}
                {/* Add the green lines */}
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
                    backgroundColor: 'green',
                    zIndex: 0,
                  }}
                />
                {/* End of the green lines */}
              </div>
              {/* End of the green line and circle container */}
              {/* Add spacing between the circle and the button */}
              <div style={{ marginTop: '40px' }}>
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
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
