import styled from "styled-components";
import "../../styles/font.css";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2px solid #000000;
  border-radius: 5px;
`;

export const CircleTextWrapper = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  aspect-ratio: 1;

  background-color: #d9d9d9;
  border-radius: 50%;

  font-family: ${(props) => props.font || "Arial, sans-serif"};
  font-size: ${(props) => props.fontSize || "14px"};
`;
