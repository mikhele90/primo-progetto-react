import React from 'react';

function RecipeCard(props){
    const { name, description, imageURL } = props;

    return (
        <div className='recipe-card'>
            <img src={imageURL} alt={name} className='recipe-image'/>
            <div className='recipe-info'>
                <h2>{name}</h2>
                <p>{description}</p>
                <button className='recipe-button'>Vedi ricetta</button>
            </div>
        </div>
    );
}

export default RecipeCard;