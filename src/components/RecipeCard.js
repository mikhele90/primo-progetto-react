import React, { useState } from 'react';


function RecipeCard(props) {
    const { name, description, imageURL, ingredients, instructions } = props;

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <div className='recipe-card'>
            <img src={imageURL} alt={name} className='recipe-image' />
            <div className='recipe-info'>
                <h2>{name}</h2>
                <p>{description}</p>
                <button onClick={toggleDetails} className='recipe-button'> {showDetails ? 'Nascondi dettagli' : 'Vedi Ricetta'} </button>



                {showDetails && (
                    <div className="recipe-details">
                        <h3>Ingredienti:</h3>
                        <ul>
                            {/* Assicurati che ingredients sia un array prima di mapparci sopra */}
                            {ingredients && ingredients.map((item, index) => (
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