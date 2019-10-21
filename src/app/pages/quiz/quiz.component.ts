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
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { QuizResultDialogComponent } from '../quiz-result-dialog/quiz-result-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Location } from '@angular/common';
import * as moment from 'moment';

/*export interface DialogData {
  quizSummary: any;
}*/

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId: string;
  employeeId: string;
  quiz: any;
  quizResults: any;
  qs: any = [];
  q: any = [];
  quizSummary: any = [];
  cumulativeSummaryObject: object;
  quizScore: any;
  quizName: any;
  form: FormGroup;



  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private cookieService: CookieService,
              private dialog: MatDialog,
              private location: Location,
              private router: Router,
              private fb: FormBuilder) {
    this.quizId = route.snapshot.paramMap.get('id');
    this.employeeId = this.cookieService.get('employeeId');


    this.http.get('/api/quiz/' + this.quizId).subscribe(res => {
      console.log(res);
      this.quiz = res;

    })
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
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
    let selectedCorrect = [];
    let selectedContent = [];




    // Form data
    this.quizResults = form.quiz;
    this.quizResults['employeeId'] = this.employeeId;
    this.quizResults['quizId'] = this.quizId;


    // Save results to database
    this.http.post('/api/results', {
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
          console.log(this.quizResults[prop]);

          selectedAnswerIds.push(this.quizResults[prop].split(';')[0]);
          selectedContent.push(this.quizResults[prop].split(';')[1]);
          selectedCorrect.push(this.quizResults[prop].split(';')[2]);
        }
      }
    }


    // determine the quiz score
    for (let x = 0; x < selectedCorrect.length; x++) {
      if (selectedCorrect[x] === 'true') {
        correctRunningTotal += 1;
      }
    }
    quizScore = correctRunningTotal * pointsPerQuestion;

    console.log(quizScore);

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

    console.log(this.quizSummary);

    // Create the cumulative summary object and insert into the database
    this.cumulativeSummaryObject = {
      employeeId: this.employeeId,
      quizId: this.quizId,
      quizName: this.quiz.name,
      dateTaken: moment().format('MM/DD/YYYY'),
      score: (correctRunningTotal * pointsPerQuestion)
    };

    this.http.post('/api/summary', {
      employeeId: this.cumulativeSummaryObject['employeeId'],
      quizId: this.cumulativeSummaryObject['quizId'],
      quizName: this.cumulativeSummaryObject['quizName'],
      dateTaken: this.cumulativeSummaryObject['dateTaken'],
      score: this.cumulativeSummaryObject['score']
    }).subscribe(res => {

    });

    // Open the dialog and pass the summary details to over
    const dialogRef = this.dialog.open(QuizResultDialogComponent, {
      data: {
        quizSummary: this.quizSummary
      },
      disableClose: true,
      width: '800px'
    });

   dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.router.navigate(['/dashboard']);
      }
    });

  }
}
