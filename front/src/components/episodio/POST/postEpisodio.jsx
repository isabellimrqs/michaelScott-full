import axios from "axios";
import { useState } from "react";
import styles from './postEpisodio.module.css'

export default function PostEpisodio() {
    const [episodio, setEpisodio] = useState('');
    const [erro, setErro] = useState(null);
    const [sucesso, setSucesso] = useState(false);

    const dados = {
        'episodio': episodio
    };

    const criar = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/episodio/', dados);
            setEpisodio('');
            setSucesso(true); 
        } catch (erro) {
            setErro(erro.response.status);
            console.log(erro);
        }
    };

    return (
        <div className={styles.container}>
            <p>Crie um novo episódio: </p>
            <input
                placeholder="Episódio Ex: T1E1"
                onChange={(e) => setEpisodio(e.target.value)}
                value={episodio}
            />
            <button className={styles.button} onClick={criar}>
                <p>Criar</p>
            </button>

            {sucesso && <p>Criado! com sucesso!</p>}
            {erro && <p>Esse episódio não existe!</p>}
        </div>
    );
}