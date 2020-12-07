(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"login-header ion-no-border\">\r\n  <ion-toolbar>\r\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content forceOverscroll=false>\r\n    <div class=\"outerDiv\">\r\n      <form [formGroup]=\"loginForm\">\r\n        \r\n        <ion-text>\r\n          <h1 class=\"cardTitle\">Login</h1>\r\n        </ion-text>\r\n        \r\n        <!-- <ion-card-header style=\"padding: 0px; background: none;\">\r\n        <ion-card-title class=\"cardTitle\">Login</ion-card-title>\r\n      </ion-card-header> -->\r\n      <!-- <ion-card-content class=\"overfloscroll card-Content\" > -->\r\n        \r\n        <div class=\"form\">\r\n          <div class=\"inputdiv\">\r\n            <ion-label class=\"emailLabel\">Email<ion-text color=\"danger\"> *</ion-text>\r\n            </ion-label>\r\n            <ion-item class=\"emailItem\" lines=\"none\">\r\n              <ion-input autofocus=\"true\" inputmode=\"email\" (ionInput)=\"onemialTextInput()\" placeholder=\"Email Address\" formControlName=\"Email\" autocomplete=\"on\"></ion-input>\r\n            </ion-item>\r\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'required') && email\">An email address is required</div>\r\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'email') && email\">Please enter a valid email address</div>\r\n          </div>\r\n          <div class=\"inputdiv\">\r\n            <ion-label class=\"emailLabel\">Password<ion-text color=\"danger\"> *</ion-text>\r\n            </ion-label>\r\n            <ion-item class=\"passwordItem\" lines=\"none\">\r\n              <ion-input class=\"passwordInput\" (keyup.enter)='onLoginClick()'  (ionInput)=\"onPwdTextInput()\" type=\"password\" inputmode=\"text\" enterkeyhint=\"Login\" placeholder=\"Password\" formControlName=\"Password\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Password', 'required') && pwd\">A password is required</div>\r\n          </div>\r\n          <!-- <div class=\"inputdiv\">\r\n            <ion-item class=\"rememberItem\" lines=\"none\">\r\n                <ion-checkbox mode=\"md\" [(ngModel)]=\"stayStignedIn\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\r\n                <ion-label class=\"checkboxLabel\">Stay signed in</ion-label>\r\n            </ion-item>\r\n          </div> -->\r\n          <div class=\"loginDiv\">\r\n            <ion-button class=\"loginBtn\" size=\"medium\" expand=\"block\" [disabled] =\"!loginForm.valid\" (click)=\"onLoginClick()\">\r\n              <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad ? 'Logging in...': 'Login'}}\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n        <div class=\"forgotPassDiv\">\r\n          <ion-button class=\"forgotPassBtn\" fill=\"clear\" expand=\"block\" (click)=\"onForgotPassClick()\">\r\n            Forgot Password?\r\n          </ion-button>\r\n        </div>\r\n        <div class=\"forgotPassDiv\">\r\n          <ion-button expand=\"block\" fill=\"clear\" class=\"forgotPassBtn\" (click)=\"onSignupClick()\">\r\n            Sign up\r\n          </ion-button>\r\n        </div>\r\n  </form>\r\n  </div>\r\n</ion-content>\r\n<div id=\"authLoader\" style=\"background: rgba(0,0,0,0.5);z-index: 99999; position: absolute; height: 100%; width: 100%; display: flex; justify-content: center; align-items: center;\">\r\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 30px;width: 30px !important;\">    \r\n</div>"

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function() { return AuthPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");








let AuthPageModule = class AuthPageModule {
};
AuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
    })
], AuthPageModule);



/***/ }),

