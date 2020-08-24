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

module.exports = "ion-content {\n  --ion-background-color:#d3d8dc; }\n\n.card {\n  --background: linear-gradient(-90deg,#2E4C99, #233771);\n  border-radius: 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100vh;\n  margin: 0px; }\n\n.innercard {\n  height: 90%;\n  width: 90%;\n  background: #d3d8dc;\n  border-radius: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.innercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important;\n  box-shadow: none !important; }\n\n.innercard2 {\n  height: 85%;\n  width: 85%;\n  --background: linear-gradient(-90deg,#2E4C99, #233771);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px; }\n\n.innercard2mobile {\n  height: 95% !important;\n  width: 95% !important; }\n\n.ParentDiv {\n  display: block; }\n\n.outerdiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.outerdiv img {\n    width: 250px; }\n\n.outerdiv .welcomeTextDiv {\n    margin-top: 25px; }\n\n.outerdiv .welcomeTextDiv p {\n      display: inline-block;\n      width: 50vh;\n      text-align: center;\n      color: #ffffff;\n      font-size: 20px; }\n\n.outerdiv .versiondiv {\n    margin-top: 25px; }\n\n.outerdiv .versiondiv p {\n      font-family: Open Sans SemiBold;\n      display: inline-block;\n      width: 50vh;\n      text-align: center;\n      color: #ffffff;\n      font-size: 14px; }\n\n.outerdiv .LoginBtnDiv {\n    margin-top: 30px; }\n\n.outerdiv .LoginBtnDiv ion-button {\n      --border-radius: 15px;\n      font-size: 22px;\n      height: 50px;\n      --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n      --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n      --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n      --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n      color: #ffffff;\n      width: 30vh;\n      font-family: Open Sans semiBold; }\n\n.outerdiv .forgotPwdDiv {\n    margin-top: 25px; }\n\n.outerdiv .forgotPwdDiv ion-button {\n      height: 21px;\n      color: #00b9ff;\n      font-size: 17px;\n      font-family: Open Sans SemiBold; }\n\n.outerdiv .signUpDiv ion-button {\n    height: 21px;\n    color: #ffffff;\n    font-size: 17px;\n    font-family: Open Sans SemiBold; }\n\n.outerdiv .signUpDiv ion-button span {\n      color: #00b9ff;\n      padding-left: 5px; }\n\n.outerdivmobile {\n  padding-bottom: 20px; }\n\n.outerdivmobile img {\n    width: 200px !important; }\n\n.outerdivmobile .welcomeTextDiv {\n    margin-top: 35px !important; }\n\n.outerdivmobile .welcomeTextDiv p {\n      font-family: Open sans;\n      width: 85vw !important;\n      font-size: 14px !important; }\n\n.outerdivmobile .versiondiv p {\n    font-size: 16px !important; }\n\n.outerdivmobile .LoginBtnDiv {\n    margin-top: 25px !important; }\n\n.outerdivmobile .LoginBtnDiv ion-button {\n      height: 35px !important;\n      font-size: 16px !important;\n      width: 65vw;\n      text-transform: inherit !important; }\n\n.outerdivmobile .forgotPwdDiv {\n    margin-top: 20px !important; }\n\n.outerdivmobile .forgotPwdDiv ion-button {\n      font-size: 12px !important;\n      text-transform: inherit !important; }\n\n.outerdivmobile .signUpDiv ion-button {\n    font-size: 12px !important;\n    text-transform: inherit !important; }\n\n@media screen and (orientation: landscape) {\n  .innercard2mobile {\n    overflow: auto; }\n    .innercard2mobile ion-card-content {\n      height: 100%; }\n  .button_outer_div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center; }\n    .button_outer_div .button_inner_div {\n      width: 400px; }\n  .outerdivmobile .welcomeTextDiv p {\n    width: 100vh !important; }\n  .LoginBtnDiv ion-button {\n    width: 30vw !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXGxhbmRpbmdcXGxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksc0RBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFFYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysc0RBQWE7RUFDYixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksc0JBQXNCO0VBQ3RCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFKdkI7SUFPUSxZQUFZLEVBQUE7O0FBUHBCO0lBV1EsZ0JBQWdCLEVBQUE7O0FBWHhCO01BY1kscUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGVBQWUsRUFBQTs7QUFsQjNCO0lBdUJRLGdCQUFnQixFQUFBOztBQXZCeEI7TUEwQlksK0JBQStCO01BQy9CLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlLEVBQUE7O0FBL0IzQjtJQXFDUSxnQkFBZ0IsRUFBQTs7QUFyQ3hCO01Bd0NZLHFCQUFnQjtNQUFPLGVBQWU7TUFBRSxZQUFZO01BQ3BELDhEQUFhO01BQ2Isd0VBQXVCO01BQ3ZCLHNFQUFxQjtNQUNyQixvRUFBbUI7TUFDbkIsY0FBYztNQUNkLFdBQVc7TUFDWCwrQkFBK0IsRUFBQTs7QUEvQzNDO0lBb0RRLGdCQUFnQixFQUFBOztBQXBEeEI7TUF1RFksWUFBWTtNQUNaLGNBQWM7TUFDZCxlQUFlO01BQ2YsK0JBQStCLEVBQUE7O0FBMUQzQztJQWlFWSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZiwrQkFBK0IsRUFBQTs7QUFwRTNDO01BdUVnQixjQUFjO01BQ2QsaUJBQWlCLEVBQUE7O0FBT2pDO0VBRUksb0JBQW9CLEVBQUE7O0FBRnhCO0lBS1EsdUJBQXVCLEVBQUE7O0FBTC9CO0lBU1EsMkJBQTJCLEVBQUE7O0FBVG5DO01BV1ksc0JBQXNCO01BQ3RCLHNCQUFzQjtNQUN0QiwwQkFBMEIsRUFBQTs7QUFidEM7SUFvQlksMEJBQTBCLEVBQUE7O0FBcEJ0QztJQXlCUSwyQkFBMkIsRUFBQTs7QUF6Qm5DO01BNEJZLHVCQUF1QjtNQUN2QiwwQkFBMEI7TUFDMUIsV0FBVztNQUNYLGtDQUFrQyxFQUFBOztBQS9COUM7SUFvQ1EsMkJBQTJCLEVBQUE7O0FBcENuQztNQXNDWSwwQkFBMEI7TUFDMUIsa0NBQWtDLEVBQUE7O0FBdkM5QztJQThDWSwwQkFBMEI7SUFDMUIsa0NBQWtDLEVBQUE7O0FBcUI1QztFQUNFO0lBQ0ksY0FBYyxFQUFBO0lBRGxCO01BSVEsWUFBWSxFQUFBO0VBSXBCO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0lBRjNCO01BS1EsWUFBWSxFQUFBO0VBSXBCO0lBR1ksdUJBQXVCLEVBQUE7RUFNbkM7SUFFUSxzQkFBc0IsRUFBQSxFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkM2Q4ZGM7XHJcbiAgICBcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzJFNEM5OSwgIzIzMzc3MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgXHJcbiAgICBtYXJnaW46IDBweDsgICAgICAgICAgICAgXHJcbn1cclxuXHJcbi5pbm5lcmNhcmR7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNkOGRjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbm5lcmNhcmRtb2JpbGV7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlubmVyY2FyZDJ7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIzJFNEM5OSwgIzIzMzc3MSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmlubmVyY2FyZDJtb2JpbGV7XHJcbiAgICBoZWlnaHQ6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uUGFyZW50RGl2e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5vdXRlcmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndlbGNvbWVUZXh0RGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDUwdmg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnNpb25kaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNTB2aDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAvLyBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLkxvZ2luQnRuRGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDsgZm9udC1zaXplOiAyMnB4OyBoZWlnaHQ6IDUwcHg7IFxyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTsgXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyBcclxuICAgICAgICAgICAgd2lkdGg6IDMwdmg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgc2VtaUJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3Jnb3RQd2REaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMXB4OyBcclxuICAgICAgICAgICAgY29sb3I6ICMwMGI5ZmY7IFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaWduVXBEaXZ7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDogMjFweDsgXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG5cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBiOWZmOyBcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLm91dGVyZGl2bW9iaWxle1xyXG5cclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAud2VsY29tZVRleHREaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIHNhbnM7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NXZ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAudmVyc2lvbmRpdntcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIC5Mb2dpbkJ0bkRpdntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDY1dnc7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3Jnb3RQd2REaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2lnblVwRGl2e1xyXG5cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY1MHB4KSB7XHJcbi8vICAgICAuY2FyZHtcclxuLy8gICAgICAgICAvLyBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gICAgIC50b29sLWltZyBpbWd7XHJcbi8vICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4vLyAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLnRvb2wtaW1ne1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XHJcbiAgICAuaW5uZXJjYXJkMm1vYmlsZXtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uX291dGVyX2RpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAuYnV0dG9uX2lubmVyX2RpdntcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3V0ZXJkaXZtb2JpbGV7XHJcbiAgICAgICAgLndlbGNvbWVUZXh0RGl2e1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLkxvZ2luQnRuRGl2e1xyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfSJdfQ== */"

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
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");








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