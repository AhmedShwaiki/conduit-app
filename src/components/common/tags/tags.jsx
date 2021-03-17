import * as styled from "./tagsStyles";
const Tags = ({ items, onItemSelect, selectedItem, loadingTags }) => {
  return (
    <styled.TagSideBar>
      <p>Popular Tags</p>
      {loadingTags && <p>Loading Tags..</p>}
      {!loadingTags && (
        <>
          <styled.TagContainer>
            {items.map((item) => (
              <styled.TagLink
                onClick={() => onItemSelect(item)}
                key={item}
                item={item}
                curritem={selectedItem}
                to="#"
              >
                {item}
              </styled.TagLink>
            ))}
          </styled.TagContainer>
        </>
      )}
    </styled.TagSideBar>
  );
};

export default Tags;
