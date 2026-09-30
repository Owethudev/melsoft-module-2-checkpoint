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