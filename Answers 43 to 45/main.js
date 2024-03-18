"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
// Question 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log(chalk_1.default.magenta("Answer 43"));
let magiciansArray = ["zahid", "junaid", "qais", "ramiz"];
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians = copyMagiciansArray) {
    let copyMagicians = [];
    magicians.forEach(magician => {
        copyMagicians.push(`the Great ${magician}`);
    });
    return copyMagicians;
}
let copyMagiciansArray = makeGreat(magiciansArray);
console.log("This is original array");
showMagicians(magiciansArray);
console.log("This is modified array");
showMagicians(copyMagiciansArray);
// Question 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log(chalk_1.default.magenta("Answer 44"));
function sandwich(sandwichItems) {
    console.log("Make your sandwish with: ");
    sandwichItems.forEach(sandwichItem => {
        console.log(sandwichItem);
    });
    console.log("Enjoy your sandwich.");
}
sandwich(["Lettuce", "mayonnaise"]);
sandwich(["Lettuce", "mayonnaise", "cheese"]);
sandwich(["turkey"]);
//  Question 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufac
// turer 
// and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required 
// information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to
//  make sure all the information was stored correctly.
console.log(chalk_1.default.magenta("Answer 45"));
function carFunc(manufacturer, model, ...args) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (let i = 0; i < args.length; i += 2) {
        car[args[i]] = args[i + 1];
    }
    return car;
}
console.log(carFunc("Honda", "Civic", "color", "red", "year", 2024));
