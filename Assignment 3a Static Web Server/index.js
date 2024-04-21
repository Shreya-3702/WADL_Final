const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;
const server = http.createServer((req, res) => {
  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./public/index.html";
  } else {
    filePath = "./public" + req.url;
  }
fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404);
        res.end("File not found");
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      const extname = path.extname(filePath);
      let contentType = "text/html";
      if (extname === ".css") {
        contentType = "text/css";
      }

      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
