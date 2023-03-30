// 1. Use Strict
// added in ES 5
// use this for Vanila Javascript
"use strict";

// 2. Variable , rw(read/write)
// let (added in ES6)
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// : 값을 어디에 선언했냐와 상관없이 항상 위로 올려주는 것
// has no block scope {} 괄호 무시
console.log(age);
age = 4;
console.log(age);
var age;

// 3. Constant , r(read only)
// use const whenever possible.
// only use let if variable nees to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// -> data type을 절대 변경하지 못 함.
// Mutable data types: all objects by default are mutable in JS
// -> object는 변경 가능.
// favor immutable date type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + " type: " + typeof helloBob);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const symbol3 = Symbol.for("id");
const symbol4 = Symbol.for("id");
console.log(symbol3 === symbol4); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, date structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. Dynamic typig : dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));  // error
