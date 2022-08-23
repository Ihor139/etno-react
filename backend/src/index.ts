import express, {Application} from 'express';
import mongoose from 'mongoose';
// @ts-ignore
import cors from 'cors';

import {ProductController, PostController} from "./controllers";

/**
 * статичные переменные
 */

const PORT = process.env.PORT || 8888
const url = "mongodb+srv://admin:adminOne@cluster0.aedc5ky.mongodb.net/ETNODIM?retryWrites=true&w=majority"

/**
 * подключение к базе данных
 */
mongoose.connect(url)
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
app.use(cors())
app.use('/upload', express.static('upload'));

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
app.get("/products/:id", ProductController.getOneProducts);
app.get("/posts", PostController.getAllPosts);
app.get("/posts/:id", PostController.getOnePost);
