interface InfoProduto {
	name: string;
	reference: string;
	brand: string;
	categories: string;
	gender: string;
}

export interface Props {
	setOpenStatus: () => void ;
	info: InfoProduto;
}
