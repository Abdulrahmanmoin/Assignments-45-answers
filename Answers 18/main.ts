import Chalk from "chalk";

//  Question 18

// Seeing the World: Think of at least five places in the world you’d like to visit.

console.log(Chalk.bold.cyan("Answer 18"));

// • Store the locations in a array. Make sure the array is not in alphabetical order.

console.log(Chalk.magenta("Original Array"));

let location = ["Maldives" , "Singapore" , "Dubai" , "Turkey" , "Baku"] ;

// • Print your array in its original order.

console.log(location);

// • Print your array in alphabetical order without modifying the actual list.

console.log(Chalk.magenta("Sorted Array"));

console.log(location.slice().sort());

// • Show that your array is still in its original order by printing it.

console.log(Chalk.magenta("Original Array"));

console.log(location);

// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log(Chalk.magenta("Reversely sorted array"));

console.log(location.slice().sort().reverse());

// • Show that your array is still in its original order by printing it again.

console.log(Chalk.magenta("Original Array"));

console.log(location);

// • Reverse the order of your list. Print the array to show that its order has changed.

console.log(Chalk.magenta("Reverse Array"));


console.log(location.reverse());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log(Chalk.magenta("Again reverse Array"));


console.log(location.reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log(Chalk.magenta("Sorted Array"));


console.log(location.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log(Chalk.magenta("Reversely sorted array"));

console.log(location.sort().reverse());
