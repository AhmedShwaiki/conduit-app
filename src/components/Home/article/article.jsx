import * as styled from "./articleStyles";
import Heart from "../../common/heart/heart";
const Article = ({ article, onClick }) => {
  const { author, title, body, favoritesCount, favorited, createdAt } = article;
  const { image, username } = author;

  return (
    <styled.ArticleWrapper>
      <styled.ArticleInfo>
        <styled.ArticleMeta>
          <styled.ImgContainer to="#">
            <styled.AuthorImg src={image}></styled.AuthorImg>
          </styled.ImgContainer>
          <styled.AuthorMetaContainer>
            <styled.MetaName to="#">{username}</styled.MetaName>
            <styled.MetaDate>
              {new Date(createdAt).toDateString()}
            </styled.MetaDate>
          </styled.AuthorMetaContainer>
        </styled.ArticleMeta>
        <styled.ArticleContent>
          <styled.ArticleTitle>{title}</styled.ArticleTitle>
          <styled.ArticleBody>{body}</styled.ArticleBody>
        </styled.ArticleContent>
        <styled.ReadMoreDiv>Read more...</styled.ReadMoreDiv>
      </styled.ArticleInfo>
      <Heart
        favorited={favorited}
        count={favoritesCount}
        onClick={onClick}
      ></Heart>
    </styled.ArticleWrapper>
  );
};

export default Article;
