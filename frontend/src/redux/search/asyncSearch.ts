import { Product, SearchSliceState } from "./types";
// вынесли асинхронную логику получения данных с UI в redux

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk("search", async (key: string) => {
  const { data } = await axios.get<Product[]>(`/search/${key}`);
  return data;
});
