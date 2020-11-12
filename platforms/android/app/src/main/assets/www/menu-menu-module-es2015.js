(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"menuContent\"  forceOverscroll=\"false\">\r\n<ion-split-pane contentId=\"menu-content\" when=\"xs\" [disabled]=\"true\">\r\n  <ion-menu contentId=\"menu-content\" menuId=\"menu-content\" side=\"end\" type=\"overlay\" *ngIf=\"mobile\" (ionDidClose)=\"investmentsolution = false\">\r\n    <ion-content class=\"menuContent\" forceOverscroll = false *ngIf=\"mobile\">\r\n      <div>\r\n      <div class = \"avatarDiv\">\r\n          <div class = \"avatar\">\r\n            \r\n            <img src=\"../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\r\n          </div>\r\n          <div class = \"deatilsDiv\">\r\n           \r\n            <p>{{firstname}} {{lastname}}</p>\r\n            <p>{{username}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"divider\">\r\n      <ion-list id=\"menu-List\" >\r\n          <ion-menu-toggle autoHide=\"false\" >\r\n            <ion-list *ngIf=\"investmentsolution === false\" style=\"margin-bottom: 0px; padding-bottom: 0px;\">\r\n              <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/home']\" routerDirection=\"root\" [class.active-item]=\"selectedPath==='/menu/menu/path'\">\r\n                <!-- //<ion-icon name=\"home-outline\" style=\"color: white; margin-right: 10px;\"></ion-icon> -->\r\n                <!-- <ion-icon name=\"home-outline\" style=\"color: white; margin-right: 10px;\"></ion-icon> -->\r\n                <img src=\"../../assets/images/H-Factor Icon solid.svg\" alt=\"home\" style=\"height: 25px; padding-right: 5px;\">\r\n               <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n                 H-Factor System\r\n               </ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            \r\n        </ion-menu-toggle>\r\n    \r\n    \r\n            <!-- <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\"  (click)=\"investmentsolution === true? investmentsolution = false : investmentsolution = true\" >\r\n              <img *ngIf=\"!investmentsolution\" src=\"../../assets/images/bar graph.svg\" alt=\"satistics\" style=\"height: 20px; padding-right: 10px;\">\r\n              <ion-icon [name]=\"investmentsolution== true? 'chevron-back-outline' : 'chevron-forward-outline'\" [slot]=\"investmentsolution== true? 'start':'end'\" style=\"width: 20px;\r\n              height: 20px;\r\n              transition: 0.3s;\r\n              margin: 0; color: white;\"></ion-icon>\r\n              <ion-text color=\"light\" style=\"font-family: Open Sans SemiBold; font-size: 16px; \" [ngStyle]=\"{'margin-left': investmentsolution? '10px':'0px'}\">\r\n                Investment Solution\r\n              </ion-text>\r\n            </ion-item> -->\r\n    \r\n            <ion-menu-toggle autoHide=\"false\" >\r\n              <ion-list *ngIf=\"investmentsolution == true\" style=\"margin-bottom: 0px; \">\r\n                <ion-item lines=\"none\" style=\"color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'ESG'}]\" routerLinkActive=\"router-link-active\">\r\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                    ESG Strategies\r\n                  </ion-text>\r\n                </ion-item>\r\n    \r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Fixed Income'}]\" routerLinkActive=\"router-link-active\">\r\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                    Fixed Income Strategies\r\n                  </ion-text>\r\n                </ion-item>\r\n    \r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Leading Equity'}]\" routerLinkActive=\"router-link-active\">\r\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                    Leading Equity Strategies\r\n                  </ion-text>\r\n                </ion-item>\r\n    \r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Long_Short Equity'}]\" routerLinkActive=\"router-link-active\">\r\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                    Long / Short Equity Strategies\r\n                  </ion-text>\r\n                </ion-item>\r\n    \r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Low Volatility'}]\" routerLinkActive=\"router-link-active\">\r\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                    Low Volatility Strategies\r\n                  </ion-text>\r\n                </ion-item>\r\n    \r\n                <!-- <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Target Volatility Controlled'}]\" routerLinkActive=\"router-link-active\">\r\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                    Target Volatility Controlled Strategies\r\n                  </ion-text>\r\n                </ion-item> -->\r\n              </ion-list>\r\n            </ion-menu-toggle>\r\n    \r\n            <ion-menu-toggle autoHide=\"false\" >\r\n              <ion-list *ngIf=\"investmentsolution === false\" style=\"padding-top: 0px;\">\r\n                <!-- <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance']\" routerLinkActive=\"router-link-active\" >\r\n                  <img src=\"../../assets/images/bar graph.svg\" alt=\"satistics\" style=\"height: 20px; padding-right: 10px;\">\r\n                  <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n                    H-Factor Indexes\r\n                  </ion-text>\r\n                </ion-item> -->\r\n                <!-- <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Market View'}]\" routerLinkActive=\"router-link-active\" >\r\n                  <img src=\"../../assets/images/Market view.svg\" alt=\"satistics\" style=\"height: 20px; padding-right: 10px;\">\r\n                  <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n                    Market View\r\n                  </ion-text>\r\n                </ion-item> -->\r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/change-password']\" routerLinkActive=\"router-link-active\" >\r\n                  <img src=\"../../assets/images/password.svg\" alt=\"ChangePassword\" style=\"height: 20px; padding-right: 10px;\">\r\n                    <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n                      Change Password\r\n                    </ion-text>\r\n                  </ion-item>\r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" (click)=\"onLogoutClick()\">\r\n                    <img src=\"../../assets/images/power.svg\" alt=\"logout\" style=\"height: 20px; padding-right: 10px;\">\r\n                    <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n                        Logout\r\n                      </ion-text>\r\n                </ion-item>\r\n              </ion-list>\r\n          </ion-menu-toggle>\r\n      </ion-list>\r\n      <div class=\"footerDiv\">\r\n        <ion-text class=\"footerText\">\r\n          <p (click)=\"openBrowserClick()\" style=\"font-family: Open Sans;\">© 2020 <span style=\"color: #00AEEF;\">newagealpha.com</span></p>\r\n        </ion-text>\r\n      </div>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"menu-content\"></ion-router-outlet>\r\n</ion-split-pane>\r\n</ion-content>"

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
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
            },
            {
                path: 'change-password',
                loadChildren: () => Promise.all(/*! import() | change-password-change-password-module */[__webpack_require__.e("common"), __webpack_require__.e("change-password-change-password-module")]).then(__webpack_require__.bind(null, /*! ../change-password/change-password.module */ "./src/app/change-password/change-password.module.ts")).then(m => m.ChangePasswordPageModule)
            },
            {
                path: 'performance',
                loadChildren: () => Promise.all(/*! import() | performance-performance-module */[__webpack_require__.e("default~performance-performance-module~tabs-tabs-module"), __webpack_require__.e("performance-performance-module")]).then(__webpack_require__.bind(null, /*! ../performance/performance.module */ "./src/app/performance/performance.module.ts")).then(m => m.PerformancePageModule)
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-primary); }\n\n.menuContent {\n  --background: #274b9e;\n  overflow: hidden;\n  -ms-overflow-style: none; }\n\n.menuContent ::-webkit-scrollbar {\n    display: none; }\n\n.profile {\n  background-color: white;\n  height: 100px;\n  display: -webkit-box;\n  display: flex;\n  padding: 12px; }\n\n.avatar {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  background-color: #2e4c99;\n  padding: 20px;\n  border: 2px solid white; }\n\n.avatarDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 30px 0 0 0; }\n\np {\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  color: white;\n  margin-top: 5px; }\n\n.deatilsDiv {\n  padding: 10px;\n  text-align: center;\n  font-family: \"Open Sans SemiBold\";\n  font-size: 14px; }\n\n.divider {\n  border-top: 1px solid white;\n  margin: 15px 25px; }\n\n.footerDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.footerDiv .footerText {\n    position: absolute;\n    bottom: 30px; }\n\n.footerDiv p {\n    color: white;\n    font-size: 14px; }\n\n#menu-List {\n  --ion-background-color: #274b9e; }\n\n@media screen and (orientation: landscape) {\n  .footerText {\n    bottom: 25px !important; }\n  #menu-List {\n    --ion-background-color: #274b9e;\n    margin-bottom: unset;\n    height: calc(100vh - 170px);\n    overflow: auto; }\n  .avatarDiv {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n    .avatarDiv .avatar {\n      height: 50px;\n      width: 50px;\n      padding: 10px; }\n    .avatarDiv .deatilsDiv {\n      text-align: left;\n      padding: 0 10px; } }\n\n.ipadmenu {\n  min-width: 70px !important;\n  max-width: 70px !important;\n  border: 0px !important; }\n\n.ipadParentDiv {\n  padding: 30px 10px; }\n\n.ipadParentDiv ion-list {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center; }\n\n.ipadParentDiv ion-item {\n    --padding-start: 0px;\n    --inner-padding-end: 0px;\n    -webkit-box-pack: center;\n            justify-content: center;\n    display: grid;\n    padding-bottom: 15px; }\n\n.ipadParentDiv img {\n    height: 65px; }\n\n.ipadParentDiv .bottomDiv {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    left: 0px;\n    right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXG1lbnVcXG1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQStDLEVBQUE7O0FBR25EO0VBQ0kscUJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsd0JBQXdCLEVBQUE7O0FBSDVCO0lBTVEsYUFBYSxFQUFBOztBQUlyQjtFQUNJLHVCQUF1QjtFQUN2QixhQUFhO0VBRWIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDBCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwyQkFBMkI7RUFDM0IsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUYzQjtJQUtRLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7O0FBTnBCO0lBVVEsWUFBWTtJQUNaLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSwrQkFBdUIsRUFBQTs7QUFHM0I7RUFDSTtJQUNJLHVCQUF1QixFQUFBO0VBRzNCO0lBQ0ksK0JBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsY0FBYyxFQUFBO0VBR2xCO0lBQ0ksOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtJQUR2QjtNQUlRLFlBQVk7TUFDWixXQUFXO01BQ1gsYUFBYSxFQUFBO0lBTnJCO01BVVEsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQSxFQUNsQjs7QUFJVDtFQUNJLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBS1Esb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBOztBQU4vQjtJQVdRLG9CQUFnQjtJQUNoQix3QkFBb0I7SUFDcEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isb0JBQW9CLEVBQUE7O0FBZjVCO0lBbUJRLFlBQVksRUFBQTs7QUFuQnBCO0lBdUJRLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1pdGVtIHtcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4ubWVudUNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZmlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uYXZhdGFyRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZGVhdGlsc0RpdiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIFNlbWlCb2xkXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogMTVweCAyNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuZm9vdGVyVGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4jbWVudS1MaXN0IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyNzRiOWU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAuZm9vdGVyVGV4dCB7XHJcbiAgICAgICAgYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI21lbnUtTGlzdCB7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzI3NGI5ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmF2YXRhckRpdiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVhdGlsc0RpdiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pcGFkbWVudSB7XHJcbiAgICBtaW4td2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlwYWRQYXJlbnREaXYge1xyXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvdHRvbURpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let MenuPage = class MenuPage {
    constructor(menuCrtl, platform, iab, route, authService, storage) {
        this.menuCrtl = menuCrtl;
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
            // console.log(this.user); 
            this.firstname = this.user.firstName;
            this.lastname = this.user.lastName;
            this.username = this.user.username;
        });
    }
    ngOnInit() {
        this.investmentsolution = false;
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map