import express from "express";
import Issue from '../models/issue';
const router = express.Router();

router.route('/api/v1/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
});

router.route('/api/v1/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else    
            res.json(issue);
    });
});

router.route("/api/v1/issues/add").post((req, res) => {
    let issue = new Issue(req.body);
    // save to db
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'added successfully'})
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
})

router.route('/api/v1/issues/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return runInNewContext(new Error('Could not load document'));
        else    
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            })
    });
});

router.route('/api/v1/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else    
            res.json('Remove successfully');
    })
})

module.exports = router;