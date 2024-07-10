"use strict";
// HomeWork 
// interfaces
// structural typing in ts
// rest parameter
// rest parameter is located in last 
function invite(host, ...guests) {
    console.log(guests);
}
invite("hamza", "ali", "ahmed");
function Invite(...guests) {
    console.log(guests.join(" ")); // separate name but not in array     
    console.log(guests.join("|")); // separate name but not in array     
}
Invite("Hamza", "Ali", "Ahmed");
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add(22, 52));
console.log(add("22", "52"));
console.log(add("Hello", "World"));
console.log(add("22", 52));
let firstName = "Hamzah Syed";
firstName.charAt(0).toUpperCase() +
    console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.length);
let price = 18.1;
console.log(price.toFixed(2));
