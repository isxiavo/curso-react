import React, { useState } from "react";
import Tab from "./Tab";
import Entrada from "./Entrada";
import Botao from "./Botao";
import "./Mega.css";

export default (props) => {
  const [nums, setNums] = useState();
  let lista = [];

  function fornecerInfo(newNums) {
    setNums(newNums);
  }

  function geradorNumeros(qtde) {
    if (qtde < 1) {
      qtde = 1;
    }
    if (qtde > 6) {
      qtde = 6;
    }
    for (let i = 0; i < qtde; i++) {
      let num = Math.round(Math.random() * (60 - 1) + 1);
      lista[i] = num;
    }
    console.log(qtde);
    console.log(lista);
  }

  return (
    <div className="Mega">
      <Tab numeros={lista}></Tab>
      <Entrada setNums={fornecerInfo}></Entrada>
      <Botao quandoClicar={geradorNumeros(nums)}></Botao>
    </div>
  );
};
