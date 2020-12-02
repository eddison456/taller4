const http = require("http");
const app = require("../app");
const config = require("../config/global");


const port = parseInt(process.env.port,10) || config.port;
app.set(config.port);

console.log("puerto",config.port);

const server = http.createServer(app);
server.listen(port);
server.setTimeout(config.timeout);