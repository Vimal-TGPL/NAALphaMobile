(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content forceOverscroll = false>\n<div class=\"outerDiv\">\n  <form [formGroup]=\"changePasswordForm\">\n      \n        <ion-text>\n          <h1 class=\"cardTitle\">Change Password</h1>\n        </ion-text>\n      <div class=\"form\">\n        <div class=\"inputdiv\">\n          <ion-label class=\"PasswordLabel\">New Password<ion-text color=\"danger\"> *</ion-text>\n          </ion-label>\n          <ion-item class=\"PasswordItem\" lines=\"none\">\n            <ion-input autofocus=\"true\" type=\"text\" (ionInput)=\"onPwdTextInput()\" placeholder=\"Enter new password\" formControlName=\"Password\" type=\"password\" ></ion-input>\n            <ion-icon name=\"checkmark-circle\" *ngIf=\"!hasError('Password', 'required') && pwd && !hasError('Password','minlength') && !hasError('Password','maxlength')\"></ion-icon>\n          </ion-item>\n          <div style=\"color:white; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\">(Password must contain at least min of 8 characters)</div>\n          <div style=\"color:red; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\" *ngIf=\"hasError('Password', 'required') && pwd\">Password is required</div>\n          <div style=\"color:red; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\" *ngIf=\"hasError('Password', 'maxlength') && pwd\">You have more than 50 characters</div>\n        </div>\n        <div class=\"inputdiv\">\n            <ion-label class=\"ConfirmPasswordLabel\">Confirm Password<ion-text color=\"danger\"> *</ion-text>\n            </ion-label>\n            <ion-item class=\"ConfirmPasswordItem\" lines=\"none\">\n              <ion-input type=\"text\" (ionChange)=\"onCPwdTextInput()\" enterkeyhint=\"Submit\" (keyup.enter)='onSubmitClick()' placeholder=\"Confirm new password\" formControlName=\"confirmPassword\" type=\"password\"></ion-input>\n            </ion-item>\n            \n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 12px;\" *ngIf=\"hasError('confirmPassword', 'required') && Cpwd\">Confirm Password is required</div>\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 12px;\" *ngIf=\"flag\">Password Not Match</div>\n        </div>\n        <div class=\"submitDiv\">\n            <ion-button class=\"submitBtn\" [disabled] =\"!changePasswordForm.valid\" size=\"medium\" expand=\"block\" (click)=\"onSubmitClick()\">\n              <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad ? 'Submitting...': 'Submit'}}\n            </ion-button>\n         </div>\n        <div class=\"returnDiv\">\n          <ion-button class=\"returnBtn\" fill=\"clear\" size=\"medium\" expand=\"block\" (click)=\"onReturnClick()\">\n            Return H-Factor System\n          </ion-button>\n        </div>\n      </div>\n  </form>\n</div>\n</ion-content>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePasswordPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");








let ChangePasswordPageModule = class ChangePasswordPageModule {
};
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



/***/ }),

/***/ "./src/app/change-password/change-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width: 0 0 0;\n}\n\nion-content {\n  --background: #274b9e;\n}\n\nion-content .outerDiv {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content .outerDiv form {\n  width: 80%;\n}\n\n.cardTitle {\n  font-family: Open Sans Bold;\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px;\n}\n\n.form {\n  padding-top: 5px;\n}\n\n.inputdiv {\n  padding: 10px;\n  padding-top: 2px;\n}\n\n.PasswordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px;\n}\n\n.PasswordItem ion-input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-end: 5px;\n  --padding-start: 5px;\n}\n\n.PasswordItem ion-icon {\n  color: #3c763d;\n}\n\n.PasswordLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px;\n}\n\n.ConfirmPasswordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px;\n}\n\n.ConfirmPasswordItem ion-input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-end: 5px;\n  --padding-start: 5px;\n}\n\n.ConfirmPasswordLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px;\n}\n\n.submitDiv {\n  padding: 15px 10px 0px 10px;\n}\n\n.submitBtn {\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 15px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit;\n}\n\n.returnDiv {\n  padding: 15px 10px 10px 10px;\n}\n\n.returnBtn {\n  color: #00aeef;\n  height: 16px;\n  font-family: Open Sans SemiBold;\n  font-size: 13px;\n  text-transform: inherit;\n}\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto;\n  }\n\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none;\n  }\n\n  .innercardmobile .card-Content {\n    width: 50% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBRUkscUJBQUE7QUNBSjs7QURFSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURFUTtFQUNJLFVBQUE7QUNBWjs7QURLQTtFQUVJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURPQTtFQUNJLGdCQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUVJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNMSjs7QURPSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDTFI7O0FEUUk7RUFDSSxjQUFBO0FDTlI7O0FEVUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNQSjs7QURVQTtFQUVJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNSSjs7QURVSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDUlI7O0FEWUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNUSjs7QURZQTtFQUNJLDJCQUFBO0FDVEo7O0FEWUE7RUFDSSw4REFBQTtFQUNBLHdFQUFBO0VBQ0Esc0VBQUE7RUFDQSxvRUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNUSjs7QURZQTtFQUNJLDRCQUFBO0FDVEo7O0FEWUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDVEo7O0FEWUE7RUFDSTtJQUNJLGNBQUE7RUNUTjs7RURXRTtJQUNJLGFBQUE7RUNSTjs7RURZTTtJQUNJLHFCQUFBO0VDVFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi1jb250ZW50e1xuXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllOyAgICAgXG5cbiAgICAub3V0ZXJEaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGZvcm17XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZFRpdGxlXG57XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgY29sb3I6ICMwMGFlZWY7IFxuICAgIGZvbnQtc2l6ZTogMzJweDsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgXG59XG5cbi5mb3Jte1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5pbnB1dGRpdntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5QYXNzd29yZEl0ZW1cbntcbiAgICAtLW1pbi1oZWlnaHQ6IDM3cHghaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuXG4gICAgaW9uLWlucHV0e1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAgICAgICB9XG5cbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6ICMzYzc2M2Q7XG4gICAgfVxufVxuXG4uUGFzc3dvcmRMYWJlbHtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5Db25maXJtUGFzc3dvcmRJdGVtXG57XG4gICAgLS1taW4taGVpZ2h0OiAzN3B4IWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcblxuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAgICAgfVxufVxuXG4uQ29uZmlybVBhc3N3b3JkTGFiZWx7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc3VibWl0RGl2e1xuICAgIHBhZGRpbmc6IDE1cHggMTBweCAwcHggMTBweDtcbn1cblxuLnN1Ym1pdEJ0bntcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTsgXG4gICAgLS1jb2xvclx0OiAjZmZmZmZmO1xuICAgIC0tcmlwcGxlLWNvbG9yIDogIzlhOWE5YTtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZCA6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogMzdweDtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuLnJldHVybkRpdntcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ucmV0dXJuQnRue1xuICAgIGNvbG9yOiAjMDBhZWVmO1xuICAgIGhlaWdodDogMTZweDtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkge1xuICAgIC5vdmVyZmxvc2Nyb2xse1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gICAgLm92ZXJmbG9zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLCAqOjotd2Via2l0LXNjcm9sbGJhciB7IFxuICAgICAgICBkaXNwbGF5OiBub25lOyBcbiAgICB9XG4gICAgXG4gICAgLmlubmVyY2FyZG1vYmlsZXtcbiAgICAgICAgLmNhcmQtQ29udGVudHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB9IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcbn1cbmlvbi1jb250ZW50IC5vdXRlckRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLm91dGVyRGl2IGZvcm0ge1xuICB3aWR0aDogODAlO1xufVxuXG4uY2FyZFRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDBhZWVmO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uaW5wdXRkaXYge1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuXG4uUGFzc3dvcmRJdGVtIHtcbiAgLS1taW4taGVpZ2h0OiAzN3B4IWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbn1cbi5QYXNzd29yZEl0ZW0gaW9uLWlucHV0IHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbn1cbi5QYXNzd29yZEl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzNjNzYzZDtcbn1cblxuLlBhc3N3b3JkTGFiZWwge1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5Db25maXJtUGFzc3dvcmRJdGVtIHtcbiAgLS1taW4taGVpZ2h0OiAzN3B4IWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbn1cbi5Db25maXJtUGFzc3dvcmRJdGVtIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG59XG5cbi5Db25maXJtUGFzc3dvcmRMYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnN1Ym1pdERpdiB7XG4gIHBhZGRpbmc6IDE1cHggMTBweCAwcHggMTBweDtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAtLXJpcHBsZS1jb2xvcjogIzlhOWE5YTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgc2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG59XG5cbi5yZXR1cm5EaXYge1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ucmV0dXJuQnRuIHtcbiAgY29sb3I6ICMwMGFlZWY7XG4gIGhlaWdodDogMTZweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLm92ZXJmbG9zY3JvbGwge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLm92ZXJmbG9zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLCAqOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pbm5lcmNhcmRtb2JpbGUgLmNhcmQtQ29udGVudCB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ChangePasswordPage = class ChangePasswordPage {
    constructor(platform, menuController, formBuilder, userServices, toastController, route) {
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
        this.hasError = (controlName, errorName) => {
            return this.changePasswordForm.controls[controlName].hasError(errorName);
        };
        this._backSub = this.platform.backButton.subscribeWithPriority(0, () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.onReturnClick();
        }));
    }
    ngOnDestroy() {
        this._backSub.unsubscribe();
    }
    ionViewDidLeave() {
        this.menuController.enable(true);
    }
    ngOnInit() {
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
                ]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        }, { validator: passwordMatchValidator });
        this.menuController.enable(false);
    }
    onSubmitClick() {
        this.showLoad = true;
        if (this.changePasswordForm.valid) {
            let Password = this.changePasswordForm.controls["Password"].value;
            this.userServices.UpdatePass(Password)
                .subscribe(data => {
                this.showLoad = false;
                this.presentToast("New Password changed successfully");
                this.changePasswordForm.reset();
                setTimeout(() => {
                    this.route.navigateByUrl('/menu/menu/home');
                });
            });
        }
    }
    onReturnClick() {
        this.route.navigateByUrl('/menu/menu/home');
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
    onPwdTextInput() {
        this.pwd = true;
    }
    onCPwdTextInput() {
        this.Cpwd = true;
        if (this.changePasswordForm.controls["Password"].value.toString() === this.changePasswordForm.controls["confirmPassword"].value.toString()) {
            this.flag = false;
        }
        else {
            this.flag = true;
        }
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.page.scss */ "./src/app/change-password/change-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ChangePasswordPage);

const passwordMatchValidator = (formGroup) => {
    if (formGroup.get('Password').value === formGroup.get('confirmPassword').value)
        return null;
    else
        return { passwordMismatch: true };
};


/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module-es2015.js.map