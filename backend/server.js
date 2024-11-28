import express from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoute from "./router/authRoute.js";
import messageRoute from "./router/messageRoute.js";

dotenv.config();
const PORT = process.env.PORT || 4001;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running port : ${PORT}`);
});
