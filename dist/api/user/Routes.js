"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Controllers_1 = require("./Controllers");
/** Setup  */
var user = (0, express_1.Router)();
user.post('/api/v1/register', Controllers_1.registerHandler);
user.post('/api/v1/login');
exports.default = user;
