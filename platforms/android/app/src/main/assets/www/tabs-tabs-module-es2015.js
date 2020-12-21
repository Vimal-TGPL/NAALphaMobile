(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/gics/gics.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/gics/gics.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-content>\n    <p>S&P Global Industry Classification Standard  </p>\n  </ion-card-content>\n</ion-card>\n\n<ion-card (click)=\"onSectorClick('Global Universe')\" [style.background]=\"selSector == 'Global Universe'? '#00b9ff': 'transparent'\">\n<ion-card-header>\n  <div><ion-card-subtitle>Global Universe</ion-card-subtitle>\n    <ion-card-title>{{globalGICS.name}} ({{globalGICS.count}})</ion-card-title>\n  </div>\n  <span>\n    <p [style.color]=\"getColor(globalGICS.med)\">{{globalGICS.med}}</p>\n  </span>\n</ion-card-header>\n  <ion-card-content *ngIf=\"selSector == 'Global Universe'\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">H-Factor</ion-col>\n        <ion-col size=\"6\">Companies</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">0-25%</ion-col>\n        <ion-col size=\"6\">{{globalGICS.upto25}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">25-50%</ion-col>\n        <ion-col size=\"6\">{{globalGICS.upto50}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">50-75%</ion-col>\n        <ion-col size=\"6\">{{globalGICS.upto75}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">75-100%</ion-col>\n        <ion-col size=\"6\">{{globalGICS.upto100}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n<ion-card (click)=\"onSectorClick('Index')\" [style.background]=\"selSector == 'Index'? '#00b9ff': 'transparent'\">\n  <ion-card-header>\n    <div><ion-card-subtitle>Index</ion-card-subtitle>\n      <ion-card-title>{{IndexGICS.name}} ({{IndexGICS.count}})</ion-card-title>\n    </div>\n    <span>\n      <p [style.color]=\"getColor(IndexGICS.med)\">{{IndexGICS.med}}</p>\n    </span>\n  </ion-card-header>\n    <ion-card-content *ngIf=\"selSector == 'Index'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">H-Factor</ion-col>\n          <ion-col size=\"6\">Companies</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">0-25%</ion-col>\n          <ion-col size=\"6\">{{IndexGICS.upto25}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">25-50%</ion-col>\n          <ion-col size=\"6\">{{IndexGICS.upto50}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">50-75%</ion-col>\n          <ion-col size=\"6\">{{IndexGICS.upto75}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">75-100%</ion-col>\n          <ion-col size=\"6\">{{IndexGICS.upto100}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/grid/grid.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/grid/grid.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card [style.height]=\"showSort? '85%': '75%'\">\n  <ion-card-header>\n    <ion-card-title>{{selTab == \"ETF's\"? 'Exchange Traded Funds': 'Equities and Fixed Income'}}</ion-card-title>\n    <ion-button (click)=\"onbackClick()\" *ngIf=\"GridType == 'IndexGrid'\" fill=\"outline\" shape=\"round\">\n      <fa-icon [icon]=\"faAngleDoubleLeft\"></fa-icon>\n      {{selCountry.countryName}}\n    </ion-button>\n    <ion-button (click)=\"onCompanybackClick()\" *ngIf=\"GridType == 'CompanyGrid'\" fill=\"outline\" shape=\"round\">\n      <fa-icon [icon]=\"faAngleDoubleLeft\"></fa-icon>\n      back\n    </ion-button>\n  </ion-card-header>\n  <ion-card-content [style.height]=\"GridType == 'CountryGrid'? '85%' : showSort? '65%': '78%'\">\n    <ion-list *ngIf=\"GridType == 'CountryGrid'\" class=\"countryList\">\n      <ion-item *ngFor=\"let item of CountryData\" detail=\"true\" lines=\"none\" (click)=\"onCountryClick(item)\">\n        <div>\n          <span [style.color]=\"getColor(item.scores)\">{{item.scores}}</span>\n          <ion-label>{{item.countryName}}</ion-label>\n        </div>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf=\"GridType == 'IndexGrid'\" class=\"indexList\">\n      <ion-item *ngFor=\"let item of selIndexData\" detail=\"false\" lines=\"none\" (click)=\"onIndexClick(item)\">\n        <div>\n          <span [style.color]=\"getColor(item.scores)\">{{item.scores}}</span>\n          <ion-label>{{item.indexName}}</ion-label>\n        </div>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf=\"GridType == 'CompanyGrid'\" class=\"companyList\">\n      <ion-item *ngFor=\"let item of selCompanyData\" detail=\"false\" lines=\"none\" (click)=\"onCompanyClick(item)\">\n        <div>\n          <span [style.color]=\"getColor(roundValue(item.scores*100))\">{{roundValue(item.scores*100)}}</span>\n          <ion-text>\n            <p>{{item.companyName}}</p>\n            <p>{{item.ticker}}</p>\n          </ion-text>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card-content>\n  <ion-row [ngStyle]=\"{height: GridType == 'CountryGrid'? '3%': showSort? '23%' : '10%'}\">\n    <ion-col>\n      <ion-item *ngIf=\"GridType != 'CountryGrid'\" lines=\"none\" (click)=\"onSortClick()\">\n      <div>\n        <ion-text>\n          <p>Sort by</p>\n          <p>{{selSort}}</p>\n        </ion-text>\n        <ion-icon name=\"chevron-down-circle-outline\"></ion-icon>\n      </div> \n      </ion-item>\n    </ion-col>\n    <ion-col *ngIf=\"showSort\">\n      <hr >\n      <ion-list *ngIf=\"GridType == 'IndexGrid'\">\n        <ion-item *ngFor=\"let item of indexsortList\" lines=\"none\" (click)=\"onSortItemClick(item)\">\n          <ion-label>{{item}}</ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngIf=\"GridType == 'CompanyGrid'\">\n        <ion-item *ngFor=\"let item of companysortlist\" lines=\"none\" (click)=\"onSortItemClick(item)\">\n          <ion-label>{{item}}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"--background: #2e4c99;\r\n  --padding-start: 0;\r\n  --padding-bottom: 0;\r\n  --padding-end: 0;\r\n  --padding-top: 0;\">\r\n    <div style=\"    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 60px;\">\r\n      <img src=\"../../../assets/images/NewAgeAlpha-logo.svg\" alt=\"logo\" style=\"height: 35px;\">\r\n    </div>\r\n    <div style=\"position: absolute; top: 7px; right: 50px;\">\r\n      <div style=\"display: flex; flex-direction: row;\">\r\n        <div class=\"avatar\" (click)=\"profilePopover($event)\">\r\n          <img src=\"../../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content forceOverscroll=false>\r\n  <app-gics *ngIf=\"showGICS\" style=\"        position: absolute;\r\n  left: 10px;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  z-index: 9;\"></app-gics>\r\n  <app-tool></app-tool>\r\n  <app-grid *ngIf=\"showGrid\" style=\"position: absolute;\r\n  right: 5px;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\"></app-grid>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/index/index.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/index/index.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"overallDiv\">\n\n  <div class=\"menu\">\n    <div class=\"logo\">\n      <img src=\"../../../assets/images/NewAgeAlpha-logo.svg\" alt=\"Logo\">\n    </div>\n    <div>\n      <div class=\"menu-item-div\">\n        <span class=\"side-nav-item\" [ngClass]=\"{'item-Active': selectedCountry == item}\"\n          *ngFor=\"let item of CountryClasificationList\" (click)=\"OnItemClick(item)\">\n          <ion-label>{{item}}</ion-label>\n        </span>\n      </div>\n      <span class=\"divider-span\">\n        <hr></span>\n      <span class=\"menu-nav-span\">\n        <ion-item lines=\"none\" [routerLink]=\"['/menu/menu/home']\" routerDirection=\"root\"\n           detail=false>\n          <img src=\"../../../assets/images/H-Factor Icon solid-blue.svg\" alt=\"home\" style=\"height: 65px;\">\n        </ion-item>\n      </span>\n    </div>\n  </div>\n  <div class=\"content-div\">\n    <div class=\"section1-div\">\n      <div class=\"title-Div\">\n        <ion-text>\n          <h1>H-Factor Indexes</h1>\n        </ion-text>\n        <div class=\"profile\">\n          <div class=\"avatar\" (click)=\"profilePopover($event)\">\n            <img src=\"../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\n          </div>\n        </div>\n      </div>\n\n      <ion-text class=\"sub-title\">\n        <p>To build an index, we start with one of\n          S&P<sup><img src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup> Dow\n          Jones<sup><img src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup>\n          Indexes. We then develop an investment methodology which is incorporated in a rule book. These documents are\n          forwarded to S&P<sup><img src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup> for validation\n          and history calculation. On a quarterly basis we supply\n          H-Factor to S&P<sup><img src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup> who rebalance\n          the indexes.<br><br>\n          These S&P<sup><img src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup> Dow Jones<sup><img\n              src=\"../../../assets/images/RegisteredTM.svg\" alt=\"Registered\"></sup> calculated indexes then form the\n          basis of our SMAs and all\n          of our investment products.</p>\n      </ion-text>\n    </div>\n\n    <div class=\"section2-div\">\n      <ion-text>\n        <h1>{{selectedCountry}}</h1>\n      </ion-text>\n      <div *ngIf=\"SelectedData\">\n        <ion-item id=\"indexSelect\" lines='none'>\n          <ion-select [value]=\"SelectedData.indexName\" interface=\"popover\" (ionChange)=\"onIndexChange($event)\">\n            <ion-select-option [value]=\"item.indexName\"\n              *ngFor=\"let item of Index[CountryClasificationList.indexOf(selectedCountry)]\">{{item.indexName}} ({{item.indexCode}})\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n    </div>\n    <div class=\"section3-div\">\n      <mat-tab-group>\n        <mat-tab label=\"Perfomance\">\n          <div class=\"perfomance-div\">\n            <ion-card>\n              <ion-card-content>\n                <div *ngIf=\"!selectedIndexData\" class=\"loader\">\n                  <img src=\"../../../assets/images/NAA.gif\" alt=\"Loader\">\n                </div>\n                <div *ngIf=\"selectedIndexData\" style=\"width: 100%;\">\n                  <ion-text>\n                    <p class=\"title-p\">\n                      {{selectedIndexData.indexName}}</p>\n                  </ion-text>\n                  <ion-text>\n                    <p class=\"desc-p\" [innerHTML]=\"get_desc(selectedIndexData.description)\"></p>\n                  </ion-text>\n                  <ion-text>\n                    <p class=\"perf-date-p\">performace : As of {{selectedIndexData.date}}</p>\n                  </ion-text>\n                  <div>\n                    <ion-grid>\n                      <ion-row class=\"row-header\">\n                        <ion-col size=\"1.5\" class=\"column-item col-header no-border item-left-center\">Name</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">Value</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">Daily</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">YTD</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">1 Year</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">3 Year*</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">5 Year*</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">10 Year*</ion-col>\n                        <ion-col class=\"column-item col-header item-center\">Cumulative Inception</ion-col>\n                        <ion-col class=\"column-item col-header item-center\">Annualized Inception</ion-col>\n                      </ion-row>\n                      <ion-row class=\"row-item\">\n                        <ion-col size=\"1.5\" class=\"column-item no-border item-left-center\">\n                          {{selectedIndexData.indexName}}</ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.value)}}</ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">\n                          {{roundOf(selectedIndexData.dailyReturn*100)}}%</ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.ytdReturn*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.y1Return*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.y3Return*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.y5Return*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.y10Return*100)}}%\n                        </ion-col>\n                        <ion-col class=\"column-item item-center\">{{roundOf(selectedIndexData.cumReturns*100)}}%\n                        </ion-col>\n                        <ion-col class=\"column-item item-center\">{{roundOf(selectedIndexData.annReturns*100)}}%\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </div>\n                  <div class=\"row2\">\n                    <ion-grid fixed>\n                      <ion-row class=\"row-header\">\n                        <ion-col size=\"1.5\" class=\"column-item col-header no-border item-left-center\">Name</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2019</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2018</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2017</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2016</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2015</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2014</ion-col>\n                        <ion-col size=\"1\" class=\"column-item col-header item-center\">2013</ion-col>\n                        <ion-col class=\"column-item col-header item-center\">2012</ion-col>\n                        <ion-col class=\"column-item col-header item-center\">2011</ion-col>\n                        <ion-col class=\"column-item col-header item-center\">2010</ion-col>\n                      </ion-row>\n                      <ion-row class=\"row-item\">\n                        <ion-col size=\"1.5\" class=\"column-item no-border item-left-center\">\n                          {{selectedIndexData.indexName}}</ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year1*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year2*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year3*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year4*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year5*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year6*100)}}%\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"column-item item-center\">{{roundOf(selectedIndexData.year7*100)}}%\n                        </ion-col>\n                        <ion-col class=\"column-item item-center\">{{roundOf(selectedIndexData.year8*100)}}%</ion-col>\n                        <ion-col class=\"column-item item-center\">{{roundOf(selectedIndexData.year9*100)}}%</ion-col>\n                        <ion-col class=\"column-item item-center\">{{roundOf(selectedIndexData.year10*100)}}%</ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </div>\n                  <div class=\"dates-div\">\n                    <p>First value date : {{selectedIndexData.firstValueDt}}\n                    </p>\n                    <p class=\"p-padding\">Launch date :\n                      {{selectedIndexData.inception}}</p>\n                  </div>\n                  <div class=\"image-div\">\n                    <img src=\"../../../assets/images/S&P_1.svg\" alt=\"S&P\">\n                  </div>\n                </div>\n\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </mat-tab>\n        <mat-tab disabled label=\"Construction\"> Content 2 </mat-tab>\n      </mat-tab-group>\n\n    </div>\n\n  </div>\n\n</div> -->\n\n<ion-header>\n  <ion-toolbar style=\"--background: #2e4c99;\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-top: 0;\">\n    <div style=\"    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 60px;\">\n      <img src=\"../../../assets/images/NewAgeAlpha-logo.svg\" alt=\"logo\" style=\"height: 35px;\">\n    </div>\n    <div style=\"position: absolute; top: 7px; right: 50px;\">\n      <div style=\"display: flex; flex-direction: row;\">\n        <div class=\"avatar\" (click)=\"profilePopover($event)\">\n          <img src=\"../../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\n        </div>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content forceOverscroll=false>\n  <div class=\"parentDiv\">\n    <ion-card class=\"leftCard\">\n      <ion-card-content>\n        Awesome content\n      </ion-card-content>\n    </ion-card>\n  <ion-card class=\"rightCard\">\n    <ion-card-content>\n      <div>\n        <ion-item lines=\"none\">\n          <ion-select value=\"peperoni\" multiple=\"false\" placeholder=\"Select Pizza\" interface=\"popover\">\n            <ion-select-option value=\"peperoni\">Peperoni</ion-select-option>\n            <ion-select-option value=\"hawaii\">Hawaii</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/searchtool/searchtool.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/searchtool/searchtool.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\" (click)=\"onbackClick($event)\"></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar animated [placeholder]=\"selTab != 'ETF\\'s' ? 'Ticker or company name' : 'ETF ticker or name'\" [(ngModel)]=\"searchText\" inputmode=\"text\" type=\"text\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"500\" showCancelButton=\"never\"></ion-searchbar>\n  </ion-toolbar>\n  <ion-segment [value]=\"selTab\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"Equities & FI\">\n      <ion-label>Equities & Fixed Income</ion-label>\n    </ion-segment-button>\n    <!-- <ion-segment-button value=\"Fixed Income\">\n      <ion-label>Fixed Income</ion-label>\n    </ion-segment-button> -->\n    <ion-segment-button value=\"ETF's\">\n      <ion-label>Exchange Traded Funds</ion-label>\n    </ion-segment-button>\n    <!-- <ion-segment-button value=\"NAA Indexes\">\n      <ion-label>NAA Indexes</ion-label>\n    </ion-segment-button> -->\n  </ion-segment>  \n</ion-header>\n\n<ion-content forceOverscroll=false>\n  <div *ngIf=\"_searchRes\" >\n    <ion-item *ngFor=\"let item of _searchRes\" (click)=\"onItemSelect(item)\">\n        <ion-text *ngIf=\"selTab != 'ETF\\'s'\" style=\"display: flex;\n        flex-direction: row;\n        align-items: center;\n        width: 100%;\">\n          <p style=\"width: 45%;\"><span>{{item.companyName}}</span><span>&nbsp;&nbsp;({{item.ticker}})</span></p>\n          <p style=\"width: 45%;\">{{item.indexName}}</p>          \n          <p style=\"width: 10%;\">{{item.country}}</p>\n        </ion-text>\n        <ion-text *ngIf=\"selTab == 'ETF\\'s'\" style=\"display: flex;\n        flex-direction: row;\n        align-items: center;\n        width: 100%;\">\n          <p style=\"width: 45%;\"><span>{{item.etfName}}</span><span>&nbsp;&nbsp;({{item.ticker}})</span></p>\n          <p style=\"width: 45%;\">ETF</p>          \n          <p style=\"width: 10%;\">{{item.category}}</p>\n        </ion-text>\n    </ion-item>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/tool/tool.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/tool/tool.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"searchDiv\">\n  <ion-item lines=none>\n    <img slot=\"start\" src=\"../../../assets/images/search.svg\" alt=\"search\" *ngIf=\"selTab\">\n    <ion-input *ngIf=\"selTab\" readonly=\"true\" type=\"text\" [placeholder]=\"selTab != 'ETF\\'s' ? 'Ticker or company name' : 'ETF ticker or name'\" (tap)='onSearchInputClick($event)'  (click)=\"onSearchInputClick($event)\"></ion-input>\n    <!-- <ion-label (click)=\"onSearchInputClick($event)\">{{selTab != \"ETF's\"?'Ticker or company name':'ETF ticker or name'}}</ion-label> -->\n    <ion-select slot=\"end\" [selectedText]=\"selTab\" interface=\"popover\" placeholder='Please select' [value]=\"selTab\" multiple=\"false\" (ionChange)=\"onSelectClick($event)\" [ngClass]=\"{'first-select': selTab.length == 0}\">\n        <ion-select-option style=\"width: 400px;\" value=\"Equities & FI\">Equities & Fixed Income</ion-select-option>\n        <ion-select-option value=\"ETF's\">Exchange Tradeed Funds</ion-select-option>\n        <!-- <ion-select-option value=\"ETF's\">ETF's</ion-select-option>\n        <ion-select-option value=\"NAA Indexes\">NAA Indexes</ion-select-option> -->\n    </ion-select>\n  </ion-item>\n</div>\n<svg preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"200 70 1220 700\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n  <g id=\"gchart\" transform=\"translate(810 ,420)\"></g>\n  <g class=\"Homecenter\" style=\"opacity:0;\" transform=\"translate(810,300)\">\n    <text y=\"45\" style=\"letter-spacing:1px;text-align:center;font-family:'Open Sans Regular';fill:#00b9ff;text-anchor:middle;font-size:11px;font-weight:500;\">WELCOME TO THE</text>\n    <text y=\"80\" style=\"text-align:center;font-family:'Open Sans Bold';fill:#00b9ff;text-anchor:middle;text-align:center;font-size:25px;font-weight:500;\" class=\"grey-16 blue-heading\">\n      <tspan x=\"0\">H-Factor System</tspan>\n    </text>\n    <circle cx=\"0\" cy=\"0\" r=\"32\" stroke=\"#00b9ff\" stroke-width=\"1\" fill=\"transparent\" transform=\"translate(-50, 175)\" />\n    <circle cx=\"0\" cy=\"0\" r=\"3\" stroke=\"#00b9ff\" stroke-width=\"0\" fill=\"#00b9ff\" transform=\"translate(-50, 207)\" />\n    <text y=\"183\" style=\"text-align:center;font-family:'Open Sans Bold';fill:#00b9ff;text-anchor:middle;text-align:center;font-size:19px;font-weight:500;\" class=\"grey-16 blue-heading\">\n      <tspan x=\"-47\">Avoid </tspan><tspan x=\"34\" style=\"font-family: Open Sans Semibold;\">the Losers</tspan>\n    </text>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"flash\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"investment_solution\">\n      <ion-icon name=\"apps\"></ion-icon>\n      <ion-label>Investment Solution</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"send\"></ion-icon>\n      <ion-label>Tab Three</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/Components/gics/gics.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Components/gics/gics.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card:nth-child(1) {\n  margin: 0;\n  margin-left: 25px;\n  border-radius: 20px; }\n  ion-card:nth-child(1) ion-card-content {\n    padding: 3px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  ion-card:nth-child(1) ion-card-content p {\n      font-size: 12px;\n      font-family: Open Sans SemiBold;\n      color: #00b9ff;\n      margin: 0; }\n  ion-card:nth-child(2) {\n  margin: 0;\n  margin-top: 50px;\n  margin-left: 75px;\n  border-radius: 25px;\n  background: transparent;\n  border: 2px solid #00b9ff;\n  width: 90%; }\n  ion-card:nth-child(2) ion-card-header {\n    padding: 0 0px 0 10px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between; }\n  ion-card:nth-child(2) ion-card-header div ion-card-subtitle {\n      font-size: 12px;\n      text-transform: inherit;\n      font-family: Open Sans SemiBold;\n      color: #eee; }\n  ion-card:nth-child(2) ion-card-header div ion-card-title {\n      font-size: 14px;\n      font-family: Open Sans SemiBold;\n      color: #fff; }\n  ion-card:nth-child(2) ion-card-header span {\n      height: 45px;\n      width: 45px;\n      background: #fff;\n      display: flex;\n      justify-content: center;\n      border-radius: 25px;\n      margin-right: 0px; }\n  ion-card:nth-child(2) ion-card-content {\n    padding: 10px 10px 10px 10px; }\n  ion-card:nth-child(2) ion-card-content ion-grid ion-row ion-col {\n      padding: 0;\n      text-align: center;\n      color: #fff;\n      font-size: 12px;\n      font-family: Open Sans Regular; }\n  ion-card:nth-child(2) ion-card-content ion-grid ion-row:first-child ion-col {\n      font-family: Open Sans SemiBold; }\n  ion-card:nth-child(3) {\n  margin: 0;\n  margin-top: 25px;\n  margin-left: 50px;\n  border-radius: 25px;\n  background: transparent;\n  border: 2px solid #00b9ff;\n  width: 90%; }\n  ion-card:nth-child(3) ion-card-header {\n    padding: 0 0px 0 10px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between; }\n  ion-card:nth-child(3) ion-card-header div ion-card-subtitle {\n      font-size: 12px;\n      text-transform: inherit;\n      font-family: Open Sans SemiBold;\n      color: #eee; }\n  ion-card:nth-child(3) ion-card-header div ion-card-title {\n      font-size: 14px;\n      font-family: Open Sans SemiBold;\n      color: #fff; }\n  ion-card:nth-child(3) ion-card-header span {\n      height: 45px;\n      width: 45px;\n      background: #fff;\n      display: flex;\n      justify-content: center;\n      border-radius: 25px;\n      margin-right: 0px; }\n  ion-card:nth-child(3) ion-card-content {\n    padding: 10px 10px 10px 10px; }\n  ion-card:nth-child(3) ion-card-content ion-grid ion-row ion-col {\n      padding: 0;\n      text-align: center;\n      color: #fff;\n      font-size: 12px;\n      font-family: Open Sans Regular; }\n  ion-card:nth-child(3) ion-card-content ion-grid ion-row:first-child ion-col {\n      font-family: Open Sans SemiBold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9naWNzL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcQ29tcG9uZW50c1xcZ2ljc1xcZ2ljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7RUFIdkI7SUFNUSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTtFQVQvQjtNQVlZLGVBQWU7TUFDZiwrQkFBK0I7TUFDL0IsY0FBYztNQUNkLFNBQVMsRUFBQTtFQUtyQjtFQUNJLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFVBQVUsRUFBQTtFQVBkO0lBVVEscUJBQXFCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBO0VBZGxDO01Ba0JZLGVBQWU7TUFDZix1QkFBdUI7TUFDdkIsK0JBQStCO01BQy9CLFdBQVcsRUFBQTtFQXJCdkI7TUF5QlksZUFBZTtNQUN2QiwrQkFBK0I7TUFDL0IsV0FBVyxFQUFBO0VBM0JmO01BZ0NRLFlBQVk7TUFDWixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGlCQUFpQixFQUFBO0VBdEN6QjtJQTJDUSw0QkFBNEIsRUFBQTtFQTNDcEM7TUErQ29CLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGVBQWU7TUFDZiw4QkFBOEIsRUFBQTtFQW5EbEQ7TUF5RG9CLCtCQUErQixFQUFBO0VBT25EO0VBQ0ksU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsVUFBVSxFQUFBO0VBUGQ7SUFVUSxxQkFBcUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7RUFkbEM7TUFrQlksZUFBZTtNQUNmLHVCQUF1QjtNQUN2QiwrQkFBK0I7TUFDL0IsV0FBVyxFQUFBO0VBckJ2QjtNQXlCWSxlQUFlO01BQ3ZCLCtCQUErQjtNQUMvQixXQUFXLEVBQUE7RUEzQmY7TUFnQ1EsWUFBWTtNQUNaLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsaUJBQWlCLEVBQUE7RUF0Q3pCO0lBMkNRLDRCQUE0QixFQUFBO0VBM0NwQztNQStDb0IsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsZUFBZTtNQUNmLDhCQUE4QixFQUFBO0VBbkRsRDtNQXlEb0IsK0JBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2dpY3MvZ2ljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkOm50aC1jaGlsZCgxKXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwYjlmZjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmQ6bnRoLWNoaWxkKDIpe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwYjlmZjtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMHB4IDAgMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBkaXZ7XHJcbiAgICAgICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbntcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGlvbi1ncmlke1xyXG4gICAgICAgICAgICBpb24tcm93e1xyXG4gICAgICAgICAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tcm93OmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2FyZDpudGgtY2hpbGQoMyl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBiOWZmO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMCAwcHggMCAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGRpdntcclxuICAgICAgICBpb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGFue1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgaW9uLWdyaWR7XHJcbiAgICAgICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1yb3c6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/gics/gics.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/gics/gics.component.ts ***!
  \***************************************************/
/*! exports provided: GicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GicsComponent", function() { return GicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shareddata/data.service */ "./src/app/services/shareddata/data.service.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");




