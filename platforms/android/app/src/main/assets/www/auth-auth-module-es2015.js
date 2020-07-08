(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content forceOverscroll=false>\r\n    <div style=\"display: block;\">\r\n      <form [formGroup]=\"loginForm\">\r\n    <ion-card class=\"card\">\r\n      <ion-card class=\"outercard\" [ngClass]=\"{'outercardmobile': mobile}\">\r\n        <ion-card class=\"innercard\" [ngClass]=\"{'innercardmobile': mobile}\">\r\n          \r\n        \r\n      \r\n      <ion-card-header style=\"padding: 0px; background: none;\">\r\n        <ion-card-title class=\"cardTitle\">Login</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"overfloscroll card-Content\" >\r\n        \r\n        <div class=\"form\">\r\n          <div class=\"inputdiv\">\r\n            <ion-label class=\"emailLabel\">Email<ion-text color=\"danger\"> *</ion-text>\r\n            </ion-label>\r\n            <ion-item class=\"emailItem\">\r\n              <ion-input autofocus=\"true\" inputmode=\"email\" (ionInput)=\"onemialTextInput()\" placeholder=\"Email Address\" formControlName=\"Email\" autocomplete=\"on\"></ion-input>\r\n            </ion-item>\r\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'required') && email\">Email is required</div>\r\n          </div>\r\n          <div class=\"inputdiv\">\r\n            <ion-label class=\"emailLabel\">Password<ion-text color=\"danger\"> *</ion-text>\r\n            </ion-label>\r\n            <ion-item class=\"passwordItem\">\r\n              <ion-input class=\"passwordInput\" (keyup.enter)='onLoginClick()'  (ionInput)=\"onPwdTextInput()\" type=\"password\" inputmode=\"text\" enterkeyhint=\"Login\" placeholder=\"Password\" formControlName=\"Password\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Password', 'required') && pwd\">Password is required</div>\r\n          </div>\r\n          <!-- <div class=\"inputdiv\">\r\n            <ion-item class=\"rememberItem\" lines=\"none\">\r\n                <ion-checkbox mode=\"md\" [(ngModel)]=\"stayStignedIn\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\r\n                <ion-label class=\"checkboxLabel\">Stay signed in</ion-label>\r\n            </ion-item>\r\n          </div> -->\r\n          <div class=\"loginDiv\">\r\n            <ion-button class=\"loginBtn\" size=\"medium\" expand=\"block\" [disabled] =\"!loginForm.valid\" (click)=\"onLoginClick()\">\r\n              <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad ? 'Logging in...': 'Login'}}\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n        <div class=\"forgotPassDiv\">\r\n          <ion-button class=\"forgotPassBtn\" fill=\"clear\" expand=\"block\" (click)=\"onForgotPassClick()\">\r\n            Forgot Password?\r\n          </ion-button>\r\n        </div>\r\n        <div class=\"forgotPassDiv\">\r\n          <ion-button expand=\"block\" fill=\"clear\" class=\"forgotPassBtn\" (click)=\"onSignupClick()\">\r\n            Sign up\r\n          </ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </ion-card>\r\n    </ion-card>\r\n  </form>\r\n  </div>\r\n</ion-content>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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

module.exports = "ion-content {\n  --ion-background-color:#d3d8dc;\n}\n\n.card {\n  border-radius: 0px;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100vh;\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n}\n\n.outercard {\n  height: 90%;\n  width: 90%;\n  background: #d3d8dc;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px;\n}\n\n.outercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important;\n}\n\n.innercard {\n  height: 85%;\n  width: 85%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n  border-radius: 20px;\n}\n\n.innercard .card-Content {\n  width: 40%;\n}\n\n.innercardmobile {\n  height: 95% !important;\n  width: 95% !important;\n}\n\n.innercardmobile .card-Content {\n  width: 90% !important;\n}\n\n.signupBtnDiv {\n  padding: 5px 10px 10px 10px;\n}\n\n.signupBtn {\n  --color:#00aeef;\n  text-transform: inherit;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.cardTitle {\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px;\n  font-family: Open Sans Bold;\n}\n\n.emailLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px;\n}\n\n.emailItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px;\n}\n\n.emailItem ion-input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-end: 5px;\n  --padding-start: 5px;\n}\n\n.passwordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px;\n}\n\n.passwordItem ion-input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-end: 5px;\n  --padding-start: 5px;\n}\n\n.form {\n  padding-top: 0px;\n}\n\n.inputdiv {\n  padding: 10px;\n}\n\n.loginBtn {\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 15px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit;\n}\n\n.loginDiv {\n  padding: 15px 10px 15px 10px;\n}\n\n.forgotPassBtn {\n  color: #00aeef;\n  height: 16px;\n  font-family: Open Sans SemiBold;\n  font-size: 13px;\n  text-transform: inherit;\n}\n\n.forgotPassDiv {\n  padding: 0px 10px 10px 10px;\n}\n\n.rememberItem {\n  --padding-start: 0%;\n  --background: #2e4c99 ;\n  --background-activated: #2e4c99;\n}\n\n.checkboxLabel {\n  color: white;\n  padding-left: 10px;\n  font-size: 14px;\n}\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto;\n  }\n\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none;\n  }\n\n  .innercardmobile .card-Content {\n    width: 45% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXGF1dGhcXGF1dGgucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoL2F1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUNBSjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNEQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzREFBQTtFQUNBLG1CQUFBO0FDREo7O0FER0k7RUFDSSxVQUFBO0FDRFI7O0FES0E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0FDRko7O0FESUk7RUFDSSxxQkFBQTtBQ0ZSOztBRE1BO0VBQ0ksMkJBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FDSEo7O0FETUE7RUFFSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDSko7O0FET0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNKSjs7QURPQTtFQUVJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNMSjs7QURPSTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDTEo7O0FEU0E7RUFFSSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDUEo7O0FEU0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ1BSOztBRGVBO0VBQ0ksZ0JBQUE7QUNaSjs7QURlQTtFQUNJLGFBQUE7QUNaSjs7QURlQTtFQUNJLDhEQUFBO0VBQ0Esd0VBQUE7RUFDQSxzRUFBQTtFQUNBLG9FQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ1pKOztBRGVBO0VBQ0ksNEJBQUE7QUNaSjs7QURlQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNaSjs7QURlQTtFQUNJLDJCQUFBO0FDWko7O0FEZUE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUNaSjs7QURlQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNaSjs7QURnQkE7RUFDQTtJQUNJLGNBQUE7RUNiRjs7RURlRjtJQUNJLGFBQUE7RUNaRjs7RURnQkU7SUFDSSxxQkFBQTtFQ2JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZDNkOGRjO1xyXG5cclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzJFNEM5OSwgIzIzMzc3MSk7ICAgICAgICAgICAgICAgIFxyXG59XHJcblxyXG4ub3V0ZXJjYXJke1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2QzZDhkYztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXJjYXJkbW9iaWxle1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbm5lcmNhcmR7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywjMkU0Qzk5LCAjMjMzNzcxKTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAuY2FyZC1Db250ZW50e1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbm5lcmNhcmRtb2JpbGV7XHJcbiAgICBoZWlnaHQ6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5jYXJkLUNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2lnbnVwQnRuRGl2e1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4uc2lnbnVwQnRue1xyXG4gICAgLS1jb2xvcjojMDBhZWVmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcblxyXG4uY2FyZFRpdGxlXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogIzAwYWVlZjsgXHJcbiAgICBmb250LXNpemU6IDMycHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcclxufVxyXG5cclxuLmVtYWlsTGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5lbWFpbEl0ZW1cclxue1xyXG4gICAgLS1taW4taGVpZ2h0OiAzN3B4IWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuXHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFzc3dvcmRJdGVtXHJcbntcclxuICAgIC0tbWluLWhlaWdodDogMzdweCFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcblxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG4ucGFzc3dvcmRJbnB1dHtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybXtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5pbnB1dGRpdntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbkJ0bntcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpOyBcclxuICAgIC0tY29sb3JcdDogI2ZmZmZmZjtcclxuICAgIC0tcmlwcGxlLWNvbG9yIDogIzlhOWE5YTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkIDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5sb2dpbkRpdntcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5mb3Jnb3RQYXNzQnRue1xyXG4gICAgY29sb3I6ICMwMGFlZWY7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5mb3Jnb3RQYXNzRGl2e1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4ucmVtZW1iZXJJdGVte1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzJlNGM5OSA7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMmU0Yzk5O1xyXG59XHJcblxyXG4uY2hlY2tib3hMYWJlbHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcclxuLm92ZXJmbG9zY3JvbGx7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ub3ZlcmZsb3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIsICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXHJcbiAgICBkaXNwbGF5OiBub25lOyBcclxufVxyXG5cclxuLmlubmVyY2FyZG1vYmlsZXtcclxuICAgIC5jYXJkLUNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2QzZDhkYztcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywjMkU0Qzk5LCAjMjMzNzcxKTtcbn1cblxuLm91dGVyY2FyZCB7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kOiAjZDNkOGRjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyY2FyZG1vYmlsZSB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG4uaW5uZXJjYXJkIHtcbiAgaGVpZ2h0OiA4NSU7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzJFNEM5OSwgIzIzMzc3MSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uaW5uZXJjYXJkIC5jYXJkLUNvbnRlbnQge1xuICB3aWR0aDogNDAlO1xufVxuXG4uaW5uZXJjYXJkbW9iaWxlIHtcbiAgaGVpZ2h0OiA5NSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufVxuLmlubmVyY2FyZG1vYmlsZSAuY2FyZC1Db250ZW50IHtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xufVxuXG4uc2lnbnVwQnRuRGl2IHtcbiAgcGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4uc2lnbnVwQnRuIHtcbiAgLS1jb2xvcjojMDBhZWVmO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG4uY2FyZFRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwYWVlZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcbn1cblxuLmVtYWlsTGFiZWwge1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5lbWFpbEl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDM3cHghaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xufVxuLmVtYWlsSXRlbSBpb24taW5wdXQge1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xufVxuXG4ucGFzc3dvcmRJdGVtIHtcbiAgLS1taW4taGVpZ2h0OiAzN3B4IWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbn1cbi5wYXNzd29yZEl0ZW0gaW9uLWlucHV0IHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4uaW5wdXRkaXYge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubG9naW5CdG4ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLS1yaXBwbGUtY29sb3I6ICM5YTlhOWE7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xufVxuXG4ubG9naW5EaXYge1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAxMHB4O1xufVxuXG4uZm9yZ290UGFzc0J0biB7XG4gIGNvbG9yOiAjMDBhZWVmO1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG59XG5cbi5mb3Jnb3RQYXNzRGl2IHtcbiAgcGFkZGluZzogMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ucmVtZW1iZXJJdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjMmU0Yzk5IDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzJlNGM5OTtcbn1cblxuLmNoZWNrYm94TGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAub3ZlcmZsb3Njcm9sbCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAub3ZlcmZsb3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIsICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmlubmVyY2FyZG1vYmlsZSAuY2FyZC1Db250ZW50IHtcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");










let AuthPage = class AuthPage {
    // @ViewChild('EmailInput',{static: false}) EmailInt;
    constructor(platform, route, iab, http, toastController, authenticationService, storage) {
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
        this.showLoad = true;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        if (this.loginForm.valid) {
            let username = this.loginForm.controls['Email'].value;
            let password = this.loginForm.controls['Password'].value;
            let isRemember = 'N';
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
                this.presentToast(err.error.message);
                console.log(err);
            });
        }
    }
    onSignupClick() {
        //this.route.navigateByUrl('/signup');
        this.iab.create(this.signupUrl, '_blank', 'location=no,toolbar=yes,zoom=no');
    }
    onForgotPassClick() {
        this.route.navigateByUrl('/forgot-password');
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
};
AuthPage.ctorParameters = () => [
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], AuthPage);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map