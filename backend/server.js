// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');  // Import the database connection
const authRoutes = require('./routes/auth');  // Import authentication routes

require('dotenv').config();  // Load environment variables

const app = express();
app.use(express.json());  // Parse incoming JSON requests

// Enable CORS
app.use(cors({
  origin: 'http://127.0.0.1:5500',  // Allow requests from this origin
}));

// Connect to MongoDB
connectDB();

// Use routes
app.use('/auth', authRoutes);  // All routes in auth.js will be prefixed with '/auth'

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
