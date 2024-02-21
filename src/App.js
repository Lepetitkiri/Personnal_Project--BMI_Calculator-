import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation des routes 
import Error from './Pages/Error'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

function App() {
  return (
    <BrowserRouter basename="/Personnal_Project--BMI_Calculator-">
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
