import styled from "styled-components";
import { Link } from "react-router-dom";

export const FeedTab = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding-bottom: 7px;
`;

export const FeedLink = styled(Link)`
  padding: 0.5em 1em;
  text-decoration: none;
  color: #aaa;
  :hover {
    color: rgba(0, 0, 0, 0.671);
    border-bottom: 2px solid #5cb85c;
  }

  border-bottom: ${(props) =>
    !(props.selectedtag === undefined) ? "2px solid #5cb85c" : ""};
  color: ${(props) =>
    !(props.selectedtag === undefined) ? "rgba(0, 0, 0, 0.671)" : "#aaa"};
  cursor: ${(props) =>
    !(props.selectedtag === undefined) ? "default" : "pointer"};
`;

export const GlobalFeedLink = styled(Link)`
  padding: 0.5em 1em;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.671);
  border-bottom: 2px solid #5cb85c;
  cursor: default;
`;
