import { useState } from 'react'
import {AlbumGallery} from './components/AlbumGalllery'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Album Gallery with Add Album Feature</h1>
      <AlbumGallery/>
    </>
  )
}

export default App
