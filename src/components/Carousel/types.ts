import { Product } from "src/RNTypes";

type CursorHandler = {
  cursor: number;
  setCursor: (x: number) => void;
};
type PhotoCursorHandler = {
  photoCursor: number;
  setPhotoCursor: (x: number) => void;
};
export interface Props {
  products: Array<Product>;
  carouselRef: React.RefObject<HTMLDivElement | null>;
  cursorHandler: CursorHandler;
  photoCursorHandler: PhotoCursorHandler;
}
