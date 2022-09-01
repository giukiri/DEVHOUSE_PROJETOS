import './jogadores.css'
export default function ListarJogadores ({listaDeJogadores = []}){
    return(
        <>
            <h1 className="title">Jogadores da Copa do Mundo 2022</h1>

            {listaDeJogadores.map((item)=> 

                <div className ='card' key={item.name}>

                <h4>{item.name}</h4>
                <h5>{item.numero}</h5>
                <img className = 'foto' src = {item.photo}/>
                <p>{item.seleção}</p>

            
                </div>
            )}
        </>
    )
}





