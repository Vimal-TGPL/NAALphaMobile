(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thankyou-thankyou-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/thankyou/thankyou.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/thankyou/thankyou.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div style=\"display: block;\">\n    <ion-card class=\"card\">\n      <div>\n        <div class=\"imgdiv\">\n          <img src=\"../../assets/images/NAA_aboutUs_tools.png\" />\n        </div>\n        <div>\n          <div *ngIf=\"showMessage==''\">\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                An Email has been sent to the email address you provided for validation.\n              </ion-text>\n            </div>\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                Please check your inbox.\n              </ion-text>\n            </div>\n            <div class=\"loginDiv\">\n              <ion-button class=\"loginBtn\" expand=\"block\" (click)=\"onLoginClick()\">\n                Login\n              </ion-button>\n            </div>\n          </div>\n          <div *ngIf=\"showMessage=='successfullyreset'\">\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                An Email has been sent to the email address you provided.\n              </ion-text>\n            </div>\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                Please check your inbox.\n              </ion-text>\n            </div>\n            <div class=\"loginDiv\">\n              <ion-button class=\"loginBtn\" expand=\"block\" (click)=\"onLoginClick()\">\n                Login\n              </ion-button>\n            </div>\n          </div>\n          <div *ngIf=\"showMessage=='successfullychanged'\">\n            <div class=\"textdiv\">\n              <ion-text class=\"text\">\n                Passsword has been successfully updated.\n              </ion-text>\n            </div>\n            <div class=\"loginDiv\">\n              <ion-button class=\"loginBtn\" expand=\"block\" (click)=\"onLoginClick()\">\n                Login\n              </ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thankyou.page */ "./src/app/thankyou/thankyou.page.ts");




var routes = [
    {
        path: '',
        component: _thankyou_page__WEBPACK_IMPORTED_MODULE_3__["ThankyouPage"]
    }
];
var ThankyouPageRoutingModule = /** @class */ (function () {
    function ThankyouPageRoutingModule() {
    }
    ThankyouPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ThankyouPageRoutingModule);
    return ThankyouPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thankyou_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thankyou-routing.module */ "./src/app/thankyou/thankyou-routing.module.ts");
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thankyou.page */ "./src/app/thankyou/thankyou.page.ts");







var ThankyouPageModule = /** @class */ (function () {
    function ThankyouPageModule() {
    }
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
    return ThankyouPageModule;
}());



/***/ }),

/***/ "./src/app/thankyou/thankyou.page.scss":
/*!*********************************************!*\
  !*** ./src/app/thankyou/thankyou.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#d3d8dc;\n}\n\n.card {\n  background-color: #2e4c99;\n  border-radius: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.imgdiv {\n  padding-bottom: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.imgdiv img {\n  width: 200px;\n}\n\n.text {\n  color: white;\n  font-size: 14px;\n  font-family: Open Sans SemiBold;\n}\n\n.textdiv {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  text-align: center;\n}\n\n.loginBtn {\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --color: #ffffff;\n  --ripple-color: #9a9a9a;\n  --color-activated: #ffffff;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  --border-radius: 15px;\n  height: 37px;\n  font-family: Open Sans semiBold;\n  font-size: 17px;\n  text-transform: inherit;\n}\n\n.loginDiv {\n  padding-left: 10vw;\n  padding-right: 10vw;\n  padding-top: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhhbmt5b3UvQzpcXFByb2plY3RzXFxOQUFscGhhTW9iaWxlL3NyY1xcYXBwXFx0aGFua3lvdVxcdGhhbmt5b3UucGFnZS5zY3NzIiwic3JjL2FwcC90aGFua3lvdS90aGFua3lvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBQTtBQ0FKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUNGSjs7QURPQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNKSjs7QURNSTtFQUNJLFlBQUE7QUNKUjs7QURRQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNMSjs7QURRQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLDhEQUFBO0VBQ0Esd0VBQUE7RUFDQSxzRUFBQTtFQUNBLG9FQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0xKOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC90aGFua3lvdS90aGFua3lvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkM2Q4ZGM7XHJcblxyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTRjOTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDk2dmg7ICAgICAgICAgICAgICAgIFxyXG59XHJcblxyXG4uaW1nZGl2e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxufVxyXG5cclxuLnRleHRkaXZ7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbkJ0bntcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpOyBcclxuICAgIC0tY29sb3JcdDogI2ZmZmZmZjtcclxuICAgIC0tcmlwcGxlLWNvbG9yIDogIzlhOWE5YTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkIDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5sb2dpbkRpdntcclxuICAgIHBhZGRpbmctbGVmdDogMTB2dztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XHJcbiAgICBwYWRkaW5nLXRvcDogNXZoO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkM2Q4ZGM7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlNGM5OTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uaW1nZGl2IHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmltZ2RpdiBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi50ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG59XG5cbi50ZXh0ZGl2IHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CdG4ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBiOWZmIDAlLCAjMmU0Yzk5IDEwMCUpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwYjlmZiAwJSwgIzJlNGM5OSAxMDAlKTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLS1yaXBwbGUtY29sb3I6ICM5YTlhOWE7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xufVxuXG4ubG9naW5EaXYge1xuICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gIHBhZGRpbmctcmlnaHQ6IDEwdnc7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ThankyouPage = /** @class */ (function () {
    function ThankyouPage(router, route) {
        this.router = router;
        this.route = route;
        this.showMessage = "";
    }
    ThankyouPage.prototype.ngOnInit = function () {
        if (this.route.snapshot.queryParams['resetPassword'] == "successfullyreset") {
            this.showMessage = "successfullyreset";
        }
        else if (this.route.snapshot.queryParams['resetPasswordChange'] == "successfullychanged") {
            this.showMessage = "successfullychanged";
        }
        else {
            this.showMessage = "";
        }
    };
    ThankyouPage.prototype.onLoginClick = function () {
        this.router.navigateByUrl('/auth');
    };
    ThankyouPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ThankyouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thankyou',
            template: __webpack_require__(/*! raw-loader!./thankyou.page.html */ "./node_modules/raw-loader/index.js!./src/app/thankyou/thankyou.page.html"),
            styles: [__webpack_require__(/*! ./thankyou.page.scss */ "./src/app/thankyou/thankyou.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ThankyouPage);
    return ThankyouPage;
}());



/***/ })

}]);
//# sourceMappingURL=thankyou-thankyou-module-es5.js.map