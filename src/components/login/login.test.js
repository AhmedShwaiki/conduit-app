import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import { React } from "react";
import Login from "./login";
describe("Login componenet", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Login />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
