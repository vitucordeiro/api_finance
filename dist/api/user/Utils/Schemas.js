"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
var zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    fullName: zod_1.z.string({
        required_error: "Full name is required",
    }),
    password: zod_1.z.string({
        required_error: "Password is required"
    }),
    email: zod_1.z.string({
        required_error: "Email is required"
    }).email("Not a valid email"),
});
