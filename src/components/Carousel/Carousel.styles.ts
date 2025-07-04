import styled from "styled-components";

export const CarouselContainer = styled.div`
  height: 50%;
  position: relative;
  width: 100%;
`;
export const DisplayCase = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  align-items: center;
  overflow: hidden;
  position: relative;

  scroll-behavior: smooth;
`;
export const Button = styled.div<{ $side: "left" | "right" }>`
  position: absolute;
  bottom: 5%;
  z-index: 10;
  ${(props) =>
		props.$side === "right"
			? "transform: scaleX(-1); right:25px"
			: "left:25px;"}
`;

export const ImageDisplay = styled.img`
  height: 100%;
  aspect-ratio: inherit;
`;

export const Item = styled.div`
	flex: none;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`
