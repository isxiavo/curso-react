import React from "react";
import alunos from "../../data/alunos";

const lista = alunos.map((aluno) => {
    return (
        <li key={aluno.id}>
            {aluno.id}) {aluno.nome} - {aluno.nota}
        </li>
    )
})

export default (props) => {
  return (
    <div>
      <ul>
        {lista}
      </ul>
    </div>
  );
};
