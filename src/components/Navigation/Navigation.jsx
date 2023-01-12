import { Navlink, NavList, Nav, Logo } from '../Navigation/Navigation';

export const Navigation = () => {
  return (
    <Nav>
      <Logo to="/" end>
        Moviethek
      </Logo>
      <NavList>
        <li>
          <Navlink to="/" end>
            Home
          </Navlink>
        </li>
        <li>
          <Navlink to="/movies">Movies</Navlink>
        </li>
      </NavList>
    </Nav>
  );
};
