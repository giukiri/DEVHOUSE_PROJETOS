
const nome =  window.prompt("Qual é o seu nome?");
const sobrenome = window.prompt("Qual é o seu sobrenome?");
const ano  = parseFloat( window.prompt("Que ano você nasceu?"));
let x = window.confirm("Você ja fez aniversário neste ano?");



function determinarIdade (idade){
    if(x === true){
     idade = 2022 - ano;
} else{

idade = 2021 - ano
}
return idade
}



console.log(` Eu ${nome} ${sobrenome} possuo ${determinarIdade(ano)}`)









