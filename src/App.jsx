import React from 'react';
import gambar1 from './assets/download.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Angga Widianto</h1>
      <img src={gambar1} alt="Gambar 1" />
      <img src={gambar1} alt="Gambar 2" className="mirror" />
    </div>
  );
}

export default App;
