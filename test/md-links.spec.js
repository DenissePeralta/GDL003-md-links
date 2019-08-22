const mdLinks = require('../src/index.js');

//Test for checkExtensionFile function
describe('checkExtensionFile', () => {
  it('should return true for a valid .md file', () => {
    expect(mdLinks.checkExtensionFile("../README.md")).toBe(true);
  });
});

//Test for readFile function
describe('readFile', () => {
  it('should return a string type of the data read', () => {
    expect(typeof mdLinks.readFile("../README.md")).toEqual("string");
  });
});

//Test for findLinks function
