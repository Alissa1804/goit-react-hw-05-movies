import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 95vw;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 14px;
`;

export const MTitle = styled.h3`
  padding: 8px;
  color: #2af598;
`;

export const ListItem = styled.li`
  display: flex;
  width: 9%;
  background-color: #212121;
  padding-bottom: 5px;
  border-radius: 5px;
  border: 2px solid #2af598;
  overflow: hidden;
  object-fit: cover;
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;

export const Img = styled.img`
  width: 100%;
  flex-grow: 1;
`;

export const Button = styled.button`
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  border-radius: 5px;
  font-family: Dosis;
  width: 85px;
  height: 40px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
  font-size: 24px;
  border: 2px solid #212121;
  cursor: pointer;
  &:hover {
    color: #fff;
    border: 2px solid #fff;
  }
`;

export const Input = styled.input`
  display: inline-block;
  border-radius: 5px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  height: 40px;
  padding-left: 10px;
  padding-right: 4px;
  color: #fff;
  background-color: #212121;
  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    color: #2af598;
    opacity: 1;
    font-family: pacifico;
    font-size: 18px;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 5px;
`;

export const Loadmore = styled.button`
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  border-radius: 5px;
  font-family: Dosis;
  min-width: 85px;
  height: 40px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
  font-size: 24px;
  border: 2px solid #212121;
  cursor: pointer;
  &:hover {
    color: #fff;
    border: 2px solid #fff;
  }
`;
