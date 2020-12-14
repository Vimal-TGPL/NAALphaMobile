import { Injectable, OnInit } from '@angular/core';
import { DataHandlerService } from '../dataHandler/data-handler.service';
import * as d3 from 'd3/';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  dbGICS:BehaviorSubject<any>;
  _dbGICS:any =[];
  dbScoretemp:any = [];
  dbScore:BehaviorSubject<any>;
  dbHistScore:any = [];
  ETFIndex:BehaviorSubject<any>;
  _ETFIndex: any = [];
  FIIndex:BehaviorSubject<any>;
  selTab:any;
  _selTab:string = "";
  _showGrid:boolean = false;
  showGrid:BehaviorSubject<boolean>;
  showGICS:BehaviorSubject<boolean>;
  _showGICS:boolean = false;
  selIndex:BehaviorSubject<any>;
  _selIndex:any;
  _globalGICS:any;
  globalGICS:BehaviorSubject<any>;
  indexWise:BehaviorSubject<any>;
  _indexWise:any;
  secLevel:BehaviorSubject<any>;
  _secLevel:any;
  _mobSelComp:any;
  mobSelComp:BehaviorSubject<any>;
  showsplashLoader:BehaviorSubject<boolean>;
  _showsplashLoader:boolean = true;
  currentUser:any;

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

  constructor(private dataHandler:DataHandlerService, private storage: Storage) {
    this.dbGICS = new BehaviorSubject<any>(this._dbGICS);
    this.dbScore = new BehaviorSubject<any>(this.dbScoretemp);
    this.selTab = new BehaviorSubject<string>(this._selTab);
    this.ETFIndex = new BehaviorSubject<any>(this._ETFIndex);
    this.showGrid = new BehaviorSubject<boolean>(this._showGrid);
    this.showGICS = new BehaviorSubject<boolean>(this._showGICS);
    this.selIndex = new BehaviorSubject<any>(this._selIndex);
    this.globalGICS = new BehaviorSubject<any>(this._globalGICS);
    this.indexWise = new BehaviorSubject<any>(this._indexWise);
    this.secLevel = new BehaviorSubject<any>(this._secLevel);
    this.mobSelComp = new BehaviorSubject<any>(this._mobSelComp);
    this.showsplashLoader = new BehaviorSubject<boolean>(this._showsplashLoader);
    this.storage.get('currentUser').then( res=>{
        if(res){
          this.getDbGICSData();
          this.getGlobalData();
        }
    });
   }

  getDbGICSData(){
    if(this._dbGICS.length == 0){
      this.dataHandler.getIndustryList().subscribe(data =>{
        this._dbGICS = data;
        this.dbGICS.next(this._dbGICS);
      })
    }
    return this.dbGICS;
  }

  getGlobalData(){
    var that =this;
    if(this.dbScoretemp.length == 0){
      this.dataHandler.getIpadGlobalData().subscribe((data: any[]) =>{
        this.dbScoretemp = data.sort(function (x, y) {
          return d3.ascending(x.scores, y.scores);
        })
        var selreslen = this.dbScoretemp.length;
        this.dbScoretemp.forEach(function (d, i) {
          d.countrygroup = d.indexName.indexOf('Europe') > -1 ? 'Europe' : d.country;
          d.score = d.scores * 100;
          d.deg = d.score;
          d.indname = that.findIndName(that._dbGICS, d.industry);
          d.industry = d.industry + "";
          d.companyName = d.companyName != null ? d.companyName.trim() : "";
          d.company = d.companyName != null ? d.companyName : null;
          d.ticker = d.ticker;
          d.stockKey = d.stockKey;
          d.aisin = d.isin;
          d.isin = "a" + d.stockKey;
          d.Fixeds = "";
          d.cx = ((i * 360 / selreslen) - 90);
          let flt = that.IndexOrder.filter(function (x) { return x.index == d.indexName })
          d.sortOrder = flt.length > 0 ? flt[0].order : null;
          return d
        });
        this.dbScore.next(this.dbScoretemp);
        this.setglobalGICS();
      })
    }   
  }

  setglobalGICS(){
    var temp = {
      count: this.dbScoretemp.length,
      med:this.roundValue(this.getMed(this.dbScoretemp)*100),
      name: 'New Age Alpha',
      upto25 : this.dbScoretemp.filter(i=> (i.scores*100) < 25).length,
      upto50 : this.dbScoretemp.filter(i=> (i.scores*100) >= 25 && (i.scores*100) < 50).length,
      upto75 : this.dbScoretemp.filter(i=> (i.scores*100) >= 50 && (i.scores*100) < 75).length,
      upto100 : this.dbScoretemp.filter(i=> (i.scores*100) >= 75 && (i.scores*100) < 100).length,
    }
    this._globalGICS = temp;
    this.globalGICS.next(this._globalGICS);
  }

  roundValue(val) {
    return (Math.round(val * 10) / 10).toFixed(1);
  }

  getMed(arr){
    arr = arr.map(item => item.scores);
    arr = arr.sort();
    if (arr.length % 2 === 0) { // array with even number elements
      return (parseFloat(arr[arr.length / 2])  + parseFloat(arr[(arr.length /2) - 1])) / 2;
    }
    else {
      return parseFloat(arr[(arr.length - 1) / 2]); // array with odd number elements
    }
  }

  findIndName(data,code){
    var ind = code;
    return data.filter(d => d.code == ind)[0].name;
  }

  getHistGlobalData(d){
      this.dataHandler.getIpadHistGlobalData(d).subscribe((data:any[])=>{
        this.dbHistScore = data.sort(function (x, y) {
          return d3.ascending(x.scores, y.scores);
        })
        var selreslen = this.dbHistScore.length;
        this.dbHistScore.forEach(function (d, i) {
          d.countrygroup = d.indexName.indexOf('Europe') > -1 ? 'Europe' : d.country;
          d.score = d.scores * 100;
          d.deg = d.score;
          d.indname = this.findIndName(this.dbGICS, d.industry);
          d.industry = d.industry + "";
          d.companyName = d.companyName != null ? d.companyName.trim() : "";
          d.company = d.companyName != null ? d.companyName : null;
          d.ticker = d.ticker;
          d.stockKey = d.stockKey;
          d.aisin = d.isin;
          d.isin = "a" + d.stockKey;
          d.Fixeds = "";
          d.cx = ((i * 360 / selreslen) - 90);
          let flt = this.dataService.IndexOrder.filter(function (x) { return x.index == d.indexName })
          d.sortOrder = flt.length > 0 ? flt[0].order : null;
          return d
        });
        this.dbScore.next(this.dbHistScore);
      })
  }

  async getEquitiesdata(){
    var temp:any = [];
    var datasub = this.dbScore.subscribe(d => {

      d.forEach(element => {
        if (element.indexName.indexOf('New Age Alpha') == -1) {
          temp.push(element);
        }
      });
    })
    datasub.unsubscribe();
    return await temp;
    
  }

  async getNAAIndexesData(){
    var temp:any = [];
    var datasub = this.dbScore.subscribe(d => {

      d.forEach(element => {
        if (element.indexName.indexOf('New Age Alpha') > -1) {
          temp.push(element);
        }
      });
    })
    datasub.unsubscribe();
    return await temp;
  }

  getETFdata(){
    if(this._ETFIndex.length == 0){
      this.dataHandler.getETFData().subscribe((data)=>{
        this._ETFIndex = data;
        this.ETFIndex.next(this._ETFIndex);
      })
    }
  }

  async getFIdataList(){
    var temp:any = [];
    var datasub = this.dbScore.subscribe(d => {
      temp = d.filter(i=> i.hasOwnProperty('fi') === true && i.fi !== null);
    })
    datasub.unsubscribe();
    return await temp;
  }
}