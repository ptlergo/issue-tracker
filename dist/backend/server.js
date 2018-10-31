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

var _issue = require("./models/issue");

var _issue2 = _interopRequireDefault(_issue);

var _vm = require("vm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = _express2.default.Router();

// middleware for express app to use
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());

// connect to db instance and the 'issues' collection
_mongoose2.default.connect("mongodb://localhost:27017/issues");

var connection = _mongoose2.default.connection;
// listen to open of db
connection.once('open', function () {
    console.log("mongodb database conenction established successfully");
});

router.route('/api/v1/issues').get(function (req, res) {
    _issue2.default.find(function (err, issues) {
        if (err) console.log(err);else res.json(issues);
    });
});

router.route('/api/v1/issues/:id').get(function (req, res) {
    _issue2.default.findById(req.params.id, function (err, issue) {
        if (err) console.log(err);else res.json(issue);
    });
});

router.route("/api/v1/issues/add").post(function (req, res) {
    var issue = new _issue2.default(req.body);
    // save to db
    issue.save().then(function (issue) {
        res.status(200).json({ 'issue': 'added successfully' });
    }).catch(function (err) {
        res.status(400).send('Failed to create new record');
    });
});

router.route('/api/v1/issues/update/:id').post(function (req, res) {
    _issue2.default.findById(req.params.id, function (err, issue) {
        if (!issue) return (0, _vm.runInNewContext)(new Error('Could not load document'));else issue.title = req.body.title;
        issue.responsible = req.body.responsible;
        issue.description = req.body.description;
        issue.severity = req.body.severity;
        issue.status = req.body.status;

        issue.save().then(function (issue) {
            res.json('Update done');
        }).catch(function (err) {
            res.status(400).send('Update failed');
        });
    });
});

router.route('/api/v1/issues/delete/:id').get(function (req, res) {
    _issue2.default.findByIdAndRemove({ _id: req.params.id }, function (err, issue) {
        if (err) res.json(err);else res.json('Remove successfully');
    });
});

app.use("/", router);

app.get('/', function (req, res) {
    return res.send("Hello");
});
app.listen(4000, function () {
    return console.log('server running on port 4000');
});