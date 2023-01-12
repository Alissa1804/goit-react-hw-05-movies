import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90%;
  gap: 8px;
  margin-top: -18px;
  @media screen and (min-width: 768px) {
    gap: 15px;
    width: 80%;
  }
`;

export const ListItem = styled.li`
  flex: display;
  background-color: #212121;
  padding-bottom: 5px;
  border-radius: 5px;
  border: 2px solid #2af598;
  overflow: hidden;
  width: 48%;
  @media screen and (min-width: 420px) {
    width: 18%;
  }
  @media screen and (min-width: 1200px) {
    width: 13%;
  }
`;
export const Img = styled.img`
  display: block;
  flex-grow: 1;
`;
export const Info = styled.div`
  padding: 5px;
`;

export const Span = styled.span`
  color: #08aeea;
`;
