"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _index = require("./routes/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 4000;
var CONNECTION_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/issues";
var FRONTEND_PATH = '../frontend/dist/frontend';
// middleware for express app to use
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
// mount the path to base directory
app.use('/', _express2.default.static(_path2.default.join(__dirname, FRONTEND_PATH)));
// endpoints location
app.use('/', _index2.default);

// mongodb://<dbuser>:<dbpassword>@ds147073.mlab.com:47073/heroku_7qdrf3jt
// connect to db instance and the 'issues' collection
_mongoose2.default.connect(CONNECTION_URI);

var connection = _mongoose2.default.connection;
// listen to open of db
connection.once('open', function () {
  console.log("mongodb database conenction established successfully");
});

app.get('/', function (req, res) {
  return res.send("welcome to the issue tracker app by Patrick Tunga-Lergo. Listening on Port : " + PORT);
});
app.listen(PORT, function () {
  return console.log("server running on port " + PORT);
});