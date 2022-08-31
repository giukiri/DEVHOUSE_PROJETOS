
export default function ListarProdutos ({listaDeProdutos}){

    return (
        <>
        <h1>Essa é a lista de produtos do supermercado X</h1>

        { listaDeProdutos.map((item) =>
            <div key={item.id}>
                <h2>{item.name}</h2>
                <img src = {item.photo} />
                <p>{item.description}</p>
            </div>

        )}
        
        </>
    );

}