let GicsComponent = class GicsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this._selIndexSub = this.dataService.selIndex.subscribe(d => {
            this.selIndex = d;
            console.log(this.selIndex);
        });
        this._globalGICSsub = this.dataService.globalGICS.subscribe(d => {
            this.globalGICS = d;
            console.log(this.globalGICS);
        });
        this._IndexWiseSub = this.dataService.indexWise.subscribe(d => {
            this.IndexWise = d;
            console.log(this.IndexWise);
            var temp = {
                name: this.selIndex.indexName,
                count: this.IndexWise[this.selIndex.indexName].length,
                med: this.dataService.roundValue(this.dataService.getMed(this.IndexWise[this.selIndex.indexName]) * 100),
                upto25: this.IndexWise[this.selIndex.indexName].filter(i => (i.scores * 100) < 25).length,
                upto50: this.IndexWise[this.selIndex.indexName].filter(i => (i.scores * 100) >= 25 && (i.scores * 100) < 50).length,
                upto75: this.IndexWise[this.selIndex.indexName].filter(i => (i.scores * 100) >= 50 && (i.scores * 100) < 75).length,
                upto100: this.IndexWise[this.selIndex.indexName].filter(i => (i.scores * 100) >= 75 && (i.scores * 100) < 100).length
            };
            this.IndexGICS = temp;
            console.log(this.IndexGICS);
        });
        this._secLevelSub = dataService.secLevel.subscribe(d => {
            this.secLevel = d;
            if (this.secLevel == 2) {
                this.selSector = 'Index';
            }
        });
    }
    ngOnInit() { }
    getColor(med) {
        let gc100 = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        return gc100(med);
    }
    onSectorClick(sec) {
        this.selSector = sec;
    }
};
GicsComponent.ctorParameters = () => [
    { type: src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
GicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/gics/gics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gics.component.scss */ "./src/app/Components/gics/gics.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], GicsComponent);



/***/ }),

