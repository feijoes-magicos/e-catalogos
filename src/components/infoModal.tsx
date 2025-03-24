import React from "react";
import "../App.css";

export interface InfoProduto {
  nomeProduto: string;
  referencia: string;
  marca: string;
  categoria: string;
  genero: string;
}
interface Props {
  isOpen: boolean;
  info: InfoProduto;
  state: () => void;
}
const InfoModal = (props: Props) => {
  if (props.isOpen) {
    return (
      <div
        className="Modal"
        onClick={() => {
          props.state();
        }}
      >
        <div className="Janela">
          <div
            className="cabecalho"
            style={{
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2 style={{ color: "white" }}>Informações</h2>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                props.state();
              }}
              style={{ position: "absolute", right: "2%", top: "4%" }}
            >
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                fillRule="evenodd"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
              </svg>
            </a>
          </div>
          <h3 style={{ fontSize: 14, alignSelf: "center" }}>Cores</h3>
          <div className="corpoModalInfo">
            <p>
              Nome do Produto: {props.info ? props.info.nomeProduto : "..."}
            </p>
            <p>Referencia: {props.info ? props.info.referencia : "..."}</p>
            <p>Marca: {props.info ? props.info.marca : "..."}</p>
            <p>Categoria: {props.info ? props.info.categoria : "..."}</p>
            <p>Genero: {props.info ? props.info.genero : "..."}</p>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default InfoModal;
