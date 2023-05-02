"use strict";

//Objects
// One of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// 동적으로 type 이 runtime 때 결정되는 javascript
// 그래서
ellie.hasJob = true; // 이렇게 추가할 수 있음
console.log(ellie.hasJob);

delete ellie.hasJob; // 이렇게 삭제도 가능
console.log(ellie.hasJob);

// 2. Computed properties - 계산된
// key should be always string
console.log(ellie.name); // . 을 통해 접근 가능
console.log(ellie["name"]); // [] 배열을 통해 접근 가능 - Computed properties
ellie["hasJob"] = true;
console.log(ellie.hasJob);

// . : 코딩하는 그 순간 키의 값을 받아오고 싶을 때
// [] : 정확하게 어떤 키의 값이 필요한지 모를 때, 즉, runtime 에서 결정 될 때
//     : 실시간으로 원하는 키의 값을 받아오고 싶을 때

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");

// 3. Property value shorthand
const person1 = { name: "hyein", age: 21 };
const person2 = { name: "jeein", age: 22 };
const person4 = makePerson("sue", 23);
console.log(person4);

function makePerson(name, age) {
  return {
    name, // name: name, 과 같음
    age, // age: age, 와 같음
  };
}

// 4. Constructor function
const person5 = new Person("jeon", 30);
console.log(person5);

function Person(name, age) {
  // this = {}; 생략됨.
  this.name = name;
  this.age = age;
  // return this; 생략됨.
}

// 5. in operator : property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
// const ellie2 = { name: "ellie2", age: 22, job: "developer" };
// for (key in ellie2) {
//   console.log(key);
// }

// for (value of iterable)
// const array = [1, 2, 4, 5];
// for (value of array) {
//   console.log(value);
// }

// 7. Fun cloning
// Object.assign(des, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user; // user2 는 user 와 같은 reference를 가진다.
user2.name = "coder";
console.log(user);

// old way
// const user3 = {};
// for (key in user) {
//   user3[key] = user[key];
// }
// console.log(user3);

// 방법 1
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// 방법 2
const user45 = Object.assign({}, user);
console.log(user45);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const fruit3 = { color: "black" };
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color);
console.log(mixed.size);
