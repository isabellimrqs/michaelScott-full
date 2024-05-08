import axios from "axios";
import { useState } from "react";

export default function PutFrase() {
    const [id, setId] = useState('');
    const [quote, setQuote] = useState('');
    const [epId, setEpId] = useState('');
    const [novoQuote, setNovoQuote] = useState('');
    const [novoEpId, setNovoEpId] = useState('');
    const [erro, setErro] = useState(null);
    const [sucesso, setSucesso] = useState(false);
    const [sucessoAtualizar, setSucessoAtualizar] = useState(false);

    const buscar = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/v1/frase/${id}`);
            setQuote(response.data.quote);
            setEpId(response.data.ep_id);
            setSucesso(true);
        } catch (erro) {
            setErro(erro.response.status);
            console.error(erro);
        }
    };

    const atualizar = async () => {
        try {
            const dados = {
                id: id,
                quote: novoQuote || quote, 
                ep_id: novoEpId || epId 
            };
    
            const response = await axios.put(`http://127.0.0.1:8000/api/v1/frase/${id}`, dados); 
            setQuote(novoQuote || quote); 
            setEpId(novoEpId || epId); 
            setNovoQuote(''); 
            setNovoEpId(''); 
            setSucessoAtualizar(true);
        } catch (erro) {
            setErro(erro.response.status);
            console.error(erro);
        }
    };
    

    return (
        <div>
            <p>PUT Frase</p>
            <input
                placeholder="ID"
                onChange={(e) => setId(e.target.value)}
                value={id}
            />
            <button onClick={buscar}>
                <p>Buscar</p>
            </button>
            {sucesso && (
                <div>
                    <p>{quote}</p>
                    <p>{epId}</p>
                </div>
            )}
            {erro && <p>Esse episódio não existe!</p>}
            {sucesso && (
                <div>
                    <input
                        type="text"
                        placeholder="Altere a frase aqui"
                        value={novoQuote}
                        onChange={(e) => setNovoQuote(e.target.value)}
                    />
                    <input
                        type="number" 
                        placeholder="Altere o ID do episódio da frase aqui"
                        value={novoEpId}
                        onChange={(e) => setNovoEpId(e.target.value)}
                       
                    />
                    <button onClick={atualizar}>
                        <p>Atualizar</p>
                    </button>
                </div>
            )}
            {sucessoAtualizar && <p>Atualizado com sucesso!</p>}
        </div>
    );
}
