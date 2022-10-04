import express, { Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import {
  ProductController,
  PostController,
  NavigationController,
  SearchController,
  CartController,
} from "./controllers";

/**
 * статичные переменные
 */

dotenv.config();

// const PORT = process.env.PORT || 8888;
const PORT = process.env.PORT || 8888;
const url: string =
  "mongodb+srv://admin:adminOne@cluster0.aedc5ky.mongodb.net/ETNODIM?retryWrites=true&w=majority";

/**
 * подключение к базе данных
 */
mongoose
  .connect(url)
  .then(() => {
    console.log("db ok");
  })
  .catch((err) => {
    console.log("db error: " + err);
  });

/**
 * создание приложения app express
 */
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/upload", express.static("upload"));

/**
 * установка слушателя порта
 */
app.listen(PORT, (): void => {
  console.log(`Server Running here https://localhost:${PORT}`);
});

/**
 * список роутов
 */

app.get("/products", ProductController.getAllProducts);
app.get("/new-products", ProductController.getNewProducts);
app.get("/products/:id", ProductController.getOneProducts);

app.get("/posts", PostController.getAllPosts);
app.get("/posts/:id", PostController.getOnePost);

app.get("/navigation", NavigationController.getNavigation);

app.get("/search/:key", SearchController.searchProduct);


// отримати унікальний id покупця при вході на сайт, щоб записати в базу його продукти

// app.get("/cart", CartController.getProducts);
// app.get("/cart", CartController.addProduct);
// app.get("/cart", CartController.removeProduct);
// app.put("/cart", CartController.updateProducts);
