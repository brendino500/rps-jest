import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

export default function Main() {
  const classes = useStyles();
  return (
    <div className="section" data-test="component-main">
      <Typography className={classes.title} data-test="pick-a-choice-display">
        Rock - Paper - Scissors
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Beth Ellen",
    fontSize: 40,
    letterSpacing: 3,
  },
}));
