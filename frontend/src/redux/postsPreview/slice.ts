import { fetchPostsPreview } from "./asyncPosts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostsPreviewSliceState, Post } from "./types";

const initialState: PostsPreviewSliceState = {
  posts: [],
};

export const slice = createSlice({
  name: "postsPreview",
  initialState,
  reducers: {},
  // код для createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(fetchPostsPreview.pending, (state, action) => {});
    builder.addCase(
      fetchPostsPreview.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
      }
    );
    builder.addCase(fetchPostsPreview.rejected, (state, action) => {
      state.posts = [];
    });
  },
});

export default slice.reducer;
