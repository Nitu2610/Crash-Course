import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { MiniHeader } from './components/Headercomp/MiniHeader';
import { Headerbar } from './components/Headercomp/Main_Header/Headerbar';
import { MainHeaderLogo } from './components/Headercomp/Main_Header/logo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MiniHeader/>
     <Headerbar/>
    </>
  )
}

export default App
