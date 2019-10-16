/*
============================================
; Title:  quiz.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { QuizResultDialogComponent } from '../quiz-result-dialog/quiz-result-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
//import * as moment from 'moment';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId: number;
  employeeId: number;
  quiz: any;
  quizResults: any;
  question: any = [];
  quizSummary: any = [];

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private cookieService: CookieService,
              private location: Location,
              private dialog: MatDialog) {
    this.quizId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = parseInt(this.cookieService.get('employeeId'), 10);


    this.http.get('/api/quiz/' + this.quizId).subscribe(res => {
      console.log(res);
      this.quiz = res;

    })
  }

  ngOnInit() {
  }

  onSubmit(form) {
    // Variables for calculating score
    const totalPossiblePoints = 100;
    const questionCount = this.quiz.question.length;
    let pointsPerQuestion = totalPossiblePoints / questionCount;
    let quizScore = 0;

    // Variables for determining the users selection
    let correctRunningTotal = 0;
    let selectedAnswerIds = [];
    let selectedCorrectProp = [];

    // Form data
    this.quizResults = form;
    this.quizResults['employeeId'] = this.employeeId;
    this.quizResults['quizId'] = this.quizId;

    this.http.post('/api/quiz/' + this.quizId + '/quiz-results', {
      employeeId: this.employeeId,
      quizId: this.quizId,
      result: JSON.stringify(form)
    }).subscribe(res =>{

    }, err => {
      console.log(err);
    }, () => {

    });

    // Loop over the quizResults properties
    for (const prop in this.quizResults) {
      if (this.quizResults.hasOwnProperty(prop)) {
        if(prop !== 'employeeId' && prop !== 'quizId') {
          selectedAnswerIds.push(this.quizResults[prop].split(';')[0]);
          selectedCorrectProp.push(this.quizResults[prop].split(';')[1]);
        }
      }
    }

    // determine the quiz score
    for (let x = 0; x < selectedCorrectProp.length; x++) {
      if (selectedCorrectProp[x] === 'true') {
        correctRunningTotal += 1;
      }
    }
    quizScore = correctRunningTotal = pointsPerQuestion;

    //Create the QuizSummary object for the dialog
    let correctAnswers = [];
    let selectedAnswers = [];

    // Loop over the quiz.questions to get the selected answer and correct answer for each question
    for (let question of this.quiz.question) {
      for (let answer of question.answer) {
        if (answer.correct) {
          correctAnswers.push({
            questionId: question._id,
            questionContent: question.content,
            answerId: answer._id,
            answerContent: answer.content
          });
        }
        if (selectedAnswerIds.includes(answer._id)) {
          console.log('Includes statement');
          console.log('Answer: ${answer.content}');
          selectedAnswers.push({
            questionId: question._id,
            questionContent: question.content,
            answerId: answer._id,
            answerContent: answer.content
          });
        }
      }
    }

    // Prepare the summary object for transport
    this.quizSummary['quizId'] = this.quizId;
    this.quizSummary['quizName'] = this.quiz.name;
    this.quizSummary['score'] = quizScore;
    this.quizSummary['correctAnswers'] = correctAnswers;
    this.quizSummary['selectedAnswers'] = selectedAnswers;
/*
    // Create the cumulative summary object and insert into the database
    this.cumulativeSummaryObject = {
      employeeId: this.employeeId,
      quizId: this.quizId,
      quizName: this.quiz.name,
      dateTaken: moment().format('MM/DD/YYYY'),
      score: (correctRunningTotal * pointsPerQuestion)
    };
*/
    this.http.post('/api/results', {}).subscribe(res => {

    });

    // Open the dialog and pass the summary details to over
    const dialogRef = this.dialog.open(QuizResultDialogComponent, {
      data: {
        quizSummary: this.quizSummary
      },
      disableClose: true,
      width: '800px'
    });

   /* dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.router.navigate(['/']);
      }
    });
*/
  }
}
