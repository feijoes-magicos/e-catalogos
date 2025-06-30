export interface fotos {
  id: number;
  order: number;
  path: string;
}
export interface Modelo {
	id: number;
	size: string;
	stock: number;
	open_grid: boolean;
	min_quantity: number;
}
export interface Pack extends Modelo {
	quantia: number;
}

export interface Packs {
	packs: Array<Pack>;
	total: number;
	id: number;
	preco: number;
}

export interface Produto {
	id: string;
	name: string;
	reference: string;
	gender: string;
	category: string;
	subcategory: string | null;
	prompt_delivery: boolean;
	skus: Array<Modelo>;
	brand: string;
	images: Array<fotos>;
	colors: string[];
	companies: { key: number };
	price: number;
}
