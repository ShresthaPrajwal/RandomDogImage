import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DogImagePage from './pages/DogImagePage';
import CatImagePage from './pages/CatImagePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DogImagePage />} />
        <Route path="/cat" element={<CatImagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