/***/ "./src/app/Components/grid/grid.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Components/grid/grid.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  width: calc(100vw - 1075px);\n  height: 75%;\n  border-radius: 25px;\n  --background: transparent;\n  border: 2px solid #00b9ff;\n  transition: 0.3s; }\n  ion-card ion-card-header {\n    background: #00b9ff;\n    height: 12%;\n    padding: 12px 20px 0 20px; }\n  ion-card ion-card-header ion-card-title {\n      font-size: 16px;\n      font-family: Open Sans SemiBold;\n      color: #ffffff; }\n  ion-card ion-card-header ion-button {\n      height: 25px;\n      font-size: 12px;\n      --padding-start: 10px;\n      --padding-end: 10px;\n      display: inline-flex;\n      align-items: center;\n      --padding-top: 2px;\n      --padding-bottom: 2px;\n      -webkit-margin-start: 0;\n              margin-inline-start: 0;\n      -webkit-margin-end: 0;\n              margin-inline-end: 0;\n      color: #fff;\n      --border-color: #fff;\n      margin-top: 10px;\n      font-family: Open Sans SemiBold; }\n  ion-card ion-card-header ion-button fa-icon {\n        margin-right: 5px; }\n  ion-card ion-card-content {\n    padding: 10px; }\n  ion-card ion-card-content .countryList {\n      background: transparent; }\n  ion-card ion-card-content .countryList ion-item {\n        --background: #00b9ff;\n        border-radius: 25px;\n        margin-bottom: 10px;\n        color: #ffffff;\n        --padding-start: 0px;\n        --padding-end: 0px; }\n  ion-card ion-card-content .countryList ion-item div {\n          display: flex;\n          align-items: center;\n          flex-direction: row; }\n  ion-card ion-card-content .countryList ion-item div span {\n            height: 45px;\n            width: 45px;\n            background: #ffffff;\n            border-radius: 50%;\n            border: 2px solid #224b9e;\n            margin-left: -1px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-right: 10px;\n            font-size: 12px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-card-content .countryList ion-item div ion-label {\n            font-size: 14px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-card-content .countryList ion-item::part(detail-icon) {\n        opacity: 1;\n        color: #ffffff; }\n  ion-card ion-card-content .indexList {\n      background: transparent; }\n  ion-card ion-card-content .indexList ion-item {\n        --background: #00b9ff;\n        border-radius: 25px;\n        margin-bottom: 10px;\n        color: #ffffff;\n        --padding-start: 0px;\n        --padding-end: 0px; }\n  ion-card ion-card-content .indexList ion-item div {\n          display: flex;\n          align-items: center;\n          flex-direction: row; }\n  ion-card ion-card-content .indexList ion-item div span {\n            height: 45px;\n            width: 45px;\n            background: #ffffff;\n            border-radius: 50%;\n            border: 2px solid #224b9e;\n            margin-left: -1px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-right: 10px;\n            font-size: 12px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-card-content .indexList ion-item div ion-label {\n            font-size: 14px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-card-content .indexList ion-item::part(detail-icon) {\n        opacity: 1;\n        color: #ffffff; }\n  ion-card ion-card-content .companyList {\n      background: transparent; }\n  ion-card ion-card-content .companyList ion-item {\n        --background: #00b9ff;\n        border-radius: 25px;\n        margin-bottom: 10px;\n        color: #ffffff;\n        --padding-start: 0px;\n        --padding-end: 0px; }\n  ion-card ion-card-content .companyList ion-item div {\n          display: flex;\n          align-items: center;\n          flex-direction: row;\n          width: 100%; }\n  ion-card ion-card-content .companyList ion-item div span {\n            height: 45px;\n            width: 45px;\n            background: #ffffff;\n            border-radius: 50%;\n            border: 2px solid #224b9e;\n            margin-left: -1px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-right: 10px;\n            font-size: 12px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-card-content .companyList ion-item div ion-text {\n            color: #ffffff;\n            width: 80%; }\n  ion-card ion-card-content .companyList ion-item div ion-text p {\n              width: 95%;\n              white-space: nowrap;\n              text-overflow: ellipsis;\n              overflow: hidden;\n              margin: 0; }\n  ion-card ion-row {\n    background: #00b9ff; }\n  ion-card ion-row hr {\n      height: 0px;\n      margin: 0px;\n      border: 1px solid #ffffff; }\n  ion-card ion-row ion-col:last-child {\n      height: 70%; }\n  ion-card ion-row ion-col:last-child ion-list {\n        height: 100%;\n        overflow: auto; }\n  ion-card ion-row ion-col:last-child ion-list ion-item {\n          --min-height: 35px; }\n  ion-card ion-row ion-col:last-child ion-list ion-item ion-label {\n            margin: 0;\n            margin-bottom: 5px;\n            color: #fff;\n            font-size: 14px;\n            font-family: Open Sans SemiBold; }\n  ion-card ion-row ion-item {\n      --background: #00b9ff;\n      --padding-start: 10px;\n      --padding-end: 0px;\n      --inner-padding-end: 0; }\n  ion-card ion-row ion-item div {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: flex-end; }\n  ion-card ion-row ion-item div ion-text {\n          color: #fff; }\n  ion-card ion-row ion-item div ion-text p:first-child {\n            margin: 0;\n            margin-top: 5px;\n            font-family: Omnes;\n            font-size: 14px; }\n  ion-card ion-row ion-item div ion-text p:last-child {\n            margin: 0;\n            margin-top: 10px;\n            font-family: Open Sans SemiBold;\n            font-size: 14px; }\n  ion-card ion-row ion-item div ion-icon {\n          height: 35px;\n          width: 35px;\n          color: #ffffff; }\n  ion-card-content ion-list {\n  height: 100%;\n  overflow: auto; }\n  ion-card-content ion-list::-webkit-scrollbar {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ncmlkL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcQ29tcG9uZW50c1xcZ3JpZFxcZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlCQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBO0VBTnBCO0lBUVEsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUIsRUFBQTtFQVZqQztNQWFZLGVBQWU7TUFDZiwrQkFBK0I7TUFDL0IsY0FBYyxFQUFBO0VBZjFCO01BbUJZLFlBQVk7TUFDWixlQUFlO01BQ2YscUJBQWdCO01BQ2hCLG1CQUFjO01BQ2Qsb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQixrQkFBYztNQUNkLHFCQUFpQjtNQUNqQix1QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLHFCQUFvQjtjQUFwQixvQkFBb0I7TUFDcEIsV0FBVztNQUNYLG9CQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLCtCQUErQixFQUFBO0VBaEMzQztRQW1DZ0IsaUJBQWlCLEVBQUE7RUFuQ2pDO0lBd0NRLGFBQWEsRUFBQTtFQXhDckI7TUEyQ1ksdUJBQXVCLEVBQUE7RUEzQ25DO1FBOENnQixxQkFBYTtRQUNiLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLG9CQUFnQjtRQUNoQixrQkFBYyxFQUFBO0VBbkQ5QjtVQXNEb0IsYUFBYTtVQUNiLG1CQUFtQjtVQUNuQixtQkFBbUIsRUFBQTtFQXhEdkM7WUEyRHdCLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQix5QkFBeUI7WUFDekIsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsK0JBQStCLEVBQUE7RUF0RXZEO1lBMEV3QixlQUFlO1lBQ2YsK0JBQStCLEVBQUE7RUEzRXZEO1FBaUZnQixVQUFVO1FBQ1YsY0FBYyxFQUFBO0VBbEY5QjtNQXVGWSx1QkFBdUIsRUFBQTtFQXZGbkM7UUEwRmdCLHFCQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2Qsb0JBQWdCO1FBQ2hCLGtCQUFjLEVBQUE7RUEvRjlCO1VBa0dvQixhQUFhO1VBQ2IsbUJBQW1CO1VBQ25CLG1CQUFtQixFQUFBO0VBcEd2QztZQXVHd0IsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLHlCQUF5QjtZQUN6QixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZiwrQkFBK0IsRUFBQTtFQWxIdkQ7WUFzSHdCLGVBQWU7WUFDZiwrQkFBK0IsRUFBQTtFQXZIdkQ7UUE2SGdCLFVBQVU7UUFDVixjQUFjLEVBQUE7RUE5SDlCO01BbUlZLHVCQUF1QixFQUFBO0VBbkluQztRQXNJZ0IscUJBQWE7UUFDYixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxvQkFBZ0I7UUFDaEIsa0JBQWMsRUFBQTtFQTNJOUI7VUE4SW9CLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsbUJBQW1CO1VBQ25CLFdBQVcsRUFBQTtFQWpKL0I7WUFvSndCLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQix5QkFBeUI7WUFDekIsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsK0JBQStCLEVBQUE7RUEvSnZEO1lBbUt3QixjQUFjO1lBQ2QsVUFBVSxFQUFBO0VBcEtsQztjQXVLNEIsVUFBVTtjQUNWLG1CQUFtQjtjQUNuQix1QkFBdUI7Y0FDdkIsZ0JBQWdCO2NBQ2hCLFNBQVMsRUFBQTtFQTNLckM7SUFvTFEsbUJBQW1CLEVBQUE7RUFwTDNCO01BdUxZLFdBQVc7TUFDWCxXQUFXO01BQ1gseUJBQXlCLEVBQUE7RUF6THJDO01BNkxZLFdBQVcsRUFBQTtFQTdMdkI7UUFnTWdCLFlBQVk7UUFDWixjQUFjLEVBQUE7RUFqTTlCO1VBb01vQixrQkFBYSxFQUFBO0VBcE1qQztZQXVNd0IsU0FBUztZQUNULGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsZUFBZTtZQUNmLCtCQUErQixFQUFBO0VBM012RDtNQWtOWSxxQkFBYTtNQUNiLHFCQUFnQjtNQUNoQixrQkFBYztNQUNkLHNCQUFvQixFQUFBO0VBck5oQztRQXdOZ0IsV0FBVztRQUNYLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQThCO1FBQzlCLHFCQUFxQixFQUFBO0VBNU5yQztVQStOb0IsV0FBVyxFQUFBO0VBL04vQjtZQWlPd0IsU0FBUztZQUNULGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsZUFBZSxFQUFBO0VBcE92QztZQXVPd0IsU0FBUztZQUNULGdCQUFnQjtZQUNoQiwrQkFBK0I7WUFDL0IsZUFBZSxFQUFBO0VBMU92QztVQStPb0IsWUFBWTtVQUNaLFdBQVc7VUFDWCxjQUFjLEVBQUE7RUFTbEM7RUFFUSxZQUFZO0VBQ1osY0FBYyxFQUFBO0VBSHRCO0VBT1EsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTA3NXB4KTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBiOWZmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiOWZmO1xyXG4gICAgICAgIGhlaWdodDogMTIlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweCAwIDIwcHg7XHJcblxyXG4gICAgICAgIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDJweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG5cclxuICAgICAgICAgICAgZmEtaWNvbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICAuY291bnRyeUxpc3R7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjRiOWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pdGVtOjpwYXJ0KGRldGFpbC1pY29uKXtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZGV4TGlzdHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzIyNGI5ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWl0ZW06OnBhcnQoZGV0YWlsLWljb24pe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29tcGFueUxpc3R7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjRiOWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiOWZmO1xyXG5cclxuICAgICAgICBocntcclxuICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWNvbDpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcclxuXHJcbiAgICAgICAgICAgIGlvbi1saXN0e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgLS1taW4taGVpZ2h0OiAzNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcblxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi10ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT21uZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcDpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIGlvbi1saXN0e1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/grid/grid.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shareddata/data.service */ "./src/app/services/shareddata/data.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");





