(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/landing/landing.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing/landing.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content forceOverscroll = false>\r\n  <div class=\"ParentDiv\">\r\n    <ion-card class=\"card\">\r\n      <ion-card class=\"innercard\" [ngClass]=\"{'innercardmobile': mobile}\">\r\n        <ion-card class=\"innercard2\" [ngClass]=\"{'innercard2mobile': mobile}\">\r\n          <ion-card-content>\r\n            <div class=\"outerdiv\" [ngClass]=\"{'outerdivmobile': mobile}\">\r\n              <div>\r\n                <img src=\"../../assets/images/NAA_aboutUs_tools.png\" alt=\"Logo\"/>\r\n              </div>\r\n              <div class=\"welcomeTextDiv\">\r\n                <ion-text>\r\n                  <p>The H-Factor System is a free service oﬀered by New Age Alpha that is designed to help you avoid the Human Factor inside your portfolio. \r\n                    This system measures the amount of Human Factor in a stock’s price.</p>\r\n                </ion-text>\r\n              </div>\r\n              <div class=\"versiondiv\">\r\n                <ion-text>\r\n                  <p>Version 1.0</p>\r\n                </ion-text>\r\n              </div>\r\n              <div class=\"LoginBtnDiv\">\r\n                <ion-button (click)=\"onLoginClick()\" expand=\"block\" fill=\"clear\" >\r\n                  Login\r\n                </ion-button>\r\n              </div>\r\n              <div class=\"forgotPwdDiv\">\r\n                <ion-button (click)=\"onForgotPwdClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                  Forgot Password?\r\n                </ion-button>\r\n              </div>\r\n              <div class=\"signUpDiv\">\r\n                <ion-button (click)=\"onSignupClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                  <span> Sign up</span>\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-card>\r\n    </ion-card>  \r\n</div>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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

module.exports = "ion-content {\n  --ion-background-color:#d3d8dc;\n}\n\n.card {\n  --background: linear-gradient(-90deg,#2E4C99, #233771);\n  border-radius: 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100vh;\n  margin: 0px;\n}\n\n.innercard {\n  height: 90%;\n  width: 90%;\n  background: #d3d8dc;\n  border-radius: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.innercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important;\n}\n\n.innercard2 {\n  height: 85%;\n  width: 85%;\n  --background: linear-gradient(-90deg,#2E4C99, #233771);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px;\n}\n\n.innercard2mobile {\n  height: 95% !important;\n  width: 95% !important;\n}\n\n.ParentDiv {\n  display: block;\n}\n\n.outerdiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.outerdiv img {\n  width: 250px;\n}\n\n.outerdiv .welcomeTextDiv {\n  margin-top: 25px;\n}\n\n.outerdiv .welcomeTextDiv p {\n  display: inline-block;\n  width: 50vh;\n  text-align: center;\n  color: #ffffff;\n  font-size: 20px;\n}\n\n.outerdiv .versiondiv {\n  margin-top: 25px;\n}\n\n.outerdiv .versiondiv p {\n  font-family: Open Sans SemiBold;\n  display: inline-block;\n  width: 50vh;\n  text-align: center;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.outerdiv .LoginBtnDiv {\n  margin-top: 30px;\n}\n\n.outerdiv .LoginBtnDiv ion-button {\n  --border-radius: 15px;\n  font-size: 22px;\n  height: 50px;\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  color: #ffffff;\n  width: 30vh;\n  font-family: Open Sans semiBold;\n}\n\n.outerdiv .forgotPwdDiv {\n  margin-top: 25px;\n}\n\n.outerdiv .forgotPwdDiv ion-button {\n  height: 21px;\n  color: #00b9ff;\n  font-size: 17px;\n  font-family: Open Sans SemiBold;\n}\n\n.outerdiv .signUpDiv ion-button {\n  height: 21px;\n  color: #ffffff;\n  font-size: 17px;\n  font-family: Open Sans SemiBold;\n}\n\n.outerdiv .signUpDiv ion-button span {\n  color: #00b9ff;\n  padding-left: 5px;\n}\n\n.outerdivmobile {\n  padding-bottom: 20px;\n}\n\n.outerdivmobile img {\n  width: 200px !important;\n}\n\n.outerdivmobile .welcomeTextDiv {\n  margin-top: 35px !important;\n}\n\n.outerdivmobile .welcomeTextDiv p {\n  font-family: Open sans;\n  width: 85vw !important;\n  font-size: 14px !important;\n}\n\n.outerdivmobile .versiondiv p {\n  font-size: 16px !important;\n}\n\n.outerdivmobile .LoginBtnDiv {\n  margin-top: 25px !important;\n}\n\n.outerdivmobile .LoginBtnDiv ion-button {\n  height: 35px !important;\n  font-size: 16px !important;\n  width: 65vw;\n  text-transform: inherit !important;\n}\n\n.outerdivmobile .forgotPwdDiv {\n  margin-top: 20px !important;\n}\n\n.outerdivmobile .forgotPwdDiv ion-button {\n  font-size: 12px !important;\n  text-transform: inherit !important;\n}\n\n.outerdivmobile .signUpDiv ion-button {\n  font-size: 12px !important;\n  text-transform: inherit !important;\n}\n\n@media screen and (orientation: landscape) {\n  .innercard2mobile {\n    overflow: auto;\n  }\n  .innercard2mobile ion-card-content {\n    height: 100%;\n  }\n\n  .button_outer_div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n  .button_outer_div .button_inner_div {\n    width: 400px;\n  }\n\n  .outerdivmobile .welcomeTextDiv p {\n    width: 100vh !important;\n  }\n\n  .LoginBtnDiv ion-button {\n    width: 30vw !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXGxhbmRpbmdcXGxhbmRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUNBSjs7QURJQTtFQUNJLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxXQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxzREFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7QUNGSjs7QURLQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRko7O0FESUk7RUFDSSxZQUFBO0FDRlI7O0FES0k7RUFDSSxnQkFBQTtBQ0hSOztBREtRO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0haOztBRE9JO0VBQ0ksZ0JBQUE7QUNMUjs7QURPUTtFQUNJLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0xaOztBRFVJO0VBQ0ksZ0JBQUE7QUNSUjs7QURVUTtFQUNJLHFCQUFBO0VBQXVCLGVBQUE7RUFBaUIsWUFBQTtFQUN4Qyw4REFBQTtFQUNBLHdFQUFBO0VBQ0Esc0VBQUE7RUFDQSxvRUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUNOWjs7QURVSTtFQUNJLGdCQUFBO0FDUlI7O0FEVVE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ1JaOztBRGNRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNaWjs7QURjWTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ1poQjs7QURtQkE7RUFFSSxvQkFBQTtBQ2pCSjs7QURtQkk7RUFDSSx1QkFBQTtBQ2pCUjs7QURvQkk7RUFDSSwyQkFBQTtBQ2xCUjs7QURtQlE7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNqQlo7O0FEdUJRO0VBQ0ksMEJBQUE7QUNyQlo7O0FEeUJJO0VBQ0ksMkJBQUE7QUN2QlI7O0FEeUJRO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQ3ZCWjs7QUQyQkk7RUFDSSwyQkFBQTtBQ3pCUjs7QUQwQlE7RUFDSSwwQkFBQTtFQUNBLGtDQUFBO0FDeEJaOztBRDhCUTtFQUNJLDBCQUFBO0VBQ0Esa0NBQUE7QUM1Qlo7O0FEaURFO0VBQ0U7SUFDSSxjQUFBO0VDOUNOO0VEZ0RNO0lBQ0ksWUFBQTtFQzlDVjs7RURrREU7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0VDL0NOO0VEaURNO0lBQ0ksWUFBQTtFQy9DVjs7RURxRFU7SUFDSSx1QkFBQTtFQ2xEZDs7RUR5RE07SUFDSSxzQkFBQTtFQ3REVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2QzZDhkYztcclxuICAgIFxyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywjMkU0Qzk5LCAjMjMzNzcxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICBcclxuICAgIG1hcmdpbjogMHB4OyAgICAgICAgICAgICBcclxufVxyXG5cclxuLmlubmVyY2FyZHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkM2Q4ZGM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmlubmVyY2FyZG1vYmlsZXtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5uZXJjYXJkMntcclxuICAgIGhlaWdodDogODUlO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywjMkU0Qzk5LCAjMjMzNzcxKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uaW5uZXJjYXJkMm1vYmlsZXtcclxuICAgIGhlaWdodDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5QYXJlbnREaXZ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm91dGVyZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAud2VsY29tZVRleHREaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNTB2aDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudmVyc2lvbmRpdntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHZoO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuTG9naW5CdG5EaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4OyBmb250LXNpemU6IDIycHg7IGhlaWdodDogNTBweDsgXHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMGI5ZmYgMCUsICMyZTRjOTkgMTAwJSk7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpOyBcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7IFxyXG4gICAgICAgICAgICB3aWR0aDogMzB2aDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBzZW1pQm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcmdvdFB3ZERpdntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIxcHg7IFxyXG4gICAgICAgICAgICBjb2xvcjogIzAwYjlmZjsgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZ25VcERpdntcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMXB4OyBcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7IFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcblxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMGI5ZmY7IFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4ub3V0ZXJkaXZtb2JpbGV7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC53ZWxjb21lVGV4dERpdntcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gc2FucztcclxuICAgICAgICAgICAgd2lkdGg6IDg1dncgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC52ZXJzaW9uZGl2e1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgLkxvZ2luQnRuRGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogNjV2dztcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcmdvdFB3ZERpdntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaWduVXBEaXZ7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjUwcHgpIHtcclxuLy8gICAgIC5jYXJke1xyXG4vLyAgICAgICAgIC8vIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLnRvb2wtaW1nIGltZ3tcclxuLy8gICAgICAgICB3aWR0aDogMjAwcHg7XHJcbi8vICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAudG9vbC1pbWd7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcclxuICAgIC5pbm5lcmNhcmQybW9iaWxle1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25fb3V0ZXJfZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5idXR0b25faW5uZXJfZGl2e1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5vdXRlcmRpdm1vYmlsZXtcclxuICAgICAgICAud2VsY29tZVRleHREaXZ7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdmggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuTG9naW5CdG5EaXZ7XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDMwdncgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkM2Q4ZGM7XG59XG5cbi5jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCMyRTRDOTksICMyMzM3NzEpO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmlubmVyY2FyZCB7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kOiAjZDNkOGRjO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlubmVyY2FyZG1vYmlsZSB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pbm5lcmNhcmQyIHtcbiAgaGVpZ2h0OiA4NSU7XG4gIHdpZHRoOiA4NSU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywjMkU0Qzk5LCAjMjMzNzcxKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5pbm5lcmNhcmQybW9iaWxlIHtcbiAgaGVpZ2h0OiA5NSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufVxuXG4uUGFyZW50RGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vdXRlcmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm91dGVyZGl2IGltZyB7XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5vdXRlcmRpdiAud2VsY29tZVRleHREaXYge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLm91dGVyZGl2IC53ZWxjb21lVGV4dERpdiBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm91dGVyZGl2IC52ZXJzaW9uZGl2IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5vdXRlcmRpdiAudmVyc2lvbmRpdiBwIHtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm91dGVyZGl2IC5Mb2dpbkJ0bkRpdiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ub3V0ZXJkaXYgLkxvZ2luQnRuRGl2IGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAzMHZoO1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xufVxuLm91dGVyZGl2IC5mb3Jnb3RQd2REaXYge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLm91dGVyZGl2IC5mb3Jnb3RQd2REaXYgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMjFweDtcbiAgY29sb3I6ICMwMGI5ZmY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbn1cbi5vdXRlcmRpdiAuc2lnblVwRGl2IGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDIxcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG59XG4ub3V0ZXJkaXYgLnNpZ25VcERpdiBpb24tYnV0dG9uIHNwYW4ge1xuICBjb2xvcjogIzAwYjlmZjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5vdXRlcmRpdm1vYmlsZSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLm91dGVyZGl2bW9iaWxlIGltZyB7XG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xufVxuLm91dGVyZGl2bW9iaWxlIC53ZWxjb21lVGV4dERpdiB7XG4gIG1hcmdpbi10b3A6IDM1cHggIWltcG9ydGFudDtcbn1cbi5vdXRlcmRpdm1vYmlsZSAud2VsY29tZVRleHREaXYgcCB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIHNhbnM7XG4gIHdpZHRoOiA4NXZ3ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuLm91dGVyZGl2bW9iaWxlIC52ZXJzaW9uZGl2IHAge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cbi5vdXRlcmRpdm1vYmlsZSAuTG9naW5CdG5EaXYge1xuICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG4ub3V0ZXJkaXZtb2JpbGUgLkxvZ2luQnRuRGl2IGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA2NXZ3O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuLm91dGVyZGl2bW9iaWxlIC5mb3Jnb3RQd2REaXYge1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ub3V0ZXJkaXZtb2JpbGUgLmZvcmdvdFB3ZERpdiBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG4ub3V0ZXJkaXZtb2JpbGUgLnNpZ25VcERpdiBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5pbm5lcmNhcmQybW9iaWxlIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICAuaW5uZXJjYXJkMm1vYmlsZSBpb24tY2FyZC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuYnV0dG9uX291dGVyX2RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuYnV0dG9uX291dGVyX2RpdiAuYnV0dG9uX2lubmVyX2RpdiB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG5cbiAgLm91dGVyZGl2bW9iaWxlIC53ZWxjb21lVGV4dERpdiBwIHtcbiAgICB3aWR0aDogMTAwdmggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5Mb2dpbkJ0bkRpdiBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMzB2dyAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");







let LandingPage = class LandingPage {
    constructor(alertCtrl, network, platform, iab, route) {
        //  var netcon = this.network.onConnect().subscribe(async ()=>{
        //     document.getElementById('NetError').style.visibility = 'hidden';
        //  })
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=landing-landing-module-es2015.js.map