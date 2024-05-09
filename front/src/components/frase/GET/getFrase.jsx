import axios from "axios";
import { useState } from "react";
import styles from './getFrase.module.css'

export default function GetFrase(){
    const [id, setId] = useState('')
    const [quote, setQuote] = useState('')
    const [epId, setEpId] = useState('')
    const [erro, setErro] = useState(null);

    const buscar = async ()=>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/frase/'+id)
            setQuote(response.data.quote)
            setEpId(response.data.ep_id)
        }catch(erro){
            setErro(erro.response.status)
            console.log(erro)
        }
    }

    return(
        <div className={styles.container}>

            <p>Busque por uma frase: </p>

            <input
                placeholder="ID da frase"
                onChange={(e)=>setId(e.target.value)}
                value={id}
            />
            <button className={styles.button} onClick={buscar}>
                <p>Buscar</p>
            </button>

            <p>{quote}</p>
            <p>{epId}</p>
            
        
            {erro && <p>Esse episódio não existe!</p>}

        </div>
    )
} 
