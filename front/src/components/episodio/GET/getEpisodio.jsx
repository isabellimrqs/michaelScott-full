import axios from "axios";
import { useState } from "react";
import styles from './getEpisodio.module.css'


export default function GetEpisodio(){
    const [episodioId, setEpisodioID] = useState('')
    const [episodio, setEpisodio] = useState('')
    const [erro, setErro] = useState(null)

    const buscar = async ()=>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/episodio/'+episodioId)
            setEpisodio(response.data.episodio)
            console.log(episodio)
        }catch(erro){
            setErro(erro.response.status)
            console.log(erro)
        }
    }

    return(
        <div className={styles.container}>

            <p>Busque por um episódio: </p>

            <input
                placeholder="ID"
                onChange={(e)=>setEpisodioID(e.target.value)}
                value={episodioId}
            />
            <button className={styles.button} onClick={buscar}>
                <p>Buscar</p>
            </button>

            <p>{episodio}</p>
            

            {erro && <p>Esse episódio não existe!</p>}

        </div>
    )
} 
