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
    <section
      className={("results", classes.results)}
      data-test="component-results"
    >
      <Grid
        className={("scoreboard", classes.scoreGrid)}
        data-test="score-text"
        container
        justify="space-around"
        alignItems="center"
      >
        <Typography className={classes.scoreText}>
          Ton score{" "}
          <span className="youScore" data-test="player-score-display">
            {playerScore}
          </span>
        </Typography>
        <Typography className={classes.scoreText}>
          Score de l'ordinateur{" "}
          <span className="computerScore" data-test="comp-score-display">
            {computerScore}
          </span>
        </Typography>
      </Grid>
      <div
        className={("round-results", classes.roundResults)}
        data-test="results-text"
      >
        <Typography className={classes.text}>
          Tu choisis:{" "}
          <span className="player-choice">
            <b>{playerChoice}</b>
          </span>
        </Typography>
        <Typography className={classes.text}>
          L'ordinateur a choisi:{" "}
          <span className="computer-choice">
            <b>{computerChoice}</b>
          </span>
        </Typography>
      </div>
      <div
        className={("winner", classes.winnerResults)}
        data-test="winner-text"
      >
        <Typography className={classes.text}>
          Le gagnant est{" "}
          <span className="winner-results" data-test="winner-results-text">
            <b>{winnerResults}</b>
          </span>
        </Typography>
      </div>
    </section>
  );
}

const useStyles = makeStyles((theme) => ({
  scoreText: {
    fontFamily: "Roboto Slab",
    fontSize: 30,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 18,
      marginTop: "2em",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 34,
    },
  },
  scoreGrid: {
    display: "flex",
    justify: "space around",
    alignItems: "center",
  },
  results: {
    marginTop: "-5em",
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: "-2em",
    },
  },
  roundResults: {
    textAlign: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: "2em",
    },
  },
  winnerResults: {
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Roboto Slab",
    margin: "0.55em 0",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 18,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 28,
    },
  },
}));
