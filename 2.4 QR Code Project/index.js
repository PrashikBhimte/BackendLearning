import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {

            message : "Enter your URL :",
            name : "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("QR_image.png"));
        fs.writeFile("url.txt", url, (err) => {
            if  (err) throw err;
            console.log("QR is genrated!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {

        } else {

        }
    });

