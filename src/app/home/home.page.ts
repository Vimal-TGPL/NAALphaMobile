import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { Platform,  MenuController, ModalController, PickerController, ToastController } from '@ionic/angular';
import * as d3 from 'd3';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { DataHandlerService } from '../services/dataHandler/data-handler.service';
import { DataService } from '../services/shareddata/data.service';
import { MobileSearchComponent } from '../Components/mobile-search/mobile-search.component';
import { SectorPopoverComponent } from '../Components/sector-popover/sector-popover.component';
import { PickerOptions } from '@ionic/core';
declare var $:any;
import * as HighCharts from 'highcharts';
import { LineChartComponent } from '../Components/line-chart/line-chart.component';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, OnDestroy {
  plt:any;
  draggedHandle:boolean;
  rangePer:any = 1;
  alertSubmitBtn:boolean = true;
  avoidSlides:boolean = false;
  showLoader:boolean = false;
  alertUpdateBtn:boolean = false;
  perRadioGrp:any;
  slides:any;
  AL_mainCircle:boolean = false;
  AL_rangeCircle:boolean = false;
  AL_slides:any;
  firstLoad:boolean= true;
  selWeeklyday:any = 'Monday';
  weeklyDiv:boolean = false;
  monthlyBtn:boolean = false;
  monthlyDate:any = 1;
  percentageRage:boolean = false;
  mobile: boolean;
  AvoidLosersec:boolean = false;
  AlertSec:boolean = false;
  ReportSec:boolean = false;
  currenturl:any;
  currentUser:any;
  data:any = [];
  _dataSub:any;
  selComp:any;
  _selCompsub:any;
  sectorList:any = [];
  dbGICS:any = [];
  _dbGICSSub:any;
  indexData:any;
  selSec:any;
  chartData:boolean;
  selIndexData:any;
  CurrSlide:any = 1;
  AL_CurrSlide:any = 1;
  selctedradioopts:any = 'daily';
  AL_List:any = [];
  AL_FilteredList:any = [];
  IndexId:any = 0;
  smChart:any;
  _authstateSub:any;
  cumReturn: any = "0.00%";
  annReturn: any = "0.00%";
  CurrSliderData:any = {'a': 0,
    'aAngle': 0,
    'e': 100,
    'eAngle': 360};
  slideOpts:any = {
    initialSlide : this.CurrSlide,
    slidesPerView:1,
    zoom:false
  }
  monthlySlideOpts:any ={
    slidesPerView:7,
  }
  sectorOrder = [{name: 'Index',order:1},{name:'Sector',order:2},{name:'Industry Group',order:3},{name:'Industry',order:4},{name:'Sub Industry',order:5}];
  
  gC360:any;
  gC100:any;
  gchart:any;
  chartMain:any;
  radius = 170;
  createXrad:any;
  
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    if(this.platform.is('android')){
      this.plt = 'android';
    }else if(this.platform.is('ios')){
      this.plt = 'ios';
    }else{
      this.plt = 'android';
    }

    if (this.platform.is('ipad') || this.platform.is('tablet')) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }

    this.menuCtrl.enable(true);

    this._dataSub = this.dataService.dbScore.subscribe(d=>{
      if(d.length != 0){
        this.data = d;
      }else{
        this.dataService.getDbGICSData();
        this.dataService.getGlobalData();
      }
    });

    this._selCompsub = this.dataService.mobSelComp.subscribe(d =>{
      if(d){
        if(this.selComp == undefined){
          this.selComp = d;
          this.indexClassifier().then(res=>{
            this.sectorClassifier().then(res=>{
              this.createIndexData().then(res=>{
                setTimeout(() => {
            this.loadData();
          }, 500);
              });
            });
          });
        }else{
          this.selComp = d;
          this.AL_mainCircle = false;
          this.AL_rangeCircle = false;
          this.AvoidLosersec = false;
          this.avoidSlides = false;
          this.firstLoad = true;
          this.alertUpdateBtn = false;
          if(this.AlertSec){
            this.AlertSec = false;
          }
          if(this.ReportSec){
            this.ReportSec = false;
          }
          this.CurrSliderData = {'a': 0,
          'aAngle': 0,
          'e': 100,
          'eAngle': 360};
          this.indexClassifier();
          this.sectorClassifier();
          this.createIndexData();
          this.scrollto();
          setTimeout(() => {
            this.loadData();
          }, 500);
        }        
      }
    });

    this._dbGICSSub = this.dataService.dbGICS.subscribe(d =>{
      if(d.length != 0){
        this.dbGICS = d;
      }
    })

    this._authstateSub = this.authService.authenticationState.subscribe(res=>{
      if(res == false){
        this.AL_mainCircle = false;
          this.AL_rangeCircle = false;
          this.AvoidLosersec = false;
          this.avoidSlides = false;
          this.firstLoad = true;
          this.alertUpdateBtn = false;
          this.AlertSec=false;
          this.ReportSec=false;
          this.selComp=null;
          this.dataService.mobSelComp.next(null);
          this.dataService.dbScore.next('');
          this.dataService.dbGICS.next('');
          this.dataService._dbGICS = '';
          this.dataService.dbScoretemp ='';
      }
    })
  }

  constructor(private screenOrientation:ScreenOrientation, private toastCtrl:ToastController,private popoverCtrl: PopoverController,private modalCtrl:ModalController ,private dataService: DataService, private dataHandler: DataHandlerService, private menuCtrl: MenuController, private platform: Platform, public alertController: AlertController,private authService: AuthenticationService, public storage: Storage, public pickerCtrl: PickerController) {
    this.currentUser = this.authService.currentUserValue();
  }
  ngOnDestroy() {
    this.screenOrientation.unlock();
    this._selCompsub.unsubscribe();
    this._dataSub.unsubscribe();
    this._dbGICSSub.unsubscribe();
    this._authstateSub.unsubscribe();
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
    return new Promise((resolve,reject)=>{
      this.sectorList = [];
      var selCompInd =  this.selComp.industry;
    this.sectorOrder.forEach((i,ind) =>{
        var temp = {
          secTitle:i.name,
          secName: this.getSectorname(i.order,selCompInd),
          secCount: this.getSecCount(i.order,selCompInd),
          secMed:this.getSecMed(i.order,selCompInd)
        }
        this.sectorList.push(temp);

        if(ind == this.sectorOrder.length -1 ){
          resolve();
        }
      });
      this.selSec = this.sectorList[1];
    })
    
  }

  indexClassifier(){
    return new Promise((resolve,reject)=>{
      this.indexData = this.data.filter(i=>i.indexName == this.selComp.indexName);
      resolve();
    });
  }

  getSectorname(lev,ind){
    if(lev == 1){
      return this.selComp.indexName;
    }else if(lev == 2){
      var tempind = ind.slice(0,2);
      var indname = this.dbGICS.filter(i => i.code == tempind)[0];
      return indname.name;
    }else if(lev == 3){
      var tempind = ind.slice(0,4);
      var indname = this.dbGICS.filter(i => i.code == tempind)[0];
      return indname.name;
    }else if(lev == 4){
      var tempind = ind.slice(0,6);
      var indname = this.dbGICS.filter(i => i.code == tempind)[0];
      return indname.name;
    }else if(lev == 5){
      var tempind = ind.slice(0,8);
      var indname = this.dbGICS.filter(i => i.code == tempind)[0];
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
      this.AL_mainCircle = false;
      this.AL_rangeCircle = false;
      this.firstLoad = true;
      this.CurrSliderData = {'a': 0,
      'aAngle': 0,
      'e': 100,
      'eAngle': 360};
      if(!this.ReportSec && !this.AlertSec){
        setTimeout(() => {
          this.loadData();
        }, 50);
        this.avoidSlides = false;
      }
    }else{
      this.AvoidLosersec = true;
      this.ReportSec = false;
      this.AlertSec = false;
      this.weeklyDiv=false;
      this.monthlyBtn = false;
      this.percentageRage =false;
      setTimeout(() => {
        this.loadData();
      }, 50);
    }
  }

  onAlertClick(){
    if(this.AlertSec){
      this.AlertSec = false;
      this.weeklyDiv=false;
      this.monthlyBtn = false;
      this.percentageRage =false;
      if(!this.AvoidLosersec && !this.ReportSec){
        setTimeout(() => {
          this.loadData();
        }, 50);
      } 
    }else{
      if(document.getElementById('Circleloader') != null )
      document.getElementById('Circleloader').style.display= 'none';
      this.showLoader = true;
      this.firstLoad = true;
      this.AvoidLosersec = false;
      this.AL_mainCircle = false;
      this.AL_rangeCircle = false;
      this.avoidSlides = false;
      this.CurrSliderData = {'a': 0,
      'aAngle': 0,
      'e': 100,
      'eAngle': 360};
      var userInfo = {
        userId: this.currentUser.userId,
        stockKey: this.selComp.stockKey
      }
      this.dataHandler.getAlert(userInfo).subscribe((d:any)=>{

        if(d.length != 0){
          this.alertSubmitBtn = false;
          this.alertUpdateBtn = false;
          if(d[0].daily == 'Y'){
            this.selctedradioopts = 'daily';
          }else if(d[0].monthly == 'Y'){
            this.selctedradioopts = 'monthly';
            this.monthlyDate = d[0].monthDt;
            this.monthlyBtn = true;
          }else if(d[0].weekly == 'Y'){
            this.selctedradioopts = 'weekly';
            this.selWeeklyday = d[0].weekDay;
            this.weeklyDiv = true;
          }

          if(d[0].scoreChange == 'Y'){
            this.perRadioGrp = 'percentage';
            this.rangePer = d[0].scorePercent;
            this.percentageRage = true;
          }
        }else{
          this.alertSubmitBtn = true;
          this.selctedradioopts ='daily';
          this.monthlyBtn = false;
          this.weeklyDiv = false;
          this.perRadioGrp = '';
          this.percentageRage = false;
          this.rangePer= 1;
          this.monthlyDate = 1;
        }
        this.showLoader = false;
        this.AlertSec = true;
        this.AvoidLosersec = false;
        this.ReportSec = false;
      });
    }
  }

  onRemoveAlert(evt){
    var userInfo = {
      userId: this.currentUser.userId,
      stockKey: this.selComp.stockKey
    };
    this.dataHandler.deleteAlert(userInfo).subscribe(d=>{
      if(d[0] == "Success"){
          this.alertSubmitBtn = true;
          this.selctedradioopts ='daily';
          this.monthlyBtn = false;
          this.weeklyDiv = false;
          this.perRadioGrp = '';
          this.percentageRage = false;
          this.rangePer= 1;
          this.monthlyDate = 1;
          this.presentToast('Alert Removed successfully');
      }
    })
  }

  async presentToast(msg){
    var toast = await this.toastCtrl.create({
      message:msg,
      duration: 2000,
      cssClass: 'center'
    });
    await toast.present();
  }

  setRangePer(e){
    this.rangePer = e.detail.value;
    if(!this.alertSubmitBtn){
      this.alertUpdateBtn = true;
    }else{
      this.alertUpdateBtn = false;
    }
  }

  onAlertSubmit(e){
    var alerts = {
      userId:this.currentUser.userId,
      stockKey: this.selComp.stockKey,
      daily: this.selctedradioopts == 'daily' ? 'Y': 0,
      weekly: this.selctedradioopts == 'weekly' ? 'Y': 0,
      weekDay: this.selctedradioopts == 'weekly' ? this.selWeeklyday: 0,
      monthly: this.selctedradioopts == 'monthly' ? 'Y': 0,
      monthDt: this.selctedradioopts == 'monthly' ? this.monthlyDate : 0,
      scoreChange: this.percentageRage ? 'Y' : 0,
      scorePercent: this.percentageRage ? this.rangePer : 0,
      mailType: 'H',
      country: this.selComp.country
    }
    this.dataHandler.setAlert(alerts).subscribe(d =>{
      if(d[0] == 'Success'){
        this.presentToast('Alert Submitted Sucessfully');
          this.alertSubmitBtn = true;
          this.selctedradioopts ='daily';
          this.monthlyBtn = false;
          this.weeklyDiv = false;
          this.perRadioGrp = '';
          this.percentageRage = false;
          this.onAlertClick();
      }
    })
  }

  onReportClick(){
    if(this.ReportSec){
      this.ReportSec = false;
      if(!this.AvoidLosersec && !this.AlertSec){
        setTimeout(() => {
          this.loadData();
        }, 50);
      }
    }else{
      this.ReportSec = true;
      this.AvoidLosersec = false;
      this.AlertSec = false;
      this.firstLoad = true;
      this.weeklyDiv=false;
      this.monthlyBtn = false;
      this.percentageRage =false;
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
      translucent: true,
      cssClass:'sec-popover',
      componentProps: {sectorList:this.sectorList,selComp:this.selComp}
      
    });
    popover.onDidDismiss().then(d=>{
      if(d.data != undefined){
        this.selSec = d.data;
        this.createIndexData();
        
        if(!this.AvoidLosersec){
          this.showLoader = true;
          setTimeout(() => {
            this.scrollto();
          }, 50);
          setTimeout(() => {
              this.CreateComps();
              this.fillCompetives();
              this.CreateCompCircle();
              setTimeout(() => {
                this.creatClockSlider();
              this.setClock(this.selComp.isin, ( this.selIndexData.indexOf(this.selComp) *360/this.selIndexData.length)-90, this.selComp.ticker );
              this.showLoader = false;
              }, 100);
          }, 100);
        }else if(this.AvoidLosersec && !this.AL_mainCircle && this.AL_rangeCircle){
          this.showLoader = true;
          this.CurrSliderData = {'a': 0,
          'aAngle': 0,
          'e': 0,
          'eAngle': 0};
          setTimeout(() => {
            this.AL_List = this.selIndexData;
            this.OnAL_listChange(this.CurrSliderData);
            this.loadData();
          }, 100);
        }else if(this.AvoidLosersec && this.AL_mainCircle && !this.AL_rangeCircle){
          this.showLoader = true;
          this.CurrSliderData = {'a': 0,
          'aAngle': 0,
          'e': 0,
          'eAngle': 0};
          setTimeout(() => {
            this.AL_List = this.selIndexData;
            this.OnAL_listChange(this.CurrSliderData);
            this.loadData();
          }, 100);
        }       
      }
    })
    return await popover.present();
  }

  createIndexData(){
    return new Promise((resolve,reject)=>{
      if(this.selSec.length != 0){
        var selSecLvl = this.sectorOrder.filter(i=> i.name == this.selSec.secTitle)[0].order;
        if(selSecLvl == 1){
          this.selIndexData = this.indexData;
        }else if(selSecLvl == 2){
          this.selIndexData = this.indexData.filter(i => i.industry.slice(0,2) == this.selComp.industry.slice(0,2));
        }else if(selSecLvl == 3){
          this.selIndexData = this.indexData.filter(i => i.industry.slice(0,4) == this.selComp.industry.slice(0,4));
        }else if(selSecLvl == 4){
          this.selIndexData = this.indexData.filter(i => i.industry.slice(0,6) == this.selComp.industry.slice(0,6));
        }else if(selSecLvl == 5){
          this.selIndexData = this.indexData.filter(i => i.industry== this.selComp.industry);
        }
      }
      resolve();
    })
    
  }

  onArrowClick(d){
    if(d == 0 && this.CurrSlide != 0){
      this.scrollto();
    }
    this.CurrSlide = d;
    this.slides = document.getElementById('MainSlider');
    this.slides.slideTo(d);
    
  }

  onALArrowClick(e){
    this.AL_slides = document.getElementById('AL_Slider');
    if(e == 'prev'){
      this.AL_slides.slidePrev();
    }else if(e == 'frwd'){
      this.AL_slides.slideNext();
    }
    this.AL_slides.getActiveIndex().then(d =>{
      this.AL_CurrSlide
    });
    
  }

  onSlideChange(evt){
    this.slides = document.getElementById('MainSlider');
    this.slides.getActiveIndex().then(d =>{
      this.CurrSlide = d;
      if(this.CurrSlide == 0)
      this.scrollto();
    })
  }

  onALSlideChange(evt){
    this.AL_CurrSlide = evt.target.swiper.activeIndex;
    let prev_ind = evt.target.swiper.previousIndex;
    if(this.AL_CurrSlide == 1){
    this.AL_mainCircle = true;
    this.AL_rangeCircle = false;
    if(prev_ind != 0){
      setTimeout(() => {
          this.showLoader = true;  
          this.loadData();
      }, 100);
    }else if(this.firstLoad){
      setTimeout(() => {
        if(this.AL_CurrSlide == 1){
          this.showLoader = true;  
          this.firstLoad = false;
          this.loadData();
        }
      }, 1000);
    }
    
    }else if(this.AL_CurrSlide == 2){
      this.showLoader = true;
      this.AL_mainCircle = false;
      this.AL_rangeCircle = true;
      setTimeout(() => {
        this.loadData();
            setTimeout(() => {
              var temp = {0:0,1:this.CurrSliderData.e};
              this.SliderOnChange(temp);
            }, 500);
      }, 50);
    }else if(this.AL_CurrSlide == 0){
      if(this.AL_FilteredList.length !=0 && this.AL_FilteredList.filter(data => data.isin === this.selComp.isin).length != 0)
      this.scrollto();
      else
      this.scrollToListTop();
    }
  }

  roundMed(score){
    return this.dataService.roundValue(score);
  }

  onCompanyClick(comp){
    this.selComp = comp;
    this.indexClassifier();
    this.sectorClassifier();
    this.createIndexData();
    setTimeout(() => {
      this.CreateComps();
      this.createCompetitive(this.chartMain);
      this.fillCompetives();
      this.CreateCompCircle();
      setTimeout(() => {
        this.creatClockSlider();
        this.setClock(this.selComp.isin, (this.selIndexData.indexOf(this.selComp) *360/this.selIndexData.length)-90, this.selComp.ticker );
      }, 100);
      
    }, 100);
    setTimeout(() => {
      this.slides.slideTo(1);
    }, 50);
  }

  scrollto(){
    var index = this.selIndexData.indexOf(this.selComp);
    var list = document.getElementById('CompList');
    list.scrollTop = 55*(index-3);
  }

  scrollToListTop(){
    var list = document.getElementById('CompList');
    list.scrollTop = 0;
  }

  loadData(){
    if(!this.AvoidLosersec)
    document.getElementById("Circleloader").style.display = "flex";
    this.gC360 = d3.scaleLinear()
      .domain([0, 90, 180, 270, 360])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);

    this.gC100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);

    this.gchart = d3.select("#gchart");
    
    this.chartMain = this.createMainChart(this.gchart);

    setTimeout(() => {
      
    if(!this.AvoidLosersec){
      let slideHeight = document.getElementsByClassName('circleSlide')[0].clientHeight;
      let slidewidth = document.getElementsByClassName('circleSlide')[0].clientWidth;

      d3.select('#svgHContainer1').attr('viewBox',function(){
        return '0 0 '+slidewidth*2+' '+slideHeight
      })

      this.gchart.attr('transform',function(){
        return 'translate('+slidewidth+','+slideHeight/2+')'
      })
    }else if(this.AvoidLosersec && this.AL_mainCircle && !this.AL_rangeCircle){
      let slideHeight = document.getElementsByClassName('CircleSlider')[0].clientHeight;
      let slidewidth = document.getElementsByClassName('CircleSlider')[0].clientWidth;

      d3.select('#svgHContainer1').attr('viewBox',function(){
        return '0 0 '+slidewidth*2+' '+slideHeight
      })

      this.gchart.attr('transform',function(){
        return 'translate('+slidewidth+','+slideHeight/2+')'
      })
    }
  }, 500);
    
  }

  createMainChart(obj){
    let that = this;

    let sradius = 100;
    obj.select("#crlChart").remove();
    var grp1 = obj.append("g").attr("id", "crlChart");
    grp1.append("circle")
    .attr("id", "maincircle")
    .attr("class", "start-ring")
    .attr("fill", "#fff")
    .attr('fill-opacity', function(){
      if((that.AvoidLosersec && !that.AL_mainCircle && !that.AL_rangeCircle) || (that.AvoidLosersec && that.AL_rangeCircle && !that.AL_mainCircle))
      {
        return '0'
      }
      else{
        return '1'
      }
      
    })
    .attr("r", 0)
    .transition()
    .on("end", function () {
      repeat(); repeat1();
      that.createGradienArc(that.CurrSliderData.a,that.CurrSliderData.e);
    });

    function repeat() {
      obj.select(".ringAnim")
        .attr('r', (+sradius))
        .style('opacity', 1)
        .style('stroke-width', '5px')
        .transition()
        .attr('r', sradius * 1.3)
        .style('stroke-width', '1px')
        .style('opacity', 0)
        .on("end", repeat);
    };
    function repeat1() {
      obj.select(".preloding")
        .style('opacity', .5)
        .transition()
        .style('opacity', 1)
        .transition()
        .style('opacity', .5)
        .on("end", repeat1);
    }

    return grp1;
  }



  createGradienArc(sMin,sMax){
    let that = this;
    d3.select("#maincircle")
        .transition()
        .attr('r', that.radius + 4)
        .style('stroke-width', '0px')

        .on("end", function () {
          d3.select("#maincircle")
            .transition()
            .style('stroke-width', '0px');
        });
    d3.select("#gradArc").remove();
    var gArc = d3.select("#crlChart").append("g").attr("id", "gradArc");

    if((this.AvoidLosersec && !this.AL_rangeCircle && !this.AL_mainCircle)||(this.AvoidLosersec && this.AL_rangeCircle)){
      //mainCircle
      var arc = d3.arc()
      .innerRadius(this.radius - 25)
      .outerRadius(this.radius - 2);
    }else{
      //rangeCircle
      var arc = d3.arc()
      .innerRadius(this.radius - 18)
      .outerRadius(this.radius - 2);
    }

    

    var gC100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);

    var colors = [];
    var color1 = d3.scaleLinear() 
        .domain([0, 1, 2, 3, 4])
        .range([gC100(sMin),
        gC100(((sMax - sMin) * 25 / 100) + sMin),
        gC100(((sMax - sMin) * 50 / 100) + sMin),
        gC100(((sMax - sMin) * 75 / 100) + sMin),
        gC100(sMax)]);
    
    var linearGradient = gArc.append("defs");

    var linearG1 = linearGradient.append("linearGradient");

    var gCArcColor = d3.scaleLinear()
      .domain([0, 90, 91, 180, 181, 270, 271, 360])
      .range([0, 100, 0, 100, 0, 100, 0, 100])

      var MaxColor = "";
    var MaxScore = "";

      var Data1 = this.data.filter(x => x.cx >= -90 && x.cx <= 0);
      linearG1.attr("id", "linearColors0")
        .attr("x1", "0").attr("y1", "0").attr("x2", ".5").attr("y2", "1");
      if (this.data != null) {
        for (var i = 0; i < this.data.length; i++) {
          if (this.data[i].cx >= -90 && this.data[i].cx <= 0) {
            linearG1.append("stop").attr("offset", gCArcColor((this.data[i].cx) + 90) + "%").attr("stop-color", gC100(this.data[i].score));
          }
          if (this.data[i].cx > 0) {
            linearG1.append("stop").attr("offset", "100%").attr("stop-color", gC100(this.data[i].score));
            break;
          }
        }
        MaxColor = gC100(Data1[Data1.length - 1].score);
        MaxScore = Data1[Data1.length - 1].cx;
      }

      var Data2 = this.data.filter(x => x.cx >= 1 && x.cx <= 90);
    var linearG2 = linearGradient.append("linearGradient");
    linearG2.attr("id", "linearColors1")
      .attr("x1", "0.8").attr("y1", "0").attr("x2", "0.5").attr("y2", "0.5");
    if (this.data != null) {
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].cx >= 1 && this.data[i].cx <= 90) {
          linearG2.append("stop").attr("offset", gCArcColor((this.data[i].cx) + 90) + "%").attr("stop-color", gC100(this.data[i].score));
        }
        if (this.data[i].cx > 90) {
          break;
        }
      }
      if (Data2 == null || Data2.length == 0) {
        linearG2.append("stop").attr("offset", gCArcColor(MaxScore + 90) + "%").attr("stop-color", MaxColor);
      } else {
        MaxColor = gC100(Data2[Data2.length - 1].score);
        MaxScore = Data2[Data2.length - 1].cx;
      }
    }

    var Data3 = this.data.filter(x => x.cx >= 91 && x.cx <= 180);
    var linearG3 = linearGradient.append("linearGradient");
    linearG3.attr("id", "linearColors2")
      .attr("x1", "0.8").attr("y1", "0.8").attr("x2", "0").attr("y2", "0.3");
    if (this.data != null) {
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].cx >= 91 && this.data[i].cx <= 180) {
          linearG3.append("stop").attr("offset", gCArcColor((this.data[i].cx) + 90) + "%").attr("stop-color", gC100(this.data[i].score));
        }
        if (this.data[i].cx > 180) {
          break;
        }
      }
      if (Data3 == null || Data3.length == 0) {
        linearG3.append("stop").attr("offset", gCArcColor(MaxScore + 90) + "%").attr("stop-color", MaxColor);
      } else {
        MaxColor = gC100(Data3[Data3.length - 1].score);
        MaxScore = Data3[Data3.length - 1].cx;
      }
    }

    var Data4 = this.data.filter(x => x.cx >= 181 && x.cx <= 270);
    var linearG4 = linearGradient.append("linearGradient");
    linearG4.attr("id", "linearColors3")
      .attr("x1", "0").attr("y1", "1").attr("x2", "1").attr("y2", "0");

    if (this.data != null) {
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].cx >= 181 && this.data[i].cx <= 270) {
          linearG4.append("stop").attr("offset", gCArcColor((this.data[i].cx) + 90) + "%").attr("stop-color", gC100(this.data[i].score));
        }
        if (this.data[i].cx > 270) {
          break;
        }
      }
      if (Data4 == null || Data4.length == 0) {
        linearG4.append("stop").attr("offset", gCArcColor(MaxScore + 90) + "%").attr("stop-color", MaxColor);
      }
    }

    d3.range(4).forEach(function (d, i) {
      // convert to radians
      var start = (i * 89) * (Math.PI / 180),
        end = ((i * 89.9) + 90) * (Math.PI / 180);
      colors.push({
        startAngle: start,
        endAngle: end
      });
    });

    // add arcs
    gArc.selectAll('.arc')
      .data(colors)
      .enter()
      .append('path')
      .attr('class', 'arc')
      .attr('d', arc)
      .attr('stroke', 'none')
      .attr('fill', function (d, i) { return 'url(#linearColors' + i + ')'; });

      this.showLoader = false;

      if((this.AvoidLosersec && !this.AL_rangeCircle && !this.AL_mainCircle) || (this.AvoidLosersec && this.AL_rangeCircle && !this.AL_mainCircle)){
        that.circleRange({ "start": sMin, "end": sMax });
        var Fourline1 = gArc.append("line");
        Fourline1.attr("id", "lineT").attr("class", "lineMark")
        .attr("x1", "0").attr("y1", "0").attr("x2", "0").attr("y2", "22")
        .style('transform', 'translate(0px, -167px)')
        .style('stroke', '#fff')
        .style('stroke-width', '4px');
              
        if(this.AL_rangeCircle){
          var Fourline3 = gArc.append("line");
          Fourline3.attr("id", "lineB").attr("class", "lineMark")
          .attr("x1", "0").attr("y1", "0").attr("x2", "0").attr("y2", "22")
          .style('transform', 'translate(0px, 145px)')
          .style('stroke', '#fff')
          .style('stroke-width', '4px');
        }
      
      }else{
        if((this.AvoidLosersec && !this.AL_rangeCircle && !this.AL_mainCircle) || !this.AvoidLosersec)
        document.getElementById('Circleloader').style.display = "none"; 
        that.CreateComps().then(res => {
          that.createCompetitive(this.chartMain).then(res=>{
            that.fillCompetives().then(res=>{
              if(!this.AvoidLosersec){
                that.CreateCompCircle().then(res=>{
                  that.creatClockSlider().then(res =>{
                    that.setClock(this.selComp.isin, (this.selIndexData.indexOf(this.selComp) *360/this.selIndexData.length)-90, this.selComp.ticker);
                  });
                });
              }else if(that.AvoidLosersec && that.AL_mainCircle){
                that.createALinnerCircle().then(res => {
                  if(that.AL_FilteredList.filter(data => data.isin === this.selComp.isin).length != 0){
                      that.creatClockSlider().then(res =>{
                        that.setClock(this.selComp.isin, (this.AL_List.indexOf(this.selComp) *360/ this.AL_List.length) - 90, this.selComp.ticker);
                      });
                  }     
                });
              }
            });
          })
        });
        setTimeout(() => {
               
        }, 300);
      }
  }

  CreateComps(){
    return new Promise((resolve,reject)=>{   
    let that = this;
    var oSvg = this.chartMain;
    var compLst;
    var dta = this.selIndexData;

    var lvl = this.sectorOrder.filter(i=> i.name == this.selSec.secTitle)[0].order;
    oSvg.select('.compList').remove();
    compLst = oSvg.append("g").attr('class', 'compList compLst' + lvl).style("display", "block");0

    var compC = compLst.append("g").attr("class", 'compLstC' + lvl);
    var compg = compC.selectAll("g")
      .data(dta)
      .enter().append("g")
      .attr("class", "comp")
      .attr("transform", function (d, i) {
        return "rotate(" + ((i * 360 / dta.length) - 90) + ")";
      })
      .attr("name", function (d) { return d.isin + "_" + d.indexName.replace(/ /g, '_') })
      .style('opacity', function (d){
        if(that.AvoidLosersec){
          if(that.AL_FilteredList.filter(data => data.isin === d.isin).length != 0){
            return '1';
          }else{
            return '0';
          }
        }else{
          return '1';
        }
        
      });

    let SelRes = this.indexData;
    var dmin = d3.min(SelRes.map(x => x.marketCap));
    var dmax = d3.max(SelRes.map(x => x.marketCap));
    var dmean = d3.mean(SelRes.map(x => x.marketCap));
    var dsum = d3.sum(SelRes.map(x => x.marketCap));

    let ResMarketCap = SelRes.map(x => x.marketCap);
    let LimitedCap = ResMarketCap.filter(x => x < dmean && x != null);
    let dlimitedSum = d3.sum(LimitedCap);

    var rmax = (dmax - dmin) > 100 ? 100 : (dmax - dmin);
    rmax = rmax < 50 ? 50 : rmax;

    var h = d3.scaleLinear()
      .domain([dmin, dmax])
      .range([0, 50]);

      let LimitedMarketCap =

      compg.append("rect")
        .attr("height", "1px")
        .attr("class", "crect")
        .attr("x", that.radius + 3)
        .attr("width", 0)
        .transition()
        .duration(10)
        .attr("width", function (d) {
          if (d.indexName.indexOf("New Age Alpha") > -1 && that.selComp.indexName.indexOf("New Age Alpha") == -1) {
            return "0px";
          }
          else {
            let wtdwidth = 0;
            var wt = ((d.marketCap / dlimitedSum) * 10000);
            if (d.marketCap < dmean) {
              wtdwidth = wt;
            }
            else {
              wt = ((d.marketCap / dsum) * 10000);
              if (wt > 18) { wt = 18 + wt / 10; }
              wtdwidth = wt;
            }
            if (wtdwidth > 25) { wtdwidth = 25 + wtdwidth / 10; }
            if (wtdwidth > 40) { wtdwidth = 40; }
            return wtdwidth + 2;
          }
        });

        resolve();
      });
  }

  createCompetitive(grp1) {
    return new Promise((resolve,reject)=>{
      grp1.append("g").attr("id", "gCompetitive");
      resolve();
    });
  }

  creatClockSlider(){
    return new Promise((resolve,reject)=>{
    let that = this;
    var r = that.radius+4;
    that.createXrad = r;
    d3.select("#cSlider").remove();
    var g = d3.select("#crlChart").append("g")
      .attr("id", "cSlider")
      .attr('transform', 'rotate(' + (-90) + ')');

      var rect1 = g.append("rect")
      .attr("class", "sRect1")
      .attr("x", r)
      .attr("y", -.5)
      .attr("height", 3)
      .attr("width", 50)
      .attr("fill", "#00b9ff");

      var rect = g.append("rect")
      .attr("class", "sRect")
      .attr("rx", 20)
      .attr("ry", 20)
      .attr("x", + r + (25))
      .attr("height", "40px")
      .attr("width", "170px")
      .style("display", "none");

      var text = g.append("text")
      .attr("class", "sText")
      .attr("x", + r + (40))
      .attr("dy", 0)
      .style("alignment-baseline", "middle")
      .style("font-size", "18px")
      .style("font-family","Open Sans Bold")
      .style("display", "none")
      .text("0.00");
      resolve();
    });
  }

  fillCompetives(){
    return new Promise((resolve,reject)=>{

    let that = this;
    var dta = this.selIndexData;
    var lvl = 1;
    var gs = d3.select("#gCompetitive");
    gs.selectAll("g").remove();
    dta = dta.filter(t => t.isin != "");
    dta = dta.sort(function (x, y) {
      return d3.ascending(parseFloat(x.score), parseFloat(y.score));
    });

    var ggs = gs.selectAll("g")
      .data(dta)
      .enter().append("g")
      .attr("name", function (d) { return d.isin; })
      .attr("class", function (d) {
        return "Compet" + d.isin;
      })

      .attr("transform", function (d,i) {
        var cx  = ((i * 360 / dta.length) - 90);
        if (cx <= 90) {
          return "rotate(" + (cx + 1.0) + ")";
        } else {
          return "rotate(" + (cx - 1.0) + ")";
        }
      })

      .style("opacity", function (d) {

        let sMin = 0;
        let sMax = 100;
        let opa = 1;
        if(that.AvoidLosersec){
        if(that.AL_FilteredList.filter(data => data.isin === d.isin).length != 0){
          if(that.selComp.isin == d.isin){
            return '0';
          }else{
            if(that.AL_List.length > 150){
              return '0.07'
            }else{
              return '1';
            }
            
          }
        }else{
          return '1';          
        }}else if(that.selComp.isin != d.isin){
          if (dta.length > 150) {
            opa = 1 - (((sMax - sMin) / 100) - (.1));
          }
  
          if (lvl == 4) {
            return opa;
          }
          else {
            // return (distinctISIN.includes(d.isin) ? "1" : opa);
          }
          return opa;
        }else{
          return 0;
        }
        
      });

      ggs.append("text")
      .attr("x", function (d,i) {
        var cx  = ((i * 360 / dta.length) - 90);
        return cx > 90 ? "-215" : "215";
      })

      .attr("transform", function (d,i) {
        return ((i * 360 / dta.length) - 90) > 90 ? "rotate(180)" : null;

      })
      .style("text-anchor", function (d,i) {
        var cx  = ((i * 360 / dta.length) - 90);
        return cx > 90 ? "end" : null;
      })

      .attr("class", function (d) {
        return "";
      })

      .style('fill',function(d){
        if(that.AvoidLosersec){
          if(that.AL_FilteredList.filter(data => data.isin === d.isin).length != 0){
            return '#fff';
          }else{
            return 'rgb(29 57 123)';
          }
        }
      })
      .text(function (d,i) {
        var cx  = ((i * 360 / dta.length) - 90);
        if (cx > 90) {
          let txt = " (" + d.ticker + ") " + d.company.trim() + "...";
          let resvtxt = " (" + d.ticker + ") ...";
          var cnt = txt.length;
          var rsvcnt = resvtxt.length;
          return " (" + d.ticker + ") " + d.company.slice(0, (17 - rsvcnt)).trim() + "...";
        }
        else {
          let txt = d.company.trim() + "... (" + d.ticker + ")";
          let resvtxt1 = "... (" + d.ticker + ")";
          var cnt = txt.length;
          var rsvcnt1 = resvtxt1.length;
          return d.company.slice(0, (17 - rsvcnt1)).trim() + "... (" + d.ticker + ")";
        }
      });
      resolve();
    });
  }

  createALinnerCircle(){
    return new Promise((resolve,reject)=>{

    let that = this;
    var cradius = 150;
    var oSvg = that.chartMain;
    d3.select('#innerCircleGrp').remove();
    var innerCirclegrp = oSvg.append("g").attr('id',"innerCirclegrp");
    var TI_Grp = innerCirclegrp.append("g").attr('id','TIGrp')
      .attr('transform','translate(-50,-110)');

    TI_Grp.append('circle')
      .attr('id','CT_mCircle')
      .attr('r','25')
      .style('stroke','#e5e5e5')
      .style('fill','none');
    
      TI_Grp.append('text')
      .style('fill',function(){
        return that.getColor(that.roundMed(that.selComp.scores*100));
      })
      .style('font-size','16')
      .style('font-family','Open Sans ExtraBold')
      .attr('dx',function(){
        if( Number(that.roundMed(that.selComp.scores*100)) < 10)
        return '-12';
        else
        return '-18';
      })
      .attr('dy','5')
      .text(function(){
        return that.roundMed(that.selComp.scores*100);
      });

      TI_Grp.append('text')
      .style('font-size','18')
      .style('font-family','Open Sans ExtraBold')
      .style('fill','#224b9e')
      .attr('dx','35')
      .attr('dy','5')
      .text(function(){
        return "("+that.selComp.ticker+")";
      });

    var Sec_Top = innerCirclegrp.append('g')
      .attr('id','Sec_Top')
      .attr('transform','translate(-100,-55)');

    Sec_Top.append('circle')
    .attr('id','ST_mCircle')
    .attr('r','32')
    .style('stroke','#e5e5e5')
    .style('fill','none');

    Sec_Top.append('text')
      .style('fill',function(){
        return that.getColor(that.selSec.secMed);
      })
      .style('font-size','16')
      .style('font-family','Open Sans ExtraBold')
      .attr('dx','-18')
      .attr('dy','5')
      .text(function(){
        return that.selSec.secMed;
      });

      Sec_Top.append('text')
      .style('font-size','16')
      .style('font-family','Open Sans SemiBold')
      .style('fill','#224b9e')
      .attr('dx','40')
      .attr('dy','-12')
      .text(function(){
        return that.selSec.secTitle;
      });

      var FO_Sec_Top = Sec_Top.append('foreignObject')
        .attr('x','40')
        .attr('y','-8')
        .attr('width','200')
        .attr('height','40');
      
      FO_Sec_Top.append('xhtml:p')
        .attr('xmlns','http://www.w3.org/1999/xhtml')
        .style('margin','0')
        .style('text-align','start')
        .style('font-size','16px')
        .style('font-family','Open Sans Bold')
        .style('color','#224b9e')
        .style('line-height','1.4')
        .style('-webkit-line-clamp','1')
        .style('-webkit-box-orient','vertical')
        .style('display','-webkit-box')
        .style('overflow','hidden')
        .text(that.selSec.secName);

      if(that.AL_List.length - that.AL_FilteredList.length > 0)
      {
        FO_Sec_Top.append('xhtml:p')
        .attr('xmlns','http://www.w3.org/1999/xhtml')
        .style('margin','0')
        .style('text-align','start')
        .style('font-size','16px')
        .style('font-family','Open Sans Bold')
        .style('color','#224b9e')
        .style('line-height','1.4')
        .text(function(){
          return that.AL_List.length - that.AL_FilteredList.length+' Losers'
        });
      }

      var ChartGrp = innerCirclegrp.append('g')
      .attr('id','ChartGrp')
      .attr('transform','translate(-190,35)');

      var FO_Chart = ChartGrp.append('foreignObject')
        .attr('x','40')
        .attr('y','-48')
        .attr('id','FO_Chart')
        .attr('width','300')
        .attr('height','150');

      FO_Chart.append('xhtml:p')
      .attr('xmlns','http://www.w3.org/1999/xhtml')
      .attr('id','ALC_text')
      .style('margin','0')
      .style('color','#224b9e')
      .style('font-size','14px')
      .style('font-family','Open Sans Regular')
      .style('line-height','1.2')
      .text(function(){
        return 'Click to expand Performance'
      })

      var chartDiv = FO_Chart.append('xhtml:div')
      .attr('xmlns','http://www.w3.org/1999/xhtml')
      .attr('id','ALC_container')
      .style('width','100%')
      .style('display','flex')
      .style('justify-content','center');

      var innerchartDiv = chartDiv.append('xhtml:div')
      .attr('xmlns','http://www.w3.org/1999/xhtml')
      .style('width','70%')
      .style('border','1px solid #ddd')
      .style('border-radius','5px')
      .style('padding','4px');  

      var chart = innerchartDiv.append('xhtml:span')
      .attr('xmlns','http://www.w3.org/1999/xhtml')
      .attr('id','lineChart')
      .style('height','65px')
      .style('width','100%')
      .style('display','block')
      .style('overflow','hidden')
      .on('click',function(){
        that.onChartClick();
      })

      that.highChartLine(chart).then( res =>{
          setTimeout(() => {
            if(that.CurrSliderData.e != 0){
        var addInfoDiv = FO_Chart.append('xhtml:p')
      .attr('xmlns','http://www.w3.org/1999/xhtml')
      .text('Additional Return')
      .style('font-size','14px')
      .style('font-family','Open Sans Regular')
      .style('color','#224b9e')
      .style('line-height','1.4')
      .style('margin','0');

      var infodiv = FO_Chart.append('xhtml:div')
      .attr('xmlns','http://www.w3.org/1999/xhtml')
      .style('width','100%')
      .style('display','flex')
      .style('justify-content','center');

      var infoSpan = infodiv.append('xhtml:span')
      .attr('xmlns','http://www.w3.org/1999/xhtml')
      .attr('id','AL_AI_Span')
      .style('width','65%')
      .style('display','flex')
      .style('flex-direction','row')
      .style('padding','0px 5px')
      .style('justify-content','space-between');

      infoSpan.append('xhtml:p')
      .attr('xmlns','http://www.w3.org/1999/xhtml')
      .text(function(){
        return '(C) '+that.cumReturn;
      })
      .style('font-size','14px')
      .style('font-family','Open Sans Bold')
      .style('color','#224b9e')
      .style('line-height','1.4')
      .style('margin','0');
      
      infoSpan.append('xhtml:p')
      .attr('xmlns','http://www.w3.org/1999/xhtml')
      .text(function(){
        return '(A) '+that.annReturn;
      })
      .style('font-size','14px')
      .style('font-family','Open Sans Bold')
      .style('color','#224b9e')
      .style('line-height','1.4')
      .style('margin','0');
    }
    }, 500);
    });
      resolve();
    })
  }

  

  async highChartLine(chart){
    return new Promise((resolve,reject)=>{

    var that = this;
    if(this.selComp != ""){
      let indexValue = [];
      let date = [];
      var Ctype = 'MC';
      var GICSId = 0;
      var range = '';
      var selSecLvl = this.sectorOrder.filter(i=> i.name == this.selSec.secTitle)[0].order;
      if(selSecLvl == 1){
        GICSId = 0;
      }else{
        GICSId = that.selComp.industry.slice(0,2*(selSecLvl-1));
      }
      range = 'top'+Math.round(this.CurrSliderData.e);

      this.dataHandler.getIndexPreRuns(this.IndexId,GICSId,Ctype,range).subscribe((res:any[]) =>{
        if(res.length != 0){
          that.chartData = true;
        if(that.smChart != null){
          that.smChart.destroy();
          that.smChart = null;
        }

        let ReturnVal: any = [];
        let ReturnVal1: any = [];

        let indexValue1 = [];

        for (let i = 0; i <= (res.length - 1); ++i) {
          indexValue1.push(res[i]['top100']);
          date.push(res[i]['date']);
        }

        var d = new Date(date[date.length - 1]);

        var formatdate = that.formatedates(d.getMonth() + 1) + '/' + that.formatedates(d.getDate()) + '/' + d.getFullYear();

        var since = new Date(date[0]);
        // var sinceIncep = that.formatedates(since.getMonth() + 1) + '/' + that.formatedates(since.getDate()) + '/' + since.getFullYear();

        var series = [];
        series.push({
          name: "All  (" + formatdate + ' : ' + indexValue1[indexValue1.length - 1].toFixed(2) + ")",
          marker: {
            symbol: ''
          },
          dataLabels: {
            style: {
              fontSize: 8 + 'px',
            }
          },
          color: '#9b9b9b',
          data: indexValue1,
          lineWidth: 0.9
        });

        ReturnVal = that.calcCumAndAnnReturns(indexValue1, date);

        if (0 < that.CurrSliderData.e && 100 > that.CurrSliderData.e) {
          for (let i = 0; i <= (res.length - 1); ++i) {
            indexValue.push(res[i]["range"]);
            date.push(res[i]['date']);
          }

          var d = new Date(date[date.length - 1]);

          var formatdate1 = that.formatedates(d.getMonth() + 1) + '/' + that.formatedates(d.getDate()) + '/' + d.getFullYear();

          series.push({
            name: "Top " + that.CurrSliderData.e + "% (" + formatdate1 + ' : ' + indexValue[indexValue.length - 1].toFixed(2) + ")",
            marker: {
              symbol: ''
            },
            dataLabels: {
              style: {
                fontSize: 8 + 'px',
              }
            },
            data: indexValue,
            color: '#00b9ff',
            lineWidth: 0.9
          });

          ReturnVal1 = that.calcCumAndAnnReturns(indexValue, date);
          if((ReturnVal1[0] - ReturnVal[0]) > 0){
            that.cumReturn = '+'+(ReturnVal1[0] - ReturnVal[0]).toFixed(2)+'%';
          }else{
            that.cumReturn = (ReturnVal1[0] - ReturnVal[0]).toFixed(2)+'%';
          }
          if((ReturnVal1[1] - ReturnVal[1]) > 0){
            that.annReturn = '+'+(ReturnVal1[1] - ReturnVal[1]).toFixed(2)+'%';
          }else{
            that.annReturn = (ReturnVal1[1] - ReturnVal[1]).toFixed(2)+'%';
          }
          
        }else{
          that.cumReturn = '0.00%';
          this.annReturn = '0.00%';
        }

        that.smChart = HighCharts.chart({
          chart:{
            renderTo: 'lineChart',
            type: 'spline',
            style: {
              fontFamily: 'Open Sans SemiBold'
            },
            margin: 0,
          },
          exporting: {
            url: 'https://export.highcharts.com/',
            enabled: true,
            buttons: {
              contextButton: {
                menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG'],
              },
            },
          },
          credits: {
            enabled: false
          },
          legend: {
            enabled: false,
            itemStyle: {
              fontSize: '9px'
            },
            layout: 'vertical',
            backgroundColor: '#FFFFFF',
            align: 'left',
            verticalAlign: 'top',
            floating: true,
            x: 20,
            y: -15

          },
          title: {
            text: ''
          },
          subtitle: {
            text: ''
          },
          xAxis: {
            tickLength: 0,
            lineColor: 'transparent',
            type: 'datetime',
            categories: date,
            tickColor: '#f1f1f1',
            tickWidth: 1,
            labels: {
              enabled: false,
              rotation: 310,

              formatter: function () {
                let d = new Date(this.value);
                var currentMonth: any = (d.getMonth() + 1);
                if (currentMonth < 10) { currentMonth = '0' + currentMonth; }
                return (d.getFullYear().toString());
              },

              style: {
                color: '#333',
                fontSize: '9px',
              }

            }
          },
          yAxis: {
            maxPadding: 0.2,
            gridLineColor: 'transparent',
            title: {
              text: ''
            },
            labels: {
              enabled: false,
              style: {
                color: '#333',
                fontSize: '9px'
              }
            }
          },
          tooltip: {
            enabled: false,
            xDateFormat: '%Y-%m-%d',
            valueDecimals: 2,
            shared: true,
            dateTimeLabelFormats: {
              millisecond: "%A, %b %e"
            },
            formatter: function () {
              var d = new Date(this.x);
              function formater(value) { if (value < 10) { return '0' + value; } else { return value; } }
              var formatdate = formater(d.getMonth() + 1) + '/' + formater(d.getDate()) + '/' + d.getFullYear();
              if (this.points.length > 1) { return "<div style='font-size:7pt'>" + formatdate + "<br><b>All : </b> <span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + "</span><br><b>" + that.CurrSliderData.e + " : </b><span style='font-size: 8pt'>" + this.points[1].y.toFixed(2) + ' </span></div>'; }
              else if (this.points[0].color == "#00b9ff") { return "<div style='font-size:7pt'>" + formatdate + "<br><b>" + that.CurrSliderData.e + " : </b><span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + '</span></div>'; }
              else { return "<div style='font-size:7pt'>" + formatdate + "<br><b>All : </b><span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + '</span></div>'; }
            }
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 0.1,
                lineColor: '#666666',
                lineWidth: 0.1
              }
            }
          },
          series: series,
            lang: {
              noData: "No Data",
            },
            noData: {
              style: {
                fontWeight: 'bold',
                fontSize: '7px',
                color: '#303030'
              }
            }
        });
      }else{
        that.chartData = false;
        d3.select('#ALC_container').style('margin-top','20px')
        d3.select('#ALC_text').style('display','none');
        chart.on('click',null);

        chart.style('display','flex')
        .style('justify-content','center')
        .style('align-items','center')
        .style('font-size','18px')
        .style('font-family','Open Sans SemiBold')
        .style('color','#999')
        .text('No Data');
      }
      resolve();
      });
    }
  });
  }

  async onChartClick(){
    var selSecLvl = this.sectorOrder.filter(i=> i.name == this.selSec.secTitle)[0].order
    const modal = await this.modalCtrl.create({
      component: LineChartComponent,
      cssClass: 'AL_LChart',
      componentProps:{
        'currentData': this.CurrSliderData,
        'indexId': this.IndexId,
        'selSecLvl': selSecLvl,
        'selComp': this.selComp
      }
    });

    modal.onDidDismiss().then( d=>{
      this.OnAL_listChange(this.CurrSliderData);
      this.loadData();
    })

    return await modal.present();
  }

  calcCumAndAnnReturns(indexValue, date) {
    let that = this;
    var newd = (indexValue[indexValue.length - 1] / 1000) - 1;
    let cumReturn = "0.0%";
    let annReturn = "0.0%";
    var startDate = new Date(date[0]);
    var endDate = new Date(date[date.length - 1]);
    const oneDay = 24 * 60 * 60 * 1000;
    var Difference_In_Time = endDate.getTime() - startDate.getTime();
    // To calculate the no. of days between two dates 
    var diffDays = Difference_In_Time / (1000 * 3600 * 24);

    var years = diffDays / 365;

    cumReturn = (newd * 100).toFixed(2);

    var MathVal = 1 + newd;

    annReturn = ((Math.pow(MathVal, (1 / years)) - 1) * 100).toFixed(2);
    return [cumReturn, annReturn];
  }
  formatedates(value: any) {
    if (value < 10) { return '0' + value; } else { return value; }
  }

  CreateCompCircle(){

    return new Promise((resolve,reject)=>{
    
    let that = this;
    var oSvg = that.chartMain;
    var txt = that.selComp.companyName + " (" + that.selComp.ticker + ")";

    var med = that.roundMed(that.selComp.scores * 100);

      d3.select('#Fo_innerCircle').remove();
      var Fo_innerCircle = oSvg.append('foreignObject')
        .attr('x','-140')
        .attr('y','-60')
        .attr('id','Fo_innerCircle')
        .attr('width','280')
        .attr('height','150');

          Fo_innerCircle.append('xhtml:p')
          .attr('xmlns','http://www.w3.org/1999/xhtml')
          .attr('class', 'innerComp')
          .text(txt);

          Fo_innerCircle.append('xhtml:p')
          .attr('xmlns','http://www.w3.org/1999/xhtml')
          .attr('class', 'innerCompMed')
          .style('color',that.getColor(med))
          .text(med);
          
    resolve();
  })
  }

  compwrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.1, // ems
          y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }

  wrap(text, width, align = null) {
    let that = this;
    text.each(function (d) {

      var text = d3.select(this),
        words = text.text().replace("-", "- ").split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = text.style("font-size").replace("px", ""), // ems
        y = text.attr("y"),
        dy = 0,
        tspan = text.text(null).append("tspan").attr("dx", 5).attr("dy", 5),
        textalign = (text.style("text-anchor") == "end") ? false : true;
        
      tspan.attr("class", "txt");
      var i = 0;
      while (word = words.pop()) {
        lineNumber = lineNumber + 1;
        
        line.push(word);
        tspan.text(line.join(" "));
        
        if (tspan.node().getComputedTextLength() > ((width * lineHeight) / 10)) {
          if (i == 0) { tspan.attr("dy", 0); }
          i++;
          
          line.pop();
          tspan.text(line.join(" "));
          line = [word];

          if (textalign) {
            tspan = text.append("tspan").attr("dy", (+lineHeight + 3) + "px").attr("dx", -(tspan.node().getComputedTextLength())).text(word);
          } else {
            tspan = text.append("tspan").attr("dy", lineHeight + "px").text(word);
          }
          tspan.attr("class", "txt");
        }
        if (i > 0 && !textalign) {
          tspan.attr("dx", -(tspan.node().getComputedTextLength()));
        }
      }
      if (tspan.text().indexOf("[") > -1) {

        var txt = tspan.text();
        var txt1 = txt.substring(txt.indexOf("[") + 1, txt.indexOf("]"))
        var txt2 = txt.substring(txt.indexOf("["), txt.indexOf("]") + 1)
        txt2 = txt.replace(txt2, "");
        if (txt2 != "") {
          tspan.text(txt2);
          text.append("tspan")
            .text(txt1)
            .attr("class", "score")
        }
        else {
          tspan.text(txt1)
            .attr("class", "score");
        }
      }
    });
  }

  setClock(isin, val, txt) {
    return new Promise((resolve,reject)=>{
    
    let that = this;
    if (txt != null) {
        d3.select("#cSlider").style("display", "none");

      var r = d3.select("#maincircle").attr("r");
      let gC360 = d3.scaleLinear()
        .domain([0, 90, 180, 270, 360])
        .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);

      var comp = d3.select('.Compet'+isin).style('display',"none");
        d3.select("#cSlider")
          .attr('transform', function(d){
            var i = that.selIndexData.indexOf(that.selComp);
            var len = that.selIndexData.length;
            return "rotate(" + ((i * 360 / len) - 90) + ")";
          })
          .attr('name', isin);

      d3.select("#cSlider").select(".sText")
      .attr('text-anchor',"middle")
      .attr('y',function(){
        return val >= 90 ? 0 : 5;
      })
        .attr("x", function () {
          var rtemp = 199+70;
          var txtmid = txt.length/2;
          var pos = rtemp-txtmid;
          return val >= 90 ? -(pos-15) : pos;
        })
        .attr("transform", function () {
          return val >= 90 ? "rotate(180)" : null;
        })
        .style("text-anchor", function () {
          return val >= 90 ? "end" : null;
        })

        .style("display", function () { return txt == null ? "none" : "block"; })
        .attr("fill", function () {
          return gC360(val);
        })
        .text(txt).call(that.wrap, 100);
      d3.select("#cSlider").style("display", "block");
      var bbox = d3.select("#cSlider").select(".sText").node().getBBox();
      var bboxH = +bbox.height + 20; bboxH = bboxH > 40 ? bboxH : 40;

      d3.select("#cSlider").select(".sRect")
        .attr("fill", "#fff")
        .attr("stroke", "#00b5fa")
        .attr("stroke-width", "3px")
        .style("display", function () { return txt == null ? "none" : "block"; })
        .attr("height", 50)
        .attr("width", 140)
        .attr("y", -(bboxH / 2));
      var calW = parseInt(that.createXrad + bbox.width);

      d3.select("#cSlider").select(".sTextReverse")
        .attr("fill", "#fff")
        .style("display", function () { return txt == null ? "none" : "block"; })
        .attr("x", function () {
          if (bboxH == 40) {
            return -(bboxH + 0);
          }
          else if (bboxH < 50) {
            return -(bboxH - 3);
          }
          else if (bboxH > 50) {
            return -(bboxH - 15);
          }
        })
        .attr("y", -(calW + 17));

      d3.select(".comp[name='" + isin + "_" + that.selComp.indexName.replace(/ /g, '_') + "']").raise();
      d3.select(".comp[name='" + isin + "_" + that.selComp.indexName.replace(/ /g, '_') + "']").select("rect").classed("recton", true)

      this.fillCompetives();

      }
        d3.select("#chartGroup").selectAll("rect").classed("highlt", "false");
      d3.select("#cSlider").raise();
        d3.select("#cSlider").style("display", "block");

        that.IndexId = 0;
        if (that.selComp.indexName == "S&P 500") {
          that.IndexId = 28;
        }
        if (that.selComp.indexName == "S&P 600") {
          that.IndexId = 27;
        }
        if (that.selComp.indexName == "S&P 400") {
          that.IndexId = 121;
        }
        if (that.selComp.indexName == "S&P United Kingdom BMI Index") {
          that.IndexId = 56;
        }
        if (that.selComp.indexName == "S&P Japan BMI Index") {
          that.IndexId = 57;
        }
        if (that.selComp.indexName == "S&P Europe Ex-UK BMI Index") {
          that.IndexId = 58;
        }
        if (that.selComp.indexName == "S&P USA Ex S&P 1500") {
          that.IndexId = 122;
        }
        if (that.selComp.indexName == "S&P Canada BMI Index") {
          that.IndexId = 126;
        }
        if (that.selComp.indexName == "S&P Australia BMI Index") {
          that.IndexId = 125;
        }
        if (that.selComp.indexName == "S&P South Africa BMI Index") {
          that.IndexId = 127;
        }
        if (that.selComp.indexName == "S&P South Korea BMI Index") {
          that.IndexId = 128;
        }
        resolve();
      });
  }


  circleRange(values) {
  var that = this;
  d3.select("#slider").remove();
  var slider = d3.select("#crlChart").append("g").attr("id", "slider")
    .attr("transform", "translate(-175,-175)");
  var width = 350;
  var height = 350;
  var margin = { top: 15, left: 15, bottom: 15, right: 15 };
  var offset = 0;
  var indicatorWidth = 15;
  var accentColor = 'transparent';  // '#00b9ff';
  var handleRadius = 10;
  var handleStrokeWidth = 7;
  var handleStrokeColor = "#fff";
  var handleIconColor = "#333333";
  var rangeTotal = 101;
  var tickColor1 = "#999";
  var radius = (Math.min(width, height) - margin.top - margin.bottom) / 2;
  var outerRadius = (radius + 1) + indicatorWidth / 2;
  var innerRadius = outerRadius - indicatorWidth;
  var dragLiveData: any;
  var ringbgrd, holder, indicatorArc, handles, dragBehavior;
  var a, e, startAngle, endAngle;
  var sliderDragRange = 5;
  var Intdata = values;
  var sliderInitValue: any = 100;
  var sliderEndValue: any = +values.start;
  var tmpVal = sliderEndValue;
  var firstRangeLoad = true;
  var helper = {
    settings: {},
    graphdata: [],
    "calculateDuration": function (startAngle, endAngle) {
      var duration: any; var angleToSegments = d3.scaleLinear().range([sliderInitValue, sliderEndValue]).domain([0, 360]);
      duration = angleToSegments(endAngle) - angleToSegments(startAngle);
      if (duration < sliderInitValue) duration = rangeTotal + duration;
      return duration * 5;
    },
    "createInfoObject": function (data) {
      var angleToSegments = d3.scaleLinear().range([sliderInitValue, sliderEndValue]).domain([0, 360]); var angleToFiveMinuteScale = d3.scaleLinear().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
      var startAngle, endAngle, startTimeInfo, endTimeInfo, duration;
      startTimeInfo = angleToSegments(data.aAngle) * 5;
      endTimeInfo = angleToSegments(data.eAngle) * 5;
      duration = this.calculateDuration(data.aAngle, data.eAngle);
      return { start: startTimeInfo, end: endTimeInfo, duration: duration };
    },
    "calculateInitialData": function (initialData) {
      var value = 0, angle = 0;
      var angleTO = d3.scaleLinear().range([0, 360]).domain([sliderInitValue, sliderEndValue]); 
      var segmentsToAngle = d3.scaleLinear().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
      angle = segmentsToAngle(initialData.start);
      value = angleTO.invert(angle);
      this.graphdata.push({ value: value, label: 'a', angle: angle });
      angle = segmentsToAngle(initialData.end);
      value = angleTO.invert(angle);
      this.graphdata.push({ value: value, label: 'e', angle: angle });
    },
    "calculateUpdateHandleData": function (values) {
      this.graphdata = [];
      var value = 0, angle = 0; var angleTo = d3.scaleLinear().range([0, 360]).domain([sliderInitValue, sliderEndValue]); var segmentsToAngle = d3.scaleLinear().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
      angle = segmentsToAngle(values.start);
      value = angleTo.invert(angle);
      this.graphdata.push({ value: value, label: 'a', angle: angle });
      angle = segmentsToAngle(values.end);
      value = angleTo.invert(angle);
      this.graphdata.push({ value: value, label: 'e', angle: angle });
    },
    "getValueOfDataSet": function (label) {
      var value = 0;
      this.graphdata.forEach(function (el, i) {
        if (el.label == label) value = el.value;
      });
      return value;
    },
    "getAngleOfDataSet": function (label) {
      var angle = 0;
      this.graphdata.forEach(function (el, i) {
        if (el.label == label) angle = el.angle;
      });

      return angle;
    },
    "getData": function () {
      return this.graphdata;
    }
  }
  
  
  var slider = d3.select("#slider").attr('height', height).attr('width', width);
  var angularScale = d3.scaleLinear().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
  var angularvalue = d3.scaleLinear().range([sliderInitValue, sliderEndValue]).domain([0, 360]);
  var tickdata = function (d) {
    var pec1 = ((sliderEndValue - sliderInitValue) / 100);
    return d3.range(sliderInitValue, sliderEndValue + pec1).map(function (v, i) {
      var segmentsToAngle = d3.scaleLinear().range([0, 360]).domain([sliderInitValue, sliderEndValue]);
      if ((sliderEndValue - sliderInitValue) <= 1) {
        return { angle: segmentsToAngle(v), label: v % 10 ? null : v.toFixed(2) };
      }
      else if ((sliderEndValue - sliderInitValue) < 20) {
        return { angle: segmentsToAngle(v), label: v % 10 ? null : v.toFixed(1) };
      }
      else {
        return { angle: segmentsToAngle(v), label: v % 10 ? null : v.toFixed(0) };
      }
    });
  }

  function writeTimeInfo(sliderObject) {
    
    if((that.AvoidLosersec && !that.AL_mainCircle && !that.AL_rangeCircle) || (that.AvoidLosersec && that.AL_rangeCircle )) {
      that.CurrSliderData = sliderObject;
    }
    if(that.AvoidLosersec && that.AL_rangeCircle && !that.AL_mainCircle)
      {
         SetInfo(that.CurrSliderData);          
      }
    
    if(that.avoidSlides && !firstRangeLoad){
      setTimeout(() => {
        that.slides = document.getElementById('AL_Slider');
      that.slides.slideTo(1);
      }, 1000);
    }else{
      firstRangeLoad = false;
    }
    
     helper.calculateUpdateHandleData({ "start": sliderObject.a, "end": sliderObject.e });
  }
  var tau = 2 * Math.PI;

  var svg = d3.select("#slider").append('g').attr('id', 'holder').attr('transform', 'translate(' + (((width + offset) - width) / 2 + margin.top) + ',' + (((height + offset) - height) / 2 + margin.left) + ')');
  holder = svg.append('g').attr('id', 'arcindicator').attr("class", "sliderDisp").style("display", "none");
  helper.calculateInitialData(Intdata);
  a = helper.getValueOfDataSet("a");
  e = helper.getValueOfDataSet("e");
  startAngle = helper.getAngleOfDataSet("a");
  endAngle = helper.getAngleOfDataSet("e");
  writeTimeInfo({ a: a, e: e, aAngle: startAngle, eAngle: endAngle });
  var arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(function (d) { return startAngle * (Math.PI / 180); })
    .endAngle(function (d) { return endAngle * (Math.PI / 180); })
  var tempVal;
  indicatorArc = holder.append("g").attr("class", "arcindicator")
    .attr("transform", "translate(" + ((width / 2) - margin.top) + "," + ((height / 2) - margin.bottom) + ")")
    .append("path").attr("fill", function (d, i) { return accentColor; }).attr("d", arc)

  handles = svg.append('g').attr('id', 'handles')
    .attr('transform', 'translate(' + radius + ',' + (radius) + ')').attr("class", "sliderDisp").style("display", "block");
  dragBehavior = d3.drag().subject(function (d) { return d; }).on("drag", function (d, i) {
    var coordinaters = d3.mouse(svg.node());
    var x = coordinaters[0] - radius;
    var y = coordinaters[1] - radius;
    var nA = (Math.atan2(y, x) * 180 / Math.PI) + 90;
    if (nA < 0) { nA = 360 + nA; }
    var newvalue = angularScale.invert(nA);
    if (d.value > 5 || newvalue > 5) {
      dragmoveHandles(d, i); }
  })
    .on("end", function () {
      checkHandlesPosition(this);
      d3.select(this).classed('active', false);
      d3.select("#crlChart").select('.sliderToolTip').remove();
    });
  drawHandles();
  d3.selectAll("#handles .handlercontainer").attr("class", function (d, i) { return "handlercontainer a" + (i + 1); });
  if (endAngle === 360) {
    d3.select('#handles').select('.a2').attr('transform', 'rotate(' + (endAngle - 1.8) + ') translate(0,' + (radius-3) * -1 + ')');
  }
  if ($('#handles .handle').length === 2) {
    d3.select('#handles').select('.handle').remove();
  }

  if (values.end != 100 && values.end != 0) {
    d3.select('#handles').select('.a2').attr('transform', 'rotate(' + (helper.graphdata[1].angle) + ') translate(0,' + (radius) * -1 + ')');
  }

  function drawHandles() {
    var handlerContainer = handles.selectAll('.handlercontainer').data(helper.getData());
    var circles = handlerContainer.enter()
      .append('g')
      .attr('class', 'handlercontainer')
      .attr('transform', function (d) {
        return 'rotate(' + angularScale(d.value) + ') translate(0,' + (radius-3) * -1 + ')';
      })
      .call(dragBehavior);

    circles.append('circle')
      .attr('r', handleRadius)
      .attr('class', 'handle')
      .style('stroke', handleStrokeColor)
      .style('stroke-width', handleStrokeWidth)
      .attr('cursor', 'pointer')
      .style('fill', "#00b9ff")
      .style('stroke-opacity', 1)
      .attr('id', function (d) { return d.label; })
    circles.append("text")
      .attr("text-anchor", "middle")
      .attr('dominant-baseline', 'central')
      .attr('font-family', 'FontAwesome')
      .attr('font-size', '10px')
      .attr('cursor', 'pointer')
      .attr('fill', "#fff");
  }
  function drawTickers() {
    var checkPoi = (sliderEndValue - sliderInitValue) <= 20 ? 1 : 0;
    var roTicker = d3.select("#slider").select("#holder").select("#ticks");
    roTicker.select(".tick0").select("text").attr("transform", function (d) { return checkPoi == 1 ? "rotate(90)translate(0,8)" : "rotate(90)translate(0,8)" }).style("font-family", "Open Sans Semibold").style("fill", tickColor1).style("font-size", checkPoi == 1 ? "7px" : "8px");
    roTicker.select(".tick0").select("line").attr("x2", "-10");
    roTicker.select(".tick25").select("text").attr('x', -10);
    roTicker.select(".tick75").select("text").attr("transform", function (d) { return checkPoi == 1 ? "rotate(180)translate(30,0)" : "rotate(180)translate(18,0)" }).style("font-family", "Open Sans Semibold").style("fill", tickColor1);
    var lastticks: string = '.tick' + sliderEndValue;
    roTicker.select(lastticks).select("text").attr("transform", function (d) { return checkPoi == 1 ? "rotate(90)translate(-8,8)" : "rotate(90)translate(-8,8)" }).style("font-family", "Open Sans Semibold").style("fill", tickColor1).style("font-size", checkPoi == 1 ? "7px" : "8px");
    roTicker.select(".tick0").select("line").attr("x2", "-10");
    roTicker.select(".tick50").select("text").style("font-family", "Open Sans Semibold").style("fill", tickColor1);
  }
  function dragmoveHandles(d, i) {
    var coordinates = d3.mouse(svg.node());
    var x = coordinates[0] - radius;
    var y = coordinates[1] - radius;
    var newAngle = (Math.atan2(y, x) * 180 / Math.PI) + 90;
    if (newAngle < 0) { newAngle = 360 + newAngle; }
    newAngle = newAngle - ((newAngle * sliderEndValue) % 125) / rangeTotal;
    d.value = angularScale.invert(newAngle);
    if (d.value > 96) {
      d.value = 0;
      d.angle = angularvalue.invert(d.value);
      updateHandles(d);
    } else {
      var dvalue = ((d.value / sliderDragRange) - ((d.value / sliderDragRange) % 1)) * sliderDragRange;
      d.value = dvalue;
      d.angle = angularvalue.invert(dvalue);
      updateHandles(d);
    }
  }
  function updateArc(value, label, angle) {
    var handlerContainer = d3.selectAll('#handles .handlercontainer'); //select all handles
    var startValue = 0;
    var endValue = 0;
    handlerContainer.each(function (d, i) {
      if (d.label == "a") { startValue = d.angle; }
      if (d.label == "e") { endValue = d.angle; }
    });
    arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(function (d) { return startValue * (Math.PI / 180); })
      .endAngle(function (d) { return endValue * (Math.PI / 180); });
    indicatorArc.attr("d", arc);
    var allHandles = handles.selectAll('.handlercontainer');
    var currentData = { "a": 0, "aAngle": 0, "e": 0, "eAngle": 0 };
    allHandles.each(function (d, i) {
      currentData[d.label] = d.value;
      currentData[d.label + "Angle"] = d.angle;
    });
    dragLiveData = currentData;
  }
  function updateHandles(dd) {
    if (dd.label === 'a') {
      d3.select('#handles').select('.a1').attr('transform', 'rotate(' + dd.angle + ') translate(0,' + (radius) * -1 + ')');
    } else {
      d3.select('#handles').select('.a2').attr('transform', 'rotate(' + dd.angle + ') translate(0,' + (radius-3) * -1 + ')');
    }
    d3.select("#crlChart").select('.sliderToolTip').remove();
    var toolHandles = d3.select("#crlChart").append('g')
      .attr('class', 'sliderToolTip')
      .attr('transform', function (d) {
        return 'rotate(' + dd.angle + ') translate(0,' + (radius + 40) * -1 + ')';
      });
    toolHandles.append('circle')
      .attr('r', 10.5).attr('class', 'tooltips')
      .attr('stroke', '#00b9ff')
      .attr('stroke-width', 1)
      .attr('cursor', 'pointer').attr('fill', '#fff');
    toolHandles.append("text")
      .style("text-anchor", "middle")
      .style('dominant-baseline', 'central')
      .attr("transform", "rotate(" + (360 - (+dd.angle)) + ")")
      .style('font-family', 'Open Sans Semibold')
      .text(dd.value.toFixed(0))
      .style('font-size', '10px').attr('cursor', 'pointer')
      .style('fill', handleIconColor);
    updateArc(dd.value, dd.label, dd.angle);
  }

  function checkHandlesPosition(labelOfDagedHandle) {
    var allHandles = handles.selectAll('.handlercontainer');
    var currentData = {
      "a": 0,
      "aAngle": 0,
      "e": 0,
      "eAngle": 0
    }
    allHandles.each(function (d, i) {
      currentData[d.label] = d.value;
      currentData[d.label + "Angle"] = d.angle;
    });
    that.draggedHandle = true;
    writeTimeInfo(currentData);
    
    SetInfo(currentData);
    that.AL_List = that.selIndexData;
    that.OnAL_listChange(currentData);
    setTimeout(() => {
      if(!that.avoidSlides)
    {
      that.avoidSlides = true;
      that.showLoader = true;
    }
    }, 1000);
  }

  function SetInfo(data){
    d3.select('#innerText').remove();
    var oSvg = d3.select('#crlChart');
    var oSvgGrp = oSvg.append('g')
      .attr('id','innerText');
    var text = oSvgGrp.append('text')
      .attr("text-anchor","middle");
    text.append('tspan')
      .attr('class','inText1')
      .attr('y',-20)
      .text("Remove");
    text.append('tspan')
      .attr('class','inText2')
      .attr('y',20)
      .attr('x',0)
    .attr("dy", 20)
      .text(function(){
        return Math.round(data.e)+'%'
      });
      text.transition()
      .duration(300);
  }

    function getPathData() {
      var width = document.getElementById('svgHContainer1').getBoundingClientRect().width;
      var r = radius * 1;
      var startX = width/2 - r;
      return 'm' + startX + ',' + (height/2) + ' ' +
        'a' + r + ',' + r + ' 0 0 0 ' + (2*r) + ',0';
    }
    d3.select('#textGrp').remove();
    var bottomtextgrp = d3.select('#crlChart').append('g').attr('id',"textGrp").attr('transform',
    function(){
      var sWidth = document.getElementsByClassName('R_slider')[0].clientWidth;
      return 'translate(-'+sWidth/2+',-140)'
    });
    bottomtextgrp.append('defs')
          .append('path')
          .attr(
            'd', getPathData)
          .attr(
            'id', 'curvedTextPath'
          );
    bottomtextgrp.append('text').attr('id','curve-text').attr('class','CurveText').attr('fill','#fff').attr('xml:space','preserve').append('textPath').attr('startOffset',"32%").attr('xlink:href', '#curvedTextPath').text('<<< L O S E R S    W I N N E R S >>>');
}

