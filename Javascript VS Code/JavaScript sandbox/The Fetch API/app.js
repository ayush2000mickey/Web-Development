document.getElementById("button-1").addEventListener("click", getText);
document.getElementById("button-2").addEventListener("click", getJson);
document.getElementById("button-3").addEventListener("click", getExternalAPI);

//Get local text data
function getText() {
  fetch("test.txt")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

//Get local json data
function getJson() {
  fetch("posts.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

//Get External API
function getExternalAPI() {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
