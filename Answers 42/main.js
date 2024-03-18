"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
// Question 42
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies
//  the array of magicians by adding 
// the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
console.log(chalk_1.default.magenta("Answer 42"));
let magiciansArray = ["zahid", "juanid", "qais", "ramiz"];
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians = magiciansArray) {
    magicians.forEach(magician => {
        console.log(`the Great ${magician}`);
    });
}
showMagicians(magiciansArray);
makeGreat();
// Question 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call 
// provides, and it should print a summary of the sandwich that is being ordered. Call the function 
// three times, using a different number of arguments each time.
console.log(chalk_1.default.magenta("Answer 44"));
// let sandwichItems: string[] = ["lettuce" , "tomato" , "cheese"];
// function sandwich(sandwichFinal: string[]) {
//     // console.log(`  ${sandwichFinal}`);
//     if ( {
//     }
// }
