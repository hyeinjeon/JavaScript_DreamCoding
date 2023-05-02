"use strict";

// JavaScript is synchronous. 동기적.
// Execute the code block in order after hoisting.
// hoisting이 된 이후 부터 코드가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행됨.
// hoisting: var, function declaration이 자동적으로 제일 위로 올라가는 것.

// asynchronous : 비동기적. 언제 코드가 실행 될 지 모르는 것.
console.log("1");

// setTimeout() 이라는 webAPI
setTimeout(function () {
  console.log("2");
}, 1000); // 1초뒤

// 아래와 같은 화살표 함수로 표현 가능
setTimeout(() => console.log("2"), 1000);

console.log("3");

// result : 1, 3, 2

//=====================================================================================

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback
function printWithDelay(pritn, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // 2초뒤

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {}, 2000);
  }

  getRoles(user, onSuccess, onError) {}
}
