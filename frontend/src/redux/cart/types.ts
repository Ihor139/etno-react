import {Product} from "../productPreview/types";
import {Status} from "../../@types";

export type CartItem = {
	product: Product;
	size: string;
	amount: number;
	sizes: {
		[x: string]: string
	};
}

export type CartItems = {
	_id: string;
	token: string;
	products: CartItem[]
}

export interface CartSliceState {
	items: CartItems[];
	status: Status
}

