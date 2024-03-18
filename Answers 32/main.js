"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let currentUser = ["HanZala", "JunaID", "akbar", "riAz", "kamraN"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let newUsers = ["AkBaR", "ahsan", "qaIs", "kAmran", "zaiD"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person 
// will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
for (let i = 0; i < newUsers.length; i++) {
    let lowerNewUserNames = newUsers[i].toLowerCase();
    if (currentUser.map(cUser => cUser.toLowerCase()).includes(lowerNewUserNames)) {
        console.log(`Username '${newUsers[i]}' is not available. Please enter a different username.`);
    }
    else {
        console.log(`Username '${newUsers[i]}' is available.`);
    }
}