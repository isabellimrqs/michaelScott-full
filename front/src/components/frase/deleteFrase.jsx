import axios from "axios";
import { useState } from "react";

export default function DeleteFrase() {
    const [id, setId] = useState('');
    const [quote, setQuote] = useState('')
    const [epId, setEpId] = useState('')
    const [erro, setErro] = useState(null);
    const [sucesso, setSucesso] = useState(false);

    const deletar = async () => {
        try {
            const response = await axios.delete('http://127.0.0.1:8000/api/v1/frase/'+ id);
            setId('');
            setQuote('');
            setEpId('')
            setSucesso(true); 
        } catch (erro) {
            setErro(erro.response.status);
            console.log(erro);
        }
    };

    return (
        <div>
            <p>DELETE Frase</p>
            <input
                placeholder="ID"
                onChange={(e) => setId(e.target.value)}
                value={id}
            />
            <button onClick={deletar}>
                <p>Excluir</p>
            </button>

            {sucesso && <p>Excluído com sucesso!</p>}
            {erro && <p>Esse episódio não existe!</p>}
        </div>
    );
}
