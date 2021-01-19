import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import ChoiceButtons from "../components/ChoiceButtons";
const mockHandleClick = jest.fn();
const mockHandleReset = jest.fn();
const setup = () => {
  return mount(
    <ChoiceButtons
      handleClick={mockHandleClick}
      handleReset={mockHandleReset}
    />
  );
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
  const clickButton = () => {
    const wrapper = setup();
    // find button
    const button = findByTestAttr(wrapper, "choice-button");
    //click button
    button.simulate("click");
  };

  test("Calls compChoice on click", () => {
    clickButton();
    expect(mockHandleClick).toBeCalledTimes(1);
  });
});

test("props being passed", () => {});
