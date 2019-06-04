import express from "express";
import data from "./data.json";

const app = express();

app.get("/", function(req, res) {
  res.send(data);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
