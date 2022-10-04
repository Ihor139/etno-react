import { Product } from "./types";
// вынесли асинхронную логику получения данных с UI в redux

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsPreview = createAsyncThunk("/new-products", async () => {
  const { data } = await axios.get<Product[]>("/new-products");
  return data;
});
