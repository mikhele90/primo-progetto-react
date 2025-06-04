import React from 'react';

function SearchBar(props) {
    const { searchTerm, onSearchChange } = props;

    return (
        <div className='search-bar'>
            <input
            type='text'
            placeholder='Cerca ricette...'
            value={searchTerm} // L'input è "controllato" dal valore della prop
            onChange={(e) => onSearchChange(e.target.value)} // Quando l'input cambia, chiamiamo la funzione passata come prop
            />
        </div>
    )
}

export default SearchBar;