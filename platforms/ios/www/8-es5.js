function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingLandingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content forceOverscroll=false *ngIf=\"showSplashLoader\">\n  <div style=\"height: 100%; width: 100%; display: flex; justify-content: center; align-items:center;\">\n    <img src=\"../../assets/images/NAA.gif\" alt=\"loading...\" height=\"35px\">\n  </div>\n</ion-content>\n\n<ion-header class=\"ion-no-border\" *ngIf=\"!showSplashLoader\">\n  <ion-toolbar>\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\n  </ion-toolbar>\n</ion-header>\n<ion-content forceOverscroll=false *ngIf=\"!showSplashLoader\">\n  <div class=\"outerdiv outerdivmobile\">\n    <div>\n      <img src=\"../../assets/images/NAA_aboutUs_tools.png\" alt=\"Tool\" />\n    </div>\n    <div class=\"welcomeTextDiv\">\n      <ion-text>\n        <p>The <span style=\"white-space: nowrap;\">H-Factor</span> System is a free service oﬀered by New Age Alpha that is designed to help you avoid the <span style=\"white-space: nowrap;\">H-Factor</span> inside your portfolio.\n          This system measures the amount of <span style=\"white-space: nowrap;\">H-Factor</span> in a stock’s price.</p>\n      </ion-text>\n    </div>\n    <div class=\"versiondiv\">\n      <ion-text>\n        <p>mobile version 1.0</p>\n      </ion-text>\n    </div>\n    <div class=\"LoginBtnDiv\">\n      <ion-button (click)=\"onLoginClick()\" expand=\"block\" fill=\"clear\">\n        Login\n      </ion-button>\n    </div>\n    <div class=\"forgotPwdDiv\">\n      <ion-button (click)=\"onForgotPwdClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Forgot Password?\n      </ion-button>\n    </div>\n    <div class=\"signUpDiv\">\n      <ion-button (click)=\"onSignupClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        <span> Sign up</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n<div id=\"Loader\" style=\"background: rgba(0,0,0,0.5);z-index: 99999; position: absolute; height: 100%; width: 100%; display: flex; justify-content: center; align-items: center;\">\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 30px;width: 30px !important;\">    \n</div>";
    /***/
  },

  /***/
  "./src/app/landing/landing-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/landing/landing-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: LandingPageRoutingModule */

  /***/
  function srcAppLandingLandingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function () {
      return LandingPageRoutingModule;
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


    var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing.page */
    "./src/app/landing/landing.page.ts");

    var routes = [{
      path: '',
      component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
    }];

    var LandingPageRoutingModule = function LandingPageRoutingModule() {
      _classCallCheck(this, LandingPageRoutingModule);
    };

    LandingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LandingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/landing/landing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/landing/landing.module.ts ***!
    \*******************************************/

  /*! exports provided: LandingPageModule */

  /***/
  function srcAppLandingLandingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () {
      return LandingPageModule;
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


    var _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./landing-routing.module */
    "./src/app/landing/landing-routing.module.ts");
    /* harmony import */


    var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./landing.page */
    "./src/app/landing/landing.page.ts");

    var LandingPageModule = function LandingPageModule() {
      _classCallCheck(this, LandingPageModule);
    };

    LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageRoutingModule"]],
      declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
    })], LandingPageModule);
    /***/
  },

  /***/
  "./src/app/landing/landing.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/landing/landing.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLandingLandingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #274b9e; }\n\nion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width:0; }\n\n.innercard {\n  height: 90%;\n  width: 90%;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.innercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important; }\n\n.innercard2 {\n  height: 85%;\n  width: 85%;\n  --background: #274b9e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0px; }\n\n.innercard2mobile {\n  height: 100% !important;\n  width: 100% !important;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px; }\n\n.ParentDiv {\n  display: block; }\n\n.outerdiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.outerdiv img {\n    width: 250px; }\n\n.outerdiv .welcomeTextDiv {\n    margin-top: 25px; }\n\n.outerdiv .welcomeTextDiv p {\n      display: inline-block;\n      width: 50vh;\n      text-align: center;\n      color: #ffffff;\n      font-size: 20px; }\n\n.outerdiv .versiondiv {\n    margin-top: 25px; }\n\n.outerdiv .versiondiv p {\n      font-family: Open Sans Regular;\n      display: inline-block;\n      width: 50vh;\n      text-align: center;\n      color: #ffffff;\n      font-size: 14px; }\n\n.outerdiv .LoginBtnDiv {\n    margin-top: 30px; }\n\n.outerdiv .LoginBtnDiv ion-button {\n      --border-radius: 15px;\n      font-size: 22px;\n      height: 50px;\n      --background: #00b9ff;\n      --background-activated:  #00b9ff;\n      --background-focused:  #00b9ff;\n      --background-hover: #00b9ff;\n      color: #ffffff;\n      width: 30vh;\n      font-family: Open Sans semiBold; }\n\n.outerdiv .forgotPwdDiv {\n    margin-top: 25px; }\n\n.outerdiv .forgotPwdDiv ion-button {\n      height: 21px;\n      color: #00b9ff;\n      font-size: 17px;\n      font-family: Open Sans SemiBold; }\n\n.outerdiv .signUpDiv ion-button {\n    height: 21px;\n    color: #ffffff;\n    font-size: 17px;\n    font-family: Open Sans SemiBold; }\n\n.outerdiv .signUpDiv ion-button span {\n      color: #00b9ff;\n      padding-left: 5px; }\n\n.outerdivmobile {\n  padding-bottom: 20px;\n  height: 100%; }\n\n.outerdivmobile img {\n    width: 200px !important; }\n\n.outerdivmobile .welcomeTextDiv {\n    margin-top: 35px !important; }\n\n.outerdivmobile .welcomeTextDiv p {\n      font-family: Open sans Regular;\n      width: 85vw !important;\n      font-size: 16px !important; }\n\n.outerdivmobile .versiondiv p {\n    font-size: 14px !important; }\n\n.outerdivmobile .LoginBtnDiv {\n    margin-top: 25px !important; }\n\n.outerdivmobile .LoginBtnDiv ion-button {\n      height: 35px !important;\n      font-size: 16px !important;\n      width: 65vw;\n      text-transform: inherit !important; }\n\n.outerdivmobile .forgotPwdDiv {\n    margin-top: 20px !important; }\n\n.outerdivmobile .forgotPwdDiv ion-button {\n      font-size: 13px !important;\n      text-transform: inherit !important; }\n\n.outerdivmobile .signUpDiv ion-button {\n    font-size: 13px !important;\n    text-transform: inherit !important; }\n\n@media screen and (orientation: landscape) {\n  .innercard2mobile {\n    overflow: auto; }\n    .innercard2mobile ion-card-content {\n      height: 100%; }\n  .button_outer_div {\n    display: flex;\n    justify-content: center; }\n    .button_outer_div .button_inner_div {\n      width: 400px; }\n  .outerdivmobile .welcomeTextDiv p {\n    width: 100vh !important; }\n  .LoginBtnDiv ion-button {\n    width: 30vw !important; }\n  .tab_background {\n    --background: url('Tool_BG.svg') !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFHakI7RUFDSSxxQkFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHlCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsdUJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFKdkI7SUFPUSxZQUFZLEVBQUE7O0FBUHBCO0lBV1EsZ0JBQWdCLEVBQUE7O0FBWHhCO01BY1kscUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGVBQWUsRUFBQTs7QUFsQjNCO0lBdUJRLGdCQUFnQixFQUFBOztBQXZCeEI7TUEwQlksOEJBQThCO01BQzlCLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlLEVBQUE7O0FBL0IzQjtJQW9DUSxnQkFBZ0IsRUFBQTs7QUFwQ3hCO01BdUNZLHFCQUFnQjtNQUFPLGVBQWU7TUFBRSxZQUFZO01BQ3BELHFCQUFhO01BQ2IsZ0NBQXVCO01BQ3ZCLDhCQUFxQjtNQUNyQiwyQkFBbUI7TUFDbkIsY0FBYztNQUNkLFdBQVc7TUFDWCwrQkFBK0IsRUFBQTs7QUE5QzNDO0lBbURRLGdCQUFnQixFQUFBOztBQW5EeEI7TUFzRFksWUFBWTtNQUNaLGNBQWM7TUFDZCxlQUFlO01BQ2YsK0JBQStCLEVBQUE7O0FBekQzQztJQWdFWSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZiwrQkFBK0IsRUFBQTs7QUFuRTNDO01Bc0VnQixjQUFjO01BQ2QsaUJBQWlCLEVBQUE7O0FBT2pDO0VBRUksb0JBQW9CO0VBQ3BCLFlBQVksRUFBQTs7QUFIaEI7SUFNUSx1QkFBdUIsRUFBQTs7QUFOL0I7SUFVUSwyQkFBMkIsRUFBQTs7QUFWbkM7TUFZWSw4QkFBOEI7TUFDOUIsc0JBQXNCO01BQ3RCLDBCQUEwQixFQUFBOztBQWR0QztJQXFCWSwwQkFBMEIsRUFBQTs7QUFyQnRDO0lBMEJRLDJCQUEyQixFQUFBOztBQTFCbkM7TUE2QlksdUJBQXVCO01BQ3ZCLDBCQUEwQjtNQUMxQixXQUFXO01BQ1gsa0NBQWtDLEVBQUE7O0FBaEM5QztJQXFDUSwyQkFBMkIsRUFBQTs7QUFyQ25DO01BdUNZLDBCQUEwQjtNQUMxQixrQ0FBa0MsRUFBQTs7QUF4QzlDO0lBK0NZLDBCQUEwQjtJQUMxQixrQ0FBa0MsRUFBQTs7QUFLNUM7RUFDRTtJQUNJLGNBQWMsRUFBQTtJQURsQjtNQUlRLFlBQVksRUFBQTtFQUlwQjtJQUNJLGFBQWE7SUFDYix1QkFBdUIsRUFBQTtJQUYzQjtNQUtRLFlBQVksRUFBQTtFQUlwQjtJQUdZLHVCQUF1QixFQUFBO0VBTW5DO0lBRVEsc0JBQXNCLEVBQUE7RUFJOUI7SUFDSSwyQ0FBYSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAtLWJvcmRlci13aWR0aDowO1xufVxuXG4uaW5uZXJjYXJke1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbm5lcmNhcmRtb2JpbGV7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW5uZXJjYXJkMntcbiAgICBoZWlnaHQ6IDg1JTtcbiAgICB3aWR0aDogODUlO1xuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uaW5uZXJjYXJkMm1vYmlsZXtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG4uUGFyZW50RGl2e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ub3V0ZXJkaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICB9XG5cbiAgICAud2VsY29tZVRleHREaXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA1MHZoO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudmVyc2lvbmRpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcblxuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDUwdmg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuTG9naW5CdG5EaXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDsgZm9udC1zaXplOiAyMnB4OyBoZWlnaHQ6IDUwcHg7IFxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogICMwMGI5ZmY7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogICMwMGI5ZmY7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMGI5ZmY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgXG4gICAgICAgICAgICB3aWR0aDogMzB2aDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgc2VtaUJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9yZ290UHdkRGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuXG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBoZWlnaHQ6IDIxcHg7IFxuICAgICAgICAgICAgY29sb3I6ICMwMGI5ZmY7IFxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zaWduVXBEaXZ7XG5cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIGhlaWdodDogMjFweDsgXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuXG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBiOWZmOyBcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4ub3V0ZXJkaXZtb2JpbGV7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC53ZWxjb21lVGV4dERpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweCAhaW1wb3J0YW50O1xuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gc2FucyBSZWd1bGFyO1xuICAgICAgICAgICAgd2lkdGg6IDg1dncgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIC52ZXJzaW9uZGl2e1xuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgLkxvZ2luQnRuRGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogNjV2dztcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9yZ290UHdkRGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2lnblVwRGl2e1xuXG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkge1xuICAgIC5pbm5lcmNhcmQybW9iaWxle1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbl9vdXRlcl9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIC5idXR0b25faW5uZXJfZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm91dGVyZGl2bW9iaWxle1xuICAgICAgICAud2VsY29tZVRleHREaXZ7XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2aCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5Mb2dpbkJ0bkRpdntcbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAzMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGFiX2JhY2tncm91bmR7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL1Rvb2xfQkcuc3ZnJykgIWltcG9ydGFudDtcbiAgICB9XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/landing/landing.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/landing/landing.page.ts ***!
    \*****************************************/

  /*! exports provided: LandingPage */

  /***/
  function srcAppLandingLandingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPage", function () {
      return LandingPage;
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


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/shareddata/data.service */
    "./src/app/services/shareddata/data.service.ts");

    var LandingPage = /*#__PURE__*/function () {
      function LandingPage(toastCtrl, dataService, authService, alertCtrl, network, platform, iab, route) {
        _classCallCheck(this, LandingPage);

        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.platform = platform;
        this.iab = iab;
        this.route = route;
        this.signupUrl = 'https://blog.newagealpha.com/h-factor';
        this.url = 'https://www.newagealpha.com/';
        this.showSplashLoader = true;
      }

      _createClass(LandingPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          var backpressOncetoExit = false;
          this._backSub = this.platform.backButton.subscribeWithPriority(0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!backpressOncetoExit) {
                        _context.next = 4;
                        break;
                      }

                      navigator['app'].exitApp();
                      _context.next = 10;
                      break;

                    case 4:
                      backpressOncetoExit = true;
                      setTimeout(function () {
                        backpressOncetoExit = false;
                      }, 5000);
                      _context.next = 8;
                      return this.toastCtrl.create({
                        message: 'Press back again to exit NewAgeAlpha App',
                        duration: 1000,
                        cssClass: 'center'
                      });

                    case 8:
                      toast = _context.sent;
                      toast.present();

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this._backSub.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          document.getElementById('Loader').style.display = 'none';
          this.dataService.showsplashLoader.subscribe(function (d) {
            _this2.showSplashLoader = d;
          });
          this.authService.authenticationState.subscribe(function (state) {
            _this2.authState = state;
          });

          if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
          } else {
            this.mobile = true;
          }
        }
      }, {
        key: "onSkipClick",
        value: function onSkipClick() {
          this.iab.create(this.url, '_blank', 'location=no,toolbar=yes,zoom=no');
        }
      }, {
        key: "onLoginClick",
        value: function onLoginClick() {
          this.route.navigateByUrl('/auth');
        }
      }, {
        key: "onForgotPwdClick",
        value: function onForgotPwdClick() {
          this.route.navigateByUrl('/forgot-password');
        }
      }, {
        key: "onSignupClick",
        value: function onSignupClick() {
          document.getElementById('Loader').style.display = "flex";
          var browser = this.iab.create(this.signupUrl, '_blank', "location=no,toolbar=yes,zoom=no,toolbarcolor=#2b468f");
          browser.hide();
          browser.on('loadstop').subscribe(function () {
            document.getElementById('Loader').style.display = "none";
            browser.show();
            browser.insertCSS({
              code: "#hs_cos_wrapper_module_156318587919491_{display: none !important;"
            });
          });
          browser.on('exit').subscribe(function () {
            browser.close();
          });
        }
      }]);

      return LandingPage;
    }();

    LandingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing.page.scss */
      "./src/app/landing/landing.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], LandingPage);
    /***/
  }
}]);
//# sourceMappingURL=8-es5.js.map