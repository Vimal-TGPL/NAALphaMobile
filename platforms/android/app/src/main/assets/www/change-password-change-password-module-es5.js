(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"login-header\">\r\n  <ion-toolbar>\r\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content forceOverscroll = false>\r\n<div class=\"outerDiv\">\r\n  <form [formGroup]=\"changePasswordForm\">\r\n  <!-- <ion-card class=\"card\">\r\n    <ion-card class=\"outercard\" [ngClass]=\"{'outercardmobile': mobile}\">\r\n      <ion-card class=\"innercard\" [ngClass]=\"{'innercardmobile': mobile}\"> -->\r\n      \r\n        <ion-text>\r\n          <h1 class=\"cardTitle\">Change Password</h1>\r\n        </ion-text>\r\n      <div class=\"form\">\r\n        <div class=\"inputdiv\">\r\n          <ion-label class=\"PasswordLabel\">New Password<ion-text color=\"danger\"> *</ion-text>\r\n          </ion-label>\r\n          <ion-item class=\"PasswordItem\">\r\n            <ion-input autofocus=\"true\" type=\"text\" (ionInput)=\"onPwdTextInput()\" placeholder=\"Enter new password\" formControlName=\"Password\" type=\"password\" ></ion-input>\r\n            <ion-icon name=\"checkmark-circle\" *ngIf=\"!hasError('Password', 'required') && pwd && !hasError('Password','minlength') && !hasError('Password','maxlength')\"></ion-icon>\r\n          </ion-item>\r\n          <div style=\"color:white; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\">(Password must contain at least min of 8 characters)</div>\r\n          <div style=\"color:red; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\" *ngIf=\"hasError('Password', 'required') && pwd\">Password is required</div>\r\n          <div style=\"color:red; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\" *ngIf=\"hasError('Password', 'maxlength') && pwd\">You have more than 50 characters</div>\r\n        </div>\r\n        <div class=\"inputdiv\">\r\n            <ion-label class=\"ConfirmPasswordLabel\">Confirm Password<ion-text color=\"danger\"> *</ion-text>\r\n            </ion-label>\r\n            <ion-item class=\"ConfirmPasswordItem\">\r\n              <ion-input type=\"text\" (ionChange)=\"onCPwdTextInput()\" enterkeyhint=\"Submit\" (keyup.enter)='onSubmitClick()' placeholder=\"Confirm new password\" formControlName=\"confirmPassword\" type=\"password\"></ion-input>\r\n            </ion-item>\r\n            \r\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 12px;\" *ngIf=\"hasError('confirmPassword', 'required') && Cpwd\">Confirm Password is required</div>\r\n            <!-- <div style=\"color:red; padding-top: 0.2rem;\" *ngIf=\"hasError('confirmPassword', 'passwordMatchValidator') && Cpwd\">Password Not Match</div> -->\r\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 12px;\" *ngIf=\"flag\">Password Not Match</div>\r\n        </div>\r\n        <div class=\"submitDiv\">\r\n            <ion-button class=\"submitBtn\" [disabled] =\"!changePasswordForm.valid\" size=\"medium\" expand=\"block\" (click)=\"onSubmitClick()\">\r\n              <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad ? 'Submitting...': 'Submit'}}\r\n            </ion-button>\r\n         </div>\r\n        <div class=\"returnDiv\">\r\n          <ion-button class=\"returnBtn\" fill=\"clear\" size=\"medium\" expand=\"block\" (click)=\"onReturnClick()\">\r\n            Return H-Factor System\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n  </form>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/change-password/change-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/change-password/change-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");




var routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
var ChangePasswordPageRoutingModule = /** @class */ (function () {
    function ChangePasswordPageRoutingModule() {
    }
    ChangePasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChangePasswordPageRoutingModule);
    return ChangePasswordPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");








var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width: 0 0 0; }\n\nion-content {\n  --background: #274b9e; }\n\nion-content .outerDiv {\n    display: -webkit-box;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center; }\n\nion-content .outerDiv form {\n      width: 80%; }\n\n.cardTitle {\n  font-family: Open Sans Bold;\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px; }\n\n.form {\n  padding-top: 5px; }\n\n.inputdiv {\n  padding: 10px;\n  padding-top: 2px; }\n\n.PasswordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px; }\n\n.PasswordItem ion-input {\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-end: 5px;\n    --padding-start: 5px; }\n\n.PasswordItem ion-icon {\n    color: #3c763d; }\n\n.PasswordLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px; }\n\n.ConfirmPasswordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px; }\n\n.ConfirmPasswordItem ion-input {\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-end: 5px;\n    --padding-start: 5px; }\n\n.ConfirmPasswordLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px; }\n\n.submitDiv {\n  padding: 15px 10px 0px 10px; }\n\n.submitBtn {\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 15px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit; }\n\n.returnDiv {\n  padding: 15px 10px 10px 10px; }\n\n.returnBtn {\n  color: #00aeef;\n  height: 16px;\n  font-family: Open Sans SemiBold;\n  font-size: 13px;\n  text-transform: inherit; }\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto; }\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none; }\n  .innercardmobile .card-Content {\n    width: 50% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcY2hhbmdlLXBhc3N3b3JkXFxjaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7RUFDYixhQUFhO0VBQ2IscUJBQWUsRUFBQTs7QUFHbkI7RUFFSSxxQkFBYSxFQUFBOztBQUZqQjtJQUtRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7O0FBVDNCO01BWVksVUFBVSxFQUFBOztBQUt0QjtFQUVJLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdwQjtFQUVJLDRCQUFhO0VBQ2IsbUJBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQWdCLEVBQUE7O0FBTHBCO0lBUVEsZ0JBQWM7SUFDZCxtQkFBaUI7SUFDakIsa0JBQWM7SUFDZCxvQkFBZ0IsRUFBQTs7QUFYeEI7SUFlUSxjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUVJLDRCQUFhO0VBQ2IsbUJBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQWdCLEVBQUE7O0FBTHBCO0lBUVEsZ0JBQWM7SUFDZCxtQkFBaUI7SUFDakIsa0JBQWM7SUFDZCxvQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksOERBQWE7RUFDYix3RUFBdUI7RUFDdkIsc0VBQXFCO0VBQ3JCLG9FQUFtQjtFQUNuQixnQkFBUztFQUNULHVCQUFnQjtFQUNoQiwwQkFBbUI7RUFDbkIseUJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFCQUFnQjtFQUNoQixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0k7SUFDSSxjQUFjLEVBQUE7RUFFbEI7SUFDSSxhQUFhLEVBQUE7RUFHakI7SUFFUSxxQkFBcUIsRUFBQSxFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTsgICAgIFxyXG5cclxuICAgIC5vdXRlckRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhcmRUaXRsZVxyXG57XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgY29sb3I6ICMwMGFlZWY7IFxyXG4gICAgZm9udC1zaXplOiAzMnB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLmZvcm17XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4uaW5wdXRkaXZ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuLlBhc3N3b3JkSXRlbVxyXG57XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDM3cHghaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG5cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjogIzNjNzYzZDtcclxuICAgIH1cclxufVxyXG5cclxuLlBhc3N3b3JkTGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5Db25maXJtUGFzc3dvcmRJdGVtXHJcbntcclxuICAgIC0tbWluLWhlaWdodDogMzdweCFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcblxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG4uQ29uZmlybVBhc3N3b3JkTGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5zdWJtaXREaXZ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXRCdG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTsgXHJcbiAgICAtLWNvbG9yXHQ6ICNmZmZmZmY7XHJcbiAgICAtLXJpcHBsZS1jb2xvciA6ICM5YTlhOWE7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZCA6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBzZW1pQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG59XHJcblxyXG4ucmV0dXJuRGl2e1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLnJldHVybkJ0bntcclxuICAgIGNvbG9yOiAjMDBhZWVmO1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XHJcbiAgICAub3ZlcmZsb3Njcm9sbHtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC5vdmVyZmxvc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciwgKjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlubmVyY2FyZG1vYmlsZXtcclxuICAgICAgICAuY2FyZC1Db250ZW50e1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/change-password/change-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangePasswordPage, passwordMatchValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatchValidator", function() { return passwordMatchValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(platform, menuController, formBuilder, userServices, toastController, route) {
        var _this = this;
        this.platform = platform;
        this.menuController = menuController;
        this.formBuilder = formBuilder;
        this.userServices = userServices;
        this.toastController = toastController;
        this.route = route;
        this.showLoad = false;
        this.customErrors = { required: 'Please accept the terms' };
        this.pwd = false;
        this.Cpwd = false;
        this.hasError = function (controlName, errorName) {
            return _this.changePasswordForm.controls[controlName].hasError(errorName);
        };
    }
    ChangePasswordPage.prototype.ionViewDidLeave = function () {
        this.menuController.enable(true);
    };
    ChangePasswordPage.prototype.ngOnInit = function () {
        if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
        }
        this.changePasswordForm = this.formBuilder.group({
            Password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                    // Validators.pattern('/^[a-zA-Z0-9!@#$%^&*]{8,50}$/')
                ]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        }, { validator: passwordMatchValidator });
        this.menuController.enable(false);
    };
    ChangePasswordPage.prototype.onSubmitClick = function () {
        var _this = this;
        this.showLoad = true;
        if (this.changePasswordForm.valid) {
            var Password = this.changePasswordForm.controls["Password"].value;
            this.userServices.UpdatePass(Password)
                .subscribe(function (data) {
                _this.showLoad = false;
                _this.presentToast("New Password changed successfully");
                _this.changePasswordForm.reset();
                setTimeout(function () {
                    _this.route.navigateByUrl('/menu/menu/home');
                });
            });
        }
    };
    ChangePasswordPage.prototype.onReturnClick = function () {
        this.route.navigateByUrl('/menu/menu/home');
    };
    ChangePasswordPage.prototype.presentToast = function (msg) {
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
    ChangePasswordPage.prototype.onPwdTextInput = function () {
        this.pwd = true;
    };
    ChangePasswordPage.prototype.onCPwdTextInput = function () {
        this.Cpwd = true;
        if (this.changePasswordForm.controls["Password"].value.toString() === this.changePasswordForm.controls["confirmPassword"].value.toString()) {
            this.flag = false;
        }
        else {
            this.flag = true;
        }
    };
    ChangePasswordPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.page.html"),
            styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/change-password/change-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

var passwordMatchValidator = function (formGroup) {
    if (formGroup.get('Password').value === formGroup.get('confirmPassword').value)
        return null;
    else
        return { passwordMismatch: true };
};


/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module-es5.js.map