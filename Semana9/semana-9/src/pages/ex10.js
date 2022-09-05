import { useEffect, useState } from "react";

export default function Exercicio10 () {
    const [mensagem,setMensagem] = useState('Você não esta digitando')
    const [digitando,setDigitando] = useState('');

    useEffect(()=>{
        if (mensagem != ''){
            setDigitando('Esta digitando')
        }

    

    const id = setTimeout(() => {
        setDigitando('Não esta')
    }, 300);

    return () => clearTimeout(id)
}, [mensagem])
    

    return(
        <div>
            <h1>{digitando}</h1>
            <input type='text'  onChange={(e)=>setMensagem(e.target.value)} ></input>
        </div>
    );
    }
