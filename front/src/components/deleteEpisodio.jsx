import axios from "axios";
import { useState } from "react";

export default function DeleteEpisodio() {
    const [episodioId, setEpisodioId] = useState('');
    const [episodio, setEpisodio] = useState('');
    const [erro, setErro] = useState(null);
    const [sucesso, setSucesso] = useState(false);

  

    const deletar = async () => {
        try {
            const response = await axios.delete('http://127.0.0.1:8000/api/v1/episodio/'+ episodioId);
            setEpisodioId('');
            setEpisodio('');
            setSucesso(true); 
        } catch (erro) {
            setErro(erro.response.status);
            console.log(erro);
        }
    };

    return (
        <div>
            <p>DELETE Episódio</p>
            <input
                placeholder="ID"
                onChange={(e) => setEpisodioId(e.target.value)}
                value={episodioId}
            />
            <button onClick={deletar}>
                <p>Excluir</p>
            </button>

            {sucesso && <p>Excluído com sucesso!</p>}
            {erro && <p>Esse episódio não existe!</p>}
        </div>
    );
}
