import React from "react";

import { Grid, Typography, Button } from "@material-ui/core";

import useStyles from "./styles/choiceButtonsStyles";
import { ReactComponent as Scissors } from "../assets/scissors.svg";
import Paper from "../assets/paper.svg";
import Rock from "../assets/rock.svg";

export default function Choices({ handleClick, handleReset }) {
  const classes = useStyles();
  return (
    <>
      <section
        className={("buttons", classes.buttons)}
        data-test="component-choice-buttons"
      >
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
            id="roche"
            value="roche"
            data-test="choice-button"
          >
            <img src={Rock} alt="roche" className={classes.images} />
          </Button>

          <Button
            onClick={handleClick}
            className="option-btn"
            id="papier"
            value="papier"
          >
            <img src={Paper} alt="papier" className={classes.images} />
          </Button>

          <Button
            onClick={handleClick}
            className="option-btn"
            id="ciseaux"
            value="ciseaux"
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
            <Typography className={classes.resetText}>Réinitialiser</Typography>
          </Button>
        </div>
      </section>
    </>
  );
}
