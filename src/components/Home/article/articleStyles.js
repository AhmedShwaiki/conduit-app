import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleMeta = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const AuthorMetaContainer = styled.div`
  text-align: left;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
`;
export const MetaName = styled(Link)`
  color: #5cb85c;
  font-weight: 400;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: #3f8d3f;
  }
`;

export const MetaDate = styled.span`
  color: #bbb;
  font-size: 0.8rem;
`;

export const ImgContainer = styled(Link)`
  height: 35px;
  width: 35px;
`;
export const AuthorImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 30px;
`;

export const ArticleContent = styled.div`
  cursor: pointer;
  margin-bottom: 16px;
  text-align: left;
`;

export const ArticleTitle = styled.h3`
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const ArticleBody = styled(ArticleContent)`
  color: #999;
`;
export const ReadMoreDiv = styled(ArticleContent)`
  color: #bbb;
  font-size: 0.8rem;
`;
