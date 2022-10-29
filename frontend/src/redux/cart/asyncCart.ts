import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {CartItems} from "./types";

export const fetchCart = createAsyncThunk("getCart", async () => {
	const {data} = await axios.get<CartItems[]>("/cart");
	return data;
});

export const addToCart = createAsyncThunk("addToCart", async (product) => {
	const {data} = await axios.post<CartItems[]>("/cart", product);
	return data;
});

export const removeFromCart = createAsyncThunk("removeFromCart", async (product) => {
	const {data} = await axios.post<CartItems[]>("/cart/remove", product);
	return data;
});

export const updateQuantity = createAsyncThunk("updateQuantity", async (product) => {
	const {data} = await axios.post<CartItems[]>("/cart/update", product);
	return data;
});
