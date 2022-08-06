
const numero = window.prompt("Digite um valor");

function aceitarPar (numero){
const promise = new Promise ((resolve,reject) => {
    numero;
    if(numero%2 == 0){
        resolve ('par');
    } else {
        reject('impar');
    }


} );
return promise 
}

aceitarPar(numero)
.then((result)=> {console.log('O número digitado é '  + result )})
.cath((erro) => {console.log("O numero digitado é " + erro)});










