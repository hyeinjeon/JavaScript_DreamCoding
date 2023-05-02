"use strict";

const { reject } = require("async");

// Promise is a JavaScript Object for asynchronous operation.
// 비동기적인 것을 수행할 때 콜백 함수 대신에 유용하게 쓰임.

// state : pending -> fulfilled or rejected
// Producer vs Consumer - (Object)

// 1. Producer
// resolve : 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 콜백함수
// reject : 기능을 수행하다가 중간에 문제가 생기면 호출하는 콜백함수

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve('ellie'); // 성공했을 때
    reject(new Error("no network")); // 실패했을 때
  }, 2000);
});

// promise를 만드는 순간 우리가 전달한 executor 콜백함수가 바로 수행됨
// 사용자가 요구했을때만 수행해야하는 경우라면 사용자가 요구하지도 않았는데 수행될 수도 있음 - 유의점
// when new Promise is created, the executor runs automatically.

// 2. Consumers : then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 성공/실패 상관없이 마지막에 무조건 호출되는 finally
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
