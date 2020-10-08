import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/shareddata/data.service';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import * as d3 from 'd3';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  faAngleDoubleLeft = faAngleDoubleLeft;
  selTab:any;
  _seltabSub:any;
  data:any;
  _dataSub:any;
  countryWise:any;
  CountryData:any = [];
  TotalIndex:any;
  TotalCountry:any;
  IndexWise:any = [];
  eqIndexList:any = [];
  eqIndexData:any = [];
  GridType:any;
  selIndexData:any = [];
  selCompanyData:any = [];
  selIndex:any = [];
  selSort:any;
  showSort:boolean = false;
  selCountry:any;
  indexsortList = ['Index Name (ascending)','Index Name (descending)','H-Factor Score (ascending)','H-Factor Score (descending)'];
  companysortlist = ['Company Name (ascending)','Company Name (descending)','H-Factor Score (ascending)','H-Factor Score (descending)','Ticker (ascending)', 'Ticker (descending)']
  showGICS:any;
  _showGICSSub:any;
  secLevel:any;
  _secLevelSub:any;

  constructor(private dataService:DataService) {
    this._seltabSub = this.dataService.selTab.subscribe(d=>{
      this.selTab = d;
      console.log(this.selTab);
      if(this.selTab == 'Equities & FI'){
        this._dataSub = this.dataService.dbScore.subscribe(d =>{
          this.data = d;
          this.indexClassifier();
          // this.countryClassifier();
          // console.log(d);
        })
      }
    });
    this._showGICSSub = this.dataService.showGICS.subscribe(d=>{
      this.showGICS = d;
    });
    this._secLevelSub = this.dataService.secLevel.subscribe(d =>{
      this.secLevel = d;
    })
   }

  ngOnInit() {}

  countryClassifier(){
    // var temp = 
  }

  indexClassifier(){
    let temp = this.data.reduce((r,a)=>{
      // console.log('a',a);
      // console.log('r',r);
      r[a.indexName] = [...r[a.indexName] || [], a];
      return r;
    }, {});
    this.IndexWise = temp;
    console.log(this.IndexWise);
    this.dataService.indexWise.next(this.IndexWise);
    var indexTemp = this.data.map(item => item.indexName);
    this.TotalIndex = indexTemp.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
    // console.log(this.TotalIndex);
    this.eqIndexList = [];
    this.TotalIndex.forEach(element => {
      if (!element.includes('New Age Alpha')) {
        this.eqIndexList.push(element);
      }
    });
    // console.log(this.eqIndexList);
    this.eqIndexData = [];
    this.eqIndexList.forEach(element => {
      var inttemp = {
        indexName: element,
        scores: this.roundValue(this.getMed(temp[element]) * 100),
        countryGroup: temp[element][0].countrygroup
      }
      this.eqIndexData.push(inttemp);
    });
    console.log(this.eqIndexData);
    var tempcountry =  this.eqIndexData.map(item => item.countryGroup);
    var totalCountry = tempcountry.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
    // console.log(totalCountry);
    this.CountryData =[];
    totalCountry.forEach(element => {
      var countrytemp = {
        countryName: element,
        scores: this.roundValue(this.getMed(this.eqIndexData.filter(i => i.countryGroup == element)))
      }
      this.CountryData.push(countrytemp);
    });
    this.CountryData.sort((a,b)=>{
      return a.scores - b.scores;
    })
    console.log(this.CountryData);
    this.GridType = 'CountryGrid';
  }

  onCountryClick(d){
    this.GridType = 'IndexGrid';
    this.selSort = this.indexsortList[2];
    console.log(d);
    this.selCountry = d;
    this.selIndexData = this.eqIndexData.filter(i => i.countryGroup == d.countryName);
    this.selIndexData.sort((a,b)=>{
      return a.scores - b.scores;
    });
    console.log(this.selIndexData);
  }

  onIndexClick(d){
    this.selIndex = d;
    this.dataService.selIndex.next(this.selIndex);
    this.selCompanyData = this.IndexWise[this.selIndex.indexName];
    console.log(this.selIndex);
    this.GridType = 'CompanyGrid';
    this.selSort = this.companysortlist[2];
    this.showGICS = true;
    this.dataService.showGICS.next(this.showGICS);
    this.secLevel = 2;
    this.dataService.secLevel.next(this.secLevel);
  }

  onCompanyClick(d){
    console.log(d);
  }
  onbackClick(){
    this.GridType = 'CountryGrid';
    if(this.showSort){
      this.showSort = false;
    }
  }

  onCompanybackClick(){
    this.GridType = 'IndexGrid';
    if(this.showSort){
      this.showSort = false;
    }
    if(this.showGICS){
      this.showGICS = false;
      this.dataService.showGICS.next(this.showGICS);
    }
  }

  onSortItemClick(item){
    this.selSort = item;
    console.log(item);
    if(this.GridType == 'IndexGrid'){
      if(item == this.indexsortList[0]){
        this.selIndexData.sort((a,b)=>{
          return a.indexName.localeCompare(b.indexName);
        })
      }else if(item == this.indexsortList[1]){
        this.selIndexData.sort((a,b)=>{
          return b.indexName.localeCompare(a.indexName);
        })
      }else if(item == this.indexsortList[2]){
        this.selIndexData.sort((a,b)=>{
          return a.scores-b.scores;
        })
      }else if(item == this.indexsortList[3]){
        this.selIndexData.sort((a,b)=>{
          return b.scores-a.scores;
        })
      }
    }else if(this.GridType == 'CompanyGrid'){
      if(item == this.companysortlist[0]){
        this.selCompanyData.sort((a,b)=>{
          return a.companyName.localeCompare(b.companyName);
        })
      }else if(item == this.companysortlist[1]){
        this.selCompanyData.sort((a,b)=>{
          return b.companyName.localeCompare(a.companyName);
        })
      }else if(item == this.companysortlist[2]){
        this.selCompanyData.sort((a,b)=>{
          return a.scores-b.scores;
        })
      }else if(item == this.companysortlist[3]){
        this.selCompanyData.sort((a,b)=>{
          return b.scores-a.scores;
        })
      }else if(item == this.companysortlist[4]){
        this.selCompanyData.sort((a,b)=>{
          return a.ticker.localeCompare(b.ticker);
        })
      }else if(item == this.companysortlist[5]){
        this.selCompanyData.sort((a,b)=>{
          return b.ticker.localeCompare(a.ticker);
        })
      }
    }
    if(this.showSort){
      this.showSort = false;
    }
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

  roundValue(val) {
    return (Math.round(val * 10) / 10).toFixed(1);
  }

  getColor(med) {
    let gc100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    return gc100(med);
  }

  onSortClick(){
    if(this.showSort){
      this.showSort = false;
    }else{
      this.showSort = true;
    }
    
  }

}
