import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import cardsRoutes from "./routes/cards.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/cards", cardsRoutes);

const PORT = process.env.PORT;

//MongoDB database connection
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to Database!")
);

//Server listen port
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
