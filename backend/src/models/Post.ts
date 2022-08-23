import mongoose from "mongoose";

/** 7.1 создание модели статьи */
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
      unique: true,
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
    imageUrl: String
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", PostSchema);
