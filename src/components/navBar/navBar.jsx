import * as styled from "./navBarStyles";

const NavBar = () => {
  return (
    <styled.NavDiv>
      <styled.NavUl>
        <styled.NavLi>
          <styled.NavLogo to="/">conduit</styled.NavLogo>
        </styled.NavLi>
        <styled.NavUl>
          <styled.NavLi>
            <styled.NavBarLink to="/">Home</styled.NavBarLink>
          </styled.NavLi>
          <styled.NavLi>
            <styled.NavBarLink to="/login">Sign in</styled.NavBarLink>
          </styled.NavLi>
          <styled.NavLi>
            <styled.NavBarLink to="/register">Sign up</styled.NavBarLink>
          </styled.NavLi>
        </styled.NavUl>
      </styled.NavUl>
    </styled.NavDiv>
  );
};

export default NavBar;
