import Prodotto from "../components/Prodotto";

function Prodotti(){
    return(
        <>
        <h1>Prodotti</h1>
        <div style={{
            display: 'flex',
            flexDirection: "row",
        }}>
        <Prodotto title='Primo' description='Questa è la descrizione del primo prodotto' isGood={true}/>
        <Prodotto title='Secondo' description='Questa è la descrizione del secondo prodotto' isGood={false}/>
        <Prodotto title='Terzo' description='Questa è la descrizione del terzo prodotto' isGood={true}/>
        <Prodotto title='Quarto' description='Questa è la descrizione del quarto prodotto' isGood={true}/>
        <Prodotto title='Quinto' description='Questa è la descrizione del quinto prodotto' isGood={false}/>
        </div>
        </>
    )
};

export default Prodotti;