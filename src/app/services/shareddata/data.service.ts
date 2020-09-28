import { Injectable, OnInit } from '@angular/core';
import { DataHandlerService } from '../dataHandler/data-handler.service';
import * as d3 from 'd3/';
import { BehaviorSubject } from 'rxjs';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  dbGICS:any = [];
  dbScoretemp:any = [];
  dbScore:BehaviorSubject<any>;
  dbHistScore:any = [];
  ETFIndex:BehaviorSubject<any>;
  _ETFIndex: any = [];
  FIIndex:BehaviorSubject<any>;
  selTab:any;
  _selTab:string = "Equities";
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

  constructor(private dataHandler:DataHandlerService) {
    this.dbGICS = this.getDbGICSData();
    this.dbScore = new BehaviorSubject<any>(this.dbScoretemp);
    this.selTab = new BehaviorSubject<string>(this._selTab);
    this.ETFIndex = new BehaviorSubject<any>(this._ETFIndex);
   }

  getDbGICSData(){
    if(this.dbGICS.length == 0){
      this.dataHandler.getDbGICSData().subscribe(data => {
        this.dbGICS = d3.csvParse(data);
      });
    }
    return this.dbGICS;
  }

  setGlobalData(){
    
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
          d.indname = that.findIndName(that.dbGICS, d.industry);
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
        console.log(this.dbScoretemp);
        this.dbScore.next(this.dbScoretemp);
      })
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
        console.log(this.dbHistScore);
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
      // console.log(temp);
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
      // console.log(temp);
    })
    datasub.unsubscribe();
    return await temp;
  }

  // getTotalIndex(){
  //   var datasub = this.dbScore.subscribe(d =>{
  //     d.forEach(element => {
        
  //     });
  //   })
  // }

  getETFdata(){
    if(this._ETFIndex.length == 0){
      this.dataHandler.getETFData().subscribe((data)=>{
        console.log(data);
        this._ETFIndex = data;
        this.ETFIndex.next(this._ETFIndex);
      })
    }
  }

  async getFIdataList(){
    var temp:any = [];
    var datasub = this.dbScore.subscribe(d => {

      temp = d.filter(i=> i.hasOwnProperty('fi') === true && i.fi !== null);
      // console.log(temp);
    })
    datasub.unsubscribe();
    return await temp;
  }
}
