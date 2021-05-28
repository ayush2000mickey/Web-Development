const http = new EasyHTTP();

//get users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//create user data
const data = {
  name: "Ayush kumar",
  username: "akmickey",
  email: "akm@gmail.com",
};

//create user  Post Request
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Update request
// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Delete request
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
