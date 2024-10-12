import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Db } from "mongodb";

dotenv.config();

const app = express();
const port = process.env.PORT || 5353;
const uri = process.env.URI;

mongoose.connect(uri)
.then(() => {
    console.log("MongoDb database connected");
})
.catch((error) => console.log(`MongoDb connection error: ${error}`));

const mySchema = new mongoose.Schema({
    username: { type: String, required: true },
    content: { type: String, required: false }
})

const MyModel = mongoose.model("post", mySchema);

app.use(express.json());
app.use(bodyParser.urlenconded({ extendedd: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try{
        const posts = await MyModel.find();
        res.render("index.ejs", { posts });
        console.log(posts);
    }
    catch(error){
        res.json(error);
    }
});

app.post("/", (req, res) => {
    try{

    }
    catch(err){
        res.json(error);
    }
});

app.put("/", (res, req) =>{
    try{

    }
    catch(err){
        res.json(error);
    }
});

app.patch("/", (req, res) => {
    try{

    }
    catch(err){
        res.json(error);
    }
});

app.delete("/", (req, res) => {
    try{

    }
    catch(err){
        res.json(error);
    }
});

app.listen(port, () => {
    console.log(`API Server started running on port ${port}`);
})


