import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Backend is running', timestamp: new Date() });
});

// Welcome endpoint
app.get('/api', (req, res) => {
  res.status(200).json({ 
    message: 'Welcome to Traavellio Backend API',
    version: '1.0.0'
  });
});

// TODO: Add routes here
// - Authentication routes
// - Booking routes
// - Payment routes (Stripe)
// - Admin routes

app.listen(PORT, () => {
  console.log(`Traavellio Backend running on http://localhost:${PORT}`);
});
