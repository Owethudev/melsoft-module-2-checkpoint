//Challenge 8

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