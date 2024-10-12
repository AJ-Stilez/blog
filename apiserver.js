import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 5353;

app.use(express.json());

app.get("/");

app.post("/");

app.put("/");

app.patch("/");

app.delete("/");

app.listen(port, () => {
    console.log(`API Server started running on port ${port}`);
})


