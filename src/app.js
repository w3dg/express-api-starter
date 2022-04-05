const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const volleyball = require("volleyball");

const api = require("./api");
const middlewares = require("./middlewares");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(volleyball);

// Optional static serve
// app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "API Route, Go Home.",
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// Export Server
module.exports = app;
