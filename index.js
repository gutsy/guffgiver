var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.insult;
handle["/insult"] = requestHandlers.insult;

server.start(router.route, handle);