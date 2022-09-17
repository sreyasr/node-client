"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
axios_1.default
    .get('https://example.com/todos')
    .then(function (res) {
    console.log("statusCode: ".concat(res.status));
    console.log(res);
})
    .catch(function (error) {
    console.error(error);
});
