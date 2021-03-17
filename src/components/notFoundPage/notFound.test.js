import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import { React } from "react";
import NotFound from "./notFound";
describe("notFound componenet", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<NotFound />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
