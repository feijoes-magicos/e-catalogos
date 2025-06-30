interface InfoProduto {
	nomeProduto: string;
	referencia: string;
	marca: string;
	categoria: string;
	genero: string;
}

export interface Props {
	viewabilityHandler: { isOpen: boolean; setOpenStatus: () => void };
	info: InfoProduto;
}
