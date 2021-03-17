import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import { React } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainView from "./mainView";

it("renders styles", () => {
  shallow(<MainView />);
});

it("renders correctly", () => {
  const wrapper = mount(
    <Router>
      <MainView />
    </Router>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
