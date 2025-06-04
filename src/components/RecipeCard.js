import React, { useState } from 'react';

function RecipeCard(props) {
    const { name, description, imageUrl, ingredients, instructions } = props;

    const [showDetails, setShowDetails] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }
    const likesCounter = () => {setLikesCount(likesCount + 1)};

    // COMPONENTE CARD
    return (
        <div className='recipe-card'>

            <img src={imageUrl} alt={name} className='recipe-image' />

            <div className='recipe-info'>
                <h2>{name}</h2>
                <p>{description}</p>

                <button onClick={likesCounter}>Mi Piace! ({likesCount})</button> 

                <button onClick={toggleDetails} className='recipe-button'> {showDetails ? 'Nascondi dettagli' : 'Vedi Ricetta'} </button>

                {showDetails && (
                    <div className="recipe-details">
                        <h3>Ingredienti:</h3>
                        <ul>
                            {Array.isArray(ingredients) && ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <h3>Istruzioni:</h3>
                        <p>{instructions}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecipeCard;