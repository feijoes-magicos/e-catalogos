import { Dispatch, SetStateAction } from "react";
import { Produto } from "src/RNTypes";

export interface Props {
	setOpenStatus: () => void;
	cursorState: (x: number) => void;
	lista: Array<Produto>;
}

export interface SeekerHandler {
	enderecos: { id: number; ref: string }[];
	refEncontrada: boolean;
	setTentativaBusca: Dispatch<SetStateAction<boolean>>;
	setRefEncontrada: Dispatch<SetStateAction<boolean>>;
	cursorState: (x: number) => void;
	setOpenStatus: () => void;
}
