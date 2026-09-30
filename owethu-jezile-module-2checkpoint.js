// CHALLENGE 1 
// walthrough for the difference between var,let and const

//dataType is a string , const because my name will never change
const myName = "Owethu Jezile";

// dataType is a number ,let because my age will always change
let myAge = 23;

//dataType is a boolean ,let because the answer can be one of two things  which is i enjoy or not and it can always change
let enjoyingJavaScript = true;

//dataType is a number ,let because my favourite temperature can change with different stages of my lfe
let myFavTemp = 25.6;

//dataType is a number ,let because i can reassign it later on
let randomNumber = Number("hello");

//dataType is a number ,let because i can reassign it later on
let infinity =  1/0;

//dataType is a number ,let because i can reassign it later on
let biggestNumber = Number.MAX_SAFE_INTEGER;

//dataType is NULL ,let because i can reassign it later on
let emptyValue = null;

/* 1.The difference between var and let are their scopes , let will always exist within the block it has been declared in
while that does not apply with var it still can be accessed outside the block.var can only be accessed inside a certain block the same way
let can with blocks is when we use a function ,any var declared in a function cannot be accessed outside it.

2.we default to const so we do not accidentaly reassign values later in the program and that is where let is useful we will use it to reassign values we know will change

3.because it is bad naming cnvention and make it harder for other developers in your team to read your code, i would rename it to userName, naming matters for better code readability */


// CHALLENGE 2

//this typeof returns a string

console.log(`${typeof myName}`);

//this typeof returns a string
myAge = 23;
console.log(`${typeof myAge}`);

//this typeof returns a boolean
enjoyingJavaScript = true;
console.log(`${typeof enjoyingJavaScript}`);

//this typeof returns a number
myFavTemp = 25.6;
console.log(`${typeof myFavTemp}`);

/*this typeof returns a number
   which is very surprising because i didnt know
   a string can be transformed into a number
   successfully without returning an error*/
randomNumber = Number("hello");
console.log(`${typeof randomNumber}`);

//this typeof returns a number
console.log(`${typeof infinity}`);

//this typeof returns a number
console.log(`${typeof biggestNumber}`);

/*this typeof returns a object 
   it was surprising when learning about this because im expecting
   the log saying null instead of object*/
emptyValue = null;
console.log(`${typeof emptyValue}`);

//this typeof returns a undefined
console.log(`${typeof undefined}`);

//this typeof returns a object
console.log(`${typeof null}`);

/*this typeof returns a number
   which is werid to me because NaN means 
   not a number so how does it return a number*/
console.log(`${typeof NaN}`);

//this typeof returns a string
console.log(`${typeof "42"}`);

//this typeof returns a string
console.log(`${typeof (typeof 42)}`);

//this typeof returns a object
console.log(`${typeof [1,2,3]}`);

//this typeof returns a function
console.log(`${typeof function() {}}`);

/* I have learned that NaN does not necessarily mean not a nuber but returns a speaial kind of number so it still is a number
   null returning object is a javascript quirk which became part of the language and does not really mean null is an actual object
   these bugs are in the language unfortunately */

// CHALLENGE 3

// conversions for the first value

let a = Number("123");
console.log(`${a} : ${typeof a}`);
// result is - 123 : number

let a1 = parseInt("123");
console.log(`${a1} : ${typeof a1}`);
// result is - 123 : number

let a2 = parseFloat("123");
console.log(`${a2} : ${typeof a2}`);
// result is - 123 : number

let a3 = Boolean("123");
console.log(`${a3} : ${typeof a3}`);
// result is - true : boolean

let a4 = String("123");
console.log(`${a4} : ${typeof a4}`);
// result is - 123 : string


// conversions for the second value

let b = Number("3.14");
console.log(`${b} : ${typeof b}`);
// result is - 3.14 : number


let b1 = parseInt("3.14");
console.log(`${b1} : ${typeof b1}`);
// result is - 3 : number


let b2 = parseFloat("3.14");
console.log(`${b2} : ${typeof b2}`);
// result is - 3.14 : number


let b3 = Boolean("3.14");
console.log(`${b3} : ${typeof b3}`);
// result is - true : boolean


let b4 = String("3.14");
console.log(`${b4} : ${typeof b4}`);
// result is - 3.14 : string


// conversions for the third value
let c = Number("hello");
console.log(`${c} : ${typeof c}`);
// result is - NaN : number

let c1 = parseInt("hello");
console.log(`${c1} : ${typeof c1}`);
// result is - NaN : number

let c2 = parseFloat("hello");
console.log(`${c2} : ${typeof c2}`);
// result is - NaN : number

let c3 = Boolean("hello");
console.log(`${c3} : ${typeof c3}`);
// result is - true : boolean

let c4 = String("hello");
console.log(`${c4} : ${typeof c4}`);
// result is - hello : string

// conversions for the fourth value
let d = Number("42abc");
console.log(`${d} : ${typeof d}`);
// result is - NaN : number

let d1 = parseInt("42abc");
console.log(`${d1} : ${typeof d1}`);
// result is - 42 : number

