import React, {useEffect, useState} from 'react'


function Frutas() {


    const [frutas , setFrutas] = useState('');

    useEffect (()=>{

    }, [frutas])

    useEffect(()=>{
        return () => {
            
        }
    })
  

  return (
    
    <div className="frutas">

        <p>Frutas:</p>

        <span>{frutas}</span>

        <input value={frutas} onChange={(e)=>setFrutas(e.target.value)}></input>



    </div>
  );
}

export default Frutas;