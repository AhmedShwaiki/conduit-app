import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import { React } from "react";
import Banner from "./banner";

it("renders correctly", () => {
  const wrapper = shallow(<Banner />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
