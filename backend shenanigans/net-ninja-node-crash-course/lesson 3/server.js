const http = require("http");
const fs = require("fs"); // this is used to create a server.

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  //using the switch statement to figure out what url the user visited.
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
