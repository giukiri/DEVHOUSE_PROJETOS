import React, {useEffect, useState} from 'react'


function Frutas() {

    function cadastrarFruta (){

         console.log({frutas})
    }

  
    const [frutas , setFrutas] = useState();

    useEffect (()=>{
       

    }, [frutas])

    useEffect(()=>{
        return () => {
            
            
            
        }
    })
  
   

  return (
    
    <div className="frutas">

        <p>Frutas:</p>

        <span></span>
    <div>
        <input value={frutas} onChange={(e)=>setFrutas(e.target.value)} />
            <input type='submit' onClick={cadastrarFruta}></input>

   
        
       
    </div>
        



    </div>
  );
}

export default Frutas;