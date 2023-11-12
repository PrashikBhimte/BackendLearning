import express from "express";


const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.get("/about", (req, res) => {
    res.send("This is about page");
})

app.get("/contact", (req, res) => {
    res.send("This  is contact page");
})

app.listen(3000, () => {
    console.log(`The server is starte on the  port ${port}.`);
})