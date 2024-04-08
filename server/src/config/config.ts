import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app : Express = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

const setup = {
    app: app,
    port : port,
};

export const config = setup;