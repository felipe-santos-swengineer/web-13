import { useState } from "react"

export default function Mouse(){

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
    }

    function whenMove(event){
        setX(event.clientX);
        setY(event.clientY);
    }

    function mudarRender(){
        window.location = "/";
    }
    
    return(
        <div style = {style} onMouseMove={(event) => whenMove(event)}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
            <br></br> 
            <button onClick={mudarRender}>Mudar componente</button>
        </div>
    )
}