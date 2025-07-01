import { Props } from "./types";
import styles from "./seekModal.module.css";

import whiteCross from "@assets/cruz_branca.png";
import SeekForm from "./subcomponents/SeekForm";

const SeekModal = (props: Props) => {
  const { cursorState, list, setOpenStatus } = props;
  const enderecos = list.map((produto, index) => {
    return { id: index, ref: produto?.reference };
  });

  return (
    <div className={styles.modal}>
      <div className={styles.window}>
        <div
          className={styles.header}
          onBlur={() => {
            setOpenStatus();
          }}
        >
          <h2 style={{ color: "white" }}>Buscar referência</h2>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setOpenStatus();
            }}
            style={{ position: "absolute", right: "2%", top: "4%" }}
          >
            <img src={whiteCross} />
          </a>
        </div>
        <SeekForm
          cursorState={cursorState}
          setOpenStatus={setOpenStatus}
          enderecos={enderecos}
        />
      </div>
    </div>
  );
};

export default SeekModal;
