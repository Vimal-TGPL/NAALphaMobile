(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content forceOverscroll = false>\r\n  <div style=\"display: block;\">\r\n    <form [formGroup]=\"forgotPass\">\r\n    <ion-card class=\"card\">\r\n      <ion-card class=\"outercard\" [ngClass]=\"{'outercardmobile': mobile}\">\r\n        <ion-card class=\"innercard\" [ngClass]=\"{'innercardmobile': mobile}\">\r\n          \r\n        \r\n      <ion-card-header style=\"padding: 0px; background: none;\">\r\n        <ion-card-title class=\"cardTitle\">Forgot Password</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"overfloscroll card-Content\" style=\"padding: 0px;\">\r\n        <div class=\"form\">\r\n            <!-- <div class=\"flex_item\">\r\n                <ion-label class=\"label\">Last Name<ion-text color=\"danger\"> *</ion-text>\r\n                </ion-label>\r\n                <ion-item lines=\"none\" class=\"input\">\r\n                    <ion-input type=\"text\" placeholder=\"Last Name\" formControlName=\"LastName\">\r\n                    </ion-input>\r\n                </ion-item>\r\n            </div> -->\r\n            <div class=\"flex_item\">\r\n              <ion-label class=\"label\">Email<ion-text color=\"danger\"> *</ion-text>\r\n              </ion-label>\r\n              <ion-item lines=\"none\" class=\"input\">\r\n                  <ion-input autofocus=\"true\" inputmode=\"email\" enterkeyhint=\"Submit\" placeholder=\"Email Address\" formControlName=\"Email\" (ionInput)=\"onemialTextInput()\">\r\n                  </ion-input>\r\n              </ion-item>\r\n              <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'required') && email\">Email is required</div>\r\n          </div>\r\n          <div class=\"flex_item\">\r\n          <div class=\"inner_flex\">\r\n            <ion-button class=\"submitBtn\" size=\"medium\" expand=\"block\" (click)=\"OnSubmitClick()\" [disabled]=\"!forgotPass.valid\">\r\n              <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad?'Submitting...':'Submit'}}\r\n            </ion-button>\r\n        </div>\r\n        <div>\r\n          <ion-button class=\"loginBtn\" fill=\"clear\" size=\"medium\" expand=\"block\" (click)=\"OnLoginClick()\">\r\n              Login\r\n          </ion-button>\r\n      </div>\r\n    </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-card>\r\n    </ion-card>\r\n  </form>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");








