"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHandler = void 0;
var Schemas_1 = require("./Utils/Schemas");
var registerHandler = function (Request, Response, Next) {
    try {
        var _a = Schemas_1.userSchema.parse(Request.body), fullName = _a.fullName, password = _a.password, email = _a.email;
        //This Regex, if you don't know Regex, removes spaces inside any incoming string
        var filterData = {
            fullName: fullName.replace(/\s+/g, ''),
            password: password.replace(/\s+/g, ''),
            email: email.replace(/\s+/g, '')
        };
        Next();
        return Response.json({ data: { filterData: filterData } });
    }
    catch (error) {
        return Response.json(error);
    }
};
exports.registerHandler = registerHandler;
