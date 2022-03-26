const express = require("express");
const app = express();
require("dotenv/config");

app.get("/", (req, res) => {
  res.send(
    `Hello world from docker. Testing github actions. Your origin is ${req.get(
      "host"
    )}`
  );
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
