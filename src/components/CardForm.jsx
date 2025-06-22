import React from "react";
import { useState } from "react";


function CardForm({ addProd }){

    const [formData, setFormData] = useState ({
        name: '',
        description: '',
        isGood: false
    })


    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target
        const inputValue = type == 'checkbox' ? checked : value
        setFormData({
            ...formData,
            [name]: inputValue,
        })
    }

     const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Math.random(),
            title: formData.name,
            description: formData.description,
            isGood: formData.isGood
        }
        setFormData({
            name: '',
            description: '',
            isGood: false
        })

        addProd(newProduct);
    }

    return (
        <form onSubmit={handleSubmit}>
        <div style={{
            backgroundColor: "crimson",
            borderRadius: '25px',
            height: '300px',
            width: '350px',
            margin: '25px 5px',
            padding: '1px',
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px'
        }}>
            <div>
                <label>Nome prodotto: </label><br></br>
                <input type='text' 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange}></input>
            </div>

            <div>
                <label>Descrizione: </label><br></br>
                <textarea cols="30" rows="5"
                name="description" 
                value={formData.description} 
                onChange={handleInputChange}></textarea>
            </div>

            <div>
                <label>Selezionare if is good</label><br></br>
                <input type='checkbox' 
                name="isGood" 
                checked={formData.isGood} 
                onChange={handleInputChange}></input>
            </div>

            <button type="submit">Aggiungi Card</button>
        
        </div>
        </form>
    );
}

export default CardForm;