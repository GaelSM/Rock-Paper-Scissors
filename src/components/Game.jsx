import Hand from "./Hand";
import { useEffect, useState } from "react";
import "./Game.css"

const beats = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock"
}

const elements = ["rock", "paper", "scissors"]

export default function Game({ selection, setScore, setSelection }) {
  const [botSelection, setBotSelection] = useState("")
  const [winner, setIsWinner] = useState("")

  useEffect(() => {
    const botSelection = elements[Math.floor(Math.random() * 3)]
    const winner = selection === botSelection
      ? "You Tie"
      : beats[selection] === botSelection
        ? "You Lose"
        : "You Win"
    setIsWinner(winner)
    setBotSelection(botSelection)
    setScore(prev => {
      if (winner === "You Win") return prev + 1
      if (winner === "You Lose" && prev !== 0) return prev - 1
      return prev
    })
  }, [])



  return (
    <section className="game">
      <div className="player">
        <div className="indetification">
          <p> You picked </p>
        </div>
        <Hand type={selection} />
      </div>
      <div className="again">
        <p> {winner} </p>
        <button className="button-again" onClick={() => setSelection("")}>
          Play Again
        </button>
      </div>
      <div className="player">
        <div className="indetification">
          <p> The house picked </p>
        </div>
        <Hand type={botSelection} />
      </div>
    </section>
  )
}