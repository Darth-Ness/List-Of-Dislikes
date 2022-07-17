var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  console.log(req.url)
  if(req.url == "/file") {
    fs.readFile("list.txt", function(err, data) {
       res.writeHead(200, {'Content-Type': 'text/html'})
       res.write(data);
       return res.end();
    });
  }
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
}).listen(8080)