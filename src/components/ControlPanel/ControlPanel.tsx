import { Props } from "./types";

import styles from "./controlPanel.module.css";

import swap from "@assets/swap.png";
import seek from "@assets/seek.svg";
import info from "@assets/info.svg";
import shopCart from "@assets/shopCart.svg";
import imageUndefined from "@assets/image-undefined.png";

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  target.onerror = null;
  target.src = imageUndefined;
};

const ControlPanel = (props: Props) => {
  const { products, cursor, setPhotoCursor } = props;
  const { infoModal, setInfoModal } = props.infoModalHandler;
  const {seekModal, setSeekModal} = props.seekModalHandler;
  const { reversedPack, setReversedPack } = props.reversedPackHandler;
  return (
    <div className={styles.control_container}>
      <div className={styles.first_row}>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setInfoModal(!infoModal);
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
            setSeekModal(!seekModal);
          }}
        >
          <div className={styles.icon}>
            <img src={seek} className={styles.icon_inner_img} />
          </div>
        </a>

        <div className={styles.pic_display}>
          {products
            ? products[cursor].images.map((image) => {
                return (
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      setPhotoCursor(image.order - 1);
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
                        onError={handleImageError}
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
      <div className={styles.second_row}>
        <div
          id={styles.sweep}
          onClick={() => {
            setReversedPack(!reversedPack);
          }}
        >
          <img src={swap} className={styles.icon_inner_img} />
        </div>
        <p style={{ color: "#809caa" }}>
          Ref:{" "}
          <span style={{ color: "black" }}>
            {products ? products[cursor].reference : "..."}
          </span>
        </p>
        <p style={{ color: "#809caa" }}>
          R$:{" "}
          <span style={{ color: "black" }}>
            {products ? products[cursor].skus[0].price : "..."}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ControlPanel;
