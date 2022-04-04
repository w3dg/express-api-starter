const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello world! 🌎👋",
  });
});

router.get("/emojis", (req, res) => {
  res.json({
    emojis: ["🌈", "✨", "🎉", "🎊", "🎉", "✨", "🌈"],
  });
});

module.exports = router;
