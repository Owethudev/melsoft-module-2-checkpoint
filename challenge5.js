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