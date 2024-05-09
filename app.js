import express from "express";
import cors from "cors";
import movieRouter from "./router/movie.js";
import connectiondb from "./db/connectiondb.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = 3200;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb:://localhost:27017";

//connection database
connectiondb(DATABASE_URL);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRouter);

app.listen(PORT, () => {
  console.log("App is running on http://localhost:" + PORT);
});
