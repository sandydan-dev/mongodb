const connectDB = require("./db/db.connect.js");
const fs = require("fs");

// models
const Movie = require("./models/movies.model");
const Car = require("./models/cars.model.js");
const Laptop = require("./models/laptop.model");
const MusicAlbum = require("./models/musicAlbum.model.js");
const Player = require("./models/player.model");
const ProductCard = require("./models/productCard.model.js");
const RecipeCard = require("./models/recipeCard.model.js");
const StayProperty = require("./models/stayProperty.model.js");
const UserProfile = require("./models/userProfile.model.js");
// ----------------------
// mongodb connection
connectDB();

// ---------------
// read json file as string
const jsonMovieFileData = fs.readFileSync("./jsonDataFile/movie.json", "utf-8");
const jsonCarFileData = fs.readFileSync("./jsonDataFile/car.json", "utf-8");
const jsonLaptopFileData = fs.readFileSync(
  "./jsonDataFile/laptop.json",
  "utf-8"
);
const jsonMusicAlbumFileData = fs.readFileSync(
  "./jsonDataFile/musicAlbum.json"
);
const jsonPlayerFileData = fs.readFileSync(
  "./jsonDataFile/player.json",
  "utf-8"
);
const jsonProductCardFileData = fs.readFileSync(
  "./jsonDataFile/productCard.json",
  "utf-8"
);

const jsonRecipeCardFileData = fs.readFileSync(
  "./jsonDataFile/recipeCard.json",
  "utf-8"
);

const jsonStayPropertyFileData = fs.readFileSync(
  "./jsonDataFile/stayProperty.json",
  "utf-8"
);

const jsonUserProfileFileData = fs.readFileSync(
  "./jsonDataFile/userProfile.json",
  "utf-8"
);
// -----------------------
// parse data into json object
const moviesData = JSON.parse(jsonMovieFileData);
const carsData = JSON.parse(jsonCarFileData);
const laptopsData = JSON.parse(jsonLaptopFileData);
const musicsAlbum = JSON.parse(jsonMusicAlbumFileData);
const playersData = JSON.parse(jsonPlayerFileData);
const productCardsData = JSON.parse(jsonProductCardFileData);
const recipeCardsData = JSON.parse(jsonRecipeCardFileData);
const stayPropertiesData = JSON.parse(jsonStayPropertyFileData);
const usersProfileData = JSON.parse(jsonUserProfileFileData);
// -------------------
// Movie data seeding
function seedMovieData() {
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
      // console.log(newMovie.title);
      newMovie.save();
    }
  } catch (error) {
    console.error("Error seeding the data", error);
  }
}
seedMovieData();

// car data seeding
function seedCarData() {
  try {
    for (const carData of carsData) {
      const newCar = new Car({
        make: carData.make,
        model: carData.model,
        year: carData.year,
        mileage: carData.mileage,
        fuelType: carData.fuelType,
        transmission: carData.transmission,
        bodyStyle: carData.bodyStyle,
        color: carData.color,
        isCertifiedPreOwned: carData.isCertifiedPreOwned,
        isFourWheelDrive: carData.isFourWheelDrive,
        isLuxury: carData.isLuxury,
        isActive: carData.isActive,
      });
      // console.log(newCar.make);
      newCar.save();
    }
  } catch (error) {
    console.log("Error While seeding the data", error);
  }
}
seedCarData();

// laptop data seeding
function seedLaptopData() {
  try {
    for (const laptopData of laptopsData) {
      const newLaptop = new Laptop({
        brand: laptopData.brand,
        model: laptopData.model,
        processor: laptopData.processor,
        ramSizeGB: laptopData.ramSizeGB,
        screenSizeInches: laptopData.screenSizeInches,
        isTouchscreen: laptopData.isTouchscreen,
        hasSSD: laptopData.hasSSD,
        isSaleActive: laptopData.isSaleActive,
        isActive: laptopData.isActive,
      });
      // console.log(newLaptop.brand);
      newLaptop.save();
    }
  } catch (error) {
    console.log("Error while seeding Laptop data", error);
  }
}
seedLaptopData();

