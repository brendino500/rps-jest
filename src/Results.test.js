import { mount } from "enzyme";
import { findByTestAttr } from "./test/testUtils";

import Results from "./Results";

const setup = () => {
  return mount(
    <Results
      playerChoice={playerChoice}
      computerChoice={computerChoice}
      playerScore={playerScore}
      computerScore={computerScore}
      winnerResults={winnerResults}
    />
  );
};

describe("Render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("Results component renders without error", () => {
    const component = findByTestAttr(wrapper, "component-results");
    expect(component.length).toBe(1);
  });

  test("Renders results text", () => {
    const resultsText = findByTestAttr(wrapper, "results-text");
    expect(resultsText.length).toBe(1);
  });

  test("Renders winner text", () => {
    const resultsText = findByTestAttr(wrapper, "winner-text");
    expect(resultsText.length).toBe(1);
  });

  test("Renders score text", () => {
    const resultsText = findByTestAttr(wrapper, "score-text");
    expect(resultsText.length).toBe(1);
  });
});

describe("Results", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("Player score display starts at 0", () => {
    const score = findByTestAttr(wrapper, "player-score-display").text();
    expect(score).toBe("0");
  });

  test("Computer score display starts at 0", () => {
    const score = findByTestAttr(wrapper, "comp-score-display").text();
    expect(score).toBe("0");
  });

  test("Renders 'Computer won' results", () => {
    const compWinsResultsText = findByTestAttr(wrapper, "comp-wins-text");
    expect(compWinsResultsText.length).toBe(1);
  });

  test("Updates score text", () => {});

  test("Player score increments when player wins", () => {});

  test("Computer score increments when player wins", () => {});
});
