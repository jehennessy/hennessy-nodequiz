/*
============================================
; Title:  cumulative-summary.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cumulative-summary',
  templateUrl: './cumulative-summary.component.html',
  styleUrls: ['./cumulative-summary.component.css']
})
export class CumulativeSummaryComponent implements OnInit {

  summaries: any;
  employeeId: any;
  quizName: any;
  dateTaken: any;
  score: any;



  constructor(private http: HttpClient) {

    this.http.get('/api/summary/').subscribe( res => {
      console.log(res);
      this.summaries = (res);

   })

  }

  ngOnInit() {
  }

}
