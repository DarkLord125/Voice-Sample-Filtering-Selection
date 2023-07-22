// Importing libraries
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import voiceRoutes from "./routes/voice.js";

// Configuration - setup various middleware and libraries
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan('common'));
app.use(cors());

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("GET Request");
});

// Routes
app.use('/voice', voiceRoutes);

/* MONGOOSE SETUP - Connecting with MongoDb*/ 
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));