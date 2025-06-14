import React, { useState, useEffect } from 'react';

function RecipeCard(props) {
    const { name, description, imageUrl, ingredients, instructions } = props;

    const [showDetails, setShowDetails] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }
    const likesCounter = () => {setLikesCount(likesCount + 1)};



    useEffect(() =>{
        if (showDetails){
            document.title = `${name}`;
        }
        else {
            document.title = 'Ricettario';
        }

        // Funzione di cleanup
        return () => {
            // Quando showDetails cambia da true a false, o il componente viene smontato,
            // ripristiniamo il titolo predefinito per evitare che rimanga il titolo della ricetta
            document.title = 'Ricettario';
        };
    }, [showDetails, name]); // <--- Dipendenze: l'effetto si riesegue quando showDetails o name cambiano


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