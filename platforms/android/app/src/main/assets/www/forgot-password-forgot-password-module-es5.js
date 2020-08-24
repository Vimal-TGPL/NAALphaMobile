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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");




var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageRoutingModule = /** @class */ (function () {
    function ForgotPasswordPageRoutingModule() {
    }
    ForgotPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ForgotPasswordPageRoutingModule);
    return ForgotPasswordPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");








var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
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
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#d3d8dc; }\n\n.card {\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n  height: 100vh;\n  margin: 0;\n  border-radius: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.outercard {\n  height: 90%;\n  width: 90%;\n  background: #d3d8dc;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px; }\n\n.outercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important; }\n\n.innercard {\n  height: 85%;\n  width: 85%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n  border-radius: 20px; }\n\n.innercard .card-Content {\n    width: 40%; }\n\n.innercardmobile {\n  height: 95% !important;\n  width: 95% !important; }\n\n.innercardmobile .card-Content {\n    width: 90% !important; }\n\n.scrolldiv {\n  overflow: hidden; }\n\n.cardTitle {\n  font-family: Open Sans Bold;\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px; }\n\n.form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 20px 0;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.flex_item {\n  padding: 10px; }\n\n.flex_item ion-item {\n    --min-height: 37px;\n    font-size: 13px;\n    --padding-start: 10px; }\n\n.flex_item ion-item ion-input {\n      --padding-bottom: 0;\n      --padding-start: 0;\n      --padding-end: 0;\n      --padding-top: 0; }\n\n.label {\n  color: white;\n  font-size: 13px;\n  font-family: Open Sans;\n  padding-left: 5px; }\n\n.input {\n  --background: white;\n  color: black; }\n\n.submitBtn {\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  --border-radius: 15px;\n  height: 50px;\n  font-size: 22px;\n  text-transform: inherit; }\n\n.loginBtn {\n  color: #00b9ff;\n  --color-activated: #00b9ff;\n  height: 33px;\n  text-transform: inherit;\n  font-family: Open Sans semiBold;\n  font-size: 13px; }\n\n.inner_flex {\n  padding: 10px 0px; }\n\n.inner_flex ion-button {\n    font-family: Open Sans semiBold;\n    font-size: 15px;\n    height: 36px; }\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto; }\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none; }\n  .innercardmobile .card-Content {\n    width: 40vW !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksc0RBQWE7RUFDYixhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsc0RBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFSdkI7SUFXUSxVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksc0JBQXNCO0VBQ3RCLHFCQUFxQixFQUFBOztBQUZ6QjtJQUtRLHFCQUFxQixFQUFBOztBQUk3QjtFQUNLLGdCQUFnQixFQUFBOztBQUdyQjtFQUVJLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFFSSxhQUFhLEVBQUE7O0FBRmpCO0lBS1Esa0JBQWE7SUFDYixlQUFlO0lBQ2YscUJBQWdCLEVBQUE7O0FBUHhCO01BVVksbUJBQWlCO01BQ2pCLGtCQUFnQjtNQUNoQixnQkFBYztNQUNkLGdCQUFjLEVBQUE7O0FBTzFCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksbUJBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksOERBQWE7RUFDYix3RUFBdUI7RUFDdkIsc0VBQXFCO0VBQ3JCLG9FQUFtQjtFQUNuQixnQkFBUztFQUNULHVCQUFnQjtFQUNoQiwwQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ssY0FBYztFQUNmLDBCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRHJCO0lBSVEsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBSXBCO0VBQ0k7SUFDSSxjQUFjLEVBQUE7RUFFbEI7SUFDSSxhQUFhLEVBQUE7RUFHakI7SUFDSSxzQkFBc0IsRUFBQSxFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZDNkOGRjO1xyXG5cclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzJFNEM5OSwgIzIzMzc3MSk7ICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgICAgICAgICAgXHJcbn1cclxuXHJcbi5vdXRlcmNhcmR7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNkOGRjO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlcmNhcmRtb2JpbGV7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlubmVyY2FyZHtcclxuICAgIGhlaWdodDogODUlO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMyRTRDOTksICMyMzM3NzEpOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIC5jYXJkLUNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmlubmVyY2FyZG1vYmlsZXtcclxuICAgIGhlaWdodDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmNhcmQtQ29udGVudHtcclxuICAgICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxkaXZ7ICAgIFxyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkVGl0bGVcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGNvbG9yOiAjMDBhZWVmOyBcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXhfaXRlbXtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuXHJcbiAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5sYWJlbHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc3VibWl0QnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7IFxyXG4gICAgLS1jb2xvclx0OiAjZmZmZmZmO1xyXG4gICAgLS1yaXBwbGUtY29sb3IgOiAjOWE5YTlhO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQgOiAjZmZmZmZmO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5sb2dpbkJ0bntcclxuICAgICBjb2xvcjogIzAwYjlmZjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMDBiOWZmO1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uaW5uZXJfZmxleHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG5cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBzZW1pQm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XHJcbiAgICAub3ZlcmZsb3Njcm9sbHtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC5vdmVyZmxvc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciwgKjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgIH1cclxuXHJcbiAgICAuaW5uZXJjYXJkbW9iaWxlIC5jYXJkLUNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDQwdlcgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(platform, route, userServices, toastController) {
        var _this = this;
        this.platform = platform;
        this.route = route;
        this.userServices = userServices;
        this.toastController = toastController;
        this.showLoad = false;
        this.email = false;
        this.hasError = function (controlName, errorName) {
            return _this.forgotPass.controls[controlName].hasError(errorName);
        };
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
        if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
        }
        this.forgotPass = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
        });
    };
    ForgotPasswordPage.prototype.onemialTextInput = function () {
        this.email = true;
    };
    ForgotPasswordPage.prototype.OnSubmitClick = function () {
        var _this = this;
        this.showLoad = true;
        var data = {
            LastName: '',
            Email: this.forgotPass.controls['Email'].value,
        };
        this.userServices.forgotPassword(data).subscribe(function (data) {
            _this.forgotPass.reset();
            _this.showLoad = false;
            _this.route.navigate(['/thankyou'], { queryParams: { resetPassword: 'successfullyreset' } });
            return false;
        }, function (err) {
            _this.showLoad = false;
            console.log(err);
            _this.presentToast(err.error.message);
        });
        console.log(data);
    };
    ForgotPasswordPage.prototype.OnLoginClick = function () {
        this.route.navigateByUrl('/auth');
    };
    ForgotPasswordPage.prototype.presentToast = function (msg) {
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
    ForgotPasswordPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
    ]; };
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map