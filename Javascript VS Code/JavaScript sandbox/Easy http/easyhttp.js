function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  // const self = this;
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback("Error:" + this.http.status);
    }
  };

  this.http.send();
};

//Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  // const self = this;
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  // const self = this;
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);

  // const self = this;
  this.http.onload = function () {
    if (this.http.status === 200) {
      callback(null, "Post Deleted");
    } else {
      callback("Error:" + this.http.status);
    }
  };

  this.http.send();
};
