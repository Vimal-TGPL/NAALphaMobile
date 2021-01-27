function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"login-header ion-no-border\">\n  <ion-toolbar>\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\n  </ion-toolbar>\n</ion-header>\n<ion-content forceOverscroll=false>\n    <div class=\"outerDiv\">\n      <form [formGroup]=\"loginForm\">\n        \n        <ion-text>\n          <h1 class=\"cardTitle\">Login</h1>\n        </ion-text>\n        \n        <div class=\"form\">\n          <div class=\"inputdiv\">\n            <ion-label class=\"emailLabel\">Email<ion-text color=\"danger\"> *</ion-text>\n            </ion-label>\n            <ion-item class=\"emailItem\" lines=\"none\">\n              <ion-input autofocus=\"true\" inputmode=\"email\" (ionInput)=\"onemialTextInput()\" placeholder=\"Email Address\" formControlName=\"Email\" autocomplete=\"on\"></ion-input>\n            </ion-item>\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'required') && email\">An email address is required</div>\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'email') && email\">Please enter a valid email address</div>\n          </div>\n          <div class=\"inputdiv\">\n            <ion-label class=\"emailLabel\">Password<ion-text color=\"danger\"> *</ion-text>\n            </ion-label>\n            <ion-item class=\"passwordItem\" lines=\"none\">\n              <ion-input class=\"passwordInput\" (keyup.enter)='onLoginClick()'  (ionInput)=\"onPwdTextInput()\" type=\"password\" inputmode=\"text\" enterkeyhint=\"Login\" placeholder=\"Password\" formControlName=\"Password\">\n              </ion-input>\n            </ion-item>\n            <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Password', 'required') && pwd\">A password is required</div>\n          </div>\n          <div class=\"loginDiv\">\n            <ion-button class=\"loginBtn\" size=\"medium\" expand=\"block\" [disabled] =\"!loginForm.valid\" (click)=\"onLoginClick()\">\n              <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad ? 'Logging in...': 'Login'}}\n            </ion-button>\n          </div>\n        </div>\n        <div class=\"forgotPassDiv\">\n          <ion-button class=\"forgotPassBtn\" fill=\"clear\" expand=\"block\" (click)=\"onForgotPassClick()\">\n            Forgot Password?\n          </ion-button>\n        </div>\n        <div class=\"forgotPassDiv\">\n          <ion-button expand=\"block\" fill=\"clear\" class=\"forgotPassBtn\" (click)=\"onSignupClick()\">\n            Sign up\n          </ion-button>\n        </div>\n  </form>\n  </div>\n</ion-content>\n<div id=\"authLoader\" style=\"background: rgba(0,0,0,0.5);z-index: 99999; position: absolute; height: 100%; width: 100%; display: flex; justify-content: center; align-items: center;\">\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 30px;width: 30px !important;\">    \n</div>";
    /***/
  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthPageRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function () {
      return AuthPageRoutingModule;
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


    var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.page */
    "./src/app/auth/auth.page.ts");

    var routes = [{
      path: '',
      component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
    }];

    var AuthPageRoutingModule = function AuthPageRoutingModule() {
      _classCallCheck(this, AuthPageRoutingModule);
    };

    AuthPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthPageModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPageModule", function () {
      return AuthPageModule;
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


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.page */
    "./src/app/auth/auth.page.ts");

    var AuthPageModule = function AuthPageModule() {
      _classCallCheck(this, AuthPageModule);
    };

    AuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
    })], AuthPageModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.page.scss":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width:0;\n}\n\nion-content {\n  --background: #274b9e;\n}\n\nion-content .outerDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\nion-content .outerDiv form {\n  width: 80%;\n}\n\n.signupBtnDiv {\n  padding: 5px 10px 10px 10px;\n}\n\n.signupBtn {\n  --color:#00aeef;\n  text-transform: inherit;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.cardTitle {\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px;\n  font-family: Open Sans Bold;\n}\n\n.emailLabel {\n  font-family: Open Sans;\n  color: white;\n  padding-left: 5px;\n  font-size: 13px;\n}\n\n.emailItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px;\n}\n\n.emailItem ion-input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-end: 5px;\n  --padding-start: 5px;\n}\n\n.passwordItem {\n  --min-height: 37px!important;\n  --background: white;\n  font-size: 13px;\n  --padding-start: 5px;\n}\n\n.passwordItem ion-input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-end: 5px;\n  --padding-start: 5px;\n}\n\n.no-validation-line .item-inner {\n  box-shadow: none !important;\n}\n\n.form {\n  padding-top: 0px;\n}\n\n.inputdiv {\n  padding: 10px;\n}\n\n.loginBtn {\n  --border-radius: 15px;\n  font-size: 22px;\n  height: 50px;\n  --background: #00b9ff;\n  --background-activated: #00b9ff;\n  --background-focused: #00b9ff;\n  --background-hover: #00b9ff;\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 15px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit;\n}\n\n.loginDiv {\n  padding: 15px 10px 15px 10px;\n}\n\n.forgotPassBtn {\n  color: #00aeef;\n  height: 16px;\n  font-family: Open Sans SemiBold;\n  font-size: 13px;\n  text-transform: inherit;\n}\n\n.forgotPassDiv {\n  padding: 0px 10px 10px 10px;\n}\n\n.rememberItem {\n  --padding-start: 0%;\n  --background: #2e4c99 ;\n  --background-activated: #2e4c99;\n}\n\n.checkboxLabel {\n  color: white;\n  padding-left: 10px;\n  font-size: 14px;\n}\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto;\n  }\n\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none;\n  }\n\n  .innercardmobile .card-Content {\n    width: 45% !important;\n  }\n}\n\n.tab_background {\n  --background: url('Tool_BG.svg') !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9hdXRoL2F1dGgucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoL2F1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUVJLHFCQUFBO0FDQUo7O0FERUk7RUFDSSxhQUFBO0VBQ0osdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUk7RUFDSSxVQUFBO0FDQVI7O0FETUE7RUFDSSwyQkFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUNISjs7QURNQTtFQUVJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNKSjs7QURPQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE9BO0VBRUksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0xKOztBRE9JO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNMSjs7QURTQTtFQUVJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNQSjs7QURTSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDUFI7O0FEZUE7RUFDSSwyQkFBQTtBQ1pKOztBRGVBO0VBQ0ksZ0JBQUE7QUNaSjs7QURlQTtFQUNJLGFBQUE7QUNaSjs7QURlQTtFQUNJLHFCQUFBO0VBQXVCLGVBQUE7RUFBaUIsWUFBQTtFQUNoQyxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNSLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNWSjs7QURhQTtFQUNJLDRCQUFBO0FDVko7O0FEYUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDVko7O0FEYUE7RUFDSSwyQkFBQTtBQ1ZKOztBRGFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FDVko7O0FEYUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVko7O0FEY0E7RUFDQTtJQUNJLGNBQUE7RUNYRjs7RURhRjtJQUNJLGFBQUE7RUNWRjs7RURjRTtJQUNJLHFCQUFBO0VDWE47QUFDRjs7QURlQTtFQUNJLDJDQUFBO0FDYkoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAtLWJvcmRlci13aWR0aDowO1xufVxuXG5pb24tY29udGVudHtcblxuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTsgIFxuICAgIFxuICAgIC5vdXRlckRpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGZvcm17XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIH1cblxufVxuXG4uc2lnbnVwQnRuRGl2e1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLnNpZ251cEJ0bntcbiAgICAtLWNvbG9yOiMwMGFlZWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5jYXJkVGl0bGVcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGNvbG9yOiAjMDBhZWVmOyBcbiAgICBmb250LXNpemU6IDMycHg7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcbn1cblxuLmVtYWlsTGFiZWx7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZW1haWxJdGVtXG57XG4gICAgLS1taW4taGVpZ2h0OiAzN3B4IWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcblxuICAgIGlvbi1pbnB1dHtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAgIH1cbn1cblxuLnBhc3N3b3JkSXRlbVxue1xuICAgIC0tbWluLWhlaWdodDogMzdweCFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG5cbiAgICBpb24taW5wdXR7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gICAgICAgIH1cbn1cblxuLnBhc3N3b3JkSW5wdXR7XG4gICAgXG59XG5cbi5uby12YWxpZGF0aW9uLWxpbmUgLml0ZW0taW5uZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4uZm9ybXtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4uaW5wdXRkaXZ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmxvZ2luQnRue1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDsgZm9udC1zaXplOiAyMnB4OyBoZWlnaHQ6IDUwcHg7IFxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogICMwMGI5ZmY7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogICMwMGI5ZmY7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMGI5ZmY7XG4gICAgLS1jb2xvclx0OiAjZmZmZmZmO1xuICAgIC0tcmlwcGxlLWNvbG9yIDogIzlhOWE5YTtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZCA6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogMzdweDtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuLmxvZ2luRGl2e1xuICAgIHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDEwcHg7XG59XG5cbi5mb3Jnb3RQYXNzQnRue1xuICAgIGNvbG9yOiAjMDBhZWVmO1xuICAgIGhlaWdodDogMTZweDtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuLmZvcmdvdFBhc3NEaXZ7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ucmVtZW1iZXJJdGVte1xuICAgIC0tcGFkZGluZy1zdGFydDogMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmU0Yzk5IDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMmU0Yzk5O1xufVxuXG4uY2hlY2tib3hMYWJlbHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XG4ub3ZlcmZsb3Njcm9sbHtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbi5vdmVyZmxvc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciwgKjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcbiAgICBkaXNwbGF5OiBub25lOyBcbn1cblxuLmlubmVyY2FyZG1vYmlsZXtcbiAgICAuY2FyZC1Db250ZW50e1xuICAgICAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxufVxuXG4udGFiX2JhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvVG9vbF9CRy5zdmcnKSAhaW1wb3J0YW50O1xufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOjA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xufVxuaW9uLWNvbnRlbnQgLm91dGVyRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAub3V0ZXJEaXYgZm9ybSB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5zaWdudXBCdG5EaXYge1xuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG59XG5cbi5zaWdudXBCdG4ge1xuICAtLWNvbG9yOiMwMGFlZWY7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5jYXJkVGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDBhZWVmO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xufVxuXG4uZW1haWxMYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmVtYWlsSXRlbSB7XG4gIC0tbWluLWhlaWdodDogMzdweCFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG59XG4uZW1haWxJdGVtIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG59XG5cbi5wYXNzd29yZEl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDM3cHghaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xufVxuLnBhc3N3b3JkSXRlbSBpb24taW5wdXQge1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xufVxuXG4ubm8tdmFsaWRhdGlvbi1saW5lIC5pdGVtLWlubmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5pbnB1dGRpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5sb2dpbkJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzAwYjlmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMwMGI5ZmY7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzAwYjlmZjtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLS1yaXBwbGUtY29sb3I6ICM5YTlhOWE7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xufVxuXG4ubG9naW5EaXYge1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAxMHB4O1xufVxuXG4uZm9yZ290UGFzc0J0biB7XG4gIGNvbG9yOiAjMDBhZWVmO1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG59XG5cbi5mb3Jnb3RQYXNzRGl2IHtcbiAgcGFkZGluZzogMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ucmVtZW1iZXJJdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjMmU0Yzk5IDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzJlNGM5OTtcbn1cblxuLmNoZWNrYm94TGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAub3ZlcmZsb3Njcm9sbCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAub3ZlcmZsb3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIsICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmlubmVyY2FyZG1vYmlsZSAuY2FyZC1Db250ZW50IHtcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi50YWJfYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Ub29sX0JHLnN2Z1wiKSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/auth.page.ts":
  /*!***********************************!*\
    !*** ./src/app/auth/auth.page.ts ***!
    \***********************************/

  /*! exports provided: AuthPage */

  /***/
  function srcAppAuthAuthPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPage", function () {
      return AuthPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/user-agent/ngx */
    "./node_modules/@ionic-native/user-agent/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");

    var AuthPage = /*#__PURE__*/function () {
      // @ViewChild('EmailInput',{static: false}) EmailInt;
      function AuthPage(appVersion, userAgent, device, platform, route, iab, http, toastController, authenticationService, storage) {
        var _this = this;

        _classCallCheck(this, AuthPage);

        this.appVersion = appVersion;
        this.userAgent = userAgent;
        this.device = device;
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

        this.hasError = function (controlName, errorName) {
          return _this.loginForm.controls[controlName].hasError(errorName);
        };
      }

      _createClass(AuthPage, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          document.getElementById('authLoader').style.display = 'none';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
          } else {
            this.mobile = true;
          }

          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "onemialTextInput",
        value: function onemialTextInput() {
          this.email = true;
        }
      }, {
        key: "onPwdTextInput",
        value: function onPwdTextInput() {
          this.pwd = true;
        }
      }, {
        key: "onLoginClick",
        value: function onLoginClick() {
          var _this2 = this;

          this.showLoad = true;
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };

          if (this.loginForm.valid) {
            var username = this.loginForm.controls['Email'].value;
            var password = this.loginForm.controls['Password'].value;
            var isRemember = 'Y';
            this.authenticationService.login(username, password, isRemember).subscribe(function (data) {
              _this2.showLoad = false;

              if (data.isEmailVerified !== "" && data.isEmailVerified == "Y") {
                _this2.loginForm.reset();
              } else {
                _this2.presentToast("Please verify your email address sent to your inbox");
              }
            }, function (err) {
              _this2.showLoad = false;
            });
          }
        }
      }, {
        key: "onSignupClick",
        value: function onSignupClick() {
          document.getElementById('authLoader').style.display = "flex";
          var browser = this.iab.create(this.signupUrl, '_blank', "location=no,toolbar=yes,zoom=no,toolbarcolor=#2b468f");
          browser.hide();
          browser.on('loadstop').subscribe(function () {
            document.getElementById('authLoader').style.display = "none";
            browser.show();
            browser.insertCSS({
              code: "#hs_cos_wrapper_module_156318587919491_{display: none !important;"
            });
          });
          browser.on('exit').subscribe(function () {
            browser.close();
          });
        }
      }, {
        key: "onForgotPassClick",
        value: function onForgotPassClick() {
          this.route.navigateByUrl('/forgot-password');
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
                      duration: 3000,
                      cssClass: 'center'
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

      return AuthPage;
    }();

    AuthPage.ctorParameters = function () {
      return [{
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__["AppVersion"]
      }, {
        type: _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_10__["UserAgent"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }];
    };

    AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.page.scss */
      "./src/app/auth/auth.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__["AppVersion"], _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_10__["UserAgent"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])], AuthPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-auth-module-es5.js.map