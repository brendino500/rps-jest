import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import useStyles from "./styles/mainStyles";
import TextAnimation from "../styles/TextAnimation";

export default function Main() {
  const classes = useStyles();
  return (
    <>
      <div className="text-animation">
        <div className="title-animation" data-test="component-main">
          <Typography
            className={("title-animation", classes.title)}
            data-test="pick-a-choice-display"
          >
            Roche - Papier - Ciseaux
          </Typography>
        </div>
      </div>
      <TextAnimation />
    </>
  );
}
