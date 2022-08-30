
function Post ({nomeUsuario,fotoPerfil,tempoDePost,textoDescricao,imgagem,botaoCurtida}){
    return(
        <div>
            <div>

                <h2>{nomeUsuario}</h2>
                <img  src = {fotoPerfil} />
                <h4>{tempoDePost}</h4>
            </div>
            <div>
                <p>{textoDescricao}</p>
                <img src= {imgagem}/>
            </div>
            <button>{botaoCurtida}</button>
        </div>
    )
}



export default Post 

