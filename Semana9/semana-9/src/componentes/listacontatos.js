export default function ListaContatos ({listaDeContatos = []}){

    return(

        <>
            <h1>Contatos</h1>
          
                {listaDeContatos.map((contato) => 
                        
                    <div>

                    
                     <h5>{contato.name}</h5>
                    <p> {contato.description}</p>
                    <p>{contato.status}</p>
                    
                  
                    </div>
                  
                   
                    )}
           
        </>

    );


}