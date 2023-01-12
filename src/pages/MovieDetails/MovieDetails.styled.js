import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (min-width: 320px) {
    width: 95%;
  }
  @media screen and (min-width: 1200px) {
    width: 45%;
  }
`;

export const Button = styled.button`
  align-self: flex-start;
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
  width: 100%;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 30px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 30px;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #212121;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const Img = styled.img`
  min-width: 50%;
  border-radius: 5px;
  @media screen and (min-width: 420px) {
    min-width: 35%;
  }
  @media screen and (min-width: 1200px) {
    min-width: 50%;
  }
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
  flex-direction: column;
  gap: 5px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Circular = styled.div`
  width: 60px;
  height: 60px;
`;
