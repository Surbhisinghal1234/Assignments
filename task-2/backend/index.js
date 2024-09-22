import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(cors({
  origin: '*', 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/projects', projectRoutes);

// MongoDB connection
const username = process.env.MONGO_USERNAME;
const password = encodeURIComponent(process.env.MONGO_PASSWORD);

mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.3j0ywmp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error', error);
});
