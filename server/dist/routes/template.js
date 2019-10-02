"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const templatController = require("../controllers/template");
router.get('/', templatController.sendHello);
exports.default = router;
