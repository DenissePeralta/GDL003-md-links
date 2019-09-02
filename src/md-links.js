const path = require("path");
const fs = require("fs");
const process = require('process');
const fetch = require("node-fetch");
const colors = require('colors');
const mdLinks = {};
let searchLinksRegExp = /(?<=\()http.+?(?=\))/gmi;
const filePathArg = process.argv[2];

//Function to validate if the file (filePath) given exists
const checkFileExists = (filePath) => {
  try {
    fs.statSync(filePath).isFile();
    return filePath;
  } catch (error) {
    return "The file does not exists, please check the information given".red;
  }
};
const checkFileExistsResult = checkFileExists(filePathArg);

//Function to check the extension
const checkExtension = (filePath) => path.extname(filePath) === ".md" ? filePath : "It is not a Markdown (.md) file".red;

//Function to check the extension of an existing file, should be .md
const checkExtensionFile = (filePath) => checkFileExistsResult === filePathArg ? checkExtension(filePath) : filePath;
const checkExtFileResult = checkExtensionFile(checkFileExistsResult);

//Function to read the directory path and get the files list
const readFileDir = (filePath) => fs.readdirSync(filePath, "utf8");

//Function to read a file
const readFile = (filePath) => fs.readFileSync(filePath, "utf8");

//Function to only read a .md file and saving the data in a const
const readMdFiles = (filePath) => checkExtFileResult === filePathArg ? readFile(filePath) : filePath;
const readMdFilesResult = readMdFiles(checkExtFileResult);

//Function to find the links with the regExp searchLinksRegExp
const findLinks = (data) => data.match(searchLinksRegExp);

//Function to count links
const countLinks = (data) => "We found a total of: " + data.length + " links";

//Function to find the links inside the markdown file with findLinks function
const findLinksInMdFile = (data) => {
  if (checkExtFileResult === filePathArg && findLinks(data) !== null) {
    return findLinks(data);
  } else if (checkExtFileResult === filePathArg && findLinks(data) === null) {
    return "The file does not content any links to validate";
  } else {
    return data;
  }
};
const findLinksInMdFileResult = findLinksInMdFile(readMdFilesResult);

//Function to count the total amount of links found
const countLinksFound = (data) => typeof data === "object" ? console.log(countLinks(data)) : data;
const countLinksFoundResult = countLinksFound(findLinksInMdFileResult);

//Function to validate the links
const validateLinks = (url) => {
  if (typeof url === "object") {
    findLinksInMdFileResult.forEach(function (url){
      fetch(url).then((response) => {
        let validatePaths = filePathArg + " ";
        let validateUrls = url + " ";
        let validateMessage =  response.statusText + " " + response.status;
        if (response.status === 200) {
          console.log(validatePaths.white, validateUrls.cyan, validateMessage.green);
        } else {
          console.log(validatePaths.white, validateUrls.cyan, validateMessage.red);
        }
      }).catch((error) => {
        console.log("An error ocurred");
      });
    });
  } else {
    console.log(url);
  }
};
const validateLinksResult = validateLinks(findLinksInMdFileResult);

//Adding properties to the mdLinks object and exporting it with module.exports
mdLinks.checkFileExists = checkFileExists;
mdLinks.checkExtension = checkExtension;
mdLinks.checkExtensionFile = checkExtensionFile;
mdLinks.readFileDir = readFileDir;
mdLinks.readFile = readFile;
mdLinks.readMdFiles = readMdFiles;
mdLinks.findLinks = findLinks;
mdLinks.countLinks = countLinks;
mdLinks.findLinksInMdFile = findLinksInMdFile;
mdLinks.countLinksFound = countLinksFound;
mdLinks.validateLinks = validateLinks;
module.exports = mdLinks;
