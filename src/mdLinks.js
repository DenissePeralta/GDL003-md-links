//const mdLinks = require("./index.js");

//Functions calling - adding values
//console.log(mdLinks.checkExtensionFile("../README.md"));
//console.log(mdLinks.readFile("../README.md"));

/*
const getExtensionFile = (filePath) => path.extname(filePath) === ".md" ? true : false;


const readFile = (error, data) => {
  if (data) {
    console.log(data);
    return ("Your file has been read");
  }
};
fs.readFile("../README.md", "utf8", readFile);
console.log(readFile("error", "../README.md"));

const readFile = () => {
  fs.readFile("../README.md", "utf8", function (error, data){
    if (error) throw error;
    console.log(data);
  });
};
readFile();

//let searchLinksDescription = /(?<=\[).+?(?=\]\()/gmi;

let searchLinksFile = /(?<=\()http.+?(?=\))/gmi;
const readFile = (filePath) => {
  fs.readFile(filePath, "utf8", function (error, data){
    if (data) {
      let linksFound = data.match(searchLinksFile);
      let linksFoundCount = "Were found: " + linksFound.length + " links";
      console.log(linksFoundCount, linksFound);
    }
  });
};
readFile("../README.md");



const readFile = (filePath) => {
  return new Promise ((resolve, reject) => {
    fs.readFile(filePath, "utf8", function (error, data){
      if (data) {
        console.log("Your file has been read");
        return resolve;
      } else {
        console.log("There was an error reading your file");
        return reject;
      }
    });
  });
};
readFile("../README.md");



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

*/

























/*
const path = require("path");
const fs = require("fs");
const process = require('process');
const fetch = require("node-fetch");
const mdLinks = {};
let searchLinksRegExp = /(?<=\()http.+?(?=\))/gmi;
const nodeRequest = process.argv[0];
const filePath = process.argv[2];

//Function to check the extension of a file, should be .md
const checkExtensionFile = (filePath) => path.extname(filePath) === ".md" ? filePath : "It is not a .md file";
const checkExtFileResult = (checkExtensionFile(filePath));
//console.log(checkExtFileResult);

//Function to read the directory path and get the files list
// const readFileDir = (filePath) => dataFileDir = fs.readdirSync(filePath, "utf8");
// const readFileDirResult = readFileDir(filePath);

//Function to read a .md file
const readFile = (filePath) => dataFile = fs.readFileSync(filePath, "utf8");

//Function to only read a .md file and saving the data in a const
const readMdFilesOnly = (filePath) => checkExtFileResult === filePath ? readFile(filePath) : "Please provide a valid Markdown (.md) file";
const readMdFilesOnlyResult = readMdFilesOnly (filePath);
console.log(readMdFilesOnlyResult);

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
const validateLinksResult = validateLinks("https://nodejs.org/es/");

//Adding properties to the mdLinks object and exporting it with module.exports
mdLinks.checkExtensionFile = checkExtensionFile;
mdLinks.readFileDir = readFileDir;
mdLinks.readFile = readFile;
mdLinks.findLinks = findLinks;
mdLinks.countLinks = countLinks;
module.exports = mdLinks;*/
