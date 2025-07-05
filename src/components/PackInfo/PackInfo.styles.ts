import styled from "styled-components";

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50%;
`;

export const PackBuilder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  min-width: 50%;
  max-width: fit-content;

  justify-self: center;
  align-self: center;

  gap: 10px;
`;

export const AmountDisplay = styled.div`
  background-color: white;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  position: relative;
`;
export const PackDisplay = styled.div`
  position: relative;
  top: -15px;
  right: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PackDisplayText = styled.p`
  position: absolute;
  color: #fff;
  font-size: 12px;
`;
