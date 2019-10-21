/*
============================================
; Title:  auth-layout.component.ts
; Author: Professor Krasso
; Date:   20 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.cookieService.delete('isAuthenticated');
    this.cookieService.delete('employeeId');
    this.router.navigate(['/session/login']);
  }
}
