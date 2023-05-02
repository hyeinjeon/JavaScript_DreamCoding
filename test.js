function execute() {
  return new Promise((resolve, reject) => reject());
}
let promise = execute();

promise
  .then(() => console.log("Resolved1"))
  .then(() => console.log("Resolved3"))
  .then(() => console.log("Resolved3"))
  .catch(() => console.log("Resolved4"))
  .then(() => console.log("Resolved5"));
