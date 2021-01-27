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


    __webpack_exports__["default"] = "<ion-content class=\"menuContent\"  forceOverscroll=\"false\">\n<ion-split-pane contentId=\"menu-content\" when=\"xs\" [disabled]=\"true\">\n  <ion-menu contentId=\"menu-content\" menuId=\"menu-content\" side=\"end\" type=\"overlay\" *ngIf=\"mobile\" (ionDidClose)=\"investmentsolution = false\">\n    <ion-content class=\"menuContent\" forceOverscroll = false *ngIf=\"mobile\">\n      <div>\n      <div class = \"avatarDiv\">\n          <div class = \"avatar\">\n            \n            <img src=\"../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\n          </div>\n          <div class = \"deatilsDiv\">\n           \n            <p>{{firstname}} {{lastname}}</p>\n            <p>{{username}}</p>\n          </div>\n        </div>\n      </div>\n      <hr class=\"divider\">\n      <ion-list id=\"menu-List\" >\n          <ion-menu-toggle autoHide=\"false\" >\n            <ion-list *ngIf=\"investmentsolution === false\" style=\"margin-bottom: 0px; padding-bottom: 0px;\">\n              <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/home']\" routerDirection=\"root\" [class.active-item]=\"selectedPath==='/menu/menu/path'\">\n                <img src=\"../../assets/images/H-Factor Icon solid.svg\" alt=\"home\" style=\"height: 25px; padding-right: 5px;\">\n               <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\n                 H-Factor System\n               </ion-text>\n              </ion-item>\n            </ion-list>\n            \n        </ion-menu-toggle>\n    \n            <ion-menu-toggle autoHide=\"false\" >\n              <ion-list *ngIf=\"investmentsolution == true\" style=\"margin-bottom: 0px; \">\n                <ion-item lines=\"none\" style=\"color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'ESG'}]\" routerLinkActive=\"router-link-active\">\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\n                    ESG Strategies\n                  </ion-text>\n                </ion-item>\n    \n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Fixed Income'}]\" routerLinkActive=\"router-link-active\">\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\n                    Fixed Income Strategies\n                  </ion-text>\n                </ion-item>\n    \n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Leading Equity'}]\" routerLinkActive=\"router-link-active\">\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\n                    Leading Equity Strategies\n                  </ion-text>\n                </ion-item>\n    \n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Long_Short Equity'}]\" routerLinkActive=\"router-link-active\">\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\n                    Long / Short Equity Strategies\n                  </ion-text>\n                </ion-item>\n    \n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/performance',{'Key':'Low Volatility'}]\" routerLinkActive=\"router-link-active\">\n                  <ion-text color=\"light\" style=\"font-size: 15px; font-family: Open Sans Regular;\">\n                    Low Volatility Strategies\n                  </ion-text>\n                </ion-item>\n              </ion-list>\n            </ion-menu-toggle>\n    \n            <ion-menu-toggle autoHide=\"false\" >\n              <ion-list *ngIf=\"investmentsolution === false\" style=\"padding-top: 0px;\">\n                \n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" [routerLink]=\"['/menu/menu/change-password']\" routerLinkActive=\"router-link-active\" >\n                  <img src=\"../../assets/images/password.svg\" alt=\"ChangePassword\" style=\"height: 20px; padding-right: 10px;\">\n                    <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\n                      Change Password\n                    </ion-text>\n                  </ion-item>\n                <ion-item lines=\"none\" style=\"    color: white; --detail-icon-opacity: 1;\" (click)=\"onLogoutClick()\">\n                    <img src=\"../../assets/images/power.svg\" alt=\"logout\" style=\"height: 20px; padding-right: 10px;\">\n                    <ion-text color=\"light\" style=\"font-size: 16px; font-family: Open Sans SemiBold;\">\n                        Logout\n                      </ion-text>\n                </ion-item>\n              </ion-list>\n          </ion-menu-toggle>\n      </ion-list>\n      <div class=\"footerDiv\">\n        <ion-text class=\"footerText\">\n          <p style=\"font-family: Open Sans;\">© 2021 <span style=\"color: #00AEEF;\">newagealpha.com</span></p>\n        </ion-text>\n      </div>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"menu-content\"></ion-router-outlet>\n</ion-split-pane>\n</ion-content>";
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


    __webpack_exports__["default"] = ".active-item {\n  border-left: 8px solid var(--ion-color-primary);\n}\n\n.menuContent {\n  --background: #274b9e;\n  overflow: hidden;\n  -ms-overflow-style: none;\n}\n\n.menuContent ::-webkit-scrollbar {\n  display: none;\n}\n\n.profile {\n  background-color: white;\n  height: 100px;\n  display: flex;\n  padding: 12px;\n}\n\n.avatar {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  background-color: #2e4c99;\n  padding: 20px;\n  border: 2px solid white;\n}\n\n.avatarDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 30px 0 0 0;\n}\n\np {\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  color: white;\n  margin-top: 5px;\n}\n\n.deatilsDiv {\n  padding: 10px;\n  text-align: center;\n  font-family: \"Open Sans SemiBold\";\n  font-size: 14px;\n}\n\n.divider {\n  border-top: 1px solid white;\n  margin: 15px 25px;\n}\n\n.footerDiv {\n  display: flex;\n  justify-content: center;\n}\n\n.footerDiv .footerText {\n  position: absolute;\n  bottom: 30px;\n}\n\n.footerDiv p {\n  color: white;\n  font-size: 14px;\n}\n\n#menu-List {\n  --ion-background-color: #274b9e;\n}\n\n@media screen and (orientation: landscape) {\n  .footerText {\n    bottom: 25px !important;\n  }\n\n  #menu-List {\n    --ion-background-color: #274b9e;\n    margin-bottom: unset;\n    height: calc(100vh - 170px);\n    overflow: auto;\n  }\n\n  .avatarDiv {\n    flex-direction: row;\n  }\n  .avatarDiv .avatar {\n    height: 50px;\n    width: 50px;\n    padding: 10px;\n  }\n  .avatarDiv .deatilsDiv {\n    text-align: left;\n    padding: 0 10px;\n  }\n}\n\n.ipadmenu {\n  min-width: 70px !important;\n  max-width: 70px !important;\n  border: 0px !important;\n}\n\n.ipadParentDiv {\n  padding: 30px 10px;\n}\n\n.ipadParentDiv ion-list {\n  display: flex;\n  justify-content: center;\n}\n\n.ipadParentDiv ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  justify-content: center;\n  display: grid;\n  padding-bottom: 15px;\n}\n\n.ipadParentDiv img {\n  height: 65px;\n}\n\n.ipadParentDiv .bottomDiv {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtBQ0NSOztBREdBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRFI7O0FESUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBRE1BO0VBQ0ksK0JBQUE7QUNISjs7QURNQTtFQUNJO0lBQ0ksdUJBQUE7RUNITjs7RURNRTtJQUNJLCtCQUFBO0lBQ0Esb0JBQUE7SUFDQSwyQkFBQTtJQUNBLGNBQUE7RUNITjs7RURNRTtJQUNJLG1CQUFBO0VDSE47RURLTTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFQ0hWO0VETU07SUFDSSxnQkFBQTtJQUNBLGVBQUE7RUNKVjtBQUNGOztBRFFBO0VBQ0ksMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtBQ05KOztBRFFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDTlI7O0FEU0k7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNQUjs7QURVSTtFQUNJLFlBQUE7QUNSUjs7QURXSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1RSIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtaXRlbSB7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tZW51Q29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4ucHJvZmlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTJweDtcbn1cblxuLmF2YXRhciB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbi5hdmF0YXJEaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMzBweCAwIDAgMDtcbn1cblxucCB7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kZWF0aWxzRGl2IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgU2VtaUJvbGRcIjtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gICAgbWFyZ2luOiAxNXB4IDI1cHg7XG59XG5cbi5mb290ZXJEaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAuZm9vdGVyVGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG5cbiNtZW51LUxpc3Qge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyNzRiOWU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgLmZvb3RlclRleHQge1xuICAgICAgICBib3R0b206IDI1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAjbWVudS1MaXN0IHtcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzI3NGI5ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE3MHB4KTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuXG4gICAgLmF2YXRhckRpdiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVhdGlsc0RpdiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaXBhZG1lbnUge1xuICAgIG1pbi13aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pcGFkUGFyZW50RGl2IHtcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICB9XG5cbiAgICAuYm90dG9tRGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICB9XG59XG4iLCIuYWN0aXZlLWl0ZW0ge1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1lbnVDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG59XG4ubWVudUNvbnRlbnQgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9maWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi5hdmF0YXIge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTRjOTk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4uYXZhdGFyRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbn1cblxucCB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZGVhdGlsc0RpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIFNlbWlCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gIG1hcmdpbjogMTVweCAyNXB4O1xufVxuXG4uZm9vdGVyRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9vdGVyRGl2IC5mb290ZXJUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwcHg7XG59XG4uZm9vdGVyRGl2IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI21lbnUtTGlzdCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyNzRiOWU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5mb290ZXJUZXh0IHtcbiAgICBib3R0b206IDI1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gICNtZW51LUxpc3Qge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyNzRiOWU7XG4gICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTcwcHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLmF2YXRhckRpdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuYXZhdGFyRGl2IC5hdmF0YXIge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5hdmF0YXJEaXYgLmRlYXRpbHNEaXYge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG59XG4uaXBhZG1lbnUge1xuICBtaW4td2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pcGFkUGFyZW50RGl2IHtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xufVxuLmlwYWRQYXJlbnREaXYgaW9uLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pcGFkUGFyZW50RGl2IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLmlwYWRQYXJlbnREaXYgaW1nIHtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuLmlwYWRQYXJlbnREaXYgLmJvdHRvbURpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59Il19 */";
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