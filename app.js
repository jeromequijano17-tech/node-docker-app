// app.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello! Your Node.js app is running inside Docker.");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
