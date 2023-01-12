import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 80%;
  gap: 15px;
`;

export const ListItem = styled.li`
  flex: display;
  background-color: #212121;
  padding-bottom: 5px;
  border-radius: 5px;
  border: 2px solid #2af598;
  overflow: hidden;
  width: 13%;
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
