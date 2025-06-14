import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Prodotti from "./pages/ProdottiPage";
import Contatti from "./pages/ContattiPage";
import Footer from "./components/Footer"; 

function App(){
  const appCompanyName = "Ricette Intelligenti SRL";

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar /> {/* NavBar sarà sempre visibile */}

        <Routes>
          {/* Ora HomePage conterrà Header, SearchBar e le ricette */}
          <Route path="/" element={<HomePage />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>

      <Footer companyName={appCompanyName} /> {/* Footer sarà sempre visibile */}
    </div>
    </BrowserRouter>
  );
}

export default App;