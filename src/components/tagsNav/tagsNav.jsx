import * as styled from "./tagsNavStyles";

const TagsNav = ({ selectedtag, onItemSelect }) => {
  return (
    <styled.FeedTab>
      <li>
        <styled.FeedLink onClick={() => onItemSelect()} to="#">
          Global Feed
        </styled.FeedLink>
        {selectedtag === undefined ? null : (
          <styled.FeedLink selectedtag={selectedtag} to="#">
            {`#` + selectedtag}
          </styled.FeedLink>
        )}
      </li>
    </styled.FeedTab>
  );
};

export default TagsNav;
