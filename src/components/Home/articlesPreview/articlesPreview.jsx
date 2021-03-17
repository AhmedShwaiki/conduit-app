import Article from "../article/article";

const ArticlesPreview = ({ articles, onLike }) => {
  return (
    <div>
      {articles.map((article) => (
        <Article
          key={article.slug}
          article={article}
          onClick={onLike}
        ></Article>
      ))}
    </div>
  );
};

export default ArticlesPreview;
