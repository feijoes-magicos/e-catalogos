import { PacksHandler, Props } from "./types";
import styles from "./priceControlPanel.module.css";

import minus from "@assets/minus.svg";
import plus from "@assets/plus.svg";

const handlePurchaseDraft = (
  cursor: number,
  packsHandler: PacksHandler,
  operation: "increment" | "decrement",
) => {
  const { packs, setPacks } = packsHandler;
  setPacks(
    packs.map((pack) => {
      if (pack.id === cursor) {
        if (operation === "increment") {
          return {
            ...pack,
            total: pack.total + 1,
          };
        } else {
          return {
            ...pack,
            total: pack.total > 0 ? pack.total - 1 : pack.total,
          };
        }
      }
      return pack;
    }),
  );
};

const PriceControlPanel = (props: Props) => {
  const { cursor, packsHandler } = props;
  return (
    <div className={styles.packPrice_container}>
      <div className={styles.tab}>
        <p style={{ fontWeight: "bold", fontSize: 12 }}>Atual</p>
        <p>
          R$:
          {packsHandler.packs
            ? (
                packsHandler.packs[cursor].total *
                packsHandler.packs[cursor].packs[0].price
              ).toFixed(2)
            : (0).toFixed(2)}
        </p>
      </div>
      <a
        className={styles.icon}
        onClick={(e) => {
          e.preventDefault();
          handlePurchaseDraft(cursor, packsHandler, "decrement");
        }}
      >
        <div>
          <img src={minus} />
        </div>
      </a>
      <div className={styles.icon}>
        <h2>{packsHandler.packs ? packsHandler.packs[cursor].total : "..."}</h2>
      </div>
      <a
        className={styles.icon}
        onClick={(e) => {
          e.preventDefault();
          handlePurchaseDraft(cursor, props.packsHandler, "increment");
        }}
      >
        <div>
          <img src={plus} />
        </div>
      </a>
      <div className={styles.tab}>
        <p style={{ fontWeight: "bold", fontSize: 12 }}>Acumulado</p>
        <p>
          R$:
          {packsHandler.packs
            .reduce((acc, packs) => packs.total * packs.packs[0].price + acc, 0)
            .toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default PriceControlPanel;
