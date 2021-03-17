import { mount } from "enzyme";
import { React } from "react";
import Article from "../article/article";
import { BrowserRouter as Router } from "react-router-dom";

const article = {
  title: "hgh",
  slug: "hgh-tirw6b",
  body: "hghg",
  createdAt: "2021-03-16T14:47:27.993Z",
  updatedAt: "2021-03-16T14:47:27.993Z",
  tagList: [],
  description: "hghg",
  author: {
    username: "slava02071990",
    bio: null,
    image: "https://static.productionready.io/images/smiley-cyrus.jpg",
    following: false,
  },
  favorited: false,
  favoritesCount: 0,
};

describe("<Article>", () => {
  it("should accept article props", () => {
    const wrapper = mount(
      <Router>
        <Article article={article} />
      </Router>
    );
    expect(wrapper.props().children.props.article).toEqual(article);
  });

  it("contains author username", () => {
    const wrapper = mount(
      <Router>
        <Article article={article} />
      </Router>
    );
    const value = wrapper.find("h3").text();
    expect(value).toEqual("hgh");
  });
});
