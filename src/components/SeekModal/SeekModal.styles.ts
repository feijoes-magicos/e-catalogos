import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;

  z-index: 20;
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;

  background-color: #809caa;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px 5px 0px 0px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Window = styled.div`
  height: 80%;
  width: 80%;
  background-color: white;

  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const SeekModalBody = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 10px;
  padding: 20px;
`;
export const Button = styled.a`
  position: absolute;
  right: 2%;
  top: 4%;
`;
