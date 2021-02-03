function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Header Start -->\n<ion-header class=\"ion-text-center ion-no-border\" *ngIf=\"mobile\">\n  <ion-toolbar class=\"toolbar\">\n    <div class=\"header-Logo\" [ngClass]=\"{'ipad_Logo': !mobile}\">\n      <!-- Logo -->\n      <img src=\"../../assets/images/NAA_Logo_Mobile.svg\" alt=\"NewAgeAlpha\" width=\"auto\">\n      \n      <!-- Logged in User Details Start -->\n        <div (click)=\"openMenu()\">\n          <ion-avatar>\n            <img src=\"../../assets/images/Profile_NAA5.svg\" />\n          </ion-avatar>\n            <p>{{currentUser.firstName}}&nbsp;{{currentUser.lastName}}</p>\n        </div>\n        <!-- Logged in User Details End-->\n    </div>\n    \n  </ion-toolbar>\n  <ion-toolbar> \n    <!-- SearchBar start -->\n      <div class=\"searchDiv\">\n        <ion-item class=\"searchItem\" lines=\"none\" (click)=\"openSearch()\">\n          <ion-label>\n            <ion-icon name=\"search\" ></ion-icon>\n            <p>Ticker or company name</p>\n            </ion-label>\n        </ion-item>\n      </div>\n       <!-- SearchBar End-->\n  </ion-toolbar>\n  <hr>\n</ion-header>\n\n<!-- Header End -->\n\n<!-- Welcome Screen Start -->\n<ion-content forceOverscroll=\"false\" *ngIf=\"!selComp && !AvoidLosersec && !AlertSec && !ReportSec\">\n\n  <!-- Welcome Screen Message start -->\n  <div>\n    <ion-text>\n      <p>To begin, use the Search Bar</p>\n      <p>to select a stock.</p>\n    </ion-text>\n  </div>\n  <!-- Welcome Screen Message End -->\n\n  <!-- Footer Icons Start -->\n  <div class=\"footor_icon_div\">\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\n    <img src='../../assets/images/Avoid Loser_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\n    <img src='../../assets/images/Notification_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\n    <img src='../../assets/images/Report_Download_Icon_Mobile.svg' style=\"opacity:0.5 ;\">\n  </div>\n  <!-- Footer Icons End -->\n\n</ion-content>\n<!-- Welcome Screen End -->\n\n<!-- Home Screen Start -->\n<ion-content forceOverscroll=\"false\" *ngIf=\"selComp && !AvoidLosersec && !AlertSec && !ReportSec\" class=\"MainContent\">\n\n  <!-- Sector DropDown Start -->\n    <ion-item *ngIf=\"selSec\" lines=\"none\" (click)=\"openSecPopOver($event)\" class=\"secDropDown\">\n      <div>\n        <span class=\"sec_Detail\">\n          <span class=\"medItemSpan\"><p [style.color]=\"getColor(selSec.secMed)\">{{selSec.secMed}}</p></span>\n          <span class=\"Sec_Details_Sub\">\n            <p>{{selSec.secTitle}}&nbsp;(<span>{{selComp.indexName}}</span>)</p>\n            <p>{{selSec.secName}}</p>\n          </span>\n      </span>\n      <ion-icon name=\"chevron-down-circle-outline\"></ion-icon>\n      </div>\n    </ion-item>\n    <!-- Sector DropDown End -->\n\n    <!-- Left, Right Arrow Start -->\n    <div class=\"arrow_div\">\n      <ion-icon *ngIf=\"CurrSlide == 1\" name='chevron-back-circle-outline' (click)=\"onArrowClick(0);\" style=\"color: #fff;\"></ion-icon>\n      <img *ngIf=\"CurrSlide == 0\" src=\"../../assets/images/Left Arrow Active.svg\" alt=\"LA\" style=\"height: 35px;\">\n      <ion-icon *ngIf=\"CurrSlide == 0\" name='chevron-forward-circle-outline' (click)=\"onArrowClick(1);\" style=\"color: #fff;\"></ion-icon>\n      <img *ngIf=\"CurrSlide == 1\" src=\"../../assets/images/Right Arrow Active.svg\" alt=\"RA\" style=\"height: 35px;\">\n    </div>\n    <!-- Left, Right Arrow End -->\n\n    <!-- Home Page Slider Start -->\n    <ion-slides id='MainSlider' [ngClass]=\"{'mdSlides': plt=='android', 'iosSlides': plt =='ios'}\" mode=\"ios\" [options]='slideOpts' (ionSlideDidChange)=\"onSlideChange($event)\">\n\n      <!-- Company List Grid Start -->\n      <ion-slide class=\"CompSlide\">\n        <ion-list id=\"CompList\">\n          <ion-item *ngFor=\"let item of selIndexData\" lines=\"none\" class=\"compItem\" [class.active]=\"selComp === item\" (click)=\"onCompanyClick(item)\">\n              <span [style.color]=\"getColor(roundMed(item.scores *100))\">{{roundMed(item.scores *100)}}</span>\n              <div><p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.companyName}}</p>\n              <p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.ticker}}</p></div>\n          </ion-item>\n        </ion-list>\n      </ion-slide>\n      <!-- Company List Grid End -->\n\n      <!-- Tool Start -->\n      <ion-slide class=\"circleSlide\">\n        <svg preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 700 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n          <g id=\"gchart\" transform=\"translate(345 ,260)\"></g>\n        </svg>\n        <div id=\"Circleloader\" style=\"height: 100%;\n        width: 100%;\n        display: none;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\" >\n          <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"    height: 35px;\n          width: 35px;\">\n        </div>\n      </ion-slide>\n      <!-- Tool End -->\n\n    </ion-slides>\n    <!-- Home Page Slider End -->\n\n    <!-- Footer Icons Start -->\n  <div class=\"footor_icon_div\">\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\n  </div>\n  <!-- Footer Icons End -->\n\n</ion-content>\n<!-- Home Screen End -->\n\n<!-- Avoid Looser Start -->\n<ion-content *ngIf=\"selComp && AvoidLosersec\" class=\"avoid_looser_content\">\n\n  <!-- Sector DropDown Start -->\n  <ion-item *ngIf=\"selSec\" lines=\"none\" (click)=\"openSecPopOver($event)\" class=\"secDropDown\">\n    <div>\n      <span class=\"sec_Detail\">\n        <span class=\"medItemSpan\"><p [style.color]=\"getColor(selSec.secMed)\">{{selSec.secMed}}</p></span>\n        <span class=\"Sec_Details_Sub\">\n          <p>{{selSec.secTitle}}&nbsp;(<span>{{selComp.indexName}}</span>)</p>\n          <p>{{selSec.secName}}</p>\n        </span>\n    </span>\n    <ion-icon name=\"chevron-down-circle-outline\"></ion-icon>\n    </div>\n  </ion-item>\n  <!-- Sector DropDown End -->\n\n  <!-- Initial Range Slider Start -->\n  <div style=\"width: 100%;\n  height: calc(100vh - 285px);\" *ngIf=\"!avoidSlides\" class=\"R_slider\">\n  <svg preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 450 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n    <g id=\"gchart\" transform=\"translate(225 ,260)\"></g>\n  </svg>\n</div>\n<!-- Initial Range Slider End -->\n\n<!-- Left, Right Arrow Start -->\n<div class=\"arrow_div\" *ngIf=\"avoidSlides\">\n  <ion-icon *ngIf=\"AL_CurrSlide != 0\" name='chevron-back-circle-outline' (click)=\"onALArrowClick('prev');\" style=\"color: #fff;\"></ion-icon>\n  <img *ngIf=\"AL_CurrSlide == 0\" src=\"../../assets/images/Left Arrow Active.svg\" alt=\"LA\" style=\"height: 35px;\">\n  <ion-icon *ngIf=\"AL_CurrSlide != 2\" name='chevron-forward-circle-outline' (click)=\"onALArrowClick('frwd');\" style=\"color: #fff;\"></ion-icon>\n  <img *ngIf=\"AL_CurrSlide == 2\" src=\"../../assets/images/Right Arrow Active.svg\" alt=\"RA\" style=\"height: 35px;\">\n</div>\n<!-- Left, Right Arrow End -->\n\n<!-- Avoid Looser Page Slider Start -->\n<ion-slides mode=\"ios\" *ngIf=\"avoidSlides\" [ngClass]=\"{'mdSlides': plt=='android' , 'iosSlides': plt =='ios'}\" [options]='slideOpts' (ionSlideDidChange)=\"onALSlideChange($event)\" id=\"AL_Slider\">\n  \n  <!-- Company List Grid Start -->\n  <ion-slide class=\"CompSlide\">\n    <ion-list id=\"CompList\" *ngIf=\"AL_FilteredList.length != 0\">\n      <ion-item *ngFor=\"let item of AL_FilteredList\" lines=\"none\" class=\"compItem\" [class.active]=\"selComp === item\">\n          <span [style.color]=\"getColor(roundMed(item.scores *100))\">{{roundMed(item.scores *100)}}</span>\n          <div><p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.companyName}}</p>\n          <p [style.color]=\"selComp === item? getColor(roundMed(item.scores *100)) : '#fff'\">{{item.ticker}}</p></div>\n      </ion-item>\n    </ion-list>\n    <div *ngIf=\"AL_FilteredList.length == 0\">\n      <p style=\"    font-family: 'Open Sans SemiBold';\n      color: #fff;\n      font-size: 16px;\">No company to show</p>\n    </div>\n  </ion-slide>\n  <!-- Company List Grid End -->\n\n  <!-- Avoid Looser Tool Start -->\n  <ion-slide class=\"CircleSlider\">\n    <svg *ngIf=\"AL_mainCircle\" preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 700 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n      <g id=\"gchart\" transform=\"translate(345 ,260)\"></g>\n    </svg>\n  </ion-slide>\n  <!-- Avoid Looser Tool End -->\n\n  <!-- Range Slider Tool Start -->\n  <ion-slide class=\"rangeSlide R_slider\">\n    <svg *ngIf=\"AL_rangeCircle\" preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"0 0 450 550\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n      <g id=\"gchart\" transform=\"translate(225 ,260)\"></g>\n    </svg>\n  </ion-slide>\n  <!-- Range Slider Tool End -->\n\n</ion-slides>\n<!-- Avoid Looser Page Slider End -->\n\n<!-- Footer Icons Start -->\n  <div class=\"footor_icon_div\">\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\n  </div>\n  <!-- Footer Icons End -->\n\n</ion-content>\n<!-- Avoid Looser End -->\n\n<!-- Alert Start -->\n<ion-content *ngIf=\"selComp && AlertSec\" class=\"AlertContent\">\n\n  <!-- Left, Right Arrow Start -->\n  <div class=\"arrow_div\">\n    <ion-icon name=\"chevron-back-circle-outline\" (click)=\"onAlertClick()\"></ion-icon>\n    <h1 class=\"Sub_title\">Alert Settings</h1>\n    <ion-icon name=\"chevron-forward-circle-outline\" (click)=\"onAlertClick()\"></ion-icon>\n  </div>\n  <!-- Left, Right Arrow End -->\n\n  <div class=\"alertDiv\">\n    <!-- Alert Page Title Start -->\n    <ion-text>\n      <h2>Set Alert For:&nbsp;{{selComp.companyName}}&nbsp;({{selComp.ticker}})</h2>\n    </ion-text>\n    <!-- Alert Page Title End -->\n\n    <!-- Alert Page Options Start -->\n    <div class=\"radioBtnDiv\">\n      <ion-list>\n        <ion-radio-group name=\"auto\" [value]=\"selctedradioopts\" mode=\"md\" (ionChange)=\"onradioChange($event)\">\n          <!-- Daily Radio Button -->\n          <ion-item lines=\"none\">\n            <ion-radio value=\"daily\"></ion-radio>\n            <ion-label>Daily</ion-label>\n          </ion-item>\n\n          <!-- Weekly Radio Button -->\n          <ion-item lines=\"none\">\n            <ion-radio value=\"weekly\"></ion-radio>\n            <ion-label>Weekly</ion-label>\n          </ion-item>\n\n          <!-- Weekly day Button -->\n          <div class=\"weekly_Div\" *ngIf=\"weeklyDiv\">\n            <span [ngClass]=\"{'active': selWeeklyday == 'Sunday'}\" (click)=\"onWeeklyClick('Sunday')\">S</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Monday'}\" (click)=\"onWeeklyClick('Monday')\">M</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Tuesday'}\" (click)=\"onWeeklyClick('Tuesday')\">T</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Wednesday'}\" (click)=\"onWeeklyClick('Wednesday')\">W</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Thursday'}\" (click)=\"onWeeklyClick('Thursday')\">T</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Friday'}\" (click)=\"onWeeklyClick('Friday')\">F</span>\n            <span [ngClass]=\"{'active': selWeeklyday == 'Saturday'}\" (click)=\"onWeeklyClick('Saturday')\">S</span>\n          </div>\n\n          <!-- Monthly Radio Button -->\n          <ion-item lines=\"none\">\n            <ion-radio value=\"monthly\"></ion-radio>\n            <ion-label>Monthly</ion-label>\n          </ion-item>\n\n          <!-- Monthly Date Dropdown -->\n          <ion-item (click)=\"showMonthlyPicker($event)\" lines=\"none\" *ngIf=\"monthlyBtn\" style=\"    display: flex;\n            align-items: center; --min-height: 30px;\">\n              <ion-label slot=\"start\">Date</ion-label>\n              <ion-label slot=\"end\">{{monthlyDate}}</ion-label>\n            </ion-item>\n\n        </ion-radio-group>\n      </ion-list>\n\n      <ion-list>\n        <ion-radio-group name=\"auto\" mode=\"md\" [value]=\"perRadioGrp\" allowEmptySelection=true (ionChange)=\"onperRadioChange($event)\">\n          \n          <!-- Percentage change Radio Button -->\n          <ion-item lines=\"none\">\n            <ion-radio value=\"percentage\"></ion-radio>\n            <ion-label>If score percentage changes by (+/-)</ion-label>\n          </ion-item>\n        </ion-radio-group>\n\n        <!-- Percentage Range Slider -->\n        <ion-item *ngIf=\"percentageRage\" lines=\"none\" style=\"    --padding-start: 0;\">\n          <ion-range class=\"per_range\" min=\"1\" max=\"100\" mode=\"ios\" pin=true [value]='rangePer' *ngIf=\"percentageRage\" (ionChange)=\"setRangePer($event)\">\n            <ion-label slot=\"start\">1%</ion-label>\n            <ion-label slot=\"end\">100%</ion-label>\n          </ion-range>\n        </ion-item>\n      </ion-list>\n    </div>\n    <!-- Alert Page Options End -->\n\n    <!-- Submit/Update/Remove button Start -->\n    <div style=\"width: 80%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\">\n      <ion-button *ngIf=\"alertSubmitBtn\" (click)=\"onAlertSubmit($event)\"  shape=\"round\">\n        Submit\n      </ion-button>\n      <ion-button *ngIf=\"alertUpdateBtn\" (click)=\"onAlertSubmit($event)\" shape=\"round\">\n        Update\n      </ion-button>\n      <ion-button *ngIf=\"!alertSubmitBtn\" (click)=\"onRemoveAlert($event)\" shape=\"round\">\n        Remove\n      </ion-button>\n    </div>\n    <!-- Submit/Update/Remove button End -->\n  </div>\n\n  <!-- Footer Icons Start -->\n  <div class=\"footor_icon_div\">\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\n  </div>\n  <!-- Footer Icons End -->\n</ion-content>\n<!-- Alert End -->\n\n<!-- Report Start -->\n<ion-content *ngIf=\"selComp && ReportSec\" class=\"ReportContent\">\n\n  <!-- Left, Right Arrow Start -->\n  <div class=\"arrow_div\">\n    <ion-icon name=\"chevron-back-circle-outline\" (click)=\"onReportClick()\"></ion-icon>\n    <h1 class=\"Sub_title\">Download Report</h1>\n    <ion-icon name=\"chevron-forward-circle-outline\" (click)=\"onReportClick()\"></ion-icon>\n  </div>\n  <!-- Left, Right Arrow End -->\n\n  <!-- Report Options Start -->\n  <div class=\"reportDiv\">\n\n    <!-- PDF Download Button -->\n    <ion-button (click)=\"onPDFClick()\" shape=\"round\" class=\"pdfBtn\" disabled=true>\n      PDF\n    </ion-button>\n\n    <ion-list>\n      <ion-radio-group name=\"auto\" value=\"mail\" mode=\"md\">\n        <ion-list-header>\n          <ion-label class=\"list_header\">Email Report</ion-label>\n        </ion-list-header>\n\n        <!-- User Select Radio Button -->\n        <ion-item lines=\"none\">\n          <ion-radio value=\"mail\"></ion-radio>\n          <ion-label>{{currentUser.username}}</ion-label>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <!-- Send Button -->\n    <ion-button (click)=\"onSendClick()\" shape=\"round\" class=\"sendBtn\" disabled=true>\n      Send\n    </ion-button>\n  </div>\n  <!-- Report Options End -->\n\n  <!-- Footer Icons Start -->\n  <div class=\"footor_icon_div\">\n    <img src=\"../../assets/images/Portfolio_Icon_Mobile.svg\">\n    <img src=\"../../assets/images/Compare_Icon_Mobile.svg\">\n    <img [src]=\"AvoidLosersec? '../../assets/images/Avoid Loser_Blue_Icon_Mobile.svg' : '../../assets/images/Avoid Loser_Icon_Mobile.svg'\" (click)=\"onAvoidLoserClick()\">\n    <img [src]=\"AlertSec? '../../assets/images/Notification_Blue_Icon_Mobile.svg' : '../../assets/images/Notification_Icon_Mobile.svg'\" (click)=\"onAlertClick()\">\n    <img [src]=\"ReportSec? '../../assets/images/Report_Download_Blue_Icon_Mobile.svg' : '../../assets/images/Report_Download_Icon_Mobile.svg'\" (click)=\"onReportClick()\">\n  </div>\n  <!-- Footer Icons End -->\n</ion-content>\n<!-- Report End -->\n\n<!-- Welcome Screen Loader start -->\n<div *ngIf=\"data.length == 0\" style=\"    position: absolute;\nz-index: 99;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\">\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 35px;\n  width: 35px;\">\n</div>\n<!-- Welcome Screen Loader End -->\n\n<!-- Fullscreen Loader on Page Transition -->\n<div *ngIf=\"showLoader\" style=\"    position: absolute;\nz-index: 99;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n/* background: rgb(0, 0, 0, 0.5); */\n\">\n  <img src=\"../../assets/images/NAA.gif\" alt=\"Loading...\" style=\"height: 35px;\n  width: 35px;\">\n</div>\n<!-- Fullscreen Loader on Page Transition -->\n\n<!-- To Find text length for cslider positon -->\n<span id=\"tleng\" style=\"visibility: hidden; white-space: nowrap;\"></span>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-Logo {\n  display: flex;\n  padding-left: 10px;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 5px; }\n  .header-Logo img {\n    height: 30px; }\n  .header-Logo div {\n    width: 50%;\n    background: white;\n    border-radius: 25px;\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n  .header-Logo div ion-avatar {\n      background: #00b9ff;\n      --padding-bottom: 0;\n      --padding-start: 0;\n      --padding-end: 0;\n      --padding-top: 0;\n      height: 35px;\n      width: 35px;\n      padding: 5px;\n      margin-right: 10px;\n      margin-left: -1px; }\n  .header-Logo div p {\n      margin: 0;\n      font-size: 14px;\n      font-family: Open Sans SemiBold;\n      color: #00b9ff;\n      width: 70%;\n      text-align: left;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap; }\n  ion-header ion-toolbar {\n  --background: #274b9e; }\n  ion-header ion-toolbar:nth-child(1) {\n  padding-top: 5px; }\n  ion-header ion-toolbar:nth-child(2) {\n  padding: 0 25px; }\n  ion-header hr {\n  margin: 0;\n  height: 2px;\n  background-color: #1a356a; }\n  .searchBtn {\n  --border-radius:15px;\n  width: 75px;\n  font-size: 11px;\n  height: 24px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  --background: #00aeef;\n  --box-shadow: none; }\n  .searchInput {\n  font-size: 16px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --color:#666;\n  text-align: center; }\n  .searchItem {\n  --border-width:2px;\n  --border-color: #00b9ff;\n  --inner-padding-end: 5px;\n  --background: transparent;\n  --border-radius: 25px;\n  --min-height: 28px; }\n  .searchItem ion-label {\n    margin: 2px 0px;\n    font-size: 14px;\n    align-items: center;\n    padding: 0 10px;\n    display: flex;\n    color: #888; }\n  .searchItem ion-label ion-icon {\n      color: #00b9ff;\n      transform: scaleX(-1);\n      font-size: 18px;\n      margin-right: 10px; }\n  .searchItem ion-label p {\n      font-size: 16px;\n      color: #fff;\n      font-family: Open Sans Regular; }\n  .searchDiv {\n  padding: 5px 0px;\n  padding-top: 2%; }\n  ion-content {\n  --background: #274b9e;\n  --overflow: hidden; }\n  ion-content div ion-text {\n    color: #fff;\n    font-size: 14px;\n    text-align: center;\n    font-family: Open Sans Regular; }\n  ion-content .footor_icon_div {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    position: absolute;\n    height: 15%;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    align-items: center; }\n  ion-content .footor_icon_div img {\n      height: 40px; }\n  ion-content .footor_icon_div img:first-child, ion-content .footor_icon_div img:last-child {\n      margin-bottom: 75px; }\n  ion-content .footor_icon_div img:nth-child(2), ion-content .footor_icon_div img:nth-child(4) {\n      margin-bottom: 25px; }\n  ion-content .footor_icon_div img:first-child, ion-content .footor_icon_div img:nth-child(2) {\n      opacity: 0.5; }\n  .MainContent .secDropDown {\n  --background: #00b9ff;\n  border-radius: 25px;\n  --padding-start: 0;\n  --padding-end: 5px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin: 10px 15px; }\n  .MainContent .secDropDown div {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n  .MainContent .secDropDown div .sec_Detail {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      width: 90%; }\n  .MainContent .secDropDown div .sec_Detail .medItemSpan {\n        height: 50px;\n        width: 50px;\n        background: #fff;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        margin-right: 5px; }\n  .MainContent .secDropDown div .sec_Detail .medItemSpan p {\n          font-family: Open Sans SemiBold;\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub {\n        width: 75%; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p {\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p:first-child {\n          font-family: Open Sans Regular;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .MainContent .secDropDown div .sec_Detail .Sec_Details_Sub p:last-child {\n          font-family: Open Sans SemiBold;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .MainContent .secDropDown div ion-icon {\n      height: 40px;\n      width: 40px;\n      color: #fff; }\n  .MainContent .arrow_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff; }\n  .MainContent .mdSlides ion-slide {\n  height: calc(100vh - 360px); }\n  .MainContent .iosSlides ion-slide {\n  height: calc(100vh - 345px); }\n  .MainContent ion-slides .CompSlide ion-list::-webkit-scrollbar {\n  display: none; }\n  .MainContent ion-slides .CompSlide ion-list {\n  height: 100%;\n  overflow: scroll;\n  background: transparent;\n  width: 75%; }\n  .MainContent ion-slides .CompSlide ion-list .compItem {\n    --background: #00b9ff;\n    display: flex;\n    flex-direction: row;\n    font-size: 12px;\n    font-family: Open Sans SemiBold;\n    border-radius: 25px;\n    --padding-start: 0;\n    --padding-top: 0;\n    --padding-end: 0;\n    --padding-bottom: 0;\n    --inner-padding-start: 0;\n    --inner-padding-end: 0;\n    margin-bottom: 10px; }\n  .MainContent ion-slides .CompSlide ion-list .compItem p {\n      margin: 0;\n      color: #fff;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .MainContent ion-slides .CompSlide ion-list .compItem span {\n      height: 45px;\n      width: 45px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: 50%;\n      background: #fff;\n      margin-right: 10px;\n      border: 2px solid #274b9e;\n      margin-left: -2px; }\n  .MainContent ion-slides .CompSlide ion-list .compItem div {\n      display: flex;\n      flex-direction: column;\n      align-items: unset;\n      width: 80%; }\n  .MainContent ion-slides .CompSlide ion-list .compItem div p:last-child {\n        font-family: Open Sans SemiBold; }\n  .MainContent ion-slides .circleSlide .start-ring {\n  stroke-width: 10px;\n  stroke: #0e82e5;\n  fill: #fff; }\n  .active {\n  --background: #fff !important; }\n  .ReportContent .arrow_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff;\n  margin-top: 5px; }\n  .ReportContent .arrow_div .Sub_title {\n    color: #fff;\n    font-family: Open Sans Bold;\n    margin: 0;\n    font-size: 25px; }\n  .ReportContent .reportDiv {\n  height: calc(100vh - 275px);\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .ReportContent .reportDiv ion-button {\n    height: 35px;\n    width: 30%;\n    --background: #00b9ff;\n    --background-activated: #00b9ff;\n    --color: #fff; }\n  .ReportContent .reportDiv ion-list {\n    background: #274b9e; }\n  .ReportContent .reportDiv ion-list ion-list-header {\n      -webkit-padding-start: 0;\n              padding-inline-start: 0;\n      margin-bottom: 5%; }\n  .ReportContent .reportDiv ion-list ion-list-header .list_header {\n        color: #fff;\n        font-size: 20px;\n        font-family: 'Open Sans SemiBold';\n        text-align: center; }\n  .ReportContent .reportDiv ion-list ion-item {\n      --background: transparent;\n      --ripple-color: transparent; }\n  .ReportContent .reportDiv ion-list ion-item ion-radio {\n        --color-checked: #00b9ff;\n        --color: #fff;\n        margin-right: 10px; }\n  .ReportContent .reportDiv ion-list ion-item ion-radio::part(container) {\n        border-color: #fff !important; }\n  .ReportContent .reportDiv ion-list ion-item ion-label {\n        --color: #fff;\n        font-size: 16px;\n        font-family: 'Open Sans'; }\n  .ReportContent .reportDiv .pdfBtn {\n    margin-bottom: 20%; }\n  .ReportContent .reportDiv .sendBtn {\n    margin-top: 12%; }\n  .AlertContent .arrow_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff;\n  margin-top: 5px; }\n  .AlertContent .arrow_div .Sub_title {\n    color: #fff;\n    font-family: Open Sans Bold;\n    margin: 0;\n    font-size: 25px; }\n  .AlertContent .alertDiv {\n  height: calc(100vh - 275px);\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .AlertContent .alertDiv ion-text h2 {\n    font-size: 16px;\n    font-family: Open Sans SemiBold; }\n  .AlertContent .alertDiv .radioBtnDiv {\n    width: 85%;\n    margin-top: 5%; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list {\n      background: transparent; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item {\n        --background: transparent;\n        --ripple-color: transparent;\n        --min-height: 30px; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-label {\n          color: #fff;\n          font-size: 14px;\n          font-family: Open Sans Regular; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-radio {\n          --color-checked: #00b9ff;\n          --color: #fff;\n          margin-right: 10px; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list ion-item ion-radio::part(container) {\n          border-color: #fff !important; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div {\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div span {\n          height: 30px;\n          width: 30px;\n          border-radius: 50%;\n          color: #fff;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          background: transparent;\n          transition: .3s; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .weekly_Div .active {\n          background: #00b9ff; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .monthly_Div {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        overflow: scroll; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list .monthly_Div p {\n          margin: 0;\n          font-size: 16px;\n          font-family: Open Sans SemiBold; }\n  .AlertContent .alertDiv .radioBtnDiv ion-list:nth-child(2) {\n      margin-top: 20px; }\n  .AlertContent .alertDiv .radioBtnDiv .per_range {\n      padding-left: 0;\n      padding-right: 0;\n      --knob-background: #00b9ff;\n      --knob-border-radius: 25px;\n      --knob-size: 15px;\n      --bar-background: #fff;\n      --bar-background-active: #00b9ff; }\n  .AlertContent .alertDiv .radioBtnDiv .per_range::part(pin) {\n      transform: translate3d(0px, 0px, 0px) scale(1);\n      color: #fff;\n      font-size: 12px;\n      font-family: 'Open Sans Regular'; }\n  .AlertContent .alertDiv ion-button {\n    margin-top: 5%;\n    --background: #00b9ff;\n    height: 30px;\n    width: 30%;\n    min-width: 100px;\n    --background-activated: none; }\n  .avoid_looser_content .arrow_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  font-size: 40px;\n  color: #fff; }\n  .avoid_looser_content .secDropDown {\n  --background: #00b9ff;\n  border-radius: 25px;\n  --padding-start: 0;\n  --padding-end: 5px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin: 10px 15px; }\n  .avoid_looser_content .secDropDown div {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n  .avoid_looser_content .secDropDown div .sec_Detail {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      width: 90%; }\n  .avoid_looser_content .secDropDown div .sec_Detail .medItemSpan {\n        height: 50px;\n        width: 50px;\n        background: #fff;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        margin-right: 5px; }\n  .avoid_looser_content .secDropDown div .sec_Detail .medItemSpan p {\n          font-family: Open Sans SemiBold;\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub {\n        width: 75%; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p {\n          margin: 0;\n          font-size: 14px;\n          color: #fff; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p:first-child {\n          font-family: Open Sans Regular;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .avoid_looser_content .secDropDown div .sec_Detail .Sec_Details_Sub p:last-child {\n          font-family: Open Sans SemiBold;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .avoid_looser_content .secDropDown div ion-icon {\n      height: 40px;\n      width: 40px;\n      color: #fff; }\n  .avoid_looser_content .mdSlides ion-slide {\n  height: calc(100vh - 360px); }\n  .avoid_looser_content .iosSlides ion-slide {\n  height: calc(100vh - 345px); }\n  .avoid_looser_content ion-slides .CompSlide ion-list::-webkit-scrollbar {\n  display: none; }\n  .avoid_looser_content ion-slides .CompSlide ion-list {\n  height: 100%;\n  overflow: scroll;\n  background: transparent;\n  width: 75%; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem {\n    --background: #00b9ff;\n    display: flex;\n    flex-direction: row;\n    font-size: 12px;\n    font-family: Open Sans SemiBold;\n    border-radius: 25px;\n    --padding-start: 0;\n    --padding-top: 0;\n    --padding-end: 0;\n    --padding-bottom: 0;\n    --inner-padding-start: 0;\n    --inner-padding-end: 0;\n    margin-bottom: 10px; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem p {\n      margin: 0;\n      color: #fff;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem span {\n      height: 45px;\n      width: 45px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: 50%;\n      background: #fff;\n      margin-right: 10px;\n      border: 2px solid #274b9e;\n      margin-left: -2px; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem div {\n      display: flex;\n      flex-direction: column;\n      align-items: unset;\n      width: 80%; }\n  .avoid_looser_content ion-slides .CompSlide ion-list .compItem div p:last-child {\n        font-family: Open Sans SemiBold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saGFkbWluL05BQUxwaGFNb2JpbGUvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQixFQUFBO0VBTHRCO0lBT1EsWUFBWSxFQUFBO0VBUHBCO0lBVVEsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtFQWYzQjtNQWlCWSxtQkFBbUI7TUFDbkIsbUJBQWlCO01BQ2pCLGtCQUFnQjtNQUNoQixnQkFBYztNQUNkLGdCQUFjO01BQ2QsWUFBWTtNQUNaLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGlCQUFpQixFQUFBO0VBMUI3QjtNQTZCWSxTQUFTO01BQ1QsZUFBZTtNQUNmLCtCQUErQjtNQUMvQixjQUFjO01BQ2QsVUFBVTtNQUNWLGdCQUFnQjtNQUV4Qix1QkFBdUI7TUFDdkIsZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBO0VBS3ZCO0VBRUkscUJBQWEsRUFBQTtFQUZqQjtFQUtRLGdCQUFnQixFQUFBO0VBTHhCO0VBUVEsZUFBZSxFQUFBO0VBUnZCO0VBV1EsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUIsRUFBQTtFQUlqQztFQUNJLG9CQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBYztFQUNkLHFCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFhO0VBQ2Isa0JBQWEsRUFBQTtFQUdqQjtFQUNJLGVBQWU7RUFDZixrQkFBYztFQUNkLHFCQUFpQjtFQUNqQixZQUFRO0VBQ1Isa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxrQkFBZTtFQUNmLHVCQUFlO0VBQ2Ysd0JBQW9CO0VBQ3BCLHlCQUFhO0VBQ2IscUJBQWdCO0VBQ2hCLGtCQUFhLEVBQUE7RUFOakI7SUFRUSxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVcsRUFBQTtFQWJuQjtNQWVZLGNBQWM7TUFFZCxxQkFBcUI7TUFDckIsZUFBZTtNQUNmLGtCQUFrQixFQUFBO0VBbkI5QjtNQXNCWSxlQUFlO01BQ2YsV0FBVztNQUNYLDhCQUE4QixFQUFBO0VBSzFDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtFQUduQjtFQUNJLHFCQUFhO0VBQ2Isa0JBQVcsRUFBQTtFQUZmO0lBTVksV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsOEJBQThCLEVBQUE7RUFUMUM7SUFjUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLG1CQUFtQixFQUFBO0VBdEIzQjtNQXlCWSxZQUFZLEVBQUE7RUF6QnhCO01BNEJZLG1CQUFtQixFQUFBO0VBNUIvQjtNQWdDWSxtQkFBbUIsRUFBQTtFQWhDL0I7TUFvQ1ksWUFBWSxFQUFBO0VBS3hCO0VBRVEscUJBQWE7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFnQjtFQUNoQixrQkFBYztFQUNkLGdCQUFjO0VBQ2QsbUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0VBUnJCO0lBVVksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7RUFiL0I7TUFlZ0IsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsVUFBVSxFQUFBO0VBbEIxQjtRQW9Cb0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQixFQUFBO0VBM0JyQztVQTZCd0IsK0JBQStCO1VBQy9CLFNBQVM7VUFDVCxlQUFlO1VBQ2YsV0FBVyxFQUFBO0VBaENuQztRQW9Db0IsVUFBVSxFQUFBO0VBcEM5QjtVQXNDd0IsU0FBUztVQUNULGVBQWU7VUFDZixXQUFXLEVBQUE7RUF4Q25DO1VBMkN3Qiw4QkFBOEI7VUFDOUIsbUJBQW1CO1VBQ25CLGdCQUFnQjtVQUNoQix1QkFBdUIsRUFBQTtFQTlDL0M7VUFpRHdCLCtCQUErQjtVQUMvQixtQkFBbUI7VUFDbkIsZ0JBQWdCO1VBQ2hCLHVCQUF1QixFQUFBO0VBcEQvQztNQTBEZ0IsWUFBWTtNQUNaLFdBQVc7TUFDWCxXQUFXLEVBQUE7RUE1RDNCO0VBb0VRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVcsRUFBQTtFQTFFbkI7RUErRVksMkJBQTJCLEVBQUE7RUEvRXZDO0VBcUZZLDJCQUEyQixFQUFBO0VBckZ2QztFQTZGZ0IsYUFBYSxFQUFBO0VBN0Y3QjtFQWdHZ0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsVUFBVSxFQUFBO0VBbkcxQjtJQXdHb0IscUJBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGtCQUFnQjtJQUNoQixnQkFBYztJQUNkLGdCQUFjO0lBQ2QsbUJBQWlCO0lBQ2pCLHdCQUFzQjtJQUN0QixzQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUE7RUFwSHZDO01Bc0h3QixTQUFTO01BQ1QsV0FBVztNQUNYLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7RUExSDNDO01BOEh3QixZQUFZO01BQ1osV0FBVztNQUNYLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixpQkFBaUIsRUFBQTtFQXZJekM7TUEySXdCLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTtFQTlJbEM7UUFpSjRCLCtCQUErQixFQUFBO0VBakozRDtFQTBKZ0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVLEVBQUE7RUFNMUI7RUFDSSw2QkFBYSxFQUFBO0VBR2pCO0VBRVEsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWdCLEVBQUE7RUFUeEI7SUFZWSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxlQUFlLEVBQUE7RUFmM0I7RUFvQlEsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQXpCM0I7SUE0QlksWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBYTtJQUNiLCtCQUF1QjtJQUN2QixhQUFRLEVBQUE7RUFoQ3BCO0lBb0NZLG1CQUFtQixFQUFBO0VBcEMvQjtNQXVDZ0Isd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2QixpQkFBaUIsRUFBQTtFQXhDakM7UUEyQ29CLFdBQVc7UUFDWCxlQUFlO1FBQ2YsaUNBQWlDO1FBQ2pDLGtCQUFrQixFQUFBO0VBOUN0QztNQW9EZ0IseUJBQWE7TUFDYiwyQkFBZSxFQUFBO0VBckQvQjtRQXdEb0Isd0JBQWdCO1FBQ2hCLGFBQVE7UUFDUixrQkFBa0IsRUFBQTtFQTFEdEM7UUE4RG9CLDZCQUE2QixFQUFBO0VBOURqRDtRQWtFb0IsYUFBUTtRQUNSLGVBQWU7UUFDZix3QkFBd0IsRUFBQTtFQXBFNUM7SUEwRWdCLGtCQUFrQixFQUFBO0VBMUVsQztJQThFWSxlQUFlLEVBQUE7RUFLM0I7RUFFUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZ0IsRUFBQTtFQVR4QjtJQVlZLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGVBQWUsRUFBQTtFQWYzQjtFQW9CUSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGFBQWE7RUFDakIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQXpCdkI7SUE2QmdCLGVBQWU7SUFDZiwrQkFBK0IsRUFBQTtFQTlCL0M7SUFtQ1ksVUFBVTtJQUNWLGNBQWMsRUFBQTtFQXBDMUI7TUF1Q2dCLHVCQUF1QixFQUFBO0VBdkN2QztRQTBDb0IseUJBQWE7UUFDYiwyQkFBZTtRQUNmLGtCQUFhLEVBQUE7RUE1Q2pDO1VBK0N3QixXQUFXO1VBQ1gsZUFBZTtVQUNmLDhCQUE4QixFQUFBO0VBakR0RDtVQXFEd0Isd0JBQWdCO1VBQ2hCLGFBQVE7VUFDUixrQkFBa0IsRUFBQTtFQXZEMUM7VUEyRHdCLDZCQUE2QixFQUFBO0VBM0RyRDtRQWdFb0IsYUFBYTtRQUNiLDZCQUE2QjtRQUM3QixtQkFBbUIsRUFBQTtFQWxFdkM7VUFvRXdCLFlBQVk7VUFDWixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxhQUFhO1VBQ2IsdUJBQXVCO1VBQ3ZCLG1CQUFtQjtVQUNuQix1QkFBdUI7VUFDdkIsZUFBZSxFQUFBO0VBNUV2QztVQStFd0IsbUJBQW1CLEVBQUE7RUEvRTNDO1FBb0ZvQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsZ0JBQWdCLEVBQUE7RUF4RnBDO1VBMEZ3QixTQUFTO1VBQ1QsZUFBZTtVQUNmLCtCQUErQixFQUFBO0VBNUZ2RDtNQWtHZ0IsZ0JBQWdCLEVBQUE7RUFsR2hDO01Bc0dnQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLDBCQUFrQjtNQUNsQiwwQkFBcUI7TUFDckIsaUJBQVk7TUFDWixzQkFBaUI7TUFDakIsZ0NBQXdCLEVBQUE7RUE1R3hDO01BZ0hnQiw4Q0FBOEM7TUFDOUMsV0FBVztNQUNYLGVBQWU7TUFDZixnQ0FBZ0MsRUFBQTtFQW5IaEQ7SUF3SFksY0FBYztJQUNkLHFCQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNEJBQXVCLEVBQUE7RUFTbkM7RUFFUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXLEVBQUE7RUFSbkI7RUFXUSxxQkFBYTtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsZ0JBQWM7RUFDZCxtQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7RUFqQnJCO0lBbUJZLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFBO0VBdEIvQjtNQXdCZ0IsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsVUFBVSxFQUFBO0VBM0IxQjtRQTZCb0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQixFQUFBO0VBcENyQztVQXNDd0IsK0JBQStCO1VBQy9CLFNBQVM7VUFDVCxlQUFlO1VBQ2YsV0FBVyxFQUFBO0VBekNuQztRQTZDb0IsVUFBVSxFQUFBO0VBN0M5QjtVQStDd0IsU0FBUztVQUNULGVBQWU7VUFDZixXQUFXLEVBQUE7RUFqRG5DO1VBb0R3Qiw4QkFBOEI7VUFDOUIsbUJBQW1CO1VBQ25CLGdCQUFnQjtVQUNoQix1QkFBdUIsRUFBQTtFQXZEL0M7VUEwRHdCLCtCQUErQjtVQUMvQixtQkFBbUI7VUFDbkIsZ0JBQWdCO1VBQ2hCLHVCQUF1QixFQUFBO0VBN0QvQztNQW1FZ0IsWUFBWTtNQUNaLFdBQVc7TUFDWCxXQUFXLEVBQUE7RUFyRTNCO0VBOEVZLDJCQUEyQixFQUFBO0VBOUV2QztFQW9GWSwyQkFBMkIsRUFBQTtFQXBGdkM7RUE4RmdCLGFBQWEsRUFBQTtFQTlGN0I7RUFpR2dCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFVBQVUsRUFBQTtFQXBHMUI7SUF5R29CLHFCQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixrQkFBZ0I7SUFDaEIsZ0JBQWM7SUFDZCxnQkFBYztJQUNkLG1CQUFpQjtJQUNqQix3QkFBc0I7SUFDdEIsc0JBQW9CO0lBQ3BCLG1CQUFtQixFQUFBO0VBckh2QztNQXVId0IsU0FBUztNQUNULFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLG1CQUFtQixFQUFBO0VBM0gzQztNQStId0IsWUFBWTtNQUNaLFdBQVc7TUFDWCxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsaUJBQWlCLEVBQUE7RUF4SXpDO01BNEl3QixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixVQUFVLEVBQUE7RUEvSWxDO1FBa0o0QiwrQkFBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLUxvZ297XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICBkaXZ7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBpb24tYXZhdGFye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogIzAwYjlmZjtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcbiAgICB9XG4gICAgaW9uLXRvb2xiYXI6bnRoLWNoaWxkKDEpe1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIH1cbiAgICBpb24tdG9vbGJhcjpudGgtY2hpbGQoMil7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICB9XG4gICAgaHJ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTM1NmE7XG4gICAgfVxufVxuXG4uc2VhcmNoQnRue1xuICAgIC0tYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDsgXG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDsgIFxuICAgIC0tYmFja2dyb3VuZDogIzAwYWVlZjtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zZWFyY2hJbnB1dHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLWNvbG9yOiM2NjY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VhcmNoSXRlbXtcbiAgICAtLWJvcmRlci13aWR0aDoycHg7XG4gICAgLS1ib3JkZXItY29sb3I6ICMwMGI5ZmY7IFxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDVweDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcbiAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLS1taW4taGVpZ2h0OiAyOHB4O1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgbWFyZ2luOiAycHggMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgY29sb3I6ICMwMGI5ZmY7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWFyY2hEaXZ7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogIzI3NGI5ZTtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBkaXZ7XG4gICAgICAgIGlvbi10ZXh0e1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb290b3JfaWNvbl9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgICBpbWc6Zmlyc3QtY2hpbGQsIGltZzpsYXN0LWNoaWxke1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzVweDsgXG4gICAgICAgIH1cblxuICAgICAgICBpbWc6bnRoLWNoaWxkKDIpLCBpbWc6bnRoLWNoaWxkKDQpe1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZzpmaXJzdC1jaGlsZCwgaW1nOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLk1haW5Db250ZW50e1xuICAgIC5zZWNEcm9wRG93bntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLnNlY19EZXRhaWx7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAubWVkSXRlbVNwYW57XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5TZWNfRGV0YWlsc19TdWJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmFycm93X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAubWRTbGlkZXN7XG4gICAgICAgIGlvbi1zbGlkZXtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM2MHB4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pb3NTbGlkZXN7XG4gICAgICAgIGlvbi1zbGlkZXtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM0NXB4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1zbGlkZXN7XG5cbiAgICAgICAgLkNvbXBTbGlkZXtcbiAgICAgICAgICAgIGlvbi1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxpc3R7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcblxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLmNvbXBJdGVte1xuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNzRiOWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcDpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2lyY2xlU2xpZGV7XG4gICAgICAgICAgICAuc3RhcnQtcmluZyB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogIzBlODJlNTtcbiAgICAgICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3RpdmV7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5SZXBvcnRDb250ZW50e1xuICAgIC5hcnJvd19kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1hcmdpbi10b3AgOiA1cHg7XG5cbiAgICAgICAgLlN1Yl90aXRsZXtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlcG9ydERpdntcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjc1cHgpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDBiOWZmO1xuICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1saXN0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI3NGI5ZTtcblxuICAgICAgICAgICAgaW9uLWxpc3QtaGVhZGVye1xuICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuXG4gICAgICAgICAgICAgICAgLmxpc3RfaGVhZGVye1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBTZW1pQm9sZCc7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgICAgICBpb24tcmFkaW97XG4gICAgICAgICAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogIzAwYjlmZjtcbiAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlvbi1yYWRpbzo6cGFydChjb250YWluZXIpe1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wZGZCdG57XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbmRCdG57XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMiU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5BbGVydENvbnRlbnR7XG4gICAgLmFycm93X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWFyZ2luLXRvcCA6IDVweDtcblxuICAgICAgICAuU3ViX3RpdGxle1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWxlcnREaXZ7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI3NXB4KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi10ZXh0e1xuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmFkaW9CdG5EaXZ7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG5cbiAgICAgICAgICAgIGlvbi1saXN0e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0tbWluLWhlaWdodDogMzBweDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW9uLXJhZGlve1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiAjMDBiOWZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpb24tcmFkaW86OnBhcnQoY29udGFpbmVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLndlZWtseV9EaXZ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tb250aGx5X0RpdntcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWxpc3Q6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wZXJfcmFuZ2V7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgLS1rbm9iLWJhY2tncm91bmQ6ICMwMGI5ZmY7XG4gICAgICAgICAgICAgICAgLS1rbm9iLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgLS1rbm9iLXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgLS1iYXItYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzAwYjlmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBlcl9yYW5nZTo6cGFydChwaW4pe1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIFJlZ3VsYXInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xuXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cbn1cblxuLmF2b2lkX2xvb3Nlcl9jb250ZW50e1xuICAgIC5hcnJvd19kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5zZWNEcm9wRG93bntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBiOWZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLnNlY19EZXRhaWx7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAubWVkSXRlbVNwYW57XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5TZWNfRGV0YWlsc19TdWJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLm1kU2xpZGVze1xuICAgICAgICBpb24tc2xpZGV7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNjBweCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW9zU2xpZGVze1xuICAgICAgICBpb24tc2xpZGV7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzNDVweCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgaW9uLXNsaWRlc3tcblxuICAgICAgICAuQ29tcFNsaWRle1xuICAgICAgICAgICAgaW9uLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tbGlzdHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAuY29tcEl0ZW17XG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwYjlmZjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzI3NGI5ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/dataHandler/data-handler.service */
    "./src/app/services/dataHandler/data-handler.service.ts");
    /* harmony import */


    var _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/shareddata/data.service */
    "./src/app/services/shareddata/data.service.ts");
    /* harmony import */


    var _Components_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../Components/mobile-search/mobile-search.component */
    "./src/app/Components/mobile-search/mobile-search.component.ts");
    /* harmony import */


    var _Components_sector_popover_sector_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../Components/sector-popover/sector-popover.component */
    "./src/app/Components/sector-popover/sector-popover.component.ts");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _Components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../Components/line-chart/line-chart.component */
    "./src/app/Components/line-chart/line-chart.component.ts");
    /* harmony import */


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/ngx/index.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(screenOrientation, toastCtrl, popoverCtrl, modalCtrl, dataService, dataHandler, menuCtrl, platform, alertController, authService, storage, pickerCtrl) {
        var _this = this;

        _classCallCheck(this, HomePage);

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
        this.CurrSliderData = {
          'a': 0,
          'aAngle': 360,
          'e': 0,
          'eAngle': 360
        };
        this.slideOpts = {
          initialSlide: this.CurrSlide,
          slidesPerView: 1,
          zoom: false
        };
        this.monthlySlideOpts = {
          slidesPerView: 7
        };
        this.sectorOrder = [{
          name: 'Index',
          order: 1
        }, {
          name: 'Sector',
          order: 2
        }, {
          name: 'Industry Group',
          order: 3
        }, {
          name: 'Industry',
          order: 4
        }, {
          name: 'Sub Industry',
          order: 5
        }];
        this.radius = 170;
        this.currentUser = this.authService.currentUserValue();
        var backpressOncetoExit = false;
        this._backSub = this.platform.backButton.subscribeWithPriority(0, function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.AvoidLosersec && !this.AlertSec && !this.ReportSec)) {
                      _context.next = 4;
                      break;
                    }

                    this.onAvoidLoserClick();
                    _context.next = 22;
                    break;

                  case 4:
                    if (!(!this.AvoidLosersec && this.AlertSec && !this.ReportSec)) {
                      _context.next = 8;
                      break;
                    }

                    this.onAlertClick();
                    _context.next = 22;
                    break;

                  case 8:
                    if (!(!this.AvoidLosersec && !this.AlertSec && this.ReportSec)) {
                      _context.next = 12;
                      break;
                    }

                    this.onReportClick();
                    _context.next = 22;
                    break;

                  case 12:
                    if (!backpressOncetoExit) {
                      _context.next = 16;
                      break;
                    }

                    navigator['app'].exitApp();
                    _context.next = 22;
                    break;

                  case 16:
                    backpressOncetoExit = true;
                    setTimeout(function () {
                      backpressOncetoExit = false;
                    }, 5000);
                    _context.next = 20;
                    return this.toastCtrl.create({
                      message: 'Press back again to exit NewAgeAlpha App',
                      duration: 1000,
                      cssClass: 'center'
                    });

                  case 20:
                    toast = _context.sent;
                    toast.present();

                  case 22:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        });
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

          if (this.platform.is('android')) {
            this.plt = 'android';
          } else if (this.platform.is('ios')) {
            this.plt = 'ios';
          } else {
            this.plt = 'android';
          }

          if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
          } else {
            this.mobile = true;
          }

          this.menuCtrl.enable(true);
          this._dataSub = this.dataService.dbScore.subscribe(function (d) {
            if (d.length != 0) {
              _this2.data = d;
            } else {
              _this2.dataService.getDbGICSData();

              _this2.dataService.getGlobalData();
            }
          });
          this._selCompsub = this.dataService.mobSelComp.subscribe(function (d) {
            if (d) {
              if (_this2.selComp == undefined) {
                _this2.selComp = d;

                _this2.indexClassifier().then(function (res) {
                  _this2.sectorClassifier().then(function (res) {
                    _this2.createIndexData().then(function (res) {
                      setTimeout(function () {
                        _this2.loadData();
                      }, 500);
                    });
                  });
                });
              } else {
                _this2.selComp = d;
                _this2.AL_mainCircle = false;
                _this2.AL_rangeCircle = false;
                _this2.AvoidLosersec = false;
                _this2.avoidSlides = false;
                _this2.firstLoad = true;
                _this2.alertUpdateBtn = false;

                if (_this2.AlertSec) {
                  _this2.AlertSec = false;
                }

                if (_this2.ReportSec) {
                  _this2.ReportSec = false;
                }

                _this2.CurrSliderData = {
                  'a': 0,
                  'aAngle': 360,
                  'e': 0,
                  'eAngle': 360
                };

                _this2.indexClassifier();

                _this2.sectorClassifier();

                _this2.createIndexData();

                _this2.scrollto();

                setTimeout(function () {
                  _this2.loadData();
                }, 500);
              }
            }
          });
          this._dbGICSSub = this.dataService.dbGICS.subscribe(function (d) {
            if (d.length != 0) {
              _this2.dbGICS = d;
            }
          });
          this._authstateSub = this.authService.authenticationState.subscribe(function (res) {
            if (res == false) {
              _this2.AL_mainCircle = false;
              _this2.AL_rangeCircle = false;
              _this2.AvoidLosersec = false;
              _this2.avoidSlides = false;
              _this2.firstLoad = true;
              _this2.alertUpdateBtn = false;
              _this2.AlertSec = false;
              _this2.ReportSec = false;
              _this2.selComp = null;

              _this2.dataService.mobSelComp.next(null);

              _this2.dataService.dbScore.next('');

              _this2.dataService.dbGICS.next('');

              _this2.dataService._dbGICS = '';
              _this2.dataService.dbScoretemp = '';
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.screenOrientation.unlock();

          this._selCompsub.unsubscribe();

          this._dataSub.unsubscribe();

          this._dbGICSSub.unsubscribe();

          this._authstateSub.unsubscribe();

          this._backSub.unsubscribe();
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.menuCtrl.open();
        }
      }, {
        key: "openSearch",
        value: function openSearch() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _Components_mobile_search_mobile_search_component__WEBPACK_IMPORTED_MODULE_8__["MobileSearchComponent"],
                      cssClass: 'searchModel'
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "sectorClassifier",
        value: function sectorClassifier() {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            _this3.sectorList = [];
            var selCompInd = _this3.selComp.industry;

            _this3.sectorOrder.forEach(function (i, ind) {
              var temp = {
                secTitle: i.name,
                secName: _this3.getSectorname(i.order, selCompInd),
                secCount: _this3.getSecCount(i.order, selCompInd),
                secMed: _this3.getSecMed(i.order, selCompInd)
              };

              _this3.sectorList.push(temp);

              if (ind == _this3.sectorOrder.length - 1) {
                resolve();
              }
            });

            _this3.selSec = _this3.sectorList[1];
          });
        }
      }, {
        key: "indexClassifier",
        value: function indexClassifier() {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            _this4.indexData = _this4.data.filter(function (i) {
              return i.indexName == _this4.selComp.indexName;
            });
            resolve();
          });
        }
      }, {
        key: "getSectorname",
        value: function getSectorname(lev, ind) {
          if (lev == 1) {
            return this.selComp.indexName;
          } else if (lev == 2) {
            var tempind = ind.slice(0, 2);
            var indname = this.dbGICS.filter(function (i) {
              return i.code == tempind;
            })[0];
            return indname.name;
          } else if (lev == 3) {
            var tempind = ind.slice(0, 4);
            var indname = this.dbGICS.filter(function (i) {
              return i.code == tempind;
            })[0];
            return indname.name;
          } else if (lev == 4) {
            var tempind = ind.slice(0, 6);
            var indname = this.dbGICS.filter(function (i) {
              return i.code == tempind;
            })[0];
            return indname.name;
          } else if (lev == 5) {
            var tempind = ind.slice(0, 8);
            var indname = this.dbGICS.filter(function (i) {
              return i.code == tempind;
            })[0];
            return indname.name;
          }
        }
      }, {
        key: "getSecCount",
        value: function getSecCount(lev, ind) {
          if (lev == 1) {
            return this.indexData.length;
          } else if (lev == 2) {
            var tempind = ind.slice(0, 2);
            var temp = this.indexData.filter(function (i) {
              return i.industry.slice(0, 2) == tempind;
            });
            return temp.length;
          } else if (lev == 3) {
            var tempind = ind.slice(0, 4);
            var temp = this.indexData.filter(function (i) {
              return i.industry.slice(0, 4) == tempind;
            });
            return temp.length;
          } else if (lev == 4) {
            var tempind = ind.slice(0, 6);
            var temp = this.indexData.filter(function (i) {
              return i.industry.slice(0, 6) == tempind;
            });
            return temp.length;
          } else if (lev == 5) {
            var tempind = ind.slice(0, 8);
            var temp = this.indexData.filter(function (i) {
              return i.industry.slice(0, 8) == tempind;
            });
            return temp.length;
          }
        }
      }, {
        key: "getSecMed",
        value: function getSecMed(lev, ind) {
          if (lev == 1) {
            return this.dataService.roundValue(this.dataService.getMed(this.indexData) * 100);
          } else if (lev == 2) {
            var tempind = ind.slice(0, 2);
            var temp = this.indexData.filter(function (i) {
              return i.industry.slice(0, 2) == tempind;
            });
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
          } else if (lev == 3) {
            var tempind = ind.slice(0, 4);
            var temp = this.indexData.filter(function (i) {
              return i.industry.slice(0, 4) == tempind;
            });
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
          } else if (lev == 4) {
            var tempind = ind.slice(0, 6);
            var temp = this.indexData.filter(function (i) {
              return i.industry.slice(0, 6) == tempind;
            });
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
          } else if (lev == 5) {
            var tempind = ind.slice(0, 8);
            var temp = this.indexData.filter(function (i) {
              return i.industry.slice(0, 8) == tempind;
            });
            return this.dataService.roundValue(this.dataService.getMed(temp) * 100);
          }
        }
      }, {
        key: "onAvoidLoserClick",
        value: function onAvoidLoserClick() {
          var _this5 = this;

          if (this.AvoidLosersec) {
            this.AvoidLosersec = false;
            this.AL_mainCircle = false;
            this.AL_rangeCircle = false;
            this.firstLoad = true;
            this.CurrSliderData = {
              'a': 0,
              'aAngle': 360,
              'e': 0,
              'eAngle': 360
            };

            if (!this.ReportSec && !this.AlertSec) {
              setTimeout(function () {
                _this5.loadData();
              }, 50);
              this.avoidSlides = false;
            }
          } else {
            this.AvoidLosersec = true;
            this.ReportSec = false;
            this.AlertSec = false;
            this.weeklyDiv = false;
            this.monthlyBtn = false;
            this.percentageRage = false;
            setTimeout(function () {
              _this5.loadData();
            }, 50);
          }
        }
      }, {
        key: "onAlertClick",
        value: function onAlertClick() {
          var _this6 = this;

          if (this.AlertSec) {
            this.AlertSec = false;
            this.weeklyDiv = false;
            this.monthlyBtn = false;
            this.percentageRage = false;

            if (!this.AvoidLosersec && !this.ReportSec) {
              setTimeout(function () {
                _this6.loadData();
              }, 50);
            }
          } else {
            if (document.getElementById('Circleloader') != null) document.getElementById('Circleloader').style.display = 'none';
            this.showLoader = true;
            this.firstLoad = true;
            this.AvoidLosersec = false;
            this.AL_mainCircle = false;
            this.AL_rangeCircle = false;
            this.avoidSlides = false;
            this.CurrSliderData = {
              'a': 0,
              'aAngle': 360,
              'e': 0,
              'eAngle': 360
            };
            var userInfo = {
              userId: this.currentUser.userId,
              stockKey: this.selComp.stockKey
            };
            this.dataHandler.getAlert(userInfo).subscribe(function (d) {
              if (d.length != 0) {
                _this6.alertSubmitBtn = false;
                _this6.alertUpdateBtn = false;

                if (d[0].daily == 'Y') {
                  _this6.selctedradioopts = 'daily';
                } else if (d[0].monthly == 'Y') {
                  _this6.selctedradioopts = 'monthly';
                  _this6.monthlyDate = d[0].monthDt;
                  _this6.monthlyBtn = true;
                } else if (d[0].weekly == 'Y') {
                  _this6.selctedradioopts = 'weekly';
                  _this6.selWeeklyday = d[0].weekDay;
                  _this6.weeklyDiv = true;
                }

                if (d[0].scoreChange == 'Y') {
                  _this6.perRadioGrp = 'percentage';
                  _this6.rangePer = d[0].scorePercent;
                  _this6.percentageRage = true;
                }
              } else {
                _this6.alertSubmitBtn = true;
                _this6.selctedradioopts = 'daily';
                _this6.monthlyBtn = false;
                _this6.weeklyDiv = false;
                _this6.perRadioGrp = '';
                _this6.percentageRage = false;
                _this6.rangePer = 1;
                _this6.monthlyDate = 1;
              }

              _this6.showLoader = false;
              _this6.AlertSec = true;
              _this6.AvoidLosersec = false;
              _this6.ReportSec = false;
            });
          }
        }
      }, {
        key: "onRemoveAlert",
        value: function onRemoveAlert(evt) {
          var _this7 = this;

          var userInfo = {
            userId: this.currentUser.userId,
            stockKey: this.selComp.stockKey
          };
          this.dataHandler.deleteAlert(userInfo).subscribe(function (d) {
            if (d[0] == "Success") {
              _this7.alertSubmitBtn = true;
              _this7.selctedradioopts = 'daily';
              _this7.monthlyBtn = false;
              _this7.weeklyDiv = false;
              _this7.perRadioGrp = '';
              _this7.percentageRage = false;
              _this7.rangePer = 1;
              _this7.monthlyDate = 1;

              _this7.presentToast('Alert Removed successfully');
            }
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      cssClass: 'center'
                    });

                  case 2:
                    toast = _context3.sent;
                    _context3.next = 5;
                    return toast.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "setRangePer",
        value: function setRangePer(e) {
          this.rangePer = e.detail.value;

          if (!this.alertSubmitBtn) {
            this.alertUpdateBtn = true;
          } else {
            this.alertUpdateBtn = false;
          }
        }
      }, {
        key: "onAlertSubmit",
        value: function onAlertSubmit(e) {
          var _this8 = this;

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
          this.dataHandler.setAlert(alerts).subscribe(function (d) {
            if (d[0] == 'Success') {
              _this8.presentToast('Alert Submitted Sucessfully');

              _this8.alertSubmitBtn = true;
              _this8.selctedradioopts = 'daily';
              _this8.monthlyBtn = false;
              _this8.weeklyDiv = false;
              _this8.perRadioGrp = '';
              _this8.percentageRage = false;

              _this8.onAlertClick();
            }
          });
        }
      }, {
        key: "onReportClick",
        value: function onReportClick() {
          var _this9 = this;

          if (this.ReportSec) {
            this.ReportSec = false;

            if (!this.AvoidLosersec && !this.AlertSec) {
              setTimeout(function () {
                _this9.loadData();
              }, 50);
            }
          } else {
            this.ReportSec = true;
            this.AvoidLosersec = false;
            this.AlertSec = false;
            this.firstLoad = true;
            this.weeklyDiv = false;
            this.monthlyBtn = false;
            this.percentageRage = false;
          }
        }
      }, {
        key: "getColor",
        value: function getColor(med) {
          var gc100 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([0, 25, 50, 75, 100]).range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
          return gc100(med);
        }
      }, {
        key: "openSecPopOver",
        value: function openSecPopOver(evt) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this10 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.popoverCtrl.create({
                      component: _Components_sector_popover_sector_popover_component__WEBPACK_IMPORTED_MODULE_9__["SectorPopoverComponent"],
                      translucent: true,
                      cssClass: 'sec-popover',
                      componentProps: {
                        sectorList: this.sectorList,
                        selComp: this.selComp
                      }
                    });

                  case 2:
                    popover = _context4.sent;
                    popover.onDidDismiss().then(function (d) {
                      if (d.data != undefined) {
                        _this10.selSec = d.data;

                        _this10.createIndexData();

                        if (!_this10.AvoidLosersec) {
                          _this10.showLoader = true;
                          setTimeout(function () {
                            _this10.scrollto();
                          }, 50);
                          setTimeout(function () {
                            _this10.CreateComps();

                            _this10.fillCompetives();

                            _this10.CreateCompCircle();

                            setTimeout(function () {
                              _this10.creatClockSlider();

                              _this10.setClock(_this10.selComp.isin, _this10.selIndexData.indexOf(_this10.selComp) * 360 / _this10.selIndexData.length - 90, _this10.selComp.ticker);

                              _this10.showLoader = false;
                            }, 100);
                          }, 100);
                        } else if (_this10.AvoidLosersec && !_this10.AL_mainCircle && _this10.AL_rangeCircle) {
                          _this10.showLoader = true;
                          _this10.CurrSliderData = {
                            'a': 0,
                            'aAngle': 360,
                            'e': 0,
                            'eAngle': 360
                          };
                          setTimeout(function () {
                            _this10.AL_List = _this10.selIndexData;

                            _this10.OnAL_listChange(_this10.CurrSliderData);

                            _this10.loadData();
                          }, 100);
                        } else if (_this10.AvoidLosersec && _this10.AL_mainCircle && !_this10.AL_rangeCircle) {
                          _this10.showLoader = true;
                          _this10.CurrSliderData = {
                            'a': 0,
                            'aAngle': 360,
                            'e': 0,
                            'eAngle': 360
                          };
                          setTimeout(function () {
                            _this10.AL_List = _this10.selIndexData;

                            _this10.OnAL_listChange(_this10.CurrSliderData);

                            _this10.loadData();
                          }, 100);
                        }
                      }
                    });
                    _context4.next = 6;
                    return popover.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "createIndexData",
        value: function createIndexData() {
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            if (_this11.selSec.length != 0) {
              var selSecLvl = _this11.sectorOrder.filter(function (i) {
                return i.name == _this11.selSec.secTitle;
              })[0].order;

              if (selSecLvl == 1) {
                _this11.selIndexData = _this11.indexData;
              } else if (selSecLvl == 2) {
                _this11.selIndexData = _this11.indexData.filter(function (i) {
                  return i.industry.slice(0, 2) == _this11.selComp.industry.slice(0, 2);
                });
              } else if (selSecLvl == 3) {
                _this11.selIndexData = _this11.indexData.filter(function (i) {
                  return i.industry.slice(0, 4) == _this11.selComp.industry.slice(0, 4);
                });
              } else if (selSecLvl == 4) {
                _this11.selIndexData = _this11.indexData.filter(function (i) {
                  return i.industry.slice(0, 6) == _this11.selComp.industry.slice(0, 6);
                });
              } else if (selSecLvl == 5) {
                _this11.selIndexData = _this11.indexData.filter(function (i) {
                  return i.industry == _this11.selComp.industry;
                });
              }
            }

            resolve();
          });
        }
      }, {
        key: "onArrowClick",
        value: function onArrowClick(d) {
          if (d == 0 && this.CurrSlide != 0) {
            this.scrollto();
          }

          this.CurrSlide = d;
          this.slides = document.getElementById('MainSlider');
          this.slides.slideTo(d);
        }
      }, {
        key: "onALArrowClick",
        value: function onALArrowClick(e) {
          var _this12 = this;

          this.AL_slides = document.getElementById('AL_Slider');

          if (e == 'prev') {
            this.AL_slides.slidePrev();
          } else if (e == 'frwd') {
            this.AL_slides.slideNext();
          }

          this.AL_slides.getActiveIndex().then(function (d) {
            _this12.AL_CurrSlide;
          });
        }
      }, {
        key: "onSlideChange",
        value: function onSlideChange(evt) {
          var _this13 = this;

          this.slides = document.getElementById('MainSlider');
          this.slides.getActiveIndex().then(function (d) {
            _this13.CurrSlide = d;
            if (_this13.CurrSlide == 0) _this13.scrollto();
          });
        }
      }, {
        key: "onALSlideChange",
        value: function onALSlideChange(evt) {
          var _this14 = this;

          this.AL_CurrSlide = evt.target.swiper.activeIndex;
          var prev_ind = evt.target.swiper.previousIndex;

          if (this.AL_CurrSlide == 1) {
            this.AL_mainCircle = true;
            this.AL_rangeCircle = false;

            if (prev_ind != 0) {
              setTimeout(function () {
                _this14.showLoader = true;

                _this14.loadData();
              }, 100);
            } else if (this.firstLoad) {
              setTimeout(function () {
                if (_this14.AL_CurrSlide == 1) {
                  _this14.showLoader = true;
                  _this14.firstLoad = false;

                  _this14.loadData();
                }
              }, 1000);
            }
          } else if (this.AL_CurrSlide == 2) {
            this.showLoader = true;
            this.AL_mainCircle = false;
            this.AL_rangeCircle = true;
            setTimeout(function () {
              _this14.loadData();

              setTimeout(function () {
                var temp = {
                  0: 0,
                  1: _this14.CurrSliderData.e
                };

                _this14.SliderOnChange(temp);
              }, 500);
            }, 50);
          } else if (this.AL_CurrSlide == 0) {
            if (this.AL_FilteredList.length != 0 && this.AL_FilteredList.filter(function (data) {
              return data.isin === _this14.selComp.isin;
            }).length != 0) this.scrollto();else this.scrollToListTop();
          }
        }
      }, {
        key: "roundMed",
        value: function roundMed(score) {
          return this.dataService.roundValue(score);
        }
      }, {
        key: "onCompanyClick",
        value: function onCompanyClick(comp) {
          var _this15 = this;

          this.selComp = comp;
          this.indexClassifier();
          this.sectorClassifier();
          this.createIndexData();
          setTimeout(function () {
            _this15.CreateComps();

            _this15.createCompetitive(_this15.chartMain);

            _this15.fillCompetives();

            _this15.CreateCompCircle();

            setTimeout(function () {
              _this15.creatClockSlider();

              _this15.setClock(_this15.selComp.isin, _this15.selIndexData.indexOf(_this15.selComp) * 360 / _this15.selIndexData.length - 90, _this15.selComp.ticker);
            }, 100);
          }, 100);
          setTimeout(function () {
            _this15.slides.slideTo(1);
          }, 50);
        }
      }, {
        key: "scrollto",
        value: function scrollto() {
          var index = this.selIndexData.indexOf(this.selComp);
          var list = document.getElementById('CompList');
          list.scrollTop = 55 * (index - 3);
        }
      }, {
        key: "scrollToListTop",
        value: function scrollToListTop() {
          var list = document.getElementById('CompList');
          list.scrollTop = 0;
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this16 = this;

          if (!this.AvoidLosersec) document.getElementById("Circleloader").style.display = "flex";
          this.gC360 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([0, 90, 180, 270, 360]).range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
          this.gC100 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([0, 25, 50, 75, 100]).range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
          this.gchart = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gchart");
          this.chartMain = this.createMainChart(this.gchart);
          setTimeout(function () {
            if (!_this16.AvoidLosersec) {
              var slideHeight = document.getElementsByClassName('circleSlide')[0].clientHeight;
              var slidewidth = document.getElementsByClassName('circleSlide')[0].clientWidth;
              d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#svgHContainer1').attr('viewBox', function () {
                return '0 0 ' + slidewidth * 2 + ' ' + slideHeight;
              });

              _this16.gchart.attr('transform', function () {
                return 'translate(' + slidewidth + ',' + slideHeight / 2 + ')';
              });
            } else if (_this16.AvoidLosersec && _this16.AL_mainCircle && !_this16.AL_rangeCircle) {
              var _slideHeight = document.getElementsByClassName('CircleSlider')[0].clientHeight;
              var _slidewidth = document.getElementsByClassName('CircleSlider')[0].clientWidth;
              d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#svgHContainer1').attr('viewBox', function () {
                return '0 0 ' + _slidewidth * 2 + ' ' + _slideHeight;
              });

              _this16.gchart.attr('transform', function () {
                return 'translate(' + _slidewidth + ',' + _slideHeight / 2 + ')';
              });
            }
          }, 500);
        }
      }, {
        key: "createMainChart",
        value: function createMainChart(obj) {
          var that = this;
          var sradius = 100;
          obj.select("#crlChart").remove();
          var grp1 = obj.append("g").attr("id", "crlChart");
          grp1.append("circle").attr("id", "maincircle").attr("class", "start-ring").attr("fill", "#fff").attr('fill-opacity', function () {
            if (that.AvoidLosersec && !that.AL_mainCircle && !that.AL_rangeCircle || that.AvoidLosersec && that.AL_rangeCircle && !that.AL_mainCircle) {
              return '0';
            } else {
              return '1';
            }
          }).attr("r", 0).transition().on("end", function () {
            repeat();
            repeat1();
            that.createGradienArc(that.CurrSliderData.a, that.CurrSliderData.e);
          });

          function repeat() {
            obj.select(".ringAnim").attr('r', +sradius).style('opacity', 1).style('stroke-width', '5px').transition().attr('r', sradius * 1.3).style('stroke-width', '1px').style('opacity', 0).on("end", repeat);
          }

          ;

          function repeat1() {
            obj.select(".preloding").style('opacity', .5).transition().style('opacity', 1).transition().style('opacity', .5).on("end", repeat1);
          }

          return grp1;
        }
      }, {
        key: "createGradienArc",
        value: function createGradienArc(sMin, sMax) {
          var _this17 = this;

          var that = this;
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#maincircle").transition().attr('r', that.radius + 4).style('stroke-width', '0px').on("end", function () {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#maincircle").transition().style('stroke-width', '0px');
          });
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gradArc").remove();
          var gArc = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").append("g").attr("id", "gradArc");

          if (this.AvoidLosersec && !this.AL_rangeCircle && !this.AL_mainCircle || this.AvoidLosersec && this.AL_rangeCircle) {
            //mainCircle
            var arc = d3__WEBPACK_IMPORTED_MODULE_5__["arc"]().innerRadius(this.radius - 25).outerRadius(this.radius - 2);
          } else {
            //rangeCircle
            var arc = d3__WEBPACK_IMPORTED_MODULE_5__["arc"]().innerRadius(this.radius - 18).outerRadius(this.radius - 2);
          }

          var gC100 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([0, 25, 50, 75, 100]).range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
          var colors = [];
          var color1 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([0, 1, 2, 3, 4]).range([gC100(sMin), gC100((sMax - sMin) * 25 / 100 + sMin), gC100((sMax - sMin) * 50 / 100 + sMin), gC100((sMax - sMin) * 75 / 100 + sMin), gC100(sMax)]);
          var linearGradient = gArc.append("defs");
          var linearG1 = linearGradient.append("linearGradient");
          var gCArcColor = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([0, 90, 91, 180, 181, 270, 271, 360]).range([0, 100, 0, 100, 0, 100, 0, 100]);
          var MaxColor = "";
          var MaxScore = "";
          var Data1 = this.data.filter(function (x) {
            return x.cx >= -90 && x.cx <= 0;
          });
          linearG1.attr("id", "linearColors0").attr("x1", "0").attr("y1", "0").attr("x2", ".5").attr("y2", "1");

          if (this.data != null) {
            for (var i = 0; i < this.data.length; i++) {
              if (this.data[i].cx >= -90 && this.data[i].cx <= 0) {
                linearG1.append("stop").attr("offset", gCArcColor(this.data[i].cx + 90) + "%").attr("stop-color", gC100(this.data[i].score));
              }

              if (this.data[i].cx > 0) {
                linearG1.append("stop").attr("offset", "100%").attr("stop-color", gC100(this.data[i].score));
                break;
              }
            }

            MaxColor = gC100(Data1[Data1.length - 1].score);
            MaxScore = Data1[Data1.length - 1].cx;
          }

          var Data2 = this.data.filter(function (x) {
            return x.cx >= 1 && x.cx <= 90;
          });
          var linearG2 = linearGradient.append("linearGradient");
          linearG2.attr("id", "linearColors1").attr("x1", "0.8").attr("y1", "0").attr("x2", "0.5").attr("y2", "0.5");

          if (this.data != null) {
            for (var i = 0; i < this.data.length; i++) {
              if (this.data[i].cx >= 1 && this.data[i].cx <= 90) {
                linearG2.append("stop").attr("offset", gCArcColor(this.data[i].cx + 90) + "%").attr("stop-color", gC100(this.data[i].score));
              }

              if (this.data[i].cx > 90) {
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

          var Data3 = this.data.filter(function (x) {
            return x.cx >= 91 && x.cx <= 180;
          });
          var linearG3 = linearGradient.append("linearGradient");
          linearG3.attr("id", "linearColors2").attr("x1", "0.8").attr("y1", "0.8").attr("x2", "0").attr("y2", "0.3");

          if (this.data != null) {
            for (var i = 0; i < this.data.length; i++) {
              if (this.data[i].cx >= 91 && this.data[i].cx <= 180) {
                linearG3.append("stop").attr("offset", gCArcColor(this.data[i].cx + 90) + "%").attr("stop-color", gC100(this.data[i].score));
              }

              if (this.data[i].cx > 180) {
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

          var Data4 = this.data.filter(function (x) {
            return x.cx >= 181 && x.cx <= 270;
          });
          var linearG4 = linearGradient.append("linearGradient");
          linearG4.attr("id", "linearColors3").attr("x1", "0").attr("y1", "1").attr("x2", "1").attr("y2", "0");

          if (this.data != null) {
            for (var i = 0; i < this.data.length; i++) {
              if (this.data[i].cx >= 181 && this.data[i].cx <= 270) {
                linearG4.append("stop").attr("offset", gCArcColor(this.data[i].cx + 90) + "%").attr("stop-color", gC100(this.data[i].score));
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
            var start = i * 89 * (Math.PI / 180),
                end = (i * 89.9 + 90) * (Math.PI / 180);
            colors.push({
              startAngle: start,
              endAngle: end
            });
          }); // add arcs

          gArc.selectAll('.arc').data(colors).enter().append('path').attr('class', 'arc').attr('d', arc).attr('stroke', 'none').attr('fill', function (d, i) {
            return 'url(#linearColors' + i + ')';
          });
          this.showLoader = false;

          if (this.AvoidLosersec && !this.AL_rangeCircle && !this.AL_mainCircle || this.AvoidLosersec && this.AL_rangeCircle && !this.AL_mainCircle) {
            that.circleRange({
              "start": sMin,
              "end": sMax
            });
            var Fourline1 = gArc.append("line");
            Fourline1.attr("id", "lineT").attr("class", "lineMark").attr("x1", "0").attr("y1", "0").attr("x2", "0").attr("y2", "22").style('transform', 'translate(0px, -167px)').style('stroke', '#fff').style('stroke-width', '4px');

            if (this.AL_rangeCircle) {
              var Fourline3 = gArc.append("line");
              Fourline3.attr("id", "lineB").attr("class", "lineMark").attr("x1", "0").attr("y1", "0").attr("x2", "0").attr("y2", "22").style('transform', 'translate(0px, 145px)').style('stroke', '#fff').style('stroke-width', '4px');
            }
          } else {
            if (this.AvoidLosersec && !this.AL_rangeCircle && !this.AL_mainCircle || !this.AvoidLosersec) document.getElementById('Circleloader').style.display = "none";
            that.CreateComps().then(function (res) {
              that.createCompetitive(_this17.chartMain).then(function (res) {
                that.fillCompetives().then(function (res) {
                  if (!_this17.AvoidLosersec) {
                    that.CreateCompCircle().then(function (res) {
                      that.creatClockSlider().then(function (res) {
                        that.setClock(_this17.selComp.isin, _this17.selIndexData.indexOf(_this17.selComp) * 360 / _this17.selIndexData.length - 90, _this17.selComp.ticker);
                      });
                    });
                  } else if (that.AvoidLosersec && that.AL_mainCircle) {
                    that.createALinnerCircle().then(function (res) {
                      if (that.AL_FilteredList.filter(function (data) {
                        return data.isin === _this17.selComp.isin;
                      }).length != 0) {
                        that.creatClockSlider().then(function (res) {
                          that.setClock(_this17.selComp.isin, _this17.AL_List.indexOf(_this17.selComp) * 360 / _this17.AL_List.length - 90, _this17.selComp.ticker);
                        });
                      }
                    });
                  }
                });
              });
            });
            setTimeout(function () {}, 300);
          }
        }
      }, {
        key: "CreateComps",
        value: function CreateComps() {
          var _this18 = this;

          return new Promise(function (resolve, reject) {
            var that = _this18;
            var oSvg = _this18.chartMain;
            var compLst;
            var dta = _this18.selIndexData;

            var lvl = _this18.sectorOrder.filter(function (i) {
              return i.name == _this18.selSec.secTitle;
            })[0].order;

            oSvg.select('.compList').remove();
            compLst = oSvg.append("g").attr('class', 'compList compLst' + lvl).style("display", "block");
            0;
            var compC = compLst.append("g").attr("class", 'compLstC' + lvl);
            var compg = compC.selectAll("g").data(dta).enter().append("g").attr("class", "comp").attr("transform", function (d, i) {
              return "rotate(" + (i * 360 / dta.length - 90) + ")";
            }).attr("name", function (d) {
              return d.isin + "_" + d.indexName.replace(/ /g, '_');
            }).style('opacity', function (d) {
              if (that.AvoidLosersec) {
                if (that.AL_FilteredList.filter(function (data) {
                  return data.isin === d.isin;
                }).length != 0) {
                  return '1';
                } else {
                  return '0';
                }
              } else {
                return '1';
              }
            });
            var SelRes = _this18.indexData;
            var dmin = d3__WEBPACK_IMPORTED_MODULE_5__["min"](SelRes.map(function (x) {
              return x.marketCap;
            }));
            var dmax = d3__WEBPACK_IMPORTED_MODULE_5__["max"](SelRes.map(function (x) {
              return x.marketCap;
            }));
            var dmean = d3__WEBPACK_IMPORTED_MODULE_5__["mean"](SelRes.map(function (x) {
              return x.marketCap;
            }));
            var dsum = d3__WEBPACK_IMPORTED_MODULE_5__["sum"](SelRes.map(function (x) {
              return x.marketCap;
            }));
            var ResMarketCap = SelRes.map(function (x) {
              return x.marketCap;
            });
            var LimitedCap = ResMarketCap.filter(function (x) {
              return x < dmean && x != null;
            });
            var dlimitedSum = d3__WEBPACK_IMPORTED_MODULE_5__["sum"](LimitedCap);
            var rmax = dmax - dmin > 100 ? 100 : dmax - dmin;
            rmax = rmax < 50 ? 50 : rmax;
            var h = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([dmin, dmax]).range([0, 50]);
            var LimitedMarketCap = compg.append("rect").attr("height", "1px").attr("class", "crect").attr("x", that.radius + 3).attr("width", 0).transition().duration(10).attr("width", function (d) {
              if (d.indexName.indexOf("New Age Alpha") > -1 && that.selComp.indexName.indexOf("New Age Alpha") == -1) {
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
            resolve();
          });
        }
      }, {
        key: "createCompetitive",
        value: function createCompetitive(grp1) {
          return new Promise(function (resolve, reject) {
            grp1.append("g").attr("id", "gCompetitive");
            resolve();
          });
        }
      }, {
        key: "creatClockSlider",
        value: function creatClockSlider() {
          var _this19 = this;

          return new Promise(function (resolve, reject) {
            var that = _this19;
            var r = that.radius + 4;
            that.createXrad = r;
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").remove();
            var g = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").append("g").attr("id", "cSlider").attr('transform', 'rotate(' + -90 + ')');
            var rect1 = g.append("rect").attr("class", "sRect1").attr("x", r).attr("y", -.5).attr("height", 3).attr("width", 50).attr("fill", "#00b9ff");
            var rect = g.append("rect").attr("class", "sRect").attr("rx", 20).attr("ry", 20).attr("x", +r + 25).attr("height", "40px").attr("width", "170px").style("display", "none");
            var text = g.append("text").attr("class", "sText").attr("x", +r + 40).attr("dy", 0).style("alignment-baseline", "middle").style("font-size", "18px").style("font-family", "Open Sans Bold").style("display", "none").text("0.00");
            resolve();
          });
        }
      }, {
        key: "fillCompetives",
        value: function fillCompetives() {
          var _this20 = this;

          return new Promise(function (resolve, reject) {
            var that = _this20;
            var dta = _this20.selIndexData;
            var lvl = 1;
            var gs = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gCompetitive");
            gs.selectAll("g").remove();
            dta = dta.filter(function (t) {
              return t.isin != "";
            });
            dta = dta.sort(function (x, y) {
              return d3__WEBPACK_IMPORTED_MODULE_5__["ascending"](parseFloat(x.score), parseFloat(y.score));
            });
            var ggs = gs.selectAll("g").data(dta).enter().append("g").attr("name", function (d) {
              return d.isin;
            }).attr("class", function (d) {
              return "Compet" + d.isin;
            }).attr("transform", function (d, i) {
              var cx = i * 360 / dta.length - 90;

              if (cx <= 90) {
                return "rotate(" + (cx + 1.0) + ")";
              } else {
                return "rotate(" + (cx - 1.0) + ")";
              }
            }).style("opacity", function (d) {
              var sMin = 0;
              var sMax = 100;
              var opa = 1;

              if (that.AvoidLosersec) {
                if (that.AL_FilteredList.filter(function (data) {
                  return data.isin === d.isin;
                }).length != 0) {
                  if (that.selComp.isin == d.isin) {
                    return '0';
                  } else {
                    if (that.AL_List.length > 150) {
                      return '0.07';
                    } else {
                      return '1';
                    }
                  }
                } else {
                  return '1';
                }
              } else if (that.selComp.isin != d.isin) {
                if (dta.length > 150) {
                  opa = 1 - ((sMax - sMin) / 100 - .1);
                }

                if (lvl == 4) {
                  return opa;
                } else {// return (distinctISIN.includes(d.isin) ? "1" : opa);
                }

                return opa;
              } else {
                return 0;
              }
            });
            ggs.append("text").attr("x", function (d, i) {
              var cx = i * 360 / dta.length - 90;
              return cx > 90 ? "-215" : "215";
            }).attr("transform", function (d, i) {
              return i * 360 / dta.length - 90 > 90 ? "rotate(180)" : null;
            }).style("text-anchor", function (d, i) {
              var cx = i * 360 / dta.length - 90;
              return cx > 90 ? "end" : null;
            }).attr("class", function (d) {
              return "";
            }).style('fill', function (d) {
              if (that.AvoidLosersec) {
                if (that.AL_FilteredList.filter(function (data) {
                  return data.isin === d.isin;
                }).length != 0) {
                  return '#fff';
                } else {
                  return 'rgb(29 57 123)';
                }
              }
            }).text(function (d, i) {
              var cx = i * 360 / dta.length - 90;

              if (cx > 90) {
                var txt = " (" + d.ticker + ") " + d.company.trim() + "...";
                var resvtxt = " (" + d.ticker + ") ...";
                var cnt = txt.length;
                var rsvcnt = resvtxt.length;
                return " (" + d.ticker + ") " + d.company.slice(0, 17 - rsvcnt).trim() + "...";
              } else {
                var _txt = d.company.trim() + "... (" + d.ticker + ")";

                var resvtxt1 = "... (" + d.ticker + ")";
                var cnt = _txt.length;
                var rsvcnt1 = resvtxt1.length;
                return d.company.slice(0, 17 - rsvcnt1).trim() + "... (" + d.ticker + ")";
              }
            });
            resolve();
          });
        }
      }, {
        key: "createALinnerCircle",
        value: function createALinnerCircle() {
          var _this21 = this;

          return new Promise(function (resolve, reject) {
            var that = _this21;
            var cradius = 150;
            var oSvg = that.chartMain;
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#innerCircleGrp').remove();
            var innerCirclegrp = oSvg.append("g").attr('id', "innerCirclegrp");
            var TI_Grp = innerCirclegrp.append("g").attr('id', 'TIGrp').attr('transform', 'translate(-50,-110)');
            TI_Grp.append('circle').attr('id', 'CT_mCircle').attr('r', '25').style('stroke', '#e5e5e5').style('fill', 'none');
            TI_Grp.append('text').style('fill', function () {
              return that.getColor(that.roundMed(that.selComp.scores * 100));
            }).style('font-size', '16').style('font-family', 'Open Sans ExtraBold').attr('dx', function () {
              if (Number(that.roundMed(that.selComp.scores * 100)) < 10) return '-12';else return '-18';
            }).attr('dy', '5').text(function () {
              return that.roundMed(that.selComp.scores * 100);
            });
            TI_Grp.append('text').style('font-size', '18').style('font-family', 'Open Sans ExtraBold').style('fill', '#224b9e').attr('dx', '35').attr('dy', '5').text(function () {
              return "(" + that.selComp.ticker + ")";
            });
            var Sec_Top = innerCirclegrp.append('g').attr('id', 'Sec_Top').attr('transform', 'translate(-100,-55)');
            Sec_Top.append('circle').attr('id', 'ST_mCircle').attr('r', '32').style('stroke', '#e5e5e5').style('fill', 'none');
            Sec_Top.append('text').style('fill', function () {
              return that.getColor(that.selSec.secMed);
            }).style('font-size', '16').style('font-family', 'Open Sans ExtraBold').attr('dx', '-18').attr('dy', '5').text(function () {
              return that.selSec.secMed;
            });
            Sec_Top.append('text').style('font-size', '16').style('font-family', 'Open Sans SemiBold').style('fill', '#224b9e').attr('dx', '40').attr('dy', '-12').text(function () {
              return that.selSec.secTitle;
            });
            var FO_Sec_Top = Sec_Top.append('foreignObject').attr('x', '40').attr('y', '-8').attr('width', '200').attr('height', '40');
            FO_Sec_Top.append('xhtml:p').attr('xmlns', 'http://www.w3.org/1999/xhtml').style('margin', '0').style('text-align', 'start').style('font-size', '16px').style('font-family', 'Open Sans Bold').style('color', '#224b9e').style('line-height', '1.4').style('-webkit-line-clamp', '1').style('-webkit-box-orient', 'vertical').style('display', '-webkit-box').style('overflow', 'hidden').text(that.selSec.secName);

            if (that.AL_List.length - that.AL_FilteredList.length > 0) {
              FO_Sec_Top.append('xhtml:p').attr('xmlns', 'http://www.w3.org/1999/xhtml').style('margin', '0').style('text-align', 'start').style('font-size', '16px').style('font-family', 'Open Sans Bold').style('color', '#224b9e').style('line-height', '1.4').text(function () {
                return that.AL_List.length - that.AL_FilteredList.length + ' Losers';
              });
            }

            var ChartGrp = innerCirclegrp.append('g').attr('id', 'ChartGrp').attr('transform', 'translate(-190,35)');
            var FO_Chart = ChartGrp.append('foreignObject').attr('x', '40').attr('y', '-48').attr('id', 'FO_Chart').attr('width', '300').attr('height', '150');
            FO_Chart.append('xhtml:p').attr('xmlns', 'http://www.w3.org/1999/xhtml').attr('id', 'ALC_text').style('margin', '0').style('color', '#224b9e').style('font-size', '14px').style('font-family', 'Open Sans Regular').style('line-height', '1.2').text(function () {
              return 'Click to expand Performance';
            });
            var chartDiv = FO_Chart.append('xhtml:div').attr('xmlns', 'http://www.w3.org/1999/xhtml').attr('id', 'ALC_container').style('width', '100%').style('display', 'flex').style('justify-content', 'center');
            var innerchartDiv = chartDiv.append('xhtml:div').attr('xmlns', 'http://www.w3.org/1999/xhtml').style('width', '70%').style('border', '1px solid #ddd').style('border-radius', '5px').style('padding', '4px');
            var chart = innerchartDiv.append('xhtml:span').attr('xmlns', 'http://www.w3.org/1999/xhtml').attr('id', 'lineChart').style('height', '65px').style('width', '100%').style('display', 'block').style('overflow', 'hidden').on('click', function () {
              that.onChartClick();
            });
            that.highChartLine(chart).then(function (res) {
              setTimeout(function () {
                if (that.CurrSliderData.e != 0) {
                  var addInfoDiv = FO_Chart.append('xhtml:p').attr('xmlns', 'http://www.w3.org/1999/xhtml').text('Additional Return').style('font-size', '14px').style('font-family', 'Open Sans Regular').style('color', '#224b9e').style('line-height', '1.4').style('margin', '0');
                  var infodiv = FO_Chart.append('xhtml:div').attr('xmlns', 'http://www.w3.org/1999/xhtml').style('width', '100%').style('display', 'flex').style('justify-content', 'center');
                  var infoSpan = infodiv.append('xhtml:span').attr('xmlns', 'http://www.w3.org/1999/xhtml').attr('id', 'AL_AI_Span').style('width', '65%').style('display', 'flex').style('flex-direction', 'row').style('padding', '0px 5px').style('justify-content', 'space-between');
                  infoSpan.append('xhtml:p').attr('xmlns', 'http://www.w3.org/1999/xhtml').text(function () {
                    return '(C) ' + that.cumReturn;
                  }).style('font-size', '14px').style('font-family', 'Open Sans Bold').style('color', '#224b9e').style('line-height', '1.4').style('margin', '0');
                  infoSpan.append('xhtml:p').attr('xmlns', 'http://www.w3.org/1999/xhtml').text(function () {
                    return '(A) ' + that.annReturn;
                  }).style('font-size', '14px').style('font-family', 'Open Sans Bold').style('color', '#224b9e').style('line-height', '1.4').style('margin', '0');
                }
              }, 500);
            });
            resolve();
          });
        }
      }, {
        key: "highChartLine",
        value: function highChartLine(chart) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this22 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", new Promise(function (resolve, reject) {
                      var that = _this22;

                      if (_this22.selComp != "") {
                        var indexValue = [];
                        var date = [];
                        var Ctype = 'MC';
                        var GICSId = 0;
                        var range = '';

                        var selSecLvl = _this22.sectorOrder.filter(function (i) {
                          return i.name == _this22.selSec.secTitle;
                        })[0].order;

                        if (selSecLvl == 1) {
                          GICSId = 0;
                        } else {
                          GICSId = that.selComp.industry.slice(0, 2 * (selSecLvl - 1));
                        }

                        range = 'top' + (100 - Math.round(_this22.CurrSliderData.e));

                        _this22.dataHandler.getIndexPreRuns(_this22.IndexId, GICSId, Ctype, range).subscribe(function (res) {
                          if (res.length != 0) {
                            that.chartData = true;

                            if (that.smChart != null) {
                              that.smChart.destroy();
                              that.smChart = null;
                            }

                            var ReturnVal = [];
                            var ReturnVal1 = [];
                            var indexValue1 = [];

                            for (var i = 0; i <= res.length - 1; ++i) {
                              indexValue1.push(res[i]['top100']);
                              date.push(res[i]['date']);
                            }

                            var d = new Date(date[date.length - 1]);
                            var formatdate = that.formatedates(d.getMonth() + 1) + '/' + that.formatedates(d.getDate()) + '/' + d.getFullYear();
                            var since = new Date(date[0]); // var sinceIncep = that.formatedates(since.getMonth() + 1) + '/' + that.formatedates(since.getDate()) + '/' + since.getFullYear();

                            var series = [];
                            series.push({
                              name: "All  (" + formatdate + ' : ' + indexValue1[indexValue1.length - 1].toFixed(2) + ")",
                              marker: {
                                symbol: ''
                              },
                              dataLabels: {
                                style: {
                                  fontSize: 8 + 'px'
                                }
                              },
                              color: '#9b9b9b',
                              data: indexValue1,
                              lineWidth: 0.9
                            });
                            ReturnVal = that.calcCumAndAnnReturns(indexValue1, date);

                            if (0 < that.CurrSliderData.e && 100 > that.CurrSliderData.e) {
                              for (var _i = 0; _i <= res.length - 1; ++_i) {
                                indexValue.push(res[_i]["range"]);
                                date.push(res[_i]['date']);
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
                                    fontSize: 8 + 'px'
                                  }
                                },
                                data: indexValue,
                                color: '#00b9ff',
                                lineWidth: 0.9
                              });
                              ReturnVal1 = that.calcCumAndAnnReturns(indexValue, date);

                              if (ReturnVal1[0] - ReturnVal[0] > 0) {
                                that.cumReturn = '+' + (ReturnVal1[0] - ReturnVal[0]).toFixed(2) + '%';
                              } else {
                                that.cumReturn = (ReturnVal1[0] - ReturnVal[0]).toFixed(2) + '%';
                              }

                              if (ReturnVal1[1] - ReturnVal[1] > 0) {
                                that.annReturn = '+' + (ReturnVal1[1] - ReturnVal[1]).toFixed(2) + '%';
                              } else {
                                that.annReturn = (ReturnVal1[1] - ReturnVal[1]).toFixed(2) + '%';
                              }
                            } else {
                              that.cumReturn = '0.00%';
                              _this22.annReturn = '0.00%';
                            }

                            that.smChart = highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]({
                              chart: {
                                renderTo: 'lineChart',
                                type: 'spline',
                                style: {
                                  fontFamily: 'Open Sans SemiBold'
                                },
                                margin: 0
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
                                  formatter: function formatter() {
                                    var d = new Date(this.value);
                                    var currentMonth = d.getMonth() + 1;

                                    if (currentMonth < 10) {
                                      currentMonth = '0' + currentMonth;
                                    }

                                    return d.getFullYear().toString();
                                  },
                                  style: {
                                    color: '#333',
                                    fontSize: '9px'
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
                                    return "<div style='font-size:7pt'>" + formatdate + "<br><b>All : </b> <span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + "</span><br><b>" + that.CurrSliderData.e + " : </b><span style='font-size: 8pt'>" + this.points[1].y.toFixed(2) + ' </span></div>';
                                  } else if (this.points[0].color == "#00b9ff") {
                                    return "<div style='font-size:7pt'>" + formatdate + "<br><b>" + that.CurrSliderData.e + " : </b><span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + '</span></div>';
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
                                noData: "No Data"
                              },
                              noData: {
                                style: {
                                  fontWeight: 'bold',
                                  fontSize: '7px',
                                  color: '#303030'
                                }
                              }
                            });
                          } else {
                            that.chartData = false;
                            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#ALC_container').style('margin-top', '20px');
                            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#ALC_text').style('display', 'none');
                            chart.on('click', null);
                            chart.style('display', 'flex').style('justify-content', 'center').style('align-items', 'center').style('font-size', '18px').style('font-family', 'Open Sans SemiBold').style('color', '#999').text('No Data');
                          }

                          resolve();
                        });
                      }
                    }));

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        }
      }, {
        key: "onChartClick",
        value: function onChartClick() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this23 = this;

            var selSecLvl, modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    selSecLvl = this.sectorOrder.filter(function (i) {
                      return i.name == _this23.selSec.secTitle;
                    })[0].order;
                    _context6.next = 3;
                    return this.modalCtrl.create({
                      component: _Components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__["LineChartComponent"],
                      cssClass: 'AL_LChart',
                      componentProps: {
                        'currentData': this.CurrSliderData,
                        'indexId': this.IndexId,
                        'selSecLvl': selSecLvl,
                        'selComp': this.selComp
                      }
                    });

                  case 3:
                    modal = _context6.sent;
                    modal.onDidDismiss().then(function (d) {
                      _this23.OnAL_listChange(_this23.CurrSliderData);

                      _this23.loadData();
                    });
                    _context6.next = 7;
                    return modal.present();

                  case 7:
                    return _context6.abrupt("return", _context6.sent);

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "calcCumAndAnnReturns",
        value: function calcCumAndAnnReturns(indexValue, date) {
          var that = this;
          var newd = indexValue[indexValue.length - 1] / 1000 - 1;
          var cumReturn = "0.0%";
          var annReturn = "0.0%";
          var startDate = new Date(date[0]);
          var endDate = new Date(date[date.length - 1]);
          var oneDay = 24 * 60 * 60 * 1000;
          var Difference_In_Time = endDate.getTime() - startDate.getTime(); // To calculate the no. of days between two dates 

          var diffDays = Difference_In_Time / (1000 * 3600 * 24);
          var years = diffDays / 365;
          cumReturn = (newd * 100).toFixed(2);
          var MathVal = 1 + newd;
          annReturn = ((Math.pow(MathVal, 1 / years) - 1) * 100).toFixed(2);
          return [cumReturn, annReturn];
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
        key: "CreateCompCircle",
        value: function CreateCompCircle() {
          var _this24 = this;

          return new Promise(function (resolve, reject) {
            var that = _this24;
            var oSvg = that.chartMain;
            var txt = that.selComp.companyName + " (" + that.selComp.ticker + ")";
            var med = that.roundMed(that.selComp.scores * 100);
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#Fo_innerCircle').remove();
            var Fo_innerCircle = oSvg.append('foreignObject').attr('x', '-140').attr('y', '-60').attr('id', 'Fo_innerCircle').attr('width', '280').attr('height', '150');
            Fo_innerCircle.append('xhtml:p').attr('xmlns', 'http://www.w3.org/1999/xhtml').attr('class', 'innerComp').text(txt);
            Fo_innerCircle.append('xhtml:p').attr('xmlns', 'http://www.w3.org/1999/xhtml').attr('class', 'innerCompMed').style('color', that.getColor(med)).text(med);
            resolve();
          });
        }
      }, {
        key: "compwrap",
        value: function compwrap(text, width) {
          text.each(function () {
            var text = d3__WEBPACK_IMPORTED_MODULE_5__["select"](this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.1,
                // ems
            y = text.attr("y"),
                dy = parseFloat(text.attr("dy")),
                tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");

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
      }, {
        key: "wrap",
        value: function wrap(text, width) {
          var align = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var that = this;
          text.each(function (d) {
            var text = d3__WEBPACK_IMPORTED_MODULE_5__["select"](this),
                words = text.text().replace("-", "- ").split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = text.style("font-size").replace("px", ""),
                // ems
            y = text.attr("y"),
                dy = 0,
                tspan = text.text(null).append("tspan").attr("dx", 5).attr("dy", 5),
                textalign = text.style("text-anchor") == "end" ? false : true;
            tspan.attr("class", "txt");
            var i = 0;

            while (word = words.pop()) {
              lineNumber = lineNumber + 1;
              line.push(word);
              tspan.text(line.join(" "));

              if (tspan.node().getComputedTextLength() > width * lineHeight / 10) {
                if (i == 0) {
                  tspan.attr("dy", 0);
                }

                i++;
                line.pop();
                tspan.text(line.join(" "));
                line = [word];

                if (textalign) {
                  tspan = text.append("tspan").attr("dy", +lineHeight + 3 + "px").attr("dx", -tspan.node().getComputedTextLength()).text(word);
                } else {
                  tspan = text.append("tspan").attr("dy", lineHeight + "px").text(word);
                }

                tspan.attr("class", "txt");
              }

              if (i > 0 && !textalign) {
                tspan.attr("dx", -tspan.node().getComputedTextLength());
              }
            }

            if (tspan.text().indexOf("[") > -1) {
              var txt = tspan.text();
              var txt1 = txt.substring(txt.indexOf("[") + 1, txt.indexOf("]"));
              var txt2 = txt.substring(txt.indexOf("["), txt.indexOf("]") + 1);
              txt2 = txt.replace(txt2, "");

              if (txt2 != "") {
                tspan.text(txt2);
                text.append("tspan").text(txt1).attr("class", "score");
              } else {
                tspan.text(txt1).attr("class", "score");
              }
            }
          });
        }
      }, {
        key: "setClock",
        value: function setClock(isin, val, txt) {
          var _this25 = this;

          return new Promise(function (resolve, reject) {
            var that = _this25;

            if (txt != null) {
              d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").style("display", "none");
              var r = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#maincircle").attr("r");
              var gC360 = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().domain([0, 90, 180, 270, 360]).range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
              var comp = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.Compet' + isin).style('display', "none");
              d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").attr('transform', function (d) {
                var i = that.selIndexData.indexOf(that.selComp);
                var len = that.selIndexData.length;
                return "rotate(" + (i * 360 / len - 90) + ")";
              }).attr('name', isin);
              d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").select(".sText").attr('text-anchor', "middle").attr('y', function () {
                return val >= 90 ? 0 : 5;
              }).attr("x", function () {
                var rtemp = 199 + 70;
                var txtmid = txt.length / 2;
                var pos = rtemp - txtmid;
                return val >= 90 ? -(pos - 15) : pos;
              }).attr("transform", function () {
                return val >= 90 ? "rotate(180)" : null;
              }).style("text-anchor", function () {
                return val >= 90 ? "end" : null;
              }).style("display", function () {
                return txt == null ? "none" : "block";
              }).attr("fill", function () {
                return gC360(val);
              }).text(txt).call(that.wrap, 100);
              d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").style("display", "block");
              var bbox = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").select(".sText").node().getBBox();
              var bboxH = +bbox.height + 20;
              bboxH = bboxH > 40 ? bboxH : 40;
              d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").select(".sRect").attr("fill", "#fff").attr("stroke", "#00b5fa").attr("stroke-width", "3px").style("display", function () {
                return txt == null ? "none" : "block";
              }).attr("height", 50).attr("width", 140).attr("y", -(bboxH / 2));
              var calW = parseInt(that.createXrad + bbox.width);
              d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").select(".sTextReverse").attr("fill", "#fff").style("display", function () {
                return txt == null ? "none" : "block";
              }).attr("x", function () {
                if (bboxH == 40) {
                  return -(bboxH + 0);
                } else if (bboxH < 50) {
                  return -(bboxH - 3);
                } else if (bboxH > 50) {
                  return -(bboxH - 15);
                }
              }).attr("y", -(calW + 17));
              d3__WEBPACK_IMPORTED_MODULE_5__["select"](".comp[name='" + isin + "_" + that.selComp.indexName.replace(/ /g, '_') + "']").raise();
              d3__WEBPACK_IMPORTED_MODULE_5__["select"](".comp[name='" + isin + "_" + that.selComp.indexName.replace(/ /g, '_') + "']").select("rect").classed("recton", true);

              _this25.fillCompetives();
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
      }, {
        key: "circleRange",
        value: function circleRange(values) {
          var that = this;
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#slider").remove();
          var slider = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").append("g").attr("id", "slider").attr("transform", "translate(-175,-175)");
          var width = 350;
          var height = 350;
          var margin = {
            top: 15,
            left: 15,
            bottom: 15,
            right: 15
          };
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
          var outerRadius = radius + 1 + indicatorWidth / 2;
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
            "calculateDuration": function calculateDuration(startAngle, endAngle) {
              var duration;
              var angleToSegments = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([sliderInitValue, sliderEndValue]).domain([0, 360]);
              duration = angleToSegments(endAngle) - angleToSegments(startAngle);
              if (duration < sliderInitValue) duration = rangeTotal + duration;
              return duration * 5;
            },
            "createInfoObject": function createInfoObject(data) {
              var angleToSegments = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([sliderInitValue, sliderEndValue]).domain([0, 360]);
              var angleToFiveMinuteScale = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
              var startAngle, endAngle, startTimeInfo, endTimeInfo, duration;
              startTimeInfo = angleToSegments(data.aAngle) * 5;
              endTimeInfo = angleToSegments(data.eAngle) * 5;
              duration = this.calculateDuration(data.aAngle, data.eAngle);
              return {
                start: startTimeInfo,
                end: endTimeInfo,
                duration: duration
              };
            },
            "calculateInitialData": function calculateInitialData(initialData) {
              var value = 0,
                  angle = 0;
              var angleTO = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
              var segmentsToAngle = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
              angle = segmentsToAngle(initialData.start);
              value = angleTO.invert(angle);
              this.graphdata.push({
                value: value,
                label: 'a',
                angle: angle
              });
              angle = segmentsToAngle(initialData.end);
              value = angleTO.invert(angle);
              this.graphdata.push({
                value: value,
                label: 'e',
                angle: angle
              });
            },
            "calculateUpdateHandleData": function calculateUpdateHandleData(values) {
              this.graphdata = [];
              var value = 0,
                  angle = 0;
              var angleTo = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
              var segmentsToAngle = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
              angle = segmentsToAngle(values.start);
              value = angleTo.invert(angle);
              this.graphdata.push({
                value: value,
                label: 'a',
                angle: angle
              });
              angle = segmentsToAngle(values.end);
              value = angleTo.invert(angle);
              this.graphdata.push({
                value: value,
                label: 'e',
                angle: angle
              });
            },
            "getValueOfDataSet": function getValueOfDataSet(label) {
              var value = 0;
              this.graphdata.forEach(function (el, i) {
                if (el.label == label) value = el.value;
              });
              return value;
            },
            "getAngleOfDataSet": function getAngleOfDataSet(label) {
              var angle = 0;
              this.graphdata.forEach(function (el, i) {
                if (el.label == label) angle = el.angle;
              });
              return angle;
            },
            "getData": function getData() {
              return this.graphdata;
            }
          };
          var slider = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#slider").attr('height', height).attr('width', width);
          var angularScale = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
          var angularvalue = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([sliderInitValue, sliderEndValue]).domain([0, 360]);

          var tickdata = function tickdata(d) {
            var pec1 = (sliderEndValue - sliderInitValue) / 100;
            return d3__WEBPACK_IMPORTED_MODULE_5__["range"](sliderInitValue, sliderEndValue + pec1).map(function (v, i) {
              var segmentsToAngle = d3__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]().range([0, 360]).domain([sliderInitValue, sliderEndValue]);

              if (sliderEndValue - sliderInitValue <= 1) {
                return {
                  angle: segmentsToAngle(v),
                  label: v % 10 ? null : v.toFixed(2)
                };
              } else if (sliderEndValue - sliderInitValue < 20) {
                return {
                  angle: segmentsToAngle(v),
                  label: v % 10 ? null : v.toFixed(1)
                };
              } else {
                return {
                  angle: segmentsToAngle(v),
                  label: v % 10 ? null : v.toFixed(0)
                };
              }
            });
          };

          function writeTimeInfo(sliderObject) {
            if (that.AvoidLosersec && !that.AL_mainCircle && !that.AL_rangeCircle || that.AvoidLosersec && that.AL_rangeCircle) {
              that.CurrSliderData = sliderObject; // console.log(that.CurrSliderData);
            }

            if (that.AvoidLosersec && that.AL_rangeCircle && !that.AL_mainCircle) {
              SetInfo(that.CurrSliderData);
            }

            if (that.avoidSlides && !firstRangeLoad) {
              setTimeout(function () {
                that.slides = document.getElementById('AL_Slider');
                that.slides.slideTo(1);
              }, 1000);
            } else {
              firstRangeLoad = false;
            }

            helper.calculateUpdateHandleData({
              "start": sliderObject.a,
              "end": sliderObject.e
            });
          }

          var tau = 2 * Math.PI;
          var svg = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#slider").append('g').attr('id', 'holder').attr('transform', 'translate(' + ((width + offset - width) / 2 + margin.top) + ',' + ((height + offset - height) / 2 + margin.left) + ')');
          holder = svg.append('g').attr('id', 'arcindicator').attr("class", "sliderDisp").style("display", "none");
          helper.calculateInitialData(Intdata);
          a = helper.getValueOfDataSet("a");
          e = helper.getValueOfDataSet("e");
          startAngle = helper.getAngleOfDataSet("a");
          endAngle = helper.getAngleOfDataSet("e");
          writeTimeInfo({
            a: a,
            e: e,
            aAngle: startAngle,
            eAngle: endAngle
          });
          var arc = d3__WEBPACK_IMPORTED_MODULE_5__["arc"]().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(function (d) {
            return startAngle * (Math.PI / 180);
          }).endAngle(function (d) {
            return endAngle * (Math.PI / 180);
          });
          var tempVal;
          indicatorArc = holder.append("g").attr("class", "arcindicator").attr("transform", "translate(" + (width / 2 - margin.top) + "," + (height / 2 - margin.bottom) + ")").append("path").attr("fill", function (d, i) {
            return accentColor;
          }).attr("d", arc);
          handles = svg.append('g').attr('id', 'handles').attr('transform', 'translate(' + radius + ',' + radius + ')').attr("class", "sliderDisp").style("display", "block");
          dragBehavior = d3__WEBPACK_IMPORTED_MODULE_5__["drag"]().subject(function (d) {
            return d;
          }).on("drag", function (d, i) {
            var coordinaters = d3__WEBPACK_IMPORTED_MODULE_5__["mouse"](svg.node());
            var x = coordinaters[0] - radius;
            var y = coordinaters[1] - radius;
            var nA = Math.atan2(y, x) * 180 / Math.PI + 90;

            if (nA < 0) {
              nA = 360 + nA;
            }

            var newvalue = angularScale.invert(nA);

            if (d.value > 5 || newvalue > 5) {
              dragmoveHandles(d, i);
            }
          }).on("end", function () {
            checkHandlesPosition(this);
            d3__WEBPACK_IMPORTED_MODULE_5__["select"](this).classed('active', false);
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").select('.sliderToolTip').remove();
          });
          drawHandles();
          d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"]("#handles .handlercontainer").attr("class", function (d, i) {
            return "handlercontainer a" + (i + 1);
          });

          if (endAngle === 360) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a2').attr('transform', 'rotate(' + (endAngle - 1.8) + ') translate(0,' + (radius - 3) * -1 + ')');
          }

          if ($('#handles .handle').length === 2) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.handle').remove();
          }

          if (values.end != 100 && values.end != 0) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a2').attr('transform', 'rotate(' + helper.graphdata[1].angle + ') translate(0,' + (radius - 3) * -1 + ')');
          }

          function drawHandles() {
            var handlerContainer = handles.selectAll('.handlercontainer').data(helper.getData());
            var circles = handlerContainer.enter().append('g').attr('class', 'handlercontainer').attr('transform', function (d) {
              // console.log(angularScale(d.value))
              return 'rotate(' + angularScale(d.value) + ') translate(0,' + (radius - 3) * -1 + ')';
            }).call(dragBehavior);
            circles.append('circle').attr('r', handleRadius).attr('class', 'handle').style('stroke', handleStrokeColor).style('stroke-width', handleStrokeWidth).attr('cursor', 'pointer').style('fill', "#00b9ff").style('stroke-opacity', 1).attr('id', function (d) {
              return d.label;
            });
            circles.append("text").attr("text-anchor", "middle").attr('dominant-baseline', 'central').attr('font-family', 'FontAwesome').attr('font-size', '10px').attr('cursor', 'pointer').attr('fill', "#fff");
          }

          function drawTickers() {
            var checkPoi = sliderEndValue - sliderInitValue <= 20 ? 1 : 0;
            var roTicker = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#slider").select("#holder").select("#ticks");
            roTicker.select(".tick0").select("text").attr("transform", function (d) {
              return checkPoi == 1 ? "rotate(90)translate(0,8)" : "rotate(90)translate(0,8)";
            }).style("font-family", "Open Sans Semibold").style("fill", tickColor1).style("font-size", checkPoi == 1 ? "7px" : "8px");
            roTicker.select(".tick0").select("line").attr("x2", "-10");
            roTicker.select(".tick25").select("text").attr('x', -10);
            roTicker.select(".tick75").select("text").attr("transform", function (d) {
              return checkPoi == 1 ? "rotate(180)translate(30,0)" : "rotate(180)translate(18,0)";
            }).style("font-family", "Open Sans Semibold").style("fill", tickColor1);
            var lastticks = '.tick' + sliderEndValue;
            roTicker.select(lastticks).select("text").attr("transform", function (d) {
              return checkPoi == 1 ? "rotate(90)translate(-8,8)" : "rotate(90)translate(-8,8)";
            }).style("font-family", "Open Sans Semibold").style("fill", tickColor1).style("font-size", checkPoi == 1 ? "7px" : "8px");
            roTicker.select(".tick0").select("line").attr("x2", "-10");
            roTicker.select(".tick50").select("text").style("font-family", "Open Sans Semibold").style("fill", tickColor1);
          }

          function dragmoveHandles(d, i) {
            var coordinates = d3__WEBPACK_IMPORTED_MODULE_5__["mouse"](svg.node());
            var x = coordinates[0] - radius;
            var y = coordinates[1] - radius;
            var newAngle = Math.atan2(y, x) * 180 / Math.PI + 90;

            if (newAngle < 0) {
              newAngle = 360 + newAngle;
            }

            newAngle = newAngle - newAngle * sliderEndValue % 125 / rangeTotal;
            d.value = angularScale.invert(newAngle);

            if (d.value > 96) {
              d.value = 0;
              d.angle = angularvalue.invert(d.value);
              updateHandles(d);
            } else {
              var dvalue = (d.value / sliderDragRange - d.value / sliderDragRange % 1) * sliderDragRange;
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
            arc = d3__WEBPACK_IMPORTED_MODULE_5__["arc"]().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(function (d) {
              return startValue * (Math.PI / 180);
            }).endAngle(function (d) {
              return endValue * (Math.PI / 180);
            });
            indicatorArc.attr("d", arc);
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
            dragLiveData = currentData;
          }

          function updateHandles(dd) {
            if (dd.label === 'a') {
              d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a1').attr('transform', 'rotate(' + dd.angle + ') translate(0,' + radius * -1 + ')');
            } else {
              d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#handles').select('.a2').attr('transform', 'rotate(' + dd.angle + ') translate(0,' + (radius - 3) * -1 + ')');
            }

            d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").select('.sliderToolTip').remove();
            var toolHandles = d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#crlChart").append('g').attr('class', 'sliderToolTip').attr('transform', function (d) {
              return 'rotate(' + dd.angle + ') translate(0,' + (radius + 40) * -1 + ')';
            });
            toolHandles.append('circle').attr('r', 10.5).attr('class', 'tooltips').attr('stroke', '#00b9ff').attr('stroke-width', 1).attr('cursor', 'pointer').attr('fill', '#fff');
            toolHandles.append("text").style("text-anchor", "middle").style('dominant-baseline', 'central').attr("transform", "rotate(" + (360 - +dd.angle) + ")").style('font-family', 'Open Sans Semibold').text(dd.value.toFixed(0)).style('font-size', '10px').attr('cursor', 'pointer').style('fill', handleIconColor);
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
            setTimeout(function () {
              if (!that.avoidSlides) {
                that.avoidSlides = true;
                that.showLoader = true;
              }
            }, 1000);
          }

          function SetInfo(data) {
            d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#innerText').remove();
            var oSvg = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#crlChart');
            var oSvgGrp = oSvg.append('g').attr('id', 'innerText');
            var text = oSvgGrp.append('text').attr("text-anchor", "middle");
            text.append('tspan').attr('class', 'inText1').attr('y', -20).text("Remove");
            text.append('tspan').attr('class', 'inText2').attr('y', 20).attr('x', 0).attr("dy", 20).text(function () {
              return Math.round(data.e) + '%';
            });
            text.transition().duration(300);
          }

          function getPathData() {
            var width = document.getElementById('svgHContainer1').getBoundingClientRect().width;
            var r = radius * 1;
            var startX = width / 2 - r;
            return 'm' + startX + ',' + height / 2 + ' ' + 'a' + r + ',' + r + ' 0 0 0 ' + 2 * r + ',0';
          }

          d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#textGrp').remove();
          var bottomtextgrp = d3__WEBPACK_IMPORTED_MODULE_5__["select"]('#crlChart').append('g').attr('id', "textGrp").attr('transform', function () {
            var sWidth = document.getElementsByClassName('R_slider')[0].clientWidth;
            return 'translate(-' + sWidth / 2 + ',-140)';
          });
          bottomtextgrp.append('defs').append('path').attr('d', getPathData).attr('id', 'curvedTextPath');
          bottomtextgrp.append('text').attr('id', 'curve-text').attr('class', 'CurveText').attr('fill', '#fff').attr('xml:space', 'preserve').append('textPath').attr('startOffset', "32%").attr('xlink:href', '#curvedTextPath').text('<<< L O S E R S    W I N N E R S >>>');
        }
      }, {
        key: "SliderOnChange",
        value: function SliderOnChange(vals) {
          var that = this;
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

          d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.slider_text_Ryt').text(vals[0].toFixed(0) + "%").attr("x", 430 - vals[0] * 4);
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.slider_text_Ryt_rect').text(vals[0].toFixed(0) + "%").attr("x", 416 - vals[0] * 4);
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.slider_text_Lft').text(vals[1].toFixed(0) + "%").attr("x", 430 - vals[1] * 4);
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]('.slider_text_Lft_rect').text(vals[1].toFixed(0) + "%").attr("x", 416 - vals[1] * 4);
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
          } catch (e) {
            console.log(e);
          }

          d3__WEBPACK_IMPORTED_MODULE_5__["selectAll"](".viewport").style("overflow-y", "auto");
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#ParentViewportRange").style("visibility", "visible");
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#gCompetitive").raise();
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#cSlider").raise();
          d3__WEBPACK_IMPORTED_MODULE_5__["select"]("#Rangeslider").raise();
          var filtext = "";

          if (vals[0] == 0 && vals[1] == 100) {
            filtext = "Filtered Companies  (0% - 100%)";
          } else if (vals[1].toFixed(0) - vals[0].toFixed(0) < 10) {
            filtext = "Filtered Companies  (" + (vals[0] == 0 ? 0 : vals[0].toFixed(2)) + '% - ' + (vals[1] == 100 ? 100 : vals[1].toFixed(2)) + '%)';
          } else {
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
      }, {
        key: "OnAL_listChange",
        value: function OnAL_listChange(d) {
          var total_lenght = this.AL_List.length;
          var filteredLength = total_lenght - Math.floor(total_lenght * (d.e / 100));
          this.AL_FilteredList = _toConsumableArray(this.AL_List.slice(0, filteredLength));
        }
      }, {
        key: "onWeeklyClick",
        value: function onWeeklyClick(day) {
          this.selWeeklyday = day;
          if (!this.alertSubmitBtn) this.alertUpdateBtn = true;else this.alertUpdateBtn = false;
        }
      }, {
        key: "onradioChange",
        value: function onradioChange(e) {
          if (e.detail.value == 'weekly') {
            this.selctedradioopts = 'weekly';
            this.weeklyDiv = true;
          } else {
            this.weeklyDiv = false;
          }

          if (e.detail.value == 'monthly') {
            this.selctedradioopts = 'monthly';
            this.monthlyBtn = true;
          } else {
            this.monthlyBtn = false;
          }

          if (e.detail.value == 'daily') {
            this.selctedradioopts = 'daily';
          }

          if (!this.alertSubmitBtn) {
            this.alertUpdateBtn = true;
          } else {
            this.alertUpdateBtn = false;
          }
        }
      }, {
        key: "onperRadioChange",
        value: function onperRadioChange(event) {
          if (event.detail.value == 'percentage') {
            this.percentageRage = true;
          } else {
            this.percentageRage = false;
          }

          if (!this.alertSubmitBtn) {
            this.alertUpdateBtn = true;
          } else {
            this.alertUpdateBtn = false;
          }
        }
      }, {
        key: "showMonthlyPicker",
        value: function showMonthlyPicker(e) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this26 = this;

            var columnOpts, temp, opts, picker;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    columnOpts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
                    temp = [];
                    columnOpts.forEach(function (x) {
                      temp.push({
                        text: x,
                        value: x
                      });
                    });
                    opts = {
                      buttons: [{
                        text: "Cancel",
                        role: 'cancel'
                      }, {
                        text: 'Ok',
                        handler: function handler(val) {
                          _this26.monthlyDate = val.Date.value;

                          if (!_this26.alertSubmitBtn) {
                            _this26.alertUpdateBtn = true;
                          } else {
                            _this26.alertUpdateBtn = false;
                          }
                        }
                      }],
                      columns: [{
                        name: 'Date',
                        options: temp,
                        selectedIndex: this.monthlyDate - 1
                      }]
                    };
                    _context7.next = 6;
                    return this.pickerCtrl.create(opts);

                  case 6:
                    picker = _context7.sent;
                    picker.present();

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "onPDFClick",
        value: function onPDFClick() {}
      }, {
        key: "onSendClick",
        value: function onSendClick() {}
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
      }, {
        type: _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_6__["DataHandlerService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_shareddata_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_6__["DataHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=2-es5.js.map