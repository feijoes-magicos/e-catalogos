import styles from "../packInfo.module.css";

import circle from "@assets/circle.png";

interface Props {
	modelSize?: string;
	value: string | number;
}

const DisplayAmount = (props: Props) => {
	return (
		<div className={styles.amount_display}>
			{props.modelSize && (
				<div className={styles.packDisplay}>
					<img src={circle} style={{ position: "absolute" }} />
					<p className={styles.packDisplayText}>{props.modelSize}</p>
				</div>
			)}
			<p>{props.value}</p>
		</div>
	);
};

export default DisplayAmount;
