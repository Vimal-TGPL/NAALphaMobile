(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" height=\"35\" alt=\"Logo\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content forceOverscroll = false>\n  <div class=\"outerdiv\">\n    \n    <form [formGroup]=\"forgotPass\">\n      <ion-text>\n        <h1>Forgot Password</h1>\n      </ion-text>\n      <div>\n        <ion-label class=\"label\">Email<ion-text color=\"danger\"> *</ion-text>\n        </ion-label>\n        <ion-item lines=\"none\" class=\"input\" lines=\"none\">\n            <ion-input autofocus=\"true\" inputmode=\"email\" (ionInput)=\"onemialTextInput()\" enterkeyhint=\"Submit\" placeholder=\"Email Address\" formControlName=\"Email\" (ionInput)=\"onemialTextInput()\">\n            </ion-input>\n        </ion-item>\n        <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'required') && email\">An email address is required</div>\n        <div style=\"color: #f44336; padding-top: 0.2rem; font-size: 11px; font-family: Open Sans;\" *ngIf=\"hasError('Email', 'email') && email\">Please enter a valid email address</div>\n      </div>\n      <ion-button class=\"submitBtn\" size=\"medium\" expand=\"block\" (click)=\"OnSubmitClick()\" [disabled]=\"!forgotPass.valid\">\n        <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad?'Submitting...':'Submit'}}\n      </ion-button>\n      <ion-button class=\"loginBtn\" fill=\"clear\" size=\"medium\" expand=\"block\" (click)=\"OnLoginClick()\">\n        Login\n      </ion-button>\n    </form>\n  </div>\n</ion-content>");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #274b9e; }\n  ion-content .outerdiv {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n  ion-content .outerdiv ion-text h1 {\n      color: #00b9ff;\n      font-size: 35px;\n      font-family: Open Sans Bold;\n      text-align: center;\n      margin-top: 0;\n      margin-bottom: 30px; }\n  ion-content .outerdiv ion-label {\n      color: white;\n      font-size: 13px;\n      font-family: Open Sans;\n      padding-left: 5px; }\n  ion-content .outerdiv ion-item {\n      --min-height: 37px;\n      font-size: 13px;\n      --padding-start: 10px; }\n  ion-content .outerdiv ion-item ion-input {\n        --padding-bottom: 0;\n        --padding-start: 0;\n        --padding-end: 0;\n        --padding-top: 0; }\n  ion-content .outerdiv div {\n      margin-bottom: 50px; }\n  ion-content .outerdiv .submitBtn {\n      --background: #00b9ff;\n      --background-activated: #00b9ff;\n      --background-focused: #00b9ff;\n      --background-hover: #00b9ff;\n      --color: #ffffff;\n      --ripple-color: #9a9a9a;\n      --color-activated: #ffffff;\n      --border-radius: 25px;\n      height: 40px;\n      font-size: 20px;\n      text-transform: inherit;\n      margin-bottom: 15px; }\n  ion-content .outerdiv .loginBtn {\n      color: #00b9ff;\n      --color-activated: #00b9ff;\n      height: 33px;\n      text-transform: inherit;\n      font-family: Open Sans semiBold;\n      font-size: 13px; }\n  ion-header ion-toolbar {\n  --background: #274b9e;\n  padding: 10px;\n  --border-width:0; }\n  form {\n  width: 80%; }\n  .input {\n  --background: white;\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFhLEVBQUE7RUFGakI7SUFLUSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBO0VBVjNCO01BY2dCLGNBQWU7TUFDZixlQUFlO01BQ2YsMkJBQTJCO01BQzNCLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CLEVBQUE7RUFuQm5DO01Bd0JZLFlBQVk7TUFDWixlQUFlO01BQ2Ysc0JBQXNCO01BQ3RCLGlCQUFpQixFQUFBO0VBM0I3QjtNQStCb0Isa0JBQWE7TUFDYixlQUFlO01BQ2YscUJBQWdCLEVBQUE7RUFqQ3BDO1FBb0N3QixtQkFBaUI7UUFDakIsa0JBQWdCO1FBQ2hCLGdCQUFjO1FBQ2QsZ0JBQWMsRUFBQTtFQXZDdEM7TUE2Q1ksbUJBQW1CLEVBQUE7RUE3Qy9CO01BaURZLHFCQUFhO01BQ2IsK0JBQXVCO01BQ3ZCLDZCQUFxQjtNQUNyQiwyQkFBbUI7TUFDbkIsZ0JBQVE7TUFDUix1QkFBZTtNQUNmLDBCQUFrQjtNQUNsQixxQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGVBQWU7TUFDZix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7RUE1RC9CO01BZ0VZLGNBQWM7TUFDZCwwQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QiwrQkFBK0I7TUFDL0IsZUFBZSxFQUFBO0VBTTNCO0VBQ0kscUJBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWUsRUFBQTtFQUduQjtFQUNJLFVBQVUsRUFBQTtFQUdkO0VBQ0ksbUJBQWE7RUFDYixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xuXG4gICAgLm91dGVyZGl2e1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpb24tdGV4dHtcbiAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAgIzAwYjlmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgICAgICAgICAgLS1taW4taGVpZ2h0OiAzN3B4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpb24taW5wdXR7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VibWl0QnRue1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzAwYjlmZjtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMDBiOWZmO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDBiOWZmO1xuICAgICAgICAgICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubG9naW5CdG57XG4gICAgICAgICAgICBjb2xvcjogIzAwYjlmZjtcbiAgICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMDBiOWZmO1xuICAgICAgICAgICAgaGVpZ2h0OiAzM3B4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIHNlbWlCb2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6MDtcbn1cblxuZm9ybXtcbiAgICB3aWR0aDogODAlO1xufVxuXG4uaW5wdXR7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59Il19 */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







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
            this.presentToast(err.error.message);
        });
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=7-es2015.js.map