(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content forceOverscroll=false>\r\n    <div style=\"display: block;\">\r\n      <form [formGroup]=\"loginForm\">\r\n    <ion-card class=\"card\" [ngClass]=\"{'tab_background': !mobile}\">\r\n      <ion-card class=\"outercard\" [ngClass]=\"{'outercardmobile': mobile}\">\r\n        <ion-card class=\"innercard\" [ngClass]=\"{'innercardmobile': mobile}\">\r\n          \r\n        \r\n      \r\n      <ion-card-header style=\"padding: 0px; background: none;\">\r\n        <ion-card-title class=\"cardTitle\">Login</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"overfloscroll card-Content\" >\r\n        \r\n        <div class=\"form\">\r\n          <div class=\"inputdiv\">\r\n            <ion-label class=\"emailLabel\">Email<ion-text color=\"danger\"> *</ion-text>\r\n            </ion-label>\r\n            <ion-item class=\"emailItem\">\r\n              <ion-input autofocus=\"true\" inputmode=\"email\" (ionInput)=\"onemialTextInput()\" placeholder=\"Email Address\" formControlName=\"Email\" autocomplete=\"on\"></ion-input>\r\n            </ion-item>\r\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'required') && email\">Email is required</div>\r\n          </div>\r\n          <div class=\"inputdiv\">\r\n            <ion-label class=\"emailLabel\">Password<ion-text color=\"danger\"> *</ion-text>\r\n            </ion-label>\r\n            <ion-item class=\"passwordItem\">\r\n              <ion-input class=\"passwordInput\" (keyup.enter)='onLoginClick()'  (ionInput)=\"onPwdTextInput()\" type=\"password\" inputmode=\"text\" enterkeyhint=\"Login\" placeholder=\"Password\" formControlName=\"Password\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Password', 'required') && pwd\">Password is required</div>\r\n          </div>\r\n          <!-- <div class=\"inputdiv\">\r\n            <ion-item class=\"rememberItem\" lines=\"none\">\r\n                <ion-checkbox mode=\"md\" [(ngModel)]=\"stayStignedIn\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\r\n                <ion-label class=\"checkboxLabel\">Stay signed in</ion-label>\r\n            </ion-item>\r\n          </div> -->\r\n          <div class=\"loginDiv\">\r\n            <ion-button class=\"loginBtn\" size=\"medium\" expand=\"block\" [disabled] =\"!loginForm.valid\" (click)=\"onLoginClick()\">\r\n              <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad ? 'Logging in...': 'Login'}}\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n        <div class=\"forgotPassDiv\">\r\n          <ion-button class=\"forgotPassBtn\" fill=\"clear\" expand=\"block\" (click)=\"onForgotPassClick()\">\r\n            Forgot Password?\r\n          </ion-button>\r\n        </div>\r\n        <div class=\"forgotPassDiv\">\r\n          <ion-button expand=\"block\" fill=\"clear\" class=\"forgotPassBtn\" (click)=\"onSignupClick()\">\r\n            Sign up\r\n          </ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </ion-card>\r\n    </ion-card>\r\n  </form>\r\n  </div>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");




var routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
    }
];
var AuthPageRoutingModule = /** @class */ (function () {
    function AuthPageRoutingModule() {
    }
    AuthPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AuthPageRoutingModule);
    return AuthPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");








var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
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
    return AuthPageModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.page.scss":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#d3d8dc; }\n\n.card {\n  border-radius: 0px;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100vh;\n  --background: linear-gradient(180deg,#2E4C99, #233771); }\n\n.outercard {\n  height: 90%;\n  width: 90%;\n  background: #d3d8dc;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px; }\n\n.outercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important; }\n\n.innercard {\n  height: 85%;\n  width: 85%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n  border-radius: 20px; }\n\n.innercard .card-Content {\n    width: 40%; }\n\n.innercardmobile {\n  height: 95% !important;\n  width: 95% !important; }\n\n.innercardmobile .card-Content {\n    width: 90% !important; }\n\n.signupBtnDiv {\n  padding: 5px 10px 10px 10px; }\n\n.signupBtn {\n  --color:#00aeef;\n  text-transform: inherit;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px; }\n\n.cardTitle {\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px;\n  font-family: Open Sans Bold; }\n\n.emailLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px; }\n\n.emailItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px; }\n\n.emailItem ion-input {\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-end: 5px;\n    --padding-start: 5px; }\n\n.passwordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px; }\n\n.passwordItem ion-input {\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-end: 5px;\n    --padding-start: 5px; }\n\n.form {\n  padding-top: 0px; }\n\n.inputdiv {\n  padding: 10px; }\n\n.loginBtn {\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 15px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit; }\n\n.loginDiv {\n  padding: 15px 10px 15px 10px; }\n\n.forgotPassBtn {\n  color: #00aeef;\n  height: 16px;\n  font-family: Open Sans SemiBold;\n  font-size: 13px;\n  text-transform: inherit; }\n\n.forgotPassDiv {\n  padding: 0px 10px 10px 10px; }\n\n.rememberItem {\n  --padding-start: 0%;\n  --background: #2e4c99 ;\n  --background-activated: #2e4c99; }\n\n.checkboxLabel {\n  color: white;\n  padding-left: 10px;\n  font-size: 14px; }\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto; }\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none; }\n  .innercardmobile .card-Content {\n    width: 45% !important; } }\n\n.tab_background {\n  --background: url('Tool_BG.svg') !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXGF1dGhcXGF1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNEQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHNEQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBUnZCO0lBV1EsVUFBVSxFQUFBOztBQUlsQjtFQUNJLHNCQUFzQjtFQUN0QixxQkFBcUIsRUFBQTs7QUFGekI7SUFLUSxxQkFBcUIsRUFBQTs7QUFJN0I7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxlQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLHlCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsdUJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUcxQjtFQUVJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUVJLDRCQUFhO0VBQ2IsbUJBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQWdCLEVBQUE7O0FBTHBCO0lBUUksZ0JBQWM7SUFDZCxtQkFBaUI7SUFDakIsa0JBQWM7SUFDZCxvQkFBZ0IsRUFBQTs7QUFJcEI7RUFFSSw0QkFBYTtFQUNiLG1CQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFnQixFQUFBOztBQUxwQjtJQVFRLGdCQUFjO0lBQ2QsbUJBQWlCO0lBQ2pCLGtCQUFjO0lBQ2Qsb0JBQWdCLEVBQUE7O0FBUXhCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLDhEQUFhO0VBQ2Isd0VBQXVCO0VBQ3ZCLHNFQUFxQjtFQUNyQixvRUFBbUI7RUFDbkIsZ0JBQVM7RUFDVCx1QkFBZ0I7RUFDaEIsMEJBQW1CO0VBQ25CLHlCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixxQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLG1CQUFnQjtFQUNoQixzQkFBYTtFQUNiLCtCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUluQjtFQUNBO0lBQ0ksY0FBYyxFQUFBO0VBRWxCO0lBQ0ksYUFBYSxFQUFBO0VBR2pCO0lBRVEscUJBQXFCLEVBQUEsRUFDeEI7O0FBSUw7RUFDSSwyQ0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2QzZDhkYztcclxuXHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMyRTRDOTksICMyMzM3NzEpOyAgICAgICAgICAgICAgICBcclxufVxyXG5cclxuLm91dGVyY2FyZHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkM2Q4ZGM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyY2FyZG1vYmlsZXtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5uZXJjYXJke1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzJFNEM5OSwgIzIzMzc3MSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgLmNhcmQtQ29udGVudHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5uZXJjYXJkbW9iaWxle1xyXG4gICAgaGVpZ2h0OiA5NSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuXHJcbiAgICAuY2FyZC1Db250ZW50e1xyXG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnNpZ251cEJ0bkRpdntcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLnNpZ251cEJ0bntcclxuICAgIC0tY29sb3I6IzAwYWVlZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG5cclxuLmNhcmRUaXRsZVxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgY29sb3I6ICMwMGFlZWY7IFxyXG4gICAgZm9udC1zaXplOiAzMnB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbn1cclxuXHJcbi5lbWFpbExhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uZW1haWxJdGVtXHJcbntcclxuICAgIC0tbWluLWhlaWdodDogMzdweCFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcblxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLnBhc3N3b3JkSXRlbVxyXG57XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDM3cHghaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG5cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuLnBhc3N3b3JkSW5wdXR7XHJcbiAgICAvLyBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm17XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uaW5wdXRkaXZ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW5CdG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTsgXHJcbiAgICAtLWNvbG9yXHQ6ICNmZmZmZmY7XHJcbiAgICAtLXJpcHBsZS1jb2xvciA6ICM5YTlhOWE7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZCA6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBzZW1pQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubG9naW5EaXZ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAxMHB4O1xyXG59XHJcblxyXG4uZm9yZ290UGFzc0J0bntcclxuICAgIGNvbG9yOiAjMDBhZWVmO1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG59XHJcblxyXG4uZm9yZ290UGFzc0RpdntcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLnJlbWVtYmVySXRlbXtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyZTRjOTkgO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzJlNGM5OTtcclxufVxyXG5cclxuLmNoZWNrYm94TGFiZWx7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XHJcbi5vdmVyZmxvc2Nyb2xse1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLm92ZXJmbG9zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLCAqOjotd2Via2l0LXNjcm9sbGJhciB7IFxyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbn1cclxuXHJcbi5pbm5lcmNhcmRtb2JpbGV7XHJcbiAgICAuY2FyZC1Db250ZW50e1xyXG4gICAgICAgIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG59XHJcblxyXG4udGFiX2JhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9Ub29sX0JHLnN2ZycpICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/user-agent/ngx */ "./node_modules/@ionic-native/user-agent/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");













var AuthPage = /** @class */ (function () {
    // @ViewChild('EmailInput',{static: false}) EmailInt;
    function AuthPage(appVersion, userAgent, device, platform, route, iab, http, toastController, authenticationService, storage) {
        var _this = this;
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
        this.hasError = function (controlName, errorName) {
            return _this.loginForm.controls[controlName].hasError(errorName);
        };
    }
    AuthPage.prototype.ngOnInit = function () {
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
    };
    // ionViewDidEnter() {
    //   setTimeout(()=>{
    //     // document.getElementById('EmailInput').focus();
    //     this.EmailInt.setFocus();
    //   },2000);
    // }
    AuthPage.prototype.onemialTextInput = function () {
        this.email = true;
    };
    AuthPage.prototype.onPwdTextInput = function () {
        this.pwd = true;
    };
    AuthPage.prototype.onLoginClick = function () {
        var _this = this;
        console.log('Login Clicked');
        this.showLoad = true;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        if (this.loginForm.valid) {
            var username = this.loginForm.controls['Email'].value;
            var password = this.loginForm.controls['Password'].value;
            var isRemember = 'Y';
            this.authenticationService.login(username, password, isRemember)
                .subscribe(function (data) {
                _this.showLoad = false;
                if (data.isEmailVerified !== "" && data.isEmailVerified == "Y") {
                    _this.loginForm.reset();
                }
                else {
                    _this.presentToast("Please verify your email address sent to your inbox");
                }
            }, function (err) {
                _this.showLoad = false;
                _this.presentToast(err.error.message);
                console.log(err);
            });
        }
    };
    AuthPage.prototype.onSignupClick = function () {
        //this.route.navigateByUrl('/signup');
        this.iab.create(this.signupUrl, '_blank', 'location=no,toolbar=yes,zoom=no');
    };
    AuthPage.prototype.onForgotPassClick = function () {
        this.route.navigateByUrl('/forgot-password');
    };
    AuthPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthPage.ctorParameters = function () { return [
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
    ]; };
    AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth.page.html"),
            styles: [__webpack_require__(/*! ./auth.page.scss */ "./src/app/auth/auth.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__["AppVersion"], _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_10__["UserAgent"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
    ], AuthPage);
    return AuthPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es5.js.map