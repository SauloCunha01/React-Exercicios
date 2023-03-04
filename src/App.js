import './App.css';
import BoasVindas from './Components/BoasVindas'
import Card from './Components/Card';
import Componente10 from './Components/Componente10';
import TabelaProduto from './Components/TabelaProduto';
function App() {
  return (
    <div className="App" >
      <div className='Titulo'>
        <BoasVindas nome="Saulo Cunha de Sousa" />
      </div>
      <div className='Cards'>
        <Card titulo="#EXERCÍCIO 10" cor="#fbeea8">
          <Componente10 ></Componente10>
        </Card>
        <Card titulo="#EXERCÍCIO 02" cor="#f68c68">
          <TabelaProduto ></TabelaProduto>
        </Card>
      </div>
    </div>
  );
}

export default App;
