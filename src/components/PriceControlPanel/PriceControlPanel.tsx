import { PacksHandler, Props } from "./types";

import minus from "@assets/minus.svg";
import plus from "@assets/plus.svg";
import { Icon, PackPriceContainer, Tab } from "./PriceControlPanel.styles";

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
  const currentPackPrice = packsHandler.packs[cursor].packs.reduce(
    (acc, pack) => Number.parseFloat(pack.price) + acc,
    0,
  );
  return (
    <PackPriceContainer>
      <Tab>
        <p style={{ fontWeight: "bold", fontSize: 12 }}>Atual</p>
        <p>
          R$:
          {packsHandler.packs
            ? (packsHandler.packs[cursor].total * currentPackPrice).toFixed(2)
            : (0).toFixed(2)}
        </p>
      </Tab>
      <Icon
        onClick={(e) => {
          e.preventDefault();
          handlePurchaseDraft(cursor, packsHandler, "decrement");
        }}
      >
        <div>
          <img src={minus} />
        </div>
      </Icon>
      <Icon>
        <h2>{packsHandler.packs ? packsHandler.packs[cursor].total : "..."}</h2>
      </Icon>
      <Icon
        onClick={(e) => {
          e.preventDefault();
          handlePurchaseDraft(cursor, props.packsHandler, "increment");
        }}
      >
        <div>
          <img src={plus} />
        </div>
      </Icon>
      <Tab>
        <p style={{ fontWeight: "bold", fontSize: 12 }}>Acumulado</p>
        <p>
          R$:
          {packsHandler.packs
            .reduce(
              (acc, packs) =>
                acc +
                packs.packs.reduce(
                  (acc, pack) =>
                    acc + Number.parseFloat(pack.price) * packs.total,
                  0,
                ),
              0,
            )
            .toFixed(2)}
        </p>
      </Tab>
    </PackPriceContainer>
  );
};

export default PriceControlPanel;
