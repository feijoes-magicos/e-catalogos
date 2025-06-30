import styles from "./header.module.css";
import { Props } from "./types";

import whiteArrow from "@assets/whiteArrow.png";

const Header = (props: Props) => {
  const { categoriaAtual, produtos, categorias, setCursor } = props;
  const indiceCategoriaAtual = categorias.indexOf(categoriaAtual);
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div
          className={`${styles.category_button} invertido`}
          onClick={() => {
            if (produtos && categorias) {
              if (indiceCategoriaAtual === 0) {
                for (const [indice, produto] of produtos.entries()) {
                  if (produto.category == categorias[categorias.length - 1]) {
                    setCursor(indice);
                    break;
                  }
                }
              } else {
                for (const [indice, produto] of produtos.entries()) {
                  if (
                    produto.category == categorias[indiceCategoriaAtual - 1]
                  ) {
                    setCursor(indice);
                    break;
                  }
                }
              }
            }
          }}
        >
          <img
            src={whiteArrow}
            style={{ aspectRatio: "inherit", height: "50%" }}
          />
        </div>
        <div className={styles.category_box}>
          <p style={{ color: "#809caa", fontWeight: "bold" }}>
            {produtos ? categoriaAtual : "..."}
          </p>
        </div>
        <div
          className={styles.category_button}
          onClick={() => {
            if (produtos && categorias) {
              if (indiceCategoriaAtual === categorias.length - 1) {
                setCursor(0);
              } else {
                for (const [indice, produto] of produtos.entries()) {
                  if (
                    produto.category == categorias[indiceCategoriaAtual + 1]
                  ) {
                    setCursor(indice);
                    break;
                  }
                }
              }
            }
          }}
        >
          <img
            src={whiteArrow}
            style={{ aspectRatio: "inherit", height: "50%" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
