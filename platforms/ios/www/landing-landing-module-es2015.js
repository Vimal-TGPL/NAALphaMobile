(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content forceOverscroll=false *ngIf=\"showSplashLoader\">\n  <div style=\"height: 100%; width: 100%; display: flex; justify-content: center; align-items:center;\">\n    <img src=\"../../assets/images/NAA.gif\" alt=\"loading...\" height=\"35px\">\n  </div>\n</ion-content>\n\n<ion-header class=\"ion-no-border\" *ngIf=\"!showSplashLoader\">\n  <ion-toolbar>\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\n  </ion-toolbar>\n</ion-header>\n<ion-content forceOverscroll=false *ngIf=\"!showSplashLoader\">\n  <div class=\"outerdiv outerdivmobile\">\n    <div>\n      <img src=\"../../assets/images/NAA_aboutUs_tools.png\" alt=\"Tool\" />\n    </div>\n    <div class=\"welcomeTextDiv\">\n      <ion-text>\n        <p>The <span style=\"white-space: nowrap;\">H-Factor</span> System is a free service oﬀered by New Age Alpha that is designed to help you avoid the <span style=\"white-space: nowrap;\">H-Factor</span> inside your portfolio.\n          This system measures the amount of <span style=\"white-space: nowrap;\">H-Factor</span> in a stock’s price.</p>\n      </ion-text>\n    </div>\n    <div class=\"versiondiv\">\n      <ion-text>\n        <p>mobile version 1.0</p>\n      </ion-text>\n    </div>\n    <div class=\"LoginBtnDiv\">\n      <ion-button (click)=\"onLoginClick()\" expand=\"block\" fill=\"clear\">\n        Login\n      </ion-button>\n    </div>\n    <div class=\"forgotPwdDiv\">\n      <ion-button (click)=\"onForgotPwdClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Forgot Password?\n      </ion-button>\n    </div>\n    <div class=\"signUpDiv\">\n      <ion-button (click)=\"onSignupClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        <span> Sign up</span>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n<div id=\"Loader\" style=\"background: rgba(0,0,0,0.5);z-index: 99999; position: absolute; height: 100%; width: 100%; display: flex; justify-content: center; align-items: center;\">\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 30px;width: 30px !important;\">    \n</div>");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #274b9e;\n}\n\nion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width:0;\n}\n\n.innercard {\n  height: 90%;\n  width: 90%;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.innercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n\n.innercard2 {\n  height: 85%;\n  width: 85%;\n  --background: #274b9e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0px;\n}\n\n.innercard2mobile {\n  height: 100% !important;\n  width: 100% !important;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.ParentDiv {\n  display: block;\n}\n\n.outerdiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.outerdiv img {\n  width: 250px;\n}\n\n.outerdiv .welcomeTextDiv {\n  margin-top: 25px;\n}\n\n.outerdiv .welcomeTextDiv p {\n  display: inline-block;\n  width: 50vh;\n  text-align: center;\n  color: #ffffff;\n  font-size: 20px;\n}\n\n.outerdiv .versiondiv {\n  margin-top: 25px;\n}\n\n.outerdiv .versiondiv p {\n  font-family: Open Sans Regular;\n  display: inline-block;\n  width: 50vh;\n  text-align: center;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.outerdiv .LoginBtnDiv {\n  margin-top: 30px;\n}\n\n.outerdiv .LoginBtnDiv ion-button {\n  --border-radius: 15px;\n  font-size: 22px;\n  height: 50px;\n  --background: #00b9ff;\n  --background-activated: #00b9ff;\n  --background-focused: #00b9ff;\n  --background-hover: #00b9ff;\n  color: #ffffff;\n  width: 30vh;\n  font-family: Open Sans semiBold;\n}\n\n.outerdiv .forgotPwdDiv {\n  margin-top: 25px;\n}\n\n.outerdiv .forgotPwdDiv ion-button {\n  height: 21px;\n  color: #00b9ff;\n  font-size: 17px;\n  font-family: Open Sans SemiBold;\n}\n\n.outerdiv .signUpDiv ion-button {\n  height: 21px;\n  color: #ffffff;\n  font-size: 17px;\n  font-family: Open Sans SemiBold;\n}\n\n.outerdiv .signUpDiv ion-button span {\n  color: #00b9ff;\n  padding-left: 5px;\n}\n\n.outerdivmobile {\n  padding-bottom: 20px;\n  height: 100%;\n}\n\n.outerdivmobile img {\n  width: 200px !important;\n}\n\n.outerdivmobile .welcomeTextDiv {\n  margin-top: 35px !important;\n}\n\n.outerdivmobile .welcomeTextDiv p {\n  font-family: Open sans Regular;\n  width: 85vw !important;\n  font-size: 16px !important;\n}\n\n.outerdivmobile .versiondiv p {\n  font-size: 14px !important;\n}\n\n.outerdivmobile .LoginBtnDiv {\n  margin-top: 25px !important;\n}\n\n.outerdivmobile .LoginBtnDiv ion-button {\n  height: 35px !important;\n  font-size: 16px !important;\n  width: 65vw;\n  text-transform: inherit !important;\n}\n\n.outerdivmobile .forgotPwdDiv {\n  margin-top: 20px !important;\n}\n\n.outerdivmobile .forgotPwdDiv ion-button {\n  font-size: 13px !important;\n  text-transform: inherit !important;\n}\n\n.outerdivmobile .signUpDiv ion-button {\n  font-size: 13px !important;\n  text-transform: inherit !important;\n}\n\n@media screen and (orientation: landscape) {\n  .innercard2mobile {\n    overflow: auto;\n  }\n  .innercard2mobile ion-card-content {\n    height: 100%;\n  }\n\n  .button_outer_div {\n    display: flex;\n    justify-content: center;\n  }\n  .button_outer_div .button_inner_div {\n    width: 400px;\n  }\n\n  .outerdivmobile .welcomeTextDiv p {\n    width: 100vh !important;\n  }\n\n  .LoginBtnDiv ion-button {\n    width: 30vw !important;\n  }\n\n  .tab_background {\n    --background: url('Tool_BG.svg') !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7QUNDUjs7QURFSTtFQUNJLGdCQUFBO0FDQVI7O0FERVE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQVo7O0FESUk7RUFDSSxnQkFBQTtBQ0ZSOztBRElRO0VBQ0ksOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRlo7O0FETUk7RUFDSSxnQkFBQTtBQ0pSOztBRE1RO0VBQ0kscUJBQUE7RUFBdUIsZUFBQTtFQUFpQixZQUFBO0VBQ3hDLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQ0ZaOztBRE1JO0VBQ0ksZ0JBQUE7QUNKUjs7QURNUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDSlo7O0FEVVE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ1JaOztBRFVZO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDUmhCOztBRGVBO0VBRUksb0JBQUE7RUFDQSxZQUFBO0FDYko7O0FEZUk7RUFDSSx1QkFBQTtBQ2JSOztBRGdCSTtFQUNJLDJCQUFBO0FDZFI7O0FEZVE7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNiWjs7QURtQlE7RUFDSSwwQkFBQTtBQ2pCWjs7QURxQkk7RUFDSSwyQkFBQTtBQ25CUjs7QURxQlE7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0FDbkJaOztBRHVCSTtFQUNJLDJCQUFBO0FDckJSOztBRHNCUTtFQUNJLDBCQUFBO0VBQ0Esa0NBQUE7QUNwQlo7O0FEMEJRO0VBQ0ksMEJBQUE7RUFDQSxrQ0FBQTtBQ3hCWjs7QUQ2QkU7RUFDRTtJQUNJLGNBQUE7RUMxQk47RUQ0Qk07SUFDSSxZQUFBO0VDMUJWOztFRDhCRTtJQUNJLGFBQUE7SUFDQSx1QkFBQTtFQzNCTjtFRDZCTTtJQUNJLFlBQUE7RUMzQlY7O0VEaUNVO0lBQ0ksdUJBQUE7RUM5QmQ7O0VEcUNNO0lBQ0ksc0JBQUE7RUNsQ1Y7O0VEc0NFO0lBQ0ksMkNBQUE7RUNuQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6MDtcbn1cblxuLmlubmVyY2FyZHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5uZXJjYXJkbW9iaWxle1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlubmVyY2FyZDJ7XG4gICAgaGVpZ2h0OiA4NSU7XG4gICAgd2lkdGg6IDg1JTtcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmlubmVyY2FyZDJtb2JpbGV7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLlBhcmVudERpdntcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm91dGVyZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgfVxuXG4gICAgLndlbGNvbWVUZXh0RGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuXG4gICAgICAgIHB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogNTB2aDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnZlcnNpb25kaXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA1MHZoO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLkxvZ2luQnRuRGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7IGZvbnQtc2l6ZTogMjJweDsgaGVpZ2h0OiA1MHB4OyBcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICAjMDBiOWZmO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICAjMDBiOWZmO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDBiOWZmO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7IFxuICAgICAgICAgICAgd2lkdGg6IDMwdmg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvcmdvdFB3ZERpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcblxuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgaGVpZ2h0OiAyMXB4OyBcbiAgICAgICAgICAgIGNvbG9yOiAjMDBiOWZmOyBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2lnblVwRGl2e1xuXG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBoZWlnaHQ6IDIxcHg7IFxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7IFxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcblxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwYjlmZjsgXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLm91dGVyZGl2bW9iaWxle1xuXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAud2VsY29tZVRleHREaXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHggIWltcG9ydGFudDtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIHNhbnMgUmVndWxhcjtcbiAgICAgICAgICAgIHdpZHRoOiA4NXZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAudmVyc2lvbmRpdntcbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIC5Mb2dpbkJ0bkRpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50O1xuXG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDY1dnc7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvcmdvdFB3ZERpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNpZ25VcERpdntcblxuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcbiAgICAuaW5uZXJjYXJkMm1vYmlsZXtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5idXR0b25fb3V0ZXJfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuYnV0dG9uX2lubmVyX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5vdXRlcmRpdm1vYmlsZXtcbiAgICAgICAgLndlbGNvbWVUZXh0RGl2e1xuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdmggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAuTG9naW5CdG5EaXZ7XG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICB3aWR0aDogMzB2dyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRhYl9iYWNrZ3JvdW5ke1xuICAgICAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9Ub29sX0JHLnN2ZycpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOjA7XG59XG5cbi5pbm5lcmNhcmQge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbm5lcmNhcmRtb2JpbGUge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW5uZXJjYXJkMiB7XG4gIGhlaWdodDogODUlO1xuICB3aWR0aDogODUlO1xuICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5pbm5lcmNhcmQybW9iaWxlIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLlBhcmVudERpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ub3V0ZXJkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vdXRlcmRpdiBpbWcge1xuICB3aWR0aDogMjUwcHg7XG59XG4ub3V0ZXJkaXYgLndlbGNvbWVUZXh0RGl2IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5vdXRlcmRpdiAud2VsY29tZVRleHREaXYgcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5vdXRlcmRpdiAudmVyc2lvbmRpdiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ub3V0ZXJkaXYgLnZlcnNpb25kaXYgcCB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm91dGVyZGl2IC5Mb2dpbkJ0bkRpdiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ub3V0ZXJkaXYgLkxvZ2luQnRuRGl2IGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMwMGI5ZmY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMDBiOWZmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMGI5ZmY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMzB2aDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBzZW1pQm9sZDtcbn1cbi5vdXRlcmRpdiAuZm9yZ290UHdkRGl2IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5vdXRlcmRpdiAuZm9yZ290UHdkRGl2IGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDIxcHg7XG4gIGNvbG9yOiAjMDBiOWZmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG59XG4ub3V0ZXJkaXYgLnNpZ25VcERpdiBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAyMXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xufVxuLm91dGVyZGl2IC5zaWduVXBEaXYgaW9uLWJ1dHRvbiBzcGFuIHtcbiAgY29sb3I6ICMwMGI5ZmY7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ub3V0ZXJkaXZtb2JpbGUge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm91dGVyZGl2bW9iaWxlIGltZyB7XG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xufVxuLm91dGVyZGl2bW9iaWxlIC53ZWxjb21lVGV4dERpdiB7XG4gIG1hcmdpbi10b3A6IDM1cHggIWltcG9ydGFudDtcbn1cbi5vdXRlcmRpdm1vYmlsZSAud2VsY29tZVRleHREaXYgcCB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIHNhbnMgUmVndWxhcjtcbiAgd2lkdGg6IDg1dncgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4ub3V0ZXJkaXZtb2JpbGUgLnZlcnNpb25kaXYgcCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuLm91dGVyZGl2bW9iaWxlIC5Mb2dpbkJ0bkRpdiB7XG4gIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcbn1cbi5vdXRlcmRpdm1vYmlsZSAuTG9naW5CdG5EaXYgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDY1dnc7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG4ub3V0ZXJkaXZtb2JpbGUgLmZvcmdvdFB3ZERpdiB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cbi5vdXRlcmRpdm1vYmlsZSAuZm9yZ290UHdkRGl2IGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQgIWltcG9ydGFudDtcbn1cbi5vdXRlcmRpdm1vYmlsZSAuc2lnblVwRGl2IGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmlubmVyY2FyZDJtb2JpbGUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIC5pbm5lcmNhcmQybW9iaWxlIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5idXR0b25fb3V0ZXJfZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5idXR0b25fb3V0ZXJfZGl2IC5idXR0b25faW5uZXJfZGl2IHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cblxuICAub3V0ZXJkaXZtb2JpbGUgLndlbGNvbWVUZXh0RGl2IHAge1xuICAgIHdpZHRoOiAxMDB2aCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLkxvZ2luQnRuRGl2IGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAzMHZ3ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGFiX2JhY2tncm91bmQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Ub29sX0JHLnN2Z1wiKSAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

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
/* harmony import */ var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/shareddata/data.service */ "./src/app/services/shareddata/data.service.ts");