let d2 = parseFloat("42abc");
console.log(`${d2} : ${typeof d2}`);
// result is - 42 : number

let d3 = Boolean("42abc");
console.log(`${d3} : ${typeof d3}`);
// result is - true : boolean

let d4 = String("42abc");
console.log(`${d4} : ${typeof d4}`);
// result is - 42abc : string

// conversions for the fifth value
let e = Number("");
console.log(`${e} : ${typeof e}`);
// result is - 0 : number

let e1 = parseInt("");
console.log(`${e1} : ${typeof e1}`);
// result is - NaN : number

let e2 = parseFloat("");
console.log(`${e2} : ${typeof e2}`);
// result is - NaN : number

let e3 = Boolean("");
console.log(`${e3} : ${typeof e3}`);
// result is - false : boolean

let e4 = String("");
console.log(`${e4} : ${typeof e4}`);
// result is -  : string

// conversions for the sixth value
let f = Number(0);
console.log(`${f} : ${typeof f}`);
// result is - 0 : number

let f1 = parseInt(0);
console.log(`${f1} : ${typeof f1}`);
// result is - 0 : number

let f2 = parseFloat(0);
console.log(`${f2} : ${typeof f2}`);
// result is - 0 : number

let f3 = Boolean(0);
console.log(`${f3} : ${typeof f3}`);
// result is - false : boolean

let f4 = String(0);
console.log(`${f4} : ${typeof f4}`);
// result is - 0 : string

// conversions for the seventh value
let g = Number(null);
console.log(`${g} : ${typeof g}`);
// result is - 0 : number

let g1 = parseInt(null);
console.log(`${g1} : ${typeof g1}`);
// result is - NaN : number

let g2 = parseFloat(null);
console.log(`${g2} : ${typeof g2}`);
// result is - NaN : number

let g3 = Boolean(null);
console.log(`${g3} : ${typeof g3}`);
// result is - false : boolean

let g4 = String(null);
console.log(`${g4} : ${typeof g4}`);
// result is - null : string

// conversions for the eighth value
let h = Number(undefined);
console.log(`${h} : ${typeof h}`);
// result is - NaN : number

let h1 = parseInt(undefined);
console.log(`${h1} : ${typeof h1}`);
// result is - NaN : number

let h2 = parseFloat(undefined);
console.log(`${h2} : ${typeof h2}`);
// result is - NaN : number

let h3 = Boolean(undefined);
console.log(`${h3} : ${typeof h3}`);
// result is - false : boolean

let h4 = String(undefined);
console.log(`${h4} : ${typeof h4}`);
// result is - undefined : string

/*1. number converts the entire value into a number then parseInt converts the number until there is something
    that is not a number in the value for example a comma or dot in a decimal
  
  2. parsefloat when im handling values with decimals because parseInt will cut the value after our comma and give us a whole number instead
  
  3. it returns nothing so i would imagine we would get bugs because we expected the program not to run or hrow an error when there
  is not valid input instead of it returning nothing*/

  // CHALLENGE 4

  //Challenge4

/*my predictions
expression 1
a- 53 will be printed 
b- string will be the typeof 
c- because it is a string and when "+" is used then it concatenates whatever you add after the +*/

/*expression 2
a- 2 will be printed
b- number will be the typeof 
c- because javascript acts differntly when you use the - sign with a string that can be converted to a number it will convert and perform the math expression*/

/*expression 3
a- 10 will be printed
b- number will be the typeof 
c- because javascript acts differntly when you use the * sign unlike + almost all the other operators automatcally convert string to number*/

/*expression 4
a- 2 will be printed
b- number will be the typeof 
c- because in javascript and booleans true equals 1 and false equals 0*/

/*expression 5
a- "true1" will be printed
b- string will be the typeof 
c- because in javascript + is for string concatenation*/

/*expression 6
a- 0 will be printed
b- number will be the typeof 
c- because false equals zero and null has no value*/

/*expression 7
a- undefined will be printed
b- undefined will be the typeof 
c- because null has no value only undefined will be printed*/

/*expression 8
a- error will be printed
b- error will be the typeof 
c- because you cannot divide by zero*/

/*expression 9
a- error will be printed
b- error will be the typeof 
c- because you cannot divide a numberby zero*/

/*expression 10
a- NaN will be printed
b- number will be the typeof 
c- because javascript will try convert "abc" into a number but it does not result in a valid number*/

/*expression 11
a- [][] will be printed
b- string will be the typeof 
c- because in javascript + is for string concatenation*/

/*expression 12
a- [1][2] will be printed
b- string will be the typeof 
c-  because in javascript + is for string concatenation*/


// CHALLENGE 5

//Challenge 5
 
//saves the user name as a string
var userName = "Sarah"

//1. saves the user age as a string which we do not want because age is supposed to be a number
var userAge = "25" 

//2. saves the user score as a number
var userScore = 85.5

//3. saves the score adjustment as a string which we do not want because we will be adding it to the user score which is a number
var scoreAdjustment = "10"

