/*
============================================
; Title:  quiz-result-dialog.component.ts
; Author: Professor Krasso
; Date:   20 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/

import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
  selector: 'app-quiz-result-dialog',
  templateUrl: './quiz-result-dialog.component.html',
  styleUrls: ['./quiz-result-dialog.component.css']
})
export class QuizResultDialogComponent implements OnInit {

  quizSummary: any;
  correctAnswers: any;
  selectedAnswers: any;
  employeeId: any;

  constructor(private dialogRef: MatDialogRef<QuizResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private cookieService: CookieService) {

    this.quizSummary = data.quizSummary;
    console.log(this.quizSummary);
    this.correctAnswers = this.quizSummary.correctAnswers;
    this.selectedAnswers = this.quizSummary.selectedAnswers;
    this.employeeId = this.cookieService.get('employeeId');
  }

  @Input() public quizResults;

  ngOnInit() {
  }

}
