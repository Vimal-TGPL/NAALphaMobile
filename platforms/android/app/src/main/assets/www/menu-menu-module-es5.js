(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\r\n <ion-menu when=\"main-content\" id=\"ManiMenu\" type=\"push\" [ngClass]=\"{'ipadmenu': !mobile}\">\r\n<ion-content forceOverscroll = false *ngIf=\"mobile\">\r\n  <div>\r\n  <div class = \"avatarDiv\">\r\n      <div class = \"avatar\">\r\n        \r\n        <img src=\"../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\r\n      </div>\r\n      <div class = \"deatilsDiv\">\r\n       \r\n        <p>{{firstname}} {{lastname}}</p>\r\n        <p>{{username}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr class=\"divider\">\r\n  <ion-list id=\"menu-List\">\r\n      <ion-menu-toggle autoHide=\"false\" >\r\n        <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/home']\" routerDirection=\"root\" [class.active-item]=\"selectedPath==='/menu/menu/path'\">\r\n          <!-- //<ion-icon name=\"home-outline\" style=\"color: white; margin-right: 10px;\"></ion-icon> -->\r\n          <!-- <ion-icon name=\"home-outline\" style=\"color: white; margin-right: 10px;\"></ion-icon> -->\r\n          <img src=\"../../assets/images/H-Factor Icon solid.svg\" alt=\"home\" style=\"height: 25px; padding-right: 5px;\">\r\n         <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n           H-Factor System\r\n         </ion-text>\r\n        </ion-item>\r\n    </ion-menu-toggle>\r\n\r\n\r\n        <!-- <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\"  (click)=\"investmentsolution === 'true'? investmentsolution = 'false' : investmentsolution = 'true'\" >\r\n          <img src=\"../../assets/images/bar graph.svg\" alt=\"satistics\" style=\"height: 20px; padding-right: 10px;\">\r\n          <ion-icon [name]=\"investmentsolution== 'true'? 'arrow-down' : 'arrow-forward'\" slot=\"end\" style=\"width: 20px;\r\n          height: 20px;\r\n          transition: 0.3s;\r\n          margin: 0;\"></ion-icon>\r\n          <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n            Investment Solution\r\n          </ion-text>\r\n        </ion-item>\r\n\r\n        <ion-menu-toggle autoHide=\"false\" >\r\n          <ion-list *ngIf=\"investmentsolution == 'true'\" style=\"margin-bottom: 0px;\">\r\n            <ion-item lines=\"none\">\r\n              <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                ESG Strategies\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\">\r\n              <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                Fixed Income Strategies\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\">\r\n              <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                Leading Equity Strategies\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\">\r\n              <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                Long / Short Equity Strategies\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\">\r\n              <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                Low Volatility Strategies\r\n              </ion-text>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\">\r\n              <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                Target Volatility Controlled Strategies\r\n              </ion-text>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-menu-toggle> -->\r\n\r\n\r\n\r\n        <ion-menu-toggle autoHide=\"false\" >\r\n        <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance']\" routerLinkActive=\"router-link-active\" >\r\n          <img src=\"../../assets/images/bar graph.svg\" alt=\"satistics\" style=\"height: 20px; padding-right: 10px;\">\r\n          <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n            H-Factor Indexes\r\n          </ion-text>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/change-password']\" routerLinkActive=\"router-link-active\" >\r\n          <img src=\"../../assets/images/password.svg\" alt=\"ChangePassword\" style=\"height: 20px; padding-right: 10px;\">\r\n            <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n              Change Password\r\n            </ion-text>\r\n          </ion-item>\r\n        <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" (click)=\"onLogoutClick()\">\r\n            <img src=\"../../assets/images/power.svg\" alt=\"logout\" style=\"height: 20px; padding-right: 10px;\">\r\n            <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n                Logout\r\n              </ion-text>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n  </ion-list>\r\n  <div class=\"footerDiv\">\r\n    <ion-text class=\"footerText\">\r\n      <p (click)=\"openBrowserClick()\" style=\"font-family: Open Sans;\">© 2020 <span style=\"color: #00AEEF;\">newagealpha.com</span></p>\r\n    </ion-text>\r\n  </div>\r\n</ion-content>\r\n<ion-content forceOverscroll = false *ngIf=\"!mobile\">\r\n  <div class=\"ipadParentDiv\">\r\n    <ion-list>\r\n    <ion-menu-toggle autoHide=\"false\" >\r\n      <div>\r\n        <div>\r\n        <ion-item lines=\"none\" [routerLink]=\"['/menu/menu/home']\" routerDirection=\"root\" [class.active-item]=\"selectedPath==='/menu/menu/path'\" detail=false>\r\n          <img src=\"../../assets/images/H-Factor Icon solid.svg\" alt=\"home\" >\r\n        </ion-item>\r\n        <ion-item lines=\"none\" [routerLink]=\"['menu/menu/performance']\" routerLinkActive=\"router-link-active\" detail=false>\r\n          <!-- <img src=\"../../assets/images/bar graph.svg\" alt=\"satistics\" > -->\r\n          <ion-icon name=\"stats\" style=\" height: 65px; width: 65px; color:#ffffff;\"></ion-icon>\r\n        </ion-item>\r\n      </div>\r\n        <!-- <div>\r\n        <ion-item lines=\"none\" [routerLink]=\"['/change-password']\" routerLinkActive=\"router-link-active\" detail=false>\r\n          <img src=\"../../assets/images/password.svg\" alt=\"ChangePassword\" >\r\n        </ion-item>\r\n      </div> -->\r\n      </div>\r\n    </ion-menu-toggle>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n </ion-menu>\r\n\r\n <ion-router-outlet when=\"main-content\" main></ion-router-outlet>\r\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/menu/menu-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");