SliderOnChange(vals) {
  
  let that = this;
  d3.selectAll(".AddSlider").remove();
  d3.select("#chartGroupCompare").selectAll(".row").classed("p_Clkd", false);
  d3.selectAll('.AddSlider').style('display', 'none');
  d3.selectAll(".add_C").classed("cmp_Added", false);
  d3.selectAll(".cmp_Added").dispatch("click");
  if (vals[0] != 0 || vals[1] != 100) {
    d3.select("#DiagTxt").text("Reset");
    d3.select('#RangeComp').style('display', 'block');
    d3.select("#totalRangeStocks").style('display', 'none');
  }
  d3.select('.slider_text_Ryt').text(vals[0].toFixed(0) + "%").attr("x", (430 - (vals[0] * 4)));
  d3.select('.slider_text_Ryt_rect').text(vals[0].toFixed(0) + "%").attr("x", (416 - (vals[0] * 4)));
  d3.select('.slider_text_Lft').text(vals[1].toFixed(0) + "%").attr("x", (430 - (vals[1] * 4)));
  d3.select('.slider_text_Lft_rect').text(vals[1].toFixed(0) + "%").attr("x", (416 - (vals[1] * 4)));
  that.createGradienArc(vals[0], vals[1]);
  d3.select("#cSlider").raise();
    d3.selectAll(".sliderDisp").style("display", "block"); 
      d3.select("#cSlider").style("display", "none");
    try {
      let RectOn = d3.select(".rectOn");
      if (RectOn.node() != null) {
        var gs = d3.select("#gCompetitive");
        gs.selectAll("g").remove();
      }
    } catch (e) { console.log(e) }
    d3.selectAll(".viewport").style("overflow-y", "auto");
    d3.select("#ParentViewportRange").style("visibility", "visible");

    d3.select("#gCompetitive").raise();
    d3.select("#cSlider").raise();
    d3.select("#Rangeslider").raise();
    let filtext = "";
    if (vals[0] == 0 && vals[1] == 100) {
      filtext = "Filtered Companies  (0% - 100%)";
    } else if (vals[1].toFixed(0) - vals[0].toFixed(0) < 10) {
      filtext = "Filtered Companies  (" + (vals[0] == 0 ? 0 : vals[0].toFixed(2)) + '% - ' + (vals[1] == 100 ? 100 : vals[1].toFixed(2)) + '%)';
    } else {
      filtext = "Filtered Companies  (" + (vals[0] == 0 ? 0 : vals[0].toFixed(1)) + '% - ' + (vals[1] == 100 ? 100 : vals[1].toFixed(1)) + '%)';
    }
    d3.select("#gNavRange").select(".subname").text(filtext);
    d3.selectAll(".compList").style("display", "block");

    if (vals[0] != 0 || vals[1] != 100) {
      d3.select("#DiagTxt").text("Reset");
      d3.select('#RangeComp').style('display', 'block');
      d3.select("#totalRangeStocks").style('display', 'none');
    }
}

