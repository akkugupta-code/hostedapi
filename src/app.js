const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();
const port = process.env.PORT;

const uri = process.env.MONGO_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.info("Database connected.");
});

mongoose.connection.on("error", () => {
  console.error("Error connecting to database");
  throw new Error("Unable to connect to database.");
});

mongoose.set("useCreateIndex", true);

app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use("/", routes);

app.listen(port, () => {
  console.log(`example app is listening on port ${port}`);
});