var routes = [
    {
        path: 'menu',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [
            {
                path: 'home',
                //canActivate : [AuthGaurdService],
                loadChildren: function () { return Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~performance-performance-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomePageModule; }); }
            },
            {
                path: 'change-password',
                loadChildren: function () { return Promise.all(/*! import() | change-password-change-password-module */[__webpack_require__.e("common"), __webpack_require__.e("change-password-change-password-module")]).then(__webpack_require__.bind(null, /*! ../change-password/change-password.module */ "./src/app/change-password/change-password.module.ts")).then(function (m) { return m.ChangePasswordPageModule; }); }
            },
            {
                path: 'performance',
                loadChildren: function () { return Promise.all(/*! import() | performance-performance-module */[__webpack_require__.e("default~home-home-module~performance-performance-module"), __webpack_require__.e("performance-performance-module")]).then(__webpack_require__.bind(null, /*! ../performance/performance.module */ "./src/app/performance/performance.module.ts")).then(function (m) { return m.PerformancePageModule; }); }
            },
            {
                path: 'investment-solutions',
                loadChildren: function () { return __webpack_require__.e(/*! import() | investment-solutions-investment-solutions-module */ "investment-solutions-investment-solutions-module").then(__webpack_require__.bind(null, /*! ../investment-solutions/investment-solutions.module */ "./src/app/investment-solutions/investment-solutions.module.ts")).then(function (m) { return m.InvestmentSolutionsPageModule; }); }
            },
        ]
    },
    {
        path: '',
        redirectTo: '/menu/menu/home'
    }
];
var MenuPageRoutingModule = /** @class */ (function () {
    function MenuPageRoutingModule() {
    }
    MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MenuPageRoutingModule);
    return MenuPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/menu/menu-routing.module.ts");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");







