import { Packs } from "src/RNTypes";

interface SkusHandler {
  skus: number;
  setSkus: (x: number) => void;
}

interface PacksHandler {
  packs: Array<Packs>;
  setPacks: (packs: Array<Packs>) => void;
}

export interface Props {
  cursor: number;
  packInvertido: boolean;
  skusHandler: SkusHandler;
  packsHandler: PacksHandler;
};
