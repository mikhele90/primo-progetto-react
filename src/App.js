import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/HomePage"; //
import Prodotti from "./pages/ProdottiPage";
import Contatti from "./pages/ContattiPage";

import './App.css';
import Footer from "./components/Footer"; 
import HomePage from "./pages/HomePage";

function App(){
  const appCompanyName = "Ricette Intelligenti SRL";



  return (
    <BrowserRouter>
    <div className="App">
      <NavBar /> {/* NavBar sarà sempre visibile */}

        <Routes>
          {/* Ora HomePage conterrà Header, SearchBar e le ricette */}
          <Route path="/" element={<Home />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>

      <Footer companyName={appCompanyName} /> {/* Footer sarà sempre visibile */}
    </div>
    </BrowserRouter>
  );
}

export default App;