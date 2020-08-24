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

module.exports = "ion-content {\n  --ion-background-color:#d3d8dc; }\n\n.card {\n  border-radius: 0px;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100vh;\n  --background: linear-gradient(180deg,#2E4C99, #233771); }\n\n.outercard {\n  height: 90%;\n  width: 90%;\n  background: #d3d8dc;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px; }\n\n.outercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important; }\n\n.innercard {\n  height: 85%;\n  width: 85%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n  border-radius: 20px; }\n\n.innercard .card-Content {\n    width: 40%; }\n\n.innercardmobile {\n  height: 95% !important;\n  width: 95% !important; }\n\n.innercardmobile .card-Content {\n    width: 90% !important; }\n\n.cardTitle {\n  font-family: Open Sans Bold;\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px; }\n\n.form {\n  padding-top: 5px; }\n\n.inputdiv {\n  padding: 10px;\n  padding-top: 2px; }\n\n.PasswordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px; }\n\n.PasswordItem ion-input {\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-end: 5px;\n    --padding-start: 5px; }\n\n.PasswordItem ion-icon {\n    color: #3c763d; }\n\n.PasswordLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px; }\n\n.ConfirmPasswordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px; }\n\n.ConfirmPasswordItem ion-input {\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-end: 5px;\n    --padding-start: 5px; }\n\n.ConfirmPasswordLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px; }\n\n.submitDiv {\n  padding: 15px 10px 0px 10px; }\n\n.submitBtn {\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 15px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit; }\n\n.returnDiv {\n  padding: 15px 10px 10px 10px; }\n\n.returnBtn {\n  color: #00aeef;\n  height: 16px;\n  font-family: Open Sans SemiBold;\n  font-size: 13px;\n  text-transform: inherit; }\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto; }\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none; }\n  .innercardmobile .card-Content {\n    width: 50% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcY2hhbmdlLXBhc3N3b3JkXFxjaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNEQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHNEQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBUnZCO0lBV1EsVUFBVSxFQUFBOztBQUlsQjtFQUNJLHNCQUFzQjtFQUN0QixxQkFBcUIsRUFBQTs7QUFGekI7SUFLUSxxQkFBcUIsRUFBQTs7QUFJN0I7RUFFSSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUlyQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFSSw0QkFBYTtFQUNiLG1CQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFnQixFQUFBOztBQUxwQjtJQVFRLGdCQUFjO0lBQ2QsbUJBQWlCO0lBQ2pCLGtCQUFjO0lBQ2Qsb0JBQWdCLEVBQUE7O0FBWHhCO0lBZVEsY0FBYyxFQUFBOztBQUl0QjtFQUNJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFFSSw0QkFBYTtFQUNiLG1CQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFnQixFQUFBOztBQUxwQjtJQVFRLGdCQUFjO0lBQ2QsbUJBQWlCO0lBQ2pCLGtCQUFjO0lBQ2Qsb0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLDhEQUFhO0VBQ2Isd0VBQXVCO0VBQ3ZCLHNFQUFxQjtFQUNyQixvRUFBbUI7RUFDbkIsZ0JBQVM7RUFDVCx1QkFBZ0I7RUFDaEIsMEJBQW1CO0VBQ25CLHlCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixxQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQUczQjtFQUNJO0lBQ0ksY0FBYyxFQUFBO0VBRWxCO0lBQ0ksYUFBYSxFQUFBO0VBR2pCO0lBRVEscUJBQXFCLEVBQUEsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2QzZDhkYztcclxuXHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMyRTRDOTksICMyMzM3NzEpOyAgICAgICAgICAgICAgICBcclxufVxyXG5cclxuLm91dGVyY2FyZHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkM2Q4ZGM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyY2FyZG1vYmlsZXtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5uZXJjYXJke1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzJFNEM5OSwgIzIzMzc3MSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgLmNhcmQtQ29udGVudHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5uZXJjYXJkbW9iaWxle1xyXG4gICAgaGVpZ2h0OiA5NSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuXHJcbiAgICAuY2FyZC1Db250ZW50e1xyXG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmRUaXRsZVxyXG57XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgY29sb3I6ICMwMGFlZWY7IFxyXG4gICAgZm9udC1zaXplOiAzMnB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLmZvcm17XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4uaW5wdXRkaXZ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuLlBhc3N3b3JkSXRlbVxyXG57XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDM3cHghaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG5cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjogIzNjNzYzZDtcclxuICAgIH1cclxufVxyXG5cclxuLlBhc3N3b3JkTGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5Db25maXJtUGFzc3dvcmRJdGVtXHJcbntcclxuICAgIC0tbWluLWhlaWdodDogMzdweCFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcblxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG4uQ29uZmlybVBhc3N3b3JkTGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5zdWJtaXREaXZ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXRCdG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTsgXHJcbiAgICAtLWNvbG9yXHQ6ICNmZmZmZmY7XHJcbiAgICAtLXJpcHBsZS1jb2xvciA6ICM5YTlhOWE7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZCA6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBzZW1pQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG59XHJcblxyXG4ucmV0dXJuRGl2e1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLnJldHVybkJ0bntcclxuICAgIGNvbG9yOiAjMDBhZWVmO1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XHJcbiAgICAub3ZlcmZsb3Njcm9sbHtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC5vdmVyZmxvc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciwgKjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlubmVyY2FyZG1vYmlsZXtcclxuICAgICAgICAuY2FyZC1Db250ZW50e1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfSJdfQ== */"

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