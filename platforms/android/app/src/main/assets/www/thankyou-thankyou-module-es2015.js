(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thankyou-thankyou-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/thankyou/thankyou.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/thankyou/thankyou.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content forceOverscroll=false>\n  <div class=\"outerDiv\">\n      <div>\n        <div class=\"imgdiv\">\n          <img src=\"../../assets/images/NAA_aboutUs_tools.png\" />\n        </div>\n        <div>\n          <div *ngIf=\"showMessage==''\">\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                An Email has been sent to the email address you provided for validation.\n              </ion-text>\n            </div>\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                Please check your inbox.\n              </ion-text>\n            </div>\n            <div class=\"loginDiv\">\n              <ion-button class=\"loginBtn\" expand=\"block\" (click)=\"onLoginClick()\">\n                Login\n              </ion-button>\n            </div>\n          </div>\n          <div *ngIf=\"showMessage=='successfullyreset'\">\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                An Email has been sent to the email address you provided.\n              </ion-text>\n            </div>\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                Please check your inbox.\n              </ion-text>\n            </div>\n            <div class=\"loginDiv\">\n              <ion-button class=\"loginBtn\" expand=\"block\" (click)=\"onLoginClick()\">\n                Login\n              </ion-button>\n            </div>\n          </div>\n          <div *ngIf=\"showMessage=='successfullychanged'\">\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                Passsword has been successfully updated.\n              </ion-text>\n            </div>\n            <div class=\"loginDiv\">\n              <ion-button class=\"loginBtn\" expand=\"block\" (click)=\"onLoginClick()\">\n                Login\n              </ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</ion-content>"

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width:0; }\n\nion-content {\n  --background: #274b9e; }\n\n.outerDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%; }\n\n.imgdiv {\n  padding-bottom: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.imgdiv img {\n    width: 200px; }\n\n.text {\n  color: white;\n  font-size: 14px;\n  font-family: Open Sans SemiBold; }\n\n.textdiv {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  text-align: center; }\n\n.loginBtn {\n  --background: #00b9ff;\n  --background-activated: #00b9ff;\n  --background-focused: #00b9ff;\n  --background-hover: #00b9ff;\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 25px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit; }\n\n.loginDiv {\n  padding-left: 10vw;\n  padding-right: 10vw;\n  padding-top: 5vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhhbmt5b3UvQzpcXFByb2plY3RzXFxOQUFscGhhTW9iaWxlL3NyY1xcYXBwXFx0aGFua3lvdVxcdGhhbmt5b3UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWUsRUFBQTs7QUFHbkI7RUFFSSxxQkFBYSxFQUFBOztBQUlqQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksb0JBQW9CO0VBQ3BCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUp2QjtJQU9RLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLCtCQUErQixFQUFBOztBQUduQztFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHFCQUFhO0VBQ2IsK0JBQXVCO0VBQ3ZCLDZCQUFxQjtFQUNyQiwyQkFBbUI7RUFDbkIsZ0JBQVM7RUFDVCx1QkFBZ0I7RUFDaEIsMEJBQW1CO0VBQ25CLHlCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixxQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoYW5reW91L3RoYW5reW91LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLS1ib3JkZXItd2lkdGg6MDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xyXG5cclxufVxyXG5cclxuLm91dGVyRGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmltZ2RpdntcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbn1cclxuXHJcbi50ZXh0ZGl2e1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW5CdG57XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDBiOWZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMwMGI5ZmY7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMGI5ZmY7IFxyXG4gICAgLS1jb2xvclx0OiAjZmZmZmZmO1xyXG4gICAgLS1yaXBwbGUtY29sb3IgOiAjOWE5YTlhO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQgOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgc2VtaUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxufVxyXG5cclxuLmxvZ2luRGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTB2dztcclxuICAgIHBhZGRpbmctdG9wOiA1dmg7XHJcbn0iXX0= */"

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
        template: __webpack_require__(/*! raw-loader!./thankyou.page.html */ "./node_modules/raw-loader/index.js!./src/app/thankyou/thankyou.page.html"),
        styles: [__webpack_require__(/*! ./thankyou.page.scss */ "./src/app/thankyou/thankyou.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ThankyouPage);



/***/ })

}]);
//# sourceMappingURL=thankyou-thankyou-module-es2015.js.map