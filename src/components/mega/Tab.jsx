import React from "react";

export default props => {

    return (
        <div style={{display:"flex",justifyContent:'center'}}>
            {props.numeros.map((x) => (
                <div className="numero">{x}</div>
            ))}
        </div>
    )
}