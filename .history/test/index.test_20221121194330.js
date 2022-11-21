// import files
const add = require("../calculator/add").default;
const subtract = require("../calculator/subtract");
const multiply = require("../calculator/multiply");
const divide = require("../calculator/divide");

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
  expect(multiply(25, 10)).toBe(250);
});

// Test Case 4 (Division)
test("Should divide one number by another", () => {
  expect(divide(20, 10)).toBe(2);
});
