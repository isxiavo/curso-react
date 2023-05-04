import "./App.css";
import Component1 from "./components/Component1";
import FragmentTest from "./components/FragmentTest";
import Aleatorio from "./components/Aleatorio";
import Card from "./components/card/Card";


function App() {
  return (
    <div className="App">
      <div className="Cards">
        <Card titulo="Componente" color="#982395">
          <Component1 titulo="sdfdsf" subtitulo="fdsfds"></Component1>
        </Card>
        <Card titulo="Fragmento" color="#483095">
          <FragmentTest ></FragmentTest>
        </Card>
        <Card  titulo="Aleatório" color="#102982">
          <Aleatorio></Aleatorio>
        </Card>
      </div>
    </div>
  );
}

export default App;
