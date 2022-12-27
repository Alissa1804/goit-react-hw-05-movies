import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  color: #212121;
  font-size: 28px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  display: block;
  color: #fff;
  font-size: 14px;
`;

export const MTitle = styled.h3`
  padding: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  width: 18%;
  background-color: #212121;
  padding-bottom: 5px;
  border-radius: 5px;
  border: 2px solid #2af598;
  overflow: hidden;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;

export const Img = styled.img`
  width: 100%;
  flex-grow: 1;
`;
