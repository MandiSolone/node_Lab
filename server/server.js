const { writeFile } = require("fs");
const { join } = require("path");

let filePath = join(__dirname, "chirps.json");

let chirps = [
  {
    author: "Mandi Solone",
    content: "My first chirp",
  },
  {
    author: "Mandi Solone",
    content: "My first chirp",
  },
  {
    author: "Mandi Solone",
    content: "My first chirp",
  },
  {
    author: "Mandi Solone",
    content: "My first chirp",
  },
  {
    author: "Mandi Solone",
    content: "My first chirp",
  },
];

writeFile(filePath, JSON.stringify(chirps), (err) => {
  if (err) return console.error(err);

  console.log("Wrote chrips.");
});
