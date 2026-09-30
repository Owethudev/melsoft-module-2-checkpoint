//challenge 9 

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