import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs"


//Get input
inquirer
  .prompt([
    { 
      message: "Digite a url: ",
      name: "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!]
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("URL.txt",url,(err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    })
    
  })