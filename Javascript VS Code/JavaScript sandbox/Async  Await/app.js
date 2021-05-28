// async function myfunc() {
//   // return "Hello";

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 2000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; // wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something Went Wrong...."));
//   }
// }

// myfunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//using fetch
async function getusers() {
  //await reponse of the fetch call
  console.log(2);
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  //only proceed once its resolved
  console.log(3);
  const data = await response.json();
  console.log(7);
  //only proceed once second promise is resolved
  console.log(4);
  return data;
}
console.log(1);
getusers()
  .then((users) => console.log(users))
  .catch((err) => console.log(err.name));
console.log(5);
console.log(6);
