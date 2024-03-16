const express = require("express");
const cors = require("cors");

PORT = 5000;

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Hello from backend"));

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
