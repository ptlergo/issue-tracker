import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import routes from "./routes/index";

const app = express();
const PORT = process.env.PORT || 4000;
const CONNECTION_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/issues";
const FRONTEND_PATH = path.join(__dirname, '../frontend/');
// middleware for express app to use
app.use(cors());
app.use(bodyParser.json());
// endpoints location
app.use('/',routes);
// mount the path to base directory
app.use('/', express.static(FRONTEND_PATH));

// mongodb://<dbuser>:<dbpassword>@ds147073.mlab.com:47073/heroku_7qdrf3jt
// connect to db instance and the 'issues' collection
mongoose.connect(CONNECTION_URI);

const connection = mongoose.connection;
// listen to open of db
connection.once('open', () => {
    console.log("mongodb database conenction established successfully");
});

// app.get('*',(req, res) => {
//     // res.render(path.join(__dirname, `${FRONTEND_PATH}/index.html`));
//     res.send(200, req.body);
//   });
  
// app.get('/list', (req, res) => res.send(`welcome to the issue tracker app by Patrick Tunga-Lergo. Listening on Port : ${PORT}`));
app.listen(PORT, () => console.log(`server running on port ${PORT}`));