//4. saves the new score as a string because score adjustment is a string and user score is a number so it will convert the number into a string and concatenate the two values
var newScore = userScore + scoreAdjustment

//logging new score to the console
console.log("New score: " + newScore)

//5. saves the salary as a string which we do not want because salary is supposed to be a number
var salary = "50000"

//saves the tax rate as a number
var TAX_RATE = 0.15

//saves the tax as a string because salary is a string and TAX_RATE is a number so it will convert the number into a string and concatenate the two values
var tax = salary * TAX_RATE

//logs the tax to the console
console.log("Tax: R" + tax)

//6. saves the years until retirement as a string because user age is a string and 65 is a number so it will convert the number into a string and concatenate the two values
var yearsUntilRetirement = 65 - userAge

//logs the years until retirement to the console
console.log("Years until retirement: " + yearsUntilRetirement)

//7. saves the total age and score as a string because user age is a string and user score is a number so it will convert the number into a string and concatenate the two values
var totalAgeAndScore = userAge + userScore

//logs the total age and score to the console
console.log(totalAgeAndScore)

//8. saves the isAdmin as a string which we do not want because isAdmin is supposed to be a boolean
var isAdmin = "false"

//logs the isAdmin to the console
console.log("Admin: " + Boolean(isAdmin))

// corrected version of code

const userName = "Sarah";
let userAge = 25;
let userScore = 85.5;
let scoreAdjustment = 10;
let newScore = userScore + scoreAdjustment;
console.log(`New score: ${newScore}`);

let salary = 50000;
const TAX_RATE = 0.15;
let tax = salary * TAX_RATE;
console.log(`Tax: R${tax}`);

const yearsUntilRetirement = 65 - userAge;
console.log(`Years until retirement: ${yearsUntilRetirement}`);

const totalAgeAndScore = userAge + userScore;
console.log(`Total age and score: ${totalAgeAndScore}`);

let isAdmin = false;
console.log(`Admin: ${isAdmin}`);

/*In this corrected version i changed the data types you were initializing into varables and using modern javascript with let instead of var 
   and const where it was fit . when logging values i used template literals instead of old school jaavascript*/


// CHALLENGE 6
/*
the outputs are interesting because they are not
straightforward as i would have expected and i have not encountered 
EPSILON before it is my first time knwing what it is and how it helps us handle
decimals i javascript*/

// CHALLENGE 7

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

// CHALLENGE 8

/* datatypes for each variable are as follows:
 - productName: string
 - unitPrice: number
 - quantityinput: string
 - taxRate: number
 */

let productName = "Laptop";
let unitPrice = 50;
/* this variable has been commented out so i can test the code with a string value for quantityinput to see if it will convert it into a number and perform the math operations correctly
let quantityinput = "3";*/
let quantityinput = "abc";
let taxRate = 0.15;

let quantity = Number(quantityinput);

let subtotal = unitPrice * quantity;
let tax = subtotal * taxRate;
let total = subtotal + tax;


console.log(`subtotal: ${subtotal.toFixed(2)} /n
             tax: ${tax.toFixed(2)}/n
             total: ${total.toFixed(2)}
            `);

/* what happened after i changed quantityinput to "abc" - i got NaN for all values and i think a real application should have 
   strict input validation where we make sure what we get is either converted into what we expect or do not allow the use to 
   sumit invalid input */

// CHALLENGE 9

let mystery = "10"
let count = 5
let result = mystery / count

console.log(typeof result)
console.log(result)
/*predictions - firsst log will give us number because other operations besides +
in javascript automatically convert strings to numbers when possible
- second log will give us 2 */

let mystery2 = "10a"
let count2 = 5
let result2 = mystery2 / count2

console.log(typeof result2)
console.log(result2)
console.log(result2 + 1)
/* predictions -  firsst log will give us number because other operations besides +
in javascript automatically convert strings to numbers when possible
-second log will give us Nan because "10a" cannot be converted to a valid number
-third log will give us Nan because result2 is NaN */

let mystery3 = "10"
let result3 = mystery3 + 5 + 5
let result4 = 5 + 5 + mystery3

console.log(result3)
console.log(result4)
/*predictions -  first log will give us "1055" because string concatenation is performed when the + operator is used with strings 
- second log will give us "1055" for the same reason */

// CHALLENGE 10

/*

1 - it is very unrestrictive or strict and allows room for many mistakes to happen but it really is simple and
would allow a learner like me to pickup things fairly quick

2- typeof is used to check of determine the type of data a variable may contain and Number.isNaN will be used
to check if a ceratain value is not a number

3- if it happens you store a clients cellphone number as a variable intead of an actual number

4- before answering this question i did not know what either implicit or explicit conversion meant but now i do and implicit is when javascript automatically 
converst for you and explicit is when you do it manually in your code

5- scope would be the most easy to misunderstand because i also struggled bit with it because you might think
just because you have declared your variable you can access it anywhere even outside your block which is not the case
and that is where attention to detail come into play because you can have problems with the code you have written when you
dont understand scope and call on variables that are not in scope at that current moment you want to access them and your program
does not run*/