import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import { React } from "react";
import NavBar from "./navBar";
import { BrowserRouter as Router } from "react-router-dom";
it("renders correctly", () => {
  const wrapper = shallow(<NavBar />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
