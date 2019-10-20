/*
============================================
; Title:  quiz-results.js
; Author: Professor Krasso
; Date:   15 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let resultsSchema = new Schema({
  quizId: String,
  employeeId: String,
  result: String
}, {collection: 'results'});

module.exports = mongoose.model('Results', resultsSchema);


