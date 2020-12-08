import { mount } from "enzyme";
import { findByTestAttr } from "./test/testUtils";

import Results from './Results'

const setup = () => {
  return mount(<Results />)
}

describe("Render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup()
  })

  test("Results component renders without error", () => {
    const component = findByTestAttr(wrapper, "component-results")
    expect(component.length).toBe(1)
  })

  test("Renders results text", () => {
    const resultsText = findByTestAttr(wrapper, "results-text")
    expect(resultsText.length).toBe(1)
  })
})