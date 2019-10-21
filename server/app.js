/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   22 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const Quiz = require('./models/quiz');
const Results = require('./models/quiz-results');
const Summary = require('./models/summary');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

// Global variables
const serverPort = process.env.PORT || 3000;

/************************* Mongoose connection strings go below this line  ***************/
const connString = 'mongodb+srv://admin:hasbyw-mudta2-sakZab@nodequiz-j6vwb.mongodb.net/NodeQuiz?retryWrites=true&w=majority'

mongoose.connect(connString, {promiseLibrary: require('bluebird'), useNewUrlParser: true})
  .then(() => console.debug('Connection to the MongoDB was successful.'))
  .catch((err) => console.debug('MongoDB Error: ' + err.message));

/************************* API routes go below this line ********************/
//Get all employees
app.get('/api/employees', function(req, res, next) {
  Employee.find({}, function(err, employees) {
    if(err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  })
});

//Validate Employee
app.get('/api/employees/:id', function(req, res, next) {
  Employee.findOne({'employeeId': req.params.id}, function(err, employee) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employee);
      res.json(employee);
    }
  })
});

// Get Quiz by ID
app.get('/api/quiz/:id', function(req, res, next) {
  Quiz.findOne({'quizId': req.params.id}, function(err, quiz) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(quiz);
      res.json(quiz);
    }
  })
});

// Post quiz results
app.post('/api/results', function(req, res, next) {
  const result = {
    employeeId: req.body.employeeId,
    quizId: req.body.quizId,
    result: req.body.result
  };

  Results.create(result, function(err, results) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(results);
      res.json(results);
    }
  });
});

// Post Summary Results
app.post('/api/summary', function(req, res, next) {
  const summary = {
    employeeId: req.body.employeeId,
    quizId: req.body.quizId,
    quizName: req.body.quizName,
    dateTaken: req.body.dateTaken,
    score: req.body.score
  };

  Summary.create(summary, function(err, summaries) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(summaries);
      res.json(summaries);
    }
  });
});

// Get summaries
app.get('/api/summary/', function(req, res, next) {
  Summary.find({}, function(err, summaries) {
    if(err) {
      console.log(err);
      return next(err);
    } else {
      console.log(summaries);
      res.json(summaries);
    }
  })
});
/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});
