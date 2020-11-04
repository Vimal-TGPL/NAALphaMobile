(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- navBar start -->\r\n<ion-header class=\"ion-text-center\" *ngIf=\"mobile\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <div class=\"header-Logo\" [ngClass]=\"{'ipad_Logo': !mobile}\">\r\n      <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" alt=\"NewAgeAlpha\" width=\"auto\">\r\n      \r\n        <div (click)=\"openMenu()\">\r\n          <ion-avatar>\r\n            <img src=\"../../assets/images/Profile_NAA5.svg\" />\r\n          </ion-avatar>\r\n            <p>{{currentUser.firstName}}&nbsp;{{currentUser.lastName}}</p>\r\n        </div>\r\n    </div>\r\n    \r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <!-- SearchBar start -->\r\n      <div class=\"searchDiv\">\r\n        <ion-item class=\"searchItem\" lines=\"none\" (click)=\"openSearch()\">\r\n          <ion-label>\r\n            <ion-icon name=\"search\" ></ion-icon>\r\n            <p>Ticker or company name</p>\r\n            <!-- <p *ngIf=\"this.SelTab == 'ETF' || this.SelTab == 'ETFChild'\">ETF ticker or name</p> -->\r\n            </ion-label>\r\n        </ion-item>\r\n      </div>\r\n       <!-- SearchBar End-->\r\n  </ion-toolbar>\r\n  <hr>\r\n</ion-header>\r\n\r\n<ion-content forceOverscroll=\"false\" *ngIf=\"!selComp && !AvoidLosersec && !AlertSec && !ReportSec\">\r\n  <div>\r\n    <ion-text>\r\n      <p>To begin, use the Search Bar</p>\r\n      <p>to select a stock.</p>\r\n    </ion-text>\r\n  </div>\r\n  <div class=\"footor_icon_div\">\r\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\r\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\r\n    <img src='../../assets/images/Avoid Loser_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\r\n    <img src='../../assets/images/Notification_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\r\n    <img src='../../assets/images/Report_Download_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content forceOverscroll=\"false\" *ngIf=\"selComp && !AvoidLosersec && !AlertSec && !ReportSec\" class=\"MainContent\">\r\n    <ion-item *ngIf=\"selSec\" lines=\"none\" (click)=\"openSecPopOver($event)\" class=\"secDropDown\">\r\n      <div>\r\n        <span class=\"sec_Detail\">\r\n          <span class=\"medItemSpan\"><p [style.color]=\"getColor(selSec.secMed)\">{{selSec.secMed}}</p></span>\r\n          <span class=\"Sec_Details_Sub\">\r\n            <p>{{selSec.secTitle}}&nbsp;(<span>{{selComp.indexName}}</span>)</p>\r\n            <p>{{selSec.secName}}</p>\r\n          </span>\r\n      </span>\r\n      <ion-icon name=\"chevron-down-circle-outline\"></ion-icon>\r\n      </div>\r\n    </ion-item>\r\n    <div class=\"arrow_div\">\r\n      <ion-icon [name]=\"CurrSlide == 0 ? 'chevron-back-circle' : 'chevron-back-circle-outline'\" (click)=\"onArrowClick(0);\" [style.color]=\"CurrSlide==0? '#00b9ff' : '#fff'\"></ion-icon>\r\n      <ion-icon [name]=\"CurrSlide == 1 ? 'chevron-forward-circle' : 'chevron-forward-circle-outline'\" (click)=\"onArrowClick(1);\" [style.color]=\"CurrSlide==1? '#00b9ff' : '#fff'\"></ion-icon>\r\n    </div>\r\n    <ion-slides id='MainSlider' mode=\"ios\" [options]='slideOpts' (ionSlideDidChange)=\"onSlideChange($event)\">\r\n      <ion-slide class=\"CompSlide\">\r\n        <ion-list id=\"CompList\">\r\n          <ion-item *ngFor=\"let item of selIndexData\" lines=\"none\" class=\"compItem\" [class.active]=\"selComp === item\" (click)=\"onCompanyClick(item)\">\r\n              <span [style.color]=\"getColor(roundMed(item.scores *100))\">{{roundMed(item.scores *100)}}</span>\r\n              <div><p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.companyName}}</p>\r\n              <p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.ticker}}</p></div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-slide>\r\n      <ion-slide class=\"circleSlide\">\r\n        <svg preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 700 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n          <g id=\"gchart\" transform=\"translate(345 ,260)\"></g>\r\n        </svg>\r\n        <div id=\"Circleloader\" style=\"height: 100%;\r\n        width: 100%;\r\n        display: none;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: absolute;\" >\r\n          <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"    height: 30px;\r\n          width: 30px;\">\r\n        </div>\r\n      </ion-slide>  \r\n    </ion-slides>\r\n  <div class=\"footor_icon_div\">\r\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\r\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\r\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\r\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\r\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"selComp && AvoidLosersec\" class=\"avoid_looser_content\">\r\n  <ion-item *ngIf=\"selSec\" lines=\"none\" (click)=\"openSecPopOver($event)\" class=\"secDropDown\">\r\n    <div>\r\n      <span class=\"sec_Detail\">\r\n        <span class=\"medItemSpan\"><p [style.color]=\"getColor(selSec.secMed)\">{{selSec.secMed}}</p></span>\r\n        <span class=\"Sec_Details_Sub\">\r\n          <p>{{selSec.secTitle}}&nbsp;(<span>{{selComp.indexName}}</span>)</p>\r\n          <p>{{selSec.secName}}</p>\r\n        </span>\r\n    </span>\r\n    <ion-icon name=\"chevron-down-circle-outline\"></ion-icon>\r\n    </div>\r\n  </ion-item>\r\n  <div style=\"width: 100%;\r\n  height: calc(100vh - 285px);\" *ngIf=\"!avoidSlides\" class=\"R_slider\">\r\n  <svg preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 450 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n    <g id=\"gchart\" transform=\"translate(225 ,260)\"></g>\r\n  </svg>\r\n</div>\r\n<div class=\"arrow_div\" *ngIf=\"avoidSlides\">\r\n  <ion-icon [name]=\"AL_CurrSlide == 0 ? 'chevron-back-circle' : 'chevron-back-circle-outline'\" (click)=\"onALArrowClick('prev');\" [style.color]=\"AL_CurrSlide==0? '#00b9ff' : '#fff'\"></ion-icon>\r\n  <ion-icon [name]=\"AL_CurrSlide == 2 ? 'chevron-forward-circle' : 'chevron-forward-circle-outline'\" (click)=\"onALArrowClick('frwd');\" [style.color]=\"AL_CurrSlide==2? '#00b9ff' : '#fff'\"></ion-icon>\r\n</div>\r\n<ion-slides mode=\"ios\" *ngIf=\"avoidSlides\" [options]='slideOpts' (ionSlideDidChange)=\"onALSlideChange($event)\" id=\"AL_Slider\">\r\n  <ion-slide class=\"CompSlide\">\r\n    <ion-list id=\"CompList\">\r\n      <ion-item *ngFor=\"let item of AL_FilteredList\" lines=\"none\" class=\"compItem\" [class.active]=\"selComp === item\">\r\n          <span [style.color]=\"getColor(roundMed(item.scores *100))\">{{roundMed(item.scores *100)}}</span>\r\n          <div><p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.companyName}}</p>\r\n          <p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.ticker}}</p></div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-slide>\r\n  <ion-slide class=\"CircleSlider\">\r\n    <svg *ngIf=\"AL_mainCircle\" preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 700 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n      <g id=\"gchart\" transform=\"translate(345 ,260)\"></g>\r\n      <!-- <g id=\"AL_CircleContent\" transform=\"translate(345 ,260)\">\r\n        <foreignobject height=\"200\" width=\"200\" style=\"  background: #fff; transform: translate(-151px, -31px); border-radius: 50%;\">\r\n          <xhtml:div class=\"AL_outerDiv\">\r\n            <xhtml:div style=\"height: 50px;width: 50px;\">\r\n\r\n          </xhtml:div>\r\n          </xhtml:div>\r\n        </foreignobject>\r\n      </g> -->\r\n    </svg>\r\n  </ion-slide>\r\n  <ion-slide class=\"rangeSlide R_slider\">\r\n    <svg *ngIf=\"AL_rangeCircle\" preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 450 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n      <g id=\"gchart\" transform=\"translate(225 ,260)\"></g>\r\n    </svg>\r\n  </ion-slide>\r\n</ion-slides>\r\n  <div class=\"footor_icon_div\">\r\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\r\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\r\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\r\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\r\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"selComp && AlertSec\" class=\"AlertContent\">\r\n  <div class=\"arrow_div\">\r\n    <ion-icon name=\"chevron-back-circle-outline\" (click)=\"onAlertClick()\"></ion-icon>\r\n    <h1 class=\"Sub_title\">Alert Settings</h1>\r\n    <ion-icon name=\"chevron-forward-circle-outline\" (click)=\"onAlertClick()\"></ion-icon>\r\n  </div>\r\n  <div class=\"alertDiv\">\r\n    <ion-text>\r\n      <h2>Set Alert For:&nbsp;{{selComp.companyName}}&nbsp;({{selComp.ticker}})</h2>\r\n    </ion-text>\r\n    <div class=\"radioBtnDiv\">\r\n      <ion-list>\r\n        <ion-radio-group name=\"auto\" [value]=\"selctedradioopts\" mode=\"md\" (ionChange)=\"onradioChange($event)\">\r\n          <ion-item lines=\"none\">\r\n            <ion-radio value=\"daily\"></ion-radio>\r\n            <ion-label>Daily</ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"none\">\r\n            <ion-radio value=\"weekly\"></ion-radio>\r\n            <ion-label>Weekly</ion-label>\r\n          </ion-item>\r\n          <div class=\"weekly_Div\" *ngIf=\"weeklyDiv\">\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Sunday'}\" (click)=\"onWeeklyClick('Sunday')\">S</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Monday'}\" (click)=\"onWeeklyClick('Monday')\">M</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Tuesday'}\" (click)=\"onWeeklyClick('Tuesday')\">T</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Wednesday'}\" (click)=\"onWeeklyClick('Wednesday')\">W</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Thursday'}\" (click)=\"onWeeklyClick('Thursday')\">T</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Friday'}\" (click)=\"onWeeklyClick('Friday')\">F</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Saturday'}\" (click)=\"onWeeklyClick('Saturday')\">S</span>\r\n          </div>\r\n          <ion-item lines=\"none\">\r\n            <ion-radio value=\"monthly\"></ion-radio>\r\n            <ion-label>Monthly</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"showMonthlyPicker($event)\" lines=\"none\" *ngIf=\"monthlyBtn\" style=\"    display: flex;\r\n            align-items: center;\">\r\n              <ion-label slot=\"start\">Date</ion-label>\r\n              <ion-label slot=\"end\">{{monthlyDate}}</ion-label>\r\n            </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n      <ion-list>\r\n        <ion-radio-group name=\"auto\" mode=\"md\" [value]=\"perRadioGrp\" allowEmptySelection=true (ionChange)=\"onperRadioChange($event)\">\r\n          <ion-item lines=\"none\">\r\n            <ion-radio value=\"percentage\"></ion-radio>\r\n            <ion-label>If score percentage changes by (+/-)</ion-label>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        <ion-item *ngIf=\"percentageRage\" lines=\"none\" style=\"    --padding-start: 0;\">\r\n          <ion-range class=\"per_range\" min=\"1\" max=\"100\" pin=true [value]='rangePer' *ngIf=\"percentageRage\" (ionChange)=\"setRangePer($event)\">\r\n            <ion-label slot=\"start\">1%</ion-label>\r\n            <ion-label slot=\"end\">100%</ion-label>\r\n          </ion-range>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <div style=\"width: 80%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\">\r\n      <ion-button *ngIf=\"alertSubmitBtn\" (click)=\"onAlertSubmit($event)\"  shape=\"round\">\r\n        Submit\r\n      </ion-button>\r\n      <ion-button *ngIf=\"!alertSubmitBtn\" (click)=\"onRemoveAlert($event)\" shape=\"round\">\r\n        Remove\r\n      </ion-button>\r\n      <ion-button *ngIf=\"alertUpdateBtn\" (click)=\"onAlertSubmit($event)\" shape=\"round\">\r\n        Update\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n  <div class=\"footor_icon_div\">\r\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\r\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\r\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\r\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\r\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"selComp && ReportSec\" class=\"ReportContent\">\r\n  <div class=\"arrow_div\">\r\n    <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n    <h1 class=\"Sub_title\">Download Report</h1>\r\n    <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>\r\n  </div>\r\n  <div class=\"reportDiv\">\r\n    <ion-button (click)=\"onPDFClick()\" shape=\"round\" class=\"pdfBtn\" disabled=true>\r\n      PDF\r\n    </ion-button>\r\n\r\n    <ion-list>\r\n      <ion-radio-group name=\"auto\" value=\"mail\" mode=\"md\">\r\n        <ion-list-header>\r\n          <ion-label class=\"list_header\">Email Report</ion-label>\r\n        </ion-list-header>\r\n        <ion-item lines=\"none\">\r\n          <ion-radio value=\"mail\"></ion-radio>\r\n          <ion-label>{{currentUser.username}}</ion-label>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n\r\n    <ion-button (click)=\"onClick()\" shape=\"round\" class=\"sendBtn\" disabled=true>\r\n      Send\r\n    </ion-button>\r\n  </div>\r\n\r\n  <div class=\"footor_icon_div\">\r\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\r\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\r\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\r\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\r\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\r\n  </div>\r\n</ion-content>\r\n\r\n<div *ngIf=\"data.length == 0\" style=\"    position: absolute;\r\nz-index: 99;\r\nleft: 0;\r\nright: 0;\r\ntop: 0;\r\nbottom: 0;\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\">\r\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 35px;\r\n  width: 35px;\">\r\n</div>\r\n\r\n<div *ngIf=\"showLoader\" style=\"    position: absolute;\r\nz-index: 99;\r\nleft: 0;\r\nright: 0;\r\ntop: 0;\r\nbottom: 0;\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\nbackground: rgb(0, 0, 0, 0.5);\">\r\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 35px;\r\n  width: 35px;\">\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ]),
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-Logo {\n  display: -webkit-box;\n  display: flex;\n  padding-left: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-right: 5px; }\n  .header-Logo img {\n    height: 30px; }\n  .header-Logo div {\n    width: 50%;\n    background: white;\n    border-radius: 25px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center; }\n  .header-Logo div ion-avatar {\n      background: #00b9ff;\n      --padding-bottom: 0;\n      --padding-start: 0;\n      --padding-end: 0;\n      --padding-top: 0;\n      height: 35px;\n      width: 35px;\n      padding: 5px;\n      margin-right: 10px;\n      margin-left: -1px; }\n  .header-Logo div p {\n      margin: 0;\n      font-size: 14px;\n      font-family: Open Sans SemiBold;\n      color: #00b9ff; }\n  ion-header ion-toolbar {\n  --background: #274b9e; }\n  ion-header ion-toolbar:nth-child(1) {\n  padding-top: 5px; }\n  ion-header ion-toolbar:nth-child(2) {\n  padding: 0 25px; }\n  ion-header hr {\n  margin: 0;\n  height: 0;\n  border: 2px solid #1a356a; }\n  .searchBtn {\n  --border-radius:15px;\n  width: 75px;\n  font-size: 11px;\n  height: 24px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  --background: #00aeef;\n  --box-shadow: none; }\n  .searchInput {\n  font-size: 16px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --color:#666;\n  text-align: center; }\n  .searchItem {\n  --border-width:2px;\n  --border-color: #00b9ff;\n  --inner-padding-end: 5px;\n  --background: transparent;\n  --border-radius: 25px;\n  --min-height: 28px; }\n  .searchItem ion-label {\n    margin: 2px 0px;\n    font-size: 14px;\n    -webkit-box-align: center;\n            align-items: center;\n    padding: 0 10px;\n    display: -webkit-box;\n    display: flex;\n    color: #888; }\n  .searchItem ion-label ion-icon {\n      color: #00b9ff;\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n      font-size: 18px;\n      margin-right: 10px; }\n  .searchItem ion-label p {\n      font-size: 16px;\n      color: #fff;\n      font-family: Open Sans Regular; }\n  .searchDiv {\n  padding: 5px 0px;\n  padding-top: 2%; }\n  ion-content {\n  --background: #274b9e;\n  --overflow: hidden; }\n  ion-content div ion-text {\n    color: #fff;\n    font-size: 14px;\n    text-align: center;\n    font-family: Open Sans Regular; }\n  ion-content .footor_icon_div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n    position: absolute;\n    height: 15%;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-content .footor_icon_div img {\n      height: 40px; }\n  ion-content .footor_icon_div img:first-child, ion-content .footor_icon_div img:last-child {\n      margin-bottom: 75px; }\n  ion-content .footor_icon_div img:nth-child(2), ion-content .footor_icon_div img:nth-child(4) {\n      margin-bottom: 25px; }\n  ion-content .footor_icon_div img:first-child, ion-content .footor_icon_div img:nth-child(2) {\n      opacity: 0.5; }\n  .MainContent .secDropDown {\n  --background: #00b9ff;\n  border-radius: 25px;\n  --padding-start: 0;\n  --padding-end: 5px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin: 10px 15px; }\n  .MainContent .secDropDown div {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center; }\n  .MainContent .secDropDown div .sec_Detail {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 90%; }\n  .MainContent .secDropDown div .sec_Detail .medItemSpan {\n        height: 50px;\n        width: 50px;\n        background: #fff;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center;\n        border-radius: 50%;\n        margin-right: 5px; }\n  .MainContent .secDropDown div .sec_Detail .medItemSpan p {\n          font-family: Open Sans SemiBold;\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub {\n        width: 75%; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p {\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p:first-child {\n          font-family: Open Sans Regular;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p:last-child {\n          font-family: Open Sans SemiBold;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .MainContent .secDropDown div ion-icon {\n      height: 40px;\n      width: 40px;\n      color: #fff; }\n  .MainContent .arrow_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff; }\n  .MainContent ion-slides ion-slide {\n  height: calc(100vh - 340px); }\n  .MainContent ion-slides .CompSlide ion-list::-webkit-scrollbar {\n  display: none; }\n  .MainContent ion-slides .CompSlide ion-list {\n  height: 100%;\n  overflow: scroll;\n  background: transparent;\n  width: 75%; }\n  .MainContent ion-slides .CompSlide ion-list .compItem {\n    --background: #00b9ff;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    font-size: 12px;\n    font-family: Open Sans SemiBold;\n    border-radius: 25px;\n    --padding-start: 0;\n    --padding-top: 0;\n    --padding-end: 0;\n    --padding-bottom: 0;\n    --inner-padding-start: 0;\n    --inner-padding-end: 0;\n    margin-bottom: 10px; }\n  .MainContent ion-slides .CompSlide ion-list .compItem p {\n      margin: 0;\n      color: #fff; }\n  .MainContent ion-slides .CompSlide ion-list .compItem span {\n      height: 45px;\n      width: 45px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      border-radius: 50%;\n      background: #fff;\n      margin-right: 10px;\n      border: 2px solid #274b9e;\n      margin-left: -2px; }\n  .MainContent ion-slides .CompSlide ion-list .compItem div {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-align: unset;\n              align-items: unset; }\n  .MainContent ion-slides .CompSlide ion-list .compItem div p:last-child {\n        font-family: Open Sans SemiBold; }\n  .MainContent ion-slides .circleSlide .start-ring {\n  stroke-width: 10px;\n  stroke: #0e82e5;\n  fill: #fff; }\n  .active {\n  --background: #fff !important; }\n  .ReportContent .arrow_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff;\n  margin-top: 5px; }\n  .ReportContent .arrow_div .Sub_title {\n    color: #fff;\n    font-family: Open Sans Bold;\n    margin: 0;\n    font-size: 25px; }\n  .ReportContent .reportDiv {\n  height: calc(100vh - 275px);\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n  .ReportContent .reportDiv ion-button {\n    height: 35px;\n    width: 30%;\n    --background: #00b9ff;\n    --background-activated: #00b9ff;\n    --color: #fff; }\n  .ReportContent .reportDiv ion-list {\n    background: #274b9e; }\n  .ReportContent .reportDiv ion-list ion-list-header {\n      -webkit-padding-start: 0;\n              padding-inline-start: 0;\n      margin-bottom: 5%; }\n  .ReportContent .reportDiv ion-list ion-list-header .list_header {\n        color: #fff;\n        font-size: 20px;\n        font-family: 'Open Sans SemiBold';\n        text-align: center; }\n  .ReportContent .reportDiv ion-list ion-item {\n      --background: transparent;\n      --ripple-color: transparent; }\n  .ReportContent .reportDiv ion-list ion-item ion-radio {\n        --color-checked: #00b9ff;\n        --color: #fff;\n        margin-right: 10px; }\n  .ReportContent .reportDiv ion-list ion-item ion-radio::part(container) {\n        border-color: #fff !important; }\n  .ReportContent .reportDiv ion-list ion-item ion-label {\n        --color: #fff;\n        font-size: 16px;\n        font-family: 'Open Sans'; }\n  .ReportContent .reportDiv .pdfBtn {\n    margin-bottom: 20%; }\n  .ReportContent .reportDiv .sendBtn {\n    margin-top: 12%; }\n  .AlertContent .arrow_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff;\n  margin-top: 5px; }\n  .AlertContent .arrow_div .Sub_title {\n    color: #fff;\n    font-family: Open Sans Bold;\n    margin: 0;\n    font-size: 25px; }\n  .AlertContent .alertDiv {\n  height: calc(100vh - 275px);\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n  .AlertContent .alertDiv ion-text h2 {\n    font-size: 16px;\n    font-family: Open Sans SemiBold; }\n  .AlertContent .alertDiv .radioBtnDiv {\n    width: 85%;\n    margin-top: 15%; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list {\n      background: transparent; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item {\n        --background: transparent;\n        --ripple-color: transparent; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-label {\n          color: #fff;\n          font-size: 14px;\n          font-family: Open Sans Regular; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-radio {\n          --color-checked: #00b9ff;\n          --color: #fff;\n          margin-right: 10px; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-radio::part(container) {\n          border-color: #fff !important; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: space-evenly;\n                justify-content: space-evenly;\n        -webkit-box-align: center;\n                align-items: center; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div span {\n          height: 30px;\n          width: 30px;\n          border-radius: 50%;\n          color: #fff;\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n                  align-items: center;\n          background: transparent;\n          -webkit-transition: .3s;\n          transition: .3s; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div .active {\n          background: #00b9ff; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .monthly_Div {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n                align-items: center;\n        overflow: scroll; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .monthly_Div p {\n          margin: 0;\n          font-size: 16px;\n          font-family: Open Sans SemiBold; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list:nth-child(2) {\n      margin-top: 20px; }\n  .AlertContent .alertDiv .radioBtnDiv .per_range {\n      padding-left: 0;\n      padding-right: 0;\n      --knob-background: #00b9ff;\n      --knob-border-radius: 25px;\n      --knob-size: 15px;\n      --bar-background: #fff;\n      --bar-background-active: #00b9ff; }\n  .AlertContent .alertDiv .radioBtnDiv .per_range::part(pin) {\n      -webkit-transform: translate3d(0px, 0px, 0px) scale(1);\n              transform: translate3d(0px, 0px, 0px) scale(1);\n      color: #fff;\n      font-size: 12px;\n      font-family: 'Open Sans Regular'; }\n  .AlertContent .alertDiv ion-button {\n    margin-top: 10%;\n    --background: #00b9ff;\n    height: 30px;\n    width: 30%;\n    min-width: 100px;\n    --background-activated: none; }\n  .avoid_looser_content .arrow_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff; }\n  .avoid_looser_content .secDropDown {\n  --background: #00b9ff;\n  border-radius: 25px;\n  --padding-start: 0;\n  --padding-end: 5px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin: 10px 15px; }\n  .avoid_looser_content .secDropDown div {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center; }\n  .avoid_looser_content .secDropDown div .sec_Detail {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 90%; }\n  .avoid_looser_content .secDropDown div .sec_Detail .medItemSpan {\n        height: 50px;\n        width: 50px;\n        background: #fff;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center;\n        border-radius: 50%;\n        margin-right: 5px; }\n  .avoid_looser_content .secDropDown div .sec_Detail .medItemSpan p {\n          font-family: Open Sans SemiBold;\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub {\n        width: 75%; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p {\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p:first-child {\n          font-family: Open Sans Regular;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p:last-child {\n          font-family: Open Sans SemiBold;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .avoid_looser_content .secDropDown div ion-icon {\n      height: 40px;\n      width: 40px;\n      color: #fff; }\n  .avoid_looser_content ion-slides ion-slide {\n  height: calc(100vh - 340px); }\n  .avoid_looser_content ion-slides .CompSlide ion-list::-webkit-scrollbar {\n  display: none; }\n  .avoid_looser_content ion-slides .CompSlide ion-list {\n  height: 100%;\n  overflow: scroll;\n  background: transparent;\n  width: 75%; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem {\n    --background: #00b9ff;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    font-size: 12px;\n    font-family: Open Sans SemiBold;\n    border-radius: 25px;\n    --padding-start: 0;\n    --padding-top: 0;\n    --padding-end: 0;\n    --padding-bottom: 0;\n    --inner-padding-start: 0;\n    --inner-padding-end: 0;\n    margin-bottom: 10px; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem p {\n      margin: 0;\n      color: #fff; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem span {\n      height: 45px;\n      width: 45px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      border-radius: 50%;\n      background: #fff;\n      margin-right: 10px;\n      border: 2px solid #274b9e;\n      margin-left: -2px; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem div {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-align: unset;\n              align-items: unset; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem div p:last-child {\n        font-family: Open Sans SemiBold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixrQkFBa0IsRUFBQTtFQUx0QjtJQU9RLFlBQVksRUFBQTtFQVBwQjtJQVVRLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQWYzQjtNQWlCWSxtQkFBbUI7TUFDbkIsbUJBQWlCO01BQ2pCLGtCQUFnQjtNQUNoQixnQkFBYztNQUNkLGdCQUFjO01BQ2QsWUFBWTtNQUNaLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGlCQUFpQixFQUFBO0VBMUI3QjtNQTZCWSxTQUFTO01BQ1QsZUFBZTtNQUNmLCtCQUErQjtNQUMvQixjQUFjLEVBQUE7RUFLMUI7RUFFSSxxQkFBYSxFQUFBO0VBRmpCO0VBS1EsZ0JBQWdCLEVBQUE7RUFMeEI7RUFRUSxlQUFlLEVBQUE7RUFSdkI7RUFXUSxTQUFTO0VBQ1QsU0FBUztFQUNULHlCQUF5QixFQUFBO0VBSWpDO0VBQ0ksb0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFjO0VBQ2QscUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQWE7RUFDYixrQkFBYSxFQUFBO0VBR2pCO0VBQ0ksZUFBZTtFQUNmLGtCQUFjO0VBQ2QscUJBQWlCO0VBQ2pCLFlBQVE7RUFDUixrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGtCQUFlO0VBQ2YsdUJBQWU7RUFDZix3QkFBb0I7RUFDcEIseUJBQWE7RUFDYixxQkFBZ0I7RUFDaEIsa0JBQWEsRUFBQTtFQU5qQjtJQVFRLGVBQWU7SUFDZixlQUFlO0lBQ2YseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQWE7SUFBYixhQUFhO0lBQ2IsV0FBVyxFQUFBO0VBYm5CO01BZVksY0FBYztNQUNkLDZCQUE2QjtNQUM3QixxQkFBcUI7TUFDckIsZUFBZTtNQUNmLGtCQUFrQixFQUFBO0VBbkI5QjtNQXNCWSxlQUFlO01BQ2YsV0FBVztNQUNYLDhCQUE4QixFQUFBO0VBSzFDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtFQUduQjtFQUNJLHFCQUFhO0VBQ2Isa0JBQVcsRUFBQTtFQUZmO0lBTVksV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsOEJBQThCLEVBQUE7RUFUMUM7SUFjUSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiw4QkFBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBdEIzQjtNQXlCWSxZQUFZLEVBQUE7RUF6QnhCO01BNEJZLG1CQUFtQixFQUFBO0VBNUIvQjtNQWdDWSxtQkFBbUIsRUFBQTtFQWhDL0I7TUFvQ1ksWUFBWSxFQUFBO0VBS3hCO0VBRVEscUJBQWE7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFnQjtFQUNoQixrQkFBYztFQUNkLGdCQUFjO0VBQ2QsbUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0VBUnJCO0lBVVksV0FBVztJQUNYLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQWIvQjtNQWVnQixvQkFBYTtNQUFiLGFBQWE7TUFDYiw4QkFBbUI7TUFBbkIsNkJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLFVBQVUsRUFBQTtFQWxCMUI7UUFvQm9CLFlBQVk7UUFDWixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHdCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCLHlCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixpQkFBaUIsRUFBQTtFQTNCckM7VUE2QndCLCtCQUErQjtVQUMvQixTQUFTO1VBQ1QsZUFBZTtVQUNmLFdBQVcsRUFBQTtFQWhDbkM7UUFvQ29CLFVBQVUsRUFBQTtFQXBDOUI7VUFzQ3dCLFNBQVM7VUFDVCxlQUFlO1VBQ2YsV0FBVyxFQUFBO0VBeENuQztVQTJDd0IsOEJBQThCO1VBQzlCLG1CQUFtQjtVQUNuQixnQkFBZ0I7VUFDaEIsdUJBQXVCLEVBQUE7RUE5Qy9DO1VBaUR3QiwrQkFBK0I7VUFDL0IsbUJBQW1CO1VBQ25CLGdCQUFnQjtVQUNoQix1QkFBdUIsRUFBQTtFQXBEL0M7TUEwRGdCLFlBQVk7TUFDWixXQUFXO01BQ1gsV0FBVyxFQUFBO0VBNUQzQjtFQW9FUSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXLEVBQUE7RUExRW5CO0VBK0VZLDJCQUEyQixFQUFBO0VBL0V2QztFQW9GZ0IsYUFBYSxFQUFBO0VBcEY3QjtFQXVGZ0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsVUFBVSxFQUFBO0VBMUYxQjtJQStGb0IscUJBQWE7SUFDYixvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixrQkFBZ0I7SUFDaEIsZ0JBQWM7SUFDZCxnQkFBYztJQUNkLG1CQUFpQjtJQUNqQix3QkFBc0I7SUFDdEIsc0JBQW9CO0lBQ3BCLG1CQUFtQixFQUFBO0VBM0d2QztNQTZHd0IsU0FBUztNQUNULFdBQVcsRUFBQTtFQTlHbkM7TUFrSHdCLFlBQVk7TUFDWixXQUFXO01BQ1gsb0JBQWE7TUFBYixhQUFhO01BQ2Isd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2Qix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixpQkFBaUIsRUFBQTtFQTNIekM7TUErSHdCLG9CQUFhO01BQWIsYUFBYTtNQUNiLDRCQUFzQjtNQUF0Qiw2QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLHdCQUFrQjtjQUFsQixrQkFBa0IsRUFBQTtFQWpJMUM7UUFvSTRCLCtCQUErQixFQUFBO0VBcEkzRDtFQTZJZ0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVLEVBQUE7RUFNMUI7RUFDSSw2QkFBYSxFQUFBO0VBR2pCO0VBRVEsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWdCLEVBQUE7RUFUeEI7SUFZWSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxlQUFlLEVBQUE7RUFmM0I7RUFvQlEsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtFQXpCM0I7SUE0QlksWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBYTtJQUNiLCtCQUF1QjtJQUN2QixhQUFRLEVBQUE7RUFoQ3BCO0lBb0NZLG1CQUFtQixFQUFBO0VBcEMvQjtNQXVDZ0Isd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2QixpQkFBaUIsRUFBQTtFQXhDakM7UUEyQ29CLFdBQVc7UUFDWCxlQUFlO1FBQ2YsaUNBQWlDO1FBQ2pDLGtCQUFrQixFQUFBO0VBOUN0QztNQW9EZ0IseUJBQWE7TUFDYiwyQkFBZSxFQUFBO0VBckQvQjtRQXdEb0Isd0JBQWdCO1FBQ2hCLGFBQVE7UUFDUixrQkFBa0IsRUFBQTtFQTFEdEM7UUE4RG9CLDZCQUE2QixFQUFBO0VBOURqRDtRQWtFb0IsYUFBUTtRQUNSLGVBQWU7UUFDZix3QkFBd0IsRUFBQTtFQXBFNUM7SUEwRWdCLGtCQUFrQixFQUFBO0VBMUVsQztJQThFWSxlQUFlLEVBQUE7RUFLM0I7RUFFUSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZ0IsRUFBQTtFQVR4QjtJQVlZLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGVBQWUsRUFBQTtFQWYzQjtFQW9CUSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNqQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtFQXpCdkI7SUE2QmdCLGVBQWU7SUFDZiwrQkFBK0IsRUFBQTtFQTlCL0M7SUFtQ1ksVUFBVTtJQUNWLGVBQWUsRUFBQTtFQXBDM0I7TUF1Q2dCLHVCQUF1QixFQUFBO0VBdkN2QztRQTBDb0IseUJBQWE7UUFDYiwyQkFBZSxFQUFBO0VBM0NuQztVQThDd0IsV0FBVztVQUNYLGVBQWU7VUFDZiw4QkFBOEIsRUFBQTtFQWhEdEQ7VUFvRHdCLHdCQUFnQjtVQUNoQixhQUFRO1VBQ1Isa0JBQWtCLEVBQUE7RUF0RDFDO1VBMER3Qiw2QkFBNkIsRUFBQTtFQTFEckQ7UUErRG9CLG9CQUFhO1FBQWIsYUFBYTtRQUNiLDhCQUE2QjtnQkFBN0IsNkJBQTZCO1FBQzdCLHlCQUFtQjtnQkFBbkIsbUJBQW1CLEVBQUE7RUFqRXZDO1VBbUV3QixZQUFZO1VBQ1osV0FBVztVQUNYLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsb0JBQWE7VUFBYixhQUFhO1VBQ2Isd0JBQXVCO2tCQUF2Qix1QkFBdUI7VUFDdkIseUJBQW1CO2tCQUFuQixtQkFBbUI7VUFDbkIsdUJBQXVCO1VBQ3ZCLHVCQUFlO1VBQWYsZUFBZSxFQUFBO0VBM0V2QztVQThFd0IsbUJBQW1CLEVBQUE7RUE5RTNDO1FBbUZvQixvQkFBYTtRQUFiLGFBQWE7UUFDYiw4QkFBbUI7UUFBbkIsNkJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIseUJBQThCO2dCQUE5Qiw4QkFBOEI7UUFDOUIseUJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIsZ0JBQWdCLEVBQUE7RUF2RnBDO1VBeUZ3QixTQUFTO1VBQ1QsZUFBZTtVQUNmLCtCQUErQixFQUFBO0VBM0Z2RDtNQWlHZ0IsZ0JBQWdCLEVBQUE7RUFqR2hDO01BcUdnQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLDBCQUFrQjtNQUNsQiwwQkFBcUI7TUFDckIsaUJBQVk7TUFDWixzQkFBaUI7TUFDakIsZ0NBQXdCLEVBQUE7RUEzR3hDO01BK0dnQixzREFBOEM7Y0FBOUMsOENBQThDO01BQzlDLFdBQVc7TUFDWCxlQUFlO01BQ2YsZ0NBQWdDLEVBQUE7RUFsSGhEO0lBdUhZLGVBQWU7SUFDZixxQkFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDRCQUF1QixFQUFBO0VBU25DO0VBRVEsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVyxFQUFBO0VBUm5CO0VBV1EscUJBQWE7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFnQjtFQUNoQixrQkFBYztFQUNkLGdCQUFjO0VBQ2QsbUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0VBakJyQjtJQW1CWSxXQUFXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBdEIvQjtNQXdCZ0Isb0JBQWE7TUFBYixhQUFhO01BQ2IsOEJBQW1CO01BQW5CLDZCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixVQUFVLEVBQUE7RUEzQjFCO1FBNkJvQixZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixvQkFBYTtRQUFiLGFBQWE7UUFDYix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCLEVBQUE7RUFwQ3JDO1VBc0N3QiwrQkFBK0I7VUFDL0IsU0FBUztVQUNULGVBQWU7VUFDZixXQUFXLEVBQUE7RUF6Q25DO1FBNkNvQixVQUFVLEVBQUE7RUE3QzlCO1VBK0N3QixTQUFTO1VBQ1QsZUFBZTtVQUNmLFdBQVcsRUFBQTtFQWpEbkM7VUFvRHdCLDhCQUE4QjtVQUM5QixtQkFBbUI7VUFDbkIsZ0JBQWdCO1VBQ2hCLHVCQUF1QixFQUFBO0VBdkQvQztVQTBEd0IsK0JBQStCO1VBQy9CLG1CQUFtQjtVQUNuQixnQkFBZ0I7VUFDaEIsdUJBQXVCLEVBQUE7RUE3RC9DO01BbUVnQixZQUFZO01BQ1osV0FBVztNQUNYLFdBQVcsRUFBQTtFQXJFM0I7RUE4RVksMkJBQTJCLEVBQUE7RUE5RXZDO0VBbUZnQixhQUFhLEVBQUE7RUFuRjdCO0VBc0ZnQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixVQUFVLEVBQUE7RUF6RjFCO0lBOEZvQixxQkFBYTtJQUNiLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGtCQUFnQjtJQUNoQixnQkFBYztJQUNkLGdCQUFjO0lBQ2QsbUJBQWlCO0lBQ2pCLHdCQUFzQjtJQUN0QixzQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUE7RUExR3ZDO01BNEd3QixTQUFTO01BQ1QsV0FBVyxFQUFBO0VBN0duQztNQWlId0IsWUFBWTtNQUNaLFdBQVc7TUFDWCxvQkFBYTtNQUFiLGFBQWE7TUFDYix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLGlCQUFpQixFQUFBO0VBMUh6QztNQThId0Isb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsd0JBQWtCO2NBQWxCLGtCQUFrQixFQUFBO0VBaEkxQztRQW1JNEIsK0JBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1Mb2dve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgZGl2e1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiOWZmO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDBiOWZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xyXG4gICAgfVxyXG4gICAgaW9uLXRvb2xiYXI6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tdG9vbGJhcjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgfVxyXG4gICAgaHJ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMWEzNTZhO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoQnRue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDsgXHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7ICBcclxuICAgIC0tYmFja2dyb3VuZDogIzAwYWVlZjtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaElucHV0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLS1jb2xvcjojNjY2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoSXRlbXtcclxuICAgIC0tYm9yZGVyLXdpZHRoOjJweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDBiOWZmOyBcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiAyOHB4O1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgY29sb3I6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoRGl2e1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyNzRiOWU7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgZGl2e1xyXG4gICAgICAgIGlvbi10ZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdG9yX2ljb25fZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZzpmaXJzdC1jaGlsZCwgaW1nOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nOm50aC1jaGlsZCgyKSwgaW1nOm50aC1jaGlsZCg0KXtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZzpmaXJzdC1jaGlsZCwgaW1nOm50aC1jaGlsZCgyKXtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLk1haW5Db250ZW50e1xyXG4gICAgLnNlY0Ryb3BEb3due1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5zZWNfRGV0YWlse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIC5tZWRJdGVtU3BhbntcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuU2VjX0RldGFpbHNfU3Vie1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuYXJyb3dfZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXNsaWRlc3tcclxuICAgICAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM0MHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Db21wU2xpZGV7XHJcbiAgICAgICAgICAgIGlvbi1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWxpc3R7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC5jb21wSXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzI3NGI5ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaXJjbGVTbGlkZXtcclxuICAgICAgICAgICAgLnN0YXJ0LXJpbmcge1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAjMGU4MmU1O1xyXG4gICAgICAgICAgICAgICAgZmlsbDogI2ZmZjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5SZXBvcnRDb250ZW50e1xyXG4gICAgLmFycm93X2RpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiA1cHg7XHJcblxyXG4gICAgICAgIC5TdWJfdGl0bGV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVwb3J0RGl2e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI3NXB4KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGlzdHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI3NGI5ZTtcclxuXHJcbiAgICAgICAgICAgIGlvbi1saXN0LWhlYWRlcntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmxpc3RfaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBTZW1pQm9sZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1yYWRpb3tcclxuICAgICAgICAgICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLXJhZGlvOjpwYXJ0KGNvbnRhaW5lcil7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBkZkJ0bntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZW5kQnRue1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMiU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uQWxlcnRDb250ZW50e1xyXG4gICAgLmFycm93X2RpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiA1cHg7XHJcblxyXG4gICAgICAgIC5TdWJfdGl0bGV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWxlcnREaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjc1cHgpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBpb24tdGV4dHtcclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmFkaW9CdG5EaXZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuXHJcbiAgICAgICAgICAgIGlvbi1saXN0e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLXJhZGlve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpb24tcmFkaW86OnBhcnQoY29udGFpbmVyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC53ZWVrbHlfRGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vbnRobHlfRGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWxpc3Q6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBlcl9yYW5nZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAtLWtub2ItYmFja2dyb3VuZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgICAgIC0ta25vYi1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgLS1rbm9iLXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAtLWJhci1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wZXJfcmFuZ2U6OnBhcnQocGluKXtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIFJlZ3VsYXInO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmF2b2lkX2xvb3Nlcl9jb250ZW50e1xyXG4gICAgLmFycm93X2RpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLnNlY0Ryb3BEb3due1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5zZWNfRGV0YWlse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIC5tZWRJdGVtU3BhbntcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuU2VjX0RldGFpbHNfU3Vie1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2xpZGVze1xyXG4gICAgICAgIGlvbi1zbGlkZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzQwcHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkNvbXBTbGlkZXtcclxuICAgICAgICAgICAgaW9uLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tbGlzdHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbXBJdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjc0YjllO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/dataHandler/data-handler.service */ "./src/app/services/dataHandler/data-handler.service.ts");
/* harmony import */ var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/shareddata/data.service */ "./src/app/services/shareddata/data.service.ts");
/* harmony import */ var _Components_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/mobile-search/mobile-search.component */ "./src/app/Components/mobile-search/mobile-search.component.ts");
/* harmony import */ var _Components_sector_popover_sector_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/sector-popover/sector-popover.component */ "./src/app/Components/sector-popover/sector-popover.component.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/line-chart/line-chart.component */ "./src/app/Components/line-chart/line-chart.component.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");















