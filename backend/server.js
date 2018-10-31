import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import Issue from './models/issue';
import { runInNewContext } from "vm";

const app = express();
const router = express.Router();

// middleware for express app to use
app.use(cors());
app.use(bodyParser.json());

// connect to db instance and the 'issues' collection
mongoose.connect("mongodb://localhost:27017/issues");

const connection = mongoose.connection;
// listen to open of db
connection.once('open', () => {
    console.log("mongodb database conenction established successfully");
});

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

app.use("/", router);

app.get('/', (req, res) => res.send("Hello"));
app.listen(4000, () => console.log('server running on port 4000'));