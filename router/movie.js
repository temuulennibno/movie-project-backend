import express from "express";
import Movie from "../models/Movie.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await Movie.find();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Movie.findOne({ _id: id });
  res.json(result);
});

router.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  const newMovie = new Movie(data).save();
  res.json(newMovie);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Movie.findOneAndDelete({ _id: id });
  res.json(id);
});

export default router;
