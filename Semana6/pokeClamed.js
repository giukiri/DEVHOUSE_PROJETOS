
const pokemonNome = document.querySelector('.pokemon_name');
const form = document.querySelector('.form');
const pokeImagem =  document.querySelector('.pokemon_image');
const informacoes = document.querySelector('.informacoes');
let btn = document.querySelector("#btn");
btn.addEventListener('click', mostrarDados)

function mostrarDados(){
 
  const nome = document.querySelector('#nomePoke').value;

const pokepesq = new XMLHttpRequest();

pokepesq.onload=()=> {

    console.log(pokepesq.response);

    pokeImagem.src = pokepesq.response['sprites']['versions']['generation-v']['black-white']
['animated']['front_default'];
    pokemonNome.innerHTML = (pokepesq.response.name) 
    
    informacoes.innerHTML += (pokepesq.response.height)+ '<br/>';
    informacoes.innerHTML += (pokepesq.response.weight)+ '<br/>';
    informacoes.innerHTML +=  pokepesq.response['abilities']['0']['ability']['name']   + '<br/>';
    informacoes.innerHTML +=  pokepesq.response['abilities']['1']['ability']['name']   + '<br/>';
    informacoes.innerHTML +=  pokepesq.response['abilities']['2']['ability']['name']   





 
}; pokepesq.onerror = (err) => {
    console.log(err)
}


let pesquisa = `https://pokeapi.co/api/v2/pokemon/${nome}`
pokepesq.open("GET", pesquisa );
pokepesq.responseType = "json";

pokepesq.send();


}










