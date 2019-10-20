/*
============================================
; Title:  summary.js
; Author: Professor Krasso
; Date:   20 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let resultsSchema = new Schema({
  employeeId: String,
  quizId: String,
  quizName: String,
  dateTaken: String,
  score: String
}, {collection: 'summaries'});

module.exports = mongoose.model('Summary', resultsSchema);

