import Chalk from "chalk";
//  Question 2 
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log(Chalk.bold.cyan("Answer 2:"));
let person = "Eric";
let message = `Hello ${person}, would you like to learn some Python today?`;
console.log(Chalk.italic.magenta(message));
//  Question 3 
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(Chalk.bold.cyan("Answer 3:"));
let personName = "abdul rahman moin";
console.log(Chalk.italic.magenta("lower case:" + personName.toLowerCase()));
console.log(Chalk.italic.magenta("Upper case:" + personName.toUpperCase()));
console.log(Chalk.italic.magenta("Title case:" + personName.charAt(0).toUpperCase() + personName.slice(1, 13).toLowerCase() + personName.charAt(13).toUpperCase() + personName.slice(14, 17).toLowerCase()));
// Download karke dehko inquirer ko
