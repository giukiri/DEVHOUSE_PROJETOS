
class Series  {
    nome;
    anoDeLancamento;
    qttTemporadas;

    constructor(nome,anoDeLancamento,qttTemporadas){
        this.nome = nome;
        this.anoDeLancamento = anoDeLancamento;
        this.qttTemporadas = qttTemporadas;
    }
    
}


var arraySeries = [];

for(var i = 0; i < 6 ; i ++){

    

    let nome = window.prompt("nome série");
    let anoDeLancamento = window.prompt("qual o ano de lançamento dessa série?");
    let qttTemporadas = window.prompt ("Quantas temporadas essa série possui?") ;



arraySeries.push(new Series (nome,anoDeLancamento,qttTemporadas));

i++

}


console.log(arraySeries);


var z = 0;


arraySeries.forEach(serie => {
  
    if(serie.anoDeLancamento < z){
  
        z = serie.anoDeLancamento;
   
   } 
   
   else if(z == 0) {
    z = serie.anoDeLancamento;

   }
} );

console.log("O menor ano de lançamento é " + z ) ;




const x = document.getElementById('P')

function mostrarArray(){

    x.innerHTML = z

}





 

 














