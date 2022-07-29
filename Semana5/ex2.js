


function retornarPares(item){
    if( item % 2 == 0){
        return item
    };
}

function retornarImpares(item){
    return item % 2 == 1;
}

const numeros = [1,2,3,4,5,6,7,8,9];

const nPares = numeros.filter(retornarPares);
console.log(nPares)

const nImpares = numeros.filter(retornarImpares);
console.log(nImpares);













