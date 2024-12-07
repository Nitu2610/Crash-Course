import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import { Home } from './Routing Pages/Home';
import { Gallery } from './Routing Pages/Gallery';
import { Shop } from './Routing Pages/Shop';
import Favorites from './Routing Pages/Favorites';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop' element={<Favorites/>} />
      </Routes>
    </Router>
    <h1>Photo Gallery & Shopping App </h1>
    </>
  )
}

export default App
