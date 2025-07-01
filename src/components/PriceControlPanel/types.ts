import { Dispatch, SetStateAction } from "react";
import { Packs } from "src/RNTypes";

export interface PacksHandler {
  packs: Array<Packs>;
  setPacks: Dispatch<SetStateAction<Array<Packs>>>;
}
export interface Props {
  packsHandler: PacksHandler;
  cursor: number;
}
