import express from 'express';
import dotenv from 'dotenv';
import envSchema from './util/env.util';

import envUtil from './util/env.util';
import router from "./routes";
import cors from "cors";
import mongoose from "mongoose";


const app = express ();

app.use(express.json());
app.use(cors());

app.use("/", router);


app.listen(envUtil.PORT, async () => { 
    console.log("Server started");

    await mongoose.connect(envUtil.MONGO_URL);

    console.log("connected to mongoDB JOOOOO SIIIICHAAA")
})



dotenv.config();


