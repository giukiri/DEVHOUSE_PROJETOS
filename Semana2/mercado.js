
 
alert("Essa é uma lista de itens disponiveis no mercado, você deve escolher entre os 5 seguintes itens: ");
alert ("Itens disponiveis: Hortifruti , Laticínios , carnes, peixes e aves");



function listarProdutos (produtos) {
    
   tiposDeProdutos = (Hortifruti,Laticíneos,carnes,peixes,aves);

   newlist = new lista ();
   
 for(let Hortifruti of tiposDeProdutos){
 window.prompt("Adicionar Hortifruti ao carrinho de compras");
 if(yes){
   newlist.Add(Hortifruti);
 } else {
     newlist.Add();
 }
   
}
}
//  // var produtosQuantidadesHortifruti= window.prompt("Qual a quantidade desse produto você gostaria?");
//    //console.log(produtosQuantidadeHortifruti);

   
//     resposta2 = window.confirm("adicionar Laticíneos ao carrinho de compras");
// if(resposta2 == true){
//     let Laticíneos = window.prompt("Qual a quantidade desse produto você gostaria?");
//     console.log(Laticíneos);
//  } else {
//    let Laticíneos = 0;
//  }



//     resposta3 = window.confirm("adicionar carnes ao carrinho de compras");

// if(resposta3 == true){
//  let carnes = window.prompt("Qual a quantidade desse produto você gostaria?");
//     console.log(carnes);
//  } else {
//   let carnes =0;
//  }



//     resposta4 = window.confirm("adicionar peixes ao carrinho de compras");
// if (resposta4 == true){
//   let peixes = window.prompt("Qual a quantidade desse produto você gostaria?");
//     console.log(peixes);
//  } else {
//     let peixes =0;
//  }




//     resposta5 = window.confirm("adicionar aves ao carrinho de compras");
// if(resposta5 == true){
//   let  aves = window.prompt("Qual a quantidade desse produto você gostaria?");
//     console.log(aves);
//  } else {
//    let aves=0;
//  }

//  document.write(produtos);
// }
// produtos ++;


 

alert("Essa é uma lista de itens disponiveis no mercado, você deve escolher entre os 5 seguintes itens: ");
alert ("Itens disponiveis: Hortifruti , Laticínios , carnes, peixes e aves");

 Hortifruti=window.confirm("Adicionar Hortifruti ao carrinho de compras");
 Laticineos=window.confirm("Adicionar Laticineos ao carrinho de compras");
 carne=window.confirm("Adicionar carne ao carrinho de compras");
 peixe=window.confirm("Adicionar peixe ao carrinho de compras");
aves=window.confirm("Adicionar aves ao carrinho de compras");


function listarProdutos (lista=[]){
listarProdutos = [Hortifruti,Laticineos,carnes,peixes,aves];

if(window.confirm == true){
    
     Hortifruti = lista.Add(item);
     Laticineos=lista.Add(item);
     carnes = lista.Add(item);
     peixes = lista.Add(item);
     aves = lista.Add(item);

}

    document.write(lista);
   // let quantidade = "Os itens da lista são" + lista + "a quantidade dos produtos escolhidos foi:" ;
}