let GridComponent = class GridComponent {
    constructor(dataService) {
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
        this._seltabSub = this.dataService.selTab.subscribe(d => {
            this.selTab = d;
            console.log(this.selTab);
            if (this.selTab == 'Equities & FI') {
                this._dataSub = this.dataService.dbScore.subscribe(d => {
                    this.data = d;
                    this.indexClassifier();
                    // this.countryClassifier();
                    // console.log(d);
                });
            }
        });
        this._showGICSSub = this.dataService.showGICS.subscribe(d => {
            this.showGICS = d;
        });
        this._secLevelSub = this.dataService.secLevel.subscribe(d => {
            this.secLevel = d;
        });
    }
    ngOnInit() { }
    countryClassifier() {
        // var temp = 
    }
    indexClassifier() {
        let temp = this.data.reduce((r, a) => {
            // console.log('a',a);
            // console.log('r',r);
            r[a.indexName] = [...r[a.indexName] || [], a];
            return r;
        }, {});
        this.IndexWise = temp;
        console.log(this.IndexWise);
        this.dataService.indexWise.next(this.IndexWise);
        var indexTemp = this.data.map(item => item.indexName);
        this.TotalIndex = indexTemp.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
        // console.log(this.TotalIndex);
        this.eqIndexList = [];
        this.TotalIndex.forEach(element => {
            if (!element.includes('New Age Alpha')) {
                this.eqIndexList.push(element);
            }
        });
        // console.log(this.eqIndexList);
        this.eqIndexData = [];
        this.eqIndexList.forEach(element => {
            var inttemp = {
                indexName: element,
                scores: this.roundValue(this.getMed(temp[element]) * 100),
                countryGroup: temp[element][0].countrygroup
            };
            this.eqIndexData.push(inttemp);
        });
        console.log(this.eqIndexData);
        var tempcountry = this.eqIndexData.map(item => item.countryGroup);
        var totalCountry = tempcountry.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
        // console.log(totalCountry);
        this.CountryData = [];
        totalCountry.forEach(element => {
            var countrytemp = {
                countryName: element,
                scores: this.roundValue(this.getMed(this.eqIndexData.filter(i => i.countryGroup == element)))
            };
            this.CountryData.push(countrytemp);
        });
        this.CountryData.sort((a, b) => {
            return a.scores - b.scores;
        });
        console.log(this.CountryData);
        this.GridType = 'CountryGrid';
    }
    onCountryClick(d) {
        this.GridType = 'IndexGrid';
        this.selSort = this.indexsortList[2];
        console.log(d);
        this.selCountry = d;
        this.selIndexData = this.eqIndexData.filter(i => i.countryGroup == d.countryName);
        this.selIndexData.sort((a, b) => {
            return a.scores - b.scores;
        });
        console.log(this.selIndexData);
    }
    onIndexClick(d) {
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
    onCompanyClick(d) {
        console.log(d);
    }
    onbackClick() {
        this.GridType = 'CountryGrid';
        if (this.showSort) {
            this.showSort = false;
        }
    }
    onCompanybackClick() {
        this.GridType = 'IndexGrid';
        if (this.showSort) {
            this.showSort = false;
        }
        if (this.showGICS) {
            this.showGICS = false;
            this.dataService.showGICS.next(this.showGICS);
        }
    }
    onSortItemClick(item) {
        this.selSort = item;
        console.log(item);
        if (this.GridType == 'IndexGrid') {
            if (item == this.indexsortList[0]) {
                this.selIndexData.sort((a, b) => {
                    return a.indexName.localeCompare(b.indexName);
                });
            }
            else if (item == this.indexsortList[1]) {
                this.selIndexData.sort((a, b) => {
                    return b.indexName.localeCompare(a.indexName);
                });
            }
            else if (item == this.indexsortList[2]) {
                this.selIndexData.sort((a, b) => {
                    return a.scores - b.scores;
                });
            }
            else if (item == this.indexsortList[3]) {
                this.selIndexData.sort((a, b) => {
                    return b.scores - a.scores;
                });
            }
        }
        else if (this.GridType == 'CompanyGrid') {
            if (item == this.companysortlist[0]) {
                this.selCompanyData.sort((a, b) => {
                    return a.companyName.localeCompare(b.companyName);
                });
            }
            else if (item == this.companysortlist[1]) {
                this.selCompanyData.sort((a, b) => {
                    return b.companyName.localeCompare(a.companyName);
                });
            }
            else if (item == this.companysortlist[2]) {
                this.selCompanyData.sort((a, b) => {
                    return a.scores - b.scores;
                });
            }
            else if (item == this.companysortlist[3]) {
                this.selCompanyData.sort((a, b) => {
                    return b.scores - a.scores;
                });
            }
            else if (item == this.companysortlist[4]) {
                this.selCompanyData.sort((a, b) => {
                    return a.ticker.localeCompare(b.ticker);
                });
            }
            else if (item == this.companysortlist[5]) {
                this.selCompanyData.sort((a, b) => {
                    return b.ticker.localeCompare(a.ticker);
                });
            }
        }
        if (this.showSort) {
            this.showSort = false;
        }
    }
    getMed(arr) {
        arr = arr.map(item => item.scores);
        arr = arr.sort();
        if (arr.length % 2 === 0) { // array with even number elements
            return (parseFloat(arr[arr.length / 2]) + parseFloat(arr[(arr.length / 2) - 1])) / 2;
        }
        else {
            return parseFloat(arr[(arr.length - 1) / 2]); // array with odd number elements
        }
    }
    roundValue(val) {
        return (Math.round(val * 10) / 10).toFixed(1);
    }
    getColor(med) {
        let gc100 = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        return gc100(med);
    }
    onSortClick() {
        if (this.showSort) {
            this.showSort = false;
        }
        else {
            this.showSort = true;
        }
    }
};
GridComponent.ctorParameters = () => [
    { type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/grid/grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid.component.scss */ "./src/app/Components/grid/grid.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], GridComponent);



/***/ }),

/***/ "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --overflow: hidden;\n  --background: #224b9e; }\n\n.avatar {\n  border-radius: 50%;\n  padding: 10px;\n  border: 2px solid white;\n  width: 45px;\n  height: 45px; }\n\n.outerDiv {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n\n.parentCard {\n  height: 95%;\n  width: 95%;\n  --background:#224b9e;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.parentCard ion-card-content {\n    height: 100%;\n    width: 100%; }\n\n.parentCard ion-card-content .crect {\n      fill: #fafafa;\n      display: block; }\n\n.parentCard ion-card-content .start-ring {\n      stroke-width: 10px;\n      stroke: #0e82e5;\n      fill: #fff; }\n\n#gchart .start-ring {\n  stroke-width: 10px;\n  stroke: #0e82e5;\n  fill: #fff; }\n\n.comp {\n  font-family: 'Open Sans SemiBold';\n  font-size: 1px;\n  cursor: pointer;\n  fill: #666666;\n  /*text-transform: uppercase;*/ }\n\n.comp text {\n  display: none; }\n\n.comp .bgrect {\n  display: none; }\n\n.comp .on {\n  font-size: 10px;\n  display: block !important;\n  z-index: 10; }\n\n.comp .recton {\n  fill: #00b9ff; }\n\n.crect {\n  fill: #fafafa;\n  display: block; }\n\n.onrect {\n  fill: #333;\n  width: 32px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9pLXBhZC1ob21lLXRvb2wvQzpcXFByb2plY3RzXFxOQUFscGhhTW9iaWxlL3NyY1xcYXBwXFxDb21wb25lbnRzXFxpLXBhZC1ob21lLXRvb2xcXGktcGFkLWhvbWUtdG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFXO0VBQ1gscUJBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFQdkI7SUFVUSxZQUFZO0lBQ1osV0FBVyxFQUFBOztBQVhuQjtNQWNZLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBZjFCO01BbUJZLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsVUFBVSxFQUFBOztBQUt0QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUVaO0VBQ0UsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLDZCQUFBLEVBQThCOztBQUdoQztFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2ktcGFkLWhvbWUtdG9vbC9pLXBhZC1ob21lLXRvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjI0YjllO1xyXG59XHJcblxyXG4uYXZhdGFye1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxufVxyXG5cclxuLm91dGVyRGl2e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhcmVudENhcmR7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICAtLWJhY2tncm91bmQ6IzIyNGI5ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuY3JlY3Qge1xyXG4gICAgICAgICAgICBmaWxsOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3RhcnQtcmluZyB7XHJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMTBweDtcclxuICAgICAgICAgICAgc3Ryb2tlOiAjMGU4MmU1O1xyXG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jZ2NoYXJ0IC5zdGFydC1yaW5nIHtcclxuICAgIHN0cm9rZS13aWR0aDogMTBweDtcclxuICAgIHN0cm9rZTogIzBlODJlNTtcclxuICAgIGZpbGw6ICNmZmY7XHJcbiAgfVxyXG4gIC5jb21wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIFNlbWlCb2xkJztcclxuICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmlsbDogIzY2NjY2NjtcclxuICAgIC8qdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsqL1xyXG4gIH1cclxuXHJcbiAgLmNvbXAgdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbXAgLmJncmVjdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbXAgLm9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcblxyXG4gIC5jb21wIC5yZWN0b24ge1xyXG4gICAgZmlsbDogIzAwYjlmZjtcclxuICB9XHJcblxyXG4gIC5jcmVjdCB7XHJcbiAgICBmaWxsOiAjZmFmYWZhO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAub25yZWN0IHtcclxuICAgIGZpbGw6ICMzMzM7XHJcbiAgICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.ts ***!
  \*************************************************************************/
/*! exports provided: IPadHomeToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPadHomeToolComponent", function() { return IPadHomeToolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profiledetails/profiledetails.component */ "./src/app/Components/profiledetails/profiledetails.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shareddata/data.service */ "./src/app/services/shareddata/data.service.ts");





let IPadHomeToolComponent = class IPadHomeToolComponent {
    constructor(popoverController, dataService) {
        this.popoverController = popoverController;
        this.dataService = dataService;
        this._showGridSub = this.dataService.showGrid.subscribe(d => {
            this.showGrid = d;
        });
        this._showGICSSub = this.dataService.showGICS.subscribe(d => {
            this.showGICS = d;
        });
    }
    profilePopover(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_2__["ProfiledetailsComponent"],
                event: e,
                translucent: true,
                cssClass: 'Custom_profile'
            });
            return yield popover.present();
        });
    }
};
IPadHomeToolComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
IPadHomeToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ipadhometool',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./i-pad-home-tool.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./i-pad-home-tool.component.scss */ "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
], IPadHomeToolComponent);



