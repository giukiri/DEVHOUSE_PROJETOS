


import React, {useState} from 'react'

function MudarTitulo() {

    

    const [titulo,setTitulo] = useState();

 
  return (
    <div>
        
       <h1>{titulo}</h1>
        <input value={titulo} onChange={(e)=>setTitulo(e.target.value)}  />
        
        
    </div>
  );
}

export default MudarTitulo;













