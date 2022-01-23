import React from "react";
import { shallow } from 'enzyme';
import Login from './index';

describe("Login", () => {
    // T E S T   N 1
  it('<Login />', () => {
    const component = shallow(<Login />);
    const warpper = component.find(".login");
    expect(warpper.length).toBe(1);
  });

//   it('renders three <Foo /> components', () => {
//     const wrapper = shallow(<Login />);
//     expect(wrapper.find(Foo)).to.have.lengthOf(3);
//   });

});
