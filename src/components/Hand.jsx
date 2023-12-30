import "./Hand.css"

const images = {
  rock: "../../images/icon-rock.svg",
  paper: "../../images/icon-paper.svg",
  scissors: "../../images/icon-scissors.svg"
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