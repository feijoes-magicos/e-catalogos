import styled from "styled-components";

export const HeaderDisplay = styled.div`
  width: 100%;
  height: 10%;

  background-color: #809caa;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  height: 70%;
  gap: 20px;
`;

export const Button = styled.div<{ $side?: "left" | "right" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.$side === "left"
      ? "transform: scaleX(-1); right:25px"
      : "left:25px;"}
`;
export const FunctionButton = styled(Button)`
  color: #809caa;
  background-color: white;
  aspect-ratio: 1;
  border-radius: 50px;
  width: 25px;
  height: 25px;
  align-self: center;
`;
export const CategoryBox = styled.div`
  width: fit-content;
  background-color: white;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
  width: 150px;
`;
