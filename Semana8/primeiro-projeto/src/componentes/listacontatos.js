
export default function ListaContatos ({listaDeContatos = []}){

    return(

        <>
            <h1>Contatos</h1>
          
                {listaDeContatos.map((contato) => 
                        
                    <div>

                        <listaDeContatos key = {contato.id} />
                    
                     <h2>{contato.name}</h2>
                    <img src= {contato.photo} />
                    <p> {contato.description}</p>
                    
                  
                    </div>
                  
                   
                    )}
           
        </>

    );


}









