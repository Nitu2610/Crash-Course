import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { MiniHeader } from './components/Headercomp/MiniHeader';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MiniHeader/>
    </>
  )
}

export default App
