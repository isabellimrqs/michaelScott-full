import axios from "axios";
import { useState } from "react";

export default function GetEpisodios() {
    const [episodios, setEpisodios] = useState([]);
    const [erro, setErro] = useState(null);

    const buscar = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/episodio/');
            setEpisodios(response.data.episodios);
            setErro(null); 
        } catch (erro) {
            setErro(erro.response.status);
            console.error(erro);
        }
    };

    return (
        <div>
            <p>GET Episódios</p>

            <button onClick={buscar}>
                <p>Buscar</p>
            </button>

            {episodios.map((episodio, index) => (
                <p key={index}>{episodio}</p>
            ))}

            {erro && <p>Ocorreu um erro ao buscar os episódios!</p>}
        </div>
    );
}
