import styled from "styled-components";

export const MainButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #868683;
  color: #e2b6bb;
  border-radius: 1rem;
  font-size: 3rem;
  height: 4rem;
  width: 50%;
  margin: 1rem;
  &:hover {
    cursor: pointer;
    width: 60%;
    height: 5rem;
    font-size: 4rem;
    background-color: #e2b6bb;
    color: #868683;
    transition-duration: 0.2s;
  }
`;
