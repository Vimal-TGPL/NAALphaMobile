(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content forceOverscroll = false>\r\n  <div style=\"display: block;\">\r\n    <form [formGroup]=\"forgotPass\">\r\n    <ion-card class=\"card\" [ngClass]=\"{'tab_background': !mobile}\">\r\n      <ion-card class=\"outercard\" [ngClass]=\"{'outercardmobile': mobile}\">\r\n        <ion-card class=\"innercard\" [ngClass]=\"{'innercardmobile': mobile}\">\r\n          \r\n        \r\n      <ion-card-header style=\"padding: 0px; background: none;\">\r\n        <ion-card-title class=\"cardTitle\">Forgot Password</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"overfloscroll card-Content\" style=\"padding: 0px;\">\r\n        <div class=\"form\">\r\n            <!-- <div class=\"flex_item\">\r\n                <ion-label class=\"label\">Last Name<ion-text color=\"danger\"> *</ion-text>\r\n                </ion-label>\r\n                <ion-item lines=\"none\" class=\"input\">\r\n                    <ion-input type=\"text\" placeholder=\"Last Name\" formControlName=\"LastName\">\r\n                    </ion-input>\r\n                </ion-item>\r\n            </div> -->\r\n            <div class=\"flex_item\">\r\n              <ion-label class=\"label\">Email<ion-text color=\"danger\"> *</ion-text>\r\n              </ion-label>\r\n              <ion-item lines=\"none\" class=\"input\">\r\n                  <ion-input autofocus=\"true\" inputmode=\"email\" enterkeyhint=\"Submit\" placeholder=\"Email Address\" formControlName=\"Email\" (ionInput)=\"onemialTextInput()\">\r\n                  </ion-input>\r\n              </ion-item>\r\n              <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'required') && email\">Email is required</div>\r\n          </div>\r\n          <div class=\"flex_item\">\r\n          <div class=\"inner_flex\">\r\n            <ion-button class=\"submitBtn\" size=\"medium\" expand=\"block\" (click)=\"OnSubmitClick()\" [disabled]=\"!forgotPass.valid\">\r\n              <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad?'Submitting...':'Submit'}}\r\n            </ion-button>\r\n        </div>\r\n        <div>\r\n          <ion-button class=\"loginBtn\" fill=\"clear\" size=\"medium\" expand=\"block\" (click)=\"OnLoginClick()\">\r\n              Login\r\n          </ion-button>\r\n      </div>\r\n    </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-card>\r\n    </ion-card>\r\n  </form>\r\n  </div>\r\n</ion-content>"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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

module.exports = "ion-content {\n  --ion-background-color:#d3d8dc; }\n\n.card {\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n  height: 100vh;\n  margin: 0;\n  border-radius: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.outercard {\n  height: 90%;\n  width: 90%;\n  background: #d3d8dc;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px; }\n\n.outercardmobile {\n  height: 100% !important;\n  width: 100% !important;\n  margin: 0 !important;\n  border-radius: 0 !important; }\n\n.innercard {\n  height: 85%;\n  width: 85%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  --background: linear-gradient(180deg,#2E4C99, #233771);\n  border-radius: 20px; }\n\n.innercard .card-Content {\n    width: 40%; }\n\n.innercardmobile {\n  height: 95% !important;\n  width: 95% !important; }\n\n.innercardmobile .card-Content {\n    width: 90% !important; }\n\n.scrolldiv {\n  overflow: hidden; }\n\n.cardTitle {\n  font-family: Open Sans Bold;\n  text-align: center;\n  color: #00aeef;\n  font-size: 32px;\n  font-weight: bold;\n  padding-top: 15px; }\n\n.form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 20px 0;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.flex_item {\n  padding: 10px; }\n\n.flex_item ion-item {\n    --min-height: 37px;\n    font-size: 13px;\n    --padding-start: 10px; }\n\n.flex_item ion-item ion-input {\n      --padding-bottom: 0;\n      --padding-start: 0;\n      --padding-end: 0;\n      --padding-top: 0; }\n\n.label {\n  color: white;\n  font-size: 13px;\n  font-family: Open Sans;\n  padding-left: 5px; }\n\n.input {\n  --background: white;\n  color: black; }\n\n.submitBtn {\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  --border-radius: 15px;\n  height: 50px;\n  font-size: 22px;\n  text-transform: inherit; }\n\n.loginBtn {\n  color: #00b9ff;\n  --color-activated: #00b9ff;\n  height: 33px;\n  text-transform: inherit;\n  font-family: Open Sans semiBold;\n  font-size: 13px; }\n\n.inner_flex {\n  padding: 10px 0px; }\n\n.inner_flex ion-button {\n    font-family: Open Sans semiBold;\n    font-size: 15px;\n    height: 36px; }\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto; }\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none; }\n  .innercardmobile .card-Content {\n    width: 40vW !important; } }\n\n.tab_background {\n  --background: url('Tool_BG.svg') !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksc0RBQWE7RUFDYixhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsc0RBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFSdkI7SUFXUSxVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksc0JBQXNCO0VBQ3RCLHFCQUFxQixFQUFBOztBQUZ6QjtJQUtRLHFCQUFxQixFQUFBOztBQUk3QjtFQUNLLGdCQUFnQixFQUFBOztBQUdyQjtFQUVJLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFFSSxhQUFhLEVBQUE7O0FBRmpCO0lBS1Esa0JBQWE7SUFDYixlQUFlO0lBQ2YscUJBQWdCLEVBQUE7O0FBUHhCO01BVVksbUJBQWlCO01BQ2pCLGtCQUFnQjtNQUNoQixnQkFBYztNQUNkLGdCQUFjLEVBQUE7O0FBTzFCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksbUJBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksOERBQWE7RUFDYix3RUFBdUI7RUFDdkIsc0VBQXFCO0VBQ3JCLG9FQUFtQjtFQUNuQixnQkFBUztFQUNULHVCQUFnQjtFQUNoQiwwQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ssY0FBYztFQUNmLDBCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRHJCO0lBSVEsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBSXBCO0VBQ0k7SUFDSSxjQUFjLEVBQUE7RUFFbEI7SUFDSSxhQUFhLEVBQUE7RUFHakI7SUFDSSxzQkFBc0IsRUFBQSxFQUN6Qjs7QUFHTDtFQUNJLDJDQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2QzZDhkYztcclxuXHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMyRTRDOTksICMyMzM3NzEpOyAgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgICAgICAgIFxyXG59XHJcblxyXG4ub3V0ZXJjYXJke1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2QzZDhkYztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXJjYXJkbW9iaWxle1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbm5lcmNhcmR7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywjMkU0Qzk5LCAjMjMzNzcxKTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAuY2FyZC1Db250ZW50e1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbm5lcmNhcmRtb2JpbGV7XHJcbiAgICBoZWlnaHQ6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5jYXJkLUNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Nyb2xsZGl2eyAgICBcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZFRpdGxlXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogIzAwYWVlZjsgXHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4X2l0ZW17XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcblxyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4ubGFiZWx7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnN1Ym1pdEJ0bntcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpOyBcclxuICAgIC0tY29sb3JcdDogI2ZmZmZmZjtcclxuICAgIC0tcmlwcGxlLWNvbG9yIDogIzlhOWE5YTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkIDogI2ZmZmZmZjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubG9naW5CdG57XHJcbiAgICAgY29sb3I6ICMwMGI5ZmY7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzAwYjlmZjtcclxuICAgIGhlaWdodDogMzNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBzZW1pQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmlubmVyX2ZsZXh7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgc2VtaUJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkge1xyXG4gICAgLm92ZXJmbG9zY3JvbGx7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICAub3ZlcmZsb3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIsICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgXHJcbiAgICB9XHJcblxyXG4gICAgLmlubmVyY2FyZG1vYmlsZSAuY2FyZC1Db250ZW50e1xyXG4gICAgICAgIHdpZHRoOiA0MHZXICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJfYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL1Rvb2xfQkcuc3ZnJykgIWltcG9ydGFudDtcclxufSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







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
            console.log(err);
            this.presentToast(err.error.message);
        });
        console.log(data);
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