

export default function MainContent(){
    return(
    <div>
      

        <div>
            <form className='Card'>

                <input value={nome}></input>
                <input value={'Qual a categoria trabalhada?'}></input>
                <inpu value={'Assunto'}></inpu>
                <input value={'Dicas'}></input>
                <button type="reset" form="form" onclick="limpaFormulario()">Descartar</button>
                <button  id="btn_submit" type="submit" onclick="salvarFormulario();"   form="form" >Enviar</button>
        
            </form>
        </div>

        
    </div>
    )}




