// async & await
// clear style of using promise :)
// 깔끔하게 Promise를 할 수 있는 방법

// 1. async
async function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs
// all() api : promise 배열을 전달하게 되면 모든 promise 들이 병렬적으로 다 받을때까지 모아주는 아이.

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
