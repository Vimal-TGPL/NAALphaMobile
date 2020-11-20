import { Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'slick-carousel/slick/slick';
import { Platform, IonSlides, IonContent, PickerController, MenuController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import * as d3 from 'd3';
import { ActivatedRoute } from '@angular/router';
import { DataHandlerService } from '../services/dataHandler/data-handler.service';
import * as svg from 'save-svg-as-png';
declare var $:any;

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements OnInit, AfterViewInit, OnDestroy {
  ngAfterViewInit() {
    if(this.mobile){
    // var ref = document.getElementById('IndexListCard');
    // ref.onscroll= this.OnCardScroll;
    }
  }

  RelIndexPart: any = [
    {
      id: '12',
      top: 'NAA Japan|Leading Index',
      mid: 'NAA Japan Low |Vol Index',
      center: 'NAA Japan |Low Vol Index'
    },
    {
      id: '9',
      top: 'NAA U.S. LC |Leading Index',
      mid: 'NAA U.S. LC |Low Vol Index',
      center: 'NAA U.S. LC|Low Vol Index'
    },
    {
      id: '13',
      top: 'NAA Europe Ex UK|Leading Index',
      mid: 'NAA Europe Ex UK |Low Vol Index',
      center: 'NAA Europe Ex UK |Low Vol Index'
    },
    {
      id: '1',
      top: 'NAA UK|Leading Index',
      mid: 'NAA UK |Low Vol Index',
      center: 'NAA UK Low |Vol Index'
    },
    {
      id: '4',
      top: 'NAA U.S. SC | Leading Index',
      mid: 'NAA U.S. SC |Low Vol Index',
      center: 'NAA U.S. SC |Low Vol Index'
    },
    {
      id: '107',
      top: 'NAA U.S. LC |Leading 50 Index',
      mid: 'NAA U.S. LC |Low Vol 50 Index',
      center: 'NAA U.S. LC|Low Vol 50 Index'
    },
    {
      id: '104',
      top: 'NAA U.S. SC | Leading 50 Index',
      mid: 'NAA U.S. SC |Low Vol 50 Index',
      center: 'NAA U.S. SC |Low Vol 50 Index'
    },{
      id: '69',
      top: 'NAA U.S. LC|ESG 50 Index',
      mid: 'NAA U.S. LC ESG|Defensive 50 Index',
      center: 'NAA U.S. LC ESG|Defensive 50 Index'
    },
    {
      id: '108',
      top: 'NAA UK|ESG 50 Index',
      mid: 'NAA UK ESG|Defensive 50 Index',
      center: 'NAA UK ESG|Defensive 50 Index'
    },
    {
      id: '113',
      top: 'NAA Japan|ESG 50 Index',
      mid: 'NAA Japan ESG|Defensive 50 Index',
      center: 'NAA Japan ESG|Defensive 50 Index'
    }   
  ];

  LEI_E:number = 0;
  rebalance_dates:any = [];
  trggtyp:any;
  VIX_E:number = 0;
  SP_E:number = 0;
  Output: number = 4;
  LEI: number = 0;
  VIX: number = 0;
  SP: number = 0;
  trgrtyp:any;
  Europe:any;
  UK:any;
  Japan:any;
  isUnscheduled:any;
  topOne: any;
  topTwoTop: any;
  topTwoLow: any;
  topThree: any;
  topFour: any;
  SelRelIndexPart: any = [];
  pngLoader:boolean = false;
  rebalanceDates:any = [];
  lstDate: any;
  sLC: any;
  sSC: any;
  sUK: any;
  sEUR: any;
  sJAP: any;
  HFLAT: any = "0.00%";
  HFSAT: any = "0.00%";
  HFEAT: any = "0.00%";
  HFUAT: any = "0.00%";
  HFJAT: any = "0.00%";
  HFR: any = "0.00%";

  SelCountryperfData:any;
  SelCountryData:any;
  ShowAll: boolean = true;
  showMVCons:boolean = false;
  selectedDate:any;
  dateList:any = [];
  selectedYear:any;
  mobile : boolean;
  selWith:any;
  yearList:any = [];
  OptionsList:any = [];
  selectedIndexData:any;
  selectedIndexName:any;
  selectedOption:any;
  selectedIndex:any;
  selectedSection:String = 'construction';
  itemActive:boolean = false;
  selectedCountry:any;
  PerformanceData:any = [];
  SelBMIndData:any = [];
  showMore:Boolean = false;
  EquityList:any = [];
  ESGList:any = [];
  FIList:any = [];
  selectedCard:String = 'value';
  description:String;
  descModel:Boolean = false;
  IndexData:any = [];
  Index:any = [];
  key:string;
  CountryClasificationList:any = ['USA','Europe','UK','Japan','Dev. World'];
  performanceAPIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexPerformance';
  APIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexDetails';
  constructor(private dataHandler: DataHandlerService, private route: ActivatedRoute, private menuController: MenuController ,private file: File,private photoViewer: PhotoViewer,private platform:Platform, private httpClient:HttpClient, private pickerCtrl:PickerController, private screenOrientation: ScreenOrientation) { 
    this.selWith= window.innerWidth;
    this.selWith = this.selWith- 30; 
    // this.menuController.swipeEnable()
    // this.menuController.enable(false);
  }
  ngOnDestroy(): void {
    this.screenOrientation.unlock();
    // this.menuController.enable(true);
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{ 
      this.key = params['Key'];
    })
    if(this.PerformanceData.length == 0){
      
    }
    //console.log(this.key);
    if(this.platform.is('ipad') || this.platform.is('tablet')){
      this.mobile = false;
    }else{
      this.mobile = true;
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.loadData();
    }
  }

  OnCardScroll(e){
    var ref = document.getElementById('IndexListCard');
    if(ref.scrollTop > 200){
      ref.classList.add("bottomCardScrollUp");
    }
  }
  
  loadData(){
    if(this.key == 'ESG'){
      this.dataHandler.getPerfData().subscribe(res =>{
    //    console.log(res);
        this.PerformanceData = res;
      this.dataHandler.getEsgPerfData().subscribe(res => {
    //    console.log(res);
        var temp:any = [];
        temp = res;
        temp = temp.filter(data => data.indexId != 108 && data.indexId != 113 && data.indexId != 69);
    //    console.log(temp);
        this.IndexData = temp;
        this.CheckCountry();
        this.OnItemClick(this.CountryClasificationList[0]);
      });
    });
    }else if(this.key == 'Fixed Income'){
      this.dataHandler.getPerfData().subscribe(res =>{
    //    console.log(res);
        this.PerformanceData = res;
      this.dataHandler.getFIPerfData().subscribe(res => {
    //    console.log(res);
        var temp:any = [];
        temp = res;
        // temp = temp.filter(data => data.indexId != 130);
      //  console.log(temp);
        this.IndexData = temp;
        this.CheckCountry();
        this.OnItemClick(this.CountryClasificationList[0]);
      });
    });
    }else if(this.key == 'Leading Equity'){
      this.dataHandler.getPerfData().subscribe(res =>{
    //    console.log(res);
        this.PerformanceData = res;
      this.dataHandler.getEquityPerfIndData().subscribe(res=>{
    //    console.log(res);
       var temp:any = [];
       temp = res;
       var LeadingIndex = temp.filter((rec)=> rec.indexName.indexOf('Leading') != -1);
     //  console.log(LeadingIndex);
       this.IndexData = LeadingIndex;
       this.CheckCountry();
       this.OnItemClick(this.CountryClasificationList[0]);
      });
    });
    }else if(this.key == 'Long_Short Equity'){
      this.dataHandler.getPerfData().subscribe(res =>{
     //   console.log(res);
        this.PerformanceData = res;
      this.dataHandler.getEquityPerfIndData().subscribe(res=>{
    //    console.log(res);
       var temp:any = [];
       temp = res;
       var LongShortIndex = temp.filter((rec)=> (rec.indexName.indexOf('Long') != -1 || rec.indexName.indexOf('Short') != -1) && rec.indexName.indexOf('Long-Short') == -1);
     //  console.log(LongShortIndex);
       this.IndexData = LongShortIndex;
       this.CheckCountry();
       this.OnItemClick(this.CountryClasificationList[0]);
       });
      });
    }else if(this.key == 'Low Volatility'){
      this.dataHandler.getPerfData().subscribe(res =>{
    //    console.log(res);
        this.PerformanceData = res;
      this.dataHandler.getEquityPerfIndData().subscribe(res=>{
    //    console.log(res);
        var temp:any = [];
       temp = res;
       var LowVolIndex = temp.filter((rec)=> rec.indexName.indexOf('Low Volatility') != -1);
    //   console.log(LowVolIndex);
       this.IndexData = LowVolIndex;
       this.CheckCountry();
       this.OnItemClick(this.CountryClasificationList[0]);
       });
      });
    }else if(this.key == 'Market View'){
      // console.log('Market View part');
      this.dataHandler.getEquityPerfIndData().subscribe(res =>{
        var temp:any = [];
         temp = res;
        temp = temp.filter(data => data.indexId == 107 || data.indexId == 104 || data.indexId == 13 || data.indexId == 1 || data.indexId == 12 || data.indexId == 54);
        this.IndexData = temp;
        this.dataHandler.getEsgPerfData().subscribe(res=>{
          var temp:any = [];
          temp = res;
          temp.filter((data) =>{
            if(data.indexId ==69 || data.indexId == 108 || data.indexId == 113){
              this.IndexData.push(data);
            }});
       //   console.log(this.IndexData);
          this.CheckCountry();
          this.onConstChipClick();
          this.OnItemClick(this.CountryClasificationList[0]);
          this.showMVCons = true;
        })
      })
    }
    // else if(this.key == 'Target Volatility Controlled'){
    //   this.dataHandler.getEquityPerfIndData().subscribe(res=>{
    //     console.log(res);
    //    });
    // }


    // this.httpClient.get(this.performanceAPIUrl).subscribe(data=>{
    //   // this.PerformanceData = data;
    //   // console.log(this.PerformanceData);
    //   this.getFIList();
    //   // this.getESGList();
    // this.httpClient.get(this.APIUrl).subscribe(data=>{
    //   this.IndexData = data
    //   // console.log(this.IndexData);
    //   var i = 0;
    //   this.Index[0] = undefined;
    //   this.getEquityList();
    //   for(i=1; i<this.CountryClasificationList.length;i++){
    //     var temp = this.filterIndex(this.CountryClasificationList[i]);
    //     if(this.CountryClasificationList[i] !== 'USA'){
    //     temp= temp.sort((a, b) => {
    //       return a.sortOrder - b.sortOrder;
    //     });
    //   }
    //     this.Index.push(temp);
    //  }
    //  console.log(this.Index);
      //console.log(this.selectedIndex);
      
      // document.getElementById('Loader').style.display='none';
    // });
  // });
  }

  CheckCountry(){
    var temp = [];
    if(this.IndexData.length != 0){
      if(this.IndexData.filter(data => data.indexName.indexOf('U.S') != -1 || data.indexName.indexOf('USD') != -1).length != 0){
        temp.push("USA");
      }
      if(this.IndexData.filter(data => data.indexName.indexOf('Ex-UK') != -1).length != 0){
        temp.push("Europe");
      }
      if(this.IndexData.filter(data => (data.indexName.indexOf('United Kingdom') != -1 || data.indexName.indexOf('UK') != -1) && data.indexName.indexOf('Ex-UK') == -1).length != 0 ){
        temp.push("UK");
      }
      if(this.IndexData.filter(data => data.indexName.indexOf('Japan') != -1).length != 0){
        temp.push("Japan");
      }
      if(this.IndexData.filter(data => data.indexName.indexOf('Developed World') != -1).length != 0){
        temp.push("Dev. World");
      }
      this.CountryClasificationList = temp;
   //   console.log(temp);
    }
  }

  OnItemClick(item){
  //  console.log(item);
    this.selectedCountry = item;
    this.selectedOption = null;
  //  console.log(this.IndexData);
    if(item == 'USA'){
        this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('U.S') != -1 || data.indexName.indexOf('USD') != -1);
    }else if(item == 'Japan'){
      this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('Japan') != -1);
    }else if(item == 'Europe'){
      this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('Ex-UK') != -1);
    }else if(item == 'Dev. World'){
      this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('Developed World') != -1);
    }else if(item == 'UK'){
      this.SelCountryData = this.IndexData.filter(data => (data.indexName.indexOf('United Kingdom') != -1 || data.indexName.indexOf('UK') != -1) && data.indexName.indexOf('Ex-UK') == -1 );
    }

    this.SelCountryData = this.SelCountryData.sort((a,b)=>{
      return a.sortOrder - b.sortOrder;
    });
   // console.log(this.SelCountryData);
    // if(item == 'USA'){
    //   // this.segmentChanged('Equity');
    //   this.selectedIndexName = this.Index[0][0].indexName.replace('New Age Alpha ','');
    // }else{
    //   this.selectedIndexName = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0].indexName.replace('New Age Alpha ','');
    //   // console.log(this.selectedIndexName);
    // }
    this.itemActive = true;
    
    
    // console.log(this.selectedIndexName);
    this.onOptionsSelected(this.SelCountryData[0].indexId);    
  }

  onIndexItemClick(){
    document.getElementById('BottomCardDiv').style.display="none";
    document.getElementById('BottomCardDiv').style.transition=".2s";
  }

  replaceId(item){
    var itm = item.replace(/ /g,'-');
    return itm;
  }

  replaceIdCard(item){
    var itm = item.replace(/ /g,'-');
    return itm+'Card';
  }

  onIndexChange(event){
    this.selectedIndex = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0];
    // console.log(this.selectedIndex);
    this.selectedIndexName = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0].indexName.replace('New Age Alpha ','')
   // this.selectedIndex = this.filterIndex(item)[0].IndexName;
   // this.selectedIndex = this.selectedIndex.replace('New Age Alpha ','');
    var inddata = this.PerformanceData.filter(data => data.indexName == this.selectedIndex.indexName);
    this.selectedIndexData = inddata[0];
    // console.log(this.selectedIndexData);
    // console.log(event.target.value);
    var d =this.IndexData.filter(data=> data.indexName.indexOf(event.target.value) != -1);
    this.selectedIndex = d[0];
    var inddata = this.PerformanceData.filter(data => data.indexName == this.selectedIndex.indexName);
    this.selectedIndexData = inddata[0];
    // console.log(this.selectedIndexData);
    this.onCancelClick();
    
    // setTimeout(()=>{
    //   // this.animateSequenceStart();
    // },300);
  }

  onOptionsSelected(indId){
    if(this.key != 'Market View'){
      this.selectedIndex = this.SelCountryData.filter(data => data.indexId == indId)[0];
    //  console.log(this.selectedIndex);
      this.selectedIndexData = this.PerformanceData.filter(data => data.indexId == indId)[0];
      // console.log(this.selectedIndexData);
      this.selectedIndexName = this.selectedIndexData.indexName;
      this.getBMData();
      this.createChart();
    }else{
      this.selectedIndex = this.SelCountryData.filter(data => data.indexId == indId)[0];
    //  console.log(this.selectedIndex);
      this.selectedIndexData = this.SelCountryData.filter(data => data.indexId == indId)[0];
      this.selectedIndexName = this.selectedIndexData.indexName;
      // console.log(this.selectedIndexData);
      // this.getBMData();
      // if(this.selectedIndexData.indexId == 54){
        // this.GlobalChartCreate();
      // }else{
        this.createChart();
      // }
    }
    
  }

  getBMData(){
    var temp = this.PerformanceData.filter(x=>x.indexId == this.selectedIndexData.benchMarkId && x.relatedIndexId == this.selectedIndexData.indexId);
    if(temp.length != 0){
      temp[0].indexName = temp[0].indexName.indexOf("(") > -1 ? temp[0].indexName.split("(")[0] : temp[0].indexName
      this.SelBMIndData = temp[0];
    }else{
      this.SelBMIndData = null ;
    }
    
    // console.log(this.SelBMIndData);
  }

    getEquityList(){
    var filterStr = 'U.S.'
    var tempEq= this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
        tempEq= tempEq.sort((a, b) => {
          return a.sortOrder - b.sortOrder;
        });
    this.EquityList = tempEq;
  }

  onPerfChipClick(){
    this.selectedSection = 'perfomance';
  }

  onConstChipClick(){
    this.selectedSection = 'construction';
  }

  onimgClick(img,title){
    
    this.photoViewer.show(this.file.applicationDirectory+img,title,{share:false});
  }

  async onYearClick(){
    let opts: PickerOptions ={
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },{
        text:'Confirm',
        handler: (val)=>{
          this.selectedYear = val.Year.text;
    //      console.log(this.selectedYear);
          this.getYearData();
          this.selectedDate = this.dateList[0].rebalanceDt;
          this.fetchSignal(this.selectedDate);
        }
      }],
      columns:[{
        name:'Year',
        selectedIndex: this.getselectedYear(),
        options: this.getYearColumnOptions()
      }]
    };

  //  console.log(this.selectedYear);
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
  }

  getselectedYear(){
  //  console.log(''+this.selectedYear);
    if(this.selectedYear){
      // console.log(this.yearList);
      var temp = this.yearList.filter(i=> i == this.selectedYear)[0];
    //  console.log(temp);
      var selectedyearIndex = this.yearList.indexOf(temp);
      // console.log(selectedyearIndex);
      return selectedyearIndex;
    }else{
      return 0;
    }
  }

  getYearData(){
    var yearIndex = this.yearList.indexOf(this.selectedYear);
  //  console.log(yearIndex);
    this.dateList = this.rebalance_dates[yearIndex].values;
  //  console.log(this.dateList);
  }

  getYearColumnOptions(){
    var that = this;
    if(this.rebalance_dates.length != 0){
      var tempdates = [...this.rebalance_dates];
      // that.yearList.length = 0;
      that.yearList = tempdates.map(i=>{return i.key});
    //  console.log(this.yearList);
      var temp = [];
      this.yearList.filter(i=>{
        temp.push({text:i,value:i})
      })
      return temp;
    }
    // console.log(this.yearList);
  }

  async openPicker(){
    let opts : PickerOptions ={
      buttons:[{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Confirm',
        handler: (val)=>{
          this.selectedOption = val;
          var temp = val.Index.text;
          temp = temp.slice(0,temp.indexOf('(')-1);
          this.selectedIndexName = temp;
          this.onOptionsSelected(this.getSelectedDataId(temp));
          this.getColumnOptions();
        }
      }
      ],
      cssClass:'picOptions',
      columns:[{  
        name: 'Index',
        selectedIndex: this.getSelectedIndex(),
        options: this.getColumnOptions()
      }],

    };
    //console.log(this.selectedOption);
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    
  }

  getSelectedDataId(val){
   // console.log(val);
    var temp = this.SelCountryData.filter(data => data.indexName.replace('New Age Alpha ','').replace('Total Return ','') == val)[0];
  //  console.log(temp);
    return temp.indexId;
  }

  getSelectedIndex(){
    if(this.selectedOption)
    {
      var temp = this.OptionsList.filter(i=> i.text == this.selectedOption.Index.text);
      var selectedindexVal = this.OptionsList.indexOf(temp[0]);
      return selectedindexVal;
    }else{
      return undefined;
    }
  }

  getColumnOptions(){
    this.OptionsList.length = 0;

   // console.log(this.SelCountryData);

    this.SelCountryData.forEach(element => {
      var temp = element.indexName.replace('New Age Alpha ','').replace('Total Return ','');
      temp = temp+" ("+element.indexCode+")";
      this.OptionsList.push({text:temp,value:temp});
    });
    return this.OptionsList;
  }

  onCancelClick(){
    
     
    setTimeout(()=>{
      document.getElementById('BottomCardDiv').style.opacity="0";
      setTimeout(()=>{
        document.getElementById('BottomCardDiv').style.display="none";
      },700);
      setTimeout(()=>{
        document.getElementById('parentdiv').style.paddingTop="0px";
        document.getElementById('header').style.display='block';
       
      },500);
    },100);
  }

  onDescCloseClick(){
    this.descModel = false;
  }

  oncardClick(val){
    // console.log(val);
    this.selectedCard = val;
  }

  roundValue(val){
    var v = Math.round(val*100)/100;
    return v.toFixed(2);
  }

  createChart(){
    var that = this;
    this.dataHandler.getRebalanceDates(this.selectedIndexData.indexId).then(data=>{
    //  console.log(data);
      if(data.length>0){
        data.sort((x,y)=>{
          return d3.descending(x.rebalanceDt, y.rebalanceDt);
        })

        that.rebalance_dates = d3.nest()
        .key(d=>{ return d.rebalanceDt.substring(0,4);})
        .entries(data).sort((x,y)=>{ d3.descending(x.key,y.key);});

     //   console.log(that.rebalance_dates);

        this.selectedYear = that.rebalance_dates[0].key;
     //   console.log(this.selectedYear);

        this.getYearColumnOptions();
        this.getYearData();

        that.selectedDate = this.rebalance_dates[0].values[0].rebalanceDt;
        that.isUnscheduled = this.rebalance_dates[0].values[0].unscheduled;
      //  console.log(this.selectedDate);
     //   console.log(this.isUnscheduled);
        that.fetchSignal(that.selectedDate);
        this.SelRelIndexPart = this.RelIndexPart.filter(data => data.id == this.selectedIndexData.indexId)[0];
        // console.log
        // console.log(this.SelRelIndexPart);
        this.ShowAll = false;
      }
    })
  }

  fetchSignal(tradedate){
   // console.log(tradedate);
    var that = this;
    this.dataHandler.getSignalsByDate(this.selectedIndexData.indexId,tradedate).then(signaldata =>{
  //    console.log(signaldata);
  if(this.selectedIndexData.indexId == 54){
    if (signaldata.length > 0) {
      let USLC = signaldata.filter(x => x.indexCode == 9)[0];
      let USSC = signaldata.filter(x => x.indexCode == 4)[0];
      let Euro = signaldata.filter(x => x.indexCode == 13)[0];
      let Uk = signaldata.filter(x => x.indexCode == 1)[0];
      let Jap = signaldata.filter(x => x.indexCode == 12)[0];
  
      if (USLC != undefined) {
        if (USLC.urltt == 1) {
          that.sLC = 1;
        }
        else if (USLC.urlvt == 1) {
          that.sLC = 3;
        }
        else if (USLC.cash == 1) {
          that.sLC = 5;
        }
        else if (USLC.urltt == .5 && USLC.urlvt == .5) {
          that.sLC = 2;
        }
        else if (USLC.urlvt == .5 && USLC.cash == .5) {
          that.sLC = 4;
        }
       
      }
      if (USSC != undefined) {
        if (USSC.urltt == 1) {
          that.sSC = 1;
        }
        else if (USSC.urlvt == 1) {
          that.sSC = 3;
        }
        else if (USSC.cash == 1) {
          that.sSC = 5;
        }
        else if (USSC.urltt == .5 && USSC.urlvt == .5) {
          that.sSC = 2;
        }
        else if (USSC.urlvt == .5 && USSC.cash == .5) {
          that.sSC = 4;
        }
      }
      if (Uk != undefined) {
        if (Uk.urltt == 1) {
          that.sUK = 1;
        }
        else if (Uk.urlvt == 1) {
          that.sUK = 3;
        }
        else if (Uk.cash == 1) {
          that.sUK = 5;
        }
        else if (Uk.urltt == .5 && Uk.urlvt == .5) {
          that.sUK = 2;
        }
        else if (Uk.urlvt == .5 && Uk.cash == .5) {
          that.sUK = 4;
        }
      }
      if (Jap != undefined) {
        if (Jap.urltt == 1) {
          that.sJAP = 1;
        }
        else if (Jap.urlvt == 1) {
          that.sJAP = 3;
        }
        else if (Jap.cash == 1) {
          that.sJAP = 5;
        }
        else if (Jap.urltt == .5 && Jap.urlvt == .5) {
          that.sJAP = 2;
        }
        else if (Jap.urlvt == .5 && Jap.cash == .5) {
          that.sJAP = 4;
        }
      }
      if (Euro != undefined) {
        if (Euro.urltt == 1) {
          that.sEUR = 1;
        }
        else if (Euro.urlvt == 1) {
          that.sEUR = 3;
        }
        else if (Euro.cash == 1) {
          that.sEUR = 5;
        }
        else if (Euro.urltt == .5 && Euro.urlvt == .5) {
          that.sEUR = 2;
        }
        else if (Euro.urlvt == .5 && Euro.cash == .5) {
          that.sEUR = 4;
        }
      }
     
     // that.EnableGroup();

     this.dataHandler.GetGlobalSignalsByDate(this.selectedIndexData.indexId,tradedate).then(globalsignaldata =>{
      if (globalsignaldata.length > 0) {
        that.HFLAT = (globalsignaldata[0].hflat * 100).toFixed(2) + "%";
        that.HFSAT = (globalsignaldata[0].hfsat * 100).toFixed(2) + "%";
        that.HFEAT = (globalsignaldata[0].hfeat * 100).toFixed(2) + "%";
        that.HFJAT = (globalsignaldata[0].hfjat * 100).toFixed(2) + "%";
        that.HFUAT = (globalsignaldata[0].hfuat * 100).toFixed(2) + "%";
        that.HFR = ((globalsignaldata[0].hflat + globalsignaldata[0].hfsat) * 100).toFixed(2) + "%";

        that.Europe = (globalsignaldata[0].europe * 100).toFixed(2) + "%";
        that.UK = (globalsignaldata[0].uk * 100).toFixed(2) + "%";
        that.Japan = (globalsignaldata[0].japan * 100).toFixed(2) + "%";
      }
     })
    }
  }else{
    if(signaldata.length >0 ){
      if(this.key != 'Market View'){
        that.LEI_E = signaldata[0].lei;
        that.trggtyp = signaldata[0].triggerType;
        that.VIX_E = signaldata[0].vix;
        that.SP_E = signaldata[0].sptr;
        that.Europe = that.roundValue(signaldata[0].europe*100)+'%';
        that.UK = that.roundValue(signaldata[0].uk*100)+'%';
        that.Japan = that.roundValue(signaldata[0].japan*100)+'%';
      }else{
        that.LEI = signaldata[0].lei;
        that.VIX = signaldata[0].vix;
        that.SP = signaldata[0].sptr;
        that.trgrtyp = signaldata[0].triggerType;
      }
      
      if (signaldata[0].urltt == 1) {
        that.Output = 1;
      }
      else if (signaldata[0].urlvt == 1) {
        that.Output = 3;
      }
      else if (signaldata[0].cash == 1) {
        that.Output = 5;
      }
      else if (signaldata[0].urltt == .5 && signaldata[0].urlvt == .5) {
        that.Output = 2;
      }
      else if (signaldata[0].urlvt == .5 && signaldata[0].cash == .5) {
        that.Output = 4;
      }
      
      if(this.key == 'Market View'){
        this.EnableGroup();
      }
      // console.log('LEI_E', that.LEI_E);
      // console.log('trggtyp', that.trggtyp);
      // console.log('VIX_E', that.VIX_E);
      // console.log('SP_E', that.SP_E);
      // console.log('Output', that.Output);
    }
  
  }
})
  }

  getDate(rebalanceDT){
    var tempdt = rebalanceDT.slice(0,4)+"/"+rebalanceDT.slice(4,6)+'/'+rebalanceDT.slice(6,8);
    var temp = new Date( tempdt);
    return temp.getDate();
  }

  getMonth(rebalanceDT){
    var tempdt = rebalanceDT.slice(0,4)+"/"+rebalanceDT.slice(4,6)+'/'+rebalanceDT.slice(6,8);
    var temp = new Date(tempdt);
    return temp.toLocaleString('default', {month: 'short'});
  }

  onDateClick(rebalancedt){
   // console.log('dateclick');
    this.ShowAll = false;
    this.selectedDate = rebalancedt;
    this.isUnscheduled = this.rebalance_dates.filter(data => data.key == this.selectedYear)[0].values.filter(da => da.rebalanceDt == this.selectedDate)[0].unscheduled;
    // console.log(this.isUnscheduled);
    this.fetchSignal(rebalancedt);
  }

  indexNameReplace(item:string){
    var temp = item.replace('New Age Alpha ','');
    temp = temp.replace('Total Return ', '');
    return temp;
  }

  getTitle(){
    if(this.key == 'ESG'){
      return 'ESG Strategies'
    }else if(this.key == 'Fixed Income'){
      return 'Fixed Income Strategies';
    }else if(this.key == 'Leading Equity'){
      return 'Leading Equity Strategies';
    }else if(this.key == 'Long_Short Equity'){
      return 'Long / Short Equity Strategies';
    }else if(this.key == 'Low Volatility'){
      return 'Low Volatility Strategies';
    }else if(this.key == 'Market View'){
      return 'Market View';
    }
  }

  onSvgClick(id){

    this.pngLoader = true;
    let width = 0;
    let height = 0;
    let scale = 0;
    var options;
    if(this.key == 'Market View'){
      if(this.selectedIndexData.indexId == 54){
        options = {
          width : 600,
          height : 350,
          scale : 0.6,
          backgroundColor : '#ffffff',
          top: -10,
          left: 0
        }
      }else if(this.isUnscheduled == 'N'){
        options = {
          width : 600,
          height : 300,
          scale : 0.6,
          backgroundColor : '#ffffff',
          top: -30,
          left: 50
        }
      }else{
        options = {
          width : 600,
          height : 300,
          scale : 0.6,
          backgroundColor : '#ffffff',
          top: -30,
          left: -5
        }
      }
    }else{
      options = {
        width : 2000,
        height : 1000,
        scale : 0.5,
        backgroundColor : '#ffffff'
      }
      
    }
    svg.svgAsPngUri(document.getElementById(id),options, (uri)=>{
      // console.log(uri);
      this.photoViewer.show(uri,this.selectedIndex.indexCode,{share:false});
      this.pngLoader= false;
    })
  }

  EnableGroup() {
    // console.log('enable Group');
    let that = this;

    let decText = that.selectedIndex.decision;
  //  console.log(decText);
    if (that.selectedIndex.indexId == 4 || that.selectedIndex.indexId == 9 || that.selectedIndex.indexId == 107 || that.selectedIndex.indexId == 104) {
      if (this.trgrtyp == "LEI") {
        decText = "Leading Economic Index (LEI) Trigger";
      }
    }
    d3.select("#txtDecisions").select("text").remove();
    d3.select("#txtDecisions").append("text")
      .attr("x", 0)
      .attr("y", function () {

        if (that.selectedIndex.indexId == 12) return decText.length < 14 ? 110 : 105;
        else if (decText.indexOf('LEI') > -1) return 98;
        else return decText.length < 14 ? 110 : 105;
      })
      .style("font-size", "9px")
      .attr("dy", 0)
      .attr("fill", "#fff")
      .attr("class", "st1 st2 st3")
      .text(decText).call(that.wrap, 55, 42);

    if (that.selectedIndex.indexId == 4 || that.selectedIndex.indexId == 9 || that.selectedIndex.indexId == 107 || that.selectedIndex.indexId == 104) {
      d3.selectAll("#gDecisions").style("fill-opacity", "0");
      d3.selectAll("#gDecisions").style("stroke-opacity", "0");
      d3.selectAll("#RiskSelND").attr("viewBox", "60 -10 550 260")
      if (this.isUnscheduled == "Y") {
        d3.selectAll("#RiskSelND").attr("viewBox", "-30 -20 650 270")
        d3.selectAll("#gDecisions").style("fill-opacity", "1");
        d3.selectAll("#gDecisions").style("stroke-opacity", "1"); 
        d3.select("#txtDecisions").select("text").append("tspan")
          .attr("x", 42)
          .attr("dy", "1.4em")
          .style("font-size", "7px")
          .style("font-style", "italic")
          .text("(Unscheduled)");
      } 

    } 
    else {
      d3.selectAll("#gDecisions").style("fill-opacity", "0");
      d3.selectAll("#gDecisions").style("stroke-opacity", "0");
      d3.selectAll("#RiskSelND").attr("viewBox", "60 -10 550 260");
      if (this.isUnscheduled == "Y") {
        d3.select('#txtDecisions').select('text').attr('y', 100);
        d3.selectAll("#gDecisions").style("fill-opacity", "1");
        d3.selectAll("#RiskSelND").attr("viewBox", "-30 -20 650 270")
        d3.selectAll("#gDecisions").style("stroke-opacity", "1");
        d3.select("#txtDecisions").select("text").append("tspan")
          .attr("x", 42)
          .attr("dy", "1.4em")
          .style("font-size", "7px")
          .style("font-style", "italic")
          .text("(Unscheduled)");      
      }
    }


    d3.selectAll(".signalgrp").style("fill-opacity", "1");
    d3.selectAll(".signalgrp").style("stroke-opacity", "1");
    d3.selectAll(".signalgrp").classed('disable', false);

    if (!this.ShowAll) {
      d3.selectAll(".signalgrp").style("fill-opacity", "0.6");
      //d3.selectAll(".signalgrp").node().classList.add("disable");
      d3.selectAll(".signalgrp").classed("disable", true);
      // d3.selectAll(".csignalgrp").select("circle").style("fill", "#EF462F");
      d3.selectAll(".csignalgrp").style("fill-opacity", "1");
      if (this.LEI == 1) {
        d3.select("#LEI").style("fill-opacity", "1");
        // d3.select("#cLEI").select("circle").style("fill", "#45b65c");
        d3.select("#cLEI").style("fill-opacity", "0");
      }
      if (this.VIX == 1) {
        d3.select("#VIX").style("fill-opacity", "1");
        // d3.select("#cVIX").select("circle").style("fill", "#45b65c");
        d3.select("#cVIX").style("fill-opacity", "0");
      }
      if (this.SP == 1) {
        d3.select("#SP").style("fill-opacity", "1");
        //d3.select("#cSP").select("circle").style("fill", "#45b65c");
        d3.select("#cSP").style("fill-opacity", "0");
      }
      d3.select("#infoCash").style("display", "none");

      let TotSignal: number = parseInt(this.LEI.toString()) + parseInt(this.VIX.toString()) + parseInt(this.SP.toString());
      let SignalIndText = "";
      if (TotSignal >= 2) {
        SignalIndText = "Two or More Positive Indicators";
      }
      if (TotSignal == 1) {
        SignalIndText = "One Positive Indicator";
      }
      if (TotSignal == 0) {
        SignalIndText = "All Negative Indicator";
      }
      if (TotSignal == 1 && that.Output == 5) {
        SignalIndText = "Continue To Remain In Cash";
        d3.select("#infoCash").style("display", "block");
      }
      
      d3.selectAll(".clsLowtxt").each(function (d, i) {
        d3.select(this).selectAll("tspan").each(function (e, j) {
          that.topTwoLow = that.SelRelIndexPart.mid.split("|")[0] + that.SelRelIndexPart.mid.split("|")[1];
          that.topTwoLow = that.topTwoLow.replace(/\s+/g, '_');
          that.topFour = that.SelRelIndexPart.mid.split("|")[0] + that.SelRelIndexPart.mid.split("|")[1];
          that.topFour = that.topFour.replace(/\s+/g, '_');
          if (j == 0) {
            d3.select(this).text(that.SelRelIndexPart.mid.split("|")[0]);
          }
          else if (j == 1) {
            d3.select(this).text(that.SelRelIndexPart.mid.split("|")[1]);
          }
        });
      });

      d3.selectAll(".clsToptxt").each(function (d, i) {
        d3.select(this).selectAll("tspan").each(function (e, j) {
          that.topOne = that.SelRelIndexPart.top.split("|")[0] + ' ' + that.SelRelIndexPart.top.split("|")[1];
          that.topOne = that.topOne.replace(/\s+/g, '_');
          that.topTwoTop = that.SelRelIndexPart.top.split("|")[0] + ' ' + that.SelRelIndexPart.top.split("|")[1];
          that.topTwoTop = that.topTwoTop.replace(/\s+/g, '_');
          if (j == 0) {
            d3.select(this).text(that.SelRelIndexPart.top.split("|")[0]);
          }
          else if (j == 1) {
            d3.select(this).text(that.SelRelIndexPart.top.split("|")[1]);
          }
        });
      });


      d3.selectAll(".clscenter").each(function (d, i) {
        if (that.SelRelIndexPart.center != undefined) {
          d3.select(this).selectAll("tspan").each(function (e, j) {
            that.topThree = that.SelRelIndexPart.center.split("|")[0] + ' ' + that.SelRelIndexPart.center.split("|")[1];
            that.topThree = that.topThree.replace(/\s+/g, '_');
            if (j == 0) {
              d3.select(this).text(that.SelRelIndexPart.center.split("|")[0]);
            }
            else if (j == 1) {
              d3.select(this).text(that.SelRelIndexPart.center.split("|")[1]);
            }
            else if (j == 2) {
              d3.select(this).text(that.SelRelIndexPart.center.split("|")[2]);
            }
          });
        }
      });

      d3.selectAll(".clsTop4").select("text").remove();
      d3.select(".clsTop4").append("text")
        .attr("class", "clsToptxt4")
        .attr("y", function () {
          return that.SelRelIndexPart.top.replace("|", " ").length < 25 ? 61 : 58;
        })
        .attr("dy", .25)
        .attr("fill", "#fff")
        .style("font-size", "5.5px")
        .style('text-anchor', 'middle')
        .text(that.SelRelIndexPart.top.replace("|", " ")).call(that.wrap, 31, 333);


      d3.selectAll(".clsLow4").select("text").remove();
      d3.select(".clsLow4").append("text")
        .attr("class", "clsLowtxt4")
        .attr("y", function () {
          return that.SelRelIndexPart.mid.replace("|", " ").length < 36 ? 122 : 118;
        })
        .attr("dy", .25)
        .attr("fill", "#fff")
        .style("font-size", "5.5px")
        .style('text-anchor', 'middle')
        .text(that.SelRelIndexPart.mid.replace("|", " ")).call(that.wrap, 31, 366);

      d3.select("#txtIndicators").select("text").remove();
      d3.select("#txtIndicators").append("text")
        .attr("y", 30)
        .attr("dy", .25)
        .attr("fill", "#fff")
        .text(SignalIndText).call(that.wrap, 50, 0);

      d3.selectAll(".gOut").style("fill-opacity", ".5");
      d3.selectAll(".gOut").style("stroke-opacity", ".2");
      //d3.selectAll(".gOut").node().classList.add("disable");
      d3.selectAll(".gOut").classed("disable", true);

      d3.selectAll(".gOut-" + this.Output).style("fill-opacity", "1");
      d3.selectAll(".gOut-" + this.Output).style("stroke-opacity", "1");
      d3.selectAll(".gOut-" + this.Output).classed('disable', false);

      d3.selectAll(".glines").style("fill-opacity", ".4");
      d3.selectAll(".glines").style("stroke-opacity", "0.2");
      //d3.selectAll(".glines").node().classList.add("disable");
      d3.selectAll(".glines").classed("disable", true);

      d3.selectAll(".g0").style("fill-opacity", "1");
      d3.selectAll(".g0").classed('disable', false);
      //console.log("==" + TotSignal + "==" + this.Output + "==");
      if (TotSignal >= 2 && this.Output == 1) {
        d3.selectAll(".g1").style("fill-opacity", "1");
        d3.selectAll(".g1").style("stroke-opacity", "1");
        d3.selectAll(".g1").classed('disable', false);
      }
      else if (TotSignal == 1 && this.Output == 2) {
        d3.selectAll(".g2").style("fill-opacity", "1");
        d3.selectAll(".g2").style("stroke-opacity", "1");
        d3.selectAll(".g2").classed('disable', false);
      }
      else if (TotSignal == 1 && this.Output == 3) {
        d3.selectAll(".g3").style("fill-opacity", "1");
        d3.selectAll(".g3").style("stroke-opacity", "1");
        d3.selectAll(".g3").classed('disable', false);
      }
      else if (TotSignal == 0 && this.Output == 3) {
        d3.selectAll(".g4").style("fill-opacity", "1");
        d3.selectAll(".g4").style("stroke-opacity", "1");
        d3.selectAll(".g4").classed('disable', false);
      }
      else if (TotSignal == 0 && this.Output == 4) {
        d3.selectAll(".g5").style("fill-opacity", "1");
        d3.selectAll(".g5").style("stroke-opacity", "1");
        d3.selectAll(".g5").classed('disable', false);
      }
      else if ((TotSignal == 0 || TotSignal == 1) && this.Output == 5) {
        d3.selectAll(".g6").style("fill-opacity", "1");
        d3.selectAll(".g6").style("stroke-opacity", "1");
        d3.selectAll(".g6").classed('disable', false);
      }

      d3.selectAll(".info").on("mouseover", function () {
        //console.log(d3.select(this).attr('id'));
        d3.select("." + d3.select(this).attr('id') + "pop").style("display", "block");
      }).on("mouseout", function () {
        d3.select("." + d3.select(this).attr('id') + "pop").style("display", "none");
      });

      d3.selectAll(".infoCash").on("mouseover", function () {
        //console.log(d3.select(this).attr('id'));
        d3.select("." + d3.select(this).attr('id') + "pop").style("display", "block");
      }).on("mouseout", function () {
        d3.select("." + d3.select(this).attr('id') + "pop").style("display", "none");
      });
    }
    $("#const_loader").show().delay(3000).queue(function (n) {
      $(this).hide(); n();
    });
    d3.select("#dvContain").style("display", "block");
  }

  wrap(text, width, xval) {
    text.each(function () {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", xval).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", xval).attr("dy", lineHeight + dy + "em").text(word);
        }
      }
    });
  }

  Rbdisplaydate(val){
    if(val != undefined){
      var temp = val.slice(4,6)+'/'+val.slice(6,8)+'/'+val.slice(0,4);
      return temp;
    }
  }

  riskSelDev(val){

  }

  valueHtop:any = null;
}
