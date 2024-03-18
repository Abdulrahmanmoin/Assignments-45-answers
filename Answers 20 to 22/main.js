"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
// Question 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log(chalk_1.default.bold.cyan("Answer 20"));
let items = [];
items.push("Pakistan", "Karachi", "K2", "Urdu");
console.log(items);
// Question 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log(chalk_1.default.bold.cyan("Answer 21"));
let user = {
    name: "Abdul Rahman",
    age: 16,
    teacher: false,
    student: true
};
console.log(user);
// Question 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log(chalk_1.default.bold.cyan("Answer 22"));
let array = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log(array[5]);
// Correction
console.log(array[4]);
