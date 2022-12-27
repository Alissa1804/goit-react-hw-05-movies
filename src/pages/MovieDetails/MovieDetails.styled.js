import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
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
  margin-bottom: 15px;
  &:hover {
    color: #fff;
    border: 2px solid #fff;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  gap: 30px;
  margin-bottom: 30px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #212121;
  font-size: 20px;
`;

export const Img = styled.img`
  min-width: 35%;
  border-radius: 5px;
`;

export const Box = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
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
  border: 2px solid #212121;
  &:hover {
    color: #fff;
    border: 2px solid #fff;
  }
`;

export const GList = styled.ul`
  display: flex;
  gap: 5px;
`;
