(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["investment-solutions-investment-solutions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/investment-solutions/investment-solutions.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/investment-solutions/investment-solutions.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>investment-solutions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/investment-solutions/investment-solutions-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/investment-solutions/investment-solutions-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: InvestmentSolutionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentSolutionsPageRoutingModule", function() { return InvestmentSolutionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _investment_solutions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./investment-solutions.page */ "./src/app/investment-solutions/investment-solutions.page.ts");




const routes = [
    {
        path: '',
        component: _investment_solutions_page__WEBPACK_IMPORTED_MODULE_3__["InvestmentSolutionsPage"]
    }
];
let InvestmentSolutionsPageRoutingModule = class InvestmentSolutionsPageRoutingModule {
};
InvestmentSolutionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InvestmentSolutionsPageRoutingModule);



/***/ }),

/***/ "./src/app/investment-solutions/investment-solutions.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/investment-solutions/investment-solutions.module.ts ***!
  \*********************************************************************/
/*! exports provided: InvestmentSolutionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentSolutionsPageModule", function() { return InvestmentSolutionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _investment_solutions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./investment-solutions-routing.module */ "./src/app/investment-solutions/investment-solutions-routing.module.ts");
/* harmony import */ var _investment_solutions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./investment-solutions.page */ "./src/app/investment-solutions/investment-solutions.page.ts");







let InvestmentSolutionsPageModule = class InvestmentSolutionsPageModule {
};
InvestmentSolutionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _investment_solutions_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvestmentSolutionsPageRoutingModule"]
        ],
        declarations: [_investment_solutions_page__WEBPACK_IMPORTED_MODULE_6__["InvestmentSolutionsPage"]]
    })
], InvestmentSolutionsPageModule);



/***/ }),

/***/ "./src/app/investment-solutions/investment-solutions.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/investment-solutions/investment-solutions.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVzdG1lbnQtc29sdXRpb25zL2ludmVzdG1lbnQtc29sdXRpb25zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/investment-solutions/investment-solutions.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/investment-solutions/investment-solutions.page.ts ***!
  \*******************************************************************/
/*! exports provided: InvestmentSolutionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentSolutionsPage", function() { return InvestmentSolutionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InvestmentSolutionsPage = class InvestmentSolutionsPage {
    constructor() { }
    ngOnInit() {
    }
};
InvestmentSolutionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-investment-solutions',
        template: __webpack_require__(/*! raw-loader!./investment-solutions.page.html */ "./node_modules/raw-loader/index.js!./src/app/investment-solutions/investment-solutions.page.html"),
        styles: [__webpack_require__(/*! ./investment-solutions.page.scss */ "./src/app/investment-solutions/investment-solutions.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InvestmentSolutionsPage);



/***/ })

}]);
//# sourceMappingURL=investment-solutions-investment-solutions-module-es2015.js.map