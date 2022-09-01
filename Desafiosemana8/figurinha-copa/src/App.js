
import './App.css';

import ListarJogadores from './componentes/jogadores';

function App() {

const jogadores = [

  {name: 'Neymar Jr' ,
  numero: 10 , 
  seleção: 'Brasil',
  photo: "https://placar.abril.com.br/wp-content/uploads/2022/04/000_328H4L7.jpg"},

  {name: 'Messi',
  numero:10,
  seleção:'Argentina',
  photo: "https://static.poder360.com.br/2021/08/messi-contrato-barcelona.jpg"},

{name: 'Mbappe',
numero: 7,
seleção: 'França',
photo: "https://conteudo.imguol.com.br/c/esporte/f5/2022/06/02/mbappe-em-jogo-entre-psg-e-troyes-pelo-campeonato-frances-1654207774076_v2_4x3.jpg"},

{name: "Haaland",
numero: 9,
seleção: 'Noruega',
photo: "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2021/10/haaland.jpg"},

{name: 'Kevin de Bruyne',
numero: 10,
seleção:'Belgica',
photo: "https://s2.glbimg.com/RtR2Vwuf8z6-1h8XJwV5Zsfsqz0=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/A/3/AXKKLjTPWAY8uL8XARPA/000-3242462.jpg"},

{name: 'Manuel Neuer',
numero: 1,
seleção: "Alemanha",
photo: "http://cdn.espn.com.br/image/wide/622_7087d7fa-b672-3cb7-8bf1-50d558539829.jpg"}
]

  return (
    <div className="App">

      <ListarJogadores listaDeJogadores={jogadores}/>
      
 
    </div>
  );
}

export default App;
