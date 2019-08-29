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

//Function to read the directory path and get the files list
const readFileDir = (filePath) => dataFileDir = fs.readdirSync(filePath, "utf8");

//Function to read a file
const readFile = (filePath) => dataFile = fs.readFileSync(filePath, "utf8");

//Function to only read a .md file and saving the data in a const
const readMdFiles = (filePath) => checkExtFileResult === filePathArg ? readFile(filePath) : filePath;
const readMdFilesResult = readMdFiles(checkExtFileResult);

//Function to find the links with the regExp searchLinksRegExp
const findLinks = (data) => checkExtFileResult === filePathArg ? data.match(searchLinksRegExp) : data;

//Function to count links
const countLinks = (data) => linksFoundCount = "We found a total of: " + data.length + " links";

//Function to find the links inside the markdown file with findLinks function
const findLinksInMdFile = (data) => {
  if (checkExtFileResult === filePathArg && findLinks(data) !== null) {
    return findLinks(data);
  } else if (findLinks(data) === null) {
    return "The file does not content any links to validate";
  } else {
    return data;
  }
};
const findLinksInMdFileResult = findLinksInMdFile(readMdFilesResult);
console.log(findLinksInMdFileResult);

//Function to count the total amount of links found
const countLinksFound = (data) => typeof data === "object" ? countLinks(data) : "0 links found";
const countLinksFoundResult = countLinksFound(findLinksInMdFileResult);
console.log(countLinksFoundResult);

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
mdLinks.checkFileExists = checkFileExists;
mdLinks.checkDirExists = checkDirExists;
mdLinks.checkExtension = checkExtension;
mdLinks.checkExtensionFile = checkExtensionFile;
mdLinks.readFileDir = readFileDir;
mdLinks.readFile = readFile;
mdLinks.readMdFiles = readMdFiles;
mdLinks.findLinks = findLinks;
mdLinks.countLinks = countLinks;
mdLinks.findLinksInMdFile = findLinksInMdFile;
mdLinks.countLinksFound = countLinksFound;
module.exports = mdLinks;
