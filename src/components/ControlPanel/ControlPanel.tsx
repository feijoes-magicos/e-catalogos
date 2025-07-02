import { Props } from "./types";

import styles from "./controlPanel.module.css";

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
		<div className={styles.control_container}>
			<div className={styles.first_row}>
				<a
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
					<ImageSelector
						setPhotoCursor={setPhotoCursor}
						images={products[cursor].images}
					/>
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
				{products[cursor].subcategories}
				</p>
				<p style={{ color: "#809caa" }}>
					Ref:
					<span style={{ color: "black" }}>{products[cursor].reference}</span>
				</p>
				<p style={{ color: "#809caa" }}>
					R$:{" "}
					<span style={{ color: "black" }}>
						{products[cursor].skus[0].price}
					</span>
				</p>
			</div>
		</div>
	);
};

export default ControlPanel;
