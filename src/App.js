import React from 'react';
import './App.css';

const App = () => {
  return (
    <div
      style={{
        maxWidth: '500px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      {/* Logo */}
      <img
        src="cipher.jpg"
        alt="Cipher Logo"
        style={{ width: '180px', marginBottom: '25px' }}
      />

      {/* Title */}
      <h1
        style={{
          fontSize: '32px',
          marginBottom: '10px',
          fontWeight: '700',
          letterSpacing: '1px',
        }}
      >
        Cipher
      </h1>

      {/* Description */}
      <p
        style={{
          fontSize: '18px',
          color: '#666',
          lineHeight: '1.6',
          margin: '0 0 25px 0',
        }}
      >
        Decentralised platform for content creation and consumption. Cipher will be live soon, stay tuned!
      </p>

      {/* Coming Soon Badge */}
      <div
        style={{
          display: 'inline-block',
          padding: '12px 25px',
          borderRadius: '30px',
          background: '#4A90E2',
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          marginTop: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      >
        Coming Soon
      </div>
    </div>
  );
};

export default App;
