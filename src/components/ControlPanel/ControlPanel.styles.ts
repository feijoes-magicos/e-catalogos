import styled from "styled-components";

export const ControlPanelContainer = styled.div`
  background-color: white;
  height: 49%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px -1px 0px #809caa;
`;

export const FirstRowFunctions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  margin-bottom: 5px;
`;

export const SecondRowFunctions = styled.div`
  display: flex;
  height: fit-content;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const Icon = styled.div`
  height: 40px;
`;

export const Sweep = styled(Icon)`
  background-color: #809caa;
  border-radius: 20px;
`;

export const IconInnerImg = styled.img`
  height: 100%;
  aspect-ratio: inherit;
`;

export const PicDisplay = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const MiniPic = styled.div`
  border: 1px solid #809caa;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const Label = styled.p`
  color: #809caa;
`;
export const Span = styled.span`
  color: black;
`;
