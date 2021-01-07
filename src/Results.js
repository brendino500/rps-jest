import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

export default function Results({
  playerChoice,
  computerChoice,
  winnerResults,
  playerScore,
  computerScore,
}) {
  const classes = useStyles();
  return (
    <section className="results" data-test="component-results">
      <Grid
        className={("scoreboard", classes.scoreGrid)}
        data-test="score-text"
        container
        justify="space-around"
        alignItems="center"
      >
        <Typography className={classes.scoreText}>
          Your score{" "}
          <span className="youScore" data-test="player-score-display">
            {playerScore}
          </span>
        </Typography>
        <Typography className={classes.scoreText}>
          Computer's score{" "}
          <span className="computerScore" data-test="comp-score-display">
            {computerScore}
          </span>
        </Typography>
      </Grid>
      <div className="round-results" data-test="results-text">
        <p>
          You chose: <span className="player-choice">{playerChoice}</span>
        </p>
        <p>
          Computer chose:{" "}
          <span className="computer-choice">{computerChoice}</span>
        </p>
      </div>
      <div className="winner" data-test="winner-text">
        <p>
          The winner is{" "}
          <span className="winner-results" data-test="winner-results-text">
            {winnerResults}
          </span>
        </p>
      </div>
    </section>
  );
}

const useStyles = makeStyles((theme) => ({
  scoreText: {
    fontFamily: "Roboto Slab",
  },
  scoreGrid: {
    display: "flex",
    justify: "space around",
    alignItems: "center",
  },
}));
