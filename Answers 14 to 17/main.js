"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
// Question 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log(chalk_1.default.bold.cyan("Answer 14:"));
let guestList = ["Sir Zia", "Sir Ameen Alam", "Miss Hina"];
console.log(`${guestList[0]}, join us for a dinner filled with captivating conversations and delightful company.`);
console.log(`${guestList[1]}, join us for a dinner filled with captivating conversations and delightful company.`);
console.log(`${guestList[2]}, join us for a dinner filled with captivating conversations and delightful company.`);
console.log(`${guestList[1]}, We'll miss your presence at dinner`);
// Question 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log(chalk_1.default.bold.cyan("Answer 15:"));
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Done ^
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestList[1] = "Sir Ahmed Raza";
console.log(guestList);
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log(`${guestList[0]}, join us for a dinner filled with delightful company`);
console.log(`${guestList[1]}, join us for a dinner filled with delightful company`);
console.log(`${guestList[2]}, join us for a dinner filled with delightful company`);
console.log(`Hey guys, I found a bigger dinner table.`);
// Question 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log(chalk_1.default.bold.cyan("Answer 16:"));
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Done ^
// • Add one new guest to the beginning of your array.
guestList.unshift("Sir Hunain");
// • Add one new guest to the middle of your array.
guestList.splice(Math.floor(guestList.length / 2), 0, "Miss Dua");
// • Use append() to add one new guest to the end of your list.
guestList.push("Miss Fatima"); //I didn't know the append method in array before this question. I want to know so I google it but I can't find any append method for adding element at the end of the array. 
console.log(guestList);
// • Print a new set of invitation messages, one for each person in your list.
console.log(`Dear ${guestList[0]},  please join us for dinner.`);
console.log(`Dear ${guestList[1]},  please join us for dinner.`);
console.log(`Dear ${guestList[2]},  please join us for dinner.`);
console.log(`Dear ${guestList[3]},  please join us for dinner.`);
console.log(`Dear ${guestList[4]},  please join us for dinner.`);
console.log(`Dear ${guestList[5]},  please join us for dinner.`);
console.log("I can invite only two people");
// Question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log(chalk_1.default.bold.cyan("Answer 17:"));
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Done ^
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
console.log(`Sorry ${guestList.splice(0, 1)}, you can’t invite.`);
console.log(`Sorry ${guestList.splice(1, 1)}, you can’t invite.`);
console.log(`Sorry ${guestList.splice(1, 1)}, you can’t invite.`);
console.log(`Sorry ${guestList.splice(2, 1)}, you can’t invite.`);
console.log(guestList);
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`${guestList[0]}, y’re still invited.`);
console.log(`${guestList[1]}, y’re still invited.`);
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList.shift();
guestList.shift();
console.log(guestList);
// Question 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(chalk_1.default.bold.cyan("Answer 19:"));
console.log(`Total Numbers of guests are: ${guestList.length}`);
