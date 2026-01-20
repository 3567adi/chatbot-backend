import express from 'express';
// import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import chatbotRoutes from './routes/chatbot.route.js';

// dotenv.config();
const app = express();

const port = process.env.PORT || 10000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


console.log("MONGO_URI:", process.env.MONGO_URI)


//Database Connection code
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Defining Routes

app.use("/bot/v1/", chatbotRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
