import React, {useState} from 'react'

function Contar() {

    let x = 0
const [num,setNum] = useState (0); 

function adicionar (){
    x +=1;
    console.log({x})
    
}

  return (
    <div >
      <p>primeiro botao</p>
      <button onClick={adicionar}>click aqui</button>

      <p>{num}</p>
      <button onClick={()=> setNum(Num => Num + 1)}></button>
    </div>
    
    
  );
}

export default Contar;