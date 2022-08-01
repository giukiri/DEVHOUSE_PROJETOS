
import criarTabela from './ex7p2.js' 

const cadastro = document.getElementById('cadastro')
const card = document.getElementById('card')
const nome = document.getElementById('nome')
const imagem = document.getElementById('imagem')
const descricao = document.getElementById('descricao')


// const nomePos = document.getElementById('nomePos');
// const imagemPos = document.getElementById('imagemPos');
// const descricaoPos = document.getElementById('descricaoPos')

let usuario  = {};

cadastro.addEventListener('submit', () =>{

    const nomePos = nome.value;
     const imagemPos = imagem.value; 
    const descricaoPos = descricao.value

    console.log(nomePos,imagemPos,descricaoPos);
    
    usuario = {
        nome : nomePos,
        imagem : imagemPos,
        descricao: descricaoPos

        
    };

    console.log(usuario);
   
    card.innerHTML = criarTabela(usuario.nome,usuario.imagem,usuario.descricao);

 
    });


   

















    























