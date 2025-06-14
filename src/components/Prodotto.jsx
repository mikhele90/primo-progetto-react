import { Children } from "react";

function Prodotto({ title, description, isGood }){

    return (
        <div style={{
            backgroundColor: "orange",
            borderRadius: '25px',
            height: '300px',
            width: '300px',
            margin: '5px',
            padding: '1px',
            display: 'flex',
            flexDirection: "column",
        }}>
            <h3>{title}</h3>
            <p>{description}</p><br />
            {isGood ? <span>&#128527; Good</span> :
            <span>&#128533; Not Good</span>}
        </div>
    )
}

export default Prodotto;