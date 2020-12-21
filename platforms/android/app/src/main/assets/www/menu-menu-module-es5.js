function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"menuContent\"  forceOverscroll=\"false\">\r\n<ion-split-pane contentId=\"menu-content\" when=\"xs\" [disabled]=\"true\">\r\n  <ion-menu contentId=\"menu-content\" menuId=\"menu-content\" side=\"end\" type=\"overlay\" *ngIf=\"mobile\" (ionDidClose)=\"investmentsolution = false\">\r\n    <ion-content class=\"menuContent\" forceOverscroll = false *ngIf=\"mobile\">\r\n      <div>\r\n      <div class = \"avatarDiv\">\r\n          <div class = \"avatar\">\r\n            \r\n            <img src=\"../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\r\n          </div>\r\n          <div class = \"deatilsDiv\">\r\n           \r\n            <p>{{firstname}} {{lastname}}</p>\r\n            <p>{{username}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"divider\">\r\n      <ion-list id=\"menu-List\" >\r\n          <ion-menu-toggle autoHide=\"false\" >\r\n            <ion-list *ngIf=\"investmentsolution === false\" style=\"margin-bottom: 0px; padding-bottom: 0px;\">\r\n              <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/home']\" routerDirection=\"root\" [class.active-item]=\"selectedPath==='/menu/menu/path'\">\r\n                <img src=\"../../assets/images/H-Factor Icon solid.svg\" alt=\"home\" style=\"height: 25px; padding-right: 5px;\">\r\n               <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n                 H-Factor System\r\n               </ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            \r\n        </ion-menu-toggle>\r\n    \r\n            <ion-menu-toggle autoHide=\"false\" >\r\n              <ion-list *ngIf=\"investmentsolution == true\" style=\"margin-bottom: 0px; \">\r\n                <ion-item lines=\"none\" style=\"color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'ESG'}]\" routerLinkActive=\"router-link-active\">\r\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                    ESG Strategies\r\n                  </ion-text>\r\n                </ion-item>\r\n    \r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Fixed Income'}]\" routerLinkActive=\"router-link-active\">\r\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                    Fixed Income Strategies\r\n                  </ion-text>\r\n                </ion-item>\r\n    \r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Leading Equity'}]\" routerLinkActive=\"router-link-active\">\r\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                    Leading Equity Strategies\r\n                  </ion-text>\r\n                </ion-item>\r\n    \r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Long_Short Equity'}]\" routerLinkActive=\"router-link-active\">\r\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                    Long / Short Equity Strategies\r\n                  </ion-text>\r\n                </ion-item>\r\n    \r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Low Volatility'}]\" routerLinkActive=\"router-link-active\">\r\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\r\n                    Low Volatility Strategies\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-menu-toggle>\r\n    \r\n            <ion-menu-toggle autoHide=\"false\" >\r\n              <ion-list *ngIf=\"investmentsolution === false\" style=\"padding-top: 0px;\">\r\n                \r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/change-password']\" routerLinkActive=\"router-link-active\" >\r\n                  <img src=\"../../assets/images/password.svg\" alt=\"ChangePassword\" style=\"height: 20px; padding-right: 10px;\">\r\n                    <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n                      Change Password\r\n                    </ion-text>\r\n                  </ion-item>\r\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" (click)=\"onLogoutClick()\">\r\n                    <img src=\"../../assets/images/power.svg\" alt=\"logout\" style=\"height: 20px; padding-right: 10px;\">\r\n                    <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\r\n                        Logout\r\n                      </ion-text>\r\n                </ion-item>\r\n              </ion-list>\r\n          </ion-menu-toggle>\r\n      </ion-list>\r\n      <div class=\"footerDiv\">\r\n        <ion-text class=\"footerText\">\r\n          <p style=\"font-family: Open Sans;\">© 2020 <span style=\"color: #00AEEF;\">newagealpha.com</span></p>\r\n        </ion-text>\r\n      </div>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"menu-content\"></ion-router-outlet>\r\n</ion-split-pane>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/menu/menu-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/menu/menu-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: MenuPageRoutingModule */

  /***/
  function srcAppMenuMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
      return MenuPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/menu/menu.page.ts");

    var routes = [{
      path: 'menu',
      component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
      children: [{
        path: 'home',
        //canActivate : [AuthGaurdService],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ../home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'change-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | change-password-change-password-module */
          [__webpack_require__.e("common"), __webpack_require__.e("change-password-change-password-module")]).then(__webpack_require__.bind(null,
          /*! ../change-password/change-password.module */
          "./src/app/change-password/change-password.module.ts")).then(function (m) {
            return m.ChangePasswordPageModule;
          });
        }
      }, {
        path: 'performance',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | performance-performance-module */
          [__webpack_require__.e("default~performance-performance-module~tabs-tabs-module"), __webpack_require__.e("performance-performance-module")]).then(__webpack_require__.bind(null,
          /*! ../performance/performance.module */
          "./src/app/performance/performance.module.ts")).then(function (m) {
            return m.PerformancePageModule;
          });
        }
      }]
    }, {
      path: '',
      redirectTo: '/menu/menu/home'
    }];

    var MenuPageRoutingModule = function MenuPageRoutingModule() {
      _classCallCheck(this, MenuPageRoutingModule);
    };

    MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/menu/menu.module.ts":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.module.ts ***!
    \*************************************/

  /*! exports provided: MenuPageModule */

  /***/
  function srcAppMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
      return MenuPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu-routing.module */
    "./src/app/menu/menu-routing.module.ts");
    /* harmony import */


    var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/menu/menu.page.ts");

    var MenuPageModule = function MenuPageModule() {
      _classCallCheck(this, MenuPageModule);
    };

    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]],
      declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })], MenuPageModule);
    /***/
  },

  /***/
  "./src/app/menu/menu.page.scss":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".active-item {\n  border-left: 8px solid var(--ion-color-primary); }\n\n.menuContent {\n  --background: #274b9e;\n  overflow: hidden;\n  -ms-overflow-style: none; }\n\n.menuContent ::-webkit-scrollbar {\n    display: none; }\n\n.profile {\n  background-color: white;\n  height: 100px;\n  display: flex;\n  padding: 12px; }\n\n.avatar {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  background-color: #2e4c99;\n  padding: 20px;\n  border: 2px solid white; }\n\n.avatarDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 30px 0 0 0; }\n\np {\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  color: white;\n  margin-top: 5px; }\n\n.deatilsDiv {\n  padding: 10px;\n  text-align: center;\n  font-family: \"Open Sans SemiBold\";\n  font-size: 14px; }\n\n.divider {\n  border-top: 1px solid white;\n  margin: 15px 25px; }\n\n.footerDiv {\n  display: flex;\n  justify-content: center; }\n\n.footerDiv .footerText {\n    position: absolute;\n    bottom: 30px; }\n\n.footerDiv p {\n    color: white;\n    font-size: 14px; }\n\n#menu-List {\n  --ion-background-color: #274b9e; }\n\n@media screen and (orientation: landscape) {\n  .footerText {\n    bottom: 25px !important; }\n  #menu-List {\n    --ion-background-color: #274b9e;\n    margin-bottom: unset;\n    height: calc(100vh - 170px);\n    overflow: auto; }\n  .avatarDiv {\n    flex-direction: row; }\n    .avatarDiv .avatar {\n      height: 50px;\n      width: 50px;\n      padding: 10px; }\n    .avatarDiv .deatilsDiv {\n      text-align: left;\n      padding: 0 10px; } }\n\n.ipadmenu {\n  min-width: 70px !important;\n  max-width: 70px !important;\n  border: 0px !important; }\n\n.ipadParentDiv {\n  padding: 30px 10px; }\n\n.ipadParentDiv ion-list {\n    display: flex;\n    justify-content: center; }\n\n.ipadParentDiv ion-item {\n    --padding-start: 0px;\n    --inner-padding-end: 0px;\n    justify-content: center;\n    display: grid;\n    padding-bottom: 15px; }\n\n.ipadParentDiv img {\n    height: 65px; }\n\n.ipadParentDiv .bottomDiv {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    left: 0px;\n    right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXG1lbnVcXG1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQStDLEVBQUE7O0FBR25EO0VBQ0kscUJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsd0JBQXdCLEVBQUE7O0FBSDVCO0lBTVEsYUFBYSxFQUFBOztBQUlyQjtFQUNJLHVCQUF1QjtFQUN2QixhQUFhO0VBRWIsYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSwwQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksMkJBQTJCO0VBQzNCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFGM0I7SUFLUSxrQkFBa0I7SUFDbEIsWUFBWSxFQUFBOztBQU5wQjtJQVVRLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksK0JBQXVCLEVBQUE7O0FBRzNCO0VBQ0k7SUFDSSx1QkFBdUIsRUFBQTtFQUczQjtJQUNJLCtCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLGNBQWMsRUFBQTtFQUdsQjtJQUNJLG1CQUFtQixFQUFBO0lBRHZCO01BSVEsWUFBWTtNQUNaLFdBQVc7TUFDWCxhQUFhLEVBQUE7SUFOckI7TUFVUSxnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBLEVBQ2xCOztBQUlUO0VBQ0ksMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFJUSxhQUFhO0lBQ2IsdUJBQXVCLEVBQUE7O0FBTC9CO0lBU1Esb0JBQWdCO0lBQ2hCLHdCQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG9CQUFvQixFQUFBOztBQWI1QjtJQWlCUSxZQUFZLEVBQUE7O0FBakJwQjtJQXFCUSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtaXRlbSB7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLm1lbnVDb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNGM5OTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmF2YXRhckRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmRlYXRpbHNEaXYge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBTZW1pQm9sZFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW46IDE1cHggMjVweDtcclxufVxyXG5cclxuLmZvb3RlckRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLmZvb3RlclRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuI21lbnUtTGlzdCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjc0YjllO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgLmZvb3RlclRleHQge1xyXG4gICAgICAgIGJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICNtZW51LUxpc3Qge1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyNzRiOWU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTcwcHgpO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdmF0YXJEaXYge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlYXRpbHNEaXYge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaXBhZG1lbnUge1xyXG4gICAgbWluLXdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pcGFkUGFyZW50RGl2IHtcclxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvdHRvbURpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/menu/menu.page.ts":
  /*!***********************************!*\
    !*** ./src/app/menu/menu.page.ts ***!
    \***********************************/

  /*! exports provided: MenuPage */

  /***/
  function srcAppMenuMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
      return MenuPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MenuPage = /*#__PURE__*/function () {
      function MenuPage(menuCrtl, platform, iab, route, authService, storage) {
        var _this = this;

        _classCallCheck(this, MenuPage);

        this.menuCrtl = menuCrtl;
        this.platform = platform;
        this.iab = iab;
        this.route = route;
        this.authService = authService;
        this.storage = storage;
        this.url = 'https://www.newagealpha.com/';
        this.page = [{
          title: 'Home',
          url: '/menu/home'
        }];
        this.selectedPath = '';
        this.route.events.subscribe(function (event) {
          _this.selectedPath = event.url;
        });
        this.storage.get('currentUser').then(function (res) {
          _this.user = JSON.parse(res);
          _this.firstname = _this.user.firstName;
          _this.lastname = _this.user.lastName;
          _this.username = _this.user.username;
        });
      }

      _createClass(MenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.investmentsolution = false;

          if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
          } else {
            this.mobile = true;
          }
        }
      }, {
        key: "onLogoutClick",
        value: function onLogoutClick() {
          this.authService.logout();
        }
      }, {
        key: "onChangePasswordClick",
        value: function onChangePasswordClick() {
          this.route.navigateByUrl('/menu/menu/change-password');
        }
      }, {
        key: "openBrowserClick",
        value: function openBrowserClick() {
          this.iab.create(this.url, '_blank', 'location=no,toolbar=yes,zoom=no');
        }
      }]);

      return MenuPage;
    }();

    MenuPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.page.scss */
      "./src/app/menu/menu.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], MenuPage);
    /***/
  }
}]);
//# sourceMappingURL=menu-menu-module-es5.js.map