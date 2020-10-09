import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/shareddata/data.service';

@Component({
  selector: 'app-mobile-search',
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.scss'],
})
export class MobileSearchComponent implements OnInit, OnDestroy {
  data:any;
  _dataSub:any;
  _searchRes:any = [];
  _selcomp:any;
  constructor(private dataService: DataService,private modalCtrl:ModalController) { }
  

  ngOnInit() {
   this._dataSub = this.dataService.dbScore.subscribe(d =>{
      this.data = d;
      // console.log(this.data);
    })
  }

  ngOnDestroy(): void {
    this._dataSub.unsubscribe();
  }

  closeSearch(){
    this.modalCtrl.dismiss();
  }

  SearchCompany(evt){
    // console.log(evt);
    var serText = evt.detail.value;
    this._searchRes = this.data.filter(item=> item.companyName.toString().toLowerCase().startsWith(serText) || item.ticker.toString().toLowerCase().startsWith(serText));
    // console.log(this._searchRes);
  }

  onCompanyClick(item){
    // console.log(item);
    this._selcomp = item;
    this.dataService.mobSelComp.next(this._selcomp);
    this.closeSearch();
  }

}
