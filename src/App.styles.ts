import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		color: black;
		font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
	}

	html,
	body {
		height: 100dvh;
		overflow: hidden;
	}
`;

export const Screen = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100dvh;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  background-color: white;
  position: relative;

  > * {
  }
`;

export const Footer = styled.div`
  background-color: #809caa;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  height: 40%;
  width: 100%;
`;

export const PackDisplay = styled.div<{ $reversed: boolean }>`
  height: 50%;
  display: flex;
  flex-direction: ${(props) => (props.$reversed ? "column-reverse" : "column")};
  position: relative;
`;