OnAL_listChange(d){
  var total_lenght = this.AL_List.length;
  var filteredLength = total_lenght - Math.floor(total_lenght * (d.e/100));
  this.AL_FilteredList = [...this.AL_List.slice(0,filteredLength)];
}

onWeeklyClick(day){
    this.selWeeklyday = day;
    if(!this.alertSubmitBtn)
    this.alertUpdateBtn = true;
    else
    this.alertUpdateBtn = false;
  }

onradioChange(e){
    if(e.detail.value == 'weekly'){
      this.selctedradioopts = 'weekly';
      this.weeklyDiv = true;
    }else{
      this.weeklyDiv = false;
    }

    if(e.detail.value == 'monthly'){
      this.selctedradioopts = 'monthly';
      this.monthlyBtn = true;
    }else{
      this.monthlyBtn = false;
    }
    
    if(e.detail.value == 'daily'){
      this.selctedradioopts = 'daily';
    }

    if(!this.alertSubmitBtn){
      this.alertUpdateBtn = true;
    }else{
      this.alertUpdateBtn = false;
    }
    
  }

onperRadioChange(event){
    if(event.detail.value == 'percentage'){
      this.percentageRage = true;
    }else{
      this.percentageRage = false;
    }
    if(!this.alertSubmitBtn){
      this.alertUpdateBtn = true;
    }else{
      this.alertUpdateBtn = false;
    }
  }

  async showMonthlyPicker(e){
    var columnOpts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    var temp = [];
    columnOpts.forEach(x =>{
      temp.push({text:x,value:x});
    })
    let opts : PickerOptions = {
      buttons:[{
        text: "Cancel",
        role: 'cancel'
      },{
        text: 'Ok',
        handler:(val:any) =>{
          this.monthlyDate = val.Date.value;
          if(!this.alertSubmitBtn){
            this.alertUpdateBtn = true;
          }else{
            this.alertUpdateBtn = false;
          }
        }
      }],
      columns:[{
        name: 'Date',
        options: temp,
        selectedIndex: this.monthlyDate-1
         }
      ],
      
    };

    let picker = await this.pickerCtrl.create(opts);
    picker.present();
  }

  onPDFClick(){

  }

  onSendClick(){
    
  }
}