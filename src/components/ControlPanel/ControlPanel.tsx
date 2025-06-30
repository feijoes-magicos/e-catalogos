import {Props} from "./types"

import styles from "./controlPanel.module.css";

import swap from "@assets/swap.png";
import seek from "@assets/seek.svg";
import info from "@assets/info.svg";
import shopCart from "@assets/shopCart.svg";

const ControlPanel = (props: Props) => {
  const { produtos, cursor, setCursorFoto } = props;
  const { modalInformacoes, setModalInformacoes } =
    props.modalInformacoesHandler;
  const { modalPesquisa, setModalPesquisa } = props.modalPesquisaHandler;
  const { packInvertido, setPackInvertido } = props.packInvertidoHandler;
  return (
    <div className={styles.control_container}>
      <div className={styles.first_row}>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setModalInformacoes(!modalInformacoes);
          }}
        >
          <div className={styles.icon}>
            <img src={info} className={styles.icon_inner_img} />
          </div>
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setModalPesquisa(!modalPesquisa);
          }}
        >
          <div className={styles.icon}>
            <img src={seek} className={styles.icon_inner_img} />
          </div>
        </a>

        <div className={styles.pic_display}>
          {produtos
            ? produtos[cursor].images.map((image) => {
                return (
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      setCursorFoto(image.order - 1);
                    }}
                    key={image.id}
                  >
                    <div
                      className={styles.mini_pic}
                      style={{ width: 40, height: 40 }}
                    >
                      <img
                        src={image.path}
                        style={{ height: "100%", aspectRatio: "inherit" }}
                      />
                    </div>
                  </a>
                );
              })
            : "..."}
        </div>
        <div
          className={styles.icon}
          onClick={() => {
            console.log("fora de escopo");
          }}
        >
          <img src={shopCart} className={styles.icon_inner_img} />
        </div>
      </div>
      <p style={{ color: "#888888", fontSize: 10 }}>preços ilustrativos</p>
      <hr style={{ width: "90%", color: "#CCD0CF" }} />
      <div
        style={{
          display: "flex",
          height: "fit-content",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <div
          id={styles.sweep}
          onClick={() => {
            setPackInvertido(!packInvertido);
          }}
        >
          <img src={swap} className={styles.icon_inner_img} />
        </div>
        <p style={{ color: "#809caa" }}>
          Ref:{" "}
          <span style={{ color: "black" }}>
            {produtos ? produtos[cursor].reference : "..."}
          </span>
        </p>
        <p style={{ color: "#809caa" }}>
          R$:{" "}
          <span style={{ color: "black" }}>
            {produtos ? produtos[cursor].price.toFixed(2) : "..."}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ControlPanel;
