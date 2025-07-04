import React, { useEffect } from "react";

import { CursorHandler, Props } from "./types";
import { Button, CarouselContainer, DisplayCase } from "./Carousel.styles";

import arrow from "@assets/arrow.svg";
import CarouselImages from "./subcomponents/CarouselImages";

const handleSlide = (
	ref: React.RefObject<HTMLDivElement | null>,
	cursorHandler: CursorHandler,
) => {
	if (ref.current) {
		ref.current.scrollLeft = ref.current.offsetWidth * cursorHandler.cursor;
	}
};

const Carousel = (props: Props) => {
	const { products, carouselRef, photoCursor } = props;
	const { cursor, setCursor } = props.cursorHandler;

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = carouselRef.current.offsetWidth * cursor;
		}
	}, [cursor]);

	return (
		<CarouselContainer>
			<Button
				$side="left"
				onClick={() => {
					handleSlide(carouselRef, props.cursorHandler);
					if (cursor > 0) {
						setCursor(cursor - 1);
					} else {
						setCursor(products.length - 1);
					}
				}}
			>
				<img src={arrow} />
			</Button>
			<DisplayCase ref={carouselRef}>
				<CarouselImages photoCursor={photoCursor} products={products} />
				);
			</DisplayCase>
			<Button
				$side="right"
				onClick={() => {
					handleSlide(carouselRef, props.cursorHandler);
					if (cursor < products.length - 1) {
						setCursor(cursor + 1);
					} else {
						setCursor(0);
					}
				}}
			>
				<img src={arrow} />
			</Button>
		</CarouselContainer>
	);
};

export default Carousel;
