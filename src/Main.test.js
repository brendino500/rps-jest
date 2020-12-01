import { mount } from "enzyme";
import { render, screen } from "@testing-library/react";
import { findByTestAttr } from "./test/testUtils";

import Main from "./Main";

const setup = () => {
  return mount(<Main />);
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-main");
  expect(component.length).toBe(1);
});

test("Instructions appear", () => {
  const wrapper = setup();
  const instructions = findByTestAttr(wrapper, "pick-a-choice-display").text();
  expect(instructions).toBe("Pick a choice");
});
