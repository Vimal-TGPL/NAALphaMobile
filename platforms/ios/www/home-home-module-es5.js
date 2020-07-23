(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outerDiv\">\r\n<ion-card class=\"parentCard\">\r\n    <ion-card-content>\r\n        <div style=\"width: 97%; position: absolute; top: 42%\">\r\n        <div style=\"display: flex; justify-content: center; opacity: 0;align-items: center;\r\n        flex-direction: column;\" id=\"dvSearchBox\">\r\n            <!-- <ion-input type=\"text\" placeholder=\"Ticker or company/ETF name\"  autocomplete=\"on\" style=\"font-size : 12px; height: 30px; border: 1px solid #666; --padding-start: 10px; border-radius: 20px;--background:#ffffff; max-width: 230px; box-shadow: none; width: 250px; --color:#666;\"></ion-input> -->\r\n            <ion-searchbar [(ngModel)]=\"searchText\" style=\"    width: 20%;\r\n            --background: #ffffff;\r\n            border: 1px solid #000000;\r\n            padding: 0px;\r\n            height: 30px;\r\n            border-radius: 20px;\r\n            text-transform: uppercase;\r\n            \" animated=\"false\" autocomplete=\"on\" mode=\"ios\" placeholder=\"Ticker or company/ETF name\" inputmode=\"text\" type=\"text\" (ionChange)=\"onsearchchages($event.target.value)\" [debounce]=\"250\"></ion-searchbar>\r\n            <ion-list style=\"width: 25%; overflow: auto; background: #ffffff; margin-top: 3px; box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12); border-radius: 10px; max-height: 30vh;\" *ngIf=\"filteredCompanies.length != 0\">\r\n              <ion-item lines=\"none\"  style=\"--background: #ffffff;     --padding-start: 10px;\r\n              --padding-end: 10px;\" *ngFor=\"let item of filteredCompanies\" (click)=\"GetSelected(item.isin+'_'+item.indexName)\">\r\n                <div style=\"    width: 100%;\r\n                display: flex;\r\n                flex-direction: column;\">\r\n                  <ion-text style=\"color: #666;\">\r\n                    <p style=\"font-size: 11px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap\">{{item.companyName}} ({{item.ticker}})</p>\r\n                  </ion-text>\r\n                  <ion-text style=\"display: flex;\r\n                  flex-direction: row;\r\n                  justify-content: space-between; \">\r\n                    <p style=\"color: #00b9ff; font-size: 11px; white-space: nowrap;\r\n                    text-overflow: ellipsis;\r\n                    overflow: hidden;\">{{item.indexName}}</p>\r\n                    <p style=\"color: #ffba89; font-size: 11px; white-space: nowrap;\">{{item.country}}</p>\r\n                  </ion-text>\r\n                  \r\n                </div>\r\n                \r\n              </ion-item>\r\n            </ion-list>\r\n        </div>\r\n        <div style=\"display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin-top: 5px; opacity: 0;\" id=\"IndexSelector\" >\r\n          <ion-item style=\"    width: 20%;\r\n          --padding-start: 0px;     --background: #00b9ff;\r\n          color: #ffffff;\r\n   --min-height: 25px;;     border-radius: 20px; \">\r\n            <ion-select id=\"indexSelect\" [(ngModel)]=\"SelIndex\" (ionChange)=\"onIndexSelectClick()\" placeholder=\"Select Index\" style=\"max-width: 100% !important;\r\n            min-width: 100% !important; --padding-top: 0;\r\n    --padding-bottom: 0;\r\n    height: 20px;\r\n    font-size: 14px;\r\n    --padding-start: 10px;\r\n    --padding-end: 10px;\" interface=\"popover\">\r\n              <ion-select-option value=\"Equity Indexes\">Equity Indexes</ion-select-option>\r\n              <ion-select-option value=\"Fixed Income\">Fixed Income</ion-select-option>\r\n              <ion-select-option value=\"NAA Indexes\">NAA Indexes</ion-select-option>\r\n              <ion-select-option value=\"ETFs\">ETFs</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n        <!-- <div>\r\n\r\n        </div> -->\r\n    </div>\r\n    <div style=\"    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\">\r\n        <div style=\"position: absolute;\r\n        z-index: 99;\r\n        top: 0;\r\n        bottom: 0;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\" [ngStyle]=\"{'top': GICSLevel==2 ? '-35%' : '0', 'visibility': GICSLevel != 0 ? 'visible' : 'hidden' }\">\r\n          <ion-card style=\"margin: 0;--background: #ffffff;\r\n          border-radius: 15px;\r\n          color: #00b9ff;\r\n          box-shadow: none;    left: 15%;\">\r\n            <ion-card-content style=\"padding: 3px 17px;\r\n            font-size: 13px;\r\n            white-space: nowrap;\">\r\n              S&P Global Industry Classification Standard\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <div>\r\n          <ion-card *ngIf=\"GICSLevel >= 1\" style=\"left: 50px; display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n          margin: 35px 0px;     width: 17vw;border-radius: 30px; transition: 0.6s; height: 5vh; background: #ffffff;\" (click)=\"onGICSLevelClick(1)\" [ngStyle]=\"{'height': curGICSLev == 1 ? '15vh' : '5vh', 'border': curGICSLev == 1 ? '1px solid #00b9ff': 'none' , 'left': curGICSLev < 1 ? '70px' : '50px'}\">\r\n            <ion-card-content style=\"padding: 0px; display: flex;\r\n             flex-direction: column;  \">\r\n              <div style=\"    display: flex;\r\n              flex-direction: row;\r\n              justify-content: space-between;\r\n              padding: 0 0 0 10px;\r\n              align-items: center;\r\n              width: 100%;\">\r\n                <span style=\"padding: 5px 0 0 5px;\">\r\n                  <p style=\"    color: #666;\r\n                  font-size: 12px;     margin-bottom: 0;\">Global Universe</p>\r\n                  <p style=\"    color: #000000;\r\n                  font-size: 12px;     margin-bottom: 0;\">New Age Alpha</p>\r\n                </span>\r\n                <span>\r\n                  <p style=\"height: 50px;\r\n                  width: 50px;\r\n                  margin-bottom: 0;\r\n                  border-radius: 30px;\r\n                  display: flex;\r\n                  justify-content: center;\r\n                  align-items: center;\" [ngStyle]=\"{'background': getColor(roundofMed(getGlobalMed()*100)),'color':ApplyTextColor(roundofMed(getGlobalMed()*100))}\">{{roundofMed(getGlobalMed()*100)}}</p>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"curGICSLev == 1\">\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">H-Factor</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">Companies</p>\r\n                </span>\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\" *ngFor=\"let item of currentPercentCat\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.Tag}}</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.value}}</p>\r\n                </span>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-card *ngIf=\"GICSLevel >= 2\" style=\"margin: 35px 0px; display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n          left: 25px;     width: 17vw; border-radius: 30px; transition: 0.6s; height: 5vh; background: #ffffff;\" (click)=\"onGICSLevelClick(2)\" [ngStyle]=\"{'height': curGICSLev == 2 ? '15vh' : '5vh', 'border': curGICSLev == 2 ? '1px solid #00b9ff': 'none', 'left': curGICSLev < 2 ? '10px' : '25px'}\">\r\n            <ion-card-content style=\"padding: 0px; display: flex;\r\n             flex-direction: column;\">\r\n              <div style=\"    display: flex;\r\n              flex-direction: row;\r\n              justify-content: space-between;\r\n              padding: 0 0 0 10px;\r\n              align-items: center;\r\n              width: 100%;\">\r\n                <span style=\"padding: 5px 0 0 5px;\">\r\n                  <p style=\"    color: #666;\r\n                  font-size: 12px;     margin-bottom: 0;     line-height: 1.2;\">Index</p>\r\n                  <p style=\"    color: #000000;\r\n                  font-size: 12px;     margin-bottom: 0;     line-height: 1.2;\">{{selIndex.indexName}}</p>\r\n                </span>\r\n                <span>\r\n                  <p style=\"height: 50px;\r\n                  width: 50px;\r\n                  margin-bottom: 0;\r\n                  border-radius: 30px;\r\n                  display: flex;\r\n                  justify-content: center;\r\n                  align-items: center;\" [ngStyle]=\"{'background': getColor(roundofMed(selIndex.Med*100)),'color':ApplyTextColor(roundofMed(selIndex.Med*100))}\">{{roundofMed(selIndex.Med*100)}}</p>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"curGICSLev == 2\">\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">H-Factor</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">Companies</p>\r\n                </span>\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\" *ngFor=\"let item of currentPercentCat\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.Tag}}</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.value}}</p>\r\n                </span>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-card *ngIf=\"GICSLevel >= 3\" style=\"    left: 0px;\r\n          justify-content: center;\r\n          margin: 35px 0px;     width: 17vw; border-radius: 30px; transition: 0.6s; height: 5vh; background: #ffffff;\" (click)=\"onGICSLevelClick(3)\" [ngStyle]=\"{'height': curGICSLev == 3 ? '15vh' : '5vh', 'border': curGICSLev == 3 ? '1px solid #00b9ff': 'none', 'left': curGICSLev < 3 ? '0px' : '0px'}\">\r\n            <ion-card-content style=\"padding: 0; display: flex;\r\n            flex-direction: column;\">\r\n              <div style=\"    display: flex;\r\n              flex-direction: row;\r\n              justify-content: space-between;\r\n              padding: 0 0 0 10px;\r\n              align-items: center;\r\n              width: 100%;\">\r\n                <span style=\"padding: 5px 0 0 5px;\">\r\n                  <p style=\"    color: #666;\r\n                  font-size: 12px;     margin-bottom: 0;     line-height: 1.2;\">Sector</p>\r\n                  <p style=\"    color: #000000;\r\n                  font-size: 12px;     margin-bottom: 0;     line-height: 1.2;\">{{CurSectorList[0].name}}</p>\r\n                </span>\r\n                <span>\r\n                  <p style=\"height: 50px;\r\n                  width: 50px;\r\n                  margin-bottom: 0;\r\n                  border-radius: 30px;\r\n                  display: flex;\r\n                  justify-content: center;\r\n                  align-items: center;\" [ngStyle]=\"{'background': getColor(roundofMed(CurSectorList[0].med*100)),'color':ApplyTextColor(roundofMed(CurSectorList[0].med*100))}\">{{roundofMed(CurSectorList[0].med*100)}}</p>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"curGICSLev == 3\">\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">H-Factor</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">Companies</p>\r\n                </span>\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\" *ngFor=\"let item of currentPercentCat\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.Tag}}</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.value}}</p>\r\n                </span>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n\r\n          <ion-card *ngIf=\"GICSLevel >= 4\" style=\"left: 0px;\r\n          justify-content: center;\r\n          margin: 35px 0px;     width: 17vw; border-radius: 30px; transition: 0.6s; height: 5vh; background: #ffffff;\" (click)=\"onGICSLevelClick(4)\" [ngStyle]=\"{'height': curGICSLev == 4 ? '15vh' : '5vh', 'border': curGICSLev == 4 ? '1px solid #00b9ff': 'none', 'left': curGICSLev < 4 ? '20px' : '0px'}\">\r\n            <ion-card-content style=\"padding: 0; display: flex;\r\n            flex-direction: column;\">\r\n              <div style=\"    display: flex;\r\n              flex-direction: row;\r\n              justify-content: space-between;\r\n              padding: 0 0 0 10px;\r\n              align-items: center;\r\n              width: 100%;\">\r\n                <span style=\"padding: 5px 0 0 5px;\">\r\n                  <p style=\"    color: #666;\r\n                  font-size: 12px;     margin-bottom: 0;     line-height: 1.2;\">Industry</p>\r\n                  <p style=\"    color: #000000;\r\n                  font-size: 12px;     margin-bottom: 0;     line-height: 1.2;\">{{CurSectorList[1].name}}</p>\r\n                </span>\r\n                <span>\r\n                  <p style=\"height: 50px;\r\n                  width: 50px;\r\n                  margin-bottom: 0;\r\n                  border-radius: 30px;\r\n                  display: flex;\r\n                  justify-content: center;\r\n                  align-items: center;\" [ngStyle]=\"{'background': getColor(roundofMed(CurSectorList[1].med*100)),'color':ApplyTextColor(roundofMed(CurSectorList[1].med*100))}\">{{roundofMed(CurSectorList[1].med*100)}}</p>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"curGICSLev == 4\">\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">H-Factor</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">Companies</p>\r\n                </span>\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\" *ngFor=\"let item of currentPercentCat\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.Tag}}</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.value}}</p>\r\n                </span>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n\r\n          <ion-card *ngIf=\"GICSLevel >= 5\" style=\"left: 25px;\r\n          justify-content: center;\r\n          margin: 35px 0px;     width: 17vw; border-radius: 30px; transition: 0.6s; height: 5vh; background: #ffffff;\" (click)=\"onGICSLevelClick(5)\" [ngStyle]=\"{'height': curGICSLev == 5 ? '15vh' : '5vh' , 'border': curGICSLev == 5 ? '1px solid #00b9ff': 'none', 'left': curGICSLev < 5 ? '45px' : '25px'}\">\r\n            <ion-card-content style=\"padding: 0; display: flex;\r\n            flex-direction: column;\">\r\n              <div style=\"    display: flex;\r\n              flex-direction: row;\r\n              justify-content: space-between;\r\n              padding: 0 0 0 10px;\r\n              align-items: center;\r\n              width: 100%;\">\r\n                <span style=\"padding: 5px 0 0 5px;\">\r\n                  <p style=\"    color: #666;\r\n                  font-size: 12px;     margin-bottom: 0;     line-height: 1.2;\">Industry Group</p>\r\n                  <p style=\"    color: #000000;\r\n                  font-size: 12px;     margin-bottom: 0;     line-height: 1.2;\">{{CurSectorList[2].name}}</p>\r\n                </span>\r\n                <span>\r\n                  <p style=\"height: 50px;\r\n                  width: 50px;\r\n                  margin-bottom: 0;\r\n                  border-radius: 30px;\r\n                  display: flex;\r\n                  justify-content: center;\r\n                  align-items: center;\" [ngStyle]=\"{'background': getColor(roundofMed(CurSectorList[2].med*100)),'color':ApplyTextColor(roundofMed(CurSectorList[2].med*100))}\">{{roundofMed(CurSectorList[2].med*100)}}</p>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"curGICSLev == 5\">\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">H-Factor</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">Companies</p>\r\n                </span>\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\" *ngFor=\"let item of currentPercentCat\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.Tag}}</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.value}}</p>\r\n                </span>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n\r\n          <ion-card *ngIf=\"GICSLevel >= 6\" style=\"left: 50px;\r\n          justify-content: center;\r\n          margin: 35px 0px;     width: 17vw; border-radius: 30px; transition: 0.6s; height: 5vh; background: #ffffff;\" (click)=\"onGICSLevelClick(6)\" [ngStyle]=\"{'height': curGICSLev == 6 ? '15vh' : '5vh', 'border': curGICSLev == 6 ? '1px solid #00b9ff': 'none', 'left': curGICSLev < 6 ? '70px' : '50px'}\">\r\n            <ion-card-content style=\"padding: 0; display: flex;\r\n            flex-direction: column;\">\r\n              <div style=\"    display: flex;\r\n              flex-direction: row;\r\n              justify-content: space-between;\r\n              padding: 0 0 0 10px;\r\n              align-items: center;\r\n              width: 100%;\">\r\n                <span style=\"padding: 5px 0 0 5px;\">\r\n                  <p style=\"    color: #666;\r\n                  font-size: 12px;     margin-bottom: 0;     line-height: 1.2;\">Sub Industry</p>\r\n                  <p style=\"    color: #000000;\r\n                  font-size: 12px;     margin-bottom: 0;     line-height: 1.2;\">{{CurSectorList[3].name}}</p>\r\n                </span>\r\n                <span>\r\n                  <p style=\"height: 50px;\r\n                  width: 50px;\r\n                  margin-bottom: 0;\r\n                  border-radius: 30px;\r\n                  display: flex;\r\n                  justify-content: center;\r\n                  align-items: center;\" [ngStyle]=\"{'background': getColor(roundofMed(CurSectorList[3].med*100)),'color':ApplyTextColor(roundofMed(CurSectorList[3].med*100))}\">{{roundofMed(CurSectorList[3].med*100)}}</p>\r\n                </span>\r\n              </div>\r\n              <div *ngIf=\"curGICSLev == 6\">\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">H-Factor</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">Companies</p>\r\n                </span>\r\n                <span style=\"display: flex;\r\n                flex-direction: row;\r\n                justify-content: space-around;\" *ngFor=\"let item of currentPercentCat\">\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.Tag}}</p>\r\n                  <p style=\"    margin-bottom: 0;\r\n                  font-size: 12px;\r\n                  color: #000000;\">{{item.value}}</p>\r\n                </span>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </div>\r\n        </div>\r\n        \r\n        <svg preserveAspectRatio=\"xMidYMid meet\" id=\"svgHContainer1\" viewBox=\"375 45 870 910\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n            <g id=\"gchart\" transform=\"translate(810 ,500)\"></g>\r\n            <g class=\"Homecenter\" style=\"opacity:0;\" transform=\"translate(810,370)\">\r\n                <text y=\"40\" style=\"fill:#00b9ff;text-anchor:middle;text-align:center;font-size:25px;\" class=\"grey-16 blue-heading\">\r\n                  <tspan x=\"0\">H-Factor System</tspan>\r\n                </text>\r\n                <g id=\"selectedscore\" transform=\"translate(0,15)\">\r\n                  <text id=\"currentstock\" x=\"-65\" dy=\"130\" fill=\"#00b9ff\" style=\"font-size: 16px;display: none;\">Your Current Stock:</text>\r\n                  <text class=\"homeScore1\" x=\"-75\" dy=\"155\" fill=\"rgb(111, 193, 85)\" style=\"font-size: 13px; font-weight: bold; display: block;\"></text>\r\n                  <text class=\"homeScore2\" x=\"-33\" dy=\"200\" fill=\"rgb(111, 193, 85)\" style=\"font-size: 35px;display: block;font-family:Open Sans Extrabold\"></text>\r\n                  <!-- <rect class=\"clsCompare\" x=\"-83\" y=\"190\" height=\"20\" width=\"75\" fill=\"#00b9ff\" text-anchor=\"end\" rx=\"9\" (click)=\"CompareClick()\"></rect> -->\r\n                  <!-- <text class=\"clsCompare\" x=\"-70\" y=\"203\" style=\"font-size: 10px;fill: rgb(255, 255, 255);font-weight: normal;cursor:pointer;\" (click)=\"CompareClick()\">Compare</text> -->\r\n                  <!-- <rect class=\"clsSetAlert\" x=\"5\" y=\"190\" height=\"20\" width=\"75\" fill=\"#00b9ff\" text-anchor=\"end\" rx=\"9\" (click)=\"OpenAlertMod()\"></rect> -->\r\n                  <!-- <text class=\"clsSetAlert\" x=\"21\" y=\"203\" style=\"font-size: 10px; fill: rgb(255, 255, 255);cursor:pointer;\" (click)=\"OpenAlertMod()\">Set Alert</text> -->\r\n                </g>\r\n              </g>\r\n        </svg>\r\n\r\n        <div id=\"RightDiv\" style=\"position: absolute;\r\n        right: 2%;\r\n        top: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    transition: 1s;\r\n    align-items: center; opacity: 0;\">\r\n          <ion-card id='rightParentcard' style=\"margin: 0;\r\n          width: calc(100vh - 780px); --background: #ffffff; border-radius: 20px; transition: 1s;\" [ngStyle]=\"{'height': showsortList ? 'calc(100vh - 300px)' : showETFSort ? 'calc(100vh - 320px)' : 'calc(100vh - 420px)'}\">\r\n          <!-- 'height': showETFSort ? 'calc(100vh - 320px)' : showsortList ? 'calc(100vh - 300px)' : 'calc(100vh - 420px)' -->\r\n          <ion-card-content *ngIf=\"showCompanyList\" style=\"padding: 0;\">\r\n            <div>\r\n              <div style=\"    display: flex;\r\n              flex-direction: row; margin-top: 20px;\">\r\n                <span style=\"padding: 5px;\r\n                min-width: 40px;\r\n                max-width: 40px;\r\n                min-height: 40px;\r\n                max-height: 40px;\r\n                font-size: 14px;\r\n                border-radius: 20px;\r\n                display: flex;\r\n                justify-content: center;\r\n                align-items: center;\r\n                margin-right: 10px;\" [ngStyle]=\"{'background': getColor(roundofMed(selIndex.Med*100)),'color':ApplyTextColor(roundofMed(selIndex.Med*100))}\">{{roundofMed(selIndex.Med*100)}}</span>\r\n                <div>\r\n                  <p style=\"color: #666666;\">Index</p>\r\n                  <p style=\"color: #000000; line-height: 1;\">{{selIndex.indexName}}</p>\r\n                </div>\r\n              </div>\r\n              <hr style=\"height: 0.5px;\r\n              background: #666666;     opacity: 0.5;\">\r\n              <div style=\"padding: 0 10px; height: calc( 100vh - 600px );\r\n              overflow: auto;\">\r\n                <ion-item lines='none' *ngFor=\"let item of SelCompanyData\" (click)=\"oncomapnyclick(item)\" style=\"    --padding-start: 0px;\r\n                --padding-end: 0px; --background: #ffffff;\"  >\r\n                  <div style=\"width: 100%;     display: flex;     padding: 5px 5px;\r\n                  border-radius: 25px;\r\n                  flex-direction: row;\r\n                  align-items: center;\" [ngStyle]=\"{'background': getColor(roundofMed(item.scores*100)),'color':ApplyTextColor(roundofMed(item.scores*100))}\">\r\n                    <span style=\"font-size: 12px;\">{{unsortedSelCompanyData.indexOf(item)+1}}</span>\r\n                    <div style=\"width: 100%; padding:0 5px; \">\r\n                      <div style=\"    display: flex;\r\n                      flex-direction: row;\r\n                      height: 15px;\r\n                      justify-content: space-between;\">\r\n                        <p style=\"margin-bottom: 0px; font-size: 12px; overflow: hidden;\r\n                        text-overflow: ellipsis;\r\n                        white-space: nowrap;\r\n                        width: 120px;\">{{item.companyName}}</p>\r\n                        <p style=\"margin-bottom: 0px; font-size: 12px; background: #ffffff;\r\n                        padding: 0 8px;\r\n                        border-radius: 10px;\" [ngStyle]=\"{'color': getpercentColor(roundofMed(item.scores*100))}\">{{roundofMed(item.scores*100)}}%</p>\r\n                      </div>\r\n                      <div style=\"    display: flex;\r\n                      flex-direction: row;\r\n                      height: 15px;\r\n                      justify-content: space-between;\">\r\n                        <p style=\"font-size: 12px;\">{{item.ticker}}</p>\r\n                        <p style=\"font-size: 12px;\" *ngIf=\"item.price != null\">{{item.currency}} {{item.price}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ion-item>\r\n              </div>\r\n              <hr style=\"height: 1px;\r\n              background: #666666;\r\n              opacity: 0.5;    \">\r\n              <div style=\"padding: 0 5px 0 15px; display: flex; flex-direction: row; justify-content: space-between; align-items: center;\" (click)=\"onsorttabClick()\">\r\n                <div style=\"display: flex; flex-direction: column;\" >\r\n                  <span style=\"color: #666; font-size: 12px;\">Sort By</span>\r\n                  <span style=\"    font-size: 14px;\r\n                  color: #000000;\">{{selSortOrder}}</span>\r\n              </div>\r\n              \r\n              <ion-icon *ngIf=\"!showsortList\" name=\"arrow-dropdown-circle\" style=\" height: 35px;\r\n              width: 35px;\r\n              color: #dddddd;\"></ion-icon>\r\n              <ion-icon *ngIf=\"showsortList\" name=\"arrow-dropup-circle\" style=\" height: 35px;\r\n              width: 35px;\r\n              color: #00b9ff;\"></ion-icon>\r\n            </div>\r\n            <hr style=\"height: 1px;\r\n            background: #666666;\r\n            opacity: 0.5; margin-bottom: 0;\">\r\n            <div *ngIf=\"showsortList\" style=\"height: calc(100vh - 875px); overflow: auto; padding: 0 10px 0 15px;\">\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onsortClick('CN_ASC')\">Company Name (ascending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onsortClick('CN_DES')\">Company Name (descending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onsortClick('HF_ASC')\">H-Factor Score (ascending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onsortClick('HF_DES')\">H-Factor Score (descending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onsortClick('T_ASC')\">Ticker (ascending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onsortClick('T_DES')\">Ticker (descending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onsortClick('P_ASC')\">Price (ascending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onsortClick('P_DES')\">Price (descending)</p>\r\n            </div>\r\n            <div *ngIf=\"!showsortList\" style=\"padding: 0 15px;\">\r\n              <span style=\"    color: #000000;\r\n              font-size: 14px;\">Total Companies : {{SelCompanyData.length}}</span>\r\n            </div>\r\n            </div>\r\n            \r\n          </ion-card-content>\r\n            <ion-card-content *ngIf=\"showIndexList\" style=\"padding: 0px;\">\r\n              <h1 style=\"margin: 15px 15px 5px 15px;\r\n              font-size: 16px;\r\n              color: #000000;\">Equity Indexes</h1>\r\n              <p (click)=\"onIndexBackClick()\" style=\"margin: 5px 15px; display: flex;\r\n              flex-direction: row;\r\n              align-items: baseline; color: #00b9ff;\"><img src=\"../../../assets/images/backward.svg\" alt=\"Back\" style=\"height: 12px; margin-right: 5px;\r\n                width: 12px;\">{{selCountry.Country}}</p>\r\n                <ion-item *ngFor=\"let item of selIndexList\" (click)=\"onIndexClick(item)\" lines='none' style=\"margin: 5px 0;\r\n                --background: #ffffff;\">\r\n                  <div style=\"    display: flex;\r\n                  flex-direction: row; align-items: center;\">\r\n                    <span style=\"padding: 5px;\r\n                    width: 40px;\r\n                    height: 40px;\r\n                    font-size: 14px;\r\n                    border-radius: 20px;\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n                    margin-right: 10px;\" [ngStyle]=\"{'background': getColor(roundofMed(item.Med*100)),'color':ApplyTextColor(roundofMed(item.Med*100))}\">{{roundofMed(item.Med*100)}}</span>\r\n                    <ion-text style=\"color: #000000;\">\r\n                      <p >{{item.indexName}}</p>\r\n                    </ion-text>\r\n                  </div>\r\n                </ion-item>\r\n            </ion-card-content>\r\n            <ion-card-content *ngIf=\"SelIndex == 'Equity Indexes' && showCountryList\" style=\"padding: 0;\">\r\n              <h1 style=\"margin: 15px 15px;\r\n              font-size: 16px;\r\n              color: #000000;\">Equity Indexes</h1>\r\n             <ion-item  *ngFor=\"let item of countryList\" (click)=\"onCountryClick(item)\" lines='none' detail='true' style=\"       margin: 5px 0;\r\n             --background: #ffffff;\">\r\n               <div style=\"    display: flex;\r\n               flex-direction: row; align-items: center;\">\r\n               <span style=\"padding: 5px;\r\n    width: 40px;\r\n    height: 40px;\r\n    font-size: 14px;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-right: 10px;\" [ngStyle]=\"{'background': getColor(roundofMed(item.Med*100)),'color':ApplyTextColor(roundofMed(item.Med*100))}\">{{roundofMed(item.Med*100)}}</span>\r\n                <ion-text style=\"color: #000000;\">\r\n                  <p >{{item.Country}}</p>\r\n                </ion-text></div>\r\n              </ion-item>\r\n            </ion-card-content>\r\n\r\n            <ion-card-content *ngIf=\"SelIndex == 'Fixed Income' && showFICountry\" style=\"padding: 0;\">\r\n              <h1 style=\"margin: 15px 15px;\r\n              font-size: 16px;\r\n              color: #000000;\">Fixed Income</h1>\r\n              <ion-item  *ngFor=\"let item of FICountryList\" (click)=\"onFICountryClick(item)\" lines='none' detail='true' style=\"       margin: 5px 0;\r\n              --background: #ffffff;\">\r\n                <div style=\"    display: flex;\r\n                flex-direction: row; align-items: center;\">\r\n                <span style=\"padding: 5px;\r\n     width: 40px;\r\n     height: 40px;\r\n     font-size: 14px;\r\n     border-radius: 20px;\r\n     display: flex;\r\n     align-items: center;\r\n     margin-right: 10px;\" [ngStyle]=\"{'background': getColor(FixedIncomeData[item].med),'color':ApplyTextColor(FixedIncomeData[item].med)}\">{{FixedIncomeData[item].med}}</span>\r\n                 <ion-text style=\"color: #000000;\">\r\n                   <p >{{item}}</p>\r\n                 </ion-text></div>\r\n               </ion-item>\r\n            </ion-card-content>\r\n\r\n            <ion-card-content *ngIf=\"showFiIndexList\" style=\"padding: 0px;\">\r\n              <h1 style=\"margin: 15px 15px 5px 15px;\r\n              font-size: 16px;\r\n              color: #000000;\">Fixed Income</h1>\r\n              <p (click)=\"onFIIndexBackClick()\" style=\"margin: 5px 15px; display: flex;\r\n              flex-direction: row;\r\n              align-items: baseline; color: #00b9ff;\"><img src=\"../../../assets/images/backward.svg\" alt=\"Back\" style=\"height: 12px; margin-right: 5px;\r\n                width: 12px;\">{{selCountry}}</p>\r\n                <ion-item *ngFor=\"let item of FIselCatogaryList\" (click)=\"onFIIndexClick(item)\" lines='none' style=\"margin: 5px 0;\r\n                --background: #ffffff;\">\r\n                  <div style=\"    display: flex;\r\n                  flex-direction: row; align-items: center;\">\r\n                    <span style=\"padding: 5px;\r\n                    width: 40px;\r\n                    height: 40px;\r\n                    font-size: 14px;\r\n                    border-radius: 20px;\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n                    margin-right: 10px;\" [ngStyle]=\"{'background': getColor(roundofMed(item.medianCont*100)),'color':ApplyTextColor(roundofMed(item.medianCont*100))}\">{{roundofMed(item.medianCont*100)}}</span>\r\n                    <ion-text style=\"color: #000000;\">\r\n                      <p>{{item.category == 'HY'?'High Yield':'Investment Grade'}}</p>\r\n                    </ion-text>\r\n                  </div>\r\n                </ion-item>\r\n            </ion-card-content>\r\n\r\n            <ion-card-content *ngIf=\"SelIndex == 'NAA Indexes' && showNaaIndex\" style=\"padding: 0px;\">\r\n              <h1 style=\"margin: 15px 15px 15px 15px;\r\n              font-size: 16px;\r\n              color: #000000;\">NAA Indexes</h1>\r\n              <ion-item *ngFor=\"let item of NAAIndexList\" (click)=\"onNAAIndexClick(item)\" lines='none' style=\"margin: 5px 0;\r\n              --background: #ffffff;\">\r\n                <div style=\"    display: flex;\r\n                flex-direction: row; align-items: center;\">\r\n                  <span style=\"padding: 5px;\r\n                  width: 40px;\r\n                  height: 40px;\r\n                  font-size: 14px;\r\n                  border-radius: 20px;\r\n                  display: flex;\r\n                  justify-content: center;\r\n                  align-items: center;\r\n                  margin-right: 10px;\" [ngStyle]=\"{'background': getColor(item.med),'color':ApplyTextColor(item.med)}\">{{item.med}}</span>\r\n                  <ion-text style=\"color: #000000;\">\r\n                    <p>{{replacestr(item.indexName)}}</p>\r\n                  </ion-text>\r\n                </div>\r\n              </ion-item>\r\n            </ion-card-content>\r\n\r\n            <ion-card-content *ngIf=\"SelIndex == 'ETFs' && showETFCategories\" style=\"padding: 0px;\">\r\n              <h1 style=\"margin: 15px 15px 15px 15px;\r\n              font-size: 16px;\r\n              color: #000000;\">Exchange Traded Funds</h1>\r\n              <ion-item *ngFor=\"let item of ETFCategories\" (click)=\"onETFCatClick(item)\" lines='none' detail='true' style=\"margin: 5px 0;\r\n              --background: #ffffff;\">\r\n                <div style=\"    display: flex;\r\n                flex-direction: row; align-items: center;\">\r\n                  <span style=\"padding: 5px;\r\n                  width: 40px;\r\n                  height: 40px;\r\n                  font-size: 14px;\r\n                  border-radius: 20px;\r\n                  display: flex;\r\n                  justify-content: center;\r\n                  align-items: center;\r\n                  margin-right: 10px;\" [ngStyle]=\"{'background': getColor(GetETFMed(item)),'color':ApplyTextColor(GetETFMed(item))}\">{{GetETFMed(item)}}</span>\r\n                  <ion-text style=\"color: #000000;\">\r\n                    <p>{{item}}</p>\r\n                  </ion-text>\r\n                </div>\r\n              </ion-item>\r\n            </ion-card-content>\r\n\r\n            <ion-card-content *ngIf=\"showETFIndex\" style=\"padding: 0px;\">\r\n              <h1 style=\"margin: 15px 15px 5px 15px;\r\n              font-size: 16px;\r\n              color: #000000;\">Exchange Traded Funds</h1>\r\n              <p (click)=\"onETFBackClick()\" style=\"margin: 5px 15px; display: flex;\r\n              flex-direction: row;\r\n              align-items: baseline; color: #00b9ff;\"><img src=\"../../../assets/images/backward.svg\" alt=\"Back\" style=\"height: 12px; margin-right: 5px;\r\n                width: 12px;\">{{selETFCat}}</p>\r\n                <div style=\"height: calc(100vh - 550px);\r\n                overflow: auto;\">\r\n                <ion-item *ngFor=\"let item of SelETFIndexList\" (click)=\"GetETFHoldingsData(item)\" lines='none' style=\"margin: 5px 0;\r\n                --background: #ffffff;\r\n                --padding-end: 10px;\r\n                --inner-padding-end: 0px;\">\r\n                  <div style=\"    display: flex;\r\n                  flex-direction: row; align-items: center;\">\r\n                    <span style=\"padding: 5px;\r\n                    min-width: 40px;\r\n                    max-width: 40px;\r\n                    min-height: 40px;\r\n                    max-height: 40px;\r\n                    font-size: 14px;\r\n                    border-radius: 20px;\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n                    margin-right: 10px;\" [ngStyle]=\"{'background': getColor(roundofMed(item.medianCont*100)),'color':ApplyTextColor(roundofMed(item.medianCont*100))}\">{{roundofMed(item.medianCont*100)}}</span>\r\n                    <ion-text style=\"color: #000000;\">\r\n                      <p style=\"    line-height: 1.2; font-size: 12px;\">{{item.etfName}} ({{item.ticker}})</p>\r\n                    </ion-text>\r\n                  </div>\r\n                </ion-item>\r\n              </div>\r\n              <hr style=\"height: 1px;\r\n              background: #666666;\r\n              opacity: 0.5;    \">\r\n              <div style=\"display: flex;\r\n              flex-direction: row;\r\n              justify-content: space-between;\r\n              margin: 0 10px 0 15px;\" (click)=\"onETFIndSortTabClick()\">\r\n                <div style=\"display: flex; flex-direction: column;\">\r\n                <p style=\"font-size:12px; color: #666;\">Sort By</p>\r\n                <p style=\"font-size:12px; color: #000000;\">{{SelETFSortOrder}}</p>\r\n              </div>\r\n              <span>\r\n                <ion-icon *ngIf=\"!showETFSort\" name=\"arrow-dropdown-circle\" style=\" height: 35px;\r\n              width: 35px;\r\n              color: #dddddd;\"></ion-icon>\r\n              <ion-icon *ngIf=\"showETFSort\" name=\"arrow-dropup-circle\" style=\" height: 35px;\r\n              width: 35px;\r\n              color: #00b9ff;\"></ion-icon>\r\n              </span>\r\n              </div>\r\n              <div *ngIf=\"showETFSort\" style=\"padding: 0 15px;\r\n              height: calc(100vh - 925px);\r\n              overflow: auto;\">\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onETFIndsortClick('ETF_ASC')\">ETF Name (ascending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onETFIndsortClick('ETF_DES')\">ETF Name (descending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onETFIndsortClick('HF_ASC')\">H-Factor Score (ascending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onETFIndsortClick('HF_DES')\">H-Factor Score (descending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onETFIndsortClick('T_ASC')\">Ticker (ascending)</p>\r\n              <p style=\"margin: 10px 0; color: #000000;\" (click)=\"onETFIndsortClick('T_DES')\">Ticker (descending)</p>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </div>\r\n      </div>\r\n        <div *ngIf=\"showLoader\" style=\"    position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        left: 0;\r\n        right: 0;\r\n        z-index: 99;\r\n        top: 0;\r\n        bottom: 0;\r\n        background-color: rgba(211, 216, 220, 0.60);\r\n        display: flex;\r\n    justify-content: center;\r\n    align-items: center;\">\r\n        <img src=\"../../../assets/images/NAA.gif\" alt=\"loader\" style=\"    height: 50px;\r\n        width: 50px;\">\r\n        </div>\r\n    </ion-card-content>\r\n</ion-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- navBar start -->\r\n<ion-header class=\"ion-text-center\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" *ngIf=\"mobile\">\r\n      <ion-icon style=\"color:#ffffff; height: 20px; width: 20px; padding: 10px;\" (click)=\"onSortClick()\" name = 'funnel' *ngIf=\"!showFilter\"></ion-icon>\r\n    </ion-buttons>\r\n    <div class=\"header-Logo\" [ngClass]=\"{'ipad_Logo': !mobile}\">\r\n      <img src=\"../../assets/images/NewAgeAlpha-logo.svg\" alt=\"NewAgeAlpha\" width=\"auto\"\r\n        [ngStyle]=\"{height: mobile? '25px':'35px'}\">\r\n    </div>\r\n    <div *ngIf=\"!mobile\" style=\"position: absolute; top: 10px; right: 25px;\">\r\n      <div style=\"display: flex; flex-direction: row;\">\r\n        <div class=\"avatar\" (click)=\"profilePopover($event)\">\r\n          <img src=\"../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- navBar End -->\r\n\r\n<!--Mobile Body -->\r\n<ion-content id=\"parent-content\" class=\"overflowOnlyLandscape\" *ngIf=\"mobile\">\r\n  <div>\r\n    <!-- SearchBar start -->\r\n    <div class=\"search-Outer-Div\">\r\n      <div class=\"searchDiv\">\r\n        <ion-item class=\"searchItem\" lines=\"none\">\r\n          \r\n          <ion-label style=\"    margin: 2px 0px;\r\n          font-size: 14px;\r\n          align-items: center;\r\n          justify-content: center;\r\n          display: flex;\r\n          color: #888;\">\r\n            <ion-icon name=\"search\"></ion-icon>\r\n            <p *ngIf=\"this.SelTab !== 'ETF' && this.SelTab !== 'ETFChild'\">Ticker or company name</p>\r\n            <p *ngIf=\"this.SelTab == 'ETF' || this.SelTab == 'ETFChild'\">ETF ticker or name</p></ion-label>\r\n          <ionic-selectable class=\"homeSearch\" #SearchComponent [(ngModel)]=\"searchSel\" [items]=\"LoadsearchList\"\r\n            itemTextField=\"companyName\" [canSearch]=\"true\" (onSearch)=\"searchCompany($event);this.searchSel='';\"\r\n            (onSelect)=\"onSearchSelect($event.item)\" [hasInfiniteScroll]=\"true\"\r\n            (onInfiniteScroll)=\"getMoreSearchComp($event)\"\r\n            [searchFailText]=\"'Sorry! we could not find any results matching.'\"\r\n            [isMultiple]=\"false\"\r\n            (onClose)=\"onSearchClose($event)\">\r\n            <ng-template ionicSelectableTitleTemplate>\r\n\r\n              <p style=\"    font-family: Open Sans SemiBold;\r\n              color: #666;\r\n              font-size: 14px;\" *ngIf=\"this.SelTab !== 'ETF' && this.SelTab !== 'ETFChild'\">Ticker or company name</p>\r\n\r\n              <p style=\"    font-family: Open Sans SemiBold;\r\n              color: #666;\r\n              font-size: 14px;\" *ngIf=\"this.SelTab == 'ETF' || this.SelTab == 'ETFChild'\">ETF ticker or name</p>\r\n\r\n              </ng-template>\r\n            <ng-template ionicSelectableItemTemplate let-LoadsearchList=\"item\">\r\n              <div style=\"width: 100%;\">\r\n                <span style=\" font-size: 12px; font-family: Open Sans Regular; color: #666666;\">{{LoadsearchList.companyName}} ({{LoadsearchList.ticker}})</span>\r\n                <br>\r\n                <span style=\"float: left;\r\n                font-size: 9px;\r\n                color: #00b9ff;\r\n                text-transform: uppercase;\r\n                font-family: Open Sans Regular;\">{{LoadsearchList.indexName}}</span>\r\n                <span style=\"float: right;\r\n                font-size: 10px; font-family: Open Sans Regular;\r\n                color: #ffba89;\r\n                text-transform: uppercase;\">{{LoadsearchList.country}}</span>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template ionicSelectableItemIconTemplate let-port=\"item\" let-isPortSelected=\"isItemSelected\">\r\n              <ion-icon style=\"display: none;\" [name]=\"isPortSelected ? 'checkmark-circle' : 'radio-button-off'\"\r\n                [color]=\"isPortSelected ? 'primary' : null\">\r\n              </ion-icon>\r\n            </ng-template>\r\n            <ng-template ionicSelectableCloseButtonTemplate>\r\n              <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n            </ng-template>\r\n            <ng-template ionicSelectableSearchFailTemplate forceOverscroll=true>\r\n\r\n              <div style=\"height: calc(100vh - 196px);\r\n              display: flex;\r\n              /* justify-content: center; */\r\n              align-items: center;\r\n              padding-top: 100px;\r\n              flex-direction: column;\r\n              position: fixed;\r\n              left: 0;\r\n              right: 0;\" *ngIf=\"searchedtext.length > 0\">\r\n                <img src=\"../../assets/images/NAA_search_notfound.png\" alt=\"Search Not Found\" height=\"300\">\r\n                <p style=\"font-size: 20px;\r\n                color: #0569bd;\r\n                margin: 15px 5px 5px 5px; font-family: Open Sans SemiBold;\">Sorry, no result found</p>\r\n                <p style=\"width: 300px;\r\n                text-align: center;\r\n                margin: 5px; \r\n                color: #666;\r\n                font-family: Open Sans Regular;\r\n            font-size: 14px;\">What you searched was unfortunately not found or doesn’t exist.</p>\r\n              </div>\r\n\r\n              <div style=\"height: calc(100vh - 196px);\r\n              display: flex;\r\n              /* justify-content: center; */\r\n              align-items: center;\r\n              padding-top: 100px;\r\n              flex-direction: column;\" *ngIf=\"searchedtext.length == 0\">\r\n              <img src=\"../../assets/images/NAA_Searching.svg\" alt=\"Search\" style=\"    height: 80px;\r\n              margin-bottom: 50px;\">\r\n              <h1 style=\"    color: #666;\r\n              font-family: Open Sans SemiBold;\r\n              padding: 0 50px;\r\n              text-align: center;\r\n              font-size: 20px;\r\n              color: #0569bd;\">What Are you searching for?</h1>\r\n            <p style=\"    color: #666;\r\n            padding: 0 50px;\r\n            text-align: center;\r\n            font-family: Open Sans Regular;\r\n            font-size: 14px;\">Search for your favorite thing or find similar results in this area?</p>\r\n          </div>\r\n            </ng-template>\r\n          </ionic-selectable>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n    <!-- SearchBar End-->\r\n\r\n    <!-- Stock Banner Start -->\r\n    <div>\r\n      <ion-card class=\"stocks-card\">\r\n        <ion-card-content style=\"padding: 2px 0px 3px 0px;\">\r\n          <div *ngIf=\"stockCollapse\" class=\"arrow\" (click)=\"onStockDivClick()\">\r\n            <span></span>\r\n          </div>\r\n          <div class=\"stock-header\" (click)=\"onStockDivClick()\">\r\n            <span class=\"stock-span\">Stocks</span>\r\n            <span class=\"stock-span\"><span style=\"display: flex;\" *ngIf=\"SelSearchObj!=''\"><span style=\"white-space: nowrap;\r\n              width: 90px;\r\n              display: inline-block;\r\n              text-overflow: ellipsis;\r\n              overflow: hidden;\">{{SelSearchObj.companyName}}</span><span>({{SelSearchObj.ticker}})</span></span></span>\r\n          </div>\r\n          <div [ngClass]=\"{'stock-collapse': stockCollapse}\">\r\n            <ion-grid fixed>\r\n              <ion-row>\r\n                <ion-col size=\"6\" class=\"col-first\">\r\n                  <div class=\"image-div\">\r\n                    <img *ngIf=\"selComp==null\" src=\"../../assets/images/Stock_Mobile_View.svg\" alt=\"img\" class=\"image0\">\r\n                    <!-- D3 Tool Start -->\r\n                    <div *ngIf=\"selComp!=null\" class=\"Banner_HomeChartcontainer\">\r\n                      <svg preserveAspectRatio=\"xMidYMid meet\" viewBox=\"30 110 750 710\" width=\"100%\" height=\"100%\"\r\n                        xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n                        <g id=\"M_gchart\" transform=\"translate(400 ,445)\"></g>\r\n                      </svg>\r\n                    </div>\r\n                    <!-- D3 Tool End -->\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"selected-stock-details\">\r\n                  <div style=\"    max-width: 150px;\r\n                  min-width: 150px;\">\r\n                    <ion-text>\r\n                      <p class=\"selected-stock-score\" [style.color]=\"getColor(roundValue(SelSearchObj.scores*100))\"\r\n                        *ngIf=\"SelSearchObj!='' && SelSearchObj.indexName!='ETF'\">{{roundValue(SelSearchObj.scores*100)}}%</p>\r\n                      <p class=\"selected-stock-comp\" [style.color]=\"getColor(roundValue(SelSearchObj.scores*100))\"\r\n                        *ngIf=\"SelSearchObj!='' && SelSearchObj.indexName!='ETF'\">{{SelSearchObj.companyName}}\r\n                        ({{SelSearchObj.ticker}})</p>\r\n                      <p class=\"selected-stock-score\" [style.color]=\"getColor(roundValue(SelSearchObj.scores*100))\"\r\n                        *ngIf=\"SelSearchObj!='' && SelSearchObj.indexName=='ETF' && EtfMed!='' \">{{EtfMed}}%</p>\r\n                      <p class=\"selected-stock-comp\" [style.color]=\"getColor(roundValue(SelSearchObj.scores*100))\"\r\n                        *ngIf=\"SelSearchObj!='' && SelSearchObj.indexName=='ETF'\">{{SelSearchObj.companyName}}\r\n                        ({{SelSearchObj.ticker}})</p>\r\n                        <div style=\"display: flex;\r\n                        flex-direction: row;\r\n                        justify-content: space-around;\r\n                        align-items: center;\r\n                        margin-top: 10px;\"><p *ngIf=\"SelSearchObj!=''\" style=\"display: flex;\r\n                          flex-direction: column;\r\n                          justify-content: center;\r\n                          align-items: center;\r\n                          font-size: 12px;\r\n                          font-family: Open Sans SemiBold;\"><span style=\"color: #666;\">{{SelSearchObj.currency}} {{roundValue(SelSearchObj.price.toFixed(1))}}</span> <span style=\"color: #00b9ff; font-family: Open Sans Regular;\">Price</span></p>\r\n                          <p *ngIf=\"SelSearchObj!=''\" style=\"display: flex;\r\n                          flex-direction: column;\r\n                          justify-content: center;\r\n                          align-items: center;\r\n                          font-size: 12px;\r\n                          font-family: Open Sans SemiBold;\"><span style=\"color: #666;\">{{getMaketCap(SelSearchObj.marketCap).toFixed(1)}}M</span> <span style=\"color: #00b9ff; font-family: Open Sans Regular;\">Market Cap.</span></p></div>\r\n                      \r\n                    </ion-text>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <!-- Stock Banner Start -->\r\n\r\n    <!-- Slides/Carousel Start-->\r\n    <div id=\"SlideDiv\">\r\n      <ion-slides id=\"pageslider\" [options]=\"slides\" slidesPerView=\"1\" spaceBetween=\"1\" mode='md' loop=\"true\"\r\n        (ionSlideDidChange)=\"onSlideChange($event)\">\r\n\r\n        <!-- GICS Slide Start -->\r\n        <ion-slide>\r\n          <div class=\"slider-div\">\r\n            <div class=\"slider-div\">\r\n              <ion-card class=\"title-card\">\r\n                <ion-card-content class=\"title-card-content\">\r\n                  <ion-text class=\"title-text\">\r\n                    <p class=\"title-p\">S&P Global Industry Classification System</p>\r\n                  </ion-text>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </div>\r\n\r\n            <!-- GICS DropDown Start -->\r\n            <div class=\"slider-div\">\r\n              <ion-card class=\"title-card\">\r\n                <ion-card-content class=\"subIndex-card-content\">\r\n                  <div class=\"subIndex-div\">\r\n                    <span id=\"subIndex-circle\" class=\"subIndex-circle\">{{stockMed}}</span>\r\n                    <ion-button class=\"header-btn\" [disabled]=\"sectorList==''\"\r\n                      [ngClass]=\"{'stockicon-active': stockIndexShow}\" (click)=\"onStockBtnClick()\">\r\n                      <div class=\"SubIndex-header-content\">\r\n                        <span class=\"subIndex-header-title\">{{SelSecLevTitle}}<span *ngIf=\"SelSearchObj!=''\"> (<span\r\n                              class=\"indName\">{{SelSearchObj.hasOwnProperty('indexType')? SelSearchObj.etfName : SelSearchObj.hasOwnProperty('FIName')? SelSearchObj.FIName : SelSearchObj.indexName}}</span>)</span></span>\r\n                        <span class=\"subIndex-header-subtitle\">{{selSector.name}}</span>\r\n                      </div>\r\n                      <ion-icon [name]=\"stockIcon\" class=\"subindex-icon\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </div>\r\n            <!-- GICS DropDown End -->\r\n\r\n            <!-- Stock Company start -->\r\n            <div >\r\n              <ion-card class=\"stockCompList-card\" *ngIf=\"stockIndexShow==false\">\r\n\r\n                <!-- Stock On Begin Start -->\r\n                <ion-card-content *ngIf=\"selSectorComp==''\" class=\"stockcomplist-card-content\"\r\n                  [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n                  <p class=\"test1\" style=\"width: 62%;\">\r\n                    To begin, use the Search Bar located at the top of your screen to select a stock.\r\n                  </p>\r\n                </ion-card-content>\r\n                <!-- Stock On Begin End -->\r\n\r\n                <!-- Stock Company List Start-->\r\n                <ion-card-content  style=\" padding: 0px;\" id='stockCompanyDiv' *ngIf=\"selSectorComp!=''\">\r\n\r\n\r\n                  <ion-content class=\"stockcomplist-card-content\"  [ngClass]=\"{'companycard-extend': stockCollapse , 'foceScrollOverflow': SelSecLevTitle=='Global'}\"\r\n                    forceOverscroll=\"true\" id=\"innerContent\"\r\n                    style=\"--overflow: hidden; --background:white;\">\r\n                    <div scrollY=\"true\" id=\"sectorscrollDiv\"\r\n                      [ngClass]=\"{'stock_companycard-extend': stockCollapse, 'company-list-inner-div': SelSecLevTitle!='Global'}\">\r\n                      <ion-list class=\"company-list\">\r\n                        <ion-item lines='none' [id]=getIDReplace(item.companyName) class=\"company-list-item\"\r\n                          *ngFor=\"let item of selSectorComp\">\r\n                          <div class=\"company-label-outer-div\" [ngClass]=\"{'comp-sel': selComp==item.companyName}\"\r\n                            (click)=\"onCompanyClick(item)\" (press)=\"onlongpress(item)\" [style.background]=\"getColor(roundValue(item.scores*100))\"\r\n                            [style.color]=\"ApplyTextColor(roundValue(item.scores*100))\">\r\n                            <ion-label class=\"company-label\" style=\"    padding: 0px;\">\r\n                              <div style=\"    display: flex;\r\n                              flex-direction: row;\r\n                              align-items: center;\">\r\n                                <!-- <span class=\"s-no\">{{unsortselSectorComp.indexOf(item)+1}}</span> -->\r\n                                <span style=\"    height: 45px;\r\n                                width: 45px;\r\n                                display: inline-flex;\r\n                                align-items: center;\r\n                                justify-content: center;\r\n                                padding: 5px;\r\n                                margin-left: -1px;\r\n                                border-radius: 50%;\r\n                                border: 2px solid #fff;\r\n                                position: absolute;\r\n                                font-size: 10px;\r\n                                font-family: Open Sans SemiBold;\">{{roundValue(item.scores*100)}}%</span>\r\n                                <div style=\"width: 100%; padding: 5px 10px; padding-left: 50px;\">\r\n                                <div style=\"display: flex;\r\n                                flex-direction: row;\r\n                                justify-content: space-between;\r\n                                align-items: center;\">\r\n                                <span style=\" width: 66vw;\r\n                                font-family: Open Sans SemiBold;\r\n                                font-size: 11px;\r\n                                overflow: hidden;\r\n                                white-space: nowrap;\r\n                                text-overflow: ellipsis;\">{{item.companyName}}</span>\r\n                                <!-- <ion-icon name=\"notifications\" style=\"width: 13px;height: 13px;\"></ion-icon> -->\r\n                                <span style=\"    background: #ffffff;\r\n                                padding: 0 10px;\r\n                                border-radius: 10px;\r\n                                font-family: Open Sans SemiBold; font-size: 9px;\" [style.color]=\"ApplyPercentColor(roundValue(item.scores*100))\">{{roundValue(item.wt)}}%</span>\r\n                              </div>\r\n                              \r\n                              <div style=\"display: flex;\r\n                              flex-direction: row;\r\n                              justify-content: space-between;\r\n                              align-items: center;\">\r\n                                <span class=\"ticker-data\">{{item.ticker}}</span>\r\n                                <span style=\"padding-right: 5px; font-family: Open Sans SemiBold;\r\n                                font-size: 9px;\" *ngIf=\"item.price != null\">{{item.currency}} {{roundValue(item.price.toFixed(1))}}</span>\r\n                              </div>\r\n                            </div>\r\n                            </div>\r\n                            </ion-label>\r\n                          </div>\r\n                        </ion-item>\r\n\r\n                      </ion-list>\r\n                      <ion-infinite-scroll [disabled]=\"selSector.code!='Global Universe'\" threshold=\"100px\"\r\n                        position=\"bottom\" (ionInfinite)=\"onscroll($event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading...\">\r\n                        </ion-infinite-scroll-content>\r\n                      </ion-infinite-scroll>\r\n                    </div>\r\n                  </ion-content>\r\n\r\n\r\n                </ion-card-content>\r\n                <!-- Stock Company List End-->\r\n              </ion-card>\r\n\r\n              <!-- GICS List Start -->\r\n              <ion-card class=\"stockCompList-card\" *ngIf=\"stockIndexShow==true\">\r\n                <ion-card-content style=\"padding: 0px; height: calc(100vh - 263px);\">\r\n                  <ion-item style=\"color: black; --background: white;\" *ngFor=\"let item of sectorList\"\r\n                    (click)=\"onSectorClick(item.code)\">\r\n                    <ion-label\r\n                      style=\"display: flex; flex-direction: column; margin: 4px 0px; font-family: Open Sans SemiBold;\r\n                      font-size: 13px; color: #666666;\">\r\n                      <span [ngClass]=\"{'selGICS': SelSecLevTitle==sectorHeadings[sectorList.indexOf(item)]}\" style=\"margin-top: 3px;\">{{sectorHeadings[sectorList.indexOf(item)]}}</span>\r\n                      <span [ngClass]=\"{'selGICS': SelSecLevTitle==sectorHeadings[sectorList.indexOf(item)]}\" style=\"overflow: hidden; text-overflow: ellipsis; margin-top: 5px;\">{{item.name}}</span></ion-label>\r\n                  </ion-item>\r\n                </ion-card-content>\r\n              </ion-card>\r\n              <!-- GICS List End -->\r\n            </div>\r\n            <!-- Stock Company End -->\r\n\r\n          </div>\r\n        </ion-slide>\r\n        <!-- GICS Slide End -->\r\n\r\n        <!-- Index Slide Start -->\r\n        <ion-slide>\r\n          <div class=\"slider-div\">\r\n\r\n            <!-- Index Tab Start  -->\r\n            <div>\r\n              <ul class=\"NavTabList\">\r\n                <li class=\"navTabBtn\" [ngClass]=\"{'tab-active': SelTab == 'Global Universe'}\"\r\n                  (click)=\"GridHeaderTitle=false; onNavGlobalClick();\">Equities</li>\r\n                <li class=\"tab2color\" [ngClass]=\"{'tab-active': SelTab == 'FI'}\"\r\n                  (click)=\"GridHeaderTitle=false; onFINavClick();\">Fixed Income</li>\r\n                <li class=\"ETFNavTabBtn\" [ngClass]=\"{'tab-active': SelTab == 'ETF'|| SelTab == 'ETFChild'}\"\r\n                  (click)=\"GridHeaderTitle=false; onNavETFClick();\">ETFs</li>\r\n                <li class=\"ETFNavTabBtn\" [ngClass]=\"{'tab-active': SelTab == 'NAA'}\"\r\n                  (click)=\"GridHeaderTitle=false; onNavNAAClick();\">NAA Indexes</li>\r\n                \r\n              </ul>\r\n            </div>\r\n            <!-- Index Tab End  -->\r\n\r\n            <!-- Index Dropdown Start -->\r\n            <div>\r\n              <ion-card class=\"index-header\"\r\n                [ngClass]=\"{'active-left': SelTab == 'Global Universe', 'active-right': SelTab == 'ETF' || SelTab == 'ETFChild'}\">\r\n\r\n                <ion-card-content class=\"index-header-card-content\">\r\n                  <div class=\"index-header-card-div\">\r\n                    <span id='header-circle' class=\"header-circle\">{{headermed}}</span>\r\n                    <!-- <span style=\"min-width: 40px; min-height: 40px; height: 40px; width:40px; border-radius: 50%; background-color: #2e4c99;\"></span> -->\r\n                    <ion-button class=\"header-btn\" [disabled]=\"GridHeaderTitle\"\r\n                      [ngClass]=\"{'stockicon-active': compIndexShow}\" (click)=\"onCompBtnClick()\">\r\n                      <div class=\"Btn-inner-div\">\r\n                        <span\r\n                          class=\"subIndex-header-title\">{{(SelTab=='ETF' || SelTab=='ETFChild')? 'ETF': SelTab=='FI'? 'Fixed Income':'Index'}}</span>\r\n                        <span class=\"subIndex-header-subtitle\">{{SelIndexName}}</span>\r\n                      </div>\r\n                      <ion-icon [name]='icon' class=\"subindex-icon\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </div>\r\n            <!-- Index Dropdown End -->\r\n\r\n            <div >\r\n              <ion-card class=\"company-card\" *ngIf=\"compIndexShow==false\"\r\n                [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n\r\n                <!-- Index On Begin Start -->\r\n                <ion-card-content *ngIf=\"selectedIndexData.length == 0 && ETFHoldings.length == 0 \"\r\n                  class=\"child-card-content\" [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n                  <p class=\"test1\" style=\"width: 67%;\">\r\n                    To begin, use the Search Bar located at the top of your screen to select a stock.\r\n                  </p>\r\n                </ion-card-content>\r\n                <!-- Index On Begin End -->\r\n\r\n                <!-- Index Company List Start -->\r\n                <ion-card-content id='IndexCompanyDiv' style=\"padding: 5px 0px 5px 0px;\" *ngIf=\"selectedIndexData.length > 0 \"\r\n                  class=\"company-card-content\" [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n                  <div id=\"scrollDiv\" class=\"company-list-inner-div\"\r\n                    [ngClass]=\"{'Index_companycard-extend': stockCollapse}\">\r\n                    <ion-list class=\"company-list\">\r\n                      <ion-item lines='none' class=\"company-list-item\" *ngFor=\"let item of selectedIndexData\">\r\n                        <div class=\"company-label-outer-div\"\r\n                          [ngClass]=\"{'comp-sel': selComp==item.companyName && SelSearchObj.indexName==item.indexName}\"\r\n                          (click)=\"onCompanyClick(item)\" (press)=\"onlongpress(item)\" [style.background]=\"getColor(roundValue(item.scores*100))\"\r\n                          [style.color]=\"ApplyTextColor(roundValue(item.scores*100))\">\r\n                          <ion-label class=\"company-label\" style=\"padding:0px;\">\r\n                            <!-- <div class=\"nameExtend\" style=\"width: 193px; overflow: hidden; text-overflow: ellipsis;\"> -->\r\n                            <div class=\"index-outer-Div\">\r\n                              <!-- <span class=\"s-no\">{{unsortedIndexData.indexOf(item)+1}}</span> -->\r\n                              <span style=\"height: 45px;\r\n                              width: 45px;\r\n                              padding: 5px;\r\n                              display: inline-flex;\r\n                              align-items: center;\r\n                              border-radius: 50%;\r\n                              font-size: 10px;\r\n                              margin-left: -1px;\r\n                              justify-content: center;\r\n                              font-family: Open Sans SemiBold;\r\n                              border: 2px solid #fff;\r\n                              position: absolute;\">{{roundValue(item.scores*100)}}%</span>\r\n                              <div class=\"index-inner-Div\" style=\"padding: 5px 10px; padding-left: 50px !important;\">\r\n                                <div class=\"first-div\">\r\n                                  <span class=\"comp-Name\">{{item.companyName}}</span>\r\n                                  <!-- <ion-icon name=\"notifications\" style=\"width: 13px;\r\n                                  height: 13px;\"></ion-icon> -->\r\n                                  <span class=\"per-val\"\r\n                                    [style.color]=\"ApplyPercentColor(roundValue(item.scores*100))\">{{roundValue(item.wt)}}%</span>\r\n                                </div>\r\n                                <div class=\"second-Div\">\r\n                                  <span class=\"ticker-data\">{{item.ticker}}</span>\r\n                                  <span style=\"    font-family: Open Sans SemiBold;\r\n                                  font-size: 9px;\" *ngIf=\"item.price !== null\">{{item.currency}} {{roundValue(item.price.toFixed(1))}}</span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <!-- </div> -->\r\n                          </ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                    </ion-list>\r\n                  </div>\r\n                </ion-card-content>\r\n                <!-- Index Company List End -->\r\n              </ion-card>\r\n\r\n              <!-- Index Dropdown List Start -->\r\n              <ion-card class=\"company-card\" style=\"overflow: auto;\" *ngIf=\"compIndexShow==true\"\r\n                [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n\r\n                <!-- Index Loader -->\r\n                <ion-card-content *ngIf=\"showLoader\" class=\"index-loader\">\r\n                  <div>\r\n                    <img class=\"loader\" src=\"../../assets/images/Rolling.svg\" alt=\"Loading...\">\r\n                  </div>\r\n                </ion-card-content>\r\n                <!-- Index Loader -->\r\n\r\n                <!-- Global country List Start -->\r\n                <ion-card-content *ngIf=\"SelTab=='Global Universe' && !selCountry\" class=\"company-card-content\">\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of GlobalList\"\r\n                      (click)=\"selCountry=item.country; onCountryClick(item.country)\">\r\n                      <div style=\"display: flex;\r\n                      width: 100%;\r\n                      margin-left: 1px;\r\n                      align-items: center;\">\r\n                        <span class=\"index-circle\" [style.color]=\"ApplyTextColor(item.med)\"\r\n                          [style.background-color]=\"getColor(item.med)\">{{item.med}}</span>\r\n                        <ion-label style=\"    font-size: 12px;\r\n                        font-family: Open sans Semibold; color:#666666\">{{item.country}}</ion-label>\r\n\r\n                      </div>\r\n                      <ion-icon name=\"ios-arrow-forward\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- Global country List End -->\r\n\r\n                <!-- Global Index List Start -->\r\n                <ion-card-content *ngIf=\"SelTab=='Global Universe' && selCountry\" class=\"company-card-content\">\r\n                  <div style=\"    padding: 5px 10px 0px 10px;\" (click)=\"onCountryBackClick()\">\r\n                    <p style=\"text-align: left; color: #01b9ff; display: flex;\r\n                    flex-direction: row;\r\n                    align-items: center; font-family: Open Sans SemiBold;\r\n    font-size: 13px;\">\r\n                      <img src=\"../../assets/images/backward.svg\" alt=\"Back\" style=\"height: 8px; width: 8px; margin-right: 10px;\">{{selCountry}}\r\n                    </p>\r\n                  </div>\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of globalselectedcountryList\"\r\n                      (click)=\"onglobalIndexClick(item.name);\" [ngClass]=\"{'selectIndex': SelIndexName==item.name}\">\r\n                      <div style=\"display: flex;\r\n                      width: 100%;\r\n                      margin-left: 1px;\r\n                      align-items: center;padding: 5px 0;\" >\r\n                        <span class=\"index-circle\"\r\n                          [style.color]=\"ApplyTextColor(item.med)\"\r\n                          [style.background-color]=\"getColor(item.med)\">{{item.med}}</span>\r\n                        <ion-label style=\"font-size: 12px; font-family: Open Sans SemiBold; color: #666666;\" [ngClass]=\"{'selectedIndexLabel': SelIndexName==item.name}\">\r\n                          {{getGlobalIndex(item.name)}}</ion-label>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- Global Index List End -->\r\n\r\n                <!-- Naa Index List Start -->\r\n                <ion-card-content *ngIf=\"SelTab=='NAA'\" class=\"company-card-content\">\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of comNAAIndex\"\r\n                      (click)=\"onNaaIndexClick(item.name)\" [ngClass]=\"{'selectIndex': SelIndexName==item.name}\">\r\n                      <div style=\"display: flex;\r\n                      width: 100%;\r\n                      margin-left: 1px;\r\n                      align-items: center;padding: 5px 0;\" >\r\n                        <span class=\"index-circle\"\r\n                          [style.color]=\"ApplyTextColor(item.med)\"\r\n                          [style.background-color]=\"getColor(item.med)\">{{item.med}}</span>\r\n                        <ion-label style=\"font-size: 12px;\r\n                        font-family: Open sans SemiBold;\r\n                        color: #666666;\"\r\n                        [ngClass]=\"{selectIndexLabel: SelIndexName==item.name}\">\r\n                          {{getNaaIndex(item.name)}}</ion-label>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- Naa Index List End -->\r\n\r\n                <!-- FI Country List Start-->\r\n                <ion-card-content *ngIf=\"SelTab=='FI' && !FISelCountry\" class=\"company-card-content\">\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of FICountryList\"\r\n                      (click)=\"onFICountryClick(item)\">\r\n                      <span class=\"index-circle\" [style.color]=\"ApplyTextColor(FixedIndexData[item].med)\"\r\n                        [style.background-color]=\"getColor(FixedIndexData[item].med)\">{{FixedIndexData[item].med}}</span>\r\n                      <ion-label style=\"font-size: 12px;\r\n                      font-family: Open sans SemiBold;\r\n                      color: #666666;\">{{item}}</ion-label>\r\n                      <ion-icon name=\"ios-arrow-forward\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- FI Country List End-->\r\n\r\n                <!-- FI category List Start-->\r\n                <ion-card-content *ngIf=\"SelTab=='FI' && FISelCountry\" class=\"company-card-content\">\r\n                  <div style=\"    padding: 5px 10px 0px 10px;\" (click)=\"onFiCountryBackClick()\">\r\n                    <p style=\"text-align: left; color: #01b9ff; display: flex;\r\n                    flex-direction: row;\r\n                    align-items: center; font-family: Open Sans SemiBold;  font-size: 13px;\">\r\n                      <img src=\"../../assets/images/backward.svg\" alt=\"Back\" style=\"height: 8px; width: 8px; margin-right: 10px;\">{{FISelCountry}}\r\n                    </p>\r\n                  </div>\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of FIselCatogaryList\"\r\n                      (click)=\"onFixedCatClick(item)\" [ngClass]=\"{'selectIndex': SelIndexName == (item.category == 'HY'? 'High Yield' : 'Investment Grade')}\">\r\n                      <div style=\"display: flex;\r\n                      width: 100%;\r\n                      margin-left: 1px;\r\n                      align-items: center;\r\n                      padding: 5px 0;\"\r\n                        >\r\n                        <span class=\"index-circle\"\r\n                          \r\n                          [style.color]=\"ApplyTextColor(roundValue(item.medianCont*100))\"\r\n                          [style.background-color]=\"getColor(roundValue(item.medianCont*100))\">{{roundValue(item.medianCont*100)}}</span>\r\n                        <ion-label style=\"font-size: 12px;\r\n                        font-family: Open sans SemiBold;\r\n                        color: #666666;\"\r\n                          [ngClass]=\"{'selectIndexLabel': SelIndexName == (item.category == 'HY'? 'High Yield' : 'Investment Grade')}\">\r\n                          {{item.category == 'HY'?'High Yield':'Investment Grade'}}</ion-label>\r\n                      </div>\r\n                      <ion-icon name=\"ios-arrow-forward\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- FI category List End-->\r\n\r\n                <!-- ETF Catagory List Start -->\r\n                <ion-card-content *ngIf=\"SelTab=='ETF'\" class=\"company-card-content\">\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of ETFcategory\"\r\n                      (click)=\"onETFCategoryClick(item)\">\r\n                      <span class=\"index-circle\"\r\n                        [style.color]=\"ApplyTextColor(roundValue(getETFCategoryMed(ETFcategory.indexOf(item))*100))\"\r\n                        [style.background-color]=\"getColor(roundValue(getETFCategoryMed(ETFcategory.indexOf(item))*100))\">{{roundValue(getETFCategoryMed(ETFcategory.indexOf(item))*100)}}</span>\r\n                      <ion-label style=\"font-size: 12px;\r\n                      font-family: Open sans SemiBold;\r\n                      color: #666666;\">{{item}}</ion-label>\r\n                      <ion-icon name=\"ios-arrow-forward\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- ETF Catagory List End -->\r\n\r\n                <!-- ETF Index List Start -->\r\n                <ion-card-content *ngIf=\"SelTab=='ETFChild'\" class=\"nav-tab-card-content\">\r\n                  <div class=\"backBtn\">\r\n                    <img src=\"../../assets/images/backward.svg\" alt=\"Back\" style=\"height: 8px; width: 8px;\">\r\n                    <ion-label class=\"backText backText-label\" (click)=\"this.SelTab='ETF';\">{{selCategory}}</ion-label>\r\n                  </div>\r\n                  <div class=\"ETFChild-Div\" [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n                    <div>\r\n                      <ion-list class=\"ETFChild-List\">\r\n                        <ion-item lines=\"none\" style=\"--background: white; font-size: 14px; margin: 5px 0 5px 0;\"\r\n                          *ngFor=\"let item of compETFNameList\" (click)=\"onETFNameClick(item.name)\" [ngClass]=\"{'selectIndex': SelIndexName==item.name}\">\r\n                          <div style=\"display: flex;\r\n                          width: 100%;\r\n                          margin-left: 1px;\r\n                          align-items: center;\r\n                          padding: 5px 0;\" >\r\n                            <span class=\"index-circle\"\r\n                              [style.color]=\"ApplyTextColor(item.med)\"\r\n                              [style.background-color]=\"getColor(item.med)\">{{item.med}}</span>\r\n                            <ion-label class=\"ETFChild-Label\"\r\n                              [ngClass]=\"{'selectedIndexLabel': SelIndexName==item.name}\">{{item.name}}</ion-label>\r\n                          </div>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                    </div>\r\n                  </div>\r\n                </ion-card-content>\r\n                <!-- ETF Index List End -->\r\n\r\n              </ion-card>\r\n              <!-- Index Dropdown List End -->\r\n\r\n            </div>\r\n          </div>\r\n        </ion-slide>\r\n        <!-- Index Slide End -->\r\n\r\n      </ion-slides>\r\n    </div>\r\n    <!-- Slides/Carousel End-->\r\n\r\n    <!-- Slides/Carousel Pager Start -->\r\n    <div style=\"    position: fixed;\r\n    width: 100%;\r\n    bottom: 0;\r\n    z-index: 999;\">\r\n      <div class=\"pager_div\">\r\n        <p id=\"slide0dot\" class=\"dot0p\" (click)=\"onSlide0Click()\"></p>\r\n        <p id=\"slide1dot\" class=\"dot1P\" (click)=\"onSlide1Click()\"></p>\r\n      </div>\r\n    </div>\r\n    <!-- Slides/Carousel Pager End -->\r\n  </div>\r\n\r\n  <div *ngIf=\"showFilter\" class=\"Filter_Div\">\r\n   \r\n      <ion-list id=\"sortbyList\">\r\n        <div>\r\n        <ion-label>Sort by</ion-label>\r\n        <ion-button class=\"sortCancelBtn\" (click)=\"onSortClick()\" fill=\"clear\">\r\n          Cancel\r\n        </ion-button>\r\n      </div>\r\n      <hr>\r\n        <ion-button class=\"filterTypeBtn\" (click)=\"onfilterSelect('C')\" expand=\"block\" fill=\"clear\" [ngClass]=\"{'activeSort': filterby == 'C_LTH' || filterby == 'C_HTL'}\">\r\n          <span id=\"filterLabel\">Company Name</span>\r\n          <span class=\"filterTypeInnerSpan\">\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'C_LTH'\">(A - Z)</span>\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'C_HTL'\">(Z - A)</span>\r\n            <ion-icon name=\"arrow-round-up\" *ngIf=\"filterby == 'C_LTH'\"></ion-icon>\r\n          <ion-icon name=\"arrow-round-down\" *ngIf=\"filterby == 'C_HTL'\"></ion-icon>\r\n          </span>\r\n          \r\n        </ion-button>\r\n      \r\n        <ion-button class=\"filterTypeBtn\" (click)=\"onfilterSelect('HF')\" expand=\"block\" fill=\"clear\" [ngClass]=\"{'activeSort': filterby == 'HF_LTH' || filterby == 'HF_HTL'}\">\r\n         <span id=\"filterLabel\">H-Factor Score</span> \r\n         <span class=\"filterTypeInnerSpan\">\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'HF_LTH'\">(Low - High)</span>\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'HF_HTL'\">(High - Low)</span>\r\n            <ion-icon name=\"arrow-round-up\" *ngIf=\"filterby == 'HF_LTH'\"></ion-icon>\r\n          <ion-icon name=\"arrow-round-down\" *ngIf=\"filterby == 'HF_HTL'\"></ion-icon>\r\n          </span>\r\n         \r\n        </ion-button>\r\n      \r\n        <ion-button class=\"filterTypeBtn\" (click)=\"onfilterSelect('T')\" expand=\"block\" fill=\"clear\" [ngClass]=\"{'activeSort': filterby == 'T_LTH' || filterby == 'T_HTL'}\">\r\n          <span id=\"filterLabel\">Ticker</span> \r\n          <span class=\"filterTypeInnerSpan\">\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'T_LTH'\">(A - Z)</span>\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'T_HTL'\">(Z - A)</span>\r\n            <ion-icon name=\"arrow-round-up\" *ngIf=\"filterby == 'T_LTH'\"></ion-icon>\r\n          <ion-icon name=\"arrow-round-down\" *ngIf=\"filterby == 'T_HTL'\"></ion-icon>\r\n          </span>\r\n          \r\n        </ion-button>\r\n      \r\n        <ion-button class=\"filterTypeBtn\" (click)=\"onfilterSelect('P')\" expand=\"block\" fill=\"clear\" [ngClass]=\"{'activeSort': filterby == 'P_LTH' || filterby == 'P_HTL'}\">\r\n         <span id=\"filterLabel\">Price</span>\r\n         <span class=\"filterTypeInnerSpan\">\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'P_LTH'\">(Low - High)</span>\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'P_HTL'\">(High - Low)</span>\r\n            <ion-icon name=\"arrow-round-up\" *ngIf=\"filterby == 'P_LTH'\"></ion-icon>\r\n         <ion-icon name=\"arrow-round-down\" *ngIf=\"filterby == 'P_HTL'\"></ion-icon>\r\n          </span>\r\n         \r\n        </ion-button>\r\n      </ion-list>\r\n    \r\n  </div>\r\n\r\n  <div *ngIf=\"showAlertSetup\" style=\"    position: absolute;\r\n  z-index: 999;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background-color: rgba(113, 107, 107, 0.50)\">\r\n    <ion-card style=\"background: white;\">\r\n      <ion-card-content style=\"    padding: 0px;     padding-bottom: 15px;\">\r\n        <div style=\"background: #00b9ff; align-items: center; padding: 10px; display: flex; flex-direction: row; justify-content: space-between;\">\r\n          <ion-title style=\"font-size: 18px; padding: 0px; color: white;\">Alert Settings</ion-title>\r\n          <ion-icon style=\"color: #ffffff; width: 19px;\r\n          height: 19px;\" name=\"close\" (click)=\"showAlertSetup= false;\"></ion-icon>\r\n        </div>\r\n        <div>\r\n          <p style=\"text-align: center;\r\n          padding-top: 15px;\r\n    color: #394e8b;\r\n    font-size: 16px;\r\n    padding: 0 15px;\r\n    font-weight: 500;\">{{SelSearchObj.companyName}} ({{SelSearchObj.ticker}})</p>\r\n        </div>\r\n        <div>\r\n          <ion-item lines=\"none\" style=\"--background: #ffffff;\">\r\n            <ion-label>Period</ion-label>\r\n            <ion-select interface=\"popover\" (ionChange)=\"rangeChange($event)\" [(ngModel)]=\"selPeriod\" style=\"min-width:45% !important;\">\r\n              <ion-select-option value=\"daily\">Daily</ion-select-option>\r\n              <ion-select-option value=\"weekly\">Weekly</ion-select-option>\r\n              <ion-select-option value=\"monthly\">Monthly</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n        <div *ngIf=\"selPeriod == 'weekly'\" style=\"display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\">\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('sunday')\" [ngClass]=\"{'dayActive': selDay == 'sunday'}\">S</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('monday')\" [ngClass]=\"{'dayActive': selDay == 'monday'}\">M</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('tuesday')\" [ngClass]=\"{'dayActive': selDay == 'tuesday'}\">T</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('wednesday')\" [ngClass]=\"{'dayActive': selDay == 'wednesday'}\">W</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('thursday')\" [ngClass]=\"{'dayActive': selDay == 'thursday'}\">T</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('friday')\" [ngClass]=\"{'dayActive': selDay == 'friday'}\">F</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('satuday')\" [ngClass]=\"{'dayActive': selDay == 'satuday'}\">S</span>\r\n        </div>\r\n        <div *ngIf=\"selPeriod == 'monthly'\" style=\"display: flex; flex-direction: row;     justify-content: space-between;\r\n        \r\n        align-items: center;\">\r\n          \r\n          <ion-button (click)=\"openDaypicker()\" (ionChange)=\"rangeChange($event)\" expand=\"block\" fill=\"clear\" style=\"width: 100%;     --padding-start: 15px;\r\n          --padding-end: 15px; --ripple-color:#666;\">\r\n            <div style=\"width: 100%; display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\">\r\n              <span style=\"    color: #000000;\r\n          font-size: 16px;     text-transform: capitalize;\r\n    font-weight: normal;\">Date</span>\r\n          <span style=\"color: #000000;\">\r\n           {{selDate}} <ion-icon name=\"arrow-dropdown\" style=\"height: 18px;\r\n           width: 18px; margin-left: 10vh; color: #000000;\r\n            opacity: 0.4;\"></ion-icon>\r\n            </span>\r\n            </div>\r\n          </ion-button>\r\n        </div>\r\n        <div>\r\n          <ion-item lines=\"none\" style=\"--background: #ffffff;\" >\r\n            <ion-checkbox (ionChange)=\"rangeChange($event)\" [(ngModel)]=\"perChecked\" style=\"--background:#ffffff; --background-checked: #00b9ff;\r\n            --border-color-checked: #00b9ff;\"></ion-checkbox>\r\n            <ion-label style=\"padding-left: 10px; font-size: 14px;\">If Score Percentage changed by (+/-)</ion-label>\r\n          </ion-item>\r\n        </div>\r\n        <div *ngIf=\"perChecked\">\r\n          <ion-item style=\"--background:#ffffff; \" lines=\"none\">\r\n            <ion-range [(ngModel)]=\"selPer\" style=\"--ion-color-base: #00b9ff !important; padding-left: 0px;\r\n            padding-right: 0px;\"\r\n              min=\"1\" max=\"100\"\r\n              pin=\"true\"\r\n              snaps=\"true\" step=\"1\"\r\n              ticks=\"true\" value=\"1\"\r\n              color=\"primary\" (ionChange)=\"rangeChange($event)\">\r\n\r\n                <ion-label slot=\"start\">1%</ion-label>\r\n                <ion-label slot=\"end\">100%</ion-label>\r\n            </ion-range>\r\n          </ion-item>\r\n        </div>\r\n        <div style=\"margin: 15px 15%; \">\r\n          <ion-button *ngIf=\"showSubmit\" [disabled]=\"selPeriod == '' && !perChecked\" style=\"--background: linear-gradient(45deg,#06aaf1,#2c529e)!important;\" (click)=\"onAlertSubmit()\" expand=\"block\" shape=\"round\">\r\n            Submit\r\n          </ion-button>\r\n        </div>\r\n        <div style=\"margin: 15px 15%; \">\r\n          <ion-button *ngIf=\"showAlertRemove\" style=\"--background: #999 !important; color: white;\" (click)=\"onRemoveAlert()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n            Remove\r\n          </ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n<!--Mobile body -->\r\n\r\n<!-- Tablet body -->\r\n<ion-content *ngIf=\"!mobile\" style=\"--ion-background-color:linear-gradient(-90deg,#2E4C99, #233771);\">\r\n  <div style=\"    height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\">\r\n    <app-ipadhometool></app-ipadhometool>\r\n  </div>\r\n</ion-content>\r\n<!-- Tablet body -->"

/***/ }),

/***/ "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerDiv {\n  height: calc( 100vh - 90px);\n  width: calc(100vw - 90px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.parentCard {\n  height: 95%;\n  width: 95%;\n  --background:#d3d8dc;\n  border-radius: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.parentCard ion-card-content {\n  height: 100%;\n  width: 100%;\n}\n\n.parentCard ion-card-content .crect {\n  fill: #fafafa;\n  display: block;\n}\n\n.parentCard ion-card-content .start-ring {\n  stroke-width: 10px;\n  stroke: #0e82e5;\n  fill: #fff;\n}\n\n#gchart .start-ring {\n  stroke-width: 10px;\n  stroke: #0e82e5;\n  fill: #fff;\n}\n\n.comp {\n  font-family: \"Open Sans SemiBold\";\n  font-size: 1px;\n  cursor: pointer;\n  fill: #666666;\n  /*text-transform: uppercase;*/\n}\n\n.comp text {\n  display: none;\n}\n\n.comp .bgrect {\n  display: none;\n}\n\n.comp .on {\n  font-size: 10px;\n  display: block !important;\n  z-index: 10;\n}\n\n.comp .recton {\n  fill: #00b9ff;\n}\n\n.crect {\n  fill: #fafafa;\n  display: block;\n}\n\n.onrect {\n  fill: #333;\n  width: 32px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9pLXBhZC1ob21lLXRvb2wvQzpcXFByb2plY3RzXFxOQUFscGhhTW9iaWxlL3NyY1xcYXBwXFxDb21wb25lbnRzXFxpLXBhZC1ob21lLXRvb2xcXGktcGFkLWhvbWUtdG9vbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9pLXBhZC1ob21lLXRvb2wvaS1wYWQtaG9tZS10b29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBRENJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDUjs7QURDUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQ1o7O0FERVU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDQVo7O0FES0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDRko7O0FESUU7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDREo7O0FESUU7RUFDRSxhQUFBO0FDREo7O0FESUU7RUFDRSxhQUFBO0FDREo7O0FESUU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDREo7O0FESUU7RUFDRSxhQUFBO0FDREo7O0FESUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElFO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2ktcGFkLWhvbWUtdG9vbC9pLXBhZC1ob21lLXRvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJEaXZ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoIDEwMHZoIC0gOTBweCk7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDkwcHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhcmVudENhcmR7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICAtLWJhY2tncm91bmQ6I2QzZDhkYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuY3JlY3Qge1xyXG4gICAgICAgICAgICBmaWxsOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3RhcnQtcmluZyB7XHJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMTBweDtcclxuICAgICAgICAgICAgc3Ryb2tlOiAjMGU4MmU1O1xyXG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jZ2NoYXJ0IC5zdGFydC1yaW5nIHtcclxuICAgIHN0cm9rZS13aWR0aDogMTBweDtcclxuICAgIHN0cm9rZTogIzBlODJlNTtcclxuICAgIGZpbGw6ICNmZmY7XHJcbiAgfVxyXG4gIC5jb21wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIFNlbWlCb2xkJztcclxuICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmlsbDogIzY2NjY2NjtcclxuICAgIC8qdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsqL1xyXG4gIH1cclxuXHJcbiAgLmNvbXAgdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbXAgLmJncmVjdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbXAgLm9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcblxyXG4gIC5jb21wIC5yZWN0b24ge1xyXG4gICAgZmlsbDogIzAwYjlmZjtcclxuICB9XHJcblxyXG4gIC5jcmVjdCB7XHJcbiAgICBmaWxsOiAjZmFmYWZhO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAub25yZWN0IHtcclxuICAgIGZpbGw6ICMzMzM7XHJcbiAgICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xyXG4gIH0iLCIub3V0ZXJEaXYge1xuICBoZWlnaHQ6IGNhbGMoIDEwMHZoIC0gOTBweCk7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gOTBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFyZW50Q2FyZCB7XG4gIGhlaWdodDogOTUlO1xuICB3aWR0aDogOTUlO1xuICAtLWJhY2tncm91bmQ6I2QzZDhkYztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGFyZW50Q2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wYXJlbnRDYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmNyZWN0IHtcbiAgZmlsbDogI2ZhZmFmYTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucGFyZW50Q2FyZCBpb24tY2FyZC1jb250ZW50IC5zdGFydC1yaW5nIHtcbiAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xuICBzdHJva2U6ICMwZTgyZTU7XG4gIGZpbGw6ICNmZmY7XG59XG5cbiNnY2hhcnQgLnN0YXJ0LXJpbmcge1xuICBzdHJva2Utd2lkdGg6IDEwcHg7XG4gIHN0cm9rZTogIzBlODJlNTtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLmNvbXAge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsbDogIzY2NjY2NjtcbiAgLyp0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyovXG59XG5cbi5jb21wIHRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29tcCAuYmdyZWN0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbXAgLm9uIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmNvbXAgLnJlY3RvbiB7XG4gIGZpbGw6ICMwMGI5ZmY7XG59XG5cbi5jcmVjdCB7XG4gIGZpbGw6ICNmYWZhZmE7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ub25yZWN0IHtcbiAgZmlsbDogIzMzMztcbiAgd2lkdGg6IDMycHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.ts ***!
  \*************************************************************************/
/*! exports provided: IPadHomeToolComponent, countryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPadHomeToolComponent", function() { return IPadHomeToolComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryList", function() { return countryList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);








// declare var $: any;
var IPadHomeToolComponent = /** @class */ (function () {
    function IPadHomeToolComponent(changedet, httpClient) {
        this.changedet = changedet;
        this.httpClient = httpClient;
        this.SelAssetId = "";
        this.TotalStockData = [];
        this.unsortedSelCompanyData = [];
        this.SelCompanyData = [];
        this.NAAIndexData = [];
        this.CurSectorList = [];
        this.GICSData = [];
        this.GICSLevel = 0;
        this.curGICSLev = 6;
        this.ETFData = [];
        this.showFICountry = false;
        this.showETFIndex = false;
        this.SelETFSortOrder = 'H-Factor Score (ascending)';
        this.showETFSort = false;
        this.showNaaIndex = false;
        this.FIselCatogaryList = [];
        this.showFiIndexList = false;
        this.selSortOrder = 'H-Factor Score (ascending)';
        this.selIndexList = [];
        this.GlobalIndexDtata = [];
        this.showIndexList = false;
        this.FixedIncomeData = [];
        this.FICountryList = [];
        this.showsortList = false;
        this.showCompanyList = false;
        this.showCountryList = false;
        this.countryList = [];
        this.CompetLength = "";
        this.filteredCompanies = [];
        this.companiesCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.SelIndexName = "";
        this.SelETFIndexList = [];
        this.SelISIN = "";
        this.FromClick = "";
        this.SelTab = 'Stocks';
        this.GridExpanded = false;
        this.IsShowFilterDD = false;
        this.IsShowIndexFilterDD = false;
        this.IsShowCompFilterDD = false;
        this.IsShowDD = false;
        this.GridData_c = [];
        this.GridData = [];
        this.showETFCategories = false;
        this.SelFilter = 'H-Factor Score (ascending)';
        this.interval = null;
        this.CompetCLength = 0;
        this.IsShowAll = true;
        this.showLoader = false;
        this.distCnt = 0;
        this.radius = 170;
        this.chartMain = [];
        this.PerfData = [];
        this.dbGICS = [];
        this.tradeDt = "";
        this.BMPerf = [];
        this.indexPerf = [];
        this.addCmpIs = [];
        // IndexData: any = [];
        this.selResData = [];
        this.ETFCategories = [];
        this.IndexList = [];
        this.NAAIndexList = [];
        this.GrpIndexList = [];
        this.CountryCat = [];
        this.ETFIndex = [];
        this.Companies = [];
        this.CountryCatsubIndex = [];
        this.PerfStockIndex = [];
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
        this.FilterList = [{ "Name": 'Company Name (ascending)', "value": "1" }, { "Name": 'Company Name (descending)', "value": "2" }, { "Name": 'H-Factor Score (ascending)', "value": "3" }, { "Name": 'H-Factor Score (descending)', "value": "4" }, { "Name": 'Ticker (ascending)', "value": "5" }, { "Name": 'Ticker (descending)', "value": "6" }];
        this.IndexOrder = [
            { "index": "S&P 500", "order": 1 },
            { "index": "S&P 400", "order": 2 },
            { "index": "S&P 600", "order": 3 },
            { "index": "S&P USA Extra", "order": 4 },
            { "index": "S&P USA Ex S&P 1500", "order": 4 },
            { "index": "S&P Europe Ex UK", "order": 5 },
            { "index": "S&P United Kingdom Index", "order": 6 },
            { "index": "S&P United Kingdom", "order": 6 },
            { "index": "S&P Japan Index", "order": 7 },
            { "index": "S&P Japan", "order": 7 },
            { "index": "South Africa", "order": 8 },
            { "index": "S&P South Africa", "order": 8 },
            { "index": "Australia", "order": 9 },
            { "index": "S&P Australia BMI", "order": 9 },
            { "index": "Canada", "order": 10 },
            { "index": "S&P Canada BMI", "order": 10 },
            { "index": "Korea", "order": 11 },
            { "index": "S&P Korea BMI", "order": 11 },
            { "index": "New Age Alpha U.S. Large-Cap Leading Index", "order": 11 },
            { "index": "New Age Alpha U.S. Large-Cap Low Volatility Index", "order": 12 },
            { "index": "New Age Alpha U.S. Small-Cap Leading Index", "order": 13 },
            { "index": "New Age Alpha U.S. Small-Cap Low Volatility Index", "order": 14 },
            { "index": "New Age Alpha Europe ex UK Leading Index", "order": 15 },
            { "index": "New Age Alpha Europe ex UK Low Volatility Index", "order": 16 },
            { "index": "New Age Alpha UK Leading Index", "order": 17 },
            { "index": "New Age Alpha UK Low Volatility Index", "order": 18 },
            { "index": "New Age Alpha Japan Leading Index", "order": 19 },
            { "index": "New Age Alpha Japan Low Volatility Index", "order": 20 }
        ];
    }
    IPadHomeToolComponent.prototype.ngAfterViewInit = function () {
        this.showLoader = true;
        this.GetETFValues();
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#dvDD").style('display', 'none');
        jquery__WEBPACK_IMPORTED_MODULE_6__('.slide-menu-control').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_6__(".slide-menu #etfParentList").removeClass('translateLeft');
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__('#hideUserdropdown').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_6__(this).closest('#showUserProfileDropdown').hide();
            return false;
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__('html').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_6__('#showUserProfileDropdown').hide();
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__('#toggleswitch').click(function (e) {
            e.stopPropagation();
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__('#UserSignInSection').css('visibility', 'hidden');
        jquery__WEBPACK_IMPORTED_MODULE_6__('#UserLogInSection').css('visibility', 'hidden');
        jquery__WEBPACK_IMPORTED_MODULE_6__('.carousel-control-prev').hide();
        jquery__WEBPACK_IMPORTED_MODULE_6__('#helpCarousel').on('slid.bs.carousel', '', function () {
            jquery__WEBPACK_IMPORTED_MODULE_6__('.carousel-control-prev').show();
            jquery__WEBPACK_IMPORTED_MODULE_6__('.carousel-control-next').show();
            if (jquery__WEBPACK_IMPORTED_MODULE_6__('.carousel-item:first').hasClass('active')) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.carousel-control-prev').hide();
            }
            else if (jquery__WEBPACK_IMPORTED_MODULE_6__('.carousel-item:last').hasClass('active')) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.carousel-control-next').hide();
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__('#md-close').on('click', function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_6__('#modal-1').toggleClass("md-show"); //you can list several class names 
            // $('body').toggleClass("md-on");
            if (jquery__WEBPACK_IMPORTED_MODULE_6__('.signup-sec').find('.submitted-message').is(':visible')) {
                location.reload();
            }
            e.preventDefault();
        });
    };
    IPadHomeToolComponent.prototype.ngAfterContentInit = function () {
        this.loadData();
        var position = jquery__WEBPACK_IMPORTED_MODULE_6__("#fobjText").offset();
        if (position != undefined)
            jquery__WEBPACK_IMPORTED_MODULE_6__("#dvSearchBox").css({ top: position.top - 100 + " !important" });
    };
    IPadHomeToolComponent.prototype.ngOnInit = function () { };
    IPadHomeToolComponent.prototype.getColor = function (med) {
        var gc100 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        return gc100(med);
    };
    IPadHomeToolComponent.prototype.getpercentColor = function (med) {
        return (med >= 45 && med < 55) ? "#FF9503" : this.getColor(med);
    };
    IPadHomeToolComponent.prototype.ApplyTextColor = function (val) {
        return (val >= 45 && val < 55) ? "#FF9503" : "#fff";
    };
    IPadHomeToolComponent.prototype.onCountryClick = function (itm) {
        var _this = this;
        console.log(itm);
        this.selCountry = itm;
        this.showIndexList = true;
        this.showCountryList = false;
        this.selIndexList.length = 0;
        var temp = this.GlobalIndexDtata.filter(function (item) { return item.CountryGroup == itm.Country; }).map(function (x) { return x.indexName; }).filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
        temp.forEach(function (val) {
            var t = [];
            t = _this.GlobalIndexDtata.filter(function (item) { return item.indexName == val; }).map(function (x) { return x.scores; });
            var i = { 'indexName': val, 'Med': _this.getMed(t) };
            _this.selIndexList.push(i);
        });
        this.selIndexList.sort(function (a, b) {
            return a.Med - b.Med;
        });
        console.log(this.selIndexList);
    };
    IPadHomeToolComponent.prototype.onIndexClick = function (itm) {
        console.log(itm);
        this.selIndex = itm;
        this.showCompanyList = true;
        this.SelCompanyData = this.GlobalIndexDtata.filter(function (item) { return item.indexName == itm.indexName; });
        this.unsortedSelCompanyData = this.GlobalIndexDtata.filter(function (item) { return item.indexName == itm.indexName; });
        this.TotalStockData = this.GlobalIndexDtata.filter(function (item) { return item.indexName == itm.indexName; });
        this.GICSLevel = 2;
        this.curGICSLev = 2;
        this.onGICSLevelClick(2);
    };
    IPadHomeToolComponent.prototype.getSectorList = function (data) {
        var indus = data.industry;
        var i = 2;
        this.CurSectorList.length = 0;
        while (i < 9) {
            var temp = this.dbGICS.filter(function (x) { return x.code == indus.toString().substring(0, i); })[0];
            var tempmed = this.getMed(this.SelCompanyData.filter(function (x) { return x.industry.toString().substring(0, i) == indus.toString().substring(0, i); }).map(function (x) { return x.scores; }));
            temp.med = tempmed;
            i = i + 2;
            this.CurSectorList.push(temp);
            console.log(temp);
        }
        console.log(this.CurSectorList);
    };
    IPadHomeToolComponent.prototype.onETFIndSortTabClick = function () {
        if (this.showETFSort == true) {
            this.showETFSort = false;
        }
        else {
            this.showETFSort = true;
        }
    };
    IPadHomeToolComponent.prototype.GetETFHoldingsData = function (itm) {
        var _this = this;
        console.log(itm);
        this.httpClient.get(this.api_url + "/Scores/GetETFCurrent/" + itm.assetId).subscribe(function (ETFStocks) {
            console.log(ETFStocks);
            itm.Med = itm.medianCont;
            itm.indexName = itm.etfName;
            _this.selIndex = itm;
            _this.SelCompanyData.length = 0;
            _this.unsortedSelCompanyData.length = 0;
            _this.TotalStockData.length = 0;
            ETFStocks.forEach(function (e) {
                var t = _this.selResData.filter(function (item) { return item.aisin == e.isin && item.indexName.indexOf('New Age Aplha') == -1; })[0];
                _this.SelCompanyData.push(t);
                _this.unsortedSelCompanyData.push(t);
                _this.TotalStockData.push(t);
            });
            _this.GICSLevel = 2;
            _this.curGICSLev = 2;
            _this.onGICSLevelClick(2);
            _this.showCompanyList = true;
            _this.showETFIndex = false;
            _this.showETFCategories = false;
            console.log(ETFStocks);
            console.log(_this.SelCompanyData);
            console.log(_this.unsortedSelCompanyData);
        });
    };
    IPadHomeToolComponent.prototype.onETFIndsortClick = function (by) {
        var sortby = by;
        if (sortby == 'ETF_ASC') {
            this.SelETFSortOrder = 'ETF Name (ascending)';
            this.SelETFIndexList.sort(function (a, b) {
                return a.etfName.localeCompare(b.etfName);
            });
        }
        else if (sortby == 'ETF_DES') {
            this.SelETFSortOrder = 'ETF Name (descending)';
            this.SelETFIndexList.sort(function (a, b) {
                return b.etfName.localeCompare(a.etfName);
            });
        }
        else if (sortby == 'HF_ASC') {
            this.SelETFSortOrder = 'H-Factor Score (ascending)';
            this.SelETFIndexList.sort(function (a, b) {
                return a.medianCont - b.medianCont;
            });
        }
        else if (sortby == 'HF_DES') {
            this.SelETFSortOrder = 'H-Factor Score (descending)';
            this.SelETFIndexList.sort(function (a, b) {
                return b.medianCont - a.medianCont;
            });
        }
        else if (sortby == 'T_ASC') {
            this.SelETFSortOrder = 'Ticker (ascending)';
            this.SelETFIndexList.sort(function (a, b) {
                return a.ticker.localeCompare(b.ticker);
            });
        }
        else if (sortby == 'T_DES') {
            this.SelETFSortOrder = 'Ticker (descending)';
            this.SelETFIndexList.sort(function (a, b) {
                return b.ticker.localeCompare(a.ticker);
            });
        }
        this.showETFSort = false;
    };
    IPadHomeToolComponent.prototype.onFIIndexClick = function (item) {
        var _this = this;
        item.Med = item.medianCont;
        item.indexName = item.category == 'HY' ? 'High Yield' : 'Investment Grade';
        console.log(item);
        this.selIndex = item;
        this.httpClient.get(this.api_url + '/Scores/GetBondMappingStocks/' + item.category).subscribe(function (res) {
            _this.SelCompanyData.length = 0;
            _this.unsortedSelCompanyData.length = 0;
            _this.TotalStockData.length = 0;
            console.log(res);
            res.forEach(function (e) {
                _this.SelCompanyData.push(_this.GlobalIndexDtata.filter(function (x) { return x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1; })[0]);
                _this.unsortedSelCompanyData.push(_this.GlobalIndexDtata.filter(function (x) { return x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1; })[0]);
                _this.TotalStockData.push(_this.GlobalIndexDtata.filter(function (x) { return x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1; })[0]);
            });
            _this.SelCompanyData.sort(function (a, b) {
                return a.scores - b.scores;
            });
            _this.unsortedSelCompanyData.sort(function (a, b) {
                return a.scores - b.scores;
            });
            _this.TotalStockData.sort(function (a, b) {
                return a.scores - b.scores;
            });
            // console.log(this.SelCompanyData);
            // console.log(this.unsortedSelCompanyData);
            _this.showCompanyList = true;
            _this.GICSLevel = 2;
            _this.curGICSLev = 2;
            _this.onGICSLevelClick(2);
        });
    };
    IPadHomeToolComponent.prototype.onsorttabClick = function () {
        if (this.showsortList) {
            this.showsortList = false;
        }
        else {
            this.showsortList = true;
        }
    };
    IPadHomeToolComponent.prototype.onsortClick = function (by) {
        var sortby = by;
        if (sortby == 'CN_ASC') {
            this.SelCompanyData.sort(function (a, b) {
                return a.companyName.localeCompare(b.companyName);
            });
            this.selSortOrder = 'Company Name (ascending)';
        }
        else if (sortby == 'CN_DES') {
            this.SelCompanyData.sort(function (a, b) {
                return b.companyName.localeCompare(a.companyName);
            });
            this.selSortOrder = 'Company Name (descending)';
        }
        else if (sortby == 'HF_ASC') {
            this.SelCompanyData.sort(function (a, b) {
                return a.scores - b.scores;
            });
            this.selSortOrder = 'H-Factor Score (ascending)';
        }
        else if (sortby == 'HF_DES') {
            this.SelCompanyData.sort(function (a, b) {
                return b.scores - a.scores;
            });
            this.selSortOrder = 'H-Factor Score (descending)';
        }
        else if (sortby == 'T_ASC') {
            this.SelCompanyData.sort(function (a, b) {
                return a.ticker.localeCompare(b.ticker);
            });
            this.selSortOrder = 'Ticker (ascending)';
        }
        else if (sortby == 'T_DES') {
            this.SelCompanyData.sort(function (a, b) {
                return b.ticker.localeCompare(a.ticker);
            });
            this.selSortOrder = 'Ticker (descending)';
        }
        else if (sortby == 'P_ASC') {
            this.SelCompanyData.sort(function (a, b) {
                return a.price - b.price;
            });
            this.selSortOrder = 'Price (ascending)';
        }
        else if (sortby == 'P_DES') {
            this.SelCompanyData.sort(function (a, b) {
                return b.price - a.price;
            });
            this.selSortOrder = 'Price (descending)';
        }
        this.showsortList = false;
    };
    IPadHomeToolComponent.prototype.onIndexBackClick = function () {
        this.showIndexList = false;
        this.showCountryList = true;
    };
    IPadHomeToolComponent.prototype.onIndexSelectClick = function () {
        var _this = this;
        this.GICSLevel = 0;
        this.selSortOrder = 'H-Factor Score (ascending)';
        this.showsortList = false;
        this.showETFSort = false;
        document.getElementById('RightDiv').style.opacity = '1';
        if (this.SelIndex == 'Equity Indexes') {
            this.showCountryList = true;
            this.showCompanyList = false;
            this.showETFCategories = false;
            // console.log(this.CountryCatsubIndex);
            this.countryList.length = 0;
            this.GlobalIndexDtata.forEach(function (val) {
                val.CountryGroup = val.indexName.indexOf('Europe') > -1 ? 'Europe' : val.country;
            });
            var temp = [];
            temp = this.GlobalIndexDtata.map(function (x) { return x.CountryGroup; }).filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            temp.forEach(function (val) {
                var t = [];
                t = _this.GlobalIndexDtata.filter(function (item) { return item.CountryGroup == val; }).map(function (x) { return x.scores; });
                // console.log(t);
                // console.log(this.getMed(t));
                var i = { 'Country': val, 'Med': _this.getMed(t) };
                _this.countryList.push(i);
            });
            this.countryList.sort(function (a, b) {
                return a.Med - b.Med;
            });
            console.log(this.countryList);
            console.log(this.GlobalIndexDtata);
        }
        else if (this.SelIndex == 'Fixed Income') {
            this.showFICountry = true;
            this.showCompanyList = false;
            this.showIndexList = false;
            this.showETFCategories = false;
            // this.showFiIndexList = false;
        }
        else if (this.SelIndex == 'NAA Indexes') {
            this.showNaaIndex = true;
            this.showCompanyList = false;
            this.showIndexList = false;
            this.showFICountry = false;
            this.showFiIndexList = false;
            this.showETFCategories = false;
        }
        else if (this.SelIndex == 'ETFs') {
            this.showETFCategories = true;
            this.showNaaIndex = false;
            this.showCompanyList = false;
            this.showIndexList = false;
            this.showFICountry = false;
            this.showFiIndexList = false;
        }
    };
    IPadHomeToolComponent.prototype.oncomapnyclick = function (itm) {
        this.selCompany = itm;
        this.getSectorList(itm);
        this.curGICSLev = 6;
        this.GICSLevel = 6;
        this.onGICSLevelClick(6);
        this.fnIndexSelClick(itm, 'click');
        // this.setClock(itm.isin, itm.deg * 360 / 100, itm.company + " (" + itm.ticker + ") [" + d3.format(".1f")(itm.score) + "%]", 'click', itm.stockKey, itm.score);
        console.log(this.selCompany);
    };
    IPadHomeToolComponent.prototype.onNAAIndexClick = function (itm) {
        itm.Med = itm.med / 100;
        this.selIndex = itm;
        this.showNaaIndex = false;
        this.showIndexList = false;
        this.showFICountry = false;
        this.showFiIndexList = false;
        this.SelCompanyData = this.NAAIndexData.filter(function (item) { return item.indexName == itm.indexName; });
        this.unsortedSelCompanyData = this.NAAIndexData.filter(function (item) { return item.indexName == itm.indexName; });
        this.TotalStockData = this.NAAIndexData.filter(function (item) { return item.indexName == itm.indexName; });
        this.SelCompanyData.sort(function (a, b) {
            return a.scores - b.scores;
        });
        this.unsortedSelCompanyData.sort(function (a, b) {
            return a.scores - b.scores;
        });
        this.TotalStockData.sort(function (a, b) {
            return a.scores - b.scores;
        });
        this.GICSLevel = 2;
        this.curGICSLev = 2;
        this.onGICSLevelClick(2);
        this.showCompanyList = true;
    };
    IPadHomeToolComponent.prototype.onGICSLevelClick = function (lev) {
        var _this = this;
        this.curGICSLev = lev;
        // this.TotalStockData = 
        this.selSortOrder = 'H-Factor Score (ascending)';
        console.log(lev);
        if (lev == 1) {
            this.SelCompanyData = this.GlobalIndexDtata.slice();
            this.unsortedSelCompanyData = this.GlobalIndexDtata.slice();
            this.getPercentCategories(this.GlobalIndexDtata);
        }
        else if (lev == 2) {
            this.SelCompanyData = this.TotalStockData.slice();
            this.unsortedSelCompanyData = this.TotalStockData.slice();
            console.log(this.SelCompanyData);
            console.log(this.unsortedSelCompanyData);
            console.log(this.TotalStockData);
            this.getPercentCategories(this.SelCompanyData);
        }
        else if (lev == 3) {
            this.SelCompanyData = this.TotalStockData.filter(function (x) { return x.industry.toString().substring(0, 2) == _this.selCompany.industry.toString().substring(0, 2); });
            this.unsortedSelCompanyData = this.TotalStockData.filter(function (x) { return x.industry.toString().substring(0, 2) == _this.selCompany.industry.toString().substring(0, 2); });
            this.getPercentCategories(this.SelCompanyData);
        }
        else if (lev == 4) {
            this.SelCompanyData = this.TotalStockData.filter(function (x) { return x.industry.toString().substring(0, 4) == _this.selCompany.industry.toString().substring(0, 4); });
            this.unsortedSelCompanyData = this.TotalStockData.filter(function (x) { return x.industry.toString().substring(0, 4) == _this.selCompany.industry.toString().substring(0, 4); });
            this.getPercentCategories(this.SelCompanyData);
        }
        else if (lev == 5) {
            this.SelCompanyData = this.TotalStockData.filter(function (x) { return x.industry.toString().substring(0, 6) == _this.selCompany.industry.toString().substring(0, 6); });
            this.unsortedSelCompanyData = this.TotalStockData.filter(function (x) { return x.industry.toString().substring(0, 6) == _this.selCompany.industry.toString().substring(0, 6); });
            this.getPercentCategories(this.SelCompanyData);
        }
        else if (lev == 6) {
            this.SelCompanyData = this.TotalStockData.filter(function (x) { return x.industry.toString().substring(0, 8) == _this.selCompany.industry.toString().substring(0, 8); });
            this.unsortedSelCompanyData = this.TotalStockData.filter(function (x) { return x.industry.toString().substring(0, 8) == _this.selCompany.industry.toString().substring(0, 8); });
            this.getPercentCategories(this.SelCompanyData);
        }
    };
    IPadHomeToolComponent.prototype.getFixedIncomeData = function () {
        var _this = this;
        this.httpClient.get(this.api_url + '/Scores/GetFixedDataMaster').subscribe(function (res) {
            console.log(res);
            var groupBy = function (xs, key) {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            };
            _this.FixedIncomeData = groupBy(res, 'country');
            console.log(_this.FixedIncomeData);
            var temp = res.map(function (x) { return x.country; }).filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            _this.FICountryList = temp;
            console.log(_this.FICountryList);
            temp.forEach(function (e) {
                var t = _this.FixedIncomeData[e];
                var tmedlist = t.map(function (x) { return _this.roundofMed(x.medianCont * 100); });
                var tmed;
                var array = tmedlist.sort();
                if (array.length % 2 === 0) { // array with even number elements
                    tmed = (parseFloat(array[array.length / 2]) + parseFloat(array[(array.length / 2) - 1])) / 2;
                    tmed = Math.round(tmed * 10) / 10;
                }
                else {
                    tmed = array[(array.length - 1) / 2]; // array with odd number elements
                }
                _this.FixedIncomeData[e].med = tmed;
            });
            console.log(_this.FixedIncomeData);
        });
    };
    IPadHomeToolComponent.prototype.onFICountryClick = function (itm) {
        this.selCountry = itm;
        this.showFICountry = false;
        this.showFiIndexList = true;
        this.FIselCatogaryList = this.FixedIncomeData[itm];
    };
    IPadHomeToolComponent.prototype.onFIIndexBackClick = function () {
        this.showFICountry = true;
        this.showFiIndexList = false;
    };
    IPadHomeToolComponent.prototype.onETFCatClick = function (item) {
        this.selETFCat = item;
        this.showETFCategories = false;
        this.showETFIndex = true;
        this.SelETFIndexList = this.GetETFs(item);
        console.log(this.SelETFIndexList);
    };
    IPadHomeToolComponent.prototype.onETFBackClick = function () {
        this.showETFCategories = true;
        this.showETFIndex = false;
    };
    IPadHomeToolComponent.prototype.roundofMed = function (val) {
        return (Math.round(val * 10) / 10).toFixed(1);
    };
    IPadHomeToolComponent.prototype.getMed = function (array) {
        //array = array.map(item => item.scores);
        //return array.filter(d=>{d.medianCont});
        array = array.sort();
        if (array.length % 2 === 0) { // array with even number elements
            return (array[array.length / 2] + array[(array.length / 2) - 1]) / 2;
        }
        else {
            return array[(array.length - 1) / 2]; // array with odd number elements
        }
    };
    IPadHomeToolComponent.prototype.GetETFValues = function () {
        var _this = this;
        var that = this;
        this.httpClient.get(this.api_url + "/Scores/GetETFMaster").subscribe(function (stockIndex) {
            that.ETFIndex = stockIndex;
            console.log(_this.ETFIndex);
            that.RollUpETF();
        });
    };
    IPadHomeToolComponent.prototype.RollUpETF = function () {
        var stockIndex = this.ETFIndex.sort(function (a, b) { return d3__WEBPACK_IMPORTED_MODULE_2__["ascending"](a.medianCont, b.medianCont); });
        this.PerfStockIndex = d3__WEBPACK_IMPORTED_MODULE_2__["nest"]()
            .key(function (d) {
            return d.category;
        })
            .rollup(function (v) {
            return {
                comp: v,
                med: d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d3__WEBPACK_IMPORTED_MODULE_2__["median"](v, function (d) { return d.medianCont * 100; })),
            };
        }).entries(stockIndex);
        stockIndex.forEach(function (x) {
            x.All = 'All';
        });
        var AllPerfStockIndex = d3__WEBPACK_IMPORTED_MODULE_2__["nest"]()
            .key(function (d) {
            return d.All;
        })
            .rollup(function (v) {
            return {
                comp: v,
                med: d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d3__WEBPACK_IMPORTED_MODULE_2__["median"](v, function (d) { return d.medianCont * 100; })),
            };
        }).entries(stockIndex);
        this.PerfStockIndex.unshift(AllPerfStockIndex[0]);
        this.ETFCategories = this.PerfStockIndex.map(function (x) { return x.key; });
        console.log(this.ETFCategories);
    };
    IPadHomeToolComponent.prototype.loadData = function () {
        this.gC360 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 90, 180, 270, 360])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        this.gC100 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        var ContainerDiv = document.getElementById("svgHContainer");
        this.gchart = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gchart");
        var that = this;
        this.chartMain = this.createMainChart(this.gchart);
    };
    IPadHomeToolComponent.prototype.createMainChart = function (obj) {
        var that = this;
        // Main Circle group Start
        var sradius = 100;
        var grp1 = obj.append("g").attr("id", "crlChart");
        grp1.append("circle")
            .attr("id", "maincircle")
            .attr("class", "start-ring")
            .attr("fill", "#fff")
            .attr("r", 0)
            .transition()
            .delay(300)
            .duration(1000)
            .on("end", function () {
            repeat();
            repeat1();
            that.CreateData("");
        });
        function repeat() {
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".ringAnim")
                .attr('r', (+sradius))
                .style('opacity', 1)
                .style('stroke-width', '5px')
                .transition()
                .delay(600)
                .duration(2000)
                .attr('r', sradius * 1.3)
                .style('stroke-width', '1px')
                .style('opacity', 0)
                .on("end", repeat);
        }
        function repeat1() {
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".preloding")
                .style('opacity', .5)
                .transition()
                .duration(1000)
                .style('opacity', 1)
                .transition()
                .duration(1000)
                .style('opacity', .5)
                .on("end", repeat1);
        }
        return grp1;
    };
    IPadHomeToolComponent.prototype.CreateData = function (d) {
        var _this = this;
        this.changedet.detectChanges();
        var APIURL = this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL";
        var fInd;
        var fURL = "../../../assets/data/";
        fInd = fURL + "siteGICS.csv";
        var that = this;
        this.getFixedIncomeData();
        this.httpClient.get(this.api_url + "/Industry/GetIndustry").subscribe(function (res) {
            that.dbGICS = res;
            console.log(that.dbGICS);
        });
        // if (d != "") {
        //   APIURL = this.api_url + "/Scores/GetNAAIndexScoresHist/GLOBAL/" + d;
        // }
        this.httpClient.get(APIURL).subscribe(function (res) {
            var dbScore = res;
            console.log(dbScore);
            that.selResData = dbScore.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["ascending"](x.scores, y.scores);
            });
            // that.IndexData = dbScore;
            console.log(that.selResData);
            var sMin = Math.min.apply(Math, that.selResData.map(function (d) { return d.scores; }));
            var sMax = Math.max.apply(Math, that.selResData.map(function (d) { return d.scores; }));
            console.log(sMin);
            console.log(sMax);
            var tradeDt = dbScore[0].tradeDate;
            that.tradeDt = tradeDt.slice(4, 6) + "/" + tradeDt.slice(6, 8) + "/" + tradeDt.slice(0, 4);
            that.date = new Date(_this.tradeDt);
            console.log(tradeDt);
            console.log(that.tradeDt);
            console.log(that.date);
            that.selResData.forEach(function (d, i) {
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
                d.indexName = d.indexName.replace("UR ", "S&P ");
                var flt = that.IndexOrder.filter(function (x) { return x.index == d.indexName; });
                d.sortOrder = flt.length > 0 ? flt[0].order : null;
                return d.score, d.isin, d.industry, d.deg, d.company, d.ticker, d.indname, d.stockKey, d.indexName, d;
            });
            console.log(that.selResData);
            that.GlobalIndexDtata = that.selResData.filter(function (item) { return item.indexName.indexOf('New Age Alpha') == -1; });
            that.NAAIndexData = that.selResData.filter(function (item) { return item.indexName.indexOf('New Age Alpha') != -1; });
            console.log(_this.GlobalIndexDtata);
            console.log(_this.NAAIndexData);
            var MedianList = that.getIndexPos(that.selResData);
            console.log(MedianList);
            var indexList = MedianList.map(function (x) { return x.value; });
            indexList = indexList.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            }).sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["ascending"](parseFloat(x.med), parseFloat(y.med));
            });
            that.IndexList = indexList.filter(function (val) {
                return val.indexName.indexOf("New Age Alpha") == -1;
            });
            console.log(that.IndexList);
            that.NAAIndexList = indexList.filter(function (val) {
                return val.indexName.indexOf("New Age Alpha") > -1;
            });
            console.log(that.NAAIndexList);
            that.GrpIndexList = that.getCountryPos(that.selResData);
            that.CountryCat = that.GrpIndexList.map(function (x) { return x.key; });
            console.log(that.CountryCat);
            that.CountryCatsubIndex = [];
            var lookupcountrylist;
            that.GrpIndexList.forEach(function (dt) {
                var filtereindexes = that.GetGlobals(dt.key);
                for (var i = 0; i < filtereindexes.length; i++) {
                    lookupcountrylist = new countryList();
                    lookupcountrylist.country = dt.key;
                    lookupcountrylist.filteredIndexes = "";
                    lookupcountrylist.filteredIndexes = filtereindexes[i];
                    lookupcountrylist.med = that.IndexList.filter(function (x) { return x.indexName == lookupcountrylist.filteredIndexes; }).length > 0 ? that.IndexList.filter(function (x) { return x.indexName == lookupcountrylist.filteredIndexes; })[0].med : 0;
                    that.CountryCatsubIndex.push(lookupcountrylist);
                }
            });
            _this.showLoader = false;
            console.log(that.CountryCatsubIndex);
            var lookup = [];
            var items = that.selResData;
            var resultData = [];
            items.forEach(function (dt) {
                if (!(lookup.indexOf(dt.stockKey) > -1)) {
                    lookup.push(dt.stockKey);
                    resultData.push(dt);
                }
            });
            _this.changedet.detectChanges();
            that.distCnt = resultData.length;
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".ringAnim").style("display", "none").remove();
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".preloding").style("display", "none").remove();
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#maincircle")
                .transition()
                .delay(300)
                .duration(1000)
                .attr('r', that.radius + 2)
                .style('stroke-width', '1px')
                .on("end", function () {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#maincircle")
                    .transition()
                    .duration(1000)
                    .style('stroke-width', '0px');
                that.creatGradienArc();
                that.Companies = that.selResData.filter(function (val) {
                    if (val.indexName.indexOf("New Age Alpha") == -1) {
                        return val;
                    }
                });
                that.creatBreadCrumb(that.chartMain);
                that.CreateComps(that.chartMain, that.selResData, "lvl1");
                that.createCompetitive(that.chartMain);
                that.createSctor(that.chartMain, 4);
                that.createSctor(that.chartMain, 3);
                that.createSctor(that.chartMain, 2);
                that.createSctor(that.chartMain, 1);
                that.createSctor(that.chartMain, 0);
                that.creatClockSlider();
                that.createCompeOver(that.chartMain);
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](".Homecenter")
                    .transition()
                    .duration(1000)
                    .style('opacity', '1');
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#dvSearchBox")
                    .transition()
                    .duration(1000)
                    .style('opacity', '1');
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#IndexSelector")
                    .transition()
                    .duration(1000)
                    .style('opacity', '1');
                jquery__WEBPACK_IMPORTED_MODULE_6__("#matAuto").show();
                jquery__WEBPACK_IMPORTED_MODULE_6__('#loadSpinner').fadeOut();
                jquery__WEBPACK_IMPORTED_MODULE_6__("#SearchedTxt").show();
                jquery__WEBPACK_IMPORTED_MODULE_6__('#SpinLoader').fadeOut();
                that.ETFIndex.forEach(function (obj) {
                    var Etfval = { companyName: obj.etfName, isin: obj.assetId, ticker: obj.ticker, indexName: "ETF", country: obj.category };
                    that.Companies.push(Etfval);
                });
            });
        });
    };
    IPadHomeToolComponent.prototype.getGlobalMed = function () {
        var temp = this.GlobalIndexDtata.map(function (x) { return x.scores; });
        return this.getMed(temp);
    };
    IPadHomeToolComponent.prototype.getPercentCategories = function (data) {
        console.log(data);
        var t1 = data.filter(function (x) { return x.scores <= .25; }).length;
        var t2 = data.filter(function (x) { return x.scores >= .25 && x.scores <= .50; }).length;
        var t3 = data.filter(function (x) { return x.scores >= .50 && x.scores <= .75; }).length;
        var t4 = data.filter(function (x) { return x.scores >= .75 && x.scores <= 1; }).length;
        var temp = [{ 'Tag': '0-25%', 'value': t1 }, { 'Tag': '25-50%', 'value': t2 }, { 'Tag': '50-75%', 'value': t3 }, { 'Tag': '75-100%', 'value': t4 }];
        this.currentPercentCat = temp;
        console.log(temp);
    };
    IPadHomeToolComponent.prototype.replacestr = function (str) {
        return str.replace('New Age Alpha ', '');
    };
    IPadHomeToolComponent.prototype.createCompeOver = function (grp1) {
        grp1.append("g").attr("id", "gCompeOver");
    };
    IPadHomeToolComponent.prototype.creatClockSlider = function () {
        var that = this;
        var r = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#maincircle").attr("r");
        that.createXrad = parseInt(r);
        // console.log(that.createXrad, r);
        var g = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#crlChart").append("g")
            .attr("id", "cSlider")
            .attr('transform', 'rotate(' + (-90) + ')')
            .on('mousedown', onDown)
            .on("touchstart", onDown);
        var rect1 = g.append("rect")
            .attr("class", "sRect1")
            .attr("x", r - 18)
            .attr("y", -.5)
            .attr("height", 1)
            .attr("width", 50)
            .attr("fill", "#00b9ff");
        var circle = g.append("circle")
            .attr("class", "sCircle")
            .attr("r", 6)
            .attr("cx", r - 12)
            .attr("fill", "#00b9ff")
            .style('cursor', 'pointer')
            .style("stroke-width", 4)
            .style("stroke", "#fff");
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
            .style("font-size", "12px")
            .style("display", "none")
            .text("0.00");
        var data;
        function onDown() {
            data = d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".compList[style='display: block;']").selectAll(".comp").data();
        }
    };
    IPadHomeToolComponent.prototype.fnIndexSelClick = function (d, type) {
        var that = this;
        that.SelIndexName = d.indexName;
        var SelRows = that.selResData.filter(function (x) { return x.isin == d.isin; });
        var RectOn = d3__WEBPACK_IMPORTED_MODULE_2__["select"](".rectOn");
        var ChkRecton = null;
        if (RectOn.node() != null) {
            ChkRecton = RectOn.node().parentNode.id == "nav-1";
        }
        if (type == "CompClick") {
            ChkRecton = true;
        }
        var strtype = type == "" ? (that.FromClick == "ETFClick" ? "ETFCompClick" : (that.FromClick == "indexClick" ? "indexCompClick" : that.FromClick)) : type;
        that.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + d.ticker + ") [" + d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d.score) + "%]", strtype, d.stockKey, d.score);
    };
    IPadHomeToolComponent.prototype.createSctor = function (grp1, lvl) {
        var gs = grp1.append("g")
            .attr("id", "levl" + lvl)
            .attr("class", "gics");
        gs.append("circle").attr("r", 20).attr("fill", "#fff");
        gs.append("text").attr("y", 3).attr("class", "med");
        gs.append("text").attr("y", 35).attr("class", "name");
    };
    IPadHomeToolComponent.prototype.createCompetitive = function (grp1) {
        grp1.append("g").attr("id", "gCompetitive");
    };
    IPadHomeToolComponent.prototype.Replacetxt = function (val) {
        return val.replace(/ /g, '_').replace(/&/g, '').replace('Large-Cap', 'LargeCap').replace('U.S.', 'US');
    };
    IPadHomeToolComponent.prototype.GetETFHoldings = function (ctId, etfName, mode) {
        var _this = this;
        var that = this;
        //this.showLoadSpinner = true;
        // $('#SpinLoader').css('display', 'flex');
        // this.SelTab = "Stocks";
        var IndexN = that.Replacetxt(etfName);
        that.searchETFValName = IndexN;
        // console.log(that.searchETFValName);
        //this.CheckETFIndexSelectedCompany = true;
        that.selETFCompanyName = etfName;
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".circle").classed("is-selected", false);
        //d3.select("#" + IndexN).classed("is-selected", true);
        this.httpClient.get(this.api_url + "/Scores/GetETFCurrent/" + ctId).subscribe(function (EtfStocks) {
            var Name = etfName;
            that.SelAssetId = Name;
            that.selResData.forEach(function (d, i) {
                var val = EtfStocks.filter(function (x) { return x.isin == d.aisin; });
                if (d.indexName.indexOf("New Age Alpha") == -1) {
                    d.Assets = val.length > 0 ? Name : 0;
                }
            });
            var SelISIN = _this.selResData.filter(function (x) { return x.Assets == Name; })[0].isin;
            var IndexN = _this.selResData.filter(function (x) { return x.Assets == Name; })[0].indexName;
            if (SelISIN != "") {
                _this.SelIndexName = IndexN;
                var d = d3__WEBPACK_IMPORTED_MODULE_2__["select"](".comp[name='" + SelISIN + "_" + IndexN.replace(/ /g, '_') + "']").datum();
                _this.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + d.ticker + ") [" + d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d.score) + "%]", mode == "Search" ? "ETFClick" : "ETFClick", d.stockKey, d.score);
            }
            //console.log(ctId)
            //console.log(this.selResData.filter(x => x.Assets == Name))
            // this.showLoadSpinner = false;
            // $('#SpinLoader').fadeOut();
            // this.fnStockstabclick("Stocks");
        });
        //this.SelTab = "ETF";
        this.IsShowDD = !this.IsShowDD;
        if (mode == "Search") {
            this.IsShowDD = false;
        }
    };
    IPadHomeToolComponent.prototype.onsearchchages = function (val) {
        console.log(val);
        if (val.length > 0) {
            this.filteredCompanies = this.selResData.filter(function (item) { return item.companyName.toLowerCase().indexOf(val) > -1 || item.ticker.toLowerCase().indexOf(val) > -1; });
            console.log(this.filteredCompanies);
        }
        else {
            this.filteredCompanies.length = 0;
        }
    };
    IPadHomeToolComponent.prototype.GetSelected = function (value) {
        console.log(value);
        value = value.toString();
        this.changedet.detectChanges();
        this.IsShowDD = false;
        this.SelTab = "Stocks";
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".card-body").selectAll(".circle").classed("is-selected", false);
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".card-body").selectAll("li").classed("is-selected", false);
        this.fnStockstabclick("Stocks");
        // this.closeETF();
        var selComp = this.Companies.filter(function (x) { return x.isin == value.split('_')[0]; })[0];
        var selIndex = value.split('_')[1];
        if (selIndex == "ETF") {
            var selETF = this.ETFIndex.filter(function (x) { return x.assetId == value.split('_')[0]; })[0];
            this.GetETFHoldings(selETF.assetId, selETF.etfName, "Search");
            this.filteredCompanies.length = 0;
            // try {
            //     this.angulartics2.eventTrack.next({
            //         action: 'Company Search',
            //         properties: { category: 'HomeTool', label: selETF.company + " (" + selETF.ticker + ")", value: selETF.company + " (" + selETF.ticker + ")" }
            //     });
            // } catch (e) { console.log(e); }
        }
        else {
            //  d3.select(".comp[name='" + value.replace(/ /g, '_') + "']").dispatch('click');
            var d = d3__WEBPACK_IMPORTED_MODULE_2__["select"](".comp[name='" + value.replace(/ /g, '_') + "']").datum();
            console.log(d);
            this.filteredCompanies.length = 0;
            this.searchText = '';
            this.SelIndexName = d.indexName;
            this.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + d.ticker + ") [" + d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d.score) + "%]", "CompClick", d.stockKey, d.score);
            // try {
            //     this.angulartics2.eventTrack.next({
            //         action: 'Company Search',
            //         properties: { category: 'HomeTool', label: selComp.company + " (" + selComp.ticker + ")", value: selComp.company + " (" + selComp.ticker + ")" }
            //     });
            // } catch (e) { console.log(e); }
        }
    };
    IPadHomeToolComponent.prototype.CreateComps = function (oSvg, dta, lvl) {
        var that = this;
        var compLst;
        var gExist = d3__WEBPACK_IMPORTED_MODULE_2__["select"](".compLst" + lvl)._groups[0];
        if (gExist != "") {
            compLst = oSvg.select('.compLst' + lvl).remove();
        }
        compLst = oSvg.append("g").attr('class', 'compList compLst' + lvl).style("display", "block");
        var compC = compLst.append("g").attr("class", 'compLstC' + lvl);
        var compg = compC.selectAll("g")
            .data(dta)
            .enter().append("g")
            .attr("class", "comp")
            .attr('fill', '#fff')
            .attr("transform", function (d, i) { return "rotate(" + ((d.deg * 360 / 100) - 90) + ")"; })
            .attr("name", function (d) { return d.isin + "_" + d.indexName.replace(/ /g, '_'); })
            .on("click", function (elemData) {
            var gblSelId = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).attr("name");
            var d = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).datum();
            that.fnIndexSelClick(d, "CompClick");
            that.hideSidebar();
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".sRect1").style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".sRect").style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".sRectCompare").style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".sRectCompareOverlay").style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sText").style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sTextReverse").style("opacity", "1");
        });
        var dmin = d3__WEBPACK_IMPORTED_MODULE_2__["min"](dta.map(function (x) { return x.marketCap; }));
        var dmax = d3__WEBPACK_IMPORTED_MODULE_2__["max"](dta.map(function (x) { return x.marketCap; }));
        var dmean = d3__WEBPACK_IMPORTED_MODULE_2__["mean"](dta.map(function (x) { return x.marketCap; }));
        var dsum = d3__WEBPACK_IMPORTED_MODULE_2__["sum"](dta.map(function (x) { return x.marketCap; }));
        var ResMarketCap = dta.map(function (x) { return x.marketCap; });
        var LimitedCap = ResMarketCap.filter(function (x) { return x < dmean && x != null; });
        var dlimitedSum = d3__WEBPACK_IMPORTED_MODULE_2__["sum"](LimitedCap);
        var rmax = (dmax - dmin) > 100 ? 100 : (dmax - dmin);
        rmax = rmax < 50 ? 50 : rmax;
        var h = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([dmin, dmax])
            .range([0, 50]);
        var LimitedMarketCap = compg.append("rect")
            .attr("height", "1px")
            .attr("class", "crect")
            //.attr("fill", "rgba(100,100,100,.5)") 
            .attr("x", that.radius)
            .attr("width", 0)
            .transition()
            .duration(2000)
            .attr("width", function (d) {
            //var co = d.company; return (co.length / 2) + "px";
            if (d.indexName.indexOf("New Age Alpha") > -1) {
                return "0px";
            }
            var wt = ((d.marketCap / dlimitedSum) * 10000);
            if (d.marketCap < dmean) {
                return wt + "px";
            }
            else {
                wt = ((d.marketCap / dsum) * 10000);
                if (wt > 18) {
                    wt = 18 + wt / 10;
                }
                return wt + "px";
            }
        });
    };
    IPadHomeToolComponent.prototype.showCompOver = function (el, dat) {
        var that = this;
        var gs = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompeOver");
        gs.selectAll("g").remove();
        var ggs = gs.append("g")
            .attr("transform", function () { return "rotate(" + ((dat.score * 3.6) - 90) + ")"; });
        ggs.append("text")
            .style("text-anchor", function () {
            return (dat.score * 3.6) > 180 ? "end" : null;
        })
            .attr("x", function () {
            return (dat.score * 3.6) > 180 ? "-205" : "205";
        })
            .attr("transform", function (d) {
            //  return val > 180 ? "rotate(180 " + (+r + 140) + ", 0)" : null;
            return (dat.score * 3.6) > 180 ? "rotate(180)" : null;
        })
            .style("text-anchor", function (d) {
            return (dat.score * 3.6) > 180 ? "end" : null;
        })
            .text(function () { return dat.company + " (" + dat.ticker + ") [" + d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(dat.score) + "%]"; }).call(that.wrap, 100);
        gs.on("mouseover", function () {
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompeOver").style("display", "block");
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](el).select(".crect").classed("onrect", true);
        });
        gs.on("mouseout", function () {
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompeOver").style("display", "none");
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](el).select(".crect").classed("onrect", false);
        });
        gs.on("click", function (elemData) {
            var d = d3__WEBPACK_IMPORTED_MODULE_2__["select"](el).datum();
            that.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + dat.ticker + ") [" + d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d.score) + "%]", "click", d.stockKey, d.score);
            that.hideSidebar();
            // try {
            //   that.angulartics2.eventTrack.next({
            //     action: 'Company Click',
            //     properties: { category: 'HomeTool', label: d.company + " (" + d.ticker + ")", value: d.company + " (" + d.ticker + ")" }
            //   });
            // } catch (e) { console.log(e); }
        });
    };
    IPadHomeToolComponent.prototype.setClock = function (isin, val, txt, from, stockKey, score) {
        this.FromClick = from;
        if (txt != null) {
            if (from != "indexClick") {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").style("display", "block");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gPerformance").style("display", "block");
            }
            else {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").style("display", "none");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gPerformance").style("display", "none");
                this.indexPerf = [];
                this.BMPerf = [];
            }
            if (from != "random") {
                // d3.select("#gBreadCrumb").style("display", "block");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#viewport4").style("display", "block");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHelp").style("display", "none");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHand").style("display", "none");
            }
            if (from == "CompClick" && this.SelTab == "ETF") {
                this.SelTab = "Global";
            }
            // console.log("======"+from+"=======");
            var that_1 = this;
            that_1.SelISIN = isin;
            var r = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#maincircle").attr("r");
            var gC360_1 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
                .domain([0, 90, 180, 270, 360])
                .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
            if (from == "click" || from == "random") {
                if (from == "random") {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHelp")
                        // .style("display", "block")
                        .style("opacity", "1")
                        .transition()
                        .duration(600)
                        .style("opacity", "0")
                        .style("display", "none");
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHand")
                        // .style("display", "block")
                        .style("opacity", "0")
                        .transition()
                        .duration(300)
                        .style("opacity", "1");
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider")
                        .transition()
                        .ease(d3__WEBPACK_IMPORTED_MODULE_2__["easeExp"])
                        .delay(800)
                        .duration(800)
                        .attr('transform', 'rotate(' + (val - 90) + ')')
                        .attr('name', isin)
                        .on("end", function () {
                        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHand")
                            .style("display", "none")
                            .style("opacity", "1")
                            .transition()
                            .duration(600)
                            .style("opacity", "0")
                            .style("display", "none");
                        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHelp")
                            //.style("display", "block")
                            .style("opacity", "0")
                            .transition()
                            .duration(600)
                            .style("opacity", "1");
                        //.style("display", "block")
                    });
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHelp")
                        .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)');
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHand")
                        .transition()
                        .ease(d3__WEBPACK_IMPORTED_MODULE_2__["easeExp"])
                        .delay(800)
                        .duration(800)
                        .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)');
                }
                else {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHelp")
                        .style("display", "none");
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHand")
                        .style("display", "none");
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider")
                        .transition()
                        .ease(d3__WEBPACK_IMPORTED_MODULE_2__["easeExp"])
                        .duration(800)
                        .attr('transform', 'rotate(' + (val - 90) + ')')
                        .attr('name', isin)
                        .on("end", function () {
                        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".sRect1").style("opacity", "1");
                        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".sRect").style("opacity", "1");
                        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".sRectCompare").style("opacity", "1");
                        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".sRectCompareOverlay").style("opacity", "1");
                        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sText").style("opacity", "1");
                        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sTextReverse").style("opacity", "1");
                    });
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHand")
                        .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)');
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHelp")
                        .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)');
                }
            }
            else {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider")
                    .attr('transform', 'rotate(' + (val - 90) + ')')
                    .attr('name', isin);
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHand")
                    .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)');
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHelp")
                    .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)');
            }
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sText")
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
                if (score >= 40 && score < 55) {
                    return "#FF9503";
                }
                else {
                    return "#fff";
                }
            })
                .text(txt).call(that_1.wrap, 100);
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").style("display", "block");
            var bbox = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sText").node().getBBox();
            var bboxH = +bbox.height + 20;
            bboxH = bboxH > 40 ? bboxH : 40;
            if (val > 180) {
                //  d3.select("#cSlider").select("sText")
                //  .style("text-anchor", "start")
                //  .attr("x", -bbox.width - 200)
            }
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sRect")
                .attr("fill", function () { return gC360_1(val); })
                .style("display", function () { return txt == null ? "none" : "block"; })
                .attr("height", bboxH)
                .attr("width", bbox.width + 30)
                .attr("y", -(bboxH / 2));
            var calW = parseInt(that_1.createXrad + bbox.width);
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sTextReverse")
                .attr("fill", "#fff")
                .style("display", function () { return txt == null ? "none" : "block"; })
                //.attr("height", bboxH)
                //.attr("width", 30)
                // .attr("x", -(bboxH + 0))
                .attr("x", function () {
                // return bboxH == 40 ? -(bboxH + 0) : -(bboxH - 3);
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
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".recton").classed("recton", false);
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".comp[name='" + isin + "_" + that_1.SelIndexName.replace(/ /g, '_') + "']").raise();
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".comp[name='" + isin + "_" + that_1.SelIndexName.replace(/ /g, '_') + "']").select("rect").classed("recton", true);
            console.log(this.SelIndexName);
            var selData = d3__WEBPACK_IMPORTED_MODULE_2__["select"](".comp[name='" + isin + "_" + that_1.SelIndexName.replace(/ /g, '_') + "']").datum();
            if (from == "click") {
                that_1.companiesCtrl.setValue(selData.isin);
            }
            // console.log(this.selResData);
            that_1.createHomecontent(selData, selData.deg * 360 / 100);
            var index = this.selResData.filter(function (d) {
                //if (that.SelTab == "ETF") {
                if (that_1.FromClick == "ETFClick" || that_1.FromClick == "ETFCompClick") {
                    return d.Assets == that_1.SelAssetId;
                }
                else {
                    //if (selData.indexName == "S&P USA Extra" || selData.indexName == "S&P USA Ex S&P 1500") {
                    //  return ((d.indexName == selData.indexName && d.relatedIndexes[0] == selData.relatedIndexes[0]) || d.indexName == selData.relatedIndexes[0])
                    //}
                    //else {
                    return d.indexName == selData.indexName;
                    //}
                }
            });
            that_1.SelIndexName = selData.indexName;
            var lvl1 = index.filter(function (d) { return d.industry.substring(0, 2) == selData.industry.substring(0, 2); });
            var lvl2 = lvl1.filter(function (d) { return d.industry.substring(0, 4) == selData.industry.substring(0, 4); });
            var lvl3 = lvl2.filter(function (d) { return d.industry.substring(0, 6) == selData.industry.substring(0, 6); });
            var lvl4 = lvl3.filter(function (d) { return d.industry == selData.industry; });
            var dta = lvl4.sort(function (x, y) { return d3__WEBPACK_IMPORTED_MODULE_2__["ascending"](x.score, y.score); });
            var max = [], min = [];
            if (dta.length > 0) {
                try {
                    var RectOn = d3__WEBPACK_IMPORTED_MODULE_2__["select"](".rectOn");
                    if (RectOn.node() != null) {
                        if (RectOn.node().parentNode.id != "nav-1") {
                            that_1.fillCompetives(dta, isin, RectOn.node().parentNode.id.replace("nav", ""));
                        }
                        else {
                            var gs = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive");
                            gs.selectAll("g").remove();
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
            var naa = this.getSectorPos(this.selResData, -1);
            var indexPos = this.getSectorPos(index, 0);
            var lvl1Pos = this.getSectorPos(lvl1, 1);
            var lvl2Pos = this.getSectorPos(lvl2, 2);
            var lvl3Pos = this.getSectorPos(lvl3, 3);
            var lvl4Pos = this.getSectorPos(lvl4, 4);
            this.creatNav(-1, naa);
            this.creatNav(0, indexPos);
            this.creatNav(1, lvl1Pos);
            this.creatNav(2, lvl2Pos);
            this.creatNav(3, lvl3Pos);
            this.creatNav(4, lvl4Pos);
            //console.log(from);
            if (from == "indexClick" || from == "ETFClick") {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#nav0").dispatch('click');
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#nav1").style("display", "none");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#nav2").style("display", "none");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#nav3").style("display", "none");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#nav4").style("display", "none");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").style("display", "block");
                // d3.select(".gridselcomp").select("rect").classed("highlt", "true"); 
            }
            else {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#nav4").dispatch("click");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#nav1").style("display", "block");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#nav2").style("display", "block");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#nav3").style("display", "block");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#nav4").style("display", "block");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").style("display", "block");
                // d3.select("#chartGroup").selectAll("rect").classed("highlt", "false");
            }
            if (from != "random")
                that_1.hideSidebar();
            d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".GridList").style("display", "block");
            //d3.selectAll(".card-body").selectAll(".circle").classed("is-selected", false);
            //d3.selectAll(".card-body").selectAll("li").classed("is-selected", false);
            // console.log(that.SelIndexName);
            // this.CheckETFIndexSelectedCompany = true;
            // d3.selectAll(".accordion-content").selectAll("#" + that.SelIndexName.replace(/ /g, '_')).classed("is-selected", true);
            // d3.select("#" + that.SelIndexName.replace(/ /g, '_').replace(/&/g, '').replace('Large-Cap', 'LargeCap').replace('U.S.', 'US')).classed("is-selected", true);
            if (from != "indexClick" && from != "ETFClick") {
                that_1.fnGetStockPerformance(stockKey);
            }
            setTimeout(function () {
                if (that_1.IsShowAll)
                    that_1.refreshGrid();
                else
                    that_1.MinimizeGrid();
            }, 100);
        }
    };
    IPadHomeToolComponent.prototype.GetETFs = function (ctname) {
        return this.PerfStockIndex.filter(function (x) { return x.key == ctname; })[0].value.comp;
    };
    IPadHomeToolComponent.prototype.GetETFMed = function (ctname) {
        return this.PerfStockIndex.filter(function (x) { return x.key == ctname; })[0].value.med;
    };
    IPadHomeToolComponent.prototype.getColorMed = function (score) {
        var gC100 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            //  .range(["#4c9443", "#95a93b", "#ddbb29", "#b87b2b", "#94382d"]);
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        return gC100(d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(score));
    };
    IPadHomeToolComponent.prototype.GetGlobalsMedc = function (ctname) {
        return this.IndexList.filter(function (x) { return x.indexName == ctname; }).length > 0 ? this.IndexList.filter(function (x) { return x.indexName == ctname; })[0].medc : 0;
    };
    IPadHomeToolComponent.prototype.GetGlobalMed = function (ctname) {
        return this.GrpIndexList.filter(function (x) { return x.key == ctname; }).length > 0 ? this.GrpIndexList.filter(function (x) { return x.key == ctname; })[0].value.med : 0;
    };
    IPadHomeToolComponent.prototype.GetGlobalMedc = function (ctname) {
        return this.GrpIndexList.filter(function (x) { return x.key == ctname; }).length > 0 ? this.GrpIndexList.filter(function (x) { return x.key == ctname; })[0].value.medc : 0;
    };
    IPadHomeToolComponent.prototype.navPos = function (val) {
        var sx, sy = 0;
        sx = Math.cos(((val * 3.6) * Math.PI) / 180);
        sy = Math.sin(((val * 3.6) * Math.PI) / 180);
        return "translate(" + sx * 350 + "," + ((sy * 350) - 20) + ")";
    };
    IPadHomeToolComponent.prototype.creatNav = function (lvl, v) {
        var that = this;
        var gC100 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            //  .range(["#4c9443", "#95a93b", "#ddbb29", "#b87b2b", "#94382d"]);
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        var trans = "";
        var lvlnm = "";
        var GICSName = "";
        switch (lvl) {
            case -1:
                trans = that.navPos(58.5);
                // trans = "translate(-320,-150)"
                lvlnm = "Global Universe";
                GICSName = "New Age Alpha";
                break;
            case 0:
                trans = that.navPos(55.5);
                // trans = "translate(-340,-90)"
                lvlnm = (that.FromClick == "ETFClick" || that.FromClick == "ETFCompClick") ? "ETF" : "Index";
                if (v.length > 1) {
                    GICSName = "S&P USA";
                }
                else {
                    GICSName = that.findIndName(that.dbGICS, v[0].key);
                }
                break;
            case 1:
                trans = that.navPos(52.5);
                // trans = "translate(-350,-30)"
                lvlnm = "Sector";
                GICSName = that.findIndName(that.dbGICS, v[0].key);
                break;
            case 2:
                trans = that.navPos(49.5);
                // trans = "translate(-350,30)"
                lvlnm = "Industry Group";
                GICSName = that.findIndName(that.dbGICS, v[0].key);
                break;
            case 3:
                trans = that.navPos(46.5);
                //trans = "translate(-340,90)"
                lvlnm = "Industry";
                GICSName = that.findIndName(that.dbGICS, v[0].key);
                break;
            case 4:
                trans = that.navPos(43.5);
                //trans = "translate(-320,150)"
                lvlnm = "Sub Industry";
                GICSName = that.findIndName(that.dbGICS, v[0].key);
                break;
        }
    };
    IPadHomeToolComponent.prototype.fnBuildGrid = function (data, ind, selisin) {
        this.changedet.detectChanges();
        ind = 4;
        var that = this;
        data = data.filter(function (x) { return x.isin != ""; });
        var resultData = data;
        that.CompetLength = resultData.length;
        var ob = resultData.filter(function (d) { return d.isin === selisin; })[0];
        var obi = resultData.indexOf(ob);
        that.GridData = resultData;
        var scrollDiv = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#viewport" + ind);
        scrollDiv.selectAll("*").remove();
        scrollDiv.append("div")
            .attr("class", "divbox");
        var scrollSVG = scrollDiv.append("svg")
            .attr("class", "scroll-svg");
        var defs = scrollSVG.insert("defs", ":first-child");
        createFilters(defs);
        var chartGroup = scrollSVG.append("g")
            .attr("class", "chartGroup").attr("id", "chartGroup");
        function gradient1(colour, id, x1, x2, off1, off2, op1, op2) {
            //gradient function.
            //defines the gradient
            scrollSVG.select("#defs" + id).remove();
            scrollSVG.append("defs")
                .attr("id", "defs" + id)
                .append("linearGradient")
                .attr("id", id)
                .attr("x1", x1).attr("y1", "0%")
                .attr("x2", x2).attr("y2", "0%");
            var idtag = '#' + id;
            //defines the start
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](idtag)
                .append("stop")
                .attr("stop-color", colour)
                .attr("class", "begin")
                .attr("offset", off1)
                .attr("stop-opacity", op1);
            //and the finish
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](idtag)
                .append("stop")
                .attr("class", "end")
                .attr("stop-color", colour)
                .attr("offset", off2)
                .attr("stop-opacity", op2);
        }
        var rowEnter = function (rowSelection) {
            rowSelection.append("rect")
                .attr("rx", 15)
                .attr("ry", 15)
                .attr("x", 30)
                .attr("width", "230")
                .attr("height", "32")
                .attr("fill-opacity", 1)
                .attr("class", "SelPart");
            var towtxt1 = rowSelection.append("text")
                .attr("class", "txt1 SelPart")
                .attr("transform", "translate(10,13)")
                .attr("x", 60)
                .attr("fill", "#fff");
            rowSelection.append("rect")
                .attr("rx", 7)
                .attr("ry", 7)
                .attr("x", 210)
                .attr("y", 3)
                .attr("width", "40")
                .attr("height", "14")
                .attr("fill", "#fff")
                .attr("class", "SelPart");
            var towtxt2 = rowSelection.append("text")
                .attr("class", "txt2 SelPart")
                .attr("transform", "translate(10,13)")
                .style("text-anchor", "middle")
                .attr("x", 221)
                .attr("fill", "#fff");
            var towtxt3 = rowSelection.append("text")
                .attr("class", "txt3")
                .attr("transform", "translate(-4,13)")
                .style("text-anchor", "middle")
                .attr("x", 55)
                .attr("fill", "#fff");
            var towtxt4 = rowSelection.append("text")
                .attr("class", "txt4 SelPart")
                .attr("transform", "translate(10,27)")
                .attr("x", 60)
                .attr("fill", "#fff");
            var towtxt5 = rowSelection.append("text")
                .attr("class", "txt5 SelPart")
                .attr("transform", "translate(10,28)")
                .style("text-anchor", "end")
                .attr("x", 235)
                .attr("fill", "#fff");
            rowSelection.append("rect")
                .attr("rx", 0)
                .attr("ry", 0)
                .attr("x", 32)
                .attr("y", -3)
                .attr("width", "230")
                .attr("height", "33")
                .attr("fill-opacity", 0.001)
                .attr("class", "baseSelPart");
        };
        var rowUpdate = function (rowSelection) {
            var cl = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
                .domain([0, 25, 50, 75, 100])
                //.range(["#4c9443", "#95a93b", "#ddbb29", "#b87b2b", "#94382d"])
                .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
            rowSelection.select("rect.SelPart")
                .attr("fill", function (d, i) {
                if (d.isin != "") {
                    //  gradient1(cl(d.score + 1), "grad" + ind + "_" + i, "30%", "90%", "30%", "90%", 1, 1);
                    //  return "url(#grad" + ind + "_" + i + ")"; 
                    return cl(d.score + 1);
                }
            }).attr("class", function (d, i) {
                if (that.FromClick == "indexClick" || that.FromClick == "ETFClick") {
                    return "SelPart";
                }
                else {
                    return "SelPart highlt";
                }
            });
            var towtxt = rowSelection;
            towtxt.selectAll("text").attr("fill", function (d) {
                if (d.score >= 40 && d.score < 55) {
                    return "#FF9503";
                }
                else {
                    return "#fff";
                }
            });
            towtxt.select(".txt2").attr("fill", function (d) {
                if (d.score >= 40 && d.score < 55) {
                    return "#FF9503";
                }
                else {
                    return cl(d.score + 1);
                }
            });
            towtxt.select(".txt1")
                .text(function (d) {
                if (d.isin != "") {
                    var totCont = d.ticker;
                    return totCont;
                }
            });
            towtxt.select(".txt4")
                .text(function (d) {
                if (d.isin != "") {
                    var txtContent = d.company;
                    var totCont = txtContent;
                    if (totCont.length >= 26) {
                        var t = d.ticker;
                        return txtContent.slice(0, 22).trim() + "...";
                    }
                    return totCont;
                }
            });
            towtxt.select(".txt2")
                .text(function (d) {
                if (d.isin != "") {
                    return d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d.score) + "%";
                }
            });
            towtxt.select(".txt5")
                .text(function (d) {
                if (d.isin != "") {
                    return (d.currency) + " " + d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d.price);
                }
            });
            towtxt.select(".txt3")
                .text(function (d, i) {
                if (d.isin != "") {
                    // return (d.index  ) + " / " + (data.length-2 );
                    return (d.index);
                }
            });
            rowSelection.selectAll(".baseSelPart").on("mouseover", function (d) {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").selectAll("g").select("text").classed("onOpacity", true);
                if (d.isin != "" && d.isin == selisin) {
                    // d3.select("#gCompetitive").select(".Compet" + d.isin).select("text").classed("onOpacity", false);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").select(".Compet" + d.isin).classed("on", true);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").select(".Compet" + d.isin).style("opacity", "1");
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").select(".Compet" + d.isin).raise();
                }
                if (d.isin != "" && d.isin != selisin) {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").selectAll(".on").classed("on", false);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](".comp[name='" + selisin + "']").select("rect").classed("recton", false);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").select(".Compet" + d.isin).classed("on", true);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").select(".Compet" + d.isin).style("opacity", "1");
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").select(".Compet" + d.isin).raise();
                }
            });
            rowSelection.selectAll(".baseSelPart").on("mouseout", function (d) {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").selectAll("g").select("text").classed("onOpacity", false);
                if (d.isin != "" && d.isin != selisin) {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive").selectAll(".on").classed("on", false);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](".comp[name='" + selisin + "']").select("rect").classed("recton", true);
                }
            });
            rowSelection.selectAll(".baseSelPart").on("click", function (d) {
                if (d.isin != "") {
                    if (d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#dec-1").style("display") == "block") {
                        that.fnIndexSelClick(d, "CompClick");
                    }
                    else {
                        that.fnIndexSelClick(d, "");
                    }
                }
            });
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#viewport4").on("mouseout", function (d) {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sRect1").style("opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sRect").style("opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sRectCompare").style("opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sRectCompareOverlay").style("opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sText").style("opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sTextReverse").style("opacity", "1");
            });
        };
        var rowExit = function (rowSelection) {
        };
        // tack on index to each data item for easy to read display
        var rowi = 0;
        data.forEach(function (nextState, i) {
            if (nextState.isin != "") {
                rowi++;
            }
            nextState.index = rowi;
        });
        var selind = data.filter(function (d) { return d.isin === selisin; })[0];
        var rowj = 0;
        data.forEach(function (nextState, i) {
            if (nextState.isin != "") {
                rowj++;
            }
            nextState.sort = rowj;
        });
        var name = "viewport4";
        that.virtualScroller = d3VirtualScroller()
            .selcompany(selind)
            .rowHeight(36)
            .enter(rowEnter)
            .update(rowUpdate)
            .exit(rowExit)
            .svg(scrollSVG)
            .totalRows(data.length)
            .tname(0)
            .viewport(d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#viewport4"));
        that.virtualScroller.data(data, function (d) {
            return d.isin;
        });
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".viewport").style("overflow-y", "auto");
        chartGroup.call(that.virtualScroller);
        // d3.selectAll(".viewport").style("display", "none");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#viewport" + ind).style("display", "block");
        function createFilters(svgDefs) {
            var filter = svgDefs.append("svg:filter")
                .attr("id", "dropShadow1")
                .attr("x", "0")
                .attr("y", "0")
                .attr("width", "100%")
                .attr("height", "100%");
            filter.append("svg:feOffset")
                .attr("result", "offOut")
                .attr("in", "SourceAlpha")
                .attr("dx", "1")
                .attr("dy", "1");
            filter.append("svg:feColorMatrix")
                .attr("result", "matrixOut")
                .attr("in", "offOut")
                .attr("type", "matrix")
                .attr("values", "0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.2 0");
            filter.append("svg:feGaussianBlur")
                .attr("result", "blurOut")
                .attr("in", "matrixOut")
                .attr("stdDeviation", "1");
            filter.append("svg:feBlend")
                .attr("in", "SourceGraphic")
                .attr("in2", "blurOut")
                .attr("mode", "normal");
        }
        /*selected Rank Grid List End \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
    };
    IPadHomeToolComponent.prototype.fnBuildGridCompare = function (data, ind, selisin) {
        this.changedet.detectChanges();
        ind = 4;
        var that = this;
        data = data.filter(function (x) { return x.isin != ""; });
        var resultData = data;
        that.CompetCLength = resultData.length;
        //var ob = resultData.filter(function (d) { return d.isin === selisin })[0];
        //var obi = resultData.indexOf(ob);
        that.GridData_c = resultData;
        var scrollDiv = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#viewportCompare" + ind);
        scrollDiv.selectAll("*").remove();
        scrollDiv.append("div")
            .attr("class", "divbox");
        var scrollSVG = scrollDiv.append("svg")
            .attr("class", "scroll-svg-comp");
        var chartGroupComp = scrollSVG.append("g")
            .attr("class", "chartGroupComp").attr("id", "chartGroupCompare");
        function gradient1(colour, id, x1, x2, off1, off2, op1, op2) {
            //gradient function.
            //defines the gradient
            that.changedet.detectChanges();
            scrollSVG.select("#defs" + id).remove();
            scrollSVG.append("defs")
                .attr("id", "defs" + id)
                .append("linearGradient")
                .attr("id", id)
                .attr("x1", x1).attr("y1", "0%")
                .attr("x2", x2).attr("y2", "0%");
            var idtag = '#' + id;
            //defines the start
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](idtag)
                .append("stop")
                .attr("stop-color", colour)
                .attr("class", "begin")
                .attr("offset", off1)
                .attr("stop-opacity", op1);
            //and the finish
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](idtag)
                .append("stop")
                .attr("class", "end")
                .attr("stop-color", colour)
                .attr("offset", off2)
                .attr("stop-opacity", op2);
        }
        var rowEnter = function (rowSelection) {
            that.changedet.detectChanges();
            rowSelection.append("rect")
                .attr("rx", 15)
                .attr("ry", 15)
                .attr("x", 30)
                .attr("width", "230")
                .attr("height", "32")
                .attr("fill-opacity", 1)
                .attr("class", "SelPart_C");
            var towtxt1 = rowSelection.append("text")
                .attr("class", "txt1 SelPart_C")
                .attr("transform", "translate(10,13)")
                .attr("x", 45)
                .attr("fill", "#fff");
            var towtxt2 = rowSelection.append("text")
                .attr("class", "txt2 SelPart_C")
                .attr("transform", "translate(185,13)")
                .attr("x", 60)
                .style("text-anchor", "end")
                .attr("fill", "#fff");
            //var towtxt3 = rowSelection.append("text")
            //  .attr("class", "txt3")
            //  .attr("transform", "translate(-4,13)")
            //  .style("text-anchor", "middle")
            //  .attr("x", 55)
            //  .attr("fill", "#fff");
            var towtxt4 = rowSelection.append("text")
                .attr("class", "txt4 SelPart_C")
                .attr("transform", "translate(10,27)")
                .attr("x", 45)
                .attr("fill", "#fff");
            rowSelection.append("rect")
                .attr("rx", 0)
                .attr("ry", 0)
                .attr("x", 32)
                .attr("y", -3)
                .attr("width", "230")
                .attr("height", "33")
                .attr("fill-opacity", 0.001)
                .attr("class", "baseSelPart_C");
            rowSelection.append("circle")
                .attr("class", "sCircle")
                .attr("r", 7)
                .attr("cx", 33)
                .attr("cy", 17)
                .attr("fill", "#fff")
                .style('cursor', 'pointer')
                .style("stroke-width", 1)
                .style("stroke", "#00b9ff");
            var towtxt_S = rowSelection.append("text")
                .attr("class", "txtP SelPart_C")
                .attr("transform", "translate(8,23)")
                .attr("x", 20)
                .attr("fill", "#00b9ff")
                .style('cursor', 'pointer')
                .style("font-family", "Open Sans Bold")
                .style("font-size", "16px")
                .text("+");
            rowSelection.append("circle")
                .attr("class", function (d) {
                var index = that.addCmpIs.indexOf(d.isin);
                if (index >= 0) {
                    return "add_C cmp_Added";
                }
                else {
                    return "add_C";
                }
            })
                .attr("r", 7)
                .attr("cx", 33)
                .attr("cy", 17)
                .attr("fill", "transparent")
                .style('cursor', 'pointer')
                .style("stroke-width", 1)
                .style("stroke", "#00b9ff")
                .on("click", function () {
            });
        };
        var rowUpdate = function (rowSelection) {
            that.changedet.detectChanges();
            var cl = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
                .domain([0, 25, 50, 75, 100])
                .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
            rowSelection.select("rect.SelPart_C").attr("fill", "#abafb2");
            var towtxt = rowSelection;
            towtxt.selectAll("text").attr("fill", function (d) {
                if (d.score >= 40 && d.score < 55) {
                    return "#ffffff";
                }
                else {
                    return "#fff";
                }
            });
            towtxt.selectAll(".txtP").attr("fill", "#00b9ff");
            towtxt.select(".txt1")
                .text(function (d) {
                if (d.isin != "") {
                    var totCont = d.ticker;
                    return totCont;
                }
            });
            towtxt.select(".txt2")
                .text(function (d) {
                if (d.isin != "") {
                    var totCont = d.country;
                    return totCont;
                }
            });
            towtxt.select(".txt4")
                .text(function (d) {
                if (d.isin != "") {
                    var txtContent = d.company;
                    var totCont = txtContent;
                    if (totCont.length >= 26) {
                        var t = d.ticker;
                        return txtContent.slice(0, 22).trim() + "...";
                    }
                    return totCont;
                }
            });
            //towtxt.select(".txt3")
            //  .text(function (d, i) {
            //    if (d.isin != "") {
            //      return (d.index_C);
            //    }
            //  });
            rowSelection.select(".add_C").attr("id", function (d) {
                if (d.isin != "") {
                    return d.isin + "_" + d.indexName.replace(/ /g, '_');
                }
            });
            ////////////////////// Add company and remove company using ""COMPARE INDEXES""  ////////////////////////
            rowSelection.select(".add_C").attr("class", function (d) {
                var index = that.addCmpIs.indexOf(d.isin);
                // console.log(index);
                if (index >= 0) {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).classed("cmp_Added", true);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode).classed('p_Clkd', true);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.previousSibling).text('-').attr('x', 22).attr('y', -1);
                    return "add_C cmp_Added";
                }
                else {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).classed("cmp_Added", false);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode).classed('p_Clkd', false);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.previousSibling).text('+').attr('x', 20).attr('y', 0);
                }
                return "add_C";
            });
            rowSelection.selectAll(".add_C").on("click", function (d) {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).classed("cmp_Added", d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).classed("cmp_Added") ? false : true);
                if (d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).classed("cmp_Added")) {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode).classed('p_Clkd', true);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.previousSibling).text('-').attr('x', 22).attr('y', -1);
                    that.AddClockSlider(d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).attr('id'));
                    that.addCmpIs.push(d.isin);
                }
                else {
                    var index = that.addCmpIs.indexOf(d.isin);
                    if (index >= 0) {
                        that.addCmpIs.splice(index, 1);
                    }
                    that.RemoveClockSlider(d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).attr('id'));
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.parentNode).classed('p_Clkd', false);
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.previousSibling).text('+').attr('x', 20).attr('y', 0);
                }
            });
            ////////////////////// END ////////////////////
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#viewportCompare4").on("mouseover", function (d) {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sRect1").style("opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sRect").style("opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sRectCompare").style("opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sRectCompareOverlay").style("opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sText").style("opacity", "1");
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider").select(".sTextReverse").style("opacity", "1");
            });
        };
        var rowExit = function (rowSelection) {
        };
        // tack on index to each data item for easy to read display
        var rowi = 0;
        that.GridData_c.forEach(function (nextState, i) {
            if (nextState.isin != "") {
                rowi++;
            }
            nextState.index_C = rowi;
        });
        var selind = that.GridData_c.filter(function (d) { return d.isin === selisin; })[0];
        that.CompFilterGridList(1);
        var rowj = 0;
        that.GridData_c.forEach(function (nextState, i) {
            if (nextState.isin != "") {
                rowj++;
            }
            nextState.sort_C = rowj;
        });
        that.virtualScrollerComp = d3VirtualScroller()
            .selcompany(selind)
            .rowHeight(36)
            .enter(rowEnter)
            .update(rowUpdate)
            .exit(rowExit)
            .svg(scrollSVG)
            .totalRows(that.GridData_c.length)
            .tname(1)
            .viewport(d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#viewportCompare4"));
        that.virtualScrollerComp.data(that.GridData_c, function (d) {
            return d.isin;
        });
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".viewport").style("overflow-y", "auto");
        chartGroupComp.call(that.virtualScrollerComp);
        that.changedet.detectChanges();
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#viewportCompare" + ind).style("display", "block");
        /*selected Rank Grid List End \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
    };
    ;
    IPadHomeToolComponent.prototype.CompFilterGridList = function (IndexN) {
        if (IndexN == "1") {
            this.GridData_c = this.GridData_c.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["ascending"](x.company.toUpperCase(), y.company.toUpperCase());
            });
        }
        if (IndexN == "2") {
            this.GridData_c = this.GridData_c.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["descending"](x.company.toUpperCase(), y.company.toUpperCase());
            });
        }
        if (IndexN == "3") {
            this.GridData_c = this.GridData_c.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["ascending"](parseFloat(x.score), parseFloat(y.score));
            });
        }
        if (IndexN == "4") {
            this.GridData_c = this.GridData_c.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["descending"](parseFloat(x.score), parseFloat(y.score));
            });
        }
        if (IndexN == "5") {
            this.GridData_c = this.GridData_c.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["ascending"](x.ticker, y.ticker);
            });
        }
        if (IndexN == "6") {
            this.GridData_c = this.GridData_c.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["descending"](x.ticker, y.ticker);
            });
        }
    };
    IPadHomeToolComponent.prototype.RemoveClockSlider = function (id) {
        var d = d3__WEBPACK_IMPORTED_MODULE_2__["select"](".comp[name='" + id + "']").datum();
        var isin = d.isin;
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider" + d.isin).remove();
    };
    IPadHomeToolComponent.prototype.AddClockSlider = function (id) {
        var that = this;
        var d = d3__WEBPACK_IMPORTED_MODULE_2__["select"](".comp[name='" + id + "']").datum();
        var val = d.deg * 360 / 100;
        var isin = d.isin;
        var txt = d.company + " (" + d.ticker + ") [" + d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d.score) + "%]";
        var stockKey = d.stockKey;
        var score = d.score;
        //console.log(d3.select("#" + "cSlider" + d.isin));
        if (!d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#" + "cSlider" + d.isin).empty()) {
            console.log("Already exists");
            return false;
        }
        var r = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#maincircle").attr("r");
        var g = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#crlChart").append("g")
            .attr("id", "cSlider" + d.isin)
            .attr("class", "AddSlider")
            .attr('transform', 'rotate(' + (-90) + ')');
        var rect1 = g.append("rect")
            .attr("class", "sRect1")
            .attr("x", r - 18)
            .attr("y", -.5)
            .attr("height", 1)
            .attr("width", 50)
            .attr("fill", "#abafb2")
            .style("opacity", "0");
        var circle = g.append("circle")
            .attr("class", "sCircle")
            .attr("r", 6)
            .attr("cx", r - 12)
            .attr("fill", "#abafb2")
            .style('cursor', 'pointer')
            .style("stroke-width", 4)
            .style("stroke", "#fff").style("opacity", "0");
        var rect = g.append("rect")
            .attr("class", "sRect")
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("x", +r + (25))
            //.attr("y", -20)
            .attr("height", "40px")
            .attr("width", "170px")
            .attr("fill", "#abafb2")
            .style("opacity", "0");
        var text = g.append("text")
            .attr("class", "sText")
            .attr("x", +r + (40))
            .attr("dy", 0)
            .style("alignment-baseline", "middle")
            .style("font-size", "12px")
            .style("display", "none")
            .attr("fill", "#fff")
            .text("0.00");
        //d3.select("#cSlider" + d.isin)
        //  .transition()
        //  .ease(d3.easeExp)
        //  .duration(800)
        //  .attr('transform', 'rotate(' + (val - 90) + ')')
        //  .attr('name', isin)
        //  .on("end", function () {
        //    d3.select(".sRect").style("opacity", "1");
        //    d3.select(".sRect").style("opacity", "1");
        //    d3.select("#cSlider" + d.isin).select(".sText").style("opacity", "1");
        //  })
        //d3.select("#cSlider" + d.isin)
        //  .transition()
        //  .ease(d3.easeExp)
        //  .duration(800)
        //  .attr('transform', 'rotate(' + (val - 90) + ')')
        //  .attr('name', isin)
        //  .on("end", function () {
        //    d3.select(".sRect").style("opacity", "1");
        //    d3.select(".sRect1").style("opacity", "1"); 
        //    d3.select("#cSlider" + d.isin).select(".sText1").style("opacity", "1");
        //  })
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider" + d.isin).select(".sText")
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
            .style("opacity", "0")
            .attr("fill", function () {
            return "#fff";
        })
            .text(txt).call(that.wrap, 100);
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider" + d.isin)
            .transition()
            .ease(d3__WEBPACK_IMPORTED_MODULE_2__["easeExp"])
            .duration(0)
            .attr('transform', 'rotate(' + (val - 90) + ')')
            .attr('name', isin)
            .on("end", function () {
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider" + d.isin).select(".sRect1").style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider" + d.isin).select(".sRect").style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider" + d.isin).select(".sText").style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider" + d.isin).style("display", "block");
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider" + d.isin).select(".sCircle").style("opacity", "1");
        });
        var bbox = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider" + d.isin).select(".sText").node().getBBox();
        var bboxH = +bbox.height + 20;
        bboxH = bboxH > 40 ? bboxH : 40;
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#cSlider" + d.isin).select(".sRect")
            // .attr("fill", function () { return gC360(val); })
            .style("display", function () { return txt == null ? "none" : "block"; })
            .attr("height", bboxH)
            .attr("width", bbox.width + 30)
            .attr("y", -(bboxH / 2));
    };
    IPadHomeToolComponent.prototype.fnStockstabclick = function (mode) {
        //if (mode == "Compare") {
        //console.log(mode);
        //}
        this.changedet.detectChanges();
        this.SelTab = mode;
        this.IsShowDD = false;
        this.IsShowFilterDD = false;
        this.IsShowIndexFilterDD = false;
        this.IsShowCompFilterDD = false;
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#gNav').style('display', 'block');
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#ParentViewport').style('display', 'block');
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#dvDD").style('display', 'none');
        //d3.select("#showStockCloseButton").style('display', 'none');
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#dvDD").attr("transform", "translate(0, 15)");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#IndexesRectHght").attr("height", "385px");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#totalStocksValue").style('display', 'block');
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".AddSlider").remove();
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#compareComp').style('display', 'none');
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".add_C").classed("cmp_Added", false);
        this.addCmpIs = [];
        this.changedet.detectChanges();
    };
    IPadHomeToolComponent.prototype.fnPosArray = function (val, cnt, skipPos) {
        var topVal = val;
        var navArray = new Array();
        for (var i = 0; i < cnt; i++) {
            navArray.push(topVal);
            if (i == skipPos)
                topVal = topVal - (3.5 * 2);
            else
                topVal = topVal - 3.5;
        }
        return navArray;
    };
    IPadHomeToolComponent.prototype.getSectorPos = function (selResData, pIndLevel) {
        var that = this;
        var result = d3__WEBPACK_IMPORTED_MODULE_2__["nest"]()
            .key(function (d) {
            var val;
            switch (pIndLevel) {
                case 0:
                    val = (that.FromClick == "ETFClick" || that.FromClick == "ETFCompClick") ? that.SelAssetId : d.indexName;
                    break;
                case 1:
                    val = d.industry.substring(0, 2);
                    break;
                case 2:
                    val = d.industry.substring(0, 4);
                    break;
                case 3:
                    val = d.industry.substring(0, 6);
                    break;
                case 4:
                    val = d.industry.substring(0, 8);
                    break;
                default:
                    val = d.tradeDate;
                    break;
            }
            return val;
        })
            .rollup(function (v) {
            return {
                xV: d3__WEBPACK_IMPORTED_MODULE_2__["mean"](v, function (d) { return Math.cos((((d.score * 3.6) - 90) * Math.PI) / 180); }),
                yV: d3__WEBPACK_IMPORTED_MODULE_2__["mean"](v, function (d) { return Math.sin((((d.score * 3.6) - 90) * Math.PI) / 180); }),
                med: d3__WEBPACK_IMPORTED_MODULE_2__["median"](v, function (d) {
                    if (d.indexName.indexOf("New Age Alpha") == -1) {
                        return d.score;
                    }
                    if (that.SelIndexName.indexOf("New Age Alpha") != -1) {
                        return d.score;
                    }
                    //if (that.SelIndexName.indexOf("New Age Alpha") != -1) {
                    //  return d.score;
                    //} else { 
                    //  if (d.indexName.indexOf("New Age Alpha") == -1) { return d.score; }
                    //} 
                }),
                total: v.length,
                comp: v
            };
        })
            .entries(selResData);
        //console.log(pIndLevel);
        //console.log(result);
        //console.log(that.SelIndexName);  
        return result;
    };
    IPadHomeToolComponent.prototype.filterMinMax = function (dta, isin) {
        var selind = dta.filter(function (d) { return d.isin === isin; })[0];
        var SelData = [];
        SelData.push(dta[0]);
        SelData.push(selind);
        SelData.push(dta[dta.length - 1]);
        SelData = SelData.filter(function (v, i, a) { return a.indexOf(v) === i; });
        return SelData;
    };
    IPadHomeToolComponent.prototype.fnGetStockPerformance = function (stockkey) {
        var that = this;
        that.changedet.detectChanges();
        this.httpClient.get(this.api_url + "/Indexes/GetRelatedBenchmark/" + stockkey).subscribe(function (dbPerformance) {
            //d3.json("https://api.newagealpha.com/api/Indexes/GetRelatedBenchmark/" + stockkey).then(function (dbPerformance) {
            that.PerfData = dbPerformance;
            var PerfData = that.PerfData; //.filter(x => x.indexCategory == selData.indexName);
            var indexPerf = PerfData.filter(function (x) { return x.type == 'Index'; });
            var BMPerf = PerfData.filter(function (x) { return x.type == 'BM'; });
            that.indexPerf = indexPerf.length > 0 ? indexPerf : [];
            that.BMPerf = BMPerf.length > 0 ? BMPerf : [];
            setTimeout(function () { that.changedet.detectChanges(); that.fnPerfText(); }, 100);
        });
    };
    IPadHomeToolComponent.prototype.fillCompetives = function (dta, isin, lvl) {
        var that = this;
        that.changedet.detectChanges();
        var gs = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#gCompetitive");
        gs.selectAll("g").remove();
        dta = dta.filter(function (t) { return t.isin != ""; });
        var SelData = that.filterMinMax(dta, isin);
        var ggs = gs.selectAll("g")
            .data(dta)
            .enter().append("g")
            .attr("name", function (d) { return d.isin; })
            .attr("class", function (d) {
            var distinctISIN = SelData.map(function (d) { return d.isin; });
            // if (lvl == "4") {
            return (distinctISIN.includes(d.isin) ? "clsAlwOn Compet" + d.isin : "Compet" + d.isin);
            //} 
        })
            .attr("transform", function (d) { return "rotate(" + ((d.score * 3.6) - 90) + ")"; });
        ggs.append("rect").attr("y", 0).attr("x", 152).attr("height", .8).attr("width", 15);
        ggs.append("text")
            .style("text-anchor", function (d) {
            return (d.score * 3.6) > 180 ? "end" : null;
        })
            .attr("x", function (d) {
            return (d.score * 3.6) > 180 ? "-205" : "205";
        })
            .style("fill", function (d) {
            if (d.score >= 40 && d.score < 55) {
                return "#FF9503";
            }
            else {
                return that.gC100(d.score);
            }
        })
            .attr("transform", function (d) {
            return (d.score * 3.6) > 180 ? "rotate(180)" : null;
        })
            .style("text-anchor", function (d) {
            return (d.score * 3.6) > 180 ? "end" : null;
        })
            .style("opacity", function (d) {
            var distinctISIN = SelData.map(function (d) { return d.isin; });
            if (lvl == "4") {
                if (d3__WEBPACK_IMPORTED_MODULE_2__["select"](".homeright").style("display") == "block")
                    return "1";
                else
                    return "0.04";
            }
            else {
                return (distinctISIN.includes(d.isin) ? "1" : "0.04");
            }
        })
            .attr("class", function (d) {
            var distinctISIN = SelData.map(function (d) { return d.isin; });
            return (distinctISIN.includes(d.isin) ? "clsAlwOn" : "");
        })
            .text(function (d) { return d.company + " (" + d.ticker + ") [" + d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d.score) + "%]"; }).call(that.wrap, 100);
        ggs.on("mouseover", function (d) {
            d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".on").classed("on", false);
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".Compet" + d.isin).raise();
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".Compet" + d.isin).classed("on", true);
        })
            .on("mouseout", function (elemData) {
            d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".on").classed("on", false);
        })
            .on("click", function (elemData) {
            that.changedet.detectChanges();
            var d = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).datum();
            if (d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#dec-1").style("display") == "block") {
                that.fnIndexSelClick(d, "CompClick");
            }
            else {
                that.fnIndexSelClick(d, "");
            }
            //if (d.isin != "") {
            //  //d3.select(".comp[name='" + d.isin + "_" + d.indexName.replace(/ /g, '_') + "']").dispatch('click');
            //  that.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + d.ticker + ") [" + d3.format(".1f")(d.score) + "%]", "click", d.stockKey, d.score);
            //  that.changedet.detectChanges();
            //}
        });
    };
    IPadHomeToolComponent.prototype.ApplyColor = function (val) {
        return (val >= 40 && val < 55) ? "#FF9503" : "#fff";
    };
    IPadHomeToolComponent.prototype.createHomecontent = function (elemData, val) {
        console.log('setting home content');
        this.changedet.detectChanges();
        var gC360 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 90, 180, 270, 360])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        var homeScore1length = ((parseInt((elemData.companyName + ' (' + elemData.ticker + ')').length.toString()) / 2) / 3) * 17 + 5;
        if (parseInt(elemData.companyName + ' (' + elemData.ticker + ')') < 12)
            homeScore1length = 42;
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#selectedscore").select('.homeScore1').attr("fill", function () { return gC360(val); })
            .text(elemData.companyName + ' (' + elemData.ticker + ')')
            .attr("x", "-" + homeScore1length);
        var homeScore2length = (((parseFloat(elemData.scores) * 100).toFixed(1)).length * 7.5 + 5);
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#selectedscore").select('.homeScore2').attr("fill", function () { return gC360(val); }).text((parseFloat(elemData.scores) * 100).toFixed(1))
            .attr("x", "-" + homeScore2length);
        this.revGrayOutBtns();
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#selectedscore").select('#currentstock').style("display", "block");
        this.changedet.detectChanges();
    };
    IPadHomeToolComponent.prototype.revGrayOutBtns = function () {
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".clsCompare").style("opacity", "1");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".clsCompare").style("fill", "#00b9ff");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".clsSetAlert").style("opacity", "1");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".clsSetAlert").style("fill", "#00b9ff");
        // d3.selectAll(".clsSetAlert").attr("class", "setModal");
        // d3.selectAll('.clsSetAlert').node().classList.add("setModal");
    };
    IPadHomeToolComponent.prototype.hideSidebar = function () {
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".closePopup").style('display', 'block');
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".helpPopup").style('display', 'block');
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".expPopup").style('display', 'block');
        // d3.select("#gBreadCrumb").style("display", "block");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#viewport4").style("display", "block");
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".performance").style("display", "block");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHelp").style("display", "none");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](".gHand").style("display", "none");
        this.fnPerfText();
        //  }
        //d3.selectAll(".GridList").style("display", "block");
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".gHelpbg").style("display", "none");
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".gHelp").style("display", "none").style("opacity", "0");
        // d3.selectAll(".clsAlwOn").style("opacity", "");
        var RectOn = d3__WEBPACK_IMPORTED_MODULE_2__["select"](".rectOn");
        if (RectOn.node() != null) {
            if (this.IsShowAll)
                this.refreshGrid();
            else
                this.MinimizeGrid();
        }
        clearInterval(this.interval);
    };
    IPadHomeToolComponent.prototype.refreshGrid = function () {
        var _this = this;
        this.changedet.detectChanges();
        var SelFil = this.FilterList.filter(function (x) { return x.Name == _this.SelFilter; })[0];
        this.FilterGridList(SelFil.value);
        // this.virtualScroller.totalRows(this.GridData.length);
        // this.virtualScroller.viewport(d3.select("#viewport4"));
        // this.virtualScroller.data(this.GridData, function (d) {
        //   return d.isin;
        // });
        // this.virtualScrollerComp.totalRows(this.GridData_c.length);
        // this.virtualScrollerComp.viewport(d3.select("#viewportCompare4"));
        // this.virtualScrollerComp.data(this.GridData_c, function (d) {
        //   return d.isin;
        // });
        // d3.select(".chartGroup").call(this.virtualScroller);
        // d3.select(".chartGroupComp").call(this.virtualScrollerComp);
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".viewport").style("overflow-y", "auto");
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".txtExpCol").style("display", "none");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#txtCollapse").style("display", "block");
        this.GridExpanded = true;
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#GridGroup").style("display", "none");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#ParentViewport").style("visibility", "visible");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#ParentViewportCompare").style("visibility", "visible");
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".txtfixed").style("display", "block");
        this.changedet.detectChanges();
    };
    IPadHomeToolComponent.prototype.MinimizeGrid = function () {
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".txtfixed").style("display", "none");
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".txtExpCol").style("display", "none");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#txtExpand").style("display", "block");
        this.GridExpanded = false;
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#GridGroup").style("display", "block");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#ParentViewport").style("visibility", "hidden");
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#ParentViewportCompare").style("visibility", "hidden");
        // d3.select("#gCompetitive").selectAll("text").style("opacity", "0.04");
        // d3.select("#gCompetitive").selectAll(".clsAlwOn").style("opacity", "1");
    };
    IPadHomeToolComponent.prototype.FilterGridList = function (IndexN) {
        if (IndexN == "1") {
            this.GridData = this.GridData.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["ascending"](x.company.toUpperCase(), y.company.toUpperCase());
            });
        }
        if (IndexN == "2") {
            this.GridData = this.GridData.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["descending"](x.company.toUpperCase(), y.company.toUpperCase());
            });
        }
        if (IndexN == "3") {
            this.GridData = this.GridData.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["ascending"](parseFloat(x.score), parseFloat(y.score));
            });
        }
        if (IndexN == "4") {
            this.GridData = this.GridData.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["descending"](parseFloat(x.score), parseFloat(y.score));
            });
        }
        if (IndexN == "5") {
            this.GridData = this.GridData.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["ascending"](x.ticker, y.ticker);
            });
        }
        if (IndexN == "6") {
            this.GridData = this.GridData.sort(function (x, y) {
                return d3__WEBPACK_IMPORTED_MODULE_2__["descending"](x.ticker, y.ticker);
            });
        }
    };
    IPadHomeToolComponent.prototype.fnPerfText = function () {
        var that = this;
        that.changedet.detectChanges();
        if (this.indexPerf.length > 0) {
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".perfName").remove();
            d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#perfName").append("text")
                .style("fill", "#666")
                .attr("class", "perfName")
                .attr("x", "10")
                .text(function () { return that.indexPerf[0].indexName; }).call(that.wrap, 150, "right")
                .on("click", function (d) {
                //  that.fnSelectIndex(that.indexPerf[0].indexName);
            });
            // .click(that.fnSelectIndex(that.indexPerf[0].indexName));
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".bmName").remove();
            if (that.BMPerf.length > 0) {
                d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#bmName").append("text")
                    .style("fill", "#666")
                    .attr("class", "bmName")
                    .attr("x", "10")
                    .text(function () { return that.BMPerf[0].indexName; }) //.call(that.wrap, 115, "right")
                    .on("click", function (d) {
                    //that.fnSelectIndex(that.BMPerf[0].indexName)
                });
                // .click(that.fnSelectIndex(that.BMPerf[0].indexName));
            }
        }
    };
    IPadHomeToolComponent.prototype.wrap = function (text, width, align) {
        if (align === void 0) { align = null; }
        text.each(function (d) {
            var text = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this), words = text.text().replace("-", "- ").split(/\s+/).reverse(), word, line = [], lineNumber = 0, lineHeight = text.style("font-size").replace("px", ""), // ems
            y = text.attr("y"), dy = 0, //parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("dx", 0).attr("dy", 2), textalign = (text.style("text-anchor") == "end") ? false : true;
            tspan.attr("class", "txt");
            var i = 0;
            while (word = words.pop()) {
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
                        tspan = text.append("tspan").attr("dy", lineHeight + "px").attr("dx", -(tspan.node().getComputedTextLength())).text(word);
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
    IPadHomeToolComponent.prototype.creatBreadCrumb = function (grp1) {
        var arc1 = d3__WEBPACK_IMPORTED_MODULE_2__["arc"]()
            .innerRadius(351)
            .outerRadius(349)
            .startAngle(-1.2)
            .endAngle(-1.9);
        var g = grp1.append("g").attr("id", "gBreadCrumb").attr("transform", "translate(-40 ,15)");
    };
    IPadHomeToolComponent.prototype.GetGlobals = function (ctname) {
        return this.GrpIndexList.filter(function (x) { return x.key == ctname; })[0].value.indexName;
    };
    IPadHomeToolComponent.prototype.getCountryPos = function (selResData) {
        this.changedet.detectChanges();
        var tselResData = selResData.filter(function (val) {
            return val.indexName.indexOf("New Age Alpha") == -1;
        });
        var that = this;
        var gC100 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        var result = d3__WEBPACK_IMPORTED_MODULE_2__["nest"]()
            .key(function (d) {
            return d.country;
        })
            .rollup(function (v) {
            return {
                indexName: v.map(function (x) { return x.indexName; }).filter(function (v, i, a) { return a.indexOf(v) === i; }),
                country: v[0].country,
                med: d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d3__WEBPACK_IMPORTED_MODULE_2__["median"](v, function (d) {
                    return d.score;
                })),
                medc: gC100(d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d3__WEBPACK_IMPORTED_MODULE_2__["median"](v, function (d) {
                    return d.score;
                }))),
                order: that.IndexOrder.find(function (dt) {
                    return dt.index === v[0].indexName;
                }) == undefined ? null : that.IndexOrder.find(function (dt) {
                    return dt.index === v[0].indexName;
                }).order
            };
        })
            .entries(tselResData);
        return result;
    };
    IPadHomeToolComponent.prototype.getIndexPos = function (selResData) {
        var that = this;
        var gC100 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        var result = d3__WEBPACK_IMPORTED_MODULE_2__["nest"]()
            .key(function (d) {
            return d.indexName;
        })
            .rollup(function (v) {
            return {
                indexName: v[0].indexName,
                med: d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d3__WEBPACK_IMPORTED_MODULE_2__["median"](v, function (d) {
                    //if (d.indexName.indexOf("New Age Alpha") == -1) { return d.score; }
                    return d.score;
                })),
                medc: gC100(d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1f")(d3__WEBPACK_IMPORTED_MODULE_2__["median"](v, function (d) {
                    //if (d.indexName.indexOf("New Age Alpha") == -1) { return d.score; }
                    return d.score;
                }))),
                order: that.IndexOrder.find(function (dt) {
                    return dt.index === v[0].indexName;
                }) == undefined ? null : that.IndexOrder.find(function (dt) {
                    return dt.index === v[0].indexName;
                }).order
            };
        })
            .entries(selResData);
        return result;
    };
    IPadHomeToolComponent.prototype.creatGradienArc = function () {
        var gArc = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#crlChart").append("g");
        var arc = d3__WEBPACK_IMPORTED_MODULE_2__["arc"]()
            .innerRadius(this.radius - 18)
            .outerRadius(this.radius - 2);
        // create our gradient
        var colors = [];
        var color1 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 1, 2, 3, 4])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        var linearGradient = gArc.append("defs");
        var linearG1 = linearGradient.append("linearGradient");
        linearG1.attr("id", "linearColors0")
            .attr("x1", "0").attr("y1", "0").attr("x2", ".5").attr("y2", "1");
        linearG1.append("stop").attr("offset", "0%").attr("stop-color", color1(0));
        linearG1.append("stop").attr("offset", "100%").attr("stop-color", color1(1));
        var linearG2 = linearGradient.append("linearGradient");
        linearG2.attr("id", "linearColors1")
            .attr("x1", "0.8").attr("y1", "0").attr("x2", "0.5").attr("y2", "0.8");
        linearG2.append("stop").attr("offset", "0%").attr("stop-color", color1(1));
        linearG2.append("stop").attr("offset", "100%").attr("stop-color", color1(2));
        var linearG3 = linearGradient.append("linearGradient");
        linearG3.attr("id", "linearColors2")
            .attr("x1", "0.8").attr("y1", "0.8").attr("x2", "0").attr("y2", "0.3");
        linearG3.append("stop").attr("offset", "0%").attr("stop-color", color1(2));
        linearG3.append("stop").attr("offset", "100%").attr("stop-color", color1(3));
        var linearG4 = linearGradient.append("linearGradient");
        linearG4.attr("id", "linearColors3")
            .attr("x1", "0").attr("y1", "0.9").attr("x2", "0").attr("y2", "0.1");
        linearG4.append("stop").attr("offset", "0%").attr("stop-color", color1(3));
        linearG4.append("stop").attr("offset", "100%").attr("stop-color", color1(4));
        // 360 degrees
        d3__WEBPACK_IMPORTED_MODULE_2__["range"](4).forEach(function (d, i) {
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
        var tau = 2 * Math.PI;
        var gArc1 = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#crlChart").append("g").attr("class", "scorerange");
        var arc1 = d3__WEBPACK_IMPORTED_MODULE_2__["arc"]()
            .innerRadius(this.radius - 22)
            .outerRadius(this.radius - 23)
            .startAngle(.01);
        gArc1.append("path")
            .datum({ endAngle: tau })
            .style("fill", "#ccc")
            .attr("d", arc1);
        gArc1.append("rect")
            .attr("x", this.radius - 25)
            .attr("y", 0)
            .attr("height", 1.5)
            .attr("width", 4)
            .attr("fill", "#fff")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90.5)");
        gArc1.append("rect")
            .attr("x", this.radius - 28)
            .attr("y", 0)
            .attr("height", .7)
            .attr("width", 6)
            .attr("fill", "#ccc")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-89.9)");
        gArc1.append("rect")
            .attr("x", this.radius - 28)
            .attr("y", 0)
            .attr("height", .7)
            .attr("width", 5)
            .attr("fill", "#ccc")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-45)");
        gArc1.append("rect")
            .attr("x", this.radius - 28)
            .attr("y", -1)
            .attr("height", .7)
            .attr("width", 5)
            .attr("fill", "#ccc")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(0)");
        gArc1.append("rect")
            .attr("x", this.radius - 28)
            .attr("y", 0)
            .attr("height", .7)
            .attr("width", 5)
            .attr("fill", "#ccc")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(45)");
        gArc1.append("rect")
            .attr("x", this.radius - 28)
            .attr("y", 0)
            .attr("height", .7)
            .attr("width", 5)
            .attr("fill", "#ccc")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(90)");
        gArc1.append("rect")
            .attr("x", this.radius - 28)
            .attr("y", 0)
            .attr("height", .7)
            .attr("width", 5)
            .attr("fill", "#ccc")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(135)");
        gArc1.append("rect")
            .attr("x", this.radius - 28)
            .attr("y", 0)
            .attr("height", .7)
            .attr("width", 5)
            .attr("fill", "#ccc")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(180)");
        gArc1.append("rect")
            .attr("x", this.radius - 28)
            .attr("y", 0)
            .attr("height", .7)
            .attr("width", 5)
            .attr("fill", "#ccc")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(225)");
        gArc1.append("rect")
            .attr("x", this.radius - 28)
            .attr("y", 0.2)
            .attr("height", .7)
            .attr("width", 6)
            .attr("fill", "#ccc")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(269.4)");
        gArc1.append("text")
            .attr("x", this.radius - 30)
            .attr("y", 5)
            .attr("fill", "#ccc")
            .attr("text-anchor", "end")
            .text("25%");
        gArc1.append("text")
            .attr("x", -(this.radius - 29))
            .attr("y", 5)
            .attr("fill", "#ccc")
            .attr("text-anchor", "start")
            .text("75%");
        gArc1.append("text")
            .attr("x", 0)
            .attr("y", this.radius - 34)
            .attr("fill", "#ccc")
            .attr("text-anchor", "middle")
            .text("50%");
        gArc1.append("text")
            .attr("x", -3)
            .attr("y", -(this.radius - 45))
            .attr("fill", "#ccc")
            .attr("text-anchor", "end")
            .text("100%");
        gArc1.append("text")
            .attr("x", 3)
            .attr("y", -(this.radius - 45))
            .attr("fill", "#ccc")
            .attr("text-anchor", "start")
            .text("0%");
    };
    IPadHomeToolComponent.prototype.findIndName = function (dta, code) {
        var industry = code;
        for (var i = 0; i < dta.length; i++) {
            if (dta[i].code == code) {
                industry = dta[i].name;
                break;
            }
        }
        return industry;
    };
    IPadHomeToolComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    IPadHomeToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ipadhometool',
            template: __webpack_require__(/*! raw-loader!./i-pad-home-tool.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.html"),
            styles: [__webpack_require__(/*! ./i-pad-home-tool.component.scss */ "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], IPadHomeToolComponent);
    return IPadHomeToolComponent;
}());

var countryList = /** @class */ (function () {
    function countryList() {
    }
    return countryList;
}());



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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _Components_i_pad_home_tool_i_pad_home_tool_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/i-pad-home-tool/i-pad-home-tool.component */ "./src/app/Components/i-pad-home-tool/i-pad-home-tool.component.ts");









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
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _Components_i_pad_home_tool_i_pad_home_tool_component__WEBPACK_IMPORTED_MODULE_8__["IPadHomeToolComponent"]]
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

module.exports = ".toolbar {\n  --background: #2e4c99;\n}\n\n.toolbar-button {\n  position: absolute;\n}\n\n.header-Logo {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n#parent-content {\n  --ion-background-color:#d3d8dc;\n}\n\n.search-Outer-Div {\n  padding: 0px 15px;\n}\n\n.searchBtn {\n  --border-radius:15px;\n  width: 75px;\n  font-size: 11px;\n  height: 24px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  --background: #00aeef;\n  --box-shadow: none;\n}\n\n.searchInput {\n  font-size: 16px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --color:#666;\n  text-align: center;\n}\n\n.searchItem {\n  --border-width:2px;\n  --border-color:#33529f;\n  --inner-padding-end: 5px;\n  --background: white;\n  --border-radius: 25px;\n  --min-height: 28px;\n}\n\n.searchDiv {\n  padding: 5px 0px;\n  padding-top: 2%;\n}\n\n.nav-tab {\n  display: -webkit-box;\n  display: flex;\n  list-style: none;\n  padding: 0px 25px 0px;\n  margin: 0px;\n}\n\n.nav-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n  flex-wrap: nowrap;\n  color: white;\n  z-index: 1;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.nav-item::after {\n  content: \"\";\n  background-color: #01b9ff;\n  position: absolute;\n  width: 100%;\n  height: 25px;\n  -webkit-transform: perspective(3px) rotateX(2.5deg);\n          transform: perspective(3px) rotateX(2.5deg);\n  z-index: -1;\n}\n\n.index-loader {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  height: calc(100vh - 251px);\n}\n\n.loader {\n  height: 40px;\n  width: 40px;\n}\n\n.nav-tab-index {\n  background: white;\n  padding: 0px 4px;\n}\n\n.nav-tab-item {\n  --background: white;\n  color: #666;\n  font-size: 14px;\n  margin: 5px 0 5px 0;\n}\n\n.nav-tab-card-content {\n  padding: 0px;\n}\n\n.ETFnav-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n  flex-wrap: nowrap;\n  color: white;\n  z-index: 0;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.ETFnav-item::after {\n  content: \"\";\n  background-color: #3879b4;\n  position: absolute;\n  width: 100%;\n  height: 25px;\n  -webkit-transform: perspective(3px) rotateX(2.5deg);\n          transform: perspective(3px) rotateX(2.5deg);\n  z-index: -1;\n}\n\n.nav-tab li a {\n  line-height: 2;\n  color: white;\n  font-size: 11px;\n  padding: 5px 5px 0px 5px;\n}\n\n.nav-tab .nav-item.active::after {\n  background-color: #ffffff;\n}\n\n.nav-tab .ETFnav-item.active::after {\n  background-color: #ffffff;\n}\n\n.nav-tab .nav-item.active a {\n  color: #01b9ff;\n  z-index: 2;\n}\n\n.nav-tab .ETFnav-item.active a {\n  color: #01b9ff;\n  z-index: 2;\n}\n\n.nav-tab .nav-item.active {\n  z-index: 2;\n}\n\n.nav-tab .ETFnav-item.active {\n  z-index: 2;\n}\n\n.tab-content {\n  padding-bottom: 25px;\n  margin-top: -1px;\n  z-index: 101;\n  position: relative;\n}\n\n.tab-pane {\n  background: #fff;\n  border-radius: 25px 25px 12px 12px;\n}\n\n.tab-content .tab-pane.active {\n  display: block;\n}\n\n.accordion {\n  background: white;\n  border-radius: 20px 20px 12px 12px;\n}\n\n.card:first-child {\n  border-radius: 25px;\n}\n\n.card-header {\n  border: none;\n  background: #fff;\n  border-radius: 20px 20px 0 0;\n}\n\n.accordion-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  min-height: 50px;\n}\n\n.parent-card {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  background: #fff;\n  position: relative;\n  z-index: 2;\n  box-shadow: none;\n  border-radius: 20px 20px 12px 12px;\n}\n\n.header-circle {\n  background-color: #2e4c99;\n  height: 40px;\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-family: Open Sans Semibold;\n  font-size: 12px;\n}\n\n.parent-card-header {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 1.3px solid #d4d7db;\n}\n\n.card-header-title {\n  padding-left: 20px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #666;\n}\n\n.header-btn {\n  width: 100%;\n  --background: #fff;\n  --background-focused: #fff;\n  --background-hover: #fff;\n  --box-shadow: none;\n  --color: #dfdfdf;\n  text-transform: none;\n  --color-activated: #dfdfdf;\n  --ripple-color: transparent;\n  --background-activated: #fff;\n  min-height: 50px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  min-height: 0px;\n  height: auto;\n}\n\n.header-title-div {\n  text-align: left;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.header-title-span {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.header-comp-span {\n  font-size: 13px;\n  white-space: normal;\n}\n\n.parent-card-content {\n  padding: 0px;\n}\n\n.index-card {\n  margin: 0px;\n  height: calc( 100vh - 330px );\n  box-shadow: none;\n  overflow: auto;\n}\n\n.collapse {\n  display: none;\n}\n\n.child-card {\n  margin: 0px;\n  height: calc( 100vh - 330px );\n  box-shadow: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.child-card-content {\n  --ion-background-color: white;\n  height: calc(100vh - 399px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.collapse-parent {\n  display: none;\n}\n\n.test1 {\n  font-size: 14px;\n  font-family: Open Sans SemiBold;\n  color: #666;\n  font-weight: 500;\n  padding: 8px;\n  margin-bottom: 0.5rem !important;\n}\n\n.sort-card {\n  box-shadow: none;\n  padding: 0px;\n  margin: 0px;\n}\n\n.sort-card-header {\n  padding: 0px;\n  border-bottom: 1.3px solid #d4d7db;\n  border-top: 1.3px solid #d4d7db;\n}\n\n.sort-header-btn {\n  width: 100%;\n  --background: #fff;\n  --box-shadow: none;\n  --color: #666;\n  text-transform: none;\n  --color-activated: #666;\n  --ripple-color: transparent;\n  --background-activated: #fff;\n  padding: 0px 0px 0px 10px;\n}\n\n.sort-header-title-div {\n  text-align: left;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.sort-header-title {\n  font-size: 15px;\n  font-weight: 400;\n  color: #666;\n  padding-bottom: 4px;\n}\n\n.collapse-sort {\n  display: none;\n}\n\n.totalScore {\n  font-size: 15px;\n  font-weight: 500;\n  padding: 0px 0px 0px 10px;\n}\n\n.index-circle {\n  color: #ff9503;\n  margin-right: 10px;\n  border-radius: 50%;\n  font-size: 12px;\n  font-family: Open sans Semibold;\n  max-width: 42px;\n  max-height: 42px;\n  min-width: 42px;\n  min-height: 42px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#parent-content {\n  height: 100vh;\n  --overflow: hidden;\n}\n\n.backBtn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 10px 5px;\n  z-index: 9;\n  background-color: white;\n  width: 100%;\n  font-family: Open Sans SemiBold;\n  font-size: 13px;\n  /* margin-right: -19px; */\n  margin-top: 0px;\n}\n\n/*.backBtn::after{\n    content: \"\";\n    background-color: #ffffff;\n    position: absolute;\n    width: 100%;\n}*/\n\n.backText-label {\n  padding-left: 10px;\n}\n\n.backText {\n  color: #01b9ff;\n}\n\n.col-first {\n  border-right: 1px solid #ddd;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ETFChild-Div {\n  overflow: auto;\n}\n\n.ETFChild-List {\n  background: white;\n  padding: 0px 4px;\n}\n\n.ETFChild-Item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: white;\n  color: #666;\n  font-size: 14px;\n}\n\n.ETFChild-Label {\n  white-space: normal;\n  font-size: 12px;\n  font-family: Open sans SemiBold;\n  color: #666666;\n}\n\n.company-list-inner-div {\n  overflow: scroll;\n  height: 100%;\n}\n\n.foceScrollOverflow {\n  --overflow:auto !important;\n}\n\n.company-list {\n  background-color: white;\n  padding: 0px;\n}\n\n.company-list-item {\n  --background: white;\n  margin: 5px 0px;\n  padding: 0px;\n  --min-height: 30px;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --inner-padding-end: 0px;\n}\n\n.company-label-outer-div {\n  border-radius: 30px;\n  --min-height: 30px;\n  background: #f49c2b;\n  width: 100%;\n  touch-action: unset !important;\n}\n\n.company-label {\n  margin: 0px;\n  padding: 5px 11px;\n  display: -webkit-box;\n  display: flex;\n  font-size: 12px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.index-outer-Div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.index-outer-Div .index-inner-Div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n\n.index-outer-Div .index-inner-Div .first-div {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.index-outer-Div .index-inner-Div .first-div .comp-Name {\n  width: 60vw;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-family: Open Sans SemiBold;\n  font-size: 11px;\n}\n\n.index-outer-Div .index-inner-Div .first-div .per-val {\n  background: white;\n  padding: 0 10px;\n  border-radius: 10px;\n  font-family: \"Open Sans SemiBold\";\n  font-size: 9px;\n}\n\n.index-outer-Div .index-inner-Div .second-Div {\n  padding-right: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.company-label-inner-span {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  width: 60%;\n}\n\n.swiper-container {\n  overflow: visible;\n}\n\n.tab-active {\n  background-color: #ffffff !important;\n  color: #05baff !important;\n  border-radius: 10px 10px 0 0 !important;\n}\n\n.navTabBtn {\n  background-color: #00b9ff;\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: white;\n  padding: 8px 3px;\n  margin-right: 1px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-family: Open Sans SemiBold;\n}\n\n.FINavTabBtn {\n  background-color: #2889ae;\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: white;\n  padding: 8px 3px;\n  border-radius: 10px;\n  font-size: 13px;\n}\n\n.ETFNavTabBtn {\n  background-color: #2889ae;\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: white;\n  padding: 8px 3px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-family: Open Sans SemiBold;\n}\n\n.index-header {\n  margin: 0px;\n  box-shadow: none;\n  background-color: white;\n  border-radius: 10px;\n}\n\n.active-left {\n  border-radius: 0px 10px 10px 10px;\n}\n\n.active-right {\n  border-radius: 10px 0px 10px 10px;\n}\n\n.slides-md {\n  --bullet-background-active: #ffffff;\n  --bullet-background: #666;\n}\n\n.slides-ios {\n  --bullet-background-active: #ffffff;\n  --bullet-background: #666;\n}\n\n.stocks-card {\n  border-radius: 10px;\n  background-color: white;\n  margin: 0px;\n  box-shadow: none;\n}\n\n.stock-card-content {\n  padding: 0px;\n}\n\n.stock-header {\n  padding: 3px 15px 0px 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.stock-span {\n  color: #00b9ff;\n  font-size: 12px;\n  font-family: Open Sans Semibold;\n}\n\n.image-div {\n  margin: 0px;\n}\n\n.image {\n  height: 100px;\n  width: 120px;\n}\n\n.selected-stock-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0px 0px 0px 10px;\n}\n\n.selected-stock-score {\n  text-align: center;\n  color: green;\n  font-size: 30px;\n  font-family: Open Sans Extrabold;\n}\n\n.selected-stock-comp {\n  color: green;\n  font-size: 9px;\n  text-align: center;\n  font-family: Open Sans Bold;\n}\n\n.slider-div {\n  width: 100%;\n}\n\n.title-card {\n  background-color: white;\n  box-shadow: none;\n  margin: 3px 0px 0px 0px;\n  border-radius: 10px;\n}\n\n.title-card-content {\n  padding: 1px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.title-text {\n  padding: 4px 2px;\n}\n\n.title-p {\n  color: #00b9ff;\n  margin-bottom: 0px;\n  font-size: 13px;\n  font-family: Open Sans Semibold;\n}\n\n.subIndex-card-content {\n  padding: 10px 10px 10px 20px;\n}\n\n.subIndex-div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.subIndex-circle {\n  background-color: #2e4c99;\n  height: 40px;\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 12px;\n  font-family: Open Sans Semibold;\n}\n\n.SubIndex-header-content {\n  margin-left: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: left;\n  width: 100%;\n  font-size: 12px;\n  font-family: Omnes;\n  color: #888888;\n}\n\n.subIndex-header-title {\n  font-size: 12px;\n  color: #888888;\n  font-family: Omnes;\n}\n\n.subIndex-header-subtitle {\n  margin-top: 5px;\n  font-size: 12px;\n  color: #666666;\n  white-space: normal;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-height: 1.1;\n  -webkit-box-orient: vertical;\n  font-family: Open Sans Semibold;\n}\n\n.subindex-icon {\n  height: 40px;\n  width: 40px;\n}\n\n.stockCompList-card {\n  background-color: white;\n  margin: 3px 0px 0px 0px;\n  border-radius: 10px 10px 0 0;\n  box-shadow: none;\n}\n\n.stockcomplist-card-content {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  height: calc(100vh - 411px) !important;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n}\n\n.NavTabList {\n  list-style-type: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0px;\n  margin: 3px 0px 0px 0px;\n}\n\n.index-header-card-content {\n  padding: 10px 10px 10px 20px;\n}\n\n.index-header-card-div {\n  display: -webkit-box;\n  display: flex;\n}\n\n.index-header-circle {\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background-color: #2e4c99;\n}\n\n.Btn-inner-div {\n  margin-left: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: left;\n  width: 100%;\n}\n\n.company-card {\n  margin: 3px 0px 0px 0px;\n  box-shadow: none;\n  background-color: white;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.company-card-content {\n  padding: 0px;\n  height: calc(100vh - 399px);\n}\n\n.stock-collapse {\n  display: none;\n}\n\n.Stockcard-extend {\n  height: calc(100vh - 361px) !important;\n}\n\n.tab2color {\n  background-color: #3098cb;\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: white;\n  padding: 8px 3px;\n  margin-right: 1px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-family: Open Sans SemiBold;\n}\n\n.companycard-extend {\n  height: calc(100vh - 259px) !important;\n}\n\n.stockicon-active {\n  --color: #05baff;\n}\n\n.s-no {\n  padding-right: 5px;\n  min-width: 28px;\n  display: inline-block;\n  font-family: Open Sans SemiBold;\n  font-size: 11px;\n}\n\n.ticker-data {\n  font-family: Open Sans Bold;\n  font-size: 11px;\n}\n\n.comp-sel {\n  background: #00b9ff !important;\n  color: white !important;\n}\n\n.searchItem {\n  --padding-start:0px ;\n}\n\n.Filter_Div {\n  position: absolute;\n  height: 100%;\n  z-index: 999;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: rgba(66, 65, 65, 0.8);\n}\n\n.Filter_Div ion-list {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: inherit;\n  margin: 0 15px;\n  border-radius: 15px 15px 0 0;\n  background: #ffffff;\n  padding: 15px;\n}\n\n.Filter_Div ion-list div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.Filter_Div ion-list div ion-label {\n  color: #666666;\n  font-size: 15px;\n  font-family: Open Sans SemiBold;\n}\n\n.Filter_Div ion-list div ion-icon {\n  color: #33529f;\n}\n\n.Filter_Div ion-list div .sortCancelBtn {\n  max-height: 20px;\n  font-size: 14px;\n  --padding-end: 5px;\n  font-family: Open Sans SemiBold;\n}\n\n.Filter_Div ion-list hr {\n  border-top: 1px solid #666666;\n}\n\n.Filter_Div .filterTypeBtn {\n  --color: #000000;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  font-weight: normal;\n  font-size: 14px;\n  font-family: Open Sans Regular;\n}\n\n.Filter_Div .filterTypeBtn #filterLabel {\n  text-align: left;\n  width: 100%;\n}\n\n.Filter_Div .filterTypeBtn #Filtertype {\n  font-size: 12px;\n}\n\n.Filter_Div .filterTypeBtn ion-icon {\n  font-size: 20px;\n}\n\n.Filter_Div .filterTypeBtn .filterTypeInnerSpan {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.activeSort {\n  --background: linear-gradient(90deg, #00b9ff, #233771) !important;\n  --color: #ffffff !important;\n}\n\n.alertdayspan {\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 25px;\n  width: 25px;\n  color: #000000;\n}\n\n.dayActive {\n  background: #00b9ff !important;\n  color: #ffffff !important;\n  font-weight: 500;\n}\n\n.stock_companycard-extend .ios .stockCompList-card {\n  height: calc(95vh - 410px) !important;\n}\n\n.pager_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px 0px;\n  background: #d3d8dc;\n}\n\n.ios .pager_div {\n  height: 50px;\n  padding-top: 12px;\n}\n\n.dot0p {\n  margin: 0px 10px 0px 0px;\n  font-size: 13px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.dot1P {\n  margin: 0px;\n  font-size: 13px;\n  width: 12px;\n  height: 12px;\n  background-color: #909090;\n  border-radius: 50%;\n}\n\n.image0 {\n  height: 129px;\n  width: 171px;\n  padding: 30px;\n}\n\n.ionic-selectable-item {\n  --padding-end:16px !important;\n}\n\n.arrow {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.arrow span {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-bottom: 3px solid #d3d8dc;\n  border-right: 3px solid #d3d8dc;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  margin: -10px;\n  -webkit-animation: animate 2s infinite;\n          animation: animate 2s infinite;\n}\n\n.arrow span:nth-child(2) {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n}\n\n.arrow span:nth-child(3) {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n\n@-webkit-keyframes animate {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotate(45deg) translate(-5px, -5px);\n            transform: rotate(45deg) translate(-5px, -5px);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate(45deg) translate(5px, 5px);\n            transform: rotate(45deg) translate(5px, 5px);\n  }\n}\n\n@keyframes animate {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotate(45deg) translate(-5px, -5px);\n            transform: rotate(45deg) translate(-5px, -5px);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate(45deg) translate(5px, 5px);\n            transform: rotate(45deg) translate(5px, 5px);\n  }\n}\n\n.selGICS {\n  color: #25c3ff;\n}\n\n.selectIndex {\n  --background: #05baff !important;\n  color: #ffffff !important;\n}\n\n.nav-tab-item:focus {\n  --background: #05baff !important;\n  color: #ffffff !important;\n}\n\n.selectIndexLabel {\n  color: #ffffff !important;\n}\n\n.selectedIndexMed {\n  color: #ffffff !important;\n  background-color: #05baff !important;\n  margin-left: -1px !important;\n}\n\n.selectedIndexLabel {\n  color: white !important;\n}\n\n.indName {\n  max-width: 32vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n/* MEDIA */\n\n@media (max-width: 340px) and (min-width: 310px) {\n  .nav-tab li a {\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 310px) and (min-width: 280px) {\n  .nav-tab li a {\n    font-size: 9px;\n  }\n}\n\n@media (max-width: 500px) and (min-width: 420px) {\n  .nav-tab {\n    margin: 0px 5px;\n  }\n}\n\n@media (min-width: 768px) {\n  .nav-tab {\n    margin: 0px 20px !important;\n  }\n}\n\n@media (min-width: 500px) {\n  .nav-tab {\n    margin: 0px 12px;\n  }\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n@media screen and (orientation: landscape) {\n  #parent-content {\n    --overflow: auto;\n  }\n\n  .ios .stock_companycard-extend {\n    height: 300px !important;\n  }\n\n  .ios .Stockcard-extend {\n    height: 300px !important;\n  }\n\n  .ios .Index_companycard-extend {\n    height: 300px !important;\n  }\n\n  .Index_companycard-extend {\n    height: 300px !important;\n  }\n\n  .Stockcard-extend {\n    height: 300px !important;\n  }\n\n  .companycard-extend {\n    height: 300px !important;\n  }\n\n  .ios .companycard-extend {\n    height: 300px !important;\n  }\n\n  .overflowOnlyLandscape {\n    --overflow: auto;\n  }\n\n  .stockCompList-card {\n    height: 300px !important;\n  }\n\n  .child-card-content {\n    height: 300px !important;\n  }\n\n  .ios .child-card-content {\n    height: 300px !important;\n  }\n\n  .index-loader {\n    height: 300px !important;\n  }\n\n  .nameExtend {\n    width: 350px !important;\n  }\n\n  .company-card-content {\n    height: 300px !important;\n  }\n\n  .stock-header {\n    padding: 5px 12px 0px 12px !important;\n  }\n\n  .stockcomplist-card-content {\n    height: 300px !important;\n  }\n}\n\n.Banner_HomeChartcontainer svg {\n  height: 123px;\n}\n\n.ipad_Logo {\n  height: 60px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.avatar {\n  border-radius: 50%;\n  padding: 10px;\n  border: 2px solid white;\n  width: 45px;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQUo7O0FER0E7RUFFSSw4QkFBQTtBQ0RKOztBREtBO0VBQ0ksaUJBQUE7QUNGSjs7QURLQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRFFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNMSjs7QURRQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0xKOztBRE9BO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7RUFDQSxXQUFBO0FDSko7O0FET0E7RUFDSSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO0FDSko7O0FET0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9BO0VBQ0ksaUJBQUE7RUFFQSxnQkFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDTEw7O0FEUUE7RUFDSSxZQUFBO0FDTEo7O0FEUUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUNMSjs7QURRQTtFQUNJLHlCQUFBO0FDTEo7O0FEU0E7RUFDSSx5QkFBQTtBQ05KOztBRFdBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUNSSjs7QURXQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FDUko7O0FEV0E7RUFDSSxVQUFBO0FDUko7O0FEV0E7RUFDSSxVQUFBO0FDUko7O0FEV0E7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUko7O0FEV0E7RUFDSSxnQkFBQTtFQUNBLGtDQUFBO0FDUko7O0FEV0E7RUFDSSxjQUFBO0FDUko7O0FEV0E7RUFDSSxpQkFBQTtFQUNBLGtDQUFBO0FDUko7O0FEV0E7RUFDQSxtQkFBQTtBQ1JBOztBRFdBO0VBQ0ksWUFBQTtFQUNGLGdCQUFBO0VBQ0EsNEJBQUE7QUNSRjs7QURXQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQkFBQTtBQ1JKOztBRFdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FDUko7O0FEWUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ1RKOztBRDhCQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQ0FBQTtBQzNCSjs7QUQ4QkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUMzQko7O0FEOEJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQzNCSjs7QUQ4QkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUMzQko7O0FEOEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDM0JKOztBRDhCQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQzNCSjs7QUQ4QkE7RUFDSSxZQUFBO0FDM0JKOztBRDhCQTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQzNCSjs7QUQ4QkE7RUFDSSxhQUFBO0FDM0JKOztBRDhCQTtFQUNJLFdBQUE7RUFFQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDNUJKOztBRCtCQTtFQUNJLGFBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDNUJKOztBRCtCQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksWUFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQzVCSjs7QUQrQkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDNUJKOztBRCtCQTtFQUNJLGFBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUM1Qko7O0FEK0JBO0VBRUksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQzdCSjs7QURpQ0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUM5Qko7O0FEaUNBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBRUEsZUFBQTtBQ2hDSjs7QURtQ0E7Ozs7O0VBQUE7O0FBT0E7RUFDSSxrQkFBQTtBQ2pDSjs7QURtQ0E7RUFDSSxjQUFBO0FDaENKOztBRGtDQTtFQUNJLDRCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUMvQko7O0FEa0NBO0VBRUksY0FBQTtBQ2hDSjs7QURtQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDaENKOztBRG1DQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDaENKOztBRG1DQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQ2hDSjs7QUR3Q0E7RUFHSSxnQkFBQTtFQUNBLFlBQUE7QUN2Q0o7O0FEMkNBO0VBQ0ksMEJBQUE7QUN4Q0o7O0FEMkNBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDeENKOztBRDJDQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ3hDSjs7QUQyQ0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUN4Q0o7O0FEMkNBO0VBRUksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQzFDSjs7QUQ2Q0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDMUNKOztBRDRDSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFdBQUE7QUMxQ1I7O0FENENRO0VBQ0kseUJBQUE7VUFBQSw4QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDMUNaOztBRDRDWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUMxQ2hCOztBRDZDWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDM0NoQjs7QUQrQ1E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDN0NaOztBRGtEQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDL0NKOztBRGtEQTtFQUNJLGlCQUFBO0FDL0NKOztBRGtEQTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBQy9DSjs7QURrREE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUMvQ0o7O0FEa0RBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUMvQ0o7O0FEa0RBO0VBRUkseUJBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ2hESjs7QURxREE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbERKOztBRHFEQTtFQUNJLGlDQUFBO0FDbERKOztBRHFEQTtFQUNJLGlDQUFBO0FDbERKOztBRHFEQTtFQUNJLG1DQUFBO0VBQ0EseUJBQUE7QUNsREo7O0FEcURBO0VBQ0ksbUNBQUE7RUFDQSx5QkFBQTtBQ2xESjs7QURvREE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDakRKOztBRG9EQTtFQUNJLFlBQUE7QUNqREo7O0FEb0RBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDakRKOztBRG9EQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNqREo7O0FEb0RBO0VBQ0ksV0FBQTtBQ2pESjs7QURvREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ2pESjs7QURvREE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO0FDakRKOztBRG9EQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ2pESjs7QURvREE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNqREo7O0FEb0RBO0VBQ0ksV0FBQTtBQ2pESjs7QURvREE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2pESjs7QURxREE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNsREo7O0FEcURBO0VBQ0ksZ0JBQUE7QUNsREo7O0FEcURBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDbERKOztBRHFEQTtFQUNJLDRCQUFBO0FDbERKOztBRHFEQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUFlLHlCQUFBO1VBQUEsbUJBQUE7QUNqRG5COztBRG9EQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDakRKOztBRG9EQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ2pESjs7QURvREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDakRKOztBRG9EQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQ2pESjs7QURvREE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ2pESjs7QURvREE7RUFDSSx1QkFBQTtFQUVBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ2xESjs7QURxREE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNsREo7O0FEcURBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ2xESjs7QURxREE7RUFDSSw0QkFBQTtBQ2xESjs7QURxREE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNsREo7O0FEcURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDbERKOztBRHFEQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDbERKOztBRHFEQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDbERKOztBRHFEQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtBQ2xESjs7QURxREE7RUFDSSxhQUFBO0FDbERKOztBRHFEQTtFQUNJLHNDQUFBO0FDbERKOztBRHFEQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ2xESjs7QURvREE7RUFDSSxzQ0FBQTtBQ2pESjs7QURzREE7RUFDSSxnQkFBQTtBQ25ESjs7QURxREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ2xESjs7QURxREE7RUFFSSwyQkFBQTtFQUNBLGVBQUE7QUNuREo7O0FEc0RBO0VBQ0ksOEJBQUE7RUFDQSx1QkFBQTtBQ25ESjs7QURzREE7RUFDSSxvQkFBQTtBQ25ESjs7QUR5REE7RUFDSSxrQkFBQTtFQUNGLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLHVDQUFBO0FDdERGOztBRHdERTtFQUNFLFNBQUE7RUFDRixPQUFBO0VBQ0EsUUFBQTtFQUNELGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDdEREOztBRHdEQztFQUVHLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDdkRKOztBRHdESTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUN0RFI7O0FEd0RJO0VBQ0ksY0FBQTtBQ3REUjs7QUR5REk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FDdkRSOztBRDJEQztFQUNHLDZCQUFBO0FDekRKOztBRDZERTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDM0RKOztBRDZESTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQzNEUjs7QUQ4REk7RUFDSSxlQUFBO0FDNURSOztBRCtESTtFQUNJLGVBQUE7QUM3RFI7O0FEZ0VJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQzlEUjs7QURtRUE7RUFDSSxpRUFBQTtFQUNBLDJCQUFBO0FDaEVKOztBRG1FQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNoRUo7O0FEbUVBO0VBQ0ksOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDaEVKOztBRDBFQTtFQUdJLHFDQUFBO0FDekVKOztBRGdIQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDN0dKOztBRGtIQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQy9HSjs7QURrSEE7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUMvR0o7O0FEa0hBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUMvR0o7O0FEa0hBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDL0dKOztBRGtIQTtFQUNJLDZCQUFBO0FDL0dKOztBRGtIQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDL0dKOztBRGlIQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUM5R0o7O0FEaUhBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQzlHSjs7QURpSEE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FDOUdKOztBRGlIQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHNEQUFBO1lBQUEsOENBQUE7RUM5R047RURnSEU7SUFDSSxVQUFBO0VDOUdOO0VEZ0hFO0lBQ0ksVUFBQTtJQUNBLG9EQUFBO1lBQUEsNENBQUE7RUM5R047QUFDRjs7QURtR0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxzREFBQTtZQUFBLDhDQUFBO0VDOUdOO0VEZ0hFO0lBQ0ksVUFBQTtFQzlHTjtFRGdIRTtJQUNJLFVBQUE7SUFDQSxvREFBQTtZQUFBLDRDQUFBO0VDOUdOO0FBQ0Y7O0FEaUhBO0VBQ0ksY0FBQTtBQy9HSjs7QURrSEE7RUFDSSxnQ0FBQTtFQUNBLHlCQUFBO0FDL0dKOztBRGtIQTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7QUMvR0o7O0FEa0hBO0VBQ0kseUJBQUE7QUMvR0o7O0FEa0hBO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0FDL0dKOztBRGtIQTtFQUNJLHVCQUFBO0FDL0dKOztBRGtIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQy9HSjs7QURrSEEsVUFBQTs7QUFDQTtFQUNJO0lBQ0ksZUFBQTtFQy9HTjtBQUNGOztBRGlIQTtFQUNJO0lBQ0ksY0FBQTtFQy9HTjtBQUNGOztBRGlIQTtFQUNBO0lBQ0ksZUFBQTtFQy9HRjtBQUNGOztBRGtIQTtFQUNBO0lBQ0ksMkJBQUE7RUNoSEY7QUFDRjs7QURrSEE7RUFDSTtJQUNJLGdCQUFBO0VDaEhOO0FBQ0Y7O0FEc0lBO0VBQ0ksYUFBQTtBQ3BJSjs7QUR1SUE7RUFDSTtJQUNJLGdCQUFBO0VDcElOOztFRHVJRTtJQUNJLHdCQUFBO0VDcElOOztFRHNJRTtJQUNJLHdCQUFBO0VDbklOOztFRHFJRTtJQUNJLHdCQUFBO0VDbElOOztFRG9JRTtJQUNJLHdCQUFBO0VDaklOOztFRG1JRTtJQUNJLHdCQUFBO0VDaElOOztFRGtJRTtJQUNJLHdCQUFBO0VDL0hOOztFRGlJRTtJQUNJLHdCQUFBO0VDOUhOOztFRGdJRTtJQUNJLGdCQUFBO0VDN0hOOztFRCtIRTtJQUNJLHdCQUFBO0VDNUhOOztFRDhIRTtJQUNJLHdCQUFBO0VDM0hOOztFRDZIRTtJQUNJLHdCQUFBO0VDMUhOOztFRDRIRTtJQUNJLHdCQUFBO0VDekhOOztFRDJIRTtJQUNJLHVCQUFBO0VDeEhOOztFRDZIRTtJQUNJLHdCQUFBO0VDMUhOOztFRDRIRTtJQUNJLHFDQUFBO0VDekhOOztFRDRIRTtJQUNJLHdCQUFBO0VDekhOO0FBQ0Y7O0FENkhBO0VBQ0ksYUFBQTtBQzNISjs7QUQ4SEE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQzNISjs7QUQ4SEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDM0hKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmU0Yzk5O1xyXG4gICBcclxufVxyXG5cclxuLnRvb2xiYXItYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLUxvZ297XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNwYXJlbnQtY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkM2Q4ZGM7XHJcblxyXG59XHJcblxyXG4uc2VhcmNoLU91dGVyLURpdntcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoQnRue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDsgXHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7ICBcclxuICAgIC0tYmFja2dyb3VuZDogIzAwYWVlZjtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaElucHV0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLS1jb2xvcjojNjY2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoSXRlbXtcclxuICAgIC0tYm9yZGVyLXdpZHRoOjJweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiMzMzUyOWY7IFxyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTsgXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDI4cHg7XHJcblxyXG59XHJcblxyXG4uc2VhcmNoRGl2e1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2LXRhYntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDI1cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYtaXRlbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbi5uYXYtaXRlbTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjlmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgzcHgpIHJvdGF0ZVgoMi41ZGVnKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uaW5kZXgtbG9hZGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI1MXB4KTtcclxufVxyXG5cclxuLmxvYWRlcntcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4ubmF2LXRhYi1pbmRleHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLy8gcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggNHB4O1xyXG59XHJcblxyXG4ubmF2LXRhYi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICBjb2xvcjogIzY2NjtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxufVxyXG5cclxuLm5hdi10YWItY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uRVRGbmF2LWl0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLkVURm5hdi1pdGVtOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3OWI0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDNweCkgcm90YXRlWCgyLjVkZWcpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5uYXYtdGFiIGxpIGF7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDtcclxufVxyXG5cclxuLm5hdi10YWIgLm5hdi1pdGVtLmFjdGl2ZTo6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAvLyB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubmF2LXRhYiAuRVRGbmF2LWl0ZW0uYWN0aXZlOjphZnRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgIC8vIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcblxyXG4ubmF2LXRhYiAubmF2LWl0ZW0uYWN0aXZlIGF7XHJcbiAgICBjb2xvcjojMDFiOWZmO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm5hdi10YWIgLkVURm5hdi1pdGVtLmFjdGl2ZSBhe1xyXG4gICAgY29sb3I6IzAxYjlmZjtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5uYXYtdGFiIC5uYXYtaXRlbS5hY3RpdmV7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubmF2LXRhYiAuRVRGbmF2LWl0ZW0uYWN0aXZle1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnRhYi1jb250ZW50e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgei1pbmRleDogMTAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGFiLXBhbmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDEycHggMTJweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQgIC50YWItcGFuZS5hY3RpdmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSBcclxuXHJcbi5hY2NvcmRpb257XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAxMnB4IDEycHg7XHJcbn1cclxuXHJcbi5jYXJkOmZpcnN0LWNoaWxkIHtcclxuYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVye1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxufVxyXG5cclxuLmFjY29yZGlvbi1zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5wYXJlbnQtY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMTJweCAxMnB4O1xyXG5cclxufVxyXG5cclxuLmhlYWRlci1jaXJjbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5OyBcclxuICAgIGhlaWdodDogNDBweDsgXHJcbiAgICB3aWR0aDogNDBweDsgXHJcbiAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNGM5OTtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAvKiBmb250LWZhbWlseTogb3BlbiBzYW5zOyAqL1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4vLyAgIHBhZGRpbmc6IDVweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIG1heC13aWR0aDogNDhweDtcclxuLy8gICBtYXgtaGVpZ2h0OiA0OHB4O1xyXG4vLyAgIG1pbi13aWR0aDogNDhweDtcclxuLy8gICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbi8vICAgbWFyZ2luLXRvcDogMHB4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIC8vICAgIHZpc2liaWxpdHk6aGlkZGVuO1xyXG59XHJcblxyXG4ucGFyZW50LWNhcmQtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1ib3R0b206IDEuM3B4IHNvbGlkICNkNGQ3ZGI7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci10aXRsZXtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLmhlYWRlci1idG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1jb2xvcjogI2RmZGZkZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNkZmRmZGY7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmhlYWRlci10aXRsZS1kaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZS1zcGFue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmhlYWRlci1jb21wLXNwYW57XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG4ucGFyZW50LWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmluZGV4LWNhcmR7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGhlaWdodDogY2FsYyggMTAwdmggLSAzMzBweCApO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY29sbGFwc2V7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2hpbGQtY2FyZHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IGNhbGMoIDEwMHZoIC0gMzMwcHggKTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hpbGQtY2FyZC1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOTlweCk7IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sbGFwc2UtcGFyZW50e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRlc3Qxe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvcnQtY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnNvcnQtY2FyZC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxLjNweCBzb2xpZCAjZDRkN2RiO1xyXG4gICAgYm9yZGVyLXRvcDogMS4zcHggc29saWQgI2Q0ZDdkYjtcclxufVxyXG5cclxuLnNvcnQtaGVhZGVyLWJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1jb2xvcjogIzY2NjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM2NjY7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcclxufVxyXG5cclxuLnNvcnQtaGVhZGVyLXRpdGxlLWRpdntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc29ydC1oZWFkZXItdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uY29sbGFwc2Utc29ydHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50b3RhbFNjb3Jle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5pbmRleC1jaXJjbGV7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllODFjO1xyXG4gICAgY29sb3I6ICNmZjk1MDM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBzYW5zIFNlbWlib2xkO1xyXG4gICAgbWF4LXdpZHRoOiA0MnB4O1xyXG4gICAgbWF4LWhlaWdodDogNDJweDtcclxuICAgIG1pbi13aWR0aDogNDJweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQycHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4jcGFyZW50LWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJhY2tCdG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCA1cHg7XHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IC0xOXB4OyAqL1xyXG4gICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBcclxufVxyXG4vKi5iYWNrQnRuOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0qL1xyXG5cclxuLmJhY2tUZXh0LWxhYmVse1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5iYWNrVGV4dHtcclxuICAgIGNvbG9yOiAjMDFiOWZmO1xyXG59XHJcbi5jb2wtZmlyc3R7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLkVURkNoaWxkLURpdntcclxuICAgIC8vIHBhZGRpbmc6IDMycHggMTBweCAwcHggMTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uRVRGQ2hpbGQtTGlzdHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4IDRweFxyXG59XHJcblxyXG4uRVRGQ2hpbGQtSXRlbXtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uRVRGQ2hpbGQtTGFiZWx7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gc2FucyBTZW1pQm9sZDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG4vLyAuY29tcGFueS1jYXJkLWNvbnRlbnR7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIHBhZGRpbmc6IDBweDtcclxuLy8gfVxyXG5cclxuLmNvbXBhbnktbGlzdC1pbm5lci1kaXZ7XHJcbiAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MTBweCk7XHJcbiAgICAvLyBvdmVyZmxvdzogYXV0bztcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uZm9jZVNjcm9sbE92ZXJmbG93e1xyXG4gICAgLS1vdmVyZmxvdzphdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21wYW55LWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmNvbXBhbnktbGlzdC1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC0tbWluLWhlaWdodDogMzBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbn1cclxuXHJcbi5jb21wYW55LWxhYmVsLW91dGVyLWRpdntcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ0LCAxNTYsIDQzKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG91Y2gtYWN0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29tcGFueS1sYWJlbFxyXG57XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMXB4OyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmluZGV4LW91dGVyLURpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuaW5kZXgtaW5uZXItRGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmZpcnN0LWRpdntcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5jb21wLU5hbWV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjB2dztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGVyLXZhbHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBTZW1pQm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWNvbmQtRGl2e1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb21wYW55LWxhYmVsLWlubmVyLXNwYW57XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLnRhYi1hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzA1YmFmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2VGFiQnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjlmZjsgIFxyXG4gICAgZmxleDogMTsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHggM3B4OyAgICAgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDsgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbn1cclxuXHJcbi5GSU5hdlRhYkJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODg5YWU7ICBcclxuICAgIGZsZXg6IDE7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDNweDsgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uRVRGTmF2VGFiQnRuXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODg5YWU7ICBcclxuICAgIGZsZXg6IDE7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDNweDsgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG59XHJcblxyXG5cclxuXHJcbi5pbmRleC1oZWFkZXJ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUtbGVmdHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLmFjdGl2ZS1yaWdodHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLnNsaWRlcy1tZHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmZmZmZmO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzY2NjtcclxufVxyXG5cclxuLnNsaWRlcy1pb3N7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2ZmZmZmZjtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICM2NjY7XHJcbn1cclxuLnN0b2Nrcy1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxuICAgIG1hcmdpbjogMHB4OyBcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5zdG9jay1jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zdG9jay1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAzcHggMTVweCAwcHggMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc3RvY2stc3BhbntcclxuICAgIGNvbG9yOiMwMGI5ZmY7IFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pYm9sZDtcclxufVxyXG5cclxuLmltYWdlLWRpdntcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtc3RvY2stZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtc3RvY2stc2NvcmV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogZ3JlZW47IFxyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBFeHRyYWJvbGQ7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1zdG9jay1jb21we1xyXG4gICAgY29sb3I6IGdyZWVuOyBcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xyXG59XHJcblxyXG4uc2xpZGVyLWRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGUtY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgICBcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7ICBcclxuICAgIG1hcmdpbjogM3B4IDBweCAwcHggMHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnRpdGxlLWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDFweDsgXHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUtdGV4dHtcclxuICAgIHBhZGRpbmc6IDRweCAycHg7XHJcbn1cclxuXHJcbi50aXRsZS1we1xyXG4gICAgY29sb3I6ICMwMGI5ZmY7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pYm9sZDtcclxufVxyXG5cclxuLnN1YkluZGV4LWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5zdWJJbmRleC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViSW5kZXgtY2lyY2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNGM5OTsgXHJcbiAgICBoZWlnaHQ6IDQwcHg7IFxyXG4gICAgd2lkdGg6IDQwcHg7IFxyXG4gICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgbWluLWhlaWdodDogNDBweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pYm9sZDtcclxufVxyXG5cclxuLlN1YkluZGV4LWhlYWRlci1jb250ZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogT21uZXM7XHJcbiAgICBjb2xvcjogIzg4ODg4ODsgXHJcbn1cclxuXHJcbi5zdWJJbmRleC1oZWFkZXItdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgY29sb3I6ICM4ODg4ODg7IFxyXG4gICAgZm9udC1mYW1pbHk6IE9tbmVzO1xyXG59XHJcblxyXG4uc3ViSW5kZXgtaGVhZGVyLXN1YnRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7IFxyXG4gICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgIGNvbG9yOiAjNjY2NjY2OyBcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IFxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7IFxyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyOyBcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7IFxyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaWJvbGQ7XHJcbn1cclxuXHJcbi5zdWJpbmRleC1pY29ue1xyXG4gICAgaGVpZ2h0OiA0MHB4OyBcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4uc3RvY2tDb21wTGlzdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDExcHgpOyBcclxuICAgIG1hcmdpbjogM3B4IDBweCAwcHggMHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7IFxyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnN0b2NrY29tcGxpc3QtY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQxMXB4KSAhaW1wb3J0YW50OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLk5hdlRhYkxpc3R7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgcGFkZGluZzogMHB4OyBcclxuICAgIG1hcmdpbjogM3B4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uaW5kZXgtaGVhZGVyLWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5pbmRleC1oZWFkZXItY2FyZC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW5kZXgtaGVhZGVyLWNpcmNsZXtcclxuICAgIG1pbi13aWR0aDogNDBweDsgXHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4OyBcclxuICAgIGhlaWdodDogNDBweDsgXHJcbiAgICB3aWR0aDo0MHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5O1xyXG59XHJcblxyXG4uQnRuLWlubmVyLWRpdntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb21wYW55LWNhcmR7XHJcbiAgICBtYXJnaW46IDNweCAwcHggMHB4IDBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uY29tcGFueS1jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAwcHg7IFxyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzk5cHgpO1xyXG59XHJcblxyXG4uc3RvY2stY29sbGFwc2V7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uU3RvY2tjYXJkLWV4dGVuZHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM2MXB4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFiMmNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwOThjYjtcclxuICAgIGZsZXg6IDE7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDNweDsgICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7ICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG59XHJcbi5jb21wYW55Y2FyZC1leHRlbmR7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTlweCkgIWltcG9ydGFudDtcclxuICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDI2MXB4KSAhaW1wb3J0YW50O1xyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcxcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdG9ja2ljb24tYWN0aXZle1xyXG4gICAgLS1jb2xvcjogIzA1YmFmZjtcclxufVxyXG4ucy1ub3tcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIG1pbi13aWR0aDogMjhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi50aWNrZXItZGF0YXtcclxuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5jb21wLXNlbHtcclxuICAgIGJhY2tncm91bmQ6ICMwMGI5ZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoSXRlbXtcclxuICAgIC0tcGFkZGluZy1zdGFydDowcHhcclxufVxyXG4uSW5kZXhfY29tcGFueWNhcmQtZXh0ZW5ke1xyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjYwcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5GaWx0ZXJfRGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNjUsIDY1LCAwLjgpO1xyXG4gIFxyXG4gIGlvbi1saXN0e1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiBwb3NpdGlvbjogaW5oZXJpdDtcclxuIG1hcmdpbjogMCAgMTVweDtcclxuIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XHJcbiBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gcGFkZGluZzogMTVweDtcclxuXHJcbiBkaXZ7XHJcbiAgICAvLyAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICMzMzUyOWY7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvcnRDYW5jZWxCdG57XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICB9XHJcbiB9XHJcblxyXG4gaHJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2NjY2NjtcclxuIH1cclxuICB9XHJcblxyXG4gIC5maWx0ZXJUeXBlQnRue1xyXG4gICAgLS1jb2xvcjogIzAwMDAwMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjtcclxuXHJcbiAgICAjZmlsdGVyTGFiZWx7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjRmlsdGVydHlwZXtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWx0ZXJUeXBlSW5uZXJTcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbn1cclxuXHJcbi5hY3RpdmVTb3J0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGI5ZmYsICMyMzM3NzEpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGVydGRheXNwYW57XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGhlaWdodDogMjVweDsgXHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uZGF5QWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogIzAwYjlmZiFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uc3RvY2tfY29tcGFueWNhcmQtZXh0ZW5ke1xyXG4gLy8gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNjBweCkgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyAuaW9zIC5jb21wYW55LWxpc3QtaW5uZXItZGl2e1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzkwcHgpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IGNhbGMoOTV2aCAtIDQxNXB4KSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4uaW9zIC5zdG9ja0NvbXBMaXN0LWNhcmR7XHJcbiAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MDBweCkgIWltcG9ydGFudDtcclxuICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDM4MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDk1dmggLSA0MTBweCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLmlvcyAuY2hpbGQtY2FyZC1jb250ZW50e1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDAxcHgpICFpbXBvcnRhbnQ7XHJcbi8vICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzODFweCkgIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogY2FsYyg5NXZoIC0gNDEycHgpICFpbXBvcnRhbnRcclxuLy8gfVxyXG4vLyAuaW9zIC5zdG9ja19jb21wYW55Y2FyZC1leHRlbmR7XHJcbi8vICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMzlweCkgIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogY2FsYyg5NXZoIC0gMjcwcHgpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5pb3MgLkluZGV4X2NvbXBhbnljYXJkLWV4dGVuZHtcclxuLy8gICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDIzOXB4KSAhaW1wb3J0YW50O1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjYxcHgpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IGNhbGMoOTV2aCAtIDI2NnB4KSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaW9zIC5TdG9ja2NhcmQtZXh0ZW5ke1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjMxcHgpICFpbXBvcnRhbnQ7XHJcbi8vICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMjlweCkgIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogY2FsYyg5NXZoIC0gMjYwcHgpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5pb3MgLmNvbXBhbnktY2FyZC1jb250ZW50e1xyXG4vLyAgICAgaGVpZ2h0OiBjYWxjKDk1dmggLSA0MTBweCkgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyAuaW9zIC5jb21wYW55Y2FyZC1leHRlbmR7XHJcbi8vICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTFweCkgIWltcG9ydGFudDtcclxuLy8gICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDIzMXB4KSAhaW1wb3J0YW50O1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjMwcHgpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IGNhbGMoOTV2aCAtIDI2MnB4KSAhaW1wb3J0YW50O1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcxcHgpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5pb3MgLmNvbXBhbnktbGlzdC1pbm5lci1kaXZ7XHJcbi8vICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzODBweCkgIWltcG9ydGFudDtcclxufVxyXG4ucGFnZXJfZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2QzZDhkYztcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmlvcyAucGFnZXJfZGl2e1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5kb3QwcHtcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDsgXHJcbiAgICBmb250LXNpemU6IDEzcHg7IFxyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZG90MVB7XHJcbiAgICBtYXJnaW46IDBweDsgXHJcbiAgICBmb250LXNpemU6IDEzcHg7IFxyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwOTA5MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmltYWdlMHtcclxuICAgIGhlaWdodDogMTI5cHg7XHJcbiAgICB3aWR0aDogMTcxcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uaW9uaWMtc2VsZWN0YWJsZS1pdGVte1xyXG4gICAgLS1wYWRkaW5nLWVuZDoxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcnJvd3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG4uYXJyb3cgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2QzZDhkYztcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNkM2Q4ZGM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBtYXJnaW46IC0xMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG4uYXJyb3cgc3BhbjpudGgtY2hpbGQoMil7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjJzO1xyXG59XHJcblxyXG4uYXJyb3cgc3BhbjpudGgtY2hpbGQoMyl7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gICAgMCV7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01cHgsLTVweCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCw1cHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VsR0lDU3tcclxuICAgIGNvbG9yOiAjMjVjM2ZmO1xyXG59XHJcblxyXG4uc2VsZWN0SW5kZXh7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNWJhZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtdGFiLWl0ZW06Zm9jdXN7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNWJhZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3RJbmRleExhYmVse1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW5kZXhNZWR7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YmFmZiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW5kZXhMYWJlbHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5kTmFtZXtcclxuICAgIG1heC13aWR0aDogMzJ2dzs7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4vKiBNRURJQSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMzQwcHgpIGFuZCAobWluLXdpZHRoOiAzMTBweCkge1xyXG4gICAgLm5hdi10YWIgbGkgYXtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMxMHB4KSBhbmQgKG1pbi13aWR0aDogMjgwcHgpIHtcclxuICAgIC5uYXYtdGFiIGxpIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG1pbi13aWR0aDogNDIwcHgpIHtcclxuLm5hdi10YWIge1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuLm5hdi10YWIge1xyXG4gICAgbWFyZ2luOiAwcHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgLm5hdi10YWIge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDEycHg7XHJcbiAgICAgICAgfVxyXG59XHJcbi8vIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxuLy8ge1xyXG4vLyBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xyXG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkOGRjICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIDo6LXdlYmtpdC1zY3JvbGxiYXJcclxuLy8ge1xyXG4vLyB3aWR0aDogNXB4IWltcG9ydGFudDtcclxuLy8gYmFja2dyb3VuZC1jb2xvcjogI2QzZDhkYyAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXHJcbi8vIHtcclxuLy8gYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDtcclxuLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwYjlmZiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkge1xyXG4gICAgI3BhcmVudC1jb250ZW50e1xyXG4gICAgICAgIC0tb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pb3MgLnN0b2NrX2NvbXBhbnljYXJkLWV4dGVuZHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaW9zIC5TdG9ja2NhcmQtZXh0ZW5ke1xyXG4gICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pb3MgLkluZGV4X2NvbXBhbnljYXJkLWV4dGVuZHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuSW5kZXhfY29tcGFueWNhcmQtZXh0ZW5ke1xyXG4gICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5TdG9ja2NhcmQtZXh0ZW5ke1xyXG4gICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jb21wYW55Y2FyZC1leHRlbmR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmlvcyAuY29tcGFueWNhcmQtZXh0ZW5ke1xyXG4gICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5vdmVyZmxvd09ubHlMYW5kc2NhcGV7XHJcbiAgICAgICAgLS1vdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC5zdG9ja0NvbXBMaXN0LWNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNoaWxkLWNhcmQtY29udGVudHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaW9zIC5jaGlsZC1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmluZGV4LWxvYWRlcntcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmFtZUV4dGVuZHtcclxuICAgICAgICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC8vIC5jb21wYW55LWxpc3QtaW5uZXItZGl2e1xyXG4gICAgICAgIC8vIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIC8vIH1cclxuICAgIC5jb21wYW55LWNhcmQtY29udGVudHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc3RvY2staGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4IDBweCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0b2NrY29tcGxpc3QtY2FyZC1jb250ZW50e1xyXG4gICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuIH1cclxuXHJcbi8vICBUb29sIFN0eWxpbmdcclxuLkJhbm5lcl9Ib21lQ2hhcnRjb250YWluZXIgc3Zne1xyXG4gICAgaGVpZ2h0OjEyM3B4O1xyXG4gIH1cclxuXHJcbi5pcGFkX0xvZ297XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmF2YXRhcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4iLCIudG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzJlNGM5OTtcbn1cblxuLnRvb2xiYXItYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaGVhZGVyLUxvZ28ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI3BhcmVudC1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZDNkOGRjO1xufVxuXG4uc2VhcmNoLU91dGVyLURpdiB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4uc2VhcmNoQnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XG4gIHdpZHRoOiA3NXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGhlaWdodDogMjRweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAtLWJhY2tncm91bmQ6ICMwMGFlZWY7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNlYXJjaElucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1jb2xvcjojNjY2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWFyY2hJdGVtIHtcbiAgLS1ib3JkZXItd2lkdGg6MnB4O1xuICAtLWJvcmRlci1jb2xvcjojMzM1MjlmO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLS1taW4taGVpZ2h0OiAyOHB4O1xufVxuXG4uc2VhcmNoRGl2IHtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuXG4ubmF2LXRhYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDBweCAyNXB4IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5uYXYtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG4gIGZsZXg6IDE7XG59XG5cbi5uYXYtaXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiOWZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoM3B4KSByb3RhdGVYKDIuNWRlZyk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uaW5kZXgtbG9hZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI1MXB4KTtcbn1cblxuLmxvYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5uYXYtdGFiLWluZGV4IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG59XG5cbi5uYXYtdGFiLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDVweCAwIDVweCAwO1xufVxuXG4ubmF2LXRhYi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5FVEZuYXYtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDA7XG4gIGZsZXg6IDE7XG59XG5cbi5FVEZuYXYtaXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3OWI0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoM3B4KSByb3RhdGVYKDIuNWRlZyk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubmF2LXRhYiBsaSBhIHtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XG59XG5cbi5uYXYtdGFiIC5uYXYtaXRlbS5hY3RpdmU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLm5hdi10YWIgLkVURm5hdi1pdGVtLmFjdGl2ZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubmF2LXRhYiAubmF2LWl0ZW0uYWN0aXZlIGEge1xuICBjb2xvcjogIzAxYjlmZjtcbiAgei1pbmRleDogMjtcbn1cblxuLm5hdi10YWIgLkVURm5hdi1pdGVtLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICMwMWI5ZmY7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5uYXYtdGFiIC5uYXYtaXRlbS5hY3RpdmUge1xuICB6LWluZGV4OiAyO1xufVxuXG4ubmF2LXRhYiAuRVRGbmF2LWl0ZW0uYWN0aXZlIHtcbiAgei1pbmRleDogMjtcbn1cblxuLnRhYi1jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIHotaW5kZXg6IDEwMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFiLXBhbmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMTJweCAxMnB4O1xufVxuXG4udGFiLWNvbnRlbnQgLnRhYi1wYW5lLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWNjb3JkaW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAxMnB4IDEycHg7XG59XG5cbi5jYXJkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xufVxuXG4uYWNjb3JkaW9uLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbi5wYXJlbnQtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAxMnB4IDEycHg7XG59XG5cbi5oZWFkZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlNGM5OTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlib2xkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wYXJlbnQtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDEuM3B4IHNvbGlkICNkNGQ3ZGI7XG59XG5cbi5jYXJkLWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmhlYWRlci1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY29sb3I6ICNkZmRmZGY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2RmZGZkZjtcbiAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5oZWFkZXItdGl0bGUtZGl2IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5oZWFkZXItdGl0bGUtc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmhlYWRlci1jb21wLXNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5wYXJlbnQtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaW5kZXgtY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IGNhbGMoIDEwMHZoIC0gMzMwcHggKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jb2xsYXBzZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGlsZC1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogY2FsYyggMTAwdmggLSAzMzBweCApO1xuICBib3gtc2hhZG93OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoaWxkLWNhcmQtY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOTlweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29sbGFwc2UtcGFyZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRlc3QxIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnNvcnQtY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5zb3J0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItYm90dG9tOiAxLjNweCBzb2xpZCAjZDRkN2RiO1xuICBib3JkZXItdG9wOiAxLjNweCBzb2xpZCAjZDRkN2RiO1xufVxuXG4uc29ydC1oZWFkZXItYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjNjY2O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM2NjY7XG4gIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZjtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcbn1cblxuLnNvcnQtaGVhZGVyLXRpdGxlLWRpdiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc29ydC1oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNjY2O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4uY29sbGFwc2Utc29ydCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b3RhbFNjb3JlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMHB4O1xufVxuXG4uaW5kZXgtY2lyY2xlIHtcbiAgY29sb3I6ICNmZjk1MDM7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIHNhbnMgU2VtaWJvbGQ7XG4gIG1heC13aWR0aDogNDJweDtcbiAgbWF4LWhlaWdodDogNDJweDtcbiAgbWluLXdpZHRoOiA0MnB4O1xuICBtaW4taGVpZ2h0OiA0MnB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNwYXJlbnQtY29udGVudCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhY2tCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4O1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLyogbWFyZ2luLXJpZ2h0OiAtMTlweDsgKi9cbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4vKi5iYWNrQnRuOjphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xufSovXG4uYmFja1RleHQtbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5iYWNrVGV4dCB7XG4gIGNvbG9yOiAjMDFiOWZmO1xufVxuXG4uY29sLWZpcnN0IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5FVEZDaGlsZC1EaXYge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLkVURkNoaWxkLUxpc3Qge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4IDRweDtcbn1cblxuLkVURkNoaWxkLUl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uRVRGQ2hpbGQtTGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIHNhbnMgU2VtaUJvbGQ7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuXG4uY29tcGFueS1saXN0LWlubmVyLWRpdiB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZvY2VTY3JvbGxPdmVyZmxvdyB7XG4gIC0tb3ZlcmZsb3c6YXV0byAhaW1wb3J0YW50O1xufVxuXG4uY29tcGFueS1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmNvbXBhbnktbGlzdC1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIC0tbWluLWhlaWdodDogMzBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbi5jb21wYW55LWxhYmVsLW91dGVyLWRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tbWluLWhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2Y0OWMyYjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvdWNoLWFjdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmNvbXBhbnktbGFiZWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmluZGV4LW91dGVyLURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5kZXgtb3V0ZXItRGl2IC5pbmRleC1pbm5lci1EaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbmRleC1vdXRlci1EaXYgLmluZGV4LWlubmVyLURpdiAuZmlyc3QtZGl2IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbmRleC1vdXRlci1EaXYgLmluZGV4LWlubmVyLURpdiAuZmlyc3QtZGl2IC5jb21wLU5hbWUge1xuICB3aWR0aDogNjB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5pbmRleC1vdXRlci1EaXYgLmluZGV4LWlubmVyLURpdiAuZmlyc3QtZGl2IC5wZXItdmFsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIFNlbWlCb2xkXCI7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuLmluZGV4LW91dGVyLURpdiAuaW5kZXgtaW5uZXItRGl2IC5zZWNvbmQtRGl2IHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb21wYW55LWxhYmVsLWlubmVyLXNwYW4ge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnRhYi1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDViYWZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDAgIWltcG9ydGFudDtcbn1cblxuLm5hdlRhYkJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGI5ZmY7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbn1cblxuLkZJTmF2VGFiQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4ODlhZTtcbiAgZmxleDogMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5FVEZOYXZUYWJCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg4OWFlO1xuICBmbGV4OiAxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweCAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbn1cblxuLmluZGV4LWhlYWRlciB7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFjdGl2ZS1sZWZ0IHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4uYWN0aXZlLXJpZ2h0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMTBweCAxMHB4O1xufVxuXG4uc2xpZGVzLW1kIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmZmZmY7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICM2NjY7XG59XG5cbi5zbGlkZXMtaW9zIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmZmZmY7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICM2NjY7XG59XG5cbi5zdG9ja3MtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnN0b2NrLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnN0b2NrLWhlYWRlciB7XG4gIHBhZGRpbmc6IDNweCAxNXB4IDBweCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zdG9jay1zcGFuIHtcbiAgY29sb3I6ICMwMGI5ZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pYm9sZDtcbn1cblxuLmltYWdlLWRpdiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5zZWxlY3RlZC1zdG9jay1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XG59XG5cbi5zZWxlY3RlZC1zdG9jay1zY29yZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgRXh0cmFib2xkO1xufVxuXG4uc2VsZWN0ZWQtc3RvY2stY29tcCB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xufVxuXG4uc2xpZGVyLWRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDNweCAwcHggMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRpdGxlLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIHBhZGRpbmc6IDRweCAycHg7XG59XG5cbi50aXRsZS1wIHtcbiAgY29sb3I6ICMwMGI5ZmY7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlib2xkO1xufVxuXG4uc3ViSW5kZXgtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcbn1cblxuLnN1YkluZGV4LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdWJJbmRleC1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pYm9sZDtcbn1cblxuLlN1YkluZGV4LWhlYWRlci1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBPbW5lcztcbiAgY29sb3I6ICM4ODg4ODg7XG59XG5cbi5zdWJJbmRleC1oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODg4ODg4O1xuICBmb250LWZhbWlseTogT21uZXM7XG59XG5cbi5zdWJJbmRleC1oZWFkZXItc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaWJvbGQ7XG59XG5cbi5zdWJpbmRleC1pY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLnN0b2NrQ29tcExpc3QtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDNweCAwcHggMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnN0b2NrY29tcGxpc3QtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MTFweCkgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLk5hdlRhYkxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogM3B4IDBweCAwcHggMHB4O1xufVxuXG4uaW5kZXgtaGVhZGVyLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIwcHg7XG59XG5cbi5pbmRleC1oZWFkZXItY2FyZC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5kZXgtaGVhZGVyLWNpcmNsZSB7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5O1xufVxuXG4uQnRuLWlubmVyLWRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbXBhbnktY2FyZCB7XG4gIG1hcmdpbjogM3B4IDBweCAwcHggMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG59XG5cbi5jb21wYW55LWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzk5cHgpO1xufVxuXG4uc3RvY2stY29sbGFwc2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uU3RvY2tjYXJkLWV4dGVuZCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM2MXB4KSAhaW1wb3J0YW50O1xufVxuXG4udGFiMmNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOThjYjtcbiAgZmxleDogMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xufVxuXG4uY29tcGFueWNhcmQtZXh0ZW5kIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjU5cHgpICFpbXBvcnRhbnQ7XG59XG5cbi5zdG9ja2ljb24tYWN0aXZlIHtcbiAgLS1jb2xvcjogIzA1YmFmZjtcbn1cblxuLnMtbm8ge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1pbi13aWR0aDogMjhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi50aWNrZXItZGF0YSB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uY29tcC1zZWwge1xuICBiYWNrZ3JvdW5kOiAjMDBiOWZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoSXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDowcHggO1xufVxuXG4uRmlsdGVyX0RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA2NSwgNjUsIDAuOCk7XG59XG4uRmlsdGVyX0RpdiBpb24tbGlzdCB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICBtYXJnaW46IDAgMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5GaWx0ZXJfRGl2IGlvbi1saXN0IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5GaWx0ZXJfRGl2IGlvbi1saXN0IGRpdiBpb24tbGFiZWwge1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xufVxuLkZpbHRlcl9EaXYgaW9uLWxpc3QgZGl2IGlvbi1pY29uIHtcbiAgY29sb3I6ICMzMzUyOWY7XG59XG4uRmlsdGVyX0RpdiBpb24tbGlzdCBkaXYgLnNvcnRDYW5jZWxCdG4ge1xuICBtYXgtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbn1cbi5GaWx0ZXJfRGl2IGlvbi1saXN0IGhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2NjY2NjY7XG59XG4uRmlsdGVyX0RpdiAuZmlsdGVyVHlwZUJ0biB7XG4gIC0tY29sb3I6ICMwMDAwMDA7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyO1xufVxuLkZpbHRlcl9EaXYgLmZpbHRlclR5cGVCdG4gI2ZpbHRlckxhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uRmlsdGVyX0RpdiAuZmlsdGVyVHlwZUJ0biAjRmlsdGVydHlwZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5GaWx0ZXJfRGl2IC5maWx0ZXJUeXBlQnRuIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLkZpbHRlcl9EaXYgLmZpbHRlclR5cGVCdG4gLmZpbHRlclR5cGVJbm5lclNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWN0aXZlU29ydCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBiOWZmLCAjMjMzNzcxKSAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5hbGVydGRheXNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmRheUFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwMGI5ZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0b2NrX2NvbXBhbnljYXJkLWV4dGVuZCAuaW9zIC5zdG9ja0NvbXBMaXN0LWNhcmQge1xuICBoZWlnaHQ6IGNhbGMoOTV2aCAtIDQxMHB4KSAhaW1wb3J0YW50O1xufVxuXG4ucGFnZXJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDNkOGRjO1xufVxuXG4uaW9zIC5wYWdlcl9kaXYge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4uZG90MHAge1xuICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmRvdDFQIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwOTA5MDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW1hZ2UwIHtcbiAgaGVpZ2h0OiAxMjlweDtcbiAgd2lkdGg6IDE3MXB4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uaW9uaWMtc2VsZWN0YWJsZS1pdGVtIHtcbiAgLS1wYWRkaW5nLWVuZDoxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5hcnJvdyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZDNkOGRjO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZDNkOGRjO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIG1hcmdpbjogLTEwcHg7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAycyBpbmZpbml0ZTtcbn1cblxuLmFycm93IHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbn1cblxuLmFycm93IHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCwgNXB4KTtcbiAgfVxufVxuLnNlbEdJQ1Mge1xuICBjb2xvcjogIzI1YzNmZjtcbn1cblxuLnNlbGVjdEluZGV4IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDViYWZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtdGFiLWl0ZW06Zm9jdXMge1xuICAtLWJhY2tncm91bmQ6ICMwNWJhZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdEluZGV4TGFiZWwge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0ZWRJbmRleE1lZCB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWJhZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC0xcHggIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdGVkSW5kZXhMYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaW5kTmFtZSB7XG4gIG1heC13aWR0aDogMzJ2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogTUVESUEgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkgYW5kIChtaW4td2lkdGg6IDMxMHB4KSB7XG4gIC5uYXYtdGFiIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMxMHB4KSBhbmQgKG1pbi13aWR0aDogMjgwcHgpIHtcbiAgLm5hdi10YWIgbGkgYSB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gIC5uYXYtdGFiIHtcbiAgICBtYXJnaW46IDBweCA1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2LXRhYiB7XG4gICAgbWFyZ2luOiAwcHggMjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLm5hdi10YWIge1xuICAgIG1hcmdpbjogMHB4IDEycHg7XG4gIH1cbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAjcGFyZW50LWNvbnRlbnQge1xuICAgIC0tb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAuaW9zIC5zdG9ja19jb21wYW55Y2FyZC1leHRlbmQge1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb3MgLlN0b2NrY2FyZC1leHRlbmQge1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb3MgLkluZGV4X2NvbXBhbnljYXJkLWV4dGVuZCB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLkluZGV4X2NvbXBhbnljYXJkLWV4dGVuZCB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLlN0b2NrY2FyZC1leHRlbmQge1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb21wYW55Y2FyZC1leHRlbmQge1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb3MgLmNvbXBhbnljYXJkLWV4dGVuZCB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm92ZXJmbG93T25seUxhbmRzY2FwZSB7XG4gICAgLS1vdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIC5zdG9ja0NvbXBMaXN0LWNhcmQge1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jaGlsZC1jYXJkLWNvbnRlbnQge1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb3MgLmNoaWxkLWNhcmQtY29udGVudCB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmluZGV4LWxvYWRlciB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hbWVFeHRlbmQge1xuICAgIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbXBhbnktY2FyZC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc3RvY2staGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHggMTJweCAwcHggMTJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnN0b2NrY29tcGxpc3QtY2FyZC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5CYW5uZXJfSG9tZUNoYXJ0Y29udGFpbmVyIHN2ZyB7XG4gIGhlaWdodDogMTIzcHg7XG59XG5cbi5pcGFkX0xvZ28ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/profiledetails/profiledetails.component */ "./src/app/Components/profiledetails/profiledetails.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/dataHandler/data-handler.service */ "./src/app/services/dataHandler/data-handler.service.ts");

















var HomePage = /** @class */ (function () {
    function HomePage(dataHandler, toastCtrl, alertService, pickerCtrl, menuCtrl, events, platform, popoverController, route, alertController, screenOrientation, router, authService, storage, httpclient, plt) {
        var _this = this;
        this.dataHandler = dataHandler;
        this.toastCtrl = toastCtrl;
        this.alertService = alertService;
        this.pickerCtrl = pickerCtrl;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.platform = platform;
        this.popoverController = popoverController;
        this.route = route;
        this.alertController = alertController;
        this.screenOrientation = screenOrientation;
        this.router = router;
        this.authService = authService;
        this.storage = storage;
        this.httpclient = httpclient;
        this.plt = plt;
        this.ionselectablefailimage = 'NAA_search_notfound.png';
        this.prevSelTab = '';
        this.selDate = 1;
        this.selPer = 1;
        this.perChecked = false;
        this.showSubmit = true;
        this.selDay = 'monday';
        this.showAlertSetup = false;
        this.showFilter = false;
        this.filterby = 'HF_LTH';
        this.globalSize = 100;
        this.FIIndexList = [];
        this.globalselectorcomp = [];
        this.globalselectedcountryList = [];
        this.compETFNameList = [];
        this.comNAAIndex = [];
        this.comGlobalIndex = [];
        this.GlobalList = [];
        this.GridHeaderTitle = true;
        this.selSector = [];
        this.SelSecLevTitle = 'Sub Industry';
        this.fullSectorComp = [];
        this.SelSearchObj = [];
        this.unsortselSectorComp = [];
        this.selSectorComp = [];
        this.sectorList = [];
        this.dbGICS = [];
        this.size = 50;
        this.searchList = [];
        this.EtfSearchList = [];
        this.NaaSearchList = [];
        this.FISearchList = [];
        this.LoadsearchList = [];
        this.searchSel = "";
        this.FixedStock = [];
        this.compIndexShow = false;
        this.FIselCatogaryList = [];
        this.stockIndexShow = false;
        this.stockIcon = "ios-arrow-dropdown-circle";
        this.stockCollapse = false;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url;
        this.currentUser = null;
        this.icon = 'ios-arrow-dropdown-circle';
        this.sorticon = 'arrow-dropdown';
        this.indexclick = true;
        this.parentcard = false;
        this.SelFilter = 'Human Factor Score (ascending)';
        this.sortDisable = true;
        this.sortcard = true;
        this.CompLength = '';
        this.heightcard = '250px';
        this.NAAIndex = [];
        this.globalIndex = [];
        this.FixedIndexData = [];
        this.ETFCatagories = [];
        this.ETFHoldings = [];
        this.globalindexwise = [];
        this.naaindexwise = [];
        this.globalmed = [];
        this.naamed = [];
        this.ETFNameWise = [];
        this.ETFNameList = [];
        this.res = [];
        this.ETFCatagoriesComp = [];
        this.SelIndexName = '';
        this.globalcountry = [];
        this.unsortedIndexData = [];
        this.totalglobalcountry = [];
        this.compglobalCountryInd = [];
        this.GlobalCountryWiseInd = [];
        this.selectedIndexData = [];
        this.ETFcategory = [];
        this.ETFNameMed = [];
        this.ETFNameFull = [];
        this.showLoader = true;
        this.sectorHeadings = ['Global', 'Index', 'Sector', 'Industry Group', 'Industry', 'Sub Industry'];
        this.FilterList = [
            { "Name": 'Company Name (ascending)', "value": "1" },
            { "Name": 'Company Name (descending)', "value": "2" },
            { "Name": 'Human Factor Score (ascending)', "value": "3" },
            { "Name": 'Human Factor Score (descending)', "value": "4" },
            { "Name": 'Ticker (ascending)', "value": "5" },
            { "Name": 'Ticker (descending)', "value": "6" }
        ];
        this.M_chartMain = [];
        this.M_selResData = [];
        this.M_tradeDt = "";
        this.radius = 170;
        this.M_Companies = [];
        this.currentUser = this.authService.currentUserValue();
        if (this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY) {
            this.stockCollapse = true;
        }
        this.screenOrientation.onChange().subscribe(function () {
            setTimeout(function () {
                // console.log("Slide update");
                _this.slides.update();
            }, 500);
            if (_this.screenOrientation.type == _this.screenOrientation.ORIENTATIONS.LANDSCAPE || _this.screenOrientation.type == _this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || _this.screenOrientation.type == _this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY) {
                _this.stockCollapse = true;
            }
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.currenturl = this.router.url;
        this.createData();
        this.GetETFValues();
        this.GetFixedIndexData();
        if (this.platform.is('ipad') || this.platform.is('tablet')) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
            this.slides = document.getElementById('pageslider');
        }
        // this.menuCtrl.enable(true);
        window.addEventListener('mouseup', function (e) {
            var sortListcontainer = document.getElementById('sortbyList');
            if (_this.showFilter == true) {
                if ($(e.target).closest('#sortbyList').length === 0) {
                    _this.onSortClick();
                }
            }
        });
    };
    HomePage.prototype.onResize = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.slides) {
                _this.slides.update();
            }
        }, 100);
    };
    HomePage.prototype.showLoading = function () {
    };
    HomePage.prototype.hideLoading = function () {
        this.SearchComponent.hideLoading();
    };
    // /*************** ETF TAb Clicked Start *****************/
    // ETFNavClick() {
    //   //if()
    //   this.indexclick = false;
    //   this.parentcard = true;
    //   this.icon = 'arrow-dropup';
    //   if (this.sortcard == false) {
    //     this.sorticon = 'arrow-dropdown';
    //     this.sortcard = true;
    //   }
    //   this.GetETFValues();
    //   this.httpclient.get(this.api_url + "/Scores/GetETFMaster").subscribe((stockIndex: any[]) => {
    //     var vall = stockIndex.map(item => item.category);
    //     this.ETFCatagories = vall.filter(function (value, index, self) {
    //       return self.indexOf(value) === index;
    //     });
    //     var i;
    //     for (i = 0; i < this.ETFCatagories.length; i++) {
    //       let temp = stockIndex.filter((item) => item.category === this.ETFCatagories[i]);
    //       this.ETFCatagoriesComp.push(temp);
    //     }
    //     this.showLoader = false;
    //   })
    // }
    // /*************** ETF TAb Clicked End *****************/
    /*************** Calulate Median Start *****************/
    HomePage.prototype.getMed = function (array) {
        array = array.map(function (item) { return item.scores; });
        //return array.filter(d=>{d.medianCont});
        array = array.sort();
        if (array.length % 2 === 0) { // array with even number elements
            return (array[array.length / 2] + array[(array.length / 2) - 1]) / 2;
        }
        else {
            return array[(array.length - 1) / 2]; // array with odd number elements
        }
    };
    /*************** Calulate Median End *****************/
    /*************** Round Median Start *****************/
    HomePage.prototype.roundValue = function (val) {
        return (Math.round(val * 10) / 10).toFixed(1);
    };
    /*************** Round Median End *****************/
    /*************** Data Population Start *****************/
    HomePage.prototype.createData = function () {
        var _this = this;
        // this.httpclient.get(this.api_url + "/Industry/GetIndustry").subscribe((res: any[]) => {
        //   //console.log(res);
        //   this.dbGICS = res;
        // });
        this.dataHandler.getIndustry().subscribe(function (res) {
            _this.dbGICS = res;
        });
        this.dataHandler.getGlobalData().subscribe(function (res) {
            // console.log(res);
            res = res.filter(function (item) { return item.companyName != null; });
            _this.data = res;
            _this.searchList = _this.data.filter(function (item) { return item.companyName != null && item.ticker != null; });
            var temp = _this.searchList.slice();
            _this.NaaSearchList = temp.filter(function (item) { return item.indexName.indexOf("New Age Alpha") === 0; });
            var tempfi = _this.searchList.slice();
            _this.FISearchList = tempfi.filter(function (item) { return item.hasOwnProperty('fi') === true && item.fi !== null; });
            _this.searchList = _this.searchList.filter(function (item) { return item.indexName.indexOf("New Age Alpha") == -1; });
            // this.LoadsearchList = this.searchList.slice(0, 50).map(i => {
            //   return i;
            // })
            var filteredData = _this.data.map(function (item) { return item.indexName; });
            var TotalIndex = filteredData.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            // console.log(TotalIndex);
            TotalIndex.forEach(function (element) {
                if (element.includes('New Age Alpha')) {
                    _this.NAAIndex.push(element);
                }
                else {
                    _this.globalIndex.push(element);
                }
            });
            // console.log(this.data); 
            _this.data.forEach(function (val) {
                val.countrygroup = val.indexName.indexOf('Europe') > -1 ? 'Europe' : val.country;
            });
            //console.log(this.data);
            var i;
            for (i = 0; i < _this.globalIndex.length; i++) {
                var temp_1 = _this.data.filter(function (item) { return item.indexName === _this.globalIndex[i]; });
                _this.globalindexwise.push(temp_1);
            }
            for (i = 0; i < _this.NAAIndex.length; i++) {
                var temp_2 = _this.data.filter(function (item) { return item.indexName === _this.NAAIndex[i]; });
                _this.naaindexwise.push(temp_2);
            }
            for (i = 0; i < _this.globalIndex.length; i++) {
                _this.globalmed.push(_this.roundValue(_this.getMed(_this.globalindexwise[i]) * 100));
            }
            for (i = 0; i < _this.globalIndex.length; i++) {
                var country = _this.globalindexwise[i].map(function (i) { return i = i.countrygroup; }).filter(function (value, index, self) {
                    return self.indexOf(value) === index;
                });
                _this.globalcountry.push(country[0]);
            }
            // console.log(this.globalcountry);
            _this.totalglobalcountry = _this.globalcountry.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            // console.log(this.totalglobalcountry);
            // console.log(this.globalmed);
            var globaltemp = [];
            for (i = 0; i < _this.globalIndex.length; i++) {
                var t = [];
                t = { 'name': _this.globalIndex[i], 'med': _this.globalmed[i], 'countrygroup': _this.globalcountry[i] };
                globaltemp.push(t);
            }
            // console.log(this.globalIndex);
            //let globalCountrytemp =[];
            var groupBy = function (xs, key) {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            };
            // console.log(this.globalindexwise);
            _this.comGlobalIndex = globaltemp;
            _this.comGlobalIndex.sort(function (a, b) {
                return a.med - b.med;
            });
            // console.log(this.comGlobalIndex);
            _this.compglobalCountryInd = groupBy(_this.comGlobalIndex, 'countrygroup');
            // console.log(this.compglobalCountryInd);
            var temp = [];
            var that = _this;
            _this.totalglobalcountry.forEach(function (e) {
                //console.log(e);
                var t = { 'country': e };
                var t1 = _this.compglobalCountryInd[e].map(function (i) { return i.name; });
                var tmed = _this.compglobalCountryInd[e].map(function (i) { return i.med; });
                // console.log(tmed);
                var array = tmed.sort();
                if (array.length % 2 === 0) { // array with even number elements
                    tmed = (parseFloat(array[array.length / 2]) + parseFloat(array[(array.length / 2) - 1])) / 2;
                    tmed = Math.round(tmed * 10) / 10;
                }
                else {
                    tmed = array[(array.length - 1) / 2]; // array with odd number elements
                }
                t.index = t1;
                t.med = tmed;
                temp.push(t);
            });
            // console.log(temp);
            _this.GlobalCountryWiseInd = temp;
            _this.GlobalCountryWiseInd = _this.GlobalCountryWiseInd.sort(function (a, b) {
                return a.med - b.med;
            });
            _this.GlobalList = _this.GlobalCountryWiseInd;
            for (i = 0; i < _this.NAAIndex.length; i++) {
                _this.naamed.push(_this.roundValue(_this.getMed(_this.naaindexwise[i]) * 100));
            }
            var naatemp = [];
            for (i = 0; i < _this.NAAIndex.length; i++) {
                var t = [];
                t = { 'name': _this.NAAIndex[i], 'med': _this.naamed[i] };
                naatemp.push(t);
            }
            _this.comNAAIndex = naatemp;
            _this.comNAAIndex.sort(function (a, b) {
                return a.med - b.med;
            });
            _this.showLoader = false;
            _this.GetETFValues();
            _this.createFiSearchList();
        });
    };
    /*************** Data Population Start *****************/
    HomePage.prototype.createFiSearchList = function () {
        var _this = this;
        this.FIIndexList = [];
        this.FICountryList.filter(function (item) {
            _this.FixedIndexData[item].filter(function (it) {
                _this.FIIndexList.push(it);
            });
        });
        // console.log(this.FIIndexList);
        this.FIIndexList.filter(function (item) {
            _this.dataHandler.getFICatData(item.category).subscribe(function (res) {
                res.filter(function (it) {
                    _this.FISearchList.filter(function (x) { return x.stockKey == it.stockKey; })[0].fiCountry = item.country;
                    _this.FISearchList.filter(function (x) { return x.stockKey == it.stockKey; })[0].fiCategory = item.category;
                    // var temp = this.FISearchList.filter(x=> x.stockKey == it.stockKey)[0];
                    // console.log(temp);
                });
            });
        });
    };
    HomePage.prototype.GetFixedIndexData = function () {
        var _this = this;
        this.dataHandler.getFIData().subscribe(function (res) {
            // console.log(res);
            var groupBy = function (xs, key) {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            };
            _this.FixedIndexData = groupBy(res, 'country');
            var that = _this;
            // console.log(that.FixedIndexData);
            var temp = res.map(function (x) { return x.country; }).filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            _this.FICountryList = temp;
            // console.log(temp);
            temp.forEach(function (e) {
                var t = _this.FixedIndexData[e];
                var tmedlist = t.map(function (x) { return _this.roundValue(x.medianCont * 100); });
                var tmed;
                var array = tmedlist.sort();
                if (array.length % 2 === 0) { // array with even number elements
                    tmed = (parseFloat(array[array.length / 2]) + parseFloat(array[(array.length / 2) - 1])) / 2;
                    tmed = Math.round(tmed * 10) / 10;
                }
                else {
                    tmed = array[(array.length - 1) / 2]; // array with odd number elements
                }
                _this.FixedIndexData[e].med = tmed;
            });
            // console.log(this.FixedIndexData);
        });
    };
    HomePage.prototype.onRemoveAlert = function () {
        var _this = this;
        var userInfo = {
            userId: this.currentUser.userId,
            stockKey: this.SelSearchObj.stockKey
        };
        this.alertService.deleteAlert(userInfo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Alert Removed Sucessfully',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.showAlertSetup = false;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    HomePage.prototype.onAlertSubmit = function () {
        var _this = this;
        if (this.selPeriod.length != 0 || this.perChecked) {
            var alerts = {
                userId: this.currentUser.userId,
                stockKey: this.SelSearchObj.stockKey,
                daily: this.selPeriod == 'daily' ? 'Y' : 0,
                weekly: this.selPeriod == 'weekly' ? 'Y' : 0,
                weekDay: this.selPeriod == 'weekly' ? this.selDay : 0,
                monthly: this.selPeriod == 'monthly' ? 'Y' : 0,
                monthDt: this.selPeriod == 'monthly' ? this.selDate : 0,
                scoreChange: this.perChecked ? 'Y' : 0,
                scorePercent: this.perChecked ? this.selPer : 0,
                mailType: 'H'
            };
            // console.log(alerts);
            this.alertService.setAlert(alerts).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var toast;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Alert Submitted Sucessfully',
                                duration: 3000
                            })];
                        case 1:
                            toast = _a.sent();
                            toast.present();
                            this.showAlertSetup = false;
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    HomePage.prototype.rangeChange = function (evt) {
        this.showSubmit = true;
    };
    HomePage.prototype.getalertData = function () {
    };
    HomePage.prototype.openDaypicker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var opts, picker;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = {
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Confirm',
                                    handler: function (val) {
                                        _this.selDate = val.day.text;
                                        // console.log(val.text);
                                    }
                                }
                            ],
                            columns: [{
                                    name: 'day',
                                    options: [{ text: '1', value: '1' },
                                        { text: '2', value: '2' },
                                        { text: '3', value: '3' },
                                        { text: '4', value: '4' },
                                        { text: '5', value: '5' },
                                        { text: '6', value: '6' },
                                        { text: '7', value: '7' },
                                        { text: '8', value: '8' },
                                        { text: '9', value: '9' },
                                        { text: '10', value: '10' },
                                        { text: '11', value: '11' },
                                        { text: '12', value: '12' },
                                        { text: '13', value: '13' },
                                        { text: '14', value: '14' },
                                        { text: '15', value: '15' },
                                        { text: '16', value: '16' },
                                        { text: '17', value: '17' },
                                        { text: '18', value: '18' },
                                        { text: '19', value: '19' },
                                        { text: '20', value: '20' },
                                        { text: '21', value: '21' },
                                        { text: '22', value: '22' },
                                        { text: '23', value: '23' },
                                        { text: '24', value: '24' },
                                        { text: '25', value: '25' },
                                        { text: '26', value: '26' },
                                        { text: '27', value: '27' },
                                        { text: '28', value: '28' },
                                        { text: '29', value: '29' },
                                        { text: '30', value: '30' },
                                    ]
                                }],
                        };
                        return [4 /*yield*/, this.pickerCtrl.create(opts)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        picker.onDidDismiss().then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var col;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, picker.getColumn('day')];
                                    case 1:
                                        col = _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onFINavClick = function () {
        if (this.SelTab != 'FI') {
            this.prevSelTab = this.SelTab;
        }
        // console.log(this.prevSelTab);
        this.SelTab = 'FI';
        this.stockCollapse = true;
        this.compIndexShow = true;
        this.sectorHeadings[1] = 'Fixed Income';
        this.icon = "ios-arrow-dropup-circle";
    };
    HomePage.prototype.onCountryBackClick = function () {
        this.selCountry = null;
    };
    HomePage.prototype.onFICountryClick = function (country) {
        // console.log(country);
        this.FISelCountry = country;
        this.FIselCatogaryList = this.FixedIndexData[country];
    };
    HomePage.prototype.onFiCountryBackClick = function () {
        this.FISelCountry = null;
    };
    HomePage.prototype.onFixedCatClick = function (item) {
        var _this = this;
        this.dataHandler.getFICatData(item.category).subscribe(function (res) {
            _this.selectedIndexData.length = 0;
            _this.unsortedIndexData.length = 0;
            _this.headermed = _this.roundValue(item.medianCont * 100);
            _this.SelIndexName = item.category == 'HY' ? 'High Yield' : 'Investment Grade';
            document.getElementById('header-circle').style.background = _this.getColor(_this.roundValue(item.medianCont * 100));
            document.getElementById('header-circle').style.color = _this.ApplyTextColor(_this.roundValue(item.medianCont * 100));
            _this.compIndexShow = false;
            _this.icon = "ios-arrow-dropdown-circle";
            _this.parentcard = false;
            res.forEach(function (e) {
                _this.selectedIndexData.push(_this.data.filter(function (x) { return x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1; })[0]);
                _this.unsortedIndexData.push(_this.data.filter(function (x) { return x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1; })[0]);
            });
            // console.log(this.selectedIndexData);
            // console.log(this.unsortedIndexData);
            var Wtsum = 0;
            _this.selectedIndexData.forEach(function (element) {
                Wtsum = Wtsum + (1 - element.scores);
            });
            _this.selectedIndexData.forEach(function (e) {
                e.wt = ((1 - e.scores) / Wtsum) * 100;
            });
            // console.log(this.selectedIndexData);
            _this.unsortedIndexData.sort(function (a, b) {
                return a.scores - b.scores;
            });
            _this.sortComp(_this.filterby);
        });
    };
    HomePage.prototype.onSortClick = function () {
        var _this = this;
        var tempOrientation;
        if (this.showFilter == false) {
            this.showFilter = true;
            if (this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT_SECONDARY) {
                $('#parent-content').css('--overflow', '');
            }
            else {
                // document.getElementById('parent-content').scrollTo(0,0);
                $('#SlideDiv').css('position', 'fixed');
                $('#parent-content').css('--overflow', 'hidden');
            }
            // if(this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY){
            // $('#parent-content').css('--overflow','hidden');
            tempOrientation = this.screenOrientation.onChange().subscribe(function () {
                if (_this.screenOrientation.type == _this.screenOrientation.ORIENTATIONS.PORTRAIT || _this.screenOrientation.type == _this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY || _this.screenOrientation.type == _this.screenOrientation.ORIENTATIONS.PORTRAIT_SECONDARY) {
                    $('#SlideDiv').css('position', '');
                    $('#parent-content').css('--overflow', '');
                    tempOrientation.unsubscribe();
                }
                else {
                    // this.parentContent.scrollToTop();
                    if (_this.showFilter == true) {
                        $('#SlideDiv').css('position', 'fixed');
                        $('#parent-content').css('--overflow', 'hidden');
                    }
                }
            });
        }
        else {
            this.showFilter = false;
            if (this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY) {
                // tempOrientation.unsubscribe();
                $('#SlideDiv').css('position', '');
                $('#parent-content').css('--overflow', '');
            }
        }
    };
    HomePage.prototype.onfilterSelect = function (key) {
        // console.log(evt);
        if (this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY) {
            $('#parent-content').css('--overflow', '');
        }
        if (key == 'C') {
            if (this.filterby == 'C_LTH') {
                this.filterby = 'C_HTL';
            }
            else {
                this.filterby = 'C_LTH';
            }
        }
        else if (key == 'HF') {
            if (this.filterby == 'HF_LTH') {
                this.filterby = 'HF_HTL';
            }
            else {
                this.filterby = 'HF_LTH';
            }
        }
        else if (key == 'T') {
            if (this.filterby == 'T_LTH') {
                this.filterby = 'T_HTL';
            }
            else {
                this.filterby = 'T_LTH';
            }
        }
        else if (key == 'P') {
            if (this.filterby == 'P_LTH') {
                this.filterby = 'P_HTL';
            }
            else {
                this.filterby = 'P_LTH';
            }
        }
        this.showFilter = false;
        this.sortComp(this.filterby);
        this.scrollToSel();
    };
    HomePage.prototype.sortComp = function (type) {
        if (type == 'C_LTH') {
            // if(this.selSectorComp.length > 0){
            this.selSectorComp.sort(function (a, b) {
                return a.companyName.localeCompare(b.companyName);
            });
            this.selectedIndexData.sort(function (a, b) {
                return a.companyName.localeCompare(b.companyName);
            });
        }
        else if (type == 'C_HTL') {
            this.selSectorComp.sort(function (a, b) {
                return b.companyName.localeCompare(a.companyName);
            });
            this.selectedIndexData.sort(function (a, b) {
                return b.companyName.localeCompare(a.companyName);
            });
        }
        else if (type == 'HF_LTH') {
            this.selSectorComp.sort(function (a, b) {
                return a.scores - b.scores;
            });
            this.selectedIndexData.sort(function (a, b) {
                return a.scores - b.scores;
            });
        }
        else if (type == 'HF_HTL') {
            this.selSectorComp.sort(function (a, b) {
                return b.scores - a.scores;
            });
            this.selectedIndexData.sort(function (a, b) {
                return b.scores - a.scores;
            });
        }
        else if (type == 'T_LTH') {
            this.selSectorComp.sort(function (a, b) {
                return a.ticker.localeCompare(b.ticker);
            });
            this.selectedIndexData.sort(function (a, b) {
                return a.ticker.localeCompare(b.ticker);
            });
        }
        else if (type == 'T_HTL') {
            this.selSectorComp.sort(function (a, b) {
                return b.ticker.localeCompare(a.ticker);
            });
            this.selectedIndexData.sort(function (a, b) {
                return b.ticker.localeCompare(a.ticker);
            });
        }
        else if (type == 'P_LTH') {
            this.selSectorComp.sort(function (a, b) {
                return a.price - b.price;
            });
            this.selectedIndexData.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        else if (type == 'P_HTL') {
            this.selSectorComp.sort(function (a, b) {
                return b.price - a.price;
            });
            this.selectedIndexData.sort(function (a, b) {
                return b.price - a.price;
            });
        }
    };
    HomePage.prototype.ondayclick = function (day) {
        this.selDay = day;
    };
    HomePage.prototype.isAlertexist = function (key) {
        var userInfo = {
            userId: this.currentUser.userId,
            stockKey: key
        };
        this.alertService.getAlert(userInfo).subscribe(function (data) {
            if (data[0] != null) {
                return 'visible';
            }
            else {
                return 'hidden';
            }
        });
    };
    HomePage.prototype.onlongpress = function (itm) {
        var _this = this;
        if (this.SelSearchObj == null || this.SelSearchObj != itm) {
            this.onCompanyClick(itm);
        }
        var userInfo = {
            userId: this.currentUser.userId,
            stockKey: this.SelSearchObj.stockKey
        };
        this.alertService.getAlert(userInfo).subscribe(function (data) {
            _this.savedAlert = data[0];
            //  console.log(this.savedAlert)
            if (_this.savedAlert != null) {
                // console.log(data);
                if (_this.savedAlert.daily == 'Y')
                    _this.selPeriod = 'daily';
                if (_this.savedAlert.weekly == 'Y')
                    _this.selPeriod = 'weekly';
                if (_this.savedAlert.monthly == 'Y')
                    _this.selPeriod = 'monthly';
                _this.selDay = _this.savedAlert.weekDay == '0' ? 'monday' : _this.savedAlert.weekDay.toString().toLowerCase();
                ;
                _this.selDate = _this.savedAlert.monthDt == '0' ? 1 : _this.savedAlert.monthDt;
                _this.perChecked = _this.savedAlert.scoreChange == 'Y' ? true : false;
                _this.selPer = _this.savedAlert.scorePercent == 0 ? 1 : _this.savedAlert.scorePercent;
                _this.showSubmit = false;
                _this.showAlertSetup = true;
                _this.showAlertRemove = true;
            }
            else {
                _this.selPeriod = '';
                _this.selDay = 'monday';
                _this.selDate = 1;
                _this.perChecked = false;
                _this.selPer = 1;
                _this.showAlertSetup = true;
                _this.showAlertRemove = false;
            }
        });
    };
    /*************** On country Select Start *****************/
    HomePage.prototype.onCountryClick = function (country) {
        this.globalselectedcountryList = this.compglobalCountryInd[country];
        // console.log(this.globalselectedcountryList);
    };
    /*************** On country Select end *****************/
    /*************** Naa Index Name replaces for the display Start *****************/
    HomePage.prototype.getNaaIndex = function (element) {
        element = element.replace('New Age Alpha ', '');
        element = element.replace(' Index', '');
        return element;
    };
    /*************** Naa Index Name replaces for the display End *****************/
    /*************** Global Index Name replaces for the display Start *****************/
    HomePage.prototype.getGlobalIndex = function (element) {
        element = element.replace('UR', 'S&P');
        element = element.replace(' Index', '');
        return element;
    };
    /*************** Global Index Name Replaces for the Display End *****************/
    /*************** Background color Start *****************/
    HomePage.prototype.getColor = function (med) {
        var gc100 = d3__WEBPACK_IMPORTED_MODULE_7__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        return gc100(med);
    };
    /*************** Background color End *****************/
    /*************** Median Text color Start *****************/
    HomePage.prototype.ApplyTextColor = function (val) {
        return (val >= 45 && val < 55) ? "#FF9503" : "#fff";
    };
    /*************** Median Text color End *****************/
    HomePage.prototype.ApplyPercentColor = function (val) {
        return (val >= 45 && val < 55) ? "#FF9503" : this.getColor(val);
    };
    /*************** Global Index Select Start *****************/
    HomePage.prototype.onglobalIndexClick = function (i) {
        this.SelIndexName = i;
        // setTimeout(() => {
        this.compIndexShow = false;
        this.icon = "ios-arrow-dropdown-circle";
        this.parentcard = false;
        this.selectedIndexData = this.globalindexwise[this.globalIndex.indexOf(i)].filter(function (item) { return item.indexName == i; });
        this.unsortedIndexData = this.globalindexwise[this.globalIndex.indexOf(i)].filter(function (item) { return item.indexName == i; });
        document.getElementById('header-circle').style.background = this.getColor(this.globalmed[this.globalIndex.indexOf(i)]);
        document.getElementById('header-circle').style.color = this.ApplyTextColor(this.globalmed[this.globalIndex.indexOf(i)]);
        this.unsortedIndexData = this.unsortedIndexData.sort(function (a, b) {
            return a.scores - b.scores;
        });
        var Wtsum = 0;
        this.selectedIndexData.forEach(function (element) {
            Wtsum = Wtsum + (1 - element.scores);
        });
        this.selectedIndexData.forEach(function (e) {
            e.wt = ((1 - e.scores) / Wtsum) * 100;
        });
        // console.log(this.selectedIndexData);
        // console.log(this.selectedIndexData);
        this.sortComp(this.filterby);
        // this.sortcompany();
        this.CompLength = this.selectedIndexData.length;
        this.headermed = this.globalmed[this.globalIndex.indexOf(i)];
        // if (this.selComp != undefined) {
        //   setTimeout(() => {
        //     var temp = this.selectedIndexData.filter((item) => item.companyName == this.selComp);
        //     var sectemp = this.selSectorComp.filter((item) => item.companyName == this.selComp);
        //   }, 100);
        // }
        // }, 200);
    };
    /*************** Global Index Select End *****************/
    /*************** NewAgeAlpha Index Select Start *****************/
    HomePage.prototype.onNaaIndexClick = function (i) {
        this.compIndexShow = false;
        this.icon = "ios-arrow-dropdown-circle";
        this.parentcard = false;
        this.SelIndexName = i;
        this.selectedIndexData = this.naaindexwise[this.NAAIndex.indexOf(i)].filter(function (item) { return item.indexName == i; });
        this.unsortedIndexData = this.naaindexwise[this.NAAIndex.indexOf(i)].filter(function (item) { return item.indexName == i; });
        document.getElementById('header-circle').style.background = this.getColor(this.naamed[this.NAAIndex.indexOf(i)]);
        document.getElementById('header-circle').style.color = this.ApplyTextColor(this.naamed[this.NAAIndex.indexOf(i)]);
        var Wtsum = 0;
        this.selectedIndexData.forEach(function (element) {
            Wtsum = Wtsum + (1 - element.scores);
        });
        this.selectedIndexData.forEach(function (e) {
            e.wt = ((1 - e.scores) / Wtsum) * 100;
        });
        // console.log(this.selectedIndexData);
        this.unsortedIndexData = this.unsortedIndexData.sort(function (a, b) {
            return a.scores - b.scores;
        });
        // this.sortcompany();
        this.sortComp(this.filterby);
        this.CompLength = this.selectedIndexData.length;
        this.headermed = this.naamed[this.NAAIndex.indexOf(i)];
    };
    /*************** New Age Alpha Index Select End *****************/
    /*************** Sort Index ascending Start *****************/
    HomePage.prototype.sortcompany = function () {
        if (this.SelFilter == "Human Factor Score (ascending)") {
            this.selectedIndexData.sort(function (a, b) {
                return a.scores - b.scores;
            });
            // }else if(this.SelFilter == "Human Factor Score (descending)"){
            //   this.selectedIndexData.sort((a,b) => {
            //     return a.scores - b.scores;
            //   });
            //   this.selectedIndexData.reverse();
            // }else if(this.SelFilter == "Company Name (ascending)"){
            //   this.selectedIndexData.sort((a,b) => {
            //     return a.companyName.localeCompare(b.companyName);
            //   });
            // }else if(this.SelFilter == "Company Name (descending)"){
            //   this.selectedIndexData.sort((a,b) => {
            //     return a.companyName.localeCompare(b.companyName);
            //   });
            //   this.selectedIndexData.reverse();
            // }else if(this.SelFilter == "Ticker (ascending)"){
            //   this.selectedIndexData.sort((a,b) => {
            //     return a.ticker.localeCompare(b.ticker);
            //   });
            // }else if(this.SelFilter == "Ticker (descending)"){
            //   this.selectedIndexData.sort((a,b) => {
            //     return a.ticker.localeCompare(b.ticker);
            //   });
            //   this.selectedIndexData.reverse();
        }
    };
    /*************** Sort Index ascending End *****************/
    /*************** After View Start *****************/
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.slides = document.getElementById("pageslider");
        // console.log(this.slides);
        this.GetETFValues();
        setTimeout(function () {
            _this.onSlide1Click();
        }, 900);
    };
    /*************** After View End *****************/
    HomePage.prototype.ionViewDidEnter = function () {
        this.backButtonSubscription = this.plt.backButton.subscribe(function () {
            navigator['app'].exitApp();
        });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.backButtonSubscription.unsubscribe();
    };
    /*************** ETF Category List Start *****************/
    HomePage.prototype.GetETFValues = function () {
        var _this = this;
        this.dataHandler.getETFData().subscribe(function (stockIndex) {
            _this.res = stockIndex;
            _this.ETFcategory = stockIndex.map(function (d) { return d.category; }).filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            _this.ETFcategory.unshift('All');
            var i = 0;
            _this.ETFNameWise = [];
            for (i = 0; i < _this.ETFcategory.length; i++) {
                if (_this.ETFcategory[i] === "All") {
                    var temp = stockIndex;
                    _this.ETFNameWise.push(temp);
                }
                else {
                    var temp = stockIndex.filter(function (item) { return item.category === _this.ETFcategory[i]; });
                    _this.ETFNameWise.push(temp);
                }
            }
            _this.EtfSearchList.length = 0;
            _this.res.forEach(function (obj) {
                var Etfval = { companyName: obj.etfName, isin: obj.assetId, ticker: obj.ticker, indexName: "ETF", country: obj.category };
                _this.EtfSearchList.push(Etfval);
            });
            _this.EtfSearchList = _this.EtfSearchList.filter(function (item) { return item.companyName != null && item.ticker != null; });
        });
        this.dataHandler.getETFData().subscribe(function (stockIndex) {
            var vall = stockIndex.map(function (item) { return item.category; });
            _this.ETFCatagories = vall.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            var i;
            for (i = 0; i < _this.ETFCatagories.length; i++) {
                var temp = stockIndex.filter(function (item) { return item.category === _this.ETFCatagories[i]; });
                _this.ETFCatagoriesComp.push(temp);
            }
            // this.GetETFValues();
        });
    };
    /*************** ETF Category List End *****************/
    /*************** ETF Category Median Start *****************/
    HomePage.prototype.getETFCategoryMed = function (ind) {
        var array = [];
        array = this.ETFNameWise[ind].map(function (item) { return item.medianCont; });
        array = array.sort();
        if (array.length % 2 === 0) { // array with even number elements
            return (array[array.length / 2] + array[(array.length / 2) - 1]) / 2;
        }
        else {
            return array[(array.length - 1) / 2]; // array with odd number elements
        }
    };
    /*************** ETF Category Median End *****************/
    /*************** ETF Category Selected Start *****************/
    HomePage.prototype.onETFCategoryClick = function (i) {
        var _this = this;
        if (i == 'All') {
            this.SelTab = 'ETFChild';
            this.selCategory = i;
            this.ETFNameList = this.res.map(function (item) { return item.etfName; });
            this.ETFNameFull = this.res;
            this.ETFNameMed = this.ETFNameFull.map(function (item) { return _this.roundValue(item.medianCont * 100); });
            var etfallnametemp = [];
            for (i = 0; i < this.ETFNameList.length; i++) {
                var med = this.ETFNameMed[i];
                var name = this.ETFNameList[i];
                var t = [];
                t = { 'name': name, 'med': med };
                etfallnametemp.push(t);
            }
            this.compETFNameList = etfallnametemp;
            this.compETFNameList.sort(function (a, b) {
                return a.med - b.med;
            });
        }
        else {
            this.SelTab = 'ETFChild';
            this.selCategory = i;
            var tempp = [];
            tempp = this.ETFCatagoriesComp[this.ETFcategory.indexOf(i) - 1];
            // console.log(this.ETFCatagoriesComp);
            this.ETFNameList = tempp.map(function (item) { return item.etfName; });
            var j;
            for (i = 0; i < this.ETFNameList.length; i++) {
                var temp = this.res.filter(function (item) { return item.etfName === _this.ETFNameList[i]; });
                this.ETFNameFull.push(temp[0]);
            }
            var etfnametemp = [];
            for (i = 0; i < this.ETFNameList.length; i++) {
                var med = this.getEtfMed(this.ETFNameList[i]);
                var t = [];
                t = { 'name': this.ETFNameList[i], 'med': med };
                etfnametemp.push(t);
            }
            this.compETFNameList = etfnametemp;
            this.compETFNameList.sort(function (a, b) {
                return a.med - b.med;
            });
            this.ETFNameMed = this.ETFNameFull.map(function (item) { return _this.roundValue(item.medianCont * 100); });
        }
    };
    /*************** ETF Category Selected End *****************/
    /*************** ETF Median Start *****************/
    HomePage.prototype.getEtfMed = function (i) {
        if (i == 'All') {
            // var tempmed = this.res.filter(item=>item.e)
        }
        else {
            //console.log(i);
            var tempmed = this.ETFNameFull.filter(function (item) { return item.etfName == i; });
            //console.log(tempmed);
            return this.roundValue(tempmed[0].medianCont * 100);
        }
    };
    /*************** ETF Median End *****************/
    /*************** ETF Selected Start *****************/
    HomePage.prototype.onETFNameClick = function (i) {
        var _this = this;
        // console.log(i);
        var name = i;
        var tempp = this.ETFNameFull.filter(function (item) { return item.etfName == name; });
        // console.log(this.ETFNameFull);
        // console.log(tempp);
        var CId = tempp[0].assetId;
        this.dataHandler.getETFCatData(CId).subscribe(function (ETFStocks) {
            _this.SelAssetId = name;
            _this.ETFHoldings = [];
            _this.unsortedIndexData = [];
            var j = 0;
            for (j = 0; j < ETFStocks.length; j++) {
                var temp = ETFStocks[j];
                var tempData = _this.data.filter(function (item) { return item.isin === temp.isin; });
                if (tempData != "") {
                    var temp = tempData[0];
                    temp.indexType = "ETF";
                    _this.ETFHoldings.push(temp);
                    _this.unsortedIndexData.push(temp);
                }
            }
            _this.selectedIndexData = _this.ETFHoldings;
            var Wtsum = 0;
            _this.selectedIndexData.forEach(function (element) {
                Wtsum = Wtsum + (1 - element.scores);
            });
            _this.selectedIndexData.forEach(function (e) {
                e.wt = ((1 - e.scores) / Wtsum) * 100;
            });
            // console.log(this.selectedIndexData);
            _this.headermed = _this.getEtfMed(name);
            document.getElementById('header-circle').style.visibility = 'visible';
            document.getElementById('header-circle').style.background = _this.getColor(_this.getEtfMed(name));
            document.getElementById('header-circle').style.color = _this.ApplyTextColor(_this.getEtfMed(name));
            _this.compIndexShow = false;
            _this.icon = "ios-arrow-dropdown-circle";
            _this.parentcard = false;
            _this.SelIndexName = i;
            _this.unsortedIndexData = _this.unsortedIndexData.sort(function (a, b) {
                return a.scores - b.scores;
            });
            // this.sortcompany();
            _this.sortComp(_this.filterby);
        });
    };
    /*************** ETF Selected End *****************/
    /*************** Global Tab Selected Start *****************/
    HomePage.prototype.onNavGlobalClick = function () {
        if (this.SelTab != 'Global Universe') {
            this.prevSelTab = this.SelTab;
        }
        // console.log(this.prevSelTab);
        this.SelTab = 'Global Universe';
        this.stockCollapse = true;
        this.compIndexShow = true;
        this.icon = "ios-arrow-dropup-circle";
        this.sectorHeadings[1] = 'Index';
    };
    /*************** Global Tab Selected End *****************/
    /*************** NAA Tab Selected Start *****************/
    HomePage.prototype.onNavNAAClick = function () {
        if (this.SelTab != 'NAA') {
            this.prevSelTab = this.SelTab;
        }
        // console.log(this.prevSelTab);
        this.SelTab = 'NAA';
        this.stockCollapse = true;
        this.compIndexShow = true;
        this.icon = "ios-arrow-dropup-circle";
        this.sectorHeadings[1] = 'Index';
    };
    /*************** NAA Tab Selected End *****************/
    /*************** ETF Tab Selected Start *****************/
    HomePage.prototype.onNavETFClick = function () {
        var _this = this;
        if (this.SelTab != 'ETF') {
            this.prevSelTab = this.SelTab;
        }
        // console.log(this.prevSelTab);
        this.SelTab = 'ETF';
        this.stockCollapse = true;
        this.compIndexShow = true;
        this.icon = "ios-arrow-dropup-circle";
        this.parentcard = true;
        this.sectorHeadings[1] = 'Exchange Traded Funds';
        var etfLoaderinterval = setInterval(function () {
            if (_this.ETFCatagoriesComp.length != 0) {
                _this.showLoader = false;
                clearInterval(etfLoaderinterval);
            }
        }, 100);
    };
    /*************** ETF Tab Selected End *****************/
    /*************** GICS Selected UI Start *****************/
    HomePage.prototype.onStockDivClick = function () {
        if (this.stockCollapse == true) {
            this.stockCollapse = false;
            this.stockIndexShow = false;
            this.compIndexShow = false;
            this.stockIcon = "ios-arrow-dropdown-circle";
            this.icon = "ios-arrow-dropdown-circle";
        }
    };
    /*************** GICS Selected UI Start *****************/
    /*************** GICS DropDown Icon Selection UI Start *****************/
    HomePage.prototype.onStockBtnClick = function () {
        if (this.stockIndexShow == false) {
            this.stockCollapse = true;
            this.stockIndexShow = true;
            this.stockIcon = "ios-arrow-dropup-circle";
        }
        else {
            this.stockIndexShow = false;
            this.stockIcon = "ios-arrow-dropdown-circle";
            this.scrollToSel();
        }
    };
    /*************** GICS DropDown Icon Selection UI End *****************/
    /*************** Index DropDown Icon Selection UI Start *****************/
    HomePage.prototype.onCompBtnClick = function () {
        if (this.compIndexShow == false) {
            this.compIndexShow = true;
            this.stockCollapse = true;
            this.icon = "ios-arrow-dropup-circle";
        }
        else {
            if (this.prevSelTab == 'ETF' || this.prevSelTab == 'ETFChild') {
                for (var i = 0; i < this.compETFNameList.length; i++) {
                    if (this.compETFNameList[i].name == this.SelIndexName) {
                        this.SelTab = 'ETF';
                    }
                }
            }
            else if (this.prevSelTab == 'NAA') {
                for (var i = 0; i < this.comNAAIndex.length; i++) {
                    if (this.comNAAIndex[i].name == this.SelIndexName) {
                        this.SelTab = 'NAA';
                    }
                }
            }
            else if (this.prevSelTab == 'Global Universe') {
                for (var x in this.compglobalCountryInd) {
                    for (var i = 0; i < this.compglobalCountryInd[x].length; i++) {
                        if (this.compglobalCountryInd[x][i].name == this.SelIndexName) {
                            this.SelTab = 'Global Universe';
                        }
                    }
                }
            }
            else if (this.prevSelTab == 'FI') {
                for (var i = 0; i < this.FIselCatogaryList.length; i++) {
                    var temp = this.FIselCatogaryList[i].category == 'HY' ? 'High Yield' : 'Investment Grade';
                    if (temp == this.SelIndexName) {
                        this.SelTab = 'FI';
                    }
                }
            }
            this.compIndexShow = false;
            this.icon = "ios-arrow-dropdown-circle";
            this.scrollToSel();
        }
    };
    /*************** Index DropDown Icon Selection UI End *****************/
    /*************** Company Selected Start *****************/
    HomePage.prototype.onCompanyClick = function (e) {
        // console.log(e);
        this.selComp = e.companyName;
        this.searchSel = e;
        // console.log(e);
        if (this.SelTab == 'FI') {
            // console.log('fi');
            this.SelSearchObj = e;
            this.SelSearchObj.FIName = e.category == 'HY' ? 'High Yield' : 'Investment Grade';
            this.getSectorList(e.industry.toString());
            this.onSectorClick(e.industry);
            this.sortComp(this.filterby);
        }
        else if (e.hasOwnProperty('indexType')) {
            this.SelSearchObj = e;
            this.SelSearchObj.etfName = this.SelIndexName;
            this.getSectorList(e.industry.toString());
            this.onSectorClick(e.industry);
            this.sortComp(this.filterby);
        }
        else if (e.indexName.indexOf('New Age Alpha ') == -1) {
            this.SelSearchObj = e;
            this.getSectorList(e.industry.toString());
            this.onSectorClick(e.industry);
            this.sortComp(this.filterby);
        }
        else {
            var temp = e;
            this.SelSearchObj = temp;
            this.getSectorList(temp.industry.toString());
            this.onSectorClick(temp.industry);
            this.sortComp(this.filterby);
        }
        this.slides.slideTo(0);
    };
    /*************** Company Selected End *****************/
    /*************** Search Result Start *****************/
    HomePage.prototype.searchCompany = function (event) {
        //  console.log(event.text.trim());
        var text = event.text.trim();
        this.searchedtext = text;
        if (this.SelTab == undefined) {
            if (text.length != 0) {
                this.LoadsearchList = this.searchList.filter(function (item) {
                    return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
                });
            }
            else {
                this.LoadsearchList.length = 0;
            }
        }
        else if (this.SelTab == '') {
            if (text.length != 0) {
                this.LoadsearchList = this.searchList.filter(function (item) {
                    return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
                });
            }
            else {
                this.LoadsearchList.length = 0;
            }
        }
        else if (this.SelTab == 'Global Universe') {
            if (text.length != 0) {
                this.searchSel = '';
                this.LoadsearchList = this.searchList.filter(function (item) {
                    return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
                });
            }
            else {
                this.LoadsearchList.length = 0;
            }
        }
        else if (this.SelTab == 'FI') {
            if (text.length != 0) {
                this.searchSel = '';
                this.LoadsearchList = this.FISearchList.filter(function (item) {
                    return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
                });
            }
            else {
                this.LoadsearchList.length = 0;
            }
        }
        else if (this.SelTab == 'NAA') {
            if (text.length != 0) {
                this.LoadsearchList = this.NaaSearchList.filter(function (item) {
                    return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
                });
            }
            else {
                this.LoadsearchList.length = 0;
            }
        }
        else if (this.SelTab == 'ETF' || this.SelTab == 'ETFChild') {
            if (text.length != 0) {
                this.LoadsearchList = this.EtfSearchList.filter(function (item) {
                    return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
                });
            }
            else {
                this.LoadsearchList.length = 0;
            }
        }
        // if (text.length == 0) {
        //   this.searchList = this.searchList.filter(item => item.indexName.indexOf("New Age Alpha") == -1 || item.indexName != null);
        //   this.LoadsearchList = this.searchList.slice(0, 50).map(i => {
        //     return i;
        //   });
        // }else if(text.length != 0){
        //   if(this.SelTab == ''){
        //     event.component.items = [];
        //     event.component.items = this.searchList.filter((item) => {
        //       // console.log(item.ticker.toLowerCase().indexOf(text.toLowerCase()) > -1); 
        //        return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) > -1) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) > -1);
        //     });
        //   }else if(this.SelTab == 'Global Universe'){
        //     this.searchList = this.searchList.filter(item => item.indexName.indexOf("New Age Alpha") == -1);
        //     this.LoadsearchList = this.searchList.filter((item) => {
        //       // console.log(item.ticker.toLowerCase().indexOf(text.toLowerCase()) > -1); 
        //        return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) > -1) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) > -1);
        //     });
        //   }
        // }
        // else {
        // }
    };
    /*************** Search Result End *****************/
    HomePage.prototype.onSearchClose = function (event) {
        event.component.searchText = '';
    };
    /***************On Company Selected from Search Result Start *****************/
    HomePage.prototype.onSearchSelect = function (e) {
        var _this = this;
        // console.log(e);
        this.selComp = e.companyName;
        this.SelSearchObj = e;
        var industryVal = e.industry;
        this.GridHeaderTitle = false;
        if (this.SelTab == undefined) {
            this.SelTab = 'Global Universe';
            this.onglobalIndexClick(e.indexName);
            this.onCompanyClick(e);
            setTimeout(function () {
                _this.loadData();
            }, 50);
        }
        else if (this.SelTab == 'Global Universe') {
            // console.log('global');
            this.onglobalIndexClick(e.indexName);
            this.onCompanyClick(e);
            setTimeout(function () {
                _this.loadData();
            }, 50);
        }
        else if (this.SelTab == 'FI') {
            // console.log(e)
            var temp = this.FIIndexList.filter(function (item) { return item.country === e.fiCountry && item.category === e.fiCategory; })[0];
            this.onFixedCatClick(temp);
            this.SelSearchObj.FIName = e.category == 'HY' ? 'High Yield' : 'Investment Grade';
            setTimeout(function () {
                _this.onCompanyClick(e);
            }, 1400);
        }
        else if (this.SelTab == 'NAA') {
            this.onNaaIndexClick(e.indexName);
            this.onCompanyClick(e);
        }
        else if (e.indexName == 'ETF') {
            this.SelTab = 'ETF';
            this.onETFCategoryClick("All");
            this.onETFNameClick(e.companyName);
            this.EtfMed = this.getEtfMed(e.companyName);
        }
        else {
            this.getSectorList(industryVal.toString());
            this.onSectorClick(e.industry);
        }
    };
    /***************On Company Selected from Search Result End *****************/
    /***************Search Infinite Scroll Activate Start *****************/
    HomePage.prototype.getMoreSearchComp = function (event) {
        if (this.LoadsearchList.length > 0) {
            var text = (event.text || '').trim().toLowerCase();
            if (this.LoadsearchList.length == this.searchList.length) {
                event.component.disableInfiniteScroll();
                return;
            }
            this.size = this.size + 50;
            if (this.SelTab == 'Global Universe') {
                this.LoadsearchList.length = 0;
                this.LoadsearchList = this.searchList.slice(0, this.size).map(function (i) {
                    return i;
                });
            }
            else if (this.SelTab == 'FI') {
                this.LoadsearchList.length = 0;
                this.LoadsearchList = this.FISearchList.slice(0, this.size).map(function (i) {
                    return i;
                });
            }
            else if (this.SelTab == 'NAA') {
                this.LoadsearchList.length = 0;
                this.LoadsearchList = this.NaaSearchList.slice(0, this.size).map(function (i) {
                    return i;
                });
            }
            else if (this.SelTab == 'ETF' || this.SelTab == 'ETFChild') {
                this.LoadsearchList.length = 0;
                this.LoadsearchList = this.EtfSearchList.slice(0, this.size).map(function (i) {
                    return i;
                });
            }
        }
        event.component.endInfiniteScroll();
    };
    /***************Search Infinite Scroll Activate End *****************/
    /***************Geting GICS List Start *****************/
    HomePage.prototype.getSectorList = function (data) {
        var indus = data;
        //console.log(indus);
        var i = 2;
        this.sectorList = [];
        while ((i / 2) < 5) {
            var searchkey = indus.substring(0, i);
            var temp = this.dbGICS.filter(function (item) { return item.code == searchkey; });
            this.sectorList.push(temp[0]);
            i = i + 2;
        }
        //console.log(this.sectorList);
        var temp1 = [];
        if (this.SelSearchObj.hasOwnProperty('FIName')) {
            temp1 = [{ 'code': 'Index', 'name': this.SelSearchObj.FIName }];
        }
        else if (this.SelSearchObj.hasOwnProperty('etfName')) {
            temp1 = [{ 'code': 'Index', 'name': this.SelSearchObj.etfName }];
        }
        else {
            temp1 = [{ 'code': 'Index', 'name': this.SelSearchObj.indexName }];
        }
        this.sectorList.unshift(temp1[0]);
        var temp2 = [];
        temp2 = [{ 'code': 'Global Universe', 'name': 'NAA' }];
        this.sectorList.unshift(temp2[0]);
    };
    /***************Geting GICS List End *****************/
    /*************** On GICS Click Start *****************/
    HomePage.prototype.onSectorClick = function (key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var wtsum, wtsum, wtsum, wtsum;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // console.log(key);
                if (this.stockCollapse == true) {
                    this.stockIndexShow = false;
                    this.compIndexShow = false;
                    this.stockIcon = "ios-arrow-dropdown-circle";
                    this.icon = "ios-arrow-dropdown-circle";
                }
                if (key == "Global Universe") {
                    // console.log('Global Universe');
                    this.globalselectorcomp = this.data.filter(function (item) { return item.companyName != null && item.indexName.indexOf("New Age Alpha") == -1; });
                    this.globalselectorcomp.sort(function (a, b) {
                        return a.scores - b.scores;
                    });
                    this.selSectorComp = this.globalselectorcomp.slice(0, 100);
                    wtsum = 0;
                    this.globalselectorcomp.forEach(function (element) {
                        wtsum = wtsum + (1 - element.scores);
                    });
                    this.selSectorComp.forEach(function (element) {
                        element.wt = ((1 - element.scores) / wtsum) * 100;
                    });
                    // console.log(this.selSectorComp);
                    // console.log(this.selSectorComp);
                    this.unsortselSectorComp = this.globalselectorcomp.slice(0, 100);
                    this.selSector = this.sectorList[0];
                    // console.log(this.selSector);
                    this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
                    this.stockMed = this.roundValue(this.getMed(this.globalselectorcomp) * 100);
                    document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.globalselectorcomp) * 100));
                    document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.globalselectorcomp) * 100));
                    this.loadData();
                    this.sortComp(this.filterby);
                    // setTimeout(()=>{
                    //   this.content.scrollToPoint(0,500);
                    //   console.log("done");
                    // },100);
                    this.scrollToSel();
                    // setTimeout(()=>{
                    //   console.log(document.getElementById('sectorscrollDiv'));
                    //   document.getElementById('sectorscrollDiv').scrollTo(0,1500);
                    // },500); 
                }
                else if (key == "Index") {
                    // console.log('Index');
                    this.unsortselSectorComp = this.selectedIndexData;
                    this.selSectorComp = this.selectedIndexData;
                    wtsum = 0;
                    this.selSectorComp.forEach(function (element) {
                        wtsum = wtsum + (1 - element.scores);
                    });
                    this.selSectorComp.forEach(function (element) {
                        element.wt = ((1 - element.scores) / wtsum) * 100;
                    });
                    // console.log(this.selSectorComp);
                    this.selSector = this.sectorList[1];
                    // console.log(this.selSector);
                    this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
                    // console.log(this.SelSecLevTitle);
                    this.stockMed = this.roundValue(this.getMed(this.selSectorComp) * 100);
                    document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
                    document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
                    this.loadData();
                    this.scrollToSel();
                    this.sortComp(this.filterby);
                }
                else if (this.SelSearchObj.hasOwnProperty('FIName')) {
                    // console.log('FIName');
                    // console.log(this.selectedIndexData);
                    this.fullSectorComp = this.selectedIndexData.filter(function (item) {
                        return item.industry.toString().substring(0, key.toString().length) == key;
                    });
                    // console.log(this.fullSectorComp);
                    this.unsortselSectorComp = this.fullSectorComp.filter(function (item) { return item.companyName != null; });
                    this.unsortselSectorComp.sort(function (a, b) {
                        return a.scores - b.scores;
                    });
                    this.selSectorComp = this.fullSectorComp.filter(function (item) { return item.companyName != null; });
                    wtsum = 0;
                    this.selSectorComp.forEach(function (element) {
                        wtsum = wtsum + (1 - element.scores);
                    });
                    this.selSectorComp.forEach(function (element) {
                        element.wt = ((1 - element.scores) / wtsum) * 100;
                    });
                    // console.log(this.selSectorComp);
                    this.selSectorComp.sort(function (a, b) {
                        return a.scores - b.scores;
                    });
                    this.selSector = this.sectorList[((key.toString().length / 2) - 1) + 2];
                    this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
                    this.stockMed = this.roundValue(this.getMed(this.selSectorComp) * 100);
                    document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
                    document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
                    this.loadData();
                    this.sortComp(this.filterby);
                    this.scrollToSel();
                }
                else {
                    // console.log('else');
                    this.fullSectorComp = this.data.filter(function (item) {
                        return item.industry.toString().substring(0, key.toString().length) == key;
                    });
                    if (this.SelSearchObj.hasOwnProperty('indexType')) {
                        this.fullSectorComp = this.ETFHoldings.filter(function (item) { return item.industry.toString().substring(0, key.toString().length) == key; });
                    }
                    else if (this.SelSearchObj.indexName.indexOf("New Age Alpha ") == -1) {
                        this.fullSectorComp = this.fullSectorComp.filter(function (item) { return item.indexName.indexOf("New Age Alpha") == -1; });
                    }
                    else {
                        this.fullSectorComp = this.fullSectorComp.filter(function (item) { return item.indexName.indexOf("New Age Alpha") != -1; });
                    }
                    this.selSectorComp = this.fullSectorComp.filter(function (item) { return item.indexName == _this.SelSearchObj.indexName; });
                    this.unsortselSectorComp = this.selSectorComp.filter(function (item) { return item.companyName != null; });
                    this.unsortselSectorComp.sort(function (a, b) {
                        return a.scores - b.scores;
                    });
                    this.selSectorComp = this.selSectorComp.filter(function (item) { return item.companyName != null; });
                    wtsum = 0;
                    this.selSectorComp.forEach(function (element) {
                        wtsum = wtsum + (1 - element.scores);
                    });
                    this.selSectorComp.forEach(function (element) {
                        element.wt = ((1 - element.scores) / wtsum) * 100;
                    });
                    // console.log(this.selSectorComp);
                    this.selSectorComp.sort(function (a, b) {
                        return b.scores - a.scores;
                    });
                    this.selSector = this.sectorList[((key.toString().length / 2) - 1) + 2];
                    this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
                    this.stockMed = this.roundValue(this.getMed(this.selSectorComp) * 100);
                    document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
                    document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
                    this.loadData();
                    this.scrollToSel();
                    this.sortComp(this.filterby);
                }
                return [2 /*return*/];
            });
        });
    };
    /*************** On GICS Click End *****************/
    /*************** Company Replace for ID Start *****************/
    HomePage.prototype.getIDReplace = function (id) {
        //console.log(id);
        return id.replace(/ /g, '-');
    };
    /*************** Company Replace for ID End *****************/
    /*************** On Pagination Click Start *****************/
    HomePage.prototype.onSlide0Click = function () {
        this.slides.slideTo(0);
        document.getElementById("slide0dot").style.backgroundColor = "#FFFFFF";
        document.getElementById("slide1dot").style.backgroundColor = "#909090";
    };
    HomePage.prototype.onSlide1Click = function () {
        this.slides.slideTo(1);
        document.getElementById("slide1dot").style.backgroundColor = "#FFFFFF";
        document.getElementById("slide0dot").style.backgroundColor = "#909090";
    };
    /*************** On Pagination Click End *****************/
    /*************** To slide the Slides/Carousel Start *****************/
    HomePage.prototype.onSlideChange = function (evt) {
        this.slides.getActiveIndex().then(function (index) {
            if (index == 0) {
                document.getElementById("slide0dot").style.backgroundColor = "#FFFFFF";
                document.getElementById("slide1dot").style.backgroundColor = "#909090";
            }
            else {
                document.getElementById("slide1dot").style.backgroundColor = "#FFFFFF";
                document.getElementById("slide0dot").style.backgroundColor = "#909090";
            }
        });
    };
    /*************** To slide the Slides/Carousel End *****************/
    /*************** Scroll to the Selected Company Start *****************/
    HomePage.prototype.scrollToSel = function () {
        var _this = this;
        if (this.selComp != undefined) {
            setTimeout(function () {
                var temp = _this.selectedIndexData.filter(function (item) { return item.companyName == _this.selComp; });
                var index = _this.selectedIndexData.indexOf(temp[0]) + 1;
                var indheight = document.getElementById('IndexCompanyDiv').clientHeight;
                var manInd = (index * 45) - (indheight / 2);
                // manInd = manInd;
                // console.log(manInd);
                document.getElementById('scrollDiv').scrollTo(0, manInd);
                var sectemp = _this.selSectorComp.filter(function (item) { return item.companyName == _this.selComp; });
                var secInd = _this.selSectorComp.indexOf(sectemp[0]) + 1;
                // var mansecInd = (secInd * 42) - 240;
                setTimeout(function () {
                    var stcheight = document.getElementById('stockCompanyDiv').clientHeight;
                    var mansecInd = (secInd * 45) - (stcheight / 2);
                    // console.log(mansecInd + height);
                    document.getElementById('sectorscrollDiv').scrollTo(0, mansecInd);
                }, 500);
            }, 100);
        }
    };
    /*************** Scroll to the Selected Company End *****************/
    HomePage.prototype.loadStockData = function (event) {
        // console.log("Done");
        event.target.complete();
        // setTimeout(()=>{
        //   console.log("Done");
        //   //event.target.complete();
        // },200);
    };
    HomePage.prototype.loadData = function () {
        this.M_gchart = d3__WEBPACK_IMPORTED_MODULE_7__["select"]("#M_gchart");
        this.M_chartMain = this.M_createMainChart(this.M_gchart);
    };
    HomePage.prototype.M_createMainChart = function (obj) {
        d3__WEBPACK_IMPORTED_MODULE_7__["select"]("#maincircle").remove();
        d3__WEBPACK_IMPORTED_MODULE_7__["select"]("#crlChart").remove();
        var grp1 = obj.append("g").attr("id", "crlChart");
        grp1.append("circle")
            .attr("id", "maincircle")
            .attr("class", "start-ring")
            .attr("r", 0)
            .attr("fill", "#fff");
        this.M_CreateData();
        return grp1;
    };
    HomePage.prototype.M_CreateData = function () {
        var that = this;
        var dbScore = [];
        if (that.selSector.code != "Index" && that.selSector.code != "Global Universe" && this.sectorList.indexOf(this.selSector) != 2) {
            // console.log('true part');
            dbScore = this.selSectorComp;
        }
        else {
            // console.log('false part');
            dbScore.push(this.SelSearchObj);
        }
        this.M_selResData = dbScore;
        // .sort((a, b) => {
        //   return a.scores - b.scores;
        // });
        // console.log(this.selSectorComp);
        // console.log(dbScore);
        var tradeDt = dbScore[0].tradeDate;
        this.M_tradeDt = tradeDt.slice(4, 6) + "/" + tradeDt.slice(6, 8) + "/" + tradeDt.slice(0, 4);
        this.M_selResData.forEach(function (d, i) {
            d.score = d.scores * 100;
            d.deg = d.score;
            d.indname = d.industry;
            d.companyName = d.companyName.trim();
            d.company = d.companyName != null ? d.companyName.toUpperCase() : null;
            d.ticker = d.ticker;
            return d.score, d.stockKey, d.industry, d.deg, d.company, d.ticker, d.indname, d;
        });
        d3__WEBPACK_IMPORTED_MODULE_7__["select"](".ringAnim").style("display", "none").remove();
        d3__WEBPACK_IMPORTED_MODULE_7__["select"](".preloding").style("display", "none").remove();
        d3__WEBPACK_IMPORTED_MODULE_7__["select"]("#maincircle")
            .transition()
            .delay(50)
            .attr('r', that.radius - 10)
            .style('stroke-width', '40px')
            .on("end", function () {
            d3__WEBPACK_IMPORTED_MODULE_7__["select"]("#maincircle")
                .transition()
                .duration(10)
                .style('opacity', '0');
            that.M_creatGradienArc();
            that.M_Companies = that.M_selResData;
            that.M_CreateComps(that.M_chartMain, that.M_selResData, "lvl1");
        });
    };
    HomePage.prototype.M_creatGradienArc = function () {
        var gArc = d3__WEBPACK_IMPORTED_MODULE_7__["select"]("#crlChart").append("g");
        var arc = d3__WEBPACK_IMPORTED_MODULE_7__["arc"]()
            .innerRadius(this.radius - 40)
            .outerRadius(this.radius - 0);
        var colors = [];
        var color1 = d3__WEBPACK_IMPORTED_MODULE_7__["scaleLinear"]()
            .domain([0, 1, 2, 3, 4])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        var linearGradient = gArc.append("defs");
        var linearG1 = linearGradient.append("linearGradient");
        linearG1.attr("id", "linearColors0")
            .attr("x1", "0").attr("y1", "0").attr("x2", ".5").attr("y2", "1");
        linearG1.append("stop").attr("offset", "0%").attr("stop-color", color1(0));
        linearG1.append("stop").attr("offset", "100%").attr("stop-color", color1(1));
        var linearG2 = linearGradient.append("linearGradient");
        linearG2.attr("id", "linearColors1")
            .attr("x1", "0.8").attr("y1", "0").attr("x2", "0.5").attr("y2", "0.8");
        linearG2.append("stop").attr("offset", "0%").attr("stop-color", color1(1));
        linearG2.append("stop").attr("offset", "100%").attr("stop-color", color1(2));
        var linearG3 = linearGradient.append("linearGradient");
        linearG3.attr("id", "linearColors2")
            .attr("x1", "0.8").attr("y1", "0.8").attr("x2", "0").attr("y2", "0.3");
        linearG3.append("stop").attr("offset", "0%").attr("stop-color", color1(2));
        linearG3.append("stop").attr("offset", "100%").attr("stop-color", color1(3));
        var linearG4 = linearGradient.append("linearGradient");
        linearG4.attr("id", "linearColors3")
            .attr("x1", "0").attr("y1", "0.9").attr("x2", "0").attr("y2", "0.1");
        linearG4.append("stop").attr("offset", "0%").attr("stop-color", color1(3));
        linearG4.append("stop").attr("offset", "100%").attr("stop-color", color1(4));
        d3__WEBPACK_IMPORTED_MODULE_7__["range"](4).forEach(function (d, i) {
            // convert to radians
            var start = (i * 89) * (Math.PI / 180), end = ((i * 89.9) + 90) * (Math.PI / 180);
            colors.push({
                startAngle: start,
                endAngle: end
            });
        });
        var returnValue = 'url(' + this.currenturl + '#linearColors';
        gArc.selectAll('.arc')
            .data(colors)
            .enter()
            .append('path')
            .attr('class', 'arc')
            .attr('d', arc)
            .attr('stroke', 'none')
            .attr('fill', function (d, i) { return returnValue + i + ')'; });
        gArc.append("rect")
            .attr("height", "60px")
            .attr("class", "crect_MW")
            .attr("fill", "#fff")
            .attr("x", -5)
            .attr("y", -173)
            //.attr("rx", 15)
            .attr("width", 10)
            .transition()
            .duration(2000);
    };
    HomePage.prototype.M_CreateComps = function (oSvg, dta, lvl) {
        var that = this;
        var M_compLst;
        var gExist = d3__WEBPACK_IMPORTED_MODULE_7__["select"](".M_compLst" + lvl)._groups[0];
        if (gExist != "") {
            M_compLst = oSvg.select('.M_compLst' + lvl).remove();
        }
        M_compLst = oSvg.append("g").attr('class', 'compList M_compLst' + lvl).style("display", "block");
        var M_compC = M_compLst.append("g").attr("class", 'M_compLstC' + lvl);
        var M_compg = M_compC.selectAll("g")
            .data(dta)
            .enter().append("g")
            .attr("class", "comp")
            .attr("transform", function (d, i) { return "rotate(" + ((d.deg * 360 / 100) - 90) + ")"; })
            .attr("name", function (d) { return d.stockKey; });
        M_compg.append("rect")
            .attr("height", "10px")
            .attr("class", "crect_MW")
            .attr("fill", "#fff")
            .attr("x", that.radius - 42)
            .attr("y", 2)
            .attr("width", 50)
            .transition()
            .duration(2000);
        M_compg.append("rect")
            .attr("height", "27px")
            .attr("class", "crect_M")
            .attr("fill", function (d) {
            var gC100 = d3__WEBPACK_IMPORTED_MODULE_7__["scaleLinear"]()
                .domain([0, 25, 50, 75, 100])
                .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
            var scr = d.scores * 100;
            return gC100(scr);
        })
            .attr("id", function (d) {
            if (d.companyName == that.selComp) {
                return d.id = "SelectedCmpyCirlce";
            }
            else {
                return d.id = "";
            }
        })
            .attr("x", that.radius + 20)
            .attr("rx", 15)
            .attr("width", 70)
            .transition()
            .duration(2000);
        d3__WEBPACK_IMPORTED_MODULE_7__["select"]("#SelectedCmpyCirlce")
            .attr("height", 60)
            .attr("width", 150)
            .attr("rx", 30)
            .attr("y", -18);
    };
    /*************** Banner Tool End *****************/
    HomePage.prototype.onscroll = function (event) {
        var _this = this;
        //event.target.
        setTimeout(function () {
            // console.log(event)
            // console.log("scroll running");
            if (_this.selSector.code == 'Global Universe') {
                if (_this.selSectorComp.length != _this.globalselectorcomp.length) {
                    _this.globalSize = _this.globalSize + 100;
                    _this.selSectorComp = _this.globalselectorcomp.slice(0, _this.globalSize);
                    var wtsum = 0;
                    _this.globalselectorcomp.forEach(function (element) {
                        wtsum = wtsum + (1 - element.scores);
                    });
                    _this.selSectorComp.forEach(function (element) {
                        element.wt = ((1 - element.scores) / wtsum) * 100;
                    });
                    // console.log(this.selSectorComp);
                    _this.unsortselSectorComp = _this.globalselectorcomp.slice(0, _this.globalSize);
                    // console.log(this.unsortselSectorComp);
                    event.target.complete();
                    if (_this.selSectorComp.length == _this.globalselectorcomp.length) {
                        event.target.disabled = true;
                    }
                }
                else {
                    event.target.disabled = true;
                }
            }
        }, 500);
    };
    // onClick(){
    //   this.route.navigateByUrl('/test');
    // }
    HomePage.prototype.onLogoutClick = function () {
        this.authService.logout();
    };
    HomePage.prototype.profilePopover = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _Components_profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_11__["ProfiledetailsComponent"],
                            event: e,
                            translucent: true,
                            cssClass: 'Custom_profile'
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.getMaketCap = function (val) {
        return (val / 1000000);
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_13__["DataHandlerService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PickerController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__["ScreenOrientation"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
    ], HomePage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parent-content', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
    ], HomePage.prototype, "parentContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SearchComponent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableComponent"])
    ], HomePage.prototype, "SearchComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HomePage.prototype, "onResize", null);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_13__["DataHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PickerController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__["ScreenOrientation"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var AlertService = /** @class */ (function () {
    function AlertService(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
    }
    AlertService.prototype.setAlert = function (alert) {
        console.log('posting alert');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(alert);
        return this.http.post(this.api_url + '/Users/SetAlerts', alert, httpOptions);
    };
    AlertService.prototype.deleteAlert = function (alert) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(alert);
        return this.http.post(this.api_url + '/Users/RemoveAlerts', alert, httpOptions);
    };
    AlertService.prototype.getAlert = function (alert) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api_url + '/Users/GetAlerts', alert, httpOptions);
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/dataHandler/data-handler.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/dataHandler/data-handler.service.ts ***!
  \**************************************************************/
/*! exports provided: DataHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataHandlerService", function() { return DataHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DataHandlerService = /** @class */ (function () {
    function DataHandlerService(httpclient) {
        this.httpclient = httpclient;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
    }
    DataHandlerService.prototype.getIndustry = function () {
        return this.httpclient.get(this.api_url + "/Industry/GetIndustry").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    DataHandlerService.prototype.getGlobalData = function () {
        return this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    DataHandlerService.prototype.getFICatData = function (cat) {
        return this.httpclient.get(this.api_url + '/Scores/GetBondMappingStocks/' + cat).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    DataHandlerService.prototype.getFIData = function () {
        return this.httpclient.get(this.api_url + '/Scores/GetFixedDataMaster').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    DataHandlerService.prototype.getETFData = function () {
        return this.httpclient.get(this.api_url + "/Scores/GetETFMaster").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    DataHandlerService.prototype.getETFCatData = function (CatID) {
        return this.httpclient.get(this.api_url + "/Scores/GetETFCurrent/" + CatID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    DataHandlerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataHandlerService);
    return DataHandlerService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map