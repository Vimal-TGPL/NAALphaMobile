import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'slick-carousel/slick/slick';
import { createAnimation } from '@ionic/core';
import { Platform, IonSlides, IonContent, PickerController, MenuController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import * as d3 from 'd3';
import { ActivatedRoute } from '@angular/router';
import { DataHandlerService } from '../services/dataHandler/data-handler.service';
import { Key } from 'protractor';


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

  LEI_E:number = 0;
  rebalance_dates:any = [];
  trggtyp:any;
  VIX_E:number = 0;
  SP_E:number = 0;
  Output: number = 4;

  SelCountryperfData:any;
  SelCountryData:any;

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
  selectedSection:String = 'perfomance';
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
    console.log(this.key);
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
        console.log(res);
        this.PerformanceData = res;
      this.dataHandler.getEsgPerfData().subscribe(res => {
        console.log(res);
        this.IndexData = res;
        this.CheckCountry();
        this.OnItemClick(this.CountryClasificationList[0]);
      });
    });
    }else if(this.key == 'Fixed Income'){
      this.dataHandler.getPerfData().subscribe(res =>{
        console.log(res);
        this.PerformanceData = res;
      this.dataHandler.getFIPerfData().subscribe(res => {
        console.log(res);
        this.IndexData = res;
        this.CheckCountry();
        this.OnItemClick(this.CountryClasificationList[0]);
      });
    });
    }else if(this.key == 'Leading Equity'){
      this.dataHandler.getPerfData().subscribe(res =>{
        console.log(res);
        this.PerformanceData = res;
      this.dataHandler.getEquityPerfIndData().subscribe(res=>{
        console.log(res);
       var temp:any = [];
       temp = res;
       var LeadingIndex = temp.filter((rec)=> rec.indexName.indexOf('Leading') != -1);
       console.log(LeadingIndex);
       this.IndexData = LeadingIndex;
       this.CheckCountry();
       this.OnItemClick(this.CountryClasificationList[0]);
      });
    });
    }else if(this.key == 'Long_Short Equity'){
      this.dataHandler.getPerfData().subscribe(res =>{
        console.log(res);
        this.PerformanceData = res;
      this.dataHandler.getEquityPerfIndData().subscribe(res=>{
        console.log(res);
       var temp:any = [];
       temp = res;
       var LongShortIndex = temp.filter((rec)=> (rec.indexName.indexOf('Long') != -1 || rec.indexName.indexOf('Short') != -1) && rec.indexName.indexOf('Long-Short') == -1);
       console.log(LongShortIndex);
       this.IndexData = LongShortIndex;
       this.CheckCountry();
       this.OnItemClick(this.CountryClasificationList[0]);
       });
      });
    }else if(this.key == 'Low Volatility'){
      this.dataHandler.getPerfData().subscribe(res =>{
        console.log(res);
        this.PerformanceData = res;
      this.dataHandler.getEquityPerfIndData().subscribe(res=>{
        console.log(res);
        var temp:any = [];
       temp = res;
       var LowVolIndex = temp.filter((rec)=> rec.indexName.indexOf('Low Volatility') != -1);
       console.log(LowVolIndex);
       this.IndexData = LowVolIndex;
       this.CheckCountry();
       this.OnItemClick(this.CountryClasificationList[0]);
       });
      });
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

  // filterIndex(item){
  //   var index = item;
  //   //console.log(item);
  //   var filterStr='U.S.';
  //   var ind:any = [];
  //   // if(index == 'USA')
  //   // {
  //   //   var temp = this.getUSAlist()
  //   //   setTimeout(() => {
  //   //     ind = temp;
  //   //   }, 500);
      
  //   // }else 
  //   if(index == 'Europe'){
  //     filterStr = 'Europe'
  //     ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
  //   }else if(index == 'Europe'){
  //     filterStr = 'Europe'
  //     ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
  //   }else if(index == 'UK'){
  //     filterStr = 'UK'
  //     ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Europe') == -1);
  //   }else if(index == 'Japan'){
  //     filterStr = 'Japan'
  //     ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
  //   }else if(index == 'Dev. World'){
  //     filterStr = 'Developed World'
  //     ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Developed World Ex-US') == -1);
  //   }else if(index == 'Dev. World ex US'){
  //     filterStr = 'Developed World Ex-US'
  //     ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
  //   }
  //   // else if(index == 'All'){
  //   //   ind = this.IndexData;
  //   // }
  //   // console.log(ind);
  //  // this.selectedIndex = ind[0].indexName;
  //  // this.selectedIndex = this.selectedIndex.replace('New Age Alpha ','');
  //   //console.log(this.selectedIndex)
  //   return ind;
  // }

  CheckCountry(){
    var temp = [];
    if(this.IndexData.length != 0){
      if(this.IndexData.filter(data => data.indexName.indexOf('U.S') != -1 || data.indexName.indexOf('USD') != -1).length != 0){
        temp.push("USA");
      }
      if(this.IndexData.filter(data => data.indexName.indexOf('Ex-UK') != -1).length != 0){
        temp.push("Europe");
      }
      if(this.IndexData.filter(data => data.indexName.indexOf('United Kingdom') != -1).length != 0){
        temp.push("UK");
      }
      if(this.IndexData.filter(data => data.indexName.indexOf('Japan') != -1).length != 0){
        temp.push("Japan");
      }
      if(this.IndexData.filter(data => data.indexName.indexOf('Developed World') != -1).length != 0){
        temp.push("Dev. World");
      }
      this.CountryClasificationList = temp;
    }
  }

  OnItemClick(item){
    console.log(item);
    this.selectedCountry = item;
    this.selectedOption = null;
    console.log(this.IndexData);
    if(item == 'USA'){
        this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('U.S') != -1 || data.indexName.indexOf('USD') != -1);
    }else if(item == 'Japan'){
      this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('Japan') != -1);
    }else if(item == 'Europe'){
      this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('Ex-UK') != -1);
    }else if(item == 'Dev. World'){
      this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('Developed World') != -1);
    }else if(item == 'UK'){
      this.SelCountryData = this.IndexData.filter(data => data.indexName.indexOf('United Kingdom') != -1);
    }

    this.SelCountryData = this.SelCountryData.sort((a,b)=>{
      return a.sortOrder - b.sortOrder;
    });
    console.log(this.SelCountryData);
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
    
    setTimeout(()=>{
      this.animateSequenceStart();
    },300);
  }

  onOptionsSelected(indId){
    this.selectedIndex = this.SelCountryData.filter(data => data.indexId == indId)[0];
    console.log(this.selectedIndex);
    this.selectedIndexData = this.PerformanceData.filter(data => data.indexId == indId)[0];
    console.log(this.selectedIndexData);
    this.selectedIndexName = this.selectedIndexData.indexName;
    this.getBMData();
  }

  // onOptionsSelected(){
  //   this.selectedIndex = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)];
  //   var inddata = this.PerformanceData.filter(data => data.indexName.replace('New Age Alpha ','') == this.selectedIndexName);
  //   this.selectedIndexData = inddata[0];
  //   // this.trimstring();
  //   this.showMore = false;
  //   console.log(this.selectedIndex);
  //   console.log(this.selectedIndexData);
  //   console.log(this.selectedIndexName);
  //   // this.getBMData();
  //   // this.createChart();
  // }

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

  // segmentChanged(event){
  //   // console.log(event);
  //   if(event == 'Equity'){
  //    this.Index[0] = this.EquityList;
  //   }else if(event == 'ESG'){
  //     this.Index[0] = this.ESGList;
  //   }else if(event == 'Fixed Income'){
  //     this.Index[0] = this.FIList;
  //   }
  //   this.selectedIndexName = this.Index[0][0].indexName.replace('New Age Alpha ','');
  //   //  console.log(this.selectedIndexName);
  //   setTimeout(() => {
  //     this.onOptionsSelected();
  //   }, 200);
    
  //   // console.log(this.Index);
  // }

  // getFIList(){
  //   this.httpClient.get('https://api.newagealpha.com/api/Indexes/GetFIDetails').subscribe(resFI=>{
  //     var tempFI:any = resFI;
  //     tempFI= tempFI.sort((a, b) => {
  //         return a.sortOrder - b.sortOrder;
  //       });
  //     this.FIList = tempFI;
  //   });   
  // }

  // getESGList(){
  //   this.httpClient.get('https://api.newagealpha.com/api/Indexes/GetESGDetails').subscribe(resESG=>{
  //     var tempESG:any = resESG;
  //     tempESG= tempESG.sort((a, b) => {
  //       return a.sortOrder - b.sortOrder;
  //     });
  //     this.ESGList =  tempESG.filter(res=> res.indexName.indexOf('U.S.') != -1);
  //     console.log(this.ESGList);
  //   });
  // }

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

  // trimstring(){
  //   var that = this;
  //   if(this.selectedIndexData.description.length > 210 )
  //   {
  //     if(this.showMore == true){
  //       that.description = that.selectedIndexData.description;
  //        that.description = that.description.replace(/RiskSelectTM/g,'RiskSelect<sup>TM</sup>').replace(/IndexSM/g,'Index<sup>SM</sup>');

  //        that.description = that.description+"<a id='ShowLess'>Show Less</a>";

         
  //       //  (click)=\"showMore = false; trimstring();\"
  //       setTimeout(()=>{
  //         document.getElementById('desc').getElementsByTagName('a')[0].onclick = function(){
  //           that.showMore = false;
  //           that.trimstring();
  //         }
  //          var desHeight =  document.getElementById('desc').clientHeight;
  //          var height = 355 + (desHeight - 82);
  //         //  document.getElementById('DataDiv').style.height = 'calc(100vh - '+ height+'px)';
  //       },100);
  //       console.log(that.description);
  //     }else{
  //       that.description = that.selectedIndexData.description.substring(0,210)+'...';
  //       that.description = that.description.replace(/RiskSelectTM/g,'RiskSelect<sup>TM</sup>').replace(/IndexSM/g,'Index<sup>SM</sup>');
  //       that.description = that.description+"<a id='ShowMore'>Show More</a>";
        
  //       setTimeout(()=>{
  //         document.getElementById('desc').getElementsByTagName('a')[0].onclick = function(){
  //           that.showMore = true;
  //           that.trimstring();
  //         }

  //         // document.getElementById('DataDiv').style.height = 'calc(100vh - 355px)';
  //       },100);
  //       console.log(that.description);
  //     }
  //   }else{
  //     that.description = that.selectedIndexData.description;
  //     that.description = that.description.replace(/RiskSelectTM/g,'RiskSelect<sup>TM</sup>').replace(/IndexSM/g,'Index<sup>SM</sup>');
  //   }
    
  // }

  async onYearClick(){
    let opts: PickerOptions ={
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },{
        text:'Confirm',
        handler: (val)=>{
          this.selectedYear = val.Year.text;
          console.log(this.selectedYear);
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

    console.log(this.selectedYear);
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
  }

  getselectedYear(){
    console.log('running selected year');
    if(this.selectedYear){
      console.log(this.yearList);
      // var temp = this.yearList.filter(i=>{i == this.selectedYear.Year.text})[0];
      // console.log(temp);
      // var selectedyearIndex = this.yearList.indexOf(temp);
      // return selectedyearIndex;
    }else{
      return 0;
    }
  }

  getYearData(){
    var yearIndex = this.yearList.indexOf(this.selectedYear);
    console.log(yearIndex);
    this.dateList = this.rebalance_dates[yearIndex].values;
    console.log(this.dateList);
  }

  getYearColumnOptions(){
    if(this.rebalance_dates.length != 0){
      var tempdates = [...this.rebalance_dates];
      this.yearList.length = 0;
      this.yearList = tempdates.map(i=>{return i.key});
      console.log(this.yearList);
      var temp = [];
      this.yearList.filter(i=>{
        temp.push({text:i,value:i})
      })
      return temp;
    }
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
    console.log(this.selectedOption);
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    // picker.onDidDismiss().then(async data=>{
    //   let col = await picker.getColumn('day');
    //   // this.selDate = col.options[col.selectedIndex].text;
    //   // console.log(col);
    // })
  }

  getSelectedDataId(val){
    console.log(val);
    var temp = this.SelCountryData.filter(data => data.indexName.replace('New Age Alpha ','').replace('Total Return ','') == val)[0];
    console.log(temp);
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

    console.log(this.SelCountryData);

    this.SelCountryData.forEach(element => {
      var temp = element.indexName.replace('New Age Alpha ','').replace('Total Return ','');
      temp = temp+" ("+element.indexCode+")";
      this.OptionsList.push({text:temp,value:temp});
    });
    
    // this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)].forEach(element => {
    //   var temp = element.indexName.replace('New Age Alpha ','')
    //   temp = temp+" ("+element.indexCode+")";
    //   this.OptionsList.push({text:temp,value:temp});
    // });
    // // console.log(this.Index);
    console.log(this.OptionsList);
    return this.OptionsList;
  }

  onCancelClick(){
    
    // setTimeout(()=>{
    //   document.getElementById('BottomCardDiv').style.opacity="0";
    //   setTimeout(()=>{
    //     setTimeout(()=>{
    //       document.getElementById('BottomCardDiv').style.display="none";
    //     },100);
    //     document.getElementById('header').style.display='block';
    //    },200);
    // },500);
     
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

  async animateSequenceStart(){
    document.getElementById('IndexDataInnerDiv').scrollTop = 0;
    const valueRef = createAnimation()
    .addElement(document.getElementById('value'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    
    const dailyReturnRef = createAnimation()
    .addElement(document.getElementById('dailyReturn'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const ytdReturn = createAnimation()
    .addElement(document.getElementById('ytdReturn'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const y1Return = createAnimation()
    .addElement(document.getElementById('y1Return'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const y3Return = createAnimation()
    .addElement(document.getElementById('y3Return'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const y5Return = createAnimation()
    .addElement(document.getElementById('y5Return'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const y10Return = createAnimation()
    .addElement(document.getElementById('y10Return'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const cumReturns = createAnimation()
    .addElement(document.getElementById('cumReturns'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const annReturns = createAnimation()
    .addElement(document.getElementById('annReturns'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');
   
    const year1 = createAnimation()
    .addElement(document.getElementById('year1'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const year2 = createAnimation()
    .addElement(document.getElementById('year2'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const year3 = createAnimation()
    .addElement(document.getElementById('year4'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const year4 = createAnimation()
    .addElement(document.getElementById('year4'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const year5 = createAnimation()
    .addElement(document.getElementById('year5'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const year6 = createAnimation()
    .addElement(document.getElementById('year6'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const year7 = createAnimation()
    .addElement(document.getElementById('year7'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const year8 = createAnimation()
    .addElement(document.getElementById('year8'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const year9 = createAnimation()
    .addElement(document.getElementById('year9'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    const year10 = createAnimation()
    .addElement(document.getElementById('year10'))
    .duration(100)
    .fromTo('transform','translateX(-50px)','translateX(0px)');

    document.getElementById('value').style.display = 'block';
    await valueRef.play();
    document.getElementById('dailyReturn').style.display = 'block';
    await dailyReturnRef.play();
    document.getElementById('ytdReturn').style.display = 'block';
    await ytdReturn.play();
    document.getElementById('y1Return').style.display = 'block';
    await y1Return.play();
    document.getElementById('y3Return').style.display = 'block';
    await y3Return.play();
    document.getElementById('y5Return').style.display = 'block';
    await y5Return.play();
    document.getElementById('y10Return').style.display = 'block';
    await y10Return.play();
    document.getElementById('cumReturns').style.display = 'block';
    await cumReturns.play();
    document.getElementById('annReturns').style.display = 'block';
    await annReturns.play();
    document.getElementById('year1').style.display = 'block';
    await year1.play();
    document.getElementById('year2').style.display = 'block';
    await year2.play();
    document.getElementById('year3').style.display = 'block';
    await year3.play();
    document.getElementById('year4').style.display = 'block';
    await year4.play();
    document.getElementById('year5').style.display = 'block';
    await year5.play();
    document.getElementById('year6').style.display = 'block';
    await year6.play();
    document.getElementById('year7').style.display = 'block';
    await year7.play();
    document.getElementById('year8').style.display = 'block';
    await year8.play();
    document.getElementById('year9').style.display = 'block';
    await year9.play();
    document.getElementById('year10').style.display = 'block';
    await year10.play();
  }

  displayNone(){

  }

  createChart(){
    var that = this;
    d3.json("https://api.newagealpha.com/api/Indexes/GetRebalanceDates/"+this.selectedIndexData.indexId).then(data=>{
      console.log(data);
      if(data.length>0){
        data.sort((x,y)=>{
          return d3.descending(x.rebalanceDt, y.rebalanceDt);
        })
        that.rebalance_dates = d3.nest()
        .key(d=>{ return d.rebalanceDt.substring(0,4);})
        .entries(data).sort((x,y)=>{ d3.descending(x.key,y.key);});
        console.log(that.rebalance_dates);
        this.selectedYear = that.rebalance_dates[0].key;
        
          this.getYearColumnOptions();
          this.getYearData();
        
        that.selectedDate = this.rebalance_dates[0].values[0].rebalanceDt;
        that.fetchSignal(that.selectedDate);
        
      }
    })
  }

  fetchSignal(tradedate){
    console.log(tradedate);
    var that = this;
    d3.json("https://api.newagealpha.com/api/Indexes/GetSignalsByDate/" + this.selectedIndexData.indexId + "/" + tradedate).then(signaldata =>{
      console.log(signaldata);
      if(signaldata.length >0 ){
        that.LEI_E = signaldata[0].lei;
        that.trggtyp = signaldata[0].triggerType;
        that.VIX_E = signaldata[0].vix;
        that.SP_E = signaldata[0].sptr;
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
        console.log('LEI_E', that.LEI_E);
        console.log('trggtyp', that.trggtyp);
        console.log('VIX_E', that.VIX_E);
        console.log('SP_E', that.SP_E);
        console.log('Output', that.Output);
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
    this.selectedDate = rebalancedt;
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
      return 'Fixed Income Strategies'
    }else if(this.key == 'Leading Equity'){
      return 'Leading Equity Strategies'
    }else if(this.key == 'Long_Short Equity'){
      return 'Long / Short Equity Strategies'
    }else if(this.key == 'Low Volatility'){
      return 'Low Volatility Strategies'
    }
  }
}
