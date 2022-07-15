

  var lista =[];

 do {
      var x;
      x = window.prompt("Digite um número, para terminar digite S ");
      lista.push(x);
 } while (x != 'S')


function imprimirElementosDaLista(lista){
    
    for(let item of lista){
        console.log(item);
    }
    let quantidade = "A quantidade de elementos da lista é: " + lista.length
    return quantidade;
  
}

console.log(imprimirElementosDaLista(lista));










