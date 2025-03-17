import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend to access the backend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Default route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Event Management System API');
});

// Connect to MongoDB
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    // Start server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Handle 404 routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});
