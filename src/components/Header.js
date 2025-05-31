import React from 'react';

function Header(props){
    // const title = props.title;
    // const tagline = props.tagline;
    // OPPURE, ancora meglio:
    const { title, tagLine } = props;
    const currentYear = new Date().getFullYear();

    return (
        <header className='app-header'>
            <h1>{title}</h1>
            <p>{tagLine}</p>
            <small>Anno Corrente: {currentYear}</small>
        </header>
    )
}

export default Header;