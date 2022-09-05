import ListaContatos from "../componentes/listacontatos";
import { useState } from "react";

export default function Exercicio6 () {
    const contatos = [
        {name: 'Giulia' , photo: '', description: '24 anos', status: "Texto da última mensagem"},
        {name:'Carla' , photo: '', description:'50 anos', status: "Texto da última mensagem"},
        {name: 'Fabricio' , photo: '', description:'50 anos', status: "Texto da última mensagem"},
    ]


    const [Mensagem,setMensagem] = useState('')

    function enviarMensagem(){
      
           this.setState({status:Mensagem})

          
           return(
            <div>
           {this.state.status}
           </div>
           )
           
        
    }
    return (

       
        <div>

            <ListaContatos listaDeContatos={contatos} />
        <input type='text' value={Mensagem} onChange={(e)=>setMensagem(e.target.value)}></input>
        <input type='submit' onClick={enviarMensagem}></input>
        
        </div>

       
           
   
    )
}


  
       
       
 




