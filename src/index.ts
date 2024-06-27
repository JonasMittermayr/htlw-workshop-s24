import express from 'express';
import dotenv from 'dotenv';
import envSchema from './util/env.util';

import envUtil from './util/env.util';
import router from "./routes";
import cors from "cors";


const app = express ();

app.use(express.json());
app.use(cors());

app.use("/", router);


app.listen(envUtil.PORT, () => { console.log("Server started"); })



dotenv.config();
console.log(typeof envUtil.PORT);


