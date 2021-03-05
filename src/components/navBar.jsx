import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavDiv>
      <NavUl>
        <NavLi>
          <NavLogo to="/">conduit</NavLogo>
        </NavLi>
        <NavUl>
          <NavLi>
            <NavBarLink to="/">Home</NavBarLink>
          </NavLi>
          <NavLi>
            <NavBarLink to="/login">Sign in</NavBarLink>
          </NavLi>
          <NavLi>
            <NavBarLink to="/register">Sign up</NavBarLink>
          </NavLi>
        </NavUl>
      </NavUl>
    </NavDiv>
  );
};

export default NavBar;

//NavBar style
const NavDiv = styled.nav`
  padding: 0px 20%;
`;

const NavUl = styled.ul`
  list-style: none;
  display: felx;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled(Link)`
  font-size: 1.5rem;
  font-family: titillium web, sans-serif;
  font-weight: 600;
  color: #5cb85c;
  line-height: 1.5;
  cursor: pointer;
  text-decoration: none;
  order: 3;
  margin-left: auto;
`;

const NavLi = styled.li`
  font-size: 1rem;
  padding: 5px 5px;
`;

const NavBarLink = styled(NavLink)`
  font-size: 1rem;
  padding: 15px 5px;
  display: block;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.3);
  :hover {
    color: rgba(0, 0, 0, 0.514);
  }
  line-height: 1.5;
  padding-top: 0.425rem;
  padding-bottom: 0.425rem;
  transition: all 0.3s ease 0s;
`;
