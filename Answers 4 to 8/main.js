"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Chalk from "Chalk"
// import Chalk from "chalk";
const chalk_1 = __importDefault(require("chalk"));
// Question 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Result should be: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log(chalk_1.default.bold.cyan("Answer 4"));
console.log(chalk_1.default.magenta("Michael Jordan once said, “I can accept failure, everyone fails at something. But I can’t accept not trying.”"));
// Question 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log(chalk_1.default.bold.cyan("Answer 5"));
let famous_person = "Michael Jordan";
let message = "“I can accept failure, everyone fails at something. But I can’t accept not trying.”";
console.log(chalk_1.default.magenta(`${famous_person} once said, ${message}`));
// Question 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log(chalk_1.default.bold.cyan("Answer 6"));
let personName = "\t  \n  Ali  \t  \n";
console.log(chalk_1.default.magenta(personName));
// Print name without charachter and whitespaces
console.log(chalk_1.default.magenta(personName.trim()));
// Question 7 and 8
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(chalk_1.default.bold.cyan("Answer 7 and 8"));
// For addition
console.log(chalk_1.default.magenta(4 + 4));
// For Subtraction
console.log(chalk_1.default.magenta(12 - 4));
// For multiplication
console.log(chalk_1.default.magenta(2 * 4));
// For Division
console.log(chalk_1.default.magenta(32 / 4));
