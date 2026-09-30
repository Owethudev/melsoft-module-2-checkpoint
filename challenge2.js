//this typeof returns a string
const myName = "Owethu Jezile";
console.log(`${typeof myName}`);

//this typeof returns a string
let myAge = 23;
console.log(`${typeof myAge}`);

//this typeof returns a boolean
let enjoyingJavaScript = true;
console.log(`${typeof enjoyingJavaScript}`);

//this typeof returns a number
let myFavTemp = 25.6;
console.log(`${typeof myFavTemp}`);

/*this typeof returns a number
   which is very surprising because i didnt know
   a string can be transformed into a number
   successfully without returning an error*/
let randomNumber = Number("hello");
console.log(`${typeof randomNumber}`);

//this typeof returns a number
console.log(`${typeof infinity}`);

//this typeof returns a number
console.log(`${typeof biggestNumber}`);

/*this typeof returns a object 
   it was surprising when learning about this because im expecting
   the log saying null instead of object*/
let emptyValue = null;
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