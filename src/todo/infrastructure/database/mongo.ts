import { connect } from "mongoose";
import "dotenv/config";

const DB_URI = `${process.env.DB_URI}`;

export const dbInit = async () => {
  await connect(DB_URI)
    .then(() => console.log("Mongo Connected"))
    .catch((err) => console.log("Connection Failed", err.message));
};
