// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log("string literals: 1 + 2 = ${1 + 2}");
console.log("ellie's book");

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter : ${counter}`);

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter : ${counter}`);

let value1 = true;
let value2 = false;

function check() {
  return true;
}
// || (or), finds the first truthy value
console.log(`of: ${value1 || value2 || check()}`);
// check()처럼 무거운 것 맨 뒤에 두기

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
// ellie1과 ellie2는 name은 같지만 reference가 다르다.
const ellie3 = ellie1;
// ellie1과 ellie3은 같은 reference를 가리키게 된다.
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// 특이하게도 null과 undefined는 같은 것으로 간주된다.
console.log(null == undefined); // true
console.log(null === undefined); // false

// 9. Ternary operator : ?
// if를 좀 더 간단하게 쓸 수 있음
// condition ? value1 : value2;
let name = "hyein";
console.log(name === "ellie" ? "yes" : "no");
// ?를 붙이면 앞에 조건이 true 일 경우 앞에 것을 실행,
// false 일 경우, 뒤에 것을 실행
