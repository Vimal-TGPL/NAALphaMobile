import { Component, OnInit, AfterViewInit, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Platform, IonSlides, IonContent, MenuController, ToastController } from '@ionic/angular';
import * as d3 from 'd3';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Router } from '@angular/router';
import { AlertController, PickerController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { ProfiledetailsComponent } from '../Components/profiledetails/profiledetails.component';
import { NavParams, Events } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit {
  // slides={initialSlide: 1};
  slides:any;
  @ViewChild(IonContent, {static:true}) content: IonContent;
  @ViewChild('parent-content', {static:true}) parentContent: IonContent;
  @ViewChild('SearchComponent' , {static:true}) SearchComponent: IonicSelectableComponent;
  // @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  mobile : boolean;
  ionselectablefailimage:any = 'NAA_search_notfound.png';
  selDate:any = 1;
  searchedtext:any;
  savedAlert:any;
  showAlertRemove:boolean;
  selPer:any = 1;
  perChecked:boolean = false;
  selPeriod:string;
  showSubmit:boolean = true;
  selDay:string = 'monday';
  showAlertSetup:boolean = false;
  showFilter:boolean = false;
  filterby:string = 'HF_LTH';
  backButtonSubscription;
  globalSize:any = 100;
  FIIndexList:any = [];
  globalselectorcomp:any = [];
  globalselectedcountryList:any = [];
  currenturl: string;
  compETFNameList: any = [];
  comNAAIndex: any = [];
  comGlobalIndex: any = [];
  GlobalList:any = [];
  stockMed: any;
  GridHeaderTitle: boolean = true;
  selSector: any = [];
  SelSecLevTitle: any = 'Sub Industry';
  fullSectorComp: any = [];
  SelSearchObj: any = [];
  unsortselSectorComp:any = [];
  selSectorComp: any = [];
  sectorList: any = [];
  dbGICS: any = [];
  size: any = 50;
  EtfMed: any;
  searchList: any = [];
  EtfSearchList:any = [];
  NaaSearchList:any = [];
  FISearchList:any = [];
  LoadsearchList: any = [];
  searchSel: string = "";
  selComp: string;
  selCountry:string ;
  FixedStock:any = [];
  compIndexShow: boolean = false;
  FISelCountry:string;
  FIselCatogaryList:any = [];
  FICountryList:any [];
  stockIndexShow: boolean = false;
  stockIcon: string = "ios-arrow-dropdown-circle";
  stockCollapse: boolean = false;
  slideOptions: any;
  api_url = environment.api_url;
  SelAssetId: any;
  currentUser: any = null;
  data: any;
  user: any;
  SelTab: string;
  icon: string = 'ios-arrow-dropdown-circle';
  sorticon: string = 'arrow-dropdown'
  indexclick: boolean = true;
  parentcard: boolean = false;
  SelFilter: string = 'Human Factor Score (ascending)';
  sortDisable: boolean = true;
  sortcard: boolean = true;
  selCategory: any;
  CompLength: any = '';
  heightcard: any = '250px';
  NAAIndex: any = [];
  globalIndex: any = [];
  FixedIndexData:any = [];
  ETFCatagories: any = [];
  ETFHoldings: any = [];
  globalindexwise: any = [];
  naaindexwise: any = [];
  globalmed: any = [];
  naamed: any = [];
  ETFNameWise: any = [];
  ETFNameList: any = [];
  res: any = [];
  ETFCatagoriesComp: any = [];
  SelIndexName: string = '';
  globalcountry:any = [];
  unsortedIndexData: any = [];
  totalglobalcountry:any = [];
  headermed: any;
  compglobalCountryInd:any = [];
  GlobalCountryWiseInd:any = [];
  selectedIndexData: any = [];
  ETFcategory: any = [];
  ETFNameMed: any = [];
  ETFNameFull: any = [];
  showLoader: any = true;
  sectorHeadings: any = ['Global', 'Index', 'Sector', 'Industry Group', 'Industry', 'Sub Industry'];
  FilterList: any = [
    { "Name": 'Company Name (ascending)', "value": "1" },
    { "Name": 'Company Name (descending)', "value": "2" },
    { "Name": 'Human Factor Score (ascending)', "value": "3" },
    { "Name": 'Human Factor Score (descending)', "value": "4" },
    { "Name": 'Ticker (ascending)', "value": "5" },
    { "Name": 'Ticker (descending)', "value": "6" }];

  ngOnInit() {
    this.currenturl = this.router.url;
    this.createData();
    this.GetETFValues();
    this.GetFixedIndexData();
    
    if(this.platform.is('ipad') || this.platform.is('tablet')){
      this.mobile = false;
    }else{
      this.mobile = true;
      this.slides = document.getElementById('pageslider');
    }
    // this.menuCtrl.enable(true);
  }

  @HostListener('window:resize')
  public onResize(){
    setTimeout(()=>{
      if(this.slides){
        this.slides.update();
      }
    },100);
  }

  constructor(private toastCtrl: ToastController,private alertService : AlertService, private pickerCtrl:PickerController, private menuCtrl:MenuController, private events:Events, private platform:Platform, private popoverController: PopoverController ,private route:Router, public alertController: AlertController, private screenOrientation: ScreenOrientation, public router: Router, private authService: AuthenticationService, public storage: Storage, private httpclient: HttpClient, private plt: Platform) {
    this.currentUser = this.authService.currentUserValue();
    if (this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY) {
      this.stockCollapse = true;
    }
    this.screenOrientation.onChange().subscribe(
      () => {
        setTimeout(() => {
          // console.log("Slide update");
          this.slides.update();
        }, 500);
        if (this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY) {
          this.stockCollapse = true;
        }
      }
    );
  }

  showLoading() {
    
  }

  hideLoading() {
    this.SearchComponent.hideLoading();
  }
  // /*************** ETF TAb Clicked Start *****************/
  // ETFNavClick() {
  //   //if()
  //   this.indexclick = false;
  //   this.parentcard = true;
  //   this.icon = 'arrow-dropup';
  //   if (this.sortcard == false) {
  //     this.sorticon = 'arrow-dropdown';
  //     this.sortcard = true;
  //   }
  //   this.GetETFValues();
  //   this.httpclient.get(this.api_url + "/Scores/GetETFMaster").subscribe((stockIndex: any[]) => {
  //     var vall = stockIndex.map(item => item.category);
  //     this.ETFCatagories = vall.filter(function (value, index, self) {
  //       return self.indexOf(value) === index;
  //     });
  //     var i;
  //     for (i = 0; i < this.ETFCatagories.length; i++) {
  //       let temp = stockIndex.filter((item) => item.category === this.ETFCatagories[i]);
  //       this.ETFCatagoriesComp.push(temp);
  //     }
  //     this.showLoader = false;
  //   })
  // }
  // /*************** ETF TAb Clicked End *****************/

  /*************** Calulate Median Start *****************/
  getMed(array: any) {

    array = array.map(item => item.scores);
    //return array.filter(d=>{d.medianCont});
    array = array.sort();
    if (array.length % 2 === 0) { // array with even number elements
      return (array[array.length / 2] + array[(array.length / 2) - 1]) / 2;
    }
    else {
      return array[(array.length - 1) / 2]; // array with odd number elements
    }
  }
  /*************** Calulate Median End *****************/

  /*************** Round Median Start *****************/
  roundValue(val) {
    return (Math.round(val * 10) / 10).toFixed(1);
  }
  /*************** Round Median End *****************/

  /*************** Data Population Start *****************/
  createData() {
    this.httpclient.get(this.api_url + "/Industry/GetIndustry").subscribe((res: any[]) => {
      //console.log(res);
      this.dbGICS = res;
    });
    this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL").subscribe((res: any[]) => {
      res = res.filter(item=> item.companyName != null);
      this.data = res;
      this.searchList = this.data.filter(item => item.companyName != null && item.ticker != null);
      this.NaaSearchList = this.searchList.filter(item => item.indexName.indexOf("New Age Alpha") === 0);
      this.FISearchList = this.searchList.filter(item => item.hasOwnProperty('fi') === true && item.fi !== null);
      this.searchList = this.searchList.filter(item => item.indexName.indexOf("New Age Alpha") == -1);
      // this.LoadsearchList = this.searchList.slice(0, 50).map(i => {
      //   return i;
      // })
      let filteredData = this.data.map(item => item.indexName);
      let TotalIndex = filteredData.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      })
      
      // console.log(TotalIndex);
      TotalIndex.forEach((element: String) => {
        if (element.includes('New Age Alpha')) {
          this.NAAIndex.push(element);
        } else {
          this.globalIndex.push(element);
        }
      });
      // console.log(this.data); 

      this.data.forEach(val => {
        val.countrygroup = val.indexName.indexOf('Europe') > -1? 'Europe' : val.country;
      });
      //console.log(this.data);
      var i;
      for (i = 0; i < this.globalIndex.length; i++) {
        let temp = this.data.filter((item) => item.indexName === this.globalIndex[i]);
        this.globalindexwise.push(temp);
      }

      for (i = 0; i < this.NAAIndex.length; i++) {
        let temp = this.data.filter((item) => item.indexName === this.NAAIndex[i]);
        this.naaindexwise.push(temp);
      }
      for (i = 0; i < this.globalIndex.length; i++) {
        this.globalmed.push(this.roundValue(this.getMed(this.globalindexwise[i]) * 100));
      }
      
      for (i=0 ; i< this.globalIndex.length; i++){
        let country = this.globalindexwise[i].map(i=> i = i.countrygroup).filter(function (value, index, self) {
          return self.indexOf(value) === index;
        });
        this.globalcountry.push(country[0]);
      }
      // console.log(this.globalcountry);
      this.totalglobalcountry = this.globalcountry.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      // console.log(this.totalglobalcountry);
      // console.log(this.globalmed);
      let globaltemp = [];
      for (i = 0; i < this.globalIndex.length; i++) {
        let t: any = [];
        t = { 'name': this.globalIndex[i], 'med': this.globalmed[i], 'countrygroup' : this.globalcountry[i] }
        globaltemp.push(t);
      }
      // console.log(this.globalIndex);
      //let globalCountrytemp =[];
      var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
      // console.log(this.globalindexwise);
      this.comGlobalIndex = globaltemp;
      this.comGlobalIndex.sort((a, b) => {
        return a.med - b.med;
      });
      // console.log(this.comGlobalIndex);
      this.compglobalCountryInd = groupBy(this.comGlobalIndex,'countrygroup');
      // console.log(this.compglobalCountryInd);
      var temp = [];
      var that =this;
      this.totalglobalcountry.forEach(e=>{
        //console.log(e);
        var t:any = { 'country': e } 
        var t1 = this.compglobalCountryInd[e].map( i => i.name);
        
        var tmed = this.compglobalCountryInd[e].map( i => i.med);
        // console.log(tmed);
       var  array = tmed.sort();
        if (array.length % 2 === 0) { // array with even number elements
          tmed = (parseFloat(array[array.length / 2]) + parseFloat(array[(array.length / 2) - 1]))/2;
          tmed = Math.round(tmed * 10) /10
        }
        else {
          tmed = array[(array.length - 1) / 2]; // array with odd number elements
        }
        t.index = t1;
        t.med = tmed;
        temp.push(t);
      })
      // console.log(temp);
      this.GlobalCountryWiseInd = temp;
      this.GlobalCountryWiseInd = this.GlobalCountryWiseInd.sort((a,b)=>{
        return a.med - b.med;
      })
      this.GlobalList = this.GlobalCountryWiseInd;
      for (i = 0; i < this.NAAIndex.length; i++) {
        this.naamed.push(this.roundValue(this.getMed(this.naaindexwise[i]) * 100));
      }
      let naatemp = [];
      for (i = 0; i < this.NAAIndex.length; i++) {
        let t: any = [];
        t = { 'name': this.NAAIndex[i], 'med': this.naamed[i] };
        naatemp.push(t);
      }
      this.comNAAIndex = naatemp;
      this.comNAAIndex.sort((a, b) => {
        return a.med - b.med;
      });
      this.showLoader = false;
      this.GetETFValues();
      this.createFiSearchList();
    })
  }
  /*************** Data Population Start *****************/

  createFiSearchList(){
    this.FIIndexList = [];
    this.FICountryList.filter(item => {
      this.FixedIndexData[item].filter(it=>{
        this.FIIndexList.push(it);
      });
    });
    // console.log(this.FIIndexList);
    this.FIIndexList.filter(item=>{
      this.httpclient.get(this.api_url+'/Scores/GetBondMappingStocks/'+item.category).subscribe((res:any[]) =>{
        res.filter(it=> {
          this.FISearchList.filter(x=> x.stockKey == it.stockKey)[0].fiCountry = item.country;
          this.FISearchList.filter(x=> x.stockKey == it.stockKey)[0].fiCategory = item.category;
          // var temp = this.FISearchList.filter(x=> x.stockKey == it.stockKey)[0];
          // console.log(temp);
        })
      });
    });
  }

  GetFixedIndexData(){
    this.httpclient.get(this.api_url+'/Scores/GetFixedDataMaster').subscribe((res:any[])=>{
      // console.log(res);
      var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
      
      this.FixedIndexData = groupBy(res,'country');
      var that = this;
      // console.log(that.FixedIndexData);
      var temp = res.map(x=>x.country).filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      this.FICountryList = temp;
      // console.log(temp);
      temp.forEach(e=>{
        var t = this.FixedIndexData[e];
        var tmedlist = t.map(x => this.roundValue(x.medianCont*100)); 
        var tmed; 
        var  array = tmedlist.sort();
        if (array.length % 2 === 0) { // array with even number elements
          tmed = (parseFloat(array[array.length / 2]) + parseFloat(array[(array.length / 2) - 1]))/2;
          tmed = Math.round(tmed * 10) /10
        }
        else {
          tmed = array[(array.length - 1) / 2]; // array with odd number elements
        }
        this.FixedIndexData[e].med = tmed;
      });
      // console.log(this.FixedIndexData);
    });
  }

  onRemoveAlert(){
    let userInfo = {
      userId: this.currentUser.userId,
      stockKey: this.SelSearchObj.stockKey
    }
    this.alertService.deleteAlert(userInfo).subscribe(async (data)=>{
      // console.log(data);
      const toast = await this.toastCtrl.create({
        message: 'Alert Removed Sucessfully',
        duration: 3000
      });
      toast.present();
      this.showAlertSetup = false;
    })
  }

  onAlertSubmit(){
    if(this.selPeriod.length != 0 || this.perChecked){
      var alerts = {
        userId: this.currentUser.userId,
        stockKey: this.SelSearchObj.stockKey,
        daily: this.selPeriod == 'daily' ? 'Y' : 0,
        weekly: this.selPeriod == 'weekly' ? 'Y' : 0,
        weekDay: this.selPeriod == 'weekly' ? this.selDay : 0,
        monthly: this.selPeriod == 'monthly' ? 'Y' : 0,
        monthDt: this.selPeriod == 'monthly' ? this.selDate : 0,
        scoreChange: this.perChecked ? 'Y' : 0,
        scorePercent: this.perChecked ? this.selPer : 0,
        mailType: 'H'
      }

      // console.log(alerts);
      this.alertService.setAlert(alerts).subscribe(async (data)=>{
        // console.log(data);
        const toast = await this.toastCtrl.create({
          message:'Alert Submitted Sucessfully',
          duration: 3000
        });
        toast.present();
        this.showAlertSetup = false;
      })
    }
  }
  rangeChange(evt){
      this.showSubmit = true;  
  }

  getalertData(){

  }
  async openDaypicker(){
    // console.log('executing');
    let opts : PickerOptions ={
      buttons:[{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Confirm',
        handler: (val)=>{
          this.selDate = val.day.text;
          // console.log(val.text);
        }
      }
      ],
      columns:[{
        name: 'day',
        options: [{text:'1',value:'1'},
        {text:'2',value:'2'},
        {text:'3',value:'3'},
        {text:'4',value:'4'},
        {text:'5',value:'5'},
        {text:'6',value:'6'},
        {text:'7',value:'7'},
        {text:'8',value:'8'},
        {text:'9',value:'9'},
        {text:'10',value:'10'},
        {text:'11',value:'11'},
        {text:'12',value:'12'},
        {text:'13',value:'13'},
        {text:'14',value:'14'},
        {text:'15',value:'15'},
        {text:'16',value:'16'},
        {text:'17',value:'17'},
        {text:'18',value:'18'},
        {text:'19',value:'19'},
        {text:'20',value:'20'},
        {text:'21',value:'21'},
        {text:'22',value:'22'},
        {text:'23',value:'23'},
        {text:'24',value:'24'},
        {text:'25',value:'25'},
        {text:'26',value:'26'},
        {text:'27',value:'27'},
        {text:'28',value:'28'},
        {text:'29',value:'29'},
        {text:'30',value:'30'},
      ]
      }],

    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
      let col = await picker.getColumn('day');
      // this.selDate = col.options[col.selectedIndex].text;
      // console.log(col);
    })
  }
  onFINavClick(){
    this.stockCollapse = true;
    this.compIndexShow = true;
    this.sectorHeadings[1] = 'Fixed Income';
    this.icon = "ios-arrow-dropup-circle";
  }
  onCountryBackClick(){
    this.selCountry= null;
  }

  onFICountryClick(country){
    // console.log(country);
    this.FISelCountry = country;
    this.FIselCatogaryList = this.FixedIndexData[country];
  }

  onFiCountryBackClick(){
    this.FISelCountry = null;
  }

  onFixedCatClick(item){
    // console.log(item);
    this.httpclient.get(this.api_url+'/Scores/GetBondMappingStocks/'+item.category).subscribe((res:any[]) =>{
    this.selectedIndexData.length = 0;
    this.unsortedIndexData.length = 0;
    this.headermed = this.roundValue(item.medianCont*100);
    this.SelIndexName = item.category == 'HY'? 'High Yield' : 'Investment Grade';
    document.getElementById('header-circle').style.background = this.getColor(this.roundValue(item.medianCont*100));
    document.getElementById('header-circle').style.color = this.ApplyTextColor(this.roundValue(item.medianCont*100));
    this.compIndexShow = false;
    this.icon = "ios-arrow-dropdown-circle";
    this.parentcard = false;
    res.forEach(e=>{
      this.selectedIndexData.push(this.data.filter(x=> x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1)[0]);
      this.unsortedIndexData.push(this.data.filter(x=> x.stockKey == e.stockKey && x.indexName.indexOf('New Age Alpha') == -1)[0]);
    });
    // console.log(this.selectedIndexData);
    // console.log(this.unsortedIndexData);
    this.unsortedIndexData.sort((a,b)=>{
      return a.scores - b.scores;
    })
     this.sortComp(this.filterby);
    });
  }

  onSortClick(){
    var tempOrientation:any;
    if(this.showFilter == false){
      this.showFilter = true;
      if(this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT_SECONDARY){
        $('#parent-content').css('--overflow','');
      }else{
        // document.getElementById('parent-content').scrollTo(0,0);
        $('#SlideDiv').css('position','fixed');
        $('#parent-content').css('--overflow','hidden');
      }      
      // if(this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY){
      // $('#parent-content').css('--overflow','hidden');
      tempOrientation = this.screenOrientation.onChange().subscribe(
        () => {
          if(this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.PORTRAIT_SECONDARY){
            $('#SlideDiv').css('position','');
            $('#parent-content').css('--overflow','');
            tempOrientation.unsubscribe();
          }else{
            // this.parentContent.scrollToTop();
            if(this.showFilter == true){
              $('#SlideDiv').css('position','fixed');
              $('#parent-content').css('--overflow','hidden');
            }
          }      
        }
     );
    
    
    }else{
      this.showFilter = false;
      if(this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY){
        // tempOrientation.unsubscribe();
        $('#SlideDiv').css('position','');
      $('#parent-content').css('--overflow','');
      }
    }
    
  }

  onfilterSelect(key){
    // console.log(evt);
    if(this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY){
      $('#parent-content').css('--overflow','');
      }
    if(key == 'C'){
      if(this.filterby == 'C_LTH'){
        this.filterby = 'C_HTL';
      }else{
        this.filterby = 'C_LTH';
      }
    }else if(key == 'HF'){
      if(this.filterby == 'HF_LTH'){
        this.filterby = 'HF_HTL';
      }else{
        this.filterby = 'HF_LTH';
      }
    }else if(key == 'T'){
      if(this.filterby == 'T_LTH'){
        this.filterby = 'T_HTL';
      }else{
        this.filterby = 'T_LTH';
      }
    }else if(key == 'P'){
      if(this.filterby == 'P_LTH'){
        this.filterby = 'P_HTL';
      }else{
        this.filterby = 'P_LTH';
      }
    }
    this.showFilter = false;
    this.sortComp(this.filterby);
    this.scrollToSel();
  }

  sortComp(type){
    if(type == 'C_LTH'){
      // if(this.selSectorComp.length > 0){
        this.selSectorComp.sort((a,b)=>{
          return a.companyName.localeCompare(b.companyName);
        });
        this.selectedIndexData.sort((a,b)=>{
          return a.companyName.localeCompare(b.companyName);
        });
    }else if(type == 'C_HTL'){
      this.selSectorComp.sort((a,b)=>{
        return b.companyName.localeCompare(a.companyName);
      });
      this.selectedIndexData.sort((a,b)=>{
        return b.companyName.localeCompare(a.companyName);
      });
    }else if(type == 'HF_LTH'){
      this.selSectorComp.sort((a,b)=>{
        return a.scores - b.scores;
      });
      this.selectedIndexData.sort((a, b) => {
        return a.scores - b.scores;
      });
    }else if(type == 'HF_HTL'){
      this.selSectorComp.sort((a,b)=>{
        return b.scores - a.scores;
      });
     this.selectedIndexData.sort((a, b) => {
        return b.scores - a.scores;
      });
      
    }else if(type == 'T_LTH'){
      this.selSectorComp.sort((a,b)=>{
        return a.ticker.localeCompare(b.ticker);
      });
      this.selectedIndexData.sort((a,b)=>{
        return a.ticker.localeCompare(b.ticker);
      });
    }else if(type == 'T_HTL'){
      this.selSectorComp.sort((a,b)=>{
        return b.ticker.localeCompare(a.ticker);
      });
      this.selectedIndexData.sort((a,b)=>{
        return b.ticker.localeCompare(a.ticker);
      });
    }else if(type == 'P_LTH'){
      this.selSectorComp.sort((a,b)=>{
        return a.price - b.price;
      });
      this.selectedIndexData.sort((a, b) => {
        return a.price - b.price;
      });
    }else if(type == 'P_HTL'){
      this.selSectorComp.sort((a,b)=>{
        return b.price - a.price;
      });
      this.selectedIndexData.sort((a, b) => {
        return b.price - a.price;
      });
    }
  }

  ondayclick(day){
    this.selDay = day;
  }

  isAlertexist(key){
    let userInfo = {
      userId: this.currentUser.userId,
      stockKey: key
    }

    this.alertService.getAlert(userInfo).subscribe((data)=>{
      if(data[0] != null){
        return 'visible';
      }else{
        return 'hidden';
      }
    }); 
  }
  onlongpress(itm){
    if(this.SelSearchObj == null || this.SelSearchObj != itm){
      this.onCompanyClick(itm);
    }
    let userInfo = {
      userId: this.currentUser.userId,
      stockKey: this.SelSearchObj.stockKey
    }
    this.alertService.getAlert(userInfo).subscribe((data)=>{
      
       this.savedAlert = data[0];
      //  console.log(this.savedAlert)
        if(this.savedAlert != null){
          // console.log(data);
            if(this.savedAlert.daily=='Y') this.selPeriod = 'daily';
  
            if(this.savedAlert.weekly=='Y') this.selPeriod = 'weekly';
  
            if(this.savedAlert.monthly == 'Y') this.selPeriod = 'monthly';
  
            this.selDay = this.savedAlert.weekDay == '0' ? 'monday' : this.savedAlert.weekDay.toString().toLowerCase();;
  
            this.selDate = this.savedAlert.monthDt == '0' ? 1 : this.savedAlert.monthDt;
  
            this.perChecked = this.savedAlert.scoreChange == 'Y' ? true : false;
  
            this.selPer = this.savedAlert.scorePercent == 0? 1 : this.savedAlert.scorePercent;

            this.showSubmit = false;
            this.showAlertSetup = true;
            this.showAlertRemove = true;
        }else{
          this.selPeriod = '';
          this.selDay= 'monday';
          this.selDate = 1;
          this.perChecked = false;
          this.selPer= 1;
          this.showAlertSetup = true;
          this.showAlertRemove = false;
        }
    })
    
    
  }
  /*************** On country Select Start *****************/
  onCountryClick(country){
    this.globalselectedcountryList = this.compglobalCountryInd[country];
    // console.log(this.globalselectedcountryList);
  }
  /*************** On country Select end *****************/
  /*************** Naa Index Name replaces for the display Start *****************/
  getNaaIndex(element) {
    element = element.replace('New Age Alpha ', '');
    element = element.replace(' Index', '');
    return element;
  }
  /*************** Naa Index Name replaces for the display End *****************/

  /*************** Global Index Name replaces for the display Start *****************/
  getGlobalIndex(element) {
    element = element.replace('UR', 'S&P')
    element = element.replace(' Index', '');
    return element;
  }
  /*************** Global Index Name Replaces for the Display End *****************/

  /*************** Background color Start *****************/
  getColor(med) {
    let gc100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    return gc100(med);
  }
  /*************** Background color End *****************/

  /*************** Median Text color Start *****************/
  ApplyTextColor(val) {
    return (val >= 45 && val < 55) ? "#FF9503" : "#fff"
  }
  /*************** Median Text color End *****************/

  ApplyPercentColor(val){
    return (val >=45 && val < 55) ? "#FF9503" : this.getColor(val);
  }
  /*************** Global Index Select Start *****************/
  onglobalIndexClick(i) {
    this.SelIndexName = i;
// setTimeout(() => {
    this.compIndexShow = false;
    this.icon = "ios-arrow-dropdown-circle";
    this.parentcard = false;
    
    this.selectedIndexData = this.globalindexwise[this.globalIndex.indexOf(i)].filter(item => item.indexName == i);
    this.unsortedIndexData = this.globalindexwise[this.globalIndex.indexOf(i)].filter(item => item.indexName == i);
    document.getElementById('header-circle').style.background = this.getColor(this.globalmed[this.globalIndex.indexOf(i)]);
    document.getElementById('header-circle').style.color = this.ApplyTextColor(this.globalmed[this.globalIndex.indexOf(i)]);
    
    this.unsortedIndexData = this.unsortedIndexData.sort((a, b) => {
      return a.scores - b.scores;
    });
    // console.log(this.selectedIndexData);
    this.sortComp(this.filterby);
    // this.sortcompany();
    this.CompLength = this.selectedIndexData.length;
    this.headermed = this.globalmed[this.globalIndex.indexOf(i)];
    // if (this.selComp != undefined) {
    //   setTimeout(() => {
    //     var temp = this.selectedIndexData.filter((item) => item.companyName == this.selComp);
    //     var sectemp = this.selSectorComp.filter((item) => item.companyName == this.selComp);
    //   }, 100);
    // }
    // }, 200);
    
  }
  /*************** Global Index Select End *****************/

  /*************** NewAgeAlpha Index Select Start *****************/
  onNaaIndexClick(i) {
    this.compIndexShow = false;
    this.icon = "ios-arrow-dropdown-circle";
    this.parentcard = false;
    this.SelIndexName = i;
    this.selectedIndexData = this.naaindexwise[this.NAAIndex.indexOf(i)].filter(item => item.indexName == i);
    this.unsortedIndexData = this.naaindexwise[this.NAAIndex.indexOf(i)].filter(item => item.indexName == i);
    document.getElementById('header-circle').style.background = this.getColor(this.naamed[this.NAAIndex.indexOf(i)]);
    document.getElementById('header-circle').style.color = this.ApplyTextColor(this.naamed[this.NAAIndex.indexOf(i)]);
    
    this.unsortedIndexData = this.unsortedIndexData.sort((a, b) => {
      return a.scores - b.scores;
    });
    // this.sortcompany();
    this.sortComp(this.filterby);
    this.CompLength = this.selectedIndexData.length;
    this.headermed = this.naamed[this.NAAIndex.indexOf(i)];
  }
  /*************** New Age Alpha Index Select End *****************/

  /*************** Sort Index ascending Start *****************/
  sortcompany() {
    if (this.SelFilter == "Human Factor Score (ascending)") {
      this.selectedIndexData.sort((a, b) => {
        return a.scores - b.scores;
      })
      // }else if(this.SelFilter == "Human Factor Score (descending)"){
      //   this.selectedIndexData.sort((a,b) => {
      //     return a.scores - b.scores;
      //   });
      //   this.selectedIndexData.reverse();
      // }else if(this.SelFilter == "Company Name (ascending)"){
      //   this.selectedIndexData.sort((a,b) => {
      //     return a.companyName.localeCompare(b.companyName);
      //   });
      // }else if(this.SelFilter == "Company Name (descending)"){
      //   this.selectedIndexData.sort((a,b) => {
      //     return a.companyName.localeCompare(b.companyName);
      //   });
      //   this.selectedIndexData.reverse();
      // }else if(this.SelFilter == "Ticker (ascending)"){
      //   this.selectedIndexData.sort((a,b) => {
      //     return a.ticker.localeCompare(b.ticker);
      //   });

      // }else if(this.SelFilter == "Ticker (descending)"){
      //   this.selectedIndexData.sort((a,b) => {
      //     return a.ticker.localeCompare(b.ticker);
      //   });
      //   this.selectedIndexData.reverse();
    }
  }
  /*************** Sort Index ascending End *****************/

  /*************** After View Start *****************/
  ngAfterViewInit() {
    this.slides = document.getElementById("pageslider");
    // console.log(this.slides);
    this.GetETFValues();
    setTimeout(() => {
      this.onSlide1Click();
    }, 900);
    
  }

  
  /*************** After View End *****************/

  ionViewDidEnter() {
    this.backButtonSubscription = this.plt.backButton.subscribe(()=>{
      navigator['app'].exitApp();
    });
  }
  ionViewWillLeave() {
    this.backButtonSubscription.unsubscribe();
  }

  /*************** ETF Category List Start *****************/
  GetETFValues() {
    this.httpclient.get(this.api_url + "/Scores/GetETFMaster").subscribe((stockIndex: any[]) => {
      this.res = stockIndex;
      this.ETFcategory = stockIndex.map(d => d.category).filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      this.ETFcategory.unshift('All')
      let i = 0;
      this.ETFNameWise = [];
      for (i = 0; i < this.ETFcategory.length; i++) {
        if (this.ETFcategory[i] === "All") {
          var temp = stockIndex;
          this.ETFNameWise.push(temp);
        } else {
          var temp = stockIndex.filter(item => item.category === this.ETFcategory[i]);
          this.ETFNameWise.push(temp);
        }
      }
      this.EtfSearchList.length = 0;
      this.res.forEach(obj => {
        let Etfval = { companyName: obj.etfName, isin: obj.assetId, ticker: obj.ticker, indexName: "ETF", country: obj.category };
        this.EtfSearchList.push(Etfval);
      });
      this.EtfSearchList = this.EtfSearchList.filter(item => item.companyName != null && item.ticker != null);
    });
    this.httpclient.get(this.api_url + "/Scores/GetETFMaster").subscribe((stockIndex: any[]) => {
      var vall = stockIndex.map(item => item.category);
      this.ETFCatagories = vall.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      var i;
      for (i = 0; i < this.ETFCatagories.length; i++) {
        let temp = stockIndex.filter((item) => item.category === this.ETFCatagories[i]);
        this.ETFCatagoriesComp.push(temp);
      }
      // this.GetETFValues();
    })
  }
  /*************** ETF Category List End *****************/

  /*************** ETF Category Median Start *****************/
  getETFCategoryMed(ind) {
    var array = [];
    array = this.ETFNameWise[ind].map(item => item.medianCont);
    array = array.sort();
    if (array.length % 2 === 0) { // array with even number elements
      return (array[array.length / 2] + array[(array.length / 2) - 1]) / 2;
    }
    else {
      return array[(array.length - 1) / 2]; // array with odd number elements
    }
  }
  /*************** ETF Category Median End *****************/

  /*************** ETF Category Selected Start *****************/
  onETFCategoryClick(i) {
    if (i == 'All') {
      this.SelTab = 'ETFChild';
      this.selCategory = i;
      this.ETFNameList = this.res.map(item => item.etfName);
      this.ETFNameFull = this.res;
      this.ETFNameMed = this.ETFNameFull.map(item => this.roundValue(item.medianCont * 100));
      var etfallnametemp = [];
      for (i = 0; i < this.ETFNameList.length; i++) {
        var med: any = this.ETFNameMed[i];
        var name: any = this.ETFNameList[i];
        var t: any = [];
        t = { 'name': name, 'med': med };
        etfallnametemp.push(t);
      }
      this.compETFNameList = etfallnametemp;
      this.compETFNameList.sort((a, b) => {
        return a.med - b.med;
      });
    } else {
      this.SelTab = 'ETFChild';
      this.selCategory = i;
      var tempp = [];
      tempp = this.ETFCatagoriesComp[this.ETFcategory.indexOf(i) - 1];
      // console.log(this.ETFCatagoriesComp);
      this.ETFNameList = tempp.map(item => item.etfName);
      var j;
      for (i = 0; i < this.ETFNameList.length; i++) {
        var temp = this.res.filter(item => item.etfName === this.ETFNameList[i]);
        this.ETFNameFull.push(temp[0]);
      }
      var etfnametemp = [];
      for (i = 0; i < this.ETFNameList.length; i++) {
        var med: any = this.getEtfMed(this.ETFNameList[i]);
        var t: any = [];
        t = { 'name': this.ETFNameList[i], 'med': med }
        etfnametemp.push(t);
      }
      this.compETFNameList = etfnametemp;
      this.compETFNameList.sort((a, b) => {
        return a.med - b.med;
      });
      this.ETFNameMed = this.ETFNameFull.map(item => this.roundValue(item.medianCont * 100));
    }
  }
  /*************** ETF Category Selected End *****************/

  /*************** ETF Median Start *****************/
  getEtfMed(i) {
    if (i == 'All') {
      // var tempmed = this.res.filter(item=>item.e)
    } else {
      //console.log(i);
      var tempmed = this.ETFNameFull.filter(item => item.etfName == i);
      //console.log(tempmed);
      return this.roundValue(tempmed[0].medianCont * 100);
    }
  }
  /*************** ETF Median End *****************/

  /*************** ETF Selected Start *****************/
  onETFNameClick(i) {
    let name = i;
    var tempp = this.ETFNameFull.filter(item => item.etfName == name);
    var CId = tempp[0].assetId;
    this.httpclient.get(this.api_url + "/Scores/GetETFCurrent/" + CId).subscribe((ETFStocks: any[]) => {
      this.SelAssetId = name;
      this.ETFHoldings = [];
      this.unsortedIndexData = [];
      var j = 0;
      for (j = 0; j < ETFStocks.length; j++) {
        var temp = ETFStocks[j];
        var tempData = this.data.filter(item => item.isin === temp.isin);
        if (tempData != "") {
          var temp = tempData[0];
          temp.indexType = "ETF";
          this.ETFHoldings.push(temp);
          this.unsortedIndexData.push(temp);
        }
      }
      this.selectedIndexData = this.ETFHoldings;
      this.headermed = this.getEtfMed(name);
      document.getElementById('header-circle').style.visibility = 'visible';
      document.getElementById('header-circle').style.background = this.getColor(this.getEtfMed(name));
      document.getElementById('header-circle').style.color = this.ApplyTextColor(this.getEtfMed(name));
      this.compIndexShow = false;
      this.icon = "ios-arrow-dropdown-circle";
      this.parentcard = false;
      this.SelIndexName = i;
      this.unsortedIndexData = this.unsortedIndexData.sort((a, b) => {
        return a.scores - b.scores;
      });
      // this.sortcompany();
      this.sortComp(this.filterby);
    });
  }
  /*************** ETF Selected End *****************/

  /*************** Global/NAA Tab Selected Start *****************/
  onNavClick() {
    this.stockCollapse = true;
    this.compIndexShow = true;
    this.icon = "ios-arrow-dropup-circle";
    this.sectorHeadings[1] = 'Index';
  }
  /*************** Global/NAA Tab Selected End *****************/

  /*************** ETF Tab Selected Start *****************/
  onNavETFClick() {
    this.stockCollapse = true;
    this.compIndexShow = true;
    this.icon = "ios-arrow-dropup-circle";
    this.parentcard = true;
    this.sectorHeadings[1] = 'Exchange Traded Funds';
      
    var etfLoaderinterval = setInterval(()=>{
      if(this.ETFCatagoriesComp.length!=0){
        this.showLoader = false;
        clearInterval(etfLoaderinterval);
      }
      
    },100)

    
  }
  /*************** ETF Tab Selected End *****************/

  /*************** GICS Selected UI Start *****************/
  onStockDivClick() {
    if (this.stockCollapse == true) {
      this.stockCollapse = false;
      this.stockIndexShow = false;
      this.compIndexShow = false;
      this.stockIcon = "ios-arrow-dropdown-circle";
      this.icon = "ios-arrow-dropdown-circle";
    }
  }
  /*************** GICS Selected UI Start *****************/

  /*************** GICS DropDown Icon Selection UI Start *****************/
  onStockBtnClick() {
    if (this.stockIndexShow == false) {
      this.stockCollapse = true;
      this.stockIndexShow = true;
      this.stockIcon = "ios-arrow-dropup-circle";
    } else {
      this.stockIndexShow = false;
      this.stockIcon = "ios-arrow-dropdown-circle";
      this.scrollToSel();
    }
  }
  /*************** GICS DropDown Icon Selection UI End *****************/

  /*************** Index DropDown Icon Selection UI Start *****************/
  onCompBtnClick() {
    if (this.compIndexShow == false) {
      this.compIndexShow = true;
      this.stockCollapse = true;
      this.icon = "ios-arrow-dropup-circle";
    } else {
      this.compIndexShow = false;
      this.icon = "ios-arrow-dropdown-circle";
      this.scrollToSel();
    }
  }
  /*************** Index DropDown Icon Selection UI End *****************/

  /*************** Company Selected Start *****************/
  onCompanyClick(e) {
    console.log(e);
    this.selComp = e.companyName;
    this.searchSel = e;
    if(this.SelTab == 'FI'){
      this.SelSearchObj = e;
       this.SelSearchObj.FIName = e.category == 'HY'? 'High Yield' : 'Investment Grade';
      this.getSectorList(e.industry.toString());
      this.onSectorClick(e.industry);
      this.sortComp(this.filterby);
    }else if (e.hasOwnProperty('indexType')) {
        this.getSectorList(e.industry.toString());
        this.SelSearchObj = e;
        this.SelSearchObj.etfName = this.SelIndexName;
        this.onSectorClick(e.industry);
        this.sortComp(this.filterby);
      } else if (e.indexName.indexOf('New Age Alpha ') == -1) {
        this.getSectorList(e.industry.toString());
        this.SelSearchObj = e;  
        this.onSectorClick(e.industry);
        this.sortComp(this.filterby);
      } else {
        var temp = e;
        this.getSectorList(temp.industry.toString());
        this.SelSearchObj = temp;
        this.onSectorClick(temp.industry);
        this.sortComp(this.filterby);
      }
    this.slides.slideTo(0);
  }
  /*************** Company Selected End *****************/

  /*************** Search Result Start *****************/
  searchCompany(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
   
    let text = event.text.trim();
    this.searchedtext = text;
    if(this.SelTab == undefined){
      if(text.length != 0){
        this.LoadsearchList = this.searchList.filter((item)=>{
          return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
        })  
        // console.log(this.LoadsearchList)
      }else{
        this.LoadsearchList.length = 0;
      }
    }else if(this.SelTab == ''){
      // console.log(this.searchList);
      if(text.length != 0){
        this.LoadsearchList = this.searchList.filter((item)=>{
          return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
        })  
        // console.log(this.LoadsearchList)
      }else{
        this.LoadsearchList.length = 0;
      }
    }else if(this.SelTab == 'Global Universe'){
      // console.log(this.searchList);
      if(text.length != 0){
        this.LoadsearchList = this.searchList.filter((item)=>{
          return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
        })  
        // console.log(this.LoadsearchList)
      }else{
        this.LoadsearchList.length = 0;
      }
    }else if(this.SelTab == 'FI'){
      // console.log(this.FISearchList);
      if(text.length != 0){
        this.LoadsearchList = this.FISearchList.filter((item)=>{
          return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
        })  
        // console.log(this.LoadsearchList)
      }else{
        this.LoadsearchList.length = 0;
      }
    }else if(this.SelTab == 'NAA'){
      if(text.length != 0){
        this.LoadsearchList = this.NaaSearchList.filter((item)=>{
          return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
        })  
        // console.log(this.LoadsearchList)
      }else{
        this.LoadsearchList.length = 0;
      }
    }else if(this.SelTab == 'ETF' || this.SelTab == 'ETFChild'){
      // console.log(this.EtfSearchList);
      if(text.length != 0){
        this.LoadsearchList = this.EtfSearchList.filter((item)=>{
          return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) === 0) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) === 0);
        })  
        // console.log(this.LoadsearchList)
      }else{
        this.LoadsearchList.length = 0;
      }
    }

   

    // if (text.length == 0) {
    //   this.searchList = this.searchList.filter(item => item.indexName.indexOf("New Age Alpha") == -1 || item.indexName != null);
    //   this.LoadsearchList = this.searchList.slice(0, 50).map(i => {
    //     return i;
    //   });
    // }else if(text.length != 0){

    //   if(this.SelTab == ''){
    //     event.component.items = [];
    //     event.component.items = this.searchList.filter((item) => {
    //       // console.log(item.ticker.toLowerCase().indexOf(text.toLowerCase()) > -1); 
    //        return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) > -1) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) > -1);
    //     });
    //   }else if(this.SelTab == 'Global Universe'){
        
    //     this.searchList = this.searchList.filter(item => item.indexName.indexOf("New Age Alpha") == -1);
    //     this.LoadsearchList = this.searchList.filter((item) => {
    //       // console.log(item.ticker.toLowerCase().indexOf(text.toLowerCase()) > -1); 
    //        return (item.companyName.toLowerCase().indexOf(text.toLowerCase()) > -1) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) > -1);
    //     });
    //   }

    // }


    // else {
      

    // }
  }
  /*************** Search Result End *****************/

  onSearchClose(event: {
    component: IonicSelectableComponent
  }){
    event.component.searchText = '';
  }

  /***************On Company Selected from Search Result Start *****************/
  onSearchSelect(e) {
    this.selComp = e.companyName;
    this.SelSearchObj = e;
    // console.log(this.SelSearchObj)
    var industryVal = e.industry;
    if( this.SelTab == 'FI'){
      this.getSectorList(industryVal.toString())
      this.onSectorClick(e.industry);
    }else if (e.indexName == "ETF") {
      this.onETFCategoryClick("All");
      this.EtfMed = this.getEtfMed(e.companyName);
      this.SelTab = '';
    } else {
      this.getSectorList(industryVal.toString())
      this.onSectorClick(e.industry);
    }
    this.GridHeaderTitle = false;
    if (e.indexName == 'ETF') {
      this.SelTab = 'ETF';
      this.onETFNameClick(e.companyName);
      this.slides.slideTo(1);
    } else if(this.SelTab == undefined) {
      this.SelTab = 'Global Universe';
      this.onglobalIndexClick(e.indexName);
      this.slides.slideTo(0);
    }else if(this.SelTab == 'Global Universe') {
      // this.SelTab = 'Global Universe';
      this.onglobalIndexClick(e.indexName);
      this.slides.slideTo(0);
    }else if(this.SelTab == 'FI'){
      // console.log(e)
      var temp = this.FIIndexList.filter(item=> item.country === e.fiCountry && item.category === e.fiCategory)[0];
      this.onFixedCatClick(temp);
      // setTimeout(() => {
        this.SelSearchObj.FIName = e.category == 'HY'? 'High Yield' : 'Investment Grade';
      
      this.slides.slideTo(0);
      // }, 2000);
      
      
      // setTimeout(() => {
      //   this.onCompanyClick(e);
      // }, 500);
      
      // console.log(this.FixedIndexData);
    }else if(this.SelTab == 'NAA'){
      this.onNaaIndexClick(e.indexName);
      this.slides.slideTo(0);
    }
    setTimeout(() => {
      this.loadData();
    }, 50);
    // console.log(this.selSectorComp);
  }
  /***************On Company Selected from Search Result End *****************/

  /***************Search Infinite Scroll Activate Start *****************/
  getMoreSearchComp(event: { component: IonicSelectableComponent, text: string }) {
    if(this.LoadsearchList.length > 0){
    let text = (event.text || '').trim().toLowerCase();
    if (this.LoadsearchList.length == this.searchList.length) {
      event.component.disableInfiniteScroll();
      return;
    }
    this.size = this.size + 50;
    if(this.SelTab == 'Global Universe'){
      this.LoadsearchList.length = 0;
      this.LoadsearchList = this.searchList.slice(0, this.size).map(i => {
        return i;
      });
    }else if(this.SelTab == 'FI'){
      this.LoadsearchList.length = 0;
      this.LoadsearchList = this.FISearchList.slice(0, this.size).map(i => {
        return i;
      });
    }else if(this.SelTab == 'NAA'){
      this.LoadsearchList.length = 0;
      this.LoadsearchList = this.NaaSearchList.slice(0, this.size).map(i => {
        return i;
      });
    }else if(this.SelTab == 'ETF' || this.SelTab == 'ETFChild'){
      this.LoadsearchList.length = 0;
      this.LoadsearchList = this.EtfSearchList.slice(0, this.size).map(i => {
        return i;
      });
    }
  }
    event.component.endInfiniteScroll();
  }
  /***************Search Infinite Scroll Activate End *****************/

  /***************Geting GICS List Start *****************/
  getSectorList(data) {
    var indus = data;
    //console.log(indus);
    var i = 2;
    this.sectorList = [];
    while ((i / 2) < 5) {
      var searchkey = indus.substring(0, i);
      var temp = this.dbGICS.filter(item => item.code == searchkey);
      this.sectorList.push(temp[0]);
      i = i + 2;
    }
    //console.log(this.sectorList);
    var temp1 = [];
    if(this.SelSearchObj.hasOwnProperty('FIName')){
      temp1 = [{ 'code': 'Index', 'name': this.SelSearchObj.FIName }];
    }else if(this.SelSearchObj.hasOwnProperty('etfName')){
      temp1 = [{ 'code': 'Index', 'name': this.SelSearchObj.etfName }];
    }else{
      temp1 = [{ 'code': 'Index', 'name': this.SelSearchObj.indexName }];
    }
    this.sectorList.unshift(temp1[0]);
    var temp2 = [];
    temp2 = [{ 'code': 'Global Universe', 'name': 'NAA' }];
    this.sectorList.unshift(temp2[0]);
  }
  /***************Geting GICS List End *****************/

  /*************** On GICS Click Start *****************/
  async onSectorClick(key) {
    console.log(key);
    if (this.stockCollapse == true) {
      this.stockIndexShow = false;
      this.compIndexShow = false;
      this.stockIcon = "ios-arrow-dropdown-circle";
      this.icon = "ios-arrow-dropdown-circle";
    }
    if (key == "Global Universe") {
      console.log('Global Universe');
      this.globalselectorcomp = this.data.filter(item => item.companyName != null && item.indexName.indexOf("New Age Alpha") == -1);
      this.globalselectorcomp.sort((a, b) => {
        return a.scores - b.scores;
      });

      this.selSectorComp = this.globalselectorcomp.slice(0,100);
      // console.log(this.selSectorComp);
      this.unsortselSectorComp = this.globalselectorcomp.slice(0,100);
      this.selSector = this.sectorList[0];
      // console.log(this.selSector);
      this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
      this.stockMed = this.roundValue(this.getMed(this.globalselectorcomp) * 100);
      document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.globalselectorcomp) * 100));
      document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.globalselectorcomp) * 100));
      this.loadData();
      this.sortComp(this.filterby);
      // setTimeout(()=>{
      //   this.content.scrollToPoint(0,500);
      //   console.log("done");
      // },100);
      
      this.scrollToSel();
      // setTimeout(()=>{
      //   console.log(document.getElementById('sectorscrollDiv'));
      //   document.getElementById('sectorscrollDiv').scrollTo(0,1500);
      // },500); 
    }
    else if (key == "Index") {
      console.log('Index');
      this.unsortselSectorComp = this.selectedIndexData;
      this.selSectorComp = this.selectedIndexData;
      // console.log(this.selSectorComp);
      this.selSector = this.sectorList[1];
      // console.log(this.selSector);
      
      
      this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
      // console.log(this.SelSecLevTitle);
      this.stockMed = this.roundValue(this.getMed(this.selSectorComp) * 100);
      document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      this.loadData();
      this.scrollToSel();
      this.sortComp(this.filterby);
    }
      else if(this.SelSearchObj.hasOwnProperty('FIName')){
      console.log('FIName');
      this.fullSectorComp = this.selectedIndexData.filter(item =>
        item.industry.toString().substring(0, key.toString().length) == key
      )
      // console.log(this.fullSectorComp);
        this.unsortselSectorComp = this.fullSectorComp.filter(item => item.companyName != null);
        this.unsortselSectorComp.sort((a, b) => {
          return a.scores - b.scores;
      })
        this.selSectorComp = this.fullSectorComp.filter(item => item.companyName != null);
        this.selSectorComp.sort((a, b) => {
          return a.scores - b.scores;
      })
      this.selSector = this.sectorList[((key.toString().length / 2) - 1) + 2];
      this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
      this.stockMed = this.roundValue(this.getMed(this.selSectorComp) * 100);
      document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      // console.log(this.selSectorComp);
      // console.log(this.unsortselSectorComp);
      this.loadData();
      this.sortComp(this.filterby);
      //   this.scrollToSel();
      // console.log(this.selSectorComp)

    }
    else {
      console.log('else');
      this.fullSectorComp = this.data.filter(item =>
        item.industry.toString().substring(0, key.toString().length) == key
      )
      if (this.SelSearchObj.hasOwnProperty('indexType')) {
        this.fullSectorComp = this.ETFHoldings.filter(item => item.industry.toString().substring(0, key.toString().length) == key);
      }
      else if (this.SelSearchObj.indexName.indexOf("New Age Alpha ") == -1) {
        this.fullSectorComp = this.fullSectorComp.filter(item => item.indexName.indexOf("New Age Alpha") == -1);
      }
      else {
        this.fullSectorComp = this.fullSectorComp.filter(item => item.indexName.indexOf("New Age Alpha") != -1);
      }
      this.selSectorComp = this.fullSectorComp.filter(item => item.indexName == this.SelSearchObj.indexName);
      this.unsortselSectorComp = this.selSectorComp.filter(item => item.companyName != null);
      this.unsortselSectorComp.sort((a, b) => {
        return a.scores - b.scores;
      })
      this.selSectorComp = this.selSectorComp.filter(item => item.companyName != null);
       this.selSectorComp.sort((a, b) => {
         return b.scores - a.scores;
       })
      this.selSector = this.sectorList[((key.toString().length / 2) - 1) + 2];
      this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
      this.stockMed = this.roundValue(this.getMed(this.selSectorComp) * 100);
      document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.selSectorComp) * 100));
      this.loadData();
      this.scrollToSel();
      this.sortComp(this.filterby);
    }
    // this.sortComp(this.filterby);
  }
  /*************** On GICS Click End *****************/

  /*************** Company Replace for ID Start *****************/
  getIDReplace(id) {
    //console.log(id);
    return id.replace(/ /g, '-');
  }
  /*************** Company Replace for ID End *****************/

  /*************** On Pagination Click Start *****************/
  onSlide0Click() {
    this.slides.slideTo(0);
    document.getElementById("slide0dot").style.backgroundColor = "#FFFFFF"
    document.getElementById("slide1dot").style.backgroundColor = "#909090"
  }

  onSlide1Click() {
    this.slides.slideTo(1);
    document.getElementById("slide1dot").style.backgroundColor = "#FFFFFF"
    document.getElementById("slide0dot").style.backgroundColor = "#909090"
  }
  /*************** On Pagination Click End *****************/
  /*************** To slide the Slides/Carousel Start *****************/
  onSlideChange(evt) {
    this.slides.getActiveIndex().then(index => {
      if (index == 0) {
        document.getElementById("slide0dot").style.backgroundColor = "#FFFFFF"
        document.getElementById("slide1dot").style.backgroundColor = "#909090"
      } else {
        document.getElementById("slide1dot").style.backgroundColor = "#FFFFFF"
        document.getElementById("slide0dot").style.backgroundColor = "#909090"
      }
    });
  }
  /*************** To slide the Slides/Carousel End *****************/
  /*************** Scroll to the Selected Company Start *****************/
  scrollToSel() {
    if (this.selComp != undefined) {
      setTimeout(() => {
        var temp = this.selectedIndexData.filter((item) => item.companyName == this.selComp);
        var index = this.selectedIndexData.indexOf(temp[0]) + 1;
        var indheight = document.getElementById('IndexCompanyDiv').clientHeight;
        var manInd = (index * 45) - (indheight/2);
        
        // manInd = manInd;
        // console.log(manInd);
        document.getElementById('scrollDiv').scrollTo(0, manInd);
        var sectemp = this.selSectorComp.filter((item) => item.companyName == this.selComp);
        var secInd = this.selSectorComp.indexOf(sectemp[0]) + 1;
        // var mansecInd = (secInd * 42) - 240;
        setTimeout(()=>{
          var stcheight = document.getElementById('stockCompanyDiv').clientHeight;
          var mansecInd = (secInd * 45) - (stcheight/2);
          // console.log(mansecInd + height);
          document.getElementById('sectorscrollDiv').scrollTo(0, mansecInd);
        },500);
      }, 100);
    }
  }
  /*************** Scroll to the Selected Company End *****************/
  loadStockData(event) {
    // console.log("Done");
    event.target.complete();
    // setTimeout(()=>{
    //   console.log("Done");
    //   //event.target.complete();
    // },200);
  }

  /*************** Banner Tool Start*****************/
  M_gchart: any;
  M_chartMain: any = [];
  M_selResData: any = [];
  M_tradeDt: string = "";
  radius = 170;
  M_Companies: any = [];

  loadData() {
    
    this.M_gchart = d3.select("#M_gchart");
    this.M_chartMain = this.M_createMainChart(this.M_gchart);
  }

  M_createMainChart(obj) {
    d3.select("#maincircle").remove();
    d3.select("#crlChart").remove();

    var grp1 = obj.append("g").attr("id", "crlChart");
    grp1.append("circle")
      .attr("id", "maincircle")
      .attr("class", "start-ring")
      .attr("r", 0)
      .attr("fill", "#fff");

    this.M_CreateData();

    return grp1;
  }

  M_CreateData() {
    var that = this;
    var dbScore: any = [];
    if (that.selSector.code != "Index" && that.selSector.code != "Global Universe" && this.sectorList.indexOf(this.selSector) != 2) {
      // console.log('true part');
      dbScore = this.selSectorComp;
    }
    else {
      // console.log('false part');
      dbScore.push(this.SelSearchObj);
    }
    this.M_selResData = dbScore.sort((a, b) => {
      return a.scores - b.scores;
    });
    // console.log(this.selSectorComp);
    // console.log(dbScore);
    let tradeDt = dbScore[0].tradeDate;
    this.M_tradeDt = tradeDt.slice(4, 6) + "/" + tradeDt.slice(6, 8) + "/" + tradeDt.slice(0, 4);
    this.M_selResData.forEach(function (d, i) {
      d.score = d.scores * 100;
      d.deg = d.score;
      d.indname = d.industry;
      d.companyName = d.companyName.trim();
      d.company = d.companyName != null ? d.companyName.toUpperCase() : null;
      d.ticker = d.ticker;
      return d.score, d.stockKey, d.industry, d.deg, d.company, d.ticker, d.indname, d
    });
    d3.select(".ringAnim").style("display", "none").remove();
    d3.select(".preloding").style("display", "none").remove();
    d3.select("#maincircle")
      .transition()
      .delay(50)
      .attr('r', that.radius - 10)
      .style('stroke-width', '40px')

      .on("end", function () {
        d3.select("#maincircle")
          .transition()
          .duration(10)
          .style('opacity', '0')
        that.M_creatGradienArc();
        that.M_Companies = that.M_selResData;
        that.M_CreateComps(that.M_chartMain, that.M_selResData, "lvl1");
      });
  }

  M_creatGradienArc() {
    var gArc = d3.select("#crlChart").append("g");
    var arc = d3.arc()
      .innerRadius(this.radius - 40)
      .outerRadius(this.radius - 0);
    var colors = [];
    var color1 = d3.scaleLinear()
      .domain([0, 1, 2, 3, 4])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);
    var linearGradient = gArc.append("defs");

    var linearG1 = linearGradient.append("linearGradient");
    linearG1.attr("id", "linearColors0")
      .attr("x1", "0").attr("y1", "0").attr("x2", ".5").attr("y2", "1");
    linearG1.append("stop").attr("offset", "0%").attr("stop-color", color1(0));
    linearG1.append("stop").attr("offset", "100%").attr("stop-color", color1(1));

    var linearG2 = linearGradient.append("linearGradient");
    linearG2.attr("id", "linearColors1")
      .attr("x1", "0.8").attr("y1", "0").attr("x2", "0.5").attr("y2", "0.8");
    linearG2.append("stop").attr("offset", "0%").attr("stop-color", color1(1));
    linearG2.append("stop").attr("offset", "100%").attr("stop-color", color1(2));

    var linearG3 = linearGradient.append("linearGradient");
    linearG3.attr("id", "linearColors2")
      .attr("x1", "0.8").attr("y1", "0.8").attr("x2", "0").attr("y2", "0.3");
    linearG3.append("stop").attr("offset", "0%").attr("stop-color", color1(2));
    linearG3.append("stop").attr("offset", "100%").attr("stop-color", color1(3));

    var linearG4 = linearGradient.append("linearGradient");
    linearG4.attr("id", "linearColors3")
      .attr("x1", "0").attr("y1", "0.9").attr("x2", "0").attr("y2", "0.1");
    linearG4.append("stop").attr("offset", "0%").attr("stop-color", color1(3));
    linearG4.append("stop").attr("offset", "100%").attr("stop-color", color1(4));

    d3.range(4).forEach(function (d, i) {
      // convert to radians
      var start = (i * 89) * (Math.PI / 180),
        end = ((i * 89.9) + 90) * (Math.PI / 180);
      colors.push({
        startAngle: start,
        endAngle: end
      });
    });
    var returnValue = 'url(' + this.currenturl + '#linearColors';
    gArc.selectAll('.arc')
      .data(colors)
      .enter()
      .append('path')
      .attr('class', 'arc')
      .attr('d', arc)
      .attr('stroke', 'none')
      .attr('fill', function (d, i) { return returnValue + i + ')'; });

    gArc.append("rect")
      .attr("height", "60px")
      .attr("class", "crect_MW")
      .attr("fill", "#fff")
      .attr("x", -5)
      .attr("y", -173)
      //.attr("rx", 15)
      .attr("width", 10)
      .transition()
      .duration(2000)
  }

  M_CreateComps(oSvg, dta, lvl) {
    var that = this;
    var M_compLst;
    var gExist = d3.select(".M_compLst" + lvl)._groups[0];
    if (gExist != "") {
      M_compLst = oSvg.select('.M_compLst' + lvl).remove();
    }
    M_compLst = oSvg.append("g").attr('class', 'compList M_compLst' + lvl).style("display", "block");

    var M_compC = M_compLst.append("g").attr("class", 'M_compLstC' + lvl);

    var M_compg = M_compC.selectAll("g")
      .data(dta)
      .enter().append("g")
      .attr("class", "comp")
      .attr("transform", function (d, i) { return "rotate(" + ((d.deg * 360 / 100) - 90) + ")"; })
      .attr("name", function (d) { return d.stockKey })

    M_compg.append("rect")
      .attr("height", "10px")
      .attr("class", "crect_MW")
      .attr("fill", "#fff")
      .attr("x", that.radius - 42)
      .attr("y", 2)
      .attr("width", 50)
      .transition()
      .duration(2000)

    M_compg.append("rect")
      .attr("height", "27px")
      .attr("class", "crect_M")
      .attr("fill", function (d) {

        let gC100 = d3.scaleLinear()
          .domain([0, 25, 50, 75, 100])
          .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])
        var scr = d.scores * 100;
        return gC100(scr);
      })
      .attr("id", function (d) {
        if (d.companyName == that.selComp) {
          return d.id = "SelectedCmpyCirlce";
        }
        else {
          return d.id = "";
        }
      })
      .attr("x", that.radius + 20)
      .attr("rx", 15)
      .attr("width", 70)
      .transition()
      .duration(2000)

    d3.select("#SelectedCmpyCirlce")
      .attr("height", 60)
      .attr("width", 150)
      .attr("rx", 30)
      .attr("y", -18)
  }
/*************** Banner Tool End *****************/

onscroll(event){
  //event.target.
  setTimeout(()=>{
    console.log(event)
    console.log("scroll running");
    if(this.selSector.code=='Global Universe'){
      if(this.selSectorComp.length != this.globalselectorcomp.length){
        this.globalSize = this.globalSize+100;
        this.selSectorComp = this.globalselectorcomp.slice(0,this.globalSize);
        this.unsortselSectorComp = this.globalselectorcomp.slice(0,this.globalSize);
        // console.log(this.unsortselSectorComp);
      event.target.complete();
      if(this.selSectorComp.length == this.globalselectorcomp.length){
        event.target.disabled = true;
      }
    }else{
      event.target.disabled = true;
    }
    }
    
    
  },500);
  

}

onClick(){
  this.route.navigateByUrl('/test');
}

onLogoutClick(){
  this.authService.logout();
}

  async profilePopover(e:any){
    // console.log("presenting profile Details");
  const popover = await this.popoverController.create({
    component:ProfiledetailsComponent,
    event : e,
    translucent: true,
    cssClass:'Custom_profile'
  });

  return await popover.present();
}
}