import { useState } from "react";
import { getArticles } from "../../services/fakeArticlesService";

const ArticleList = () => {
  const [articles, setArticles] = useState(getArticles());

  return <div></div>;
};

export default ArticleList;
