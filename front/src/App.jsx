import { useState } from 'react'
import './App.css'
import axios from 'axios'
import GetEpisodio from './components/episodio/getEpisodio'
import PutEpisodio from './components/episodio/putEpisodio'
import PostEpisodio from './components/episodio/postEpisodio'
import DeleteEpisodio from "./components/episodio/deleteEpisodio"

function App() {
  return (
    <>
      <GetEpisodio/>

      <PostEpisodio/>

      <DeleteEpisodio/> 

      <PutEpisodio/>





    </>
  )
}

export default App
