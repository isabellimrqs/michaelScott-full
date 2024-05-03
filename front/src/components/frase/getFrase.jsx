import axios from "axios";
import { useState } from "react";

export default function GetFrase(){
    const [episodioId, setEpisodioID] = useState('')
    const [episodio, setEpisodio] = useState('')
    const [erro, setErro] = useState(null)

    const buscar = async ()=>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/frase/'+episodioId)
            setEpisodio(response.data.episodio)
            console.log(episodio)
        }catch(erro){
            setErro(erro.response.status)
            console.log(erro)
        }
    }

    return(
        <div>

            <p>GET Episódio</p>

            <input
                placeholder="ID"
                onChange={(e)=>setEpisodioID(e.target.value)}
                value={episodioId}
            />
            <button onClick={buscar}>
                <p>Buscar</p>
            </button>

            <p>{episodio}</p>
            

            {erro && <p>Esse episódio não existe!</p>}

        </div>
    )
} 
