import { useState } from "react";

export default function Mouse() {

    const [contador, setContador] = useState(0);

    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
    }
    
    function contaIncremento(){
        setContador((prevState) => prevState + 1);
    }

    function contaDecremento(){
        setContador((prevState) => prevState - 1);
    }
    
    function mudarRender(){
        window.location = "/coords";
    }


    return (
        <div style={style}>
            <h1>{contador}</h1>
            <button onClick={contaIncremento}>+</button>
            <button onClick={contaDecremento}>-</button>
            <br></br>
            <button onClick={mudarRender}>Mudar componente</button>
        </div>
    )
}