import axios from "axios";
import { useState } from "react";

export default function PutFrase() {
    const [frase, setFrase] = useState('');
    const [epId, setEpId] = useState('');
    const [erro, setErro] = useState(null);
    const [sucesso, setSucesso] = useState(false);

    const criar = async () => {
        try {
            const dados = {
                'quote': frase,
                'ep_id': epId
            };

            const response = await axios.post('http://127.0.0.1:8000/api/v1/frase/', dados);
            setFrase('');
            setEpId('');
            setSucesso(true); 
        } catch (erro) {
            setErro(erro.response.status);
            console.log(erro);
        }
    };

    return (
        <div>
            <p>POST Frase</p>
            <input
                placeholder="Frase"
                onChange={(e) => setFrase(e.target.value)}
                value={frase}
            />
            <input
                placeholder="ID do episódio"
                onChange={(e) => setEpId(e.target.value)}
                value={epId}
            />
            <button onClick={criar}>
                <p>Criar</p>
            </button>

            {sucesso && <p>Criado com sucesso!</p>}
            {erro && <p>Ocorreu um erro ao criar a frase.</p>}
        </div>
    );
}
