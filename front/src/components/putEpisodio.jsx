import axios from "axios";
import { useState } from "react";

export default function PutEpisodio(){
    const [episodioId, setEpisodioID] = useState('')
    const [episodio, setEpisodio] = useState('')
    const [erro, setErro] = useState(null)
    const [sucesso, setSucesso] = useState(null)
    const [sucessoAtualizar, setSucessoAtualizar] = useState(null)
    

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

    const dados = {
        'episodio': episodio
    };

    const atualizar = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/episodio/', dados);
            setEpisodio('');
            setSucesso(true); 
        } catch (erro) {
            setErro(erro.response.status);
            console.log(erro);
        }
    };


    return(
        <div>

            <p>PUT Episódio</p>

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

            {sucesso &&<input type="text" placeholder="Altere o episódio aqui" />}
            <button onClick={atualizar}>
                <p>Atualizar</p>
            </button>

            {sucessoAtualizar && <p>Atualizado com sucesso!</p>}

        </div>
    )
} 
