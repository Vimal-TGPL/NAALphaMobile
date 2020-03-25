import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  selectedCountry: any;
  selectedIndexData:any;
  SelectedData:any;
  PerformanceData: any = [];
  IndexData: any = [];
  Index: any = [];
  CountryClasificationList: any = ['All', 'USA', 'Europe', 'UK', 'Japan', 'Dev. World', 'Dev. World ex US'];
  performanceAPIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexPerformance';
  APIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexDetails';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.selectedCountry = 'All';
    this.LoadData();
  }

  OnItemClick(item) {
    this.selectedCountry = item;
    this.SelectedData=this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0];
    console.log(item);
  }

  LoadData() {
    this.httpClient.get(this.performanceAPIUrl).subscribe(data => {
      this.PerformanceData = data;
      console.log(this.PerformanceData);

      this.httpClient.get(this.APIUrl).subscribe(data => {
        this.IndexData = data;
        console.log(this.IndexData);
        var i = 0;
        for (i = 0; i < this.CountryClasificationList.length; i++) {
          var temp = this.filterIndex(this.CountryClasificationList[i]);
          temp = temp.sort((a, b) => {
            return a.indexName - b.indexName;
          });
          console.log(this.CountryClasificationList[i]);
          console.log(temp);
          this.Index.push(temp);
        }
        this.SelectedData=this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0];
        console.log(this.SelectedData);
      });
    });
  }

  filterIndex(item) {
    var index = item;
    var filterStr = 'U.S.';
    var ind = [];
    if (index == 'USA') {
      filterStr = 'U.S.';
      ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1);
    } else if (index == 'Europe') {
      filterStr = 'Europe'
      ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1);
    } else if (index == 'Europe') {
      filterStr = 'Europe'
      ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1);
    } else if (index == 'UK') {
      filterStr = 'UK'
      ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Europe') == -1);
    } else if (index == 'Japan') {
      filterStr = 'Japan'
      ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1);
    } else if (index == 'Dev. World') {
      filterStr = 'Developed World'
      ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Developed World Ex-US') == -1);
    } else if (index == 'Dev. World ex US') {
      filterStr = 'Developed World Ex-US'
      ind = this.IndexData.filter((data) => data.indexName.indexOf(filterStr) != -1);
    } else if (index == 'All') {
      ind = this.IndexData;
    }
    //console.log(ind);
    return ind;
  }

  onIndexChange(ev){
    console.log(ev.target.value);
  }
}
