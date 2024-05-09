import { useState } from "react";
import "./App.css";
import axios from "axios";
import GetEpisodio from "./components/episodio/GET/getEpisodio";
import PutEpisodio from "./components/episodio/PUT/putEpisodio";
import PostEpisodio from "./components/episodio/POST/postEpisodio";
import DeleteEpisodio from "./components/episodio/DELETE/deleteEpisodio";
import GetFrase from "./components/frase/GET/getFrase";
import DeleteFrase from "./components/frase/DELETE/deleteFrase";
import PostFrase from "./components/frase/POST/postFrase";
import PutFrase from "./components/frase/PUT/putFrase";

function App() {
  return (
    <div className="background">

        <h1>The Michael Scott API</h1>

      <div className="container">

          <div className="post">
          <h2>POST</h2>
          <PostEpisodio />
          <PostFrase/>
          </div>

          <div className="get">
          <h2>GET</h2>
          <GetEpisodio />
          <GetFrase />
          </div>

          <div className="put">
          <h2>PUT</h2>
          <PutEpisodio />
          <PutFrase/>
          </div>

          <div className="delete">
          <h2>DELETE</h2>
          <DeleteEpisodio />
          <DeleteFrase/>
          </div>
      

      </div>

    </div>

    
  );
}

export default App;
