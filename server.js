const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    fs.readFile("./pages/mainpage.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);

        res.end();
      }
    });
  } else {
    fs.readFile("./pages/elsePage.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  }
  /*  res.write("Hello World!");
    res.end(); */
});

server.listen(3000, "localhost", () => {
  console.log("Listening");
});
