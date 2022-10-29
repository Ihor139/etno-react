export interface Product {
	_id: object;
	category: string[];
	price: {
		base: number;
		currency: string;
	};
	size: string;
	amount: number;
	features?: string[];
	colors?: string[];
	images?: string[];
	title: string;
	link: string;
}

export interface Navigation {
}
