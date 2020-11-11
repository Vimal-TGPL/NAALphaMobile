(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/landing/landing.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing/landing.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content forceOverscroll=false>\r\n  <div class=\"outerdiv outerdivmobile\">\r\n    <div>\r\n      <img src=\"../../assets/images/NAA_aboutUs_tools.png\" alt=\"Tool\" />\r\n    </div>\r\n    <div class=\"welcomeTextDiv\">\r\n      <ion-text>\r\n        <p>The H-Factor System is a free service oﬀered by New Age Alpha that is designed to help you avoid the H-Factor inside your portfolio.\r\n          This system measures the amount of H-Factor in a stock’s price.</p>\r\n      </ion-text>\r\n    </div>\r\n    <div class=\"versiondiv\">\r\n      <ion-text>\r\n        <p>mobile version 1.0</p>\r\n      </ion-text>\r\n    </div>\r\n    <div class=\"LoginBtnDiv\">\r\n      <ion-button (click)=\"onLoginClick()\" expand=\"block\" fill=\"clear\">\r\n        Login\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"forgotPwdDiv\">\r\n      <ion-button (click)=\"onForgotPwdClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        Forgot Password?\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"signUpDiv\">\r\n      <ion-button (click)=\"onSignupClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        <span> Sign up</span>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/landing/landing-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/landing/landing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function() { return LandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.page */ "./src/app/landing/landing.page.ts");




const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LandingPageRoutingModule);



/***/ }),

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/landing/landing-routing.module.ts");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/landing/landing.page.ts");







