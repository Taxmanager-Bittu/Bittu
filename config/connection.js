const mongoose = require('mongoose');
//Config start 
var config = require("./config.json");

mongoose.Promise = global.Promise;

mongoose.connect(config.URI, { useUnifiedTopology: true, useNewUrlParser: true });

const connectDB = mongoose.connection;

connectDB.on("error", (error) => console.log(error));
connectDB.once("open", () => console.log("data connected"));

module.exports = connectDB;