import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import { React } from "react";
import App from "./App";
import NavBar from "./components/navBar/navBar";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders the NavBar", () => {
  const wrapper = shallow(<App />);
  const navBar = <NavBar />;
  expect(wrapper.contains(navBar)).toEqual(true);
});