/***/ }),

/***/ "./src/app/Components/index/index.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Components/index/index.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header .avatar {\n  border-radius: 50%;\n  padding: 10px;\n  border: 2px solid white;\n  width: 45px;\n  height: 45px; }\n\nion-content .parentDiv {\n  height: calc(100vh - 111px);\n  width: 100vw;\n  display: flex;\n  flex-direction: row; }\n\nion-content .parentDiv .leftCard {\n    margin: 0px;\n    border-radius: 0px;\n    box-shadow: none;\n    height: 100%;\n    width: 80%; }\n\nion-content .parentDiv .rightCard {\n    margin: 0;\n    border-radius: 0px;\n    box-shadow: none;\n    height: 100%;\n    width: 25%;\n    --background: #f5f5fb; }\n\nion-content .parentDiv .rightCard ion-item {\n      --padding-start: 10px;\n      --min-height: 55px;\n      border-radius: 10px;\n      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5); }\n\nion-content .parentDiv .rightCard ion-item ion-select {\n        --padding-start: 0px;\n        display: inline-flex;\n        justify-content: flex-end;\n        width: 100%;\n        max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9pbmRleC9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXENvbXBvbmVudHNcXGluZGV4XFxpbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtUUE7RUFFUSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdwQjtFQUVJLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUx2QjtJQVFRLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixVQUFVLEVBQUE7O0FBWmxCO0lBZVEsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBYSxFQUFBOztBQXBCckI7TUF1QlkscUJBQWdCO01BQ2hCLGtCQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhDQUEyQyxFQUFBOztBQTFCdkQ7UUE2QmdCLG9CQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnNpZGUtbmF2LWl0ZW17XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjNGU2MmExO1xyXG4vLyAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLml0ZW0tQWN0aXZle1xyXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0Nzg0ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5hdmF0YXJ7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbi8vICAgICB3aWR0aDogNDVweDtcclxuLy8gICAgIGhlaWdodDogNDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmNvbHVtbi1pdGVte1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgY29sb3I6ICMzOTRlOGI7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4vLyAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4vLyAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5yb3ctaGVhZGVye1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuLy8gfVxyXG4vLyAuY29sLWhlYWRlcntcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4vLyB9XHJcblxyXG4vLyAuaXRlbS1jZW50ZXJ7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAuaXRlbS1sZWZ0LWNlbnRlcntcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAucm93LWl0ZW17XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4vLyAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmZmZmY7XHJcbi8vIH1cclxuXHJcbi8vIC5uby1ib3JkZXJ7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAub3ZlcmFsbERpdntcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywjMkU0Qzk5LCAjMjMzNzcxKTtcclxuLy8gfVxyXG5cclxuLy8gLm1lbnV7XHJcbi8vICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4vLyAgICAgd2lkdGg6IDEyMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgIC5sb2dve1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTRhOTk7XHJcbi8vICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4OyBcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAubWVudS1pdGVtLWRpdntcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5kaXZpZGVyLXNwYW57XHJcbi8vICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuLy8gICAgICAgICBocntcclxuLy8gICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMyNDc4NDsgXHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyBcclxuLy8gICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4OyBcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5tZW51LW5hdi1zcGFue1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuLy8gICAgICAgICBpb24taXRlbXtcclxuLy8gICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuY29udGVudC1kaXZ7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuXHJcbi8vICAgICAuc2VjdGlvbjEtZGl2e1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4vLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuLy8gICAgICAgICBwYWRkaW5nOiA0MHB4IDI1cHggMjBweCAyNXB4O1xyXG5cclxuLy8gICAgICAgICAudGl0bGUtRGl2e1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuLy8gICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbi8vICAgICAgICAgICAgIGgxe1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4OyBcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4OyBcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBiOWZmO1xyXG4vLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAucHJvZmlsZXtcclxuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICAgIHJpZ2h0OiAzNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAuc3ViLXRpdGxle1xyXG4vLyAgICAgICAgICAgICB3aWR0aDo3NXZoO1xyXG5cclxuLy8gICAgICAgICAgICAgcHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyBcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDsgXHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBpbWd7XHJcbi8vICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLnNlY3Rpb24yLWRpdntcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTsgXHJcbi8vICAgICAgICAgcGFkZGluZzogMjVweCAyNXB4IDIwcHggMjVweDtcclxuXHJcbi8vICAgICAgICAgaDF7XHJcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDsgbWFyZ2luOiAwcHg7IGNvbG9yOiAjMDBiOWZmO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgaW9uLWl0ZW17XHJcbi8vICAgICAgICAgICAgIC0tYmFja2dyb3VuZDojMTIyMDNmOyBcclxuLy8gICAgICAgICAgICAgLS1jb2xvcjogIzAwYjlmZjsgXHJcbi8vICAgICAgICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzEyMjAzZjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLnNlY3Rpb24zLWRpdntcclxuLy8gICAgICAgICAucGVyZm9tYW5jZS1kaXZ7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuXHJcbi8vICAgICAgICAgICAgIGlvbi1jYXJke1xyXG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbi8vICAgICAgICAgICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwMHB4KTsgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLmxvYWRlcntcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLnRpdGxlLXB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzk0ZThiOyBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLmRlc2MtcHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzOTRlOGI7IFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDsgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDEwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAucGVyZi1kYXRlLXB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM5NGU4YjtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAucm93MntcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC5kYXRlcy1kaXZ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMTBweDtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7IFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzOTRlOGI7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC5wLXBhZGRpbmd7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLmltYWdlLWRpdntcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCl7XHJcbi8vICAgICAuY29udGVudC1kaXZ7XHJcbi8vICAgICAgICAgd2lkdGg6IDg4JTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuY29udGVudC1kaXYgLnNlY3Rpb24xLWRpdiAuc3ViLXRpdGxle1xyXG4vLyAgICAgICAgIHdpZHRoOiA0MHZoO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLm1lbnUgLm1lbnUtaXRlbS1kaXZ7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA0NXZoO1xyXG4vLyAgICAgfVxyXG4gICAgXHJcbi8vIH1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICAuYXZhdGFye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgfVxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4ucGFyZW50RGl2e1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTExcHgpO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgLmxlZnRDYXJke1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0Q2FyZHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWZiO1xyXG5cclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XHJcblxyXG4gICAgICAgICAgICBpb24tc2VsZWN0e1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/Components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _Components_profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/profiledetails/profiledetails.component */ "./src/app/Components/profiledetails/profiledetails.component.ts");





