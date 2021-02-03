function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChangePasswordChangePasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content forceOverscroll = false>\n<div class=\"outerDiv\">\n  <form [formGroup]=\"changePasswordForm\">\n      \n        <ion-text>\n          <h1 class=\"cardTitle\">Change Password</h1>\n        </ion-text>\n      <div class=\"form\">\n        <div class=\"inputdiv\">\n          <ion-label class=\"PasswordLabel\">New Password<ion-text color=\"danger\"> *</ion-text>\n          </ion-label>\n          <ion-item class=\"PasswordItem\" lines=\"none\">\n            <ion-input autofocus=\"true\" type=\"text\" (ionInput)=\"onPwdTextInput()\" placeholder=\"Enter new password\" formControlName=\"Password\" type=\"password\" ></ion-input>\n            <ion-icon name=\"checkmark-circle\" *ngIf=\"!hasError('Password', 'required') && pwd && !hasError('Password','minlength') && !hasError('Password','maxlength')\"></ion-icon>\n          </ion-item>\n          <div style=\"color:white; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\">(Password must contain at least min of 8 characters)</div>\n          <div style=\"color:red; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\" *ngIf=\"hasError('Password', 'required') && pwd\">Password is required</div>\n          <div style=\"color:red; padding-top: 0.2rem; font-size: 10px; font-family: Open Sans Regular;\" *ngIf=\"hasError('Password', 'maxlength') && pwd\">You have more than 50 characters</div>\n        </div>\n        <div class=\"inputdiv\">\n            <ion-label class=\"ConfirmPasswordLabel\">Confirm Password<ion-text color=\"danger\"> *</ion-text>\n            </ion-label>\n            <ion-item class=\"ConfirmPasswordItem\" lines=\"none\">\n              <ion-input type=\"text\" (ionChange)=\"onCPwdTextInput()\" enterkeyhint=\"Submit\" (keyup.enter)='onSubmitClick()' placeholder=\"Confirm new password\" formControlName=\"confirmPassword\" type=\"password\"></ion-input>\n            </ion-item>\n            \n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 12px;\" *ngIf=\"hasError('confirmPassword', 'required') && Cpwd\">Confirm Password is required</div>\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 12px;\" *ngIf=\"flag\">Password Not Match</div>\n        </div>\n        <div class=\"submitDiv\">\n            <ion-button class=\"submitBtn\" [disabled] =\"!changePasswordForm.valid\" size=\"medium\" expand=\"block\" (click)=\"onSubmitClick()\">\n              <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad ? 'Submitting...': 'Submit'}}\n            </ion-button>\n         </div>\n        <div class=\"returnDiv\">\n          <ion-button class=\"returnBtn\" fill=\"clear\" size=\"medium\" expand=\"block\" (click)=\"onReturnClick()\">\n            Return H-Factor System\n          </ion-button>\n        </div>\n      </div>\n  </form>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/change-password/change-password-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/change-password/change-password-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ChangePasswordPageRoutingModule */

  /***/
  function srcAppChangePasswordChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function () {
      return ChangePasswordPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./change-password.page */
    "./src/app/change-password/change-password.page.ts");

    var routes = [{
      path: '',
      component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }];

    var ChangePasswordPageRoutingModule = function ChangePasswordPageRoutingModule() {
      _classCallCheck(this, ChangePasswordPageRoutingModule);
    };

    ChangePasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChangePasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/change-password/change-password.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/change-password/change-password.module.ts ***!
    \***********************************************************/

  /*! exports provided: ChangePasswordPageModule */

  /***/
  function srcAppChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function () {
      return ChangePasswordPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./change-password-routing.module */
    "./src/app/change-password/change-password-routing.module.ts");
    /* harmony import */


    var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./change-password.page */
    "./src/app/change-password/change-password.page.ts");

    var ChangePasswordPageModule = function ChangePasswordPageModule() {
      _classCallCheck(this, ChangePasswordPageModule);
    };

    ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })], ChangePasswordPageModule);
    /***/
  },

  /***/
  "./src/app/change-password/change-password.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/change-password/change-password.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChangePasswordChangePasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width: 0 0 0; }\n\nion-content {\n  --background: #274b9e; }\n\nion-content .outerDiv {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    justify-content: center;\n    align-items: center; }\n\nion-content .outerDiv form {\n      width: 80%; }\n\n.cardTitle {\n  font-family: Open Sans Bold;\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px; }\n\n.form {\n  padding-top: 5px; }\n\n.inputdiv {\n  padding: 10px;\n  padding-top: 2px; }\n\n.PasswordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px; }\n\n.PasswordItem ion-input {\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-end: 5px;\n    --padding-start: 5px; }\n\n.PasswordItem ion-icon {\n    color: #3c763d; }\n\n.PasswordLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px; }\n\n.ConfirmPasswordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px; }\n\n.ConfirmPasswordItem ion-input {\n    --padding-top: 0;\n    --padding-bottom: 0;\n    --padding-end: 5px;\n    --padding-start: 5px; }\n\n.ConfirmPasswordLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px; }\n\n.submitDiv {\n  padding: 15px 10px 0px 10px; }\n\n.submitBtn {\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 15px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit; }\n\n.returnDiv {\n  padding: 15px 10px 10px 10px; }\n\n.returnBtn {\n  color: #00aeef;\n  height: 16px;\n  font-family: Open Sans SemiBold;\n  font-size: 13px;\n  text-transform: inherit; }\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto; }\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none; }\n  .innercardmobile .card-Content {\n    width: 50% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0VBQ2IsYUFBYTtFQUNiLHFCQUFlLEVBQUE7O0FBR25CO0VBRUkscUJBQWEsRUFBQTs7QUFGakI7SUFLUSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7O0FBVDNCO01BWVksVUFBVSxFQUFBOztBQUt0QjtFQUVJLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdwQjtFQUVJLDRCQUFhO0VBQ2IsbUJBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQWdCLEVBQUE7O0FBTHBCO0lBUVEsZ0JBQWM7SUFDZCxtQkFBaUI7SUFDakIsa0JBQWM7SUFDZCxvQkFBZ0IsRUFBQTs7QUFYeEI7SUFlUSxjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUVJLDRCQUFhO0VBQ2IsbUJBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQWdCLEVBQUE7O0FBTHBCO0lBUVEsZ0JBQWM7SUFDZCxtQkFBaUI7SUFDakIsa0JBQWM7SUFDZCxvQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksOERBQWE7RUFDYix3RUFBdUI7RUFDdkIsc0VBQXFCO0VBQ3JCLG9FQUFtQjtFQUNuQixnQkFBUztFQUNULHVCQUFnQjtFQUNoQiwwQkFBbUI7RUFDbkIseUJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFCQUFnQjtFQUNoQixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0k7SUFDSSxjQUFjLEVBQUE7RUFFbEI7SUFDSSxhQUFhLEVBQUE7RUFHakI7SUFFUSxxQkFBcUIsRUFBQSxFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi1jb250ZW50e1xuXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllOyAgICAgXG5cbiAgICAub3V0ZXJEaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGZvcm17XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZFRpdGxlXG57XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgY29sb3I6ICMwMGFlZWY7IFxuICAgIGZvbnQtc2l6ZTogMzJweDsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgXG59XG5cbi5mb3Jte1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5pbnB1dGRpdntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5QYXNzd29yZEl0ZW1cbntcbiAgICAtLW1pbi1oZWlnaHQ6IDM3cHghaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuXG4gICAgaW9uLWlucHV0e1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAgICAgICB9XG5cbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6ICMzYzc2M2Q7XG4gICAgfVxufVxuXG4uUGFzc3dvcmRMYWJlbHtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5Db25maXJtUGFzc3dvcmRJdGVtXG57XG4gICAgLS1taW4taGVpZ2h0OiAzN3B4IWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcblxuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAgICAgfVxufVxuXG4uQ29uZmlybVBhc3N3b3JkTGFiZWx7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc3VibWl0RGl2e1xuICAgIHBhZGRpbmc6IDE1cHggMTBweCAwcHggMTBweDtcbn1cblxuLnN1Ym1pdEJ0bntcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTsgXG4gICAgLS1jb2xvclx0OiAjZmZmZmZmO1xuICAgIC0tcmlwcGxlLWNvbG9yIDogIzlhOWE5YTtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZCA6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogMzdweDtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuLnJldHVybkRpdntcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ucmV0dXJuQnRue1xuICAgIGNvbG9yOiAjMDBhZWVmO1xuICAgIGhlaWdodDogMTZweDtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkge1xuICAgIC5vdmVyZmxvc2Nyb2xse1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gICAgLm92ZXJmbG9zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLCAqOjotd2Via2l0LXNjcm9sbGJhciB7IFxuICAgICAgICBkaXNwbGF5OiBub25lOyBcbiAgICB9XG4gICAgXG4gICAgLmlubmVyY2FyZG1vYmlsZXtcbiAgICAgICAgLmNhcmQtQ29udGVudHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/change-password/change-password.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/change-password/change-password.page.ts ***!
    \*********************************************************/

  /*! exports provided: ChangePasswordPage, passwordMatchValidator */

  /***/
  function srcAppChangePasswordChangePasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function () {
      return ChangePasswordPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "passwordMatchValidator", function () {
      return passwordMatchValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ChangePasswordPage = /*#__PURE__*/function () {
      function ChangePasswordPage(platform, menuController, formBuilder, userServices, toastController, route) {
        var _this = this;

        _classCallCheck(this, ChangePasswordPage);

        this.platform = platform;
        this.menuController = menuController;
        this.formBuilder = formBuilder;
        this.userServices = userServices;
        this.toastController = toastController;
        this.route = route;
        this.showLoad = false;
        this.customErrors = {
          required: 'Please accept the terms'
        };
        this.pwd = false;
        this.Cpwd = false;

        this.hasError = function (controlName, errorName) {
          return _this.changePasswordForm.controls[controlName].hasError(errorName);
        };

        this._backSub = this.platform.backButton.subscribeWithPriority(0, function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.onReturnClick();

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        });
      }

      _createClass(ChangePasswordPage, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._backSub.unsubscribe();
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.menuController.enable(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
          } else {
            this.mobile = true;
          }

          this.changePasswordForm = this.formBuilder.group({
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
          }, {
            validator: passwordMatchValidator
          });
          this.menuController.enable(false);
        }
      }, {
        key: "onSubmitClick",
        value: function onSubmitClick() {
          var _this2 = this;

          this.showLoad = true;

          if (this.changePasswordForm.valid) {
            var Password = this.changePasswordForm.controls["Password"].value;
            this.userServices.UpdatePass(Password).subscribe(function (data) {
              _this2.showLoad = false;

              _this2.presentToast("New Password changed successfully");

              _this2.changePasswordForm.reset();

              setTimeout(function () {
                _this2.route.navigateByUrl('/menu/menu/home');
              });
            });
          }
        }
      }, {
        key: "onReturnClick",
        value: function onReturnClick() {
          this.route.navigateByUrl('/menu/menu/home');
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 3000,
                      cssClass: 'center'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onPwdTextInput",
        value: function onPwdTextInput() {
          this.pwd = true;
        }
      }, {
        key: "onCPwdTextInput",
        value: function onCPwdTextInput() {
          this.Cpwd = true;

          if (this.changePasswordForm.controls["Password"].value.toString() === this.changePasswordForm.controls["confirmPassword"].value.toString()) {
            this.flag = false;
          } else {
            this.flag = true;
          }
        }
      }]);

      return ChangePasswordPage;
    }();

    ChangePasswordPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.page.scss */
      "./src/app/change-password/change-password.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ChangePasswordPage);

    var passwordMatchValidator = function passwordMatchValidator(formGroup) {
      if (formGroup.get('Password').value === formGroup.get('confirmPassword').value) return null;else return {
        passwordMismatch: true
      };
    };
    /***/

  }
}]);
//# sourceMappingURL=1-es5.js.map