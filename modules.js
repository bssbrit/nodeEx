const fs = require("fs");
const prompt = require("prompt-sync")();

const fileName = prompt("What is the name of the file you wanna create?");
const fileContent = prompt("And what do you wanna wright?");
fs.writeFile(`${fileName}.txt`, `${fileContent}`, () => {
  console.log(`Very well ${fileName} was created`);
});

let choice = prompt(`Hi! Do wanna delete ${fileName}?`);
if (choice == "yes") {
  fs.unlink(`${fileName}.txt`, function (err) {
    if (err) throw err;
    console.log(`${fileName} was deleted`);
  });
}
/* 
//to read files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// writing files
fs.writeFile("./docs/blog1.txt", "hello, world7", () => {
  console.log("file was written");
}); */
/* 
fs.open("myfile,txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved");
}); */

// deleting files

/* fs.unlink("myfile,txt", function (err) {
  if (err) throw err;
  console.log("File deleted");
}); */
