import React from "react";
import If from "./If";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja bem vindo <strong>Amigão</strong>
      </If>

      {/* <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>
            <Else>
                Seja Bem Vindo <strong>Amigão</strong>
            </Else>
      </If> */}
    </div>
  );
};
