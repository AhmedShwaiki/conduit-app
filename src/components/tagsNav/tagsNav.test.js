import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import { React } from "react";
import TagsNav from "./tagsNav";

it("renders correctly", () => {
  const wrapper = shallow(<TagsNav />);
});
