export interface PostsPreviewSliceState {
  posts: Post[];
}

export type Post = {
  _id: object;
  title: string;
  link: string;
  image: string;
  text: string;
  viewsCount: number;
};
