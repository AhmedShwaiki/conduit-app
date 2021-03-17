import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import { React } from "react";
import Tags from "./tags";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Tags/>", () => {
  it("tags renders correctly", () => {
    const wrapper = mount(
      <Router>
        <Tags items={["tag1"]} />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
