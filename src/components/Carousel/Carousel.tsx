import React, { useEffect } from "react";

import { Props } from "./types";
import styles from "./carousel.module.css";

import arrow from "@assets/arrow.svg";
import CarouselImages from "./subcomponents/CarouselImages";

const handleSlide = (
	ref: React.RefObject<HTMLDivElement | null>,
	operation: "+" | "-",
) => {
	if (ref.current) {
		operation === "+"
			? (ref.current.scrollLeft += ref.current.offsetWidth)
			: (ref.current.scrollLeft -= ref.current.offsetWidth);
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
		<div className={styles.carousel}>
			<div
				className={styles.button}
				style={{ left: 25 }}
				onClick={() => {
					handleSlide(carouselRef, "-");
					if (cursor > 0) {
						setCursor(cursor - 1);
					} else {
						setCursor(products.length - 1);
					}
				}}
			>
				<img src={arrow} />
			</div>
			<div className={styles.display_case} ref={carouselRef}>
				<CarouselImages photoCursor={photoCursor} products={products} />
				);
			</div>
			<div
				className={`${styles.button} invertido`}
				style={{ right: 25 }}
				onClick={() => {
					handleSlide(carouselRef, "+");
					if (cursor < products.length - 1) {
						setCursor(cursor + 1);
					} else {
						setCursor(0);
					}
				}}
			>
				<img src={arrow} />
			</div>
		</div>
	);
};

export default Carousel;
