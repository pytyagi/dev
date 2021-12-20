const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// Promise is Returned
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// "mongoURI": "mongodb+srv://piyush123:piyush123@devconnector-aaewr.mongodb.net/test?retryWrites=true&w=majority",