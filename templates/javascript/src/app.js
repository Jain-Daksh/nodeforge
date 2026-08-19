const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const router = require("./routes");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;