"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
//  Question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
console.log(chalk_1.default.bold.cyan("Answer 18"));
// • Store the locations in a array. Make sure the array is not in alphabetical order.
console.log(chalk_1.default.magenta("Original Array"));
let location = ["Maldives", "Singapore", "Dubai", "Turkey", "Baku"];
// • Print your array in its original order.
console.log(location);
// • Print your array in alphabetical order without modifying the actual list.
console.log(chalk_1.default.magenta("Sorted Array"));
console.log(location.slice().sort());
// • Show that your array is still in its original order by printing it.
console.log(chalk_1.default.magenta("Original Array"));
console.log(location);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(chalk_1.default.magenta("Reversely sorted array"));
console.log(location.slice().sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log(chalk_1.default.magenta("Original Array"));
console.log(location);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(chalk_1.default.magenta("Reverse Array"));
console.log(location.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(chalk_1.default.magenta("Again reverse Array"));
console.log(location.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(chalk_1.default.magenta("Sorted Array"));
console.log(location.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(chalk_1.default.magenta("Reversely sorted array"));
console.log(location.sort().reverse());
// Question 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Define a list of cities
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney", "Rio de Janeiro", "Dubai", "Beijing", "Moscow", "Los Angeles"];
// Print the list of cities
console.log("List of cities:");
cities.forEach(city => {
    console.log(city);
});
