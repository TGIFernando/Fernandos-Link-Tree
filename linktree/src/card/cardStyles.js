import styled from "styled-components";

export const MainCard = styled.div`
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
  @media (max-height: 600px) {
    font-size: 1.5rem;
    margin: 0.5rem;
    width: 30%;
    height: 3rem;
  } ;
`;

export const A = styled.a`
  color: #e2b6bb;
  text-decoration: none;
  width: 100%;
  text-align: center;
  &:hover {
    color: #868683;
    transition-duration: 0.2s;
  }
  @media (max-height: 600px) {
    font-size: 1.5rem;
    margin: 0.5rem;
    width: 30%;
    height: 3rem;
  } ;
`;
