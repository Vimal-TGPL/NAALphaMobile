(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- navBar start -->\r\n<ion-header class=\"ion-text-center ion-no-border\" *ngIf=\"mobile\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <div class=\"header-Logo\" [ngClass]=\"{'ipad_Logo': !mobile}\">\r\n      <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" alt=\"NewAgeAlpha\" width=\"auto\">\r\n      \r\n        <div (click)=\"openMenu()\">\r\n          <ion-avatar>\r\n            <img src=\"../../assets/images/Profile_NAA5.svg\" />\r\n          </ion-avatar>\r\n            <p>{{currentUser.firstName}}&nbsp;{{currentUser.lastName}}</p>\r\n        </div>\r\n    </div>\r\n    \r\n  </ion-toolbar>\r\n  <ion-toolbar> \r\n    <!-- SearchBar start -->\r\n      <div class=\"searchDiv\">\r\n        <ion-item class=\"searchItem\" lines=\"none\" (click)=\"openSearch()\">\r\n          <ion-label>\r\n            <ion-icon name=\"search\" ></ion-icon>\r\n            <p>Ticker or company name</p>\r\n            <!-- <p *ngIf=\"this.SelTab == 'ETF' || this.SelTab == 'ETFChild'\">ETF ticker or name</p> -->\r\n            </ion-label>\r\n        </ion-item>\r\n      </div>\r\n       <!-- SearchBar End-->\r\n  </ion-toolbar>\r\n  <hr>\r\n</ion-header>\r\n\r\n<ion-content forceOverscroll=\"false\" *ngIf=\"!selComp && !AvoidLosersec && !AlertSec && !ReportSec\">\r\n  <div>\r\n    <ion-text>\r\n      <p>To begin, use the Search Bar</p>\r\n      <p>to select a stock.</p>\r\n    </ion-text>\r\n  </div>\r\n  <div class=\"footor_icon_div\">\r\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\r\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\r\n    <img src='../../assets/images/Avoid Loser_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\r\n    <img src='../../assets/images/Notification_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\r\n    <img src='../../assets/images/Report_Download_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content forceOverscroll=\"false\" *ngIf=\"selComp && !AvoidLosersec && !AlertSec && !ReportSec\" class=\"MainContent\">\r\n    <ion-item *ngIf=\"selSec\" lines=\"none\" (click)=\"openSecPopOver($event)\" class=\"secDropDown\">\r\n      <div>\r\n        <span class=\"sec_Detail\">\r\n          <span class=\"medItemSpan\"><p [style.color]=\"getColor(selSec.secMed)\">{{selSec.secMed}}</p></span>\r\n          <span class=\"Sec_Details_Sub\">\r\n            <p>{{selSec.secTitle}}&nbsp;(<span>{{selComp.indexName}}</span>)</p>\r\n            <p>{{selSec.secName}}</p>\r\n          </span>\r\n      </span>\r\n      <ion-icon name=\"chevron-down-circle-outline\"></ion-icon>\r\n      </div>\r\n    </ion-item>\r\n    <div class=\"arrow_div\">\r\n      <ion-icon *ngIf=\"CurrSlide == 1\" name='chevron-back-circle-outline' (click)=\"onArrowClick(0);\" style=\"color: #fff;\"></ion-icon>\r\n      <img *ngIf=\"CurrSlide == 0\" src=\"../../assets/images/Left Arrow Active.svg\" alt=\"LA\" style=\"height: 35px;\">\r\n      <ion-icon *ngIf=\"CurrSlide == 0\" name='chevron-forward-circle-outline' (click)=\"onArrowClick(1);\" style=\"color: #fff;\"></ion-icon>\r\n      <img *ngIf=\"CurrSlide == 1\" src=\"../../assets/images/Right Arrow Active.svg\" alt=\"RA\" style=\"height: 35px;\">\r\n    </div>\r\n    <ion-slides id='MainSlider' [ngClass]=\"{'mdSlides': plt=='android', 'iosSlides': plt =='ios'}\" mode=\"ios\" [options]='slideOpts' (ionSlideDidChange)=\"onSlideChange($event)\">\r\n      <ion-slide class=\"CompSlide\">\r\n        <ion-list id=\"CompList\">\r\n          <ion-item *ngFor=\"let item of selIndexData\" lines=\"none\" class=\"compItem\" [class.active]=\"selComp === item\" (click)=\"onCompanyClick(item)\">\r\n              <span [style.color]=\"getColor(roundMed(item.scores *100))\">{{roundMed(item.scores *100)}}</span>\r\n              <div><p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.companyName}}</p>\r\n              <p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.ticker}}</p></div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-slide>\r\n      <ion-slide class=\"circleSlide\">\r\n        <svg preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 700 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n          <g id=\"gchart\" transform=\"translate(345 ,260)\"></g>\r\n        </svg>\r\n        <div id=\"Circleloader\" style=\"height: 100%;\r\n        width: 100%;\r\n        display: none;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: absolute;\" >\r\n          <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"    height: 35px;\r\n          width: 35px;\">\r\n        </div>\r\n      </ion-slide>  \r\n    </ion-slides>\r\n  <div class=\"footor_icon_div\">\r\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\r\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\r\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\r\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\r\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"selComp && AvoidLosersec\" class=\"avoid_looser_content\">\r\n  <ion-item *ngIf=\"selSec\" lines=\"none\" (click)=\"openSecPopOver($event)\" class=\"secDropDown\">\r\n    <div>\r\n      <span class=\"sec_Detail\">\r\n        <span class=\"medItemSpan\"><p [style.color]=\"getColor(selSec.secMed)\">{{selSec.secMed}}</p></span>\r\n        <span class=\"Sec_Details_Sub\">\r\n          <p>{{selSec.secTitle}}&nbsp;(<span>{{selComp.indexName}}</span>)</p>\r\n          <p>{{selSec.secName}}</p>\r\n        </span>\r\n    </span>\r\n    <ion-icon name=\"chevron-down-circle-outline\"></ion-icon>\r\n    </div>\r\n  </ion-item>\r\n  <div style=\"width: 100%;\r\n  height: calc(100vh - 285px);\" *ngIf=\"!avoidSlides\" class=\"R_slider\">\r\n  <svg preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 450 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n    <g id=\"gchart\" transform=\"translate(225 ,260)\"></g>\r\n  </svg>\r\n</div>\r\n<div class=\"arrow_div\" *ngIf=\"avoidSlides\">\r\n  <ion-icon *ngIf=\"AL_CurrSlide != 0\" name='chevron-back-circle-outline' (click)=\"onALArrowClick('prev');\" style=\"color: #fff;\"></ion-icon>\r\n  <img *ngIf=\"AL_CurrSlide == 0\" src=\"../../assets/images/Left Arrow Active.svg\" alt=\"LA\" style=\"height: 35px;\">\r\n  <ion-icon *ngIf=\"AL_CurrSlide != 2\" name='chevron-forward-circle-outline' (click)=\"onALArrowClick('frwd');\" style=\"color: #fff;\"></ion-icon>\r\n  <img *ngIf=\"AL_CurrSlide == 2\" src=\"../../assets/images/Right Arrow Active.svg\" alt=\"RA\" style=\"height: 35px;\">\r\n</div>\r\n<ion-slides mode=\"ios\" *ngIf=\"avoidSlides\" [ngClass]=\"{'mdSlides': plt=='android' , 'iosSlides': plt =='ios'}\" [options]='slideOpts' (ionSlideDidChange)=\"onALSlideChange($event)\" id=\"AL_Slider\">\r\n  <ion-slide class=\"CompSlide\">\r\n    <ion-list id=\"CompList\" *ngIf=\"AL_FilteredList.length != 0\">\r\n      <ion-item *ngFor=\"let item of AL_FilteredList\" lines=\"none\" class=\"compItem\" [class.active]=\"selComp === item\">\r\n          <span [style.color]=\"getColor(roundMed(item.scores *100))\">{{roundMed(item.scores *100)}}</span>\r\n          <div><p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.companyName}}</p>\r\n          <p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.ticker}}</p></div>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div *ngIf=\"AL_FilteredList.length == 0\">\r\n      <p style=\"    font-family: 'Open Sans SemiBold';\r\n      color: #fff;\r\n      font-size: 16px;\">No company to show</p>\r\n    </div>\r\n  </ion-slide>\r\n  <ion-slide class=\"CircleSlider\">\r\n    <svg *ngIf=\"AL_mainCircle\" preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 700 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n      <g id=\"gchart\" transform=\"translate(345 ,260)\"></g>\r\n      <!-- <g id=\"AL_CircleContent\" transform=\"translate(345 ,260)\">\r\n        <foreignobject height=\"200\" width=\"200\" style=\"  background: #fff; transform: translate(-151px, -31px); border-radius: 50%;\">\r\n          <xhtml:div class=\"AL_outerDiv\">\r\n            <xhtml:div style=\"height: 50px;width: 50px;\">\r\n\r\n          </xhtml:div>\r\n          </xhtml:div>\r\n        </foreignobject>\r\n      </g> -->\r\n    </svg>\r\n  </ion-slide>\r\n  <ion-slide class=\"rangeSlide R_slider\">\r\n    <svg *ngIf=\"AL_rangeCircle\" preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 450 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n      <g id=\"gchart\" transform=\"translate(225 ,260)\"></g>\r\n    </svg>\r\n  </ion-slide>\r\n</ion-slides>\r\n  <div class=\"footor_icon_div\">\r\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\r\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\r\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\r\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\r\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"selComp && AlertSec\" class=\"AlertContent\">\r\n  <div class=\"arrow_div\">\r\n    <ion-icon name=\"chevron-back-circle-outline\" (click)=\"onAlertClick()\"></ion-icon>\r\n    <h1 class=\"Sub_title\">Alert Settings</h1>\r\n    <ion-icon name=\"chevron-forward-circle-outline\" (click)=\"onAlertClick()\"></ion-icon>\r\n  </div>\r\n  <div class=\"alertDiv\">\r\n    <ion-text>\r\n      <h2>Set Alert For:&nbsp;{{selComp.companyName}}&nbsp;({{selComp.ticker}})</h2>\r\n    </ion-text>\r\n    <div class=\"radioBtnDiv\">\r\n      <ion-list>\r\n        <ion-radio-group name=\"auto\" [value]=\"selctedradioopts\" mode=\"md\" (ionChange)=\"onradioChange($event)\">\r\n          <ion-item lines=\"none\">\r\n            <ion-radio value=\"daily\"></ion-radio>\r\n            <ion-label>Daily</ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"none\">\r\n            <ion-radio value=\"weekly\"></ion-radio>\r\n            <ion-label>Weekly</ion-label>\r\n          </ion-item>\r\n          <div class=\"weekly_Div\" *ngIf=\"weeklyDiv\">\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Sunday'}\" (click)=\"onWeeklyClick('Sunday')\">S</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Monday'}\" (click)=\"onWeeklyClick('Monday')\">M</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Tuesday'}\" (click)=\"onWeeklyClick('Tuesday')\">T</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Wednesday'}\" (click)=\"onWeeklyClick('Wednesday')\">W</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Thursday'}\" (click)=\"onWeeklyClick('Thursday')\">T</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Friday'}\" (click)=\"onWeeklyClick('Friday')\">F</span>\r\n            <span [ngClass]=\"{'active': selWeeklyday == 'Saturday'}\" (click)=\"onWeeklyClick('Saturday')\">S</span>\r\n          </div>\r\n          <ion-item lines=\"none\">\r\n            <ion-radio value=\"monthly\"></ion-radio>\r\n            <ion-label>Monthly</ion-label>\r\n          </ion-item>\r\n          <ion-item (click)=\"showMonthlyPicker($event)\" lines=\"none\" *ngIf=\"monthlyBtn\" style=\"    display: flex;\r\n            align-items: center; --min-height: 30px;\">\r\n              <ion-label slot=\"start\">Date</ion-label>\r\n              <ion-label slot=\"end\">{{monthlyDate}}</ion-label>\r\n            </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n      <ion-list>\r\n        <ion-radio-group name=\"auto\" mode=\"md\" [value]=\"perRadioGrp\" allowEmptySelection=true (ionChange)=\"onperRadioChange($event)\">\r\n          <ion-item lines=\"none\">\r\n            <ion-radio value=\"percentage\"></ion-radio>\r\n            <ion-label>If score percentage changes by (+/-)</ion-label>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        <ion-item *ngIf=\"percentageRage\" lines=\"none\" style=\"    --padding-start: 0;\">\r\n          <ion-range class=\"per_range\" min=\"1\" max=\"100\" mode=\"ios\" pin=true [value]='rangePer' *ngIf=\"percentageRage\" (ionChange)=\"setRangePer($event)\">\r\n            <ion-label slot=\"start\">1%</ion-label>\r\n            <ion-label slot=\"end\">100%</ion-label>\r\n          </ion-range>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <div style=\"width: 80%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\">\r\n      <ion-button *ngIf=\"alertSubmitBtn\" (click)=\"onAlertSubmit($event)\"  shape=\"round\">\r\n        Submit\r\n      </ion-button>\r\n      <ion-button *ngIf=\"alertUpdateBtn\" (click)=\"onAlertSubmit($event)\" shape=\"round\">\r\n        Update\r\n      </ion-button>\r\n      <ion-button *ngIf=\"!alertSubmitBtn\" (click)=\"onRemoveAlert($event)\" shape=\"round\">\r\n        Remove\r\n      </ion-button>\r\n      \r\n    </div>\r\n  </div>\r\n  <div class=\"footor_icon_div\">\r\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\r\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\r\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\r\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\r\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"selComp && ReportSec\" class=\"ReportContent\">\r\n  <div class=\"arrow_div\">\r\n    <ion-icon name=\"chevron-back-circle-outline\" (click)=\"onReportClick()\"></ion-icon>\r\n    <h1 class=\"Sub_title\">Download Report</h1>\r\n    <ion-icon name=\"chevron-forward-circle-outline\" (click)=\"onReportClick()\"></ion-icon>\r\n  </div>\r\n  <div class=\"reportDiv\">\r\n    <ion-button (click)=\"onPDFClick()\" shape=\"round\" class=\"pdfBtn\" disabled=true>\r\n      PDF\r\n    </ion-button>\r\n\r\n    <ion-list>\r\n      <ion-radio-group name=\"auto\" value=\"mail\" mode=\"md\">\r\n        <ion-list-header>\r\n          <ion-label class=\"list_header\">Email Report</ion-label>\r\n        </ion-list-header>\r\n        <ion-item lines=\"none\">\r\n          <ion-radio value=\"mail\"></ion-radio>\r\n          <ion-label>{{currentUser.username}}</ion-label>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n\r\n    <ion-button (click)=\"onSendClick()\" shape=\"round\" class=\"sendBtn\" disabled=true>\r\n      Send\r\n    </ion-button>\r\n  </div>\r\n\r\n  <div class=\"footor_icon_div\">\r\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\r\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\r\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\r\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\r\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\r\n  </div>\r\n</ion-content>\r\n\r\n<div *ngIf=\"data.length == 0\" style=\"    position: absolute;\r\nz-index: 99;\r\nleft: 0;\r\nright: 0;\r\ntop: 0;\r\nbottom: 0;\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\">\r\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 35px;\r\n  width: 35px;\">\r\n</div>\r\n\r\n<div *ngIf=\"showLoader\" style=\"    position: absolute;\r\nz-index: 99;\r\nleft: 0;\r\nright: 0;\r\ntop: 0;\r\nbottom: 0;\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\n/* background: rgb(0, 0, 0, 0.5); */\r\n\">\r\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 35px;\r\n  width: 35px;\">\r\n</div>\r\n\r\n<span id=\"tleng\" style=\"visibility: hidden; white-space: nowrap;\"></span>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
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



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-Logo {\n  display: -webkit-box;\n  display: flex;\n  padding-left: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-right: 5px; }\n  .header-Logo img {\n    height: 30px; }\n  .header-Logo div {\n    width: 50%;\n    background: white;\n    border-radius: 25px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center; }\n  .header-Logo div ion-avatar {\n      background: #00b9ff;\n      --padding-bottom: 0;\n      --padding-start: 0;\n      --padding-end: 0;\n      --padding-top: 0;\n      height: 35px;\n      width: 35px;\n      padding: 5px;\n      margin-right: 10px;\n      margin-left: -1px; }\n  .header-Logo div p {\n      margin: 0;\n      font-size: 14px;\n      font-family: Open Sans SemiBold;\n      color: #00b9ff;\n      width: 70%;\n      text-align: left;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap; }\n  ion-header ion-toolbar {\n  --background: #274b9e; }\n  ion-header ion-toolbar:nth-child(1) {\n  padding-top: 5px; }\n  ion-header ion-toolbar:nth-child(2) {\n  padding: 0 25px; }\n  ion-header hr {\n  margin: 0;\n  height: 2px;\n  background-color: #1a356a; }\n  .searchBtn {\n  --border-radius:15px;\n  width: 75px;\n  font-size: 11px;\n  height: 24px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  --background: #00aeef;\n  --box-shadow: none; }\n  .searchInput {\n  font-size: 16px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --color:#666;\n  text-align: center; }\n  .searchItem {\n  --border-width:2px;\n  --border-color: #00b9ff;\n  --inner-padding-end: 5px;\n  --background: transparent;\n  --border-radius: 25px;\n  --min-height: 28px; }\n  .searchItem ion-label {\n    margin: 2px 0px;\n    font-size: 14px;\n    -webkit-box-align: center;\n            align-items: center;\n    padding: 0 10px;\n    display: -webkit-box;\n    display: flex;\n    color: #888; }\n  .searchItem ion-label ion-icon {\n      color: #00b9ff;\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n      font-size: 18px;\n      margin-right: 10px; }\n  .searchItem ion-label p {\n      font-size: 16px;\n      color: #fff;\n      font-family: Open Sans Regular; }\n  .searchDiv {\n  padding: 5px 0px;\n  padding-top: 2%; }\n  ion-content {\n  --background: #274b9e;\n  --overflow: hidden; }\n  ion-content div ion-text {\n    color: #fff;\n    font-size: 14px;\n    text-align: center;\n    font-family: Open Sans Regular; }\n  ion-content .footor_icon_div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n    position: absolute;\n    height: 15%;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-content .footor_icon_div img {\n      height: 40px; }\n  ion-content .footor_icon_div img:first-child, ion-content .footor_icon_div img:last-child {\n      margin-bottom: 75px; }\n  ion-content .footor_icon_div img:nth-child(2), ion-content .footor_icon_div img:nth-child(4) {\n      margin-bottom: 25px; }\n  ion-content .footor_icon_div img:first-child, ion-content .footor_icon_div img:nth-child(2) {\n      opacity: 0.5; }\n  .MainContent .secDropDown {\n  --background: #00b9ff;\n  border-radius: 25px;\n  --padding-start: 0;\n  --padding-end: 5px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin: 10px 15px; }\n  .MainContent .secDropDown div {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center; }\n  .MainContent .secDropDown div .sec_Detail {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 90%; }\n  .MainContent .secDropDown div .sec_Detail .medItemSpan {\n        height: 50px;\n        width: 50px;\n        background: #fff;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center;\n        border-radius: 50%;\n        margin-right: 5px; }\n  .MainContent .secDropDown div .sec_Detail .medItemSpan p {\n          font-family: Open Sans SemiBold;\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub {\n        width: 75%; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p {\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p:first-child {\n          font-family: Open Sans Regular;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p:last-child {\n          font-family: Open Sans SemiBold;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .MainContent .secDropDown div ion-icon {\n      height: 40px;\n      width: 40px;\n      color: #fff; }\n  .MainContent .arrow_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff; }\n  .MainContent .mdSlides ion-slide {\n  height: calc(100vh - 360px); }\n  .MainContent .iosSlides ion-slide {\n  height: calc(100vh - 345px); }\n  .MainContent ion-slides .CompSlide ion-list::-webkit-scrollbar {\n  display: none; }\n  .MainContent ion-slides .CompSlide ion-list {\n  height: 100%;\n  overflow: scroll;\n  background: transparent;\n  width: 75%; }\n  .MainContent ion-slides .CompSlide ion-list .compItem {\n    --background: #00b9ff;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    font-size: 12px;\n    font-family: Open Sans SemiBold;\n    border-radius: 25px;\n    --padding-start: 0;\n    --padding-top: 0;\n    --padding-end: 0;\n    --padding-bottom: 0;\n    --inner-padding-start: 0;\n    --inner-padding-end: 0;\n    margin-bottom: 10px; }\n  .MainContent ion-slides .CompSlide ion-list .compItem p {\n      margin: 0;\n      color: #fff;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .MainContent ion-slides .CompSlide ion-list .compItem span {\n      height: 45px;\n      width: 45px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      border-radius: 50%;\n      background: #fff;\n      margin-right: 10px;\n      border: 2px solid #274b9e;\n      margin-left: -2px; }\n  .MainContent ion-slides .CompSlide ion-list .compItem div {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-align: unset;\n              align-items: unset;\n      width: 80%; }\n  .MainContent ion-slides .CompSlide ion-list .compItem div p:last-child {\n        font-family: Open Sans SemiBold; }\n  .MainContent ion-slides .circleSlide .start-ring {\n  stroke-width: 10px;\n  stroke: #0e82e5;\n  fill: #fff; }\n  .active {\n  --background: #fff !important; }\n  .ReportContent .arrow_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff;\n  margin-top: 5px; }\n  .ReportContent .arrow_div .Sub_title {\n    color: #fff;\n    font-family: Open Sans Bold;\n    margin: 0;\n    font-size: 25px; }\n  .ReportContent .reportDiv {\n  height: calc(100vh - 275px);\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n  .ReportContent .reportDiv ion-button {\n    height: 35px;\n    width: 30%;\n    --background: #00b9ff;\n    --background-activated: #00b9ff;\n    --color: #fff; }\n  .ReportContent .reportDiv ion-list {\n    background: #274b9e; }\n  .ReportContent .reportDiv ion-list ion-list-header {\n      -webkit-padding-start: 0;\n              padding-inline-start: 0;\n      margin-bottom: 5%; }\n  .ReportContent .reportDiv ion-list ion-list-header .list_header {\n        color: #fff;\n        font-size: 20px;\n        font-family: 'Open Sans SemiBold';\n        text-align: center; }\n  .ReportContent .reportDiv ion-list ion-item {\n      --background: transparent;\n      --ripple-color: transparent; }\n  .ReportContent .reportDiv ion-list ion-item ion-radio {\n        --color-checked: #00b9ff;\n        --color: #fff;\n        margin-right: 10px; }\n  .ReportContent .reportDiv ion-list ion-item ion-radio::part(container) {\n        border-color: #fff !important; }\n  .ReportContent .reportDiv ion-list ion-item ion-label {\n        --color: #fff;\n        font-size: 16px;\n        font-family: 'Open Sans'; }\n  .ReportContent .reportDiv .pdfBtn {\n    margin-bottom: 20%; }\n  .ReportContent .reportDiv .sendBtn {\n    margin-top: 12%; }\n  .AlertContent .arrow_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff;\n  margin-top: 5px; }\n  .AlertContent .arrow_div .Sub_title {\n    color: #fff;\n    font-family: Open Sans Bold;\n    margin: 0;\n    font-size: 25px; }\n  .AlertContent .alertDiv {\n  height: calc(100vh - 275px);\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n  .AlertContent .alertDiv ion-text h2 {\n    font-size: 16px;\n    font-family: Open Sans SemiBold; }\n  .AlertContent .alertDiv .radioBtnDiv {\n    width: 85%;\n    margin-top: 5%; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list {\n      background: transparent; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item {\n        --background: transparent;\n        --ripple-color: transparent;\n        --min-height: 30px; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-label {\n          color: #fff;\n          font-size: 14px;\n          font-family: Open Sans Regular; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-radio {\n          --color-checked: #00b9ff;\n          --color: #fff;\n          margin-right: 10px; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-radio::part(container) {\n          border-color: #fff !important; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: space-evenly;\n                justify-content: space-evenly;\n        -webkit-box-align: center;\n                align-items: center; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div span {\n          height: 30px;\n          width: 30px;\n          border-radius: 50%;\n          color: #fff;\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n                  align-items: center;\n          background: transparent;\n          -webkit-transition: .3s;\n          transition: .3s; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div .active {\n          background: #00b9ff; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .monthly_Div {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n                align-items: center;\n        overflow: scroll; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .monthly_Div p {\n          margin: 0;\n          font-size: 16px;\n          font-family: Open Sans SemiBold; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list:nth-child(2) {\n      margin-top: 20px; }\n  .AlertContent .alertDiv .radioBtnDiv .per_range {\n      padding-left: 0;\n      padding-right: 0;\n      --knob-background: #00b9ff;\n      --knob-border-radius: 25px;\n      --knob-size: 15px;\n      --bar-background: #fff;\n      --bar-background-active: #00b9ff; }\n  .AlertContent .alertDiv .radioBtnDiv .per_range::part(pin) {\n      -webkit-transform: translate3d(0px, 0px, 0px) scale(1);\n              transform: translate3d(0px, 0px, 0px) scale(1);\n      color: #fff;\n      font-size: 12px;\n      font-family: 'Open Sans Regular'; }\n  .AlertContent .alertDiv ion-button {\n    margin-top: 5%;\n    --background: #00b9ff;\n    height: 30px;\n    width: 30%;\n    min-width: 100px;\n    --background-activated: none; }\n  .avoid_looser_content .arrow_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff; }\n  .avoid_looser_content .secDropDown {\n  --background: #00b9ff;\n  border-radius: 25px;\n  --padding-start: 0;\n  --padding-end: 5px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin: 10px 15px; }\n  .avoid_looser_content .secDropDown div {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center; }\n  .avoid_looser_content .secDropDown div .sec_Detail {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 90%; }\n  .avoid_looser_content .secDropDown div .sec_Detail .medItemSpan {\n        height: 50px;\n        width: 50px;\n        background: #fff;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center;\n        border-radius: 50%;\n        margin-right: 5px; }\n  .avoid_looser_content .secDropDown div .sec_Detail .medItemSpan p {\n          font-family: Open Sans SemiBold;\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub {\n        width: 75%; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p {\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p:first-child {\n          font-family: Open Sans Regular;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p:last-child {\n          font-family: Open Sans SemiBold;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .avoid_looser_content .secDropDown div ion-icon {\n      height: 40px;\n      width: 40px;\n      color: #fff; }\n  .avoid_looser_content .mdSlides ion-slide {\n  height: calc(100vh - 360px); }\n  .avoid_looser_content .iosSlides ion-slide {\n  height: calc(100vh - 345px); }\n  .avoid_looser_content ion-slides .CompSlide ion-list::-webkit-scrollbar {\n  display: none; }\n  .avoid_looser_content ion-slides .CompSlide ion-list {\n  height: 100%;\n  overflow: scroll;\n  background: transparent;\n  width: 75%; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem {\n    --background: #00b9ff;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    font-size: 12px;\n    font-family: Open Sans SemiBold;\n    border-radius: 25px;\n    --padding-start: 0;\n    --padding-top: 0;\n    --padding-end: 0;\n    --padding-bottom: 0;\n    --inner-padding-start: 0;\n    --inner-padding-end: 0;\n    margin-bottom: 10px; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem p {\n      margin: 0;\n      color: #fff;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem span {\n      height: 45px;\n      width: 45px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      border-radius: 50%;\n      background: #fff;\n      margin-right: 10px;\n      border: 2px solid #274b9e;\n      margin-left: -2px; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem div {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-align: unset;\n              align-items: unset;\n      width: 80%; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem div p:last-child {\n        font-family: Open Sans SemiBold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixrQkFBa0IsRUFBQTtFQUx0QjtJQU9RLFlBQVksRUFBQTtFQVBwQjtJQVVRLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQWYzQjtNQWlCWSxtQkFBbUI7TUFDbkIsbUJBQWlCO01BQ2pCLGtCQUFnQjtNQUNoQixnQkFBYztNQUNkLGdCQUFjO01BQ2QsWUFBWTtNQUNaLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGlCQUFpQixFQUFBO0VBMUI3QjtNQTZCWSxTQUFTO01BQ1QsZUFBZTtNQUNmLCtCQUErQjtNQUMvQixjQUFjO01BQ2QsVUFBVTtNQUNWLGdCQUFnQjtNQUV4Qix1QkFBdUI7TUFDdkIsZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBO0VBS3ZCO0VBRUkscUJBQWEsRUFBQTtFQUZqQjtFQUtRLGdCQUFnQixFQUFBO0VBTHhCO0VBUVEsZUFBZSxFQUFBO0VBUnZCO0VBV1EsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUIsRUFBQTtFQUlqQztFQUNJLG9CQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBYztFQUNkLHFCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFhO0VBQ2Isa0JBQWEsRUFBQTtFQUdqQjtFQUNJLGVBQWU7RUFDZixrQkFBYztFQUNkLHFCQUFpQjtFQUNqQixZQUFRO0VBQ1Isa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxrQkFBZTtFQUNmLHVCQUFlO0VBQ2Ysd0JBQW9CO0VBQ3BCLHlCQUFhO0VBQ2IscUJBQWdCO0VBQ2hCLGtCQUFhLEVBQUE7RUFOakI7SUFRUSxlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFdBQVcsRUFBQTtFQWJuQjtNQWVZLGNBQWM7TUFDZCw2QkFBNkI7TUFDN0IscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixrQkFBa0IsRUFBQTtFQW5COUI7TUFzQlksZUFBZTtNQUNmLFdBQVc7TUFDWCw4QkFBOEIsRUFBQTtFQUsxQztFQUNJLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7RUFHbkI7RUFDSSxxQkFBYTtFQUNiLGtCQUFXLEVBQUE7RUFGZjtJQU1ZLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUE4QixFQUFBO0VBVDFDO0lBY1Esb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsOEJBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQXRCM0I7TUF5QlksWUFBWSxFQUFBO0VBekJ4QjtNQTRCWSxtQkFBbUIsRUFBQTtFQTVCL0I7TUFnQ1ksbUJBQW1CLEVBQUE7RUFoQy9CO01Bb0NZLFlBQVksRUFBQTtFQUt4QjtFQUVRLHFCQUFhO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxnQkFBYztFQUNkLG1CQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtFQVJyQjtJQVVZLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFiL0I7TUFlZ0Isb0JBQWE7TUFBYixhQUFhO01BQ2IsOEJBQW1CO01BQW5CLDZCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixVQUFVLEVBQUE7RUFsQjFCO1FBb0JvQixZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixvQkFBYTtRQUFiLGFBQWE7UUFDYix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCLEVBQUE7RUEzQnJDO1VBNkJ3QiwrQkFBK0I7VUFDL0IsU0FBUztVQUNULGVBQWU7VUFDZixXQUFXLEVBQUE7RUFoQ25DO1FBb0NvQixVQUFVLEVBQUE7RUFwQzlCO1VBc0N3QixTQUFTO1VBQ1QsZUFBZTtVQUNmLFdBQVcsRUFBQTtFQXhDbkM7VUEyQ3dCLDhCQUE4QjtVQUM5QixtQkFBbUI7VUFDbkIsZ0JBQWdCO1VBQ2hCLHVCQUF1QixFQUFBO0VBOUMvQztVQWlEd0IsK0JBQStCO1VBQy9CLG1CQUFtQjtVQUNuQixnQkFBZ0I7VUFDaEIsdUJBQXVCLEVBQUE7RUFwRC9DO01BMERnQixZQUFZO01BQ1osV0FBVztNQUNYLFdBQVcsRUFBQTtFQTVEM0I7RUFvRVEsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVyxFQUFBO0VBMUVuQjtFQStFWSwyQkFBMkIsRUFBQTtFQS9FdkM7RUFxRlksMkJBQTJCLEVBQUE7RUFyRnZDO0VBZ0dnQixhQUFhLEVBQUE7RUFoRzdCO0VBbUdnQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixVQUFVLEVBQUE7RUF0RzFCO0lBMkdvQixxQkFBYTtJQUNiLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGtCQUFnQjtJQUNoQixnQkFBYztJQUNkLGdCQUFjO0lBQ2QsbUJBQWlCO0lBQ2pCLHdCQUFzQjtJQUN0QixzQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUE7RUF2SHZDO01BeUh3QixTQUFTO01BQ1QsV0FBVztNQUNYLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7RUE3SDNDO01BaUl3QixZQUFZO01BQ1osV0FBVztNQUNYLG9CQUFhO01BQWIsYUFBYTtNQUNiLHdCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsaUJBQWlCLEVBQUE7RUExSXpDO01BOEl3QixvQkFBYTtNQUFiLGFBQWE7TUFDYiw0QkFBc0I7TUFBdEIsNkJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0Qix3QkFBa0I7Y0FBbEIsa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTtFQWpKbEM7UUFvSjRCLCtCQUErQixFQUFBO0VBcEozRDtFQTZKZ0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVLEVBQUE7RUFNMUI7RUFDSSw2QkFBYSxFQUFBO0VBR2pCO0VBRVEsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWdCLEVBQUE7RUFUeEI7SUFZWSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxlQUFlLEVBQUE7RUFmM0I7RUFvQlEsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtFQXpCM0I7SUE0QlksWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBYTtJQUNiLCtCQUF1QjtJQUN2QixhQUFRLEVBQUE7RUFoQ3BCO0lBb0NZLG1CQUFtQixFQUFBO0VBcEMvQjtNQXVDZ0Isd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2QixpQkFBaUIsRUFBQTtFQXhDakM7UUEyQ29CLFdBQVc7UUFDWCxlQUFlO1FBQ2YsaUNBQWlDO1FBQ2pDLGtCQUFrQixFQUFBO0VBOUN0QztNQW9EZ0IseUJBQWE7TUFDYiwyQkFBZSxFQUFBO0VBckQvQjtRQXdEb0Isd0JBQWdCO1FBQ2hCLGFBQVE7UUFDUixrQkFBa0IsRUFBQTtFQTFEdEM7UUE4RG9CLDZCQUE2QixFQUFBO0VBOURqRDtRQWtFb0IsYUFBUTtRQUNSLGVBQWU7UUFDZix3QkFBd0IsRUFBQTtFQXBFNUM7SUEwRWdCLGtCQUFrQixFQUFBO0VBMUVsQztJQThFWSxlQUFlLEVBQUE7RUFLM0I7RUFFUSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZ0IsRUFBQTtFQVR4QjtJQVlZLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGVBQWUsRUFBQTtFQWYzQjtFQW9CUSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNqQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtFQXpCdkI7SUE2QmdCLGVBQWU7SUFDZiwrQkFBK0IsRUFBQTtFQTlCL0M7SUFtQ1ksVUFBVTtJQUNWLGNBQWMsRUFBQTtFQXBDMUI7TUF1Q2dCLHVCQUF1QixFQUFBO0VBdkN2QztRQTBDb0IseUJBQWE7UUFDYiwyQkFBZTtRQUNmLGtCQUFhLEVBQUE7RUE1Q2pDO1VBK0N3QixXQUFXO1VBQ1gsZUFBZTtVQUNmLDhCQUE4QixFQUFBO0VBakR0RDtVQXFEd0Isd0JBQWdCO1VBQ2hCLGFBQVE7VUFDUixrQkFBa0IsRUFBQTtFQXZEMUM7VUEyRHdCLDZCQUE2QixFQUFBO0VBM0RyRDtRQWdFb0Isb0JBQWE7UUFBYixhQUFhO1FBQ2IsOEJBQTZCO2dCQUE3Qiw2QkFBNkI7UUFDN0IseUJBQW1CO2dCQUFuQixtQkFBbUIsRUFBQTtFQWxFdkM7VUFvRXdCLFlBQVk7VUFDWixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxvQkFBYTtVQUFiLGFBQWE7VUFDYix3QkFBdUI7a0JBQXZCLHVCQUF1QjtVQUN2Qix5QkFBbUI7a0JBQW5CLG1CQUFtQjtVQUNuQix1QkFBdUI7VUFDdkIsdUJBQWU7VUFBZixlQUFlLEVBQUE7RUE1RXZDO1VBK0V3QixtQkFBbUIsRUFBQTtFQS9FM0M7UUFvRm9CLG9CQUFhO1FBQWIsYUFBYTtRQUNiLDhCQUFtQjtRQUFuQiw2QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQix5QkFBOEI7Z0JBQTlCLDhCQUE4QjtRQUM5Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQixnQkFBZ0IsRUFBQTtFQXhGcEM7VUEwRndCLFNBQVM7VUFDVCxlQUFlO1VBQ2YsK0JBQStCLEVBQUE7RUE1RnZEO01Ba0dnQixnQkFBZ0IsRUFBQTtFQWxHaEM7TUFzR2dCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsMEJBQWtCO01BQ2xCLDBCQUFxQjtNQUNyQixpQkFBWTtNQUNaLHNCQUFpQjtNQUNqQixnQ0FBd0IsRUFBQTtFQTVHeEM7TUFnSGdCLHNEQUE4QztjQUE5Qyw4Q0FBOEM7TUFDOUMsV0FBVztNQUNYLGVBQWU7TUFDZixnQ0FBZ0MsRUFBQTtFQW5IaEQ7SUF3SFksY0FBYztJQUNkLHFCQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNEJBQXVCLEVBQUE7RUFTbkM7RUFFUSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXLEVBQUE7RUFSbkI7RUFXUSxxQkFBYTtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsZ0JBQWM7RUFDZCxtQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7RUFqQnJCO0lBbUJZLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUF0Qi9CO01Bd0JnQixvQkFBYTtNQUFiLGFBQWE7TUFDYiw4QkFBbUI7TUFBbkIsNkJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLFVBQVUsRUFBQTtFQTNCMUI7UUE2Qm9CLFlBQVk7UUFDWixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHdCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCLHlCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixpQkFBaUIsRUFBQTtFQXBDckM7VUFzQ3dCLCtCQUErQjtVQUMvQixTQUFTO1VBQ1QsZUFBZTtVQUNmLFdBQVcsRUFBQTtFQXpDbkM7UUE2Q29CLFVBQVUsRUFBQTtFQTdDOUI7VUErQ3dCLFNBQVM7VUFDVCxlQUFlO1VBQ2YsV0FBVyxFQUFBO0VBakRuQztVQW9Ed0IsOEJBQThCO1VBQzlCLG1CQUFtQjtVQUNuQixnQkFBZ0I7VUFDaEIsdUJBQXVCLEVBQUE7RUF2RC9DO1VBMER3QiwrQkFBK0I7VUFDL0IsbUJBQW1CO1VBQ25CLGdCQUFnQjtVQUNoQix1QkFBdUIsRUFBQTtFQTdEL0M7TUFtRWdCLFlBQVk7TUFDWixXQUFXO01BQ1gsV0FBVyxFQUFBO0VBckUzQjtFQThFWSwyQkFBMkIsRUFBQTtFQTlFdkM7RUFvRlksMkJBQTJCLEVBQUE7RUFwRnZDO0VBd0dnQixhQUFhLEVBQUE7RUF4RzdCO0VBMkdnQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixVQUFVLEVBQUE7RUE5RzFCO0lBbUhvQixxQkFBYTtJQUNiLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGtCQUFnQjtJQUNoQixnQkFBYztJQUNkLGdCQUFjO0lBQ2QsbUJBQWlCO0lBQ2pCLHdCQUFzQjtJQUN0QixzQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUE7RUEvSHZDO01BaUl3QixTQUFTO01BQ1QsV0FBVztNQUNYLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7RUFySTNDO01BeUl3QixZQUFZO01BQ1osV0FBVztNQUNYLG9CQUFhO01BQWIsYUFBYTtNQUNiLHdCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsaUJBQWlCLEVBQUE7RUFsSnpDO01Bc0p3QixvQkFBYTtNQUFiLGFBQWE7TUFDYiw0QkFBc0I7TUFBdEIsNkJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0Qix3QkFBa0I7Y0FBbEIsa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTtFQXpKbEM7UUE0SjRCLCtCQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItTG9nb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIGRpdntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwYjlmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgXHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xyXG4gICAgfVxyXG4gICAgaW9uLXRvb2xiYXI6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tdG9vbGJhcjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgfVxyXG4gICAgaHJ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTM1NmE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2hCdG57XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDsgIFxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhZWVmO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoSW5wdXR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAtLWNvbG9yOiM2NjY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2hJdGVte1xyXG4gICAgLS1ib3JkZXItd2lkdGg6MnB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICMwMGI5ZmY7IFxyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDI4cHg7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgbWFyZ2luOiAycHggMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwYjlmZjtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2hEaXZ7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBkaXZ7XHJcbiAgICAgICAgaW9uLXRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb290b3JfaWNvbl9kaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDE1JTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nOmZpcnN0LWNoaWxkLCBpbWc6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzVweDsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWc6bnRoLWNoaWxkKDIpLCBpbWc6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nOmZpcnN0LWNoaWxkLCBpbWc6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uTWFpbkNvbnRlbnR7XHJcbiAgICAuc2VjRHJvcERvd257XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLnNlY19EZXRhaWx7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgLm1lZEl0ZW1TcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5TZWNfRGV0YWlsc19TdWJ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHA6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvd19kaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAubWRTbGlkZXN7XHJcbiAgICAgICAgaW9uLXNsaWRle1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNjBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pb3NTbGlkZXN7XHJcbiAgICAgICAgaW9uLXNsaWRle1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNDVweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zbGlkZXN7XHJcbiAgICAgICAgLy8gaW9uLXNsaWRle1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNDVweCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAuQ29tcFNsaWRle1xyXG4gICAgICAgICAgICBpb24tbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1saXN0e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAuY29tcEl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjc0YjllO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNpcmNsZVNsaWRle1xyXG4gICAgICAgICAgICAuc3RhcnQtcmluZyB7XHJcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBzdHJva2U6ICMwZTgyZTU7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmV7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLlJlcG9ydENvbnRlbnR7XHJcbiAgICAuYXJyb3dfZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLXRvcCA6IDVweDtcclxuXHJcbiAgICAgICAgLlN1Yl90aXRsZXtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZXBvcnREaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjc1cHgpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1saXN0e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjc0YjllO1xyXG5cclxuICAgICAgICAgICAgaW9uLWxpc3QtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuXHJcbiAgICAgICAgICAgICAgICAubGlzdF9oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIFNlbWlCb2xkJztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLXJhZGlve1xyXG4gICAgICAgICAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpb24tcmFkaW86OnBhcnQoY29udGFpbmVyKXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGRmQnRue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbmRCdG57XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5BbGVydENvbnRlbnR7XHJcbiAgICAuYXJyb3dfZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLXRvcCA6IDVweDtcclxuXHJcbiAgICAgICAgLlN1Yl90aXRsZXtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbGVydERpdntcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNzVweCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGlvbi10ZXh0e1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yYWRpb0J0bkRpdntcclxuICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcblxyXG4gICAgICAgICAgICBpb24tbGlzdHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpb24tcmFkaW97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogIzAwYjlmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1yYWRpbzo6cGFydChjb250YWluZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLndlZWtseV9EaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiOWZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubW9udGhseV9EaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tbGlzdDpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGVyX3Jhbmdle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgIC0ta25vYi1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xyXG4gICAgICAgICAgICAgICAgLS1rbm9iLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAtLWtub2Itc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIC0tYmFyLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzAwYjlmZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBlcl9yYW5nZTo6cGFydChwaW4pe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5hdm9pZF9sb29zZXJfY29udGVudHtcclxuICAgIC5hcnJvd19kaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5zZWNEcm9wRG93bntcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAuc2VjX0RldGFpbHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAubWVkSXRlbVNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLlNlY19EZXRhaWxzX1N1YntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcDpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcDpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLm1kU2xpZGVze1xyXG4gICAgICAgIGlvbi1zbGlkZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzYwcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW9zU2xpZGVze1xyXG4gICAgICAgIGlvbi1zbGlkZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzQ1cHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlvbi1zbGlkZXN7XHJcbiAgICAgICAgLy8gaW9uLXNsaWRle1xyXG4gICAgICAgIC8vICAgICAubWR7XHJcbiAgICAgICAgLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNjBweCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgIC5pb3N7XHJcbiAgICAgICAgLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNDVweCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAuQ29tcFNsaWRle1xyXG4gICAgICAgICAgICBpb24tbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1saXN0e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAuY29tcEl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjc0YjllO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/dataHandler/data-handler.service */ "./src/app/services/dataHandler/data-handler.service.ts");
/* harmony import */ var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/shareddata/data.service */ "./src/app/services/shareddata/data.service.ts");
/* harmony import */ var _Components_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/mobile-search/mobile-search.component */ "./src/app/Components/mobile-search/mobile-search.component.ts");
/* harmony import */ var _Components_sector_popover_sector_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/sector-popover/sector-popover.component */ "./src/app/Components/sector-popover/sector-popover.component.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/line-chart/line-chart.component */ "./src/app/Components/line-chart/line-chart.component.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");















