import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const weekday = "Hey! It's a weekday, it's time to work hard!";
const weekend = "Hey! It's the weekend, it's time to have fun!";
var phrase = "";

function day(){
    const date = new Date();
    let day = date.getDay();
    if(day === 0 || day === 6){
        phrase = weekend;
    }else{
        phrase = weekday;
    }
}

app.get("/", (req, res) => {
    day();
    res.render(__dirname + "/views/index.ejs",
    { title: phrase}
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
