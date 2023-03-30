"use strict";
// Function
// - fundatmental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
// JavaScript에서 function은 object이다.
// 그래서 function을 변수에 할당할 수 있고,
// 파라미터로 전달도 되고, 함수를 return 할 수 도 있음
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default paraneters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");
showMessage("Hi!", "Me");

// 4. Rest parameters (added in ES6)
// ... : 배열 형태로 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // 간단한 방법 1
  for (const arg of args) {
    console.log("1:" + arg);
  }

  // 간단한 방법 2
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "hyein");

// 5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "Hello";
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
}
printMessage();

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}
// 위와 같이 user.point가 10이하인 경우 빨리 return 해주는 것이 좋음

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// hoist : 선언되기 전에 함수를 불러 올 수 있음. 맨 위로 올려줌.
// a function expression is created when the execution reaches it.
const print = function () {
  // 함수를 선언함과 동시에 변수에 바로 할당
  // anonymous function : 함수의 이름이 없는 것
  console.log("print");
};

const print2 = function print2() {
  // named function : 함수의 이름이 있는 것
  console.log("print");
};

print();
const printAgain = print;
printAgain();

// 2. Callback function using function expression
// 파라미터로 함수를 전달해서 상황이 맞을때 함수를 부르는 것.
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes(); // Callback function
  } else {
    printNo(); // Callback function
  }
}

// anonymous function : function의 이름이 없는
const printYes = function () {
  console.log("yes!");
};

// named function : function의 이름이 있는
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
  //   print(); // recursions
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
simplePrint();

// IIFE : Immediately Invoked Function Expression
// 함수 선언과 동시에 바로 실행하고 싶을 때
(function hello() {
  console.log("IIFE");
})();
