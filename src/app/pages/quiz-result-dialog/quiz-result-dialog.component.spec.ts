/*
============================================
; Title:  quiz-result-dialog.component.spec.ts
; Author: Professor Krasso
; Date:   20 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultDialogComponent } from './quiz-result-dialog.component';

describe('QuizResultDialogComponent', () => {
  let component: QuizResultDialogComponent;
  let fixture: ComponentFixture<QuizResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
