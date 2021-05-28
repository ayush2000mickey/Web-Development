// const sayHello = function () {
//   console.log("Hello 1");
// };

// const sayHello = () => {
//   console.log("Hello 2");
// };

//One line function does not require braces
// const sayHello = () => console.log("Hello 3");

//One line returns
// const sayHello = () => "Hello 4";

//for object literal use round braces outside curly braces
// const sayHello = () => ({ msg: "Hello 5" });

//Single parameter does not need paranthesis
// const sayHello = (name) => console.log(`Hello(6) ${name}`);

//multiple params require paranthesis
// const sayHello = (firstname, lastname) =>
//   console.log(`Hello ${firstname} ${lastname}`);

// sayHello("Ayush", "Kumar");

const users = ["Ayush", "mittu", "akshu"];

// const namelength = users.map(function (name) {
//   return name.length;
// });

//shorter
// const namelength = users.map((name) => {
//   return name.length;
// });

//shortest
const namelength = users.map((name) => name.length);

console.log(namelength);
