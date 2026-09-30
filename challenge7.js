//Challenge 7

//Old verion of code

// p is stored in a string and it is a decimal number
var p = "199.99"

// q is stored in a string and it is a whole number
var q = "3"

// t is stored as a number but using var instead of let
var t = 0.15

// the sub will return a number because the * operator will convert the string into a number and perform the math operation but this is still bad pratice
var sub = p * q

//will return a number because the * operator will convert the string into a number and perform the math operation but this is still bad pratice
var tax = sub * t

//wil return a number because sub and tax are both numbers and the + operator will perform the math operation
var tot = sub + tax

// this is an unnecssary step because we can just log tot to the console
var r = "Total: " + tot

//this will log r to the console and it will be a string because r is a string
console.log(r)

//New refactored version

let p = 199.99;
let q = 3;
let t = 0.15;
let sub = p * q
let tax = sub * t
const tot = sub + tax

console.log(`Total: ${tot}`)