let LandingPage = class LandingPage {
    constructor(toastCtrl, dataService, authService, alertCtrl, network, platform, iab, route) {
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
    ionViewDidEnter() {
        var backpressOncetoExit = false;
        this._backSub = this.platform.backButton.subscribeWithPriority(0, () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (backpressOncetoExit) {
                navigator['app'].exitApp();
            }
            else {
                backpressOncetoExit = true;
                setTimeout(() => {
                    backpressOncetoExit = false;
                }, 5000);
                var toast = yield this.toastCtrl.create({
                    message: 'Press back again to exit NewAgeAlpha App',
                    duration: 1000,
                    cssClass: 'center'
                });
                toast.present();
            }
        }));
    }
    ionViewWillLeave() {
        this._backSub.unsubscribe();
    }
    ngOnInit() {
        document.getElementById('Loader').style.display = 'none';
        this.dataService.showsplashLoader.subscribe(d => {
            this.showSplashLoader = d;
        });
        this.authService.authenticationState.subscribe(state => {
            this.authState = state;
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
        document.getElementById('Loader').style.display = "flex";
        var browser = this.iab.create(this.signupUrl, '_blank', "location=no,toolbar=yes,zoom=no,toolbarcolor=#2b468f");
        browser.hide();
        browser.on('loadstop').subscribe(() => {
            document.getElementById('Loader').style.display = "none";
            browser.show();
            browser.insertCSS({ code: "#hs_cos_wrapper_module_156318587919491_{display: none !important;" });
        });
        browser.on('exit').subscribe(() => {
            browser.close();
        });
    }
};
LandingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.page.scss */ "./src/app/landing/landing.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=landing-landing-module-es2015.js.map