import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const Logo = styled(NavLink)`
  color: #fff;
  font-size: 30px;
  font-family: Pacifico;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const Navlink = styled(NavLink)`
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  border-radius: 3px;
  width: 85px;
  height: 35px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
  font-size: 24px;
  border: none;
  &:hover {
    background-color: #08aeea;
    background-image: none;
  }
  &.active {
    border: 2px solid #fff;
    color: #fff;
  }
`;
