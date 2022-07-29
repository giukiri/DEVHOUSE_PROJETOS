

// const numeros = [1,2,3,4,5];

// let soma = 0;
// let media = 0;


//     for(let i =0; i< numeros.length ; i++){
//         soma += numeros[i];
//     }

// console.log (soma);



// calcularMedia = (soma,numeros) => {
//     return media = soma / numeros.length;

// }

// console.log(calcularMedia)

//Resolvi tentar melhorar o código

const numeros =[1,2,3,4,5,6,7,8,9,10]

const soma = numeros.reduce((soma,numeros)=> soma += numeros, 0);

const media = numeros.reduce((soma,numeros)=> soma += numeros, 0) / numeros.length

console.log(soma);
console.log(media);














