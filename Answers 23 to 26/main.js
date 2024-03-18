import chalk from "chalk";
//  Question 23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
console.log(chalk.bold.cyan("Answer 23"));
console.log(chalk.magenta("Test no#1"));
// Test no#1
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log(chalk.magenta("Test no#2"));
// Test no#2
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
console.log(chalk.magenta("Test no#3"));
// Test no#3
console.log("Is car.toLowerCase == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
console.log(chalk.magenta("Test no#4"));
// Test no#4
console.log("Is car.toUpperCase == 'subaru'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');
console.log(chalk.magenta("Test no#5"));
// Test no#5
console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda');
console.log(chalk.magenta("Test no#6"));
// Test no#6
console.log("Is car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU');
console.log(chalk.magenta("Test no#7"));
// Test no#7
console.log("Is car.UpperCase == 'suaru'? I predict False.");
console.log(car.toUpperCase() == 'subaru');
console.log(chalk.magenta("Test no#8"));
// Test no#8
console.log("Is car.lowerCase == 'SUBARU'? I predict False.");
console.log(car.toLowerCase() == 'SUBARU');
console.log(chalk.magenta("Test no#9"));
// Test no#9
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
console.log(chalk.magenta("Test no#10"));
// Test no#10
console.log("Is car == 'Honda'? I predict False.");
console.log(car == 'Honda');
// Question 24 
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log(chalk.bold.cyan("Answer 24"));
// For true
console.log("Equality test with strings: 'karachi' == 'karachi'", "karachi" == "karachi");
console.log("Inequality test with strings: 'Karachi' != 'Lahore'", "karachi" != "Lahore");
// For False
console.log("Equality test with strings: 'Karachi' == 'Lahore'", "karachi" == "Lahore");
console.log("Inequality test with strings: 'karachi' != 'karachi'", "karachi" != "karachi");
// • Tests using the lower case function
let city = "KARACHI";
// For True
console.log(city.toLowerCase() == "karachi");
// For False
console.log(city.toLowerCase() == "KARACHI");
// • Numerical tests involving equality and inequality
// For true
console.log("Equality test with numbers: 12 == 12", 12 == 12);
console.log("Inequality test with strings: 12 != 11", 12 != 11);
// For false
console.log("Equality test with numbers: 12 == 11", 12 == 11);
console.log("Inequality test with numbers: 12 != 12", 12 != 12);
//• Numerical tests involving greater than and less than
// For ture
console.log("Greater than test: 13 > 12", 13 > 12);
console.log("Less than test: 11 < 12", 11 < 12);
// For false
console.log("Greater than test: 12 > 13", 12 > 13);
console.log("Less than test: 12 < 11", 12 < 11);
// • Numerical tests involving greater than or equal to
// For true
console.log("Greater than or equal to test: 13 >= 12", 13 >= 12);
// For false
console.log("Greater than or equal to test: 12 >= 13", 12 >= 13);
// • Numerical tests involving and less than or equal to
// For true
console.log("Less than or equal to test: 12 <= 13", 12 <= 13);
// For false
console.log("Less than or equal to test: 13 <= 12", 13 <= 12);
// • Tests using "and" and "or" operators
// For true
console.log("Test using and operator: 13 == 13 & 13 > 12", 13 == 13 && 13 > 12);
console.log("Test using OR operator: 13 == 13 || 13 < 12", 13 == 13 || 13 < 12);
// for false
console.log("Test using and operator: 13 == 13 & 13 < 12", 13 == 13 && 13 < 12);
console.log("Test using OR operator: 13 > 13 || 13 == 12", 13 > 13 || 13 == 12);
// • Test whether an item is in a array
let cities = ["Karachi", "Lahore", "Islamabad"];
// for true
console.log("Testing whether an item is in a array: cities.includes('Karachi')", cities.includes("Karachi"));
// for false
console.log("Testing whether an item is in a array: cities.includes('Quetta')", cities.includes("Quetta"));
// • Test whether an item is not in a array
let garriyan = ["Mehran", "Prado", "Vigo"];
let garri = "Civic";
// for true
console.log("Testing whether an item is not in a array: cities.includes('Civic')", !garriyan.includes(garri));
// for false
console.log("Testing whether an item is not in a array: cities.includes('Prado')", !garriyan.includes("Prado"));
// Question 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
console.log(chalk.bold.cyan("Answer 25"));
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points");
}
// Question 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
console.log(chalk.bold.cyan("Answer 26"));
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else {
    console.log("You just earned 10 points.");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("You just earned 5 points");
}
// • Write one version of this program that runs the if block and another that runs the else block.
else {
    console.log("You just earned 10 points.");
}
