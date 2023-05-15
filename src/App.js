import "./App.css";
import Component1 from "./components/Component1";
import FragmentTest from "./components/FragmentTest";
import Aleatorio from "./components/Aleatorio";
import Card from "./components/card/Card";
import Familia from "./components/Familia";
import FamiliaMembro from "./components/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProduto from "./components/repeticao/TabelaProduto";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";


function App() {
  return (
    <div className="App">
      <div className="Cards">
        <Card titulo="#01 - Componente" color="#982395">
          <Component1 titulo="sdfdsf" subtitulo="fdsfds"></Component1>
        </Card>
        <Card titulo="#02 - Fragmento" color="#483095">
          <FragmentTest ></FragmentTest>
        </Card>
        <Card  titulo="#03 - Aleatório" color="#102982">
          <Aleatorio></Aleatorio>
        </Card>
        <Card  titulo="#04 - Familia" color="#224082">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>
        <Card  titulo="#04 - Repetição" color="#32382">
          <ListaAlunos></ListaAlunos>
        </Card>
        <Card  titulo="#05 - Desafio Tabela" color="#853823">
          <TabelaProduto></TabelaProduto>
        </Card>
        <Card  titulo="#06 - Renderização Condicional" color="#653423">
          <ParOuImpar></ParOuImpar>
          <UsuarioInfo usuario ={{nome: 'Fernando'}}></UsuarioInfo>
          <UsuarioInfo usuario ={{email: 'fer@gmail.com'}}></UsuarioInfo>
          <UsuarioInfo></UsuarioInfo>
        </Card>
        <Card  titulo="#07 - Comuncação Direta" color="#791523">
          <DiretaPai></DiretaPai>
        </Card>
        <Card  titulo="#08 - Comuncação Direta" color="#488227">
          <IndiretaPai></IndiretaPai>
        </Card>
        <Card  titulo="#09 - Componente Controlado (INPUT)" color="#623825">
          <Input></Input>
        </Card>
        <Card  titulo="#10 - Contador" color="#6855">
          <Contador numeroInicial={0}></Contador>
        </Card>
        <Card  titulo="#11 - Desafio - Mega" color="#8859">
          <Mega />
        </Card>
      </div>
    </div>
  );
}

export default App;
