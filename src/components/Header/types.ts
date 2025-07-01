import { Product } from "src/RNTypes";

export interface Props {
  currentCategory: string;
  products: Array<Product>;
  categories: Array<string>;
  setCursor: (x: number) => void;
};
