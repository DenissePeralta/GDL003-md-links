const path = require("path");
const fs = require("fs");
const http = require("http");
const fetch = require("node-fetch");
const mdLinks = {};
let searchLinksRegExp = /(?<=\()http.+?(?=\))/gmi;

//Function to check the extension of a file, should be .md
const checkExtensionFile = (filePath) => path.extname(filePath) === ".md" ? true : "It is not a .md file";
const checkExtFileResult = (checkExtensionFile("../README.md"));

//Function to read the directory path and get the files list
const readFileDir = (filePath) => dataFileDir = fs.readdirSync(filePath, "utf8");
const readFileDirResult = readFileDir("/Users/Everybody/Documents/Laboratoria/GDL003-md-links");
console.log(readFileDirResult);

//Function to read a .md file and saving the data in a const
const readFile = (filePath) => dataFile = fs.readFileSync(filePath, "utf8");
const readFileResult = readFile("../README.md");

//Function to find the links into the data with the regExp searchLinksRegExp
const findLinks = (data) => linksFound = data.match(searchLinksRegExp);
const findLinksResult = findLinks(readFileResult);
console.log(findLinksResult);

//Function to count the links found
const countLinks = (data) => linksFoundCount = "We found a total of: " + data.length + " links";
const countLinksResult = countLinks(findLinksResult);
console.log(countLinksResult);

//Function to validate the links
const validateLinks = (url) => {
  let linkStatus;
  fetch(url).then((response) => {
    linkStatus = url + " " + response.statusText + " " + response.status;
    console.log(linkStatus);
  }).catch((error) => {
    linkStatusError = url + " Fail 404";
    console.log(linkStatusError);
  });
};
const validateLinksResult = validateLinks("https://nodejs.og/es/");

//Adding properties to the mdLinks object and exporting it with module.exports
mdLinks.checkExtensionFile = checkExtensionFile;
mdLinks.readFileDir = readFileDir;
mdLinks.readFile = readFile;
mdLinks.findLinks = findLinks;
mdLinks.countLinks = countLinks;
module.exports = mdLinks;
