"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _htmlRoutes = require("./controllers/htmlRoutes");

var _htmlRoutes2 = _interopRequireDefault(_htmlRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEBUG = true;

console.log("Server-file load: ok!");
var app = (0, _express2.default)();
var PORT = 8080;
app.all("*", _htmlRoutes2.default);
app.get("/", function (req, res) {
	console.log("Request to //");
	res.send("YO!");
});
app.listen(PORT, function () {
	console.log("Server started at port: " + PORT);
});