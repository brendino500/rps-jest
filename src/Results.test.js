import { mount } from "enzyme";
import { findByTestAttr } from "./test/testUtils";

import Results from "./Results";

const setup = () => {
  return mount(
    <Results
      playerChoice={"Rock"}
      computerChoice={"Paper"}
      playerScore={0}
      computerScore={0}
      winnerResults={"You lost"}
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

  test("Updates score text", () => {});
});

describe("Events when player wins", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("Player score increments when player wins", () => {
    const compScore = findByTestAttr(wrapper, "player-score-display").text();
    expect(compScore).toBe("1");
  });

  test("Renders 'Player won' results", () => {
    const compWinsResultsText = findByTestAttr(wrapper, "winner-results-text");
    expect(compWinsResultsText.length).toBe(1);
  });
});

describe("Events when computer wins", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("Computer score increments when computer wins", () => {
    const compScore = findByTestAttr(wrapper, "comp-score-display").text();
    expect(compScore).toBe("1");
  });

  test("Renders 'Computer won' results", () => {
    const compWinsResultsText = findByTestAttr(wrapper, "winner-results-text");
    expect(compWinsResultsText.length).toBe(1);
  });
});

describe("Events when draw happens", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("Score doesn't change", () => {});

  test("Renders 'It's a draw' results", () => {
    const compWinsResultsText = findByTestAttr(wrapper, "winner-results-text");
    expect(compWinsResultsText.length).toBe(1);
  });
});
