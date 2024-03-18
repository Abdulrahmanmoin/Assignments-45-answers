import Chalk from "chalk";

// Question 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

console.log(Chalk.bold.cyan("Answer 9:"));

let favNumber: number = 909;
let message: string = `My favourite Number is ${favNumber}`;

console.log(Chalk.magenta(message));

// Question 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

console.log(Chalk.bold.cyan("Answer 10:"));

// Project 9 or Answer 9 is about printing my favorite number and Project 10 or Answer 10 is about to add comments.

// Question 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

console.log(Chalk.bold.cyan("Answer 11:"));

let names = ["Ebad" , "Affan"];
let Ebad = names.slice(0,1);
let Affan = names.slice(1,2);

console.log(Chalk.magenta(Ebad));
console.log(Chalk.magenta(Affan));

// Question 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

console.log(Chalk.bold.cyan("Answer 12:"));

console.log(Chalk.magenta(`${names[0]} subha time par uthjayo`));
console.log(Chalk.magenta(`${names[1]} subha time par uthjayo`));

// Question 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

console.log(Chalk.bold.cyan("Answer 13:"));

let favVehicle = [ "I would like to own a Honda car." , "I love honda cars in red color."];

console.log(Chalk.magenta(`•)${favVehicle[0]}`));
console.log(Chalk.magenta(`•)${favVehicle[1]}`));
