const http = require("http");

const server = http.createServer((request, response) => {
  const { url } = request;
  if (url === "/") {
    response.write("Home page");
  } else if (url === "/contacts") {
    response.write("<h2>Contacts page</h2>");
  } else {
    response.write("<h2>Not found</h2>");
  }
  response.end();
});

server.listen(3000, () => {
    console.log('Server started')
})