//Escreva duas arrow functions que juntas possam imprimir tabuada de 0 a 10


const multiplicação = (x,y) => x*y


function mostrarTabuada (){
    for(var x = 0; x<11;x++){
        console.log(" tabuada do " + x);
        for(var y = 0; y<11 ; y++){
        console.log(multiplicação(x,y))
        }
    }
}

console.log(mostrarTabuada(multiplicação))











