import React from "react";

function Aleatorio() {

  const min = 0;
  const max = 10;
  const r = Math.round(Math.random() * (max - min) + min);
  return (
    <div>
      <h2>Aleatorio</h2>
      <span>{r}</span>
    </div>
    
  );
}

export default Aleatorio;