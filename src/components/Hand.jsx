import "./Hand.css"

const images = {
  rock: "https://github.com/GaelSM/Rock-Paper-Scissors/tree/main/images/icon-rock.svg",
  paper: "https://github.com/GaelSM/Rock-Paper-Scissors/tree/main/images/icon-paper.svg",
  scissors: "https://github.com/GaelSM/Rock-Paper-Scissors/tree/main/images/icon-scissors.svg"
}

export default function Hand({ type, setSelection }) {
  const handleClick = () => setSelection(type)
  
  return (
    <div className={`hand ${type}`}  onClick={setSelection && handleClick}>
      <div className="between">
        <img src={images[type]} alt="Hand" />
      </div>
    </div>
  )
}
