
import './App.css';
import Titulo from './componentes/titulo';
import Texto from './componentes/texto';
import Soma from './componentes/soma';


function App() {
  return (
  
  <div>
    < Titulo />
    <Texto />
    <p style={{backgroundColor : "red"}}>Texto a mais</p>
    <Soma  
    num1 =  {window.prompt ( " digite o primeiro numero a ser somado ") }
    num2 =  {window.prompt ("digite o segundo numero a ser somado ")  }
    />

   

  </div>
  );
}

export default App;
