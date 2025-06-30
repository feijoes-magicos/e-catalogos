import { Produto } from "src/RNTypes";

export interface Props {
  categoriaAtual: string;
  produtos: Array<Produto>;
  categorias: Array<string>;
  setCursor: (x: number) => void;
};
