jest.unmock("../Visible");

import React from "react";
import { shallow } from "enzyme";

import Visible from "../Visible";

describe("Visible", () => {
  it("when isVisible is false, should render null", () => {
    // Arrange
    const wrapper = shallow(<Visible isVisible={false}>Hello React!</Visible>);

    // Act
    // Assert
    expect(wrapper.getElements()[0]).toBeNull();
  });

  it("when isVisible is true, should render child", () => {
    // Arrange
    const wrapper = shallow(
      <Visible isVisible={true}>
        <div>Hello React!</div>
      </Visible>
    );

    // Act
    // Assert
    expect(wrapper.find("div").length).toEqual(1);
    expect(wrapper.find("div").text()).toBe("Hello React!");
  });
});
