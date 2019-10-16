(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cumulative-summary/cumulative-summary.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cumulative-summary/cumulative-summary.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>cumulative-summary works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Select a Quiz</h1>\n</div>\n\n<div fxLayout>\n  <div *ngFor=\"let quiz of quizzes\">\n    <mat-card fxFlex=\"30%\">\n      <mat-card-header>\n        <mat-card-title>{{quiz.name}}</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"../../../assets/images/{{quiz.image}}\" alt=\"Laptop and HTML & CSS book\">\n      <mat-card-actions>\n        <button mat-flat-button color=\"accent\" routerLink=\"presentation/{{quiz.id}}\">View Presentation</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <mat-card fxFlex>\n      <mat-card-header>\n        <mat-card-title>Employee Login</mat-card-title>\n        <mat-card-subtitle>Please enter your employee ID to enter NodeQuiz.</mat-card-subtitle>\n      </mat-card-header>\n\n\n      <mat-card-content>\n        <small *ngIf=\"form.controls['employeeId'].hasError('required') && form.controls['employeeId'].touched\" class=\"form-error\">Employee ID is required!</small>\n        <small *ngIf=\"form.controls['employeeId'].hasError('pattern') && form.controls['employeeId'].touched\" class=\"form-error\">Employee ID must be an integer value!</small>\n        <small *ngIf=\"errorMessage\">{{errorMessage}}</small>\n\n        <br />\n\n        <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n          <mat-form-field>\n            <input type=\"text\" matInput [formControl]=\"form.controls['employeeId']\" placeholder=\"Enter your employee ID\">\n          </mat-form-field>\n          <mat-card-actions>\n            <button type=\"submit\">Login</button>\n          </mat-card-actions>\n        </form>\n\n      </mat-card-content>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>not-found works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/presentation/presentation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/presentation/presentation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-card class=\"mat-elevation-z8\">\n      <mat-card-header>\n        <mat-card-title>\n          {{quizName}}\n        </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <p-carousel [value]=\"slideImages\" numVisible=\"1\">\n          <ng-template let-item pTemplate=\"item\">\n            <div>\n                <img src=\"../../../assets/slides/{{presentation}}{{item.image}}\">\n            </div>\n          </ng-template>\n        </p-carousel>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-flat-button color=\"accent\" routerLink=\"dashboard/quiz/{{presentationId}}\">Take Quiz</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-result-dialog/quiz-result-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz-result-dialog/quiz-result-dialog.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>quiz-result-dialog works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz/quiz.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content *ngIf=\"quiz.question\">\n\n    <form #quizForm=\"ngForm\" (ngSubmit)=\"onSubmit(quizForm.value); quizForm.reset();\">\n      <div *ngFor=\"let question of quiz.question\">\n        <div>\n          <mat-card class=\"mat-elevation-z8\">\n            <mat-card-content>\n              <div fxLayout=\"column\">\n                <mat-list>\n                  <div fxLayout=\"row\">\n                    <h3>Question {{question.content}}</h3>\n                  </div>\n                </mat-list>\n                <br />\n\n                <div fxLayout=\"row\" ngModelGroup=\"quiz\">\n                  <label for=\"Answers:\">Select One</label>\n                  <div fxLayout=\"column\">\n                    <div *ngFor=\"let answer of question.answer\">\n                      <input [(ngModel)]=\"question[question.id]\" [checked]=\"question[question.id]\" value=\"{{answer.id}};{{answer.correct}}\" name=\"question{{question.id}}\" type=\"radio\">\n                      {{answer.content}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </div>\n      <mat-card-actions>\n        <button type=\"submit\" fxFlex mat-raised-button>Submit</button>\n      </mat-card-actions>\n    </form>\n  </mat-card-content>\n\n</mat-card>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/auth-layout/auth-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <header>\n\n  </header>\n\n  <main>\n      <mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\n          <mat-toolbar-row>\n            <button mat-button class=\"toolbar__icon-button mat-button\">\n              <a routerLink=\"/dashboard\" class=\"nav-link\"><mat-icon>home</mat-icon> Dashboard</a>\n            </button>\n\n            <button mat-button class=\"toolbar__icon-button mat-button\">\n              <a routerLink=\"/cumulative-summary\" class=\"nav-link\"><mat-icon>assessment</mat-icon> Cumulative Summary</a>\n            </button>\n\n            <div fxFlex></div>\n\n            <button mat-button class=\"toolbar__icon-button mat-button\">\n              <a routerLink=\"/session/login\" class=\"nav-link\"><mat-icon>person</mat-icon> Logout</a>\n            </button>\n          </mat-toolbar-row>\n        </mat-toolbar>\n    <router-outlet></router-outlet>\n  </main>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/base-layout/base-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- Page header -->\n  <header></header>\n\n  <!-- Main page content -->\n  <main>\n    <h1>Welcome to NodeQuiz</h1>\n    <router-outlet></router-outlet>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");

