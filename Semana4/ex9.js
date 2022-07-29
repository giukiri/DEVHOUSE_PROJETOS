
let arrayMusicas = [
    {
        nome: "Believer",
        banda: "Imagine Dragons",
        anoDeLancamento: 2017,
        isGood: false
    },
    {
        nome: "Losing my Religion",
        banda: "R.E.M",
        anoDeLancamento: 1991,
        isGood: false
    },
    {
        nome: "Duality",
        banda: "Slipknot",
        anoDeLancamento: 2004,
        isGood: false
    },
    {
        nome: "Imagination",
        banda: "Foster the People",
        anoDeLancamento: 2019,
        isGood: false
    },
    {
        nome: "Without me",
        banda: "Halsey",
        anoDeLancamento: 2018,
        isGood: false
    },
    {
        nome: "DiE4u",
        banda: "Bring me the horizon",
        anoDeLancamento: 2021,
        isGood: false,
    },
    {
        nome: "Hail to the king",
        banda: "Avenged Sevenfold",
        anoDeLancamento: 2013,
        isGood: false
    },
    {
        nome: "Rock you like a hurricane",
        banda: "Scorpions",
        anoDeLancamento: 1984,
        isGood: false
    },
    {
        nome: "Misery business",
        banda: "Paramore",
        anoDeLancamento: 2007,
        isGood: false
    },
    {
        nome: "Brianstorm",
        banda: "Arctic Monkeys",
        anoDeLancamento: 2007,
        isGood: false
    }
];

const resultado = arrayMusicas.map((item) => ({item, isGood: true}));

console.log(resultado);


const nomeMusicas = [new Set (arrayMusicas.map(item => item.nome))];

console.log(nomeMusicas);


const lista = document.getElementById('lista')

const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const item4 = document.createElement('li');
const item5 = document.createElement('li');
const item6 = document.createElement('li');
const item7 = document.createElement('li');
const item8 = document.createElement('li');
const item9 = document.createElement('li');
const item10 = document.createElement('li');

item1.innerHTML = "Believer" ;
item2.innerHTML = "Losing my Religion" ;
item3.innerHTML = "Duality";
item4.innerHTML = "Imagination";
item5.innerHTML = "Without me";
item6.innerHTML = "DiE4u";
item7.innerHTML = "Hail to the king";
item8.innerHTML = "Rock you like a hurricane";
item9.innerHTML = "Misery business";
item10.innerHTML = "Brianstorm";


lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(item3);
lista.appendChild(item4);
lista.appendChild(item5);
lista.appendChild(item6);
lista.appendChild(item7);
lista.appendChild(item8);
lista.appendChild(item9);
lista.appendChild(item10);

function clicarBotao (){
    return window.location.href = 'https://www.youtube.com/watch?v=7wtfhZwyrcc'
}
  





        









  
















