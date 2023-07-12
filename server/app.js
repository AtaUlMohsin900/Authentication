const express = require("express");
const app = express();
const port = 8009;

app.get("/", (req, res) => {
  res.status(201).json("server created");
});

app.listen(port, () => {
  console.log(`server start at port no : ${port}`);
});
