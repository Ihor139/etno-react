import { fetchNavigation } from "./asyncNavigation";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item, NavigationSliceState } from "./types";

const initialState: NavigationSliceState = {
  menuItems: [],
};

export const slice = createSlice({
  name: "navigation",
  initialState,
  reducers: {},
  // код для createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(fetchNavigation.pending, (state, action) => {});
    builder.addCase(
      fetchNavigation.fulfilled,
      (state, action: PayloadAction<Item[]>) => {
        state.menuItems = action.payload;
      }
    );
    builder.addCase(fetchNavigation.rejected, (state, action) => {
      state.menuItems = [];
    });
  },
});

export default slice.reducer;
