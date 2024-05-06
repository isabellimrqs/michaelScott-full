import { useState } from "react";
import "./App.css";
import axios from "axios";
import GetEpisodio from "./components/episodio/getEpisodio";
import PutEpisodio from "./components/episodio/putEpisodio";
import PostEpisodio from "./components/episodio/postEpisodio";
import DeleteEpisodio from "./components/episodio/deleteEpisodio";
// import GetEpisodios from './components/episodio/getEpisodios'
import GetFrase from "./components/frase/getFrase";
import DeleteFrase from "./components/frase/deleteFrase";
import PostFrase from "./components/frase/postFrase";

function App() {
  return (
    <>
      <PostEpisodio />
      <GetEpisodio />
      <PutEpisodio />
      <DeleteEpisodio />

      {/* <GetEpisodios/> em manutenção...*/}

      <PostFrase/>
      <GetFrase />
      <DeleteFrase/>



    </>
  );
}

export default App;
