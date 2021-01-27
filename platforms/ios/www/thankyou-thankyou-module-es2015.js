(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thankyou-thankyou-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/thankyou/thankyou.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thankyou/thankyou.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content forceOverscroll=false>\n  <div class=\"outerDiv\">\n      <div>\n        <div class=\"imgdiv\">\n          <img src=\"../../assets/images/NAA_aboutUs_tools.png\" />\n        </div>\n        <div>\n          <div *ngIf=\"showMessage==''\">\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                An Email has been sent to the email address you provided for validation.\n              </ion-text>\n            </div>\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                Please check your inbox.\n              </ion-text>\n            </div>\n            <div class=\"loginDiv\">\n              <ion-button class=\"loginBtn\" expand=\"block\" (click)=\"onLoginClick()\">\n                Login\n              </ion-button>\n            </div>\n          </div>\n          <div *ngIf=\"showMessage=='successfullyreset'\">\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                An Email has been sent to the email address you provided.\n              </ion-text>\n            </div>\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                Please check your inbox.\n              </ion-text>\n            </div>\n            <div class=\"loginDiv\">\n              <ion-button class=\"loginBtn\" expand=\"block\" (click)=\"onLoginClick()\">\n                Login\n              </ion-button>\n            </div>\n          </div>\n          <div *ngIf=\"showMessage=='successfullychanged'\">\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                Passsword has been successfully updated.\n              </ion-text>\n            </div>\n            <div class=\"loginDiv\">\n              <ion-button class=\"loginBtn\" expand=\"block\" (click)=\"onLoginClick()\">\n                Login\n              </ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/thankyou/thankyou-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/thankyou/thankyou-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ThankyouPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageRoutingModule", function() { return ThankyouPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thankyou.page */ "./src/app/thankyou/thankyou.page.ts");




const routes = [
    {
        path: '',
        component: _thankyou_page__WEBPACK_IMPORTED_MODULE_3__["ThankyouPage"]
    }
];
let ThankyouPageRoutingModule = class ThankyouPageRoutingModule {
};
ThankyouPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThankyouPageRoutingModule);



/***/ }),

/***/ "./src/app/thankyou/thankyou.module.ts":
/*!*********************************************!*\
  !*** ./src/app/thankyou/thankyou.module.ts ***!
  \*********************************************/
/*! exports provided: ThankyouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _thankyou_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thankyou-routing.module */ "./src/app/thankyou/thankyou-routing.module.ts");
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thankyou.page */ "./src/app/thankyou/thankyou.page.ts");







let ThankyouPageModule = class ThankyouPageModule {
};
ThankyouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _thankyou_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThankyouPageRoutingModule"]
        ],
        declarations: [_thankyou_page__WEBPACK_IMPORTED_MODULE_6__["ThankyouPage"]]
    })
], ThankyouPageModule);



/***/ }),

/***/ "./src/app/thankyou/thankyou.page.scss":
/*!*********************************************!*\
  !*** ./src/app/thankyou/thankyou.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width:0;\n}\n\nion-content {\n  --background: #274b9e;\n}\n\n.outerDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.imgdiv {\n  padding-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imgdiv img {\n  width: 200px;\n}\n\n.text {\n  color: white;\n  font-size: 14px;\n  font-family: Open Sans SemiBold;\n}\n\n.textdiv {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  text-align: center;\n}\n\n.loginBtn {\n  --background: #00b9ff;\n  --background-activated: #00b9ff;\n  --background-focused: #00b9ff;\n  --background-hover: #00b9ff;\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 25px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit;\n}\n\n.loginDiv {\n  padding-left: 10vw;\n  padding-right: 10vw;\n  padding-top: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC90aGFua3lvdS90aGFua3lvdS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RoYW5reW91L3RoYW5reW91LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFFSSxxQkFBQTtBQ0FKOztBRElBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREo7O0FER0k7RUFDSSxZQUFBO0FDRFI7O0FES0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvdGhhbmt5b3UvdGhhbmt5b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAtLWJvcmRlci13aWR0aDowO1xufVxuXG5pb24tY29udGVudHtcblxuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcblxufVxuXG4ub3V0ZXJEaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmltZ2RpdntcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG59XG5cbi50ZXh0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbn1cblxuLnRleHRkaXZ7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CdG57XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMwMGI5ZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMwMGI5ZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDBiOWZmOyBcbiAgICAtLWNvbG9yXHQ6ICNmZmZmZmY7XG4gICAgLS1yaXBwbGUtY29sb3IgOiAjOWE5YTlhO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkIDogI2ZmZmZmZjtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgc2VtaUJvbGQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xufVxuXG4ubG9naW5EaXZ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XG4gICAgcGFkZGluZy10b3A6IDV2aDtcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJvcmRlci13aWR0aDowO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcbn1cblxuLm91dGVyRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltZ2RpdiB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbWdkaXYgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xufVxuXG4udGV4dGRpdiB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDBiOWZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzAwYjlmZjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDBiOWZmO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAtLXJpcHBsZS1jb2xvcjogIzlhOWE5YTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgc2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG59XG5cbi5sb2dpbkRpdiB7XG4gIHBhZGRpbmctbGVmdDogMTB2dztcbiAgcGFkZGluZy1yaWdodDogMTB2dztcbiAgcGFkZGluZy10b3A6IDV2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/thankyou/thankyou.page.ts":
/*!*******************************************!*\
  !*** ./src/app/thankyou/thankyou.page.ts ***!
  \*******************************************/
/*! exports provided: ThankyouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPage", function() { return ThankyouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ThankyouPage = class ThankyouPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.showMessage = "";
    }
    ngOnInit() {
        if (this.route.snapshot.queryParams['resetPassword'] == "successfullyreset") {
            this.showMessage = "successfullyreset";
        }
        else if (this.route.snapshot.queryParams['resetPasswordChange'] == "successfullychanged") {
            this.showMessage = "successfullychanged";
        }
        else {
            this.showMessage = "";
        }
    }
    onLoginClick() {
        this.router.navigateByUrl('/auth');
    }
};
ThankyouPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ThankyouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thankyou',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thankyou.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/thankyou/thankyou.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thankyou.page.scss */ "./src/app/thankyou/thankyou.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ThankyouPage);



/***/ })

}]);
//# sourceMappingURL=thankyou-thankyou-module-es2015.js.map