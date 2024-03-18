import chalk from "chalk";

// Question 42

// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies
//  the array of magicians by adding 
// the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

console.log(chalk.magenta("Answer 42"));

let magiciansArray: string[] = ["zahid" , "juanid" , "qais" , "ramiz"] 

function showMagicians(magicians: string[]){
    for (let magician of magicians) {
        console.log(magician);
    }
}


function makeGreat(magicians: string[] = magiciansArray){
    magicians.forEach(magician => {
        console.log(`the Great ${magician}`);
    });
}

showMagicians(magiciansArray);
makeGreat();