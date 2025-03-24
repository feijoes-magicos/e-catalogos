import { useState } from "react";
import { product } from "../App";

type Props = {
  isOpen: boolean;
  cursorState: (x: number) => void;
  state: () => void;
  lista: Array<product> | null;
};

export const SeekModal = (props: Props) => {
  const address = props.lista?.map((produto, index) => {
    return { id: index, ref: produto.reference };
  });

  const [refEncontrada, setRefEncontrada] = useState(false);
  const [tentativaBusca, setTentativaBusca] = useState(false);

  const [ref, setRef] = useState<string>("");

  return (
    <div className="Modal">
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
          onBlur={() => {
            props.state();
          }}
        >
          <h2 style={{ color: "white" }}>Buscar referência</h2>
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
        <div className="seekBody">
          <form
            className="formSeek"
            onSubmit={(e) => {
              e.preventDefault();
              address?.forEach((endereco) => {
                const refEscrita = document.getElementById("ref").value;
                if (endereco.ref === refEscrita) {
                  props.cursorState(endereco.id);
                  props.state();
                  setRefEncontrada(!refEncontrada);
                }
                return endereco;
              });
              setTentativaBusca(true);
            }}
          >
            <input
              type="text"
              placeholder="00.00.000"
              onChange={(e) => {
                setRef(e.target.value);
              }}
              value={ref}
              id="ref"
              style={{
                backgroundColor: "#BBB",
                border: 0,
                width: "80%",
                height: 30,
              }}
            />
            {!refEncontrada && tentativaBusca && (
              <p style={{fontSize:10, color:"red"}}>referência não encontrada</p>
            )}
            <input
              type="submit"
              value="Buscar"
              style={{
                width: "20%",
                border: "0",
                borderRadius: 5,
                height: 30,
                backgroundColor: "#809caa",
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SeekModal;
