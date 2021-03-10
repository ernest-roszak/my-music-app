import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 500px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.powderblue};
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.darkslategray};
  border-radius: 5px;
`;
export const List = styled.ul`
  text-align: left;
  padding: 0;
  list-style-type: none;
  overflow: scroll;
  max-height: 100%;
`;
