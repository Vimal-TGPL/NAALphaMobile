(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- navBar start -->\r\n<ion-header class=\"ion-text-center\" *ngIf=\"mobile\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" *ngIf=\"mobile\">\r\n      <ion-icon style=\"color:#ffffff; height: 20px; width: 20px; padding: 10px;\" (click)=\"onSortClick()\" name = 'funnel' *ngIf=\"!showFilter\"></ion-icon>\r\n    </ion-buttons>\r\n    <div class=\"header-Logo\" [ngClass]=\"{'ipad_Logo': !mobile}\">\r\n      <img src=\"../../assets/images/NewAgeAlpha-logo.svg\" alt=\"NewAgeAlpha\" width=\"auto\"\r\n        [ngStyle]=\"{height: mobile? '25px':'35px'}\">\r\n    </div>\r\n    <div *ngIf=\"!mobile\" style=\"position: absolute; top: 10px; right: 25px;\">\r\n      <div style=\"display: flex; flex-direction: row;\">\r\n        <div class=\"avatar\" (click)=\"profilePopover($event)\">\r\n          <img src=\"../../assets/images/Profile_NAA5.svg\" alt=\"Profile\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- navBar End -->\r\n\r\n<!--Mobile Body -->\r\n<ion-content id=\"parent-content\" class=\"overflowOnlyLandscape\" *ngIf=\"mobile\">\r\n  <div>\r\n    <!-- SearchBar start -->\r\n    <div class=\"search-Outer-Div\">\r\n      <div class=\"searchDiv\">\r\n        <ion-item class=\"searchItem\" lines=\"none\">\r\n          \r\n          <ion-label style=\"    margin: 2px 0px;\r\n          font-size: 14px;\r\n          align-items: center;\r\n          justify-content: center;\r\n          display: flex;\r\n          color: #888;\">\r\n            <ion-icon name=\"search\"></ion-icon>\r\n            <p *ngIf=\"this.SelTab !== 'ETF' && this.SelTab !== 'ETFChild'\">Ticker or company name</p>\r\n            <p *ngIf=\"this.SelTab == 'ETF' || this.SelTab == 'ETFChild'\">ETF ticker or name</p></ion-label>\r\n          <ionic-selectable class=\"homeSearch\" #SearchComponent [(ngModel)]=\"searchSel\" [items]=\"LoadsearchList\"\r\n            itemTextField=\"companyName\" [canSearch]=\"true\" (onSearch)=\"searchCompany($event);this.searchSel='';\"\r\n            (onSelect)=\"onSearchSelect($event.item)\" [hasInfiniteScroll]=\"true\"\r\n            (onInfiniteScroll)=\"getMoreSearchComp($event)\"\r\n            [searchFailText]=\"'Sorry! we could not find any results matching.'\"\r\n            [isMultiple]=\"false\"\r\n            (onClose)=\"onSearchClose($event)\">\r\n            <ng-template ionicSelectableTitleTemplate>\r\n\r\n              <p style=\"    font-family: Open Sans SemiBold;\r\n              color: #666;\r\n              font-size: 14px;\" *ngIf=\"this.SelTab !== 'ETF' && this.SelTab !== 'ETFChild'\">Ticker or company name</p>\r\n\r\n              <p style=\"    font-family: Open Sans SemiBold;\r\n              color: #666;\r\n              font-size: 14px;\" *ngIf=\"this.SelTab == 'ETF' || this.SelTab == 'ETFChild'\">ETF ticker or name</p>\r\n\r\n              </ng-template>\r\n            <ng-template ionicSelectableItemTemplate let-LoadsearchList=\"item\">\r\n              <div style=\"width: 100%;\">\r\n                <span style=\" font-size: 12px; font-family: Open Sans Regular; color: #666666;\">{{LoadsearchList.companyName}} ({{LoadsearchList.ticker}})</span>\r\n                <br>\r\n                <span style=\"float: left;\r\n                font-size: 9px;\r\n                color: #00b9ff;\r\n                text-transform: uppercase;\r\n                font-family: Open Sans Regular;\">{{LoadsearchList.indexName}}</span>\r\n                <span style=\"float: right;\r\n                font-size: 10px; font-family: Open Sans Regular;\r\n                color: #ffba89;\r\n                text-transform: uppercase;\">{{LoadsearchList.country}}</span>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template ionicSelectableItemIconTemplate let-port=\"item\" let-isPortSelected=\"isItemSelected\">\r\n              <ion-icon style=\"display: none;\" [name]=\"isPortSelected ? 'checkmark-circle' : 'radio-button-off'\"\r\n                [color]=\"isPortSelected ? 'primary' : null\">\r\n              </ion-icon>\r\n            </ng-template>\r\n            <ng-template ionicSelectableCloseButtonTemplate>\r\n              <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n            </ng-template>\r\n            <ng-template ionicSelectableSearchFailTemplate forceOverscroll=true>\r\n\r\n              <div style=\"height: calc(100vh - 196px);\r\n              display: flex;\r\n              /* justify-content: center; */\r\n              align-items: center;\r\n              padding-top: 100px;\r\n              flex-direction: column;\r\n              position: fixed;\r\n              left: 0;\r\n              right: 0;\" *ngIf=\"searchedtext.length > 0\">\r\n                <img src=\"../../assets/images/NAA_search_notfound.png\" alt=\"Search Not Found\" height=\"300\">\r\n                <p style=\"font-size: 20px;\r\n                color: #0569bd;\r\n                margin: 15px 5px 5px 5px; font-family: Open Sans SemiBold;\">Sorry, no result found</p>\r\n                <p style=\"width: 300px;\r\n                text-align: center;\r\n                margin: 5px; \r\n                color: #666;\r\n                font-family: Open Sans Regular;\r\n            font-size: 14px;\">What you searched was unfortunately not found or doesn’t exist.</p>\r\n              </div>\r\n\r\n              <div style=\"height: calc(100vh - 196px);\r\n              display: flex;\r\n              /* justify-content: center; */\r\n              align-items: center;\r\n              padding-top: 100px;\r\n              flex-direction: column;\" *ngIf=\"searchedtext.length == 0\">\r\n              <img src=\"../../assets/images/NAA_Searching.svg\" alt=\"Search\" style=\"    height: 80px;\r\n              margin-bottom: 50px;\">\r\n              <h1 style=\"    color: #666;\r\n              font-family: Open Sans SemiBold;\r\n              padding: 0 50px;\r\n              text-align: center;\r\n              font-size: 20px;\r\n              color: #0569bd;\">What Are you searching for?</h1>\r\n            <p style=\"    color: #666;\r\n            padding: 0 50px;\r\n            text-align: center;\r\n            font-family: Open Sans Regular;\r\n            font-size: 14px;\">Search for your favorite thing or find similar results in this area?</p>\r\n          </div>\r\n            </ng-template>\r\n          </ionic-selectable>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n    <!-- SearchBar End-->\r\n\r\n    <!-- Stock Banner Start -->\r\n    <div>\r\n      <ion-card class=\"stocks-card\">\r\n        <ion-card-content style=\"padding: 2px 0px 3px 0px;\">\r\n          <div *ngIf=\"stockCollapse\" class=\"arrow\" (click)=\"onStockDivClick()\">\r\n            <span></span>\r\n          </div>\r\n          <div class=\"stock-header\" (click)=\"onStockDivClick()\">\r\n            <span class=\"stock-span\">Stocks</span>\r\n            <span class=\"stock-span\"><span style=\"display: flex;\" *ngIf=\"SelSearchObj!=''\"><span style=\"white-space: nowrap;\r\n              width: 90px;\r\n              display: inline-block;\r\n              text-overflow: ellipsis;\r\n              overflow: hidden;\">{{SelSearchObj.companyName}}</span><span>({{SelSearchObj.ticker}})</span></span></span>\r\n          </div>\r\n          <div [ngClass]=\"{'stock-collapse': stockCollapse}\">\r\n            <ion-grid fixed>\r\n              <ion-row>\r\n                <ion-col size=\"6\" class=\"col-first\">\r\n                  <div class=\"image-div\">\r\n                    <img *ngIf=\"selComp==null\" src=\"../../assets/images/Stock_Mobile_View.svg\" alt=\"img\" class=\"image0\">\r\n                    <!-- D3 Tool Start -->\r\n                    <div class=\"Banner_HomeChartcontainer\" [ngStyle]=\"{'display': selComp== null? 'none': 'block'}\">\r\n                      <svg preserveAspectRatio=\"xMidYMid meet\" viewBox=\"30 110 750 710\" width=\"100%\" height=\"100%\"\r\n                        xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n                        <g id=\"M_gchart\" transform=\"translate(400 ,445)\"></g>\r\n                      </svg>\r\n                    </div>\r\n                    <!-- D3 Tool End -->\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"selected-stock-details\">\r\n                  <div style=\"    max-width: 150px;\r\n                  min-width: 150px;\">\r\n                    <ion-text>\r\n                      <p class=\"selected-stock-score\" [style.color]=\"getColor(roundValue(SelSearchObj.scores*100))\"\r\n                        *ngIf=\"SelSearchObj!='' && SelSearchObj.indexName!='ETF'\">{{roundValue(SelSearchObj.scores*100)}}%</p>\r\n                      <p class=\"selected-stock-comp\" [style.color]=\"getColor(roundValue(SelSearchObj.scores*100))\"\r\n                        *ngIf=\"SelSearchObj!='' && SelSearchObj.indexName!='ETF'\">{{SelSearchObj.companyName}}\r\n                        ({{SelSearchObj.ticker}})</p>\r\n                      <p class=\"selected-stock-score\" [style.color]=\"getColor(roundValue(SelSearchObj.scores*100))\"\r\n                        *ngIf=\"SelSearchObj!='' && SelSearchObj.indexName=='ETF' && EtfMed!='' \">{{EtfMed}}%</p>\r\n                      <p class=\"selected-stock-comp\" [style.color]=\"getColor(roundValue(SelSearchObj.scores*100))\"\r\n                        *ngIf=\"SelSearchObj!='' && SelSearchObj.indexName=='ETF'\">{{SelSearchObj.companyName}}\r\n                        ({{SelSearchObj.ticker}})</p>\r\n                        <div style=\"display: flex;\r\n                        flex-direction: row;\r\n                        justify-content: space-around;\r\n                        align-items: center;\r\n                        margin-top: 10px;\"><p *ngIf=\"SelSearchObj!=''\" style=\"display: flex;\r\n                          flex-direction: column;\r\n                          justify-content: center;\r\n                          align-items: center;\r\n                          font-size: 12px;\r\n                          font-family: Open Sans SemiBold;\"><span style=\"color: #666;\">{{SelSearchObj.currency}} {{roundValue(SelSearchObj.price.toFixed(1))}}</span> <span style=\"color: #00b9ff; font-family: Open Sans Regular;\">Price</span></p>\r\n                          <p *ngIf=\"SelSearchObj!=''\" style=\"display: flex;\r\n                          flex-direction: column;\r\n                          justify-content: center;\r\n                          align-items: center;\r\n                          font-size: 12px;\r\n                          font-family: Open Sans SemiBold;\"><span style=\"color: #666;\">{{getMaketCap(SelSearchObj.marketCap).toFixed(1)}}M</span> <span style=\"color: #00b9ff; font-family: Open Sans Regular;\">Market Cap.</span></p></div>\r\n                      \r\n                    </ion-text>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    <!-- Stock Banner Start -->\r\n\r\n    <!-- Slides/Carousel Start-->\r\n    <div id=\"SlideDiv\">\r\n      <ion-slides id=\"pageslider\" [options]=\"slides\" slidesPerView=\"1\" spaceBetween=\"1\" mode='md' loop=\"true\"\r\n        (ionSlideDidChange)=\"onSlideChange($event)\">\r\n\r\n        <!-- GICS Slide Start -->\r\n        <ion-slide>\r\n          <div class=\"slider-div\">\r\n            <div class=\"slider-div\">\r\n              <ion-card class=\"title-card\">\r\n                <ion-card-content class=\"title-card-content\">\r\n                  <ion-text class=\"title-text\">\r\n                    <p class=\"title-p\">S&P Global Industry Classification System</p>\r\n                  </ion-text>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </div>\r\n\r\n            <!-- GICS DropDown Start -->\r\n            <div class=\"slider-div\">\r\n              <ion-card class=\"title-card\">\r\n                <ion-card-content class=\"subIndex-card-content\">\r\n                  <div class=\"subIndex-div\">\r\n                    <span id=\"subIndex-circle\" class=\"subIndex-circle\">{{stockMed}}</span>\r\n                    <ion-button class=\"header-btn\" [disabled]=\"sectorList==''\"\r\n                      [ngClass]=\"{'stockicon-active': stockIndexShow}\" (click)=\"onStockBtnClick()\">\r\n                      <div class=\"SubIndex-header-content\">\r\n                        <span class=\"subIndex-header-title\">{{SelSecLevTitle}}<span *ngIf=\"SelSearchObj!=''\"> (<span\r\n                              class=\"indName\">{{SelSearchObj.hasOwnProperty('indexType')? SelSearchObj.etfName : SelSearchObj.hasOwnProperty('FIName')? SelSearchObj.FIName : SelSearchObj.indexName}}</span>)</span></span>\r\n                        <span class=\"subIndex-header-subtitle\">{{selSector.name}}</span>\r\n                      </div>\r\n                      <ion-icon [name]=\"stockIcon\" class=\"subindex-icon\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </div>\r\n            <!-- GICS DropDown End -->\r\n\r\n            <!-- Stock Company start -->\r\n            <div >\r\n              <ion-card class=\"stockCompList-card\" *ngIf=\"stockIndexShow==false\">\r\n\r\n                <!-- Stock On Begin Start -->\r\n                <ion-card-content *ngIf=\"selSectorComp==''\" class=\"stockcomplist-card-content\"\r\n                  [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n                  <p class=\"test1\" style=\"width: 62%;\">\r\n                    To begin, use the Search Bar located at the top of your screen to select a stock.\r\n                  </p>\r\n                </ion-card-content>\r\n                <!-- Stock On Begin End -->\r\n\r\n                <!-- Stock Company List Start-->\r\n                <ion-card-content  style=\" padding: 0px;\" id='stockCompanyDiv' *ngIf=\"selSectorComp!=''\">\r\n\r\n\r\n                  <ion-content class=\"stockcomplist-card-content\"  [ngClass]=\"{'companycard-extend': stockCollapse , 'foceScrollOverflow': SelSecLevTitle=='Global'}\"\r\n                    forceOverscroll=\"true\" id=\"innerContent\"\r\n                    style=\"--overflow: hidden; --background:white;\">\r\n                    <div scrollY=\"true\" id=\"sectorscrollDiv\"\r\n                      [ngClass]=\"{'stock_companycard-extend': stockCollapse, 'company-list-inner-div': SelSecLevTitle!='Global'}\">\r\n                      <ion-list class=\"company-list\">\r\n                        <ion-item lines='none' [id]=getIDReplace(item.companyName) class=\"company-list-item\"\r\n                          *ngFor=\"let item of selSectorComp\">\r\n                          <div class=\"company-label-outer-div\" [ngClass]=\"{'comp-sel': selComp==item.companyName}\"\r\n                            (click)=\"onCompanyClick(item)\" (press)=\"onlongpress(item)\" [style.background]=\"getColor(roundValue(item.scores*100))\"\r\n                            [style.color]=\"ApplyTextColor(roundValue(item.scores*100))\">\r\n                            <ion-label class=\"company-label\" style=\"    padding: 0px;\">\r\n                              <div style=\"    display: flex;\r\n                              flex-direction: row;\r\n                              align-items: center;\">\r\n                                <!-- <span class=\"s-no\">{{unsortselSectorComp.indexOf(item)+1}}</span> -->\r\n                                <span style=\"    height: 45px;\r\n                                width: 45px;\r\n                                display: inline-flex;\r\n                                align-items: center;\r\n                                justify-content: center;\r\n                                padding: 5px;\r\n                                margin-left: -1px;\r\n                                border-radius: 50%;\r\n                                border: 2px solid #fff;\r\n                                position: absolute;\r\n                                font-size: 10px;\r\n                                font-family: Open Sans SemiBold;\">{{roundValue(item.scores*100)}}%</span>\r\n                                <div style=\"width: 100%; padding: 5px 10px; padding-left: 50px;\">\r\n                                <div style=\"display: flex;\r\n                                flex-direction: row;\r\n                                justify-content: space-between;\r\n                                align-items: center;\">\r\n                                <span style=\" width: 66vw;\r\n                                font-family: Open Sans SemiBold;\r\n                                font-size: 11px;\r\n                                overflow: hidden;\r\n                                white-space: nowrap;\r\n                                text-overflow: ellipsis;\">{{item.companyName}}</span>\r\n                                <!-- <ion-icon name=\"notifications\" style=\"width: 13px;height: 13px;\"></ion-icon> -->\r\n                                <span style=\"    background: #ffffff;\r\n                                padding: 0 10px;\r\n                                border-radius: 10px;\r\n                                font-family: Open Sans SemiBold; font-size: 9px;\" [style.color]=\"ApplyPercentColor(roundValue(item.scores*100))\">{{roundValue(item.wt)}}%</span>\r\n                              </div>\r\n                              \r\n                              <div style=\"display: flex;\r\n                              flex-direction: row;\r\n                              justify-content: space-between;\r\n                              align-items: center;\">\r\n                                <span class=\"ticker-data\">{{item.ticker}}</span>\r\n                                <span style=\"padding-right: 5px; font-family: Open Sans SemiBold;\r\n                                font-size: 9px;\" *ngIf=\"item.price != null\">{{item.currency}} {{roundValue(item.price.toFixed(1))}}</span>\r\n                              </div>\r\n                            </div>\r\n                            </div>\r\n                            </ion-label>\r\n                          </div>\r\n                        </ion-item>\r\n\r\n                      </ion-list>\r\n                      <ion-infinite-scroll [disabled]=\"selSector.code!='Global Universe'\" threshold=\"100px\"\r\n                        position=\"bottom\" (ionInfinite)=\"onscroll($event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading...\">\r\n                        </ion-infinite-scroll-content>\r\n                      </ion-infinite-scroll>\r\n                    </div>\r\n                  </ion-content>\r\n\r\n\r\n                </ion-card-content>\r\n                <!-- Stock Company List End-->\r\n              </ion-card>\r\n\r\n              <!-- GICS List Start -->\r\n              <ion-card class=\"stockCompList-card\" *ngIf=\"stockIndexShow==true\">\r\n                <ion-card-content style=\"padding: 0px; height: calc(100vh - 263px);\">\r\n                  <ion-item style=\"color: black; --background: white;\" *ngFor=\"let item of sectorList\"\r\n                    (click)=\"onSectorClick(item.code)\">\r\n                    <ion-label\r\n                      style=\"display: flex; flex-direction: column; margin: 4px 0px; font-family: Open Sans SemiBold;\r\n                      font-size: 13px; color: #666666;\">\r\n                      <span [ngClass]=\"{'selGICS': SelSecLevTitle==sectorHeadings[sectorList.indexOf(item)]}\" style=\"margin-top: 3px;\">{{sectorHeadings[sectorList.indexOf(item)]}}</span>\r\n                      <span [ngClass]=\"{'selGICS': SelSecLevTitle==sectorHeadings[sectorList.indexOf(item)]}\" style=\"overflow: hidden; text-overflow: ellipsis; margin-top: 5px;\">{{item.name}}</span></ion-label>\r\n                  </ion-item>\r\n                </ion-card-content>\r\n              </ion-card>\r\n              <!-- GICS List End -->\r\n            </div>\r\n            <!-- Stock Company End -->\r\n\r\n          </div>\r\n        </ion-slide>\r\n        <!-- GICS Slide End -->\r\n\r\n        <!-- Index Slide Start -->\r\n        <ion-slide>\r\n          <div class=\"slider-div\">\r\n\r\n            <!-- Index Tab Start  -->\r\n            <div>\r\n              <ul class=\"NavTabList\">\r\n                <li class=\"navTabBtn\" [ngClass]=\"{'tab-active': SelTab == 'Global Universe'}\"\r\n                  (click)=\"GridHeaderTitle=false; onNavGlobalClick();\">Equities</li>\r\n                <li class=\"tab2color\" [ngClass]=\"{'tab-active': SelTab == 'FI'}\"\r\n                  (click)=\"GridHeaderTitle=false; onFINavClick();\">Fixed Income</li>\r\n                <li class=\"ETFNavTabBtn\" [ngClass]=\"{'tab-active': SelTab == 'ETF'|| SelTab == 'ETFChild'}\"\r\n                  (click)=\"GridHeaderTitle=false; onNavETFClick();\">ETFs</li>\r\n                <li class=\"ETFNavTabBtn\" [ngClass]=\"{'tab-active': SelTab == 'NAA'}\"\r\n                  (click)=\"GridHeaderTitle=false; onNavNAAClick();\">NAA Indexes</li>\r\n                \r\n              </ul>\r\n            </div>\r\n            <!-- Index Tab End  -->\r\n\r\n            <!-- Index Dropdown Start -->\r\n            <div>\r\n              <ion-card class=\"index-header\"\r\n                [ngClass]=\"{'active-left': SelTab == 'Global Universe', 'active-right': SelTab == 'ETF' || SelTab == 'ETFChild'}\">\r\n\r\n                <ion-card-content class=\"index-header-card-content\">\r\n                  <div class=\"index-header-card-div\">\r\n                    <span id='header-circle' class=\"header-circle\">{{headermed}}</span>\r\n                    <!-- <span style=\"min-width: 40px; min-height: 40px; height: 40px; width:40px; border-radius: 50%; background-color: #2e4c99;\"></span> -->\r\n                    <ion-button class=\"header-btn\" [disabled]=\"GridHeaderTitle\"\r\n                      [ngClass]=\"{'stockicon-active': compIndexShow}\" (click)=\"onCompBtnClick()\">\r\n                      <div class=\"Btn-inner-div\">\r\n                        <span\r\n                          class=\"subIndex-header-title\">{{(SelTab=='ETF' || SelTab=='ETFChild')? 'ETF': SelTab=='FI'? 'Fixed Income':'Index'}}</span>\r\n                        <span class=\"subIndex-header-subtitle\">{{SelIndexName}}</span>\r\n                      </div>\r\n                      <ion-icon [name]='icon' class=\"subindex-icon\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </div>\r\n            <!-- Index Dropdown End -->\r\n\r\n            <div >\r\n              <ion-card class=\"company-card\" *ngIf=\"compIndexShow==false\"\r\n                [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n\r\n                <!-- Index On Begin Start -->\r\n                <ion-card-content *ngIf=\"selectedIndexData.length == 0 && ETFHoldings.length == 0 \"\r\n                  class=\"child-card-content\" [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n                  <p class=\"test1\" style=\"width: 67%;\">\r\n                    To begin, use the Search Bar located at the top of your screen to select a stock.\r\n                  </p>\r\n                </ion-card-content>\r\n                <!-- Index On Begin End -->\r\n\r\n                <!-- Index Company List Start -->\r\n                <ion-card-content id='IndexCompanyDiv' style=\"padding: 5px 0px 5px 0px;\" *ngIf=\"selectedIndexData.length > 0 \"\r\n                  class=\"company-card-content\" [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n                  <div id=\"scrollDiv\" class=\"company-list-inner-div\"\r\n                    [ngClass]=\"{'Index_companycard-extend': stockCollapse}\">\r\n                    <ion-list class=\"company-list\">\r\n                      <ion-item lines='none' class=\"company-list-item\" *ngFor=\"let item of selectedIndexData\">\r\n                        <div class=\"company-label-outer-div\"\r\n                          [ngClass]=\"{'comp-sel': selComp==item.companyName && SelSearchObj.indexName==item.indexName}\"\r\n                          (click)=\"onCompanyClick(item)\" (press)=\"onlongpress(item)\" [style.background]=\"getColor(roundValue(item.scores*100))\"\r\n                          [style.color]=\"ApplyTextColor(roundValue(item.scores*100))\">\r\n                          <ion-label class=\"company-label\" style=\"padding:0px;\">\r\n                            <!-- <div class=\"nameExtend\" style=\"width: 193px; overflow: hidden; text-overflow: ellipsis;\"> -->\r\n                            <div class=\"index-outer-Div\">\r\n                              <!-- <span class=\"s-no\">{{unsortedIndexData.indexOf(item)+1}}</span> -->\r\n                              <span style=\"height: 45px;\r\n                              width: 45px;\r\n                              padding: 5px;\r\n                              display: inline-flex;\r\n                              align-items: center;\r\n                              border-radius: 50%;\r\n                              font-size: 10px;\r\n                              margin-left: -1px;\r\n                              justify-content: center;\r\n                              font-family: Open Sans SemiBold;\r\n                              border: 2px solid #fff;\r\n                              position: absolute;\">{{roundValue(item.scores*100)}}%</span>\r\n                              <div class=\"index-inner-Div\" style=\"padding: 5px 10px; padding-left: 50px !important;\">\r\n                                <div class=\"first-div\">\r\n                                  <span class=\"comp-Name\">{{item.companyName}}</span>\r\n                                  <!-- <ion-icon name=\"notifications\" style=\"width: 13px;\r\n                                  height: 13px;\"></ion-icon> -->\r\n                                  <span class=\"per-val\"\r\n                                    [style.color]=\"ApplyPercentColor(roundValue(item.scores*100))\">{{roundValue(item.wt)}}%</span>\r\n                                </div>\r\n                                <div class=\"second-Div\">\r\n                                  <span class=\"ticker-data\">{{item.ticker}}</span>\r\n                                  <span style=\"    font-family: Open Sans SemiBold;\r\n                                  font-size: 9px;\" *ngIf=\"item.price !== null\">{{item.currency}} {{roundValue(item.price.toFixed(1))}}</span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <!-- </div> -->\r\n                          </ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                    </ion-list>\r\n                  </div>\r\n                </ion-card-content>\r\n                <!-- Index Company List End -->\r\n              </ion-card>\r\n\r\n              <!-- Index Dropdown List Start -->\r\n              <ion-card class=\"company-card\" style=\"overflow: auto;\" *ngIf=\"compIndexShow==true\"\r\n                [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n\r\n                <!-- Index Loader -->\r\n                <ion-card-content *ngIf=\"showLoader\" class=\"index-loader\">\r\n                  <div>\r\n                    <img class=\"loader\" src=\"../../assets/images/Rolling.svg\" alt=\"Loading...\">\r\n                  </div>\r\n                </ion-card-content>\r\n                <!-- Index Loader -->\r\n\r\n                <!-- Global country List Start -->\r\n                <ion-card-content *ngIf=\"SelTab=='Global Universe' && !selCountry\" class=\"company-card-content\">\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of GlobalList\"\r\n                      (click)=\"selCountry=item.country;  onCountryClick(item.country)\">\r\n                      <div style=\"display: flex;\r\n                      width: 100%;\r\n                      margin-left: 1px;\r\n                      align-items: center;\">\r\n                        <span class=\"index-circle\" [style.color]=\"ApplyTextColor(item.med)\"\r\n                          [style.background-color]=\"getColor(item.med)\">{{item.med}}</span>\r\n                        <ion-label style=\"    font-size: 12px;\r\n                        font-family: Open sans Semibold; color:#666666\">{{item.country}}</ion-label>\r\n\r\n                      </div>\r\n                      <ion-icon name=\"ios-arrow-forward\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- Global country List End -->\r\n\r\n                <!-- Global Index List Start -->\r\n                <ion-card-content *ngIf=\"SelTab=='Global Universe' && selCountry\" class=\"company-card-content\">\r\n                  <div style=\"    padding: 5px 10px 0px 10px;\" (click)=\"onCountryBackClick()\">\r\n                    <p style=\"text-align: left; color: #01b9ff; display: flex;\r\n                    flex-direction: row;\r\n                    align-items: center; font-family: Open Sans SemiBold;\r\n    font-size: 13px;\">\r\n                      <img src=\"../../assets/images/backward.svg\" alt=\"Back\" style=\"height: 8px; width: 8px; margin-right: 10px;\">{{selCountry}}\r\n                    </p>\r\n                  </div>\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of globalselectedcountryList\"\r\n                      (click)=\"showLoader = true; onglobalIndexClick(item.name);\" [ngClass]=\"{'selectIndex': SelIndexName==item.name}\">\r\n                      <div style=\"display: flex;\r\n                      width: 100%;\r\n                      margin-left: 1px;\r\n                      align-items: center;padding: 5px 0;\" >\r\n                        <span class=\"index-circle\"\r\n                          [style.color]=\"ApplyTextColor(item.med)\"\r\n                          [style.background-color]=\"getColor(item.med)\">{{item.med}}</span>\r\n                        <ion-label style=\"font-size: 12px; font-family: Open Sans SemiBold; color: #666666;\" [ngClass]=\"{'selectedIndexLabel': SelIndexName==item.name}\">\r\n                          {{getGlobalIndex(item.name)}}</ion-label>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- Global Index List End -->\r\n\r\n                <!-- Naa Index List Start -->\r\n                <ion-card-content *ngIf=\"SelTab=='NAA'\" class=\"company-card-content\">\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of comNAAIndex\"\r\n                      (click)=\"onNaaIndexClick(item.name)\" [ngClass]=\"{'selectIndex': SelIndexName==item.name}\">\r\n                      <div style=\"display: flex;\r\n                      width: 100%;\r\n                      margin-left: 1px;\r\n                      align-items: center;padding: 5px 0;\" >\r\n                        <span class=\"index-circle\"\r\n                          [style.color]=\"ApplyTextColor(item.med)\"\r\n                          [style.background-color]=\"getColor(item.med)\">{{item.med}}</span>\r\n                        <ion-label style=\"font-size: 12px;\r\n                        font-family: Open sans SemiBold;\r\n                        color: #666666;\"\r\n                        [ngClass]=\"{selectIndexLabel: SelIndexName==item.name}\">\r\n                          {{getNaaIndex(item.name)}}</ion-label>\r\n                      </div>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- Naa Index List End -->\r\n\r\n                <!-- FI Country List Start-->\r\n                <ion-card-content *ngIf=\"SelTab=='FI' && !FISelCountry\" class=\"company-card-content\">\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of FICountryList\"\r\n                      (click)=\"onFICountryClick(item)\">\r\n                      <span class=\"index-circle\" [style.color]=\"ApplyTextColor(FixedIndexData[item].med)\"\r\n                        [style.background-color]=\"getColor(FixedIndexData[item].med)\">{{FixedIndexData[item].med}}</span>\r\n                      <ion-label style=\"font-size: 12px;\r\n                      font-family: Open sans SemiBold;\r\n                      color: #666666;\">{{item}}</ion-label>\r\n                      <ion-icon name=\"ios-arrow-forward\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- FI Country List End-->\r\n\r\n                <!-- FI category List Start-->\r\n                <ion-card-content *ngIf=\"SelTab=='FI' && FISelCountry\" class=\"company-card-content\">\r\n                  <div style=\"    padding: 5px 10px 0px 10px;\" (click)=\"onFiCountryBackClick()\">\r\n                    <p style=\"text-align: left; color: #01b9ff; display: flex;\r\n                    flex-direction: row;\r\n                    align-items: center; font-family: Open Sans SemiBold;  font-size: 13px;\">\r\n                      <img src=\"../../assets/images/backward.svg\" alt=\"Back\" style=\"height: 8px; width: 8px; margin-right: 10px;\">{{FISelCountry}}\r\n                    </p>\r\n                  </div>\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of FIselCatogaryList\"\r\n                      (click)=\"onFixedCatClick(item)\" [ngClass]=\"{'selectIndex': SelIndexName == (item.category == 'HY'? 'High Yield' : 'Investment Grade')}\">\r\n                      <div style=\"display: flex;\r\n                      width: 100%;\r\n                      margin-left: 1px;\r\n                      align-items: center;\r\n                      padding: 5px 0;\"\r\n                        >\r\n                        <span class=\"index-circle\"\r\n                          \r\n                          [style.color]=\"ApplyTextColor(roundValue(item.medianCont*100))\"\r\n                          [style.background-color]=\"getColor(roundValue(item.medianCont*100))\">{{roundValue(item.medianCont*100)}}</span>\r\n                        <ion-label style=\"font-size: 12px;\r\n                        font-family: Open sans SemiBold;\r\n                        color: #666666;\"\r\n                          [ngClass]=\"{'selectIndexLabel': SelIndexName == (item.category == 'HY'? 'High Yield' : 'Investment Grade')}\">\r\n                          {{item.category == 'HY'?'High Yield':'Investment Grade'}}</ion-label>\r\n                      </div>\r\n                      <ion-icon name=\"ios-arrow-forward\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- FI category List End-->\r\n\r\n                <!-- ETF Catagory List Start -->\r\n                <ion-card-content *ngIf=\"SelTab=='ETF'\" class=\"company-card-content\">\r\n                  <ion-list class=\"nav-tab-index\">\r\n                    <ion-item class=\"nav-tab-item\" lines=\"none\" *ngFor=\"let item of ETFcategory\"\r\n                      (click)=\"onETFCategoryClick(item)\">\r\n                      <span class=\"index-circle\"\r\n                        [style.color]=\"ApplyTextColor(roundValue(getETFCategoryMed(ETFcategory.indexOf(item))*100))\"\r\n                        [style.background-color]=\"getColor(roundValue(getETFCategoryMed(ETFcategory.indexOf(item))*100))\">{{roundValue(getETFCategoryMed(ETFcategory.indexOf(item))*100)}}</span>\r\n                      <ion-label style=\"font-size: 12px;\r\n                      font-family: Open sans SemiBold;\r\n                      color: #666666;\">{{item}}</ion-label>\r\n                      <ion-icon name=\"ios-arrow-forward\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n                <!-- ETF Catagory List End -->\r\n\r\n                <!-- ETF Index List Start -->\r\n                <ion-card-content *ngIf=\"SelTab=='ETFChild'\" class=\"nav-tab-card-content\">\r\n                  <div class=\"backBtn\">\r\n                    <img src=\"../../assets/images/backward.svg\" alt=\"Back\" style=\"height: 8px; width: 8px;\">\r\n                    <ion-label class=\"backText backText-label\" (click)=\"this.SelTab='ETF';\">{{selCategory}}</ion-label>\r\n                  </div>\r\n                  <div class=\"ETFChild-Div\" [ngClass]=\"{'companycard-extend': stockCollapse}\">\r\n                    <div>\r\n                      <ion-list class=\"ETFChild-List\">\r\n                        <ion-item lines=\"none\" style=\"--background: white; font-size: 14px; margin: 5px 0 5px 0;\"\r\n                          *ngFor=\"let item of compETFNameList\" (click)=\"onETFNameClick(item.name)\" [ngClass]=\"{'selectIndex': SelIndexName==item.name}\">\r\n                          <div style=\"display: flex;\r\n                          width: 100%;\r\n                          margin-left: 1px;\r\n                          align-items: center;\r\n                          padding: 5px 0;\" >\r\n                            <span class=\"index-circle\"\r\n                              [style.color]=\"ApplyTextColor(item.med)\"\r\n                              [style.background-color]=\"getColor(item.med)\">{{item.med}}</span>\r\n                            <ion-label class=\"ETFChild-Label\"\r\n                              [ngClass]=\"{'selectedIndexLabel': SelIndexName==item.name}\">{{item.name}}</ion-label>\r\n                          </div>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                    </div>\r\n                  </div>\r\n                </ion-card-content>\r\n                <!-- ETF Index List End -->\r\n\r\n              </ion-card>\r\n              <!-- Index Dropdown List End -->\r\n\r\n            </div>\r\n          </div>\r\n        </ion-slide>\r\n        <!-- Index Slide End -->\r\n\r\n      </ion-slides>\r\n    </div>\r\n    <!-- Slides/Carousel End-->\r\n\r\n    <!-- Slides/Carousel Pager Start -->\r\n    <div style=\"    position: fixed;\r\n    width: 100%;\r\n    bottom: 0;\r\n    z-index: 999;\">\r\n      <div class=\"pager_div\">\r\n        <p id=\"slide0dot\" class=\"dot0p\" (click)=\"onSlide0Click()\"></p>\r\n        <p id=\"slide1dot\" class=\"dot1P\" (click)=\"onSlide1Click()\"></p>\r\n      </div>\r\n    </div>\r\n    <!-- Slides/Carousel Pager End -->\r\n  </div>\r\n\r\n  <div *ngIf=\"showFilter\" class=\"Filter_Div\">\r\n   \r\n      <ion-list id=\"sortbyList\">\r\n        <div>\r\n        <ion-label>Sort by</ion-label>\r\n        <ion-button class=\"sortCancelBtn\" (click)=\"onSortClick()\" fill=\"clear\">\r\n          Cancel\r\n        </ion-button>\r\n      </div>\r\n      <hr>\r\n        <ion-button class=\"filterTypeBtn\" (click)=\"onfilterSelect('C')\" expand=\"block\" fill=\"clear\" [ngClass]=\"{'activeSort': filterby == 'C_LTH' || filterby == 'C_HTL'}\">\r\n          <span id=\"filterLabel\">Company Name</span>\r\n          <span class=\"filterTypeInnerSpan\">\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'C_LTH'\">(A - Z)</span>\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'C_HTL'\">(Z - A)</span>\r\n            <ion-icon name=\"arrow-round-up\" *ngIf=\"filterby == 'C_LTH'\"></ion-icon>\r\n          <ion-icon name=\"arrow-round-down\" *ngIf=\"filterby == 'C_HTL'\"></ion-icon>\r\n          </span>\r\n          \r\n        </ion-button>\r\n      \r\n        <ion-button class=\"filterTypeBtn\" (click)=\"onfilterSelect('HF')\" expand=\"block\" fill=\"clear\" [ngClass]=\"{'activeSort': filterby == 'HF_LTH' || filterby == 'HF_HTL'}\">\r\n         <span id=\"filterLabel\">H-Factor Score</span> \r\n         <span class=\"filterTypeInnerSpan\">\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'HF_LTH'\">(Low - High)</span>\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'HF_HTL'\">(High - Low)</span>\r\n            <ion-icon name=\"arrow-round-up\" *ngIf=\"filterby == 'HF_LTH'\"></ion-icon>\r\n          <ion-icon name=\"arrow-round-down\" *ngIf=\"filterby == 'HF_HTL'\"></ion-icon>\r\n          </span>\r\n         \r\n        </ion-button>\r\n      \r\n        <ion-button class=\"filterTypeBtn\" (click)=\"onfilterSelect('T')\" expand=\"block\" fill=\"clear\" [ngClass]=\"{'activeSort': filterby == 'T_LTH' || filterby == 'T_HTL'}\">\r\n          <span id=\"filterLabel\">Ticker</span> \r\n          <span class=\"filterTypeInnerSpan\">\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'T_LTH'\">(A - Z)</span>\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'T_HTL'\">(Z - A)</span>\r\n            <ion-icon name=\"arrow-round-up\" *ngIf=\"filterby == 'T_LTH'\"></ion-icon>\r\n          <ion-icon name=\"arrow-round-down\" *ngIf=\"filterby == 'T_HTL'\"></ion-icon>\r\n          </span>\r\n          \r\n        </ion-button>\r\n      \r\n        <ion-button class=\"filterTypeBtn\" (click)=\"onfilterSelect('P')\" expand=\"block\" fill=\"clear\" [ngClass]=\"{'activeSort': filterby == 'P_LTH' || filterby == 'P_HTL'}\">\r\n         <span id=\"filterLabel\">Price</span>\r\n         <span class=\"filterTypeInnerSpan\">\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'P_LTH'\">(Low - High)</span>\r\n            <span id=\"Filtertype\" *ngIf=\"filterby == 'P_HTL'\">(High - Low)</span>\r\n            <ion-icon name=\"arrow-round-up\" *ngIf=\"filterby == 'P_LTH'\"></ion-icon>\r\n         <ion-icon name=\"arrow-round-down\" *ngIf=\"filterby == 'P_HTL'\"></ion-icon>\r\n          </span>\r\n         \r\n        </ion-button>\r\n      </ion-list>\r\n    \r\n  </div>\r\n\r\n  <div *ngIf=\"showAlertSetup\" style=\"    position: absolute;\r\n  z-index: 999;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background-color: rgba(113, 107, 107, 0.50)\">\r\n    <ion-card style=\"background: white;\">\r\n      <ion-card-content style=\"    padding: 0px;     padding-bottom: 15px;\">\r\n        <div style=\"background: #00b9ff; align-items: center; padding: 10px; display: flex; flex-direction: row; justify-content: space-between;\">\r\n          <ion-title style=\"font-size: 18px; padding: 0px; color: white; position: relative;\">Alert Settings</ion-title>\r\n          <ion-icon style=\"color: #ffffff; width: 19px;\r\n          height: 19px;\" name=\"close\" (click)=\"showAlertSetup= false;\"></ion-icon>\r\n        </div>\r\n        <div>\r\n          <p style=\"text-align: center;\r\n          padding-top: 15px;\r\n    color: #394e8b;\r\n    font-size: 16px;\r\n    padding: 0 15px;\r\n    font-weight: 500;\">{{SelSearchObj.companyName}} ({{SelSearchObj.ticker}})</p>\r\n        </div>\r\n        <div>\r\n          <ion-item lines=\"none\" style=\"--background: #ffffff;\">\r\n            <ion-label>Period</ion-label>\r\n            <ion-select interface=\"popover\" (ionChange)=\"rangeChange($event)\" [(ngModel)]=\"selPeriod\" style=\"min-width:45% !important;\">\r\n              <ion-select-option value=\"daily\">Daily</ion-select-option>\r\n              <ion-select-option value=\"weekly\">Weekly</ion-select-option>\r\n              <ion-select-option value=\"monthly\">Monthly</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n        <div *ngIf=\"selPeriod == 'weekly'\" style=\"display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\">\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('sunday')\" [ngClass]=\"{'dayActive': selDay == 'sunday'}\">S</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('monday')\" [ngClass]=\"{'dayActive': selDay == 'monday'}\">M</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('tuesday')\" [ngClass]=\"{'dayActive': selDay == 'tuesday'}\">T</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('wednesday')\" [ngClass]=\"{'dayActive': selDay == 'wednesday'}\">W</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('thursday')\" [ngClass]=\"{'dayActive': selDay == 'thursday'}\">T</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('friday')\" [ngClass]=\"{'dayActive': selDay == 'friday'}\">F</span>\r\n          <span class=\"alertdayspan\" (click)=\"ondayclick('satuday')\" [ngClass]=\"{'dayActive': selDay == 'satuday'}\">S</span>\r\n        </div>\r\n        <div *ngIf=\"selPeriod == 'monthly'\" style=\"display: flex; flex-direction: row;     justify-content: space-between;\r\n        \r\n        align-items: center;\">\r\n          \r\n          <ion-button (click)=\"openDaypicker()\" (ionChange)=\"rangeChange($event)\" expand=\"block\" fill=\"clear\" style=\"width: 100%;     --padding-start: 15px;\r\n          --padding-end: 15px; --ripple-color:#666;\">\r\n            <div style=\"width: 100%; display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\">\r\n              <span style=\"    color: #000000;\r\n          font-size: 16px;     text-transform: capitalize;\r\n    font-weight: normal;\">Date</span>\r\n          <span style=\"color: #000000;\">\r\n           {{selDate}} <ion-icon name=\"arrow-dropdown\" style=\"height: 18px;\r\n           width: 18px; margin-left: 10vh; color: #000000;\r\n            opacity: 0.4;\"></ion-icon>\r\n            </span>\r\n            </div>\r\n          </ion-button>\r\n        </div>\r\n        <div>\r\n          <ion-item lines=\"none\" style=\"--background: #ffffff;\" >\r\n            <ion-checkbox (ionChange)=\"rangeChange($event)\" [(ngModel)]=\"perChecked\" style=\"--background:#ffffff; --background-checked: #00b9ff;\r\n            --border-color-checked: #00b9ff;\"></ion-checkbox>\r\n            <ion-label style=\"padding-left: 10px; font-size: 14px;\">If Score Percentage changed by (+/-)</ion-label>\r\n          </ion-item>\r\n        </div>\r\n        <div *ngIf=\"perChecked\">\r\n          <ion-item style=\"--background:#ffffff; \" lines=\"none\">\r\n            <ion-range [(ngModel)]=\"selPer\" style=\"--ion-color-base: #00b9ff !important; padding-left: 0px;\r\n            padding-right: 0px;\"\r\n              min=\"1\" max=\"100\"\r\n              pin=\"true\"\r\n              snaps=\"true\" step=\"1\"\r\n              ticks=\"true\" value=\"1\"\r\n              color=\"primary\" (ionChange)=\"rangeChange($event)\">\r\n\r\n                <ion-label slot=\"start\">1%</ion-label>\r\n                <ion-label slot=\"end\">100%</ion-label>\r\n            </ion-range>\r\n          </ion-item>\r\n        </div>\r\n        <div style=\"margin: 15px 15%; \">\r\n          <ion-button *ngIf=\"showSubmit\" [disabled]=\"selPeriod == '' && !perChecked\" style=\"--background: linear-gradient(45deg,#06aaf1,#2c529e)!important;\" (click)=\"onAlertSubmit()\" expand=\"block\" shape=\"round\">\r\n            Submit\r\n          </ion-button>\r\n        </div>\r\n        <div style=\"margin: 15px 15%; \">\r\n          <ion-button *ngIf=\"showAlertRemove\" style=\"--background: #999 !important; color: white;\" (click)=\"onRemoveAlert()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n            Remove\r\n          </ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n<!--Mobile body -->\r\n\r\n<!-- Tablet body -->\r\n<!-- <ion-content *ngIf=\"!mobile\" style=\"--ion-background-color:linear-gradient(-90deg,#2E4C99, #233771);\">\r\n  <div style=\"    height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\">\r\n    <app-ipadhometool></app-ipadhometool>\r\n  </div>\r\n</ion-content> -->\r\n  <ion-tabs *ngIf=\"!mobile\">\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button tab=\"tab1\" (click)=\"onhomeClick()\">\r\n        <ion-icon name=\"flash\"></ion-icon>\r\n        <ion-label>home</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"tab2\">\r\n        <ion-icon name=\"apps\"></ion-icon>\r\n        <ion-label>Tab Two</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"tab3\">\r\n        <ion-icon name=\"send\"></ion-icon>\r\n        <ion-label>Tab Three</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs> \r\n\r\n\r\n<!-- Tablet body -->"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");








// const tabroutes : Routes =[{
//   path : 'tabs',
//   component : HomePage,
//   children : [{
//     path : 'tab1',
//     component:IPadHomeToolComponent
//   }]
// },{
//   path : '',
//   redirectTo : '/home/tabs/tab1',
//   pathMatch : 'full'
// }];
// const mobileroutes : Routes =[{
//   path: '',
//   component: HomePage,
//   children : [{
//     path : 'menu/menu/home',
//     loadChildren : () => import('../home/home.page').then(m=> m.HomePage),
//   }]
// }];
let HomePageModule = class HomePageModule {
};
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



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  --background: #2e4c99; }\n\n.toolbar-button {\n  position: absolute; }\n\n.header-Logo {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex; }\n\n#parent-content {\n  --ion-background-color:#d3d8dc; }\n\n.search-Outer-Div {\n  padding: 0px 15px; }\n\n.searchBtn {\n  --border-radius:15px;\n  width: 75px;\n  font-size: 11px;\n  height: 24px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  --background: #00aeef;\n  --box-shadow: none; }\n\n.searchInput {\n  font-size: 16px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --color:#666;\n  text-align: center; }\n\n.searchItem {\n  --border-width:2px;\n  --border-color:#33529f;\n  --inner-padding-end: 5px;\n  --background: white;\n  --border-radius: 25px;\n  --min-height: 28px; }\n\n.searchDiv {\n  padding: 5px 0px;\n  padding-top: 2%; }\n\n.nav-tab {\n  display: -webkit-box;\n  display: flex;\n  list-style: none;\n  padding: 0px 25px 0px;\n  margin: 0px; }\n\n.nav-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n  flex-wrap: nowrap;\n  color: white;\n  z-index: 1;\n  -webkit-box-flex: 1;\n          flex: 1; }\n\n.nav-item::after {\n  content: \"\";\n  background-color: #01b9ff;\n  position: absolute;\n  width: 100%;\n  height: 25px;\n  -webkit-transform: perspective(3px) rotateX(2.5deg);\n          transform: perspective(3px) rotateX(2.5deg);\n  z-index: -1; }\n\n.index-loader {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  height: calc(100vh - 251px); }\n\n.loader {\n  height: 40px;\n  width: 40px; }\n\n.nav-tab-index {\n  background: white;\n  padding: 0px 4px; }\n\n.nav-tab-item {\n  --background: white;\n  color: #666;\n  font-size: 14px;\n  margin: 5px 0 5px 0; }\n\n.nav-tab-card-content {\n  padding: 0px; }\n\n.ETFnav-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n  flex-wrap: nowrap;\n  color: white;\n  z-index: 0;\n  -webkit-box-flex: 1;\n          flex: 1; }\n\n.ETFnav-item::after {\n  content: \"\";\n  background-color: #3879b4;\n  position: absolute;\n  width: 100%;\n  height: 25px;\n  -webkit-transform: perspective(3px) rotateX(2.5deg);\n          transform: perspective(3px) rotateX(2.5deg);\n  z-index: -1; }\n\n.nav-tab li a {\n  line-height: 2;\n  color: white;\n  font-size: 11px;\n  padding: 5px 5px 0px 5px; }\n\n.nav-tab .nav-item.active::after {\n  background-color: #ffffff; }\n\n.nav-tab .ETFnav-item.active::after {\n  background-color: #ffffff; }\n\n.nav-tab .nav-item.active a {\n  color: #01b9ff;\n  z-index: 2; }\n\n.nav-tab .ETFnav-item.active a {\n  color: #01b9ff;\n  z-index: 2; }\n\n.nav-tab .nav-item.active {\n  z-index: 2; }\n\n.nav-tab .ETFnav-item.active {\n  z-index: 2; }\n\n.tab-content {\n  padding-bottom: 25px;\n  margin-top: -1px;\n  z-index: 101;\n  position: relative; }\n\n.tab-pane {\n  background: #fff;\n  border-radius: 25px 25px 12px 12px; }\n\n.tab-content .tab-pane.active {\n  display: block; }\n\n.accordion {\n  background: white;\n  border-radius: 20px 20px 12px 12px; }\n\n.card:first-child {\n  border-radius: 25px; }\n\n.card-header {\n  border: none;\n  background: #fff;\n  border-radius: 20px 20px 0 0; }\n\n.accordion-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  min-height: 50px; }\n\n.parent-card {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  background: #fff;\n  position: relative;\n  z-index: 2;\n  box-shadow: none;\n  border-radius: 20px 20px 12px 12px; }\n\n.header-circle {\n  background-color: #2e4c99;\n  height: 40px;\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-family: Open Sans Semibold;\n  font-size: 12px; }\n\n.parent-card-header {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 1.3px solid #d4d7db; }\n\n.card-header-title {\n  padding-left: 20px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #666; }\n\n.header-btn {\n  width: 100%;\n  --background: #fff;\n  --background-focused: #fff;\n  --background-hover: #fff;\n  --box-shadow: none;\n  --color: #dfdfdf;\n  text-transform: none;\n  --color-activated: #dfdfdf;\n  --ripple-color: transparent;\n  --background-activated: #fff;\n  min-height: 50px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  min-height: 0px;\n  height: auto; }\n\n.header-title-div {\n  text-align: left;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.header-title-span {\n  font-size: 14px;\n  font-weight: 400; }\n\n.header-comp-span {\n  font-size: 13px;\n  white-space: normal; }\n\n.parent-card-content {\n  padding: 0px; }\n\n.index-card {\n  margin: 0px;\n  height: calc( 100vh - 330px);\n  box-shadow: none;\n  overflow: auto; }\n\n.collapse {\n  display: none; }\n\n.child-card {\n  margin: 0px;\n  height: calc( 100vh - 330px);\n  box-shadow: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.child-card-content {\n  --ion-background-color: white;\n  height: calc(100vh - 399px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.collapse-parent {\n  display: none; }\n\n.test1 {\n  font-size: 14px;\n  font-family: Open Sans SemiBold;\n  color: #666;\n  font-weight: 500;\n  padding: 8px;\n  margin-bottom: 0.5rem !important; }\n\n.sort-card {\n  box-shadow: none;\n  padding: 0px;\n  margin: 0px; }\n\n.sort-card-header {\n  padding: 0px;\n  border-bottom: 1.3px solid #d4d7db;\n  border-top: 1.3px solid #d4d7db; }\n\n.sort-header-btn {\n  width: 100%;\n  --background: #fff;\n  --box-shadow: none;\n  --color: #666;\n  text-transform: none;\n  --color-activated: #666;\n  --ripple-color: transparent;\n  --background-activated: #fff;\n  padding: 0px 0px 0px 10px; }\n\n.sort-header-title-div {\n  text-align: left;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.sort-header-title {\n  font-size: 15px;\n  font-weight: 400;\n  color: #666;\n  padding-bottom: 4px; }\n\n.collapse-sort {\n  display: none; }\n\n.totalScore {\n  font-size: 15px;\n  font-weight: 500;\n  padding: 0px 0px 0px 10px; }\n\n.index-circle {\n  color: #ff9503;\n  margin-right: 10px;\n  border-radius: 50%;\n  font-size: 12px;\n  font-family: Open sans Semibold;\n  max-width: 42px;\n  max-height: 42px;\n  min-width: 42px;\n  min-height: 42px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n#parent-content {\n  height: 100vh;\n  --overflow: hidden; }\n\n.backBtn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 10px 5px;\n  z-index: 9;\n  background-color: white;\n  width: 100%;\n  font-family: Open Sans SemiBold;\n  font-size: 13px;\n  /* margin-right: -19px; */\n  margin-top: 0px; }\n\n/*.backBtn::after{\r\n    content: \"\";\r\n    background-color: #ffffff;\r\n    position: absolute;\r\n    width: 100%;\r\n}*/\n\n.backText-label {\n  padding-left: 10px; }\n\n.backText {\n  color: #01b9ff; }\n\n.col-first {\n  border-right: 1px solid #ddd;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.ETFChild-Div {\n  overflow: auto; }\n\n.ETFChild-List {\n  background: white;\n  padding: 0px 4px; }\n\n.ETFChild-Item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: white;\n  color: #666;\n  font-size: 14px; }\n\n.ETFChild-Label {\n  white-space: normal;\n  font-size: 12px;\n  font-family: Open sans SemiBold;\n  color: #666666; }\n\n.company-list-inner-div {\n  overflow: scroll;\n  height: 100%; }\n\n.foceScrollOverflow {\n  --overflow:auto !important; }\n\n.company-list {\n  background-color: white;\n  padding: 0px; }\n\n.company-list-item {\n  --background: white;\n  margin: 5px 0px;\n  padding: 0px;\n  --min-height: 30px;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --inner-padding-end: 0px; }\n\n.company-label-outer-div {\n  border-radius: 30px;\n  --min-height: 30px;\n  background: #f49c2b;\n  width: 100%;\n  touch-action: unset !important; }\n\n.company-label {\n  margin: 0px;\n  padding: 5px 11px;\n  display: -webkit-box;\n  display: flex;\n  font-size: 12px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.index-outer-Div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.index-outer-Div .index-inner-Div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 100%; }\n\n.index-outer-Div .index-inner-Div .first-div {\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      width: 100%;\n      -webkit-box-align: center;\n              align-items: center; }\n\n.index-outer-Div .index-inner-Div .first-div .comp-Name {\n        width: 60vw;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        font-family: Open Sans SemiBold;\n        font-size: 11px; }\n\n.index-outer-Div .index-inner-Div .first-div .per-val {\n        background: white;\n        padding: 0 10px;\n        border-radius: 10px;\n        font-family: \"Open Sans SemiBold\";\n        font-size: 9px; }\n\n.index-outer-Div .index-inner-Div .second-Div {\n      padding-right: 5px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n              align-items: center; }\n\n.company-label-inner-span {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  width: 60%; }\n\n.swiper-container {\n  overflow: visible; }\n\n.tab-active {\n  background-color: #ffffff !important;\n  color: #05baff !important;\n  border-radius: 10px 10px 0 0 !important; }\n\n.navTabBtn {\n  background-color: #00b9ff;\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: white;\n  padding: 8px 3px;\n  margin-right: 1px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-family: Open Sans SemiBold; }\n\n.FINavTabBtn {\n  background-color: #2889ae;\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: white;\n  padding: 8px 3px;\n  border-radius: 10px;\n  font-size: 13px; }\n\n.ETFNavTabBtn {\n  background-color: #2889ae;\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: white;\n  padding: 8px 3px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-family: Open Sans SemiBold; }\n\n.index-header {\n  margin: 0px;\n  box-shadow: none;\n  background-color: white;\n  border-radius: 10px; }\n\n.active-left {\n  border-radius: 0px 10px 10px 10px; }\n\n.active-right {\n  border-radius: 10px 0px 10px 10px; }\n\n.slides-md {\n  --bullet-background-active: #ffffff;\n  --bullet-background: #666; }\n\n.slides-ios {\n  --bullet-background-active: #ffffff;\n  --bullet-background: #666; }\n\n.stocks-card {\n  border-radius: 10px;\n  background-color: white;\n  margin: 0px;\n  box-shadow: none; }\n\n.stock-card-content {\n  padding: 0px; }\n\n.stock-header {\n  padding: 3px 15px 0px 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.stock-span {\n  color: #00b9ff;\n  font-size: 12px;\n  font-family: Open Sans Semibold; }\n\n.image-div {\n  margin: 0px; }\n\n.image {\n  height: 100px;\n  width: 120px; }\n\n.selected-stock-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0px 0px 0px 10px; }\n\n.selected-stock-score {\n  text-align: center;\n  color: green;\n  font-size: 30px;\n  font-family: Open Sans Extrabold; }\n\n.selected-stock-comp {\n  color: green;\n  font-size: 9px;\n  text-align: center;\n  font-family: Open Sans Bold; }\n\n.slider-div {\n  width: 100%; }\n\n.title-card {\n  background-color: white;\n  box-shadow: none;\n  margin: 3px 0px 0px 0px;\n  border-radius: 10px; }\n\n.title-card-content {\n  padding: 1px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.title-text {\n  padding: 4px 2px; }\n\n.title-p {\n  color: #00b9ff;\n  margin-bottom: 0px;\n  font-size: 13px;\n  font-family: Open Sans Semibold; }\n\n.subIndex-card-content {\n  padding: 10px 10px 10px 20px; }\n\n.subIndex-div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.subIndex-circle {\n  background-color: #2e4c99;\n  height: 40px;\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 12px;\n  font-family: Open Sans Semibold; }\n\n.SubIndex-header-content {\n  margin-left: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: left;\n  width: 100%;\n  font-size: 12px;\n  font-family: Omnes;\n  color: #888888; }\n\n.subIndex-header-title {\n  font-size: 12px;\n  color: #888888;\n  font-family: Omnes; }\n\n.subIndex-header-subtitle {\n  margin-top: 5px;\n  font-size: 12px;\n  color: #666666;\n  white-space: normal;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-height: 1.1;\n  -webkit-box-orient: vertical;\n  font-family: Open Sans Semibold; }\n\n.subindex-icon {\n  height: 40px;\n  width: 40px; }\n\n.stockCompList-card {\n  background-color: white;\n  margin: 3px 0px 0px 0px;\n  border-radius: 10px 10px 0 0;\n  box-shadow: none; }\n\n.stockcomplist-card-content {\n  padding: 0px;\n  display: -webkit-box;\n  display: flex;\n  height: calc(100vh - 411px) !important;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%; }\n\n.NavTabList {\n  list-style-type: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0px;\n  margin: 3px 0px 0px 0px; }\n\n.index-header-card-content {\n  padding: 10px 10px 10px 20px; }\n\n.index-header-card-div {\n  display: -webkit-box;\n  display: flex; }\n\n.index-header-circle {\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background-color: #2e4c99; }\n\n.Btn-inner-div {\n  margin-left: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: left;\n  width: 100%; }\n\n.company-card {\n  margin: 3px 0px 0px 0px;\n  box-shadow: none;\n  background-color: white;\n  border-radius: 10px 10px 0px 0px; }\n\n.company-card-content {\n  padding: 0px;\n  height: calc(100vh - 399px); }\n\n.stock-collapse {\n  display: none; }\n\n.Stockcard-extend {\n  height: calc(100vh - 361px) !important; }\n\n.tab2color {\n  background-color: #3098cb;\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: white;\n  padding: 8px 3px;\n  margin-right: 1px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-family: Open Sans SemiBold; }\n\n.companycard-extend {\n  height: calc(100vh - 259px) !important; }\n\n.stockicon-active {\n  --color: #05baff; }\n\n.s-no {\n  padding-right: 5px;\n  min-width: 28px;\n  display: inline-block;\n  font-family: Open Sans SemiBold;\n  font-size: 11px; }\n\n.ticker-data {\n  font-family: Open Sans Bold;\n  font-size: 11px; }\n\n.comp-sel {\n  background: #00b9ff !important;\n  color: white !important; }\n\n.searchItem {\n  --padding-start:0px\r\n; }\n\n.Filter_Div {\n  position: absolute;\n  height: 100%;\n  z-index: 999;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: rgba(66, 65, 65, 0.8); }\n\n.Filter_Div ion-list {\n    bottom: 0;\n    left: 0;\n    right: 0;\n    position: inherit;\n    margin: 0  15px;\n    border-radius: 15px 15px 0 0;\n    background: #ffffff;\n    padding: 15px; }\n\n.Filter_Div ion-list div {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n              justify-content: space-between; }\n\n.Filter_Div ion-list div ion-label {\n        color: #666666;\n        font-size: 15px;\n        font-family: Open Sans SemiBold; }\n\n.Filter_Div ion-list div ion-icon {\n        color: #33529f; }\n\n.Filter_Div ion-list div .sortCancelBtn {\n        max-height: 20px;\n        font-size: 14px;\n        --padding-end: 5px;\n        font-family: Open Sans SemiBold; }\n\n.Filter_Div ion-list hr {\n      border-top: 1px solid #666666; }\n\n.Filter_Div .filterTypeBtn {\n    --color: #000000;\n    --padding-start: 5px;\n    --padding-end: 5px;\n    font-weight: normal;\n    font-size: 14px;\n    font-family: Open Sans Regular; }\n\n.Filter_Div .filterTypeBtn #filterLabel {\n      text-align: left;\n      width: 100%; }\n\n.Filter_Div .filterTypeBtn #Filtertype {\n      font-size: 12px; }\n\n.Filter_Div .filterTypeBtn ion-icon {\n      font-size: 20px; }\n\n.Filter_Div .filterTypeBtn .filterTypeInnerSpan {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-align: center;\n              align-items: center; }\n\n.activeSort {\n  --background: linear-gradient(90deg, #00b9ff, #233771) !important;\n  --color: #ffffff !important; }\n\n.alertdayspan {\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 25px;\n  width: 25px;\n  color: #000000; }\n\n.dayActive {\n  background: #00b9ff !important;\n  color: #ffffff !important;\n  font-weight: 500; }\n\n.stock_companycard-extend .ios .stockCompList-card {\n  height: calc(95vh - 410px) !important; }\n\n.pager_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px 0px;\n  background: #d3d8dc; }\n\n.ios .pager_div {\n  height: 50px;\n  padding-top: 12px; }\n\n.dot0p {\n  margin: 0px 10px 0px 0px;\n  font-size: 13px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: white; }\n\n.dot1P {\n  margin: 0px;\n  font-size: 13px;\n  width: 12px;\n  height: 12px;\n  background-color: #909090;\n  border-radius: 50%; }\n\n.image0 {\n  height: 129px;\n  width: 171px;\n  padding: 30px; }\n\n.ionic-selectable-item {\n  --padding-end:16px !important; }\n\n.arrow {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.arrow span {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-bottom: 3px solid #d3d8dc;\n  border-right: 3px solid #d3d8dc;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  margin: -10px;\n  -webkit-animation: animate 2s infinite;\n          animation: animate 2s infinite; }\n\n.arrow span:nth-child(2) {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n\n.arrow span:nth-child(3) {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n\n@-webkit-keyframes animate {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotate(45deg) translate(-5px, -5px);\n            transform: rotate(45deg) translate(-5px, -5px); }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate(45deg) translate(5px, 5px);\n            transform: rotate(45deg) translate(5px, 5px); } }\n\n@keyframes animate {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotate(45deg) translate(-5px, -5px);\n            transform: rotate(45deg) translate(-5px, -5px); }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate(45deg) translate(5px, 5px);\n            transform: rotate(45deg) translate(5px, 5px); } }\n\n.selGICS {\n  color: #25c3ff; }\n\n.selectIndex {\n  --background: #05baff !important;\n  color: #ffffff !important; }\n\n.nav-tab-item:focus {\n  --background: #05baff !important;\n  color: #ffffff !important; }\n\n.selectIndexLabel {\n  color: #ffffff !important; }\n\n.selectedIndexMed {\n  color: #ffffff !important;\n  background-color: #05baff !important;\n  margin-left: -1px !important; }\n\n.selectedIndexLabel {\n  color: white !important; }\n\n.indName {\n  max-width: 32vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  vertical-align: middle; }\n\n/* MEDIA */\n\n@media (max-width: 340px) and (min-width: 310px) {\n  .nav-tab li a {\n    font-size: 10px; } }\n\n@media (max-width: 310px) and (min-width: 280px) {\n  .nav-tab li a {\n    font-size: 9px; } }\n\n@media (max-width: 500px) and (min-width: 420px) {\n  .nav-tab {\n    margin: 0px 5px; } }\n\n@media (min-width: 768px) {\n  .nav-tab {\n    margin: 0px 20px !important; } }\n\n@media (min-width: 500px) {\n  .nav-tab {\n    margin: 0px 12px; } }\n\n::-webkit-scrollbar {\n  display: none; }\n\n@media screen and (orientation: landscape) {\n  #parent-content {\n    --overflow: auto; }\n  .ios .stock_companycard-extend {\n    height: 300px !important; }\n  .ios .Stockcard-extend {\n    height: 300px !important; }\n  .ios .Index_companycard-extend {\n    height: 300px !important; }\n  .Index_companycard-extend {\n    height: 300px !important; }\n  .Stockcard-extend {\n    height: 300px !important; }\n  .companycard-extend {\n    height: 300px !important; }\n  .ios .companycard-extend {\n    height: 300px !important; }\n  .overflowOnlyLandscape {\n    --overflow: auto; }\n  .stockCompList-card {\n    height: 300px !important; }\n  .child-card-content {\n    height: 300px !important; }\n  .ios .child-card-content {\n    height: 300px !important; }\n  .index-loader {\n    height: 300px !important; }\n  .nameExtend {\n    width: 350px !important; }\n  .company-card-content {\n    height: 300px !important; }\n  .stock-header {\n    padding: 5px 12px 0px 12px !important; }\n  .stockcomplist-card-content {\n    height: 300px !important; } }\n\n.Banner_HomeChartcontainer svg {\n  height: 123px; }\n\n.ipad_Logo {\n  height: 60px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.avatar {\n  border-radius: 50%;\n  padding: 10px;\n  border: 2px solid white;\n  width: 45px;\n  height: 45px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcUHJvamVjdHNcXE5BQWxwaGFNb2JpbGUvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFJakI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYSxFQUFBOztBQUdqQjtFQUVJLDhCQUF1QixFQUFBOztBQUkzQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLG9CQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBYztFQUNkLHFCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFhO0VBQ2Isa0JBQWEsRUFBQTs7QUFHakI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWM7RUFDZCxxQkFBaUI7RUFDakIsWUFBUTtFQUNSLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFlO0VBQ2Ysc0JBQWU7RUFDZix3QkFBb0I7RUFDcEIsbUJBQWE7RUFDYixxQkFBZ0I7RUFDaEIsa0JBQWEsRUFBQTs7QUFJakI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUtuQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFPO1VBQVAsT0FBTyxFQUFBOztBQUVYO0VBQ0ksV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtREFBMkM7VUFBM0Ms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LHdCQUF3QixFQUFBO0VBRTVCO0lBQ0ksdUJBQXVCLEVBQUE7RUFLM0I7SUFDSSx3QkFBd0IsRUFBQTtFQUU1QjtJQUNJLHFDQUFxQyxFQUFBO0VBR3pDO0lBQ0ksd0JBQXdCLEVBQUEsRUFDM0I7O0FBSUw7RUFDSSxhQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmU0Yzk5O1xyXG4gICBcclxufVxyXG5cclxuLnRvb2xiYXItYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLUxvZ297XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNwYXJlbnQtY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkM2Q4ZGM7XHJcblxyXG59XHJcblxyXG4uc2VhcmNoLU91dGVyLURpdntcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoQnRue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDsgXHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7ICBcclxuICAgIC0tYmFja2dyb3VuZDogIzAwYWVlZjtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaElucHV0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLS1jb2xvcjojNjY2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoSXRlbXtcclxuICAgIC0tYm9yZGVyLXdpZHRoOjJweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiMzMzUyOWY7IFxyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTsgXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDI4cHg7XHJcblxyXG59XHJcblxyXG4uc2VhcmNoRGl2e1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2LXRhYntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDI1cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYtaXRlbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbi5uYXYtaXRlbTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjlmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgzcHgpIHJvdGF0ZVgoMi41ZGVnKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uaW5kZXgtbG9hZGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI1MXB4KTtcclxufVxyXG5cclxuLmxvYWRlcntcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4ubmF2LXRhYi1pbmRleHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLy8gcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggNHB4O1xyXG59XHJcblxyXG4ubmF2LXRhYi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICBjb2xvcjogIzY2NjtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxufVxyXG5cclxuLm5hdi10YWItY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uRVRGbmF2LWl0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLkVURm5hdi1pdGVtOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3OWI0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDNweCkgcm90YXRlWCgyLjVkZWcpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5uYXYtdGFiIGxpIGF7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDtcclxufVxyXG5cclxuLm5hdi10YWIgLm5hdi1pdGVtLmFjdGl2ZTo6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAvLyB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubmF2LXRhYiAuRVRGbmF2LWl0ZW0uYWN0aXZlOjphZnRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgIC8vIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcblxyXG4ubmF2LXRhYiAubmF2LWl0ZW0uYWN0aXZlIGF7XHJcbiAgICBjb2xvcjojMDFiOWZmO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm5hdi10YWIgLkVURm5hdi1pdGVtLmFjdGl2ZSBhe1xyXG4gICAgY29sb3I6IzAxYjlmZjtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5uYXYtdGFiIC5uYXYtaXRlbS5hY3RpdmV7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubmF2LXRhYiAuRVRGbmF2LWl0ZW0uYWN0aXZle1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnRhYi1jb250ZW50e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgei1pbmRleDogMTAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGFiLXBhbmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDEycHggMTJweFxyXG59XHJcblxyXG4udGFiLWNvbnRlbnQgIC50YWItcGFuZS5hY3RpdmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSBcclxuXHJcbi5hY2NvcmRpb257XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAxMnB4IDEycHg7XHJcbn1cclxuXHJcbi5jYXJkOmZpcnN0LWNoaWxkIHtcclxuYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVye1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxufVxyXG5cclxuLmFjY29yZGlvbi1zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5wYXJlbnQtY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMTJweCAxMnB4O1xyXG5cclxufVxyXG5cclxuLmhlYWRlci1jaXJjbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5OyBcclxuICAgIGhlaWdodDogNDBweDsgXHJcbiAgICB3aWR0aDogNDBweDsgXHJcbiAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNGM5OTtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAvKiBmb250LWZhbWlseTogb3BlbiBzYW5zOyAqL1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4vLyAgIHBhZGRpbmc6IDVweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIG1heC13aWR0aDogNDhweDtcclxuLy8gICBtYXgtaGVpZ2h0OiA0OHB4O1xyXG4vLyAgIG1pbi13aWR0aDogNDhweDtcclxuLy8gICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbi8vICAgbWFyZ2luLXRvcDogMHB4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIC8vICAgIHZpc2liaWxpdHk6aGlkZGVuO1xyXG59XHJcblxyXG4ucGFyZW50LWNhcmQtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1ib3R0b206IDEuM3B4IHNvbGlkICNkNGQ3ZGI7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci10aXRsZXtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLmhlYWRlci1idG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1jb2xvcjogI2RmZGZkZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNkZmRmZGY7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmhlYWRlci10aXRsZS1kaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZS1zcGFue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmhlYWRlci1jb21wLXNwYW57XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG4ucGFyZW50LWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmluZGV4LWNhcmR7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGhlaWdodDogY2FsYyggMTAwdmggLSAzMzBweCApO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY29sbGFwc2V7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2hpbGQtY2FyZHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IGNhbGMoIDEwMHZoIC0gMzMwcHggKTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hpbGQtY2FyZC1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOTlweCk7IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sbGFwc2UtcGFyZW50e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRlc3Qxe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvcnQtY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnNvcnQtY2FyZC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxLjNweCBzb2xpZCAjZDRkN2RiO1xyXG4gICAgYm9yZGVyLXRvcDogMS4zcHggc29saWQgI2Q0ZDdkYjtcclxufVxyXG5cclxuLnNvcnQtaGVhZGVyLWJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1jb2xvcjogIzY2NjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM2NjY7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcclxufVxyXG5cclxuLnNvcnQtaGVhZGVyLXRpdGxlLWRpdntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc29ydC1oZWFkZXItdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uY29sbGFwc2Utc29ydHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50b3RhbFNjb3Jle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5pbmRleC1jaXJjbGV7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllODFjO1xyXG4gICAgY29sb3I6ICNmZjk1MDM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBzYW5zIFNlbWlib2xkO1xyXG4gICAgbWF4LXdpZHRoOiA0MnB4O1xyXG4gICAgbWF4LWhlaWdodDogNDJweDtcclxuICAgIG1pbi13aWR0aDogNDJweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQycHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4jcGFyZW50LWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJhY2tCdG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCA1cHg7XHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IC0xOXB4OyAqL1xyXG4gICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBcclxufVxyXG4vKi5iYWNrQnRuOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0qL1xyXG5cclxuLmJhY2tUZXh0LWxhYmVse1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5iYWNrVGV4dHtcclxuICAgIGNvbG9yOiAjMDFiOWZmO1xyXG59XHJcbi5jb2wtZmlyc3R7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLkVURkNoaWxkLURpdntcclxuICAgIC8vIHBhZGRpbmc6IDMycHggMTBweCAwcHggMTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uRVRGQ2hpbGQtTGlzdHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4IDRweFxyXG59XHJcblxyXG4uRVRGQ2hpbGQtSXRlbXtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uRVRGQ2hpbGQtTGFiZWx7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gc2FucyBTZW1pQm9sZDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG4vLyAuY29tcGFueS1jYXJkLWNvbnRlbnR7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIHBhZGRpbmc6IDBweDtcclxuLy8gfVxyXG5cclxuLmNvbXBhbnktbGlzdC1pbm5lci1kaXZ7XHJcbiAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MTBweCk7XHJcbiAgICAvLyBvdmVyZmxvdzogYXV0bztcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uZm9jZVNjcm9sbE92ZXJmbG93e1xyXG4gICAgLS1vdmVyZmxvdzphdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21wYW55LWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmNvbXBhbnktbGlzdC1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC0tbWluLWhlaWdodDogMzBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbn1cclxuXHJcbi5jb21wYW55LWxhYmVsLW91dGVyLWRpdntcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ0LCAxNTYsIDQzKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG91Y2gtYWN0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29tcGFueS1sYWJlbFxyXG57XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMXB4OyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmluZGV4LW91dGVyLURpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuaW5kZXgtaW5uZXItRGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmZpcnN0LWRpdntcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5jb21wLU5hbWV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjB2dztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGVyLXZhbHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBTZW1pQm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWNvbmQtRGl2e1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb21wYW55LWxhYmVsLWlubmVyLXNwYW57XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLnRhYi1hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzA1YmFmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2VGFiQnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjlmZjsgIFxyXG4gICAgZmxleDogMTsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHggM3B4OyAgICAgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDsgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbn1cclxuXHJcbi5GSU5hdlRhYkJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODg5YWU7ICBcclxuICAgIGZsZXg6IDE7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDNweDsgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uRVRGTmF2VGFiQnRuXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODg5YWU7ICBcclxuICAgIGZsZXg6IDE7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDNweDsgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG59XHJcblxyXG5cclxuXHJcbi5pbmRleC1oZWFkZXJ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUtbGVmdHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLmFjdGl2ZS1yaWdodHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLnNsaWRlcy1tZHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmZmZmZmO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzY2NjtcclxufVxyXG5cclxuLnNsaWRlcy1pb3N7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2ZmZmZmZjtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICM2NjY7XHJcbn1cclxuLnN0b2Nrcy1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxuICAgIG1hcmdpbjogMHB4OyBcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5zdG9jay1jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zdG9jay1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAzcHggMTVweCAwcHggMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc3RvY2stc3BhbntcclxuICAgIGNvbG9yOiMwMGI5ZmY7IFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pYm9sZDtcclxufVxyXG5cclxuLmltYWdlLWRpdntcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtc3RvY2stZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtc3RvY2stc2NvcmV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogZ3JlZW47IFxyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBFeHRyYWJvbGQ7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1zdG9jay1jb21we1xyXG4gICAgY29sb3I6IGdyZWVuOyBcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBCb2xkO1xyXG59XHJcblxyXG4uc2xpZGVyLWRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGUtY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgICBcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7ICBcclxuICAgIG1hcmdpbjogM3B4IDBweCAwcHggMHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnRpdGxlLWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDFweDsgXHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUtdGV4dHtcclxuICAgIHBhZGRpbmc6IDRweCAycHg7XHJcbn1cclxuXHJcbi50aXRsZS1we1xyXG4gICAgY29sb3I6ICMwMGI5ZmY7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pYm9sZDtcclxufVxyXG5cclxuLnN1YkluZGV4LWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5zdWJJbmRleC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViSW5kZXgtY2lyY2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNGM5OTsgXHJcbiAgICBoZWlnaHQ6IDQwcHg7IFxyXG4gICAgd2lkdGg6IDQwcHg7IFxyXG4gICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgbWluLWhlaWdodDogNDBweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pYm9sZDtcclxufVxyXG5cclxuLlN1YkluZGV4LWhlYWRlci1jb250ZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogT21uZXM7XHJcbiAgICBjb2xvcjogIzg4ODg4ODsgXHJcbn1cclxuXHJcbi5zdWJJbmRleC1oZWFkZXItdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgY29sb3I6ICM4ODg4ODg7IFxyXG4gICAgZm9udC1mYW1pbHk6IE9tbmVzO1xyXG59XHJcblxyXG4uc3ViSW5kZXgtaGVhZGVyLXN1YnRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7IFxyXG4gICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgIGNvbG9yOiAjNjY2NjY2OyBcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IFxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7IFxyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyOyBcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7IFxyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaWJvbGQ7XHJcbn1cclxuXHJcbi5zdWJpbmRleC1pY29ue1xyXG4gICAgaGVpZ2h0OiA0MHB4OyBcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4uc3RvY2tDb21wTGlzdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDExcHgpOyBcclxuICAgIG1hcmdpbjogM3B4IDBweCAwcHggMHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7IFxyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnN0b2NrY29tcGxpc3QtY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQxMXB4KSAhaW1wb3J0YW50OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLk5hdlRhYkxpc3R7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgcGFkZGluZzogMHB4OyBcclxuICAgIG1hcmdpbjogM3B4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uaW5kZXgtaGVhZGVyLWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5pbmRleC1oZWFkZXItY2FyZC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW5kZXgtaGVhZGVyLWNpcmNsZXtcclxuICAgIG1pbi13aWR0aDogNDBweDsgXHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4OyBcclxuICAgIGhlaWdodDogNDBweDsgXHJcbiAgICB3aWR0aDo0MHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5O1xyXG59XHJcblxyXG4uQnRuLWlubmVyLWRpdntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb21wYW55LWNhcmR7XHJcbiAgICBtYXJnaW46IDNweCAwcHggMHB4IDBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uY29tcGFueS1jYXJkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAwcHg7IFxyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzk5cHgpO1xyXG59XHJcblxyXG4uc3RvY2stY29sbGFwc2V7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uU3RvY2tjYXJkLWV4dGVuZHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM2MXB4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFiMmNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwOThjYjtcclxuICAgIGZsZXg6IDE7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDNweDsgICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7ICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG59XHJcbi5jb21wYW55Y2FyZC1leHRlbmR7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTlweCkgIWltcG9ydGFudDtcclxuICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDI2MXB4KSAhaW1wb3J0YW50O1xyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcxcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdG9ja2ljb24tYWN0aXZle1xyXG4gICAgLS1jb2xvcjogIzA1YmFmZjtcclxufVxyXG4ucy1ub3tcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIG1pbi13aWR0aDogMjhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi50aWNrZXItZGF0YXtcclxuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIEJvbGQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5jb21wLXNlbHtcclxuICAgIGJhY2tncm91bmQ6ICMwMGI5ZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoSXRlbXtcclxuICAgIC0tcGFkZGluZy1zdGFydDowcHhcclxufVxyXG4uSW5kZXhfY29tcGFueWNhcmQtZXh0ZW5ke1xyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjYwcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5GaWx0ZXJfRGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNjUsIDY1LCAwLjgpO1xyXG4gIFxyXG4gIGlvbi1saXN0e1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiBwb3NpdGlvbjogaW5oZXJpdDtcclxuIG1hcmdpbjogMCAgMTVweDtcclxuIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XHJcbiBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gcGFkZGluZzogMTVweDtcclxuXHJcbiBkaXZ7XHJcbiAgICAvLyAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICMzMzUyOWY7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvcnRDYW5jZWxCdG57XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XHJcbiAgICB9XHJcbiB9XHJcblxyXG4gaHJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2NjY2NjtcclxuIH1cclxuICB9XHJcblxyXG4gIC5maWx0ZXJUeXBlQnRue1xyXG4gICAgLS1jb2xvcjogIzAwMDAwMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgUmVndWxhcjtcclxuXHJcbiAgICAjZmlsdGVyTGFiZWx7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjRmlsdGVydHlwZXtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWx0ZXJUeXBlSW5uZXJTcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbn1cclxuXHJcbi5hY3RpdmVTb3J0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGI5ZmYsICMyMzM3NzEpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGVydGRheXNwYW57XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGhlaWdodDogMjVweDsgXHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uZGF5QWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogIzAwYjlmZiFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uc3RvY2tfY29tcGFueWNhcmQtZXh0ZW5ke1xyXG4gLy8gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNjBweCkgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyAuaW9zIC5jb21wYW55LWxpc3QtaW5uZXItZGl2e1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzkwcHgpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IGNhbGMoOTV2aCAtIDQxNXB4KSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4uaW9zIC5zdG9ja0NvbXBMaXN0LWNhcmR7XHJcbiAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MDBweCkgIWltcG9ydGFudDtcclxuICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDM4MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDk1dmggLSA0MTBweCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLmlvcyAuY2hpbGQtY2FyZC1jb250ZW50e1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDAxcHgpICFpbXBvcnRhbnQ7XHJcbi8vICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzODFweCkgIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogY2FsYyg5NXZoIC0gNDEycHgpICFpbXBvcnRhbnRcclxuLy8gfVxyXG4vLyAuaW9zIC5zdG9ja19jb21wYW55Y2FyZC1leHRlbmR7XHJcbi8vICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMzlweCkgIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogY2FsYyg5NXZoIC0gMjcwcHgpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5pb3MgLkluZGV4X2NvbXBhbnljYXJkLWV4dGVuZHtcclxuLy8gICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDIzOXB4KSAhaW1wb3J0YW50O1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjYxcHgpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IGNhbGMoOTV2aCAtIDI2NnB4KSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaW9zIC5TdG9ja2NhcmQtZXh0ZW5ke1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjMxcHgpICFpbXBvcnRhbnQ7XHJcbi8vICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMjlweCkgIWltcG9ydGFudDtcclxuLy8gICAgIGhlaWdodDogY2FsYyg5NXZoIC0gMjYwcHgpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5pb3MgLmNvbXBhbnktY2FyZC1jb250ZW50e1xyXG4vLyAgICAgaGVpZ2h0OiBjYWxjKDk1dmggLSA0MTBweCkgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyAuaW9zIC5jb21wYW55Y2FyZC1leHRlbmR7XHJcbi8vICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTFweCkgIWltcG9ydGFudDtcclxuLy8gICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDIzMXB4KSAhaW1wb3J0YW50O1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjMwcHgpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IGNhbGMoOTV2aCAtIDI2MnB4KSAhaW1wb3J0YW50O1xyXG4vLyAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcxcHgpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5pb3MgLmNvbXBhbnktbGlzdC1pbm5lci1kaXZ7XHJcbi8vICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzODBweCkgIWltcG9ydGFudDtcclxufVxyXG4ucGFnZXJfZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2QzZDhkYztcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmlvcyAucGFnZXJfZGl2e1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5kb3QwcHtcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDsgXHJcbiAgICBmb250LXNpemU6IDEzcHg7IFxyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZG90MVB7XHJcbiAgICBtYXJnaW46IDBweDsgXHJcbiAgICBmb250LXNpemU6IDEzcHg7IFxyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwOTA5MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmltYWdlMHtcclxuICAgIGhlaWdodDogMTI5cHg7XHJcbiAgICB3aWR0aDogMTcxcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uaW9uaWMtc2VsZWN0YWJsZS1pdGVte1xyXG4gICAgLS1wYWRkaW5nLWVuZDoxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcnJvd3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG4uYXJyb3cgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2QzZDhkYztcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNkM2Q4ZGM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBtYXJnaW46IC0xMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG4uYXJyb3cgc3BhbjpudGgtY2hpbGQoMil7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjJzO1xyXG59XHJcblxyXG4uYXJyb3cgc3BhbjpudGgtY2hpbGQoMyl7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gICAgMCV7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01cHgsLTVweCk7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCw1cHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VsR0lDU3tcclxuICAgIGNvbG9yOiAjMjVjM2ZmO1xyXG59XHJcblxyXG4uc2VsZWN0SW5kZXh7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNWJhZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtdGFiLWl0ZW06Zm9jdXN7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNWJhZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3RJbmRleExhYmVse1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW5kZXhNZWR7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YmFmZiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW5kZXhMYWJlbHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5kTmFtZXtcclxuICAgIG1heC13aWR0aDogMzJ2dzs7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4vKiBNRURJQSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMzQwcHgpIGFuZCAobWluLXdpZHRoOiAzMTBweCkge1xyXG4gICAgLm5hdi10YWIgbGkgYXtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMxMHB4KSBhbmQgKG1pbi13aWR0aDogMjgwcHgpIHtcclxuICAgIC5uYXYtdGFiIGxpIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSBhbmQgKG1pbi13aWR0aDogNDIwcHgpIHtcclxuLm5hdi10YWIge1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuLm5hdi10YWIge1xyXG4gICAgbWFyZ2luOiAwcHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgLm5hdi10YWIge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDEycHg7XHJcbiAgICAgICAgfVxyXG59XHJcbi8vIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxuLy8ge1xyXG4vLyBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xyXG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkOGRjICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIDo6LXdlYmtpdC1zY3JvbGxiYXJcclxuLy8ge1xyXG4vLyB3aWR0aDogNXB4IWltcG9ydGFudDtcclxuLy8gYmFja2dyb3VuZC1jb2xvcjogI2QzZDhkYyAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXHJcbi8vIHtcclxuLy8gYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDtcclxuLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwYjlmZiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkge1xyXG4gICAgI3BhcmVudC1jb250ZW50e1xyXG4gICAgICAgIC0tb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pb3MgLnN0b2NrX2NvbXBhbnljYXJkLWV4dGVuZHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaW9zIC5TdG9ja2NhcmQtZXh0ZW5ke1xyXG4gICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pb3MgLkluZGV4X2NvbXBhbnljYXJkLWV4dGVuZHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuSW5kZXhfY29tcGFueWNhcmQtZXh0ZW5ke1xyXG4gICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5TdG9ja2NhcmQtZXh0ZW5ke1xyXG4gICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jb21wYW55Y2FyZC1leHRlbmR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmlvcyAuY29tcGFueWNhcmQtZXh0ZW5ke1xyXG4gICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5vdmVyZmxvd09ubHlMYW5kc2NhcGV7XHJcbiAgICAgICAgLS1vdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC5zdG9ja0NvbXBMaXN0LWNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNoaWxkLWNhcmQtY29udGVudHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaW9zIC5jaGlsZC1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmluZGV4LWxvYWRlcntcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmFtZUV4dGVuZHtcclxuICAgICAgICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC8vIC5jb21wYW55LWxpc3QtaW5uZXItZGl2e1xyXG4gICAgICAgIC8vIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIC8vIH1cclxuICAgIC5jb21wYW55LWNhcmQtY29udGVudHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc3RvY2staGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4IDBweCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0b2NrY29tcGxpc3QtY2FyZC1jb250ZW50e1xyXG4gICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuIH1cclxuXHJcbi8vICBUb29sIFN0eWxpbmdcclxuLkJhbm5lcl9Ib21lQ2hhcnRjb250YWluZXIgc3Zne1xyXG4gICAgaGVpZ2h0OjEyM3B4O1xyXG4gIH1cclxuXHJcbi5pcGFkX0xvZ297XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmF2YXRhcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4iLCIudG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzJlNGM5OTsgfVxuXG4udG9vbGJhci1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cblxuLmhlYWRlci1Mb2dvIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuI3BhcmVudC1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZDNkOGRjOyB9XG5cbi5zZWFyY2gtT3V0ZXItRGl2IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7IH1cblxuLnNlYXJjaEJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czoxNXB4O1xuICB3aWR0aDogNzVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhZWVmO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7IH1cblxuLnNlYXJjaElucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1jb2xvcjojNjY2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnNlYXJjaEl0ZW0ge1xuICAtLWJvcmRlci13aWR0aDoycHg7XG4gIC0tYm9yZGVyLWNvbG9yOiMzMzUyOWY7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAtLW1pbi1oZWlnaHQ6IDI4cHg7IH1cblxuLnNlYXJjaERpdiB7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIHBhZGRpbmctdG9wOiAyJTsgfVxuXG4ubmF2LXRhYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDBweCAyNXB4IDBweDtcbiAgbWFyZ2luOiAwcHg7IH1cblxuLm5hdi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTtcbiAgZmxleDogMTsgfVxuXG4ubmF2LWl0ZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjlmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDNweCkgcm90YXRlWCgyLjVkZWcpO1xuICB6LWluZGV4OiAtMTsgfVxuXG4uaW5kZXgtbG9hZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI1MXB4KTsgfVxuXG4ubG9hZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDsgfVxuXG4ubmF2LXRhYi1pbmRleCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAwcHggNHB4OyB9XG5cbi5uYXYtdGFiLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDVweCAwIDVweCAwOyB9XG5cbi5uYXYtdGFiLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDsgfVxuXG4uRVRGbmF2LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAwO1xuICBmbGV4OiAxOyB9XG5cbi5FVEZuYXYtaXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3OWI0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoM3B4KSByb3RhdGVYKDIuNWRlZyk7XG4gIHotaW5kZXg6IC0xOyB9XG5cbi5uYXYtdGFiIGxpIGEge1xuICBsaW5lLWhlaWdodDogMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDsgfVxuXG4ubmF2LXRhYiAubmF2LWl0ZW0uYWN0aXZlOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxuLm5hdi10YWIgLkVURm5hdi1pdGVtLmFjdGl2ZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XG5cbi5uYXYtdGFiIC5uYXYtaXRlbS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjMDFiOWZmO1xuICB6LWluZGV4OiAyOyB9XG5cbi5uYXYtdGFiIC5FVEZuYXYtaXRlbS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjMDFiOWZmO1xuICB6LWluZGV4OiAyOyB9XG5cbi5uYXYtdGFiIC5uYXYtaXRlbS5hY3RpdmUge1xuICB6LWluZGV4OiAyOyB9XG5cbi5uYXYtdGFiIC5FVEZuYXYtaXRlbS5hY3RpdmUge1xuICB6LWluZGV4OiAyOyB9XG5cbi50YWItY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICB6LWluZGV4OiAxMDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4udGFiLXBhbmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMTJweCAxMnB4OyB9XG5cbi50YWItY29udGVudCAudGFiLXBhbmUuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmFjY29yZGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMTJweCAxMnB4OyB9XG5cbi5jYXJkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDsgfVxuXG4uY2FyZC1oZWFkZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7IH1cblxuLmFjY29yZGlvbi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiA1MHB4OyB9XG5cbi5wYXJlbnQtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAxMnB4IDEycHg7IH1cblxuLmhlYWRlci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0Yzk5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4ucGFyZW50LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxLjNweCBzb2xpZCAjZDRkN2RiOyB9XG5cbi5jYXJkLWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzY2NjsgfVxuXG4uaGVhZGVyLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmY7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jb2xvcjogI2RmZGZkZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZGZkZmRmO1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIGhlaWdodDogYXV0bzsgfVxuXG4uaGVhZGVyLXRpdGxlLWRpdiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5oZWFkZXItdGl0bGUtc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG4uaGVhZGVyLWNvbXAtc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfVxuXG4ucGFyZW50LWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDsgfVxuXG4uaW5kZXgtY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IGNhbGMoIDEwMHZoIC0gMzMwcHgpO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4uY29sbGFwc2Uge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5jaGlsZC1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogY2FsYyggMTAwdmggLSAzMzBweCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5jaGlsZC1jYXJkLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzk5cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uY29sbGFwc2UtcGFyZW50IHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4udGVzdDEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5zb3J0LWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4OyB9XG5cbi5zb3J0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItYm90dG9tOiAxLjNweCBzb2xpZCAjZDRkN2RiO1xuICBib3JkZXItdG9wOiAxLjNweCBzb2xpZCAjZDRkN2RiOyB9XG5cbi5zb3J0LWhlYWRlci1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY29sb3I6ICM2NjY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzY2NjtcbiAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMHB4OyB9XG5cbi5zb3J0LWhlYWRlci10aXRsZS1kaXYge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4uc29ydC1oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNjY2O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4OyB9XG5cbi5jb2xsYXBzZS1zb3J0IHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4udG90YWxTY29yZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDsgfVxuXG4uaW5kZXgtY2lyY2xlIHtcbiAgY29sb3I6ICNmZjk1MDM7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIHNhbnMgU2VtaWJvbGQ7XG4gIG1heC13aWR0aDogNDJweDtcbiAgbWF4LWhlaWdodDogNDJweDtcbiAgbWluLXdpZHRoOiA0MnB4O1xuICBtaW4taGVpZ2h0OiA0MnB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cblxuI3BhcmVudC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLS1vdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5iYWNrQnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweDtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC8qIG1hcmdpbi1yaWdodDogLTE5cHg7ICovXG4gIG1hcmdpbi10b3A6IDBweDsgfVxuXG4vKi5iYWNrQnRuOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0qL1xuLmJhY2tUZXh0LWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG5cbi5iYWNrVGV4dCB7XG4gIGNvbG9yOiAjMDFiOWZmOyB9XG5cbi5jb2wtZmlyc3Qge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uRVRGQ2hpbGQtRGl2IHtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLkVURkNoaWxkLUxpc3Qge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4IDRweDsgfVxuXG4uRVRGQ2hpbGQtSXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE0cHg7IH1cblxuLkVURkNoaWxkLUxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogT3BlbiBzYW5zIFNlbWlCb2xkO1xuICBjb2xvcjogIzY2NjY2NjsgfVxuXG4uY29tcGFueS1saXN0LWlubmVyLWRpdiB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uZm9jZVNjcm9sbE92ZXJmbG93IHtcbiAgLS1vdmVyZmxvdzphdXRvICFpbXBvcnRhbnQ7IH1cblxuLmNvbXBhbnktbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwcHg7IH1cblxuLmNvbXBhbnktbGlzdC1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIC0tbWluLWhlaWdodDogMzBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7IH1cblxuLmNvbXBhbnktbGFiZWwtb3V0ZXItZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLS1taW4taGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjQ5YzJiO1xuICB3aWR0aDogMTAwJTtcbiAgdG91Y2gtYWN0aW9uOiB1bnNldCAhaW1wb3J0YW50OyB9XG5cbi5jb21wYW55LWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLmluZGV4LW91dGVyLURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmluZGV4LW91dGVyLURpdiAuaW5kZXgtaW5uZXItRGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuaW5kZXgtb3V0ZXItRGl2IC5pbmRleC1pbm5lci1EaXYgLmZpcnN0LWRpdiB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgLmluZGV4LW91dGVyLURpdiAuaW5kZXgtaW5uZXItRGl2IC5maXJzdC1kaXYgLmNvbXAtTmFtZSB7XG4gICAgICAgIHdpZHRoOiA2MHZ3O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4OyB9XG4gICAgICAuaW5kZXgtb3V0ZXItRGl2IC5pbmRleC1pbm5lci1EaXYgLmZpcnN0LWRpdiAucGVyLXZhbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBTZW1pQm9sZFwiO1xuICAgICAgICBmb250LXNpemU6IDlweDsgfVxuICAgIC5pbmRleC1vdXRlci1EaXYgLmluZGV4LWlubmVyLURpdiAuc2Vjb25kLURpdiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmNvbXBhbnktbGFiZWwtaW5uZXItc3BhbiB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNjAlOyB9XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cblxuLnRhYi1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDViYWZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDAgIWltcG9ydGFudDsgfVxuXG4ubmF2VGFiQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjlmZjtcbiAgZmxleDogMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkOyB9XG5cbi5GSU5hdlRhYkJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODg5YWU7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4OyB9XG5cbi5FVEZOYXZUYWJCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg4OWFlO1xuICBmbGV4OiAxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweCAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDsgfVxuXG4uaW5kZXgtaGVhZGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG5cbi5hY3RpdmUtbGVmdCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMTBweDsgfVxuXG4uYWN0aXZlLXJpZ2h0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMTBweCAxMHB4OyB9XG5cbi5zbGlkZXMtbWQge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2ZmZmZmZjtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogIzY2NjsgfVxuXG4uc2xpZGVzLWlvcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmZmZmZmO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjNjY2OyB9XG5cbi5zdG9ja3MtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDBweDtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG4uc3RvY2stY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4OyB9XG5cbi5zdG9jay1oZWFkZXIge1xuICBwYWRkaW5nOiAzcHggMTVweCAwcHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG5cbi5zdG9jay1zcGFuIHtcbiAgY29sb3I6ICMwMGI5ZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pYm9sZDsgfVxuXG4uaW1hZ2UtZGl2IHtcbiAgbWFyZ2luOiAwcHg7IH1cblxuLmltYWdlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEyMHB4OyB9XG5cbi5zZWxlY3RlZC1zdG9jay1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7IH1cblxuLnNlbGVjdGVkLXN0b2NrLXNjb3JlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBFeHRyYWJvbGQ7IH1cblxuLnNlbGVjdGVkLXN0b2NrLWNvbXAge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDsgfVxuXG4uc2xpZGVyLWRpdiB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi50aXRsZS1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogM3B4IDBweCAwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG5cbi50aXRsZS1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4udGl0bGUtdGV4dCB7XG4gIHBhZGRpbmc6IDRweCAycHg7IH1cblxuLnRpdGxlLXAge1xuICBjb2xvcjogIzAwYjlmZjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaWJvbGQ7IH1cblxuLnN1YkluZGV4LWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIwcHg7IH1cblxuLnN1YkluZGV4LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLnN1YkluZGV4LWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTRjOTk7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlib2xkOyB9XG5cbi5TdWJJbmRleC1oZWFkZXItY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogT21uZXM7XG4gIGNvbG9yOiAjODg4ODg4OyB9XG5cbi5zdWJJbmRleC1oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODg4ODg4O1xuICBmb250LWZhbWlseTogT21uZXM7IH1cblxuLnN1YkluZGV4LWhlYWRlci1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pYm9sZDsgfVxuXG4uc3ViaW5kZXgtaWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7IH1cblxuLnN0b2NrQ29tcExpc3QtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDNweCAwcHggMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG4uc3RvY2tjb21wbGlzdC1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQxMXB4KSAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5OYXZUYWJMaXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDNweCAwcHggMHB4IDBweDsgfVxuXG4uaW5kZXgtaGVhZGVyLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIwcHg7IH1cblxuLmluZGV4LWhlYWRlci1jYXJkLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLmluZGV4LWhlYWRlci1jaXJjbGUge1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlNGM5OTsgfVxuXG4uQnRuLWlubmVyLWRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTsgfVxuXG4uY29tcGFueS1jYXJkIHtcbiAgbWFyZ2luOiAzcHggMHB4IDBweCAwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDsgfVxuXG4uY29tcGFueS1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM5OXB4KTsgfVxuXG4uc3RvY2stY29sbGFwc2Uge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5TdG9ja2NhcmQtZXh0ZW5kIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzYxcHgpICFpbXBvcnRhbnQ7IH1cblxuLnRhYjJjb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDk4Y2I7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDsgfVxuXG4uY29tcGFueWNhcmQtZXh0ZW5kIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjU5cHgpICFpbXBvcnRhbnQ7IH1cblxuLnN0b2NraWNvbi1hY3RpdmUge1xuICAtLWNvbG9yOiAjMDViYWZmOyB9XG5cbi5zLW5vIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtaW4td2lkdGg6IDI4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBTZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxMXB4OyB9XG5cbi50aWNrZXItZGF0YSB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgQm9sZDtcbiAgZm9udC1zaXplOiAxMXB4OyB9XG5cbi5jb21wLXNlbCB7XG4gIGJhY2tncm91bmQ6ICMwMGI5ZmYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IH1cblxuLnNlYXJjaEl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6MHB4XHJcbjsgfVxuXG4uRmlsdGVyX0RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA2NSwgNjUsIDAuOCk7IH1cbiAgLkZpbHRlcl9EaXYgaW9uLWxpc3Qge1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMCAgMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTVweDsgfVxuICAgIC5GaWx0ZXJfRGl2IGlvbi1saXN0IGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiAgICAgIC5GaWx0ZXJfRGl2IGlvbi1saXN0IGRpdiBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIFNlbWlCb2xkOyB9XG4gICAgICAuRmlsdGVyX0RpdiBpb24tbGlzdCBkaXYgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogIzMzNTI5ZjsgfVxuICAgICAgLkZpbHRlcl9EaXYgaW9uLWxpc3QgZGl2IC5zb3J0Q2FuY2VsQnRuIHtcbiAgICAgICAgbWF4LWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgU2VtaUJvbGQ7IH1cbiAgICAuRmlsdGVyX0RpdiBpb24tbGlzdCBociB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2NjY2NjsgfVxuICAuRmlsdGVyX0RpdiAuZmlsdGVyVHlwZUJ0biB7XG4gICAgLS1jb2xvcjogIzAwMDAwMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBSZWd1bGFyOyB9XG4gICAgLkZpbHRlcl9EaXYgLmZpbHRlclR5cGVCdG4gI2ZpbHRlckxhYmVsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5GaWx0ZXJfRGl2IC5maWx0ZXJUeXBlQnRuICNGaWx0ZXJ0eXBlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxuICAgIC5GaWx0ZXJfRGl2IC5maWx0ZXJUeXBlQnRuIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxuICAgIC5GaWx0ZXJfRGl2IC5maWx0ZXJUeXBlQnRuIC5maWx0ZXJUeXBlSW5uZXJTcGFuIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uYWN0aXZlU29ydCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBiOWZmLCAjMjMzNzcxKSAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IH1cblxuLmFsZXJ0ZGF5c3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGNvbG9yOiAjMDAwMDAwOyB9XG5cbi5kYXlBY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMDBiOWZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLnN0b2NrX2NvbXBhbnljYXJkLWV4dGVuZCAuaW9zIC5zdG9ja0NvbXBMaXN0LWNhcmQge1xuICBoZWlnaHQ6IGNhbGMoOTV2aCAtIDQxMHB4KSAhaW1wb3J0YW50OyB9XG5cbi5wYWdlcl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNkM2Q4ZGM7IH1cblxuLmlvcyAucGFnZXJfZGl2IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDsgfVxuXG4uZG90MHAge1xuICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4uZG90MVAge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5MDkwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cblxuLmltYWdlMCB7XG4gIGhlaWdodDogMTI5cHg7XG4gIHdpZHRoOiAxNzFweDtcbiAgcGFkZGluZzogMzBweDsgfVxuXG4uaW9uaWMtc2VsZWN0YWJsZS1pdGVtIHtcbiAgLS1wYWRkaW5nLWVuZDoxNnB4ICFpbXBvcnRhbnQ7IH1cblxuLmFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxuXG4uYXJyb3cgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2QzZDhkYztcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2QzZDhkYztcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBtYXJnaW46IC0xMHB4O1xuICBhbmltYXRpb246IGFuaW1hdGUgMnMgaW5maW5pdGU7IH1cblxuLmFycm93IHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yczsgfVxuXG4uYXJyb3cgc3BhbjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjRzOyB9XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTVweCwgLTVweCk7IH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDVweCk7IH0gfVxuXG4uc2VsR0lDUyB7XG4gIGNvbG9yOiAjMjVjM2ZmOyB9XG5cbi5zZWxlY3RJbmRleCB7XG4gIC0tYmFja2dyb3VuZDogIzA1YmFmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50OyB9XG5cbi5uYXYtdGFiLWl0ZW06Zm9jdXMge1xuICAtLWJhY2tncm91bmQ6ICMwNWJhZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgfVxuXG4uc2VsZWN0SW5kZXhMYWJlbCB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IH1cblxuLnNlbGVjdGVkSW5kZXhNZWQge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDViYWZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4ICFpbXBvcnRhbnQ7IH1cblxuLnNlbGVjdGVkSW5kZXhMYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XG5cbi5pbmROYW1lIHtcbiAgbWF4LXdpZHRoOiAzMnZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi8qIE1FRElBICovXG5AbWVkaWEgKG1heC13aWR0aDogMzQwcHgpIGFuZCAobWluLXdpZHRoOiAzMTBweCkge1xuICAubmF2LXRhYiBsaSBhIHtcbiAgICBmb250LXNpemU6IDEwcHg7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzEwcHgpIGFuZCAobWluLXdpZHRoOiAyODBweCkge1xuICAubmF2LXRhYiBsaSBhIHtcbiAgICBmb250LXNpemU6IDlweDsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkgYW5kIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gIC5uYXYtdGFiIHtcbiAgICBtYXJnaW46IDBweCA1cHg7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi10YWIge1xuICAgIG1hcmdpbjogMHB4IDIwcHggIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAubmF2LXRhYiB7XG4gICAgbWFyZ2luOiAwcHggMTJweDsgfSB9XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICNwYXJlbnQtY29udGVudCB7XG4gICAgLS1vdmVyZmxvdzogYXV0bzsgfVxuICAuaW9zIC5zdG9ja19jb21wYW55Y2FyZC1leHRlbmQge1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDsgfVxuICAuaW9zIC5TdG9ja2NhcmQtZXh0ZW5kIHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7IH1cbiAgLmlvcyAuSW5kZXhfY29tcGFueWNhcmQtZXh0ZW5kIHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7IH1cbiAgLkluZGV4X2NvbXBhbnljYXJkLWV4dGVuZCB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50OyB9XG4gIC5TdG9ja2NhcmQtZXh0ZW5kIHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7IH1cbiAgLmNvbXBhbnljYXJkLWV4dGVuZCB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50OyB9XG4gIC5pb3MgLmNvbXBhbnljYXJkLWV4dGVuZCB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50OyB9XG4gIC5vdmVyZmxvd09ubHlMYW5kc2NhcGUge1xuICAgIC0tb3ZlcmZsb3c6IGF1dG87IH1cbiAgLnN0b2NrQ29tcExpc3QtY2FyZCB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50OyB9XG4gIC5jaGlsZC1jYXJkLWNvbnRlbnQge1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDsgfVxuICAuaW9zIC5jaGlsZC1jYXJkLWNvbnRlbnQge1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDsgfVxuICAuaW5kZXgtbG9hZGVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7IH1cbiAgLm5hbWVFeHRlbmQge1xuICAgIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50OyB9XG4gIC5jb21wYW55LWNhcmQtY29udGVudCB7XG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50OyB9XG4gIC5zdG9jay1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDVweCAxMnB4IDBweCAxMnB4ICFpbXBvcnRhbnQ7IH1cbiAgLnN0b2NrY29tcGxpc3QtY2FyZC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7IH0gfVxuXG4uQmFubmVyX0hvbWVDaGFydGNvbnRhaW5lciBzdmcge1xuICBoZWlnaHQ6IDEyM3B4OyB9XG5cbi5pcGFkX0xvZ28ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7IH1cbiJdfQ== */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Components_profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/profiledetails/profiledetails.component */ "./src/app/Components/profiledetails/profiledetails.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/dataHandler/data-handler.service */ "./src/app/services/dataHandler/data-handler.service.ts");
















let HomePage = class HomePage {
    constructor(dataHandler, toastCtrl, alertService, pickerCtrl, menuCtrl, platform, popoverController, route, alertController, screenOrientation, router, authService, storage, httpclient, plt) {
        this.dataHandler = dataHandler;
        this.toastCtrl = toastCtrl;
        this.alertService = alertService;
        this.pickerCtrl = pickerCtrl;
        this.menuCtrl = menuCtrl;
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
        this.screenOrientation.onChange().subscribe(() => {
            setTimeout(() => {
                // console.log("Slide update");
                this.slides.update();
            }, 500);
            if (this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY) {
                this.stockCollapse = true;
            }
        });
    }
    ngOnInit() {
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
        window.addEventListener('mouseup', e => {
            var sortListcontainer = document.getElementById('sortbyList');
            if (this.showFilter == true) {
                if ($(e.target).closest('#sortbyList').length === 0) {
                    this.onSortClick();
                }
            }
        });
    }
    presentToast(val) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: val,
                duration: 5000
            });
            toast.present();
        });
    }
    onResize() {
        setTimeout(() => {
            if (this.slides) {
                this.slides.update();
            }
        }, 100);
    }
    showLoading() {
    }
    onhomeClick() {
        console.log('home clicked');
    }
    hideLoading() {
        this.SearchComponent.hideLoading();
    }
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
    getMed(array) {
        array = array.map(item => item.scores);
        //return array.filter(d=>{d.medianCont});
        array = array.sort();
        if (array.length % 2 === 0) { // array with even number elements
            return (array[array.length / 2] + array[(array.length / 2) - 1]) / 2;
        }
        else {
            return array[(array.length - 1) / 2]; // array with odd number elements
        }
    }
    /*************** Calulate Median End *****************/
    /*************** Round Median Start *****************/
    roundValue(val) {
        return (Math.round(val * 10) / 10).toFixed(1);
    }
    /*************** Round Median End *****************/
    /*************** Data Population Start *****************/
    createData() {
        // this.httpclient.get(this.api_url + "/Industry/GetIndustry").subscribe((res: any[]) => {
        //   //console.log(res);
        //   this.dbGICS = res;
        // });
        this.dataHandler.getIndustry().subscribe(res => {
            this.dbGICS = res;
        });
        this.dataHandler.getGlobalData().subscribe((res) => {
            // console.log(res);
            res = res.filter(item => item.companyName != null);
            this.data = res;
            this.searchList = this.data.filter(item => item.companyName != null && item.ticker != null);
            var temp = [...this.searchList];
            this.NaaSearchList = temp.filter(item => item.indexName.indexOf("New Age Alpha") === 0);
            var tempfi = [...this.searchList];
            this.FISearchList = tempfi.filter(item => item.hasOwnProperty('fi') === true && item.fi !== null);
            this.searchList = this.searchList.filter(item => item.indexName.indexOf("New Age Alpha") == -1);
            // this.LoadsearchList = this.searchList.slice(0, 50).map(i => {
            //   return i;
            // })
            let filteredData = this.data.map(item => item.indexName);
            let TotalIndex = filteredData.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            // console.log(TotalIndex);
            TotalIndex.forEach((element) => {
                if (element.includes('New Age Alpha')) {
                    this.NAAIndex.push(element);
                }
                else {
                    this.globalIndex.push(element);
                }
            });
            // console.log(this.data); 
            this.data.forEach(val => {
                val.countrygroup = val.indexName.indexOf('Europe') > -1 ? 'Europe' : val.country;
            });
            //console.log(this.data);
            var i;
            for (i = 0; i < this.globalIndex.length; i++) {
                let temp = this.data.filter((item) => item.indexName === this.globalIndex[i]);
                this.globalindexwise.push(temp);
            }
            for (i = 0; i < this.NAAIndex.length; i++) {
                let temp = this.data.filter((item) => item.indexName === this.NAAIndex[i]);
                this.naaindexwise.push(temp);
            }
            for (i = 0; i < this.globalIndex.length; i++) {
                this.globalmed.push(this.roundValue(this.getMed(this.globalindexwise[i]) * 100));
            }
            for (i = 0; i < this.globalIndex.length; i++) {
                let country = this.globalindexwise[i].map(i => i = i.countrygroup).filter(function (value, index, self) {
                    return self.indexOf(value) === index;
                });
                this.globalcountry.push(country[0]);
            }
            // console.log(this.globalcountry);
            this.totalglobalcountry = this.globalcountry.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            // console.log(this.totalglobalcountry);
            // console.log(this.globalmed);
            let globaltemp = [];
            for (i = 0; i < this.globalIndex.length; i++) {
                let t = [];
                t = { 'name': this.globalIndex[i], 'med': this.globalmed[i], 'countrygroup': this.globalcountry[i] };
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
            this.comGlobalIndex = globaltemp;
            this.comGlobalIndex.sort((a, b) => {
                return a.med - b.med;
            });
            // console.log(this.comGlobalIndex);
            this.compglobalCountryInd = groupBy(this.comGlobalIndex, 'countrygroup');
            // console.log(this.compglobalCountryInd);
            var temp = [];
            var that = this;
            this.totalglobalcountry.forEach(e => {
                //console.log(e);
                var t = { 'country': e };
                var t1 = this.compglobalCountryInd[e].map(i => i.name);
                var tmed = this.compglobalCountryInd[e].map(i => i.med);
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
            this.GlobalCountryWiseInd = temp;
            this.GlobalCountryWiseInd = this.GlobalCountryWiseInd.sort((a, b) => {
                return a.med - b.med;
            });
            this.GlobalList = this.GlobalCountryWiseInd;
            for (i = 0; i < this.NAAIndex.length; i++) {
                this.naamed.push(this.roundValue(this.getMed(this.naaindexwise[i]) * 100));
            }
            let naatemp = [];
            for (i = 0; i < this.NAAIndex.length; i++) {
                let t = [];
                t = { 'name': this.NAAIndex[i], 'med': this.naamed[i] };
                naatemp.push(t);
            }
            this.comNAAIndex = naatemp;
            this.comNAAIndex.sort((a, b) => {
                return a.med - b.med;
            });
            this.showLoader = false;
            this.GetETFValues();
            this.createFiSearchList();
        });
    }
    /*************** Data Population Start *****************/
    createFiSearchList() {
        this.FIIndexList = [];
        this.FICountryList.filter(item => {
            this.FixedIndexData[item].filter(it => {
                this.FIIndexList.push(it);
            });
        });
        // console.log(this.FIIndexList);
        this.FIIndexList.filter(item => {
            this.dataHandler.getFICatData(item.category).subscribe((res) => {
                res.filter(it => {
                    this.FISearchList.filter(x => x.stockKey == it.stockKey)[0].fiCountry = item.country;
                    this.FISearchList.filter(x => x.stockKey == it.stockKey)[0].fiCategory = item.category;
                    // var temp = this.FISearchList.filter(x=> x.stockKey == it.stockKey)[0];
                    // console.log(temp);
                });
            });
        });
    }
    GetFixedIndexData() {
        this.dataHandler.getFIData().subscribe((res) => {
            // console.log(res);
            var groupBy = function (xs, key) {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            };
            this.FixedIndexData = groupBy(res, 'country');
            var that = this;
            // console.log(that.FixedIndexData);
            var temp = res.map(x => x.country).filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            this.FICountryList = temp;
            // console.log(temp);
            temp.forEach(e => {
                var t = this.FixedIndexData[e];
                var tmedlist = t.map(x => this.roundValue(x.medianCont * 100));
                var tmed;
                var array = tmedlist.sort();
                if (array.length % 2 === 0) { // array with even number elements
                    tmed = (parseFloat(array[array.length / 2]) + parseFloat(array[(array.length / 2) - 1])) / 2;
                    tmed = Math.round(tmed * 10) / 10;
                }
                else {
                    tmed = array[(array.length - 1) / 2]; // array with odd number elements
                }
                this.FixedIndexData[e].med = tmed;
            });
            // console.log(this.FixedIndexData);
        });
    }
    onRemoveAlert() {
        let userInfo = {
            userId: this.currentUser.userId,
            stockKey: this.SelSearchObj.stockKey
        };
        this.alertService.deleteAlert(userInfo).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(data);
            const toast = yield this.toastCtrl.create({
                message: 'Alert Removed Sucessfully',
                duration: 3000
            });
            toast.present();
            this.showAlertSetup = false;
        }));
    }
    onAlertSubmit() {
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
            this.alertService.setAlert(alerts).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                // console.log(data);
                const toast = yield this.toastCtrl.create({
                    message: 'Alert Submitted Sucessfully',
                    duration: 3000
                });
                toast.present();
                this.showAlertSetup = false;
            }));
        }
    }
    rangeChange(evt) {
        this.showSubmit = true;
    }
    getalertData() {
    }
    openDaypicker() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('executing');
            let opts = {
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    }, {
                        text: 'Confirm',
                        handler: (val) => {
                            this.selDate = val.day.text;
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
            let picker = yield this.pickerCtrl.create(opts);
            picker.present();
            picker.onDidDismiss().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let col = yield picker.getColumn('day');
                // this.selDate = col.options[col.selectedIndex].text;
                // console.log(col);
            }));
        });
    }
    onFINavClick() {
        if (this.SelTab != 'FI') {
            this.prevSelTab = this.SelTab;
        }
        // console.log(this.prevSelTab);
        this.SelTab = 'FI';
        this.stockCollapse = true;
        this.compIndexShow = true;
        this.sectorHeadings[1] = 'Fixed Income';
        this.icon = "ios-arrow-dropup-circle";
    }
    onCountryBackClick() {
        this.selCountry = null;
    }
    onFICountryClick(country) {
        // console.log(country);
        this.FISelCountry = country;
        this.FIselCatogaryList = this.FixedIndexData[country];
    }
    onFiCountryBackClick() {
        this.FISelCountry = null;
    }
    onFixedCatClick(item) {
        this.dataHandler.getFICatData(item.category).subscribe((res) => {
            this.selectedIndexData.length = 0;
            this.unsortedIndexData.length = 0;
            this.headermed = this.roundValue(item.medianCont * 100);
            this.SelIndexName = item.category == 'HY' ? 'High Yield' : 'Investment Grade';
            document.getElementById('header-circle').style.background = this.getColor(this.roundValue(item.medianCont * 100));
            document.getElementById('header-circle').style.color = this.ApplyTextColor(this.roundValue(item.medianCont * 100));
            this.compIndexShow = false;
            this.icon = "ios-arrow-dropdown-circle";
            this.parentcard = false;
            res.forEach(e => {
                this.selectedIndexData.push(this.data.filter(x => x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1)[0]);
                this.unsortedIndexData.push(this.data.filter(x => x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1)[0]);
            });
            // console.log(this.selectedIndexData);
            // console.log(this.unsortedIndexData);
            var Wtsum = 0;
            this.selectedIndexData.forEach(element => {
                Wtsum = Wtsum + (1 - element.scores);
            });
            this.selectedIndexData.forEach(e => {
                e.wt = ((1 - e.scores) / Wtsum) * 100;
            });
            // console.log(this.selectedIndexData);
            this.unsortedIndexData.sort((a, b) => {
                return a.scores - b.scores;
            });
            this.sortComp(this.filterby);
        });
    }
    onSortClick() {
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
            tempOrientation = this.screenOrientation.onChange().subscribe(() => {
                if (this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT_SECONDARY) {
                    $('#SlideDiv').css('position', '');
                    $('#parent-content').css('--overflow', '');
                    tempOrientation.unsubscribe();
                }
                else {
                    // this.parentContent.scrollToTop();
                    if (this.showFilter == true) {
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
    }
    onfilterSelect(key) {
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
    }
    sortComp(type) {
        if (type == 'C_LTH') {
            // if(this.selSectorComp.length > 0){
            this.selSectorComp.sort((a, b) => {
                return a.companyName.localeCompare(b.companyName);
            });
            this.selectedIndexData.sort((a, b) => {
                return a.companyName.localeCompare(b.companyName);
            });
        }
        else if (type == 'C_HTL') {
            this.selSectorComp.sort((a, b) => {
                return b.companyName.localeCompare(a.companyName);
            });
            this.selectedIndexData.sort((a, b) => {
                return b.companyName.localeCompare(a.companyName);
            });
        }
        else if (type == 'HF_LTH') {
            this.selSectorComp.sort((a, b) => {
                return a.scores - b.scores;
            });
            this.selectedIndexData.sort((a, b) => {
                return a.scores - b.scores;
            });
        }
        else if (type == 'HF_HTL') {
            this.selSectorComp.sort((a, b) => {
                return b.scores - a.scores;
            });
            this.selectedIndexData.sort((a, b) => {
                return b.scores - a.scores;
            });
        }
        else if (type == 'T_LTH') {
            this.selSectorComp.sort((a, b) => {
                return a.ticker.localeCompare(b.ticker);
            });
            this.selectedIndexData.sort((a, b) => {
                return a.ticker.localeCompare(b.ticker);
            });
        }
        else if (type == 'T_HTL') {
            this.selSectorComp.sort((a, b) => {
                return b.ticker.localeCompare(a.ticker);
            });
            this.selectedIndexData.sort((a, b) => {
                return b.ticker.localeCompare(a.ticker);
            });
        }
        else if (type == 'P_LTH') {
            this.selSectorComp.sort((a, b) => {
                return a.price - b.price;
            });
            this.selectedIndexData.sort((a, b) => {
                return a.price - b.price;
            });
        }
        else if (type == 'P_HTL') {
            this.selSectorComp.sort((a, b) => {
                return b.price - a.price;
            });
            this.selectedIndexData.sort((a, b) => {
                return b.price - a.price;
            });
        }
    }
    ondayclick(day) {
        this.selDay = day;
    }
    isAlertexist(key) {
        let userInfo = {
            userId: this.currentUser.userId,
            stockKey: key
        };
        this.alertService.getAlert(userInfo).subscribe((data) => {
            if (data[0] != null) {
                return 'visible';
            }
            else {
                return 'hidden';
            }
        });
    }
    onlongpress(itm) {
        if (this.SelSearchObj == null || this.SelSearchObj != itm) {
            this.onCompanyClick(itm);
        }
        let userInfo = {
            userId: this.currentUser.userId,
            stockKey: this.SelSearchObj.stockKey
        };
        this.alertService.getAlert(userInfo).subscribe((data) => {
            this.savedAlert = data[0];
            //  console.log(this.savedAlert)
            if (this.savedAlert != null) {
                // console.log(data);
                if (this.savedAlert.daily == 'Y')
                    this.selPeriod = 'daily';
                if (this.savedAlert.weekly == 'Y')
                    this.selPeriod = 'weekly';
                if (this.savedAlert.monthly == 'Y')
                    this.selPeriod = 'monthly';
                this.selDay = this.savedAlert.weekDay == '0' ? 'monday' : this.savedAlert.weekDay.toString().toLowerCase();
                ;
                this.selDate = this.savedAlert.monthDt == '0' ? 1 : this.savedAlert.monthDt;
                this.perChecked = this.savedAlert.scoreChange == 'Y' ? true : false;
                this.selPer = this.savedAlert.scorePercent == 0 ? 1 : this.savedAlert.scorePercent;
                this.showSubmit = false;
                this.showAlertSetup = true;
                this.showAlertRemove = true;
            }
            else {
                this.selPeriod = '';
                this.selDay = 'monday';
                this.selDate = 1;
                this.perChecked = false;
                this.selPer = 1;
                this.showAlertSetup = true;
                this.showAlertRemove = false;
            }
        });
    }
    /*************** On country Select Start *****************/
    onCountryClick(country) {
        this.globalselectedcountryList = this.compglobalCountryInd[country];
        // console.log(this.globalselectedcountryList);
    }
    /*************** On country Select end *****************/
    /*************** Naa Index Name replaces for the display Start *****************/
    getNaaIndex(element) {
        element = element.replace('New Age Alpha ', '');
        element = element.replace(' Index', '');
        return element;
    }
    /*************** Naa Index Name replaces for the display End *****************/
    /*************** Global Index Name replaces for the display Start *****************/
    getGlobalIndex(element) {
        element = element.replace('UR', 'S&P');
        element = element.replace(' Index', '');
        return element;
    }
    /*************** Global Index Name Replaces for the Display End *****************/
    /*************** Background color Start *****************/
    getColor(med) {
        let gc100 = d3__WEBPACK_IMPORTED_MODULE_7__["scaleLinear"]()
            .domain([0, 25, 50, 75, 100])
            .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
        return gc100(med);
    }
    /*************** Background color End *****************/
    /*************** Median Text color Start *****************/
    ApplyTextColor(val) {
        return (val >= 45 && val < 55) ? "#FF9503" : "#fff";
    }
    /*************** Median Text color End *****************/
    ApplyPercentColor(val) {
        return (val >= 45 && val < 55) ? "#FF9503" : this.getColor(val);
    }
    /*************** Global Index Select Start *****************/
    onglobalIndexClick(i) {
        this.SelIndexName = i;
        // setTimeout(() => {
        this.compIndexShow = false;
        this.icon = "ios-arrow-dropdown-circle";
        this.parentcard = false;
        var temp = this.dataHandler.filterGlobalIndexData(this.globalindexwise[this.globalIndex.indexOf(i)], i);
        this.selectedIndexData = [...temp];
        this.unsortedIndexData = [...temp];
        document.getElementById('header-circle').style.background = this.getColor(this.globalmed[this.globalIndex.indexOf(i)]);
        document.getElementById('header-circle').style.color = this.ApplyTextColor(this.globalmed[this.globalIndex.indexOf(i)]);
        this.unsortedIndexData = this.unsortedIndexData.sort((a, b) => {
            return a.scores - b.scores;
        });
        var Wtsum = 0;
        this.selectedIndexData.forEach(element => {
            Wtsum = Wtsum + (1 - element.scores);
        });
        this.selectedIndexData.forEach(e => {
            e.wt = ((1 - e.scores) / Wtsum) * 100;
        });
        // console.log(this.selectedIndexData);
        // console.log(this.selectedIndexData);
        this.sortComp(this.filterby);
        // this.sortcompany();
        this.CompLength = this.selectedIndexData.length;
        this.headermed = this.globalmed[this.globalIndex.indexOf(i)];
        this.showLoader = false;
        // if (this.selComp != undefined) {
        //   setTimeout(() => {
        //     var temp = this.selectedIndexData.filter((item) => item.companyName == this.selComp);
        //     var sectemp = this.selSectorComp.filter((item) => item.companyName == this.selComp);
        //   }, 100);
        // }
        // }, 200);
    }
    /*************** Global Index Select End *****************/
    /*************** NewAgeAlpha Index Select Start *****************/
    onNaaIndexClick(i) {
        this.compIndexShow = false;
        this.icon = "ios-arrow-dropdown-circle";
        this.parentcard = false;
        this.SelIndexName = i;
        this.selectedIndexData = this.naaindexwise[this.NAAIndex.indexOf(i)].filter(item => item.indexName == i);
        this.unsortedIndexData = this.naaindexwise[this.NAAIndex.indexOf(i)].filter(item => item.indexName == i);
        document.getElementById('header-circle').style.background = this.getColor(this.naamed[this.NAAIndex.indexOf(i)]);
        document.getElementById('header-circle').style.color = this.ApplyTextColor(this.naamed[this.NAAIndex.indexOf(i)]);
        var Wtsum = 0;
        this.selectedIndexData.forEach(element => {
            Wtsum = Wtsum + (1 - element.scores);
        });
        this.selectedIndexData.forEach(e => {
            e.wt = ((1 - e.scores) / Wtsum) * 100;
        });
        // console.log(this.selectedIndexData);
        this.unsortedIndexData = this.unsortedIndexData.sort((a, b) => {
            return a.scores - b.scores;
        });
        // this.sortcompany();
        this.sortComp(this.filterby);
        this.CompLength = this.selectedIndexData.length;
        this.headermed = this.naamed[this.NAAIndex.indexOf(i)];
    }
    /*************** New Age Alpha Index Select End *****************/
    /*************** Sort Index ascending Start *****************/
    sortcompany() {
        if (this.SelFilter == "Human Factor Score (ascending)") {
            this.selectedIndexData.sort((a, b) => {
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
    }
    /*************** Sort Index ascending End *****************/
    /*************** After View Start *****************/
    ngAfterViewInit() {
        this.slides = document.getElementById("pageslider");
        // console.log(this.slides);
        this.GetETFValues();
        setTimeout(() => {
            this.onSlide1Click();
        }, 900);
    }
    /*************** After View End *****************/
    ionViewDidEnter() {
        this.backButtonSubscription = this.plt.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
    }
    ionViewWillLeave() {
        this.backButtonSubscription.unsubscribe();
    }
    /*************** ETF Category List Start *****************/
    GetETFValues() {
        this.dataHandler.getETFData().subscribe((stockIndex) => {
            this.res = stockIndex;
            this.ETFcategory = stockIndex.map(d => d.category).filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            this.ETFcategory.unshift('All');
            let i = 0;
            this.ETFNameWise = [];
            for (i = 0; i < this.ETFcategory.length; i++) {
                if (this.ETFcategory[i] === "All") {
                    var temp = stockIndex;
                    this.ETFNameWise.push(temp);
                }
                else {
                    var temp = stockIndex.filter(item => item.category === this.ETFcategory[i]);
                    this.ETFNameWise.push(temp);
                }
            }
            this.EtfSearchList.length = 0;
            this.res.forEach(obj => {
                let Etfval = { companyName: obj.etfName, isin: obj.assetId, ticker: obj.ticker, indexName: "ETF", country: obj.category };
                this.EtfSearchList.push(Etfval);
            });
            this.EtfSearchList = this.EtfSearchList.filter(item => item.companyName != null && item.ticker != null);
        });
        this.dataHandler.getETFData().subscribe((stockIndex) => {
            var vall = stockIndex.map(item => item.category);
            this.ETFCatagories = vall.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            var i;
            for (i = 0; i < this.ETFCatagories.length; i++) {
                let temp = stockIndex.filter((item) => item.category === this.ETFCatagories[i]);
                this.ETFCatagoriesComp.push(temp);
            }
            // this.GetETFValues();
        });
    }
    /*************** ETF Category List End *****************/
    /*************** ETF Category Median Start *****************/
    getETFCategoryMed(ind) {
        var array = [];
        array = this.ETFNameWise[ind].map(item => item.medianCont);
        array = array.sort();
        if (array.length % 2 === 0) { // array with even number elements
            return (array[array.length / 2] + array[(array.length / 2) - 1]) / 2;
        }
        else {
            return array[(array.length - 1) / 2]; // array with odd number elements
        }
    }
    /*************** ETF Category Median End *****************/
    /*************** ETF Category Selected Start *****************/
    onETFCategoryClick(i) {
        if (i == 'All') {
            this.SelTab = 'ETFChild';
            this.selCategory = i;
            this.ETFNameList = this.res.map(item => item.etfName);
            this.ETFNameFull = this.res;
            this.ETFNameMed = this.ETFNameFull.map(item => this.roundValue(item.medianCont * 100));
            var etfallnametemp = [];
            for (i = 0; i < this.ETFNameList.length; i++) {
                var med = this.ETFNameMed[i];
                var name = this.ETFNameList[i];
                var t = [];
                t = { 'name': name, 'med': med };
                etfallnametemp.push(t);
            }
            this.compETFNameList = etfallnametemp;
            this.compETFNameList.sort((a, b) => {
                return a.med - b.med;
            });
        }
        else {
            this.SelTab = 'ETFChild';
            this.selCategory = i;
            var tempp = [];
            tempp = this.ETFCatagoriesComp[this.ETFcategory.indexOf(i) - 1];
            // console.log(this.ETFCatagoriesComp);
            this.ETFNameList = tempp.map(item => item.etfName);
            var j;
            for (i = 0; i < this.ETFNameList.length; i++) {
                var temp = this.res.filter(item => item.etfName === this.ETFNameList[i]);
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
            this.compETFNameList.sort((a, b) => {
                return a.med - b.med;
            });
            this.ETFNameMed = this.ETFNameFull.map(item => this.roundValue(item.medianCont * 100));
        }
    }
    /*************** ETF Category Selected End *****************/
    /*************** ETF Median Start *****************/
    getEtfMed(i) {
        if (i == 'All') {
            // var tempmed = this.res.filter(item=>item.e)
        }
        else {
            //console.log(i);
            var tempmed = this.ETFNameFull.filter(item => item.etfName == i);
            //console.log(tempmed);
            return this.roundValue(tempmed[0].medianCont * 100);
        }
    }
    /*************** ETF Median End *****************/
    /*************** ETF Selected Start *****************/
    onETFNameClick(i) {
        // console.log(i);
        let name = i;
        var tempp = this.ETFNameFull.filter(item => item.etfName == name);
        // console.log(this.ETFNameFull);
        // console.log(tempp);
        var CId = tempp[0].assetId;
        this.dataHandler.getETFCatData(CId).subscribe((ETFStocks) => {
            this.SelAssetId = name;
            this.ETFHoldings = [];
            this.unsortedIndexData = [];
            var j = 0;
            for (j = 0; j < ETFStocks.length; j++) {
                var temp = ETFStocks[j];
                var tempData = this.data.filter(item => item.isin === temp.isin);
                if (tempData != "") {
                    var temp = tempData[0];
                    temp.indexType = "ETF";
                    this.ETFHoldings.push(temp);
                    this.unsortedIndexData.push(temp);
                }
            }
            this.selectedIndexData = this.ETFHoldings;
            var Wtsum = 0;
            this.selectedIndexData.forEach(element => {
                Wtsum = Wtsum + (1 - element.scores);
            });
            this.selectedIndexData.forEach(e => {
                e.wt = ((1 - e.scores) / Wtsum) * 100;
            });
            // console.log(this.selectedIndexData);
            this.headermed = this.getEtfMed(name);
            document.getElementById('header-circle').style.visibility = 'visible';
            document.getElementById('header-circle').style.background = this.getColor(this.getEtfMed(name));
            document.getElementById('header-circle').style.color = this.ApplyTextColor(this.getEtfMed(name));
            this.compIndexShow = false;
            this.icon = "ios-arrow-dropdown-circle";
            this.parentcard = false;
            this.SelIndexName = i;
            this.unsortedIndexData = this.unsortedIndexData.sort((a, b) => {
                return a.scores - b.scores;
            });
            // this.sortcompany();
            this.sortComp(this.filterby);
        });
    }
    /*************** ETF Selected End *****************/
    /*************** Global Tab Selected Start *****************/
    onNavGlobalClick() {
        if (this.SelTab != 'Global Universe') {
            this.prevSelTab = this.SelTab;
        }
        // console.log(this.prevSelTab);
        this.SelTab = 'Global Universe';
        this.stockCollapse = true;
        this.compIndexShow = true;
        this.icon = "ios-arrow-dropup-circle";
        this.sectorHeadings[1] = 'Index';
    }
    /*************** Global Tab Selected End *****************/
    /*************** NAA Tab Selected Start *****************/
    onNavNAAClick() {
        if (this.SelTab != 'NAA') {
            this.prevSelTab = this.SelTab;
        }
        // console.log(this.prevSelTab);
        this.SelTab = 'NAA';
        this.stockCollapse = true;
        this.compIndexShow = true;
        this.icon = "ios-arrow-dropup-circle";
        this.sectorHeadings[1] = 'Index';
    }
    /*************** NAA Tab Selected End *****************/
    /*************** ETF Tab Selected Start *****************/
    onNavETFClick() {
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
        var etfLoaderinterval = setInterval(() => {
            if (this.ETFCatagoriesComp.length != 0) {
                this.showLoader = false;
                clearInterval(etfLoaderinterval);
            }
        }, 100);
    }
    /*************** ETF Tab Selected End *****************/
    /*************** GICS Selected UI Start *****************/
    onStockDivClick() {
        if (this.stockCollapse == true) {
            this.stockCollapse = false;
            this.stockIndexShow = false;
            this.compIndexShow = false;
            this.stockIcon = "ios-arrow-dropdown-circle";
            this.icon = "ios-arrow-dropdown-circle";
        }
    }
    /*************** GICS Selected UI Start *****************/
    /*************** GICS DropDown Icon Selection UI Start *****************/
    onStockBtnClick() {
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
    }
    /*************** GICS DropDown Icon Selection UI End *****************/
    /*************** Index DropDown Icon Selection UI Start *****************/
    onCompBtnClick() {
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
    }
    /*************** Index DropDown Icon Selection UI End *****************/
    /*************** Company Selected Start *****************/
    onCompanyClick(e) {
        // console.log(e);
        this.selComp = e.companyName;
        // console.log(this.selComp);
        this.searchSel = e;
        if (this.SelTab == 'FI') {
            // console.log('FI');
            this.SelSearchObj = e;
            this.SelSearchObj.FIName = e.category == 'HY' ? 'High Yield' : 'Investment Grade';
            this.getSectorList(e.industry.toString());
            this.onSectorClick(e.industry);
            this.sortComp(this.filterby);
        }
        else if (e.hasOwnProperty('indexType')) {
            // console.log('ETF');
            this.SelSearchObj = e;
            this.SelSearchObj.etfName = this.SelIndexName;
            this.getSectorList(e.industry.toString());
            this.onSectorClick(e.industry);
            this.sortComp(this.filterby);
        }
        else if (e.indexName.indexOf('New Age Alpha ') == -1) {
            // console.log('Equity');
            this.SelSearchObj = e;
            this.getSectorList(e.industry.toString());
            this.onSectorClick(e.industry);
            this.sortComp(this.filterby);
        }
        else {
            // console.log('NAA');
            var temp = e;
            this.SelSearchObj = temp;
            this.getSectorList(temp.industry.toString());
            this.onSectorClick(temp.industry);
            this.sortComp(this.filterby);
        }
        this.slides.slideTo(0);
    }
    /*************** Company Selected End *****************/
    /*************** Search Result Start *****************/
    searchCompany(event) {
        //  console.log(event.text.trim());
        let text = event.text.trim();
        this.searchedtext = text;
        if (this.SelTab == undefined) {
            if (text.length != 0) {
                this.LoadsearchList = this.searchList.filter((item) => {
                    return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
                });
            }
            else {
                this.LoadsearchList.length = 0;
            }
        }
        else if (this.SelTab == '') {
            if (text.length != 0) {
                this.LoadsearchList = this.searchList.filter((item) => {
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
                this.LoadsearchList = this.searchList.filter((item) => {
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
                this.LoadsearchList = this.FISearchList.filter((item) => {
                    return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
                });
            }
            else {
                this.LoadsearchList.length = 0;
            }
        }
        else if (this.SelTab == 'NAA') {
            if (text.length != 0) {
                this.LoadsearchList = this.NaaSearchList.filter((item) => {
                    return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
                });
            }
            else {
                this.LoadsearchList.length = 0;
            }
        }
        else if (this.SelTab == 'ETF' || this.SelTab == 'ETFChild') {
            if (text.length != 0) {
                this.LoadsearchList = this.EtfSearchList.filter((item) => {
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
    }
    /*************** Search Result End *****************/
    onSearchClose(event) {
        event.component.searchText = '';
    }
    /***************On Company Selected from Search Result Start *****************/
    onSearchSelect(e) {
        // console.log(e);
        this.selComp = e.companyName;
        this.SelSearchObj = e;
        var industryVal = e.industry;
        this.GridHeaderTitle = false;
        if (this.SelTab == undefined) {
            this.SelTab = 'Global Universe';
            this.onglobalIndexClick(e.indexName);
            this.onCompanyClick(e);
            setTimeout(() => {
                this.loadData();
            }, 50);
        }
        else if (this.SelTab == 'Global Universe') {
            // console.log('global');
            this.onglobalIndexClick(e.indexName);
            this.onCompanyClick(e);
            setTimeout(() => {
                this.loadData();
            }, 50);
        }
        else if (this.SelTab == 'FI') {
            // console.log(e)
            var temp = this.FIIndexList.filter(item => item.country === e.fiCountry && item.category === e.fiCategory)[0];
            this.onFixedCatClick(temp);
            this.SelSearchObj.FIName = e.category == 'HY' ? 'High Yield' : 'Investment Grade';
            setTimeout(() => {
                this.onCompanyClick(e);
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
    }
    /***************On Company Selected from Search Result End *****************/
    /***************Search Infinite Scroll Activate Start *****************/
    getMoreSearchComp(event) {
        if (this.LoadsearchList.length > 0) {
            let text = (event.text || '').trim().toLowerCase();
            if (this.LoadsearchList.length == this.searchList.length) {
                event.component.disableInfiniteScroll();
                return;
            }
            this.size = this.size + 50;
            if (this.SelTab == 'Global Universe') {
                this.LoadsearchList.length = 0;
                this.LoadsearchList = this.searchList.slice(0, this.size).map(i => {
                    return i;
                });
            }
            else if (this.SelTab == 'FI') {
                this.LoadsearchList.length = 0;
                this.LoadsearchList = this.FISearchList.slice(0, this.size).map(i => {
                    return i;
                });
            }
            else if (this.SelTab == 'NAA') {
                this.LoadsearchList.length = 0;
                this.LoadsearchList = this.NaaSearchList.slice(0, this.size).map(i => {
                    return i;
                });
            }
            else if (this.SelTab == 'ETF' || this.SelTab == 'ETFChild') {
                this.LoadsearchList.length = 0;
                this.LoadsearchList = this.EtfSearchList.slice(0, this.size).map(i => {
                    return i;
                });
            }
        }
        event.component.endInfiniteScroll();
    }
    /***************Search Infinite Scroll Activate End *****************/
    /***************Geting GICS List Start *****************/
    getSectorList(data) {
        var indus = data;
        //console.log(indus);
        var i = 2;
        this.sectorList = [];
        while ((i / 2) < 5) {
            var searchkey = indus.substring(0, i);
            var temp = this.dbGICS.filter(item => item.code == searchkey);
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
    }
    /***************Geting GICS List End *****************/
    /*************** On GICS Click Start *****************/
    onSectorClick(key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(key);
            if (this.stockCollapse == true) {
                this.stockIndexShow = false;
                this.compIndexShow = false;
                this.stockIcon = "ios-arrow-dropdown-circle";
                this.icon = "ios-arrow-dropdown-circle";
            }
            if (key == "Global Universe") {
                this.globalselectorcomp = this.data.filter(item => item.companyName != null && item.indexName.indexOf("New Age Alpha") == -1);
                this.globalselectorcomp.sort((a, b) => {
                    return a.scores - b.scores;
                });
                this.selSectorComp = this.globalselectorcomp.slice(0, 100);
                var wtsum = 0;
                this.globalselectorcomp.forEach(element => {
                    wtsum = wtsum + (1 - element.scores);
                });
                this.selSectorComp.forEach(element => {
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
                this.scrollToSel();
            }
            else if (key == "Index") {
                this.unsortselSectorComp = this.selectedIndexData;
                this.selSectorComp = this.selectedIndexData;
                var wtsum = 0;
                this.selSectorComp.forEach(element => {
                    wtsum = wtsum + (1 - element.scores);
                });
                this.selSectorComp.forEach(element => {
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
                // console.log(this.selectedIndexData);
                this.fullSectorComp = this.selectedIndexData.filter(item => item.industry.toString().substring(0, key.toString().length) == key);
                // console.log(this.fullSectorComp);
                this.unsortselSectorComp = this.fullSectorComp.filter(item => item.companyName != null);
                this.unsortselSectorComp.sort((a, b) => {
                    return a.scores - b.scores;
                });
                this.selSectorComp = this.fullSectorComp.filter(item => item.companyName != null);
                var wtsum = 0;
                this.selSectorComp.forEach(element => {
                    wtsum = wtsum + (1 - element.scores);
                });
                this.selSectorComp.forEach(element => {
                    element.wt = ((1 - element.scores) / wtsum) * 100;
                });
                // console.log(this.selSectorComp);
                this.selSectorComp.sort((a, b) => {
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
                this.fullSectorComp = this.data.filter(item => item.industry.toString().substring(0, key.toString().length) == key);
                if (this.SelSearchObj.hasOwnProperty('indexType')) {
                    this.fullSectorComp = this.ETFHoldings.filter(item => item.industry.toString().substring(0, key.toString().length) == key);
                }
                else if (this.SelSearchObj.indexName.indexOf("New Age Alpha ") == -1) {
                    this.fullSectorComp = this.fullSectorComp.filter(item => item.indexName.indexOf("New Age Alpha") == -1);
                }
                else {
                    this.fullSectorComp = this.fullSectorComp.filter(item => item.indexName.indexOf("New Age Alpha") != -1);
                }
                this.selSectorComp = this.fullSectorComp.filter(item => item.indexName == this.SelSearchObj.indexName);
                this.unsortselSectorComp = this.selSectorComp.filter(item => item.companyName != null);
                this.unsortselSectorComp.sort((a, b) => {
                    return a.scores - b.scores;
                });
                this.selSectorComp = this.selSectorComp.filter(item => item.companyName != null);
                var wtsum = 0;
                this.selSectorComp.forEach(element => {
                    wtsum = wtsum + (1 - element.scores);
                });
                this.selSectorComp.forEach(element => {
                    element.wt = ((1 - element.scores) / wtsum) * 100;
                });
                // console.log(this.selSectorComp);
                this.selSectorComp.sort((a, b) => {
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
            // this.sortComp(this.filterby);
        });
    }
    /*************** On GICS Click End *****************/
    /*************** Company Replace for ID Start *****************/
    getIDReplace(id) {
        //console.log(id);
        return id.replace(/ /g, '-');
    }
    /*************** Company Replace for ID End *****************/
    /*************** On Pagination Click Start *****************/
    onSlide0Click() {
        this.slides.slideTo(0);
        document.getElementById("slide0dot").style.backgroundColor = "#FFFFFF";
        document.getElementById("slide1dot").style.backgroundColor = "#909090";
    }
    onSlide1Click() {
        this.slides.slideTo(1);
        document.getElementById("slide1dot").style.backgroundColor = "#FFFFFF";
        document.getElementById("slide0dot").style.backgroundColor = "#909090";
    }
    /*************** On Pagination Click End *****************/
    /*************** To slide the Slides/Carousel Start *****************/
    onSlideChange(evt) {
        this.slides.getActiveIndex().then(index => {
            if (index == 0) {
                document.getElementById("slide0dot").style.backgroundColor = "#FFFFFF";
                document.getElementById("slide1dot").style.backgroundColor = "#909090";
            }
            else {
                document.getElementById("slide1dot").style.backgroundColor = "#FFFFFF";
                document.getElementById("slide0dot").style.backgroundColor = "#909090";
            }
        });
    }
    /*************** To slide the Slides/Carousel End *****************/
    /*************** Scroll to the Selected Company Start *****************/
    scrollToSel() {
        if (this.selComp != undefined) {
            setTimeout(() => {
                var temp = this.selectedIndexData.filter((item) => item.companyName == this.selComp);
                var index = this.selectedIndexData.indexOf(temp[0]) + 1;
                var indheight = document.getElementById('IndexCompanyDiv').clientHeight;
                var manInd = (index * 45) - (indheight / 2);
                // manInd = manInd;
                // console.log(manInd);
                document.getElementById('scrollDiv').scrollTo(0, manInd);
                var sectemp = this.selSectorComp.filter((item) => item.companyName == this.selComp);
                var secInd = this.selSectorComp.indexOf(sectemp[0]) + 1;
                // var mansecInd = (secInd * 42) - 240;
                setTimeout(() => {
                    var stcheight = document.getElementById('stockCompanyDiv').clientHeight;
                    var mansecInd = (secInd * 45) - (stcheight / 2);
                    // console.log(mansecInd + height);
                    document.getElementById('sectorscrollDiv').scrollTo(0, mansecInd);
                }, 500);
            }, 100);
        }
    }
    /*************** Scroll to the Selected Company End *****************/
    loadStockData(event) {
        // console.log("Done");
        event.target.complete();
        // setTimeout(()=>{
        //   console.log("Done");
        //   //event.target.complete();
        // },200);
    }
    loadData() {
        this.M_gchart = d3__WEBPACK_IMPORTED_MODULE_7__["select"]("#M_gchart");
        // console.log(this.M_gchart);
        this.M_chartMain = this.M_createMainChart(this.M_gchart);
    }
    M_createMainChart(obj) {
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
    }
    M_CreateData() {
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
        let tradeDt = dbScore[0].tradeDate;
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
    }
    M_creatGradienArc() {
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
    }
    M_CreateComps(oSvg, dta, lvl) {
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
            let gC100 = d3__WEBPACK_IMPORTED_MODULE_7__["scaleLinear"]()
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
    }
    /*************** Banner Tool End *****************/
    onscroll(event) {
        //event.target.
        setTimeout(() => {
            // console.log(event)
            // console.log("scroll running");
            if (this.selSector.code == 'Global Universe') {
                if (this.selSectorComp.length != this.globalselectorcomp.length) {
                    this.globalSize = this.globalSize + 100;
                    this.selSectorComp = this.globalselectorcomp.slice(0, this.globalSize);
                    var wtsum = 0;
                    this.globalselectorcomp.forEach(element => {
                        wtsum = wtsum + (1 - element.scores);
                    });
                    this.selSectorComp.forEach(element => {
                        element.wt = ((1 - element.scores) / wtsum) * 100;
                    });
                    // console.log(this.selSectorComp);
                    this.unsortselSectorComp = this.globalselectorcomp.slice(0, this.globalSize);
                    // console.log(this.unsortselSectorComp);
                    event.target.complete();
                    if (this.selSectorComp.length == this.globalselectorcomp.length) {
                        event.target.disabled = true;
                    }
                }
                else {
                    event.target.disabled = true;
                }
            }
        }, 500);
    }
    // onClick(){
    //   this.route.navigateByUrl('/test');
    // }
    onLogoutClick() {
        this.authService.logout();
    }
    profilePopover(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log("presenting profile Details");
            const popover = yield this.popoverController.create({
                component: _Components_profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_11__["ProfiledetailsComponent"],
                event: e,
                translucent: true,
                cssClass: 'Custom_profile'
            });
            return yield popover.present();
        });
    }
    getMaketCap(val) {
        return (val / 1000000);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_13__["DataHandlerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PickerController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
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
];
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dataHandler_data_handler_service__WEBPACK_IMPORTED_MODULE_13__["DataHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PickerController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__["ScreenOrientation"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
], HomePage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let AlertService = class AlertService {
    constructor(http) {
        this.http = http;
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
    }
    setAlert(alert) {
        console.log('posting alert');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(alert);
        return this.http.post(this.api_url + '/Users/SetAlerts', alert, httpOptions);
    }
    deleteAlert(alert) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(alert);
        return this.http.post(this.api_url + '/Users/RemoveAlerts', alert, httpOptions);
    }
    getAlert(alert) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api_url + '/Users/GetAlerts', alert, httpOptions);
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AlertService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map