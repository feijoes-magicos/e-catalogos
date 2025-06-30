import { Dispatch, SetStateAction } from "react";
import styles from "../seekModal.module.css";
import { SeekerHandler } from "../types";

type Props = {
	refEncontrada: boolean;
	tentativaBusca: boolean;
	seekerParams:SeekerHandler
	ref: string;
	setRef: Dispatch<SetStateAction<string>>;
};

const seekHandler = (params: SeekerHandler) => {
	const { enderecos, refEncontrada } = params;
	const { cursorState, setRefEncontrada, setTentativaBusca, setOpenStatus } =
		params;
	enderecos.forEach((endereco) => {
		const refEscrita = document.getElementById("ref") as HTMLInputElement;
		if (endereco.ref === refEscrita.value) {
			cursorState(endereco.id);
			setOpenStatus();
			setRefEncontrada(!refEncontrada);
		}
		return endereco;
	});
	setTentativaBusca(true);
};

const SeekForm = (props: Props) => {
	const { ref, tentativaBusca, refEncontrada, seekerParams } = props;
	const { setRef} = props;
	return (
		<form
			className={styles.seekModal_body}
			onSubmit={(e) => {
				e.preventDefault()
				seekHandler(seekerParams);
			}}
		>
			<input
				type="text"
				placeholder="00.00.000"
				onChange={(e) => {
					e.preventDefault()
					setRef(e.target.value);
				}}
				value={ref}
				id="ref"
				style={{
					backgroundColor: "#BBB",
					border: 0,
					width: "80%",
					height: 30,
				}}
			/>
			{!refEncontrada && tentativaBusca && (
				<p style={{ fontSize: 10, color: "red" }}>referência não encontrada</p>
			)}
			<input
				type="submit"
				value="Buscar"
				style={{
					width: "20%",
					border: "0",
					borderRadius: 5,
					height: 30,
					backgroundColor: "#809caa",
				}}
			/>
		</form>
	);
};

export default SeekForm;
