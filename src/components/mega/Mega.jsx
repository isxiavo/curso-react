import React, { useState } from "react";
import Tab from "./Tab";
import Entrada from "./Entrada";
import Botao from "./Botao";
import "./Mega.css";

export default (props) => {
  let nums = 0
  const [lista, setLista] = useState([])

  function geradorNumeros() {
    for (let i = 0; i < nums; i++) {
      let num = Math.round(Math.random() * (60 - 1) + 1);
      setLista((old) => [...old, num])
    }
  }

  function fornecerInfo(newNums) {
    nums = newNums;
  }
  return (
    <div className="Mega">
      <Tab numeros={lista}></Tab>
      <Entrada sendInfo={fornecerInfo}></Entrada>
      <Botao quandoClicar={geradorNumeros}></Botao>
    </div>
  );
}