import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import { ReactComponent as Scissors } from "./assets/scissors.svg";

export default function Choices({ handleClick, handleReset }) {
  const classes = useStyles();
  return (
    <>
      <section className="buttons" data-test="component-choice-buttons">
        <div className="button-options" data-test="choices-buttons">
          <button
            onClick={handleClick}
            className="option-btn"
            id="rock"
            value="rock"
            data-test="choice-button"
          >
            👊
          </button>
          <button
            onClick={handleClick}
            className="option-btn"
            id="paper"
            value="paper"
          >
            ✋
          </button>
          <div className="picture-animation" value="scissors">
            <button
              onClick={handleClick}
              className="option-btn"
              id="scissors"
              value="scissors"
            >
              <Scissors className={classes.images} value="scissors" />
            </button>
          </div>
        </div>
        <div className="reset-button">
          <button onClick={handleReset} className="reset-button" id="reset">
            🙌 Reset 🙌
          </button>
        </div>
      </section>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  images: {
    height: "10em",
    width: "auto",
  },
}));
