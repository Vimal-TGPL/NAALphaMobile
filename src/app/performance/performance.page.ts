import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from "jquery";
import 'slick-carousel/slick/slick';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements OnInit {

  selectedIndexData:any = [];
  selectedIndexName:any;
  selectedIndex:any;
  itemActive:boolean = false;
  selectedCountry:any;
  PerformanceData:any = [];
  IndexData:any = [];
  Index:any = [];
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
    
    this.httpClient.get(this.APIUrl).subscribe(data=>{
      this.IndexData = data
      console.log(this.IndexData);
      var i = 0;
      for(i=0; i<this.CountryClasificationList.length;i++){
        this.Index.push(this.filterIndex(this.CountryClasificationList[i]));
     }
     console.log();
      //console.log(this.selectedIndex);
      this.OnItemClick('USA');
      document.getElementById('Loader').style.display='none';
    });
  });
  }



  filterIndex(item){
    //CON
    var index = item;
    //console.log(item);
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
    //console.log(ind);
   // this.selectedIndex = ind[0].indexName;
   // this.selectedIndex = this.selectedIndex.replace('New Age Alpha ','');
    //console.log(this.selectedIndex)
    return ind;
  }

  OnItemClick(item){
    this.itemActive = true;
    this.selectedCountry = item;
    this.selectedIndex = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0];
    this.selectedIndexName = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0].indexName.replace('New Age Alpha ','')
   // this.selectedIndex = this.filterIndex(item)[0].IndexName;
   // this.selectedIndex = this.selectedIndex.replace('New Age Alpha ','');
    var inddata = this.PerformanceData.filter(data => data.indexName == this.selectedIndex.indexName);
    this.selectedIndexData = inddata[0];
    console.log(this.selectedIndexData);
    //console.log(this.selectedIndex);
    //document.getElementById(this.replaceId(item)).scrollLeft;
    //$(this.replaceId(item)).scrollTo(100);
  }

  replaceId(item){
    var itm = item.replace(/ /g,'-');
    return itm;
  }

  onIndexChange(event){
    console.log(event.target.value);
    var d =this.IndexData.filter(data=> data.indexName.indexOf(event.target.value) != -1);
    this.selectedIndex = d[0];
    var inddata = this.PerformanceData.filter(data => data.indexName == this.selectedIndex.indexName);
    this.selectedIndexData = inddata[0];
    console.log(this.selectedIndexData);
    //console.log(d);
  }

}