let IndexComponent = class IndexComponent {
    constructor(httpClient, popoverController) {
        this.httpClient = httpClient;
        this.popoverController = popoverController;
        this.PerformanceData = [];
        this.IndexData = [];
        this.Index = [];
        this.CountryClasificationList = ['All', 'USA', 'Europe', 'UK', 'Japan', 'Dev. World', 'Dev. World ex US'];
        this.performanceAPIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexPerformance';
        this.APIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexDetails';
    }
    ngOnInit() {
        this.selectedCountry = 'USA';
        this.LoadData();
    }
    OnItemClick(item) {
        this.selectedCountry = item;
        this.SelectedData = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0];
        console.log(item);
    }
    LoadData() {
        this.httpClient.get(this.performanceAPIUrl).subscribe(data => {
            this.PerformanceData = data;
            console.log(this.PerformanceData);
            this.httpClient.get(this.APIUrl).subscribe(data => {
                this.IndexData = data;
                console.log(this.IndexData);
                var i = 0;
                for (i = 0; i < this.CountryClasificationList.length; i++) {
                    var temp = this.filterIndex(this.CountryClasificationList[i]);
                    temp = temp.sort((a, b) => {
                        return a.indexName - b.indexName;
                    });
                    console.log(this.CountryClasificationList[i]);
                    console.log(temp);
                    this.Index.push(temp);
                }
                this.SelectedData = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0];
                console.log(this.SelectedData);
                var temps = this.PerformanceData.filter(item => item.indexName == this.SelectedData.indexName);
                this.selectedIndexData = temps[0];
                console.log(this.selectedIndexData);
            });
        });
    }
    filterIndex(item) {
        var index = item;
        var filterStr = 'U.S.';
        var ind = [];
        if (index == 'USA') {
            filterStr = 'U.S.';
            ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1);
        }
        else if (index == 'Europe') {
            filterStr = 'Europe';
            ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1);
        }
        else if (index == 'Europe') {
            filterStr = 'Europe';
            ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1);
        }
        else if (index == 'UK') {
            filterStr = 'UK';
            ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Europe') == -1);
        }
        else if (index == 'Japan') {
            filterStr = 'Japan';
            ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1);
        }
        else if (index == 'Dev. World') {
            filterStr = 'Developed World';
            ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Developed World Ex-US') == -1);
        }
        else if (index == 'Dev. World ex US') {
            filterStr = 'Developed World Ex-US';
            ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1);
        }
        else if (index == 'All') {
            ind = this.IndexData;
        }
        //console.log(ind);
        return ind;
    }
    onIndexChange(ev) {
        var temp = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)].filter(item => item.indexName == ev.target.value);
        this.SelectedData = temp[0];
        console.log(this.SelectedData);
        var temp2 = this.PerformanceData.filter(item => item.indexName == this.SelectedData.indexName);
        this.selectedIndexData = temp2[0];
        console.log(this.selectedIndexData);
        console.log(ev.target.value);
    }
    profilePopover(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("presenting profile Details");
            const popover = yield this.popoverController.create({
                component: _Components_profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_4__["ProfiledetailsComponent"],
                event: e,
                translucent: true,
                cssClass: 'Custom_profile'
            });
            return yield popover.present();
        });
    }
    roundOf(val) {
        var temp = Math.round(val * 100) / 100;
        return temp.toFixed(2);
    }
    get_desc(val) {
        return val.replace(/IndexSM/g, 'Index<sup>SM</sup>').replace(/RiskSelectTM/g, 'RiskSelect<sup>TM</sup>').replace(/Human Factor/g, 'H-Factor');
    }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.scss */ "./src/app/Components/index/index.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
], IndexComponent);



/***/ }),

/***/ "./src/app/Components/searchtool/searchtool.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/searchtool/searchtool.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment {\n  height: 35px;\n  margin-top: 10px; }\n  ion-segment ion-segment-button {\n    --indicator-color: #224b9e;\n    --color-checked: #ffffff;\n    --color:#224b9e;\n    --border-radius: 20px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9zZWFyY2h0b29sL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcQ29tcG9uZW50c1xcc2VhcmNodG9vbFxcc2VhcmNodG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUZwQjtJQUtRLDBCQUFrQjtJQUNsQix3QkFBZ0I7SUFDaEIsZUFBUTtJQUNSLGdDQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9zZWFyY2h0b29sL3NlYXJjaHRvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiAjMjI0YjllO1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcclxuICAgICAgICAtLWNvbG9yOiMyMjRiOWU7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Components/searchtool/searchtool.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/searchtool/searchtool.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchtoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchtoolComponent", function() { return SearchtoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shareddata/data.service */ "./src/app/services/shareddata/data.service.ts");




let SearchtoolComponent = class SearchtoolComponent {
    constructor(modalCtrl, dataService) {
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.data = [];
        this._searchRes = [];
        this._etfData = [];
        this.searchText = null;
        this._selTabSub = this.dataService.selTab.subscribe(d => {
            this.selTab = d;
        });
    }
    ngOnDestroy() {
        this._selTabSub.unsubscribe();
    }
    ngOnInit() {
        this.getSearchdata();
        this.dataService.getETFdata();
    }
    onSearchChange(e) {
        console.log(e);
        console.log(this.searchText);
        console.log(this.data);
        var serText = e.target.value.toLowerCase();
        if (serText.length != 0 && this.data.length != 0) {
            if (this.selTab != "ETF's") {
                this._searchRes = this.data.filter(i => i.companyName.toString().toLowerCase().startsWith(serText) || i.ticker.toString().toLowerCase().startsWith(serText));
                this._searchRes.sort((a, b) => {
                    return a.sortOrder - b.sortOrder;
                });
            }
            else {
                console.log(this.data.filter(i => i.ticker == null));
                this._searchRes = this.data.filter(i => i.etfName.toString().toLowerCase().startsWith(serText));
                this._searchRes.sort((a, b) => {
                    return a.etfName > b.etfName;
                });
            }
            console.log(this._searchRes);
        }
        else {
            this._searchRes.length = 0;
        }
    }
    onbackClick(e) {
        this.modalCtrl.dismiss();
    }
    segmentChanged(e) {
        // console.log(e);
        this.selTab = e.detail.value;
        this.dataService.selTab.next(this.selTab);
        if (this._searchRes.length != 0) {
            this._searchRes.length = 0;
        }
        this.searchText = null;
        this.getSearchdata();
    }
    getSearchdata() {
        if (this.selTab == 'Equities & FI') {
            // this.data = 
            this.dataService.getEquitiesdata().then(d => {
                this.data = d;
                this.dataService.getFIdataList().then(d => {
                    this.data.push(d[0]);
                    console.log(this.data);
                });
            });
        }
        // else if(this.selTab == 'NAA Indexes'){
        //   this.dataService.getNAAIndexesData().then(d =>{
        //     this.data = d;
        //     console.log(this.data);
        //   })
        // }
        else if (this.selTab == "ETF's") {
            var etfsub = this.dataService.ETFIndex.subscribe(d => {
                if (d.length != 0) {
                    this.data = d;
                    console.log(this.data);
                }
            });
            console.log(this.data);
            etfsub.unsubscribe();
        }
    }
    onItemSelect(i) {
        console.log(i);
    }
};
SearchtoolComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
SearchtoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchtool',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./searchtool.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/searchtool/searchtool.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./searchtool.component.scss */ "./src/app/Components/searchtool/searchtool.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], SearchtoolComponent);



/***/ }),

