import Header from './components/Header'
import Modal from './components/Modal'
import Selection from './components/Selection'
import { useState } from 'react'
import './App.css'
import Game from './components/Game'

function App() {
  const [score, setScore] = useState(0)
  const [selection, setSelection] = useState("")

  return (
    <main>
      <Header score={score} />
      {selection === "" 
        ? <Selection setSelection={setSelection}/> 
        : <Game selection={selection} setScore={setScore} setSelection={setSelection}/>
      }
      <Modal />
    </main>
  )
}

export default App
