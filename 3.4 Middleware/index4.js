import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({extended: true}));

function genrateBandName(req, res, next) {
  bandName = req.body['street'] + req.body['pet'];
  next();
}

app.use(genrateBandName);

app.get("/", (req, res) => {
  res.sendFile("D:/learn node js/3.4 Middleware/public/index.html");
})

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name would be</h1><h1>${bandName}`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
