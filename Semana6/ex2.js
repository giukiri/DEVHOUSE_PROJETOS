
//Utilizando o spread com a função de espalhar dados de um array, 
//adicione todo o array2 dentro do array1 porém o sua saída deverá ser 
//[12, 43, 6, 2, 8, 5, 3, "1", "2", "3", "4"].



let array1 = [12,43,6,2,8,5,3];
let array2 = ["1", "2", "3", "4"];

const array3 = [...array1,...array2]
console.log(array3)

const array4 = [array1,array2];

console.log(...array4);




















