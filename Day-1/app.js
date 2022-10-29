// Day-01 Basics topics

// 1. Variables

let name;
console.log(name);

let storeValue = "value"; //camel case

let FirstName = "first name"; // pascale case
console.log(storeValue);
console.log(FirstName);

// 2. constants
const tax = "tax value";
const Tax = 30;

console.log(tax);
console.log(Tax);

// 3. primitive Types

//Primitive Data type
const stringType = "cat't";
const numberType = 5;
const isApproved = true; //boolean
const nullType = null;
const undefineType = undefined;
const nanType = NaN;
const bigintType = 46546546546546465465n;

//#Refarance Type
//object
// array
//function

// 4. Dynamic Typing

let age = 50;

age = "string value";

age = {};

age = false;

age = null;

console.log(age);

// 5. Object

const person = {
  name: "Meer Sagor",
  age: 20,
  ["contact number"]: "0175",
  meet() {
    return this.name;
  },
};

console.log(person.meet());

// 6. Arrays
const myArray = [
  1,
  5,
  714,
  { name: "meer sagor", age: 20 },

  [545, 55, ["arrays", { name: "maruf", skill: ["js", "html", "css"] }]],

  545,
  "asdf",
];

console.log(myArray[4]);

// 7. Functions

function sum(num, num2) {
  return num + num2;
}

const anotherFun = sum(2, 5);

console.log(anotherFun);

// 8. Types of Functions
