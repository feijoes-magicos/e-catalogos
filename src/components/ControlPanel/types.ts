import { Dispatch, SetStateAction } from "react";
import { Produto } from "src/RNTypes";


type ModalPesquisaHandler = {
  modalPesquisa: boolean
  setModalPesquisa: Dispatch<SetStateAction<boolean>>;
};
type ModalInformacoesHandler = {
  modalInformacoes: boolean;
  setModalInformacoes: Dispatch<SetStateAction<boolean>>;
};
type PackInvertidoHandler = {
  packInvertido: boolean;
  setPackInvertido: Dispatch<SetStateAction<boolean>>;
};

export interface Props {
  cursor: number;
  produtos: Array<Produto>;
  setCursorFoto: (x: number) => void;
  packInvertidoHandler: PackInvertidoHandler;
  modalPesquisaHandler: ModalPesquisaHandler;
  modalInformacoesHandler: ModalInformacoesHandler;
}
