"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Imports
 */
require("reflect-metadata");
/** Native **/
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
/** Routes **/
var Routes_1 = __importDefault(require("./api/user/Routes"));
var body_parser_1 = __importDefault(require("body-parser"));
/** Settings **/
var CorsOptions = {
    origin: "http://localhost:".concat(process.env.PORT) || "http://localhost:3333"
};
var routes = {
    routes: { user: Routes_1.default }
};
var main = /** @class */ (function () {
    function main(PORT) {
        this.Express = (0, express_1.default)();
        this.PORT = PORT || "";
    }
    /**
     * config
     */
    main.prototype.config = function () {
        this.Express.use(body_parser_1.default.urlencoded({ extended: false }));
        this.Express.use(body_parser_1.default.json());
        this.Express.use((0, cors_1.default)(CorsOptions));
    };
    /**
     * bootstrap
     */
    main.prototype.bootstrap = function (_a) {
        var _this = this;
        var routes = _a.routes;
        /** Decouple the routes so that it doesn't snowball if one of them goes down **/
        this.config();
        this.Express.use(routes.user);
        this.Express.listen(this.PORT, function () {
            console.log("Worked");
            console.log("Server listening on " + _this.PORT);
        });
    };
    return main;
}());
var PORT = process.env.PORT || "3333";
var initial = new main(PORT);
initial.bootstrap(routes);
