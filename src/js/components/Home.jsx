import React from "react";
import { useState } from "react";
import './Home.css';


function TrafficLight(){
    const [color, setColor] = useState(["red", "yellow", "green"]);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const changeLight = () => {
        setCurrentColorIndex((currentColorIndex + 1) % color.length);
    }

    const addColor = (newColor) => {
        setColor([...color, newColor]);
    }

    return(
    <>
        <div className="traffic-light-container">
            <div className="traffict-light">
                {color.map((color,index)=>(
                    <div key={index} className={`light ${color} ${index === currentColorIndex ? "active" : ""}`}></div>
                ))}
            </div>
            <button onClick={changeLight}>Cambiar Luz</button>
            <button onClick={() => addColor("purple")}>Agregar Purpura</button>

        </div>
    </>
    )

}

export default TrafficLight

