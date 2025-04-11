import express from "express"; //first package
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";

import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";



const app = express();
dotenv.config();


const PORT= process.env.PORT
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));


// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", authRoutes);
app.use("api/messages", messageRoutes);

app.listen(PORT, () => {
    console.log("server is running on "+ PORT);
    connectDB();
  });