// music album data seeding
function seedMusicAlbumData() {
  try {
    for (const musicAlbum of musicsAlbum) {
      const newMusicAlbum = new MusicAlbum({
        title: musicAlbum.title,
        artist: musicAlbum.artist,
        genre: musicAlbum.genre,
        releaseYear: musicAlbum.releaseYear,
        recordLabel: musicAlbum.recordLabel,
        format: musicAlbum.format,
        isExplicit: musicAlbum.isExplicit,
        isAvailableOnStreaming: musicAlbum.isAvailableOnStreaming,
        isFeatured: musicAlbum.isFeatured,
      });

      // console.log(newMusicAlbum.title);
      newMusicAlbum.save();
    }
  } catch (error) {
    console.log("Error while seeding music album data", error);
  }
}
seedMusicAlbumData();

// player data seeding
function seedPlayerData() {
  try {
    for (const playerData of playersData) {
      const newPlayer = new Player({
        username: playerData.username,
        email: playerData.email,
        firstName: playerData.firstName,
        lastName: playerData.lastName,
        age: playerData.age,
        gender: playerData.gender,
        country: playerData.country,
        isActive: playerData.isActive,
        gamesPlayed: playerData.gamesPlayed,
        level: playerData.level,
        preferredGame: playerData.preferredGame,
      });

      // console.log(newPlayer.username);
      newPlayer.save();
    }
  } catch (error) {
    console.log("Error while seeding player data", error);
  }
}
seedPlayerData();

// product card data seeding
function seedProductCardData() {
  try {
    for (const productCard of productCardsData) {
      const newProductCard = new ProductCard({
        imageURL: productCard.imageURL,
        productTitle: productCard.productTitle,
        productDescription: productCard.productDescription,
        rating: productCard.rating,
        reviews: productCard.reviews,
        price: productCard.price,
        discount: productCard.discount,
        offerDiscription: productCard.offerDiscription,
        variant: productCard.variant,
        connectivity: productCard.connectivity,
      });

      // console.log(newProductCard.imageURL);
      newProductCard.save();
    }
  } catch (error) {
    console.log("Error while seeding product card data", error);
  }
}
seedProductCardData();

// recipe card data seeding
function seedRecipeCardData() {
  try {
    for (const recipeCard of recipeCardsData) {
      const newRecipeCard = new RecipeCard({
        imageURL: recipeCard.imageURL,
        title: recipeCard.title,
        description: recipeCard.description,
        ingredients: recipeCard.ingredients,
        description: recipeCard.description,
        cookingTime: recipeCard.cookingTime,
        servings: recipeCard.servings,
        servings: recipeCard.servings,
        preppingTime: recipeCard.preppingTime,
        note: recipeCard.note,
      });

      console.log(newRecipeCard.title);
      newRecipeCard.save();
    }
  } catch (error) {
    console.log("Error while seeding recipe card data", error);
  }
}
seedRecipeCardData();

// StayProperty data seeding
function seedStayPropertyData() {
  try {
    for (const stayProperty of stayPropertiesData) {
      const newStayProperty = new StayProperty({
        title: stayProperty.title,
        description: stayProperty.description,
        location: stayProperty.location,
        pricePerNight: stayProperty.pricePerNight,
        capacity: stayProperty.capacity,
        isPetFriendly: stayProperty.isPetFriendly,
        hasWiFi: stayProperty.hasWiFi,
        hasParking: stayProperty.hasParking,
        isActive: stayProperty.isActive,
      });
      // console.log(newStayProperty.title);
      newStayProperty.save();
    }
  } catch (error) {
    console.log("Error while seeding stay property data", error);
  }
}
seedStayPropertyData();

// UserProfile data seeding
function seedUserProfileData() {
  try {
    for (const userProfile of usersProfileData) {
      const newUserProfile = new UserProfile({
        username: userProfile.username,
        email: userProfile.email,
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        birthData: userProfile.birthData,
        isActive: userProfile.isActive,
        isAdmin: userProfile.isAdmin,
        profilePictureUrl: userProfile.profilePictureUrl,
      });
      // console.log(newUserProfile);
      newUserProfile.save();
    }
  } catch (error) {
    console.log("Error while seeding user profile data", error);
  }
}
seedUserProfileData();
