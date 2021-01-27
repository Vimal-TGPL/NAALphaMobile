function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgotPasswordForgotPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content forceOverscroll = false>\n  <div class=\"outerdiv\">\n    \n    <form [formGroup]=\"forgotPass\">\n      <ion-text>\n        <h1>Forgot Password</h1>\n      </ion-text>\n      <div>\n        <ion-label class=\"label\">Email<ion-text color=\"danger\"> *</ion-text>\n        </ion-label>\n        <ion-item lines=\"none\" class=\"input\" lines=\"none\">\n            <ion-input autofocus=\"true\" inputmode=\"email\" (ionInput)=\"onemialTextInput()\" enterkeyhint=\"Submit\" placeholder=\"Email Address\" formControlName=\"Email\" (ionInput)=\"onemialTextInput()\">\n            </ion-input>\n        </ion-item>\n        <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'required') && email\">An email address is required</div>\n        <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'email') && email\">Please enter a valid email address</div>\n      </div>\n      <ion-button class=\"submitBtn\" size=\"medium\" expand=\"block\" (click)=\"OnSubmitClick()\" [disabled]=\"!forgotPass.valid\">\n        <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad?'Submitting...':'Submit'}}\n      </ion-button>\n      <ion-button class=\"loginBtn\" fill=\"clear\" size=\"medium\" expand=\"block\" (click)=\"OnLoginClick()\">\n        Login\n      </ion-button>\n    </form>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/forgot-password/forgot-password-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ForgotPasswordPageRoutingModule */

  /***/
  function srcAppForgotPasswordForgotPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () {
      return ForgotPasswordPageRoutingModule;
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


    var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot-password.page */
    "./src/app/forgot-password/forgot-password.page.ts");

    var routes = [{
      path: '',
      component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }];

    var ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
      _classCallCheck(this, ForgotPasswordPageRoutingModule);
    };

    ForgotPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotPasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/forgot-password/forgot-password.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.module.ts ***!
    \***********************************************************/

  /*! exports provided: ForgotPasswordPageModule */

  /***/
  function srcAppForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
      return ForgotPasswordPageModule;
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


    var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot-password-routing.module */
    "./src/app/forgot-password/forgot-password-routing.module.ts");
    /* harmony import */


    var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot-password.page */
    "./src/app/forgot-password/forgot-password.page.ts");

    var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
      _classCallCheck(this, ForgotPasswordPageModule);
    };

    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]],
      declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })], ForgotPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/forgot-password/forgot-password.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgotPasswordForgotPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #274b9e;\n}\nion-content .outerdiv {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-content .outerdiv ion-text h1 {\n  color: #00b9ff;\n  font-size: 35px;\n  font-family: Open Sans Bold;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 30px;\n}\nion-content .outerdiv ion-label {\n  color: white;\n  font-size: 13px;\n  font-family: Open Sans;\n  padding-left: 5px;\n}\nion-content .outerdiv ion-item {\n  --min-height: 37px;\n  font-size: 13px;\n  --padding-start: 10px;\n}\nion-content .outerdiv ion-item ion-input {\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n}\nion-content .outerdiv div {\n  margin-bottom: 50px;\n}\nion-content .outerdiv .submitBtn {\n  --background: #00b9ff;\n  --background-activated: #00b9ff;\n  --background-focused: #00b9ff;\n  --background-hover: #00b9ff;\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  --border-radius: 25px;\n  height: 40px;\n  font-size: 20px;\n  text-transform: inherit;\n  margin-bottom: 15px;\n}\nion-content .outerdiv .loginBtn {\n  color: #00b9ff;\n  --color-activated: #00b9ff;\n  height: 33px;\n  text-transform: inherit;\n  font-family: Open Sans semiBold;\n  font-size: 13px;\n}\nion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width:0;\n}\nform {\n  width: 80%;\n}\n.input {\n  --background: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxxQkFBQTtBQ0FKO0FERUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREdZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRGhCO0FES1E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNIWjtBRE1RO0VBQ1ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNKcEI7QURNb0I7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0p4QjtBRFNRO0VBQ0ksbUJBQUE7QUNQWjtBRFVRO0VBQ0kscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1JaO0FEV1E7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNUWjtBRGVBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNaSjtBRGVBO0VBQ0ksVUFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG5cbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG5cbiAgICAub3V0ZXJkaXZ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi10ZXh0e1xuICAgICAgICAgICAgaDF7XG4gICAgICAgICAgICAgICAgY29sb3I6ICAjMDBiOWZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJtaXRCdG57XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDBiOWZmO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMwMGI5ZmY7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMGI5ZmY7XG4gICAgICAgICAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgLS1yaXBwbGUtY29sb3I6ICM5YTlhOWE7XG4gICAgICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dpbkJ0bntcbiAgICAgICAgICAgIGNvbG9yOiAjMDBiOWZmO1xuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMGI5ZmY7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgc2VtaUJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAtLWJvcmRlci13aWR0aDowO1xufVxuXG5mb3Jte1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5pbnB1dHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcbn1cbmlvbi1jb250ZW50IC5vdXRlcmRpdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLm91dGVyZGl2IGlvbi10ZXh0IGgxIHtcbiAgY29sb3I6ICMwMGI5ZmY7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tY29udGVudCAub3V0ZXJkaXYgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuaW9uLWNvbnRlbnQgLm91dGVyZGl2IGlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiAzN3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5vdXRlcmRpdiBpb24taXRlbSBpb24taW5wdXQge1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG59XG5pb24tY29udGVudCAub3V0ZXJkaXYgZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbmlvbi1jb250ZW50IC5vdXRlcmRpdiAuc3VibWl0QnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDBiOWZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzAwYjlmZjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDBiOWZmO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAtLXJpcHBsZS1jb2xvcjogIzlhOWE5YTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLm91dGVyZGl2IC5sb2dpbkJ0biB7XG4gIGNvbG9yOiAjMDBiOWZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzAwYjlmZjtcbiAgaGVpZ2h0OiAzM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBzZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJvcmRlci13aWR0aDowO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/forgot-password/forgot-password.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.page.ts ***!
    \*********************************************************/

  /*! exports provided: ForgotPasswordPage */

  /***/
  function srcAppForgotPasswordForgotPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
      return ForgotPasswordPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ForgotPasswordPage = /*#__PURE__*/function () {
      function ForgotPasswordPage(platform, route, userServices, toastController) {
        var _this = this;

        _classCallCheck(this, ForgotPasswordPage);

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

      _createClass(ForgotPasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
          } else {
            this.mobile = true;
          }

          this.forgotPass = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
          });
        }
      }, {
        key: "onemialTextInput",
        value: function onemialTextInput() {
          this.email = true;
        }
      }, {
        key: "OnSubmitClick",
        value: function OnSubmitClick() {
          var _this2 = this;

          this.showLoad = true;
          var data = {
            LastName: '',
            Email: this.forgotPass.controls['Email'].value
          };
          this.userServices.forgotPassword(data).subscribe(function (data) {
            _this2.forgotPass.reset();

            _this2.showLoad = false;

            _this2.route.navigate(['/thankyou'], {
              queryParams: {
                resetPassword: 'successfullyreset'
              }
            });

            return false;
          }, function (err) {
            _this2.showLoad = false;

            _this2.presentToast(err.error.message);
          });
        }
      }, {
        key: "OnLoginClick",
        value: function OnLoginClick() {
          this.route.navigateByUrl('/auth');
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 3000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ForgotPasswordPage;
    }();

    ForgotPasswordPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }];
    };

    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.page.scss */
      "./src/app/forgot-password/forgot-password.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], ForgotPasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map