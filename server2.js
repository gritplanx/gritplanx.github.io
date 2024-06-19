const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/problemsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const problemSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const Problem = mongoose.model('Problem', problemSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/add-problem', (req, res) => {
    const newProblem = new Problem({
        title: req.body.title,
        description: req.body.description,
    });
    
    newProblem.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Problem added successfully!');
        }
    });
});

app.get('/get-problems', (req, res) => {
    Problem.find({}, (err, problems) => {
        if (err) {
            res.send(err);
        } else {
            res.json(problems);
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
