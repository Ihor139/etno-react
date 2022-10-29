import {Status} from "../../@types";

export interface ProductPreviewSliceState {
	items: Product[];
	status: Status;
}

export type Product = {
	prodId: string,
	_id: string;
	category: string[];
	price: {
		base: number;
		currency: string;
	};
	size: string;
	features?: string[];
	colors?: string[];
	images?: string[];
	title: string;
	link: string;
	sizes: object[];
};
