import { Link } from "react-router-dom";
import styled from "styled-components";

export const TagSideBar = styled.div`
  padding: 5px 10px 10px;
  background-color: #f3f3f3;
  border-radius: 4px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
`;

export const TagLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
  margin-right: 3px;
  margin-bottom: 3.2px;
  :hover {
    background-color: #687075;
  }
  background-color: ${(props) =>
    props.curritem === props.item ? " #687075" : "#818a91"};
  text-decoration: ${(props) =>
    props.curritem === props.item ? "underline" : "none"};
`;
