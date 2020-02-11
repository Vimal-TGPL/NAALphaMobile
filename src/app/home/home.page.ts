import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Platform, IonSlides } from '@ionic/angular';
import * as d3 from 'd3';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit {

  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  currenturl: string;
  compETFNameList: any = [];
  comNAAIndex: any = [];
  comGlobalIndex: any = [];
  stockMed: any;
  GridHeaderTitle: boolean = true;
  selSector: any = [];
  SelSecLevTitle: any = 'Sub Industry';
  fullSectorComp: any = [];
  SelSearchObj: any = [];
  selSectorComp: any = [];
  sectorList: any = [];
  dbGICS: any = [];
  size: any = 50;
  EtfMed: any;
  searchList: any = [];
  LoadsearchList: any = [];
  searchSel: string = "";
  selComp: string;
  compIndexShow: boolean = false;
  stockIndexShow: boolean = false;
  stockIcon: string = "ios-arrow-dropdown-circle";
  stockCollapse: boolean = false;
  slideOptions: any;
  api_url = environment.api_url;
  SelAssetId: any;
  currentUser: any = null;
  data: any;
  user: any;
  SelTab: string;
  icon: string = 'ios-arrow-dropdown-circle';
  sorticon: string = 'arrow-dropdown'
  indexclick: boolean = true;
  parentcard: boolean = false;
  SelFilter: string = 'Human Factor Score (ascending)';
  sortDisable: boolean = true;
  sortcard: boolean = true;
  selCategory: any;
  CompLength: any = '';
  heightcard: any = '250px';
  NAAIndex: any = [];
  globalIndex: any = [];
  ETFCatagories: any = [];
  ETFHoldings: any = [];
  globalindexwise: any = [];
  naaindexwise: any = [];
  globalmed: any = [];
  naamed: any = [];
  ETFNameWise: any = [];
  ETFNameList: any = [];
  res: any = [];
  ETFCatagoriesComp: any = [];
  SelIndexName: string = '';
  unsortedIndexData: any = [];
  headermed: any;
  selectedIndexData: any = [];
  ETFcategory: any = [];
  ETFNameMed: any = [];
  ETFNameFull: any = [];
  showLoader: any = true;
  sectorHeadings: any = ['Global', 'Index', 'Sector', 'Industry Group', 'Industry', 'Sub Industry'];
  FilterList: any = [
    { "Name": 'Company Name (ascending)', "value": "1" },
    { "Name": 'Company Name (descending)', "value": "2" },
    { "Name": 'Human Factor Score (ascending)', "value": "3" },
    { "Name": 'Human Factor Score (descending)', "value": "4" },
    { "Name": 'Ticker (ascending)', "value": "5" },
    { "Name": 'Ticker (descending)', "value": "6" }];

  ngOnInit() {
    this.currenturl = this.router.url;
    this.createData();
    this.GetETFValues();
  }

  constructor(private screenOrientation: ScreenOrientation, public router: Router, private authService: AuthenticationService, public storage: Storage, private httpclient: HttpClient, private plt: Platform) {
    this.currentUser = this.authService.currentUserValue();
    if (this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY) {
      this.stockCollapse = true;
    }
    this.screenOrientation.onChange().subscribe(
      () => {
        if (this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY) {
          this.stockCollapse = true;
        }
      }
    );
  }

  /*************** ETF TAb Clicked Start *****************/
  ETFNavClick() {
    //if()
    this.indexclick = false;
    this.parentcard = true;
    this.icon = 'arrow-dropup';
    if (this.sortcard == false) {
      this.sorticon = 'arrow-dropdown';
      this.sortcard = true;
    }
    this.GetETFValues();
    this.httpclient.get(this.api_url + "/Scores/GetETFMaster").subscribe((stockIndex: any[]) => {
      var vall = stockIndex.map(item => item.category);
      this.ETFCatagories = vall.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      var i;
      for (i = 0; i < this.ETFCatagories.length; i++) {
        let temp = stockIndex.filter((item) => item.category === this.ETFCatagories[i]);
        this.ETFCatagoriesComp.push(temp);
      }
      this.showLoader = false;
    })
  }
  /*************** ETF TAb Clicked End *****************/

  /*************** Calulate Median Start *****************/
  getMed(array: any) {

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
    this.httpclient.get(this.api_url + "/Industry/GetIndustry").subscribe((res: any[]) => {
      this.dbGICS = res;
    });
    this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL").subscribe((res: any[]) => {
      this.data = res;
      this.searchList = this.data.filter(item => item.companyName != null);
      this.searchList = this.searchList.filter(item => item.indexName.indexOf("New Age Alpha") == -1);
      this.LoadsearchList = this.searchList.slice(0, 50).map(i => {
        return i;
      })
      let filteredData = this.data.map(item => item.indexName);
      let TotalIndex = filteredData.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      })
      TotalIndex.forEach((element: String) => {
        if (element.includes('New Age Alpha')) {
          this.NAAIndex.push(element);
        } else {
          this.globalIndex.push(element);
        }
      });
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
      let globaltemp = [];
      for (i = 0; i < this.globalIndex.length; i++) {
        let t: any = [];
        t = { 'name': this.globalIndex[i], 'med': this.globalmed[i] }
        globaltemp.push(t);
      }
      this.comGlobalIndex = globaltemp;
      this.comGlobalIndex.sort((a, b) => {
        return a.med - b.med;
      });
      for (i = 0; i < this.NAAIndex.length; i++) {
        this.naamed.push(this.roundValue(this.getMed(this.naaindexwise[i]) * 100));
      }
      let naatemp = [];
      for (i = 0; i < this.NAAIndex.length; i++) {
        let t: any = [];
        t = { 'name': this.NAAIndex[i], 'med': this.naamed[i] };
        naatemp.push(t);
      }
      this.comNAAIndex = naatemp;
      this.comNAAIndex.sort((a, b) => {
        return a.med - b.med;
      });
      this.showLoader = false;
      this.GetETFValues();
    })
  }
  /*************** Data Population Start *****************/

  /*************** Naa Index Name replaces for the display Start *****************/
  getNaaIndex(element) {
    element = element.replace('New Age Alpha ', '');
    element = element.replace(' Index', '');
    return element;
  }
  /*************** Naa Index Name replaces for the display End *****************/

  /*************** Global Index Name replaces for the display Start *****************/
  getGlobalIndex(element) {
    element = element.replace('UR', 'S&P')
    element = element.replace(' Index', '');
    return element;
  }
  /*************** Global Index Name Replaces for the Display End *****************/

  /*************** Background color Start *****************/
  getColor(med) {
    let gc100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    return gc100(med);
  }
  /*************** Background color End *****************/

  /*************** Median Text color Start *****************/
  ApplyTextColor(val) {
    return (val >= 45 && val < 55) ? "#FF9503" : "#fff"
  }
  /*************** Median Text color End *****************/

  /*************** Global Index Select Start *****************/
  onglobalIndexClick(i) {
    this.selectedIndexData = this.globalindexwise[this.globalIndex.indexOf(i)].filter(item => item.indexName == i);
    this.unsortedIndexData = this.globalindexwise[this.globalIndex.indexOf(i)].filter(item => item.indexName == i);
    document.getElementById('header-circle').style.background = this.getColor(this.globalmed[this.globalIndex.indexOf(i)]);
    document.getElementById('header-circle').style.color = this.ApplyTextColor(this.globalmed[this.globalIndex.indexOf(i)]);
    this.SelIndexName = i;
    this.compIndexShow = false;
    this.icon = "ios-arrow-dropdown-circle";
    this.parentcard = false;
    this.unsortedIndexData = this.unsortedIndexData.sort((a, b) => {
      return a.scores - b.scores;
    });
    this.sortcompany();
    this.CompLength = this.selectedIndexData.length;
    this.headermed = this.globalmed[this.globalIndex.indexOf(i)];
    if (this.selComp != undefined) {
      setTimeout(() => {
        var temp = this.selectedIndexData.filter((item) => item.companyName == this.selComp);
        var index = this.selectedIndexData.indexOf(temp[0]) + 1;
        var manInd = (index * 35) - 240;
        document.getElementById('scrollDiv').scrollTo(0, manInd);
        var sectemp = this.selSectorComp.filter((item) => item.companyName == this.selComp);
        var secInd = this.selSectorComp.indexOf(sectemp[0]) + 1;
        var mansecInd = (secInd * 35) - 240;
        document.getElementById('sectorscrollDiv').scrollTo(0, mansecInd);
      }, 100);
    }
  }
  /*************** Global Index Select End *****************/

  /*************** NewAgeAlpha Index Select Start *****************/
  onNaaIndexClick(i) {
    this.selectedIndexData = this.naaindexwise[this.NAAIndex.indexOf(i)].filter(item => item.indexName == i);
    this.unsortedIndexData = this.naaindexwise[this.NAAIndex.indexOf(i)].filter(item => item.indexName == i);
    document.getElementById('header-circle').style.background = this.getColor(this.naamed[this.NAAIndex.indexOf(i)]);
    document.getElementById('header-circle').style.color = this.ApplyTextColor(this.naamed[this.NAAIndex.indexOf(i)]);
    this.compIndexShow = false;
    this.icon = "ios-arrow-dropdown-circle";
    this.parentcard = false;
    this.SelIndexName = i;
    this.unsortedIndexData = this.unsortedIndexData.sort((a, b) => {
      return a.scores - b.scores;
    });
    this.sortcompany();
    this.CompLength = this.selectedIndexData.length;
    this.headermed = this.naamed[this.NAAIndex.indexOf(i)];
  }
  /*************** New Age Alpha Index Select End *****************/

  /*************** Sort Index ascending Start *****************/
  sortcompany() {
    if (this.SelFilter == "Human Factor Score (ascending)") {
      this.selectedIndexData.sort((a, b) => {
        return a.scores - b.scores;
      })
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
    this.GetETFValues();
  }
  /*************** After View End *****************/

  /*************** ETF Category List Start *****************/
  GetETFValues() {
    this.httpclient.get(this.api_url + "/Scores/GetETFMaster").subscribe((stockIndex: any[]) => {
      this.res = stockIndex;
      this.ETFcategory = stockIndex.map(d => d.category).filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      this.ETFcategory.unshift('All')
      let i = 0;
      this.ETFNameWise = [];
      for (i = 0; i < this.ETFcategory.length; i++) {
        if (this.ETFcategory[i] === "All") {
          var temp = stockIndex;
          this.ETFNameWise.push(temp);
        } else {
          var temp = stockIndex.filter(item => item.category === this.ETFcategory[i]);
          this.ETFNameWise.push(temp);
        }
      }
      this.res.forEach(obj => {
        let Etfval = { companyName: obj.etfName, isin: obj.assetId, ticker: obj.ticker, indexName: "ETF", country: obj.category };
        this.searchList.push(Etfval);
      });
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
        var med: any = this.ETFNameMed[i];
        var name: any = this.ETFNameList[i];
        var t: any = [];
        t = { 'name': name, 'med': med };
        etfallnametemp.push(t);
      }
      this.compETFNameList = etfallnametemp;
      this.compETFNameList.sort((a, b) => {
        return a.med - b.med;
      });
    } else {
      this.SelTab = 'ETFChild';
      this.selCategory = i;
      var tempp = [];
      tempp = this.ETFCatagoriesComp[this.ETFcategory.indexOf(i) - 1];
      this.ETFNameList = tempp.map(item => item.etfName);
      var j;
      for (i = 0; i < this.ETFNameList.length; i++) {
        var temp = this.res.filter(item => item.etfName === this.ETFNameList[i]);
        this.ETFNameFull.push(temp[0]);
      }
      var etfnametemp = [];
      for (i = 0; i < this.ETFNameList.length; i++) {
        var med: any = this.getEtfMed(this.ETFNameList[i]);
        var t: any = [];
        t = { 'name': this.ETFNameList[i], 'med': med }
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
    } else {
      //console.log(i);
      var tempmed = this.ETFNameFull.filter(item => item.etfName == i);
      //console.log(tempmed);
      return this.roundValue(tempmed[0].medianCont * 100);
    }
  }
  /*************** ETF Median End *****************/

  /*************** ETF Selected Start *****************/
  onETFNameClick(i) {
    let name = i;
    var tempp = this.ETFNameFull.filter(item => item.etfName == name);
    var CId = tempp[0].assetId;
    this.httpclient.get(this.api_url + "/Scores/GetETFCurrent/" + CId).subscribe((ETFStocks: any[]) => {
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
      this.sortcompany();
    });
  }
  /*************** ETF Selected End *****************/

  /*************** Global/NAA Tab Selected Start *****************/
  onNavClick() {
    this.stockCollapse = true;
    this.compIndexShow = true;
    this.icon = "ios-arrow-dropup-circle";
  }
  /*************** Global/NAA Tab Selected End *****************/

  /*************** ETF Tab Selected Start *****************/
  onNavETFClick() {
    this.stockCollapse = true;
    this.compIndexShow = true;
    this.icon = "ios-arrow-dropup-circle";
    this.parentcard = true;
    this.GetETFValues();
    this.httpclient.get(this.api_url + "/Scores/GetETFMaster").subscribe((stockIndex: any[]) => {
      var vall = stockIndex.map(item => item.category);
      this.ETFCatagories = vall.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      var i;
      for (i = 0; i < this.ETFCatagories.length; i++) {
        let temp = stockIndex.filter((item) => item.category === this.ETFCatagories[i]);
        this.ETFCatagoriesComp.push(temp);
      }
      this.showLoader = false;
    })
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
    } else {
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
    } else {
      this.compIndexShow = false;
      this.icon = "ios-arrow-dropdown-circle";
      this.scrollToSel();
    }
  }
  /*************** Index DropDown Icon Selection UI End *****************/

  /*************** Company Selected Start *****************/
  onCompanyClick(e) {
    this.selComp = e.companyName;
    this.searchSel = e;
    if (e.hasOwnProperty('indexType')) {
      this.getSectorList(e.industry.toString());
      this.SelSearchObj = e;
      this.SelSearchObj.etfName = this.SelIndexName;
      this.onSectorClick(e.industry);
      this.scrollToSel();
    } else if (e.indexName.indexOf('New Age Alpha ') == -1) {
      this.onSearchSelect(e);
      this.getSectorList(e.industry.toString());
      this.SelSearchObj = e;
      this.onSectorClick(e.industry);
    } else {
      var temp = e;
      this.getSectorList(temp.industry.toString());
      this.SelSearchObj = temp;
      this.onSectorClick(temp.industry);
      this.scrollToSel();
    }
    this.slides.slideTo(0);
  }
  /*************** Company Selected End *****************/

  /*************** Search Result Start *****************/
  searchCompany(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    let text = event.text.trim();
    if (text.length == 0) {
      this.searchList = this.searchList.filter(item => item.indexName.indexOf("New Age Alpha") == -1);
      this.LoadsearchList = this.searchList.slice(0, 50).map(i => {
        return i;
      });
    }
    else {
      event.component.items = [];
      event.component.items = this.searchList.filter((item) => {
        return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) > -1) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) > -1);
      });

    }
  }
  /*************** Search Result End *****************/

  /***************On Company Selected from Search Result Start *****************/
  onSearchSelect(e) {
    this.selComp = e.companyName;
    this.SelSearchObj = e;
    var industryVal = e.industry;
    if (e.indexName == "ETF") {
      this.onETFCategoryClick("All");
      this.EtfMed = this.getEtfMed(e.companyName);
      this.SelTab = '';
    } else {
      this.getSectorList(industryVal.toString())
      this.onSectorClick(e.industry);
    }
    this.GridHeaderTitle = false;
    if (e.indexName == 'ETF') {
      this.SelTab = 'ETF';
      this.onETFNameClick(e.companyName);
      this.slides.slideTo(1);
    } else {
      this.SelTab = 'Global';
      this.onglobalIndexClick(e.indexName);
      this.slides.slideTo(0);
    }
    setTimeout(() => {
      this.loadData();
    }, 50);
  }
  /***************On Company Selected from Search Result End *****************/

  /***************Search Infinite Scroll Activate Start *****************/
  getMoreSearchComp(event: { component: IonicSelectableComponent, text: string }) {
    let text = (event.text || '').trim().toLowerCase();
    if (this.LoadsearchList.length == this.searchList.length) {
      event.component.disableInfiniteScroll();
      return;
    }
    this.size = this.size + 50;
    this.LoadsearchList = this.searchList.slice(0, this.size).map(i => {
      return i;
    });
    event.component.endInfiniteScroll();
  }
  /***************Search Infinite Scroll Activate End *****************/

  /***************Geting GICS List Start *****************/
  getSectorList(data) {
    var indus = data;
    var i = 2;
    this.sectorList = [];
    while ((i / 2) < 5) {
      var searchkey = indus.substring(0, i);
      var temp = this.dbGICS.filter(item => item.code == searchkey);
      this.sectorList.push(temp[0]);
      i = i + 2;
    }
    var temp1 = [];
    temp1 = [{ 'code': 'Index', 'name': this.SelSearchObj.indexName }]
    this.sectorList.unshift(temp1[0]);
    var temp2 = [];
    temp2 = [{ 'code': 'Global', 'name': 'NAA' }];
    this.sectorList.unshift(temp2[0]);
  }
  /***************Geting GICS List End *****************/

  /*************** On GICS Click Start *****************/
  onSectorClick(key) {
    if (this.stockCollapse == true) {
      this.stockIndexShow = false;
      this.compIndexShow = false;
      this.stockIcon = "ios-arrow-dropdown-circle";
      this.icon = "ios-arrow-dropdown-circle";
    }
    if (key == "Global") {
      this.selSectorComp = this.data.filter(item => item.companyName != null && item.indexName.indexOf("New Age Alpha") == -1);
      this.selSectorComp.sort((a, b) => {
        return a.scores - b.scores;
      })
      this.selSector = this.sectorList[0];
      this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
      this.stockMed = this.roundValue(this.getMed(this.selSectorComp) * 100);
      document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      this.loadData();
      this.scrollToSel();
    }
    else if (key == "Index") {
      this.selSectorComp = this.selectedIndexData;
      this.selSector = this.sectorList[1];
      this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
      this.stockMed = this.roundValue(this.getMed(this.selSectorComp) * 100);
      document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      this.loadData();
      this.scrollToSel();
    } else {
      this.fullSectorComp = this.data.filter(item =>
        item.industry.toString().substring(0, key.toString().length) == key
      )
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
      this.selSectorComp.sort((a, b) => {
        return a.scores - b.scores;
      })
      this.selSector = this.sectorList[((key.toString().length / 2) - 1) + 2];
      this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
      this.stockMed = this.roundValue(this.getMed(this.selSectorComp) * 100);
      document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      this.loadData();
      this.scrollToSel();
    }
  }
  /*************** On GICS Click End *****************/

  /*************** Company Replace for ID Start *****************/
  getIDReplace(id) {
    return id.replace(/ /g, '-');
  }
  /*************** Company Replace for ID End *****************/

  /*************** On Pagination Click Start *****************/
  onSlide0Click() {
    this.slides.slideTo(0);
    document.getElementById("slide0dot").style.backgroundColor = "#FFFFFF"
    document.getElementById("slide1dot").style.backgroundColor = "#666"
  }

  onSlide1Click() {
    this.slides.slideTo(1);
    document.getElementById("slide1dot").style.backgroundColor = "#FFFFFF"
    document.getElementById("slide0dot").style.backgroundColor = "#666"
  }
  /*************** On Pagination Click End *****************/
  /*************** To slide the Slides/Carousel Start *****************/
  onSlideChange() {
    this.slides.getActiveIndex().then(index => {
      if (index == 0) {
        document.getElementById("slide0dot").style.backgroundColor = "#FFFFFF"
        document.getElementById("slide1dot").style.backgroundColor = "#666"
      } else {
        document.getElementById("slide1dot").style.backgroundColor = "#FFFFFF"
        document.getElementById("slide0dot").style.backgroundColor = "#666"
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
        var manInd = (index * 35) - 240;
        document.getElementById('scrollDiv').scrollTo(0, manInd);
        var sectemp = this.selSectorComp.filter((item) => item.companyName == this.selComp);
        var secInd = this.selSectorComp.indexOf(sectemp[0]) + 1;
        var mansecInd = (secInd * 35) - 240;
        document.getElementById('sectorscrollDiv').scrollTo(0, mansecInd);
      }, 100);
    }
  }
  /*************** Scroll to the Selected Company End *****************/
  loadStockData(event) {
    console.log("Done");
    event.target.complete();
    // setTimeout(()=>{
    //   console.log("Done");
    //   //event.target.complete();
    // },200);
  }

  /*************** Banner Tool Start*****************/
  M_gchart: any;
  M_chartMain: any = [];
  M_selResData: any = [];
  M_tradeDt: string = "";
  radius = 170;
  M_Companies: any = [];

  loadData() {
    this.M_gchart = d3.select("#M_gchart");
    this.M_chartMain = this.M_createMainChart(this.M_gchart);
  }

  M_createMainChart(obj) {
    d3.select("#maincircle").remove();
    d3.select("#crlChart").remove();

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
    var dbScore: any = [];
    if (that.selSector.code != "Index" && that.selSector.code != "Global" && this.sectorList.indexOf(this.selSector) != 2) {
      dbScore = this.selSectorComp;
    }
    else {
      dbScore.push(this.SelSearchObj);
    }
    this.M_selResData = dbScore.sort((a, b) => {
      return a.scores - b.scores;
    });
    let tradeDt = dbScore[0].tradeDate;
    this.M_tradeDt = tradeDt.slice(4, 6) + "/" + tradeDt.slice(6, 8) + "/" + tradeDt.slice(0, 4);
    this.M_selResData.forEach(function (d, i) {
      d.score = d.scores * 100;
      d.deg = d.score;
      d.indname = d.industry;
      d.companyName = d.companyName.trim();
      d.company = d.companyName != null ? d.companyName.toUpperCase() : null;
      d.ticker = d.ticker;
      return d.score, d.stockKey, d.industry, d.deg, d.company, d.ticker, d.indname, d
    });
    d3.select(".ringAnim").style("display", "none").remove();
    d3.select(".preloding").style("display", "none").remove();
    d3.select("#maincircle")
      .transition()
      .delay(50)
      .attr('r', that.radius - 10)
      .style('stroke-width', '40px')

      .on("end", function () {
        d3.select("#maincircle")
          .transition()
          .duration(10)
          .style('opacity', '0')
        that.M_creatGradienArc();
        that.M_Companies = that.M_selResData;
        that.M_CreateComps(that.M_chartMain, that.M_selResData, "lvl1");
      });
  }

  M_creatGradienArc() {
    var gArc = d3.select("#crlChart").append("g");
    var arc = d3.arc()
      .innerRadius(this.radius - 40)
      .outerRadius(this.radius - 0);
    var colors = [];
    var color1 = d3.scaleLinear()
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

    d3.range(4).forEach(function (d, i) {
      // convert to radians
      var start = (i * 89) * (Math.PI / 180),
        end = ((i * 89.9) + 90) * (Math.PI / 180);
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
      .duration(2000)
  }

  M_CreateComps(oSvg, dta, lvl) {
    var that = this;
    var M_compLst;
    var gExist = d3.select(".M_compLst" + lvl)._groups[0];
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
      .attr("name", function (d) { return d.stockKey })

    M_compg.append("rect")
      .attr("height", "10px")
      .attr("class", "crect_MW")
      .attr("fill", "#fff")
      .attr("x", that.radius - 42)
      .attr("y", 2)
      .attr("width", 50)
      .transition()
      .duration(2000)

    M_compg.append("rect")
      .attr("height", "27px")
      .attr("class", "crect_M")
      .attr("fill", function (d) {

        let gC100 = d3.scaleLinear()
          .domain([0, 25, 50, 75, 100])
          .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])
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
      .duration(2000)

    d3.select("#SelectedCmpyCirlce")
      .attr("height", 60)
      .attr("width", 150)
      .attr("rx", 30)
      .attr("y", -18)
  }
}
/*************** Banner Tool End *****************/
