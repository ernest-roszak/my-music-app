import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 500px;
  margin: 0 auto;
  padding: 10px 10px 20px;
  background-color: ${({ theme }) => theme.colors.darkslategrey};
  color: ${({ theme }) => theme.colors.lightgreen};
  border-radius: 5px;
`;
export const Cover = styled.img`
  width: 250px;
  height: 250px;
  margin: 10px auto 20px;
  border-radius: 5px;
`;
export const Button = styled.button`
  margin: 0 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.gold};
  border-radius: 5px;
  border-style: none;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;
