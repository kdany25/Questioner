import dotenv from "dotenv";
dotenv.config()
import express from "express";
import userRoutes from "./Routes/api/UserR.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api/v1", userRoutes);

app.listen(port, () => console.log("server have started!!!"));

export default app;
