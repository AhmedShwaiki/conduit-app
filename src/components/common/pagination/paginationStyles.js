import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.nav`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

export const PageUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const PageLink = styled(Link)`
  border: 1px #ddd solid;
  margin-left: -1px;
  border-bottom-left-radius: ${(props) =>
    props.page === 1 ? ".25rem" : "0rem"};
  border-top-left-radius: ${(props) => (props.page === 1 ? ".25rem" : "0rem")};
  border-top-right-radius: ${(props) =>
    props.page === props.pagesCount ? ".25rem" : "0rem"};
  border-bottom-right-radius: ${(props) =>
    props.page === props.pagesCount ? ".25rem" : "0rem"};
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  :hover {
    background-color: ${(props) =>
      props.currpage === props.page ? "#5cb85c" : "#ddd"};
    text-decoration: underline;
  }
  color: ${(props) => (props.currpage === props.page ? "#fff" : "#5cb85c;")};
  background-color: ${(props) =>
    props.currpage === props.page ? "#5cb85c" : "#fff"};
`;
