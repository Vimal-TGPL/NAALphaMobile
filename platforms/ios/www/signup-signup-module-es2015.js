(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content forceOverscroll=false>\n    <div style=\"display: block;\">\n            <ion-card class=\"card\">\n                    <ion-card-header style=\"    padding: 0px;\">\n                        <ion-card-title class=\"cardTitle\">Sign Up</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content class=\"overfloscroll\" style=\" padding: 0px;\">\n                        <div id=\"dvSignUp\">\n\n                        </div>\n                    </ion-card-content>\n            </ion-card>\n    </div>\n</ion-content>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");








let SignupPageModule = class SignupPageModule {
};
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



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#d3d8dc;\n}\n\n.card {\n  background-color: #2e4c99;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.cardTitle {\n  text-align: center;\n  color: #00aeef;\n  font-size: 40px;\n  font-weight: bold;\n  padding-top: 15px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  padding: 25px;\n  justify-content: center;\n}\n\n.flex_item {\n  margin-bottom: 15px;\n}\n\n.label {\n  color: white;\n  font-size: 15px;\n  padding-bottom: 1%;\n}\n\n.input {\n  --background: white;\n  color: black;\n}\n\n.scrolldiv {\n  overflow: scroll;\n}\n\n.scrolldiv::-webkit-scrollbar {\n  display: none;\n}\n\n.checkboxLabel {\n  color: white;\n  padding-left: 10px;\n  font-size: 14px;\n}\n\n.agreeItem {\n  --padding-start: 0%;\n  --background: #2e4c99 ;\n  --background-activated: #2e4c99;\n}\n\n.signupBtn {\n  --background: #00aeef;\n  height: 45px;\n}\n\n.loginBtn {\n  --background: white;\n  color: #2e4c99;\n  --background-activated: #dadada;\n  --color-activated: #2e4c99;\n  height: 45px;\n}\n\n.select-icon {\n  padding: 10px;\n}\n\n.hs-custom-style fieldset {\n  padding: 0 10px 0 10px;\n}\n\n#dvSignUp {\n  padding: 0px 5px 0 15px;\n}\n\n@media screen and (orientation: landscape) {\n  .overfloscroll {\n    overflow: auto;\n  }\n\n  .overfloscroll::-webkit-scrollbar, *::-webkit-scrollbar {\n    display: none;\n  }\n}\n\n@media screen and (orientation: portrait) {\n  .agreecheckBox {\n    margin-top: 0%;\n    width: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBQTtBQ0FKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FDREo7O0FESUE7RUFFSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQyxrQkFBQTtBQ0ZMOztBREtBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtBQ0ZKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE9BO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FDSko7O0FET0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0FDSko7O0FETUE7RUFDSSxzQkFBQTtBQ0hKOztBRE1BO0VBQ0ksdUJBQUE7QUNISjs7QURLQTtFQUNJO0lBQ0ksY0FBQTtFQ0ZOOztFRElFO0lBQ0ksYUFBQTtFQ0ROO0FBQ0Y7O0FESUE7RUFDSTtJQUVJLGNBQUE7SUFDQSxXQUFBO0VDSE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkM2Q4ZGM7XG5cbn1cblxuLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNGM5OTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwOyAgICAgICAgICAgICAgICBcbn1cblxuLmNhcmRUaXRsZVxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgY29sb3I6ICMwMGFlZWY7IFxuICAgIGZvbnQtc2l6ZTogNDBweDsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxleF9pdGVte1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5sYWJlbHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XG59XG5cbi5pbnB1dHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnNjcm9sbGRpdnsgICAgXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnNjcm9sbGRpdjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcbiAgICBkaXNwbGF5OiBub25lOyBcbn1cblxuXG5cbi5jaGVja2JveExhYmVse1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWdyZWVJdGVte1xuICAgIC0tcGFkZGluZy1zdGFydDogMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmU0Yzk5IDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMmU0Yzk5O1xufVxuXG4uc2lnbnVwQnRue1xuICAgIC0tYmFja2dyb3VuZCA6ICMwMGFlZWY7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ubG9naW5CdG57XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzJlNGM5OTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZGFkYWRhO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmU0Yzk5O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLnNlbGVjdC1pY29ue1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uaHMtY3VzdG9tLXN0eWxlIGZpZWxkc2V0e1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHggO1xufVxuXG4jZHZTaWduVXB7XG4gICAgcGFkZGluZzogMHB4IDVweCAwIDE1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XG4gICAgLm92ZXJmbG9zY3JvbGx7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgICAub3ZlcmZsb3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIsICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IFxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSB7XG4gICAgLmFncmVlY2hlY2tCb3h7XG5cbiAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2QzZDhkYztcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5jYXJkVGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDBhZWVmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZXhfaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMSU7XG59XG5cbi5pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNjcm9sbGRpdiB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5zY3JvbGxkaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoZWNrYm94TGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWdyZWVJdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjMmU0Yzk5IDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzJlNGM5OTtcbn1cblxuLnNpZ251cEJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzAwYWVlZjtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ubG9naW5CdG4ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzJlNGM5OTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2RhZGFkYTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyZTRjOTk7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLnNlbGVjdC1pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmhzLWN1c3RvbS1zdHlsZSBmaWVsZHNldCB7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG59XG5cbiNkdlNpZ25VcCB7XG4gIHBhZGRpbmc6IDBweCA1cHggMCAxNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAub3ZlcmZsb3Njcm9sbCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAub3ZlcmZsb3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIsICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5hZ3JlZWNoZWNrQm94IHtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICB3aWR0aDogMzJweDtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






let SignupPage = class SignupPage {
    constructor(route, toastController, http, alertctrl, userServices) {
        this.route = route;
        this.toastController = toastController;
        this.http = http;
        this.alertctrl = alertctrl;
        this.userServices = userServices;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
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
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map