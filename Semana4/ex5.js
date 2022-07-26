
let array1 = [1,3,4,5,3,7];
let array2 = [1,2,6,4,8,5];

var array12 = array1.concat(array2);

console.log(array12);

const filtrarArray = array12.filter(function(este,i){
    return array12.indexOf(este) === i;

})

console.log(filtrarArray);









