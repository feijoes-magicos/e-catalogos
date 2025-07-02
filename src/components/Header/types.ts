import { Dispatch, SetStateAction } from "react";
import { Product } from "src/RNTypes";

export interface CategoryChangeHandler {
	currentCategoryIndex: number,
	products: Array<Product>,
	categories: string[],
	setCursor: Dispatch<SetStateAction<number>>,
	vector: "left" | "right",
}

export interface Props {
  currentCategory: string;
  products: Array<Product>;
  categories: Array<string>;
  setCursor: Dispatch<SetStateAction<number>>
};
