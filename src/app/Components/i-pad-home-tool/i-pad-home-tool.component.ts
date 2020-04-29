import { Component, OnInit, AfterContentInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import * as jQuery from "jquery";
import * as $ from "jquery";
import { timeout } from 'rxjs/operators';
declare var d3VirtualScroller: any;
// declare var $: any;

@Component({
  selector: 'app-ipadhometool',
  templateUrl: './i-pad-home-tool.component.html',
  styleUrls: ['./i-pad-home-tool.component.scss'],
})
export class IPadHomeToolComponent implements OnInit, AfterContentInit, AfterViewInit {
  SelAssetId: string = "";
  SelIndex:string;
  TotalStockData:any = [];
  unsortedSelCompanyData:any = [];
  SelCompanyData:any = [];
  NAAIndexData:any = [];
  CurSectorList:any = [];
  // NAAIndexList:any = [];
  currentPercentCat:any;
  GICSData:any = [];
  GICSLevel:any = 0;
  curGICSLev:any = 6;
  selCompany: any;
  createXrad: any;
  ETFData:any = [];
  showFICountry:boolean = false;
  showETFIndex:boolean = false;
  SelETFSortOrder:string = 'H-Factor Score (ascending)';
  showETFSort:boolean = false;
  selETFCat:any;
  showNaaIndex:boolean = false;
  FIselCatogaryList:any = [];
  showFiIndexList:boolean = false;
  selSortOrder:String = 'H-Factor Score (ascending)';
  selCountry:any;
  selIndex:any;
  selIndexList:any= [];
  GlobalIndexDtata:any = [];
  showIndexList:boolean = false;
  FixedIncomeData:any = [];
  FICountryList:any = [];
  showsortList:boolean = false;
  showCompanyList:boolean = false;
  showCountryList:boolean = false;
  countryList:any = [];
  CompetLength: any = "";
  filteredCompanies:any = [];
  companiesCtrl = new FormControl();
  SelIndexName: string = "";
  SelETFIndexList:any = [];
  SelISIN: string = "";
  FromClick: string = "";
  SelTab: string = 'Stocks';
  GridExpanded: boolean = false;
  IsShowFilterDD: boolean = false;
  IsShowIndexFilterDD: boolean = false;
  IsShowCompFilterDD: boolean = false;
  IsShowDD: boolean = false;
  GridData_c: any = [];
  GridData: any = [];
  virtualScrollerComp: any;
  searchETFValName: any;
  showETFCategories:boolean = false;
  selETFCompanyName: any;
  virtualScroller: any;
  SelFilter: string = 'H-Factor Score (ascending)';
  interval: any = null;
  CompetCLength: number = 0;
  IsShowAll: boolean = true;
  showLoader:boolean = false;
  distCnt: any = 0;
  date: any;
  gchart: any;
  gC360: any; 
  gC100: any;
  radius = 170;
  chartMain: any = [];
  PerfData: any = [];
  dbGICS: any = [];
  tradeDt: string = "";
  BMPerf: any = [];
  indexPerf: any = [];
  addCmpIs: any = [];
  // IndexData: any = [];
  selResData: any = [];
  ETFCategories: any = [];
  IndexList: any = []; 
  NAAIndexList: any = [];
  GrpIndexList: any = [];
  CountryCat: any = [];
  ETFIndex: any = [];
  Companies: any = [];
  CountryCatsubIndex: any = [];
  PerfStockIndex: any = [];
  private api_url = environment.api_url;
  FilterList: any = [{ "Name": 'Company Name (ascending)', "value": "1" }, { "Name": 'Company Name (descending)', "value": "2" }, { "Name": 'H-Factor Score (ascending)', "value": "3" }, { "Name": 'H-Factor Score (descending)', "value": "4" }, { "Name": 'Ticker (ascending)', "value": "5" }, { "Name": 'Ticker (descending)', "value": "6" }];
  IndexOrder = [
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

  constructor(private changedet: ChangeDetectorRef,private httpClient: HttpClient) { }
  ngAfterViewInit(): void {
    
    this.showLoader = true;
    this.GetETFValues();
    d3.select("#dvDD").style('display', 'none');
    $('.slide-menu-control').click(function () {
      $(".slide-menu #etfParentList").removeClass('translateLeft');
    })
    $('#hideUserdropdown').click(function () {
      $(this).closest('#showUserProfileDropdown').hide();
      return false;
    });
    $('html').click(function () {
      $('#showUserProfileDropdown').hide();
    })
    $('#toggleswitch').click(function (e) {
      e.stopPropagation();
    });
    $('#UserSignInSection').css('visibility', 'hidden');
    $('#UserLogInSection').css('visibility', 'hidden');
    $('.carousel-control-prev').hide();
    $('#helpCarousel').on('slid.bs.carousel', '', function () {
      $('.carousel-control-prev').show();
      $('.carousel-control-next').show();
      if ($('.carousel-item:first').hasClass('active')) {
        $('.carousel-control-prev').hide();
      } else if ($('.carousel-item:last').hasClass('active')) {
        $('.carousel-control-next').hide();
      }
    });
    $('#md-close').on('click', function (e) {
      $('#modal-1').toggleClass("md-show"); //you can list several class names 
     // $('body').toggleClass("md-on");

      if ($('.signup-sec').find('.submitted-message').is(':visible')) {
        location.reload();
      }
      e.preventDefault();
    });

  }
  ngAfterContentInit(): void {

    this.loadData();
    let position = jQuery("#fobjText").offset();
    if (position != undefined)
      jQuery("#dvSearchBox").css({ top: position.top - 100 + " !important" });
  }

  ngOnInit() {}

  getColor(med) {
    let gc100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    return gc100(med);
  }

  getpercentColor(med){
    return (med >= 45 && med < 55)? "#FF9503" : this.getColor(med);
  }

  ApplyTextColor(val) {
    return (val >= 45 && val < 55) ? "#FF9503" : "#fff"
  }

  onCountryClick(itm){
    console.log(itm);
    this.selCountry = itm;
    this.showIndexList = true;
    this.showCountryList = false;
    this.selIndexList.length = 0;
    var temp = this.GlobalIndexDtata.filter((item)=>{ return item.CountryGroup == itm.Country}).map(x=>x.indexName).filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
    temp.forEach(val => {
      var t = [];
      t = this.GlobalIndexDtata.filter(item => item.indexName == val).map(x=>x.scores);
      var i = {'indexName':val,'Med':this.getMed(t)};
      this.selIndexList.push(i);
    });
    this.selIndexList.sort((a,b)=>{
      return a.Med - b.Med;
    })
    console.log(this.selIndexList);
    
  }

  onIndexClick(itm){
    console.log(itm);
    this.selIndex = itm;
    this.showCompanyList = true;
    this.SelCompanyData = this.GlobalIndexDtata.filter(item=> item.indexName == itm.indexName );
    this.unsortedSelCompanyData = this.GlobalIndexDtata.filter(item=> item.indexName == itm.indexName );
    this.TotalStockData = this.GlobalIndexDtata.filter(item=> item.indexName == itm.indexName );
    this.GICSLevel = 2;
    this.curGICSLev = 2;
    this.onGICSLevelClick(2);
  }

  getSectorList(data){
    var indus = data.industry;

    var i = 2;
    this.CurSectorList.length = 0;
    while(i < 9)
    {
    var temp = this.dbGICS.filter(x=> x.code == indus.toString().substring(0,i))[0];
    var tempmed = this.getMed(this.SelCompanyData.filter(x=> x.industry.toString().substring(0,i) == indus.toString().substring(0,i)).map(x=> x.scores));
    temp.med = tempmed;
    i = i + 2;
    this.CurSectorList.push(temp);
    console.log(temp);
    }
    console.log(this.CurSectorList);
    
  }


  onETFIndSortTabClick(){
    if(this.showETFSort == true){
      this.showETFSort = false;
    }else{
      this.showETFSort = true;
    }
    
  }

  GetETFHoldingsData(itm){
    console.log(itm);
    this.httpClient.get(this.api_url + "/Scores/GetETFCurrent/" + itm.assetId).subscribe((ETFStocks: any[]) => {
      console.log(ETFStocks);
      itm.Med = itm.medianCont;
      itm.indexName = itm.etfName;
      this.selIndex = itm;
      this.SelCompanyData.length = 0;
      this.unsortedSelCompanyData.length = 0;
      this.TotalStockData.length = 0;
      ETFStocks.forEach(e=>{
        var t = this.selResData.filter((item)=> { return item.aisin == e.isin && item.indexName.indexOf('New Age Aplha') == -1})[0];
        this.SelCompanyData.push(t);
        this.unsortedSelCompanyData.push(t);
        this.TotalStockData.push(t);
      });

      this.GICSLevel = 2;
    this.curGICSLev = 2;
    this.onGICSLevelClick(2);
      this.showCompanyList = true;
      this.showETFIndex = false;
      this.showETFCategories = false;
      console.log(ETFStocks);
      console.log(this.SelCompanyData);
      console.log(this.unsortedSelCompanyData);
    })
  }

  onETFIndsortClick(by){
    var sortby = by;

    if(sortby == 'ETF_ASC'){
      this.SelETFSortOrder = 'ETF Name (ascending)';
      this.SelETFIndexList.sort((a,b)=>{
        return a.etfName.localeCompare(b.etfName); 
      })
    }else if(sortby == 'ETF_DES'){
      this.SelETFSortOrder = 'ETF Name (descending)';
      this.SelETFIndexList.sort((a,b)=>{
        return b.etfName.localeCompare(a.etfName); 
      })
    }else if(sortby == 'HF_ASC'){
      this.SelETFSortOrder = 'H-Factor Score (ascending)';
      this.SelETFIndexList.sort((a,b)=>{
        return a.medianCont - b.medianCont;
      })
    }else if(sortby == 'HF_DES'){
      this.SelETFSortOrder = 'H-Factor Score (descending)';
      this.SelETFIndexList.sort((a,b)=>{
        return b.medianCont - a.medianCont;
      })
    }else if(sortby == 'T_ASC'){
      this.SelETFSortOrder = 'Ticker (ascending)';
      this.SelETFIndexList.sort((a,b)=>{
        return a.ticker.localeCompare(b.ticker); 
      })
    }else if(sortby == 'T_DES'){
      this.SelETFSortOrder = 'Ticker (descending)';
      this.SelETFIndexList.sort((a,b)=>{
        return b.ticker.localeCompare(a.ticker); 
      })
    }
    this.showETFSort = false;
  }

  onFIIndexClick(item){
    item.Med = item.medianCont;
    item.indexName = item.category == 'HY'?'High Yield':'Investment Grade';
    
    console.log(item);
     this.selIndex = item;
     
    this.httpClient.get(this.api_url+'/Scores/GetBondMappingStocks/'+item.category).subscribe((res:any[]) =>{
      this.SelCompanyData.length = 0;
      this.unsortedSelCompanyData.length = 0;
      this.TotalStockData.length = 0;
      console.log(res);
      res.forEach(e=>{
        this.SelCompanyData.push(this.GlobalIndexDtata.filter(x=> x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1)[0]);
        this.unsortedSelCompanyData.push(this.GlobalIndexDtata.filter(x=> x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1)[0]);
        this.TotalStockData.push(this.GlobalIndexDtata.filter(x=> x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1)[0]);
      });
      this.SelCompanyData.sort((a,b)=>{
        return a.scores - b.scores;
      })
      this.unsortedSelCompanyData.sort((a,b)=>{
        return a.scores - b.scores;
      })
      this.TotalStockData.sort((a,b)=>{
        return a.scores - b.scores;
      })
      // console.log(this.SelCompanyData);
      // console.log(this.unsortedSelCompanyData);
      this.showCompanyList = true;
      this.GICSLevel = 2;
    this.curGICSLev = 2;
    this.onGICSLevelClick(2);
    });
  }

  onsorttabClick(){
    if(this.showsortList){
      this.showsortList = false;
    }else{
      this.showsortList = true;
    }
    
  }

  onsortClick(by){
    var sortby = by;
    if(sortby == 'CN_ASC'){
      this.SelCompanyData.sort((a,b)=>{
        return a.companyName.localeCompare(b.companyName);
      });
      this.selSortOrder = 'Company Name (ascending)';
    }else if(sortby == 'CN_DES'){
      this.SelCompanyData.sort((a,b)=>{
        return b.companyName.localeCompare(a.companyName);
      });
      this.selSortOrder = 'Company Name (descending)';
    }else if(sortby == 'HF_ASC'){
      this.SelCompanyData.sort((a,b)=>{
        return a.scores - b.scores;
      });
      this.selSortOrder = 'H-Factor Score (ascending)';
    }else if(sortby == 'HF_DES'){
      this.SelCompanyData.sort((a,b)=>{
        return b.scores - a.scores;
      });
      this.selSortOrder = 'H-Factor Score (descending)';
    }else if(sortby == 'T_ASC'){
      this.SelCompanyData.sort((a,b)=>{
        return a.ticker.localeCompare(b.ticker);
      });
      this.selSortOrder = 'Ticker (ascending)';
    }else if(sortby == 'T_DES'){
      this.SelCompanyData.sort((a,b)=>{
        return b.ticker.localeCompare(a.ticker);
      });
      this.selSortOrder = 'Ticker (descending)';
    }else if(sortby == 'P_ASC'){
      this.SelCompanyData.sort((a,b)=>{
        return a.price - b.price;
      });
      this.selSortOrder = 'Price (ascending)';
    }else if(sortby == 'P_DES'){
      this.SelCompanyData.sort((a,b)=>{
        return b.price - a.price;
      });
      this.selSortOrder = 'Price (descending)';
    }

    this.showsortList = false;
  }

  onIndexBackClick(){
    this.showIndexList = false;
    this.showCountryList = true;
  }
  onIndexSelectClick(){
    this.GICSLevel = 0;
    this.selSortOrder = 'H-Factor Score (ascending)';
    this.showsortList = false;
      this.showETFSort = false;
    document.getElementById('RightDiv').style.opacity = '1';
    if(this.SelIndex == 'Equity Indexes'){
      this.showCountryList = true;
      this.showCompanyList = false; 
      this.showETFCategories = false;
      
      // console.log(this.CountryCatsubIndex);
      this.countryList.length = 0;
      this.GlobalIndexDtata.forEach(val => {
        val.CountryGroup = val.indexName.indexOf('Europe') > -1? 'Europe' : val.country;
      });
      var temp = [];
      temp = this.GlobalIndexDtata.map(x=>x.CountryGroup).filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      temp.forEach(val =>{
        var t = [];
        t = this.GlobalIndexDtata.filter(item => item.CountryGroup == val).map(x=>x.scores);
        // console.log(t);
        // console.log(this.getMed(t));
        var i = {'Country':val,'Med':this.getMed(t)};
        this.countryList.push(i);
      })
      this.countryList.sort((a,b)=>{
       return a.Med - b.Med;
      })
      console.log(this.countryList);
      console.log(this.GlobalIndexDtata);
    }else if(this.SelIndex == 'Fixed Income'){
      this.showFICountry = true;
      this.showCompanyList = false;
      this.showIndexList = false;
      this.showETFCategories = false;
      // this.showFiIndexList = false;
    }else if(this.SelIndex == 'NAA Indexes'){
      this.showNaaIndex = true;
      this.showCompanyList = false;
      this.showIndexList = false;
      this.showFICountry = false;
      this.showFiIndexList = false;
      this.showETFCategories = false;
    }else if(this.SelIndex == 'ETFs'){
      this.showETFCategories = true;
      this.showNaaIndex = false;
      this.showCompanyList = false;
      this.showIndexList = false;
      this.showFICountry = false;
      this.showFiIndexList = false;
    }

    
  }

  oncomapnyclick(itm){
    this.selCompany = itm;
    this.getSectorList(itm);
    this.curGICSLev = 6;
    this.GICSLevel = 6;
    this.onGICSLevelClick(6);
    this.fnIndexSelClick(itm,'click');
    // this.setClock(itm.isin, itm.deg * 360 / 100, itm.company + " (" + itm.ticker + ") [" + d3.format(".1f")(itm.score) + "%]", 'click', itm.stockKey, itm.score);
    console.log(this.selCompany);
  }

  onNAAIndexClick(itm){
    itm.Med = itm.med/100;
    this.selIndex = itm;
    this.showNaaIndex = false;
    
    this.showIndexList = false;
    this.showFICountry = false;
    this.showFiIndexList = false;
    this.SelCompanyData = this.NAAIndexData.filter(item=> item.indexName == itm.indexName);
    this.unsortedSelCompanyData = this.NAAIndexData.filter(item=> item.indexName == itm.indexName);
    this.TotalStockData = this.NAAIndexData.filter(item=> item.indexName == itm.indexName);
    this.SelCompanyData.sort((a,b)=>{
      return a.scores - b.scores;
    });
    this.unsortedSelCompanyData.sort((a,b)=>{
      return a.scores - b.scores;
    });
    this.TotalStockData.sort((a,b)=>{
      return a.scores - b.scores;
    });
    this.GICSLevel = 2;
    this.curGICSLev = 2;
    this.onGICSLevelClick(2);
    this.showCompanyList = true;
  }

  onGICSLevelClick(lev){
    this.curGICSLev = lev;
    // this.TotalStockData = 
    this.selSortOrder = 'H-Factor Score (ascending)';
    console.log(lev);
    if(lev == 1){
      this.SelCompanyData = [...this.GlobalIndexDtata];
       this.unsortedSelCompanyData = [...this.GlobalIndexDtata];
      this.getPercentCategories(this.GlobalIndexDtata);
    }else if(lev == 2){
       this.SelCompanyData = [...this.TotalStockData];
       this.unsortedSelCompanyData = [...this.TotalStockData];
      console.log(this.SelCompanyData);
      console.log(this.unsortedSelCompanyData);
      console.log(this.TotalStockData);
      this.getPercentCategories(this.SelCompanyData);
    }else if(lev == 3){
      this.SelCompanyData = this.TotalStockData.filter(x=> x.industry.toString().substring(0,2) == this.selCompany.industry.toString().substring(0,2));
      this.unsortedSelCompanyData = this.TotalStockData.filter(x=> x.industry.toString().substring(0,2) == this.selCompany.industry.toString().substring(0,2));
      this.getPercentCategories(this.SelCompanyData);
    }else if(lev == 4){
      this.SelCompanyData = this.TotalStockData.filter(x=> x.industry.toString().substring(0,4) == this.selCompany.industry.toString().substring(0,4));
      this.unsortedSelCompanyData = this.TotalStockData.filter(x=> x.industry.toString().substring(0,4) == this.selCompany.industry.toString().substring(0,4));
      this.getPercentCategories(this.SelCompanyData);
      
    }else if(lev == 5){
      this.SelCompanyData = this.TotalStockData.filter(x=> x.industry.toString().substring(0,6) == this.selCompany.industry.toString().substring(0,6));
      this.unsortedSelCompanyData = this.TotalStockData.filter(x=> x.industry.toString().substring(0,6) == this.selCompany.industry.toString().substring(0,6));
      this.getPercentCategories(this.SelCompanyData);
      
    }else if(lev == 6){
      this.SelCompanyData = this.TotalStockData.filter(x=> x.industry.toString().substring(0,8) == this.selCompany.industry.toString().substring(0,8));
      this.unsortedSelCompanyData = this.TotalStockData.filter(x=> x.industry.toString().substring(0,8) == this.selCompany.industry.toString().substring(0,8));
      this.getPercentCategories(this.SelCompanyData);
    }
    
  }

  getFixedIncomeData(){
    this.httpClient.get(this.api_url+'/Scores/GetFixedDataMaster').subscribe((res:any[])=>{
      console.log(res);
      var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };

      this.FixedIncomeData = groupBy(res,'country');
      console.log(this.FixedIncomeData);
      var temp = res.map(x=>x.country).filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      this.FICountryList = temp;
      console.log(this.FICountryList);
      temp.forEach(e=>{
        var t = this.FixedIncomeData[e];
        var tmedlist = t.map(x => this.roundofMed(x.medianCont*100));
        var tmed; 
        var  array = tmedlist.sort();
        if (array.length % 2 === 0) { // array with even number elements
          tmed = (parseFloat(array[array.length / 2]) + parseFloat(array[(array.length / 2) - 1]))/2;
          tmed = Math.round(tmed * 10) /10
        }
        else {
          tmed = array[(array.length - 1) / 2]; // array with odd number elements
        }
        this.FixedIncomeData[e].med = tmed;
      });
      console.log(this.FixedIncomeData);
      
    });
  }

  onFICountryClick(itm){
    this.selCountry = itm;
    this.showFICountry = false;
    this.showFiIndexList = true;
    this.FIselCatogaryList = this.FixedIncomeData[itm];
  }

  onFIIndexBackClick(){
    this.showFICountry = true;
    this.showFiIndexList = false;
  }

  onETFCatClick(item){
    this.selETFCat = item;
    this.showETFCategories = false;
    this.showETFIndex = true;
    this.SelETFIndexList = this.GetETFs(item);
    console.log(this.SelETFIndexList);
  }

  onETFBackClick(){
    this.showETFCategories = true;
    this.showETFIndex = false;
  }

  roundofMed(val){
    return (Math.round(val * 10) / 10).toFixed(1);
  }
  getMed(array: any) {

    //array = array.map(item => item.scores);
    //return array.filter(d=>{d.medianCont});
    array = array.sort();
    if (array.length % 2 === 0) { // array with even number elements
      return (array[array.length / 2] + array[(array.length / 2) - 1]) / 2;
    }
    else {
      return array[(array.length - 1) / 2]; // array with odd number elements
    }
  }
  GetETFValues() {
    let that = this;
    this.httpClient.get(this.api_url + "/Scores/GetETFMaster").subscribe((stockIndex: any[]) => {
      that.ETFIndex = stockIndex;
      console.log(this.ETFIndex);
      that.RollUpETF();
    });
  }

  RollUpETF() {
    var stockIndex = this.ETFIndex.sort(function (a, b) { return d3.ascending(a.medianCont, b.medianCont); });
    this.PerfStockIndex = d3.nest()
    .key(function (d) {
      return d.category;
    })
    .rollup(function (v) {
      return {
        comp: v,
        med: d3.format(".1f")(d3.median(v, function (d) { return d.medianCont * 100; })),
      };
    }).entries(stockIndex);

  stockIndex.forEach(x => {
    x.All = 'All'
  });

  let AllPerfStockIndex = d3.nest()
      .key(function (d) {
        return d.All;
      })
      .rollup(function (v) {
        return {
          comp: v,
          med: d3.format(".1f")(d3.median(v, function (d) { return d.medianCont * 100; })),
        };
      }).entries(stockIndex);

      this.PerfStockIndex.unshift(AllPerfStockIndex[0]);
      this.ETFCategories = this.PerfStockIndex.map(x => x.key);
      console.log(this.ETFCategories);
  }

  loadData(){
    this.gC360 = d3.scaleLinear()
      .domain([0, 90, 180, 270, 360])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    this.gC100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    var ContainerDiv = document.getElementById("svgHContainer");

    this.gchart = d3.select("#gchart")

    let that = this;
    this.chartMain = this.createMainChart(this.gchart);
  }

  createMainChart(obj){
    let that = this;

    // Main Circle group Start

    let sradius = 100;
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
      repeat(); repeat1();
      that.CreateData("");
    });

    function repeat() {
      d3.select(".ringAnim")
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
      d3.select(".preloding")
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
  }

  CreateData(d){
    this.changedet.detectChanges();
    var APIURL = this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL";
    var fInd;
    var fURL = "../../../assets/data/";
    fInd = fURL + "siteGICS.csv";
    let that = this;
    
    this.getFixedIncomeData();
    this.httpClient.get(this.api_url + "/Industry/GetIndustry").subscribe((res: any[]) => {
      that.dbGICS = res;
      console.log(that.dbGICS)
    });

    // if (d != "") {
    //   APIURL = this.api_url + "/Scores/GetNAAIndexScoresHist/GLOBAL/" + d;
    // }

    this.httpClient.get(APIURL).subscribe((res: any[]) => {
      let dbScore = res;
      console.log(dbScore);
      that.selResData = dbScore.sort(function (x, y) {
        return d3.ascending(x.scores, y.scores);
      });
      // that.IndexData = dbScore;
      console.log(that.selResData);
      var sMin = Math.min.apply(Math, that.selResData.map(function (d) { return d.scores; }));
      var sMax = Math.max.apply(Math, that.selResData.map(function (d) { return d.scores; }));
      console.log(sMin);
      console.log(sMax);
      let tradeDt = dbScore[0].tradeDate;
      that.tradeDt = tradeDt.slice(4, 6) + "/" + tradeDt.slice(6, 8) + "/" + tradeDt.slice(0, 4);
      that.date = new Date(this.tradeDt);
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
        let flt = that.IndexOrder.filter(function (x) { return x.index == d.indexName });
        d.sortOrder = flt.length > 0 ? flt[0].order : null;
        return d.score, d.isin, d.industry, d.deg, d.company, d.ticker, d.indname, d.stockKey, d.indexName, d;
      });
      console.log(that.selResData);
      that.GlobalIndexDtata = that.selResData.filter((item)=>{ return item.indexName.indexOf('New Age Alpha') == -1});
      that.NAAIndexData = that.selResData.filter((item)=>{ return item.indexName.indexOf('New Age Alpha') != -1});
      console.log(this.GlobalIndexDtata);
      console.log(this.NAAIndexData);
      let MedianList = that.getIndexPos(that.selResData);
      console.log(MedianList);
      let indexList = MedianList.map(x => x.value);
      
      indexList = indexList.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      }).sort(function (x, y) {
        return d3.ascending(parseFloat(x.med), parseFloat(y.med));
      });
      
      that.IndexList = indexList.filter(function (val) {
        return val.indexName.indexOf("New Age Alpha") == -1
      });
      console.log(that.IndexList);
      that.NAAIndexList = indexList.filter(function (val) {
        return val.indexName.indexOf("New Age Alpha") > -1
      });
      console.log(that.NAAIndexList);

      that.GrpIndexList = that.getCountryPos(that.selResData);
      that.CountryCat = that.GrpIndexList.map(x => x.key);
      console.log(that.CountryCat);

      that.CountryCatsubIndex = [];
      let lookupcountrylist: countryList;

      that.GrpIndexList.forEach(function (dt) {
        let filtereindexes = that.GetGlobals(dt.key);
        for (var i = 0; i < filtereindexes.length; i++) { 
          lookupcountrylist = new countryList();
          lookupcountrylist.country = dt.key;
          lookupcountrylist.filteredIndexes = "";
          lookupcountrylist.filteredIndexes = filtereindexes[i]; 
          lookupcountrylist.med = that.IndexList.filter(x => x.indexName == lookupcountrylist.filteredIndexes).length > 0 ? that.IndexList.filter(x => x.indexName == lookupcountrylist.filteredIndexes)[0].med : 0;
           
          that.CountryCatsubIndex.push(lookupcountrylist);
        }
      });

      this.showLoader = false;
      console.log(that.CountryCatsubIndex);

      let lookup = [];
      var items = that.selResData;
      let resultData = [];

      items.forEach(function (dt) {
        if (!(lookup.indexOf(dt.stockKey) > -1)) {
          lookup.push(dt.stockKey);
          resultData.push(dt);
        }
      });
      this.changedet.detectChanges();
      that.distCnt = resultData.length;
      d3.select(".ringAnim").style("display", "none").remove();
      d3.select(".preloding").style("display", "none").remove();

      d3.select("#maincircle")
        .transition()
        .delay(300)
        .duration(1000)
        .attr('r', that.radius + 2)
        .style('stroke-width', '1px')

        .on("end", function () {
          d3.select("#maincircle")
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
          
            d3.select(".Homecenter")
            .transition()
            .duration(1000)
            .style('opacity', '1');

            d3.select("#dvSearchBox")
            .transition()
            .duration(1000)
            .style('opacity','1');

            d3.select("#IndexSelector")
            .transition()
            .duration(1000)
            .style('opacity','1');

            jQuery("#matAuto").show();
          jQuery('#loadSpinner').fadeOut();
          jQuery("#SearchedTxt").show();
          jQuery('#SpinLoader').fadeOut();
          that.ETFIndex.forEach(obj => {
            let Etfval = { companyName: obj.etfName, isin: obj.assetId, ticker: obj.ticker, indexName: "ETF", country: obj.category };
            that.Companies.push(Etfval);
          });
        });
    });
  }

  getGlobalMed(){
    var temp = this.GlobalIndexDtata.map(x=>x.scores);
    return this.getMed(temp);
  }

  getPercentCategories(data:any){
    console.log(data);
    var t1 = data.filter(x=>x.scores <= .25).length;
    var t2 = data.filter(x=>x.scores >= .25 && x.scores <= .50).length;
    var t3 = data.filter(x=>x.scores >= .50 && x.scores <= .75).length;
    var t4 = data.filter(x=>x.scores >= .75 && x.scores <= 1).length;
    var temp = [{'Tag':'0-25%', 'value': t1}, {'Tag':'25-50%', 'value': t2}, {'Tag':'50-75%', 'value': t3},{'Tag':'75-100%', 'value': t4}];
    this.currentPercentCat = temp;
    console.log(temp);
  }

  replacestr(str:String){
    return str.replace('New Age Alpha ','');
  }

  createCompeOver(grp1) {
    grp1.append("g").attr("id", "gCompeOver");
  }

  creatClockSlider() {
    let that = this;
    var r = d3.select("#maincircle").attr("r");
    that.createXrad = parseInt(r);
    // console.log(that.createXrad, r);
    var g = d3.select("#crlChart").append("g")
      .attr("id", "cSlider")
      .attr('transform', 'rotate(' + (-90) + ')')
      .on('mousedown', onDown)
      .on("touchstart", onDown)

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
      .attr("x", + r + (25))
      .attr("height", "40px")
      .attr("width", "170px")
      .style("display", "none");

    var text = g.append("text")
      .attr("class", "sText")
      .attr("x", + r + (40))
      .attr("dy", 0)
      .style("alignment-baseline", "middle")
      .style("font-size", "12px")
      .style("display", "none")
      .text("0.00");
    var data;

    function onDown() {
      data = d3.selectAll(".compList[style='display: block;']").selectAll(".comp").data();
    }

  }

  fnIndexSelClick(d, type) {
    let that = this;
    that.SelIndexName = d.indexName;
    let SelRows = that.selResData.filter(x => x.isin == d.isin);
    let RectOn = d3.select(".rectOn");
    let ChkRecton = null;
    if (RectOn.node() != null) {
      ChkRecton = RectOn.node().parentNode.id == "nav-1";
    }
    if (type == "CompClick") { ChkRecton = true; }
    let strtype = type == "" ? (that.FromClick == "ETFClick" ? "ETFCompClick" : (that.FromClick == "indexClick" ? "indexCompClick" : that.FromClick)) : type;


    that.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + d.ticker + ") [" + d3.format(".1f")(d.score) + "%]", strtype, d.stockKey, d.score);

  }

  createSctor(grp1, lvl) {
    var gs = grp1.append("g")
      .attr("id", "levl" + lvl)
      .attr("class", "gics");
    gs.append("circle").attr("r", 20).attr("fill", "#fff")
    gs.append("text").attr("y", 3).attr("class", "med")
    gs.append("text").attr("y", 35).attr("class", "name")
  }

  createCompetitive(grp1) {
    grp1.append("g").attr("id", "gCompetitive");
  }
  Replacetxt(val) {
    return val.replace(/ /g, '_').replace(/&/g, '').replace('Large-Cap', 'LargeCap').replace('U.S.', 'US');
}

  GetETFHoldings(ctId: string, etfName: string, mode: string) {
    let that = this;
    //this.showLoadSpinner = true;
    // $('#SpinLoader').css('display', 'flex');
    // this.SelTab = "Stocks";

    let IndexN = that.Replacetxt(etfName);

    that.searchETFValName = IndexN;
    // console.log(that.searchETFValName);
    //this.CheckETFIndexSelectedCompany = true;


    that.selETFCompanyName = etfName;
    d3.selectAll(".circle").classed("is-selected", false);
    //d3.select("#" + IndexN).classed("is-selected", true);

    this.httpClient.get(this.api_url + "/Scores/GetETFCurrent/" + ctId).subscribe((EtfStocks: any[]) => {
        let Name = etfName;
        that.SelAssetId = Name;
        that.selResData.forEach(function (d, i) {
            let val = EtfStocks.filter(x => x.isin == d.aisin);
            if (d.indexName.indexOf("New Age Alpha") == -1) {
                d.Assets = val.length > 0 ? Name : 0;
            }
        });

        let SelISIN = this.selResData.filter(x => x.Assets == Name)[0].isin;
        let IndexN = this.selResData.filter(x => x.Assets == Name)[0].indexName;
        if (SelISIN != "") {
            this.SelIndexName = IndexN;
            let d = d3.select(".comp[name='" + SelISIN + "_" + IndexN.replace(/ /g, '_') + "']").datum();
            this.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + d.ticker + ") [" + d3.format(".1f")(d.score) + "%]", mode == "Search" ? "ETFClick" : "ETFClick", d.stockKey, d.score);
        }
        //console.log(ctId)
        //console.log(this.selResData.filter(x => x.Assets == Name))
        // this.showLoadSpinner = false;
        // $('#SpinLoader').fadeOut();
        // this.fnStockstabclick("Stocks");
    });
    //this.SelTab = "ETF";
    this.IsShowDD = !this.IsShowDD;
    if (mode == "Search") { this.IsShowDD = false; }
}
onsearchchages(val){
  console.log(val);
  if(val.length > 0){
  this.filteredCompanies = this.selResData.filter(item=>{return item.companyName.toLowerCase().indexOf(val) > -1 || item.ticker.toLowerCase().indexOf(val) > -1});
  console.log(this.filteredCompanies);
  }else{
    this.filteredCompanies.length = 0;
  }
}
  GetSelected(value:any) {
    console.log(value);
    value=value.toString();
    this.changedet.detectChanges();
    this.IsShowDD = false;
    this.SelTab = "Stocks";
    d3.selectAll(".card-body").selectAll(".circle").classed("is-selected", false);
    d3.selectAll(".card-body").selectAll("li").classed("is-selected", false);
    this.fnStockstabclick("Stocks");
    // this.closeETF();
    let selComp = this.Companies.filter(x => x.isin == value.split('_')[0])[0];
    let selIndex = value.split('_')[1];

    if (selIndex == "ETF") {
        let selETF = this.ETFIndex.filter(x => x.assetId == value.split('_')[0])[0];
        this.GetETFHoldings(selETF.assetId, selETF.etfName, "Search");

        // try {
        //     this.angulartics2.eventTrack.next({
        //         action: 'Company Search',
        //         properties: { category: 'HomeTool', label: selETF.company + " (" + selETF.ticker + ")", value: selETF.company + " (" + selETF.ticker + ")" }
        //     });
        // } catch (e) { console.log(e); }

    } else {
        //  d3.select(".comp[name='" + value.replace(/ /g, '_') + "']").dispatch('click');
        let d = d3.select(".comp[name='" + value.replace(/ /g, '_') + "']").datum();
        console.log(d);
        this.SelIndexName = d.indexName;
        this.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + d.ticker + ") [" + d3.format(".1f")(d.score) + "%]", "CompClick", d.stockKey, d.score);
        // try {
        //     this.angulartics2.eventTrack.next({
        //         action: 'Company Search',
        //         properties: { category: 'HomeTool', label: selComp.company + " (" + selComp.ticker + ")", value: selComp.company + " (" + selComp.ticker + ")" }
        //     });
        // } catch (e) { console.log(e); }
    }
}

  CreateComps(oSvg, dta, lvl) {
    let that = this;
    var compLst;
    var gExist = d3.select(".compLst" + lvl)._groups[0];
    if (gExist != "") {
      compLst = oSvg.select('.compLst' + lvl).remove();
    }

    compLst = oSvg.append("g").attr('class', 'compList compLst' + lvl).style("display", "block");

    var compC = compLst.append("g").attr("class", 'compLstC' + lvl);

    var compg = compC.selectAll("g")
      .data(dta)
      .enter().append("g")
      .attr("class", "comp")
      .attr('fill','#fff')
      .attr("transform", function (d, i) { return "rotate(" + ((d.deg * 360 / 100) - 90) + ")"; })
      .attr("name", function (d) { return d.isin + "_" + d.indexName.replace(/ /g, '_') })

      .on("click", function (elemData) {
        var gblSelId = d3.select(this).attr("name");
        var d = d3.select(this).datum();
        that.fnIndexSelClick(d, "CompClick");
        that.hideSidebar();
        

        d3.select(".sRect1").style("opacity", "1");
        d3.select(".sRect").style("opacity", "1");
        d3.select(".sRectCompare").style("opacity", "1");
        d3.select(".sRectCompareOverlay").style("opacity", "1");
        d3.select("#cSlider").select(".sText").style("opacity", "1");
        d3.select("#cSlider").select(".sTextReverse").style("opacity", "1");
      });

    var dmin = d3.min(dta.map(x => x.marketCap));
    var dmax = d3.max(dta.map(x => x.marketCap));
    var dmean = d3.mean(dta.map(x => x.marketCap));
    var dsum = d3.sum(dta.map(x => x.marketCap));

    let ResMarketCap = dta.map(x => x.marketCap);
    let LimitedCap = ResMarketCap.filter(x => x < dmean && x != null);
    let dlimitedSum = d3.sum(LimitedCap);

    var rmax = (dmax - dmin) > 100 ? 100 : (dmax - dmin);
    rmax = rmax < 50 ? 50 : rmax;

    var h = d3.scaleLinear()
      .domain([dmin, dmax])
      .range([0, 50]);

      let LimitedMarketCap =

      compg.append("rect")
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
            if (wt > 18) { wt = 18 + wt / 10; }
            return wt + "px";
          }
        });
  }

  showCompOver(el, dat) {

    let that = this;
    var gs = d3.select("#gCompeOver");
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
      .text(function () { return dat.company + " (" + dat.ticker + ") [" + d3.format(".1f")(dat.score) + "%]"; }).call(that.wrap, 100);

      gs.on("mouseover", function () {
        d3.select("#gCompeOver").style("display", "block");
        d3.select(el).select(".crect").classed("onrect", true);
      });
      gs.on("mouseout", function () {
        d3.select("#gCompeOver").style("display", "none");
        d3.select(el).select(".crect").classed("onrect", false);
      });
      gs.on("click", function (elemData) {
        var d = d3.select(el).datum();
        that.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + dat.ticker + ") [" + d3.format(".1f")(d.score) + "%]", "click", d.stockKey, d.score);
        that.hideSidebar();
        // try {
        //   that.angulartics2.eventTrack.next({
        //     action: 'Company Click',
        //     properties: { category: 'HomeTool', label: d.company + " (" + d.ticker + ")", value: d.company + " (" + d.ticker + ")" }
        //   });
        // } catch (e) { console.log(e); }
      });
  }

  setClock(isin, val, txt, from, stockKey, score) {
    this.FromClick = from;
    if (txt != null) {
      if (from != "indexClick") {
        d3.select("#cSlider").style("display", "block"); d3.select("#gPerformance").style("display", "block");
      } else {
        d3.select("#cSlider").style("display", "none"); d3.select("#gPerformance").style("display", "none"); this.indexPerf = []; this.BMPerf = [];
      }
      if (from != "random") {
        // d3.select("#gBreadCrumb").style("display", "block");
        d3.select("#viewport4").style("display", "block");
        d3.select(".gHelp").style("display", "none")
        d3.select(".gHand").style("display", "none")
      }
      if (from == "CompClick" && this.SelTab == "ETF") {
        this.SelTab = "Global";
      }
      // console.log("======"+from+"=======");
      let that = this;
      that.SelISIN = isin;
      var r = d3.select("#maincircle").attr("r");
      let gC360 = d3.scaleLinear()
        .domain([0, 90, 180, 270, 360])
        .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])



      if (from == "click" || from == "random") {
        if (from == "random") {
          d3.select(".gHelp")
            // .style("display", "block")
            .style("opacity", "1")
            .transition()
            .duration(600)
            .style("opacity", "0")
            .style("display", "none")

          d3.select(".gHand")
            // .style("display", "block")
            .style("opacity", "0")
            .transition()
            .duration(300)
            .style("opacity", "1")

          d3.select("#cSlider")
            .transition()
            .ease(d3.easeExp)
            .delay(800)
            .duration(800)
            .attr('transform', 'rotate(' + (val - 90) + ')')
            .attr('name', isin)
            .on("end", function () {
              d3.select(".gHand")
                .style("display", "none")
                .style("opacity", "1")
                .transition()
                .duration(600)
                .style("opacity", "0")
                .style("display", "none")

              d3.select(".gHelp")
                //.style("display", "block")
                .style("opacity", "0")
                .transition()
                .duration(600)
                .style("opacity", "1")
              //.style("display", "block")

            });


          d3.select(".gHelp")
            .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)')

          d3.select(".gHand")
            .transition()
            .ease(d3.easeExp)
            .delay(800)
            .duration(800)
            .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)')

        }
        else {
          d3.select(".gHelp")
            .style("display", "none")
          d3.select(".gHand")
            .style("display", "none")

          d3.select("#cSlider")
            .transition()
            .ease(d3.easeExp)
            .duration(800)
            .attr('transform', 'rotate(' + (val - 90) + ')')
            .attr('name', isin)
            .on("end", function () {
              d3.select(".sRect1").style("opacity", "1");
              d3.select(".sRect").style("opacity", "1");
              d3.select(".sRectCompare").style("opacity", "1");
              d3.select(".sRectCompareOverlay").style("opacity", "1");
              d3.select("#cSlider").select(".sText").style("opacity", "1");
              d3.select("#cSlider").select(".sTextReverse").style("opacity", "1");
            })

          d3.select(".gHand")
            .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)')

          d3.select(".gHelp")
            .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)')
        }
      }
      else {
        d3.select("#cSlider")
          .attr('transform', 'rotate(' + (val - 90) + ')')
          .attr('name', isin);

        d3.select(".gHand")
          .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)')

        d3.select(".gHelp")
          .attr('transform', 'translate(160,0)rotate(' + -(val - 90) + ',0,0)')
      }



      d3.select("#cSlider").select(".sText")
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
        .text(txt).call(that.wrap, 100);
      d3.select("#cSlider").style("display", "block");
      var bbox = d3.select("#cSlider").select(".sText").node().getBBox();
      var bboxH = +bbox.height + 20; bboxH = bboxH > 40 ? bboxH : 40;


      if (val > 180) {
        //  d3.select("#cSlider").select("sText")
        //  .style("text-anchor", "start")
        //  .attr("x", -bbox.width - 200)
      }

      d3.select("#cSlider").select(".sRect")
        .attr("fill", function () { return gC360(val); })
        .style("display", function () { return txt == null ? "none" : "block"; })
        .attr("height", bboxH)
        .attr("width", bbox.width + 30)
        .attr("y", -(bboxH / 2));
      var calW = parseInt(that.createXrad + bbox.width);

      d3.select("#cSlider").select(".sTextReverse")
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

      d3.select(".recton").classed("recton", false);
      d3.select(".comp[name='" + isin + "_" + that.SelIndexName.replace(/ /g, '_') + "']").raise();
      d3.select(".comp[name='" + isin + "_" + that.SelIndexName.replace(/ /g, '_') + "']").select("rect").classed("recton", true)
      console.log(this.SelIndexName);
      var selData = d3.select(".comp[name='" + isin + "_" + that.SelIndexName.replace(/ /g, '_') + "']").datum();
      if (from == "click") { that.companiesCtrl.setValue(selData.isin); }

      // console.log(this.selResData);
      that.createHomecontent(selData, selData.deg * 360 / 100);
      var index = this.selResData.filter(function (d) {
        //if (that.SelTab == "ETF") {
        if (that.FromClick == "ETFClick" || that.FromClick == "ETFCompClick") {
          return d.Assets == that.SelAssetId;
        }
        else {
          //if (selData.indexName == "S&P USA Extra" || selData.indexName == "S&P USA Ex S&P 1500") {
          //  return ((d.indexName == selData.indexName && d.relatedIndexes[0] == selData.relatedIndexes[0]) || d.indexName == selData.relatedIndexes[0])
          //}
          //else {
          return d.indexName == selData.indexName
          //}
        }
      });


      that.SelIndexName = selData.indexName;
      var lvl1 = index.filter(function (d) { return d.industry.substring(0, 2) == selData.industry.substring(0, 2) });
      var lvl2 = lvl1.filter(function (d) { return d.industry.substring(0, 4) == selData.industry.substring(0, 4) });
      var lvl3 = lvl2.filter(function (d) { return d.industry.substring(0, 6) == selData.industry.substring(0, 6) });
      var lvl4 = lvl3.filter(function (d) { return d.industry == selData.industry });

      var dta = lvl4.sort(function (x, y) { return d3.ascending(x.score, y.score); })

      var max: any = [], min: any = [];

      if (dta.length > 0) {
        try {
          let RectOn = d3.select(".rectOn");
          if (RectOn.node() != null) {
            if (RectOn.node().parentNode.id != "nav-1") {
              that.fillCompetives(dta, isin, RectOn.node().parentNode.id.replace("nav", ""));
            } else {
              var gs = d3.select("#gCompetitive");
              gs.selectAll("g").remove();
            }
          }
        } catch (e) { console.log(e) }

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
        d3.select("#nav0").dispatch('click');
        d3.select("#nav1").style("display", "none");
        d3.select("#nav2").style("display", "none");
        d3.select("#nav3").style("display", "none");
        d3.select("#nav4").style("display", "none");
        d3.select("#gCompetitive").style("display", "block");
        // d3.select(".gridselcomp").select("rect").classed("highlt", "true"); 

      } else {
        d3.select("#nav4").dispatch("click");
        d3.select("#nav1").style("display", "block");
        d3.select("#nav2").style("display", "block");
        d3.select("#nav3").style("display", "block");
        d3.select("#nav4").style("display", "block");
        d3.select("#gCompetitive").style("display", "block");
        // d3.select("#chartGroup").selectAll("rect").classed("highlt", "false");
      }

      if (from != "random")
        that.hideSidebar();

      d3.selectAll(".GridList").style("display", "block");

      //d3.selectAll(".card-body").selectAll(".circle").classed("is-selected", false);
      //d3.selectAll(".card-body").selectAll("li").classed("is-selected", false);
      // console.log(that.SelIndexName);
      // this.CheckETFIndexSelectedCompany = true;
      // d3.selectAll(".accordion-content").selectAll("#" + that.SelIndexName.replace(/ /g, '_')).classed("is-selected", true);
      // d3.select("#" + that.SelIndexName.replace(/ /g, '_').replace(/&/g, '').replace('Large-Cap', 'LargeCap').replace('U.S.', 'US')).classed("is-selected", true);

      if (from != "indexClick" && from != "ETFClick") {
        that.fnGetStockPerformance(stockKey);
      }
      setTimeout(function () {
        if (that.IsShowAll)
          that.refreshGrid();
        else
          that.MinimizeGrid();
      }, 100);

    }
  }

  GetETFs(ctname: string) {
    return this.PerfStockIndex.filter(x => x.key == ctname)[0].value.comp;
  }

  GetETFMed(ctname: string) {
    return this.PerfStockIndex.filter(x => x.key == ctname)[0].value.med;
  }

  getColorMed(score) {
    let gC100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      //  .range(["#4c9443", "#95a93b", "#ddbb29", "#b87b2b", "#94382d"]);
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    return gC100(d3.format(".1f")(score));
  }

  GetGlobalsMedc(ctname: string) {
    return this.IndexList.filter(x => x.indexName == ctname).length > 0 ? this.IndexList.filter(x => x.indexName == ctname)[0].medc : 0
  }

  GetGlobalMed(ctname: string) {
    return this.GrpIndexList.filter(x => x.key == ctname).length > 0 ? this.GrpIndexList.filter(x => x.key == ctname)[0].value.med : 0
  }
  GetGlobalMedc(ctname: string) {
    return this.GrpIndexList.filter(x => x.key == ctname).length > 0 ? this.GrpIndexList.filter(x => x.key == ctname)[0].value.medc : 0
  }
  navPos(val) {
    var sx, sy = 0;
    sx = Math.cos(((val * 3.6) * Math.PI) / 180);
    sy = Math.sin(((val * 3.6) * Math.PI) / 180);

    return "translate(" + sx * 350 + "," + ((sy * 350) - 20) + ")";
  }

  creatNav(lvl, v) {
    let that = this;
    let gC100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      //  .range(["#4c9443", "#95a93b", "#ddbb29", "#b87b2b", "#94382d"]);
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

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
        } else {
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
  }

  fnBuildGrid(data, ind, selisin) {
    this.changedet.detectChanges();
    ind = 4;
    let that = this;

    data = data.filter(x => x.isin != "");

    let resultData = data;

    that.CompetLength = resultData.length;
    var ob = resultData.filter(function (d) { return d.isin === selisin })[0];
    var obi = resultData.indexOf(ob);


    that.GridData = resultData;

    var scrollDiv = d3.select("#viewport" + ind)


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
      let idtag = '#' + id
      //defines the start
      d3.select(idtag)
        .append("stop")
        .attr("stop-color", colour)
        .attr("class", "begin")
        .attr("offset", off1)
        .attr("stop-opacity", op1);
      //and the finish
      d3.select(idtag)
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
        .attr("fill", "#fff")

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
        .attr("fill", "#fff")


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

      let cl = d3.scaleLinear()
        .domain([0, 25, 50, 75, 100])
        //.range(["#4c9443", "#95a93b", "#ddbb29", "#b87b2b", "#94382d"])
        .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])
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
          } else {
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
            let totCont = d.ticker;
            return totCont;
          }
        });

      towtxt.select(".txt4")
        .text(function (d) {
          if (d.isin != "") {
            let txtContent = d.company;
            let totCont = txtContent;
            if (totCont.length >= 26) {
              let t = d.ticker;
              return txtContent.slice(0, 22).trim() + "...";
            }
            return totCont;
          }
        });

      towtxt.select(".txt2")
        .text(function (d) {
          if (d.isin != "") {
            return d3.format(".1f")(d.score) + "%";
          }
        });

      towtxt.select(".txt5")
        .text(function (d) {
          if (d.isin != "") {
            return (d.currency) + " " + d3.format(".1f")(d.price);
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
        d3.select("#gCompetitive").selectAll("g").select("text").classed("onOpacity", true);
        if (d.isin != "" && d.isin == selisin) {
          // d3.select("#gCompetitive").select(".Compet" + d.isin).select("text").classed("onOpacity", false);
          d3.select("#gCompetitive").select(".Compet" + d.isin).classed("on", true);
          d3.select("#gCompetitive").select(".Compet" + d.isin).style("opacity", "1");
          d3.select("#gCompetitive").select(".Compet" + d.isin).raise();
        }
        if (d.isin != "" && d.isin != selisin) {
          d3.select("#gCompetitive").selectAll(".on").classed("on", false);
          d3.select(".comp[name='" + selisin + "']").select("rect").classed("recton", false);

          d3.select("#gCompetitive").select(".Compet" + d.isin).classed("on", true);
          d3.select("#gCompetitive").select(".Compet" + d.isin).style("opacity", "1");
          d3.select("#gCompetitive").select(".Compet" + d.isin).raise();
        }
      })
      rowSelection.selectAll(".baseSelPart").on("mouseout", function (d) {
        d3.select("#gCompetitive").selectAll("g").select("text").classed("onOpacity", false);
        if (d.isin != "" && d.isin != selisin) {
          d3.select("#gCompetitive").selectAll(".on").classed("on", false);
          d3.select(".comp[name='" + selisin + "']").select("rect").classed("recton", true);
        }
      })
      rowSelection.selectAll(".baseSelPart").on("click", function (d) {
        if (d.isin != "") {
          if (d3.select("#dec-1").style("display") == "block") {
            that.fnIndexSelClick(d, "CompClick");
          } else {
            that.fnIndexSelClick(d, "");
          }
        }
      })

      d3.select("#viewport4").on("mouseout", function (d) {
        d3.select("#cSlider").select(".sRect1").style("opacity", "1");
        d3.select("#cSlider").select(".sRect").style("opacity", "1");
        d3.select("#cSlider").select(".sRectCompare").style("opacity", "1");
        d3.select("#cSlider").select(".sRectCompareOverlay").style("opacity", "1");
        d3.select("#cSlider").select(".sText").style("opacity", "1");
        d3.select("#cSlider").select(".sTextReverse").style("opacity", "1");
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


    var selind = data.filter(function (d) { return d.isin === selisin })[0];

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
      .viewport(d3.select("#viewport4"))
      ;

    that.virtualScroller.data(data, function (d) {
      return d.isin;
    });
    d3.selectAll(".viewport").style("overflow-y", "auto");

    chartGroup.call(that.virtualScroller);


    // d3.selectAll(".viewport").style("display", "none");
    d3.select("#viewport" + ind).style("display", "block");


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

  }

  fnBuildGridCompare(data, ind, selisin) {
    this.changedet.detectChanges();
    ind = 4;
    let that = this;
    data = data.filter(x => x.isin != "");
    let resultData = data;
    that.CompetCLength = resultData.length;
    //var ob = resultData.filter(function (d) { return d.isin === selisin })[0];
    //var obi = resultData.indexOf(ob);

    that.GridData_c = resultData;

    var scrollDiv = d3.select("#viewportCompare" + ind)
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
      let idtag = '#' + id
      //defines the start
      d3.select(idtag)
        .append("stop")
        .attr("stop-color", colour)
        .attr("class", "begin")
        .attr("offset", off1)
        .attr("stop-opacity", op1);
      //and the finish
      d3.select(idtag)
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
        .text("+")

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

        })

    };
    var rowUpdate = function (rowSelection) {
      that.changedet.detectChanges();
      let cl = d3.scaleLinear()
        .domain([0, 25, 50, 75, 100])
        .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])
      rowSelection.select("rect.SelPart_C").attr("fill", "#abafb2")

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
            let totCont = d.ticker;
            return totCont;
          }
        });

      towtxt.select(".txt2")
        .text(function (d) {
          if (d.isin != "") {
            let totCont = d.country;
            return totCont;
          }
        }


        );

      towtxt.select(".txt4")
        .text(function (d) {
          if (d.isin != "") {
            let txtContent = d.company;
            let totCont = txtContent;
            if (totCont.length >= 26) {
              let t = d.ticker;
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
          d3.select(this).classed("cmp_Added", true);
          d3.select(this.parentNode).classed('p_Clkd', true);
          d3.select(this.previousSibling).text('-').attr('x', 22).attr('y', -1);
          return "add_C cmp_Added";
        }
        else {
          d3.select(this).classed("cmp_Added", false);
          d3.select(this.parentNode).classed('p_Clkd', false);
          d3.select(this.previousSibling).text('+').attr('x', 20).attr('y', 0);
        }
        return "add_C";
      });

      rowSelection.selectAll(".add_C").on("click", function (d) {
        d3.select(this).classed("cmp_Added", d3.select(this).classed("cmp_Added") ? false : true);

        if (d3.select(this).classed("cmp_Added")) {
          d3.select(this.parentNode).classed('p_Clkd', true);
          d3.select(this.previousSibling).text('-').attr('x', 22).attr('y', -1);
          that.AddClockSlider(d3.select(this).attr('id'));
          that.addCmpIs.push(d.isin);
        }
        else {
          var index = that.addCmpIs.indexOf(d.isin);
          if (index >= 0) {
            that.addCmpIs.splice(index, 1);
          }
          that.RemoveClockSlider(d3.select(this).attr('id'));
          d3.select(this.parentNode).classed('p_Clkd', false);
          d3.select(this.previousSibling).text('+').attr('x', 20).attr('y', 0);
        }
      });
      ////////////////////// END ////////////////////
      d3.select("#viewportCompare4").on("mouseover", function (d) {
        d3.select("#cSlider").select(".sRect1").style("opacity", "1");
        d3.select("#cSlider").select(".sRect").style("opacity", "1");
        d3.select("#cSlider").select(".sRectCompare").style("opacity", "1");
        d3.select("#cSlider").select(".sRectCompareOverlay").style("opacity", "1");
        d3.select("#cSlider").select(".sText").style("opacity", "1");
        d3.select("#cSlider").select(".sTextReverse").style("opacity", "1");
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

    var selind = that.GridData_c.filter(function (d) { return d.isin === selisin })[0];

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
      .viewport(d3.select("#viewportCompare4"));

    that.virtualScrollerComp.data(that.GridData_c, function (d) {
      return d.isin;
    });
    d3.selectAll(".viewport").style("overflow-y", "auto");

    chartGroupComp.call(that.virtualScrollerComp);
    that.changedet.detectChanges();
    d3.select("#viewportCompare" + ind).style("display", "block");
    /*selected Rank Grid List End \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
  };

  CompFilterGridList(IndexN) {
    if (IndexN == "1") {
      this.GridData_c = this.GridData_c.sort(function (x, y) {
        return d3.ascending(x.company.toUpperCase(), y.company.toUpperCase());
      });
    }
    if (IndexN == "2") {
      this.GridData_c = this.GridData_c.sort(function (x, y) {
        return d3.descending(x.company.toUpperCase(), y.company.toUpperCase());
      });
    }
    if (IndexN == "3") {
      this.GridData_c = this.GridData_c.sort(function (x, y) {
        return d3.ascending(parseFloat(x.score), parseFloat(y.score));
      });
    }
    if (IndexN == "4") {
      this.GridData_c = this.GridData_c.sort(function (x, y) {
        return d3.descending(parseFloat(x.score), parseFloat(y.score));
      });
    }
    if (IndexN == "5") {
      this.GridData_c = this.GridData_c.sort(function (x, y) {
        return d3.ascending(x.ticker, y.ticker);
      });
    }
    if (IndexN == "6") {
      this.GridData_c = this.GridData_c.sort(function (x, y) {
        return d3.descending(x.ticker, y.ticker);
      });
    }

  } 

  RemoveClockSlider(id) {
    let d = d3.select(".comp[name='" + id + "']").datum();
    let isin = d.isin;
    d3.select("#cSlider" + d.isin).remove();
  }

  AddClockSlider(id) {
    let that = this;
    let d = d3.select(".comp[name='" + id + "']").datum();
    let val = d.deg * 360 / 100;
    let isin = d.isin;
    let txt = d.company + " (" + d.ticker + ") [" + d3.format(".1f")(d.score) + "%]";
    let stockKey = d.stockKey;
    let score = d.score;
    //console.log(d3.select("#" + "cSlider" + d.isin));
    if (!d3.select("#" + "cSlider" + d.isin).empty()) {
      console.log("Already exists")
      return false;
    }

    var r = d3.select("#maincircle").attr("r");
    var g = d3.select("#crlChart").append("g")
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
      .attr("x", + r + (25))
      //.attr("y", -20)
      .attr("height", "40px")
      .attr("width", "170px")
      .attr("fill", "#abafb2")
      .style("opacity", "0");


    var text = g.append("text")
      .attr("class", "sText")
      .attr("x", + r + (40))
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

    d3.select("#cSlider" + d.isin).select(".sText")
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

    d3.select("#cSlider" + d.isin)
      .transition()
      .ease(d3.easeExp)
      .duration(0)
      .attr('transform', 'rotate(' + (val - 90) + ')')
      .attr('name', isin)
      .on("end", function () {
        d3.select("#cSlider" + d.isin).select(".sRect1").style("opacity", "1");
        d3.select("#cSlider" + d.isin).select(".sRect").style("opacity", "1");
        d3.select("#cSlider" + d.isin).select(".sText").style("opacity", "1");
        d3.select("#cSlider" + d.isin).style("display", "block");
        d3.select("#cSlider" + d.isin).select(".sCircle").style("opacity", "1");
      })





    var bbox = d3.select("#cSlider" + d.isin).select(".sText").node().getBBox();
    var bboxH = +bbox.height + 20; bboxH = bboxH > 40 ? bboxH : 40;

    d3.select("#cSlider" + d.isin).select(".sRect")
      // .attr("fill", function () { return gC360(val); })
      .style("display", function () { return txt == null ? "none" : "block"; })
      .attr("height", bboxH)
      .attr("width", bbox.width + 30)
      .attr("y", -(bboxH / 2));
  }

  fnStockstabclick(mode: string) {
    //if (mode == "Compare") {
    //console.log(mode);
    //}
    this.changedet.detectChanges();
    this.SelTab = mode;
    this.IsShowDD = false;
    this.IsShowFilterDD = false;
    this.IsShowIndexFilterDD = false;
    this.IsShowCompFilterDD = false;

    d3.select('#gNav').style('display', 'block');
    d3.select('#ParentViewport').style('display', 'block');
    d3.select("#dvDD").style('display', 'none');
    //d3.select("#showStockCloseButton").style('display', 'none');
    d3.select("#dvDD").attr("transform", "translate(0, 15)");
    d3.select("#IndexesRectHght").attr("height", "385px");
    d3.select("#totalStocksValue").style('display', 'block');
    d3.selectAll(".AddSlider").remove();
    d3.select('#compareComp').style('display', 'none');
    d3.selectAll(".add_C").classed("cmp_Added", false);
    this.addCmpIs = [];
    this.changedet.detectChanges();
  }

  fnPosArray(val, cnt, skipPos): any {
    let topVal = val;
    let navArray = new Array();
    for (let i = 0; i < cnt; i++) {
      navArray.push(topVal);
      if (i == skipPos)
        topVal = topVal - (3.5 * 2);
      else
        topVal = topVal - 3.5;
    }
    return navArray;
  }

  getSectorPos(selResData, pIndLevel) {
    let that = this;
    var result = d3.nest()
      .key(function (d) {
        var val;
        switch (pIndLevel) {
          case 0:
            val = (that.FromClick == "ETFClick" || that.FromClick == "ETFCompClick") ? that.SelAssetId : d.indexName;
            break;
          case 1:
            val = d.industry.substring(0, 2); break;
          case 2:
            val = d.industry.substring(0, 4); break;
          case 3:
            val = d.industry.substring(0, 6); break;
          case 4:
            val = d.industry.substring(0, 8); break;
          default:
            val = d.tradeDate; break;
        }
        return val;
      })
      .rollup(function (v) {
        return {
          xV: d3.mean(v, function (d) { return Math.cos((((d.score * 3.6) - 90) * Math.PI) / 180) }),
          yV: d3.mean(v, function (d) { return Math.sin((((d.score * 3.6) - 90) * Math.PI) / 180) }),
          med: d3.median(v, function (d) {
            if (d.indexName.indexOf("New Age Alpha") == -1) { return d.score; }
            if (that.SelIndexName.indexOf("New Age Alpha") != -1) { return d.score; }
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
  }

  filterMinMax(dta: any, isin: string): any {
    var selind = dta.filter(function (d) { return d.isin === isin })[0];
    var SelData = [];
    SelData.push(dta[0]);
    SelData.push(selind);
    SelData.push(dta[dta.length - 1])
    SelData = SelData.filter((v, i, a) => a.indexOf(v) === i);
    return SelData;
  }

  fnGetStockPerformance(stockkey) {
    let that = this;
    that.changedet.detectChanges();
    this.httpClient.get(this.api_url + "/Indexes/GetRelatedBenchmark/" + stockkey).subscribe((dbPerformance: any[]) => {
      //d3.json("https://api.newagealpha.com/api/Indexes/GetRelatedBenchmark/" + stockkey).then(function (dbPerformance) {
      that.PerfData = dbPerformance;
      let PerfData = that.PerfData;//.filter(x => x.indexCategory == selData.indexName);
      let indexPerf = PerfData.filter(x => x.type == 'Index');
      let BMPerf = PerfData.filter(x => x.type == 'BM');
      that.indexPerf = indexPerf.length > 0 ? indexPerf : [];
      that.BMPerf = BMPerf.length > 0 ? BMPerf : [];
      setTimeout(function () { that.changedet.detectChanges(); that.fnPerfText(); }, 100);
    });

  }

  fillCompetives(dta: any, isin: string, lvl: string) {
    let that = this;
    that.changedet.detectChanges();
    var gs = d3.select("#gCompetitive");
    gs.selectAll("g").remove();
    dta = dta.filter(t => t.isin != "");
    var SelData = that.filterMinMax(dta, isin);

    var ggs = gs.selectAll("g")
      .data(dta)
      .enter().append("g")
      .attr("name", function (d) { return d.isin; })
      .attr("class", function (d) {
        let distinctISIN = SelData.map(function (d) { return d.isin; });
        // if (lvl == "4") {
        return (distinctISIN.includes(d.isin) ? "clsAlwOn Compet" + d.isin : "Compet" + d.isin);
        //} 
      })
      .attr("transform", function (d) { return "rotate(" + ((d.score * 3.6) - 90) + ")"; });

    ggs.append("rect").attr("y", 0).attr("x", 152).attr("height", .8).attr("width", 15)

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
        let distinctISIN = SelData.map(function (d) { return d.isin; });
        if (lvl == "4") {
          if (d3.select(".homeright").style("display") == "block")
            return "1";
          else
            return "0.04";
        }
        else {
          return (distinctISIN.includes(d.isin) ? "1" : "0.04");
        }

      })
      .attr("class", function (d) {
        let distinctISIN = SelData.map(function (d) { return d.isin; });
        return (distinctISIN.includes(d.isin) ? "clsAlwOn" : "");
      })
      .text(function (d) { return d.company + " (" + d.ticker + ") [" + d3.format(".1f")(d.score) + "%]"; }).call(that.wrap, 100);


    ggs.on("mouseover", function (d) {
      d3.selectAll(".on").classed("on", false);
      d3.select(".Compet" + d.isin).raise();
      d3.select(".Compet" + d.isin).classed("on", true);
    })
      .on("mouseout", function (elemData) {
        d3.selectAll(".on").classed("on", false);
      })
      .on("click", function (elemData) {
        that.changedet.detectChanges();
        var d = d3.select(this).datum();
        if (d3.select("#dec-1").style("display") == "block") {
          that.fnIndexSelClick(d, "CompClick");
        } else {
          that.fnIndexSelClick(d, "");
        }
        //if (d.isin != "") {
        //  //d3.select(".comp[name='" + d.isin + "_" + d.indexName.replace(/ /g, '_') + "']").dispatch('click');
        //  that.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + d.ticker + ") [" + d3.format(".1f")(d.score) + "%]", "click", d.stockKey, d.score);
        //  that.changedet.detectChanges();
        //}
      })

  }

  ApplyColor(val) {
    return (val >= 40 && val < 55) ? "#FF9503" : "#fff"
  }

  createHomecontent(elemData, val) {
    console.log('setting home content');
    this.changedet.detectChanges();
    let gC360 = d3.scaleLinear()
      .domain([0, 90, 180, 270, 360])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    var homeScore1length = ((parseInt((elemData.companyName + ' (' + elemData.ticker + ')').length.toString()) / 2) / 3) * 17 + 5;

    if (parseInt(elemData.companyName + ' (' + elemData.ticker + ')') < 12) homeScore1length = 42;

    d3.select("#selectedscore").select('.homeScore1').attr("fill", function () { return gC360(val); })
      .text(elemData.companyName + ' (' + elemData.ticker + ')')
      .attr("x", "-" + homeScore1length);

    var homeScore2length = (((parseFloat(elemData.scores) * 100).toFixed(1)).length * 7.5 + 5);

    d3.select("#selectedscore").select('.homeScore2').attr("fill", function () { return gC360(val); }).text((parseFloat(elemData.scores) * 100).toFixed(1))
      .attr("x", "-" + homeScore2length);
    this.revGrayOutBtns();
    d3.select("#selectedscore").select('#currentstock').style("display", "block");
    this.changedet.detectChanges();
  }

  revGrayOutBtns() {

    d3.select(".clsCompare").style("opacity", "1");
    d3.select(".clsCompare").style("fill", "#00b9ff");

    d3.select(".clsSetAlert").style("opacity", "1");
    d3.select(".clsSetAlert").style("fill", "#00b9ff");
   // d3.selectAll(".clsSetAlert").attr("class", "setModal");
    // d3.selectAll('.clsSetAlert').node().classList.add("setModal");
  }

  hideSidebar() {

    d3.select(".closePopup").style('display', 'block');
    d3.select(".helpPopup").style('display', 'block');
    d3.select(".expPopup").style('display', 'block');
    // d3.select("#gBreadCrumb").style("display", "block");
    d3.select("#viewport4").style("display", "block");
    d3.selectAll(".performance").style("display", "block");
    d3.select(".gHelp").style("display", "none");
    d3.select(".gHand").style("display", "none");
    this.fnPerfText();
    //  }
    //d3.selectAll(".GridList").style("display", "block");
    d3.selectAll(".gHelpbg").style("display", "none");
    d3.selectAll(".gHelp").style("display", "none").style("opacity", "0");
    // d3.selectAll(".clsAlwOn").style("opacity", "");
    let RectOn = d3.select(".rectOn");
    if (RectOn.node() != null) {
      if (this.IsShowAll)
        this.refreshGrid();
      else
        this.MinimizeGrid();
    }
    clearInterval(this.interval);
  }

  refreshGrid() {
    this.changedet.detectChanges();
    let SelFil = this.FilterList.filter(x => x.Name == this.SelFilter)[0];
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
    d3.selectAll(".viewport").style("overflow-y", "auto");
    d3.selectAll(".txtExpCol").style("display", "none");
    d3.select("#txtCollapse").style("display", "block");
    this.GridExpanded = true;
    d3.select("#GridGroup").style("display", "none");
    d3.select("#ParentViewport").style("visibility", "visible");
    d3.select("#ParentViewportCompare").style("visibility", "visible");
    d3.selectAll(".txtfixed").style("display", "block");
    this.changedet.detectChanges();
  }

  MinimizeGrid() {
    d3.selectAll(".txtfixed").style("display", "none");
    d3.selectAll(".txtExpCol").style("display", "none");
    d3.select("#txtExpand").style("display", "block");
    this.GridExpanded = false;

    d3.select("#GridGroup").style("display", "block");
    d3.select("#ParentViewport").style("visibility", "hidden");
    d3.select("#ParentViewportCompare").style("visibility", "hidden");
    // d3.select("#gCompetitive").selectAll("text").style("opacity", "0.04");
    // d3.select("#gCompetitive").selectAll(".clsAlwOn").style("opacity", "1");
  }

  FilterGridList(IndexN) {
    if (IndexN == "1") {
      this.GridData = this.GridData.sort(function (x, y) {
        return d3.ascending(x.company.toUpperCase(), y.company.toUpperCase());
      });
    }
    if (IndexN == "2") {
      this.GridData = this.GridData.sort(function (x, y) {
        return d3.descending(x.company.toUpperCase(), y.company.toUpperCase());
      });
    }
    if (IndexN == "3") {
      this.GridData = this.GridData.sort(function (x, y) {
        return d3.ascending(parseFloat(x.score), parseFloat(y.score));
      });
    }
    if (IndexN == "4") {
      this.GridData = this.GridData.sort(function (x, y) {
        return d3.descending(parseFloat(x.score), parseFloat(y.score));
      });
    }
    if (IndexN == "5") {
      this.GridData = this.GridData.sort(function (x, y) {
        return d3.ascending(x.ticker, y.ticker);
      });
    }
    if (IndexN == "6") {
      this.GridData = this.GridData.sort(function (x, y) {
        return d3.descending(x.ticker, y.ticker);
      });
    }
  }

  fnPerfText() {
    let that = this;
    that.changedet.detectChanges();
    if (this.indexPerf.length > 0) {
      d3.select(".perfName").remove();
      d3.select("#perfName").append("text")
        .style("fill", "#666")
        .attr("class", "perfName")
        .attr("x", "10")
        .text(function () { return that.indexPerf[0].indexName; }).call(that.wrap, 150, "right")
        .on("click", function (d) {
          //  that.fnSelectIndex(that.indexPerf[0].indexName);
        })
      // .click(that.fnSelectIndex(that.indexPerf[0].indexName));

      d3.select(".bmName").remove();
      if (that.BMPerf.length > 0) {
        d3.select("#bmName").append("text")
          .style("fill", "#666")
          .attr("class", "bmName")
          .attr("x", "10")
          .text(function () { return that.BMPerf[0].indexName; })//.call(that.wrap, 115, "right")
          .on("click", function (d) {
            //that.fnSelectIndex(that.BMPerf[0].indexName)
          })
        // .click(that.fnSelectIndex(that.BMPerf[0].indexName));
      }
    }
  }

  wrap(text, width, align = null) {
    text.each(function (d) {

      var text = d3.select(this),
        words = text.text().replace("-", "- ").split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = text.style("font-size").replace("px", ""), // ems
        y = text.attr("y"),
        dy = 0,//parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("dx", 0).attr("dy", 2),
        textalign = (text.style("text-anchor") == "end") ? false : true;
      tspan.attr("class", "txt");
      var i = 0;
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > ((width * lineHeight) / 10)) {
          if (i == 0) { tspan.attr("dy", 0); }
          i++;
          line.pop();
          tspan.text(line.join(" "));
          line = [word];

          if (textalign) {
            tspan = text.append("tspan").attr("dy", lineHeight + "px").attr("dx", -(tspan.node().getComputedTextLength())).text(word);
          } else {
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
        var txt1 = txt.substring(txt.indexOf("[") + 1, txt.indexOf("]"))
        var txt2 = txt.substring(txt.indexOf("["), txt.indexOf("]") + 1)
        txt2 = txt.replace(txt2, "");

        if (txt2 != "") {
          tspan.text(txt2);
          text.append("tspan")
            .text(txt1)
            .attr("class", "score")
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
  }

  creatBreadCrumb(grp1) {
    var arc1 = d3.arc()
      .innerRadius(351)
      .outerRadius(349)
      .startAngle(-1.2)
      .endAngle(-1.9);
    var g = grp1.append("g").attr("id", "gBreadCrumb").attr("transform", "translate(-40 ,15)");
  }

  GetGlobals(ctname: string) {
    return this.GrpIndexList.filter(x => x.key == ctname)[0].value.indexName;
  }

  getCountryPos(selResData) {
    this.changedet.detectChanges();
    var tselResData = selResData.filter(function (val) {
      return val.indexName.indexOf("New Age Alpha") == -1
    });
    let that = this;
    let gC100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])
    var result = d3.nest()
      .key(function (d) {
        return d.country;
      })
      .rollup(function (v) {
        return {
          indexName: v.map(x => x.indexName).filter((v, i, a) => a.indexOf(v) === i),
          country: v[0].country,
          med: d3.format(".1f")(d3.median(v, function (d) {
            return d.score;
          })),
          medc: gC100(d3.format(".1f")(d3.median(v, function (d) {
            return d.score;
          }))),
          order: that.IndexOrder.find(function (dt) {
            return dt.index === v[0].indexName
          }) == undefined ? null : that.IndexOrder.find(function (dt) {
            return dt.index === v[0].indexName
          }).order
        };
      })
      .entries(tselResData);

    return result;
  }

  getIndexPos(selResData) {
    let that = this;
    let gC100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])
    var result = d3.nest()
      .key(function (d) {
        return d.indexName;
      })
      .rollup(function (v) {
        return {
          indexName: v[0].indexName,
          med: d3.format(".1f")(d3.median(v, function (d) {
            //if (d.indexName.indexOf("New Age Alpha") == -1) { return d.score; }
            return d.score;
          })),
          medc: gC100(d3.format(".1f")(d3.median(v, function (d) {
            //if (d.indexName.indexOf("New Age Alpha") == -1) { return d.score; }
            return d.score;
          }))),
          order: that.IndexOrder.find(function (dt) {
            return dt.index === v[0].indexName
          }) == undefined ? null : that.IndexOrder.find(function (dt) {
            return dt.index === v[0].indexName
          }).order
        };
      })
      .entries(selResData);
    return result;
  }

  creatGradienArc(){
    var gArc = d3.select("#crlChart").append("g");
    var arc = d3.arc()
      .innerRadius(this.radius - 18)
      .outerRadius(this.radius - 2);

    // create our gradient
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

    // 360 degrees
    d3.range(4).forEach(function (d, i) {
      // convert to radians
      var start = (i * 89) * (Math.PI / 180),
        end = ((i * 89.9) + 90) * (Math.PI / 180);
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
      var gArc1 = d3.select("#crlChart").append("g").attr("class", "scorerange");
      var arc1 = d3.arc()
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
        .attr("transform", "rotate(-90.5)")
  
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 6)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-89.9)")
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-45)")
  
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", -1)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(0)")
  
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(45)")
  
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(90)")
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(135)")
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(180)")
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(225)")
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0.2)
        .attr("height", .7)
        .attr("width", 6)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(269.4)")
        gArc1.append("text")
        .attr("x", this.radius - 30)
        .attr("y", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .text("25%")
  
      gArc1.append("text")
        .attr("x", -(this.radius - 29))
        .attr("y", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "start")
        .text("75%")
  
      gArc1.append("text")
        .attr("x", 0)
        .attr("y", this.radius - 34)
        .attr("fill", "#ccc")
        .attr("text-anchor", "middle")
        .text("50%")
  
      gArc1.append("text")
        .attr("x", -3)
        .attr("y", -(this.radius - 45))
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .text("100%")
  
      gArc1.append("text")
        .attr("x", 3)
        .attr("y", -(this.radius - 45))
        .attr("fill", "#ccc")
        .attr("text-anchor", "start")
        .text("0%")
  }

  findIndName(dta, code) {
    var industry = code;
    for (var i = 0; i < dta.length; i++) {
      if (dta[i].code == code) { industry = dta[i].name; break; }
    }
    return industry;
  }
}

export class countryList {
  country: string;
  filteredIndexes: string;
  med: string;
}