require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} http://localhost:${PORT}`);
});
