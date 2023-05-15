import produtos from "../../data/produtos";

const tab = produtos.map((produto) => {
  return (
    <tr>
      <td>{produto.id}</td>
      <td>{produto.nome}</td>
      <td>{produto.preco}</td>
    </tr>
  );
});

export default (props) => {
  return (
    <div>
      <table border="1" style={{width:"100%", height:"100%"}} key={props.id}>
        <th>ID</th>
        <th>PRODUTO</th>
        <th>PRECO</th>
        {tab}
      </table>
    </div>
  );
};
