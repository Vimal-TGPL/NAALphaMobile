(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content forceOverscroll = false>\r\n  <div class=\"outerdiv\">\r\n    \r\n    <form [formGroup]=\"forgotPass\">\r\n      <ion-text>\r\n        <h1>Forgot Password</h1>\r\n      </ion-text>\r\n      <div>\r\n        <ion-label class=\"label\">Email<ion-text color=\"danger\"> *</ion-text>\r\n        </ion-label>\r\n        <ion-item lines=\"none\" class=\"input\" lines=\"none\">\r\n            <ion-input autofocus=\"true\" inputmode=\"email\" (ionInput)=\"onemialTextInput()\" enterkeyhint=\"Submit\" placeholder=\"Email Address\" formControlName=\"Email\" (ionInput)=\"onemialTextInput()\">\r\n            </ion-input>\r\n        </ion-item>\r\n        <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'required') && email\">An email address is required</div>\r\n        <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'email') && email\">Please enter a valid email address</div>\r\n      </div>\r\n      <ion-button class=\"submitBtn\" size=\"medium\" expand=\"block\" (click)=\"OnSubmitClick()\" [disabled]=\"!forgotPass.valid\">\r\n        <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad?'Submitting...':'Submit'}}\r\n      </ion-button>\r\n      <ion-button class=\"loginBtn\" fill=\"clear\" size=\"medium\" expand=\"block\" (click)=\"OnLoginClick()\">\r\n        Login\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n  <!-- <div>\r\n    <form [formGroup]=\"forgotPass\">\r\n        <ion-card class=\"innercard\" [ngClass]=\"{'innercardmobile': mobile}\">\r\n      <ion-card-header style=\"padding: 0px; background: none;\">\r\n        <ion-card-title class=\"cardTitle\">Forgot Password</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"overfloscroll card-Content\" style=\"padding: 0px;\">\r\n        <div class=\"form\">\r\n            <div class=\"flex_item\">\r\n              <ion-label class=\"label\">Email<ion-text color=\"danger\"> *</ion-text>\r\n              </ion-label>\r\n              <ion-item lines=\"none\" class=\"input\">\r\n                  <ion-input autofocus=\"true\" inputmode=\"email\" enterkeyhint=\"Submit\" placeholder=\"Email Address\" formControlName=\"Email\" (ionInput)=\"onemialTextInput()\">\r\n                  </ion-input>\r\n              </ion-item>\r\n              <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'required') && email\">Email is required</div>\r\n          </div>\r\n          <div class=\"flex_item\">\r\n          <div class=\"inner_flex\">\r\n            <ion-button class=\"submitBtn\" size=\"medium\" expand=\"block\" (click)=\"OnSubmitClick()\" [disabled]=\"!forgotPass.valid\">\r\n              <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad?'Submitting...':'Submit'}}\r\n            </ion-button>\r\n        </div>\r\n        <div>\r\n          <ion-button class=\"loginBtn\" fill=\"clear\" size=\"medium\" expand=\"block\" (click)=\"OnLoginClick()\">\r\n              Login\r\n          </ion-button>\r\n      </div>\r\n    </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </form>\r\n</div> -->\r\n</ion-content>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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

module.exports = "ion-content {\n  --background: #274b9e; }\n  ion-content .outerdiv {\n    height: 100%;\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-content .outerdiv ion-text h1 {\n      color: #00b9ff;\n      font-size: 35px;\n      font-family: Open Sans Bold;\n      text-align: center;\n      margin-top: 0;\n      margin-bottom: 30px; }\n  ion-content .outerdiv ion-label {\n      color: white;\n      font-size: 13px;\n      font-family: Open Sans;\n      padding-left: 5px; }\n  ion-content .outerdiv ion-item {\n      --min-height: 37px;\n      font-size: 13px;\n      --padding-start: 10px; }\n  ion-content .outerdiv ion-item ion-input {\n        --padding-bottom: 0;\n        --padding-start: 0;\n        --padding-end: 0;\n        --padding-top: 0; }\n  ion-content .outerdiv div {\n      margin-bottom: 50px; }\n  ion-content .outerdiv .submitBtn {\n      --background: #00b9ff;\n      --background-activated: #00b9ff;\n      --background-focused: #00b9ff;\n      --background-hover: #00b9ff;\n      --color: #ffffff;\n      --ripple-color: #9a9a9a;\n      --color-activated: #ffffff;\n      --border-radius: 25px;\n      height: 40px;\n      font-size: 20px;\n      text-transform: inherit;\n      margin-bottom: 15px; }\n  ion-content .outerdiv .loginBtn {\n      color: #00b9ff;\n      --color-activated: #00b9ff;\n      height: 33px;\n      text-transform: inherit;\n      font-family: Open Sans semiBold;\n      font-size: 13px; }\n  ion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width:0; }\n  form {\n  width: 80%; }\n  .input {\n  --background: white;\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUJBQWEsRUFBQTtFQUZqQjtJQUtRLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFWM0I7TUFjZ0IsY0FBZTtNQUNmLGVBQWU7TUFDZiwyQkFBMkI7TUFDM0Isa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtFQW5CbkM7TUF3QlksWUFBWTtNQUNaLGVBQWU7TUFDZixzQkFBc0I7TUFDdEIsaUJBQWlCLEVBQUE7RUEzQjdCO01BK0JvQixrQkFBYTtNQUNiLGVBQWU7TUFDZixxQkFBZ0IsRUFBQTtFQWpDcEM7UUFvQ3dCLG1CQUFpQjtRQUNqQixrQkFBZ0I7UUFDaEIsZ0JBQWM7UUFDZCxnQkFBYyxFQUFBO0VBdkN0QztNQTZDWSxtQkFBbUIsRUFBQTtFQTdDL0I7TUFpRFkscUJBQWE7TUFDYiwrQkFBdUI7TUFDdkIsNkJBQXFCO01BQ3JCLDJCQUFtQjtNQUNuQixnQkFBUTtNQUNSLHVCQUFlO01BQ2YsMEJBQWtCO01BQ2xCLHFCQUFnQjtNQUNoQixZQUFZO01BQ1osZUFBZTtNQUNmLHVCQUF1QjtNQUN2QixtQkFBbUIsRUFBQTtFQTVEL0I7TUFnRVksY0FBYztNQUNkLDBCQUFrQjtNQUNsQixZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLCtCQUErQjtNQUMvQixlQUFlLEVBQUE7RUFNM0I7RUFDSSxxQkFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZSxFQUFBO0VBR25CO0VBQ0ksVUFBVSxFQUFBO0VBK0VkO0VBQ0ksbUJBQWE7RUFDYixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcclxuXHJcbiAgICAub3V0ZXJkaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBpb24tdGV4dHtcclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogICMwMGI5ZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3VibWl0QnRue1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMDBiOWZmO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiAjOWE5YTlhO1xyXG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW5CdG57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDBiOWZmO1xyXG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBzZW1pQm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLS1ib3JkZXItd2lkdGg6MDtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLy8gLmlubmVyY2FyZHtcclxuLy8gICAgIGhlaWdodDogODUlO1xyXG4vLyAgICAgd2lkdGg6IDg1JTtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllOyAgIFxyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgXHJcblxyXG4vLyAgICAgLmNhcmQtQ29udGVudHtcclxuLy8gICAgICAgICB3aWR0aDogNDAlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuaW5uZXJjYXJkbW9iaWxle1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAgICAgLmNhcmQtQ29udGVudHtcclxuLy8gICAgICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC5zY3JvbGxkaXZ7ICAgIFxyXG4vLyAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vIH1cclxuXHJcbi8vIC5jYXJkVGl0bGVcclxuLy8ge1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuLy8gICAgIGNvbG9yOiAjMDBhZWVmOyBcclxuLy8gICAgIGZvbnQtc2l6ZTogMzJweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5mb3Jte1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmZsZXhfaXRlbXtcclxuLy8gICAgIC8vIG1hcmdpbi10b3A6IDIlO1xyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbi8vICAgICBpb24taXRlbXtcclxuLy8gICAgICAgICAtLW1pbi1oZWlnaHQ6IDM3cHg7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuXHJcbi8vICAgICAgICAgaW9uLWlucHV0e1xyXG4vLyAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4vLyAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbi8vICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbi8vICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG4gICAgXHJcbi8vIH1cclxuXHJcbi8vIC5sYWJlbHtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuLy8gICAgIC8vIG1hcmdpbi1ib3R0b206IDIlO1xyXG4vLyB9XHJcblxyXG4uaW5wdXR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vLyAuc3VibWl0QnRue1xyXG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4OyBmb250LXNpemU6IDIycHg7IGhlaWdodDogNTBweDsgXHJcbi8vICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcclxuLy8gICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogICMwMGI5ZmY7XHJcbi8vICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAgIzAwYjlmZjtcclxuLy8gICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDBiOWZmO1xyXG4vLyAgICAgLS1jb2xvclx0OiAjZmZmZmZmO1xyXG4vLyAgICAgLS1yaXBwbGUtY29sb3IgOiAjOWE5YTlhO1xyXG4vLyAgICAgLS1jb2xvci1hY3RpdmF0ZWQgOiAjZmZmZmZmO1xyXG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4vLyAgICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbi8vIH1cclxuXHJcbi8vIC5sb2dpbkJ0bntcclxuLy8gICAgICBjb2xvcjogIzAwYjlmZjtcclxuLy8gICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMDBiOWZmO1xyXG4vLyAgICAgaGVpZ2h0OiAzM3B4O1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbi8vICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xyXG4vLyAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyB9XHJcblxyXG4vLyAuaW5uZXJfZmxleHtcclxuLy8gICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG5cclxuLy8gICAgIGlvbi1idXR0b257XHJcbi8vICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBzZW1pQm9sZDtcclxuLy8gICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XHJcbi8vICAgICAub3ZlcmZsb3Njcm9sbHtcclxuLy8gICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuLy8gICAgIH1cclxuLy8gICAgIC5vdmVyZmxvc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciwgKjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcclxuLy8gICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuaW5uZXJjYXJkbW9iaWxlIC5jYXJkLUNvbnRlbnR7XHJcbi8vICAgICAgICAgd2lkdGg6IDQwdlcgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLnRhYl9iYWNrZ3JvdW5ke1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvVG9vbF9CRy5zdmcnKSAhaW1wb3J0YW50O1xyXG4vLyB9Il19 */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







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
            // console.log(err);
            this.presentToast(err.error.message);
        });
        // console.log(data);
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