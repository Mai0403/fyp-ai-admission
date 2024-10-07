// config/db.js
const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;  // Use environment variables for production
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB;
