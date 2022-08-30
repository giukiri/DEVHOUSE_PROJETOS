
import './App.css';
// import Titulo from './componentes/titulo';
// import Texto from './componentes/texto';
// // import Soma from './componentes/soma';
// import Btn from './componentes/botao';
import Post from './componentes/post';

function App() {
  return (
  
  <div >
    {/* <Titulo />
    <Texto />
    <p style={{backgroundColor : "white"}}>Texto a mais</p>

    {/* <Soma  
    num1 =  {window.prompt ( " digite o primeiro numero a ser somado ") }
    num2 =  {window.prompt ("digite o segundo numero a ser somado ")  }
    /> */}

    <Post fotoPerfil="https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg"
          nomeUsuario={'Stitch'}
          tempoDePost = "5 minutos"

          textoDescricao={'blablablablbablalbalballablballbalbl'}
    />
   

  </div>
  );
}

export default App;
