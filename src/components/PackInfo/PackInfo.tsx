import { Props } from "./types";
import equal from "@assets/equal.svg";
import DisplayAmount from "./subcomponents/DisplayAmount";
import { BottomContainer, PackBuilder } from "./PackInfo.styles";

const PackInfo = (props: Props) => {
  const { cursor, packs } = props;
  return (
    <BottomContainer>
      <PackBuilder>
        {packs &&
          packs[cursor].packs.map((pack, indice) => (
            <div key={indice} style={{ display: "flex", gap: 20 }}>
                  <DisplayAmount
                    modelSize={pack.size.toUpperCase()}
                    value={pack.minQuantity}
                  />
                  {indice === packs[cursor].packs.length - 1 && (
                    <>
                      <img src={equal} />
                      <DisplayAmount
                        value={
                          packs[cursor].packs.reduce(
                            (acc, vlr) => vlr.minQuantity + acc,
                            0,
                          ) * packs[cursor].total
                        }
                      />
                    </>
                  )}
            </div>
          ))}
      </PackBuilder>
    </BottomContainer>
  );
};

export default PackInfo;
