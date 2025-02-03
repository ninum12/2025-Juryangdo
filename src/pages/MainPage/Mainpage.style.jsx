import styled from "styled-components";

export const Root = styled.div`
  height: 100%;
  weight: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0;
  gap: 0px;

  border: 1px solid blue;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  border: 1px solid green;
  // background-color: aqua;
`;