var HomePage = /** @class */ (function () {
    function HomePage(screenOrientation, toastCtrl, popoverCtrl, modalCtrl, dataService, dataHandler, menuCtrl, platform, alertController, authService, storage, pickerCtrl) {
        this.screenOrientation = screenOrientation;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.dataHandler = dataHandler;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.alertController = alertController;
        this.authService = authService;
        this.storage = storage;
        this.pickerCtrl = pickerCtrl;
        this.rangePer = 1;
        this.alertSubmitBtn = true;
        this.avoidSlides = false;
        this.showLoader = false;
        this.alertUpdateBtn = false;
        this.AL_mainCircle = false;
        this.AL_rangeCircle = false;
        this.firstLoad = true;
        this.selWeeklyday = 'Monday';
        this.weeklyDiv = false;
        this.monthlyBtn = false;
        this.monthlyDate = 1;
        this.percentageRage = false;
        this.AvoidLosersec = false;
        this.AlertSec = false;
        this.ReportSec = false;
        this.data = [];
        this.sectorList = [];
        this.dbGICS = [];
        this.CurrSlide = 1;
        this.AL_CurrSlide = 1;
        this.selctedradioopts = 'daily';
        this.AL_List = [];
        this.AL_FilteredList = [];
        this.IndexId = 0;
        this.cumReturn = "0.0%";
        this.annReturn = "0.0%";
        this.CurrSliderData = { 'a': 0,
            'aAngle': 0,
            'e': 100,
            'eAngle': 360 };
        this.slideOpts = {
            initialSlide: this.CurrSlide,
            slidesPerView: 1,
        };
        this.monthlySlideOpts = {
            slidesPerView: 7,
        };
        this.sectorOrder = [{ name: 'Index', order: 1 }, { name: 'Sector', order: 2 }, { name: 'Industry Group', order: 3 }, { name: 'Industry', order: 4 }, { name: 'Sub Industry', order: 5 }];
        this.radius = 170;
        this.currentUser = this.authService.currentUserValue();
        // console.log(this.currentUser);
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
            // console.log(this.mobile);
        }
        this.menuCtrl.enable(true);
        this._dataSub = this.dataService.dbScore.subscribe(function (d) {
            if (d.length != 0) {
                _this.data = d;
                // console.log(d);
            }
        });
        this._selCompsub = this.dataService.mobSelComp.subscribe(function (d) {
            if (d) {
                if (_this.selComp == undefined) {
                    _this.selComp = d;
                    // console.log(this.selComp);
                    _this.indexClassifier();
                    _this.sectorClassifier();
                    _this.createIndexData();
                    setTimeout(function () {
                        _this.loadData();
                    }, 100);
                }
                else {
                    _this.selComp = d;
                    _this.AL_mainCircle = false;
                    _this.AL_rangeCircle = false;
                    _this.AvoidLosersec = false;
                    _this.avoidSlides = false;
                    if (_this.AlertSec) {
                        _this.AlertSec = false;
                    }
                    if (_this.ReportSec) {
                        _this.ReportSec = false;
                    }
                    _this.CurrSliderData = { 'a': 0,
                        'aAngle': 0,
                        'e': 100,
                        'eAngle': 360 };
                    _this.indexClassifier();
                    _this.sectorClassifier();
                    _this.createIndexData();
                    setTimeout(function () {
                        // this.CreateComps();
                        // this.createCompetitive(this.chartMain);
                        // this.fillCompetives();
                        // this.CreateCompCircle();
                        // setTimeout(() => {
                        //   this.creatClockSlider();
                        //   this.setClock(this.selComp.isin, this.selComp.deg *360/100, this.selComp.ticker );
                        // }, 100);
                        _this.loadData();
                    }, 500);
                }
            }
        });
        this._dbGICSSub = this.dataService.dbGICS.subscribe(function (d) {
            if (d.length != 0) {
                _this.dbGICS = d;
                // console.log(this.dbGICS);
            }
        });
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.screenOrientation.unlock();
    };
    HomePage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    HomePage.prototype.openSearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _Components_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_8__["MobileSearchComponent"],
                            cssClass: 'searchModel',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.sectorClassifier = function () {
        var _this = this;
        this.sectorList = [];
        var selCompInd = this.selComp.industry;
        // console.log(selCompInd);
        this.sectorOrder.forEach(function (i) {
            var temp = {
                secTitle: i.name,
                secName: _this.getSectorname(i.order, selCompInd),
                secCount: _this.getSecCount(i.order, selCompInd),
                secMed: _this.getSecMed(i.order, selCompInd)
            };
            _this.sectorList.push(temp);
        });
        // console.log(this.sectorList);
        this.selSec = this.sectorList[4];
        // console.log(this.selSec);
    };
    HomePage.prototype.indexClassifier = function () {
        var _this = this;
        this.indexData = this.data.filter(function (i) { return i.indexName == _this.selComp.indexName; });
        // console.log(this.indexData);
    };
    HomePage.prototype.getSectorname = function (lev, ind) {
        if (lev == 1) {
            return this.selComp.indexName;
        }
        else if (lev == 2) {
            var tempind = ind.slice(0, 2);
            var indname = this.dbGICS.filter(function (i) { return i.code == tempind; })[0];
            // console.log(indname);
            return indname.name;
        }
        else if (lev == 3) {
            var tempind = ind.slice(0, 4);
            var indname = this.dbGICS.filter(function (i) { return i.code == tempind; })[0];
            // console.log(indname);
            return indname.name;
        }
        else if (lev == 4) {
            var tempind = ind.slice(0, 6);
            var indname = this.dbGICS.filter(function (i) { return i.code == tempind; })[0];
            // console.log(indname);
            return indname.name;
        }
        else if (lev == 5) {
            var tempind = ind.slice(0, 8);
            var indname = this.dbGICS.filter(function (i) { return i.code == tempind; })[0];
            // console.log(indname);
            return indname.name;
        }
    };
    HomePage.prototype.getSecCount = function (lev, ind) {
        if (lev == 1) {
            return this.indexData.length;
        }
        else if (lev == 2) {
            var tempind = ind.slice(0, 2);
            var temp = this.indexData.filter(function (i) { return i.industry.slice(0, 2) == tempind; });
            return temp.length;
        }
        else if (lev == 3) {
            var tempind = ind.slice(0, 4);
            var temp = this.indexData.filter(function (i) { return i.industry.slice(0, 4) == tempind; });
            return temp.length;
        }
        else if (lev == 4) {
            var tempind = ind.slice(0, 6);
            var temp = this.indexData.filter(function (i) { return i.industry.slice(0, 6) == tempind; });
            return temp.length;
        }
        else if (lev == 5) {
            var tempind = ind.slice(0, 8);
            var temp = this.indexData.filter(function (i) { return i.industry.slice(0, 8) == tempind; });
            return temp.length;
        }
    };
    HomePage.prototype.getSecMed = function (lev, ind) {
        if (lev == 1) {
            return this.dataService.roundValue(this.dataService.getMed(this.indexData) * 100);
        }
        else if (lev == 2) {
            var tempind = ind.slice(0, 2);
            var temp = this.indexData.filter(function (i) { return i.industry.slice(0, 2) == tempind; });
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
        }
        else if (lev == 3) {
            var tempind = ind.slice(0, 4);
            var temp = this.indexData.filter(function (i) { return i.industry.slice(0, 4) == tempind; });
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
        }
        else if (lev == 4) {
            var tempind = ind.slice(0, 6);
            var temp = this.indexData.filter(function (i) { return i.industry.slice(0, 6) == tempind; });
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
        }
        else if (lev == 5) {
            var tempind = ind.slice(0, 8);
            var temp = this.indexData.filter(function (i) { return i.industry.slice(0, 8) == tempind; });
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
        }
    };
    HomePage.prototype.onAvoidLoserClick = function () {
        var _this = this;
        if (this.AvoidLosersec) {
            this.AvoidLosersec = false;
            this.AL_mainCircle = false;
            this.AL_rangeCircle = false;
            this.CurrSliderData = { 'a': 0,
                'aAngle': 0,
                'e': 100,
                'eAngle': 360 };
            if (!this.ReportSec && !this.AlertSec) {
                setTimeout(function () {
                    _this.loadData();
                }, 50);
                this.avoidSlides = false;
            }
        }
        else {
            this.AvoidLosersec = true;
            this.ReportSec = false;
            this.AlertSec = false;
            setTimeout(function () {
                _this.loadData();
            }, 50);
        }
    };
    HomePage.prototype.onAlertClick = function () {
        var _this = this;
        if (this.AlertSec) {
            this.AlertSec = false;
            if (!this.AvoidLosersec && !this.ReportSec) {
                setTimeout(function () {
                    _this.loadData();
                }, 50);
            }
        }
        else {
            this.showLoader = true;
            this.AvoidLosersec = false;
            this.AL_mainCircle = false;
            this.AL_rangeCircle = false;
            this.avoidSlides = false;
            this.CurrSliderData = { 'a': 0,
                'aAngle': 0,
                'e': 100,
                'eAngle': 360 };
            var userInfo = {
                userId: this.currentUser.userId,
                stockKey: this.selComp.stockKey
            };
            this.dataHandler.getAlert(userInfo).subscribe(function (d) {
                if (d.length != 0) {
                    _this.alertSubmitBtn = false;
                    _this.alertUpdateBtn = false;
                    if (d[0].daily == 'Y') {
                        _this.selctedradioopts = 'daily';
                    }
                    else if (d[0].monthly == 'Y') {
                        _this.selctedradioopts = 'monthly';
                        _this.monthlyDate = d[0].monthDt;
                        _this.monthlyBtn = true;
                    }
                    else if (d[0].weekly == 'Y') {
                        _this.selctedradioopts = 'weekly';
                        _this.selWeeklyday = d[0].weekDay;
                        _this.weeklyDiv = true;
                    }
                    if (d[0].scoreChange == 'Y') {
                        _this.perRadioGrp = 'percentage';
                        _this.rangePer = d[0].scorePercent;
                        _this.percentageRage = true;
                    }
                }
                else {
                    _this.alertSubmitBtn = true;
                    _this.selctedradioopts = 'daily';
                    _this.monthlyBtn = false;
                    _this.weeklyDiv = false;
                    _this.perRadioGrp = '';
                    _this.percentageRage = false;
                    _this.rangePer = 1;
                    _this.monthlyDate = 1;
                }
                _this.showLoader = false;
                _this.AlertSec = true;
                _this.AvoidLosersec = false;
                _this.ReportSec = false;
            });
        }
    };
    HomePage.prototype.onRemoveAlert = function (evt) {
        var _this = this;
        var userInfo = {
            userId: this.currentUser.userId,
            stockKey: this.selComp.stockKey
        };
        this.dataHandler.deleteAlert(userInfo).subscribe(function (d) {
            if (d[0] == "Success") {
                _this.alertSubmitBtn = true;
                _this.selctedradioopts = 'daily';
                _this.monthlyBtn = false;
                _this.weeklyDiv = false;
                _this.perRadioGrp = '';
                _this.percentageRage = false;
                _this.rangePer = 1;
                _this.monthlyDate = 1;
                _this.presentToast('Alert Removed successfully');
            }
        });
    };
    HomePage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.setRangePer = function (e) {
        this.rangePer = e.detail.value;
        if (!this.alertSubmitBtn) {
            this.alertUpdateBtn = true;
        }
        else {
            this.alertUpdateBtn = false;
        }
    };
    HomePage.prototype.onAlertSubmit = function (e) {
        var _this = this;
        var alerts = {
            userId: this.currentUser.userId,
            stockKey: this.selComp.stockKey,
            daily: this.selctedradioopts == 'daily' ? 'Y' : 0,
            weekly: this.selctedradioopts == 'weekly' ? 'Y' : 0,
            weekDay: this.selctedradioopts == 'weekly' ? this.selWeeklyday : 0,
            monthly: this.selctedradioopts == 'monthly' ? 'Y' : 0,
            monthDt: this.selctedradioopts == 'monthly' ? this.monthlyDate : 0,
            scoreChange: this.percentageRage ? 'Y' : 0,
            scorePercent: this.percentageRage ? this.rangePer : 0,
            mailType: 'H',
            country: this.selComp.country
        };
        // console.log(alerts);
        this.dataHandler.setAlert(alerts).subscribe(function (d) {
            if (d[0] == 'Success') {
                _this.presentToast('Alert Setted successfully');
                _this.alertSubmitBtn = true;
                _this.selctedradioopts = 'daily';
                _this.monthlyBtn = false;
                _this.weeklyDiv = false;
                _this.perRadioGrp = '';
                _this.percentageRage = false;
                _this.onAlertClick();
            }
        });
    };
    HomePage.prototype.onReportClick = function () {
        var _this = this;
        if (this.ReportSec) {
            this.ReportSec = false;
            if (!this.AvoidLosersec && !this.AlertSec) {
                setTimeout(function () {
                    _this.loadData();
                }, 50);
            }
        }
        else {
            this.ReportSec = true;
            this.AvoidLosersec = false;
            this.AlertSec = false;
        }
    };
    HomePage.prototype.getColor = function (med) {
        var gc100 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        return gc100(med);
    };
    HomePage.prototype.openSecPopOver = function (evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _Components_sector_popover_sector_popover_component__WEBPACK_IMPORTED_MODULE_9__["SectorPopoverComponent"],
                            translucent: true,
                            cssClass: 'sec-popover',
                            componentProps: { sectorList: this.sectorList, selComp: this.selComp }
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (d) {
                            if (d.data != undefined) {
                                _this.selSec = d.data;
                                _this.createIndexData();
                                if (!_this.AvoidLosersec) {
                                    setTimeout(function () {
                                        _this.scrollto();
                                    }, 50);
                                    setTimeout(function () {
                                        // setTimeout(() => {
                                        _this.CreateComps();
                                        // this.createCompetitive(this.chartMain);
                                        _this.fillCompetives();
                                        _this.CreateCompCircle();
                                        setTimeout(function () {
                                            _this.creatClockSlider();
                                            _this.setClock(_this.selComp.isin, _this.selComp.deg * 360 / 100, _this.selComp.ticker);
                                        }, 100);
                                        // }, 100);
                                    }, 100);
                                }
                                else if (_this.AvoidLosersec && !_this.AL_mainCircle && _this.AL_rangeCircle) {
                                    _this.CurrSliderData = { 'a': 0,
                                        'aAngle': 0,
                                        'e': 100,
                                        'eAngle': 360 };
                                    setTimeout(function () {
                                        _this.loadData();
                                    }, 100);
                                }
                                else if (_this.AvoidLosersec && _this.AL_mainCircle && !_this.AL_rangeCircle) {
                                    _this.CurrSliderData = { 'a': 0,
                                        'aAngle': 0,
                                        'e': 100,
                                        'eAngle': 360 };
                                    setTimeout(function () {
                                        _this.loadData();
                                        _this.AL_List = _this.selIndexData;
                                        _this.OnAL_listChange(_this.CurrSliderData);
                                    }, 100);
                                }
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.createIndexData = function () {
        var _this = this;
        if (this.selSec.length != 0) {
            var selSecLvl = this.sectorOrder.filter(function (i) { return i.name == _this.selSec.secTitle; })[0].order;
            // console.log(selSecLvl);
            if (selSecLvl == 1) {
                this.selIndexData = this.indexData;
            }
            else if (selSecLvl == 2) {
                this.selIndexData = this.indexData.filter(function (i) { return i.industry.slice(0, 2) == _this.selComp.industry.slice(0, 2); });
            }
            else if (selSecLvl == 3) {
                this.selIndexData = this.indexData.filter(function (i) { return i.industry.slice(0, 4) == _this.selComp.industry.slice(0, 4); });
            }
            else if (selSecLvl == 4) {
                this.selIndexData = this.indexData.filter(function (i) { return i.industry.slice(0, 6) == _this.selComp.industry.slice(0, 6); });
            }
            else if (selSecLvl == 5) {
                this.selIndexData = this.indexData.filter(function (i) { return i.industry == _this.selComp.industry; });
            }
            // console.log(this.selIndexData);
        }
    };
    HomePage.prototype.onArrowClick = function (d) {
        if (d == 0 && this.CurrSlide != 0) {
            this.scrollto();
        }
        this.CurrSlide = d;
        this.slides = document.getElementById('MainSlider');
        this.slides.slideTo(d);
    };
    HomePage.prototype.onALArrowClick = function (e) {
        var _this = this;
        // console.log(e);
        this.AL_slides = document.getElementById('AL_Slider');
        var currslide;
        if (e == 'prev') {
            this.AL_slides.slidePrev();
        }
        else if (e == 'frwd') {
            this.AL_slides.slideNext();
        }
        this.AL_slides.getActiveIndex().then(function (d) {
            _this.AL_CurrSlide;
        });
    };
    HomePage.prototype.onSlideChange = function (evt) {
        var _this = this;
        this.slides = document.getElementById('MainSlider');
        this.slides.getActiveIndex().then(function (d) {
            _this.CurrSlide = d;
            if (_this.CurrSlide == 0)
                _this.scrollto();
        });
    };
    HomePage.prototype.onALSlideChange = function (evt) {
        // console.log(evt);
        var _this = this;
        this.AL_CurrSlide = evt.target.swiper.activeIndex;
        var prev_ind = evt.target.swiper.previousIndex;
        if (this.AL_CurrSlide == 1) {
            this.AL_mainCircle = true;
            this.AL_rangeCircle = false;
            if (prev_ind != 0) {
                setTimeout(function () {
                    if (_this.AL_CurrSlide == 1) {
                        _this.showLoader = true;
                        _this.loadData();
                    }
                }, 1000);
            }
            else if (this.firstLoad) {
                setTimeout(function () {
                    if (_this.AL_CurrSlide == 1) {
                        _this.showLoader = true;
                        _this.firstLoad = false;
                        _this.loadData();
                    }
                }, 1000);
            }
        }
        else if (this.AL_CurrSlide == 2) {
            this.showLoader = true;
            this.AL_mainCircle = false;
            this.AL_rangeCircle = true;
            setTimeout(function () {
                _this.loadData();
                // console.log(this.CurrSliderData);
                // setTimeout(() => {
                // if(this.CurrSliderData){
                setTimeout(function () {
                    // console.log('On Slide Change',this.CurrSliderData);
                    var temp = { 0: 0, 1: _this.CurrSliderData.e };
                    _this.SliderOnChange(temp);
                }, 500);
                // }
                // }, 500);
            }, 50);
        }
        else if (this.AL_CurrSlide == 0) {
            this.scrollto();
        }
    };
    HomePage.prototype.roundMed = function (score) {
        return this.dataService.roundValue(score);
    };
    HomePage.prototype.onCompanyClick = function (comp) {
        var _this = this;
        this.selComp = comp;
        this.indexClassifier();
        this.sectorClassifier();
        this.createIndexData();
        setTimeout(function () {
            _this.CreateComps();
            _this.createCompetitive(_this.chartMain);
            _this.fillCompetives();
            _this.CreateCompCircle();
            setTimeout(function () {
                _this.creatClockSlider();
                _this.setClock(_this.selComp.isin, _this.selComp.deg * 360 / 100, _this.selComp.ticker);
            }, 100);
        }, 100);
        setTimeout(function () {
            _this.slides.slideTo(1);
        }, 50);
    };
    HomePage.prototype.scrollto = function () {
        var index = this.selIndexData.indexOf(this.selComp);
        var list = document.getElementById('CompList');
        list.scrollTop = 55 * (index - 3);
    };
    HomePage.prototype.loadData = function () {
        var _this = this;
        // console.log("loadata sarted");
        if (!this.AvoidLosersec)
            document.getElementById("Circleloader").style.display = "flex";
        this.gC360 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
            .domain([0, 90, 180, 270, 360])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        this.gC100 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        this.gchart = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gchart");
        // console.log(this.gchart);
        this.chartMain = this.createMainChart(this.gchart); // Create Main Chart circle
        setTimeout(function () {
            if (!_this.AvoidLosersec) {
                // svgHContainer1
                var slideHeight_1 = document.getElementsByClassName('circleSlide')[0].clientHeight;
                var slidewidth_1 = document.getElementsByClassName('circleSlide')[0].clientWidth;
                console.log(slideHeight_1);
                console.log(slidewidth_1);
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#svgHContainer1').attr('viewBox', function () {
                    return '0 0 ' + slidewidth_1 * 2 + ' ' + slideHeight_1;
                });
                _this.gchart.attr('transform', function () {
                    return 'translate(' + slidewidth_1 + ',' + slideHeight_1 / 2 + ')';
                });
            }
            else if (_this.AvoidLosersec && _this.AL_mainCircle && !_this.AL_rangeCircle) {
                var slideHeight_2 = document.getElementsByClassName('CircleSlider')[0].clientHeight;
                var slidewidth_2 = document.getElementsByClassName('CircleSlider')[0].clientWidth;
                console.log(slideHeight_2);
                console.log(slidewidth_2);
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#svgHContainer1').attr('viewBox', function () {
                    return '0 0 ' + slidewidth_2 * 2 + ' ' + slideHeight_2;
                });
                _this.gchart.attr('transform', function () {
                    return 'translate(' + slidewidth_2 + ',' + slideHeight_2 / 2 + ')';
                });
            }
        }, 500);
    };
    // loadDataAL(){
    //   console.log("loadataAL sarted");
    //   if(!this.AvoidLosersec)
    //   document.getElementById("Circleloader").style.display = "flex";
    //   this.gC360 = d3.scaleLinear()
    //     .domain([0, 90, 180, 270, 360])
    //     .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])
    //   this.gC100 = d3.scaleLinear()
    //     .domain([0, 25, 50, 75, 100])
    //     .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])
    //   this.gchart = d3.select("#gchart2");
    //   // console.log(this.gchart);
    //   this.chartMain = this.createMainChart(this.gchart); // Create Avoid Looser Chart circle
    // }
    HomePage.prototype.createMainChart = function (obj) {
        var that = this;
        var sradius = 100;
        obj.select("#crlChart").remove();
        var grp1 = obj.append("g").attr("id", "crlChart");
        grp1.append("circle")
            .attr("id", "maincircle")
            .attr("class", "start-ring")
            .attr("fill", "#fff")
            .attr('fill-opacity', function () {
            if ((that.AvoidLosersec && !that.AL_mainCircle && !that.AL_rangeCircle) || (that.AvoidLosersec && that.AL_rangeCircle && !that.AL_mainCircle)) {
                return '0';
            }
            else {
                return '1';
            }
        })
            .attr("r", 0)
            .transition()
            .on("end", function () {
            repeat();
            repeat1();
            that.createGradienArc(that.CurrSliderData.a, that.CurrSliderData.e);
        });
        function repeat() {
            obj.select(".ringAnim")
                .attr('r', (+sradius))
                .style('opacity', 1)
                .style('stroke-width', '5px')
                .transition()
                //.delay(600)
                //.duration(2000)
                .attr('r', sradius * 1.3)
                .style('stroke-width', '1px')
                .style('opacity', 0)
                .on("end", repeat);
        }
        ;
        function repeat1() {
            obj.select(".preloding")
                .style('opacity', .5)
                .transition()
                //.duration(1000)
                .style('opacity', 1)
                .transition()
                //.duration(1000)
                .style('opacity', .5)
                .on("end", repeat1);
        }
        return grp1;
    };
    HomePage.prototype.createGradienArc = function (sMin, sMax) {
        var _this = this;
        // console.log('createGradienArc');
        var that = this;
        // var sMin = 0;
        // var sMax = 100;
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#maincircle")
            .transition()
            //.delay(300)
            //.duration(1000)
            .attr('r', that.radius + 4)
            .style('stroke-width', '0px')
            .on("end", function () {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#maincircle")
                .transition()
                //.duration(1000)
                .style('stroke-width', '0px');
        });
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gradArc").remove();
        var gArc = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").append("g").attr("id", "gradArc");
        if ((this.AvoidLosersec && !this.AL_rangeCircle && !this.AL_mainCircle) || (this.AvoidLosersec && this.AL_rangeCircle)) {
            //mainCircle
            var arc = d3__WEBPACK_IMPORTED_MODULE_5__["arc"]()
                .innerRadius(this.radius - 25)
                .outerRadius(this.radius - 2);
        }
        else {
            //rangeCircle
            var arc = d3__WEBPACK_IMPORTED_MODULE_5__["arc"]()
                .innerRadius(this.radius - 18)
                .outerRadius(this.radius - 2);
        }
        var gC100 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        var colors = [];
        var color1 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
            .domain([0, 1, 2, 3, 4])
            .range([gC100(sMin),
            gC100(((sMax - sMin) * 25 / 100) + sMin),
            gC100(((sMax - sMin) * 50 / 100) + sMin),
            gC100(((sMax - sMin) * 75 / 100) + sMin),
            gC100(sMax)]);
        var linearGradient = gArc.append("defs");
        var linearG1 = linearGradient.append("linearGradient");
        var gCArcColor = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
            .domain([0, 90, 91, 180, 181, 270, 271, 360])
            .range([0, 100, 0, 100, 0, 100, 0, 100]);
        var MaxColor = "";
        var MaxScore = "";
        var Data1 = this.data.filter(function (x) { return x.cx >= -90 && x.cx <= 0; });
        linearG1.attr("id", "linearColors0")
            .attr("x1", "0").attr("y1", "0").attr("x2", ".5").attr("y2", "1");
        if (this.data != null) {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].cx >= -90 && this.data[i].cx <= 0) {
                    linearG1.append("stop").attr("offset", gCArcColor((this.data[i].cx) + 90) + "%").attr("stop-color", gC100(this.data[i].score));
                }
                if (this.data[i].cx > 0) {
                    linearG1.append("stop").attr("offset", "100%").attr("stop-color", gC100(this.data[i].score));
                    break;
                }
            }
            MaxColor = gC100(Data1[Data1.length - 1].score);
            MaxScore = Data1[Data1.length - 1].cx;
        }
        var Data2 = this.data.filter(function (x) { return x.cx >= 1 && x.cx <= 90; });
        var linearG2 = linearGradient.append("linearGradient");
        linearG2.attr("id", "linearColors1")
            .attr("x1", "0.8").attr("y1", "0").attr("x2", "0.5").attr("y2", "0.5");
        if (this.data != null) {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].cx >= 1 && this.data[i].cx <= 90) {
                    linearG2.append("stop").attr("offset", gCArcColor((this.data[i].cx) + 90) + "%").attr("stop-color", gC100(this.data[i].score));
                }
                if (this.data[i].cx > 90) {
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
        var Data3 = this.data.filter(function (x) { return x.cx >= 91 && x.cx <= 180; });
        var linearG3 = linearGradient.append("linearGradient");
        linearG3.attr("id", "linearColors2")
            .attr("x1", "0.8").attr("y1", "0.8").attr("x2", "0").attr("y2", "0.3");
        if (this.data != null) {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].cx >= 91 && this.data[i].cx <= 180) {
                    linearG3.append("stop").attr("offset", gCArcColor((this.data[i].cx) + 90) + "%").attr("stop-color", gC100(this.data[i].score));
                }
                if (this.data[i].cx > 180) {
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
        var Data4 = this.data.filter(function (x) { return x.cx >= 181 && x.cx <= 270; });
        var linearG4 = linearGradient.append("linearGradient");
        linearG4.attr("id", "linearColors3")
            .attr("x1", "0").attr("y1", "1").attr("x2", "1").attr("y2", "0");
        if (this.data != null) {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].cx >= 181 && this.data[i].cx <= 270) {
                    linearG4.append("stop").attr("offset", gCArcColor((this.data[i].cx) + 90) + "%").attr("stop-color", gC100(this.data[i].score));
                }
                if (this.data[i].cx > 270) {
                    break;
                }
            }
            if (Data4 == null || Data4.length == 0) {
                linearG4.append("stop").attr("offset", gCArcColor(MaxScore + 90) + "%").attr("stop-color", MaxColor);
            }
        }
        d3__WEBPACK_IMPORTED_MODULE_5__["range"](4).forEach(function (d, i) {
            // convert to radians
            var start = (i * 89) * (Math.PI / 180), end = ((i * 89.9) + 90) * (Math.PI / 180);
            colors.push({
                startAngle: start,
                endAngle: end
            });
        });
        // add arcs
        gArc.selectAll('.arc')
            .data(colors)
            .enter()
            .append('path')
            .attr('class', 'arc')
            .attr('d', arc)
            .attr('stroke', 'none')
            .attr('fill', function (d, i) { return 'url(#linearColors' + i + ')'; });
        this.showLoader = false;
        if ((this.AvoidLosersec && !this.AL_rangeCircle && !this.AL_mainCircle) || (this.AvoidLosersec && this.AL_rangeCircle && !this.AL_mainCircle)) {
            that.circleRange({ "start": sMin, "end": sMax });
            var Fourline1 = gArc.append("line");
            Fourline1.attr("id", "lineT").attr("class", "lineMark")
                .attr("x1", "0").attr("y1", "0").attr("x2", "0").attr("y2", "22")
                .style('transform', 'translate(0px, -167px)')
                .style('stroke', '#fff')
                .style('stroke-width', '4px');
            // gArc.append('text').attr("class", "AlpText").style('transform', 'translate(116px, -102px)').text('A');
            var Fourline3 = gArc.append("line");
            Fourline3.attr("id", "lineB").attr("class", "lineMark")
                .attr("x1", "0").attr("y1", "0").attr("x2", "0").attr("y2", "22")
                .style('transform', 'translate(0px, 145px)')
                .style('stroke', '#fff')
                .style('stroke-width', '4px');
            // gArc.append('text').attr("class", "AlpText").style('transform', 'translate(-123px, 113px)').text('C');
        }
        else {
            if ((this.AvoidLosersec && !this.AL_rangeCircle && !this.AL_mainCircle) || !this.AvoidLosersec)
                document.getElementById('Circleloader').style.display = "none";
            that.CreateComps();
            that.createCompetitive(this.chartMain);
            that.fillCompetives();
            if (!this.AvoidLosersec) {
                that.CreateCompCircle();
            }
            else if (that.AvoidLosersec && that.AL_mainCircle) {
                that.createALinnerCircle();
            }
            setTimeout(function () {
                if (!_this.AvoidLosersec) {
                    that.creatClockSlider();
                    that.setClock(_this.selComp.isin, _this.selComp.deg * 360 / 100, _this.selComp.ticker);
                }
                else if (_this.AvoidLosersec && _this.AL_mainCircle && _this.AL_FilteredList.filter(function (data) { return data.isin === _this.selComp.isin; }).length != 0) {
                    // if(){
                    that.creatClockSlider();
                    that.setClock(_this.selComp.isin, _this.selComp.deg * 360 / 100, _this.selComp.ticker);
                    // }
                }
            }, 300);
            // if(!this.AvoidLosersec){
            // }else{
            //   if(this.AL_rangeCircle){
            //     console.log('Range Circle');
            //     that.circleRange({ "start": sMin, "end": sMax });
            //   }else if(this.AL_mainCircle){
            //     console.log('Main Circle');
            //     document.getElementById('Circleloader').style.display = "none"; 
            //     that.CreateComps();
            //     that.createCompetitive(this.chartMain);
            //     that.fillCompetives();
            //     that.CreateCompCircle();
            //     setTimeout(() => {
            //       that.creatClockSlider();
            //     that.setClock(this.selComp.isin, this.selComp.deg *360/100, this.selComp.ticker);
            //     }, 300);
            //   }
            //   else if(){
            //   }
        }
    };
    HomePage.prototype.CreateComps = function () {
        var _this = this;
        var that = this;
        var oSvg = this.chartMain;
        var compLst;
        // console.log(this.selIndexData);
        var dta = this.selIndexData;
        var lvl = this.sectorOrder.filter(function (i) { return i.name == _this.selSec.secTitle; })[0].order;
        oSvg.select('.compList').remove();
        compLst = oSvg.append("g").attr('class', 'compList compLst' + lvl).style("display", "block");
        0;
        var compC = compLst.append("g").attr("class", 'compLstC' + lvl);
        var compg = compC.selectAll("g")
            .data(dta)
            .enter().append("g")
            .attr("class", "comp")
            .attr("transform", function (d, i) {
            return "rotate(" + ((i * 360 / dta.length) - 90) + ")";
        })
            .attr("name", function (d) { return d.isin + "_" + d.indexName.replace(/ /g, '_'); })
            .style('opacity', function (d) {
            if (that.AvoidLosersec) {
                if (that.AL_FilteredList.filter(function (data) { return data.isin === d.isin; }).length != 0) {
                    return '1';
                }
                else {
                    return '0';
                }
            }
            else {
                return '1';
            }
        });
        var SelRes = this.indexData;
        var dmin = d3__WEBPACK_IMPORTED_MODULE_5__["min"](SelRes.map(function (x) { return x.marketCap; }));
        var dmax = d3__WEBPACK_IMPORTED_MODULE_5__["max"](SelRes.map(function (x) { return x.marketCap; }));
        var dmean = d3__WEBPACK_IMPORTED_MODULE_5__["mean"](SelRes.map(function (x) { return x.marketCap; }));
        var dsum = d3__WEBPACK_IMPORTED_MODULE_5__["sum"](SelRes.map(function (x) { return x.marketCap; }));
        var ResMarketCap = SelRes.map(function (x) { return x.marketCap; });
        var LimitedCap = ResMarketCap.filter(function (x) { return x < dmean && x != null; });
        var dlimitedSum = d3__WEBPACK_IMPORTED_MODULE_5__["sum"](LimitedCap);
        var rmax = (dmax - dmin) > 100 ? 100 : (dmax - dmin);
        rmax = rmax < 50 ? 50 : rmax;
        var h = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
            .domain([dmin, dmax])
            .range([0, 50]);
        var LimitedMarketCap = compg.append("rect")
            .attr("height", "1px")
            .attr("class", "crect")
            //.attr("fill", "rgba(100,100,100,.5)") 
            .attr("x", that.radius + 3)
            .attr("width", 0)
            .transition()
            .duration(10)
            .attr("width", function (d) {
            if (d.indexName.indexOf("New Age Alpha") > -1 && that.selComp.indexName.indexOf("New Age Alpha") == -1) {
                return "0px";
            }
            else {
                var wtdwidth = 0;
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
    };
    HomePage.prototype.createCompetitive = function (grp1) {
        grp1.append("g").attr("id", "gCompetitive");
    };
    HomePage.prototype.creatClockSlider = function () {
        var that = this;
        var r = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#maincircle").attr("r");
        that.createXrad = parseInt(r);
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").remove();
        var g = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").append("g")
            .attr("id", "cSlider")
            .attr('transform', 'rotate(' + (-90) + ')');
        var rect1 = g.append("rect")
            .attr("class", "sRect1")
            .attr("x", r)
            .attr("y", -.5)
            .attr("height", 3)
            .attr("width", 50)
            .attr("fill", "#00b9ff");
        var rect = g.append("rect")
            .attr("class", "sRect")
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("x", +r + (25))
            //.attr("y", -20)
            .attr("height", "40px")
            .attr("width", "170px")
            .style("display", "none");
        var text = g.append("text")
            .attr("class", "sText")
            .attr("x", +r + (40))
            .attr("dy", 0)
            .style("alignment-baseline", "middle")
            .style("font-size", "18px")
            .style("font-family", "Open Sans Bold")
            .style("display", "none")
            .text("0.00");
    };
    HomePage.prototype.fillCompetives = function () {
        var that = this;
        var dta = this.selIndexData;
        // console.log(this.selIndexData);
        var lvl = 1;
        // console.log(lvl);
        var gs = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gCompetitive");
        gs.selectAll("g").remove();
        dta = dta.filter(function (t) { return t.isin != ""; });
        dta = dta.sort(function (x, y) {
            return d3__WEBPACK_IMPORTED_MODULE_5__["ascending"](parseFloat(x.score), parseFloat(y.score));
        });
        var ggs = gs.selectAll("g")
            .data(dta)
            .enter().append("g")
            .attr("name", function (d) { return d.isin; })
            .attr("class", function (d) {
            return "Compet" + d.isin;
            //} 
        })
            .attr("transform", function (d, i) {
            // return "rotate(" + ((i * 360 / dta.length) - 90) + ")";
            var cx = ((i * 360 / dta.length) - 90);
            if (cx <= 90) {
                return "rotate(" + (cx + 1.0) + ")";
            }
            else {
                return "rotate(" + (cx - 1.0) + ")";
            }
        })
            .style("opacity", function (d) {
            var sMin = 0; //that.sliderRange.value()[0].toFixed(0);
            var sMax = 100; // that.sliderRange.value()[1].toFixed(0);
            var opa = 1;
            if (that.AvoidLosersec) {
                // console.log(that.AL_FilteredList);
                // console.log(that.AL_FilteredList.filter(data => data.isin === d.isin).length);
                if (that.AL_FilteredList.filter(function (data) { return data.isin === d.isin; }).length != 0) {
                    // console.log('AL if part');
                    if (that.selComp.isin == d.isin) {
                        return '0';
                    }
                    else {
                        if (that.AL_List.length > 180) {
                            return '0.07';
                        }
                        else {
                            return '1';
                        }
                    }
                }
                else {
                    // console.log('AL else part');
                    return '1';
                }
            }
            else if (that.selComp.isin != d.isin) {
                if (dta.length > 180) {
                    opa = 1 - (((sMax - sMin) / 100) - (.1));
                }
                if (lvl == 4) {
                    return opa;
                }
                else {
                    // return (distinctISIN.includes(d.isin) ? "1" : opa);
                }
                return opa;
            }
            else {
                return 0;
            }
        });
        ggs.append("text")
            .attr("x", function (d, i) {
            var cx = ((i * 360 / dta.length) - 90);
            return cx > 90 ? "-215" : "215";
        })
            .attr("transform", function (d, i) {
            //return (d.deg * 3.6) > 180 ? "rotate(180)" : null;
            return ((i * 360 / dta.length) - 90) > 90 ? "rotate(180)" : null;
        })
            .style("text-anchor", function (d, i) {
            //  return (d.deg * 3.6) > 180 ? "end" : null;
            var cx = ((i * 360 / dta.length) - 90);
            return cx > 90 ? "end" : null;
        })
            .attr("class", function (d) {
            return "";
        })
            .style('fill', function (d) {
            if (that.AvoidLosersec) {
                if (that.AL_FilteredList.filter(function (data) { return data.isin === d.isin; }).length != 0) {
                    return '#fff';
                }
                else {
                    return 'rgb(29 57 123)';
                }
            }
        })
            //.text(function (d) { return d.company + " (" + d.ticker + ")"; }).call(that.wrap, 100);
            .text(function (d, i) {
            var cx = ((i * 360 / dta.length) - 90);
            if (cx > 90) {
                var txt = " (" + d.ticker + ") " + d.company.trim() + "...";
                var resvtxt = " (" + d.ticker + ") ...";
                var cnt = txt.length;
                var rsvcnt = resvtxt.length;
                return " (" + d.ticker + ") " + d.company.slice(0, (17 - rsvcnt)).trim() + "...";
            }
            else {
                var txt = d.company.trim() + "... (" + d.ticker + ")";
                var resvtxt1 = "... (" + d.ticker + ")";
                var cnt = txt.length;
                var rsvcnt1 = resvtxt1.length;
                return d.company.slice(0, (17 - rsvcnt1)).trim() + "... (" + d.ticker + ")";
            }
        });
    };
    HomePage.prototype.createALinnerCircle = function () {
        var _this = this;
        var that = this;
        var cradius = 150;
        var oSvg = that.chartMain;
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#innerCircleGrp').remove();
        var innerCirclegrp = oSvg.append("g").attr('id', "innerCirclegrp");
        var TI_Grp = innerCirclegrp.append("g").attr('id', 'TIGrp')
            .attr('transform', 'translate(-40,-110)');
        // var innerCircle = TI_Grp.append("circle")
        // .attr("id", "inmaincircle")
        // .attr("fill", "#fff")
        // .attr("r", cradius);
        // var Comp_Top = innerCirclegrp.append('g')
        // .attr('id','Comp_Top');
        TI_Grp.append('circle')
            .attr('id', 'CT_mCircle')
            .attr('r', '25')
            .style('stroke', '#e5e5e5')
            .style('fill', 'none');
        TI_Grp.append('text')
            .style('fill', function () {
            return that.getColor(that.roundMed(that.selComp.scores * 100));
        })
            .style('font-size', '16')
            .style('font-family', 'Open Sans ExtraBold')
            .attr('dx', '-18')
            .attr('dy', '5')
            .text(function () {
            return that.roundMed(that.selComp.scores * 100);
        });
        TI_Grp.append('text')
            .style('font-size', '18')
            .style('font-family', 'Open Sans ExtraBold')
            .style('fill', '#224b9e')
            .attr('dx', '40')
            .attr('dy', '5')
            .text(function () {
            return "(" + that.selComp.ticker + ")";
        });
        var Sec_Top = innerCirclegrp.append('g')
            .attr('id', 'Sec_Top')
            .attr('transform', 'translate(-90,-50)');
        Sec_Top.append('circle')
            .attr('id', 'ST_mCircle')
            .attr('r', '35')
            .style('stroke', '#e5e5e5')
            .style('fill', 'none');
        Sec_Top.append('text')
            .style('fill', function () {
            return that.getColor(that.selSec.secMed);
        })
            .style('font-size', '16')
            .style('font-family', 'Open Sans ExtraBold')
            .attr('dx', '-18')
            .attr('dy', '5')
            .text(function () {
            return that.selSec.secMed;
        });
        Sec_Top.append('text')
            .style('font-size', '16')
            .style('font-family', 'Open Sans SemiBold')
            .style('fill', '#224b9e')
            .attr('dx', '40')
            .attr('dy', '-12')
            .text(function () {
            return that.selSec.secTitle;
        });
        var FO_Sec_Top = Sec_Top.append('foreignObject')
            .attr('x', '40')
            .attr('y', '-8')
            .attr('width', '200')
            .attr('height', '40');
        FO_Sec_Top.append('xhtml:p')
            .attr('xmlns', 'http://www.w3.org/1999/xhtml')
            .style('margin', '0')
            .style('text-align', 'start')
            .style('font-size', '16px')
            .style('font-family', 'Open Sans Bold')
            .style('color', '#224b9e')
            .style('line-height', '1.4')
            .style('-webkit-line-clamp', '1')
            .style('-webkit-box-orient', 'vertical')
            .style('display', '-webkit-box')
            .style('overflow', 'hidden')
            .text(that.selSec.secName);
        if (that.AL_List.length - that.AL_FilteredList.length > 0) {
            FO_Sec_Top.append('xhtml:p')
                .attr('xmlns', 'http://www.w3.org/1999/xhtml')
                .style('margin', '0')
                .style('text-align', 'start')
                .style('font-size', '16px')
                .style('font-family', 'Open Sans Bold')
                .style('color', '#224b9e')
                .style('line-height', '1.4')
                .text(function () {
                return that.AL_List.length - that.AL_FilteredList.length + ' Losers';
            });
        }
        var ChartGrp = innerCirclegrp.append('g')
            .attr('id', 'ChartGrp')
            .attr('transform', 'translate(-190,35)');
        var FO_Chart = ChartGrp.append('foreignObject')
            .attr('x', '40')
            .attr('y', '-48')
            .attr('id', 'FO_Chart')
            .attr('width', '300')
            .attr('height', '150');
        FO_Chart.append('xhtml:p')
            .attr('xmlns', 'http://www.w3.org/1999/xhtml')
            .attr('id', 'ALC_text')
            .style('margin', '0')
            .style('color', '#224b9e')
            .style('font-size', '14px')
            .style('font-family', 'Open Sans Regular')
            .style('line-height', '1.2')
            .text(function () {
            return 'Click to expand Performance';
        });
        var chartDiv = FO_Chart.append('xhtml:div')
            .attr('xmlns', 'http://www.w3.org/1999/xhtml')
            .attr('id', 'ALC_container')
            .style('width', '100%')
            .style('display', 'flex')
            .style('justify-content', 'center');
        var innerchartDiv = chartDiv.append('xhtml:div')
            .attr('xmlns', 'http://www.w3.org/1999/xhtml')
            .style('width', '70%')
            .style('border', '1px solid #ddd')
            .style('border-radius', '5px')
            .style('padding', '4px');
        var chart = innerchartDiv.append('xhtml:span')
            .attr('xmlns', 'http://www.w3.org/1999/xhtml')
            .attr('id', 'lineChart')
            .style('height', '65px')
            .style('width', '100%')
            .style('display', 'block')
            .style('overflow', 'hidden')
            .on('click', function () {
            that.onChartClick();
        });
        that.highChartLine(chart);
        setTimeout(function () {
            if (_this.chartData) {
                var addInfoDiv = FO_Chart.append('xhtml:p')
                    .attr('xmlns', 'http://www.w3.org/1999/xhtml')
                    .text('Additional Return')
                    .style('font-size', '14px')
                    .style('font-family', 'Open Sans Regular')
                    .style('color', '#224b9e')
                    .style('line-height', '1.4')
                    .style('margin', '0');
                var infodiv = FO_Chart.append('xhtml:div')
                    .attr('xmlns', 'http://www.w3.org/1999/xhtml')
                    // .attr('id','AL_AI_Span')
                    .style('width', '100%')
                    .style('display', 'flex')
                    .style('justify-content', 'center');
                var infoSpan = infodiv.append('xhtml:span')
                    .attr('xmlns', 'http://www.w3.org/1999/xhtml')
                    .attr('id', 'AL_AI_Span')
                    .style('width', '65%')
                    .style('display', 'flex')
                    .style('flex-direction', 'row')
                    .style('padding', '0px 5px')
                    .style('justify-content', 'space-between');
                infoSpan.append('xhtml:p')
                    .attr('xmlns', 'http://www.w3.org/1999/xhtml')
                    .text(function () {
                    return '(C) ' + that.cumReturn;
                })
                    .style('font-size', '14px')
                    .style('font-family', 'Open Sans Bold')
                    .style('color', '#224b9e')
                    .style('line-height', '1.4')
                    .style('margin', '0');
                infoSpan.append('xhtml:p')
                    .attr('xmlns', 'http://www.w3.org/1999/xhtml')
                    .text(function () {
                    return '(A) ' + that.annReturn;
                })
                    .style('font-size', '14px')
                    .style('font-family', 'Open Sans Bold')
                    .style('color', '#224b9e')
                    .style('line-height', '1.4')
                    .style('margin', '0');
            }
        }, 1000);
    };
    HomePage.prototype.highChartLine = function (chart) {
        var _this = this;
        var that = this;
        if (this.selComp != "") {
            var indexValue_1 = [];
            var date_1 = [];
            var Ctype = 'MC';
            var GICSId = 0;
            var range = '';
            var selSecLvl = this.sectorOrder.filter(function (i) { return i.name == _this.selSec.secTitle; })[0].order;
            if (selSecLvl == 1) {
                GICSId = 0;
            }
            else {
                GICSId = that.selComp.industry.slice(0, 2 * (selSecLvl - 1));
            }
            range = 'top' + this.CurrSliderData.e;
            // console.log(this.IndexId,GICSId,Ctype,range);
            this.dataHandler.getIndexPreRuns(this.IndexId, GICSId, Ctype, range).subscribe(function (res) {
                // console.log(res);
                if (res.length != 0) {
                    that.chartData = true;
                    if (that.smChart != null) {
                        that.smChart.destroy();
                        that.smChart = null;
                    }
                    var ReturnVal = [];
                    var ReturnVal1 = [];
                    var indexValue1 = [];
                    for (var i = 0; i <= (res.length - 1); ++i) {
                        indexValue1.push(res[i]['top100']);
                        date_1.push(res[i]['date']);
                    }
                    var d = new Date(date_1[date_1.length - 1]);
                    var formatdate = that.formatedates(d.getMonth() + 1) + '/' + that.formatedates(d.getDate()) + '/' + d.getFullYear();
                    var since = new Date(date_1[0]);
                    var sinceIncep = that.formatedates(since.getMonth() + 1) + '/' + that.formatedates(since.getDate()) + '/' + since.getFullYear();
                    var series = [];
                    series.push({
                        name: "All  (" + formatdate + ' : ' + indexValue1[indexValue1.length - 1].toFixed(2) + ")",
                        marker: {
                            symbol: ''
                        },
                        dataLabels: {
                            style: {
                                fontSize: 8 + 'px',
                            }
                        },
                        color: '#9b9b9b',
                        data: indexValue1,
                        lineWidth: 0.9
                    });
                    ReturnVal = that.calcCumAndAnnReturns(indexValue1, date_1);
                    if (0 < that.CurrSliderData.e && 100 > that.CurrSliderData.e && (that.CurrSliderData.e != 25 && that.CurrSliderData.e != 75)) {
                        for (var i = 0; i <= (res.length - 1); ++i) {
                            //indexValue.push(res[i][that.clkdRgeText + that.SRValue]);
                            indexValue_1.push(res[i]["range"]);
                            date_1.push(res[i]['date']);
                        }
                        var d = new Date(date_1[date_1.length - 1]);
                        var formatdate1 = that.formatedates(d.getMonth() + 1) + '/' + that.formatedates(d.getDate()) + '/' + d.getFullYear();
                        series.push({
                            name: "Top " + that.CurrSliderData.e + "% (" + formatdate1 + ' : ' + indexValue_1[indexValue_1.length - 1].toFixed(2) + ")",
                            marker: {
                                symbol: ''
                            },
                            dataLabels: {
                                style: {
                                    fontSize: 8 + 'px',
                                }
                            },
                            data: indexValue_1,
                            color: '#00b9ff',
                            lineWidth: 0.9
                        });
                        ReturnVal1 = that.calcCumAndAnnReturns(indexValue_1, date_1);
                        if ((ReturnVal1[0] - ReturnVal[0]) > 0) {
                            that.cumReturn = '+' + (ReturnVal1[0] - ReturnVal[0]).toFixed(2) + '%';
                        }
                        else {
                            that.cumReturn = (ReturnVal1[0] - ReturnVal[0]).toFixed(2) + '%';
                        }
                        if ((ReturnVal1[1] - ReturnVal[1]) > 0) {
                            that.annReturn = '+' + (ReturnVal1[1] - ReturnVal[1]).toFixed(2) + '%';
                        }
                        else {
                            that.annReturn = (ReturnVal1[1] - ReturnVal[1]).toFixed(2) + '%';
                        }
                    }
                    that.smChart = highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]({
                        chart: {
                            renderTo: 'lineChart',
                            type: 'spline',
                            style: {
                                fontFamily: 'Open Sans SemiBold'
                            },
                            margin: 0,
                        },
                        exporting: {
                            url: 'https://export.highcharts.com/',
                            enabled: true,
                            buttons: {
                                contextButton: {
                                    menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG'],
                                },
                            },
                        },
                        credits: {
                            enabled: false
                        },
                        legend: {
                            enabled: false,
                            itemStyle: {
                                fontSize: '9px'
                            },
                            layout: 'vertical',
                            backgroundColor: '#FFFFFF',
                            align: 'left',
                            verticalAlign: 'top',
                            floating: true,
                            x: 20,
                            y: -15
                        },
                        title: {
                            text: ''
                        },
                        subtitle: {
                            text: ''
                        },
                        xAxis: {
                            tickLength: 0,
                            lineColor: 'transparent',
                            // minRange: 10,
                            type: 'datetime',
                            categories: date_1,
                            tickColor: '#f1f1f1',
                            // useHTML: true,
                            tickWidth: 1,
                            labels: {
                                enabled: false,
                                rotation: 310,
                                formatter: function () {
                                    var d = new Date(this.value);
                                    var currentMonth = (d.getMonth() + 1);
                                    if (currentMonth < 10) {
                                        currentMonth = '0' + currentMonth;
                                    }
                                    return (d.getFullYear().toString());
                                },
                                style: {
                                    color: '#333',
                                    fontSize: '9px',
                                }
                            }
                        },
                        yAxis: {
                            maxPadding: 0.2,
                            gridLineColor: 'transparent',
                            title: {
                                text: ''
                            },
                            labels: {
                                enabled: false,
                                style: {
                                    color: '#333',
                                    fontSize: '9px'
                                }
                            }
                        },
                        tooltip: {
                            enabled: false,
                            xDateFormat: '%Y-%m-%d',
                            valueDecimals: 2,
                            //crosshairs: true,
                            shared: true,
                            dateTimeLabelFormats: {
                                millisecond: "%A, %b %e"
                            },
                            formatter: function () {
                                var d = new Date(this.x);
                                function formater(value) { if (value < 10) {
                                    return '0' + value;
                                }
                                else {
                                    return value;
                                } }
                                var formatdate = formater(d.getMonth() + 1) + '/' + formater(d.getDate()) + '/' + d.getFullYear();
                                if (this.points.length > 1) {
                                    return "<div style='font-size:7pt'>" + formatdate + "<br><b>All : </b> <span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + "</span><br><b>" + that.CurrSliderData.e + " : </b><span style='font-size: 8pt'>" + this.points[1].y.toFixed(2) + ' </span></div>';
                                }
                                else if (this.points[0].color == "#00b9ff") {
                                    return "<div style='font-size:7pt'>" + formatdate + "<br><b>" + that.CurrSliderData.e + " : </b><span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + '</span></div>';
                                }
                                else {
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
                            noData: "No Data",
                        },
                        noData: {
                            style: {
                                fontWeight: 'bold',
                                fontSize: '7px',
                                color: '#303030'
                            }
                        }
                    });
                }
                else {
                    that.chartData = false;
                    d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#ALC_container').style('margin-top', '20px');
                    d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#ALC_text').style('display', 'none');
                    chart.on('click', null);
                    chart.style('display', 'flex')
                        .style('justify-content', 'center')
                        .style('align-items', 'center')
                        .style('font-size', '18px')
                        .style('font-family', 'Open Sans SemiBold')
                        .style('color', '#999')
                        .text('No Data');
                }
            });
        }
    };
    HomePage.prototype.onChartClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selSecLvl, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selSecLvl = this.sectorOrder.filter(function (i) { return i.name == _this.selSec.secTitle; })[0].order;
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _Components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__["LineChartComponent"],
                                cssClass: 'AL_LChart',
                                componentProps: {
                                    'currentData': this.CurrSliderData,
                                    'indexId': this.IndexId,
                                    'selSecLvl': selSecLvl,
                                    'selComp': this.selComp
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) {
                            // console.log(d.data.range);
                            // console.log(this.CurrSliderData);
                            _this.OnAL_listChange(_this.CurrSliderData);
                            _this.loadData();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.calcCumAndAnnReturns = function (indexValue, date) {
        var that = this;
        var newd = (indexValue[indexValue.length - 1] / 1000) - 1;
        var cumReturn = "0.0%";
        var annReturn = "0.0%";
        var startDate = new Date(date[0]);
        var endDate = new Date(date[date.length - 1]);
        var oneDay = 24 * 60 * 60 * 1000;
        var Difference_In_Time = endDate.getTime() - startDate.getTime();
        // To calculate the no. of days between two dates 
        var diffDays = Difference_In_Time / (1000 * 3600 * 24);
        var years = diffDays / 365;
        cumReturn = (newd * 100).toFixed(2);
        var MathVal = 1 + newd;
        annReturn = ((Math.pow(MathVal, (1 / years)) - 1) * 100).toFixed(2);
        return [cumReturn, annReturn];
    };
    HomePage.prototype.formatedates = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        else {
            return value;
        }
    };
    HomePage.prototype.CreateCompCircle = function () {
        var that = this;
        var cradius = 150;
        var oSvg = that.chartMain;
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#innerCircleGrp").remove();
        var innerCirclegrp = oSvg.append("g").attr("id", "innerCircleGrp");
        var innerCircle = innerCirclegrp.append("circle")
            .attr("id", "inmaincircle")
            .attr("fill", "#fff")
            .attr("r", cradius);
        var Ctext = innerCirclegrp.append("g").attr('id', "CompText");
        var txt = that.selComp.companyName + " (" + that.selComp.ticker + ")";
        var comptext = Ctext.append("text")
            .attr("x", function (d) { return '0'; })
            .attr("y", function (d) { return '-5%'; })
            .attr("dy", function (d) { return '-1em'; })
            .attr("dominant-baseline", "middle")
            .attr("text-anchor", "middle")
            .attr('class', 'innerComp')
            .text(txt).call(that.compwrap, 250);
        var med = that.roundMed(that.selComp.scores * 100);
        // console.log(med);
        Ctext.append("text")
            .attr("x", function (d) { return '0'; })
            .attr("y", function (d) { return ((txt.length / 20) + 2) + '%'; })
            .attr("dy", function (d) {
            return ((txt.length / 20) - 2) + "rem";
        })
            .attr("dominant-baseline", "middle")
            .attr("text-anchor", "middle")
            .attr('class', 'innerCompMed')
            .style('fill', that.getColor(med))
            .text(med);
        // comptext.append("tspan")
        // .attr('class','innerCompMed')
        // // .attr('x',function(d){return "0"})
        // // .attr('y',function(d){return '-5%'})
        // // .attr('dy',function(d){return })
        // .style('fill',that.getColor(med))
        // .text(med)
    };
    HomePage.prototype.compwrap = function (text, width) {
        text.each(function () {
            var text = d3__WEBPACK_IMPORTED_MODULE_5__["select"](this), words = text.text().split(/\s+/).reverse(), word, line = [], lineNumber = 0, lineHeight = 1.1, // ems
            y = text.attr("y"), dy = parseFloat(text.attr("dy")), tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
    };
    HomePage.prototype.wrap = function (text, width, align) {
        if (align === void 0) { align = null; }
        var that = this;
        text.each(function (d) {
            var text = d3__WEBPACK_IMPORTED_MODULE_5__["select"](this), words = text.text().replace("-", "- ").split(/\s+/).reverse(), word, line = [], lineNumber = 0, lineHeight = text.style("font-size").replace("px", ""), // ems
            y = text.attr("y"), dy = 0, //parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("dx", 5).attr("dy", 5), textalign = (text.style("text-anchor") == "end") ? false : true;
            // console.log(textalign);
            tspan.attr("class", "txt");
            var i = 0;
            while (word = words.pop()) {
                lineNumber = lineNumber + 1;
                // console.log('lineNumber',lineNumber);
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > ((width * lineHeight) / 10)) {
                    if (i == 0) {
                        tspan.attr("dy", 0);
                    }
                    i++;
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    if (textalign) {
                        tspan = text.append("tspan").attr("dy", (+lineHeight + 3) + "px").attr("dx", -(tspan.node().getComputedTextLength())).text(word);
                    }
                    else {
                        tspan = text.append("tspan").attr("dy", lineHeight + "px").text(word);
                    }
                    tspan.attr("class", "txt");
                }
                if (i > 0 && !textalign) {
                    tspan.attr("dx", -(tspan.node().getComputedTextLength()));
                }
            }
            // console.log(line);  
            if (tspan.text().indexOf("[") > -1) {
                var txt = tspan.text();
                var txt1 = txt.substring(txt.indexOf("[") + 1, txt.indexOf("]"));
                var txt2 = txt.substring(txt.indexOf("["), txt.indexOf("]") + 1);
                txt2 = txt.replace(txt2, "");
                if (txt2 != "") {
                    tspan.text(txt2);
                    text.append("tspan")
                        .text(txt1)
                        .attr("class", "score");
                    //.attr("dy", tspan.attr("dy"))
                }
                else {
                    tspan.text(txt1)
                        .attr("class", "score");
                }
            }
            if (align == null) {
                var j = i;
                text.attr("y", -(j * 5));
            }
        });
    };
    HomePage.prototype.setClock = function (isin, val, txt) {
        // console.log(isin,val,txt);
        var that = this;
        if (txt != null) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").style("display", "none");
            var r = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#maincircle").attr("r");
            var gC360_1 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
                .domain([0, 90, 180, 270, 360])
                .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
            var comp = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.Compet' + isin).style('display', "none");
            // console.log(comp);
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider")
                .attr('transform', function (d) {
                var i = that.selIndexData.indexOf(that.selComp);
                var len = that.selIndexData.length;
                return "rotate(" + ((i * 360 / len) - 90) + ")";
            })
                .attr('name', isin);
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").select(".sText")
                .attr("x", function () {
                return val > 180 ? "-210" : "208";
            })
                .attr("transform", function () {
                //  return val > 180 ? "rotate(180 " + (+r + 140) + ", 0)" : null;
                return val > 180 ? "rotate(180)" : null;
            })
                .style("text-anchor", function () {
                return val > 180 ? "end" : null;
            })
                .style("display", function () { return txt == null ? "none" : "block"; })
                .attr("fill", function () {
                return gC360_1(val);
                //if (score >= 40 && score < 55) {
                //  return "#FF9503";
                //}
                //else {
                //  return "#fff";
                //}
            })
                .text(txt).call(that.wrap, 100);
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").style("display", "block");
            var bbox = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").select(".sText").node().getBBox();
            var bboxH = +bbox.height + 20;
            bboxH = bboxH > 40 ? bboxH : 40;
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").select(".sRect")
                //.attr("fill", function () { return gC360(score * 360 / 100); })
                .attr("fill", "#fff")
                .attr("stroke", "#00b5fa")
                .attr("stroke-width", "3px")
                .style("display", function () { return txt == null ? "none" : "block"; })
                .attr("height", bboxH)
                .attr("width", bbox.width + 50)
                .attr("y", -(bboxH / 2));
            var calW = parseInt(that.createXrad + bbox.width);
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").select(".sTextReverse")
                .attr("fill", "#fff")
                .style("display", function () { return txt == null ? "none" : "block"; })
                .attr("x", function () {
                if (bboxH == 40) {
                    return -(bboxH + 0);
                }
                else if (bboxH < 50) {
                    return -(bboxH - 3);
                }
                else if (bboxH > 50) {
                    return -(bboxH - 15);
                }
            })
                .attr("y", -(calW + 17));
            d3__WEBPACK_IMPORTED_MODULE_5__["select"](".comp[name='" + isin + "_" + that.selComp.indexName.replace(/ /g, '_') + "']").raise();
            d3__WEBPACK_IMPORTED_MODULE_5__["select"](".comp[name='" + isin + "_" + that.selComp.indexName.replace(/ /g, '_') + "']").select("rect").classed("recton", true);
            this.fillCompetives();
        }
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#chartGroup").selectAll("rect").classed("highlt", "false");
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").raise();
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").style("display", "block");
        that.IndexId = 0;
        if (that.selComp.indexName == "S&P 500") {
            that.IndexId = 28;
        }
        if (that.selComp.indexName == "S&P 600") {
            that.IndexId = 27;
        }
        if (that.selComp.indexName == "S&P 400") {
            that.IndexId = 121;
        }
        if (that.selComp.indexName == "S&P United Kingdom BMI Index") {
            that.IndexId = 56;
        }
        if (that.selComp.indexName == "S&P Japan BMI Index") {
            that.IndexId = 57;
        }
        if (that.selComp.indexName == "S&P Europe Ex-UK BMI Index") {
            that.IndexId = 58;
        }
        if (that.selComp.indexName == "S&P USA Ex S&P 1500") {
            that.IndexId = 122;
        }
        // if (that.assgSelDrpVal == "ETFs") {
        //   that.IndexId = 123;
        // }
        if (that.selComp.indexName == "S&P Canada BMI Index") {
            that.IndexId = 126;
        }
        if (that.selComp.indexName == "S&P Australia BMI Index") {
            that.IndexId = 125;
        }
        if (that.selComp.indexName == "S&P South Africa BMI Index") {
            that.IndexId = 127;
        }
        if (that.selComp.indexName == "S&P South Korea BMI Index") {
            that.IndexId = 128;
        }
        // if (SelIndId == "nav-1") {
        //   that.IndexId = 137;
        // }
        // console.log(that.IndexId);  
    };
    HomePage.prototype.circleRange = function (values) {
        // console.log(values);
        var that = this;
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#slider").remove();
        var slider = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").append("g").attr("id", "slider")
            .attr("transform", "translate(-175,-175)");
        var thats = this;
        var width = 350;
        var height = 350;
        var margin = { top: 15, left: 15, bottom: 15, right: 15 };
        var offset = 0;
        var indicatorWidth = 15;
        var accentColor = 'transparent'; // '#00b9ff';
        var handleRadius = 10;
        var handleStrokeWidth = 7;
        var handleStrokeColor = "#fff";
        var handleColor = "#ffffff";
        var handleIconColor = "#333333";
        var handleFillColorStart = "#00b9ff";
        var handleFillColorEnd = "#00b9ff";
        var rangeTotal = 101;
        var tickColor = "#0000005c";
        var tickColor1 = "#999";
        var indicatorBackgroundColor = "#ccc";
        var radius = (Math.min(width, height) - margin.top - margin.bottom) / 2;
        var outerRadius = (radius + 1) + indicatorWidth / 2;
        var innerRadius = outerRadius - indicatorWidth;
        var dragLiveData;
        var ringbgrd, holder, indicatorArc, handles, dragBehavior;
        var a, e, startAngle, endAngle;
        var sliderDragRange = 5;
        var Intdata = values;
        var sliderInitValue = +values.start;
        var sliderEndValue = 100;
        // var sliderEndValue: any = that.displayMode == "S" ?  +values.end : 100;
        var tmpVal = sliderEndValue;
        var helper = {
            settings: {},
            graphdata: [],
            "calculateDuration": function (startAngle, endAngle) {
                var duration;
                var angleToSegments = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([sliderInitValue, sliderEndValue]).domain([0, 360]);
                duration = angleToSegments(endAngle) - angleToSegments(startAngle);
                if (duration < sliderInitValue)
                    duration = rangeTotal + duration;
                return duration * 5;
            },
            "createInfoObject": function (data) {
                var angleToSegments = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([sliderInitValue, sliderEndValue]).domain([0, 360]);
                var angleToFiveMinuteScale = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
                var startAngle, endAngle, startTimeInfo, endTimeInfo, duration;
                startTimeInfo = angleToSegments(data.aAngle) * 5;
                endTimeInfo = angleToSegments(data.eAngle) * 5;
                duration = this.calculateDuration(data.aAngle, data.eAngle);
                return { start: startTimeInfo, end: endTimeInfo, duration: duration };
            },
            "calculateInitialData": function (initialData) {
                var value = 0, angle = 0;
                var angleTO = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
                var segmentsToAngle = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
                angle = segmentsToAngle(initialData.start);
                value = angleTO.invert(angle);
                this.graphdata.push({ value: value, label: 'a', angle: angle });
                angle = segmentsToAngle(initialData.end);
                value = angleTO.invert(angle);
                this.graphdata.push({ value: value, label: 'e', angle: angle });
            },
            "calculateUpdateHandleData": function (values) {
                this.graphdata = [];
                var value = 0, angle = 0;
                var angleTo = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
                var segmentsToAngle = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
                angle = segmentsToAngle(values.start);
                value = angleTo.invert(angle);
                this.graphdata.push({ value: value, label: 'a', angle: angle });
                angle = segmentsToAngle(values.end);
                value = angleTo.invert(angle);
                this.graphdata.push({ value: value, label: 'e', angle: angle });
            },
            "getValueOfDataSet": function (label) {
                var value = 0;
                this.graphdata.forEach(function (el, i) {
                    if (el.label == label)
                        value = el.value;
                });
                return value;
            },
            "getAngleOfDataSet": function (label) {
                var angle = 0;
                this.graphdata.forEach(function (el, i) {
                    if (el.label == label)
                        angle = el.angle;
                });
                return angle;
            },
            "getData": function () {
                return this.graphdata;
            }
        };
        var slider = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#slider").attr('height', height).attr('width', width);
        var angularScale = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
        var angularvalue = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([sliderInitValue, sliderEndValue]).domain([0, 360]);
        var tickdata = function (d) {
            var pec1 = ((sliderEndValue - sliderInitValue) / 100);
            return d3__WEBPACK_IMPORTED_MODULE_5__["range"](sliderInitValue, sliderEndValue + pec1).map(function (v, i) {
                var segmentsToAngle = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
                if ((sliderEndValue - sliderInitValue) <= 1) {
                    return { angle: segmentsToAngle(v), label: v % 10 ? null : v.toFixed(2) };
                }
                else if ((sliderEndValue - sliderInitValue) < 20) {
                    return { angle: segmentsToAngle(v), label: v % 10 ? null : v.toFixed(1) };
                }
                //  else if ($("#selectedscore")[0]['style']['display'] === "none") {
                // else if (that.FromClick == "") {
                //   return { angle: segmentsToAngle(v), label: i % 25 ? null : v.toFixed(0) };
                // }
                else {
                    return { angle: segmentsToAngle(v), label: v % 10 ? null : v.toFixed(0) };
                }
            });
        };
        function writeTimeInfo(sliderObject) {
            // console.log('writeTimeInfo');
            // if((that.AvoidLosersec && !that.AL_mainCircle && !that.AL_rangeCircle) || ( that.AvoidLosersec && that.AL_rangeCircle && !that.AL_mainCircle)){
            if ((that.AvoidLosersec && !that.AL_mainCircle && !that.AL_rangeCircle) || (that.AvoidLosersec && that.AL_rangeCircle)) {
                that.CurrSliderData = sliderObject;
                // console.log('CurrSliderData',that.CurrSliderData);
            }
            if (that.AvoidLosersec && that.AL_rangeCircle && !that.AL_mainCircle) {
                // console.log('setInfo started');
                setTimeout(function () {
                    SetInfo(that.CurrSliderData);
                }, 500);
            }
            helper.calculateUpdateHandleData({ "start": sliderObject.a, "end": sliderObject.e });
        }
        var tau = 2 * Math.PI;
        var svg = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#slider").append('g').attr('id', 'holder').attr('transform', 'translate(' + (((width + offset) - width) / 2 + margin.top) + ',' + (((height + offset) - height) / 2 + margin.left) + ')');
        holder = svg.append('g').attr('id', 'arcindicator').attr("class", "sliderDisp").style("display", "none");
        helper.calculateInitialData(Intdata);
        a = helper.getValueOfDataSet("a");
        e = helper.getValueOfDataSet("e");
        startAngle = helper.getAngleOfDataSet("a");
        endAngle = helper.getAngleOfDataSet("e");
        writeTimeInfo({ a: a, e: e, aAngle: startAngle, eAngle: endAngle });
        var arc = d3__WEBPACK_IMPORTED_MODULE_5__["arc"]()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(function (d) { return startAngle * (Math.PI / 180); })
            .endAngle(function (d) { return endAngle * (Math.PI / 180); });
        var tempVal;
        indicatorArc = holder.append("g").attr("class", "arcindicator")
            .attr("transform", "translate(" + ((width / 2) - margin.top) + "," + ((height / 2) - margin.bottom) + ")")
            .append("path").attr("fill", function (d, i) { return accentColor; }).attr("d", arc);
        // if (that.FromClick != "") { drawTickers(); }
        handles = svg.append('g').attr('id', 'handles')
            .attr('transform', 'translate(' + radius + ',' + (radius + 3) + ')').attr("class", "sliderDisp").style("display", "block");
        dragBehavior = d3__WEBPACK_IMPORTED_MODULE_5__["drag"]().subject(function (d) { return d; }).on("drag", function (d, i) {
            var coordinaters = d3__WEBPACK_IMPORTED_MODULE_5__["mouse"](svg.node());
            var x = coordinaters[0] - radius;
            var y = coordinaters[1] - radius;
            var nA = (Math.atan2(y, x) * 180 / Math.PI) + 90;
            if (nA < 0) {
                nA = 360 + nA;
            }
            var newvalue = angularScale.invert(nA);
            if (d.value > 5 || newvalue > 5) {
                dragmoveHandles(d, i);
            }
        })
            .on("end", function () {
            checkHandlesPosition(this);
            // drawTickers();
            d3__WEBPACK_IMPORTED_MODULE_5__["select"](this).classed('active', false);
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").select('.sliderToolTip').remove();
        });
        drawHandles();
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]("#handles .handlercontainer").attr("class", function (d, i) { return "handlercontainer a" + (i + 1); });
        if (endAngle === 360) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a2').attr('transform', 'rotate(' + (endAngle - 1.8) + ') translate(0,' + (radius) * -1 + ')');
        }
        //if (startAngle === 0) {
        //  d3.select('#handles').select('.a1').remove();
        //}
        if ($('#handles .handle').length === 2) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.handle').remove();
        }
        function drawHandles() {
            // console.log('drawHandles');
            var handlerContainer = handles.selectAll('.handlercontainer').data(helper.getData());
            var circles = handlerContainer.enter()
                .append('g')
                .attr('class', 'handlercontainer')
                .attr('transform', function (d) {
                return 'rotate(' + angularScale(d.value) + ') translate(0,' + (radius) * -1 + ')';
            })
                // .on("mouseover", function () {
                //   d3.select(this).classed('active', true);
                // })
                // .on("mouseout", function () {
                //   d3.select(this).classed('active', false);
                // })
                .call(dragBehavior);
            circles.append('circle')
                .attr('r', handleRadius)
                .attr('class', 'handle')
                .style('stroke', handleStrokeColor)
                .style('stroke-width', handleStrokeWidth)
                .attr('cursor', 'pointer')
                .style('fill', "#00b9ff")
                .style('stroke-opacity', 1)
                .attr('id', function (d) { return d.label; });
            // .on('mouseover', function () {
            //   d3.select(this).classed('active', true);
            // })
            // .on('mouseout', function () {
            //   d3.select(this).classed('active', false);
            // });
            circles.append("text")
                //.attr("dx", function(d){return -10})
                .attr("text-anchor", "middle")
                .attr('dominant-baseline', 'central')
                .attr('font-family', 'FontAwesome')
                .attr('font-size', '10px')
                .attr('cursor', 'pointer')
                .attr('fill', "#fff");
            //.text(function (d) { if (d.label == "a") return '\uf054'; else return '\uf053'; }); //http://fontawesome.io/3.2.1/cheatsheet/
        }
        function drawTickers() {
            // console.log('drawTickers');
            var checkPoi = (sliderEndValue - sliderInitValue) <= 20 ? 1 : 0;
            /////////Ticks Inside the Tool circle
            //var ticks = svg.append("g").attr('id', 'ticks').attr("class", 'sliderDisp').style("display", "none").attr('transform', 'translate(' + radius + ',' + radius + ')')
            //  .selectAll("g").data(tickdata).enter().append("g")
            //  .attr("class", function (d, i) { return "tick" + i; })
            //  .attr("transform", function (d) {
            //    return "rotate(" + (d.angle - 90) + ")" + "translate(" + (innerRadius - 2) + ",0)";
            //  });
            //ticks.append("line").attr("y1", 0)
            //  .attr("x1", function (d) { if (d.label || d.angle == 0) return 0; else return 0; })
            //  .attr("x2", function (d) { if (d.label || d.angle == 0) return -3; else return 0; })
            //  .attr("y2", 0).style("stroke", tickColor1);
            //ticks.append("text").attr("x", 5).attr("dy", "0.35em")
            //  .attr("transform", function (d) {
            //    if (d.angle > 0 && d.angle <= 90) { return checkPoi == 1 ? "rotate(90)translate(-15,10)" : "rotate(90)translate(-10,10)"; }
            //    else if (d.angle > 90 && d.angle <= 180) { return checkPoi == 1 ? "rotate(-90)translate(-15,-10)" : "rotate(-90)translate(-10,-10)"; }
            //    else if (d.angle > 180 && d.angle <= 270) { return checkPoi == 1 ? "rotate(-90)translate(10,-10)" : "rotate(-90)translate(5,-10)"; }
            //    else if (d.angle > 270 && d.angle <= 360) { return checkPoi == 1 ? "rotate(90)translate(10,10)" : "rotate(90)translate(5,10)"; }
            //  })
            //  .style("text-anchor", function (d) { return d.angle > 180 ? "end" : null; })
            //  .style("fill", tickColor1).style("font-size", "8px").style("font-family", 'Open Sans regular').text(function (d) { if (d.label != null) { return d.label + "%"; } });
            var roTicker = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#slider").select("#holder").select("#ticks");
            roTicker.select(".tick0").select("text").attr("transform", function (d) { return checkPoi == 1 ? "rotate(90)translate(0,8)" : "rotate(90)translate(0,8)"; }).style("font-family", "Open Sans Semibold").style("fill", tickColor1).style("font-size", checkPoi == 1 ? "7px" : "8px");
            roTicker.select(".tick0").select("line").attr("x2", "-10");
            roTicker.select(".tick25").select("text").attr('x', -10);
            roTicker.select(".tick75").select("text").attr("transform", function (d) { return checkPoi == 1 ? "rotate(180)translate(30,0)" : "rotate(180)translate(18,0)"; }).style("font-family", "Open Sans Semibold").style("fill", tickColor1);
            var lastticks = '.tick' + sliderEndValue;
            roTicker.select(lastticks).select("text").attr("transform", function (d) { return checkPoi == 1 ? "rotate(90)translate(-8,8)" : "rotate(90)translate(-8,8)"; }).style("font-family", "Open Sans Semibold").style("fill", tickColor1).style("font-size", checkPoi == 1 ? "7px" : "8px");
            roTicker.select(".tick0").select("line").attr("x2", "-10");
            roTicker.select(".tick50").select("text").style("font-family", "Open Sans Semibold").style("fill", tickColor1);
        }
        function dragmoveHandles(d, i) {
            // console.log('dragmoveHandles');
            //issue is here for 100
            var coordinates = d3__WEBPACK_IMPORTED_MODULE_5__["mouse"](svg.node());
            // console.log(coordinates);
            var x = coordinates[0] - radius;
            var y = coordinates[1] - radius;
            // console.log(x,y);
            var newAngle = (Math.atan2(y, x) * 180 / Math.PI) + 90;
            if (newAngle < 0) {
                newAngle = 360 + newAngle;
            }
            newAngle = newAngle - ((newAngle * sliderEndValue) % 125) / rangeTotal;
            d.value = angularScale.invert(newAngle);
            if (d.value > 99) {
                d.value = 100;
                d.angle = angularvalue.invert(d.value);
                // console.log('dragmoveHandles',d);
                updateHandles(d);
            }
            else if (d.value < tmpVal && d.value > 5) {
                var dvalue = ((d.value / sliderDragRange) - ((d.value / sliderDragRange) % 1)) * sliderDragRange;
                d.value = dvalue;
                d.angle = angularvalue.invert(dvalue);
                // console.log('dragmoveHandles',d);
                updateHandles(d);
            }
        }
        function updateArc(value, label, angle) {
            // console.log('updateArc');
            var handlerContainer = d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('#handles .handlercontainer'); //select all handles
            var startValue = 0;
            var endValue = 0;
            handlerContainer.each(function (d, i) {
                if (d.label == "a") {
                    startValue = d.angle;
                }
                if (d.label == "e") {
                    endValue = d.angle;
                }
            });
            //replace arc
            arc = d3__WEBPACK_IMPORTED_MODULE_5__["arc"]()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius)
                .startAngle(function (d) { return startValue * (Math.PI / 180); })
                .endAngle(function (d) { return endValue * (Math.PI / 180); });
            indicatorArc.attr("d", arc);
            var allHandles = handles.selectAll('.handlercontainer');
            var currentData = { "a": 0, "aAngle": 0, "e": 0, "eAngle": 0 };
            allHandles.each(function (d, i) {
                currentData[d.label] = d.value;
                currentData[d.label + "Angle"] = d.angle;
            });
            dragLiveData = currentData;
        }
        function updateHandles(dd) {
            // console.log('updateHandles');
            if (dd.label === 'a') {
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a1').attr('transform', 'rotate(' + dd.angle + ') translate(0,' + (radius) * -1 + ')');
            }
            else {
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a2').attr('transform', 'rotate(' + dd.angle + ') translate(0,' + (radius) * -1 + ')');
            }
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").select('.sliderToolTip').remove();
            var toolHandles = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").append('g')
                .attr('class', 'sliderToolTip')
                .attr('transform', function (d) {
                return 'rotate(' + dd.angle + ') translate(0,' + (radius + 21) * -1 + ')';
            });
            toolHandles.append('circle')
                .attr('r', 10.5).attr('class', 'tooltips')
                .attr('stroke', '#00b9ff')
                .attr('stroke-width', 1)
                .attr('cursor', 'pointer').attr('fill', '#fff');
            toolHandles.append("text")
                .style("text-anchor", "middle")
                .style('dominant-baseline', 'central')
                .attr("transform", "rotate(" + (360 - (+dd.angle)) + ")")
                .style('font-family', 'Open Sans Semibold')
                .text(dd.value.toFixed(0))
                .style('font-size', '10px').attr('cursor', 'pointer')
                .style('fill', handleIconColor);
            updateArc(dd.value, dd.label, dd.angle);
        }
        function checkHandlesPosition(labelOfDagedHandle) {
            // console.log('checkHandlesPosition');
            var allHandles = handles.selectAll('.handlercontainer');
            // console.log(allHandles);
            var currentData = {
                "a": 0,
                "aAngle": 0,
                "e": 0,
                "eAngle": 0
            };
            allHandles.each(function (d, i) {
                currentData[d.label] = d.value;
                currentData[d.label + "Angle"] = d.angle;
            });
            //update range data
            that.draggedHandle = true;
            writeTimeInfo(currentData);
            SetInfo(currentData);
            that.AL_List = that.selIndexData;
            that.OnAL_listChange(currentData);
            setTimeout(function () {
                if (!that.avoidSlides) {
                    that.avoidSlides = true;
                    that.showLoader = true;
                    // 
                    // setTimeout(() => {
                    // that.loadData();
                    // if(that.AL_rangeCircle){
                    // setTimeout(() => {
                    // var temp = [0,currentData.e];
                    // that.SliderOnChange(temp);
                    // setTimeout(() => {
                    //   SetInfo(currentData);
                    // }, 50);
                    // }, 500);
                    // }
                    // }, 100);
                }
            }, 1000);
        }
        function SetInfo(data) {
            // console.log('SetInfo');
            // console.log(data);
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#innerText').remove();
            var oSvg = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#crlChart');
            var oSvgGrp = oSvg.append('g')
                .attr('id', 'innerText');
            var text = oSvgGrp.append('text')
                .attr("text-anchor", "middle");
            text.append('tspan')
                .attr('class', 'inText1')
                .attr('y', -20)
                .text("Remove");
            text.append('tspan')
                .attr('class', 'inText2')
                .attr('y', 20)
                .attr('x', 0)
                .attr("dy", 20)
                .text(function () {
                return data.e + '%';
            });
            text.transition()
                .duration(300);
        }
        function getPathData() {
            var width = document.getElementById('svgHContainer1').getBoundingClientRect().width;
            var r = radius * 1;
            var startX = width / 2 - r;
            return 'm' + startX + ',' + (height / 2) + ' ' +
                'a' + r + ',' + r + ' 0 0 0 ' + (2 * r) + ',0';
        }
        var bottomtextgrp = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#crlChart').append('g').attr('id', "textGrp").attr('transform', function () {
            var sWidth = document.getElementsByClassName('R_slider')[0].clientWidth;
            return 'translate(-' + sWidth / 2 + ',-140)';
        });
        bottomtextgrp.append('defs')
            .append('path')
            .attr('d', getPathData)
            .attr('id', 'curvedTextPath');
        bottomtextgrp.append('text').attr('id', 'curve-text').attr('class', 'CurveText').attr('fill', '#fff').attr('xml:space', 'preserve').append('textPath').attr('startOffset', "32%").attr('xlink:href', '#curvedTextPath').text('<<< L O S E R S    W I N N E R S >>>');
    };
    HomePage.prototype.SliderOnChange = function (vals) {
        var that = this;
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"](".AddSlider").remove();
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#chartGroupCompare").selectAll(".row").classed("p_Clkd", false);
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]('.AddSlider').style('display', 'none');
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"](".add_C").classed("cmp_Added", false);
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"](".cmp_Added").dispatch("click");
        // that.addCmpIs = ["AAPL"];
        // if (vals == [] || vals == null || vals.length == 0) {
        //   vals = that.RangeValue;
        // }
        // that.RangeValue = vals;
        if (vals[0] != 0 || vals[1] != 100) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#DiagTxt").text("Reset");
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#RangeComp').style('display', 'block');
            // that.showIndRun = true;
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#totalRangeStocks").style('display', 'none');
        }
        // if (vals[0] == 0 && vals[1] != 100) {
        // }
        // var GridAllComps = that.GridData;
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.slider_text_Ryt').text(vals[0].toFixed(0) + "%").attr("x", (430 - (vals[0] * 4)));
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.slider_text_Ryt_rect').text(vals[0].toFixed(0) + "%").attr("x", (416 - (vals[0] * 4)));
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.slider_text_Lft').text(vals[1].toFixed(0) + "%").attr("x", (430 - (vals[1] * 4)));
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.slider_text_Lft_rect').text(vals[1].toFixed(0) + "%").attr("x", (416 - (vals[1] * 4)));
        that.createGradienArc(vals[0], vals[1]);
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").raise();
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"](".sliderDisp").style("display", "block");
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").style("display", "none");
        try {
            var RectOn = d3__WEBPACK_IMPORTED_MODULE_5__["select"](".rectOn");
            if (RectOn.node() != null) {
                var gs = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gCompetitive");
                gs.selectAll("g").remove();
            }
        }
        catch (e) {
            console.log(e);
        }
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"](".viewport").style("overflow-y", "auto");
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#ParentViewportRange").style("visibility", "visible");
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gCompetitive").raise();
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").raise();
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#Rangeslider").raise();
        //d3.select("#gNavRange").select(".name").text(d3.select("#gNav").select(".name").text().split("(")[0] + "(" + d3.select("#totalRangeStocks").text().replace("Total Companies : ", "") + "/" + that.CompetLength + ")").call(that.wrap, 160, "top");
        var filtext = "";
        if (vals[0] == 0 && vals[1] == 100) {
            filtext = "Filtered Companies  (0% - 100%)";
        }
        else if (vals[1].toFixed(0) - vals[0].toFixed(0) < 10) {
            filtext = "Filtered Companies  (" + (vals[0] == 0 ? 0 : vals[0].toFixed(2)) + '% - ' + (vals[1] == 100 ? 100 : vals[1].toFixed(2)) + '%)';
        }
        else {
            filtext = "Filtered Companies  (" + (vals[0] == 0 ? 0 : vals[0].toFixed(1)) + '% - ' + (vals[1] == 100 ? 100 : vals[1].toFixed(1)) + '%)';
        }
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gNavRange").select(".subname").text(filtext);
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"](".compList").style("display", "block");
        if (vals[0] != 0 || vals[1] != 100) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#DiagTxt").text("Reset");
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#RangeComp').style('display', 'block');
            // that.showIndRun = true;
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#totalRangeStocks").style('display', 'none');
        }
    };
    HomePage.prototype.OnAL_listChange = function (d) {
        // console.log(d);
        var total_lenght = this.AL_List.length;
        var filteredLength = Math.floor(total_lenght * (d.e / 100));
        this.AL_FilteredList = this.AL_List.slice(0, filteredLength).slice();
        // console.log(this.AL_FilteredList);
    };
    HomePage.prototype.onWeeklyClick = function (day) {
        this.selWeeklyday = day;
        if (!this.alertSubmitBtn)
            this.alertUpdateBtn = true;
        else
            this.alertUpdateBtn = false;
    };
    HomePage.prototype.onradioChange = function (e) {
        // console.log(e);
        if (e.detail.value == 'weekly') {
            this.selctedradioopts = 'weekly';
            this.weeklyDiv = true;
        }
        else {
            this.weeklyDiv = false;
        }
        if (e.detail.value == 'monthly') {
            this.selctedradioopts = 'monthly';
            this.monthlyBtn = true;
        }
        else {
            this.monthlyBtn = false;
        }
        if (e.detail.value == 'daily') {
            this.selctedradioopts = 'daily';
        }
        if (!this.alertSubmitBtn) {
            this.alertUpdateBtn = true;
        }
        else {
            this.alertUpdateBtn = false;
        }
    };
    HomePage.prototype.onperRadioChange = function (event) {
        if (event.detail.value == 'percentage') {
            this.percentageRage = true;
        }
        else {
            this.percentageRage = false;
        }
        if (!this.alertSubmitBtn) {
            this.alertUpdateBtn = true;
        }
        else {
            this.alertUpdateBtn = false;
        }
    };
    HomePage.prototype.showMonthlyPicker = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var columnOpts, temp, opts, picker;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        columnOpts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
                        temp = [];
                        columnOpts.forEach(function (x) {
                            temp.push({ text: x, value: x });
                        });
                        opts = {
                            buttons: [{
                                    text: "Cancel",
                                    role: 'cancel'
                                }, {
                                    text: 'Ok',
                                    handler: function (val) {
                                        _this.monthlyDate = val.Date.value;
                                        if (!_this.alertSubmitBtn) {
                                            _this.alertUpdateBtn = true;
                                        }
                                        else {
                                            _this.alertUpdateBtn = false;
                                        }
                                    }
                                }],
                            columns: [{
                                    name: 'Date',
                                    options: temp,
                                    selectedIndex: this.monthlyDate - 1
                                }
                            ],
                        };
                        return [4 /*yield*/, this.pickerCtrl.create(opts)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
        { type: _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_6__["DataHandlerService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_6__["DataHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map