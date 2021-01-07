import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import { ReactComponent as Scissors } from "./assets/scissors.svg";
import Paper from "./assets/paper.svg";
import Rock from "./assets/rock.svg";

export default function Choices({ handleClick, handleReset }) {
  const classes = useStyles();
  return (
    <>
      <section className="buttons" data-test="component-choice-buttons">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className="button-options, picture-animation"
          data-test="choices-buttons"
        >
          <Button
            onClick={handleClick}
            className="option-btn"
            id="rock"
            value="rock"
            data-test="choice-button"
          >
            <img src={Rock} alt="rock" className={classes.images} />
          </Button>

          <Button
            onClick={handleClick}
            className="option-btn"
            id="paper"
            value="paper"
          >
            <img src={Paper} alt="paper" className={classes.images} />
          </Button>

          <Button
            onClick={handleClick}
            className="option-btn"
            id="scissors"
            value="scissors"
          >
            <Scissors className={classes.images} />
          </Button>
        </Grid>
        <div className={("reset-button", classes.resetButton)}>
          <Button
            onClick={handleReset}
            className="reset-button"
            value="reset"
            id="reset"
          >
            <Typography className={classes.resetText}>Reset</Typography>
          </Button>
        </div>
      </section>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  images: {
    height: 200,
    width: "8em",
    value: "scissors",
  },
  resetText: {
    fontFamily: "Roboto Slab",
    letterSpacing: 4,
    fontWeight: "bold",
    fontSize: 25,
  },
  resetButton: {
    display: "flex",
    justifyContent: "center",
  },
}));
