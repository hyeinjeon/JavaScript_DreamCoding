"use strict";

// Array

// 1. Declaraion
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// callback 함수를 불러온다.
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});

fruits.forEach((fruit, index) => console.log(fruit, index)); // Arrow function 활용

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("strawberry", "peach");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift("lemon", "mango");
console.log(fruits);

// remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice : remove an item by index position
fruits.push("choco", "tomato", "sugar");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "aaa", "bbb");
console.log(fruits);

// combine two arrays
const fruits2 = ["a", "b"];
fruits.concat(fruits2);
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits.indexOf("tomato"));
// includes
console.log(fruits.includes("banana"));
// lastIndexOf
fruits.push("aaa");
console.log(fruits.indexOf("aaa"));
console.log(fruits.lastIndexOf("aaa")); // 중복된 데이터 중 마지막에 있는 index
