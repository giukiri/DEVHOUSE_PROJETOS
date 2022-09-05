import { useEffect, useRef, useState } from "react";


export default function Exercicio9 () {

    const [date, setDate] = useState()

    const timerID = useRef();
  
    useEffect(()=>{
        timerID.current = setInterval (()=>{
            setDate(new Date().toDateString())
        },1000);

    },[])
    
    useEffect(() => {
        return () => {
            clearInterval(timerID.current)
        }
    })
  
    
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {date}</h2>
        </div>
      );
    }
  


  