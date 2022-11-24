import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/posts.js"
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:'300mb',extended:true}));
app.use('/posts',postRoutes);//every routes inside of post routes is goging to start with localhost:5000/posts




const CONNECTION_URL='mongodb://localhost:27017/learining';
const PORT=process.env.PORT||5000;

mongoose.connect(CONNECTION_URL,{useUnifiedTopology:true},{useNewUrlParser: true}).
                            then(()=>app.listen(PORT,()=>{console.log(`${PORT}`)}))
                            .catch((error)=>{console.log(error)});