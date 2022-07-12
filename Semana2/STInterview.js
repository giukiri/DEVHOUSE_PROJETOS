
alert("Você deve classificar a série como ruim,boa ou exclente!");

var participantes = 0 ;
var resposta;
var opçãoRuim = 0;
var opçãoBoa = 0;
var opçãoExcelente = 0;

while(participantes < 4){ 
    var resposta = window.prompt("O que você achou de ST?"); 
switch(resposta){
    case "ruim" :
        opçãoRuim++;
        break;

    case "boa" : 
        opçãoBoa++;
        break;

    case "excelente" :
       opçãoExcelente++;
        break;
    
    default: 
        alert("Resposta Inválida, digite novamente a sua resposta");
        resposta;

    if(resposta == "ruim"){
        opçãoRuim++;
        
    }

    if(resposta == "boa"){
        opçãoBoa++;
    }

    if(resposta == "excelente"){
        opçãoExcelente++;
    }

}

participantes++;

}

console.log("Quantidade de pessoas que classificou ST como ruim :" + opçãoRuim);
console.log("Quantidade de pessoas que classificou ST como boa:" + opçãoBoa);
console.log("Quantidade de pessoas que classificou ST como excelente :" + opçãoExcelente);











