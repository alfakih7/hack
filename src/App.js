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
            backgroundColor: 'rgb(47, 79, 79)', // Use 'rgb()' as a string
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '580px',
            border: '8px solid rgb(47, 79, 79)',
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
              <div style={{ marginTop: '20px' }}>
                {/* Button for continuing and publishing the video */}
                <button
                  style={{
                    border: '2px solid #00FF00',
                    backgroundColor: 'transparent',
                    color: '#00FF00',
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
                    border: '2px solid #00FF00',
                    backgroundColor: 'transparent',
                    color: '#00FF00',
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
                  backgroundColor: 'white',
                  color: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  fontSize: '18px',
                }}
              >
                &times;
              </button>
              <img src={uploadImage} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="Upload" />
              <h3>Drag & drop a video to upload</h3>
              <button
                style={{
                  marginTop: '20px',
                  border: '2px solid #00FF00',
                  backgroundColor: 'transparent',
                  color: '#00FF00',
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
