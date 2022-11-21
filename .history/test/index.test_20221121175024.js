// import files
const add = require("../calculator/add");
import subtract from "./calculator/subtract";
import multiply from "./calculator/multiply";
import add from "./calculator/add";

// Test Case 1 (Addition)
test("Should add two numbers", () => {
  expect(add(25, 10)).toBe(35);
});

// Test Case 2 (Subtraction)
test("Should Subtract one number from another", () => {
  expect(subtract(25, 10)).toBe(15);
});

// Test Case 3 (Multiplication)
test("Should multiply two numbers", () => {
  expect(add(25, 10)).toBe(250);
});

// Test Case 4 (Division)
test("Should divide one number by another", () => {
  expect(add(20, 10)).toBe(2);
});