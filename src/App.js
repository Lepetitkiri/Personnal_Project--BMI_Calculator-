import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation des routes 
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter basename="/Personnal_Project--BMI_Calculator-">
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
