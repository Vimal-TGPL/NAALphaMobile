(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content forceOverscroll = false>\r\n<div style=\"display: block;\">\r\n  <form [formGroup]=\"changePasswordForm\">\r\n  <ion-card class=\"card\">\r\n    <ion-card class=\"outercard\" [ngClass]=\"{'outercardmobile': mobile}\">\r\n      <ion-card class=\"innercard\" [ngClass]=\"{'innercardmobile': mobile}\">\r\n      \r\n      \r\n    <ion-card-header style=\"background: none;\">\r\n      <ion-card-title class=\"cardTitle\">Change Password</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"overfloscroll card-Content\">\r\n      <div class=\"form\">\r\n        <div class=\"inputdiv\">\r\n          <ion-label class=\"PasswordLabel\">New Password<ion-text color=\"danger\"> *</ion-text>\r\n          </ion-label>\r\n          <ion-item class=\"PasswordItem\">\r\n            <ion-input autofocus=\"true\" type=\"text\" (ionInput)=\"onPwdTextInput()\" placeholder=\"Enter new password\" formControlName=\"Password\" type=\"password\" ></ion-input>\r\n            <ion-icon name=\"checkmark-circle\" *ngIf=\"!hasError('Password', 'required') && pwd && !hasError('Password','minlength') && !hasError('Password','maxlength')\"></ion-icon>\r\n          </ion-item>\r\n          <div style=\"color:white; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\">(Password must contain at least min of 8 characters)</div>\r\n          <div style=\"color:red; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\" *ngIf=\"hasError('Password', 'required') && pwd\">Password is required</div>\r\n          <div style=\"color:red; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\" *ngIf=\"hasError('Password', 'maxlength') && pwd\">You have more than 50 characters</div>\r\n        </div>\r\n        <div class=\"inputdiv\">\r\n            <ion-label class=\"ConfirmPasswordLabel\">Confirm Password<ion-text color=\"danger\"> *</ion-text>\r\n            </ion-label>\r\n            <ion-item class=\"ConfirmPasswordItem\">\r\n              <ion-input type=\"text\" (ionChange)=\"onCPwdTextInput()\" enterkeyhint=\"Submit\" (keyup.enter)='onSubmitClick()' placeholder=\"Confirm new password\" formControlName=\"confirmPassword\" type=\"password\"></ion-input>\r\n            </ion-item>\r\n            \r\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 12px;\" *ngIf=\"hasError('confirmPassword', 'required') && Cpwd\">Confirm Password is required</div>\r\n            <!-- <div style=\"color:red; padding-top: 0.2rem;\" *ngIf=\"hasError('confirmPassword', 'passwordMatchValidator') && Cpwd\">Password Not Match</div> -->\r\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 12px;\" *ngIf=\"flag\">Password Not Match</div>\r\n        </div>\r\n        <div class=\"submitDiv\">\r\n            <ion-button class=\"submitBtn\" [disabled] =\"!changePasswordForm.valid\" size=\"medium\" expand=\"block\" (click)=\"onSubmitClick()\">\r\n              <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad ? 'Submitting...': 'Submit'}}\r\n            </ion-button>\r\n         </div>\r\n        <div class=\"returnDiv\">\r\n          <ion-button class=\"returnBtn\" fill=\"clear\" size=\"medium\" expand=\"block\" (click)=\"onReturnClick()\">\r\n            Return H-Factor System\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-card>\r\n  </ion-card>\r\n  </form>\r\n</div>\r\n</ion-content>\r\n"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#d3d8dc;\n}\n\n.card {\n  border-radius: 0px;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100vh;\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n}\n\n.outercard {\n  height: 90%;\n  width: 90%;\n  background: #d3d8dc;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px;\n}\n\n.outercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important;\n}\n\n.innercard {\n  height: 85%;\n  width: 85%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n  border-radius: 20px;\n}\n\n.innercard .card-Content {\n  width: 40%;\n}\n\n.innercardmobile {\n  height: 95% !important;\n  width: 95% !important;\n}\n\n.innercardmobile .card-Content {\n  width: 90% !important;\n}\n\n.cardTitle {\n  font-family: Open Sans Bold;\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px;\n}\n\n.form {\n  padding-top: 5px;\n}\n\n.inputdiv {\n  padding: 10px;\n  padding-top: 2px;\n}\n\n.PasswordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px;\n}\n\n.PasswordItem ion-input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-end: 5px;\n  --padding-start: 5px;\n}\n\n.PasswordItem ion-icon {\n  color: #3c763d;\n}\n\n.PasswordLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px;\n}\n\n.ConfirmPasswordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px;\n}\n\n.ConfirmPasswordItem ion-input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-end: 5px;\n  --padding-start: 5px;\n}\n\n.ConfirmPasswordLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px;\n}\n\n.submitDiv {\n  padding: 15px 10px 0px 10px;\n}\n\n.submitBtn {\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 15px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit;\n}\n\n.returnDiv {\n  padding: 15px 10px 10px 10px;\n}\n\n.returnBtn {\n  color: #00aeef;\n  height: 16px;\n  font-family: Open Sans SemiBold;\n  font-size: 13px;\n  text-transform: inherit;\n}\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto;\n  }\n\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none;\n  }\n\n  .innercardmobile .card-Content {\n    width: 50% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcY2hhbmdlLXBhc3N3b3JkXFxjaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FDQUo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzREFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0RBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdJO0VBQ0ksVUFBQTtBQ0RSOztBREtBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBRElJO0VBQ0kscUJBQUE7QUNGUjs7QURNQTtFQUVJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURRQTtFQUNJLGdCQUFBO0FDTEo7O0FEUUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRQTtFQUVJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURRSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDTlI7O0FEU0k7RUFDSSxjQUFBO0FDUFI7O0FEV0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNSSjs7QURXQTtFQUVJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNUSjs7QURXSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDVFI7O0FEYUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNWSjs7QURhQTtFQUNJLDJCQUFBO0FDVko7O0FEYUE7RUFDSSw4REFBQTtFQUNBLHdFQUFBO0VBQ0Esc0VBQUE7RUFDQSxvRUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNWSjs7QURhQTtFQUNJLDRCQUFBO0FDVko7O0FEYUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDVko7O0FEYUE7RUFDSTtJQUNJLGNBQUE7RUNWTjs7RURZRTtJQUNJLGFBQUE7RUNUTjs7RURhTTtJQUNJLHFCQUFBO0VDVlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZDNkOGRjO1xyXG5cclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzJFNEM5OSwgIzIzMzc3MSk7ICAgICAgICAgICAgICAgIFxyXG59XHJcblxyXG4ub3V0ZXJjYXJke1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2QzZDhkYztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXJjYXJkbW9iaWxle1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbm5lcmNhcmR7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywjMkU0Qzk5LCAjMjMzNzcxKTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAuY2FyZC1Db250ZW50e1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbm5lcmNhcmRtb2JpbGV7XHJcbiAgICBoZWlnaHQ6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5jYXJkLUNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZFRpdGxlXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogIzAwYWVlZjsgXHJcbiAgICBmb250LXNpemU6IDMycHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIFxyXG59XHJcblxyXG4uZm9ybXtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5pbnB1dGRpdntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG4uUGFzc3dvcmRJdGVtXHJcbntcclxuICAgIC0tbWluLWhlaWdodDogMzdweCFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcblxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiAjM2M3NjNkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uUGFzc3dvcmRMYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLkNvbmZpcm1QYXNzd29yZEl0ZW1cclxue1xyXG4gICAgLS1taW4taGVpZ2h0OiAzN3B4IWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuXHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbi5Db25maXJtUGFzc3dvcmRMYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnN1Ym1pdERpdntcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweCAwcHggMTBweDtcclxufVxyXG5cclxuLnN1Ym1pdEJ0bntcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpOyBcclxuICAgIC0tY29sb3JcdDogI2ZmZmZmZjtcclxuICAgIC0tcmlwcGxlLWNvbG9yIDogIzlhOWE5YTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkIDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5yZXR1cm5EaXZ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4ucmV0dXJuQnRue1xyXG4gICAgY29sb3I6ICMwMGFlZWY7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcclxuICAgIC5vdmVyZmxvc2Nyb2xse1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm92ZXJmbG9zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLCAqOjotd2Via2l0LXNjcm9sbGJhciB7IFxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5uZXJjYXJkbW9iaWxle1xyXG4gICAgICAgIC5jYXJkLUNvbnRlbnR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkM2Q4ZGM7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzJFNEM5OSwgIzIzMzc3MSk7XG59XG5cbi5vdXRlcmNhcmQge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZDogI2QzZDhkYztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlcmNhcmRtb2JpbGUge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cblxuLmlubmVyY2FyZCB7XG4gIGhlaWdodDogODUlO1xuICB3aWR0aDogODUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMyRTRDOTksICMyMzM3NzEpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmlubmVyY2FyZCAuY2FyZC1Db250ZW50IHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmlubmVyY2FyZG1vYmlsZSB7XG4gIGhlaWdodDogOTUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbn1cbi5pbm5lcmNhcmRtb2JpbGUgLmNhcmQtQ29udGVudCB7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbn1cblxuLmNhcmRUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwYWVlZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5mb3JtIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmlucHV0ZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLlBhc3N3b3JkSXRlbSB7XG4gIC0tbWluLWhlaWdodDogMzdweCFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG59XG4uUGFzc3dvcmRJdGVtIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG59XG4uUGFzc3dvcmRJdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICMzYzc2M2Q7XG59XG5cbi5QYXNzd29yZExhYmVsIHtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uQ29uZmlybVBhc3N3b3JkSXRlbSB7XG4gIC0tbWluLWhlaWdodDogMzdweCFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG59XG4uQ29uZmlybVBhc3N3b3JkSXRlbSBpb24taW5wdXQge1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xufVxuXG4uQ29uZmlybVBhc3N3b3JkTGFiZWwge1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zdWJtaXREaXYge1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMHB4IDEwcHg7XG59XG5cbi5zdWJtaXRCdG4ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLS1yaXBwbGUtY29sb3I6ICM5YTlhOWE7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xufVxuXG4ucmV0dXJuRGl2IHtcbiAgcGFkZGluZzogMTVweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLnJldHVybkJ0biB7XG4gIGNvbG9yOiAjMDBhZWVmO1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5vdmVyZmxvc2Nyb2xsIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIC5vdmVyZmxvc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciwgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaW5uZXJjYXJkbW9iaWxlIC5jYXJkLUNvbnRlbnQge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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
                    // Validators.pattern('/^[a-zA-Z0-9!@#$%^&*]{8,50}$/')
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
                duration: 3000
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
        template: __webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.page.html"),
        styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/change-password/change-password.page.scss")]
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