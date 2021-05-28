const posts = [
  { title: "Post 1", body: "This is Post One" },
  { title: "Post 2", body: "This is Post Two" },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = false; //when we set it to true we get an error
      // which will call reject("Something Went Wrong") which will go to catch

      if (!error) {
        resolve();
      } else {
        reject("Something Went Wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post 3", body: "This is Post Three" })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
