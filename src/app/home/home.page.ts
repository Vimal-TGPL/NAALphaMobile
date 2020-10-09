import { Component, OnInit, AfterViewInit, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Platform, IonSlides, IonContent, MenuController, ToastController, ModalController } from '@ionic/angular';
import * as d3 from 'd3';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Router } from '@angular/router';
import { AlertController, PickerController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { AlertService } from '../services/alert.service';
import { DataHandlerService } from '../services/dataHandler/data-handler.service';
import { DataService } from '../services/shareddata/data.service';
import { MobileSearchComponent } from '../Components/mobile-search/mobile-search.component';
import { id } from '@swimlane/ngx-datatable';
import { event } from 'jquery';
import { SectorPopoverComponent } from '../Components/sector-popover/sector-popover.component';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit {
  // slides={initialSlide: 1};
  // @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  mobile: boolean;
  AvoidLosersec:boolean = false;
  AlertSec:boolean = false;
  ReportSec:boolean = false;
  currenturl:any;
  currentUser:any;
  data:any;
  _dataSub:any;
  selComp:any;
  _selCompsub:any;
  sectorList:any = [];
  dbGICS:any = [];
  _dbGICSSub:any;
  indexData:any;
  selSec:any;
  sectorOrder = [{
    name: 'Index',
    order:1
  },{name:'Sector',order:2},{name:'Industry Group',order:3},{name:'Industry',order:4},{name:'Sub Industry',order:5}];
  ngOnInit() {
    // this.currenturl = this.router.url;
    if (this.platform.is('ipad') || this.platform.is('tablet')) {
      this.mobile = false;
    } else {
      this.mobile = true;
      console.log(this.mobile);
    }
    this.menuCtrl.enable(true);
    this._dataSub = this.dataService.dbScore.subscribe(d=>{
      if(d.length != 0){
        this.data = d;
        console.log(d);
      }
    });
    this._selCompsub = this.dataService.mobSelComp.subscribe(d =>{
      if(d){
        this.selComp = d;
        console.log(this.selComp);
        this.indexClassifier();
        this.sectorClassifier();
        
      }
    });
    this._dbGICSSub = this.dataService.dbGICS.subscribe(d =>{
      if(d.length != 0){
        this.dbGICS = d;
        console.log(this.dbGICS);
      }
    })
  }

  constructor(private popoverCtrl: PopoverController,private modalCtrl:ModalController ,private dataService: DataService, private dataHandler: DataHandlerService, private menuCtrl: MenuController, private platform: Platform, public alertController: AlertController,private authService: AuthenticationService, public storage: Storage) {
    this.currentUser = this.authService.currentUserValue();
    console.log(this.currentUser);

  }
  ngAfterViewInit(): void {
  }

  openMenu(){
    this.menuCtrl.open();
  }

  async openSearch(){
    const modal = await this.modalCtrl.create({
      component: MobileSearchComponent,
      cssClass:'searchModel',
    });
    return await modal.present();
  }

  sectorClassifier(){
    this.sectorList = [];
    var selCompInd =  this.selComp.industry;
    console.log(selCompInd);
    this.sectorOrder.forEach(i =>{
      var temp = {
        secTitle:i.name,
        secName: this.getSectorname(i.order,selCompInd),
        secCount: this.getSecCount(i.order,selCompInd),
        secMed:this.getSecMed(i.order,selCompInd)
      }
      this.sectorList.push(temp);
    });
    console.log(this.sectorList);
    this.selSec = this.sectorList[4];
    console.log(this.selSec);
  }

  indexClassifier(){
    this.indexData = this.data.filter(i=>i.indexName == this.selComp.indexName);
    console.log(this.indexData);
  }

  getSectorname(lev,ind){
    if(lev == 1){
      return this.selComp.indexName;
    }else if(lev == 2){
      var tempind = ind.slice(0,2);
      var indname = this.dbGICS.filter(i => i.code == tempind)[0];
      console.log(indname);
      return indname.name;
    }else if(lev == 3){
      var tempind = ind.slice(0,4);
      var indname = this.dbGICS.filter(i => i.code == tempind)[0];
      console.log(indname);
      return indname.name;
    }else if(lev == 4){
      var tempind = ind.slice(0,6);
      var indname = this.dbGICS.filter(i => i.code == tempind)[0];
      console.log(indname);
      return indname.name;
    }else if(lev == 5){
      var tempind = ind.slice(0,8);
      var indname = this.dbGICS.filter(i => i.code == tempind)[0];
      console.log(indname);
      return indname.name;
    }
  }

  getSecCount(lev,ind){
    if(lev == 1){
      return this.indexData.length;
    }else if(lev == 2){
      var tempind = ind.slice(0,2);
      var temp = this.indexData.filter(i => i.industry.slice(0,2) == tempind);
      return temp.length;
    }else if(lev == 3){
      var tempind = ind.slice(0,4);
      var temp = this.indexData.filter(i => i.industry.slice(0,4) == tempind);
      return temp.length;
    }else if(lev == 4){
      var tempind = ind.slice(0,6);
      var temp = this.indexData.filter(i => i.industry.slice(0,6) == tempind);
      return temp.length;
    }else if(lev == 5){
      var tempind = ind.slice(0,8);
      var temp = this.indexData.filter(i => i.industry.slice(0,8) == tempind);
      return temp.length;
    }
  }

  getSecMed(lev,ind){
    if(lev == 1){
      return this.dataService.roundValue(this.dataService.getMed(this.indexData)*100);
    }else if(lev == 2){
      var tempind = ind.slice(0,2);
      var temp = this.indexData.filter(i => i.industry.slice(0,2) == tempind);
      return this.dataService.roundValue(this.dataService.getMed(temp)*100);
    }else if(lev == 3){
      var tempind = ind.slice(0,4);
      var temp = this.indexData.filter(i => i.industry.slice(0,4) == tempind);
      return this.dataService.roundValue(this.dataService.getMed(temp)*100);
    }else if(lev == 4){
      var tempind = ind.slice(0,6);
      var temp = this.indexData.filter(i => i.industry.slice(0,6) == tempind);
      return this.dataService.roundValue(this.dataService.getMed(temp)*100);
    }else if(lev == 5){
      var tempind = ind.slice(0,8);
      var temp = this.indexData.filter(i => i.industry.slice(0,8) == tempind);
      return this.dataService.roundValue(this.dataService.getMed(temp)*100);
    }
  }

  onAvoidLoserClick(){
    if(this.AvoidLosersec){
      this.AvoidLosersec = false;
    }else{
      this.AvoidLosersec = true;
      this.ReportSec = false;
      this.AlertSec = false;
    }
  }

  onAlertClick(){
    if(this.AlertSec){
      this.AlertSec = false;
    }else{
      this.AlertSec = true;
      this.AvoidLosersec = false;
      this.ReportSec = false;
    }
  }

  onReportClick(){
    if(this.ReportSec){
      this.ReportSec = false;
    }else{
      this.ReportSec = true;
      this.AvoidLosersec = false;
      this.AlertSec = false;
    }
  }

  getColor(med) {
    let gc100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    return gc100(med);
  }

  async openSecPopOver(evt){

    const popover = await this.popoverCtrl.create({
      component: SectorPopoverComponent,
      event: evt,
      translucent: true,
      cssClass:'sec-popover',
      componentProps: {sectorList:this.sectorList,selComp:this.selComp}
      
    });
    return popover.present();
  }

}

