function checkLogin(usernameValue, passwordValue) {
  const username = "admin";
  const password = "qwerty123456";

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usernameValue === username && passwordValue === password) {
        resolve(`Welcome, ${username}!`);
      } else {
        reject("Invalid username or password!");
      }
    }, 2000);
  });
}

checkLogin("admin", "qwerty123456")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
