import express from "express";
import data from "../data.json";

const app = express();

app.get("/", function(req, res) {
  res.send(data);
});
const PORT = process.env.PORT || 3000;
console.log(`==============> ${process.env.PORT}`);
try {
  app.listen(PORT, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("Example app listening on port 3000!");
  });
} catch (err) {
  console.log(err);
}
