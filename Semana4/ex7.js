let arrayAlunos = [
    {
        nome: "Carlos",
        media: 10
    },
    {
        nome: "Julia",
        media: 8
    },
    {
        nome: "Rayane",
        media: 6
    },
    {
        nome: "Arthur",
        media: 5
    }
]

    arrayAlunos.forEach(function (item,indice,array){
       
       

        if(arrayAlunos.media >= 7){
            return alert("Parabéns a todos os estudantes");

        } else{
           if(item.media < 7){

            document.write(item.nome+ " "  + "Infelizmente você não atingiu a média" + "<br/>" );
        }
        
    }


   
        
        


        
    });

