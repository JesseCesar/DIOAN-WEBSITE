import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import newsRoutes from './routes/news.routes.js';
import { connectToMongoDB } from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const __dirname = path.resolve()

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000'
}));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!');
})

app.use("/api/user", userRoutes)
app.use("/api/news", newsRoutes)

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get('*', (req, res) => {res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))})

app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server is running on port  ${PORT}`)})
