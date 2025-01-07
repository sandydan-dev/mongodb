const connectDB = require("./db/db.connect.js");
const Movie = require("./models/movies.model");
const fs = require("fs");

connectDB();

const jsonData = fs.readFileSync("movie.json", "utf-8");

const moviesData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const movieData of moviesData) {
      const newMovie = new Movie({
        title: movieData.title,
        releaseYear: movieData.releaseYear,
        genre: movieData.genre,
        director: movieData.director,
        actors: movieData.actors,
        language: movieData.language,
        country: movieData.country,
        rating: movieData.rating,
        plot: movieData.plot,
        awards: movieData.awards,
        posteUrl: movieData.posterUrl,
        trailerUrl: movieData.trailerUrl,
      });
      //   console.log(newMovie.title);
      newMovie.save();
    }
  } catch (error) {
    console.error("Error seeding the data", error);
  }
}
seedData();
