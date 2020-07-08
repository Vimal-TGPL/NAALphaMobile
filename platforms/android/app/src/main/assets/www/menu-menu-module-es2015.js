(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\r\n <ion-menu when=\"main-content\" type=\"push\" [ngClass]=\"{'ipadmenu': !mobile}\">\r\n<ion-content forceOverscroll = false *ngIf=\"mobile\">\r\n  <div>\r\n  <div class = \"avatarDiv\">\r\n      <div class = \"avatar\">\r\n        \r\n        <img src=\"../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\r\n      </div>\r\n      <div class = \"deatilsDiv\">\r\n       \r\n        <p>{{firstname}} {{lastname}}</p>\r\n        <p>{{username}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr class=\"divider\">\r\n  <ion-list id=\"menu-List\">\r\n      <ion-menu-toggle autoHide=\"false\" >\r\n        <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/home']\" routerDirection=\"root\" [class.active-item]=\"selectedPath==='/menu/menu/path'\">\r\n          <!-- //<ion-icon name=\"home-outline\" style=\"color: white; margin-right: 10px;\"></ion-icon> -->\r\n          <!-- <ion-icon name=\"home-outline\" style=\"color: white; margin-right: 10px;\"></ion-icon> -->\r\n          <img src=\"../../assets/images/H-Factor Icon solid.svg\" alt=\"home\" style=\"height: 25px; padding-right: 5px;\">\r\n         <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n           H-Factor System\r\n         </ion-text>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance']\" routerLinkActive=\"router-link-active\" >\r\n          <img src=\"../../assets/images/bar graph.svg\" alt=\"satistics\" style=\"height: 20px; padding-right: 10px;\">\r\n          <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n            H-Factor Indexes\r\n          </ion-text>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/change-password']\" routerLinkActive=\"router-link-active\" >\r\n          <img src=\"../../assets/images/password.svg\" alt=\"ChangePassword\" style=\"height: 20px; padding-right: 10px;\">\r\n            <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n              Change Password\r\n            </ion-text>\r\n          </ion-item>\r\n        <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" (click)=\"onLogoutClick()\">\r\n            <img src=\"../../assets/images/power.svg\" alt=\"logout\" style=\"height: 20px; padding-right: 10px;\">\r\n            <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n                Logout\r\n              </ion-text>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n  </ion-list>\r\n  <div class=\"footerDiv\">\r\n    <ion-text class=\"footerText\">\r\n      <p (click)=\"openBrowserClick()\" style=\"font-family: Open Sans;\">© 2020 <span style=\"color: #00AEEF;\">newagealpha.com</span></p>\r\n    </ion-text>\r\n  </div>\r\n</ion-content>\r\n<ion-content forceOverscroll = false *ngIf=\"!mobile\">\r\n  <div class=\"ipadParentDiv\">\r\n    <ion-list>\r\n    <ion-menu-toggle autoHide=\"false\" >\r\n      <div>\r\n        <div>\r\n        <ion-item lines=\"none\" [routerLink]=\"['/menu/menu/home']\" routerDirection=\"root\" [class.active-item]=\"selectedPath==='/menu/menu/path'\" detail=false>\r\n          <img src=\"../../assets/images/H-Factor Icon solid.svg\" alt=\"home\" >\r\n        </ion-item>\r\n        <ion-item lines=\"none\" [routerLink]=\"['menu/menu/performance']\" routerLinkActive=\"router-link-active\" detail=false>\r\n          <!-- <img src=\"../../assets/images/bar graph.svg\" alt=\"satistics\" > -->\r\n          <ion-icon name=\"stats\" style=\" height: 65px; width: 65px; color:#ffffff;\"></ion-icon>\r\n        </ion-item>\r\n      </div>\r\n        <!-- <div>\r\n        <ion-item lines=\"none\" [routerLink]=\"['/change-password']\" routerLinkActive=\"router-link-active\" detail=false>\r\n          <img src=\"../../assets/images/password.svg\" alt=\"ChangePassword\" >\r\n        </ion-item>\r\n      </div> -->\r\n      </div>\r\n    </ion-menu-toggle>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n </ion-menu>\r\n\r\n <ion-router-outlet when=\"main-content\" main></ion-router-outlet>\r\n</ion-split-pane>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");




