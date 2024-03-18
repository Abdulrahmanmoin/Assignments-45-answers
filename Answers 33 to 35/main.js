"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
// // Question 32
// // Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// console.log("Answer 32");
// // • Make a list of five or more usernames called current_users.
// let currentUsers = ["abdulrahman" , "ali" , "rehan", "akram", "saad"]
// // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// let newUsers = ["zain" , "kamran" , "abdulrahman" , "ammar" , "ali"];
// // for (let i = 0; i < currentUsers.length; i++) {
// //     if (currentUsers != newUsers.every()) {
// //     }
// //     const element = currentUsers[i];
// // }
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr);
// Question 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
console.log(chalk_1.default.magenta("Answer 33"));
// • Store the numbers 1 through 9 in a array.
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (let i = 0; i < ordinalNumbers.length; i++) {
    if (ordinalNumbers[i] === 1) {
        console.log("1st");
    }
    else if (ordinalNumbers[i] === 2) {
        console.log("2nd");
    }
    else if (ordinalNumbers[i] === 3) {
        console.log("3rd");
    }
    else {
        console.log(ordinalNumbers[i] + "th");
    }
}
// Question 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
console.log(chalk_1.default.magenta("Answer 34"));
let favPizzas = ["Pepperoni", "Margherita", "Neapolitan"];
for (let pizza of favPizzas) {
    console.log(pizza);
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let pizza of favPizzas) {
    console.log(`I like ${pizza} pizza`);
}
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("I really love pizza!");
// Question 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals 
// in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement 
// about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these 
// animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log(chalk_1.default.magenta("Answer 35"));
let animals = ["Leopard", "Tiger", "Lion"];
for (let animal of animals) {
    console.log(animal);
}
for (let animal of animals) {
    if (animal == "Leopard") {
        console.log(`${animal} Like to Spend Time in Trees.`);
    }
    else if (animal == "Tiger") {
        console.log(`${animal} can use their ears to communicate.`);
    }
    else {
        console.log(`${animal} are the only cats that live in groups.`);
    }
}
console.log("These animals are wild cat species");
