import express from "express";
import cors from 'cors'
import connectDatabase from "./Model/db.js";
import userRoute from "./Routes/User_Route.js";
import adminRoute from "./Routes/Admin_Route.js";

import dotenv from "dotenv";
dotenv.config();


const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend domain
}));

app.use(express.json());

app.use("/user", userRoute);

app.use("/admin", adminRoute);

connectDatabase();

app.listen({port}, () => {
  console.log(`server running successfully ${port}`);
});