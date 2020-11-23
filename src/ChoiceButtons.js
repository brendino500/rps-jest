import React from "react";

export default function Choices(props) {
  return (
    <>
      <section className="buttons" data-test="component-choice-buttons">
        <div className="button-options" data-test="choices-buttons">
          <button
            onClick={props.handleClick}
            className="option-btn"
            id="rock"
            value="rock"
          >
            👊
          </button>
          <button
            onClick={props.handleClick}
            className="option-btn"
            id="paper"
            value="paper"
          >
            ✋
          </button>
          <button
            onClick={props.handleClick}
            className="option-btn"
            id="scissors"
            value="scissors"
          >
            ✌️
          </button>
        </div>
        <div className="reset-button">
          <button
            onClick={props.handleReset}
            className="reset-button"
            id="reset"
          >
            🙌 Reset 🙌
          </button>
        </div>
      </section>
    </>
  );
}