/***/ "./src/app/Components/tool/tool.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Components/tool/tool.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".searchDiv {\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 20px;\n  display: flex;\n  align-items: center; }\n  .searchDiv ion-item {\n    width: 30vw;\n    --padding-start: 10px;\n    --min-height: 35px;\n    max-width: 400px;\n    min-width: 300px;\n    border-radius: 30px; }\n  .searchDiv ion-item img {\n      height: 20px;\n      margin: 0 5px 0 0; }\n  .searchDiv ion-item ion-input {\n      font-size: 14px;\n      --padding-top: 5px;\n      --padding-bottom: 5px;\n      --padding-start: 5px;\n      --padding-end: 5px; }\n  .searchDiv ion-item ion-select {\n      font-size: 14px;\n      color: #00b9ff;\n      border-left: 1px solid rgba(144, 165, 206, 0.68);\n      stroke: white;\n      --padding-top: 5px;\n      --padding-bottom: 5px;\n      --padding-start: 5px;\n      --padding-end: 5px;\n      width: 35%;\n      padding: 0px 5px 0 15px;\n      transition: .5s;\n      max-width: unset;\n      position: relative; }\n  .start-ring {\n  stroke-width: 10px;\n  stroke: #0e82e5;\n  fill: #fff; }\n  .comp {\n  font-family: 'Open Sans SemiBold';\n  font-size: 1px;\n  cursor: pointer;\n  fill: #666666;\n  /*text-transform: uppercase;*/ }\n  .comp text {\n  display: none; }\n  .comp .bgrect {\n  display: none; }\n  .comp .on {\n  font-size: 10px;\n  display: block !important;\n  z-index: 10; }\n  .comp .recton {\n  fill: #00b9ff; }\n  .crect {\n  fill: #fafafa;\n  display: block; }\n  .compHighLight .crect {\n  /* fill: #333;*/\n  display: block !important; }\n  ion-select::part(icon) {\n  opacity: 1; }\n  .first-select {\n  width: 100% !important;\n  max-width: 100% !important;\n  border-left: none !important;\n  padding: 0 5px 0 5px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy90b29sL0M6XFxQcm9qZWN0c1xcTkFBbHBoYU1vYmlsZS9zcmNcXGFwcFxcQ29tcG9uZW50c1xcdG9vbFxcdG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUNyQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBUHZCO0lBU0ksV0FBVztJQUNYLHFCQUFnQjtJQUNoQixrQkFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUFkdkI7TUFnQk0sWUFBWTtNQUNaLGlCQUFpQixFQUFBO0VBakJ2QjtNQXFCSSxlQUFlO01BQ2Isa0JBQWM7TUFDZCxxQkFBaUI7TUFDakIsb0JBQWdCO01BQ2hCLGtCQUFjLEVBQUE7RUF6QnBCO01BNkJNLGVBQWU7TUFDZixjQUFjO01BQ2QsZ0RBQWdEO01BQ2hELGFBQTBCO01BRTFCLGtCQUFjO01BQ2QscUJBQWlCO01BQ2pCLG9CQUFnQjtNQUNoQixrQkFBYztNQUNkLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTtFQUt4QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVSxFQUFBO0VBR1o7RUFDRSxpQ0FBaUM7RUFDakMsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsNkJBQUEsRUFBOEI7RUFHaEM7RUFDRSxhQUFhLEVBQUE7RUFHZjtFQUNFLGFBQWEsRUFBQTtFQUdmO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7RUFHYjtFQUNFLGFBQWEsRUFBQTtFQUdmO0VBQ0UsYUFBYTtFQUNiLGNBQWMsRUFBQTtFQUdoQjtFQUNFLGVBQUE7RUFDQSx5QkFBeUIsRUFBQTtFQUczQjtFQUNFLFVBQVUsRUFBQTtFQUdaO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsK0JBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Rvb2wvdG9vbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hEaXZ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpb24taXRlbXtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgaW1ne1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogMCA1cHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXNlbGVjdHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzAwYjlmZjtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDE0NCwgMTY1LCAyMDYsIDAuNjgpO1xyXG4gICAgICBzdHJva2U6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgLy8gbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgIHBhZGRpbmc6IDBweCA1cHggMCAxNXB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGFydC1yaW5nIHtcclxuICAgIHN0cm9rZS13aWR0aDogMTBweDtcclxuICAgIHN0cm9rZTogIzBlODJlNTtcclxuICAgIGZpbGw6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuY29tcCB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBTZW1pQm9sZCc7XHJcbiAgICBmb250LXNpemU6IDFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbGw6ICM2NjY2NjY7XHJcbiAgICAvKnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Ki9cclxuICB9XHJcbiAgXHJcbiAgLmNvbXAgdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY29tcCAuYmdyZWN0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21wIC5vbiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21wIC5yZWN0b24ge1xyXG4gICAgZmlsbDogIzAwYjlmZjtcclxuICB9XHJcblxyXG4gIC5jcmVjdCB7XHJcbiAgICBmaWxsOiAjZmFmYWZhO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuY29tcEhpZ2hMaWdodCAuY3JlY3Qge1xyXG4gICAgLyogZmlsbDogIzMzMzsqL1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3Q6OnBhcnQoaWNvbil7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmZpcnN0LXNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/Components/tool/tool.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/tool/tool.component.ts ***!
  \***************************************************/
/*! exports provided: ToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolComponent", function() { return ToolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3/ */ "./node_modules/d3/index.js");
/* harmony import */ var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shareddata/data.service */ "./src/app/services/shareddata/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _searchtool_searchtool_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../searchtool/searchtool.component */ "./src/app/Components/searchtool/searchtool.component.ts");