let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#d3d8dc;\n}\n\n.card {\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n  height: 100vh;\n  margin: 0;\n  border-radius: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.outercard {\n  height: 90%;\n  width: 90%;\n  background: #d3d8dc;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px;\n}\n\n.outercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important;\n}\n\n.innercard {\n  height: 85%;\n  width: 85%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n  border-radius: 20px;\n}\n\n.innercard .card-Content {\n  width: 40%;\n}\n\n.innercardmobile {\n  height: 95% !important;\n  width: 95% !important;\n}\n\n.innercardmobile .card-Content {\n  width: 90% !important;\n}\n\n.scrolldiv {\n  overflow: hidden;\n}\n\n.cardTitle {\n  font-family: Open Sans Bold;\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px;\n}\n\n.form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 20px 0;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.flex_item {\n  padding: 10px;\n}\n\n.flex_item ion-item {\n  --min-height: 37px;\n  font-size: 13px;\n  --padding-start: 10px;\n}\n\n.flex_item ion-item ion-input {\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n}\n\n.label {\n  color: white;\n  font-size: 13px;\n  font-family: Open Sans;\n  padding-left: 5px;\n}\n\n.input {\n  --background: white;\n  color: black;\n}\n\n.submitBtn {\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  --border-radius: 15px;\n  height: 50px;\n  font-size: 22px;\n  text-transform: inherit;\n}\n\n.loginBtn {\n  color: #00b9ff;\n  --color-activated: #00b9ff;\n  height: 33px;\n  text-transform: inherit;\n  font-family: Open Sans semiBold;\n  font-size: 13px;\n}\n\n.inner_flex {\n  padding: 10px 0px;\n}\n\n.inner_flex ion-button {\n  font-family: Open Sans semiBold;\n  font-size: 15px;\n  height: 36px;\n}\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto;\n  }\n\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none;\n  }\n\n  .innercardmobile .card-Content {\n    width: 40vW !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FDQUo7O0FESUE7RUFDSSxzREFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0RBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdJO0VBQ0ksVUFBQTtBQ0RSOztBREtBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBRElJO0VBQ0kscUJBQUE7QUNGUjs7QURNQTtFQUNLLGdCQUFBO0FDSEw7O0FETUE7RUFFSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDSko7O0FET0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0pKOztBRE9BO0VBRUksYUFBQTtBQ0xKOztBRE9JO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNMUjs7QURPUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTFo7O0FEWUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNUSjs7QURhQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ1ZKOztBRGFBO0VBQ0ksOERBQUE7RUFDQSx3RUFBQTtFQUNBLHNFQUFBO0VBQ0Esb0VBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNWSjs7QURhQTtFQUNLLGNBQUE7RUFDRCwwQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ1ZKOztBRGFBO0VBQ0ksaUJBQUE7QUNWSjs7QURZSTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNWUjs7QURjQTtFQUNJO0lBQ0ksY0FBQTtFQ1hOOztFRGFFO0lBQ0ksYUFBQTtFQ1ZOOztFRGFFO0lBQ0ksc0JBQUE7RUNWTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkM2Q4ZGM7XHJcblxyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywjMkU0Qzk5LCAjMjMzNzcxKTsgIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgICAgICAgICAgICBcclxufVxyXG5cclxuLm91dGVyY2FyZHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkM2Q4ZGM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyY2FyZG1vYmlsZXtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5uZXJjYXJke1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzJFNEM5OSwgIzIzMzc3MSk7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgLmNhcmQtQ29udGVudHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5uZXJjYXJkbW9iaWxle1xyXG4gICAgaGVpZ2h0OiA5NSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuXHJcbiAgICAuY2FyZC1Db250ZW50e1xyXG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnNjcm9sbGRpdnsgICAgXHJcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmRUaXRsZVxyXG57XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgY29sb3I6ICMwMGFlZWY7IFxyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLmZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleF9pdGVte1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogMzdweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG5cclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmxhYmVse1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zdWJtaXRCdG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTsgXHJcbiAgICAtLWNvbG9yXHQ6ICNmZmZmZmY7XHJcbiAgICAtLXJpcHBsZS1jb2xvciA6ICM5YTlhOWE7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZCA6ICNmZmZmZmY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxufVxyXG5cclxuLmxvZ2luQnRue1xyXG4gICAgIGNvbG9yOiAjMDBiOWZmO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMGI5ZmY7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgc2VtaUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5pbm5lcl9mbGV4e1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcclxuICAgIC5vdmVyZmxvc2Nyb2xse1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm92ZXJmbG9zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLCAqOjotd2Via2l0LXNjcm9sbGJhciB7IFxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IFxyXG4gICAgfVxyXG5cclxuICAgIC5pbm5lcmNhcmRtb2JpbGUgLmNhcmQtQ29udGVudHtcclxuICAgICAgICB3aWR0aDogNDB2VyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkM2Q4ZGM7XG59XG5cbi5jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMyRTRDOTksICMyMzM3NzEpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3V0ZXJjYXJkIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6ICNkM2Q4ZGM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXJjYXJkbW9iaWxlIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbm5lcmNhcmQge1xuICBoZWlnaHQ6IDg1JTtcbiAgd2lkdGg6IDg1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywjMkU0Qzk5LCAjMjMzNzcxKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5pbm5lcmNhcmQgLmNhcmQtQ29udGVudCB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5pbm5lcmNhcmRtb2JpbGUge1xuICBoZWlnaHQ6IDk1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG59XG4uaW5uZXJjYXJkbW9iaWxlIC5jYXJkLUNvbnRlbnQge1xuICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGxkaXYge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FyZFRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDBhZWVmO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxleF9pdGVtIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5mbGV4X2l0ZW0gaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDM3cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuLmZsZXhfaXRlbSBpb24taXRlbSBpb24taW5wdXQge1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG59XG5cbi5sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3VibWl0QnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0tcmlwcGxlLWNvbG9yOiAjOWE5YTlhO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG59XG5cbi5sb2dpbkJ0biB7XG4gIGNvbG9yOiAjMDBiOWZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzAwYjlmZjtcbiAgaGVpZ2h0OiAzM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBzZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaW5uZXJfZmxleCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLmlubmVyX2ZsZXggaW9uLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgc2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAub3ZlcmZsb3Njcm9sbCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAub3ZlcmZsb3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIsICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmlubmVyY2FyZG1vYmlsZSAuY2FyZC1Db250ZW50IHtcbiAgICB3aWR0aDogNDB2VyAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(platform, route, userServices, toastController) {
        this.platform = platform;
        this.route = route;
        this.userServices = userServices;
        this.toastController = toastController;
        this.showLoad = false;
        this.email = false;
        this.hasError = (controlName, errorName) => {
            return this.forgotPass.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
        }
        this.forgotPass = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
        });
    }
    onemialTextInput() {
        this.email = true;
    }
    OnSubmitClick() {
        this.showLoad = true;
        let data = {
            LastName: '',
            Email: this.forgotPass.controls['Email'].value,
        };
        this.userServices.forgotPassword(data).subscribe(data => {
            this.forgotPass.reset();
            this.showLoad = false;
            this.route.navigate(['/thankyou'], { queryParams: { resetPassword: 'successfullyreset' } });
            return false;
        }, err => {
            this.showLoad = false;
            console.log(err);
            this.presentToast(err.error.message);
        });
        console.log(data);
    }
    OnLoginClick() {
        this.route.navigateByUrl('/auth');
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
ForgotPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.page.html"),
        styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es2015.js.map