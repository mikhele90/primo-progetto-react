import React from "react";

function Footer(props){
    const {companyName} = props;
    const currentYear = new Date().getFullYear();

    return(
        <footer className="app-footer">
        <p>&copy; {currentYear} La Mia Lista di Ricette. Tutti i diritti riservati. {companyName}</p>
        </footer>
    )
}

export default Footer;