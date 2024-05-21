import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import newsRoutes from './routes/news.routes.js';
import { connectToMongoDB } from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!');
})

app.use("/api/user", userRoutes)
app.use("/api/news", newsRoutes)

app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server is running on port  ${PORT}`)})
