const mdLinks = require("../src/index.js");

//Test for checkExtension function
describe("checkExtension", () => {
  it("should return true for a valid .md file", () => {
    expect(mdLinks.checkExtension("../README.md")).toBe(true);
  });
});
//Test for readFileDir function
describe("readFileDir", () => {
  it("should return an array/object with the files list found in the directory", () => {
    expect(typeof mdLinks.readFileDir("/Users/Everybody/Documents/Laboratoria/GDL003-md-links")).toEqual("object");
  });
});
//Test for readFile function
describe("readFile", () => {
  it("should return a string of the read data", () => {
    expect(typeof mdLinks.readFile("../README.md")).toBe("string");
  });
});
//Test for findLinks function
describe("findLinks", () => {
  it("should return an array/object with the links found", () => {
    expect(typeof mdLinks.findLinks("../README.md")).toEqual("object");
  });
});
//Test for countLinks function
describe("countLinks", () => {
  it("should return a string with the total amount of links found", () => {
    expect(typeof mdLinks.countLinks("../README.md")).toBe("string");
  });
});