const routes = [
    {
        path: 'menu',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [
            {
                path: 'home',
                //canActivate : [AuthGaurdService],
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~performance-performance-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
            },
            {
                path: 'change-password',
                loadChildren: () => Promise.all(/*! import() | change-password-change-password-module */[__webpack_require__.e("common"), __webpack_require__.e("change-password-change-password-module")]).then(__webpack_require__.bind(null, /*! ../change-password/change-password.module */ "./src/app/change-password/change-password.module.ts")).then(m => m.ChangePasswordPageModule)
            },
            {
                path: 'performance',
                loadChildren: () => Promise.all(/*! import() | performance-performance-module */[__webpack_require__.e("default~home-home-module~performance-performance-module"), __webpack_require__.e("performance-performance-module")]).then(__webpack_require__.bind(null, /*! ../performance/performance.module */ "./src/app/performance/performance.module.ts")).then(m => m.PerformancePageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '/menu/menu/home'
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/menu/menu-routing.module.ts");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");







let MenuPageModule = class MenuPageModule {
};
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



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-primary);\n}\n\nion-content {\n  --ion-background-color: linear-gradient(-90deg, #2e4c99, #233771);\n  overflow: hidden;\n  -ms-overflow-style: none;\n}\n\nion-content ::-webkit-scrollbar {\n  display: none;\n}\n\n.profile {\n  background-color: white;\n  height: 100px;\n  display: -webkit-box;\n  display: flex;\n  padding: 12px;\n}\n\n.avatar {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  background-color: #2e4c99;\n  padding: 20px;\n  border: 2px solid white;\n}\n\n.avatarDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 30px 0 0 0;\n}\n\np {\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  color: white;\n  margin-top: 5px;\n}\n\n.deatilsDiv {\n  padding: 10px;\n  text-align: center;\n  font-family: \"Open Sans SemiBold\";\n  font-size: 14px;\n}\n\n.divider {\n  border-top: 1px solid white;\n  margin: 15px 25px;\n}\n\n.footerDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.footerDiv .footerText {\n  position: absolute;\n  bottom: 30px;\n}\n\n.footerDiv p {\n  color: white;\n  font-size: 14px;\n}\n\n@media screen and (orientation: landscape) {\n  .footerText {\n    bottom: 25px !important;\n  }\n\n  #menu-List {\n    margin-bottom: unset;\n    height: calc(100vh - 170px);\n    overflow: auto;\n  }\n\n  .avatarDiv {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n  .avatarDiv .avatar {\n    height: 50px;\n    width: 50px;\n    padding: 10px;\n  }\n  .avatarDiv .deatilsDiv {\n    text-align: left;\n    padding: 0 10px;\n  }\n}\n\n.ipadmenu {\n  min-width: 70px !important;\n  max-width: 70px !important;\n  border: 0px !important;\n}\n\n.ipadParentDiv {\n  padding: 30px 10px;\n}\n\n.ipadParentDiv ion-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.ipadParentDiv ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: grid;\n  padding-bottom: 15px;\n}\n\n.ipadParentDiv img {\n  height: 65px;\n}\n\n.ipadParentDiv .bottomDiv {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXG1lbnVcXG1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7QUNDSjs7QURFQTtFQUNJLGlFQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtBQ0NSOztBREdBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNESjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0RSOztBRElJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNGUjs7QURNQTtFQUNJO0lBQ0ksdUJBQUE7RUNITjs7RURNRTtJQUNJLG9CQUFBO0lBQ0EsMkJBQUE7SUFDQSxjQUFBO0VDSE47O0VETUU7SUFDSSw4QkFBQTtJQUFBLDZCQUFBO1lBQUEsbUJBQUE7RUNITjtFREtNO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDSFY7RURNTTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtFQ0pWO0FBQ0Y7O0FEUUE7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNOSjs7QURTQTtFQUNJLGtCQUFBO0FDTko7O0FEU0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDUFI7O0FEV0k7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1RSOztBRFlJO0VBQ0ksWUFBQTtBQ1ZSOztBRGFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDWFIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1pdGVtIHtcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjMmU0Yzk5LCAjMjMzNzcxKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNGM5OTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmF2YXRhckRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmRlYXRpbHNEaXYge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBTZW1pQm9sZFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW46IDE1cHggMjVweDtcclxufVxyXG5cclxuLmZvb3RlckRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLmZvb3RlclRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgIC5mb290ZXJUZXh0IHtcclxuICAgICAgICBib3R0b206IDI1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAjbWVudS1MaXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmF2YXRhckRpdiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVhdGlsc0RpdiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pcGFkbWVudSB7XHJcbiAgICBtaW4td2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlwYWRQYXJlbnREaXYge1xyXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvdHRvbURpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi5hY3RpdmUtaXRlbSB7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICMyZTRjOTksICMyMzM3NzEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG59XG5pb24tY29udGVudCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2ZpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLmF2YXRhciB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlNGM5OTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbi5hdmF0YXJEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kZWF0aWxzRGl2IHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZGl2aWRlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luOiAxNXB4IDI1cHg7XG59XG5cbi5mb290ZXJEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb290ZXJEaXYgLmZvb3RlclRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbn1cbi5mb290ZXJEaXYgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuZm9vdGVyVGV4dCB7XG4gICAgYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjbWVudS1MaXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzBweCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAuYXZhdGFyRGl2IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5hdmF0YXJEaXYgLmF2YXRhciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmF2YXRhckRpdiAuZGVhdGlsc0RpdiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbn1cbi5pcGFkbWVudSB7XG4gIG1pbi13aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmlwYWRQYXJlbnREaXYge1xuICBwYWRkaW5nOiAzMHB4IDEwcHg7XG59XG4uaXBhZFBhcmVudERpdiBpb24tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmlwYWRQYXJlbnREaXYgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uaXBhZFBhcmVudERpdiBpbWcge1xuICBoZWlnaHQ6IDY1cHg7XG59XG4uaXBhZFBhcmVudERpdiAuYm90dG9tRGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let MenuPage = class MenuPage {
    constructor(platform, iab, route, authService, storage) {
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
        this.selectedPath = '';
        this.route.events.subscribe((event) => {
            this.selectedPath = event.url;
        });
        this.storage.get('currentUser').then(res => {
            this.user = JSON.parse(res);
            console.log(this.user);
            this.firstname = this.user.firstName;
            this.lastname = this.user.lastName;
            this.username = this.user.username;
        });
    }
    ngOnInit() {
        if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
        }
    }
    onLogoutClick() {
        this.authService.logout();
    }
    onChangePasswordClick() {
        this.route.navigateByUrl('/menu/menu/change-password');
    }
    openBrowserClick() {
        this.iab.create(this.url, '_blank', 'location=no,toolbar=yes,zoom=no');
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html"),
        styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map