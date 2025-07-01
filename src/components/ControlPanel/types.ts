import { Dispatch, SetStateAction } from "react";
import { Product } from "src/RNTypes";

type SeekModalHandler = {
  seekModal: boolean;
  setSeekModal: Dispatch<SetStateAction<boolean>>;
};

type InfoModalHandler = {
  infoModal: boolean;
  setInfoModal: Dispatch<SetStateAction<boolean>>;
};

type ReversedPackHandler = {
  reversedPack: boolean;
  setReversedPack: Dispatch<SetStateAction<boolean>>;
};

export interface Props {
  cursor: number;
  products: Array<Product>;
  setPhotoCursor: (x: number) => void;
  reversedPackHandler: ReversedPackHandler;
  seekModalHandler: SeekModalHandler;
  infoModalHandler: InfoModalHandler;
}
