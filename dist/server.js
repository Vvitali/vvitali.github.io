"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEBUG = true;

console.log("Server-file load: ok!");
var app = (0, _express2.default)();
var PORT = 8080;
app.get("/", function (req, res) {
	console.log("Request to //");
	res.send("YO!");
});
app.listen(PORT, function () {
	console.log("Server started at port: " + PORT);
});