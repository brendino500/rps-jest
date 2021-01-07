import React from "react";
import TextAnimation from "./styles/TextAnimation";

export default function Main() {
  return (
    <>
      <div className="text-animation">
        <div className="title-animation" data-test="component-main">
          <h1 className="title-animation" data-test="pick-a-choice-display">
            Roche - Papier - Ciseaux
          </h1>
        </div>
      </div>
      <TextAnimation />
    </>
  );
}
