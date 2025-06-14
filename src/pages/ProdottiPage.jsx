import react from "react";
import Prodotto from "../components/Prodotto";

function handleClick(){
    alert('ciao coglione')
};

function handleChange(e){
    console.log(e.target.value);
};

function handleSubmit(e){
    e.preventDefault();
    console.log(e.target.value);
}

function Prodotti(){
    const products = [
        {
            id: 0,
            title: 'Patatine',
            description: 'Fritte e strafritte',
            isGood: true
        },
        {
            id: 1,
            title: 'Sassi',
            description: 'Troppo croccanti',
            isGood: false
        },
        {
            id: 2,
            title: 'Parmigiana',
            description: 'Melanzane, sugo e...',
            isGood: true
        },
        {
            id: 3,
            title: 'Biscotti',
            description: 'Cotti due volte',
            isGood: true
        },
        {
            id: 4,
            title: 'Farina',
            description: 'Da consumarsi previa cottura',
            isGood: false
        },
    ];

    return(
        <>
        <h1>Prodotti</h1>
        <div style={{
            display: 'flex',
            flexDirection: "row",
            flexWrap: "wrap", // Aggiunto per un layout migliore
            gap: '20px' // Aggiunto per spazio tra i prodotti
        }}>
        {products.map(product => (
            <Prodotto 
            key={product.id}
            title={product.title}
            description={product.description}
            isGood={product.isGood}
            />
        ))}
        </div>
        <button 
        onClick={handleClick} 
        style={{
            margin: '30px',
            padding: '10px 15px',
            gap: '15px',
            backgroundColor: '#007ACC',
            outline: '3pxrgb(43, 139, 204)',
            borderRadius: '5px',
        }}
        >
        BIG BUTTON
        </button>

        <input type="text" onChange={handleChange}/>
        <form onSubmit={handleSubmit}>
            <button type="submit">Invia</button>
        </form>
        </>
    )
};

export default Prodotti;