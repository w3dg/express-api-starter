const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const volleyball = require("volleyball");

const api = require("./api");

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(volleyball);

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "API Route, Go Home.",
  });
});

app.use("/api/v1", api);

// Export Server
module.exports = app;
