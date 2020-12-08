export default function Results(props) {
  return (
    <section className="results" data-test="component-results">
      <div className="round-results" data-test="results-text">
        <p>You  chose: <span className="player-choice">{props.playerChoice}</span></p>
        <p>Computer chose: <span className="computer-choice">{props.computerChoice}</span></p>
      </div>
      <div className="winner">
        <p>The winner is <span className="winner-results">{props.winnerResults}</span></p>
      </div>
      <div className="scoreboard">
        <p>Your score <span className="youScore">{props.playerScore}</span></p>
        <p>Computer's score <span className="computerScore">{props.computerScore}</span></p>
      </div>
    </section>
  )
}