

 
var lista = [];

 do {
      var x;
      x = window.prompt("Digite um número, para terminar digite S ");
      lista.push(x);
 } while (x != 'S');


 
 function imprimirElementosDaLista(lista){

 for(let item of lista){
       
    console.log(item);
 
 }

 return lista

 }

 console.log(imprimirElementosDaLista(lista));

 function determinarQuantidadeDaLista(lista){
 let quantidade = "A quantidade de elementos é : " + lista.length 
 return quantidade;
 }

 console.log(determinarQuantidadeDaLista(lista));
 
 function determinarQuantidadePares(lista) {
    var listaPar = 0;
    for(let item of lista){

        if(item % 2 === 0){
            listaPar += 1;
           
        } 

       
    }
    listaPar = "A quantidade de elementos pares é: " + listaPar
    return listaPar;
  
 } 

 function determinarQuantidadeImpares (lista){
    var listaImpar = 0;
    for(let item of lista){
        if(item%2===1){
            listaImpar +=1;
        }
    }
    listaImpar = "A quantidade de elementos impares é: " + listaImpar
    return listaImpar;
 }


 console.log(determinarQuantidadePares(lista));
 console.log(determinarQuantidadeImpares(lista));


    
    
 










   

   




 

 


 


 






















