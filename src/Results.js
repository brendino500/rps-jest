export default function Results(props) {
  return (
    <section className="results" data-test="component-results">
      <div className="round-results" data-test="results-text">
        <p>
          You chose: <span className="player-choice">{props.playerChoice}</span>
        </p>
        <p>
          Computer chose:{" "}
          <span className="computer-choice">{props.computerChoice}</span>
        </p>
      </div>
      <div className="winner" data-test="winner-text">
        <p>
          The winner is{" "}
          <span className="winner-results">{props.winnerResults}</span>
        </p>
      </div>
      <div className="scoreboard" data-test="score-text">
        <p>
          Your score{" "}
          <span className="youScore" data-test="player-score-display">
            {props.playerScore}
          </span>
        </p>
        <p>
          Computer's score{" "}
          <span className="computerScore" data-test="comp-score-display">
            {props.computerScore}
          </span>
        </p>
      </div>
    </section>
  );
}
