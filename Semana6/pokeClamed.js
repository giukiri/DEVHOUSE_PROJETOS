
const pokeReq = new XMLHttpRequest();

pokeReq.onload=()=> {
 
     console.log(pokeReq.response.name);
     console.log(pokeReq.response.weight);
     console.log(pokeReq.response.height);
 
}

pokeReq.open("GET", "https://pokeapi.co/api/v2/pokemon/eevee");
pokeReq.responseType = "json";

pokeReq.send()









