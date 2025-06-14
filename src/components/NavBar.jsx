import React from "react";
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/prodotti">Prodotti</Link></li> 
                <li><Link to="/contatti">Contatti</Link></li>
            </ul>
        </nav>
    )
};

export default NavBar;