import rules from "../../images/image-rules.svg"
import close from "../../images/icon-close.svg"
import { useRef, useState } from "react"
import "./Modal.css"

export default function Modal() {
  const [open, setIsOpen] = useState(false)
  const refDailog = useRef(null)

  const handleClick = () => {
    !open ? refDailog.current.showModal() :  refDailog.current.close()
    setIsOpen(!open)
  }

  return (
    <>
      <dialog ref={ refDailog }>
        <div className="content">
          <h2> Rules </h2>
          <button onClick={handleClick} className="button-close">
            <img src={close} alt="Icon close" />
          </button>
          <img src={rules} alt="Rules of the game" />
        </div>
      </dialog>
      <button onClick={handleClick} className="rules-button"> Rules </button>
    </>
  )
}