let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageRoutingModule"]
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/landing/landing.page.scss":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #274b9e; }\n\nion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width:0; }\n\n.innercard {\n  height: 90%;\n  width: 90%;\n  border-radius: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.innercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important; }\n\n.innercard2 {\n  height: 85%;\n  width: 85%;\n  --background: #274b9e;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 0px; }\n\n.innercard2mobile {\n  height: 100% !important;\n  width: 100% !important;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px; }\n\n.ParentDiv {\n  display: block; }\n\n.outerdiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.outerdiv img {\n    width: 250px; }\n\n.outerdiv .welcomeTextDiv {\n    margin-top: 25px; }\n\n.outerdiv .welcomeTextDiv p {\n      display: inline-block;\n      width: 50vh;\n      text-align: center;\n      color: #ffffff;\n      font-size: 20px; }\n\n.outerdiv .versiondiv {\n    margin-top: 25px; }\n\n.outerdiv .versiondiv p {\n      font-family: Open Sans Regular;\n      display: inline-block;\n      width: 50vh;\n      text-align: center;\n      color: #ffffff;\n      font-size: 14px; }\n\n.outerdiv .LoginBtnDiv {\n    margin-top: 30px; }\n\n.outerdiv .LoginBtnDiv ion-button {\n      --border-radius: 15px;\n      font-size: 22px;\n      height: 50px;\n      --background: #00b9ff;\n      --background-activated:  #00b9ff;\n      --background-focused:  #00b9ff;\n      --background-hover: #00b9ff;\n      color: #ffffff;\n      width: 30vh;\n      font-family: Open Sans semiBold; }\n\n.outerdiv .forgotPwdDiv {\n    margin-top: 25px; }\n\n.outerdiv .forgotPwdDiv ion-button {\n      height: 21px;\n      color: #00b9ff;\n      font-size: 17px;\n      font-family: Open Sans SemiBold; }\n\n.outerdiv .signUpDiv ion-button {\n    height: 21px;\n    color: #ffffff;\n    font-size: 17px;\n    font-family: Open Sans SemiBold; }\n\n.outerdiv .signUpDiv ion-button span {\n      color: #00b9ff;\n      padding-left: 5px; }\n\n.outerdivmobile {\n  padding-bottom: 20px;\n  height: 100%; }\n\n.outerdivmobile img {\n    width: 200px !important; }\n\n.outerdivmobile .welcomeTextDiv {\n    margin-top: 35px !important; }\n\n.outerdivmobile .welcomeTextDiv p {\n      font-family: Open sans Regular;\n      width: 85vw !important;\n      font-size: 16px !important; }\n\n.outerdivmobile .versiondiv p {\n    font-size: 14px !important; }\n\n.outerdivmobile .LoginBtnDiv {\n    margin-top: 25px !important; }\n\n.outerdivmobile .LoginBtnDiv ion-button {\n      height: 35px !important;\n      font-size: 16px !important;\n      width: 65vw;\n      text-transform: inherit !important; }\n\n.outerdivmobile .forgotPwdDiv {\n    margin-top: 20px !important; }\n\n.outerdivmobile .forgotPwdDiv ion-button {\n      font-size: 13px !important;\n      text-transform: inherit !important; }\n\n.outerdivmobile .signUpDiv ion-button {\n    font-size: 13px !important;\n    text-transform: inherit !important; }\n\n@media screen and (orientation: landscape) {\n  .innercard2mobile {\n    overflow: auto; }\n    .innercard2mobile ion-card-content {\n      height: 100%; }\n  .button_outer_div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center; }\n    .button_outer_div .button_inner_div {\n      width: 400px; }\n  .outerdivmobile .welcomeTextDiv p {\n    width: 100vh !important; }\n  .LoginBtnDiv ion-button {\n    width: 30vw !important; }\n  .tab_background {\n    --background: url('Tool_BG.svg') !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXGxhbmRpbmdcXGxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFHakI7RUFDSSxxQkFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZSxFQUFBOztBQUluQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBRVYsbUJBQW1CO0VBQ25CLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHFCQUFhO0VBQ2Isb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIseUJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix1QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUp2QjtJQU9RLFlBQVksRUFBQTs7QUFQcEI7SUFXUSxnQkFBZ0IsRUFBQTs7QUFYeEI7TUFjWSxxQkFBcUI7TUFDckIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixjQUFjO01BQ2QsZUFBZSxFQUFBOztBQWxCM0I7SUF1QlEsZ0JBQWdCLEVBQUE7O0FBdkJ4QjtNQTBCWSw4QkFBOEI7TUFDOUIscUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGVBQWUsRUFBQTs7QUEvQjNCO0lBcUNRLGdCQUFnQixFQUFBOztBQXJDeEI7TUF3Q1kscUJBQWdCO01BQU8sZUFBZTtNQUFFLFlBQVk7TUFDcEQscUJBQWE7TUFDYixnQ0FBdUI7TUFDdkIsOEJBQXFCO01BQ3JCLDJCQUFtQjtNQUNuQixjQUFjO01BQ2QsV0FBVztNQUNYLCtCQUErQixFQUFBOztBQS9DM0M7SUFvRFEsZ0JBQWdCLEVBQUE7O0FBcER4QjtNQXVEWSxZQUFZO01BQ1osY0FBYztNQUNkLGVBQWU7TUFDZiwrQkFBK0IsRUFBQTs7QUExRDNDO0lBaUVZLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLCtCQUErQixFQUFBOztBQXBFM0M7TUF1RWdCLGNBQWM7TUFDZCxpQkFBaUIsRUFBQTs7QUFPakM7RUFFSSxvQkFBb0I7RUFDcEIsWUFBWSxFQUFBOztBQUhoQjtJQU1RLHVCQUF1QixFQUFBOztBQU4vQjtJQVVRLDJCQUEyQixFQUFBOztBQVZuQztNQVlZLDhCQUE4QjtNQUM5QixzQkFBc0I7TUFDdEIsMEJBQTBCLEVBQUE7O0FBZHRDO0lBcUJZLDBCQUEwQixFQUFBOztBQXJCdEM7SUEwQlEsMkJBQTJCLEVBQUE7O0FBMUJuQztNQTZCWSx1QkFBdUI7TUFDdkIsMEJBQTBCO01BQzFCLFdBQVc7TUFDWCxrQ0FBa0MsRUFBQTs7QUFoQzlDO0lBcUNRLDJCQUEyQixFQUFBOztBQXJDbkM7TUF1Q1ksMEJBQTBCO01BQzFCLGtDQUFrQyxFQUFBOztBQXhDOUM7SUErQ1ksMEJBQTBCO0lBQzFCLGtDQUFrQyxFQUFBOztBQXFCNUM7RUFDRTtJQUNJLGNBQWMsRUFBQTtJQURsQjtNQUlRLFlBQVksRUFBQTtFQUlwQjtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtJQUYzQjtNQUtRLFlBQVksRUFBQTtFQUlwQjtJQUdZLHVCQUF1QixFQUFBO0VBTW5DO0lBRVEsc0JBQXNCLEVBQUE7RUFJOUI7SUFDSSwyQ0FBYSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOjA7XHJcbn1cclxuXHJcblxyXG4uaW5uZXJjYXJke1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2QzZDhkYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5uZXJjYXJkbW9iaWxle1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbm5lcmNhcmQye1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLmlubmVyY2FyZDJtb2JpbGV7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcblxyXG4uUGFyZW50RGl2e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5vdXRlcmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndlbGNvbWVUZXh0RGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDUwdmg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnNpb25kaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHZoO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuTG9naW5CdG5EaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4OyBmb250LXNpemU6IDIycHg7IGhlaWdodDogNTBweDsgXHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogICMwMGI5ZmY7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAgIzAwYjlmZjtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDBiOWZmO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHZoO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9yZ290UHdkRGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDogMjFweDsgXHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDBiOWZmOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2lnblVwRGl2e1xyXG5cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIxcHg7IFxyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuXHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwYjlmZjsgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5vdXRlcmRpdm1vYmlsZXtcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLndlbGNvbWVUZXh0RGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBzYW5zIFJlZ3VsYXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NXZ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAudmVyc2lvbmRpdntcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIC5Mb2dpbkJ0bkRpdntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDY1dnc7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3Jnb3RQd2REaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2lnblVwRGl2e1xyXG5cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY1MHB4KSB7XHJcbi8vICAgICAuY2FyZHtcclxuLy8gICAgICAgICAvLyBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gICAgIC50b29sLWltZyBpbWd7XHJcbi8vICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4vLyAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLnRvb2wtaW1ne1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XHJcbiAgICAuaW5uZXJjYXJkMm1vYmlsZXtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uX291dGVyX2RpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAuYnV0dG9uX2lubmVyX2RpdntcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3V0ZXJkaXZtb2JpbGV7XHJcbiAgICAgICAgLndlbGNvbWVUZXh0RGl2e1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLkxvZ2luQnRuRGl2e1xyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWJfYmFja2dyb3VuZHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9Ub29sX0JHLnN2ZycpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing.page.ts":
/*!*****************************************!*\
  !*** ./src/app/landing/landing.page.ts ***!
  \*****************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");








// santhosh
let LandingPage = class LandingPage {
    constructor(authService, alertCtrl, network, platform, iab, route) {
        //  var netcon = this.network.onConnect().subscribe(async ()=>{
        //     document.getElementById('NetError').style.visibility = 'hidden';
        //  })
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.platform = platform;
        this.iab = iab;
        this.route = route;
        this.signupUrl = 'https://blog.newagealpha.com/h-factor';
        this.url = 'https://www.newagealpha.com/';
        //  var netdis = this.network.onDisconnect().subscribe(async ()=>{
        //   document.getElementById('NetError').style.visibility = 'visible';
        //  })
    }
    ngOnInit() {
        this.authService.authenticationState.subscribe(state => {
            this.authState = state;
            // console.log('authstate from landing page'+state)
        });
        if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
        }
    }
    onSkipClick() {
        this.iab.create(this.url, '_blank', 'location=no,toolbar=yes,zoom=no');
    }
    onLoginClick() {
        this.route.navigateByUrl('/auth');
    }
    onForgotPwdClick() {
        this.route.navigateByUrl('/forgot-password');
    }
    onSignupClick() {
        //this.route.navigateByUrl('/signup');
        var browser = this.iab.create(this.signupUrl, '_blank', 'location=no,toolbar=yes,zoom=no');
        browser.on('loadstop').subscribe(event => {
            browser.insertCSS({ code: "#hs_cos_wrapper_module_156318587919491_{display: none !important;" });
        });
    }
};
LandingPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/index.js!./src/app/landing/landing.page.html"),
        styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/landing/landing.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=landing-landing-module-es2015.js.map