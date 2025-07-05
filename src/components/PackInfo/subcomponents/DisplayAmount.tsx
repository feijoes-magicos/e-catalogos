import circle from "@assets/circle.png";
import {
  AmountDisplay,
  PackDisplay,
  PackDisplayText,
} from "../PackInfo.styles";

interface Props {
  modelSize?: string;
  value: string | number;
}

const DisplayAmount = (props: Props) => {
  return (
    <AmountDisplay>
      {props.modelSize && (
        <PackDisplay>
          <img src={circle} style={{ position: "absolute" }} />
          <PackDisplayText>{props.modelSize}</PackDisplayText>
        </PackDisplay>
      )}
      <p>{props.value}</p>
    </AmountDisplay>
  );
};

export default DisplayAmount;
