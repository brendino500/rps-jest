export default function Results({
  playerChoice,
  computerChoice,
  winnerResults,
  playerScore,
  computerScore,
}) {
  return (
    <section className="results" data-test="component-results">
      <div className="round-results" data-test="results-text">
        <p>
          You chose: <span className="player-choice">{playerChoice}</span>
        </p>
        <p>
          Computer chose:
          <span className="computer-choice">{computerChoice}</span>
        </p>
      </div>
      <div className="winner" data-test="winner-text">
        <p>
          The winner is
          <span className="winner-results" data-test="winner-results-text">
            {winnerResults}
          </span>
        </p>
      </div>
      <div className="scoreboard" data-test="score-text">
        <p>
          Your score
          <span className="youScore" data-test="player-score-display">
            {playerScore}
          </span>
        </p>
        <p>
          Computer's score
          <span className="computerScore" data-test="comp-score-display">
            {computerScore}
          </span>
        </p>
      </div>
    </section>
  );
}
