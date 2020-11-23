import { mount } from "enzyme";
import { render, screen } from "@testing-library/react";
import { findByTestAttr } from "./test/testUtils";

import App from "./App";

const setup = () => {
  return mount(<App />);
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
