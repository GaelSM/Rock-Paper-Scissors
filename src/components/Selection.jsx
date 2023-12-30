import Hand from "./Hand";
import "./Selection.css"

export default function Selection({ setSelection }) {

  return (
    <section className="selection">
      <div className="top">
        <Hand type="paper" setSelection={setSelection}/>
        <Hand type="scissors" setSelection={setSelection}/>
      </div>
      <div className="bottom">
        <Hand type="rock" setSelection={setSelection}/>
      </div>
    </section>
  )
}