jest.dontMock('../Visible');

import React from 'react';
import { shallow } from 'enzyme';

import Visible from '../Visible';

describe('Visible', () => {
  it('when isVisible is false, should render null', () => {
    // Arrange
    const wrapper = shallow(
      <Visible isVisible={false}>
        Hello React!
      < /Visible>
      );

    // Act
    // Assert
    expect(wrapper.find('noscript').length).toEqual(1);
    expect(wrapper.length).toEqual(1);
  });

  it('when isVisible is true, should render div', () => {
    // Arrange
    const wrapper = shallow(
      <Visible isVisible={true}>
        Hello React!
      < /Visible>
      );

    // Act
    // Assert
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').text()).toBe('Hello React!');
  });
});
