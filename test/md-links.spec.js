const mdLinks = require("../src/md-links.js");

//Test for checkFileExists function
describe("checkFileExists", () => {
  it("should return the file path (../README.md) if the file does exists", () => {
    expect(mdLinks.checkFileExists("./README.md")).toEqual("./README.md");
  });
});
//Test for checkExtension function
describe("checkExtension", () => {
  it("should return the message -It is not a Markdown (.md) file- if a different extension is given", () => {
    expect(mdLinks.checkExtension("./index.js")).toEqual("It is not a Markdown (.md) file");
  });
});
//Test for readFileDir function
describe("readFileDir", () => {
  it("should return an array/object with the files list found in the directory", () => {
    expect(typeof mdLinks.readFileDir("C:/Users/Everybody/Documents/Laboratoria/GDL003-md-links")).toEqual("object");
  });
});
//Test for readFile function
describe("readFile", () => {
  it("should return a string of the read data", () => {
    expect(typeof mdLinks.readFile("./README.md")).toBe("string");
  });
});
//Test for findLinks function
describe("findLinks", () => {
  it("should return an array/object with the links list found", () => {
    expect(typeof mdLinks.findLinks(mdLinks.readFile("./README.md"))).toEqual("object");
  });
});
//Test for countLinks function
describe("countLinks", () => {
  it("should return a string with the total amount of links found", () => {
    expect(typeof mdLinks.countLinks("./README.md")).toBe("string");
  });
});
