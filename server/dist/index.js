"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const template_1 = require("./routes/template");
// Server setup
const server = express();
const port = 3000;
server.use(bodyParser.json());
server.use('/', template_1.default);
process.on('SIGINT', function () {
    console.log('Server received shutdown signal, exiting process');
    process.exit(0);
});
server.listen(port, () => console.log(`Server listening on port ${port}`));