/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   22 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/




var AppComponent = /** @class */ (function () {
    function AppComponent(cookieService, router, authGuard) {
        this.cookieService = cookieService;
        this.router = router;
        this.authGuard = authGuard;
        this.title = 'Node Quiz';
        var test = this.cookieService.get("isAuthenticated");
        console.log(test);
        if (!test) {
            router.navigate(['/session/login']);
        }
    }
    AppComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/cumulative-summary/cumulative-summary.component */ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "./src/app/pages/quiz/quiz.component.ts");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/presentation/presentation.component */ "./src/app/pages/presentation/presentation.component.ts");
/* harmony import */ var _pages_quiz_result_dialog_quiz_result_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/quiz-result-dialog/quiz-result-dialog.component */ "./src/app/pages/quiz-result-dialog/quiz-result-dialog.component.ts");

/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   22 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_8__["BaseLayoutComponent"],
                _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__["AuthLayoutComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
                _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_14__["CumulativeSummaryComponent"],
                _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_20__["QuizComponent"],
                _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_22__["PresentationComponent"],
                _pages_quiz_result_dialog_quiz_result_dialog_component__WEBPACK_IMPORTED_MODULE_23__["QuizResultDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"], { useHash: true, enableTracing: false }),
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_21__["CarouselModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"]
            ],
            providers: [{
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__["HashLocationStrategy"]
                },
                _shared_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/cumulative-summary/cumulative-summary.component */ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "./src/app/pages/quiz/quiz.component.ts");
/* harmony import */ var _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/presentation/presentation.component */ "./src/app/pages/presentation/presentation.component.ts");

/*
============================================
; Title:  app.routing.ts
; Author: Professor Krasso
; Date:   22 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/











var AppRoutes = [
    {
        path: 'dashboard',
        component: _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            },
            {
                path: 'cumulative-summary',
                component: _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_3__["CumulativeSummaryComponent"],
                canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            },
            {
                path: 'presentation/:id',
                component: _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_11__["PresentationComponent"],
                canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            },
            {
                path: 'quiz/:id',
                component: _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_10__["QuizComponent"],
                canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            }
        ]
    },
    {
        path: 'session',
        component: _shared__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"],
        children: [
            {
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            },
            {
                path: 'not-found',
                component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/session/not-found'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(AppRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/cumulative-summary/cumulative-summary.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/cumulative-summary/cumulative-summary.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1bXVsYXRpdmUtc3VtbWFyeS9jdW11bGF0aXZlLXN1bW1hcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cumulative-summary/cumulative-summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: CumulativeSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CumulativeSummaryComponent", function() { return CumulativeSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
============================================
; Title:  cumulative-summary.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/

var CumulativeSummaryComponent = /** @class */ (function () {
    function CumulativeSummaryComponent() {
    }
    CumulativeSummaryComponent.prototype.ngOnInit = function () {
    };
    CumulativeSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cumulative-summary',
            template: __webpack_require__(/*! raw-loader!./cumulative-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cumulative-summary/cumulative-summary.component.html"),
            styles: [__webpack_require__(/*! ./cumulative-summary.component.css */ "./src/app/pages/cumulative-summary/cumulative-summary.component.css")]
        })
    ], CumulativeSummaryComponent);
    return CumulativeSummaryComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
