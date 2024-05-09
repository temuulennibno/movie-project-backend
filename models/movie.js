import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    poster: {
      type: String,
    },
    year: {
      type: Number,
    },
    about: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const Movie = mongoose.model("Movie", DataSchema);

export default Movie;
