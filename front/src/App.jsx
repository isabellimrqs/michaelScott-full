import { useState } from 'react'
import './App.css'
import axios from 'axios'
import GetEpisodio from './components/getEpisodio'
import PostEpisodio from './components/postEpisodio'
import DeleteEpisodio from './components/deleteEpisodio'
import PutEpisodio from './components/putEpisodio'

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
