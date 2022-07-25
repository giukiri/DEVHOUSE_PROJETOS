

class Pessoa {
        nome ;
        idade ;
        cpf ;
        anoAniversario ;
    


constructor(nome,idade,cpf,anoAniversario){
this.nome = nome;
this.idade = idade;
this.cpf = cpf;
this.anoAniversario = anoAniversario;

}

 podeDirigir(){
    const idade = this.idade;
    if (idade >= 18){
        console.log("pode dirigir");
    } else {
        console.log("não pode dirigir");
    }
    
    }
    
 }
   
const novaPessoa = new Pessoa ("Giulia",24,'xxxxxx-xx','1997');
console.log(novaPessoa);
console.log(novaPessoa.podeDirigir());


















