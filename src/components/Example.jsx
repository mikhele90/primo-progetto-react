import React from "react";
import { useState, useEffect } from "react";

function Example(){
    const [count, setCount] = useState(0);
    const [aggiorna, setAggiorna] = useState(0);

    useEffect(() => {
        localStorage.setItem('count', count.toString());
        document.title = `Count: ${count}`;
    }, [aggiorna]);

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={() => setCount(count + 1)}>+ 1</button><br />
            <button onClick={() => setAggiorna(count)}>Aggiorna Title</button>
        </div>
    )
}

export default Example;