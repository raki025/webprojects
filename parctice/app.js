const fs = require("fs");

fs.readFile("./word.txt", "utf8", (err,data) => {
  if (err) throw err;
  console.log(data);
  
});


// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 5500;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.
//   res.end("index.html");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