/***/ "./src/app/auth/auth.page.scss":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width:0; }\n\nion-content {\n  --background: #274b9e; }\n\nion-content .outerDiv {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    height: 100%;\n    width: 100%; }\n\nion-content .outerDiv form {\n      width: 80%; }\n\n.signupBtnDiv {\n  padding: 5px 10px 10px 10px; }\n\n.signupBtn {\n  --color:#00aeef;\n  text-transform: inherit;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px; }\n\n.cardTitle {\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px;\n  font-family: Open Sans Bold; }\n\n.emailLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px; }\n\n.emailItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px; }\n\n.emailItem ion-input {\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-end: 5px;\n    --padding-start: 5px; }\n\n.passwordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px; }\n\n.passwordItem ion-input {\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-end: 5px;\n    --padding-start: 5px; }\n\n.no-validation-line .item-inner {\n  box-shadow: none !important; }\n\n.form {\n  padding-top: 0px; }\n\n.inputdiv {\n  padding: 10px; }\n\n.loginBtn {\n  --border-radius: 15px;\n  font-size: 22px;\n  height: 50px;\n  --background: #00b9ff;\n  --background-activated:  #00b9ff;\n  --background-focused:  #00b9ff;\n  --background-hover: #00b9ff;\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 15px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit; }\n\n.loginDiv {\n  padding: 15px 10px 15px 10px; }\n\n.forgotPassBtn {\n  color: #00aeef;\n  height: 16px;\n  font-family: Open Sans SemiBold;\n  font-size: 13px;\n  text-transform: inherit; }\n\n.forgotPassDiv {\n  padding: 0px 10px 10px 10px; }\n\n.rememberItem {\n  --padding-start: 0%;\n  --background: #2e4c99 ;\n  --background-activated: #2e4c99; }\n\n.checkboxLabel {\n  color: white;\n  padding-left: 10px;\n  font-size: 14px; }\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto; }\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none; }\n  .innercardmobile .card-Content {\n    width: 45% !important; } }\n\n.tab_background {\n  --background: url('Tool_BG.svg') !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXGF1dGhcXGF1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWUsRUFBQTs7QUFHbkI7RUFFSSxxQkFBYSxFQUFBOztBQUZqQjtJQUtRLG9CQUFhO0lBQWIsYUFBYTtJQUNqQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFUZjtNQVlRLFVBQVUsRUFBQTs7QUE4RGxCO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksZUFBUTtFQUNSLHVCQUF1QjtFQUN2Qix5QkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLHVCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFFSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFFSSw0QkFBYTtFQUNiLG1CQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFnQixFQUFBOztBQUxwQjtJQVFJLGdCQUFjO0lBQ2QsbUJBQWlCO0lBQ2pCLGtCQUFjO0lBQ2Qsb0JBQWdCLEVBQUE7O0FBSXBCO0VBRUksNEJBQWE7RUFDYixtQkFBYTtFQUNiLGVBQWU7RUFDZixvQkFBZ0IsRUFBQTs7QUFMcEI7SUFRUSxnQkFBYztJQUNkLG1CQUFpQjtJQUNqQixrQkFBYztJQUNkLG9CQUFnQixFQUFBOztBQVF4QjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxxQkFBZ0I7RUFBTyxlQUFlO0VBQUUsWUFBWTtFQUM1QyxxQkFBYTtFQUNiLGdDQUF1QjtFQUN2Qiw4QkFBcUI7RUFDckIsMkJBQW1CO0VBQzNCLGdCQUFTO0VBQ1QsdUJBQWdCO0VBQ2hCLDBCQUFtQjtFQUNuQix5QkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLHVCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxtQkFBZ0I7RUFDaEIsc0JBQWE7RUFDYiwrQkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFJbkI7RUFDQTtJQUNJLGNBQWMsRUFBQTtFQUVsQjtJQUNJLGFBQWEsRUFBQTtFQUdqQjtJQUVRLHFCQUFxQixFQUFBLEVBQ3hCOztBQUlMO0VBQ0ksMkNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOjA7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTsgIFxyXG4gICAgXHJcbiAgICAub3V0ZXJEaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGZvcm17XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIC5jYXJke1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4vLyB9XHJcblxyXG4vLyAub3V0ZXJjYXJke1xyXG4vLyAgICAgaGVpZ2h0OiA5MCU7XHJcbi8vICAgICB3aWR0aDogOTAlO1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2QzZDhkYztcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAub3V0ZXJjYXJkbW9iaWxle1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gLmlubmVyY2FyZHtcclxuLy8gICAgIGhlaWdodDogODUlO1xyXG4vLyAgICAgd2lkdGg6IDg1JTtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xyXG5cclxuLy8gICAgIC5jYXJkLUNvbnRlbnR7XHJcbi8vICAgICAgICAgd2lkdGg6IDQwJTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmlubmVyY2FyZG1vYmlsZXtcclxuLy8gICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuLy8gICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuLy8gICAgIC5jYXJkLUNvbnRlbnR7XHJcbi8vICAgICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4uc2lnbnVwQnRuRGl2e1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4uc2lnbnVwQnRue1xyXG4gICAgLS1jb2xvcjojMDBhZWVmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcblxyXG4uY2FyZFRpdGxlXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogIzAwYWVlZjsgXHJcbiAgICBmb250LXNpemU6IDMycHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcclxufVxyXG5cclxuLmVtYWlsTGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5lbWFpbEl0ZW1cclxue1xyXG4gICAgLS1taW4taGVpZ2h0OiAzN3B4IWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuXHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFzc3dvcmRJdGVtXHJcbntcclxuICAgIC0tbWluLWhlaWdodDogMzdweCFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcblxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG4ucGFzc3dvcmRJbnB1dHtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm8tdmFsaWRhdGlvbi1saW5lIC5pdGVtLWlubmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4uZm9ybXtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5pbnB1dGRpdntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbkJ0bntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDsgZm9udC1zaXplOiAyMnB4OyBoZWlnaHQ6IDUwcHg7IFxyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICAjMDBiOWZmO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogICMwMGI5ZmY7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzAwYjlmZjtcclxuICAgIC0tY29sb3JcdDogI2ZmZmZmZjtcclxuICAgIC0tcmlwcGxlLWNvbG9yIDogIzlhOWE5YTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkIDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5sb2dpbkRpdntcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5mb3Jnb3RQYXNzQnRue1xyXG4gICAgY29sb3I6ICMwMGFlZWY7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5mb3Jnb3RQYXNzRGl2e1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4ucmVtZW1iZXJJdGVte1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzJlNGM5OSA7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMmU0Yzk5O1xyXG59XHJcblxyXG4uY2hlY2tib3hMYWJlbHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcclxuLm92ZXJmbG9zY3JvbGx7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ub3ZlcmZsb3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIsICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXHJcbiAgICBkaXNwbGF5OiBub25lOyBcclxufVxyXG5cclxuLmlubmVyY2FyZG1vYmlsZXtcclxuICAgIC5jYXJkLUNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbn1cclxuXHJcbi50YWJfYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL1Rvb2xfQkcuc3ZnJykgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/auth.page.ts":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/user-agent/ngx */ "./node_modules/@ionic-native/user-agent/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");













let AuthPage = class AuthPage {
    // @ViewChild('EmailInput',{static: false}) EmailInt;
    constructor(appVersion, userAgent, device, platform, route, iab, http, toastController, authenticationService, storage) {
        this.appVersion = appVersion;
        this.userAgent = userAgent;
        this.device = device;
        this.platform = platform;
        this.route = route;
        this.iab = iab;
        this.http = http;
        this.toastController = toastController;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.showLoad = false;
        this.signupUrl = 'https://blog.newagealpha.com/h-factor';
        this.pwd = false;
        this.email = false;
        this.hasError = (controlName, errorName) => {
            return this.loginForm.controls[controlName].hasError(errorName);
        };
    }
    ngAfterViewInit() {
        document.getElementById('authLoader').style.display = 'none';
    }
    ngOnInit() {
        if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
        }
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    // ionViewDidEnter() {
    //   setTimeout(()=>{
    //     // document.getElementById('EmailInput').focus();
    //     this.EmailInt.setFocus();
    //   },2000);
    // }
    onemialTextInput() {
        this.email = true;
    }
    onPwdTextInput() {
        this.pwd = true;
    }
    onLoginClick() {
        // console.log('Login Clicked');
        this.showLoad = true;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        if (this.loginForm.valid) {
            let username = this.loginForm.controls['Email'].value;
            let password = this.loginForm.controls['Password'].value;
            let isRemember = 'Y';
            this.authenticationService.login(username, password, isRemember)
                .subscribe(data => {
                this.showLoad = false;
                if (data.isEmailVerified !== "" && data.isEmailVerified == "Y") {
                    this.loginForm.reset();
                }
                else {
                    this.presentToast("Please verify your email address sent to your inbox");
                }
            }, err => {
                this.showLoad = false;
            });
        }
    }
    onSignupClick() {
        //this.route.navigateByUrl('/signup');
        // this.iab.create(this.signupUrl,'_blank','location=no,toolbar=yes,zoom=no');
        document.getElementById('authLoader').style.display = "flex";
        var browser = this.iab.create(this.signupUrl, '_blank', "location=no,toolbar=yes,zoom=no,toolbarcolor=#2b468f");
        browser.hide();
        browser.on('loadstop').subscribe(() => {
            document.getElementById('authLoader').style.display = "none";
            browser.show();
            browser.insertCSS({ code: "#hs_cos_wrapper_module_156318587919491_{display: none !important;" });
        });
        browser.on('exit').subscribe(() => {
            browser.close();
        });
    }
    onForgotPassClick() {
        this.route.navigateByUrl('/forgot-password');
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 3000,
                cssClass: 'center'
            });
            toast.present();
        });
    }
};
AuthPage.ctorParameters = () => [
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__["AppVersion"] },
    { type: _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_10__["UserAgent"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth.page.html"),
        styles: [__webpack_require__(/*! ./auth.page.scss */ "./src/app/auth/auth.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__["AppVersion"], _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_10__["UserAgent"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], AuthPage);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map