import React, {useRef, useState} from 'react'


function Focar() {


const [nome,setNome] = useState ()
const [idade,setidade] = useState ()
    const inputRef = useRef(0);
    
    function passar(e) {
        if (e.key === 'Enter') {
            inputRef.current.focus();
        }
      }

      function cadastrar (){
        console.log(nome)
        console.log(idade)
      }
  return (
    <div >

      <input value = {nome} onChange={(e)=>setNome(e.target.value)} type='text' onKeyUp={passar} placeholder='Digite seu nome'></input>
      
        <input  value = {idade} onChange={(e)=>setidade(e.target.value)} ref={inputRef} type='text' placeholder='Digite sua idade'></input>
        <button type='submit' onClick={cadastrar}>Cadastrar</button>
      
    </div>
  );
}

export default Focar;