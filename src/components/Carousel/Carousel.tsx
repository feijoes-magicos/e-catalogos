import React, { useEffect } from "react";

import { Props } from "./types";
import styles from "./carousel.module.css";

import arrow from "@assets/arrow.svg";
import imageUndefined from "@assets/image-undefined.png";

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  target.onerror = null;
  target.src = imageUndefined;
};

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
  const { products, carouselRef } = props;
  const { cursor, setCursor } = props.cursorHandler;
  const { photoCursor, setPhotoCursor } = props.photoCursorHandler;

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
          setPhotoCursor(0);
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
        {products.map((product, indice) => {
          const paths = product.images.map((imagem) => imagem.path);
          return (
            <div className={styles.item} key={indice}>
              <img
                className={styles.display_image}
                src={paths[photoCursor]}
                onError={handleImageError}
                key={indice}
              />
            </div>
          );
        })}
      </div>
      <div
        className={`${styles.button} invertido`}
        style={{ right: 25 }}
        onClick={() => {
          setPhotoCursor(0);
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
