import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import { React } from "react";
import Register from "./register";

describe("Register componenet", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Register />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
