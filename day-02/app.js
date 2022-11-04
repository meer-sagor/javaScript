// *************** Arithmetic Operators
// +
// -
// *
// /

// *************** Remainder Operator

// %
const reminderOperator = 13 % 5;

// ***************** Assignment Operators

// let number = 415656

// *************** Unary Operators
// +
// ++
// --

let a = 5;

console.log(Number("5"));
console.log(parseInt("5"));
console.log(+"5");

// console.log(a++);
// console.log(++a);
// console.log(a);

// console.log(a--);
// console.log(a);
console.log(--a);
console.log(a);

// ************** Comparison Operators
// >

const gatherThenOperators = 5 > 6;
console.log(gatherThenOperators);

// <

const lessThenOperators = 7 < 10;
console.log(lessThenOperators);

// >=

const gatherThenEqualOperators = 5 >= 5;
console.log(gatherThenEqualOperators);

// <=

const lessThenEqualOperators = 11 <= 10;
console.log(lessThenEqualOperators);

// ==
const valueMatch = 1 == 1;
const valueMatch2 = 1 == "1";

// ===
const valueMatchWithType = 1 === 1;
const valueMatchWithType2 = 1 === "1";

// ****************** Logical Operators

// &&
// ||
// !

const name = "meer";
const name2 = "sagor";

if (name == "meer" && name2 == "sagr" && true) {
  console.log(name, name2);
}

if (name == "meer" || name2 == "sagr") {
  console.log(name, name2);
}

if (name != "sagor") {
  console.log(name, name2);
} else {
  console.log("code run here");
}

// ******************** Logical Assignment Operators

// &&=
let age = 20;
age &&= "asdfasd";
console.log(age);

// ||=
let title;

title ||= "title value is set";

console.log(title);

// ??=
const person = {
  name: "sagor",
};

person.name ??= "meer saogr";

console.log(person.name);

if (false) {
  console.log("");
} else {
  console.log("");
}

// ux
// ui

let job = "develop";

if (job == "ux") {
  console.log("");
} else if (job == "ui") {
  console.log("");
} else if (job == "develop") {
  console.log("");
} else {
  console.log("");
}

switch (job) {
  case "ux":
    console.log("");
    break;
  case "ui":
    console.log("");
    break;
  default:
    console.log("asdf");
    break;
}
