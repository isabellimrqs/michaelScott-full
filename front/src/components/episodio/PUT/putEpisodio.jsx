import axios from "axios";
import { useState } from "react";
import styles from './putEpisodio.module.css'

export default function PutEpisodio() {
    const [episodioId, setEpisodioID] = useState('');
    const [episodio, setEpisodio] = useState('');
    const [erro, setErro] = useState(null);
    const [sucesso, setSucesso] = useState(false);
    const [novoEpisodio, setNovoEpisodio] = useState('');
    const [sucessoAtualizar, setSucessoAtualizar] = useState(false);

    const buscar = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/v1/episodio/${episodioId}`);
            setEpisodio(response.data.episodio);
            setSucesso(true); 
            setErro(null); 
        } catch (erro) {
            setErro(erro.response.status);
            console.error(erro);
            setSucesso(false); 
        }
    };

    const atualizar = async () => {
        try {
            const dados = {
                'id': episodioId,
                'episodio': novoEpisodio 
            };

            const response = await axios.put(`http://127.0.0.1:8000/api/v1/episodio/${episodioId}`, dados);
            setEpisodio('');
            setNovoEpisodio(''); 
            setSucessoAtualizar(true);
        } catch (erro) {
            setErro(erro.response.status);
            console.error(erro);
        }
    };

    return (
        <div className={styles.container}>
            <p>Atualize um episódio: </p>

            <input
                placeholder="ID"
                onChange={(e) => setEpisodioID(e.target.value)}
                value={episodioId}
            />
            <button className={styles.button} onClick={buscar}>
                <p>Buscar</p>
            </button>

            <p>{episodio}</p>

            {erro && <p>Esse episódio não existe!</p>}

            {sucesso && (
                <div className={styles.container}>
                    <input
                        type="text"
                        placeholder="Altere o episódio aqui"
                        value={novoEpisodio}
                        onChange={(e) => setNovoEpisodio(e.target.value)}
                    />
                    <button className={styles.button} onClick={atualizar}>Atualizar</button>
                </div>
            )}

            {sucessoAtualizar && <p>Atualizado com sucesso!</p>}
        </div>
    );
}
