import './Header.css'

export default function Header({ score }) {
  return (
    <header>
      <div className="title">
        <h1>
          <span> Rock </span>
          <span> Paper </span>
          <span> Scissors </span>
        </h1>
      </div>
      <div className="score">
        <h3> Score </h3>
        <p> { score }</p>
      </div>
    </header>
  )
}