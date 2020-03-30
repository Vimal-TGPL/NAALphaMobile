import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PopoverController } from '@ionic/angular';
import { ProfiledetailsComponent } from '../../Components/profiledetails/profiledetails.component';
import { templateJitUrl } from '@angular/compiler';
import { MatTabGroup,MatTab} from '@angular/material';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  selectedCountry: any;
  selectedIndexData: any;
  SelectedData: any;
  PerformanceData: any = [];
  IndexData: any = [];
  Index: any = [];
  CountryClasificationList: any = ['All', 'USA', 'Europe', 'UK', 'Japan', 'Dev. World', 'Dev. World ex US'];
  performanceAPIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexPerformance';
  APIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexDetails';
  constructor(private httpClient: HttpClient, private popoverController: PopoverController) { }

  ngOnInit() {
    this.selectedCountry = 'All';
    this.LoadData();
  }

  OnItemClick(item) {
    this.selectedCountry = item;
    this.SelectedData = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0];
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

        this.SelectedData = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0];
        console.log(this.SelectedData);
        var temps = this.PerformanceData.filter(item => item.indexName == this.SelectedData.indexName);
        this.selectedIndexData = temps[0];
        console.log(this.selectedIndexData);
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

  onIndexChange(ev) {
    var temp = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)].filter(item => item.indexName == ev.target.value);
    this.SelectedData = temp[0];
    console.log(this.SelectedData);

    var temp2 = this.PerformanceData.filter(item => item.indexName == this.SelectedData.indexName);
    this.selectedIndexData = temp2[0];
    console.log(this.selectedIndexData);
    console.log(ev.target.value);
  }

  async profilePopover(e: any) {
    console.log("presenting profile Details");
    const popover = await this.popoverController.create({
      component: ProfiledetailsComponent,
      event: e,
      translucent: true,
      cssClass: 'Custom_profile'
    });

    return await popover.present();
  }

  roundOf(val) {
    var temp = Math.round(val * 100)/100;
    return temp.toFixed(2);
  }
}
