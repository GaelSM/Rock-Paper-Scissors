import rockImage from "../../images/icon-rock.svg"
import paperImage from "../../images/icon-paper.svg"
import scissorsImage from "../../images/icon-scissors.svg"
import "./Hand.css"

const images = {
  rock: rockImage,
  paper: paperImage,
  scissors: scissorsImage
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