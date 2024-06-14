import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';

import userRoutes from './routes/user.routes.js';
import newsRoutes from './routes/news.routes.js';
import { connectToMongoDB } from './db/connectToMongoDB.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000' // Adjust as necessary
}));

// API routes
app.use("/api/user", userRoutes);
app.use("/api/news", newsRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch-all route to serve React frontend
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

// Start the server and connect to the database
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
