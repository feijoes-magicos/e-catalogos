import { Props } from "./types";
import {
	ControlPanelContainer,
	FirstRowFunctions,
	Icon,
	IconInnerImg,
	Label,
	PicDisplay,
	SecondRowFunctions,
	Span,
	Sweep,
} from "./ControlPanel.styles";

import swap from "@assets/swap.png";
import seek from "@assets/seek.svg";
import info from "@assets/info.svg";
import shopCart from "@assets/shopCart.svg";

import ImageSelector from "./subcomponents/ImageSelector";

const ControlPanel = (props: Props) => {
	const { products, cursor, setPhotoCursor } = props;
	const { infoModal, setInfoModal } = props.infoModalHandler;
	const { seekModal, setSeekModal } = props.seekModalHandler;
	const { reversedPack, setReversedPack } = props.reversedPackHandler;
	return (
		<ControlPanelContainer>
			<FirstRowFunctions>
				<a
					onClick={(e) => {
						e.preventDefault();
						setInfoModal(!infoModal);
					}}
				>
					<Icon>
						<IconInnerImg src={info} />
					</Icon>
				</a>
				<a
					onClick={(e) => {
						e.preventDefault();
						setSeekModal(!seekModal);
					}}
				>
					<Icon>
						<IconInnerImg src={seek} />
					</Icon>
				</a>

				<PicDisplay>
					<ImageSelector
						setPhotoCursor={setPhotoCursor}
						images={products[cursor].images}
					/>
				</PicDisplay>
				<Icon>
					<IconInnerImg src={shopCart} />
				</Icon>
			</FirstRowFunctions>
			<p style={{ color: "#888888", fontSize: 10 }}>preços ilustrativos</p>
			<hr style={{ width: "90%", color: "#CCD0CF" }} />
			<SecondRowFunctions>
				<Sweep
					onClick={() => {
						setReversedPack(!reversedPack);
					}}
				>
					<IconInnerImg src={swap} />
				</Sweep>
				<Label>{products[cursor].subcategories}</Label>
				<Label>
					Ref:
					<span style={{ color: "black" }}>{products[cursor].reference}</span>
				</Label>
				<Label>
					R$:
					<Span>{products[cursor].skus[0].price}</Span>
				</Label>
			</SecondRowFunctions>
		</ControlPanelContainer>
	);
};

export default ControlPanel;
