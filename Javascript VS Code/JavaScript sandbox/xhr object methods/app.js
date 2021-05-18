document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open("GET", "./data.txt", true);

  //optional - used for spinners/loaders
  xhr.onprogress = function () {
    console.log("ready state : ", this.readyState);
  };

  xhr.onload = function () {
    console.log("ready state : ", this.readyState);
    if (this.status === 200) {
      //console.log(this.responseText);
      document.getElementById(
        "output",
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  xhr.onerror = function () {
    console.log("Request Error.....!!!!");
  };

  xhr.send();

  //readtyState values
  //0: request not initialized
  //1: server connection established
  //2: request recieved
  //3: processing request
  //4: request finished and reponse is ready

  //HTTP Statuses
  //200 : "OK"
  //403 : "Forbidden"
  //404 : "Not Found"
}
