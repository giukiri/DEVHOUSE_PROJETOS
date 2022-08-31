

export default function ControleRefrigerantes ({listaDeRefris = []}){
    return (
        <>
        <h1>Olá essa é a lista que indica a quantidade disponível de tipos diferentes de refrigerantes neste mercado</h1>
    
        {listaDeRefris.length > 1 ? (
        <p> Há {listaDeRefris.length} tipos de refrigerantes</p>

    
        ) : (
            <>
                <p>Não há mais refrigerantes</p>
            </>

        )}

</>
    );
}


