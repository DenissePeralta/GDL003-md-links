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
describe('findLinks', () => {
  it('should return an object type with the links found', () => {
    expect(typeof mdLinks.findLinks("../README.md")).toBe("object");
  });
});
//Test for countLinks function
describe('countLinks', () => {
  it('should return a string with the total count of the links found', () => {
    expect(typeof mdLinks.countLinks("../README.md")).toEqual("string");
  });
});
