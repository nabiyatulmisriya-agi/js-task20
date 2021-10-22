/*let method = fetch(url)
  .then(function () {
    console.log("ok");
  })
  .catch(function () {
    console.log("error");
  });
*/
/*let xyz = true;
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("resolved");
  }, 4000);
});
fetch("./readme.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));
async function asyncFunction() {
  let result = await promise;
  console.log(result);
  console.log("happy");
}
asyncFunction();
*/
//posts
async function asyncFunction() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  console.log(posts);
}
asyncFunction();

//comments
async function asyncFunc() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let comments = await response.json();
  console.log(comments);
}
asyncFunc();

//todos
async function asyncFunct() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let todos = await response.json();
  console.log(todos);
}
asyncFunct();
