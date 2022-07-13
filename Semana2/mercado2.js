
alert("Essa é uma lista de itens disponiveis no mercado, você deve escolher entre os 5 seguintes itens: ");
alert("Escolha seus produtos");
   

var produto1 = window.confirm("Você gostaria de levar Hortifruti?");
var produto2 = window.confirm("Você gostaria de levar Laticineos?");
var produto3 = window.confirm("Você gostaria de levar carnes?");
var produto4 = window.confirm("Você gostaria de levar peixes?");
var produto5 = window.confirm("Você gostaria de levar aves?");   

if(produto1 === true){            
       console.log("Hortifruti");
       document.write("Hortifruti");
       var produto1 = "Hortifruti"
} else {
    var produto1=[];
}

if(produto2 === true){            
    console.log("Laticineos");
    document.write("<br />" + "Laticineos");
    var produto2 = "Laticineos"
} else {
    var produto2 = [];
}

if(produto3 === true){            
    console.log("carnes");
    document.write("<br />" +"carnes");
    var produto3 = "carnes"
} else{
    var produto3 = [];
}

if(produto4 === true){            
    console.log("peixe");
    document.write("<br />" +"peixe");
    var produto4 = "peixe"
} else {
    var produto4 = [];
}

if(produto5 === true){            
    console.log("aves");
    document.write("<br />" +"aves");
    var produto5 = "aves"
} else{
    var produto5 = [];
}

var listaProdutos = [produto1,produto2,produto3,produto4,produto5];
    

alert("Agora é necessário que você escolha a quantidade do produto que irá levar");


if (produto1 != []){
    var quantidadeDeProduto1 = Number (window.prompt("Quanto você gostaria de levar de Hortifruti?"));
    console.log("A quantidade de Hortifruti solicitada foi: " +quantidadeDeProduto1);

} else{
    var quantidadeDeProduto1 = [];
}

if ( produto2 !=0){
    var quantidadeDeProduto2 = Number(window.prompt("Quanto você gostaria de levar de Laticineos?"));
    console.log("A quantidade de Laticineos solicitada foi: " +quantidadeDeProduto2);
} else{
    var quantidadeDeProduto2 = [];
}

if ( produto3 !=0){
    var quantidadeDeProduto3 = Number(window.prompt("Quanto você gostaria de levar de carnes?"));
    console.log("A quantidade de carnes solicitada foi: " +quantidadeDeProduto3);
} else{
    var quantidadeDeProduto3 = [];
}

if ( produto4 !=0){
    var quantidadeDeProduto4 = Number(window.prompt("Quanto você gostaria de levar de peixes?"));
    console.log("A quantidade de peixes solicitada foi: " +quantidadeDeProduto4);
} else{
    var quantidadeDeProduto4 = [];
}

if ( produto5 !=0){
    var quantidadeDeProduto5 = Number(window.prompt("Quanto você gostaria de levar de aves?"));
    console.log("A quantidade de aves solicitada foi: " + quantidadeDeProduto5);
} else {
    var quantidadeDeProduto5 = [];
}

var quantidadeDeProduto = [quantidadeDeProduto1,quantidadeDeProduto2,quantidadeDeProduto3,quantidadeDeProduto4,quantidadeDeProduto5];

   { document.write("<br />" + "Sua lista de itens é : " + listaProdutos + "<br />" + "<td>" + " a quantidade de produtos que você escolheu é : " + " " + quantidadeDeProduto + "</td>"); }

//function determinarSeACompraEstaCorreta(i) {
  //  var i = window.confirm("A sua compra está correta?");

    //if (i === true) {
     //   document.write("Ok! Você receberá essa compra em breve");
    //} else {
      //  return listarProdutos;
    //}

//}
































