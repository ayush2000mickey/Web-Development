/*
 * Easy HTTP Library
 * Library for making HTTP Library
 *
 * @version 3.0.0
 * @auther Ayush kumar
 * @license MIT
 *
 */

class EasyHTTP {
  //make an HTTP GET Request
  async get(url) {
    try {
      const response = await fetch(url);

      const resData = await response.json();

      return resData;
    } catch (err) {
      return err.message;
    }
  }

  //make an HTTP POST Request
  async post(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = response.json();

      return resData;
    } catch (err) {
      return err.message;
    }
  }

  //make HTTP PUT Request / Update request
  async put(url, data) {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = response.json();

      return resData;
    } catch (err) {
      return err.message;
    }
  }

  //make HTTP DELETE Request
  async delete(url) {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      const resData = await "Resource Deleted...!!!!";
      return resData;
    } catch (err) {
      return err.message;
    }
  }
}
