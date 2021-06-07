import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import cardsRoutes from "./routes/cards.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/cards", cardsRoutes);

app.get("/", (req, res) => res.send("Hello from homepage!"));

app.use(cors());

const PORT = process.env.PORT;

//MongoDB database connection
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to Database!")
);

//Server listen port
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
