import express from "express"; //first package
import dotenv from "dotenv"

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const app = express();
dotenv.config();

app.use("/api/auth", authRoutes);

const PORT= process.env.PORT
app.use(express.json());

app.listen(PORT, () => {
    console.log("server is running on "+ PORT);
    connectDB();
  });