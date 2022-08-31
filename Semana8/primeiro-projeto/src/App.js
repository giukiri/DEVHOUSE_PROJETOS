
import './App.css';
import ListaContatos from './componentes/listacontatos';

export default function App () {

  const contatosDisponiveis = [
    { name: '1' ,photo:'ma', description: 1 , id: 1},
    { name: 2, photo: 'bla', description: 2 , id: 2},
    { name: 3, photo:'blah', description: 3 , id:3},
  ];

  return (
    <>

    <ListaContatos listaDeContatos= {contatosDisponiveis} />
    </>
  );

}
 