============================================
; Title:  dashboard.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.quizzes = [
            { "id": "101", "name": "HTML Basics", "image": "html-image.jpg" },
            { "id": "102", "name": "CSS Basics", "image": "css-image.jpg" },
            { "id": "103", "name": "JavaScript Basics", "image": "javascript-image.jpg" }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

/*
============================================
; Title:  login.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, cookieService, http) {
        this.fb = fb;
        this.router = router;
        this.cookieService = cookieService;
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            employeeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')])]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var employeeId = this.form.controls['employeeId'].value;
        this.http.get('/api/employees/' + employeeId).subscribe(function (res) {
            if (res) {
                _this.cookieService.set('isAuthenticated', 'true', 1);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.errorMessage = "The employee ID you entered was invalid!";
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
============================================
; Title:  not-found.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.ts ***!
  \**************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
============================================
; Title:  presentation.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/


var PresentationComponent = /** @class */ (function () {
    function PresentationComponent(route) {
        this.route = route;
        this.slideImages = [
            { "image": "Slide1.jpeg" },
            { "image": "Slide2.jpeg" },
            { "image": "Slide3.jpeg" },
            { "image": "Slide4.jpeg" },
            { "image": "Slide5.jpeg" },
            { "image": "Slide6.jpeg" },
            { "image": "Slide7.jpeg" },
            { "image": "Slide8.jpeg" },
            { "image": "Slide9.jpeg" },
            { "image": "Slide10.jpeg" },
            { "image": "Slide11.jpeg" },
            { "image": "Slide12.jpeg" },
            { "image": "Slide13.jpeg" },
            { "image": "Slide14.jpeg" }
        ];
        this.presentationId = parseInt(this.route.snapshot.paramMap.get('id'));
        if (this.presentationId === 101) {
            this.presentation = "html";
            this.quizName = "HTML Basics";
        }
        else if (this.presentationId === 102) {
            this.presentation = "css";
            this.quizName = "CSS Basics";
        }
        else {
            this.presentation = "javaScript";
            this.quizName = "JavaScript Basics";
        }
    }
    PresentationComponent.prototype.ngOnInit = function () {
    };
    PresentationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/presentation/presentation.component.html"),
            styles: [__webpack_require__(/*! ./presentation.component.css */ "./src/app/pages/presentation/presentation.component.css")]
        })
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz-result-dialog/quiz-result-dialog.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/quiz-result-dialog/quiz-result-dialog.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXotcmVzdWx0LWRpYWxvZy9xdWl6LXJlc3VsdC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/quiz-result-dialog/quiz-result-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/quiz-result-dialog/quiz-result-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: QuizResultDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultDialogComponent", function() { return QuizResultDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuizResultDialogComponent = /** @class */ (function () {
    function QuizResultDialogComponent() {
    }
    QuizResultDialogComponent.prototype.ngOnInit = function () {
    };
    QuizResultDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-result-dialog',
            template: __webpack_require__(/*! raw-loader!./quiz-result-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz-result-dialog/quiz-result-dialog.component.html"),
            styles: [__webpack_require__(/*! ./quiz-result-dialog.component.css */ "./src/app/pages/quiz-result-dialog/quiz-result-dialog.component.css")]
        })
    ], QuizResultDialogComponent);
    return QuizResultDialogComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"radio\"] {\n  vertical-align: top;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.ts ***!
  \**********************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _quiz_result_dialog_quiz_result_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quiz-result-dialog/quiz-result-dialog.component */ "./src/app/pages/quiz-result-dialog/quiz-result-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");

