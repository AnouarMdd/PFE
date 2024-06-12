import React from "react";
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import CampagnesPage from "./Pages/CampagnesPage";
import VoirPlus from "./Components/Campagnes/VoirPlus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>  
      <div>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home page */}
        <Route path="/CampagnesPage" element={<CampagnesPage />} /> {/* Campagnes page */}
        <Route path="/VoirPlus/:id" element={<VoirPlus />} />
      </Routes>
       </div>
  </Router>
  );
}

export default App;
