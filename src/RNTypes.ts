export interface photo {
	id: number;
	order: number;
	path: string;
}
export interface Model {
	id: number;
	size: string;
	stock: number;
	open_grid: boolean;
	minQuantity: number;
	price: string;
}

export interface Packs {
	packs: Array<Model>;
	id: number;
	total: number;
}

export interface Product {
	id: string;
	name: string;
	reference: string;
	gender: string;
	categories: string;
	subcategories: string | null;
	prompt_delivery: boolean;
	skus: Array<Model>;
	brand: string;
	images: Array<photo>;
	colors: string[];
	companies: { key: number };
	price: number;
	packs: Packs;
}
