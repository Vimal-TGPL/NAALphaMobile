(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width:0; }\n\nion-content {\n  --background: #274b9e; }\n\n.outerDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n\n.imgdiv {\n  padding-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.imgdiv img {\n    width: 200px; }\n\n.text {\n  color: white;\n  font-size: 14px;\n  font-family: Open Sans SemiBold; }\n\n.textdiv {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  text-align: center; }\n\n.loginBtn {\n  --background: #00b9ff;\n  --background-activated: #00b9ff;\n  --background-focused: #00b9ff;\n  --background-hover: #00b9ff;\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 25px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit; }\n\n.loginDiv {\n  padding-left: 10vw;\n  padding-right: 10vw;\n  padding-top: 5vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC90aGFua3lvdS90aGFua3lvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZSxFQUFBOztBQUduQjtFQUVJLHFCQUFhLEVBQUE7O0FBSWpCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUp2QjtJQU9RLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLCtCQUErQixFQUFBOztBQUduQztFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHFCQUFhO0VBQ2IsK0JBQXVCO0VBQ3ZCLDZCQUFxQjtFQUNyQiwyQkFBbUI7RUFDbkIsZ0JBQVM7RUFDVCx1QkFBZ0I7RUFDaEIsMEJBQW1CO0VBQ25CLHlCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixxQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoYW5reW91L3RoYW5reW91LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6MDtcbn1cblxuaW9uLWNvbnRlbnR7XG5cbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG5cbn1cblxuLm91dGVyRGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWdkaXZ7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgfVxufVxuXG4udGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG59XG5cbi50ZXh0ZGl2e1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnRue1xuICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDBiOWZmO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMDBiOWZmO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzAwYjlmZjsgXG4gICAgLS1jb2xvclx0OiAjZmZmZmZmO1xuICAgIC0tcmlwcGxlLWNvbG9yIDogIzlhOWE5YTtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZCA6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGhlaWdodDogMzdweDtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuLmxvZ2luRGl2e1xuICAgIHBhZGRpbmctbGVmdDogMTB2dztcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHZ3O1xuICAgIHBhZGRpbmctdG9wOiA1dmg7XG59Il19 */");

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
//# sourceMappingURL=11-es2015.js.map