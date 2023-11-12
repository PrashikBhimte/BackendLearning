//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var password = "";

app.use(bodyParser.urlencoded({extended: true}));

function check(req, res, next) {
    password = req.body["password"];
    next();
}

app.use(check);

app.get("/", (req, res) => {
    res.sendFile("D:/learn node js/3.5 Secrets Project/public/index.html");
});

app.post("/check", (req, res) => {
    if (password === "ILoveProgramming") {
        res.sendFile("D:/learn node js/3.5 Secrets Project/public/secret.html");   
    }
    else {
        res.sendFile("D:/learn node js/3.5 Secrets Project/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`Server is lisening on port ${port}.`);
});