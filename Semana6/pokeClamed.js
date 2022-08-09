

let nome;
let btn = document.querySelector("#btn");
btn.addEventListener('click', mostrarDados)

function mostrarDados(){
 
    nome = document.querySelector('#nomePoke').value;

const pokepesq = new XMLHttpRequest();

pokepesq.onload=()=> {

    console.log(pokepesq.response)

    

    let informacoes = document.querySelector('#informacoes')
   
    informacoes.innerHTML = (pokepesq.response.name) + '<br/>' ;
    informacoes.innerHTML += (pokepesq.response.height)+ '<br/>';
    informacoes.innerHTML += (pokepesq.response.weight)+ '<br/>';
    informacoes.innerHTML += JSON.stringify(pokepesq.response.abilities)+ '<br/>';
 
}; pokepesq.onerror = (err) => {
    console.log(err)
}


let pesquisa = `https://pokeapi.co/api/v2/pokemon/${nome}`
pokepesq.open("GET", pesquisa );
pokepesq.responseType = "json";

pokepesq.send();




}







