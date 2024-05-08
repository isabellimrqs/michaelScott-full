import { useState } from "react";
import "./App.css";
import axios from "axios";
import GetEpisodio from "./components/episodio/GET/getEpisodio";
import PutEpisodio from "./components/episodio/putEpisodio";
import PostEpisodio from "./components/episodio/postEpisodio";
import DeleteEpisodio from "./components/episodio/deleteEpisodio";
import GetFrase from "./components/frase/getFrase";
import DeleteFrase from "./components/frase/deleteFrase";
import PostFrase from "./components/frase/postFrase";
import PutFrase from "./components/frase/putFrase";

function App() {
  return (
    <>
      <PostEpisodio />
      <GetEpisodio />
      <PutEpisodio />
      <DeleteEpisodio />


      <PostFrase/>
      <GetFrase />
      <PutFrase/>
      <DeleteFrase/>



    </>
  );
}

export default App;
