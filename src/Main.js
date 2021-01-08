import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import TextAnimation from "./styles/TextAnimation";

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

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Beth Ellen",
    fontSize: "1.5em",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 28,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 40,
    },
  },
}));
