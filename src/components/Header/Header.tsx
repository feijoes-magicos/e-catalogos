import styles from "./header.module.css";
import { Props } from "./types";

import whiteArrow from "@assets/whiteArrow.png";

const Header = (props: Props) => {
  const { currentCategory, products, categories, setCursor } = props;
  const currentCategoryIndex = categories.indexOf(currentCategory);
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div
          className={`${styles.category_button} invertido`}
          onClick={() => {
            if (products && categories) {
              if (currentCategoryIndex === 0) {
                for (const [index, product] of products.entries()) {
                  if (product.categories == categories[categories.length - 1]) {
                    setCursor(index);
                    break;
                  }
                }
              } else {
                for (const [index, product] of products.entries()) {
                  if (
                    product.categories == categories[currentCategoryIndex - 1]
                  ) {
                    setCursor(index);
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
            {products ? currentCategory : "..."}
          </p>
        </div>
        <div
          className={styles.category_button}
          onClick={() => {
            if (products && categories) {
              if (currentCategoryIndex === categories.length - 1) {
                setCursor(0);
              } else {
                for (const [index, product] of products.entries()) {
                  if (
                    product.categories == categories[currentCategoryIndex + 1]
                  ) {
                    setCursor(index);
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
