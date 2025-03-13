import express from "express"; //first package
import dotenv from "dotenv"

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const app = express();
dotenv.config();


const PORT= process.env.PORT
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("server is running on "+ PORT);
    connectDB();
  });