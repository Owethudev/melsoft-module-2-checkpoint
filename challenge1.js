//walthrough for the difference between var,let and const

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