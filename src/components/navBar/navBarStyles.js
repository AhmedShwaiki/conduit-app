import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavDiv = styled.nav`
  padding: 0px 20px;
`;

export const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled(Link)`
  font-size: 1.5rem;
  font-family: titillium web, sans-serif;
  font-weight: 600;
  color: #5cb85c;
  cursor: pointer;
  text-decoration: none;
  order: 3;
  margin-left: auto;
`;

export const NavLi = styled.li`
  padding: 15px 5px;
`;

export const NavBarLink = styled(NavLink)`
  color: rgba(0, 0, 0, 0.3);
  text-decoration: none;
  :hover {
    color: rgba(0, 0, 0, 0.514);
  }
  transition: all 0.3s ease 0s;
  padding: 15px 5px;
  display: block;
  padding-top: 0.425rem;
  padding-bottom: 0.425rem;
`;
