import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorsList from './ColorsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Aqui va la lista</h1>
    <ColorsList/>
    </>
  )
}

export default App
