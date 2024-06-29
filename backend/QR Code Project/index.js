
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        message: "whats the url: ",
        name:"url1",
    },
  ])
  .then((answers) => {
    const url = answers.url1;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("q12354.png"));

    fs.writeFile("url.txt", url, (err) =>{
        if (err) throw err;
        console.log("file as been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });