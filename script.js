'use strict';

// console.log('Hello, world!');
// console.log(52 * 13);

// console.warn("I'm a warning");

// console.error('Something is seriously wrong!');

// let myLet, myVariable;
// console.log(myLet);

// myLet = 12;
// console.log(myLet);
// myLet = "now it's a string";
// console.log(myLet);

// const age = 19;

// if (age >= 18) {
//   console.log("Can have a driver's license");
// } else {
//   console.log('Cannot drive');
// }

let value = '25';
// value = 'Subaru';

const result = value === 25 ? "It's 25" : 'something other than 25';

// console.log(result);

// const weekday = 'Wednesday';

// switch (weekday) {
//   case 'Monday':
//     console.log('Oh no, weekend is over!');
//     break;
//   case 'Tuesday':
//   case 'Wednesday':
//   case 'Thursday':
//     console.log('Happy coding!');
//     break;
//   case 'Friday':
//     console.log('Weekend ahead!');
//     break;
//   default:
//     console.log("That's not a day of the week!");
// }

// for (let i = 0; i < 10; i++) {
// console.log(`Loop running for ${i + 1} times`);
// }

// let counter = 10;

// while (counter < 20) {
//   console.log(`Loop running for ${counter} times`);

//   counter++;
// }

// console.log(wd046.pop());
// console.log(wd046);

// function changeArray(arr) {
//   arr.pop();
// }

// changeArray(wd046);
// console.log(wd046);

// console.log(wd046.slice(0, 2));
// // console.log(wd046[4]);
// console.log(wd046.join(', '));
// wd046.push('Lena');

// console.log(wd046);
// const lastName = wd046.pop();
// console.log(lastName);

// console.log(wd046);
// console.log(wd046.shift());
// console.log(wd046);
// console.log(wd046.unshift('Chistina'));
// console.log(wd046);

// const myFirstFunction = function (parameter) {
//   console.log(`my function is running with param: ${parameter}`);
// };

// myFirstFunction('a string');

// var aVarVariable = 42;

// let aLetVariable = 'original let';

// const aConst = 3.14;

// const scopeTest = function () {
//   var insideFuncVar = 'inside func var';
//   var aVarVariable = 57;
//   console.log(aVarVariable, aLetVariable);
// };

// scopeTest();
// // console.log(insideFuncVar);

// if (true) {
//   var insideBlock = 'inside block var';
//   let insideBlockLet = 'let initialized inside a block';
//   var aVarVariable = 'var changed inside block';
//   let aLetVariable = 'let changed in block';
// }

// console.log(insideBlock);
// console.log(aVarVariable);
// console.log(aLetVariable);
// console.log(insideBlockLet);

const wd046 = ['Bediz', 'Moustafa', 'Tania', 'Antonio', 'Subaru'];

// console.log('Outside the function ', pokemon);

const callPoke = function (param) {
  if (!param) return;

  console.log('My favorite pokemon is ', pokemon);
  if (true) {
    const anotherPoke = 'Blastoise';
    console.log('awesome poke: ', anotherPoke);
  }
};

// callPoke('skjdfbskg');

// const multiplicate = function (num1, num2) {
//   return num1 * num2;
//   console.log('anything');
// };

// const myArrowFunc = (num1, num2) => num1 * num2;

// const resultArrow = myArrowFunc(2, 2);
// const resultFn = multiplicate(2, 5);

// console.log(resultArrow);
// console.log(resultFn);

// console.log(`result of 3 * 6 is ${multiplicate(3, 6)}`);

var pokemon = 'Venusaur';

if (true) {
  var pokemon = 'Jigglipuff';

  console.log('My favorite pokemon is ', pokemon);
  if (true) {
    const anotherPoke = 'Blastoise';
    console.log('awesome poke: ', anotherPoke);
  }
}

// callPoke();

console.log(pokemon);
