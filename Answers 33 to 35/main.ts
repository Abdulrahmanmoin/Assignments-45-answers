import chalk from "chalk"

// Question 33

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

console.log(chalk.magenta("Answer 33"));

// • Store the numbers 1 through 9 in a array.
let ordinalNumbers: number[] = [1, 2 , 3, 4, 5, 6, 7, 8, 9 ];

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (let i = 0; i < ordinalNumbers.length; i++) {

    if (ordinalNumbers[i] === 1) {
        console.log("1st");
    } else if(ordinalNumbers[i] === 2){
        console.log("2nd");
    } else if(ordinalNumbers[i] === 3){
        console.log("3rd");
    } else{
        console.log(ordinalNumbers[i] + "th");
    }

}

// Question 34

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

console.log(chalk.magenta("Answer 34"));

let favPizzas: string[] = ["Pepperoni" , "Margherita" , "Neapolitan"];

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

console.log(chalk.magenta("Answer 35"));

let animals: string[] = ["Leopard" , "Tiger" , "Lion"]

for (let animal of animals) {
    console.log(animal);
}

for (let animal of animals) {
    if (animal == "Leopard") {
        console.log(`${animal} like to spend time in trees.`);
    } else if(animal == "Tiger"){
        console.log(`${animal} can use their ears to communicate.`);
    } else{
        console.log(`${animal} are the only cats that live in groups.`);
    }
}

console.log("These animals are wild cat species.");
