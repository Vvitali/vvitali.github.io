"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _htmlRoutes = require("./controllers/htmlRoutes");

var _htmlRoutes2 = _interopRequireDefault(_htmlRoutes);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _blog = require("./model/blog");

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEBUG = true;

console.log("Server-file load: ok!");
var app = (0, _express2.default)();
var PORT = 8080;
app.all("*", _htmlRoutes2.default);
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.listen(PORT, function () {
	console.log("Server started at port: " + PORT);
});