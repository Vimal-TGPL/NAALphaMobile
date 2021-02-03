function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/gics/gics.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/gics/gics.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGicsGicsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card>\n  <ion-card-content>\n    <p>S&P Global Industry Classification Standard  </p>\n  </ion-card-content>\n</ion-card>\n\n<ion-card (click)=\"onSectorClick('Global Universe')\" [style.background]=\"selSector == 'Global Universe'? '#00b9ff': 'transparent'\">\n<ion-card-header>\n  <div><ion-card-subtitle>Global Universe</ion-card-subtitle>\n    <ion-card-title>{{globalGICS.name}} ({{globalGICS.count}})</ion-card-title>\n  </div>\n  <span>\n    <p [style.color]=\"getColor(globalGICS.med)\">{{globalGICS.med}}</p>\n  </span>\n</ion-card-header>\n  <ion-card-content *ngIf=\"selSector == 'Global Universe'\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">H-Factor</ion-col>\n        <ion-col size=\"6\">Companies</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">0-25%</ion-col>\n        <ion-col size=\"6\">{{globalGICS.upto25}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">25-50%</ion-col>\n        <ion-col size=\"6\">{{globalGICS.upto50}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">50-75%</ion-col>\n        <ion-col size=\"6\">{{globalGICS.upto75}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">75-100%</ion-col>\n        <ion-col size=\"6\">{{globalGICS.upto100}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n<ion-card (click)=\"onSectorClick('Index')\" [style.background]=\"selSector == 'Index'? '#00b9ff': 'transparent'\">\n  <ion-card-header>\n    <div><ion-card-subtitle>Index</ion-card-subtitle>\n      <ion-card-title>{{IndexGICS.name}} ({{IndexGICS.count}})</ion-card-title>\n    </div>\n    <span>\n      <p [style.color]=\"getColor(IndexGICS.med)\">{{IndexGICS.med}}</p>\n    </span>\n  </ion-card-header>\n    <ion-card-content *ngIf=\"selSector == 'Index'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">H-Factor</ion-col>\n          <ion-col size=\"6\">Companies</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">0-25%</ion-col>\n          <ion-col size=\"6\">{{IndexGICS.upto25}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">25-50%</ion-col>\n          <ion-col size=\"6\">{{IndexGICS.upto50}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">50-75%</ion-col>\n          <ion-col size=\"6\">{{IndexGICS.upto75}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">75-100%</ion-col>\n          <ion-col size=\"6\">{{IndexGICS.upto100}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/grid/grid.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/grid/grid.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGridGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card [style.height]=\"showSort? '85%': '75%'\">\n  <ion-card-header>\n    <ion-card-title>{{selTab == \"ETF's\"? 'Exchange Traded Funds': 'Equities and Fixed Income'}}</ion-card-title>\n    <ion-button (click)=\"onbackClick()\" *ngIf=\"GridType == 'IndexGrid'\" fill=\"outline\" shape=\"round\">\n      <fa-icon [icon]=\"faAngleDoubleLeft\"></fa-icon>\n      {{selCountry.countryName}}\n    </ion-button>\n    <ion-button (click)=\"onCompanybackClick()\" *ngIf=\"GridType == 'CompanyGrid'\" fill=\"outline\" shape=\"round\">\n      <fa-icon [icon]=\"faAngleDoubleLeft\"></fa-icon>\n      back\n    </ion-button>\n  </ion-card-header>\n  <ion-card-content [style.height]=\"GridType == 'CountryGrid'? '85%' : showSort? '65%': '78%'\">\n    <ion-list *ngIf=\"GridType == 'CountryGrid'\" class=\"countryList\">\n      <ion-item *ngFor=\"let item of CountryData\" detail=\"true\" lines=\"none\" (click)=\"onCountryClick(item)\">\n        <div>\n          <span [style.color]=\"getColor(item.scores)\">{{item.scores}}</span>\n          <ion-label>{{item.countryName}}</ion-label>\n        </div>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf=\"GridType == 'IndexGrid'\" class=\"indexList\">\n      <ion-item *ngFor=\"let item of selIndexData\" detail=\"false\" lines=\"none\" (click)=\"onIndexClick(item)\">\n        <div>\n          <span [style.color]=\"getColor(item.scores)\">{{item.scores}}</span>\n          <ion-label>{{item.indexName}}</ion-label>\n        </div>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf=\"GridType == 'CompanyGrid'\" class=\"companyList\">\n      <ion-item *ngFor=\"let item of selCompanyData\" detail=\"false\" lines=\"none\" (click)=\"onCompanyClick(item)\">\n        <div>\n          <span [style.color]=\"getColor(roundValue(item.scores*100))\">{{roundValue(item.scores*100)}}</span>\n          <ion-text>\n            <p>{{item.companyName}}</p>\n            <p>{{item.ticker}}</p>\n          </ion-text>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card-content>\n  <ion-row [ngStyle]=\"{height: GridType == 'CountryGrid'? '3%': showSort? '23%' : '10%'}\">\n    <ion-col>\n      <ion-item *ngIf=\"GridType != 'CountryGrid'\" lines=\"none\" (click)=\"onSortClick()\">\n      <div>\n        <ion-text>\n          <p>Sort by</p>\n          <p>{{selSort}}</p>\n        </ion-text>\n        <ion-icon name=\"chevron-down-circle-outline\"></ion-icon>\n      </div> \n      </ion-item>\n    </ion-col>\n    <ion-col *ngIf=\"showSort\">\n      <hr >\n      <ion-list *ngIf=\"GridType == 'IndexGrid'\">\n        <ion-item *ngFor=\"let item of indexsortList\" lines=\"none\" (click)=\"onSortItemClick(item)\">\n          <ion-label>{{item}}</ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngIf=\"GridType == 'CompanyGrid'\">\n        <ion-item *ngFor=\"let item of companysortlist\" lines=\"none\" (click)=\"onSortItemClick(item)\">\n          <ion-label>{{item}}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIPadHomeToolIPadHomeToolComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #2e4c99;\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-top: 0;\">\n    <div style=\"    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 60px;\">\n      <img src=\"../../../assets/images/NewAgeAlpha-logo.svg\" alt=\"logo\" style=\"height: 35px;\">\n    </div>\n    <div style=\"position: absolute; top: 7px; right: 50px;\">\n      <div style=\"display: flex; flex-direction: row;\">\n        <div class=\"avatar\" (click)=\"profilePopover($event)\">\n          <img src=\"../../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\n        </div>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content forceOverscroll=false>\n  <app-gics *ngIf=\"showGICS\" style=\"        position: absolute;\n  left: 10px;\n  top: 0px;\n  bottom: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 9;\"></app-gics>\n  <app-tool></app-tool>\n  <app-grid *ngIf=\"showGrid\" style=\"position: absolute;\n  right: 5px;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\"></app-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/index/index.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/index/index.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIndexIndexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"overallDiv\">\n\n  <div class=\"menu\">\n    <div class=\"logo\">\n      <img src=\"../../../assets/images/NewAgeAlpha-logo.svg\" alt=\"Logo\">\n    </div>\n    <div>\n      <div class=\"menu-item-div\">\n        <span class=\"side-nav-item\" [ngClass]=\"{'item-Active': selectedCountry == item}\"\n          *ngFor=\"let item of CountryClasificationList\" (click)=\"OnItemClick(item)\">\n          <ion-label>{{item}}</ion-label>\n        </span>\n      </div>\n      <span class=\"divider-span\">\n        <hr></span>\n      <span class=\"menu-nav-span\">\n        <ion-item lines=\"none\" [routerLink]=\"['/menu/menu/home']\" routerDirection=\"root\"\n           detail=false>\n          <img src=\"../../../assets/images/H-Factor Icon solid-blue.svg\" alt=\"home\" style=\"height: 65px;\">\n        </ion-item>\n      </span>\n    </div>\n  </div>\n  <div class=\"content-div\">\n    <div class=\"section1-div\">\n      <div class=\"title-Div\">\n        <ion-text>\n          <h1>H-Factor Indexes</h1>\n        </ion-text>\n        <div class=\"profile\">\n          <div class=\"avatar\" (click)=\"profilePopover($event)\">\n            <img src=\"../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\n          </div>\n        </div>\n      </div>\n\n      <ion-text class=\"sub-title\">\n        <p>To build an index, we start with one of\n          S&P<sup><img src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup> Dow\n          Jones<sup><img src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup>\n          Indexes. We then develop an investment methodology which is incorporated in a rule book. These documents are\n          forwarded to S&P<sup><img src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup> for validation\n          and history calculation. On a quarterly basis we supply\n          H-Factor to S&P<sup><img src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup> who rebalance\n          the indexes.<br><br>\n          These S&P<sup><img src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup> Dow Jones<sup><img\n              src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup> calculated indexes then form the\n          basis of our SMAs and all\n          of our investment products.</p>\n      </ion-text>\n    </div>\n\n    <div class=\"section2-div\">\n      <ion-text>\n        <h1>{{selectedCountry}}</h1>\n      </ion-text>\n      <div *ngIf=\"SelectedData\">\n        <ion-item id=\"indexSelect\" lines='none'>\n          <ion-select [value]=\"SelectedData.indexName\" interface=\"popover\" (ionChange)=\"onIndexChange($event)\">\n            <ion-select-option [value]=\"item.indexName\"\n              *ngFor=\"let item of Index[CountryClasificationList.indexOf(selectedCountry)]\">{{item.indexName}} ({{item.indexCode}})\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n    </div>\n    <div class=\"section3-div\">\n      <mat-tab-group>\n        <mat-tab label=\"Perfomance\">\n          <div class=\"perfomance-div\">\n            <ion-card>\n              <ion-card-content>\n                <div *ngIf=\"!selectedIndexData\" class=\"loader\">\n                  <img src=\"../../../assets/images/NAA.gif\" alt=\"Loader\">\n                </div>\n                <div *ngIf=\"selectedIndexData\" style=\"width: 100%;\">\n                  <ion-text>\n                    <p class=\"title-p\">\n                      {{selectedIndexData.indexName}}</p>\n                  </ion-text>\n                  <ion-text>\n                    <p class=\"desc-p\" [innerHTML]=\"get_desc(selectedIndexData.description)\"></p>\n                  </ion-text>\n                  <ion-text>\n                    <p class=\"perf-date-p\">performace : As of {{selectedIndexData.date}}</p>\n                  </ion-text>\n                  <div>\n                    <ion-grid>\n                      <ion-row class=\"row-header\">\n                        <ion-col size=\"1.5\" class=\"column-item col-header no-border item-left-center\">Name</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">Value</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">Daily</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">YTD</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">1 Year</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">3 Year*</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">5 Year*</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">10 Year*</ion-col>\n                        <ion-col class=\"column-item col-header item-center\">Cumulative Inception</ion-col>\n                        <ion-col class=\"column-item col-header item-center\">Annualized Inception</ion-col>\n                      </ion-row>\n                      <ion-row class=\"row-item\">\n                        <ion-col size=\"1.5\" class=\"column-item no-border item-left-center\">\n                          {{selectedIndexData.indexName}}</ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.value)}}</ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">\n                          {{roundOf(selectedIndexData.dailyReturn*100)}}%</ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.ytdReturn*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.y1Return*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.y3Return*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.y5Return*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.y10Return*100)}}%\n                        </ion-col>\n                        <ion-col class=\"column-item item-center\">{{roundOf(selectedIndexData.cumReturns*100)}}%\n                        </ion-col>\n                        <ion-col class=\"column-item item-center\">{{roundOf(selectedIndexData.annReturns*100)}}%\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </div>\n                  <div class=\"row2\">\n                    <ion-grid fixed>\n                      <ion-row class=\"row-header\">\n                        <ion-col size=\"1.5\" class=\"column-item col-header no-border item-left-center\">Name</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2019</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2018</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2017</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2016</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2015</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2014</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2013</ion-col>\n                        <ion-col class=\"column-item col-header item-center\">2012</ion-col>\n                        <ion-col class=\"column-item col-header item-center\">2011</ion-col>\n                        <ion-col class=\"column-item col-header item-center\">2010</ion-col>\n                      </ion-row>\n                      <ion-row class=\"row-item\">\n                        <ion-col size=\"1.5\" class=\"column-item no-border item-left-center\">\n                          {{selectedIndexData.indexName}}</ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year1*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year2*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year3*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year4*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year5*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year6*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year7*100)}}%\n                        </ion-col>\n                        <ion-col class=\"column-item item-center\">{{roundOf(selectedIndexData.year8*100)}}%</ion-col>\n                        <ion-col class=\"column-item item-center\">{{roundOf(selectedIndexData.year9*100)}}%</ion-col>\n                        <ion-col class=\"column-item item-center\">{{roundOf(selectedIndexData.year10*100)}}%</ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </div>\n                  <div class=\"dates-div\">\n                    <p>First value date : {{selectedIndexData.firstValueDt}}\n                    </p>\n                    <p class=\"p-padding\">Launch date :\n                      {{selectedIndexData.inception}}</p>\n                  </div>\n                  <div class=\"image-div\">\n                    <img src=\"../../../assets/images/S&P_1.svg\" alt=\"S&P\">\n                  </div>\n                </div>\n\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </mat-tab>\n        <mat-tab disabled label=\"Construction\"> Content 2 </mat-tab>\n      </mat-tab-group>\n\n    </div>\n\n  </div>\n\n</div> -->\n\n<ion-header>\n  <ion-toolbar style=\"--background: #2e4c99;\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-top: 0;\">\n    <div style=\"    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 60px;\">\n      <img src=\"../../../assets/images/NewAgeAlpha-logo.svg\" alt=\"logo\" style=\"height: 35px;\">\n    </div>\n    <div style=\"position: absolute; top: 7px; right: 50px;\">\n      <div style=\"display: flex; flex-direction: row;\">\n        <div class=\"avatar\" (click)=\"profilePopover($event)\">\n          <img src=\"../../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\n        </div>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content forceOverscroll=false>\n  <div class=\"parentDiv\">\n    <ion-card class=\"leftCard\">\n      <ion-card-content>\n        Awesome content\n      </ion-card-content>\n    </ion-card>\n  <ion-card class=\"rightCard\">\n    <ion-card-content>\n      <div>\n        <ion-item lines=\"none\">\n          <ion-select value=\"peperoni\" multiple=\"false\" placeholder=\"Select Pizza\" interface=\"popover\">\n            <ion-select-option value=\"peperoni\">Peperoni</ion-select-option>\n            <ion-select-option value=\"hawaii\">Hawaii</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/searchtool/searchtool.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/searchtool/searchtool.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchtoolSearchtoolComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\" (click)=\"onbackClick($event)\"></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar animated [placeholder]=\"selTab != 'ETF\\'s' ? 'Ticker or company name' : 'ETF ticker or name'\" [(ngModel)]=\"searchText\" inputmode=\"text\" type=\"text\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"500\" showCancelButton=\"never\"></ion-searchbar>\n  </ion-toolbar>\n  <ion-segment [value]=\"selTab\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"Equities & FI\">\n      <ion-label>Equities & Fixed Income</ion-label>\n    </ion-segment-button>\n    <!-- <ion-segment-button value=\"Fixed Income\">\n      <ion-label>Fixed Income</ion-label>\n    </ion-segment-button> -->\n    <ion-segment-button value=\"ETF's\">\n      <ion-label>Exchange Traded Funds</ion-label>\n    </ion-segment-button>\n    <!-- <ion-segment-button value=\"NAA Indexes\">\n      <ion-label>NAA Indexes</ion-label>\n    </ion-segment-button> -->\n  </ion-segment>  \n</ion-header>\n\n<ion-content forceOverscroll=false>\n  <div *ngIf=\"_searchRes\" >\n    <ion-item *ngFor=\"let item of _searchRes\" (click)=\"onItemSelect(item)\">\n        <ion-text *ngIf=\"selTab != 'ETF\\'s'\" style=\"display: flex;\n        flex-direction: row;\n        align-items: center;\n        width: 100%;\">\n          <p style=\"width: 45%;\"><span>{{item.companyName}}</span><span>&nbsp;&nbsp;({{item.ticker}})</span></p>\n          <p style=\"width: 45%;\">{{item.indexName}}</p>          \n          <p style=\"width: 10%;\">{{item.country}}</p>\n        </ion-text>\n        <ion-text *ngIf=\"selTab == 'ETF\\'s'\" style=\"display: flex;\n        flex-direction: row;\n        align-items: center;\n        width: 100%;\">\n          <p style=\"width: 45%;\"><span>{{item.etfName}}</span><span>&nbsp;&nbsp;({{item.ticker}})</span></p>\n          <p style=\"width: 45%;\">ETF</p>          \n          <p style=\"width: 10%;\">{{item.category}}</p>\n        </ion-text>\n    </ion-item>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/tool/tool.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/tool/tool.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsToolToolComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"searchDiv\">\n  <ion-item lines=none>\n    <img slot=\"start\" src=\"../../../assets/images/search.svg\" alt=\"search\" *ngIf=\"selTab\">\n    <ion-input *ngIf=\"selTab\" readonly=\"true\" type=\"text\" [placeholder]=\"selTab != 'ETF\\'s' ? 'Ticker or company name' : 'ETF ticker or name'\" (tap)='onSearchInputClick($event)'  (click)=\"onSearchInputClick($event)\"></ion-input>\n    <!-- <ion-label (click)=\"onSearchInputClick($event)\">{{selTab != \"ETF's\"?'Ticker or company name':'ETF ticker or name'}}</ion-label> -->\n    <ion-select slot=\"end\" [selectedText]=\"selTab\" interface=\"popover\" placeholder='Please select' [value]=\"selTab\" multiple=\"false\" (ionChange)=\"onSelectClick($event)\" [ngClass]=\"{'first-select': selTab.length == 0}\">\n        <ion-select-option style=\"width: 400px;\" value=\"Equities & FI\">Equities & Fixed Income</ion-select-option>\n        <ion-select-option value=\"ETF's\">Exchange Tradeed Funds</ion-select-option>\n        <!-- <ion-select-option value=\"ETF's\">ETF's</ion-select-option>\n        <ion-select-option value=\"NAA Indexes\">NAA Indexes</ion-select-option> -->\n    </ion-select>\n  </ion-item>\n</div>\n<svg preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"200 70 1220 700\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n  <g id=\"gchart\" transform=\"translate(810 ,420)\"></g>\n  <g class=\"Homecenter\" style=\"opacity:0;\" transform=\"translate(810,300)\">\n    <text y=\"45\" style=\"letter-spacing:1px;text-align:center;font-family:'Open Sans Regular';fill:#00b9ff;text-anchor:middle;font-size:11px;font-weight:500;\">WELCOME TO THE</text>\n    <text y=\"80\" style=\"text-align:center;font-family:'Open Sans Bold';fill:#00b9ff;text-anchor:middle;text-align:center;font-size:25px;font-weight:500;\" class=\"grey-16 blue-heading\">\n      <tspan x=\"0\">H-Factor System</tspan>\n    </text>\n    <circle cx=\"0\" cy=\"0\" r=\"32\" stroke=\"#00b9ff\" stroke-width=\"1\" fill=\"transparent\" transform=\"translate(-50, 175)\" />\n    <circle cx=\"0\" cy=\"0\" r=\"3\" stroke=\"#00b9ff\" stroke-width=\"0\" fill=\"#00b9ff\" transform=\"translate(-50, 207)\" />\n    <text y=\"183\" style=\"text-align:center;font-family:'Open Sans Bold';fill:#00b9ff;text-anchor:middle;text-align:center;font-size:19px;font-weight:500;\" class=\"grey-16 blue-heading\">\n      <tspan x=\"-47\">Avoid </tspan><tspan x=\"34\" style=\"font-family: Open Sans Semibold;\">the Losers</tspan>\n    </text>\n  </g>\n</svg>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"flash\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"investment_solution\">\n      <ion-icon name=\"apps\"></ion-icon>\n      <ion-label>Investment Solution</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"send\"></ion-icon>\n      <ion-label>Tab Three</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/Components/gics/gics.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/Components/gics/gics.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGicsGicsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card:nth-child(1) {\n  margin: 0;\n  margin-left: 25px;\n  border-radius: 20px; }\n  ion-card:nth-child(1) ion-card-content {\n    padding: 3px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  ion-card:nth-child(1) ion-card-content p {\n      font-size: 12px;\n      font-family: Open Sans SemiBold;\n      color: #00b9ff;\n      margin: 0; }\n  ion-card:nth-child(2) {\n  margin: 0;\n  margin-top: 50px;\n  margin-left: 75px;\n  border-radius: 25px;\n  background: transparent;\n  border: 2px solid #00b9ff;\n  width: 90%; }\n  ion-card:nth-child(2) ion-card-header {\n    padding: 0 0px 0 10px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between; }\n  ion-card:nth-child(2) ion-card-header div ion-card-subtitle {\n      font-size: 12px;\n      text-transform: inherit;\n      font-family: Open Sans SemiBold;\n      color: #eee; }\n  ion-card:nth-child(2) ion-card-header div ion-card-title {\n      font-size: 14px;\n      font-family: Open Sans SemiBold;\n      color: #fff; }\n  ion-card:nth-child(2) ion-card-header span {\n      height: 45px;\n      width: 45px;\n      background: #fff;\n      display: flex;\n      justify-content: center;\n      border-radius: 25px;\n      margin-right: 0px; }\n  ion-card:nth-child(2) ion-card-content {\n    padding: 10px 10px 10px 10px; }\n  ion-card:nth-child(2) ion-card-content ion-grid ion-row ion-col {\n      padding: 0;\n      text-align: center;\n      color: #fff;\n      font-size: 12px;\n      font-family: Open Sans Regular; }\n  ion-card:nth-child(2) ion-card-content ion-grid ion-row:first-child ion-col {\n      font-family: Open Sans SemiBold; }\n  ion-card:nth-child(3) {\n  margin: 0;\n  margin-top: 25px;\n  margin-left: 50px;\n  border-radius: 25px;\n  background: transparent;\n  border: 2px solid #00b9ff;\n  width: 90%; }\n  ion-card:nth-child(3) ion-card-header {\n    padding: 0 0px 0 10px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between; }\n  ion-card:nth-child(3) ion-card-header div ion-card-subtitle {\n      font-size: 12px;\n      text-transform: inherit;\n      font-family: Open Sans SemiBold;\n      color: #eee; }\n  ion-card:nth-child(3) ion-card-header div ion-card-title {\n      font-size: 14px;\n      font-family: Open Sans SemiBold;\n      color: #fff; }\n  ion-card:nth-child(3) ion-card-header span {\n      height: 45px;\n      width: 45px;\n      background: #fff;\n      display: flex;\n      justify-content: center;\n      border-radius: 25px;\n      margin-right: 0px; }\n  ion-card:nth-child(3) ion-card-content {\n    padding: 10px 10px 10px 10px; }\n  ion-card:nth-child(3) ion-card-content ion-grid ion-row ion-col {\n      padding: 0;\n      text-align: center;\n      color: #fff;\n      font-size: 12px;\n      font-family: Open Sans Regular; }\n  ion-card:nth-child(3) ion-card-content ion-grid ion-row:first-child ion-col {\n      font-family: Open Sans SemiBold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9Db21wb25lbnRzL2dpY3MvZ2ljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7RUFIdkI7SUFNUSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTtFQVQvQjtNQVlZLGVBQWU7TUFDZiwrQkFBK0I7TUFDL0IsY0FBYztNQUNkLFNBQVMsRUFBQTtFQUtyQjtFQUNJLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFVBQVUsRUFBQTtFQVBkO0lBVVEscUJBQXFCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBO0VBZGxDO01Ba0JZLGVBQWU7TUFDZix1QkFBdUI7TUFDdkIsK0JBQStCO01BQy9CLFdBQVcsRUFBQTtFQXJCdkI7TUF5QlksZUFBZTtNQUN2QiwrQkFBK0I7TUFDL0IsV0FBVyxFQUFBO0VBM0JmO01BZ0NRLFlBQVk7TUFDWixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGlCQUFpQixFQUFBO0VBdEN6QjtJQTJDUSw0QkFBNEIsRUFBQTtFQTNDcEM7TUErQ29CLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGVBQWU7TUFDZiw4QkFBOEIsRUFBQTtFQW5EbEQ7TUF5RG9CLCtCQUErQixFQUFBO0VBT25EO0VBQ0ksU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsVUFBVSxFQUFBO0VBUGQ7SUFVUSxxQkFBcUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7RUFkbEM7TUFrQlksZUFBZTtNQUNmLHVCQUF1QjtNQUN2QiwrQkFBK0I7TUFDL0IsV0FBVyxFQUFBO0VBckJ2QjtNQXlCWSxlQUFlO01BQ3ZCLCtCQUErQjtNQUMvQixXQUFXLEVBQUE7RUEzQmY7TUFnQ1EsWUFBWTtNQUNaLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsaUJBQWlCLEVBQUE7RUF0Q3pCO0lBMkNRLDRCQUE0QixFQUFBO0VBM0NwQztNQStDb0IsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsZUFBZTtNQUNmLDhCQUE4QixFQUFBO0VBbkRsRDtNQXlEb0IsK0JBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2dpY3MvZ2ljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkOm50aC1jaGlsZCgxKXtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDBiOWZmO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tY2FyZDpudGgtY2hpbGQoMil7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBiOWZmO1xuICAgIHdpZHRoOiA5MCU7XG5cbiAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmc6IDAgMHB4IDAgMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBkaXZ7XG4gICAgICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgICAgICAgICAgY29sb3I6ICNlZWU7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3BhbntcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIH1cbiAgICB9XG5cbiAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICBpb24tZ3JpZHtcbiAgICAgICAgICAgIGlvbi1yb3d7XG4gICAgICAgICAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tcm93OmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgIGlvbi1jb2x7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tY2FyZDpudGgtY2hpbGQoMyl7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBiOWZmO1xuICAgIHdpZHRoOiA5MCU7XG5cbiAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmc6IDAgMHB4IDAgMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBkaXZ7XG4gICAgICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgICAgICAgICAgY29sb3I6ICNlZWU7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3BhbntcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIH1cbiAgICB9XG5cbiAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICBpb24tZ3JpZHtcbiAgICAgICAgICAgIGlvbi1yb3d7XG4gICAgICAgICAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tcm93OmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgIGlvbi1jb2x7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/gics/gics.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/Components/gics/gics.component.ts ***!
    \***************************************************/

  /*! exports provided: GicsComponent */

  /***/
  function srcAppComponentsGicsGicsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GicsComponent", function () {
      return GicsComponent;
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


    var src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/shareddata/data.service */
    "./src/app/services/shareddata/data.service.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var GicsComponent = /*#__PURE__*/function () {
      function GicsComponent(dataService) {
        var _this = this;

        _classCallCheck(this, GicsComponent);

        this.dataService = dataService;
        this._selIndexSub = this.dataService.selIndex.subscribe(function (d) {
          _this.selIndex = d;
          console.log(_this.selIndex);
        });
        this._globalGICSsub = this.dataService.globalGICS.subscribe(function (d) {
          _this.globalGICS = d;
          console.log(_this.globalGICS);
        });
        this._IndexWiseSub = this.dataService.indexWise.subscribe(function (d) {
          _this.IndexWise = d;
          console.log(_this.IndexWise);
          var temp = {
            name: _this.selIndex.indexName,
            count: _this.IndexWise[_this.selIndex.indexName].length,
            med: _this.dataService.roundValue(_this.dataService.getMed(_this.IndexWise[_this.selIndex.indexName]) * 100),
            upto25: _this.IndexWise[_this.selIndex.indexName].filter(function (i) {
              return i.scores * 100 < 25;
            }).length,
            upto50: _this.IndexWise[_this.selIndex.indexName].filter(function (i) {
              return i.scores * 100 >= 25 && i.scores * 100 < 50;
            }).length,
            upto75: _this.IndexWise[_this.selIndex.indexName].filter(function (i) {
              return i.scores * 100 >= 50 && i.scores * 100 < 75;
            }).length,
            upto100: _this.IndexWise[_this.selIndex.indexName].filter(function (i) {
              return i.scores * 100 >= 75 && i.scores * 100 < 100;
            }).length
          };
          _this.IndexGICS = temp;
          console.log(_this.IndexGICS);
        });
        this._secLevelSub = dataService.secLevel.subscribe(function (d) {
          _this.secLevel = d;

          if (_this.secLevel == 2) {
            _this.selSector = 'Index';
          }
        });
      }

      _createClass(GicsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getColor",
        value: function getColor(med) {
          var gc100 = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().domain([0, 25, 50, 75, 100]).range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
          return gc100(med);
        }
      }, {
        key: "onSectorClick",
        value: function onSectorClick(sec) {
          this.selSector = sec;
        }
      }]);

      return GicsComponent;
    }();

    GicsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    GicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/gics/gics.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gics.component.scss */
      "./src/app/Components/gics/gics.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])], GicsComponent);
    /***/
  },

  /***/
  "./src/app/Components/grid/grid.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/Components/grid/grid.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGridGridComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  width: calc(100vw - 1075px);\n  height: 75%;\n  border-radius: 25px;\n  --background: transparent;\n  border: 2px solid #00b9ff;\n  transition: 0.3s; }\n  ion-card ion-card-header {\n    background: #00b9ff;\n    height: 12%;\n    padding: 12px 20px 0 20px; }\n  ion-card ion-card-header ion-card-title {\n      font-size: 16px;\n      font-family: Open Sans SemiBold;\n      color: #ffffff; }\n  ion-card ion-card-header ion-button {\n      height: 25px;\n      font-size: 12px;\n      --padding-start: 10px;\n      --padding-end: 10px;\n      display: inline-flex;\n      align-items: center;\n      --padding-top: 2px;\n      --padding-bottom: 2px;\n      -webkit-margin-start: 0;\n              margin-inline-start: 0;\n      -webkit-margin-end: 0;\n              margin-inline-end: 0;\n      color: #fff;\n      --border-color: #fff;\n      margin-top: 10px;\n      font-family: Open Sans SemiBold; }\n  ion-card ion-card-header ion-button fa-icon {\n        margin-right: 5px; }\n  ion-card ion-card-content {\n    padding: 10px; }\n  ion-card ion-card-content .countryList {\n      background: transparent; }\n  ion-card ion-card-content .countryList ion-item {\n        --background: #00b9ff;\n        border-radius: 25px;\n        margin-bottom: 10px;\n        color: #ffffff;\n        --padding-start: 0px;\n        --padding-end: 0px; }\n  ion-card ion-card-content .countryList ion-item div {\n          display: flex;\n          align-items: center;\n          flex-direction: row; }\n  ion-card ion-card-content .countryList ion-item div span {\n            height: 45px;\n            width: 45px;\n            background: #ffffff;\n            border-radius: 50%;\n            border: 2px solid #224b9e;\n            margin-left: -1px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-right: 10px;\n            font-size: 12px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-card-content .countryList ion-item div ion-label {\n            font-size: 14px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-card-content .countryList ion-item::part(detail-icon) {\n        opacity: 1;\n        color: #ffffff; }\n  ion-card ion-card-content .indexList {\n      background: transparent; }\n  ion-card ion-card-content .indexList ion-item {\n        --background: #00b9ff;\n        border-radius: 25px;\n        margin-bottom: 10px;\n        color: #ffffff;\n        --padding-start: 0px;\n        --padding-end: 0px; }\n  ion-card ion-card-content .indexList ion-item div {\n          display: flex;\n          align-items: center;\n          flex-direction: row; }\n  ion-card ion-card-content .indexList ion-item div span {\n            height: 45px;\n            width: 45px;\n            background: #ffffff;\n            border-radius: 50%;\n            border: 2px solid #224b9e;\n            margin-left: -1px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-right: 10px;\n            font-size: 12px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-card-content .indexList ion-item div ion-label {\n            font-size: 14px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-card-content .indexList ion-item::part(detail-icon) {\n        opacity: 1;\n        color: #ffffff; }\n  ion-card ion-card-content .companyList {\n      background: transparent; }\n  ion-card ion-card-content .companyList ion-item {\n        --background: #00b9ff;\n        border-radius: 25px;\n        margin-bottom: 10px;\n        color: #ffffff;\n        --padding-start: 0px;\n        --padding-end: 0px; }\n  ion-card ion-card-content .companyList ion-item div {\n          display: flex;\n          align-items: center;\n          flex-direction: row;\n          width: 100%; }\n  ion-card ion-card-content .companyList ion-item div span {\n            height: 45px;\n            width: 45px;\n            background: #ffffff;\n            border-radius: 50%;\n            border: 2px solid #224b9e;\n            margin-left: -1px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-right: 10px;\n            font-size: 12px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-card-content .companyList ion-item div ion-text {\n            color: #ffffff;\n            width: 80%; }\n  ion-card ion-card-content .companyList ion-item div ion-text p {\n              width: 95%;\n              white-space: nowrap;\n              text-overflow: ellipsis;\n              overflow: hidden;\n              margin: 0; }\n  ion-card ion-row {\n    background: #00b9ff; }\n  ion-card ion-row hr {\n      height: 0px;\n      margin: 0px;\n      border: 1px solid #ffffff; }\n  ion-card ion-row ion-col:last-child {\n      height: 70%; }\n  ion-card ion-row ion-col:last-child ion-list {\n        height: 100%;\n        overflow: auto; }\n  ion-card ion-row ion-col:last-child ion-list ion-item {\n          --min-height: 35px; }\n  ion-card ion-row ion-col:last-child ion-list ion-item ion-label {\n            margin: 0;\n            margin-bottom: 5px;\n            color: #fff;\n            font-size: 14px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-row ion-item {\n      --background: #00b9ff;\n      --padding-start: 10px;\n      --padding-end: 0px;\n      --inner-padding-end: 0; }\n  ion-card ion-row ion-item div {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: flex-end; }\n  ion-card ion-row ion-item div ion-text {\n          color: #fff; }\n  ion-card ion-row ion-item div ion-text p:first-child {\n            margin: 0;\n            margin-top: 5px;\n            font-family: Omnes;\n            font-size: 14px; }\n  ion-card ion-row ion-item div ion-text p:last-child {\n            margin: 0;\n            margin-top: 10px;\n            font-family: Open Sans SemiBold;\n            font-size: 14px; }\n  ion-card ion-row ion-item div ion-icon {\n          height: 35px;\n          width: 35px;\n          color: #ffffff; }\n  ion-card-content ion-list {\n  height: 100%;\n  overflow: auto; }\n  ion-card-content ion-list::-webkit-scrollbar {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9Db21wb25lbnRzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlCQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBO0VBTnBCO0lBUVEsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUIsRUFBQTtFQVZqQztNQWFZLGVBQWU7TUFDZiwrQkFBK0I7TUFDL0IsY0FBYyxFQUFBO0VBZjFCO01BbUJZLFlBQVk7TUFDWixlQUFlO01BQ2YscUJBQWdCO01BQ2hCLG1CQUFjO01BQ2Qsb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQixrQkFBYztNQUNkLHFCQUFpQjtNQUNqQix1QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLHFCQUFvQjtjQUFwQixvQkFBb0I7TUFDcEIsV0FBVztNQUNYLG9CQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLCtCQUErQixFQUFBO0VBaEMzQztRQW1DZ0IsaUJBQWlCLEVBQUE7RUFuQ2pDO0lBd0NRLGFBQWEsRUFBQTtFQXhDckI7TUEyQ1ksdUJBQXVCLEVBQUE7RUEzQ25DO1FBOENnQixxQkFBYTtRQUNiLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLG9CQUFnQjtRQUNoQixrQkFBYyxFQUFBO0VBbkQ5QjtVQXNEb0IsYUFBYTtVQUNiLG1CQUFtQjtVQUNuQixtQkFBbUIsRUFBQTtFQXhEdkM7WUEyRHdCLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQix5QkFBeUI7WUFDekIsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsK0JBQStCLEVBQUE7RUF0RXZEO1lBMEV3QixlQUFlO1lBQ2YsK0JBQStCLEVBQUE7RUEzRXZEO1FBaUZnQixVQUFVO1FBQ1YsY0FBYyxFQUFBO0VBbEY5QjtNQXVGWSx1QkFBdUIsRUFBQTtFQXZGbkM7UUEwRmdCLHFCQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2Qsb0JBQWdCO1FBQ2hCLGtCQUFjLEVBQUE7RUEvRjlCO1VBa0dvQixhQUFhO1VBQ2IsbUJBQW1CO1VBQ25CLG1CQUFtQixFQUFBO0VBcEd2QztZQXVHd0IsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLHlCQUF5QjtZQUN6QixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZiwrQkFBK0IsRUFBQTtFQWxIdkQ7WUFzSHdCLGVBQWU7WUFDZiwrQkFBK0IsRUFBQTtFQXZIdkQ7UUE2SGdCLFVBQVU7UUFDVixjQUFjLEVBQUE7RUE5SDlCO01BbUlZLHVCQUF1QixFQUFBO0VBbkluQztRQXNJZ0IscUJBQWE7UUFDYixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxvQkFBZ0I7UUFDaEIsa0JBQWMsRUFBQTtFQTNJOUI7VUE4SW9CLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsbUJBQW1CO1VBQ25CLFdBQVcsRUFBQTtFQWpKL0I7WUFvSndCLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQix5QkFBeUI7WUFDekIsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsK0JBQStCLEVBQUE7RUEvSnZEO1lBbUt3QixjQUFjO1lBQ2QsVUFBVSxFQUFBO0VBcEtsQztjQXVLNEIsVUFBVTtjQUNWLG1CQUFtQjtjQUNuQix1QkFBdUI7Y0FDdkIsZ0JBQWdCO2NBQ2hCLFNBQVMsRUFBQTtFQTNLckM7SUFvTFEsbUJBQW1CLEVBQUE7RUFwTDNCO01BdUxZLFdBQVc7TUFDWCxXQUFXO01BQ1gseUJBQXlCLEVBQUE7RUF6THJDO01BNkxZLFdBQVcsRUFBQTtFQTdMdkI7UUFnTWdCLFlBQVk7UUFDWixjQUFjLEVBQUE7RUFqTTlCO1VBb01vQixrQkFBYSxFQUFBO0VBcE1qQztZQXVNd0IsU0FBUztZQUNULGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsZUFBZTtZQUNmLCtCQUErQixFQUFBO0VBM012RDtNQWtOWSxxQkFBYTtNQUNiLHFCQUFnQjtNQUNoQixrQkFBYztNQUNkLHNCQUFvQixFQUFBO0VBck5oQztRQXdOZ0IsV0FBVztRQUNYLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQThCO1FBQzlCLHFCQUFxQixFQUFBO0VBNU5yQztVQStOb0IsV0FBVyxFQUFBO0VBL04vQjtZQWlPd0IsU0FBUztZQUNULGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsZUFBZSxFQUFBO0VBcE92QztZQXVPd0IsU0FBUztZQUNULGdCQUFnQjtZQUNoQiwrQkFBK0I7WUFDL0IsZUFBZSxFQUFBO0VBMU92QztVQStPb0IsWUFBWTtVQUNaLFdBQVc7VUFDWCxjQUFjLEVBQUE7RUFTbEM7RUFFUSxZQUFZO0VBQ1osY0FBYyxFQUFBO0VBSHRCO0VBT1EsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEwNzVweCk7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMGI5ZmY7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gICAgICAgIGhlaWdodDogMTIlO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHggMCAyMHB4O1xuXG4gICAgICAgIGlvbi1jYXJkLXRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG5cbiAgICAgICAgICAgIGZhLWljb257XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAuY291bnRyeUxpc3R7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjRiOWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWl0ZW06OnBhcnQoZGV0YWlsLWljb24pe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW5kZXhMaXN0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjI0YjllO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pdGVtOjpwYXJ0KGRldGFpbC1pY29uKXtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbXBhbnlMaXN0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzIyNGI5ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpb24tdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tcm93e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiOWZmO1xuXG4gICAgICAgIGhye1xuICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tY29sOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcblxuICAgICAgICAgICAgaW9uLWxpc3R7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICAgICAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAgICAgICAgIC0tbWluLWhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgICAgICAgICAgIGlvbi10ZXh0e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgcDpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPbW5lcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbmlvbi1jYXJkLWNvbnRlbnR7XG4gICAgaW9uLWxpc3R7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuXG4gICAgaW9uLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Components/grid/grid.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/Components/grid/grid.component.ts ***!
    \***************************************************/

  /*! exports provided: GridComponent */

  /***/
  function srcAppComponentsGridGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridComponent", function () {
      return GridComponent;
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


    var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/shareddata/data.service */
    "./src/app/services/shareddata/data.service.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var GridComponent = /*#__PURE__*/function () {
      function GridComponent(dataService) {
        var _this2 = this;

        _classCallCheck(this, GridComponent);

        this.dataService = dataService;
        this.faAngleDoubleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleDoubleLeft"];
        this.CountryData = [];
        this.IndexWise = [];
        this.eqIndexList = [];
        this.eqIndexData = [];
        this.selIndexData = [];
        this.selCompanyData = [];
        this.selIndex = [];
        this.showSort = false;
        this.indexsortList = ['Index Name (ascending)', 'Index Name (descending)', 'H-Factor Score (ascending)', 'H-Factor Score (descending)'];
        this.companysortlist = ['Company Name (ascending)', 'Company Name (descending)', 'H-Factor Score (ascending)', 'H-Factor Score (descending)', 'Ticker (ascending)', 'Ticker (descending)'];
        this._seltabSub = this.dataService.selTab.subscribe(function (d) {
          _this2.selTab = d;
          console.log(_this2.selTab);

          if (_this2.selTab == 'Equities & FI') {
            _this2._dataSub = _this2.dataService.dbScore.subscribe(function (d) {
              _this2.data = d;

              _this2.indexClassifier(); // this.countryClassifier();
              // console.log(d);

            });
          }
        });
        this._showGICSSub = this.dataService.showGICS.subscribe(function (d) {
          _this2.showGICS = d;
        });
        this._secLevelSub = this.dataService.secLevel.subscribe(function (d) {
          _this2.secLevel = d;
        });
      }

      _createClass(GridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "countryClassifier",
        value: function countryClassifier() {// var temp = 
        }
      }, {
        key: "indexClassifier",
        value: function indexClassifier() {
          var _this3 = this;

          var temp = this.data.reduce(function (r, a) {
            // console.log('a',a);
            // console.log('r',r);
            r[a.indexName] = [].concat(_toConsumableArray(r[a.indexName] || []), [a]);
            return r;
          }, {});
          this.IndexWise = temp;
          console.log(this.IndexWise);
          this.dataService.indexWise.next(this.IndexWise);
          var indexTemp = this.data.map(function (item) {
            return item.indexName;
          });
          this.TotalIndex = indexTemp.filter(function (value, index, self) {
            return self.indexOf(value) === index;
          }); // console.log(this.TotalIndex);

          this.eqIndexList = [];
          this.TotalIndex.forEach(function (element) {
            if (!element.includes('New Age Alpha')) {
              _this3.eqIndexList.push(element);
            }
          }); // console.log(this.eqIndexList);

          this.eqIndexData = [];
          this.eqIndexList.forEach(function (element) {
            var inttemp = {
              indexName: element,
              scores: _this3.roundValue(_this3.getMed(temp[element]) * 100),
              countryGroup: temp[element][0].countrygroup
            };

            _this3.eqIndexData.push(inttemp);
          });
          console.log(this.eqIndexData);
          var tempcountry = this.eqIndexData.map(function (item) {
            return item.countryGroup;
          });
          var totalCountry = tempcountry.filter(function (value, index, self) {
            return self.indexOf(value) === index;
          }); // console.log(totalCountry);

          this.CountryData = [];
          totalCountry.forEach(function (element) {
            var countrytemp = {
              countryName: element,
              scores: _this3.roundValue(_this3.getMed(_this3.eqIndexData.filter(function (i) {
                return i.countryGroup == element;
              })))
            };

            _this3.CountryData.push(countrytemp);
          });
          this.CountryData.sort(function (a, b) {
            return a.scores - b.scores;
          });
          console.log(this.CountryData);
          this.GridType = 'CountryGrid';
        }
      }, {
        key: "onCountryClick",
        value: function onCountryClick(d) {
          this.GridType = 'IndexGrid';
          this.selSort = this.indexsortList[2];
          console.log(d);
          this.selCountry = d;
          this.selIndexData = this.eqIndexData.filter(function (i) {
            return i.countryGroup == d.countryName;
          });
          this.selIndexData.sort(function (a, b) {
            return a.scores - b.scores;
          });
          console.log(this.selIndexData);
        }
      }, {
        key: "onIndexClick",
        value: function onIndexClick(d) {
          this.selIndex = d;
          this.dataService.selIndex.next(this.selIndex);
          this.selCompanyData = this.IndexWise[this.selIndex.indexName];
          console.log(this.selIndex);
          this.GridType = 'CompanyGrid';
          this.selSort = this.companysortlist[2];
          this.showGICS = true;
          this.dataService.showGICS.next(this.showGICS);
          this.secLevel = 2;
          this.dataService.secLevel.next(this.secLevel);
        }
      }, {
        key: "onCompanyClick",
        value: function onCompanyClick(d) {
          console.log(d);
        }
      }, {
        key: "onbackClick",
        value: function onbackClick() {
          this.GridType = 'CountryGrid';

          if (this.showSort) {
            this.showSort = false;
          }
        }
      }, {
        key: "onCompanybackClick",
        value: function onCompanybackClick() {
          this.GridType = 'IndexGrid';

          if (this.showSort) {
            this.showSort = false;
          }

          if (this.showGICS) {
            this.showGICS = false;
            this.dataService.showGICS.next(this.showGICS);
          }
        }
      }, {
        key: "onSortItemClick",
        value: function onSortItemClick(item) {
          this.selSort = item;
          console.log(item);

          if (this.GridType == 'IndexGrid') {
            if (item == this.indexsortList[0]) {
              this.selIndexData.sort(function (a, b) {
                return a.indexName.localeCompare(b.indexName);
              });
            } else if (item == this.indexsortList[1]) {
              this.selIndexData.sort(function (a, b) {
                return b.indexName.localeCompare(a.indexName);
              });
            } else if (item == this.indexsortList[2]) {
              this.selIndexData.sort(function (a, b) {
                return a.scores - b.scores;
              });
            } else if (item == this.indexsortList[3]) {
              this.selIndexData.sort(function (a, b) {
                return b.scores - a.scores;
              });
            }
          } else if (this.GridType == 'CompanyGrid') {
            if (item == this.companysortlist[0]) {
              this.selCompanyData.sort(function (a, b) {
                return a.companyName.localeCompare(b.companyName);
              });
            } else if (item == this.companysortlist[1]) {
              this.selCompanyData.sort(function (a, b) {
                return b.companyName.localeCompare(a.companyName);
              });
            } else if (item == this.companysortlist[2]) {
              this.selCompanyData.sort(function (a, b) {
                return a.scores - b.scores;
              });
            } else if (item == this.companysortlist[3]) {
              this.selCompanyData.sort(function (a, b) {
                return b.scores - a.scores;
              });
            } else if (item == this.companysortlist[4]) {
              this.selCompanyData.sort(function (a, b) {
                return a.ticker.localeCompare(b.ticker);
              });
            } else if (item == this.companysortlist[5]) {
              this.selCompanyData.sort(function (a, b) {
                return b.ticker.localeCompare(a.ticker);
              });
            }
          }

          if (this.showSort) {
            this.showSort = false;
          }
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
        key: "roundValue",
        value: function roundValue(val) {
          return (Math.round(val * 10) / 10).toFixed(1);
        }
      }, {
        key: "getColor",
        value: function getColor(med) {
          var gc100 = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().domain([0, 25, 50, 75, 100]).range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
          return gc100(med);
        }
      }, {
        key: "onSortClick",
        value: function onSortClick() {
          if (this.showSort) {
            this.showSort = false;
          } else {
            this.showSort = true;
          }
        }
      }]);

      return GridComponent;
    }();

    GridComponent.ctorParameters = function () {
      return [{
        type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/grid/grid.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./grid.component.scss */
      "./src/app/Components/grid/grid.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])], GridComponent);
    /***/
  },

  /***/
  "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIPadHomeToolIPadHomeToolComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --overflow: hidden;\n  --background: #224b9e; }\n\n.avatar {\n  border-radius: 50%;\n  padding: 10px;\n  border: 2px solid white;\n  width: 45px;\n  height: 45px; }\n\n.outerDiv {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n\n.parentCard {\n  height: 95%;\n  width: 95%;\n  --background:#224b9e;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.parentCard ion-card-content {\n    height: 100%;\n    width: 100%; }\n\n.parentCard ion-card-content .crect {\n      fill: #fafafa;\n      display: block; }\n\n.parentCard ion-card-content .start-ring {\n      stroke-width: 10px;\n      stroke: #0e82e5;\n      fill: #fff; }\n\n#gchart .start-ring {\n  stroke-width: 10px;\n  stroke: #0e82e5;\n  fill: #fff; }\n\n.comp {\n  font-family: 'Open Sans SemiBold';\n  font-size: 1px;\n  cursor: pointer;\n  fill: #666666;\n  /*text-transform: uppercase;*/ }\n\n.comp text {\n  display: none; }\n\n.comp .bgrect {\n  display: none; }\n\n.comp .on {\n  font-size: 10px;\n  display: block !important;\n  z-index: 10; }\n\n.comp .recton {\n  fill: #00b9ff; }\n\n.crect {\n  fill: #fafafa;\n  display: block; }\n\n.onrect {\n  fill: #333;\n  width: 32px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9Db21wb25lbnRzL2ktcGFkLWhvbWUtdG9vbC9pLXBhZC1ob21lLXRvb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBVztFQUNYLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBUHZCO0lBVVEsWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFYbkI7TUFjWSxhQUFhO01BQ2IsY0FBYyxFQUFBOztBQWYxQjtNQW1CWSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLFVBQVUsRUFBQTs7QUFLdEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYiw2QkFBQSxFQUE4Qjs7QUFHaEM7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9pLXBhZC1ob21lLXRvb2wvaS1wYWQtaG9tZS10b29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLS1iYWNrZ3JvdW5kOiAjMjI0YjllO1xufVxuXG4uYXZhdGFye1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ub3V0ZXJEaXZ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFyZW50Q2FyZHtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICB3aWR0aDogOTUlO1xuICAgIC0tYmFja2dyb3VuZDojMjI0YjllO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAuY3JlY3Qge1xuICAgICAgICAgICAgZmlsbDogI2ZhZmFmYTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdGFydC1yaW5nIHtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMTBweDtcbiAgICAgICAgICAgIHN0cm9rZTogIzBlODJlNTtcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgICAgfVxuICAgIH1cbn1cblxuI2djaGFydCAuc3RhcnQtcmluZyB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xuICAgIHN0cm9rZTogIzBlODJlNTtcbiAgICBmaWxsOiAjZmZmO1xuICB9XG4gIC5jb21wIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBTZW1pQm9sZCc7XG4gICAgZm9udC1zaXplOiAxcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbGw6ICM2NjY2NjY7XG4gICAgLyp0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyovXG4gIH1cblxuICAuY29tcCB0ZXh0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbXAgLmJncmVjdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jb21wIC5vbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTA7XG4gIH1cblxuICAuY29tcCAucmVjdG9uIHtcbiAgICBmaWxsOiAjMDBiOWZmO1xuICB9XG5cbiAgLmNyZWN0IHtcbiAgICBmaWxsOiAjZmFmYWZhO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm9ucmVjdCB7XG4gICAgZmlsbDogIzMzMztcbiAgICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.ts ***!
    \*************************************************************************/

  /*! exports provided: IPadHomeToolComponent */

  /***/
  function srcAppComponentsIPadHomeToolIPadHomeToolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IPadHomeToolComponent", function () {
      return IPadHomeToolComponent;
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


    var _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../profiledetails/profiledetails.component */
    "./src/app/Components/profiledetails/profiledetails.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/shareddata/data.service */
    "./src/app/services/shareddata/data.service.ts");

    var IPadHomeToolComponent = /*#__PURE__*/function () {
      function IPadHomeToolComponent(popoverController, dataService) {
        var _this4 = this;

        _classCallCheck(this, IPadHomeToolComponent);

        this.popoverController = popoverController;
        this.dataService = dataService;
        this._showGridSub = this.dataService.showGrid.subscribe(function (d) {
          _this4.showGrid = d;
        });
        this._showGICSSub = this.dataService.showGICS.subscribe(function (d) {
          _this4.showGICS = d;
        });
      }

      _createClass(IPadHomeToolComponent, [{
        key: "profilePopover",
        value: function profilePopover(e) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_2__["ProfiledetailsComponent"],
                      event: e,
                      translucent: true,
                      cssClass: 'Custom_profile'
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return IPadHomeToolComponent;
    }();

    IPadHomeToolComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }];
    };

    IPadHomeToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ipadhometool',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./i-pad-home-tool.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./i-pad-home-tool.component.scss */
      "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])], IPadHomeToolComponent);
    /***/
  },

  /***/
  "./src/app/Components/index/index.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/Components/index/index.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIndexIndexComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header .avatar {\n  border-radius: 50%;\n  padding: 10px;\n  border: 2px solid white;\n  width: 45px;\n  height: 45px; }\n\nion-content .parentDiv {\n  height: calc(100vh - 111px);\n  width: 100vw;\n  display: flex;\n  flex-direction: row; }\n\nion-content .parentDiv .leftCard {\n    margin: 0px;\n    border-radius: 0px;\n    box-shadow: none;\n    height: 100%;\n    width: 80%; }\n\nion-content .parentDiv .rightCard {\n    margin: 0;\n    border-radius: 0px;\n    box-shadow: none;\n    height: 100%;\n    width: 25%;\n    --background: #f5f5fb; }\n\nion-content .parentDiv .rightCard ion-item {\n      --padding-start: 10px;\n      --min-height: 55px;\n      border-radius: 10px;\n      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5); }\n\nion-content .parentDiv .rightCard ion-item ion-select {\n        --padding-start: 0px;\n        display: inline-flex;\n        justify-content: flex-end;\n        width: 100%;\n        max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9Db21wb25lbnRzL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RQTtFQUVRLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR3BCO0VBRUksMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBTHZCO0lBUVEsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVUsRUFBQTs7QUFabEI7SUFlUSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtJQUNWLHFCQUFhLEVBQUE7O0FBcEJyQjtNQXVCWSxxQkFBZ0I7TUFDaEIsa0JBQWE7TUFDYixtQkFBbUI7TUFDbkIsOENBQTJDLEVBQUE7O0FBMUJ2RDtRQTZCZ0Isb0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIsV0FBVztRQUNYLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuc2lkZS1uYXYtaXRlbXtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGhlaWdodDogNTBweDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIG1hcmdpbjogMCAxMHB4O1xuLy8gICAgIGJhY2tncm91bmQ6ICM0ZTYyYTE7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgIHBhZGRpbmc6IDVweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gfVxuXG4vLyAuaXRlbS1BY3RpdmV7XG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0Nzg0ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5hdmF0YXJ7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4vLyAgICAgd2lkdGg6IDQ1cHg7XG4vLyAgICAgaGVpZ2h0OiA0NXB4O1xuLy8gfVxuXG4vLyAuY29sdW1uLWl0ZW17XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIGNvbG9yOiAjMzk0ZThiO1xuLy8gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmZmZmY7XG4vLyAgICAgZm9udC1zaXplOiAxMXB4O1xuLy8gICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuLy8gfVxuXG4vLyAucm93LWhlYWRlcntcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuLy8gfVxuLy8gLmNvbC1oZWFkZXJ7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmZmZmO1xuLy8gfVxuXG4vLyAuaXRlbS1jZW50ZXJ7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gfVxuXG4vLyAuaXRlbS1sZWZ0LWNlbnRlcntcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyB9XG5cbi8vIC5yb3ctaXRlbXtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuLy8gICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmZmZmZmO1xuLy8gfVxuXG4vLyAubm8tYm9yZGVye1xuLy8gICAgIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5vdmVyYWxsRGl2e1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbi8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCMyRTRDOTksICMyMzM3NzEpO1xuLy8gfVxuXG4vLyAubWVudXtcbi8vICAgICBoZWlnaHQ6IDEwMHZoO1xuLy8gICAgIHdpZHRoOiAxMjBweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuLy8gICAgIC5sb2dve1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0YTk5O1xuLy8gICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4vLyAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4OyBcbi8vICAgICAgICAgZGlzcGxheTogZmxleDsgXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIH1cblxuLy8gICAgIC5tZW51LWl0ZW0tZGl2e1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbi8vICAgICAgICAgaGVpZ2h0OiA1MHZoO1xuLy8gICAgIH1cblxuLy8gICAgIC5kaXZpZGVyLXNwYW57XG4vLyAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcblxuLy8gICAgICAgICBocntcbi8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMjQ3ODQ7IFxuLy8gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxuLy8gICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4OyBcbi8vICAgICAgICAgICAgIGhlaWdodDogMHB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLm1lbnUtbmF2LXNwYW57XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuLy8gICAgICAgICBpb24taXRlbXtcbi8vICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAuY29udGVudC1kaXZ7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG5cbi8vICAgICAuc2VjdGlvbjEtZGl2e1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4OyBcbi8vICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4vLyAgICAgICAgIHBhZGRpbmc6IDQwcHggMjVweCAyMHB4IDI1cHg7XG5cbi8vICAgICAgICAgLnRpdGxlLURpdntcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuLy8gICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuLy8gICAgICAgICAgICAgaDF7XG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4OyBcbi8vICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDsgXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICMwMGI5ZmY7XG4vLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgIC5wcm9maWxle1xuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbi8vICAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICAuc3ViLXRpdGxle1xuLy8gICAgICAgICAgICAgd2lkdGg6NzV2aDtcblxuLy8gICAgICAgICAgICAgcHtcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4OyBcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICBpbWd7XG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLnNlY3Rpb24yLWRpdntcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7IFxuLy8gICAgICAgICBwYWRkaW5nOiAyNXB4IDI1cHggMjBweCAyNXB4O1xuXG4vLyAgICAgICAgIGgxe1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4OyBtYXJnaW46IDBweDsgY29sb3I6ICMwMGI5ZmY7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBpb24taXRlbXtcbi8vICAgICAgICAgICAgIC0tYmFja2dyb3VuZDojMTIyMDNmOyBcbi8vICAgICAgICAgICAgIC0tY29sb3I6ICMwMGI5ZmY7IFxuLy8gICAgICAgICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojMTIyMDNmO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLnNlY3Rpb24zLWRpdntcbi8vICAgICAgICAgLnBlcmZvbWFuY2UtZGl2e1xuLy8gICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuXG4vLyAgICAgICAgICAgICBpb24tY2FyZHtcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4vLyAgICAgICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudHtcbi8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTAwcHgpOyBcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXG4vLyAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgLmxvYWRlcntcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICAgICAgLnRpdGxlLXB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM5NGU4YjsgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgICAgIC5kZXNjLXB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM5NGU4YjsgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgICAgIC5wZXJmLWRhdGUtcHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzk0ZThiO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICAgICAgLnJvdzJ7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICAgICAgLmRhdGVzLWRpdntcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMCAxMHB4O1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzOTRlOGI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC5wLXBhZGRpbmd7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtZGl2e1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpe1xuLy8gICAgIC5jb250ZW50LWRpdntcbi8vICAgICAgICAgd2lkdGg6IDg4JTtcbi8vICAgICB9XG5cbi8vICAgICAuY29udGVudC1kaXYgLnNlY3Rpb24xLWRpdiAuc3ViLXRpdGxle1xuLy8gICAgICAgICB3aWR0aDogNDB2aDtcbi8vICAgICB9XG4vLyAgICAgLm1lbnUgLm1lbnUtaXRlbS1kaXZ7XG4vLyAgICAgICAgIGhlaWdodDogNDV2aDtcbi8vICAgICB9XG4gICAgXG4vLyB9XG5cbmlvbi1oZWFkZXJ7XG4gICAgLmF2YXRhcntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIH1cbn1cbmlvbi1jb250ZW50e1xuLnBhcmVudERpdntcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTFweCk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIC5sZWZ0Q2FyZHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgICAucmlnaHRDYXJke1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZmI7XG5cbiAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMCwwLDAsMC41KTtcblxuICAgICAgICAgICAgaW9uLXNlbGVjdHtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cbiAgICB9XG59XG5cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/index/index.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Components/index/index.component.ts ***!
    \*****************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppComponentsIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _Components_profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../Components/profiledetails/profiledetails.component */
    "./src/app/Components/profiledetails/profiledetails.component.ts");

    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent(httpClient, popoverController) {
        _classCallCheck(this, IndexComponent);

        this.httpClient = httpClient;
        this.popoverController = popoverController;
        this.PerformanceData = [];
        this.IndexData = [];
        this.Index = [];
        this.CountryClasificationList = ['All', 'USA', 'Europe', 'UK', 'Japan', 'Dev. World', 'Dev. World ex US'];
        this.performanceAPIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexPerformance';
        this.APIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexDetails';
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedCountry = 'USA';
          this.LoadData();
        }
      }, {
        key: "OnItemClick",
        value: function OnItemClick(item) {
          this.selectedCountry = item;
          this.SelectedData = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0];
          console.log(item);
        }
      }, {
        key: "LoadData",
        value: function LoadData() {
          var _this5 = this;

          this.httpClient.get(this.performanceAPIUrl).subscribe(function (data) {
            _this5.PerformanceData = data;
            console.log(_this5.PerformanceData);

            _this5.httpClient.get(_this5.APIUrl).subscribe(function (data) {
              _this5.IndexData = data;
              console.log(_this5.IndexData);
              var i = 0;

              for (i = 0; i < _this5.CountryClasificationList.length; i++) {
                var temp = _this5.filterIndex(_this5.CountryClasificationList[i]);

                temp = temp.sort(function (a, b) {
                  return a.indexName - b.indexName;
                });
                console.log(_this5.CountryClasificationList[i]);
                console.log(temp);

                _this5.Index.push(temp);
              }

              _this5.SelectedData = _this5.Index[_this5.CountryClasificationList.indexOf(_this5.selectedCountry)][0];
              console.log(_this5.SelectedData);

              var temps = _this5.PerformanceData.filter(function (item) {
                return item.indexName == _this5.SelectedData.indexName;
              });

              _this5.selectedIndexData = temps[0];
              console.log(_this5.selectedIndexData);
            });
          });
        }
      }, {
        key: "filterIndex",
        value: function filterIndex(item) {
          var index = item;
          var filterStr = 'U.S.';
          var ind = [];

          if (index == 'USA') {
            filterStr = 'U.S.';
            ind = this.IndexData.filter(function (data) {
              return data.indexName.indexOf(filterStr) != -1;
            });
          } else if (index == 'Europe') {
            filterStr = 'Europe';
            ind = this.IndexData.filter(function (data) {
              return data.indexName.indexOf(filterStr) != -1;
            });
          } else if (index == 'Europe') {
            filterStr = 'Europe';
            ind = this.IndexData.filter(function (data) {
              return data.indexName.indexOf(filterStr) != -1;
            });
          } else if (index == 'UK') {
            filterStr = 'UK';
            ind = this.IndexData.filter(function (data) {
              return data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Europe') == -1;
            });
          } else if (index == 'Japan') {
            filterStr = 'Japan';
            ind = this.IndexData.filter(function (data) {
              return data.indexName.indexOf(filterStr) != -1;
            });
          } else if (index == 'Dev. World') {
            filterStr = 'Developed World';
            ind = this.IndexData.filter(function (data) {
              return data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Developed World Ex-US') == -1;
            });
          } else if (index == 'Dev. World ex US') {
            filterStr = 'Developed World Ex-US';
            ind = this.IndexData.filter(function (data) {
              return data.indexName.indexOf(filterStr) != -1;
            });
          } else if (index == 'All') {
            ind = this.IndexData;
          } //console.log(ind);


          return ind;
        }
      }, {
        key: "onIndexChange",
        value: function onIndexChange(ev) {
          var _this6 = this;

          var temp = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)].filter(function (item) {
            return item.indexName == ev.target.value;
          });
          this.SelectedData = temp[0];
          console.log(this.SelectedData);
          var temp2 = this.PerformanceData.filter(function (item) {
            return item.indexName == _this6.SelectedData.indexName;
          });
          this.selectedIndexData = temp2[0];
          console.log(this.selectedIndexData);
          console.log(ev.target.value);
        }
      }, {
        key: "profilePopover",
        value: function profilePopover(e) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log("presenting profile Details");
                    _context2.next = 3;
                    return this.popoverController.create({
                      component: _Components_profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_4__["ProfiledetailsComponent"],
                      event: e,
                      translucent: true,
                      cssClass: 'Custom_profile'
                    });

                  case 3:
                    popover = _context2.sent;
                    _context2.next = 6;
                    return popover.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "roundOf",
        value: function roundOf(val) {
          var temp = Math.round(val * 100) / 100;
          return temp.toFixed(2);
        }
      }, {
        key: "get_desc",
        value: function get_desc(val) {
          return val.replace(/IndexSM/g, 'Index<sup>SM</sup>').replace(/RiskSelectTM/g, 'RiskSelect<sup>TM</sup>').replace(/Human Factor/g, 'H-Factor');
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./index.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/index/index.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./index.component.scss */
      "./src/app/Components/index/index.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], IndexComponent);
    /***/
  },

  /***/
  "./src/app/Components/searchtool/searchtool.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/Components/searchtool/searchtool.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchtoolSearchtoolComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-segment {\n  height: 35px;\n  margin-top: 10px; }\n  ion-segment ion-segment-button {\n    --indicator-color: #224b9e;\n    --color-checked: #ffffff;\n    --color:#224b9e;\n    --border-radius: 20px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9Db21wb25lbnRzL3NlYXJjaHRvb2wvc2VhcmNodG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUZwQjtJQUtRLDBCQUFrQjtJQUNsQix3QkFBZ0I7SUFDaEIsZUFBUTtJQUNSLGdDQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9zZWFyY2h0b29sL3NlYXJjaHRvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6ICMyMjRiOWU7XG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAgICAgLS1jb2xvcjojMjI0YjllO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/searchtool/searchtool.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Components/searchtool/searchtool.component.ts ***!
    \***************************************************************/

  /*! exports provided: SearchtoolComponent */

  /***/
  function srcAppComponentsSearchtoolSearchtoolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchtoolComponent", function () {
      return SearchtoolComponent;
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


    var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/shareddata/data.service */
    "./src/app/services/shareddata/data.service.ts");

    var SearchtoolComponent = /*#__PURE__*/function () {
      function SearchtoolComponent(modalCtrl, dataService) {
        var _this7 = this;

        _classCallCheck(this, SearchtoolComponent);

        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.data = [];
        this._searchRes = [];
        this._etfData = [];
        this.searchText = null;
        this._selTabSub = this.dataService.selTab.subscribe(function (d) {
          _this7.selTab = d;
        });
      }

      _createClass(SearchtoolComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._selTabSub.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSearchdata();
          this.dataService.getETFdata();
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(e) {
          console.log(e);
          console.log(this.searchText);
          console.log(this.data);
          var serText = e.target.value.toLowerCase();

          if (serText.length != 0 && this.data.length != 0) {
            if (this.selTab != "ETF's") {
              this._searchRes = this.data.filter(function (i) {
                return i.companyName.toString().toLowerCase().startsWith(serText) || i.ticker.toString().toLowerCase().startsWith(serText);
              });

              this._searchRes.sort(function (a, b) {
                return a.sortOrder - b.sortOrder;
              });
            } else {
              console.log(this.data.filter(function (i) {
                return i.ticker == null;
              }));
              this._searchRes = this.data.filter(function (i) {
                return i.etfName.toString().toLowerCase().startsWith(serText);
              });

              this._searchRes.sort(function (a, b) {
                return a.etfName > b.etfName;
              });
            }

            console.log(this._searchRes);
          } else {
            this._searchRes.length = 0;
          }
        }
      }, {
        key: "onbackClick",
        value: function onbackClick(e) {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(e) {
          // console.log(e);
          this.selTab = e.detail.value;
          this.dataService.selTab.next(this.selTab);

          if (this._searchRes.length != 0) {
            this._searchRes.length = 0;
          }

          this.searchText = null;
          this.getSearchdata();
        }
      }, {
        key: "getSearchdata",
        value: function getSearchdata() {
          var _this8 = this;

          if (this.selTab == 'Equities & FI') {
            // this.data = 
            this.dataService.getEquitiesdata().then(function (d) {
              _this8.data = d;

              _this8.dataService.getFIdataList().then(function (d) {
                _this8.data.push(d[0]);

                console.log(_this8.data);
              });
            });
          } // else if(this.selTab == 'NAA Indexes'){
          //   this.dataService.getNAAIndexesData().then(d =>{
          //     this.data = d;
          //     console.log(this.data);
          //   })
          // }
          else if (this.selTab == "ETF's") {
              var etfsub = this.dataService.ETFIndex.subscribe(function (d) {
                if (d.length != 0) {
                  _this8.data = d;
                  console.log(_this8.data);
                }
              });
              console.log(this.data);
              etfsub.unsubscribe();
            }
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(i) {
          console.log(i);
        }
      }]);

      return SearchtoolComponent;
    }();

    SearchtoolComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    SearchtoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-searchtool',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./searchtool.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/searchtool/searchtool.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./searchtool.component.scss */
      "./src/app/Components/searchtool/searchtool.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], SearchtoolComponent);
    /***/
  },

  /***/
  "./src/app/Components/tool/tool.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/Components/tool/tool.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsToolToolComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".searchDiv {\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 20px;\n  display: flex;\n  align-items: center; }\n  .searchDiv ion-item {\n    width: 30vw;\n    --padding-start: 10px;\n    --min-height: 35px;\n    max-width: 400px;\n    min-width: 300px;\n    border-radius: 30px; }\n  .searchDiv ion-item img {\n      height: 20px;\n      margin: 0 5px 0 0; }\n  .searchDiv ion-item ion-input {\n      font-size: 14px;\n      --padding-top: 5px;\n      --padding-bottom: 5px;\n      --padding-start: 5px;\n      --padding-end: 5px; }\n  .searchDiv ion-item ion-select {\n      font-size: 14px;\n      color: #00b9ff;\n      border-left: 1px solid rgba(144, 165, 206, 0.68);\n      stroke: white;\n      --padding-top: 5px;\n      --padding-bottom: 5px;\n      --padding-start: 5px;\n      --padding-end: 5px;\n      width: 35%;\n      padding: 0px 5px 0 15px;\n      transition: .5s;\n      max-width: unset;\n      position: relative; }\n  .start-ring {\n  stroke-width: 10px;\n  stroke: #0e82e5;\n  fill: #fff; }\n  .comp {\n  font-family: 'Open Sans SemiBold';\n  font-size: 1px;\n  cursor: pointer;\n  fill: #666666;\n  /*text-transform: uppercase;*/ }\n  .comp text {\n  display: none; }\n  .comp .bgrect {\n  display: none; }\n  .comp .on {\n  font-size: 10px;\n  display: block !important;\n  z-index: 10; }\n  .comp .recton {\n  fill: #00b9ff; }\n  .crect {\n  fill: #fafafa;\n  display: block; }\n  .compHighLight .crect {\n  /* fill: #333;*/\n  display: block !important; }\n  ion-select::part(icon) {\n  opacity: 1; }\n  .first-select {\n  width: 100% !important;\n  max-width: 100% !important;\n  border-left: none !important;\n  padding: 0 5px 0 5px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9Db21wb25lbnRzL3Rvb2wvdG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUNyQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBUHZCO0lBU0ksV0FBVztJQUNYLHFCQUFnQjtJQUNoQixrQkFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUFkdkI7TUFnQk0sWUFBWTtNQUNaLGlCQUFpQixFQUFBO0VBakJ2QjtNQXFCSSxlQUFlO01BQ2Isa0JBQWM7TUFDZCxxQkFBaUI7TUFDakIsb0JBQWdCO01BQ2hCLGtCQUFjLEVBQUE7RUF6QnBCO01BNkJNLGVBQWU7TUFDZixjQUFjO01BQ2QsZ0RBQWdEO01BQ2hELGFBQTBCO01BRTFCLGtCQUFjO01BQ2QscUJBQWlCO01BQ2pCLG9CQUFnQjtNQUNoQixrQkFBYztNQUNkLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTtFQUt4QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVSxFQUFBO0VBR1o7RUFDRSxpQ0FBaUM7RUFDakMsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsNkJBQUEsRUFBOEI7RUFHaEM7RUFDRSxhQUFhLEVBQUE7RUFHZjtFQUNFLGFBQWEsRUFBQTtFQUdmO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7RUFHYjtFQUNFLGFBQWEsRUFBQTtFQUdmO0VBQ0UsYUFBYTtFQUNiLGNBQWMsRUFBQTtFQUdoQjtFQUNFLGVBQUE7RUFDQSx5QkFBeUIsRUFBQTtFQUczQjtFQUNFLFVBQVUsRUFBQTtFQUdaO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsK0JBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Rvb2wvdG9vbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hEaXZ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGlvbi1pdGVte1xuICAgIHdpZHRoOiAzMHZ3O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgaW1ne1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luOiAwIDVweCAwIDA7XG4gICAgfVxuXG4gICAgaW9uLWlucHV0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDVweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICAgIH1cblxuICAgIGlvbi1zZWxlY3R7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzAwYjlmZjtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgxNDQsIDE2NSwgMjA2LCAwLjY4KTtcbiAgICAgIHN0cm9rZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgLy8gbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDVweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICAgICAgd2lkdGg6IDM1JTtcbiAgICAgIHBhZGRpbmc6IDBweCA1cHggMCAxNXB4O1xuICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIH1cbn1cblxuLnN0YXJ0LXJpbmcge1xuICAgIHN0cm9rZS13aWR0aDogMTBweDtcbiAgICBzdHJva2U6ICMwZTgyZTU7XG4gICAgZmlsbDogI2ZmZjtcbiAgfVxuXG4gIC5jb21wIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBTZW1pQm9sZCc7XG4gICAgZm9udC1zaXplOiAxcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbGw6ICM2NjY2NjY7XG4gICAgLyp0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyovXG4gIH1cbiAgXG4gIC5jb21wIHRleHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5jb21wIC5iZ3JlY3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5jb21wIC5vbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgXG4gIC5jb21wIC5yZWN0b24ge1xuICAgIGZpbGw6ICMwMGI5ZmY7XG4gIH1cblxuICAuY3JlY3Qge1xuICAgIGZpbGw6ICNmYWZhZmE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY29tcEhpZ2hMaWdodCAuY3JlY3Qge1xuICAgIC8qIGZpbGw6ICMzMzM7Ki9cbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXNlbGVjdDo6cGFydChpY29uKXtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLmZpcnN0LXNlbGVjdHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCA1cHggMCA1cHggIWltcG9ydGFudDtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/tool/tool.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/Components/tool/tool.component.ts ***!
    \***************************************************/

  /*! exports provided: ToolComponent */

  /***/
  function srcAppComponentsToolToolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolComponent", function () {
      return ToolComponent;
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


    var d3___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3/ */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/shareddata/data.service */
    "./src/app/services/shareddata/data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _searchtool_searchtool_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../searchtool/searchtool.component */
    "./src/app/Components/searchtool/searchtool.component.ts");

    var ToolComponent = /*#__PURE__*/function () {
      // SelTab: string = 'Stocks';
      // SelMode: string = 'Global';
      // SeltabFilter: string = "Global";
      function ToolComponent(modelCtrl, dataService, changedet, popoverCtrl) {
        var _this9 = this;

        _classCallCheck(this, ToolComponent);

        this.modelCtrl = modelCtrl;
        this.dataService = dataService;
        this.changedet = changedet;
        this.popoverCtrl = popoverCtrl;
        this.radius = 170;
        this.dbGICS = [];
        this.selResData = [];
        this.Companies = [];
        this.FromClick = "";
        this.currentStockkey = "";
        this.selTab = '';
        this._selTabSub = this.dataService.selTab.subscribe(function (d) {
          _this9.selTab = d;
          console.log(_this9.selTab);
        });
        this._showGridSub = this.dataService.showGrid.subscribe(function (d) {
          _this9.showGrid = d;
        });
      }

      _createClass(ToolComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._selTabSub.unsubscribe();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataService.getETFdata();
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.loadData();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadData",
        value: function loadData() {
          this.gchart = d3___WEBPACK_IMPORTED_MODULE_2__["select"]("#gchart");
          this.chartMain = this.CreateMainChart(this.gchart);
        }
      }, {
        key: "CreateMainChart",
        value: function CreateMainChart(obj) {
          var that = this;
          var sradius = 100;
          var grp1 = obj.append("g").attr("id", "crlChart");
          grp1.append("circle").attr('id', 'maincircle').attr('class', 'start-ring').attr('fill', '#fff').attr('r', 0).transition().on('end', function () {
            repeat();
            repeat1();
            that.createData("");
          });

          function repeat() {
            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".ringAnim").attr('r', +sradius).style('opacity', 1).style('stroke-width', '5px').transition().attr('r', sradius * 1.3).style('opacity', 0).style('stroke-width', '1px').on('end', repeat);
          }

          ;

          function repeat1() {
            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".preloding").style('opacity', .5).transition().style('opacity', 1).transition().style('opacity', .5).on("end", repeat1);
          }

          return grp1;
        }
      }, {
        key: "createData",
        value: function createData(d) {
          var that = this;
          that.dbGICS = that.dataService.dbGICS; // console.log(that.dbGICS);

          if (d != "") {
            that.dataService.getHistGlobalData(d);
          } else {
            that.dataService.getGlobalData();
          }

          that.dataService.dbScore.subscribe(function (data) {
            if (data.length != 0) {
              var dbScore = data; // console.log(dbScore);

              that.selResData = dbScore;
              var selreslen = that.selResData.length;
              that.selResData.forEach(function (d, i) {
                d.countrygroup = d.indexName.indexOf('Europe') > -1 ? 'Europe' : d.country;
                d.score = d.scores * 100;
                d.deg = d.score;
                d.indname = that.findIndName(that.dbGICS, d.industry);
                d.industry = d.industry + "";
                d.companyName = d.companyName != null ? d.companyName.trim() : "";
                d.company = d.companyName != null ? d.companyName : null;
                d.ticker = d.ticker;
                d.stockKey = d.stockKey;
                d.aisin = d.isin;
                d.isin = "a" + d.stockKey;
                d.Fixeds = "";
                d.cx = i * 360 / selreslen - 90;
                var flt = that.dataService.IndexOrder.filter(function (x) {
                  return x.index == d.indexName;
                });
                d.sortOrder = flt.length > 0 ? flt[0].order : null;
                return d;
              }); // console.log(that.selResData);

              d3___WEBPACK_IMPORTED_MODULE_2__["select"](".ringAnim").style("display", "none").remove();
              d3___WEBPACK_IMPORTED_MODULE_2__["select"](".preloding").style("display", "none").remove();
              d3___WEBPACK_IMPORTED_MODULE_2__["select"]('#maincircle').transition().attr('r', that.radius + 4).style('stroke-width', '0px').on("end", function () {
                d3___WEBPACK_IMPORTED_MODULE_2__["select"]("#maincircle").transition().style('stroke-width', '0px');
                that.createGradientArc(0, 100, that.selResData);
                that.Companies = that.selResData.filter(function (val) {
                  if (val.indexName.indexOf("New Age Alpha") == -1) {
                    return val;
                  }
                }); // console.log(that.Companies);

                that.creatBreadCrumb(that.chartMain);
                that.createKnob();
                that.CreateComps(that.chartMain, that.selResData, "lvl1");
                d3___WEBPACK_IMPORTED_MODULE_2__["select"](".Homecenter").transition().duration(1000).style('opacity', '1');
                d3___WEBPACK_IMPORTED_MODULE_2__["select"](".UpdatedBox").transition().duration(1000).style('opacity', '1');
              });
            }
          });
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
        key: "createGradientArc",
        value: function createGradientArc() {
          var sMin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var sMax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          if (data != null && data.length > 0) {
            data.sort(function (x, y) {
              return d3___WEBPACK_IMPORTED_MODULE_2__["ascending"](parseFloat(x.score), parseFloat(y.score));
            });
          }

          var that = this;

          if (sMin == null) {
            sMin = 0;
          }

          if (sMax == null) {
            sMax = 100;
          }

          d3___WEBPACK_IMPORTED_MODULE_2__["select"]('#gradArc').remove();
          var gArc = d3___WEBPACK_IMPORTED_MODULE_2__["select"]('#crlChart').append('g').attr('id', 'gradArc');
          var arc = d3___WEBPACK_IMPORTED_MODULE_2__["arc"]().innerRadius(that.radius - 18).outerRadius(that.radius - 2);
          var gC100 = d3___WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, 25, 50, 75, 100]).range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
          var colors = [];
          var color1 = d3___WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, 1, 2, 3, 4]).range([gC100(sMin), gC100((sMax - sMin) * 25 / 100 + sMin), gC100((sMax - sMin) * 50 / 100 + sMin), gC100((sMax - sMin) * 75 / 100 + sMin), gC100(sMax)]);
          var linearGradient = gArc.append('defs');
          var linearG1 = linearGradient.append('linearGradient');
          var gCArcColor = d3___WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, 90, 91, 180, 181, 270, 271, 360]).range([0, 100, 0, 100, 0, 100, 0, 100]);
          var MaxColor = "";
          var MaxScore = "";
          var Data1 = data.filter(function (x) {
            return x.cx >= -90 && x.cx <= 0;
          }); // console.log(data);
          // console.log(Data1);

          linearG1.attr("id", "linearColors0").attr("x1", "0").attr("y1", "0").attr("x2", ".5").attr("y2", "1");

          if (data != null) {
            for (var i = 0; i < data.length; i++) {
              if (data[i].cx >= -90 && data[i].cx <= 0) {
                linearG1.append("stop").attr("offset", gCArcColor(data[i].cx + 90) + "%").attr("stop-color", gC100(data[i].score));
              }

              if (data[i].cx > 0) {
                linearG1.append("stop").attr("offset", "100%").attr("stop-color", gC100(data[i].score));
                break;
              }
            }

            MaxColor = gC100(Data1[Data1.length - 1].score);
            MaxScore = Data1[Data1.length - 1].cx;
          }

          var Data2 = data.filter(function (x) {
            return x.cx >= 1 && x.cx <= 90;
          }); // console.log(Data2);

          var linearG2 = linearGradient.append("linearGradient");
          linearG2.attr("id", "linearColors1").attr("x1", "0.8").attr("y1", "0").attr("x2", "0.5").attr("y2", "0.5");

          if (data != null) {
            for (var i = 0; i < data.length; i++) {
              if (data[i].cx >= 1 && data[i].cx <= 90) {
                linearG2.append("stop").attr("offset", gCArcColor(data[i].cx + 90) + "%").attr("stop-color", gC100(data[i].score));
              }

              if (data[i].cx > 90) {
                //   linearG2.append("stop").attr("offset", "100%").attr("stop-color", gC100(data[i].score));
                break;
              }
            }

            if (Data2 == null || Data2.length == 0) {
              linearG2.append("stop").attr("offset", gCArcColor(MaxScore + 90) + "%").attr("stop-color", MaxColor);
            } else {
              MaxColor = gC100(Data2[Data2.length - 1].score);
              MaxScore = Data2[Data2.length - 1].cx;
            }
          }

          var Data3 = data.filter(function (x) {
            return x.cx >= 91 && x.cx <= 180;
          });
          var linearG3 = linearGradient.append("linearGradient");
          linearG3.attr("id", "linearColors2").attr("x1", "0.8").attr("y1", "0.8").attr("x2", "0").attr("y2", "0.3");

          if (data != null) {
            for (var i = 0; i < data.length; i++) {
              if (data[i].cx >= 91 && data[i].cx <= 180) {
                linearG3.append("stop").attr("offset", gCArcColor(data[i].cx + 90) + "%").attr("stop-color", gC100(data[i].score));
              }

              if (data[i].cx > 180) {
                //   linearG3.append("stop").attr("offset", "100%").attr("stop-color", gC100(data[i].score));
                break;
              }
            }

            if (Data3 == null || Data3.length == 0) {
              linearG3.append("stop").attr("offset", gCArcColor(MaxScore + 90) + "%").attr("stop-color", MaxColor);
            } else {
              MaxColor = gC100(Data3[Data3.length - 1].score);
              MaxScore = Data3[Data3.length - 1].cx;
            }
          }

          var Data4 = data.filter(function (x) {
            return x.cx >= 181 && x.cx <= 270;
          });
          var linearG4 = linearGradient.append("linearGradient");
          linearG4.attr("id", "linearColors3").attr("x1", "0").attr("y1", "1").attr("x2", "1").attr("y2", "0");

          if (data != null) {
            for (var i = 0; i < data.length; i++) {
              if (data[i].cx >= 181 && data[i].cx <= 270) {
                linearG4.append("stop").attr("offset", gCArcColor(data[i].cx + 90) + "%").attr("stop-color", gC100(data[i].score));
              }

              if (data[i].cx > 270) {
                break;
              }
            }

            if (Data4 == null || Data4.length == 0) {
              linearG4.append("stop").attr("offset", gCArcColor(MaxScore + 90) + "%").attr("stop-color", MaxColor);
            }
          }

          d3___WEBPACK_IMPORTED_MODULE_2__["range"](4).forEach(function (d, i) {
            // convert to radians
            var start = i * 89 * (Math.PI / 180),
                end = (i * 89.9 + 90) * (Math.PI / 180);
            colors.push({
              startAngle: start,
              endAngle: end
            });
          });
          gArc.selectAll('.arc').data(colors).enter().append('path').attr('class', 'arc').attr('d', arc).attr('stroke', 'none').attr('fill', function (d, i) {
            return 'url(#linearColors' + i + ')';
          });
        }
      }, {
        key: "creatBreadCrumb",
        value: function creatBreadCrumb(grp1) {
          var arc1 = d3___WEBPACK_IMPORTED_MODULE_2__["arc"]().innerRadius(351).outerRadius(349).startAngle(-1.2).endAngle(-1.9);
          var g = grp1.append("g").attr("id", "gBreadCrumb").attr("transform", "translate(-40 ,15)");
        }
      }, {
        key: "CreateComps",
        value: function CreateComps(oSvg, dta, lvl) {
          var that = this;
          var compLst;
          oSvg.select('.compLst' + lvl).remove();
          compLst = oSvg.append("g").attr('class', 'compList compLst' + lvl).style("display", "block");
          var compC = compLst.append("g").attr("class", 'compLstC' + lvl);
          var compg = compC.selectAll("g").data(dta).enter().append("g").attr("class", "comp").attr("transform", function (d, i) {
            return "rotate(" + (i * 360 / dta.length - 90) + ")";
          }).attr("name", function (d) {
            return d.isin + "_" + d.indexName.replace(/ /g, '_');
          }).on("click", function (elemData) {
            var gblSelId = d3___WEBPACK_IMPORTED_MODULE_2__["select"](this).attr("name"); // that.assgSelDrpVal = "Equities";
            // that.SelTab = "Global";
            // that.SelMode = "Global";
            // that.SeltabFilter = "Global";

            var d = d3___WEBPACK_IMPORTED_MODULE_2__["select"](this).datum(); // if (d3.select("#TimeLine").style("display") != "block") {
            //   d3.select("#btnTimeline").lower();
            //   d3.select("#ggicsLable").raise();
            // }
            // else {
            //   d3.select("#btnTimeline").raise();
            //   d3.select("#ggicsLable").lower();
            // }

            that.fnIndexSelClick(d, "CompClick"); // that.hideSidebar();

            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".sRect1").style("opacity", "1");
            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".sRect").style("opacity", "1");
            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".sRectCompare").style("opacity", "1");
            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".sRectCompareOverlay").style("opacity", "1");
            d3___WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sText").style("opacity", "1");
            d3___WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sTextReverse").style("opacity", "1");
          });
          var SelRes = that.selResData; // var dmin = d3.min(SelRes.map(x => x.marketCap));
          // var dmax = d3.max(SelRes.map(x => x.marketCap));

          var dmean = d3___WEBPACK_IMPORTED_MODULE_2__["mean"](SelRes.map(function (x) {
            return x.marketCap;
          }));
          var dsum = d3___WEBPACK_IMPORTED_MODULE_2__["sum"](SelRes.map(function (x) {
            return x.marketCap;
          }));
          var ResMarketCap = SelRes.map(function (x) {
            return x.marketCap;
          });
          var LimitedCap = ResMarketCap.filter(function (x) {
            return x < dmean && x != null;
          });
          var dlimitedSum = d3___WEBPACK_IMPORTED_MODULE_2__["sum"](LimitedCap); // var rmax = (dmax - dmin) > 100 ? 100 : (dmax - dmin);
          // rmax = rmax < 50 ? 50 : rmax;
          // var h = d3.scaleLinear()
          //   .domain([dmin, dmax])
          //   .range([0, 50]);

          var LimitedMarketCap = compg.append("rect").attr("height", "1px").attr("class", "crect") //.attr("fill", "rgba(100,100,100,.5)") 
          .attr("x", that.radius + 3).attr("width", 0).transition().duration(10).attr("width", function (d) {
            if (d.indexName.indexOf("New Age Alpha") > -1) {
              return "0px";
            } else {
              var wtdwidth = 0;
              var wt = d.marketCap / dlimitedSum * 10000;

              if (d.marketCap < dmean) {
                wtdwidth = wt;
              } else {
                wt = d.marketCap / dsum * 10000;

                if (wt > 18) {
                  wt = 18 + wt / 10;
                }

                wtdwidth = wt;
              }

              if (wtdwidth > 25) {
                wtdwidth = 25 + wtdwidth / 10;
              }

              if (wtdwidth > 40) {
                wtdwidth = 40;
              }

              return wtdwidth + 2;
            }
          });
        }
      }, {
        key: "fnIndexSelClick",
        value: function fnIndexSelClick(d, type) {
          var that = this;
          that.SelIndexName = d.indexName;
          var SelRows = that.selResData.filter(function (x) {
            return x.isin == d.isin;
          });
          var RectOn = d3___WEBPACK_IMPORTED_MODULE_2__["select"](".rectOn");
          var ChkRecton = null;

          if (RectOn.node() != null) {
            ChkRecton = RectOn.node().parentNode.id == "nav-1";
          }

          if (type == "CompClick") {
            ChkRecton = true;
          }

          var strtype = type == "" ? that.FromClick == "ETFClick" ? "ETFCompClick" : that.FromClick == "indexClick" ? "indexCompClick" : that.FromClick : type;
          if (type == "") strtype = that.FromClick == "FIClick" ? "FICompClick" : strtype; // that.loadComponent = false;
          // that.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + d.ticker + ") [" + d3.format(".1f")(d.score) + "%]", strtype, d.stockKey, d.score);
        }
      }, {
        key: "createKnob",
        value: function createKnob() {}
      }, {
        key: "onSelectClick",
        value: function onSelectClick(e) {
          this.selTab = e.target.value;
          this.dataService.selTab.next(this.selTab);
          this.showGrid = true;
          this.dataService.showGrid.next(this.showGrid);
          console.log(this.showGrid);
        }
      }, {
        key: "onSearchInputClick",
        value: function onSearchInputClick(e) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modelCtrl.create({
                      component: _searchtool_searchtool_component__WEBPACK_IMPORTED_MODULE_5__["SearchtoolComponent"],
                      cssClass: "modal-full"
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ToolComponent;
    }();

    ToolComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }];
    };

    ToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tool',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tool.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/tool/tool.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tool.component.scss */
      "./src/app/Components/tool/tool.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])], ToolComponent);
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _Components_i_pad_home_tool_i_pad_home_tool_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Components/i-pad-home-tool/i-pad-home-tool.component */
    "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.ts");
    /* harmony import */


    var _Components_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Components/index/index.component */
    "./src/app/Components/index/index.component.ts");

    var routes = [{
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'home',
        component: _Components_i_pad_home_tool_i_pad_home_tool_component__WEBPACK_IMPORTED_MODULE_4__["IPadHomeToolComponent"]
      }, {
        path: 'investment_solution',
        component: _Components_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"]
      }, {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
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


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _Components_i_pad_home_tool_i_pad_home_tool_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../Components/i-pad-home-tool/i-pad-home-tool.component */
    "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.ts");
    /* harmony import */


    var _Components_index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../Components/index/index.component */
    "./src/app/Components/index/index.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _Components_tool_tool_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../Components/tool/tool.component */
    "./src/app/Components/tool/tool.component.ts");
    /* harmony import */


    var _Components_searchtool_searchtool_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../Components/searchtool/searchtool.component */
    "./src/app/Components/searchtool/searchtool.component.ts");
    /* harmony import */


    var _Components_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../Components/grid/grid.component */
    "./src/app/Components/grid/grid.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _Components_gics_gics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../Components/gics/gics.component */
    "./src/app/Components/gics/gics.component.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], _Components_i_pad_home_tool_i_pad_home_tool_component__WEBPACK_IMPORTED_MODULE_7__["IPadHomeToolComponent"], _Components_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"], _Components_tool_tool_component__WEBPACK_IMPORTED_MODULE_10__["ToolComponent"], _Components_searchtool_searchtool_component__WEBPACK_IMPORTED_MODULE_11__["SearchtoolComponent"], _Components_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"], _Components_gics_gics_component__WEBPACK_IMPORTED_MODULE_14__["GicsComponent"]],
      entryComponents: [_Components_searchtool_searchtool_component__WEBPACK_IMPORTED_MODULE_11__["SearchtoolComponent"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar {\n  border-radius: 50%;\n  padding: 10px;\n  border: 2px solid white;\n  width: 45px;\n  height: 45px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFye1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage() {
        _classCallCheck(this, TabsPage);
      }

      _createClass(TabsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabsPage;
    }();

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=4-es5.js.map