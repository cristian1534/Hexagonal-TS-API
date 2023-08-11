import "dotenv/config";
import express from "express";
import cors from "cors";
import { dbInit } from "../src/todo/infrastructure/database/mongo";
import todoRoute from "./todo/infrastructure/route/todo.route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(todoRoute);

const port = process.env.PORT || 5000;

dbInit();
app.listen(port, () => console.log("Server running."));
