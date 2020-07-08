(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content forceOverscroll=false>\n    <div style=\"display: block;\">\n        <!-- <form [formGroup]=\"signupForm\"> -->\n            <ion-card class=\"card\">\n                <!-- <div class=\"scrolldiv\"> -->\n                    <ion-card-header style=\"    padding: 0px;\">\n                        <ion-card-title class=\"cardTitle\">Sign Up</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content class=\"overfloscroll\" style=\" padding: 0px;\">\n                        <div id=\"dvSignUp\">\n\n                        </div>\n                    </ion-card-content>\n                <!-- </div> -->\n            </ion-card>\n        <!-- </form> -->\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
var SignupPageRoutingModule = /** @class */ (function () {
    function SignupPageRoutingModule() {
    }
    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SignupPageRoutingModule);
    return SignupPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");








var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#d3d8dc;\n}\n\n.card {\n  background-color: #2e4c99;\n  border-radius: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.cardTitle {\n  text-align: center;\n  color: #00aeef;\n  font-size: 40px;\n  font-weight: bold;\n  padding-top: 15px;\n}\n\n.form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 25px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.flex_item {\n  margin-bottom: 15px;\n}\n\n.label {\n  color: white;\n  font-size: 15px;\n  padding-bottom: 1%;\n}\n\n.input {\n  --background: white;\n  color: black;\n}\n\n.scrolldiv {\n  overflow: scroll;\n}\n\n.scrolldiv::-webkit-scrollbar {\n  display: none;\n}\n\n.checkboxLabel {\n  color: white;\n  padding-left: 10px;\n  font-size: 14px;\n}\n\n.agreeItem {\n  --padding-start: 0%;\n  --background: #2e4c99 ;\n  --background-activated: #2e4c99;\n}\n\n.signupBtn {\n  --background: #00aeef;\n  height: 45px;\n}\n\n.loginBtn {\n  --background: white;\n  color: #2e4c99;\n  --background-activated: #dadada;\n  --color-activated: #2e4c99;\n  height: 45px;\n}\n\n.select-icon {\n  padding: 10px;\n}\n\n.hs-custom-style fieldset {\n  padding: 0 10px 0 10px;\n}\n\n#dvSignUp {\n  padding: 0px 5px 0 15px;\n}\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto;\n  }\n\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none;\n  }\n}\n\n@media screen and (orientation: portrait) {\n  .agreecheckBox {\n    margin-top: 0%;\n    width: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FDQUo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtBQ0ZKOztBREtBO0VBRUksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDSEo7O0FETUE7RUFFSSxtQkFBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQyxrQkFBQTtBQ0pMOztBRFFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtBQ0xKOztBRFFBO0VBQ0ksYUFBQTtBQ0xKOztBRFVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFVBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FDUEo7O0FEVUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNQSjs7QURVQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FDUEo7O0FEVUE7RUFDSSxhQUFBO0FDUEo7O0FEU0E7RUFDSSxzQkFBQTtBQ05KOztBRFlBO0VBQ0ksdUJBQUE7QUNUSjs7QURXQTtFQUNJO0lBQ0ksY0FBQTtFQ1JOOztFRFVFO0lBQ0ksYUFBQTtFQ1BOO0FBQ0Y7O0FEVUE7RUFDSTtJQUVJLGNBQUE7SUFDQSxXQUFBO0VDVE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZDNkOGRjO1xyXG5cclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwOyAgICAgICAgICAgICAgICBcclxufVxyXG5cclxuLmNhcmRUaXRsZVxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgY29sb3I6ICMwMGFlZWY7IFxyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4X2l0ZW17XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5sYWJlbHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNjcm9sbGRpdnsgICAgXHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4uc2Nyb2xsZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7IFxyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbn1cclxuXHJcblxyXG5cclxuLmNoZWNrYm94TGFiZWx7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5hZ3JlZUl0ZW17XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmU0Yzk5IDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyZTRjOTk7XHJcbn1cclxuXHJcbi5zaWdudXBCdG57XHJcbiAgICAtLWJhY2tncm91bmQgOiAjMDBhZWVmO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4ubG9naW5CdG57XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMyZTRjOTk7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZGFkYWRhO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyZTRjOTk7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5zZWxlY3QtaWNvbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmhzLWN1c3RvbS1zdHlsZSBmaWVsZHNldHtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHggO1xyXG59XHJcbi8vIGZvcm0uaHMtZm9ybS04YTVjM2I5OS01Y2E5LTRmMjgtOGQ5OS02MTZjODUyOGQ1M2VfOWFiZGUwNGQtZmJjMC00YTRlLWIwMmItOTRhMjJmZmYxMWJkOm5vdCguaHMtdmlkZW8tZm9ybSkgLmZvcm0tY29sdW1ucy0yIC5ocy1mb3JtLWZpZWxke1xyXG4vLyAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4jZHZTaWduVXB7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4IDAgMTVweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XHJcbiAgICAub3ZlcmZsb3Njcm9sbHtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC5vdmVyZmxvc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciwgKjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSB7XHJcbiAgICAuYWdyZWVjaGVja0JveHtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2QzZDhkYztcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5jYXJkVGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDBhZWVmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZXhfaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMSU7XG59XG5cbi5pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNjcm9sbGRpdiB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5zY3JvbGxkaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoZWNrYm94TGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWdyZWVJdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjMmU0Yzk5IDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzJlNGM5OTtcbn1cblxuLnNpZ251cEJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzAwYWVlZjtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ubG9naW5CdG4ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzJlNGM5OTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2RhZGFkYTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyZTRjOTk7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLnNlbGVjdC1pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmhzLWN1c3RvbS1zdHlsZSBmaWVsZHNldCB7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG59XG5cbiNkdlNpZ25VcCB7XG4gIHBhZGRpbmc6IDBweCA1cHggMCAxNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAub3ZlcmZsb3Njcm9sbCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAub3ZlcmZsb3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIsICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5hZ3JlZWNoZWNrQm94IHtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICB3aWR0aDogMzJweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






var SignupPage = /** @class */ (function () {
    // signupForm: FormGroup;
    function SignupPage(route, toastController, http, alertctrl, userServices) {
        this.route = route;
        this.toastController = toastController;
        this.http = http;
        this.alertctrl = alertctrl;
        this.userServices = userServices;
    }
    SignupPage.prototype.ngAfterViewInit = function () {
        // hbspt.forms.create({
        //   portalId: "6010193",
        //   formId: "8a5c3b99-5ca9-4f28-8d99-616c8528d53e",
        //   target: "#dvSignUp",
        //   onFormSubmit: function ($form) { 
        //   }
        // });
    };
    SignupPage.prototype.ngOnInit = function () {
        // this.signupForm = new FormGroup({
        //   FirstName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern('^[a-zA-Z]+')]),
        //   LastName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z]+')]),
        //   Email: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.email]),
        //   Password: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(6)]),
        //   SelectIAMA: new FormControl('', [Validators.required]),
        //   CompanyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        //   IAgree: new FormControl(false, [Validators.requiredTrue]),
        // });
    };
    // OnsignupClick() {
    //   let data = {
    //     FirstName: this.signupForm.controls["FirstName"].value,
    //     LastName: this.signupForm.controls["LastName"].value,
    //     Username: this.signupForm.controls["Email"].value,
    //     Company: this.signupForm.controls["CompanyName"].value,
    //     Password: this.signupForm.controls["Password"].value,
    //     InvestorType: this.signupForm.controls["SelectIAMA"].value,
    //     Email: this.signupForm.controls["Email"].value,
    //     IsPolicyAccepted: this.signupForm.controls["IAgree"].value == true ? 'Y' : 'N',
    //     Token: ""
    //   }
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //     })
    //   };
    //   this.userServices.register(data)
    //   .subscribe(data=>{
    //     console.log(data);
    //     this.signupForm.reset();
    //     this.route.navigateByUrl('/thankyou');
    //   },err=>{
    //     console.log(err)
    //     this.presentToast(err.error.message);
    //   })
    // }
    SignupPage.prototype.OnLoginClick = function () {
        this.route.navigateByUrl('/auth');
    };
    SignupPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es5.js.map