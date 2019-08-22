
const path = require("path");
const fs = require("fs");
const http = require("http");
const mdLinks = {};
let searchLinksRegExp = /http..+?\)/gmi;

//Function to get the directory path name


//Function to check the extension of a file, should be .md
const checkExtensionFile = (filePath) => {
  if (path.extname(filePath) === ".md") {
    return true;
  } else {
    return "It is not a .md file";
  }
};
const checkExtFileResult = (checkExtensionFile("../README.md"));

//Function to read a .md file and saving the data in a const
const readFile = (filePath) => {
  let dataFile = fs.readFileSync(filePath, "utf8");
  return dataFile;
};
const readFileResult = readFile("../README.md");

//Function to find the links into the data with the regExp
const findLinks = (data) => {
  let linksFound = data.match(searchLinksRegExp);
  let linksFoundCount = "We found: " + linksFound.length + " links";
  console.log(linksFoundCount, linksFound);
};
const findLinksResult = findLinks(readFileResult);

//Adding properties to the mdLinks object and exporting it with module.exports
mdLinks.checkExtensionFile = checkExtensionFile;
mdLinks.readFile = readFile;
module.exports = mdLinks;
