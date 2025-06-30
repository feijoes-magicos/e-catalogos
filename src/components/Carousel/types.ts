import { Produto } from "src/RNTypes";

type CursorHandler = {
  cursor: number;
  setCursor: (x: number) => void;
};
type CursorFotoHandler = {
  cursorFoto: number;
  setCursorFoto: (x: number) => void;
};
export interface Props {
  produtos: Array<Produto>;
  refCarrossel: React.RefObject<HTMLDivElement | null>;
  cursorHandler: CursorHandler;
  cursorFotoHandler: CursorFotoHandler;
};