var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-primary); }\n\nion-content {\n  --ion-background-color: linear-gradient(-90deg, #2e4c99, #233771);\n  overflow: hidden;\n  -ms-overflow-style: none; }\n\nion-content ::-webkit-scrollbar {\n    display: none; }\n\n.profile {\n  background-color: white;\n  height: 100px;\n  display: -webkit-box;\n  display: flex;\n  padding: 12px; }\n\n.avatar {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  background-color: #2e4c99;\n  padding: 20px;\n  border: 2px solid white; }\n\n.avatarDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 30px 0 0 0; }\n\np {\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  color: white;\n  margin-top: 5px; }\n\n.deatilsDiv {\n  padding: 10px;\n  text-align: center;\n  font-family: \"Open Sans SemiBold\";\n  font-size: 14px; }\n\n.divider {\n  border-top: 1px solid white;\n  margin: 15px 25px; }\n\n.footerDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.footerDiv .footerText {\n    position: absolute;\n    bottom: 30px; }\n\n.footerDiv p {\n    color: white;\n    font-size: 14px; }\n\n@media screen and (orientation: landscape) {\n  .footerText {\n    bottom: 25px !important; }\n  #menu-List {\n    margin-bottom: unset;\n    height: calc(100vh - 170px);\n    overflow: auto; }\n  .avatarDiv {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n    .avatarDiv .avatar {\n      height: 50px;\n      width: 50px;\n      padding: 10px; }\n    .avatarDiv .deatilsDiv {\n      text-align: left;\n      padding: 0 10px; } }\n\n.ipadmenu {\n  min-width: 70px !important;\n  max-width: 70px !important;\n  border: 0px !important; }\n\n.ipadParentDiv {\n  padding: 30px 10px; }\n\n.ipadParentDiv ion-list {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center; }\n\n.ipadParentDiv ion-item {\n    --padding-start: 0px;\n    --inner-padding-end: 0px;\n    -webkit-box-pack: center;\n            justify-content: center;\n    display: grid;\n    padding-bottom: 15px; }\n\n.ipadParentDiv img {\n    height: 65px; }\n\n.ipadParentDiv .bottomDiv {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    left: 0px;\n    right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXG1lbnVcXG1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQStDLEVBQUE7O0FBR25EO0VBQ0ksaUVBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix3QkFBd0IsRUFBQTs7QUFINUI7SUFNUSxhQUFhLEVBQUE7O0FBSXJCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGFBQWE7RUFFYixvQkFBYTtFQUFiLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMEJBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsZUFBZSxFQUFBOztBQUduQjtFQUNJLDJCQUEyQjtFQUMzQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBRjNCO0lBS1Esa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTs7QUFOcEI7SUFVUSxZQUFZO0lBQ1osZUFBZSxFQUFBOztBQUl2QjtFQUNJO0lBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7SUFDSSxvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLGNBQWMsRUFBQTtFQUdsQjtJQUNJLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7SUFEdkI7TUFJUSxZQUFZO01BQ1osV0FBVztNQUNYLGFBQWEsRUFBQTtJQU5yQjtNQVVRLGdCQUFnQjtNQUNoQixlQUFlLEVBQUEsRUFDbEI7O0FBSVQ7RUFDSSwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUtRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTs7QUFOL0I7SUFXUSxvQkFBZ0I7SUFDaEIsd0JBQW9CO0lBQ3BCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG9CQUFvQixFQUFBOztBQWY1QjtJQW1CUSxZQUFZLEVBQUE7O0FBbkJwQjtJQXVCUSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtaXRlbSB7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KC05MGRlZywgIzJlNGM5OSwgIzIzMzc3MSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG5cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTRjOTk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5hdmF0YXJEaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5kZWF0aWxzRGl2IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgU2VtaUJvbGRcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWFyZ2luOiAxNXB4IDI1cHg7XHJcbn1cclxuXHJcbi5mb290ZXJEaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5mb290ZXJUZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAuZm9vdGVyVGV4dCB7XHJcbiAgICAgICAgYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI21lbnUtTGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTcwcHgpO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdmF0YXJEaXYge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlYXRpbHNEaXYge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaXBhZG1lbnUge1xyXG4gICAgbWluLXdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pcGFkUGFyZW50RGl2IHtcclxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b21EaXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var MenuPage = /** @class */ (function () {
    function MenuPage(platform, iab, route, authService, storage) {
        var _this = this;
        this.platform = platform;
        this.iab = iab;
        this.route = route;
        this.authService = authService;
        this.storage = storage;
        this.url = 'https://www.newagealpha.com/';
        this.page = [
            {
                title: 'Home',
                url: '/menu/home'
            }
        ];
        this.investmentsolution = false;
        this.selectedPath = '';
        this.route.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
        this.storage.get('currentUser').then(function (res) {
            _this.user = JSON.parse(res);
            // console.log(this.user); 
            _this.firstname = _this.user.firstName;
            _this.lastname = _this.user.lastName;
            _this.username = _this.user.username;
        });
    }
    MenuPage.prototype.ngOnInit = function () {
        if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
        }
    };
    MenuPage.prototype.onLogoutClick = function () {
        this.authService.logout();
    };
    MenuPage.prototype.onChangePasswordClick = function () {
        this.route.navigateByUrl('/menu/menu/change-password');
    };
    MenuPage.prototype.openBrowserClick = function () {
        this.iab.create(this.url, '_blank', 'location=no,toolbar=yes,zoom=no');
    };
    MenuPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es5.js.map