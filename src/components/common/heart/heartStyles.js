import styled from "styled-components";

export const HeartIcon = styled.img`
  width: 13px;
  height: 12px;
  padding-right: 2px;
  filter: ${(props) =>
    props.favorited ? "brightness(0) invert(1)" : "brightness(1) invert(0)"};
`;

export const LikeButton = styled.button`
  width: 40px;
  height: 25px;
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => (!props.favorited ? "white" : "#5cb85c")};
  color: ${(props) => (props.favorited ? "#fff" : "#5cb85c")};
  border: 1px solid #5cb85c;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.2rem;
  font-size: 0.875rem;
  cursor: pointer;
  :hover {
    background-color: #5cb85c;
    color: #fff;
    ${HeartIcon} {
      filter: brightness(0) invert(1);
    }
  }
`;
