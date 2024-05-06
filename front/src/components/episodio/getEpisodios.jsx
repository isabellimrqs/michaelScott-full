import axios from "axios";
import { useState } from "react";

export default function GetEpisodios() {
    const [episodios, setEpisodios] = useState([]);
    const [erro, setErro] = useState(null);

    const buscarTodos = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/episodio/');
            setEpisodios(response.data.episodios);
            setErro(null); 
        } catch (erro) {
            setErro(erro.response.status);
            console.error(erro);
            setEpisodios([]); // Define episodios como um array vazio em caso de erro
        }
    };

    return (
        <div>
            <p>GET Episódios</p>

            <button onClick={buscarTodos}>
                <p>Buscar Todos os Episódios</p>
            </button>

            {episodios.map((episodio, index) => (
                <p key={index}>{episodio.episodio}</p> // Ajuste conforme a estrutura real do objeto de episódio
            ))}

            {erro && <p>Ocorreu um erro ao buscar os episódios!</p>}
        </div>
    );
}
