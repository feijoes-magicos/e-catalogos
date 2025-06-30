import { useState } from "react";

import { Props } from "./types";
import styles from "./seekModal.module.css";

import whiteCross from "@assets/cruz_branca.png";
import SeekForm from "./subcomponents/SeekForm";


const SeekModal = (props: Props) => {
	const { cursorState, lista, setOpenStatus } = props;
	const enderecos = lista.map((produto, index) => {
		return { id: index, ref: produto?.reference };
	});

	const [refEncontrada, setRefEncontrada] = useState(false);
	const [tentativaBusca, setTentativaBusca] = useState(false);

	const [ref, setRef] = useState<string>("");

	const seekerParams = {
		enderecos,
		cursorState,
		refEncontrada,
		setOpenStatus,
		setTentativaBusca,
		setRefEncontrada,
	};

	const formProps = {
		ref,
		refEncontrada,
		tentativaBusca,
		seekerParams,
		setRef,
	}

	return (
		<div className={styles.modal}>
			<div className={styles.window}>
				<div
					className={styles.header}
					onBlur={() => {
						setOpenStatus();
					}}
				>
					<h2 style={{ color: "white" }}>Buscar referência</h2>
					<a
						href=""
						onClick={(e) => {
							e.preventDefault();
							setOpenStatus();
						}}
						style={{ position: "absolute", right: "2%", top: "4%" }}
					>
						<img src={whiteCross} />
					</a>
				</div>
				<SeekForm {...formProps} />
			</div>
		</div>
	);
};

export default SeekModal;
