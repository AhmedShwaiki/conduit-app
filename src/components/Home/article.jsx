import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heart from "./heart.png";

class Article extends Component {
  state = {
    slug: "how-to-train-your-dragon",
    title: "How to train your dragon",
    description: "Ever wonder how?",
    body: "It takes a Jacobian",
    tagList: ["dragons", "training"],
    createdAt: "2016-02-18T03:22:56.637Z",
    updatedAt: "2016-02-18T03:48:35.824Z",
    favorited: false,
    favoritesCount: 0,
    author: {
      username: "jake",
      bio: "I work at statefarm",
      image: "https://static.productionready.io/images/smiley-cyrus.jpg",
      following: false,
    },
  };

  render() {
    return (
      <ArticleContainer>
        <ArticleInfo>
          <ArticleMeta>
            <ImgLink to="#">
              <AuthorImg src={this.state.author.image}></AuthorImg>
            </ImgLink>

            <AuthorMetaContainer>
              <NameLink to="#">{this.state.author.username}</NameLink>
              <MetaDate>Thu Mar 04 2021</MetaDate>
            </AuthorMetaContainer>
          </ArticleMeta>
          <ArticleContent>
            <ArticleTitle className="article-title">
              {this.state.title}
            </ArticleTitle>
            <ArticleBody>{this.state.body}</ArticleBody>
          </ArticleContent>
          <ReadMoreDiv>Read more...</ReadMoreDiv>
        </ArticleInfo>
        <LikeButtonContainer>
          <LikeButton>
            <HeartIcon src={Heart}></HeartIcon>
          </LikeButton>
        </LikeButtonContainer>
      </ArticleContainer>
    );
  }
}

export default Article;

//article style

const ArticleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0% 20%;
`;

const ArticleInfo = styled.div`
  /* border-top: 1px solid rgba(17, 190, 196, 0.1); */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

const AuthorMetaContainer = styled.div`
  text-align: left;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
`;

const ImgLink = styled(Link)`
  height: 32px;
  width: 32px;
`;
const AuthorImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 30px;
`;

const NameLink = styled(Link)`
  color: #5cb85c;
  font-weight: 700;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const MetaDate = styled.span`
  color: #bbb;
  font-size: 0.8rem;
`;

const ArticleContent = styled.div`
  cursor: pointer;
  margin-bottom: 16px;
  text-align: left;
`;

const ArticleTitle = styled.h3`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
`;

const ArticleBody = styled(ArticleContent)`
  color: #999;
`;
const ReadMoreDiv = styled(ArticleContent)`
  text-align: left;
  color: #bbb;
  font-size: 0.8rem;
`;

const LikeButtonContainer = styled.div`
  /* height: 30px;
  width: 45px; */
`;

const LikeButton = styled.button`
  /* border-radius: 0.2rem;
  height: 100%;
  width: 100%;
  color: #5cb85c;
  background-color: transparent;
  border-color: #5cb85c;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle; */
`;

const HeartIcon = styled.img``;
