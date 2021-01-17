const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const serveStatic = require("serve-static");
const path = require('path');
const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const httpServer = http.createServer(app)
const port = process.env.PORT || 80;
app.listen(port);


const wss = new WebSocket.Server({
    'server': httpServer
})
httpServer.listen(port)