const http = require("http"); // this is used to create a server.

const server = http.createServer((req, res) => {
  console.log("request made!");
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
