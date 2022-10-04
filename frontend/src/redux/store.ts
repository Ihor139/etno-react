import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import navigationReducer from "./navigation/slice";
import searchReducer from "./search/slice";
import productPreviewReducer from "./productPreview/slice";
import postsPreviewReducer from "./postsPreview/slice";

export const store = configureStore({
  reducer: {
    navigationReducer,
    searchReducer,
    productPreviewReducer,
    postsPreviewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
