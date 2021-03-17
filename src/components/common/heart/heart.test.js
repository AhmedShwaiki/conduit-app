import toJson from "enzyme-to-json";
import { shallow, render, mount } from "enzyme";
import { React } from "react";
import Heart from "./heart";

it("renders correctly", () => {
  const wrapper = shallow(<Heart />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
