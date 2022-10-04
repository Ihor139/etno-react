import { fetchProductsPreview } from "./asyncProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductPreviewSliceState, Product } from "./types";

const initialState: ProductPreviewSliceState = {
  products: [],
};

export const slice = createSlice({
  name: "productPreview",
  initialState,
  reducers: {},
  // код для createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(fetchProductsPreview.pending, (state, action) => {});
    builder.addCase(
      fetchProductsPreview.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      }
    );
    builder.addCase(fetchProductsPreview.rejected, (state, action) => {
      state.products = [];
    });
  },
});

export default slice.reducer;
