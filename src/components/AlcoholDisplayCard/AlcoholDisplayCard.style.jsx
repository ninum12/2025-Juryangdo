import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AlcoholCellWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AlcoholCell = styled.div`
  margin: -1px;
  padding: 0;
  width: 100%;
  height: 100%;
  min-height: 50px;

  text-align: center;
  font-size: 12px;
  border: 2px solid #000000;

  background-size: 50px;
  background-position: center;
`;

export const EmptyLightGrayCell = styled.div`
  margin: -1px;
  padding: 0;
  width: 100%;
  height: 100%;

  background-color: #d9d9d9;
  border: 2px solid #000000;
`;
