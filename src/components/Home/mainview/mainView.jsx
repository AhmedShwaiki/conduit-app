import { useState, useEffect } from "react";
import axios from "axios";
import ArticlesPreview from "../articlesPreview/articlesPreview";
import TagsNav from "../../tagsNav/tagsNav";
import ReactPaginate from "react-paginate";
import Tags from "../../common/tags/tags";
import * as styled from "./mainViewStyles";
import "../../common/pagination/reactPaginate.css";
const apiEndPoint = "https://conduit.productionready.io/api/";
const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const MainView = () => {
  const [tags, setTags] = useState([]);
  const [articles, setArticles] = useState([]);
  const [pageCount, setPangeCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState();

  useEffect(() => {
    async function getArticles() {
      const respArticles = await axios(
        `${apiEndPoint}articles?${limit(10, currentPage - 1)}`
      );
      const respTags = await axios(`${apiEndPoint}tags`);
      setLoading(false);
      setArticles(respArticles.data.articles);
      setTags(respTags.data.tags);
      setPangeCount(respArticles.data.articlesCount);
    }
    getArticles();
  }, [currentPage]);

  const handleLike = (article) => {
    // const myArticles = [...articles];
    // const index = myArticles.indexOf(article);
    // myArticles[index] = { ...myArticles[index] };
    // myArticles[index].favorited = !myArticles[index].favorited;
    // setArticles(myArticles);
  };

  const handlePageChange = async (e) => {
    const selectedPage = e.selected;
    const respArticles = await axios(
      `${apiEndPoint}articles?${limit(10, selectedPage)}`
    );
    setArticles(respArticles.data.articles);
  };

  const handleTagSelect = async (tag) => {
    const tagQuery =
      tag === undefined
        ? `${apiEndPoint}articles?${limit(10, 0)}`
        : `${apiEndPoint}articles?tag=${tag}`;
    const result = await axios(tagQuery);
    setArticles(result.data.articles);
    setSelectedTag(tag);
    setCurrentPage(1);
  };
  // const filteredArticles = selectedTag
  //   ? articles.filter((article) => article.tagList.includes(selectedTag))
  //   : articles;
  // const paginatedArticles = paginate(filteredArticles, currentPage, pageSize);
  return (
    <styled.RowContainer>
      <styled.ArticlesColumn>
        {loading && (
          <>
            <TagsNav
              selectedtag={selectedTag}
              onItemSelect={handleTagSelect}
              items={tags}
            />
            <styled.Loading className="loading">Loading...</styled.Loading>
          </>
        )}
        {!loading && (
          <>
            <TagsNav
              selectedtag={selectedTag}
              onItemSelect={handleTagSelect}
              items={tags}
            />
            <ArticlesPreview articles={articles} onLike={() => handleLike} />
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </>
        )}
      </styled.ArticlesColumn>
      <styled.TagsColumn>
        <Tags
          items={tags}
          loadingTags={loading}
          onItemSelect={handleTagSelect}
          selectedItem={selectedTag}
        />
      </styled.TagsColumn>
    </styled.RowContainer>
  );
};

export default MainView;
