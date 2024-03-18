import chalk from "chalk";
import inquirer from "inquirer";
// Question 27 
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
console.log(chalk.bold.cyan("Answer 27"));
let color = await inquirer.prompt({
    name: "color",
    type: "list",
    message: "Choose alien color",
    choices: ["green", "yellow", "red"]
});
let response = color.color;
if (response === "green") {
    // • If the alien is green, print a message that the player earned 5 points.
    console.log("You just earned 5 points.");
}
else if (response === "yellow") {
    // • If the alien is yellow, print a message that the player earned 10 points.
    console.log("You just earned 10 points.");
}
else {
    // • If the alien is red, print a message that the player earned 15 points.
    console.log("You just earned 15 points.");
}
// Question 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
console.log(chalk.bold.cyan("Answer 28"));
let age = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "Type your age",
});
let ageResult = age.age;
if (ageResult < 2) {
    // • If the person is less than 2 years old, print a message that the person is a baby.
    console.log("You are a baby");
}
else if (ageResult <= 4) {
    // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
    console.log("You are a toddler");
}
else if (ageResult <= 13) {
    // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
    console.log("You are a kid");
}
else if (ageResult <= 20) {
    // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
    console.log("You are a teenager");
}
else if (ageResult <= 65) {
    // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
    console.log("You are an adult");
}
else if (Number.isNaN(ageResult)) {
    console.log("Please type your age");
}
else {
    // • If the person is age 65 or older, print a message that the person is an elder.
    console.log("You are an elder");
}
// Question 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
console.log(chalk.bold.cyan("Answer 29"));
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favFruits = ["strawberry", "mango", "apple"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favFruits.includes("strawberry")) {
    console.log("I really like strawrberries.");
}
if (favFruits.includes("mango")) {
    console.log("I really like mangoes.");
}
if (favFruits.includes("apple")) {
    console.log("I really like apples.");
}
if (favFruits.includes("banana")) {
    console.log("I really like bananas.");
}
if (favFruits.includes("watermelon")) {
    console.log("I really like Watermelons.");
}
// Question 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
console.log(chalk.bold.cyan("Answer 30"));
let usernames = ["admin", "ali", "zain", "Sajid", "bilal"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
// Question 31
// No Users: Add an if test to Exercise 31 to make sure the list of users is not empty.
console.log(chalk.bold.cyan("Answer 31"));
if (usernames.length === 0) {
    // • If the list is empty, print the message We need to find some users!
    console.log("We need to find some users!");
}
// • Remove all of the usernames from your array, and make sure the correct message is printed.
usernames = [];
console.log(usernames);
