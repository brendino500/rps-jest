import { mount } from "enzyme";
import { findByTestAttr } from "./test/testUtils";

import ChoiceButtons from "./ChoiceButtons";

const setup = () => {
  return mount(<ChoiceButtons />);
};

describe("Render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("ChoiceButtons component renders without error", () => {
    const component = findByTestAttr(wrapper, "component-choice-buttons");
    expect(component.length).toBe(1);
  });
  test("Renders choices buttons", () => {
    const choicesButtons = findByTestAttr(wrapper, "choices-buttons");
    expect(choicesButtons.length).toBe(1);
  });
});

describe("Actions onClick", () => {
  test("Calls computerChoice on click", () => {});

  test("Calls compareChoices on click", () => {});

  test("Computer score text changes according to results", () => {});

  test("Player score text changes according to results", () => {});

  test("Results text renders and changes according to results", () => {
    // find button
    //click button
    // find siaply and test that the restults change
  });
});

test("props being passed", () => {});
