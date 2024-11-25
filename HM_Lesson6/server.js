/*
Створіть простий HTTP-сервер за допомогою Node.js,
 який слухатиме запити на порт 5000.
*/
const http = require("http");

http
  .createServer(function (request, response) {
    if (request.url === "") {
      //home page
      response.writeHead(200, { "content-type": "text/html" });
      response.end("<h1>Welcome to the Homepage!</h1>");
    } else if (request.url === "/about") {
      //about page
      response.writeHead(200, { "content-type": "text/html" });
      response.end("<h1>This is a simple http Node.js server</h1>");
      //contact page
    } else if (request.url === "/contact") {
      response.writeHead(200, { "content-type": "text/html" });
      response.end("<h1>Contact us at contact@newserver.com</h1>");
    } else {
      // Handle 404 - Not Found
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Page Not Found</h1>");
    }
  })
  .listen(8000);

console.log("Server is running..");
