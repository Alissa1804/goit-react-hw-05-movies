import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 320px) {
    gap: 15px;
  }
  @media screen and (min-width: 1200px) {
    gap: 30px;
  }
`;
export const Logo = styled(NavLink)`
  color: #fff;

  font-family: Pacifico;
  @media screen and (min-width: 320px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  @media screen and (min-width: 320px) {
    gap: 10px;
  }
  @media screen and (min-width: 1200px) {
    gap: 15px;
  } ;
`;

export const Navlink = styled(NavLink)`
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  border-radius: 3px;
  height: 35px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
  font-size: 24px;
  border: none;

  @media screen and (min-width: 320px) {
    width: 75px;
  }
  @media screen and (min-width: 1200px) {
    width: 85px;
  }

  &:hover {
    background-color: #08aeea;
    background-image: none;
  }
  &.active {
    border: 2px solid #fff;
    color: #fff;
  }
`;
