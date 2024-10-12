import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import mongoose from "mongoose";
import session from "express-session"

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
    picture: { type: String, required: false },
    content: { type: String, required: false },
    comments: { type: Array, required: false }, 
})

const MyModel = mongoose.model("post", mySchema);

app.use(express.json());
app.use(bodyParser.urlencoded({ extendedd: true }));
app.use(express.static("public"));
app.use(session({
    secret: process.env.MY_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: 10 * 1,
    }
}))

app.get("/", (req, res) => {
    try{
        res.render("index.ejs");
        // console.log(posts);
    }
    catch(error){
        res.send(error);
    }
});

app.get("/post", async (req, res) => {
    try{
        const posts = await MyModel.find();
        res.render("post.ejs", { posts });
        console.log(posts);
    }
    catch(error){
        res.json(error);
    }
});

app.post("/login", (req, res) => {
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


