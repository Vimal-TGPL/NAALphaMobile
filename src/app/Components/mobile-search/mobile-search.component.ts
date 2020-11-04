import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar, ModalController} from '@ionic/angular';
import { DataService } from 'src/app/services/shareddata/data.service';

@Component({
  selector: 'app-mobile-search',
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.scss'],
})
export class MobileSearchComponent implements OnInit, OnDestroy,AfterViewInit {
  data:any = [];
  _dataSub:any;
  _searchRes:any = [];
  _selcomp:any;
  // searchbar:any;
  
  @ViewChild(IonSearchbar,{static:false}) searchbar:IonSearchbar;
  constructor(private dataService: DataService,private modalCtrl:ModalController) { }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.searchbar.setFocus().then(d=>{

      });
    }, 100);
    
  }
  

  ngOnInit() {
   this._dataSub = this.dataService.dbScore.subscribe(d =>{
      this.data = d;
      // console.log(this.data);
    })
    // this.searchbar = document.getElementById("searchbar");
    // console.log(this.searchbar);
  }

  ngOnDestroy(): void {
    this._dataSub.unsubscribe();
  }

  closeSearch(){
    this.modalCtrl.dismiss();
  }

  SearchCompany(evt){
    // console.log(evt);
    var serText = evt.detail.value.toLowerCase();
    if(serText.length != 0)
    this._searchRes = this.data.filter(item=> item.companyName.toString().toLowerCase().startsWith(serText) || item.ticker.toString().toLowerCase().startsWith(serText));
    else
    this._searchRes = [];
    // console.log(this._searchRes);
  }

  onCompanyClick(item){
    // console.log(item);
    this._selcomp = item;
    this.dataService.mobSelComp.next(this._selcomp);
    this.closeSearch();
  }
}
