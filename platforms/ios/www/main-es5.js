function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/line-chart/line-chart.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/line-chart/line-chart.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLineChartLineChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <img slot=\"start\" src=\"../../../assets/images/NAA_Logo_Mobile.svg\" alt=\"logo\" style=\"height: 30px;\">\n    <ion-title>Avoid the Losers</ion-title>\n    <ion-button slot=\"end\" (click)=\"onCloseClick($event)\" fill=\"clear\">\n      Close\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"rangeDiv\">\n    <div class=\"rangeInnerDiv\">\n      <ion-range mode='ios'\n      min=\"0\" max=\"95\"\n      dualKnobs=\"false\" pin=\"true\"\n      snaps=\"true\" step=\"5\"\n      debounce = 200\n      ticks=\"true\" [(value)]=\"range == 100 ? 0 : range\"\n      (ionChange)=\"rangeChange($event)\">\n      <ion-label slot=\"start\">All</ion-label>\n      <ion-label slot=\"end\">95</ion-label>\n      </ion-range>\n    </div>\n  </div>\n  <div class=\"LChartOuter\">\n    <div id=\"lineChartModal\" class=\"LChart\"></div>\n  </div>\n  \n</ion-content>\n<!-- <div class=\"AL_outerDiv\"> -->\n<!-- <div class=\"AL_innerDiv\"> -->\n  <!-- <div class=\"LC_TitleDiv\">\n    <p></p>\n    <ion-icon name=\"close-circle\" (click)=\"onCloseClick($event)\"></ion-icon>\n  </div> -->\n  <!-- <div class=\"AL_rangeDiv\">    \n    \n  </div>\n  \n\n  </div> -->\n<!-- </div> -->\n<!-- </div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/mobile-search/mobile-search.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/mobile-search/mobile-search.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMobileSearchMobileSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--min-height: 35px; padding: 5px 0;\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons> -->\n    <!-- <ion-icon ></ion-icon> -->\n    <div style=\"display: flex;\n    align-items: center;\">\n      <ion-icon slot=\"start\" name=\"chevron-back-outline\" (click)=\"closeSearch()\"></ion-icon>\n      <ion-searchbar placeholder=\"Ticker or company name\" (ionChange)=\"SearchCompany($event)\" id=\"searchbar\"></ion-searchbar>\n    </div>\n      \n  </ion-toolbar>\n  <!-- <ion-toolbar>\n    \n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content forceOverscroll=false>\n  <ion-list *ngIf=\"_searchRes.length != 0 && data.length != 0\">\n    <ion-item *ngFor=\"let item of _searchRes\" (click)=\"onCompanyClick(item)\">\n      <div>\n        <span>\n          <p>{{item.companyName}}&nbsp;({{item.ticker}})</p>\n          <p>{{item.indexName}}</p>\n        </span>\n        <span>\n          <p>{{item.country}}</p>\n        </span>\n      </div>\n      <ion-label></ion-label>\n    </ion-item>\n  </ion-list>\n  <div *ngIf=\"data.length == 0 && _searchRes.length == 0\" style=\"    height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\">\n    <img src=\"../../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 35px;\n    width: 35px;\">\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/profiledetails/profiledetails.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/profiledetails/profiledetails.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfiledetailsProfiledetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div>\n    <div\n      style=\"display: flex; flex-direction: row; background-color: #ffffff; align-items: center; height: 80px; padding: 10px;\">\n      <span style=\"border: 2px solid #00b9ff; border-radius: 50%; padding: 10px; margin: 0 10px 0 0;\">\n        <img src=\"../../assets/images/Profile_NAA6.svg\" alt=\"Profile\" style=\"width: 25px; height: 25px;\">\n      </span>\n      <div>\n        <p style=\"margin: 0px;\">Hi, {{firstname}} {{lastname}}</p>\n        <p style=\"margin: 0px; overflow: hidden; text-overflow: ellipsis; width: 210px; white-space: nowrap;\">{{username}}</p>\n      </div>\n    </div>\n    <div style=\"    display: flex;\n    flex-direction: row;\n    align-items: center;\n    height: 50px;\n    padding: 10px;\n    background-color: #ffffff;\" (click)=\"onChangePasswordClick()\">\n      <img src=\"../../../assets/images/password.png\" alt=\"change_password\"\n        style=\" height: 40px; width: 40px; margin: 0 10px 0 0;\">\n      <p>Change Password</p>\n    </div>\n    <div style=\"background-color: #ffffff; padding: 10px 0;\">\n    <hr style=\" border: 1px solid #2e4c99; margin: 0 30px; padding: 0px; height: 0px;\">\n  </div>\n    <div style=\"height: 50px; background-color: #ffffff; display: flex; flex-direction: row; justify-content: space-evenly; align-items: center;\">\n      <ion-button (click)=\"onLogoutClick()\" size=\"small\" shape=\"round\" style=\"color: #ffffff; --background: #2e4c99;\">\n        <ion-icon name=\"power\" style=\" height: 25px; width: 25px; color: white;\"></ion-icon>\n        Logout\n      </ion-button>\n      <ion-button (click)=\"DismissClick()\" fill=\"outline\" size=\"small\" shape=\"round\" style=\"--border-color: #2e4c99;\">\n        Cancel\n      </ion-button>\n    </div>\n  </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sector-popover/sector-popover.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sector-popover/sector-popover.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSectorPopoverSectorPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\n  <ion-item *ngFor=\"let item of sectorList\" style=\"    --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --inner-padding-end: 0;\" (click)=\"onSecItemClick(item)\">\n    <div style=\"width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;width: 100%;\n    padding: 5px;\">\n      <p style=\"margin: 0;\n      font-size: 14px;\n      font-family: Open Sans Regular;\n      color: #00aaeb;\">{{item.secTitle}}</p>\n      <div style=\"display: flex;\">\n      <p style=\"    margin: 0;\n        font-size: 14px;\n        font-family: Open Sans SemiBold;\n        color: #00aaeb;\n    \">{{item.secName}}<span>&nbsp;({{item.secCount}})</span></p></div>\n    </div>\n  </ion-item>\n</ion-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <div id=\"NetError\" style=\"visibility: hidden; transition: 1s; position: absolute;\nheight: 100%;\nwidth: 100%;\ntop: 0;\nbottom: 0;\nleft: 0;\nright: 0;\nbackground: #ffffff;\ndisplay: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; \">\n<div style=\"display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n  <img src=\"../assets/images/NAA_No-Connection.png\" alt=\"NoNetwork\">\n  <ion-text style=\"    text-align: center;\n  color: #666666;\">\n    <h1 style=\"font-family: Open Sans Bold;\n    font-size: 25px;\">Ooops!</h1>\n    <p style=\"    font-family: Open sans SemiBold;\n    font-size: 14px;\">No Internet Connection found<br>Check your connection.</p>\n  </ion-text>\n\n  <ion-button (click)=\"onTryAgainClick()\" expand=\"block\" shape=\"round\" style=\"     --border-radius: 20px;\n  font-size: 16px;\n  height: 35px;\n  --background: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-activated: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-focused: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  --background-hover: linear-gradient(45deg, #00b9ff 0%, #2e4c99 100%);\n  color: #ffffff;\n  width: 26vh;\n  font-family: Open Sans semiBold;\n  margin-top: 5vh;\">\n    <ion-spinner *ngIf=\"showLoad\" name=\"crescent\"></ion-spinner>&nbsp;{{showLoad? 'Connection...':'Try Again'}}\n  </ion-button>\n</div>\n</div>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/Components/line-chart/line-chart.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/Components/line-chart/line-chart.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLineChartLineChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: #274b9e;\n}\nion-toolbar img {\n  margin-left: 10px;\n}\nion-toolbar ion-title {\n  --color:#00b9ff;\n}\nion-toolbar ion-button {\n  --color:#fff;\n}\nion-content .rangeDiv {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\nion-content .rangeInnerDiv {\n  width: 80%;\n}\nion-content .rangeInnerDiv ion-range {\n  --bar-height: 5px;\n  --knob-size: 15px;\n  --bar-background-active: #01b9ff;\n  padding: 0;\n  padding-top: 10px;\n}\nion-content .rangeInnerDiv ion-range ion-label {\n  font-size: 12px;\n  font-family: \"Open Sans Regular\";\n  color: #000;\n}\nion-content .LChartOuter {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\nion-content .LChartOuter .LChart {\n  width: 90%;\n  height: calc(100vh - 130px);\n  margin-top: 10px;\n  display: block;\n}\n.AL_outerDiv {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.AL_outerDiv .AL_innerDiv {\n  width: 90%;\n  height: 90%;\n  background: #fff;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.AL_outerDiv .AL_innerDiv .LC_TitleDiv p {\n  margin: 10px 0 0 0;\n  text-align: center;\n  color: #394e8b;\n  font-family: \"Open Sans Bold\";\n}\n.AL_outerDiv .AL_innerDiv .LC_TitleDiv ion-icon {\n  position: absolute;\n  top: 7%;\n  right: 7%;\n  font-size: 24px;\n  color: #01b9ff;\n}\n.AL_outerDiv .AL_innerDiv .AL_rangeDiv {\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.AL_outerDiv .AL_innerDiv .AL_rangeDiv ion-range::part(knob) {\n  border: 0.5px solid rgba(28, 55, 118, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9Db21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQ0k7RUFDSSxpQkFBQTtBQ0NSO0FERUk7RUFDSSxlQUFBO0FDQVI7QURHSTtFQUNJLFlBQUE7QUNEUjtBREtJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0ZSO0FES0k7RUFDSSxVQUFBO0FDSFI7QURLUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0haO0FES1k7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FDSGhCO0FEUUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDTlI7QURRUTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ05aO0FEbUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2hCSjtBRGtCSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDaEJSO0FEb0JRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ2xCWjtBRHFCUTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ25CWjtBRHVCSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3JCUjtBRHlCUTtFQUNJLDBDQUFBO0FDdkJaIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XG5cbiAgICBpbWd7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cblxuICAgIGlvbi10aXRsZXtcbiAgICAgICAgLS1jb2xvcjojMDBiOWZmO1xuICAgIH1cblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tY29sb3I6I2ZmZjtcbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICAucmFuZ2VEaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucmFuZ2VJbm5lckRpdntcbiAgICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgICBpb24tcmFuZ2V7XG4gICAgICAgICAgICAtLWJhci1oZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIC0ta25vYi1zaXplOiAxNXB4O1xuICAgICAgICAgICAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICMwMWI5ZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcic7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuTENoYXJ0T3V0ZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuTENoYXJ0e1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEzMHB4KTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxufVxuXG5cblxuXG5cblxuXG4uQUxfb3V0ZXJEaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5BTF9pbm5lckRpdntcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuTENfVGl0bGVEaXZ7XG5cbiAgICAgICAgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjMzk0ZThiO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQm9sZCc7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNyU7XG4gICAgICAgICAgICByaWdodDogNyU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAxYjlmZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5BTF9yYW5nZURpdntcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgXG5cbiAgICAgICAgaW9uLXJhbmdlOjpwYXJ0KGtub2Ipe1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDI4LDU1LDExOCwwLjUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgXG4gICAgfVxufSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xufVxuaW9uLXRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAtLWNvbG9yOiMwMGI5ZmY7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjojZmZmO1xufVxuXG5pb24tY29udGVudCAucmFuZ2VEaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCAucmFuZ2VJbm5lckRpdiB7XG4gIHdpZHRoOiA4MCU7XG59XG5pb24tY29udGVudCAucmFuZ2VJbm5lckRpdiBpb24tcmFuZ2Uge1xuICAtLWJhci1oZWlnaHQ6IDVweDtcbiAgLS1rbm9iLXNpemU6IDE1cHg7XG4gIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjMDFiOWZmO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5yYW5nZUlubmVyRGl2IGlvbi1yYW5nZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBSZWd1bGFyXCI7XG4gIGNvbG9yOiAjMDAwO1xufVxuaW9uLWNvbnRlbnQgLkxDaGFydE91dGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLkxDaGFydE91dGVyIC5MQ2hhcnQge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzBweCk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uQUxfb3V0ZXJEaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5BTF9vdXRlckRpdiAuQUxfaW5uZXJEaXYge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5BTF9vdXRlckRpdiAuQUxfaW5uZXJEaXYgLkxDX1RpdGxlRGl2IHAge1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzOTRlOGI7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBCb2xkXCI7XG59XG4uQUxfb3V0ZXJEaXYgLkFMX2lubmVyRGl2IC5MQ19UaXRsZURpdiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3JTtcbiAgcmlnaHQ6IDclO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMDFiOWZmO1xufVxuLkFMX291dGVyRGl2IC5BTF9pbm5lckRpdiAuQUxfcmFuZ2VEaXYge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5BTF9vdXRlckRpdiAuQUxfaW5uZXJEaXYgLkFMX3JhbmdlRGl2IGlvbi1yYW5nZTo6cGFydChrbm9iKSB7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyOCwgNTUsIDExOCwgMC41KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/line-chart/line-chart.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Components/line-chart/line-chart.component.ts ***!
    \***************************************************************/

  /*! exports provided: LineChartComponent */

  /***/
  function srcAppComponentsLineChartLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
      return LineChartComponent;
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


    var src_app_services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/dataHandler/data-handler.service */
    "./src/app/services/dataHandler/data-handler.service.ts");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/ngx/index.js");

    var LineChartComponent = /*#__PURE__*/function () {
      function LineChartComponent(dataHandler, modalCtrl, screenOrientation) {
        _classCallCheck(this, LineChartComponent);

        this.dataHandler = dataHandler;
        this.modalCtrl = modalCtrl;
        this.screenOrientation = screenOrientation;
        this.range = 0;
      }

      _createClass(LineChartComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
          this.range = this.currentData.e;
          setTimeout(function () {
            _this.highChartLine();
          }, 1000);
        }
      }, {
        key: "rangeChange",
        value: function rangeChange(evt) {
          this.range = evt.detail.value;
          console.log(this.range);
          this.currentData.e = evt.detail.value == 100 ? 0 : evt.detail.value;
          this.highChartLine();
        }
      }, {
        key: "formatedates",
        value: function formatedates(value) {
          if (value < 10) {
            return '0' + value;
          } else {
            return value;
          }
        }
      }, {
        key: "highChartLine",
        value: function highChartLine() {
          var that = this;

          if (this.selComp != '') {
            var indexValue = [];
            var date = [];
            var Ctype = 'MC';
            var range = '';
            var GICSId = 0;

            if (this.selSecLvl == 1) {
              GICSId = 0;
            } else {
              GICSId = that.selComp.industry.slice(0, 2 * (this.selSecLvl - 1));
            }

            range = 'top' + (100 - this.currentData.e); // console.log(range);

            this.dataHandler.getIndexPreRuns(this.indexId, GICSId, Ctype, range).subscribe(function (res) {
              // console.log(res);
              if (res.length > 0) {
                if (that.lgChart != null) {
                  that.lgChart.destroy();
                  that.lgChart = null;
                }

                var indexValue1 = [];

                for (var i = 0; i <= res.length - 1; ++i) {
                  indexValue1.push(res[i]['top100']);
                  date.push(res[i]['date']);
                }

                var d = new Date(date[date.length - 1]);
                var formatdate = that.formatedates(d.getMonth() + 1) + '/' + that.formatedates(d.getDate()) + '/' + d.getFullYear();
                var series = [];
                series.push({
                  name: "All  (" + formatdate + ' : ' + indexValue1[indexValue1.length - 1].toFixed(2) + ")",
                  marker: {
                    symbol: ''
                  },
                  color: '#9b9b9b',
                  data: indexValue1,
                  lineWidth: 0.8
                });

                if (0 < that.range && 100 > that.range) {
                  for (var _i = 0; _i <= res.length - 1; ++_i) {
                    //indexValue.push(res[i][that.clkdRgeText + that.SRValue]);
                    indexValue.push(res[_i]["range"]);
                    date.push(res[_i]['date']);
                  } // console.log(indexValue);


                  var d = new Date(date[date.length - 1]);
                  var formatdate1 = that.formatedates(d.getMonth() + 1) + '/' + that.formatedates(d.getDate()) + '/' + d.getFullYear();
                  series.push({
                    name: "Top " + (100 - that.range) + "% (" + formatdate1 + ' : ' + indexValue[indexValue.length - 1].toFixed(2) + ")",
                    marker: {
                      symbol: 'circle'
                    },
                    color: '#00b9ff',
                    data: indexValue,
                    lineWidth: 0.8
                  });
                }

                that.lgChart = highcharts__WEBPACK_IMPORTED_MODULE_3__["chart"]({
                  chart: {
                    renderTo: 'lineChartModal',
                    type: 'spline',
                    zoomType: "x",
                    pinchType: 'x',
                    style: {
                      fontFamily: 'Open Sans SemiBold'
                    }
                  },
                  exporting: {
                    url: 'https://export.highcharts.com/',
                    enabled: true,
                    buttons: {
                      contextButton: {
                        menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']
                      }
                    }
                  },
                  credits: {
                    enabled: false
                  },
                  title: {
                    text: ''
                  },
                  subtitle: {
                    text: ''
                  },
                  legend: {},
                  xAxis: {
                    // minRange: 10,
                    type: 'datetime',
                    categories: date,
                    tickColor: '#f1f1f1',
                    //useHTML: true,
                    tickWidth: 1,
                    labels: {
                      // rotation: 310,
                      formatter: function formatter() {
                        var d = new Date(this.value);
                        var currentMonth = d.getMonth() + 1;

                        if (currentMonth < 10) {
                          currentMonth = '0' + currentMonth;
                        }

                        return currentMonth + '/' + d.getFullYear().toString();
                      },
                      style: {
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        color: '#333',
                        fontSize: '10px'
                      }
                    }
                  },
                  yAxis: {
                    maxPadding: 0.2,
                    title: {
                      text: ''
                    },
                    labels: {
                      style: {
                        color: '#333',
                        fontSize: '10px'
                      },
                      formatter: function formatter() {
                        return highcharts__WEBPACK_IMPORTED_MODULE_3__["numberFormat"](this.value, 0, '', ',');
                      }
                    }
                  },
                  tooltip: {
                    xDateFormat: '%Y-%m-%d',
                    valueDecimals: 2,
                    //crosshairs: true,
                    shared: true,
                    dateTimeLabelFormats: {
                      millisecond: "%A, %b %e"
                    },
                    formatter: function formatter() {
                      var d = new Date(this.x);

                      function formater(value) {
                        if (value < 10) {
                          return '0' + value;
                        } else {
                          return value;
                        }
                      }

                      var formatdate = formater(d.getMonth() + 1) + '/' + formater(d.getDate()) + '/' + d.getFullYear();

                      if (this.points.length > 1) {
                        return "<div style='font-size:7pt'>" + formatdate + "<br><b>All : </b> <span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + "</span><br><b>" + that.range + " : </b><span style='font-size: 8pt'>" + this.points[1].y.toFixed(2) + ' </span></div>';
                      } else if (this.points[0].color == "#00b9ff") {
                        return "<div style='font-size:7pt'>" + formatdate + "<br><b>" + that.range + " : </b><span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + '</span></div>';
                      } else {
                        return "<div style='font-size:7pt'>" + formatdate + "<br><b>All : </b><span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + '</span></div>';
                      }
                    }
                  },
                  plotOptions: {
                    spline: {
                      marker: {
                        radius: 0.1,
                        lineColor: '#666666',
                        lineWidth: 0.1
                      }
                    }
                  },
                  series: series,
                  lang: {
                    noData: "No data to display"
                  },
                  noData: {
                    style: {
                      fontWeight: 'bold',
                      fontSize: '15px',
                      color: '#303030'
                    }
                  }
                });
              }
            });
          }
        }
      }, {
        key: "onCloseClick",
        value: function onCloseClick(evt) {
          this.modalCtrl.dismiss({
            'range': this.range
          });
        }
      }]);

      return LineChartComponent;
    }();

    LineChartComponent.ctorParameters = function () {
      return [{
        type: src_app_services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_2__["DataHandlerService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], LineChartComponent.prototype, "currentData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], LineChartComponent.prototype, "indexId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], LineChartComponent.prototype, "selSecLvl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], LineChartComponent.prototype, "selComp", void 0);
    LineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-line-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./line-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/line-chart/line-chart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./line-chart.component.scss */
      "./src/app/Components/line-chart/line-chart.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_2__["DataHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"]])], LineChartComponent);
    /***/
  },

  /***/
  "./src/app/Components/mobile-search/mobile-search.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/Components/mobile-search/mobile-search.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMobileSearchMobileSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-icon {\n  height: 25px;\n  width: 25px;\n  color: #333333;\n  margin: 0 5px;\n}\nion-header ion-toolbar ion-searchbar {\n  padding-top: unset;\n  padding-bottom: unset;\n}\nion-content {\n  --background:transparent;\n}\nion-content ion-list ion-item div {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-direction: row;\n}\nion-content ion-list ion-item div span p {\n  margin: 0;\n  font-size: 12px;\n  font-family: Open Sans SemiBold;\n}\nion-content ion-list ion-item div span:first-child p:first-child {\n  color: #666;\n}\nion-content ion-list ion-item div span:first-child p:last-child {\n  color: #00b9ff;\n}\nion-content ion-list ion-item div span:last-child p {\n  color: #ffb47e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9Db21wb25lbnRzL21vYmlsZS1zZWFyY2gvbW9iaWxlLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9tb2JpbGUtc2VhcmNoL21vYmlsZS1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDRFo7QURJUTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNGWjtBRE9BO0VBQ0ksd0JBQUE7QUNKSjtBRFFZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNOaEI7QURTb0I7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDUHhCO0FEWW9CO0VBQ0ksV0FBQTtBQ1Z4QjtBRFlvQjtFQUNJLGNBQUE7QUNWeEI7QURlb0I7RUFDSSxjQUFBO0FDYnhCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9tb2JpbGUtc2VhcmNoL21vYmlsZS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXNlYXJjaGJhcntcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiB1bnNldDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiB1bnNldDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuXG4gICAgaW9uLWxpc3R7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcDpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICAjMDBiOWZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BhbjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmI0N2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1zZWFyY2hiYXIge1xuICBwYWRkaW5nLXRvcDogdW5zZXQ7XG4gIHBhZGRpbmctYm90dG9tOiB1bnNldDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBkaXYgc3BhbiBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBkaXYgc3BhbjpmaXJzdC1jaGlsZCBwOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICM2NjY7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBkaXYgc3BhbjpmaXJzdC1jaGlsZCBwOmxhc3QtY2hpbGQge1xuICBjb2xvcjogIzAwYjlmZjtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGRpdiBzcGFuOmxhc3QtY2hpbGQgcCB7XG4gIGNvbG9yOiAjZmZiNDdlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/mobile-search/mobile-search.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Components/mobile-search/mobile-search.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MobileSearchComponent */

  /***/
  function srcAppComponentsMobileSearchMobileSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileSearchComponent", function () {
      return MobileSearchComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/shareddata/data.service */
    "./src/app/services/shareddata/data.service.ts");

    var MobileSearchComponent = /*#__PURE__*/function () {
      function MobileSearchComponent(dataService, modalCtrl) {
        _classCallCheck(this, MobileSearchComponent);

        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
        this.data = [];
        this._searchRes = [];
      }

      _createClass(MobileSearchComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          setTimeout(function () {
            _this2.searchbar.setFocus().then(function (d) {});
          }, 800);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._dataSub = this.dataService.dbScore.subscribe(function (d) {
            _this3.data = d; // console.log(this.data);
          }); // this.searchbar = document.getElementById("searchbar");
          // console.log(this.searchbar);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._dataSub.unsubscribe();
        }
      }, {
        key: "closeSearch",
        value: function closeSearch() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "SearchCompany",
        value: function SearchCompany(evt) {
          // console.log(evt);
          var serText = evt.detail.value.toLowerCase();
          if (serText.length != 0) this._searchRes = this.data.filter(function (item) {
            return item.companyName.toString().toLowerCase().startsWith(serText) || item.ticker.toString().toLowerCase().startsWith(serText);
          });else this._searchRes = []; // console.log(this._searchRes);
        }
      }, {
        key: "onCompanyClick",
        value: function onCompanyClick(item) {
          // console.log(item);
          this._selcomp = item;
          this.dataService.mobSelComp.next(this._selcomp);
          this.closeSearch();
        }
      }]);

      return MobileSearchComponent;
    }();

    MobileSearchComponent.ctorParameters = function () {
      return [{
        type: src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"])], MobileSearchComponent.prototype, "searchbar", void 0);
    MobileSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mobile-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mobile-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/mobile-search/mobile-search.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mobile-search.component.scss */
      "./src/app/Components/mobile-search/mobile-search.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], MobileSearchComponent);
    /***/
  },

  /***/
  "./src/app/Components/profiledetails/profiledetails.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/profiledetails/profiledetails.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfiledetailsProfiledetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvZmlsZWRldGFpbHMvcHJvZmlsZWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Components/profiledetails/profiledetails.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Components/profiledetails/profiledetails.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProfiledetailsComponent */

  /***/
  function srcAppComponentsProfiledetailsProfiledetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfiledetailsComponent", function () {
      return ProfiledetailsComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/shareddata/data.service */
    "./src/app/services/shareddata/data.service.ts");

    var ProfiledetailsComponent = /*#__PURE__*/function () {
      function ProfiledetailsComponent(dataServeice, route, authService, popoverController, storage) {
        _classCallCheck(this, ProfiledetailsComponent);

        this.dataServeice = dataServeice;
        this.route = route;
        this.authService = authService;
        this.popoverController = popoverController;
        this.storage = storage;
        this.url = 'https://www.newagealpha.com/';
      }

      _createClass(ProfiledetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.storage.get('currentUser').then(function (res) {
            _this4.user = JSON.parse(res);
            console.log(_this4.user);
            _this4.firstname = _this4.user.firstName;
            _this4.lastname = _this4.user.lastName;
            _this4.username = _this4.user.username;
          });
        }
      }, {
        key: "eventFromPopover",
        value: function eventFromPopover() {
          // this.events.publish('fromPopoverEvent');
          this.popoverController.dismiss();
        }
      }, {
        key: "onLogoutClick",
        value: function onLogoutClick() {
          this.DismissClick();
          this.authService.logout();
        }
      }, {
        key: "DismissClick",
        value: function DismissClick() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.dismiss();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onChangePasswordClick",
        value: function onChangePasswordClick() {
          this.DismissClick();
          this.route.navigateByUrl('/menu/menu/change-password');
        }
      }]);

      return ProfiledetailsComponent;
    }();

    ProfiledetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    ProfiledetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profiledetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profiledetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/profiledetails/profiledetails.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profiledetails.component.scss */
      "./src/app/Components/profiledetails/profiledetails.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])], ProfiledetailsComponent);
    /***/
  },

  /***/
  "./src/app/Components/sector-popover/sector-popover.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/sector-popover/sector-popover.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSectorPopoverSectorPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9Db21wb25lbnRzL3NlY3Rvci1wb3BvdmVyL3NlY3Rvci1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3NlY3Rvci1wb3BvdmVyL3NlY3Rvci1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9zZWN0b3ItcG9wb3Zlci9zZWN0b3ItcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0e1xuICAgIHBhZGRpbmc6IDA7XG59IiwiaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/sector-popover/sector-popover.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Components/sector-popover/sector-popover.component.ts ***!
    \***********************************************************************/

  /*! exports provided: SectorPopoverComponent */

  /***/
  function srcAppComponentsSectorPopoverSectorPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectorPopoverComponent", function () {
      return SectorPopoverComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SectorPopoverComponent = /*#__PURE__*/function () {
      function SectorPopoverComponent(navParams, popoverCtrl) {
        _classCallCheck(this, SectorPopoverComponent);

        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.sectorList = [];
        this.sectorList = this.navParams.get('sectorList');
        this.selComp = this.navParams.get('selComp'); // console.log(this.sectorList);
        // console.log(this.selComp);
      }

      _createClass(SectorPopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSecItemClick",
        value: function onSecItemClick(i) {
          this.popoverCtrl.dismiss(i);
        }
      }]);

      return SectorPopoverComponent;
    }();

    SectorPopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    SectorPopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sector-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sector-popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sector-popover/sector-popover.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sector-popover.component.scss */
      "./src/app/Components/sector-popover/sector-popover.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], SectorPopoverComponent);
    /***/
  },

  /***/
  "./src/app/_helper/error.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/_helper/error.interceptor.ts ***!
    \**********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcApp_helperErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(toastController, authService, router, httpClient) {
        _classCallCheck(this, ErrorInterceptor);

        this.toastController = toastController;
        this.authService = authService;
        this.router = router;
        this.httpClient = httpClient;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this5 = this;

          var that = this;
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            _this5.currentUser = _this5.authService.currentUserValue();

            if (err.status === 401) {
              if (_this5.currentUser.remToken !== null) {
                _this5.authService.checkToken(request);
              }
            } else {
              if (err.error.message.length != 0) {
                _this5.presentToast(err.error.message);
              }
            }

            var error = err.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 3000,
                      cssClass: 'center'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/_helper/jwt.interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/_helper/jwt.interceptor.ts ***!
    \********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcApp_helperJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/toast/ngx */
    "./node_modules/@ionic-native/toast/ngx/index.js");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(toast, alertController, toastController, http, storage, authService) {
        _classCallCheck(this, JwtInterceptor);

        this.toast = toast;
        this.alertController = alertController;
        this.toastController = toastController;
        this.http = http;
        this.storage = storage;
        this.authService = authService;
        this.currentUser = this.authService.currentUserValue();
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          request = request.clone({
            setHeaders: {
              'Content-Type': 'application/json'
            }
          });
          this.getCurrentUser();

          if (this.currentUser && this.currentUser.token) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(this.currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          this.currentUser = this.authService.currentUserValue();
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/_models/user.ts":
  /*!*********************************!*\
    !*** ./src/app/_models/user.ts ***!
    \*********************************/

  /*! exports provided: User, UserPass, UserView, UserTrack, UserTrackDtls */

  /***/
  function srcApp_modelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPass", function () {
      return UserPass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserView", function () {
      return UserView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTrack", function () {
      return UserTrack;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTrackDtls", function () {
      return UserTrackDtls;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };

    var UserPass = function UserPass() {
      _classCallCheck(this, UserPass);
    };

    var UserView = function UserView() {
      _classCallCheck(this, UserView);
    };

    var UserTrack = function UserTrack() {
      _classCallCheck(this, UserTrack);
    };

    var UserTrackDtls = function UserTrackDtls() {
      _classCallCheck(this, UserTrackDtls);
    };
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'landing',
      pathMatch: 'full'
    }, {
      path: 'landing',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | landing-landing-module */
        "landing-landing-module").then(__webpack_require__.bind(null,
        /*! ./landing/landing.module */
        "./src/app/landing/landing.module.ts")).then(function (m) {
          return m.LandingPageModule;
        });
      }
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | auth-auth-module */
        "auth-auth-module").then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (m) {
          return m.AuthPageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | signup-signup-module */
        [__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null,
        /*! ./signup/signup.module */
        "./src/app/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'forgot-password',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | forgot-password-forgot-password-module */
        [__webpack_require__.e("common"), __webpack_require__.e("forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null,
        /*! ./forgot-password/forgot-password.module */
        "./src/app/forgot-password/forgot-password.module.ts")).then(function (m) {
          return m.ForgotPasswordPageModule;
        });
      }
    }, {
      path: 'home',
      // canActivate : [AuthGaurdService],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'thankyou',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | thankyou-thankyou-module */
        "thankyou-thankyou-module").then(__webpack_require__.bind(null,
        /*! ./thankyou/thankyou.module */
        "./src/app/thankyou/thankyou.module.ts")).then(function (m) {
          return m.ThankyouPageModule;
        });
      }
    }, {
      path: 'menu',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | menu-menu-module */
        "menu-menu-module").then(__webpack_require__.bind(null,
        /*! ./menu/menu.module */
        "./src/app/menu/menu.module.ts")).then(function (m) {
          return m.MenuPageModule;
        });
      }
    }, {
      path: 'change-password',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | change-password-change-password-module */
        [__webpack_require__.e("common"), __webpack_require__.e("change-password-change-password-module")]).then(__webpack_require__.bind(null,
        /*! ./change-password/change-password.module */
        "./src/app/change-password/change-password.module.ts")).then(function (m) {
          return m.ChangePasswordPageModule;
        });
      }
    }, {
      path: 'tabs',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | tabs-tabs-module */
        [__webpack_require__.e("default~performance-performance-module~tabs-tabs-module"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-backdrop {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrZHJvcCB7XG4gICAgb3BhY2l0eTogMC41O1xufSIsImlvbi1iYWNrZHJvcCB7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, authService, router, network, toastController, navController, screenOrientation) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.router = router;
        this.network = network;
        this.toastController = toastController;
        this.navController = navController;
        this.screenOrientation = screenOrientation;
        this.showLoad = false;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this6 = this;

          this.platform.ready().then(function () {
            _this6.splashScreen.hide();

            _this6.statusBar.styleDefault();

            _this6.statusBar.overlaysWebView(false);

            _this6.statusBar.backgroundColorByHexString("#2b468f");

            var netcon = _this6.network.onConnect().subscribe(function () {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        document.getElementById('NetError').style.visibility = 'hidden';

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
            });

            var netdis = _this6.network.onDisconnect().subscribe(function () {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        document.getElementById('NetError').style.visibility = 'visible';

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));
            });

            if (_this6.platform.is('cordova')) {
              _this6.screenOrientation.lock(_this6.screenOrientation.ORIENTATIONS.PORTRAIT); // console.log('device');


              if (_this6.network.type != 'none') {
                _this6.authService.authenticationState.subscribe(function (state) {
                  // console.log("Auth State : "+state);
                  if (state) {
                    if (_this6.platform.is('ipad') || _this6.platform.is('tablet')) {
                      _this6.navController.navigateRoot(['tabs/home']);

                      _this6.splashScreen.hide();
                    } else {
                      _this6.navController.navigateRoot(['menu/menu/home']); // this.router.navigateByUrl('/menu/menu/home');       


                      _this6.splashScreen.hide();
                    }
                  } else {
                    _this6.splashScreen.hide();

                    _this6.navController.navigateRoot(['landing']); // this.router.navigateByUrl('/landing');

                  }
                });
              } else {
                _this6.splashScreen.hide();

                document.getElementById('NetError').style.visibility = 'visible';
              }
            } else {
              // console.log('browser');
              if (navigator.onLine) {
                _this6.authService.authenticationState.subscribe(function (state) {
                  // console.log("Auth State : "+state);
                  if (state) {
                    if (_this6.platform.is('ipad') || _this6.platform.is('tablet')) {
                      // console.log('ipad/tablet');
                      _this6.navController.navigateRoot(['tabs/home']);

                      _this6.splashScreen.hide();
                    } else {
                      _this6.navController.navigateRoot(['menu/menu/home']);

                      _this6.splashScreen.hide();
                    }
                  } else {
                    _this6.splashScreen.hide();

                    _this6.navController.navigateRoot(['landing']);
                  }
                });
              } else {
                _this6.splashScreen.hide();

                _this6.presentToast();
              }
            }
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var toast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastController.create({
                      message: 'Network Error, Please check the Connection',
                      duration: 3000
                    });

                  case 2:
                    toast = _context5.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "onTryAgainClick",
        value: function onTryAgainClick() {
          this.showLoad = true;
          var networkState = navigator.connection.type;

          if (networkState !== Connection.NONE) {
            document.getElementById('NetError').style.visibility = 'hidden';
            this.showLoad = false;
          } else {
            document.getElementById('NetError').style.visibility = 'visible';
            this.showLoad = false;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
    /* harmony import */


    var _Components_profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Components/profiledetails/profiledetails.component */
    "./src/app/Components/profiledetails/profiledetails.component.ts");
    /* harmony import */


    var _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./_helper/jwt.interceptor */
    "./src/app/_helper/jwt.interceptor.ts");
    /* harmony import */


    var _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./_helper/error.interceptor */
    "./src/app/_helper/error.interceptor.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/toast/ngx */
    "./node_modules/@ionic-native/toast/ngx/index.js");
    /* harmony import */


    var _angular_common___WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/common/ */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/user-agent/ngx */
    "./node_modules/@ionic-native/user-agent/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @fortawesome/fontawesome-svg-core */
    "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _Components_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./Components/mobile-search/mobile-search.component */
    "./src/app/Components/mobile-search/mobile-search.component.ts");
    /* harmony import */


    var _Components_sector_popover_sector_popover_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./Components/sector-popover/sector-popover.component */
    "./src/app/Components/sector-popover/sector-popover.component.ts");
    /* harmony import */


    var _Components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./Components/line-chart/line-chart.component */
    "./src/app/Components/line-chart/line-chart.component.ts");

    _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_29__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_28__["faAngleDoubleLeft"]);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _Components_profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_15__["ProfiledetailsComponent"], _Components_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_31__["MobileSearchComponent"], _Components_sector_popover_sector_popover_component__WEBPACK_IMPORTED_MODULE_32__["SectorPopoverComponent"], _Components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_33__["LineChartComponent"]],
      entryComponents: [_Components_profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_15__["ProfiledetailsComponent"], _Components_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_31__["MobileSearchComponent"], _Components_sector_popover_sector_popover_component__WEBPACK_IMPORTED_MODULE_32__["SectorPopoverComponent"], _Components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_33__["LineChartComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["IonicStorageModule"].forRoot(), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_30__["FontAwesomeModule"]],
      providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _angular_common___WEBPACK_IMPORTED_MODULE_21__["DatePipe"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__["Network"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__["HTTP"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_14__["ScreenOrientation"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_20__["Toast"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_23__["PhotoViewer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_24__["File"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_25__["Device"], _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_26__["UserAgent"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_27__["AppVersion"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_30__["FaConfig"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_30__["FaIconLibrary"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../_models/user */
    "./src/app/_models/user.ts");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/user-agent/ngx */
    "./node_modules/@ionic-native/user-agent/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var _shareddata_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shareddata/data.service */
    "./src/app/services/shareddata/data.service.ts");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(dataService, next, platform, appVersion, userAgent, device, toastController, http, storage, plt, route, authService) {
        var _this7 = this;

        _classCallCheck(this, AuthenticationService);

        this.dataService = dataService;
        this.next = next;
        this.platform = platform;
        this.appVersion = appVersion;
        this.userAgent = userAgent;
        this.device = device;
        this.toastController = toastController;
        this.http = http;
        this.storage = storage;
        this.plt = plt;
        this.route = route;
        this.authService = authService;
        this.CurrentUser = null;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.storage.get('currentUser').then(function (res) {
          if (res) {
            _this7.checkToken(null);
          } else {
            _this7.dataService.showsplashLoader.next(false);
          }
        });
        this.dataService.showsplashLoader.subscribe(function (d) {
          _this7.showSplashLoader = d;
        });
      }

      _createClass(AuthenticationService, [{
        key: "currentUserValue",
        value: function currentUserValue() {
          return this.CurrentUser;
        }
      }, {
        key: "login",
        value: function login(username, password, isRemember) {
          var _this8 = this;

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(this.api_url + '/users/authenticate', {
            username: username,
            password: password,
            isRemember: isRemember
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user && user.token) {
              if (user.isEmailVerified != "" && user.isEmailVerified == "Y") {
                _this8.CurrentUser = user;

                _this8.storage.set('currentUser', JSON.stringify(user));

                _this8.authenticationState.next(true);

                _this8.ProcUserTrack(user);
              }
            }

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this9 = this;

          var user;
          var userId;
          var remToken;
          this.storage.get('currentUser').then(function (res) {
            user = JSON.parse(res);
            userId = user.userId;
            remToken = user.remToken;

            _this9.updateUserTrackLogOut(userId, remToken).subscribe(function (res) {
              if (res.status == 'D') {
                _this9.storage.remove('currentUser').then(function () {
                  _this9.dataService.showsplashLoader.next(false);

                  _this9.authenticationState.next(false);
                });
              }
            });
          });
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authenticationState.value;
        }
      }, {
        key: "checkToken",
        value: function checkToken(req) {
          var _this10 = this;

          this.storage.get('currentUser').then(function (res) {
            var user = JSON.parse(res);

            if (user && user.token && user.remToken) {
              var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Content-Type': 'application/json'
                })
              };
              var username = user.username;
              var remToken = user.remToken;
              return _this10.http.post(_this10.api_url + '/Users/AuthRem', {
                username: username,
                remToken: remToken
              }, httpOptions).subscribe(function (userdata) {
                _this10.CurrentUser = userdata;

                _this10.storage.set('currentUser', JSON.stringify(userdata));

                _this10.authenticationState.next(true);

                _this10.ProcUserTrack(userdata);

                return userdata;
              }, function (error) {
                _this10.dataService.showsplashLoader.next(false);

                _this10.presentToast(error.error.message);

                return null;
              });
            } else {
              _this10.dataService.showsplashLoader.next(false);

              _this10.authenticationState.next(false);
            }
          });
        }
      }, {
        key: "trackUser",
        value: function trackUser(userTracking) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(this.api_url + "/users/Usertrack", userTracking, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (u) {
            return u;
          }));
        }
      }, {
        key: "trackUserDetails",
        value: function trackUserDetails(userTrackdtls) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(this.api_url + "/users/UserTrackDtls", userTrackdtls, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (u) {
            return u;
          }));
        }
      }, {
        key: "ProcUserTrack",
        value: function ProcUserTrack(data) {
          var _this11 = this;

          try {
            var objTrack = new _models_user__WEBPACK_IMPORTED_MODULE_9__["UserTrack"]();
            objTrack.TrackingId = 0;
            objTrack.Userid = data.userId;
            objTrack.RequestedUrl = window.location.hostname;
            objTrack.RememberToken = data.remToken;
            objTrack.LogInTime = new Date();
            objTrack.LogOutTime = null;
            objTrack.Status = 'A';
            this.trackUser(objTrack).pipe().subscribe(function (trackData) {
              var objtrackdtls = new _models_user__WEBPACK_IMPORTED_MODULE_9__["UserTrackDtls"]();
              objtrackdtls.TrackingId = trackData['trackingId'];
              objtrackdtls.Userid = objTrack.Userid;
              objtrackdtls.UserAgent = null;
              objtrackdtls.OS = _this11.device.platform;
              objtrackdtls.OSVersion = _this11.device.version;
              objtrackdtls.browser = _this11.device.manufacturer;
              objtrackdtls.device = _this11.device.model;
              objtrackdtls.browserVersion = _this11.device.serial;
              objtrackdtls.IsMobile = _this11.platform.is('mobile') ? 1 : _this11.platform.is('iphone') ? 1 : 0;
              objtrackdtls.IsTablet = _this11.platform.is('ipad') ? 1 : _this11.platform.is('tablet') ? 1 : 0;
              objtrackdtls.IsDesktopDevice = _this11.device.isVirtual ? 1 : 0;
              objtrackdtls.ScreenPixelsHeight = _this11.platform.height();
              objtrackdtls.ScreenPixelsWidth = _this11.platform.width();

              _this11.trackUserDetails(objtrackdtls).pipe().subscribe(function (data) {}, function (error) {});
            }, function (error) {});
          } catch (e) {}
        }
      }, {
        key: "updateUserTrackLogOut",
        value: function updateUserTrackLogOut(userid, remToken) {
          var obj = new _models_user__WEBPACK_IMPORTED_MODULE_9__["UserTrack"]();
          obj.Userid = parseInt(userid);
          obj.LogOutTime = new Date();
          obj.RememberToken = remToken;
          obj.RequestedUrl = window.location.hostname;
          obj.IPAddress = "";
          obj.LogInTime = new Date();
          obj.Status = "D";
          obj.TrackingId = 0;
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(this.api_url + "/users/UpdateUsertrack", obj, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(val) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var toast;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.toastController.create({
                      message: val,
                      duration: 5000
                    });

                  case 2:
                    toast = _context6.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _shareddata_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"]
      }, {
        type: _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_11__["UserAgent"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: AuthenticationService
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shareddata_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"], _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_11__["UserAgent"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], AuthenticationService])], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/dataHandler/data-handler.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/services/dataHandler/data-handler.service.ts ***!
    \**************************************************************/

  /*! exports provided: DataHandlerService */

  /***/
  function srcAppServicesDataHandlerDataHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataHandlerService", function () {
      return DataHandlerService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var DataHandlerService = /*#__PURE__*/function () {
      function DataHandlerService(httpclient) {
        _classCallCheck(this, DataHandlerService);

        this.httpclient = httpclient;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
      }

      _createClass(DataHandlerService, [{
        key: "getIndustry",
        value: function getIndustry() {
          return this.httpclient.get(this.api_url + "/Industry/GetIndustry").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getGlobalData",
        value: function getGlobalData() {
          return this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getFICatData",
        value: function getFICatData(cat) {
          return this.httpclient.get(this.api_url + '/Scores/GetBondMappingStocks/' + cat).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getFIData",
        value: function getFIData() {
          return this.httpclient.get(this.api_url + '/Scores/GetFixedDataMaster').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getETFData",
        value: function getETFData() {
          return this.httpclient.get(this.api_url + "/Scores/GetETFMaster").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getETFCatData",
        value: function getETFCatData(CatID) {
          return this.httpclient.get(this.api_url + "/Scores/GetETFCurrent/" + CatID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "filterGlobalIndexData",
        value: function filterGlobalIndexData(arr, i) {
          var temp = arr;
          return temp.filter(function (item) {
            return item.indexName == i;
          });
        }
      }, {
        key: "getEsgPerfData",
        value: function getEsgPerfData() {
          return this.httpclient.get(this.api_url + "/Indexes/GetESGDetails").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getFIPerfData",
        value: function getFIPerfData() {
          return this.httpclient.get(this.api_url + '/Indexes/GetFIDetails').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getPerfData",
        value: function getPerfData() {
          return this.httpclient.get(this.api_url + '/Indexes/GetIndexPerformance').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getEquityPerfIndData",
        value: function getEquityPerfIndData() {
          return this.httpclient.get(this.api_url + '/Indexes/GetIndexDetails').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getRebalanceDates",
        value: function getRebalanceDates(id) {
          if (id != 59 && id != 60 && id != 54) {
            return d3__WEBPACK_IMPORTED_MODULE_6__["json"](this.api_url + '/Indexes/GetRebalanceDates/' + id).then(function (data) {
              return data;
            });
          } else {
            return d3__WEBPACK_IMPORTED_MODULE_6__["json"](this.api_url + '/Indexes/GetGlobalRebalances/' + id).then(function (data) {
              return data;
            });
          }
        }
      }, {
        key: "getSignalsByDate",
        value: function getSignalsByDate(id, tradedate) {
          var temp = tradedate.slice(0, 4) + '-' + tradedate.slice(4, 6) + '-' + tradedate.slice(6, 8);

          if (id != 59 && id != 60 && id != 107 && id != 104 && id != 69 && id != 13 && id != 1 && id != 108 && id != 12 && id != 113) {
            return d3__WEBPACK_IMPORTED_MODULE_6__["json"](this.api_url + '/Indexes/GetSignalsByDate/' + temp).then(function (data) {
              return data;
            });
          } else if (id == 107 || id == 104 || id == 69 || id == 13 || id == 1 || id == 108 || id == 12 || id == 113) {
            return d3__WEBPACK_IMPORTED_MODULE_6__["json"](this.api_url + '/Indexes/GetSignalsByDate/' + id + '/' + temp).then(function (data) {
              return data;
            });
          } else {
            return d3__WEBPACK_IMPORTED_MODULE_6__["json"](this.api_url + '/Indexes/GetGlobalSignalsByDate/' + id + '/' + temp).then(function (data) {
              return data;
            });
          }
        }
      }, {
        key: "GetGlobalSignalsByDate",
        value: function GetGlobalSignalsByDate(id, tradedate) {
          var temp = tradedate.slice(0, 4) + '-' + tradedate.slice(4, 6) + '-' + tradedate.slice(6, 8);
          return d3__WEBPACK_IMPORTED_MODULE_6__["json"](this.api_url + '/Indexes/GetGlobalSignalsByDate/' + id + '/' + temp).then(function (data) {
            return data;
          });
        }
      }, {
        key: "getDbGICSData",
        value: function getDbGICSData() {
          return this.httpclient.get('../../../assets/data/siteGICS.csv', {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getIpadGlobalData",
        value: function getIpadGlobalData() {
          return this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getIpadHistGlobalData",
        value: function getIpadHistGlobalData(d) {
          return this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresHist/GLOBAL/" + d).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getQDateData",
        value: function getQDateData(selrow, indName, Isin) {
          var apiUrl;

          if (selrow.country == 'USA') {
            apiUrl = this.api_url + "/Scores/GetAnnScoresData/" + indName + "/" + Isin + "/0";
          } else {
            apiUrl = this.api_url + "/Scores/GetQuaterlyScoresData/" + indName + "/" + Isin + "/0";
          }

          return this.httpclient.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getQtrData",
        value: function getQtrData(trdate, industry, IndId, indName) {
          return this.httpclient.get(this.api_url + '/Scores/GetNAAIndexScoresHistByIndustryIndex/' + trdate + '/' + industry + '/' + IndId + '/' + indName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getIndexRunsData",
        value: function getIndexRunsData(indexid, GICSid, Ctype) {
          return this.httpclient.get(this.api_url + "/Indexes/GetIndexRuns/" + "/" + indexid + "/" + GICSid + "/" + Ctype).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getIndustryList",
        value: function getIndustryList() {
          return this.httpclient.get(this.api_url + "/Industry/GetIndustry").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getAlert",
        value: function getAlert(alert) {
          return this.httpclient.post(this.api_url + '/Users/GetAlerts', alert).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "setAlert",
        value: function setAlert(alert) {
          return this.httpclient.post(this.api_url + '/Users/PostAlertsSettings', alert).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "deleteAlert",
        value: function deleteAlert(alert) {
          return this.httpclient.post(this.api_url + '/Users/RemoveAlerts', alert).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getIndexPreRuns",
        value: function getIndexPreRuns(indexid, GICSid, Ctype, Range) {
          return this.httpclient.get(this.api_url + "/Indexes/GetIndexPreRuns" + "/" + indexid + "/" + GICSid + "/" + Ctype + "/" + Range).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(function (err) {
            return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (count) {
              if (count > 5) throw err;else {
                count++;
                return count;
              }
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delayWhen"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000);
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }));
        }
      }]);

      return DataHandlerService;
    }();

    DataHandlerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DataHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], DataHandlerService);
    /***/
  },

  /***/
  "./src/app/services/shareddata/data.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/shareddata/data.service.ts ***!
    \*****************************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesShareddataDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
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


    var _dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dataHandler/data-handler.service */
    "./src/app/services/dataHandler/data-handler.service.ts");
    /* harmony import */


    var d3___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! d3/ */
    "./node_modules/d3/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(dataHandler, storage) {
        var _this12 = this;

        _classCallCheck(this, DataService);

        this.dataHandler = dataHandler;
        this.storage = storage;
        this._dbGICS = [];
        this.dbScoretemp = [];
        this.dbHistScore = [];
        this._ETFIndex = [];
        this._selTab = "";
        this._showGrid = false;
        this._showGICS = false;
        this._showsplashLoader = true;
        this.IndexOrder = [{
          "index": "S&P 500",
          "order": 1
        }, {
          "index": "S&P 400",
          "order": 2
        }, {
          "index": "S&P 600",
          "order": 3
        }, {
          "index": "S&P USA Extra",
          "order": 4
        }, {
          "index": "S&P USA Ex S&P 1500",
          "order": 4
        }, {
          "index": "S&P Europe Ex UK",
          "order": 5
        }, {
          "index": "S&P United Kingdom Index",
          "order": 6
        }, {
          "index": "S&P United Kingdom",
          "order": 6
        }, {
          "index": "S&P Japan Index",
          "order": 7
        }, {
          "index": "S&P Japan",
          "order": 7
        }, {
          "index": "South Africa",
          "order": 8
        }, {
          "index": "S&P South Africa",
          "order": 8
        }, {
          "index": "Australia",
          "order": 9
        }, {
          "index": "S&P Australia BMI",
          "order": 9
        }, {
          "index": "Canada",
          "order": 10
        }, {
          "index": "S&P Canada BMI",
          "order": 10
        }, {
          "index": "Korea",
          "order": 11
        }, {
          "index": "S&P Korea BMI",
          "order": 11
        }, {
          "index": "New Age Alpha U.S. Large-Cap Leading Index",
          "order": 11
        }, {
          "index": "New Age Alpha U.S. Large-Cap Low Volatility Index",
          "order": 12
        }, {
          "index": "New Age Alpha U.S. Small-Cap Leading Index",
          "order": 13
        }, {
          "index": "New Age Alpha U.S. Small-Cap Low Volatility Index",
          "order": 14
        }, {
          "index": "New Age Alpha Europe ex UK Leading Index",
          "order": 15
        }, {
          "index": "New Age Alpha Europe ex UK Low Volatility Index",
          "order": 16
        }, {
          "index": "New Age Alpha UK Leading Index",
          "order": 17
        }, {
          "index": "New Age Alpha UK Low Volatility Index",
          "order": 18
        }, {
          "index": "New Age Alpha Japan Leading Index",
          "order": 19
        }, {
          "index": "New Age Alpha Japan Low Volatility Index",
          "order": 20
        }];
        this.dbGICS = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._dbGICS);
        this.dbScore = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.dbScoretemp);
        this.selTab = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._selTab);
        this.ETFIndex = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._ETFIndex);
        this.showGrid = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._showGrid);
        this.showGICS = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._showGICS);
        this.selIndex = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._selIndex);
        this.globalGICS = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._globalGICS);
        this.indexWise = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._indexWise);
        this.secLevel = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._secLevel);
        this.mobSelComp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._mobSelComp);
        this.showsplashLoader = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._showsplashLoader);
        this.storage.get('currentUser').then(function (res) {
          if (res) {
            _this12.getDbGICSData();

            _this12.getGlobalData();
          }
        });
      }

      _createClass(DataService, [{
        key: "getDbGICSData",
        value: function getDbGICSData() {
          var _this13 = this;

          if (this._dbGICS.length == 0) {
            this.dataHandler.getIndustryList().subscribe(function (data) {
              _this13._dbGICS = data;

              _this13.dbGICS.next(_this13._dbGICS);
            });
          }

          return this.dbGICS;
        }
      }, {
        key: "getGlobalData",
        value: function getGlobalData() {
          var _this14 = this;

          var that = this;

          if (this.dbScoretemp.length == 0) {
            this.dataHandler.getIpadGlobalData().subscribe(function (data) {
              _this14.dbScoretemp = data.sort(function (x, y) {
                return d3___WEBPACK_IMPORTED_MODULE_3__["ascending"](x.scores, y.scores);
              });
              var selreslen = _this14.dbScoretemp.length;

              _this14.dbScoretemp.forEach(function (d, i) {
                d.countrygroup = d.indexName.indexOf('Europe') > -1 ? 'Europe' : d.country;
                d.score = d.scores * 100;
                d.deg = d.score;
                d.indname = that.findIndName(that._dbGICS, d.industry);
                d.industry = d.industry + "";
                d.companyName = d.companyName != null ? d.companyName.trim() : "";
                d.company = d.companyName != null ? d.companyName : null;
                d.ticker = d.ticker;
                d.stockKey = d.stockKey;
                d.aisin = d.isin;
                d.isin = "a" + d.stockKey;
                d.Fixeds = "";
                d.cx = i * 360 / selreslen - 90;
                var flt = that.IndexOrder.filter(function (x) {
                  return x.index == d.indexName;
                });
                d.sortOrder = flt.length > 0 ? flt[0].order : null;
                return d;
              });

              _this14.dbScore.next(_this14.dbScoretemp);

              _this14.setglobalGICS();
            });
          }
        }
      }, {
        key: "setglobalGICS",
        value: function setglobalGICS() {
          var temp = {
            count: this.dbScoretemp.length,
            med: this.roundValue(this.getMed(this.dbScoretemp) * 100),
            name: 'New Age Alpha',
            upto25: this.dbScoretemp.filter(function (i) {
              return i.scores * 100 < 25;
            }).length,
            upto50: this.dbScoretemp.filter(function (i) {
              return i.scores * 100 >= 25 && i.scores * 100 < 50;
            }).length,
            upto75: this.dbScoretemp.filter(function (i) {
              return i.scores * 100 >= 50 && i.scores * 100 < 75;
            }).length,
            upto100: this.dbScoretemp.filter(function (i) {
              return i.scores * 100 >= 75 && i.scores * 100 < 100;
            }).length
          };
          this._globalGICS = temp;
          this.globalGICS.next(this._globalGICS);
        }
      }, {
        key: "roundValue",
        value: function roundValue(val) {
          return (Math.round(val * 10) / 10).toFixed(1);
        }
      }, {
        key: "getMed",
        value: function getMed(arr) {
          arr = arr.map(function (item) {
            return item.scores;
          });
          arr = arr.sort();

          if (arr.length % 2 === 0) {
            // array with even number elements
            return (parseFloat(arr[arr.length / 2]) + parseFloat(arr[arr.length / 2 - 1])) / 2;
          } else {
            return parseFloat(arr[(arr.length - 1) / 2]); // array with odd number elements
          }
        }
      }, {
        key: "findIndName",
        value: function findIndName(data, code) {
          var ind = code;
          return data.filter(function (d) {
            return d.code == ind;
          })[0].name;
        }
      }, {
        key: "getHistGlobalData",
        value: function getHistGlobalData(d) {
          var _this15 = this;

          this.dataHandler.getIpadHistGlobalData(d).subscribe(function (data) {
            _this15.dbHistScore = data.sort(function (x, y) {
              return d3___WEBPACK_IMPORTED_MODULE_3__["ascending"](x.scores, y.scores);
            });
            var selreslen = _this15.dbHistScore.length;

            _this15.dbHistScore.forEach(function (d, i) {
              d.countrygroup = d.indexName.indexOf('Europe') > -1 ? 'Europe' : d.country;
              d.score = d.scores * 100;
              d.deg = d.score;
              d.indname = this.findIndName(this.dbGICS, d.industry);
              d.industry = d.industry + "";
              d.companyName = d.companyName != null ? d.companyName.trim() : "";
              d.company = d.companyName != null ? d.companyName : null;
              d.ticker = d.ticker;
              d.stockKey = d.stockKey;
              d.aisin = d.isin;
              d.isin = "a" + d.stockKey;
              d.Fixeds = "";
              d.cx = i * 360 / selreslen - 90;
              var flt = this.dataService.IndexOrder.filter(function (x) {
                return x.index == d.indexName;
              });
              d.sortOrder = flt.length > 0 ? flt[0].order : null;
              return d;
            });

            _this15.dbScore.next(_this15.dbHistScore);
          });
        }
      }, {
        key: "getEquitiesdata",
        value: function getEquitiesdata() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var temp, datasub;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    temp = [];
                    datasub = this.dbScore.subscribe(function (d) {
                      d.forEach(function (element) {
                        if (element.indexName.indexOf('New Age Alpha') == -1) {
                          temp.push(element);
                        }
                      });
                    });
                    datasub.unsubscribe();
                    _context7.next = 5;
                    return temp;

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getNAAIndexesData",
        value: function getNAAIndexesData() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var temp, datasub;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    temp = [];
                    datasub = this.dbScore.subscribe(function (d) {
                      d.forEach(function (element) {
                        if (element.indexName.indexOf('New Age Alpha') > -1) {
                          temp.push(element);
                        }
                      });
                    });
                    datasub.unsubscribe();
                    _context8.next = 5;
                    return temp;

                  case 5:
                    return _context8.abrupt("return", _context8.sent);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "getETFdata",
        value: function getETFdata() {
          var _this16 = this;

          if (this._ETFIndex.length == 0) {
            this.dataHandler.getETFData().subscribe(function (data) {
              _this16._ETFIndex = data;

              _this16.ETFIndex.next(_this16._ETFIndex);
            });
          }
        }
      }, {
        key: "getFIdataList",
        value: function getFIdataList() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var temp, datasub;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    temp = [];
                    datasub = this.dbScore.subscribe(function (d) {
                      temp = d.filter(function (i) {
                        return i.hasOwnProperty('fi') === true && i.fi !== null;
                      });
                    });
                    datasub.unsubscribe();
                    _context9.next = 5;
                    return temp;

                  case 5:
                    return _context9.abrupt("return", _context9.sent);

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_2__["DataHandlerService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_2__["DataHandlerService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])], DataService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      api_url: 'https://api.newagealpha.com/api'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/lhadmin/NAALphaMobile/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map