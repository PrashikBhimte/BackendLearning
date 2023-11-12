const fs = require("fs");

// fs.writeFile("message.txt", "Hello world!", (err) => {
//     if  (err) throw err;
//     console.log("The message is saved");
// } );

fs.readFile("./message.txt", 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