let ToolComponent = class ToolComponent {
    // SelTab: string = 'Stocks';
    // SelMode: string = 'Global';
    // SeltabFilter: string = "Global";
    constructor(modelCtrl, dataService, changedet, popoverCtrl) {
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
        this._selTabSub = this.dataService.selTab.subscribe(d => {
            this.selTab = d;
            console.log(this.selTab);
        });
        this._showGridSub = this.dataService.showGrid.subscribe(d => {
            this.showGrid = d;
        });
    }
    ngOnDestroy() {
        this._selTabSub.unsubscribe();
    }
    ngAfterViewInit() {
        this.dataService.getETFdata();
    }
    ngAfterContentInit() {
        this.loadData();
    }
    ngOnInit() {
    }
    loadData() {
        this.gchart = d3___WEBPACK_IMPORTED_MODULE_2__["select"]("#gchart");
        this.chartMain = this.CreateMainChart(this.gchart);
    }
    CreateMainChart(obj) {
        let that = this;
        let sradius = 100;
        var grp1 = obj.append("g").attr("id", "crlChart");
        grp1.append("circle")
            .attr('id', 'maincircle')
            .attr('class', 'start-ring')
            .attr('fill', '#fff')
            .attr('r', 0)
            .transition()
            .on('end', function () {
            repeat();
            repeat1();
            that.createData("");
        });
        function repeat() {
            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".ringAnim")
                .attr('r', (+sradius))
                .style('opacity', 1)
                .style('stroke-width', '5px')
                .transition()
                .attr('r', sradius * 1.3)
                .style('opacity', 0)
                .style('stroke-width', '1px')
                .on('end', repeat);
        }
        ;
        function repeat1() {
            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".preloding")
                .style('opacity', .5)
                .transition()
                .style('opacity', 1)
                .transition()
                .style('opacity', .5)
                .on("end", repeat1);
        }
        return grp1;
    }
    createData(d) {
        let that = this;
        that.dbGICS = that.dataService.dbGICS;
        // console.log(that.dbGICS);
        if (d != "") {
            that.dataService.getHistGlobalData(d);
        }
        else {
            that.dataService.getGlobalData();
        }
        that.dataService.dbScore.subscribe(data => {
            if (data.length != 0) {
                let dbScore = data;
                // console.log(dbScore);
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
                    d.cx = ((i * 360 / selreslen) - 90);
                    let flt = that.dataService.IndexOrder.filter(function (x) { return x.index == d.indexName; });
                    d.sortOrder = flt.length > 0 ? flt[0].order : null;
                    return d;
                });
                // console.log(that.selResData);
                d3___WEBPACK_IMPORTED_MODULE_2__["select"](".ringAnim").style("display", "none").remove();
                d3___WEBPACK_IMPORTED_MODULE_2__["select"](".preloding").style("display", "none").remove();
                d3___WEBPACK_IMPORTED_MODULE_2__["select"]('#maincircle')
                    .transition()
                    .attr('r', that.radius + 4)
                    .style('stroke-width', '0px')
                    .on("end", function () {
                    d3___WEBPACK_IMPORTED_MODULE_2__["select"]("#maincircle")
                        .transition()
                        .style('stroke-width', '0px');
                    that.createGradientArc(0, 100, that.selResData);
                    that.Companies = that.selResData.filter(function (val) {
                        if (val.indexName.indexOf("New Age Alpha") == -1) {
                            return val;
                        }
                    });
                    // console.log(that.Companies);
                    that.creatBreadCrumb(that.chartMain);
                    that.createKnob();
                    that.CreateComps(that.chartMain, that.selResData, "lvl1");
                    d3___WEBPACK_IMPORTED_MODULE_2__["select"](".Homecenter")
                        .transition()
                        .duration(1000)
                        .style('opacity', '1');
                    d3___WEBPACK_IMPORTED_MODULE_2__["select"](".UpdatedBox")
                        .transition()
                        .duration(1000)
                        .style('opacity', '1');
                });
            }
        });
    }
    findIndName(data, code) {
        var ind = code;
        return data.filter(d => d.code == ind)[0].name;
    }
    createGradientArc(sMin = null, sMax = null, data = null) {
        if (data != null && data.length > 0) {
            data.sort(function (x, y) {
                return d3___WEBPACK_IMPORTED_MODULE_2__["ascending"](parseFloat(x.score), parseFloat(y.score));
            });
        }
        let that = this;
        if (sMin == null) {
            sMin = 0;
        }
        if (sMax == null) {
            sMax = 100;
        }
        d3___WEBPACK_IMPORTED_MODULE_2__["select"]('#gradArc').remove();
        var gArc = d3___WEBPACK_IMPORTED_MODULE_2__["select"]('#crlChart').append('g').attr('id', 'gradArc');
        var arc = d3___WEBPACK_IMPORTED_MODULE_2__["arc"]()
            .innerRadius(that.radius - 18)
            .outerRadius(that.radius - 2);
        var gC100 = d3___WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        var colors = [];
        var color1 = d3___WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 1, 2, 3, 4])
            .range([gC100(sMin),
            gC100(((sMax - sMin) * 25 / 100) + sMin),
            gC100(((sMax - sMin) * 50 / 100) + sMin),
            gC100(((sMax - sMin) * 75 / 100) + sMin),
            gC100(sMax)]);
        var linearGradient = gArc.append('defs');
        var linearG1 = linearGradient.append('linearGradient');
        var gCArcColor = d3___WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 90, 91, 180, 181, 270, 271, 360])
            .range([0, 100, 0, 100, 0, 100, 0, 100]);
        var MaxColor = "";
        var MaxScore = "";
        var Data1 = data.filter(x => x.cx >= -90 && x.cx <= 0);
        // console.log(data);
        // console.log(Data1);
        linearG1.attr("id", "linearColors0")
            .attr("x1", "0").attr("y1", "0").attr("x2", ".5").attr("y2", "1");
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].cx >= -90 && data[i].cx <= 0) {
                    linearG1.append("stop").attr("offset", gCArcColor((data[i].cx) + 90) + "%").attr("stop-color", gC100(data[i].score));
                }
                if (data[i].cx > 0) {
                    linearG1.append("stop").attr("offset", "100%").attr("stop-color", gC100(data[i].score));
                    break;
                }
            }
            MaxColor = gC100(Data1[Data1.length - 1].score);
            MaxScore = Data1[Data1.length - 1].cx;
        }
        var Data2 = data.filter(x => x.cx >= 1 && x.cx <= 90);
        // console.log(Data2);
        var linearG2 = linearGradient.append("linearGradient");
        linearG2.attr("id", "linearColors1")
            .attr("x1", "0.8").attr("y1", "0").attr("x2", "0.5").attr("y2", "0.5");
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].cx >= 1 && data[i].cx <= 90) {
                    linearG2.append("stop").attr("offset", gCArcColor((data[i].cx) + 90) + "%").attr("stop-color", gC100(data[i].score));
                }
                if (data[i].cx > 90) {
                    //   linearG2.append("stop").attr("offset", "100%").attr("stop-color", gC100(data[i].score));
                    break;
                }
            }
            if (Data2 == null || Data2.length == 0) {
                linearG2.append("stop").attr("offset", gCArcColor(MaxScore + 90) + "%").attr("stop-color", MaxColor);
            }
            else {
                MaxColor = gC100(Data2[Data2.length - 1].score);
                MaxScore = Data2[Data2.length - 1].cx;
            }
        }
        var Data3 = data.filter(x => x.cx >= 91 && x.cx <= 180);
        var linearG3 = linearGradient.append("linearGradient");
        linearG3.attr("id", "linearColors2")
            .attr("x1", "0.8").attr("y1", "0.8").attr("x2", "0").attr("y2", "0.3");
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].cx >= 91 && data[i].cx <= 180) {
                    linearG3.append("stop").attr("offset", gCArcColor((data[i].cx) + 90) + "%").attr("stop-color", gC100(data[i].score));
                }
                if (data[i].cx > 180) {
                    //   linearG3.append("stop").attr("offset", "100%").attr("stop-color", gC100(data[i].score));
                    break;
                }
            }
            if (Data3 == null || Data3.length == 0) {
                linearG3.append("stop").attr("offset", gCArcColor(MaxScore + 90) + "%").attr("stop-color", MaxColor);
            }
            else {
                MaxColor = gC100(Data3[Data3.length - 1].score);
                MaxScore = Data3[Data3.length - 1].cx;
            }
        }
        var Data4 = data.filter(x => x.cx >= 181 && x.cx <= 270);
        var linearG4 = linearGradient.append("linearGradient");
        linearG4.attr("id", "linearColors3")
            .attr("x1", "0").attr("y1", "1").attr("x2", "1").attr("y2", "0");
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].cx >= 181 && data[i].cx <= 270) {
                    linearG4.append("stop").attr("offset", gCArcColor((data[i].cx) + 90) + "%").attr("stop-color", gC100(data[i].score));
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
            var start = (i * 89) * (Math.PI / 180), end = ((i * 89.9) + 90) * (Math.PI / 180);
            colors.push({
                startAngle: start,
                endAngle: end
            });
        });
        gArc.selectAll('.arc')
            .data(colors)
            .enter()
            .append('path')
            .attr('class', 'arc')
            .attr('d', arc)
            .attr('stroke', 'none')
            .attr('fill', function (d, i) { return 'url(#linearColors' + i + ')'; });
    }
    creatBreadCrumb(grp1) {
        var arc1 = d3___WEBPACK_IMPORTED_MODULE_2__["arc"]()
            .innerRadius(351)
            .outerRadius(349)
            .startAngle(-1.2)
            .endAngle(-1.9);
        var g = grp1.append("g").attr("id", "gBreadCrumb").attr("transform", "translate(-40 ,15)");
    }
    CreateComps(oSvg, dta, lvl) {
        let that = this;
        var compLst;
        oSvg.select('.compLst' + lvl).remove();
        compLst = oSvg.append("g").attr('class', 'compList compLst' + lvl).style("display", "block");
        var compC = compLst.append("g").attr("class", 'compLstC' + lvl);
        var compg = compC.selectAll("g")
            .data(dta)
            .enter().append("g")
            .attr("class", "comp")
            .attr("transform", function (d, i) {
            return "rotate(" + ((i * 360 / dta.length) - 90) + ")";
        })
            .attr("name", function (d) { return d.isin + "_" + d.indexName.replace(/ /g, '_'); })
            .on("click", function (elemData) {
            var gblSelId = d3___WEBPACK_IMPORTED_MODULE_2__["select"](this).attr("name");
            // that.assgSelDrpVal = "Equities";
            // that.SelTab = "Global";
            // that.SelMode = "Global";
            // that.SeltabFilter = "Global";
            var d = d3___WEBPACK_IMPORTED_MODULE_2__["select"](this).datum();
            // if (d3.select("#TimeLine").style("display") != "block") {
            //   d3.select("#btnTimeline").lower();
            //   d3.select("#ggicsLable").raise();
            // }
            // else {
            //   d3.select("#btnTimeline").raise();
            //   d3.select("#ggicsLable").lower();
            // }
            that.fnIndexSelClick(d, "CompClick");
            // that.hideSidebar();
            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".sRect1").style("opacity", "1");
            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".sRect").style("opacity", "1");
            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".sRectCompare").style("opacity", "1");
            d3___WEBPACK_IMPORTED_MODULE_2__["select"](".sRectCompareOverlay").style("opacity", "1");
            d3___WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sText").style("opacity", "1");
            d3___WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sTextReverse").style("opacity", "1");
        });
        let SelRes = that.selResData;
        // var dmin = d3.min(SelRes.map(x => x.marketCap));
        // var dmax = d3.max(SelRes.map(x => x.marketCap));
        var dmean = d3___WEBPACK_IMPORTED_MODULE_2__["mean"](SelRes.map(x => x.marketCap));
        var dsum = d3___WEBPACK_IMPORTED_MODULE_2__["sum"](SelRes.map(x => x.marketCap));
        let ResMarketCap = SelRes.map(x => x.marketCap);
        let LimitedCap = ResMarketCap.filter(x => x < dmean && x != null);
        let dlimitedSum = d3___WEBPACK_IMPORTED_MODULE_2__["sum"](LimitedCap);
        // var rmax = (dmax - dmin) > 100 ? 100 : (dmax - dmin);
        // rmax = rmax < 50 ? 50 : rmax;
        // var h = d3.scaleLinear()
        //   .domain([dmin, dmax])
        //   .range([0, 50]);
        let LimitedMarketCap = compg.append("rect")
            .attr("height", "1px")
            .attr("class", "crect")
            //.attr("fill", "rgba(100,100,100,.5)") 
            .attr("x", that.radius + 3)
            .attr("width", 0)
            .transition()
            .duration(10)
            .attr("width", function (d) {
            if (d.indexName.indexOf("New Age Alpha") > -1) {
                return "0px";
            }
            else {
                let wtdwidth = 0;
                var wt = ((d.marketCap / dlimitedSum) * 10000);
                if (d.marketCap < dmean) {
                    wtdwidth = wt;
                }
                else {
                    wt = ((d.marketCap / dsum) * 10000);
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
    fnIndexSelClick(d, type) {
        let that = this;
        that.SelIndexName = d.indexName;
        let SelRows = that.selResData.filter(x => x.isin == d.isin);
        let RectOn = d3___WEBPACK_IMPORTED_MODULE_2__["select"](".rectOn");
        let ChkRecton = null;
        if (RectOn.node() != null) {
            ChkRecton = RectOn.node().parentNode.id == "nav-1";
        }
        if (type == "CompClick") {
            ChkRecton = true;
        }
        let strtype = type == "" ? (that.FromClick == "ETFClick" ? "ETFCompClick" : (that.FromClick == "indexClick" ? "indexCompClick" : that.FromClick)) : type;
        if (type == "")
            strtype = that.FromClick == "FIClick" ? "FICompClick" : strtype;
        // that.loadComponent = false;
        // that.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + d.ticker + ") [" + d3.format(".1f")(d.score) + "%]", strtype, d.stockKey, d.score);
    }
    createKnob() {
    }
    onSelectClick(e) {
        this.selTab = e.target.value;
        this.dataService.selTab.next(this.selTab);
        this.showGrid = true;
        this.dataService.showGrid.next(this.showGrid);
        console.log(this.showGrid);
    }
    onSearchInputClick(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(e);
            const modal = yield this.modelCtrl.create({
                component: _searchtool_searchtool_component__WEBPACK_IMPORTED_MODULE_5__["SearchtoolComponent"],
                cssClass: "modal-full"
            });
            modal.present();
        });
    }
};
ToolComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
ToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tool',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tool.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/tool/tool.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tool.component.scss */ "./src/app/Components/tool/tool.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
], ToolComponent);



/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _Components_i_pad_home_tool_i_pad_home_tool_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/i-pad-home-tool/i-pad-home-tool.component */ "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.ts");
/* harmony import */ var _Components_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/index/index.component */ "./src/app/Components/index/index.component.ts");






const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                component: _Components_i_pad_home_tool_i_pad_home_tool_component__WEBPACK_IMPORTED_MODULE_4__["IPadHomeToolComponent"]
            },
            {
                path: 'investment_solution',
                component: _Components_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _Components_i_pad_home_tool_i_pad_home_tool_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/i-pad-home-tool/i-pad-home-tool.component */ "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.ts");
/* harmony import */ var _Components_index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/index/index.component */ "./src/app/Components/index/index.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _Components_tool_tool_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/tool/tool.component */ "./src/app/Components/tool/tool.component.ts");
/* harmony import */ var _Components_searchtool_searchtool_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/searchtool/searchtool.component */ "./src/app/Components/searchtool/searchtool.component.ts");
/* harmony import */ var _Components_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/grid/grid.component */ "./src/app/Components/grid/grid.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _Components_gics_gics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Components/gics/gics.component */ "./src/app/Components/gics/gics.component.ts");















let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], _Components_i_pad_home_tool_i_pad_home_tool_component__WEBPACK_IMPORTED_MODULE_7__["IPadHomeToolComponent"], _Components_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"], _Components_tool_tool_component__WEBPACK_IMPORTED_MODULE_10__["ToolComponent"], _Components_searchtool_searchtool_component__WEBPACK_IMPORTED_MODULE_11__["SearchtoolComponent"], _Components_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"], _Components_gics_gics_component__WEBPACK_IMPORTED_MODULE_14__["GicsComponent"]],
        entryComponents: [_Components_searchtool_searchtool_component__WEBPACK_IMPORTED_MODULE_11__["SearchtoolComponent"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar {\n  border-radius: 50%;\n  padding: 10px;\n  border: 2px solid white;\n  width: 45px;\n  height: 45px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXHRhYnNcXHRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFye1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map