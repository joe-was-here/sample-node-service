"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const server = new express();
const port = 3000;
server.get('/', (req, res) => res.send('Hello world 2.0 with eco config that handles ts watch and server updates'));
process.on('SIGINT', function () {
    console.log('Server received shutdown signal, exiting process');
    process.exit(0);
});
server.listen(port, () => console.log(`Server listening on port ${port}`));
