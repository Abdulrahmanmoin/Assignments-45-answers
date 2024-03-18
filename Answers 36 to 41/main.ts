import chalk from "chalk"

// Question 36

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

console.log(chalk.magenta("Answer 36"));

function makeShirt(size: string, message: string) {
    return `The size of the shirt is ${size} and the print is: ${message}`
}

console.log(makeShirt("Extra Large", "polo"));

// Question 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


console.log(chalk.magenta("Answer 37"));

function makeNewShirt(size: string = "Large", message: string = "I love Typescript") {
    console.log(`The size of the shirt is ${size} and the print is: ${message}`);
}

makeNewShirt();
makeNewShirt("Medium");
makeNewShirt("Small", "I love Javascript");

// Question 38

// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


console.log(chalk.magenta("Answer 38"));

function describeCity(city: string = "Karachi", country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describeCity();
describeCity("Lahore");
describeCity("Istanbul", "Turkey");

// Question 39

// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"

console.log(chalk.magenta("Answer 39"));

function cityCountry(city: string, country: string) {
    return `"${city}, ${country}"`
}

// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Islamabad", "Pakistan"));
console.log(cityCountry("Dehli", "India"));



// Question 40

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


console.log(chalk.magenta("Answer 40"));

function makeAlbum(artist: string, title: string, tracks?: number) {
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist,
        title: title
    }

    if (tracks != undefined) {
        album.tracks = tracks;
    }

    return album

}

let album1 = makeAlbum("Artist 1" , "Album title 1" , 6);
console.log(album1);

let album2 = makeAlbum("Artist 2" , "Album title 2");
console.log(album2);

let album3 = makeAlbum("Artist 3" , "Album title 3" , 4);
console.log(album3);


// Question 41

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

console.log(chalk.magenta("Answer 41"));

let magiciansArray: string[] = ["zahid" , "juanid" , "qais" , "ramiz"] 

function showMagicians(magicians: string[]){
    for (let magician of magicians) {
        console.log(magician);
    }
}

showMagicians(magiciansArray);