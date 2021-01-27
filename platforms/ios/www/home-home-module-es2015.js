(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header Start -->\n<ion-header class=\"ion-text-center ion-no-border\" *ngIf=\"mobile\">\n  <ion-toolbar class=\"toolbar\">\n    <div class=\"header-Logo\" [ngClass]=\"{'ipad_Logo': !mobile}\">\n      <!-- Logo -->\n      <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" alt=\"NewAgeAlpha\" width=\"auto\">\n      \n      <!-- Logged in User Details Start -->\n        <div (click)=\"openMenu()\">\n          <ion-avatar>\n            <img src=\"../../assets/images/Profile_NAA5.svg\" />\n          </ion-avatar>\n            <p>{{currentUser.firstName}}&nbsp;{{currentUser.lastName}}</p>\n        </div>\n        <!-- Logged in User Details End-->\n    </div>\n    \n  </ion-toolbar>\n  <ion-toolbar> \n    <!-- SearchBar start -->\n      <div class=\"searchDiv\">\n        <ion-item class=\"searchItem\" lines=\"none\" (click)=\"openSearch()\">\n          <ion-label>\n            <ion-icon name=\"search\" ></ion-icon>\n            <p>Ticker or company name</p>\n            </ion-label>\n        </ion-item>\n      </div>\n       <!-- SearchBar End-->\n  </ion-toolbar>\n  <hr>\n</ion-header>\n\n<!-- Header End -->\n\n<!-- Welcome Screen Start -->\n<ion-content forceOverscroll=\"false\" *ngIf=\"!selComp && !AvoidLosersec && !AlertSec && !ReportSec\">\n\n  <!-- Welcome Screen Message start -->\n  <div>\n    <ion-text>\n      <p>To begin, use the Search Bar</p>\n      <p>to select a stock.</p>\n    </ion-text>\n  </div>\n  <!-- Welcome Screen Message End -->\n\n  <!-- Footer Icons Start -->\n  <div class=\"footor_icon_div\">\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\n    <img src='../../assets/images/Avoid Loser_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\n    <img src='../../assets/images/Notification_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\n    <img src='../../assets/images/Report_Download_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\n  </div>\n  <!-- Footer Icons End -->\n\n</ion-content>\n<!-- Welcome Screen End -->\n\n<!-- Home Screen Start -->\n<ion-content forceOverscroll=\"false\" *ngIf=\"selComp && !AvoidLosersec && !AlertSec && !ReportSec\" class=\"MainContent\">\n\n  <!-- Sector DropDown Start -->\n    <ion-item *ngIf=\"selSec\" lines=\"none\" (click)=\"openSecPopOver($event)\" class=\"secDropDown\">\n      <div>\n        <span class=\"sec_Detail\">\n          <span class=\"medItemSpan\"><p [style.color]=\"getColor(selSec.secMed)\">{{selSec.secMed}}</p></span>\n          <span class=\"Sec_Details_Sub\">\n            <p>{{selSec.secTitle}}&nbsp;(<span>{{selComp.indexName}}</span>)</p>\n            <p>{{selSec.secName}}</p>\n          </span>\n      </span>\n      <ion-icon name=\"chevron-down-circle-outline\"></ion-icon>\n      </div>\n    </ion-item>\n    <!-- Sector DropDown End -->\n\n    <!-- Left, Right Arrow Start -->\n    <div class=\"arrow_div\">\n      <ion-icon *ngIf=\"CurrSlide == 1\" name='chevron-back-circle-outline' (click)=\"onArrowClick(0);\" style=\"color: #fff;\"></ion-icon>\n      <img *ngIf=\"CurrSlide == 0\" src=\"../../assets/images/Left Arrow Active.svg\" alt=\"LA\" style=\"height: 35px;\">\n      <ion-icon *ngIf=\"CurrSlide == 0\" name='chevron-forward-circle-outline' (click)=\"onArrowClick(1);\" style=\"color: #fff;\"></ion-icon>\n      <img *ngIf=\"CurrSlide == 1\" src=\"../../assets/images/Right Arrow Active.svg\" alt=\"RA\" style=\"height: 35px;\">\n    </div>\n    <!-- Left, Right Arrow End -->\n\n    <!-- Home Page Slider Start -->\n    <ion-slides id='MainSlider' [ngClass]=\"{'mdSlides': plt=='android', 'iosSlides': plt =='ios'}\" mode=\"ios\" [options]='slideOpts' (ionSlideDidChange)=\"onSlideChange($event)\">\n\n      <!-- Company List Grid Start -->\n      <ion-slide class=\"CompSlide\">\n        <ion-list id=\"CompList\">\n          <ion-item *ngFor=\"let item of selIndexData\" lines=\"none\" class=\"compItem\" [class.active]=\"selComp === item\" (click)=\"onCompanyClick(item)\">\n              <span [style.color]=\"getColor(roundMed(item.scores *100))\">{{roundMed(item.scores *100)}}</span>\n              <div><p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.companyName}}</p>\n              <p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.ticker}}</p></div>\n          </ion-item>\n        </ion-list>\n      </ion-slide>\n      <!-- Company List Grid End -->\n\n      <!-- Tool Start -->\n      <ion-slide class=\"circleSlide\">\n        <svg preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 700 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n          <g id=\"gchart\" transform=\"translate(345 ,260)\"></g>\n        </svg>\n        <div id=\"Circleloader\" style=\"height: 100%;\n        width: 100%;\n        display: none;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\" >\n          <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"    height: 35px;\n          width: 35px;\">\n        </div>\n      </ion-slide>\n      <!-- Tool End -->\n\n    </ion-slides>\n    <!-- Home Page Slider End -->\n\n    <!-- Footer Icons Start -->\n  <div class=\"footor_icon_div\">\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\n  </div>\n  <!-- Footer Icons End -->\n\n</ion-content>\n<!-- Home Screen End -->\n\n<!-- Avoid Looser Start -->\n<ion-content *ngIf=\"selComp && AvoidLosersec\" class=\"avoid_looser_content\">\n\n  <!-- Sector DropDown Start -->\n  <ion-item *ngIf=\"selSec\" lines=\"none\" (click)=\"openSecPopOver($event)\" class=\"secDropDown\">\n    <div>\n      <span class=\"sec_Detail\">\n        <span class=\"medItemSpan\"><p [style.color]=\"getColor(selSec.secMed)\">{{selSec.secMed}}</p></span>\n        <span class=\"Sec_Details_Sub\">\n          <p>{{selSec.secTitle}}&nbsp;(<span>{{selComp.indexName}}</span>)</p>\n          <p>{{selSec.secName}}</p>\n        </span>\n    </span>\n    <ion-icon name=\"chevron-down-circle-outline\"></ion-icon>\n    </div>\n  </ion-item>\n  <!-- Sector DropDown End -->\n\n  <!-- Initial Range Slider Start -->\n  <div style=\"width: 100%;\n  height: calc(100vh - 285px);\" *ngIf=\"!avoidSlides\" class=\"R_slider\">\n  <svg preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 450 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n    <g id=\"gchart\" transform=\"translate(225 ,260)\"></g>\n  </svg>\n</div>\n<!-- Initial Range Slider End -->\n\n<!-- Left, Right Arrow Start -->\n<div class=\"arrow_div\" *ngIf=\"avoidSlides\">\n  <ion-icon *ngIf=\"AL_CurrSlide != 0\" name='chevron-back-circle-outline' (click)=\"onALArrowClick('prev');\" style=\"color: #fff;\"></ion-icon>\n  <img *ngIf=\"AL_CurrSlide == 0\" src=\"../../assets/images/Left Arrow Active.svg\" alt=\"LA\" style=\"height: 35px;\">\n  <ion-icon *ngIf=\"AL_CurrSlide != 2\" name='chevron-forward-circle-outline' (click)=\"onALArrowClick('frwd');\" style=\"color: #fff;\"></ion-icon>\n  <img *ngIf=\"AL_CurrSlide == 2\" src=\"../../assets/images/Right Arrow Active.svg\" alt=\"RA\" style=\"height: 35px;\">\n</div>\n<!-- Left, Right Arrow End -->\n\n<!-- Avoid Looser Page Slider Start -->\n<ion-slides mode=\"ios\" *ngIf=\"avoidSlides\" [ngClass]=\"{'mdSlides': plt=='android' , 'iosSlides': plt =='ios'}\" [options]='slideOpts' (ionSlideDidChange)=\"onALSlideChange($event)\" id=\"AL_Slider\">\n  \n  <!-- Company List Grid Start -->\n  <ion-slide class=\"CompSlide\">\n    <ion-list id=\"CompList\" *ngIf=\"AL_FilteredList.length != 0\">\n      <ion-item *ngFor=\"let item of AL_FilteredList\" lines=\"none\" class=\"compItem\" [class.active]=\"selComp === item\">\n          <span [style.color]=\"getColor(roundMed(item.scores *100))\">{{roundMed(item.scores *100)}}</span>\n          <div><p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.companyName}}</p>\n          <p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.ticker}}</p></div>\n      </ion-item>\n    </ion-list>\n    <div *ngIf=\"AL_FilteredList.length == 0\">\n      <p style=\"    font-family: 'Open Sans SemiBold';\n      color: #fff;\n      font-size: 16px;\">No company to show</p>\n    </div>\n  </ion-slide>\n  <!-- Company List Grid End -->\n\n  <!-- Avoid Looser Tool Start -->\n  <ion-slide class=\"CircleSlider\">\n    <svg *ngIf=\"AL_mainCircle\" preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 700 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n      <g id=\"gchart\" transform=\"translate(345 ,260)\"></g>\n    </svg>\n  </ion-slide>\n  <!-- Avoid Looser Tool End -->\n\n  <!-- Range Slider Tool Start -->\n  <ion-slide class=\"rangeSlide R_slider\">\n    <svg *ngIf=\"AL_rangeCircle\" preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 450 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n      <g id=\"gchart\" transform=\"translate(225 ,260)\"></g>\n    </svg>\n  </ion-slide>\n  <!-- Range Slider Tool End -->\n\n</ion-slides>\n<!-- Avoid Looser Page Slider End -->\n\n<!-- Footer Icons Start -->\n  <div class=\"footor_icon_div\">\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\n  </div>\n  <!-- Footer Icons End -->\n\n</ion-content>\n<!-- Avoid Looser End -->\n\n<!-- Alert Start -->\n<ion-content *ngIf=\"selComp && AlertSec\" class=\"AlertContent\">\n\n  <!-- Left, Right Arrow Start -->\n  <div class=\"arrow_div\">\n    <ion-icon name=\"chevron-back-circle-outline\" (click)=\"onAlertClick()\"></ion-icon>\n    <h1 class=\"Sub_title\">Alert Settings</h1>\n    <ion-icon name=\"chevron-forward-circle-outline\" (click)=\"onAlertClick()\"></ion-icon>\n  </div>\n  <!-- Left, Right Arrow End -->\n\n  <div class=\"alertDiv\">\n    <!-- Alert Page Title Start -->\n    <ion-text>\n      <h2>Set Alert For:&nbsp;{{selComp.companyName}}&nbsp;({{selComp.ticker}})</h2>\n    </ion-text>\n    <!-- Alert Page Title End -->\n\n    <!-- Alert Page Options Start -->\n    <div class=\"radioBtnDiv\">\n      <ion-list>\n        <ion-radio-group name=\"auto\" [value]=\"selctedradioopts\" mode=\"md\" (ionChange)=\"onradioChange($event)\">\n          <!-- Daily Radio Button -->\n          <ion-item lines=\"none\">\n            <ion-radio value=\"daily\"></ion-radio>\n            <ion-label>Daily</ion-label>\n          </ion-item>\n\n          <!-- Weekly Radio Button -->\n          <ion-item lines=\"none\">\n            <ion-radio value=\"weekly\"></ion-radio>\n            <ion-label>Weekly</ion-label>\n          </ion-item>\n\n          <!-- Weekly day Button -->\n          <div class=\"weekly_Div\" *ngIf=\"weeklyDiv\">\n            <span [ngClass]=\"{'active': selWeeklyday == 'Sunday'}\" (click)=\"onWeeklyClick('Sunday')\">S</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Monday'}\" (click)=\"onWeeklyClick('Monday')\">M</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Tuesday'}\" (click)=\"onWeeklyClick('Tuesday')\">T</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Wednesday'}\" (click)=\"onWeeklyClick('Wednesday')\">W</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Thursday'}\" (click)=\"onWeeklyClick('Thursday')\">T</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Friday'}\" (click)=\"onWeeklyClick('Friday')\">F</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Saturday'}\" (click)=\"onWeeklyClick('Saturday')\">S</span>\n          </div>\n\n          <!-- Monthly Radio Button -->\n          <ion-item lines=\"none\">\n            <ion-radio value=\"monthly\"></ion-radio>\n            <ion-label>Monthly</ion-label>\n          </ion-item>\n\n          <!-- Monthly Date Dropdown -->\n          <ion-item (click)=\"showMonthlyPicker($event)\" lines=\"none\" *ngIf=\"monthlyBtn\" style=\"    display: flex;\n            align-items: center; --min-height: 30px;\">\n              <ion-label slot=\"start\">Date</ion-label>\n              <ion-label slot=\"end\">{{monthlyDate}}</ion-label>\n            </ion-item>\n\n        </ion-radio-group>\n      </ion-list>\n\n      <ion-list>\n        <ion-radio-group name=\"auto\" mode=\"md\" [value]=\"perRadioGrp\" allowEmptySelection=true (ionChange)=\"onperRadioChange($event)\">\n          \n          <!-- Percentage change Radio Button -->\n          <ion-item lines=\"none\">\n            <ion-radio value=\"percentage\"></ion-radio>\n            <ion-label>If score percentage changes by (+/-)</ion-label>\n          </ion-item>\n        </ion-radio-group>\n\n        <!-- Percentage Range Slider -->\n        <ion-item *ngIf=\"percentageRage\" lines=\"none\" style=\"    --padding-start: 0;\">\n          <ion-range class=\"per_range\" min=\"1\" max=\"100\" mode=\"ios\" pin=true [value]='rangePer' *ngIf=\"percentageRage\" (ionChange)=\"setRangePer($event)\">\n            <ion-label slot=\"start\">1%</ion-label>\n            <ion-label slot=\"end\">100%</ion-label>\n          </ion-range>\n        </ion-item>\n      </ion-list>\n    </div>\n    <!-- Alert Page Options End -->\n\n    <!-- Submit/Update/Remove button Start -->\n    <div style=\"width: 80%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\">\n      <ion-button *ngIf=\"alertSubmitBtn\" (click)=\"onAlertSubmit($event)\"  shape=\"round\">\n        Submit\n      </ion-button>\n      <ion-button *ngIf=\"alertUpdateBtn\" (click)=\"onAlertSubmit($event)\" shape=\"round\">\n        Update\n      </ion-button>\n      <ion-button *ngIf=\"!alertSubmitBtn\" (click)=\"onRemoveAlert($event)\" shape=\"round\">\n        Remove\n      </ion-button>\n    </div>\n    <!-- Submit/Update/Remove button End -->\n  </div>\n\n  <!-- Footer Icons Start -->\n  <div class=\"footor_icon_div\">\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\n  </div>\n  <!-- Footer Icons End -->\n</ion-content>\n<!-- Alert End -->\n\n<!-- Report Start -->\n<ion-content *ngIf=\"selComp && ReportSec\" class=\"ReportContent\">\n\n  <!-- Left, Right Arrow Start -->\n  <div class=\"arrow_div\">\n    <ion-icon name=\"chevron-back-circle-outline\" (click)=\"onReportClick()\"></ion-icon>\n    <h1 class=\"Sub_title\">Download Report</h1>\n    <ion-icon name=\"chevron-forward-circle-outline\" (click)=\"onReportClick()\"></ion-icon>\n  </div>\n  <!-- Left, Right Arrow End -->\n\n  <!-- Report Options Start -->\n  <div class=\"reportDiv\">\n\n    <!-- PDF Download Button -->\n    <ion-button (click)=\"onPDFClick()\" shape=\"round\" class=\"pdfBtn\" disabled=true>\n      PDF\n    </ion-button>\n\n    <ion-list>\n      <ion-radio-group name=\"auto\" value=\"mail\" mode=\"md\">\n        <ion-list-header>\n          <ion-label class=\"list_header\">Email Report</ion-label>\n        </ion-list-header>\n\n        <!-- User Select Radio Button -->\n        <ion-item lines=\"none\">\n          <ion-radio value=\"mail\"></ion-radio>\n          <ion-label>{{currentUser.username}}</ion-label>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <!-- Send Button -->\n    <ion-button (click)=\"onSendClick()\" shape=\"round\" class=\"sendBtn\" disabled=true>\n      Send\n    </ion-button>\n  </div>\n  <!-- Report Options End -->\n\n  <!-- Footer Icons Start -->\n  <div class=\"footor_icon_div\">\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\n  </div>\n  <!-- Footer Icons End -->\n</ion-content>\n<!-- Report End -->\n\n<!-- Welcome Screen Loader start -->\n<div *ngIf=\"data.length == 0\" style=\"    position: absolute;\nz-index: 99;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\">\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 35px;\n  width: 35px;\">\n</div>\n<!-- Welcome Screen Loader End -->\n\n<!-- Fullscreen Loader on Page Transition -->\n<div *ngIf=\"showLoader\" style=\"    position: absolute;\nz-index: 99;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n/* background: rgb(0, 0, 0, 0.5); */\n\">\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 35px;\n  width: 35px;\">\n</div>\n<!-- Fullscreen Loader on Page Transition -->\n\n<!-- To Find text length for cslider positon -->\n<span id=\"tleng\" style=\"visibility: hidden; white-space: nowrap;\"></span>");

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
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-Logo {\n  display: flex;\n  padding-left: 10px;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 5px;\n}\n.header-Logo img {\n  height: 30px;\n}\n.header-Logo div {\n  width: 50%;\n  background: white;\n  border-radius: 25px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.header-Logo div ion-avatar {\n  background: #00b9ff;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  height: 35px;\n  width: 35px;\n  padding: 5px;\n  margin-right: 10px;\n  margin-left: -1px;\n}\n.header-Logo div p {\n  margin: 0;\n  font-size: 14px;\n  font-family: Open Sans SemiBold;\n  color: #00b9ff;\n  width: 70%;\n  text-align: left;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\nion-header ion-toolbar {\n  --background: #274b9e;\n}\nion-header ion-toolbar:nth-child(1) {\n  padding-top: 5px;\n}\nion-header ion-toolbar:nth-child(2) {\n  padding: 0 25px;\n}\nion-header hr {\n  margin: 0;\n  height: 2px;\n  background-color: #1a356a;\n}\n.searchBtn {\n  --border-radius:15px;\n  width: 75px;\n  font-size: 11px;\n  height: 24px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  --background: #00aeef;\n  --box-shadow: none;\n}\n.searchInput {\n  font-size: 16px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --color:#666;\n  text-align: center;\n}\n.searchItem {\n  --border-width:2px;\n  --border-color: #00b9ff;\n  --inner-padding-end: 5px;\n  --background: transparent;\n  --border-radius: 25px;\n  --min-height: 28px;\n}\n.searchItem ion-label {\n  margin: 2px 0px;\n  font-size: 14px;\n  align-items: center;\n  padding: 0 10px;\n  display: flex;\n  color: #888;\n}\n.searchItem ion-label ion-icon {\n  color: #00b9ff;\n  transform: scaleX(-1);\n  font-size: 18px;\n  margin-right: 10px;\n}\n.searchItem ion-label p {\n  font-size: 16px;\n  color: #fff;\n  font-family: Open Sans Regular;\n}\n.searchDiv {\n  padding: 5px 0px;\n  padding-top: 2%;\n}\nion-content {\n  --background: #274b9e;\n  --overflow: hidden;\n}\nion-content div ion-text {\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  font-family: Open Sans Regular;\n}\nion-content .footor_icon_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  position: absolute;\n  height: 15%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  align-items: center;\n}\nion-content .footor_icon_div img {\n  height: 40px;\n}\nion-content .footor_icon_div img:first-child, ion-content .footor_icon_div img:last-child {\n  margin-bottom: 75px;\n}\nion-content .footor_icon_div img:nth-child(2), ion-content .footor_icon_div img:nth-child(4) {\n  margin-bottom: 25px;\n}\nion-content .footor_icon_div img:first-child, ion-content .footor_icon_div img:nth-child(2) {\n  opacity: 0.5;\n}\n.MainContent .secDropDown {\n  --background: #00b9ff;\n  border-radius: 25px;\n  --padding-start: 0;\n  --padding-end: 5px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin: 10px 15px;\n}\n.MainContent .secDropDown div {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.MainContent .secDropDown div .sec_Detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 90%;\n}\n.MainContent .secDropDown div .sec_Detail .medItemSpan {\n  height: 50px;\n  width: 50px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.MainContent .secDropDown div .sec_Detail .medItemSpan p {\n  font-family: Open Sans SemiBold;\n  margin: 0;\n  font-size: 14px;\n  color: #fff;\n}\n.MainContent .secDropDown div .sec_Detail .Sec_Details_Sub {\n  width: 75%;\n}\n.MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p {\n  margin: 0;\n  font-size: 14px;\n  color: #fff;\n}\n.MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p:first-child {\n  font-family: Open Sans Regular;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p:last-child {\n  font-family: Open Sans SemiBold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.MainContent .secDropDown div ion-icon {\n  height: 40px;\n  width: 40px;\n  color: #fff;\n}\n.MainContent .arrow_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff;\n}\n.MainContent .mdSlides ion-slide {\n  height: calc(100vh - 360px);\n}\n.MainContent .iosSlides ion-slide {\n  height: calc(100vh - 345px);\n}\n.MainContent ion-slides .CompSlide ion-list::-webkit-scrollbar {\n  display: none;\n}\n.MainContent ion-slides .CompSlide ion-list {\n  height: 100%;\n  overflow: scroll;\n  background: transparent;\n  width: 75%;\n}\n.MainContent ion-slides .CompSlide ion-list .compItem {\n  --background: #00b9ff;\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  font-family: Open Sans SemiBold;\n  border-radius: 25px;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 10px;\n}\n.MainContent ion-slides .CompSlide ion-list .compItem p {\n  margin: 0;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.MainContent ion-slides .CompSlide ion-list .compItem span {\n  height: 45px;\n  width: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #fff;\n  margin-right: 10px;\n  border: 2px solid #274b9e;\n  margin-left: -2px;\n}\n.MainContent ion-slides .CompSlide ion-list .compItem div {\n  display: flex;\n  flex-direction: column;\n  align-items: unset;\n  width: 80%;\n}\n.MainContent ion-slides .CompSlide ion-list .compItem div p:last-child {\n  font-family: Open Sans SemiBold;\n}\n.MainContent ion-slides .circleSlide .start-ring {\n  stroke-width: 10px;\n  stroke: #0e82e5;\n  fill: #fff;\n}\n.active {\n  --background: #fff !important;\n}\n.ReportContent .arrow_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff;\n  margin-top: 5px;\n}\n.ReportContent .arrow_div .Sub_title {\n  color: #fff;\n  font-family: Open Sans Bold;\n  margin: 0;\n  font-size: 25px;\n}\n.ReportContent .reportDiv {\n  height: calc(100vh - 275px);\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.ReportContent .reportDiv ion-button {\n  height: 35px;\n  width: 30%;\n  --background: #00b9ff;\n  --background-activated: #00b9ff;\n  --color: #fff;\n}\n.ReportContent .reportDiv ion-list {\n  background: #274b9e;\n}\n.ReportContent .reportDiv ion-list ion-list-header {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  margin-bottom: 5%;\n}\n.ReportContent .reportDiv ion-list ion-list-header .list_header {\n  color: #fff;\n  font-size: 20px;\n  font-family: \"Open Sans SemiBold\";\n  text-align: center;\n}\n.ReportContent .reportDiv ion-list ion-item {\n  --background: transparent;\n  --ripple-color: transparent;\n}\n.ReportContent .reportDiv ion-list ion-item ion-radio {\n  --color-checked: #00b9ff;\n  --color: #fff;\n  margin-right: 10px;\n}\n.ReportContent .reportDiv ion-list ion-item ion-radio::part(container) {\n  border-color: #fff !important;\n}\n.ReportContent .reportDiv ion-list ion-item ion-label {\n  --color: #fff;\n  font-size: 16px;\n  font-family: \"Open Sans\";\n}\n.ReportContent .reportDiv .pdfBtn {\n  margin-bottom: 20%;\n}\n.ReportContent .reportDiv .sendBtn {\n  margin-top: 12%;\n}\n.AlertContent .arrow_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff;\n  margin-top: 5px;\n}\n.AlertContent .arrow_div .Sub_title {\n  color: #fff;\n  font-family: Open Sans Bold;\n  margin: 0;\n  font-size: 25px;\n}\n.AlertContent .alertDiv {\n  height: calc(100vh - 275px);\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.AlertContent .alertDiv ion-text h2 {\n  font-size: 16px;\n  font-family: Open Sans SemiBold;\n}\n.AlertContent .alertDiv .radioBtnDiv {\n  width: 85%;\n  margin-top: 5%;\n}\n.AlertContent .alertDiv .radioBtnDiv ion-list {\n  background: transparent;\n}\n.AlertContent .alertDiv .radioBtnDiv ion-list ion-item {\n  --background: transparent;\n  --ripple-color: transparent;\n  --min-height: 30px;\n}\n.AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-label {\n  color: #fff;\n  font-size: 14px;\n  font-family: Open Sans Regular;\n}\n.AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-radio {\n  --color-checked: #00b9ff;\n  --color: #fff;\n  margin-right: 10px;\n}\n.AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-radio::part(container) {\n  border-color: #fff !important;\n}\n.AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div span {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: transparent;\n  transition: 0.3s;\n}\n.AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div .active {\n  background: #00b9ff;\n}\n.AlertContent .alertDiv .radioBtnDiv ion-list .monthly_Div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  overflow: scroll;\n}\n.AlertContent .alertDiv .radioBtnDiv ion-list .monthly_Div p {\n  margin: 0;\n  font-size: 16px;\n  font-family: Open Sans SemiBold;\n}\n.AlertContent .alertDiv .radioBtnDiv ion-list:nth-child(2) {\n  margin-top: 20px;\n}\n.AlertContent .alertDiv .radioBtnDiv .per_range {\n  padding-left: 0;\n  padding-right: 0;\n  --knob-background: #00b9ff;\n  --knob-border-radius: 25px;\n  --knob-size: 15px;\n  --bar-background: #fff;\n  --bar-background-active: #00b9ff;\n}\n.AlertContent .alertDiv .radioBtnDiv .per_range::part(pin) {\n  transform: translate3d(0px, 0px, 0px) scale(1);\n  color: #fff;\n  font-size: 12px;\n  font-family: \"Open Sans Regular\";\n}\n.AlertContent .alertDiv ion-button {\n  margin-top: 5%;\n  --background: #00b9ff;\n  height: 30px;\n  width: 30%;\n  min-width: 100px;\n  --background-activated: none;\n}\n.avoid_looser_content .arrow_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff;\n}\n.avoid_looser_content .secDropDown {\n  --background: #00b9ff;\n  border-radius: 25px;\n  --padding-start: 0;\n  --padding-end: 5px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin: 10px 15px;\n}\n.avoid_looser_content .secDropDown div {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.avoid_looser_content .secDropDown div .sec_Detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 90%;\n}\n.avoid_looser_content .secDropDown div .sec_Detail .medItemSpan {\n  height: 50px;\n  width: 50px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.avoid_looser_content .secDropDown div .sec_Detail .medItemSpan p {\n  font-family: Open Sans SemiBold;\n  margin: 0;\n  font-size: 14px;\n  color: #fff;\n}\n.avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub {\n  width: 75%;\n}\n.avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p {\n  margin: 0;\n  font-size: 14px;\n  color: #fff;\n}\n.avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p:first-child {\n  font-family: Open Sans Regular;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p:last-child {\n  font-family: Open Sans SemiBold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.avoid_looser_content .secDropDown div ion-icon {\n  height: 40px;\n  width: 40px;\n  color: #fff;\n}\n.avoid_looser_content .mdSlides ion-slide {\n  height: calc(100vh - 360px);\n}\n.avoid_looser_content .iosSlides ion-slide {\n  height: calc(100vh - 345px);\n}\n.avoid_looser_content ion-slides .CompSlide ion-list::-webkit-scrollbar {\n  display: none;\n}\n.avoid_looser_content ion-slides .CompSlide ion-list {\n  height: 100%;\n  overflow: scroll;\n  background: transparent;\n  width: 75%;\n}\n.avoid_looser_content ion-slides .CompSlide ion-list .compItem {\n  --background: #00b9ff;\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  font-family: Open Sans SemiBold;\n  border-radius: 25px;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 10px;\n}\n.avoid_looser_content ion-slides .CompSlide ion-list .compItem p {\n  margin: 0;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.avoid_looser_content ion-slides .CompSlide ion-list .compItem span {\n  height: 45px;\n  width: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #fff;\n  margin-right: 10px;\n  border: 2px solid #274b9e;\n  margin-left: -2px;\n}\n.avoid_looser_content ion-slides .CompSlide ion-list .compItem div {\n  display: flex;\n  flex-direction: column;\n  align-items: unset;\n  width: 80%;\n}\n.avoid_looser_content ion-slides .CompSlide ion-list .compItem div p:last-child {\n  font-family: Open Sans SemiBold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBREFJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0VSO0FERFE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0daO0FERFE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVSLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VKO0FESUk7RUFDQSxxQkFBQTtBQ0RKO0FER0k7RUFDSSxnQkFBQTtBQ0RSO0FER0k7RUFDSSxlQUFBO0FDRFI7QURHSTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNEUjtBREtBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0E7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREdJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0RSO0FERVE7RUFDSSxjQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBWjtBREVRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQ0FaO0FES0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNGSjtBREtBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNIWjtBRE9JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQ0xSO0FET1E7RUFDSSxZQUFBO0FDTFo7QURPUTtFQUNJLG1CQUFBO0FDTFo7QURRUTtFQUNJLG1CQUFBO0FDTlo7QURTUTtFQUNJLFlBQUE7QUNQWjtBRGFJO0VBQ0kscUJBQUE7RUFDSixtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRFdRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDVFo7QURVWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ1JoQjtBRFNnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQcEI7QURRb0I7RUFDSSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ054QjtBRFNnQjtFQUNJLFVBQUE7QUNQcEI7QURRb0I7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNOeEI7QURRb0I7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ054QjtBRFFvQjtFQUNJLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDTnhCO0FEV1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNUaEI7QURnQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2RSO0FEa0JRO0VBQ0ksMkJBQUE7QUNoQlo7QURxQlE7RUFDSSwyQkFBQTtBQ25CWjtBRDBCWTtFQUNJLGFBQUE7QUN4QmhCO0FEMEJZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDeEJoQjtBRDRCZ0I7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUMxQnBCO0FEMkJvQjtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDekJ4QjtBRDRCb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQzFCeEI7QUQ2Qm9CO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDM0J4QjtBRDZCd0I7RUFDSSwrQkFBQTtBQzNCNUI7QURtQ1k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDakNoQjtBRHVDQTtFQUNJLDZCQUFBO0FDcENKO0FEd0NJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDckNSO0FEdUNRO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNyQ1o7QUR5Q0k7RUFDSSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdkNSO0FEeUNRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtBQ3ZDWjtBRDBDUTtFQUNJLG1CQUFBO0FDeENaO0FEMENZO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0FDeENoQjtBRDBDZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUN4Q3BCO0FENkNZO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtBQzNDaEI7QUQ2Q2dCO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUMzQ3BCO0FEOENnQjtFQUNJLDZCQUFBO0FDNUNwQjtBRCtDZ0I7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDN0NwQjtBRGtEUTtFQUNRLGtCQUFBO0FDaERoQjtBRG1EUTtFQUNJLGVBQUE7QUNqRFo7QUR1REk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNwRFI7QURzRFE7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ3BEWjtBRHdESTtFQUNJLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDSixzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN0REo7QUR5RFk7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7QUN2RGhCO0FEMkRRO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUN6RFo7QUQyRFk7RUFDSSx1QkFBQTtBQ3pEaEI7QUQyRGdCO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDekRwQjtBRDJEb0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDekR4QjtBRDREb0I7RUFDSSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQzFEeEI7QUQ2RG9CO0VBQ0ksNkJBQUE7QUMzRHhCO0FEK0RnQjtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDN0RwQjtBRDhEb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQzVEeEI7QUQ4RG9CO0VBQ0ksbUJBQUE7QUM1RHhCO0FEZ0VnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzlEcEI7QUQrRG9CO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQzdEeEI7QURrRVk7RUFDSSxnQkFBQTtBQ2hFaEI7QURtRVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDakVoQjtBRG9FWTtFQUNJLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ2xFaEI7QURzRVE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNwRVo7QUQ4RUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQzNFUjtBRDZFSTtFQUNJLHFCQUFBO0VBQ0osbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDM0VKO0FENEVRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDMUVaO0FEMkVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDekVoQjtBRDBFZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDeEVwQjtBRHlFb0I7RUFDSSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ3ZFeEI7QUQwRWdCO0VBQ0ksVUFBQTtBQ3hFcEI7QUR5RW9CO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDdkV4QjtBRHlFb0I7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ3ZFeEI7QUR5RW9CO0VBQ0ksK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN2RXhCO0FENEVZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDMUVoQjtBRGtGUTtFQUNJLDJCQUFBO0FDaEZaO0FEcUZRO0VBQ0ksMkJBQUE7QUNuRlo7QUQ0Rlk7RUFDSSxhQUFBO0FDMUZoQjtBRDRGWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQzFGaEI7QUQ4RmdCO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDNUZwQjtBRDZGb0I7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQzNGeEI7QUQ4Rm9CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUM1RnhCO0FEK0ZvQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQzdGeEI7QUQrRndCO0VBQ0ksK0JBQUE7QUM3RjVCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItTG9nb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIGRpdntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGlvbi1hdmF0YXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDBiOWZmO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xuICAgIH1cbiAgICBpb24tdG9vbGJhcjpudGgtY2hpbGQoMSl7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgfVxuICAgIGlvbi10b29sYmFyOm50aC1jaGlsZCgyKXtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgIH1cbiAgICBocntcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMzU2YTtcbiAgICB9XG59XG5cbi5zZWFyY2hCdG57XG4gICAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4OyBcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4OyAgXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhZWVmO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNlYXJjaElucHV0e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tY29sb3I6IzY2NjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWFyY2hJdGVte1xuICAgIC0tYm9yZGVyLXdpZHRoOjJweDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzAwYjlmZjsgXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxuICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDI4cHg7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBjb2xvcjogIzAwYjlmZjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlYXJjaERpdntcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGRpdntcbiAgICAgICAgaW9uLXRleHR7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjsgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rvcl9pY29uX2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxNSU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIGltZzpmaXJzdC1jaGlsZCwgaW1nOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3NXB4OyBcbiAgICAgICAgfVxuXG4gICAgICAgIGltZzpudGgtY2hpbGQoMiksIGltZzpudGgtY2hpbGQoNCl7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nOmZpcnN0LWNoaWxkLCBpbWc6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uTWFpbkNvbnRlbnR7XG4gICAgLnNlY0Ryb3BEb3due1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAuc2VjX0RldGFpbHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIC5tZWRJdGVtU3BhbntcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLlNlY19EZXRhaWxzX1N1YntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHA6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cbiAgICAuYXJyb3dfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5tZFNsaWRlc3tcbiAgICAgICAgaW9uLXNsaWRle1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzYwcHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmlvc1NsaWRlc3tcbiAgICAgICAgaW9uLXNsaWRle1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzQ1cHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLXNsaWRlc3tcblxuICAgICAgICAuQ29tcFNsaWRle1xuICAgICAgICAgICAgaW9uLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tbGlzdHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAuY29tcEl0ZW17XG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzI3NGI5ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaXJjbGVTbGlkZXtcbiAgICAgICAgICAgIC5zdGFydC1yaW5nIHtcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAjMGU4MmU1O1xuICAgICAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFjdGl2ZXtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLlJlcG9ydENvbnRlbnR7XG4gICAgLmFycm93X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWFyZ2luLXRvcCA6IDVweDtcblxuICAgICAgICAuU3ViX3RpdGxle1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmVwb3J0RGl2e1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNzVweCk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMwMGI5ZmY7XG4gICAgICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxpc3R7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjc0YjllO1xuXG4gICAgICAgICAgICBpb24tbGlzdC1oZWFkZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG5cbiAgICAgICAgICAgICAgICAubGlzdF9oZWFkZXJ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIFNlbWlCb2xkJztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgICAgIGlvbi1yYWRpb3tcbiAgICAgICAgICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiAjMDBiOWZmO1xuICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW9uLXJhZGlvOjpwYXJ0KGNvbnRhaW5lcil7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnBkZkJ0bntcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VuZEJ0bntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLkFsZXJ0Q29udGVudHtcbiAgICAuYXJyb3dfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tdG9wIDogNXB4O1xuXG4gICAgICAgIC5TdWJfdGl0bGV7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hbGVydERpdntcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjc1cHgpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLXRleHR7XG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yYWRpb0J0bkRpdntcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcblxuICAgICAgICAgICAgaW9uLWxpc3R7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgLS1taW4taGVpZ2h0OiAzMHB4O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpb24tcmFkaW97XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICMwMGI5ZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlvbi1yYWRpbzo6cGFydChjb250YWluZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAud2Vla2x5X0RpdntcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1vbnRobHlfRGl2e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tbGlzdDpudGgtY2hpbGQoMil7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBlcl9yYW5nZXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAtLWtub2ItYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgICAgICAgICAgICAgICAtLWtub2ItYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICAtLWtub2Itc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAtLWJhci1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjMDBiOWZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGVyX3JhbmdlOjpwYXJ0KHBpbil7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgUmVndWxhcic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IG5vbmU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cblxufVxuXG4uYXZvaWRfbG9vc2VyX2NvbnRlbnR7XG4gICAgLmFycm93X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLnNlY0Ryb3BEb3due1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAuc2VjX0RldGFpbHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIC5tZWRJdGVtU3BhbntcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLlNlY19EZXRhaWxzX1N1YntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHA6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cbiAgICAubWRTbGlkZXN7XG4gICAgICAgIGlvbi1zbGlkZXtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM2MHB4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pb3NTbGlkZXN7XG4gICAgICAgIGlvbi1zbGlkZXtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM0NXB4KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBpb24tc2xpZGVze1xuXG4gICAgICAgIC5Db21wU2xpZGV7XG4gICAgICAgICAgICBpb24tbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1saXN0e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC5jb21wSXRlbXtcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjc0YjllO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHA6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5oZWFkZXItTG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uaGVhZGVyLUxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmhlYWRlci1Mb2dvIGRpdiB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlci1Mb2dvIGRpdiBpb24tYXZhdGFyIHtcbiAgYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG4uaGVhZGVyLUxvZ28gZGl2IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgY29sb3I6ICMwMGI5ZmY7XG4gIHdpZHRoOiA3MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjc0YjllO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpudGgtY2hpbGQoMSkge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpudGgtY2hpbGQoMikge1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5pb24taGVhZGVyIGhyIHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMzU2YTtcbn1cblxuLnNlYXJjaEJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czoxNXB4O1xuICB3aWR0aDogNzVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhZWVmO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zZWFyY2hJbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tY29sb3I6IzY2NjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VhcmNoSXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOjJweDtcbiAgLS1ib3JkZXItY29sb3I6ICMwMGI5ZmY7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAtLW1pbi1oZWlnaHQ6IDI4cHg7XG59XG4uc2VhcmNoSXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW46IDJweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogIzg4ODtcbn1cbi5zZWFyY2hJdGVtIGlvbi1sYWJlbCBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDBiOWZmO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZWFyY2hJdGVtIGlvbi1sYWJlbCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xufVxuXG4uc2VhcmNoRGl2IHtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWNvbnRlbnQgZGl2IGlvbi10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XG59XG5pb24tY29udGVudCAuZm9vdG9yX2ljb25fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNSU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZm9vdG9yX2ljb25fZGl2IGltZyB7XG4gIGhlaWdodDogNDBweDtcbn1cbmlvbi1jb250ZW50IC5mb290b3JfaWNvbl9kaXYgaW1nOmZpcnN0LWNoaWxkLCBpb24tY29udGVudCAuZm9vdG9yX2ljb25fZGl2IGltZzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNzVweDtcbn1cbmlvbi1jb250ZW50IC5mb290b3JfaWNvbl9kaXYgaW1nOm50aC1jaGlsZCgyKSwgaW9uLWNvbnRlbnQgLmZvb3Rvcl9pY29uX2RpdiBpbWc6bnRoLWNoaWxkKDQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbmlvbi1jb250ZW50IC5mb290b3JfaWNvbl9kaXYgaW1nOmZpcnN0LWNoaWxkLCBpb24tY29udGVudCAuZm9vdG9yX2ljb25fZGl2IGltZzpudGgtY2hpbGQoMikge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5NYWluQ29udGVudCAuc2VjRHJvcERvd24ge1xuICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5NYWluQ29udGVudCAuc2VjRHJvcERvd24gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uTWFpbkNvbnRlbnQgLnNlY0Ryb3BEb3duIGRpdiAuc2VjX0RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG59XG4uTWFpbkNvbnRlbnQgLnNlY0Ryb3BEb3duIGRpdiAuc2VjX0RldGFpbCAubWVkSXRlbVNwYW4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5NYWluQ29udGVudCAuc2VjRHJvcERvd24gZGl2IC5zZWNfRGV0YWlsIC5tZWRJdGVtU3BhbiBwIHtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLk1haW5Db250ZW50IC5zZWNEcm9wRG93biBkaXYgLnNlY19EZXRhaWwgLlNlY19EZXRhaWxzX1N1YiB7XG4gIHdpZHRoOiA3NSU7XG59XG4uTWFpbkNvbnRlbnQgLnNlY0Ryb3BEb3duIGRpdiAuc2VjX0RldGFpbCAuU2VjX0RldGFpbHNfU3ViIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uTWFpbkNvbnRlbnQgLnNlY0Ryb3BEb3duIGRpdiAuc2VjX0RldGFpbCAuU2VjX0RldGFpbHNfU3ViIHA6Zmlyc3QtY2hpbGQge1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLk1haW5Db250ZW50IC5zZWNEcm9wRG93biBkaXYgLnNlY19EZXRhaWwgLlNlY19EZXRhaWxzX1N1YiBwOmxhc3QtY2hpbGQge1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5NYWluQ29udGVudCAuc2VjRHJvcERvd24gZGl2IGlvbi1pY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uTWFpbkNvbnRlbnQgLmFycm93X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uTWFpbkNvbnRlbnQgLm1kU2xpZGVzIGlvbi1zbGlkZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM2MHB4KTtcbn1cbi5NYWluQ29udGVudCAuaW9zU2xpZGVzIGlvbi1zbGlkZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM0NXB4KTtcbn1cbi5NYWluQ29udGVudCBpb24tc2xpZGVzIC5Db21wU2xpZGUgaW9uLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5NYWluQ29udGVudCBpb24tc2xpZGVzIC5Db21wU2xpZGUgaW9uLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogNzUlO1xufVxuLk1haW5Db250ZW50IGlvbi1zbGlkZXMgLkNvbXBTbGlkZSBpb24tbGlzdCAuY29tcEl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uTWFpbkNvbnRlbnQgaW9uLXNsaWRlcyAuQ29tcFNsaWRlIGlvbi1saXN0IC5jb21wSXRlbSBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uTWFpbkNvbnRlbnQgaW9uLXNsaWRlcyAuQ29tcFNsaWRlIGlvbi1saXN0IC5jb21wSXRlbSBzcGFuIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjc0YjllO1xuICBtYXJnaW4tbGVmdDogLTJweDtcbn1cbi5NYWluQ29udGVudCBpb24tc2xpZGVzIC5Db21wU2xpZGUgaW9uLWxpc3QgLmNvbXBJdGVtIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiB1bnNldDtcbiAgd2lkdGg6IDgwJTtcbn1cbi5NYWluQ29udGVudCBpb24tc2xpZGVzIC5Db21wU2xpZGUgaW9uLWxpc3QgLmNvbXBJdGVtIGRpdiBwOmxhc3QtY2hpbGQge1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xufVxuLk1haW5Db250ZW50IGlvbi1zbGlkZXMgLmNpcmNsZVNsaWRlIC5zdGFydC1yaW5nIHtcbiAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xuICBzdHJva2U6ICMwZTgyZTU7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5hY3RpdmUge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLlJlcG9ydENvbnRlbnQgLmFycm93X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5SZXBvcnRDb250ZW50IC5hcnJvd19kaXYgLlN1Yl90aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLlJlcG9ydENvbnRlbnQgLnJlcG9ydERpdiB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI3NXB4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLlJlcG9ydENvbnRlbnQgLnJlcG9ydERpdiBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzAlO1xuICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMwMGI5ZmY7XG4gIC0tY29sb3I6ICNmZmY7XG59XG4uUmVwb3J0Q29udGVudCAucmVwb3J0RGl2IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogIzI3NGI5ZTtcbn1cbi5SZXBvcnRDb250ZW50IC5yZXBvcnREaXYgaW9uLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLlJlcG9ydENvbnRlbnQgLnJlcG9ydERpdiBpb24tbGlzdCBpb24tbGlzdC1oZWFkZXIgLmxpc3RfaGVhZGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIFNlbWlCb2xkXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5SZXBvcnRDb250ZW50IC5yZXBvcnREaXYgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uUmVwb3J0Q29udGVudCAucmVwb3J0RGl2IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogIzAwYjlmZjtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLlJlcG9ydENvbnRlbnQgLnJlcG9ydERpdiBpb24tbGlzdCBpb24taXRlbSBpb24tcmFkaW86OnBhcnQoY29udGFpbmVyKSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLlJlcG9ydENvbnRlbnQgLnJlcG9ydERpdiBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICAtLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuLlJlcG9ydENvbnRlbnQgLnJlcG9ydERpdiAucGRmQnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xufVxuLlJlcG9ydENvbnRlbnQgLnJlcG9ydERpdiAuc2VuZEJ0biB7XG4gIG1hcmdpbi10b3A6IDEyJTtcbn1cblxuLkFsZXJ0Q29udGVudCAuYXJyb3dfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLkFsZXJ0Q29udGVudCAuYXJyb3dfZGl2IC5TdWJfdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5BbGVydENvbnRlbnQgLmFsZXJ0RGl2IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjc1cHgpO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uQWxlcnRDb250ZW50IC5hbGVydERpdiBpb24tdGV4dCBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbn1cbi5BbGVydENvbnRlbnQgLmFsZXJ0RGl2IC5yYWRpb0J0bkRpdiB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLkFsZXJ0Q29udGVudCAuYWxlcnREaXYgLnJhZGlvQnRuRGl2IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uQWxlcnRDb250ZW50IC5hbGVydERpdiAucmFkaW9CdG5EaXYgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tbWluLWhlaWdodDogMzBweDtcbn1cbi5BbGVydENvbnRlbnQgLmFsZXJ0RGl2IC5yYWRpb0J0bkRpdiBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XG59XG4uQWxlcnRDb250ZW50IC5hbGVydERpdiAucmFkaW9CdG5EaXYgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjMDBiOWZmO1xuICAtLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uQWxlcnRDb250ZW50IC5hbGVydERpdiAucmFkaW9CdG5EaXYgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJhZGlvOjpwYXJ0KGNvbnRhaW5lcikge1xuICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5BbGVydENvbnRlbnQgLmFsZXJ0RGl2IC5yYWRpb0J0bkRpdiBpb24tbGlzdCAud2Vla2x5X0RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLkFsZXJ0Q29udGVudCAuYWxlcnREaXYgLnJhZGlvQnRuRGl2IGlvbi1saXN0IC53ZWVrbHlfRGl2IHNwYW4ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uQWxlcnRDb250ZW50IC5hbGVydERpdiAucmFkaW9CdG5EaXYgaW9uLWxpc3QgLndlZWtseV9EaXYgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwMGI5ZmY7XG59XG4uQWxlcnRDb250ZW50IC5hbGVydERpdiAucmFkaW9CdG5EaXYgaW9uLWxpc3QgLm1vbnRobHlfRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLkFsZXJ0Q29udGVudCAuYWxlcnREaXYgLnJhZGlvQnRuRGl2IGlvbi1saXN0IC5tb250aGx5X0RpdiBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG59XG4uQWxlcnRDb250ZW50IC5hbGVydERpdiAucmFkaW9CdG5EaXYgaW9uLWxpc3Q6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5BbGVydENvbnRlbnQgLmFsZXJ0RGl2IC5yYWRpb0J0bkRpdiAucGVyX3JhbmdlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAtLWtub2ItYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgLS1rbm9iLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC0ta25vYi1zaXplOiAxNXB4O1xuICAtLWJhci1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzAwYjlmZjtcbn1cbi5BbGVydENvbnRlbnQgLmFsZXJ0RGl2IC5yYWRpb0J0bkRpdiAucGVyX3JhbmdlOjpwYXJ0KHBpbikge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpIHNjYWxlKDEpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgUmVndWxhclwiO1xufVxuLkFsZXJ0Q29udGVudCAuYWxlcnREaXYgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwJTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcbn1cblxuLmF2b2lkX2xvb3Nlcl9jb250ZW50IC5hcnJvd19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmF2b2lkX2xvb3Nlcl9jb250ZW50IC5zZWNEcm9wRG93biB7XG4gIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xufVxuLmF2b2lkX2xvb3Nlcl9jb250ZW50IC5zZWNEcm9wRG93biBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hdm9pZF9sb29zZXJfY29udGVudCAuc2VjRHJvcERvd24gZGl2IC5zZWNfRGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbn1cbi5hdm9pZF9sb29zZXJfY29udGVudCAuc2VjRHJvcERvd24gZGl2IC5zZWNfRGV0YWlsIC5tZWRJdGVtU3BhbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmF2b2lkX2xvb3Nlcl9jb250ZW50IC5zZWNEcm9wRG93biBkaXYgLnNlY19EZXRhaWwgLm1lZEl0ZW1TcGFuIHAge1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uYXZvaWRfbG9vc2VyX2NvbnRlbnQgLnNlY0Ryb3BEb3duIGRpdiAuc2VjX0RldGFpbCAuU2VjX0RldGFpbHNfU3ViIHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5hdm9pZF9sb29zZXJfY29udGVudCAuc2VjRHJvcERvd24gZGl2IC5zZWNfRGV0YWlsIC5TZWNfRGV0YWlsc19TdWIgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5hdm9pZF9sb29zZXJfY29udGVudCAuc2VjRHJvcERvd24gZGl2IC5zZWNfRGV0YWlsIC5TZWNfRGV0YWlsc19TdWIgcDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uYXZvaWRfbG9vc2VyX2NvbnRlbnQgLnNlY0Ryb3BEb3duIGRpdiAuc2VjX0RldGFpbCAuU2VjX0RldGFpbHNfU3ViIHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmF2b2lkX2xvb3Nlcl9jb250ZW50IC5zZWNEcm9wRG93biBkaXYgaW9uLWljb24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5hdm9pZF9sb29zZXJfY29udGVudCAubWRTbGlkZXMgaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzYwcHgpO1xufVxuLmF2b2lkX2xvb3Nlcl9jb250ZW50IC5pb3NTbGlkZXMgaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzQ1cHgpO1xufVxuLmF2b2lkX2xvb3Nlcl9jb250ZW50IGlvbi1zbGlkZXMgLkNvbXBTbGlkZSBpb24tbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmF2b2lkX2xvb3Nlcl9jb250ZW50IGlvbi1zbGlkZXMgLkNvbXBTbGlkZSBpb24tbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiA3NSU7XG59XG4uYXZvaWRfbG9vc2VyX2NvbnRlbnQgaW9uLXNsaWRlcyAuQ29tcFNsaWRlIGlvbi1saXN0IC5jb21wSXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5hdm9pZF9sb29zZXJfY29udGVudCBpb24tc2xpZGVzIC5Db21wU2xpZGUgaW9uLWxpc3QgLmNvbXBJdGVtIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5hdm9pZF9sb29zZXJfY29udGVudCBpb24tc2xpZGVzIC5Db21wU2xpZGUgaW9uLWxpc3QgLmNvbXBJdGVtIHNwYW4ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNzRiOWU7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xufVxuLmF2b2lkX2xvb3Nlcl9jb250ZW50IGlvbi1zbGlkZXMgLkNvbXBTbGlkZSBpb24tbGlzdCAuY29tcEl0ZW0gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHVuc2V0O1xuICB3aWR0aDogODAlO1xufVxuLmF2b2lkX2xvb3Nlcl9jb250ZW50IGlvbi1zbGlkZXMgLkNvbXBTbGlkZSBpb24tbGlzdCAuY29tcEl0ZW0gZGl2IHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG59Il19 */");

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
        var backpressOncetoExit = false;
        this._backSub = this.platform.backButton.subscribeWithPriority(0, () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.AvoidLosersec && !this.AlertSec && !this.ReportSec) {
                this.onAvoidLoserClick();
            }
            else if (!this.AvoidLosersec && this.AlertSec && !this.ReportSec) {
                this.onAlertClick();
            }
            else if (!this.AvoidLosersec && !this.AlertSec && this.ReportSec) {
                this.onReportClick();
            }
            else {
                if (backpressOncetoExit) {
                    navigator['app'].exitApp();
                }
                else {
                    backpressOncetoExit = true;
                    setTimeout(() => {
                        backpressOncetoExit = false;
                    }, 5000);
                    var toast = yield this.toastCtrl.create({
                        message: 'Press back again to exit NewAgeAlpha App',
                        duration: 1000,
                        cssClass: 'center'
                    });
                    toast.present();
                }
            }
        }));
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
        }
        this.menuCtrl.enable(true);
        this._dataSub = this.dataService.dbScore.subscribe(d => {
            if (d.length != 0) {
                this.data = d;
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
        this._backSub.unsubscribe();
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
            this.selSec = this.sectorList[1];
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
            return indname.name;
        }
        else if (lev == 3) {
            var tempind = ind.slice(0, 4);
            var indname = this.dbGICS.filter(i => i.code == tempind)[0];
            return indname.name;
        }
        else if (lev == 4) {
            var tempind = ind.slice(0, 6);
            var indname = this.dbGICS.filter(i => i.code == tempind)[0];
            return indname.name;
        }
        else if (lev == 5) {
            var tempind = ind.slice(0, 8);
            var indname = this.dbGICS.filter(i => i.code == tempind)[0];
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
                            this.CreateComps();
                            this.fillCompetives();
                            this.CreateCompCircle();
                            setTimeout(() => {
                                this.creatClockSlider();
                                this.setClock(this.selComp.isin, (this.selIndexData.indexOf(this.selComp) * 360 / this.selIndexData.length) - 90, this.selComp.ticker);
                                this.showLoader = false;
                            }, 100);
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
        this.AL_slides = document.getElementById('AL_Slider');
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
        this.AL_CurrSlide = evt.target.swiper.activeIndex;
        let prev_ind = evt.target.swiper.previousIndex;
        if (this.AL_CurrSlide == 1) {
            this.AL_mainCircle = true;
            this.AL_rangeCircle = false;
            if (prev_ind != 0) {
                setTimeout(() => {
                    this.showLoader = true;
                    this.loadData();
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
                setTimeout(() => {
                    var temp = { 0: 0, 1: this.CurrSliderData.e };
                    this.SliderOnChange(temp);
                }, 500);
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
        var list = document.getElementById('CompList');
        list.scrollTop = 0;
    }
    loadData() {
        if (!this.AvoidLosersec)
            document.getElementById("Circleloader").style.display = "flex";
        this.gC360 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
            .domain([0, 90, 180, 270, 360])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        this.gC100 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        this.gchart = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gchart");
        this.chartMain = this.createMainChart(this.gchart);
        setTimeout(() => {
            if (!this.AvoidLosersec) {
                let slideHeight = document.getElementsByClassName('circleSlide')[0].clientHeight;
                let slidewidth = document.getElementsByClassName('circleSlide')[0].clientWidth;
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
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#svgHContainer1').attr('viewBox', function () {
                    return '0 0 ' + slidewidth * 2 + ' ' + slideHeight;
                });
                this.gchart.attr('transform', function () {
                    return 'translate(' + slidewidth + ',' + slideHeight / 2 + ')';
                });
            }
        }, 500);
    }
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
                .style('opacity', 1)
                .transition()
                .style('opacity', .5)
                .on("end", repeat1);
        }
        return grp1;
    }
    createGradienArc(sMin, sMax) {
        let that = this;
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#maincircle")
            .transition()
            .attr('r', that.radius + 4)
            .style('stroke-width', '0px')
            .on("end", function () {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#maincircle")
                .transition()
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
            if (this.AL_rangeCircle) {
                var Fourline3 = gArc.append("line");
                Fourline3.attr("id", "lineB").attr("class", "lineMark")
                    .attr("x1", "0").attr("y1", "0").attr("x2", "0").attr("y2", "22")
                    .style('transform', 'translate(0px, 145px)')
                    .style('stroke', '#fff')
                    .style('stroke-width', '4px');
            }
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
            var lvl = 1;
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
            })
                .attr("transform", function (d, i) {
                var cx = ((i * 360 / dta.length) - 90);
                if (cx <= 90) {
                    return "rotate(" + (cx + 1.0) + ")";
                }
                else {
                    return "rotate(" + (cx - 1.0) + ")";
                }
            })
                .style("opacity", function (d) {
                let sMin = 0;
                let sMax = 100;
                let opa = 1;
                if (that.AvoidLosersec) {
                    if (that.AL_FilteredList.filter(data => data.isin === d.isin).length != 0) {
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
                return ((i * 360 / dta.length) - 90) > 90 ? "rotate(180)" : null;
            })
                .style("text-anchor", function (d, i) {
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
                    range = 'top' + (100 - Math.round(this.CurrSliderData.e));
                    this.dataHandler.getIndexPreRuns(this.IndexId, GICSId, Ctype, range).subscribe((res) => {
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
                            // var sinceIncep = that.formatedates(since.getMonth() + 1) + '/' + that.formatedates(since.getDate()) + '/' + since.getFullYear();
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
                                    type: 'datetime',
                                    categories: date,
                                    tickColor: '#f1f1f1',
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
            var oSvg = that.chartMain;
            var txt = that.selComp.companyName + " (" + that.selComp.ticker + ")";
            var med = that.roundMed(that.selComp.scores * 100);
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
            y = text.attr("y"), dy = 0, tspan = text.text(null).append("tspan").attr("dx", 5).attr("dy", 5), textalign = (text.style("text-anchor") == "end") ? false : true;
            tspan.attr("class", "txt");
            var i = 0;
            while (word = words.pop()) {
                lineNumber = lineNumber + 1;
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
                }
                else {
                    tspan.text(txt1)
                        .attr("class", "score");
                }
            }
        });
    }
    setClock(isin, val, txt) {
        return new Promise((resolve, reject) => {
            let that = this;
            if (txt != null) {
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").style("display", "none");
                var r = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#maincircle").attr("r");
                let gC360 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
                    .domain([0, 90, 180, 270, 360])
                    .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
                var comp = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.Compet' + isin).style('display', "none");
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
                    return val >= 90 ? "rotate(180)" : null;
                })
                    .style("text-anchor", function () {
                    return val >= 90 ? "end" : null;
                })
                    .style("display", function () { return txt == null ? "none" : "block"; })
                    .attr("fill", function () {
                    return gC360(val);
                })
                    .text(txt).call(that.wrap, 100);
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").style("display", "block");
                var bbox = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").select(".sText").node().getBBox();
                var bboxH = +bbox.height + 20;
                bboxH = bboxH > 40 ? bboxH : 40;
                d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").select(".sRect")
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
            resolve();
        });
    }
    circleRange(values) {
        var that = this;
        d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#slider").remove();
        var slider = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").append("g").attr("id", "slider")
            .attr("transform", "translate(-175,-175)");
        var width = 350;
        var height = 350;
        var margin = { top: 15, left: 15, bottom: 15, right: 15 };
        var offset = 0;
        var indicatorWidth = 15;
        var accentColor = 'transparent'; // '#00b9ff';
        var handleRadius = 10;
        var handleStrokeWidth = 7;
        var handleStrokeColor = "#fff";
        var handleIconColor = "#333333";
        var rangeTotal = 101;
        var tickColor1 = "#999";
        var radius = (Math.min(width, height) - margin.top - margin.bottom) / 2;
        var outerRadius = (radius + 1) + indicatorWidth / 2;
        var innerRadius = outerRadius - indicatorWidth;
        var dragLiveData;
        var ringbgrd, holder, indicatorArc, handles, dragBehavior;
        var a, e, startAngle, endAngle;
        var sliderDragRange = 5;
        var Intdata = values;
        var sliderInitValue = 100;
        var sliderEndValue = +values.start;
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
                else {
                    return { angle: segmentsToAngle(v), label: v % 10 ? null : v.toFixed(0) };
                }
            });
        };
        function writeTimeInfo(sliderObject) {
            if ((that.AvoidLosersec && !that.AL_mainCircle && !that.AL_rangeCircle) || (that.AvoidLosersec && that.AL_rangeCircle)) {
                that.CurrSliderData = sliderObject;
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
            d3__WEBPACK_IMPORTED_MODULE_5__["select"](this).classed('active', false);
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").select('.sliderToolTip').remove();
        });
        drawHandles();
        d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]("#handles .handlercontainer").attr("class", function (d, i) { return "handlercontainer a" + (i + 1); });
        if (endAngle === 360) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a2').attr('transform', 'rotate(' + (endAngle - 1.8) + ') translate(0,' + (radius - 3) * -1 + ')');
        }
        if ($('#handles .handle').length === 2) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.handle').remove();
        }
        if (values.end != 100 && values.end != 0) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a2').attr('transform', 'rotate(' + (helper.graphdata[1].angle) + ') translate(0,' + (radius - 3) * -1 + ')');
        }
        function drawHandles() {
            var handlerContainer = handles.selectAll('.handlercontainer').data(helper.getData());
            var circles = handlerContainer.enter()
                .append('g')
                .attr('class', 'handlercontainer')
                .attr('transform', function (d) {
                return 'rotate(' + angularScale(d.value) + ') translate(0,' + (radius - 3) * -1 + ')';
            })
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
            circles.append("text")
                .attr("text-anchor", "middle")
                .attr('dominant-baseline', 'central')
                .attr('font-family', 'FontAwesome')
                .attr('font-size', '10px')
                .attr('cursor', 'pointer')
                .attr('fill', "#fff");
        }
        function drawTickers() {
            var checkPoi = (sliderEndValue - sliderInitValue) <= 20 ? 1 : 0;
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
            var coordinates = d3__WEBPACK_IMPORTED_MODULE_5__["mouse"](svg.node());
            var x = coordinates[0] - radius;
            var y = coordinates[1] - radius;
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
            var allHandles = handles.selectAll('.handlercontainer');
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
            that.draggedHandle = true;
            writeTimeInfo(currentData);
            SetInfo(currentData);
            that.AL_List = that.selIndexData;
            that.OnAL_listChange(currentData);
            setTimeout(() => {
                if (!that.avoidSlides) {
                    that.avoidSlides = true;
                    that.showLoader = true;
                }
            }, 1000);
        }
        function SetInfo(data) {
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
        if (vals[0] != 0 || vals[1] != 100) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#DiagTxt").text("Reset");
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#RangeComp').style('display', 'block');
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#totalRangeStocks").style('display', 'none');
        }
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
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#totalRangeStocks").style('display', 'none');
        }
    }
    OnAL_listChange(d) {
        var total_lenght = this.AL_List.length;
        var filteredLength = total_lenght - Math.floor(total_lenght * (d.e / 100));
        this.AL_FilteredList = [...this.AL_List.slice(0, filteredLength)];
    }
    onWeeklyClick(day) {
        this.selWeeklyday = day;
        if (!this.alertSubmitBtn)
            this.alertUpdateBtn = true;
        else
            this.alertUpdateBtn = false;
    }
    onradioChange(e) {
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_6__["DataHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map