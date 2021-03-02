import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/shareddata/data.service';
@Component({
  selector: 'app-searchtool',
  templateUrl: './searchtool.component.html',
  styleUrls: ['./searchtool.component.scss'],
})
export class SearchtoolComponent implements OnInit, OnDestroy {

  selTab:any;
  _selTabSub:any;
  data:any = [];
  _searchRes:any = [];
  _etfData:any = [];
  etfsub:any;
  searchText:string = null;
  constructor(private modalCtrl: ModalController, private dataService: DataService) { 
    this._selTabSub = this.dataService.selTab.subscribe(d =>{
      this.selTab = d;
    })
  }
  ngOnDestroy() {
    this._selTabSub.unsubscribe();
  }

  ngOnInit() {
    this.getSearchdata();
    this.dataService.getETFdata();
  }

  onSearchChange(e){
    console.log(e);
    console.log(this.searchText);
    console.log(this.data);
    var serText = e.target.value.toLowerCase();
    if(serText.length > 1 && this.data.length != 0){
      if(this.selTab != "ETF's"){
        this._searchRes = this.data.filter(i => i.companyName.toString().toLowerCase().startsWith(serText) || i.ticker.toString().toLowerCase().startsWith(serText));
        this._searchRes.sort((a,b)=>{
          return a.sortOrder - b.sortOrder;
        })
      }else{
        console.log(this.data.filter(i=> i.ticker == null));
        this._searchRes = this.data.filter(i => i.etfName.toString().toLowerCase().startsWith(serText));
        this._searchRes.sort((a,b)=>{
          return a.etfName > b.etfName;
        })
      }      
      console.log(this._searchRes);
    }else{
      this._searchRes.length = 0;
    }
    
  }

  onbackClick(e){
    this.modalCtrl.dismiss();
  }

  segmentChanged(e){
    // console.log(e);
    this.selTab = e.detail.value;
    this.dataService.selTab.next(this.selTab);
    if(this._searchRes.length != 0){
      this._searchRes.length = 0;
    }
    this.searchText = null;
    this.getSearchdata();
  }

  getSearchdata(){
    if(this.selTab == 'Equities & FI'){
      // this.data = 
      this.dataService.getEquitiesdata().then(d =>{
        this.data = d;
        this.dataService.getFIdataList().then(d =>{
          this.data.push(d[0]);
          console.log(this.data);
        });
      });
    }
    // else if(this.selTab == 'NAA Indexes'){
    //   this.dataService.getNAAIndexesData().then(d =>{
    //     this.data = d;
    //     console.log(this.data);
    //   })
    // }
    else if(this.selTab == "ETF's"){
      
      var etfsub = this.dataService.ETFIndex.subscribe(d => {
        if (d.length != 0) {
          this.data = d;
          console.log(this.data);
        }
      })
      console.log(this.data);
      etfsub.unsubscribe();
    }
  }

  onItemSelect(i){
    console.log(i);
  }
}
