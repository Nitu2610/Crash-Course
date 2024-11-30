import { useState } from 'react'
import { InputBox } from './component/InputBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Exploring useRef Hook in React</h1>
      <InputBox/>
    </>
  )
}

export default App
