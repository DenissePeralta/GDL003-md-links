const path = require("path");
const fs = require("fs");
const process = require('process');
const fetch = require("node-fetch");
const mdLinks = {};
let searchLinksRegExp = /(?<=\()http.+?(?=\))/gmi;
const filePathArg = process.argv[2];

//Function to validate if the file (filePath) given exists
const checkFileExists = (filePath) => {
  try {
    fs.statSync(filePath).isFile();
    return filePath;
  } catch (error) {
    return "The file does not exists, please check the information given";
  }
};
const checkFileExistsResult = checkFileExists(filePathArg);

//Function to validate if the directory (filePath) given exists
const checkDirExists = (filePath) => {
  try {
    fs.statSync(filePath).isDirectory();
    return filePath;
  } catch (error) {
    return "The directory does not exists, please check the information given";
  }
};
const checkDirExistsResult = checkDirExists(filePathArg);

//Function to check the extension
const checkExtension = (filePath) => path.extname(filePath) === ".md" ? filePath : "It is not a Markdown (.md) file";

//Function to check the extension of an existing file, should be .md
const checkExtensionFile = (filePath) => checkFileExistsResult === filePathArg ? checkExtension(filePath) : filePath;
const checkExtFileResult = checkExtensionFile(checkFileExistsResult);
console.log(checkExtFileResult);

//Function to read the directory path and get the files list
const readFileDir = (filePath) => dataFileDir = fs.readdirSync(filePath, "utf8");

//Function to read a file
const readFile = (filePath) => dataFile = fs.readFileSync(filePath, "utf8");

//Function to only read a .md file and saving the data in a const
// const readMdFilesOnly = (filePath) => checkExtFileResult === true ? readFile(filePath) : "Please provide a valid Markdown (.md) file";
// const readMdFilesOnlyResult = readMdFilesOnly(filePath);
// console.log(readMdFilesOnlyResult);

//Function to find the links into the data with the regExp searchLinksRegExp
const findLinks = (data) => linksFound = data.match(searchLinksRegExp);
//const findLinksResult = findLinks(readFileResult);

//Function to count the links found
const countLinks = (data) => linksFoundCount = "We found a total of: " + data.length + " links";
//const countLinksResult = countLinks(findLinksResult);

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
const validateLinksResult = validateLinks("https://nodejs.org/es/");

//Adding properties to the mdLinks object and exporting it with module.exports
mdLinks.checkExtension = checkExtension;
mdLinks.readFileDir = readFileDir;
mdLinks.readFile = readFile;
mdLinks.findLinks = findLinks;
mdLinks.countLinks = countLinks;
module.exports = mdLinks;
