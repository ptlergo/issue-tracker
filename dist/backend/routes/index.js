'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _issue = require('../models/issue');

var _issue2 = _interopRequireDefault(_issue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

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
        if (!issue) return runInNewContext(new Error('Could not load document'));else issue.title = req.body.title;
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

module.exports = router;