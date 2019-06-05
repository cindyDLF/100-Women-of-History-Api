import express from "express";
import data from "./data.json";

const app = express();

app.get("/", function(req, res) {
  res.send(data);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("Example app listening on port 3000!");
});
