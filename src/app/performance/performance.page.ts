import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from "jquery";
import 'slick-carousel/slick/slick';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements OnInit {

  selectedIndex:any;
  itemActive:boolean = false;
  selectedCountry:any;
  PerformanceData:any = [];
  IndexData:any = [];
  CountryClasificationList:any = ['All','USA','Europe','UK','Japan','Dev. World','Dev. World ex US'];
  performanceAPIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexPerformance';
  APIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexDetails';
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.loadData();
    
  }

  loadData(){
    this.httpClient.get(this.performanceAPIUrl).subscribe(data=>{
      this.PerformanceData = data
      console.log(this.PerformanceData);
    });
    this.httpClient.get(this.APIUrl).subscribe(data=>{
      this.IndexData = data
      console.log(this.IndexData);
      console.log(this.selectedIndex);
    });
  }



  filterIndex(item){
    //CON
    var index = item;
    console.log(item);
    var filterStr='U.S.';
    var ind = [];
    if(index == 'USA')
    {
      filterStr = 'U.S.';
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
    }else if(index == 'Europe'){
      filterStr = 'Europe'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
    }else if(index == 'Europe'){
      filterStr = 'Europe'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
    }else if(index == 'UK'){
      filterStr = 'UK'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Europe') == -1);
    }else if(index == 'Japan'){
      filterStr = 'Japan'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
    }else if(index == 'Dev. World'){
      filterStr = 'Developed World'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Developed World Ex-US') == -1);
    }else if(index == 'Dev. World ex US'){
      filterStr = 'Developed World Ex-US'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
    }else if(index == 'All'){
      ind = this.IndexData;
    }
    
    return ind;
  }

  OnItemClick(item){
    this.itemActive = true;
    this.selectedCountry = item;
    //document.getElementById(this.replaceId(item)).scrollLeft;
    //$(this.replaceId(item)).scrollTo(100);
  }

  replaceId(item){
    var itm = item.replace(/ /g,'-');
    return itm;
  }

}