/*
============================================
; Title:  quiz.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/






//import * as moment from 'moment';
var QuizComponent = /** @class */ (function () {
    function QuizComponent(route, http, cookieService, location, dialog) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.cookieService = cookieService;
        this.location = location;
        this.dialog = dialog;
        this.question = [];
        this.quizSummary = [];
        this.quizId = parseInt(this.route.snapshot.paramMap.get('id'));
        this.employeeId = parseInt(this.cookieService.get('employeeId'), 10);
        this.http.get('/api/quiz/' + this.quizId).subscribe(function (res) {
            console.log(res);
            _this.quiz = res;
        });
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.prototype.onSubmit = function (form) {
        var e_1, _a, e_2, _b;
        // Variables for calculating score
        var totalPossiblePoints = 100;
        var questionCount = this.quiz.question.length;
        var pointsPerQuestion = totalPossiblePoints / questionCount;
        var quizScore = 0;
        // Variables for determining the users selection
        var correctRunningTotal = 0;
        var selectedAnswerIds = [];
        var selectedCorrectProp = [];
        // Form data
        this.quizResults = form;
        this.quizResults['employeeId'] = this.employeeId;
        this.quizResults['quizId'] = this.quizId;
        this.http.post('/api/quiz/' + this.quizId + '/quiz-results', {
            employeeId: this.employeeId,
            quizId: this.quizId,
            result: JSON.stringify(form)
        }).subscribe(function (res) {
        }, function (err) {
            console.log(err);
        }, function () {
        });
        // Loop over the quizResults properties
        for (var prop in this.quizResults) {
            if (this.quizResults.hasOwnProperty(prop)) {
                if (prop !== 'employeeId' && prop !== 'quizId') {
                    selectedAnswerIds.push(this.quizResults[prop].split(';')[0]);
                    selectedCorrectProp.push(this.quizResults[prop].split(';')[1]);
                }
            }
        }
        // determine the quiz score
        for (var x = 0; x < selectedCorrectProp.length; x++) {
            if (selectedCorrectProp[x] === 'true') {
                correctRunningTotal += 1;
            }
        }
        quizScore = correctRunningTotal = pointsPerQuestion;
        //Create the QuizSummary object for the dialog
        var correctAnswers = [];
        var selectedAnswers = [];
        try {
            // Loop over the quiz.questions to get the selected answer and correct answer for each question
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.quiz.question), _d = _c.next(); !_d.done; _d = _c.next()) {
                var question = _d.value;
                try {
                    for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](question.answer), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var answer = _f.value;
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
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
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
        this.http.post('/api/results', {}).subscribe(function (res) {
        });
        // Open the dialog and pass the summary details to over
        var dialogRef = this.dialog.open(_quiz_result_dialog_quiz_result_dialog_component__WEBPACK_IMPORTED_MODULE_5__["QuizResultDialogComponent"], {
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
    };
    QuizComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
        { type: Location },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/pages/quiz/quiz.component.css")]
        })
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth-layout/auth-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/auth-layout/auth-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.css */ "./src/app/shared/auth-layout/auth-layout.component.css")]
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuthenticated = this.cookieService.get('isAuthenticated');
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/session/login']);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYXNlLWxheW91dC9iYXNlLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaseLayoutComponent = /** @class */ (function () {
    function BaseLayoutComponent() {
    }
    BaseLayoutComponent.prototype.ngOnInit = function () {
    };
    BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-layout',
            template: __webpack_require__(/*! raw-loader!./base-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html"),
            styles: [__webpack_require__(/*! ./base-layout.component.css */ "./src/app/shared/base-layout/base-layout.component.css")]
        })
    ], BaseLayoutComponent);
    return BaseLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: BaseLayoutComponent, AuthLayoutComponent, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__["BaseLayoutComponent"]; });

/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"]; });

/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });






/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
============================================
; Title:  environment.ts
; Author: Professor Krasso
; Date:   22 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*
============================================
; Title:  main.ts
; Author: Professor Krasso
; Date:   22 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jordanhennessy/bu-webdev/hennessy-nodequiz/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map