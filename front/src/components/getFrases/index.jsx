import axios from "axios";
import react, {useState} from 'react'


export default function Episodio(){
    const [episodioId, setEpisodioId] = useState([])
    const [episodio, setEpisodio] = useState([])

    const retornaEp = () => {
        axios.get('http://127.0.0.1:8000/api/v1/episodio/' + episodioId)
        .then((response)=>{
            setEpisodio(response.data.episodio)
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }

    return (
        <div>
            


        </div>
    )
}

