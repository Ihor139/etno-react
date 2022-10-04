import mongoose from "mongoose";

const NavigationShema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    dataMenu: {
      type: String,
    },
    title: {
      type: String,
      required: true
    },
    dataImage: {
      type: String,
      required: true
    },
    submenu: {
      type: Array,
      default: [],
      nested: {
        id: {
          type: Number,
          required: true,
        },
        dataImage: {
          type: String,
          required: true
        },
        title: {
          type: String,
          required: true
        },
      },
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model("Navigation", NavigationShema);
