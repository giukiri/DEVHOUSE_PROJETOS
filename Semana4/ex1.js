

//exampleLet - sendo uma variável não constante e de escopo local do tipo numérico com a sua idade como valor.

function exampleLet(){
    let idade = 24 ;

    if(idade == 24){
        console.log(idade);
    } else {
        return idade;
    }

}

// exampleConst - sendo uma variável constante e de escopo local do tipo string com o seu nome como valor.


    function exampleConst () {
        const estudante = {
            nome : "Giulia" ,
            sobrenome : "Kirinus" , 
            
            nomeCompleto : function  () {
                return (this.nome) (this.sobrenome)

            }

        }

        console.log(estudante.nomeCompleto());

    }

        
        
       
    // exampleVar - sendo uma variável não constante e de escopo global do tipo string com a concatenação da seguinte frase: “Olá meu nome é ”+exampleConst +” e tenho ”+exampleLet+” anos”.

        function exampleVar(){
            var informações = true;
            if(informações){
                var x = " Olá! Meu nome é" + exampleConst + "e tenho" + exampleLet + "anos."
            }

        }