let HomePage = class HomePage {
    constructor(screenOrientation, toastCtrl, popoverCtrl, modalCtrl, dataService, dataHandler, menuCtrl, platform, alertController, authService, storage, pickerCtrl) {
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
        this.cumReturn = "0.00%";
        this.annReturn = "0.00%";
        this.CurrSliderData = { 'a': 0,
            'aAngle': 0,
            'e': 100,
            'eAngle': 360 };
        this.slideOpts = {
            initialSlide: this.CurrSlide,
            slidesPerView: 1,
            zoom: false
        };
        this.monthlySlideOpts = {
            slidesPerView: 7,
        };
        this.sectorOrder = [{ name: 'Index', order: 1 }, { name: 'Sector', order: 2 }, { name: 'Industry Group', order: 3 }, { name: 'Industry', order: 4 }, { name: 'Sub Industry', order: 5 }];
        this.radius = 170;
        this.currentUser = this.authService.currentUserValue();
        // console.log(this.currentUser);
    }
    ngOnInit() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        if (this.platform.is('android')) {
            this.plt = 'android';
        }
        else if (this.platform.is('ios')) {
            this.plt = 'ios';
        }
        else {
            this.plt = 'android';
        }
        if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
            // console.log(this.mobile);
        }
        this.menuCtrl.enable(true);
        this._dataSub = this.dataService.dbScore.subscribe(d => {
            if (d.length != 0) {
                this.data = d;
                // console.log(d);
            }
            else {
                this.dataService.getDbGICSData();
                this.dataService.getGlobalData();
            }
        });
        this._selCompsub = this.dataService.mobSelComp.subscribe(d => {
            if (d) {
                if (this.selComp == undefined) {
                    this.selComp = d;
                    this.indexClassifier().then(res => {
                        this.sectorClassifier().then(res => {
                            this.createIndexData().then(res => {
                                setTimeout(() => {
                                    this.loadData();
                                }, 500);
                                // this.loadData();
                            });
                        });
                    });
                }
                else {
                    this.selComp = d;
                    this.AL_mainCircle = false;
                    this.AL_rangeCircle = false;
                    this.AvoidLosersec = false;
                    this.avoidSlides = false;
                    this.firstLoad = true;
                    this.alertUpdateBtn = false;
                    if (this.AlertSec) {
                        this.AlertSec = false;
                    }
                    if (this.ReportSec) {
                        this.ReportSec = false;
                    }
                    this.CurrSliderData = { 'a': 0,
                        'aAngle': 0,
                        'e': 100,
                        'eAngle': 360 };
                    this.indexClassifier();
                    this.sectorClassifier();
                    this.createIndexData();
                    this.scrollto();
                    setTimeout(() => {
                        // this.CreateComps();
                        // this.createCompetitive(this.chartMain);
                        // this.fillCompetives(); 
                        // this.CreateCompCircle();
                        // setTimeout(() => {
                        //   this.creatClockSlider();
                        //   this.setClock(this.selComp.isin, this.selComp.deg *360/100, this.selComp.ticker );
                        // }, 100);
                        this.loadData();
                    }, 500);
                }
            }
        });
        this._dbGICSSub = this.dataService.dbGICS.subscribe(d => {
            if (d.length != 0) {
                this.dbGICS = d;
            }
        });
        this._authstateSub = this.authService.authenticationState.subscribe(res => {
            if (res == false) {
                this.AL_mainCircle = false;
                this.AL_rangeCircle = false;
                this.AvoidLosersec = false;
                this.avoidSlides = false;
                this.firstLoad = true;
                this.alertUpdateBtn = false;
                this.AlertSec = false;
                this.ReportSec = false;
                this.selComp = null;
                this.dataService.mobSelComp.next(null);
                this.dataService.dbScore.next('');
                this.dataService.dbGICS.next('');
                this.dataService._dbGICS = '';
                this.dataService.dbScoretemp = '';
            }
        });
    }
    ngOnDestroy() {
        this.screenOrientation.unlock();
        this._selCompsub.unsubscribe();
        this._dataSub.unsubscribe();
        this._dbGICSSub.unsubscribe();
        this._authstateSub.unsubscribe();
    }
    openMenu() {
        this.menuCtrl.open();
    }
    openSearch() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Components_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_8__["MobileSearchComponent"],
                cssClass: 'searchModel',
            });
            return yield modal.present();
        });
    }
    sectorClassifier() {
        return new Promise((resolve, reject) => {
            this.sectorList = [];
            var selCompInd = this.selComp.industry;
            // console.log(selCompInd);
            this.sectorOrder.forEach((i, ind) => {
                var temp = {
                    secTitle: i.name,
                    secName: this.getSectorname(i.order, selCompInd),
                    secCount: this.getSecCount(i.order, selCompInd),
                    secMed: this.getSecMed(i.order, selCompInd)
                };
                this.sectorList.push(temp);
                if (ind == this.sectorOrder.length - 1) {
                    resolve();
                }
            });
            // console.log(this.sectorList);
            this.selSec = this.sectorList[1];
            // console.log(this.selSec);
        });
    }
    indexClassifier() {
        return new Promise((resolve, reject) => {
            this.indexData = this.data.filter(i => i.indexName == this.selComp.indexName);
            resolve();
        });
    }
    getSectorname(lev, ind) {
        if (lev == 1) {
            return this.selComp.indexName;
        }
        else if (lev == 2) {
            var tempind = ind.slice(0, 2);
            var indname = this.dbGICS.filter(i => i.code == tempind)[0];
            // console.log(indname);
            return indname.name;
        }
        else if (lev == 3) {
            var tempind = ind.slice(0, 4);
            var indname = this.dbGICS.filter(i => i.code == tempind)[0];
            // console.log(indname);
            return indname.name;
        }
        else if (lev == 4) {
            var tempind = ind.slice(0, 6);
            var indname = this.dbGICS.filter(i => i.code == tempind)[0];
            // console.log(indname);
            return indname.name;
        }
        else if (lev == 5) {
            var tempind = ind.slice(0, 8);
            var indname = this.dbGICS.filter(i => i.code == tempind)[0];
            // console.log(indname);
            return indname.name;
        }
    }
    getSecCount(lev, ind) {
        if (lev == 1) {
            return this.indexData.length;
        }
        else if (lev == 2) {
            var tempind = ind.slice(0, 2);
            var temp = this.indexData.filter(i => i.industry.slice(0, 2) == tempind);
            return temp.length;
        }
        else if (lev == 3) {
            var tempind = ind.slice(0, 4);
            var temp = this.indexData.filter(i => i.industry.slice(0, 4) == tempind);
            return temp.length;
        }
        else if (lev == 4) {
            var tempind = ind.slice(0, 6);
            var temp = this.indexData.filter(i => i.industry.slice(0, 6) == tempind);
            return temp.length;
        }
        else if (lev == 5) {
            var tempind = ind.slice(0, 8);
            var temp = this.indexData.filter(i => i.industry.slice(0, 8) == tempind);
            return temp.length;
        }
    }
    getSecMed(lev, ind) {
        if (lev == 1) {
            return this.dataService.roundValue(this.dataService.getMed(this.indexData) * 100);
        }
        else if (lev == 2) {
            var tempind = ind.slice(0, 2);
            var temp = this.indexData.filter(i => i.industry.slice(0, 2) == tempind);
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
        }
        else if (lev == 3) {
            var tempind = ind.slice(0, 4);
            var temp = this.indexData.filter(i => i.industry.slice(0, 4) == tempind);
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
        }
        else if (lev == 4) {
            var tempind = ind.slice(0, 6);
            var temp = this.indexData.filter(i => i.industry.slice(0, 6) == tempind);
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
        }
        else if (lev == 5) {
            var tempind = ind.slice(0, 8);
            var temp = this.indexData.filter(i => i.industry.slice(0, 8) == tempind);
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
        }
    }
    onAvoidLoserClick() {
        if (this.AvoidLosersec) {
            this.AvoidLosersec = false;
            this.AL_mainCircle = false;
            this.AL_rangeCircle = false;
            this.firstLoad = true;
            this.CurrSliderData = { 'a': 0,
                'aAngle': 0,
                'e': 100,
                'eAngle': 360 };
            if (!this.ReportSec && !this.AlertSec) {
                setTimeout(() => {
                    this.loadData();
                }, 50);
                this.avoidSlides = false;
            }
        }
        else {
            this.AvoidLosersec = true;
            this.ReportSec = false;
            this.AlertSec = false;
            this.weeklyDiv = false;
            this.monthlyBtn = false;
            this.percentageRage = false;
            setTimeout(() => {
                this.loadData();
            }, 50);
        }
    }
    onAlertClick() {
        if (this.AlertSec) {
            this.AlertSec = false;
            this.weeklyDiv = false;
            this.monthlyBtn = false;
            this.percentageRage = false;
            if (!this.AvoidLosersec && !this.ReportSec) {
                setTimeout(() => {
                    this.loadData();
                }, 50);
            }
        }
        else {
            if (document.getElementById('Circleloader') != null)
                document.getElementById('Circleloader').style.display = 'none';
            this.showLoader = true;
            this.firstLoad = true;
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
            this.dataHandler.getAlert(userInfo).subscribe((d) => {
                if (d.length != 0) {
                    this.alertSubmitBtn = false;
                    this.alertUpdateBtn = false;
                    if (d[0].daily == 'Y') {
                        this.selctedradioopts = 'daily';
                    }
                    else if (d[0].monthly == 'Y') {
                        this.selctedradioopts = 'monthly';
                        this.monthlyDate = d[0].monthDt;
                        this.monthlyBtn = true;
                    }
                    else if (d[0].weekly == 'Y') {
                        this.selctedradioopts = 'weekly';
                        this.selWeeklyday = d[0].weekDay;
                        this.weeklyDiv = true;
                    }
                    if (d[0].scoreChange == 'Y') {
                        this.perRadioGrp = 'percentage';
                        this.rangePer = d[0].scorePercent;
                        this.percentageRage = true;
                    }
                }
                else {
                    this.alertSubmitBtn = true;
                    this.selctedradioopts = 'daily';
                    this.monthlyBtn = false;
                    this.weeklyDiv = false;
                    this.perRadioGrp = '';
                    this.percentageRage = false;
                    this.rangePer = 1;
                    this.monthlyDate = 1;
                }
                this.showLoader = false;
                this.AlertSec = true;
                this.AvoidLosersec = false;
                this.ReportSec = false;
            });
        }
    }
    onRemoveAlert(evt) {
        var userInfo = {
            userId: this.currentUser.userId,
            stockKey: this.selComp.stockKey
        };
        this.dataHandler.deleteAlert(userInfo).subscribe(d => {
            if (d[0] == "Success") {
                this.alertSubmitBtn = true;
                this.selctedradioopts = 'daily';
                this.monthlyBtn = false;
                this.weeklyDiv = false;
                this.perRadioGrp = '';
                this.percentageRage = false;
                this.rangePer = 1;
                this.monthlyDate = 1;
                this.presentToast('Alert Removed successfully');
            }
        });
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                cssClass: 'center'
            });
            yield toast.present();
        });
    }
    setRangePer(e) {
        this.rangePer = e.detail.value;
        if (!this.alertSubmitBtn) {
            this.alertUpdateBtn = true;
        }
        else {
            this.alertUpdateBtn = false;
        }
    }
    onAlertSubmit(e) {
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
        this.dataHandler.setAlert(alerts).subscribe(d => {
            if (d[0] == 'Success') {
                this.presentToast('Alert Submitted Sucessfully');
                this.alertSubmitBtn = true;
                this.selctedradioopts = 'daily';
                this.monthlyBtn = false;
                this.weeklyDiv = false;
                this.perRadioGrp = '';
                this.percentageRage = false;
                this.onAlertClick();
            }
        });
    }
    onReportClick() {
        if (this.ReportSec) {
            this.ReportSec = false;
            if (!this.AvoidLosersec && !this.AlertSec) {
                setTimeout(() => {
                    this.loadData();
                }, 50);
            }
        }
        else {
            this.ReportSec = true;
            this.AvoidLosersec = false;
            this.AlertSec = false;
            this.firstLoad = true;
            this.weeklyDiv = false;
            this.monthlyBtn = false;
            this.percentageRage = false;
        }
    }
    getColor(med) {
        let gc100 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        return gc100(med);
    }
    openSecPopOver(evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _Components_sector_popover_sector_popover_component__WEBPACK_IMPORTED_MODULE_9__["SectorPopoverComponent"],
                translucent: true,
                cssClass: 'sec-popover',
                componentProps: { sectorList: this.sectorList, selComp: this.selComp }
            });
            popover.onDidDismiss().then(d => {
                if (d.data != undefined) {
                    this.selSec = d.data;
                    this.createIndexData();
                    if (!this.AvoidLosersec) {
                        this.showLoader = true;
                        setTimeout(() => {
                            this.scrollto();
                        }, 50);
                        setTimeout(() => {
                            // setTimeout(() => {
                            this.CreateComps();
                            // this.createCompetitive(this.chartMain);
                            this.fillCompetives();
                            this.CreateCompCircle();
                            setTimeout(() => {
                                this.creatClockSlider();
                                this.setClock(this.selComp.isin, (this.selIndexData.indexOf(this.selComp) * 360 / this.selIndexData.length) - 90, this.selComp.ticker);
                                this.showLoader = false;
                            }, 100);
                            // }, 100);
                        }, 100);
                    }
                    else if (this.AvoidLosersec && !this.AL_mainCircle && this.AL_rangeCircle) {
                        this.showLoader = true;
                        this.CurrSliderData = { 'a': 0,
                            'aAngle': 0,
                            'e': 0,
                            'eAngle': 0 };
                        setTimeout(() => {
                            this.AL_List = this.selIndexData;
                            this.OnAL_listChange(this.CurrSliderData);
                            this.loadData();
                        }, 100);
                    }
                    else if (this.AvoidLosersec && this.AL_mainCircle && !this.AL_rangeCircle) {
                        this.showLoader = true;
                        this.CurrSliderData = { 'a': 0,
                            'aAngle': 0,
                            'e': 0,
                            'eAngle': 0 };
                        setTimeout(() => {
                            this.AL_List = this.selIndexData;
                            this.OnAL_listChange(this.CurrSliderData);
                            this.loadData();
                        }, 100);
                    }
                }
            });
            return yield popover.present();
        });
    }
    createIndexData() {
        return new Promise((resolve, reject) => {
            if (this.selSec.length != 0) {
                var selSecLvl = this.sectorOrder.filter(i => i.name == this.selSec.secTitle)[0].order;
                // console.log(selSecLvl);
                if (selSecLvl == 1) {
                    this.selIndexData = this.indexData;
                }
                else if (selSecLvl == 2) {
                    this.selIndexData = this.indexData.filter(i => i.industry.slice(0, 2) == this.selComp.industry.slice(0, 2));
                }
                else if (selSecLvl == 3) {
                    this.selIndexData = this.indexData.filter(i => i.industry.slice(0, 4) == this.selComp.industry.slice(0, 4));
                }
                else if (selSecLvl == 4) {
                    this.selIndexData = this.indexData.filter(i => i.industry.slice(0, 6) == this.selComp.industry.slice(0, 6));
                }
                else if (selSecLvl == 5) {
                    this.selIndexData = this.indexData.filter(i => i.industry == this.selComp.industry);
                }
                // console.log(this.selIndexData);
            }
            resolve();
        });
    }
    onArrowClick(d) {
        if (d == 0 && this.CurrSlide != 0) {
            this.scrollto();
        }
        this.CurrSlide = d;
        this.slides = document.getElementById('MainSlider');
        this.slides.slideTo(d);
    }
    onALArrowClick(e) {
        // console.log(e);
        this.AL_slides = document.getElementById('AL_Slider');
        var currslide;
        if (e == 'prev') {
            this.AL_slides.slidePrev();
        }
        else if (e == 'frwd') {
            this.AL_slides.slideNext();
        }
        this.AL_slides.getActiveIndex().then(d => {
            this.AL_CurrSlide;
        });
    }
    onSlideChange(evt) {
        this.slides = document.getElementById('MainSlider');
        this.slides.getActiveIndex().then(d => {
            this.CurrSlide = d;
            if (this.CurrSlide == 0)
                this.scrollto();
        });
    }
    onALSlideChange(evt) {
        // console.log(evt);
        this.AL_CurrSlide = evt.target.swiper.activeIndex;
        let prev_ind = evt.target.swiper.previousIndex;
        if (this.AL_CurrSlide == 1) {
            this.AL_mainCircle = true;
            this.AL_rangeCircle = false;
            if (prev_ind != 0) {
                setTimeout(() => {
                    // if(this.AL_CurrSlide == 1){
                    this.showLoader = true;
                    this.loadData();
                    // }
                }, 100);
            }
            else if (this.firstLoad) {
                setTimeout(() => {
                    if (this.AL_CurrSlide == 1) {
                        this.showLoader = true;
                        this.firstLoad = false;
                        this.loadData();
                    }
                }, 1000);
            }
        }
        else if (this.AL_CurrSlide == 2) {
            this.showLoader = true;
            this.AL_mainCircle = false;
            this.AL_rangeCircle = true;
            setTimeout(() => {
                this.loadData();
                // console.log(this.CurrSliderData);
                // setTimeout(() => {
                // if(this.CurrSliderData){
                setTimeout(() => {
                    // console.log('On Slide Change',this.CurrSliderData);
                    var temp = { 0: 0, 1: this.CurrSliderData.e };
                    this.SliderOnChange(temp);
                }, 500);
                // }
                // }, 500);
            }, 50);
        }
        else if (this.AL_CurrSlide == 0) {
            if (this.AL_FilteredList.length != 0 && this.AL_FilteredList.filter(data => data.isin === this.selComp.isin).length != 0)
                this.scrollto();
            else
                this.scrollToListTop();
        }
    }
    roundMed(score) {
        return this.dataService.roundValue(score);
    }
    onCompanyClick(comp) {
        this.selComp = comp;
        this.indexClassifier();
        this.sectorClassifier();
        this.createIndexData();
        setTimeout(() => {
            this.CreateComps();
            this.createCompetitive(this.chartMain);
            this.fillCompetives();
            this.CreateCompCircle();
            setTimeout(() => {
                this.creatClockSlider();
                this.setClock(this.selComp.isin, (this.selIndexData.indexOf(this.selComp) * 360 / this.selIndexData.length) - 90, this.selComp.ticker);
            }, 100);
        }, 100);
        setTimeout(() => {
            this.slides.slideTo(1);
        }, 50);
    }
    scrollto() {
        var index = this.selIndexData.indexOf(this.selComp);
        var list = document.getElementById('CompList');
        list.scrollTop = 55 * (index - 3);
    }
    scrollToListTop() {
        // var index = this.selIndexData.indexOf(this.selComp);
        var list = document.getElementById('CompList');
        list.scrollTop = 0;
    }
    loadData() {
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
        // d3.zoom()
        //   .on('zoom',null);
        // console.log(this.gchart);
        this.chartMain = this.createMainChart(this.gchart); // Create Main Chart circle
        setTimeout(() => {
            if (!this.AvoidLosersec) {
                // svgHContainer1
                let slideHeight = document.getElementsByClassName('circleSlide')[0].clientHeight;
                let slidewidth = document.getElementsByClassName('circleSlide')[0].clientWidth;
                // console.log(slideHeight);
                // console.log(slidewidth);
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#svgHContainer1').attr('viewBox', function () {
                    return '0 0 ' + slidewidth * 2 + ' ' + slideHeight;
                });
                this.gchart.attr('transform', function () {
                    return 'translate(' + slidewidth + ',' + slideHeight / 2 + ')';
                });
            }
            else if (this.AvoidLosersec && this.AL_mainCircle && !this.AL_rangeCircle) {
                let slideHeight = document.getElementsByClassName('CircleSlider')[0].clientHeight;
                let slidewidth = document.getElementsByClassName('CircleSlider')[0].clientWidth;
                // console.log(slideHeight);
                // console.log(slidewidth);
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#svgHContainer1').attr('viewBox', function () {
                    return '0 0 ' + slidewidth * 2 + ' ' + slideHeight;
                });
                this.gchart.attr('transform', function () {
                    return 'translate(' + slidewidth + ',' + slideHeight / 2 + ')';
                });
            }
        }, 500);
    }
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
    createMainChart(obj) {
        let that = this;
        let sradius = 100;
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
    }
    createGradienArc(sMin, sMax) {
        // console.log('createGradienArc');
        let that = this;
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
        var Data1 = this.data.filter(x => x.cx >= -90 && x.cx <= 0);
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
        var Data2 = this.data.filter(x => x.cx >= 1 && x.cx <= 90);
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
        var Data3 = this.data.filter(x => x.cx >= 91 && x.cx <= 180);
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
        var Data4 = this.data.filter(x => x.cx >= 181 && x.cx <= 270);
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
            if (this.AL_rangeCircle) {
                var Fourline3 = gArc.append("line");
                Fourline3.attr("id", "lineB").attr("class", "lineMark")
                    .attr("x1", "0").attr("y1", "0").attr("x2", "0").attr("y2", "22")
                    .style('transform', 'translate(0px, 145px)')
                    .style('stroke', '#fff')
                    .style('stroke-width', '4px');
            }
            // gArc.append('text').attr("class", "AlpText").style('transform', 'translate(-123px, 113px)').text('C');
        }
        else {
            if ((this.AvoidLosersec && !this.AL_rangeCircle && !this.AL_mainCircle) || !this.AvoidLosersec)
                document.getElementById('Circleloader').style.display = "none";
            that.CreateComps().then(res => {
                that.createCompetitive(this.chartMain).then(res => {
                    that.fillCompetives().then(res => {
                        if (!this.AvoidLosersec) {
                            that.CreateCompCircle().then(res => {
                                that.creatClockSlider().then(res => {
                                    that.setClock(this.selComp.isin, (this.selIndexData.indexOf(this.selComp) * 360 / this.selIndexData.length) - 90, this.selComp.ticker);
                                });
                            });
                        }
                        else if (that.AvoidLosersec && that.AL_mainCircle) {
                            that.createALinnerCircle().then(res => {
                                if (that.AL_FilteredList.filter(data => data.isin === this.selComp.isin).length != 0) {
                                    that.creatClockSlider().then(res => {
                                        that.setClock(this.selComp.isin, (this.AL_List.indexOf(this.selComp) * 360 / this.AL_List.length) - 90, this.selComp.ticker);
                                    });
                                }
                            });
                        }
                    });
                });
            });
            setTimeout(() => {
            }, 300);
        }
    }
    CreateComps() {
        return new Promise((resolve, reject) => {
            let that = this;
            var oSvg = this.chartMain;
            var compLst;
            // console.log(this.selIndexData);
            var dta = this.selIndexData;
            var lvl = this.sectorOrder.filter(i => i.name == this.selSec.secTitle)[0].order;
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
                    if (that.AL_FilteredList.filter(data => data.isin === d.isin).length != 0) {
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
            let SelRes = this.indexData;
            var dmin = d3__WEBPACK_IMPORTED_MODULE_5__["min"](SelRes.map(x => x.marketCap));
            var dmax = d3__WEBPACK_IMPORTED_MODULE_5__["max"](SelRes.map(x => x.marketCap));
            var dmean = d3__WEBPACK_IMPORTED_MODULE_5__["mean"](SelRes.map(x => x.marketCap));
            var dsum = d3__WEBPACK_IMPORTED_MODULE_5__["sum"](SelRes.map(x => x.marketCap));
            let ResMarketCap = SelRes.map(x => x.marketCap);
            let LimitedCap = ResMarketCap.filter(x => x < dmean && x != null);
            let dlimitedSum = d3__WEBPACK_IMPORTED_MODULE_5__["sum"](LimitedCap);
            var rmax = (dmax - dmin) > 100 ? 100 : (dmax - dmin);
            rmax = rmax < 50 ? 50 : rmax;
            var h = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
                .domain([dmin, dmax])
                .range([0, 50]);
            let LimitedMarketCap = compg.append("rect")
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
            resolve();
        });
    }
    createCompetitive(grp1) {
        return new Promise((resolve, reject) => {
            grp1.append("g").attr("id", "gCompetitive");
            resolve();
        });
    }
    creatClockSlider() {
        return new Promise((resolve, reject) => {
            let that = this;
            var r = that.radius + 4;
            that.createXrad = r;
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
            resolve();
        });
    }
    fillCompetives() {
        return new Promise((resolve, reject) => {
            let that = this;
            var dta = this.selIndexData;
            // console.log(this.selIndexData);
            var lvl = 1;
            // console.log(lvl);
            var gs = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gCompetitive");
            gs.selectAll("g").remove();
            dta = dta.filter(t => t.isin != "");
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
                // console.log(d,cx,i);
                if (cx <= 90) {
                    return "rotate(" + (cx + 1.0) + ")";
                }
                else {
                    return "rotate(" + (cx - 1.0) + ")";
                }
            })
                .style("opacity", function (d) {
                let sMin = 0; //that.sliderRange.value()[0].toFixed(0);
                let sMax = 100; // that.sliderRange.value()[1].toFixed(0);
                let opa = 1;
                if (that.AvoidLosersec) {
                    // console.log(that.AL_FilteredList);
                    // console.log(that.AL_FilteredList.filter(data => data.isin === d.isin).length);
                    if (that.AL_FilteredList.filter(data => data.isin === d.isin).length != 0) {
                        // console.log('AL if part');
                        if (that.selComp.isin == d.isin) {
                            return '0';
                        }
                        else {
                            if (that.AL_List.length > 150) {
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
                    if (dta.length > 150) {
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
                    if (that.AL_FilteredList.filter(data => data.isin === d.isin).length != 0) {
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
                    let txt = " (" + d.ticker + ") " + d.company.trim() + "...";
                    let resvtxt = " (" + d.ticker + ") ...";
                    var cnt = txt.length;
                    var rsvcnt = resvtxt.length;
                    return " (" + d.ticker + ") " + d.company.slice(0, (17 - rsvcnt)).trim() + "...";
                }
                else {
                    let txt = d.company.trim() + "... (" + d.ticker + ")";
                    let resvtxt1 = "... (" + d.ticker + ")";
                    var cnt = txt.length;
                    var rsvcnt1 = resvtxt1.length;
                    return d.company.slice(0, (17 - rsvcnt1)).trim() + "... (" + d.ticker + ")";
                }
            });
            resolve();
        });
    }
    createALinnerCircle() {
        return new Promise((resolve, reject) => {
            let that = this;
            var cradius = 150;
            var oSvg = that.chartMain;
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#innerCircleGrp').remove();
            var innerCirclegrp = oSvg.append("g").attr('id', "innerCirclegrp");
            var TI_Grp = innerCirclegrp.append("g").attr('id', 'TIGrp')
                .attr('transform', 'translate(-50,-110)');
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
                .attr('dx', function () {
                if (Number(that.roundMed(that.selComp.scores * 100)) < 10)
                    return '-12';
                else
                    return '-18';
            })
                .attr('dy', '5')
                .text(function () {
                return that.roundMed(that.selComp.scores * 100);
            });
            TI_Grp.append('text')
                .style('font-size', '18')
                .style('font-family', 'Open Sans ExtraBold')
                .style('fill', '#224b9e')
                .attr('dx', '35')
                .attr('dy', '5')
                .text(function () {
                return "(" + that.selComp.ticker + ")";
            });
            var Sec_Top = innerCirclegrp.append('g')
                .attr('id', 'Sec_Top')
                .attr('transform', 'translate(-100,-55)');
            Sec_Top.append('circle')
                .attr('id', 'ST_mCircle')
                .attr('r', '32')
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
            that.highChartLine(chart).then(res => {
                // if(this.chartData){
                setTimeout(() => {
                    if (that.CurrSliderData.e != 0) {
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
                        // }
                    }
                }, 500);
            });
            resolve();
        });
    }
    highChartLine(chart) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var that = this;
                if (this.selComp != "") {
                    let indexValue = [];
                    let date = [];
                    var Ctype = 'MC';
                    var GICSId = 0;
                    var range = '';
                    var selSecLvl = this.sectorOrder.filter(i => i.name == this.selSec.secTitle)[0].order;
                    if (selSecLvl == 1) {
                        GICSId = 0;
                    }
                    else {
                        GICSId = that.selComp.industry.slice(0, 2 * (selSecLvl - 1));
                    }
                    range = 'top' + Math.round(this.CurrSliderData.e);
                    // console.log(this.IndexId,GICSId,Ctype,range);
                    this.dataHandler.getIndexPreRuns(this.IndexId, GICSId, Ctype, range).subscribe((res) => {
                        // console.log(res);
                        if (res.length != 0) {
                            that.chartData = true;
                            if (that.smChart != null) {
                                that.smChart.destroy();
                                that.smChart = null;
                            }
                            let ReturnVal = [];
                            let ReturnVal1 = [];
                            let indexValue1 = [];
                            for (let i = 0; i <= (res.length - 1); ++i) {
                                indexValue1.push(res[i]['top100']);
                                date.push(res[i]['date']);
                            }
                            var d = new Date(date[date.length - 1]);
                            var formatdate = that.formatedates(d.getMonth() + 1) + '/' + that.formatedates(d.getDate()) + '/' + d.getFullYear();
                            var since = new Date(date[0]);
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
                            ReturnVal = that.calcCumAndAnnReturns(indexValue1, date);
                            if (0 < that.CurrSliderData.e && 100 > that.CurrSliderData.e) {
                                for (let i = 0; i <= (res.length - 1); ++i) {
                                    //indexValue.push(res[i][that.clkdRgeText + that.SRValue]);
                                    indexValue.push(res[i]["range"]);
                                    date.push(res[i]['date']);
                                }
                                var d = new Date(date[date.length - 1]);
                                var formatdate1 = that.formatedates(d.getMonth() + 1) + '/' + that.formatedates(d.getDate()) + '/' + d.getFullYear();
                                series.push({
                                    name: "Top " + that.CurrSliderData.e + "% (" + formatdate1 + ' : ' + indexValue[indexValue.length - 1].toFixed(2) + ")",
                                    marker: {
                                        symbol: ''
                                    },
                                    dataLabels: {
                                        style: {
                                            fontSize: 8 + 'px',
                                        }
                                    },
                                    data: indexValue,
                                    color: '#00b9ff',
                                    lineWidth: 0.9
                                });
                                ReturnVal1 = that.calcCumAndAnnReturns(indexValue, date);
                                console.log('ReturnVal1', ReturnVal1);
                                console.log('ReturnVal', ReturnVal);
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
                                console.log('cumReturn', that.cumReturn);
                                console.log('annReturn', that.annReturn);
                            }
                            else {
                                that.cumReturn = '0.00%';
                                this.annReturn = '0.00%';
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
                                    categories: date,
                                    tickColor: '#f1f1f1',
                                    // useHTML: true,
                                    tickWidth: 1,
                                    labels: {
                                        enabled: false,
                                        rotation: 310,
                                        formatter: function () {
                                            let d = new Date(this.value);
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
                        resolve();
                    });
                }
                // resolve();
            });
        });
    }
    onChartClick() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var selSecLvl = this.sectorOrder.filter(i => i.name == this.selSec.secTitle)[0].order;
            const modal = yield this.modalCtrl.create({
                component: _Components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__["LineChartComponent"],
                cssClass: 'AL_LChart',
                componentProps: {
                    'currentData': this.CurrSliderData,
                    'indexId': this.IndexId,
                    'selSecLvl': selSecLvl,
                    'selComp': this.selComp
                }
            });
            modal.onDidDismiss().then(d => {
                // console.log(d.data.range);
                // console.log(this.CurrSliderData);
                this.OnAL_listChange(this.CurrSliderData);
                this.loadData();
            });
            return yield modal.present();
        });
    }
    calcCumAndAnnReturns(indexValue, date) {
        let that = this;
        var newd = (indexValue[indexValue.length - 1] / 1000) - 1;
        let cumReturn = "0.0%";
        let annReturn = "0.0%";
        var startDate = new Date(date[0]);
        var endDate = new Date(date[date.length - 1]);
        const oneDay = 24 * 60 * 60 * 1000;
        var Difference_In_Time = endDate.getTime() - startDate.getTime();
        // To calculate the no. of days between two dates 
        var diffDays = Difference_In_Time / (1000 * 3600 * 24);
        var years = diffDays / 365;
        cumReturn = (newd * 100).toFixed(2);
        var MathVal = 1 + newd;
        annReturn = ((Math.pow(MathVal, (1 / years)) - 1) * 100).toFixed(2);
        return [cumReturn, annReturn];
    }
    formatedates(value) {
        if (value < 10) {
            return '0' + value;
        }
        else {
            return value;
        }
    }
    CreateCompCircle() {
        return new Promise((resolve, reject) => {
            let that = this;
            // var cradius = 150;
            var oSvg = that.chartMain;
            //   d3.select("#innerCircleGrp").remove();
            //   var innerCirclegrp = oSvg.append("g").attr("id", "innerCircleGrp");
            //   var innerCircle = innerCirclegrp.append("circle")
            //   .attr("id", "inmaincircle")
            //   .attr("fill", "#fff")
            //   .attr("r", cradius);
            //   var Ctext = innerCirclegrp.append("g").attr('id',"CompText");
            var txt = that.selComp.companyName + " (" + that.selComp.ticker + ")";
            //   var comptext =  Ctext.append("text")
            //   .attr("x", function(d){return '0'})
            //   .attr("y", function(d){return '-5%'})
            //   .attr("dy",function(d){return '-1em'})
            //   .attr("dominant-baseline","middle")
            //   .attr("text-anchor","middle")
            //   .attr('class', 'innerComp')
            //   .text(txt).call(that.compwrap,250);
            var med = that.roundMed(that.selComp.scores * 100);
            //   // console.log(med);
            //   Ctext.append("text")
            //   .attr("x", function(d){return '0'})
            //   .attr("y", function(d){return ((txt.length / 20)+2)+'%'})
            //   .attr("dy",function(d){
            //     // if(txt.length < 25){
            //     //   return ((txt.length / 20)-1.5)+"rem";
            //     // }
            //     // else 
            //     if(txt.length < 35)
            //       return ((txt.length / 20)-2)+"rem";
            //     else
            //     return ((txt.length / 20)-0.8)+"rem";
            //   })
            //   .attr("dominant-baseline","middle")
            //   .attr("text-anchor","middle")
            //   .attr('class', 'innerCompMed')
            //   .style('fill',that.getColor(med))
            //   .text(med);
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#Fo_innerCircle').remove();
            var Fo_innerCircle = oSvg.append('foreignObject')
                .attr('x', '-140')
                .attr('y', '-60')
                .attr('id', 'Fo_innerCircle')
                .attr('width', '280')
                .attr('height', '150');
            Fo_innerCircle.append('xhtml:p')
                .attr('xmlns', 'http://www.w3.org/1999/xhtml')
                .attr('class', 'innerComp')
                .text(txt);
            Fo_innerCircle.append('xhtml:p')
                .attr('xmlns', 'http://www.w3.org/1999/xhtml')
                .attr('class', 'innerCompMed')
                .style('color', that.getColor(med))
                .text(med);
            resolve();
        });
        // comptext.append("tspan")
        // .attr('class','innerCompMed')
        // // .attr('x',function(d){return "0"})
        // // .attr('y',function(d){return '-5%'})
        // // .attr('dy',function(d){return })
        // .style('fill',that.getColor(med))
        // .text(med)
    }
    compwrap(text, width) {
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
    }
    wrap(text, width, align = null) {
        let that = this;
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
            // if (align == null) {
            //   var j = i;
            //   text.attr("y", 5);
            // }
        });
    }
    setClock(isin, val, txt) {
        // console.log(isin,val,txt);
        return new Promise((resolve, reject) => {
            let that = this;
            if (txt != null) {
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").style("display", "none");
                var r = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#maincircle").attr("r");
                let gC360 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
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
                    .attr('text-anchor', "middle")
                    .attr('y', function () {
                    return val >= 90 ? 0 : 5;
                })
                    .attr("x", function () {
                    var rtemp = 199 + 70;
                    var txtmid = txt.length / 2;
                    var pos = rtemp - txtmid;
                    return val >= 90 ? -(pos - 15) : pos;
                })
                    .attr("transform", function () {
                    //  return val > 180 ? "rotate(180 " + (+r + 140) + ", 0)" : null;
                    //cx <= 90
                    // console.log(val);
                    return val >= 90 ? "rotate(180)" : null;
                })
                    .style("text-anchor", function () {
                    return val >= 90 ? "end" : null;
                })
                    .style("display", function () { return txt == null ? "none" : "block"; })
                    .attr("fill", function () {
                    return gC360(val);
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
                    .attr("height", 50)
                    .attr("width", 140)
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
            resolve();
        });
    }
    circleRange(values) {
        // console.log(values);
        // console.log(this.CurrSliderData);
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
        // var radius = 174;
        var outerRadius = (radius + 1) + indicatorWidth / 2;
        var innerRadius = outerRadius - indicatorWidth;
        var dragLiveData;
        var ringbgrd, holder, indicatorArc, handles, dragBehavior;
        var a, e, startAngle, endAngle;
        var sliderDragRange = 5;
        var Intdata = values;
        var sliderInitValue = 100;
        var sliderEndValue = +values.start;
        // var sliderEndValue: any = that.displayMode == "S" ?  +values.end : 100;
        var tmpVal = sliderEndValue;
        var firstRangeLoad = true;
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
                SetInfo(that.CurrSliderData);
            }
            if (that.avoidSlides && !firstRangeLoad) {
                setTimeout(() => {
                    that.slides = document.getElementById('AL_Slider');
                    that.slides.slideTo(1);
                }, 1000);
            }
            else {
                firstRangeLoad = false;
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
            .attr('transform', 'translate(' + radius + ',' + (radius) + ')').attr("class", "sliderDisp").style("display", "block");
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
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a2').attr('transform', 'rotate(' + (endAngle - 1.8) + ') translate(0,' + (radius - 3) * -1 + ')');
        }
        //if (startAngle === 0) {
        //  d3.select('#handles').select('.a1').remove();
        //}
        if ($('#handles .handle').length === 2) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.handle').remove();
        }
        if (values.end != 100 && values.end != 0) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a2').attr('transform', 'rotate(' + (helper.graphdata[1].angle) + ') translate(0,' + (radius) * -1 + ')');
        }
        function drawHandles() {
            // console.log('drawHandles');
            var handlerContainer = handles.selectAll('.handlercontainer').data(helper.getData());
            var circles = handlerContainer.enter()
                .append('g')
                .attr('class', 'handlercontainer')
                .attr('transform', function (d) {
                return 'rotate(' + angularScale(d.value) + ') translate(0,' + (radius - 3) * -1 + ')';
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
            if (d.value > 96) {
                d.value = 0;
                d.angle = angularvalue.invert(d.value);
                updateHandles(d);
            }
            else {
                var dvalue = ((d.value / sliderDragRange) - ((d.value / sliderDragRange) % 1)) * sliderDragRange;
                d.value = dvalue;
                d.angle = angularvalue.invert(dvalue);
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
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a2').attr('transform', 'rotate(' + dd.angle + ') translate(0,' + (radius - 3) * -1 + ')');
            }
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").select('.sliderToolTip').remove();
            var toolHandles = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").append('g')
                .attr('class', 'sliderToolTip')
                .attr('transform', function (d) {
                return 'rotate(' + dd.angle + ') translate(0,' + (radius + 40) * -1 + ')';
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
            setTimeout(() => {
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
                return Math.round(data.e) + '%';
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
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#textGrp').remove();
        var bottomtextgrp = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#crlChart').append('g').attr('id', "textGrp").attr('transform', function () {
            var sWidth = document.getElementsByClassName('R_slider')[0].clientWidth;
            return 'translate(-' + sWidth / 2 + ',-140)';
        });
        bottomtextgrp.append('defs')
            .append('path')
            .attr('d', getPathData)
            .attr('id', 'curvedTextPath');
        bottomtextgrp.append('text').attr('id', 'curve-text').attr('class', 'CurveText').attr('fill', '#fff').attr('xml:space', 'preserve').append('textPath').attr('startOffset', "32%").attr('xlink:href', '#curvedTextPath').text('<<< L O S E R S    W I N N E R S >>>');
    }
    SliderOnChange(vals) {
        let that = this;
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
            let RectOn = d3__WEBPACK_IMPORTED_MODULE_5__["select"](".rectOn");
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
        let filtext = "";
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
    }
    OnAL_listChange(d) {
        // console.log(d);
        var total_lenght = this.AL_List.length;
        var filteredLength = total_lenght - Math.floor(total_lenght * (d.e / 100));
        // console.log(filteredLength);
        this.AL_FilteredList = [...this.AL_List.slice(0, filteredLength)];
        // console.log(this.AL_FilteredList);
    }
    onWeeklyClick(day) {
        this.selWeeklyday = day;
        if (!this.alertSubmitBtn)
            this.alertUpdateBtn = true;
        else
            this.alertUpdateBtn = false;
    }
    onradioChange(e) {
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
    }
    onperRadioChange(event) {
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
    }
    showMonthlyPicker(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(e);
            var columnOpts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
            var temp = [];
            columnOpts.forEach(x => {
                temp.push({ text: x, value: x });
            });
            let opts = {
                buttons: [{
                        text: "Cancel",
                        role: 'cancel'
                    }, {
                        text: 'Ok',
                        handler: (val) => {
                            this.monthlyDate = val.Date.value;
                            if (!this.alertSubmitBtn) {
                                this.alertUpdateBtn = true;
                            }
                            else {
                                this.alertUpdateBtn = false;
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
            let picker = yield this.pickerCtrl.create(opts);
            picker.present();
        });
    }
    onPDFClick() {
    }
    onSendClick() {
    }
};
HomePage.ctorParameters = () => [
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
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_6__["DataHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map