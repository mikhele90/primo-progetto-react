import React from "react";

function NavBar(){
    return(
        <nav className="navbar">
            <ul>
                <li><link to="/">HOME</link></li>
                <li><link to="/prodotti">Prodotti</link></li> 
                <li><link to="/contatti">Contatti</link></li>
            </ul>
        </nav>
    )
};

export default NavBar;