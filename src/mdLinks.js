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
