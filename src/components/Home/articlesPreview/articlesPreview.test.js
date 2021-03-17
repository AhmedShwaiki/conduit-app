import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import { React } from "react";
import ArticlesPreview from "./articlesPreview";
import { BrowserRouter as Router } from "react-router-dom";

it("renders correctly without crashing", () => {
  shallow(<ArticlesPreview articles={[]} />);
});
it("renders correctly", () => {
  const tree = mount(<ArticlesPreview articles={[]} />);
  expect(toJson(tree)).toMatchSnapshot();
});
