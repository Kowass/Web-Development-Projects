import express from "express";
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>Hello, world!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>Hello, my name is Felipe</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me.</h1><p>my number is +5590911111111</p>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});