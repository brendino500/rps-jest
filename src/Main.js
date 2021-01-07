import React from "react";
import TextAnimation from "./styles/TextAnimation";

export default function Main() {
  return (
    <>
      <div className="test">
        <div className="small" data-test="component-main">
          <small className="small" data-test="pick-a-choice-display">
            Rock - Paper - Scissors
          </small>
        </div>
      </div>
      <TextAnimation />
    </>
  );
}
