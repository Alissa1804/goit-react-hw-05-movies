import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 17px;
  width: 80%;
  margin-top: -18px;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1200px) {
    width: 45%;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #212121;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;
`;

export const A = styled.h3`
  color: #08aeea;
`;

export const P = styled.p`
  margin-top: -20px;
  font-size: 18px;
  color: #252525;
`;
