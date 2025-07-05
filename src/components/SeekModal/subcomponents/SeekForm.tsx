import { useState } from "react";
import { SeekerHandler } from "../types";
import { SeekModalBody } from "../SeekModal.styles";

type Props = {
	cursorState: (x: number) => void;
	setOpenStatus: () => void;
	enderecos: { id: number; ref: string }[];
};

const seekHandler = (params: SeekerHandler) => {
	const { enderecos, refEncontrada } = params;
	const { cursorState, setRefEncontrada, setTentativaBusca, setOpenStatus } =
		params;
	const refEscrita = document.getElementById("ref") as HTMLInputElement;
	enderecos.forEach((endereco) => {
		if (
			endereco.ref === refEscrita.value &&
			(typeof refEscrita.value === "string" &&
			!(["<", ">"].some((it) => refEscrita.value.includes(it))))
		) {
			cursorState(endereco.id);
			setOpenStatus();
			setRefEncontrada(!refEncontrada);
		}
		return endereco;
	});
	setTentativaBusca(true);
};

const SeekForm = (props: Props) => {
	const { enderecos, cursorState, setOpenStatus } = props;
	const [refEncontrada, setRefEncontrada] = useState(false);
	const [tentativaBusca, setTentativaBusca] = useState(false);
	const [ref, setRef] = useState<string>("");

	return (
		<SeekModalBody
			onSubmit={(e) => {
				e.preventDefault();
				seekHandler({
					refEncontrada,
					enderecos,
					setOpenStatus,
					cursorState,
					setRefEncontrada,
					setTentativaBusca,
				});
			}}
		>
			<input
				type="text"
				placeholder="00.00.000"
				onChange={(e) => {
					e.preventDefault();
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
		</SeekModalBody>
	);
};

export default SeekForm;
