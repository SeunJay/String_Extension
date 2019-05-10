let string = require("../extend-string");
let demoString = 'seun';
let demoString1 = 'sxn';

describe("Extended String-methods", () => {
  it("Should return a true if a string contains a vowel", () => {
    expect(demoString.hasVowels()).toBeTruthy();
  });
  it("Should return a false if a string contains a vowel", () => {
    expect(demoString1.hasVowels()).toBeFalsy();
  });
  it("Should capitalize a given string", () => {
    expect(demoString.toUpper()).toBe('SEUN');
  });
  it("Should convert a string to lowercase althrough", () => {
    expect(demoString.toUpper().toLower()).toBe('seun');
  });
  it("Should convert the first character of a string to uppercase", () => {
    expect(demoString.ucFirst()).toBe('Seun');
  });
})