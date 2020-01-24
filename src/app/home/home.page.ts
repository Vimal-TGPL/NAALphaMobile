import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Platform, IonSlides } from '@ionic/angular';
import * as d3 from 'd3';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { getTestBed } from '@angular/core/testing';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit {

  @ViewChild(IonSlides) slides: IonSlides;

  compETFNameList:any = [];
  comNAAIndex:any = [];
  comGlobalIndex:any =[];
  stockMed:any;
  GridHeaderTitle:boolean = true;
  selSector:any=[];
  SelSecLevTitle:any = 'Sub Industry';
  fullSectorComp:any =[];
  SelSearchObj:any = [];
  selSectorComp:any = [];
  sectorList:any = [];
  dbGICS:any=[];
  size:any=50;
  EtfMed:any;
  searchList:any=[];
  LoadsearchList:any=[];
  searchSel:string ="";
  selComp:string;
  compIndexShow:boolean = false;
  stockIndexShow:boolean = false;
  stockIcon:string = "ios-arrow-dropdown-circle";
  stockCollapse:boolean = false;
  slideOptions:any;
  api_url = environment.api_url;
  //private tok:String;
  SelAssetId:any;
  currentUser:any = null;
  data:any;
  user:any;
  SelTab:string;
  icon:string= 'ios-arrow-dropdown-circle';
  sorticon:string = 'arrow-dropdown'
  indexclick:boolean=true;
  parentcard:boolean=false;
  SelFilter: string = 'Human Factor Score (ascending)';
  sortDisable:boolean = true;
  sortcard:boolean=true;
  selCategory:any;
  CompLength:any='';
  heightcard:any='250px';
  NAAIndex:any = [];
  globalIndex:any = [];
  ETFCatagories:any =[];
  ETFHoldings:any = [];
  globalindexwise:any = [];
  naaindexwise:any =[];
  globalmed:any=[];
  naamed:any=[];
  ETFNameWise:any=[];
  ETFNameList:any=[];
  res:any=[];
  ETFCatagoriesComp:any=[];
  SelIndexName:string = '';
  unsortedIndexData:any=[];
  headermed:any;
  selectedIndexData:any=[];
  ETFcategory:any=[];
  ETFNameMed:any = [];
  ETFNameFull:any=[];
  showLoader:any = true;
  sectorHeadings:any = ['Sector','Industry Group','Industry','Sub Industry'];
  FilterList: any = [
    { "Name": 'Company Name (ascending)', "value": "1" },
    { "Name": 'Company Name (descending)', "value": "2" }, 
    { "Name": 'Human Factor Score (ascending)', "value": "3" }, 
    { "Name": 'Human Factor Score (descending)', "value": "4" }, 
    { "Name": 'Ticker (ascending)', "value": "5" }, 
    { "Name": 'Ticker (descending)', "value": "6" }];
  ngOnInit() {
    this.createData();
    this.GetETFValues();
    // this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL").subscribe( (res:any[]) => {
    //   this.data =  res;
    //   console.log(this.data);
    // }, err => {
    //   this.data = err.statusText ;
    //   console.log(err);
    // });
  }

  constructor(private screenOrientation:ScreenOrientation, private authService: AuthenticationService, public storage: Storage, private httpclient: HttpClient, private plt:Platform) {
    this.currentUser =  this.authService.currentUserValue();
    //console.log(this.screenOrientation.type);
    if(this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY){
      this.stockCollapse = true;
    }
    this.screenOrientation.onChange().subscribe(
      () => {
          if(this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY || this.screenOrientation.type == this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY){
            this.stockCollapse = true;
          }
      }
   );
   //document.getElementById("slide0dot").style.color="#FFFFFF";
    //IonicSelectableComponent
    //console.log(this.currentUser);
  }

  onClick(){
    if(this.icon == 'arrow-dropdown')
    {
      this.indexclick = false;
      this.parentcard=true;
      this.icon = 'arrow-dropup';
      if(this.sortcard==false){
        this.sortcard = true;
        this.sorticon = 'arrow-dropdown';
      }
    }else{
      this.indexclick = true;
      this.parentcard=false;
      this.icon = 'arrow-dropdown';
    }
   // console.log(this.parentcard);
    
  }
   
  onsortClick(){
    if(this.sorticon == 'arrow-dropdown')
    {
      this.sortcard = false;
      this.indexclick = true;
      this.parentcard=true;
      this.sorticon = 'arrow-dropup';
      if(this.sortcard==false)
      {
      this.indexclick = true;
      this.icon = 'arrow-dropdown';
      }
    }else{
      this.parentcard=false;
      this.sortcard = true;
      this.sorticon = 'arrow-dropdown';
    }
  }

  onSortItemClick(val:any){
      //console.log(val);
      this.sortcompany();
      if(this.sortcard == false)
      {
        this.sortcard = true;
        this.sorticon = 'arrow-dropdown';
        //this.indexclick = false;// index dropdown
        this.indexclick = true;
        this.parentcard = false;
      }

  }

  ETFNavClick(){
    //if()
    this.indexclick = false;
    this.parentcard=true;
    this.icon = 'arrow-dropup';
    if(this.sortcard==false)
      {
        this.sorticon = 'arrow-dropdown';
        this.sortcard = true;
      }
    //console.log("ETF clicked");
    this.GetETFValues();
    this.httpclient.get(this.api_url+"/Scores/GetETFMaster").subscribe((stockIndex: any[]) =>{
      //console.log(stockIndex);x
     
      var val = stockIndex.filter(item=>{

        return item.category;
        
        //return item.category;
      });
      var vall = stockIndex.map(item=> item.category);
      this.ETFCatagories = vall.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
    var i;
    var j;
    
    for(i=0; i < this.ETFCatagories.length; i++){
    let temp = stockIndex.filter((item)=> item.category === this.ETFCatagories[i]);
    this.ETFCatagoriesComp.push(temp);
    }

    //console.log(finalval);
    //console.log(this.ETFCatagories);
    //console.log(this.roundValue(this.getMed(finalval[0]) * 100));
    //this.ETFCatagories[0] = this.roundValue(this.getMed(ETFCatagoriesComp[0]) * 100);
    //console.log(ETFCatagoriesComp);
    this.showLoader = false;
  })
}

getMed(array:any){

  array = array.map(item=> item.scores) ;
    //return array.filter(d=>{d.medianCont});
    array = array.sort();
    if (array.length % 2 === 0) { // array with even number elements
      return (array[array.length/2] + array[(array.length / 2) - 1]) / 2;
    }
    else {
      return array[(array.length - 1) / 2]; // array with odd number elements
    }
  }

  roundValue(val) {
    return (Math.round(val * 10) / 10).toFixed(1);
  }

  createData(){
    this.httpclient.get(this.api_url+"/Industry/GetIndustry").subscribe((res:any[]) =>{
      this.dbGICS = res;
     // console.log(this.dbGICS);
    });
    this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL").subscribe( (res:any[]) => {
      this.data =res;
      this.searchList = this.data.filter(item=> item.companyName != null);
      this.searchList = this.searchList.filter(item=> item.indexName.indexOf("New Age Alpha") == -1);
      this.LoadsearchList = this.searchList.slice(0,50).map(i=>{
        return i;
      })
      //console.log(this.LoadsearchList);
      let filteredData = this.data.map(item=> item.indexName);
      let TotalIndex = filteredData.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      })
      TotalIndex.forEach((element:String) => {
        if(element.includes('New Age Alpha')){
          
          this.NAAIndex.push(element);
        }else{
          //element = element.replace(' Tndex','');
          
          this.globalIndex.push(element);
        }
      }); 
     // console.log(this.globalIndex);
      var i;
      
      //let temp = data.filter(item => item.)
      for(i=0; i < this.globalIndex.length; i++){
        let temp = this.data.filter((item)=> item.indexName === this.globalIndex[i]);
        this.globalindexwise.push(temp);
        }

        for(i=0; i < this.NAAIndex.length; i++){
          let temp = this.data.filter((item)=> item.indexName === this.NAAIndex[i]);
          this.naaindexwise.push(temp);
          }
      //let indexwise = 
      //this.getMed
      
      for(i=0;i < this.globalIndex.length;i++ ){
      this.globalmed.push(this.roundValue(this.getMed(this.globalindexwise[i]) * 100));
      }
     // console.log(this.globalmed);
      let globaltemp = [];
      for(i=0;i<this.globalIndex.length;i++){
        let t:any = [];
        t = {'name':this.globalIndex[i],'med':this.globalmed[i]}
        globaltemp.push(t);
      }
      this.comGlobalIndex = globaltemp;
      //console.log(this.comGlobalIndex);
      this.comGlobalIndex.sort((a,b) => {
        return a.med - b.med;
      });
     // console.log(this.comGlobalIndex);
      for(i=0;i < this.NAAIndex.length;i++ ){
        this.naamed.push(this.roundValue(this.getMed(this.naaindexwise[i]) * 100));
        }
      let naatemp = [];
      for(i=0;i<this.NAAIndex.length;i++){
        let t:any = [];
        t = {'name':this.NAAIndex[i],'med':this.naamed[i]};
        naatemp.push(t);
      }
      this.comNAAIndex = naatemp;
      this.comNAAIndex.sort((a,b) => {
        return a.med - b.med;
      });
     // console.log(naatemp);
      this.showLoader = false;
      this.GetETFValues();
      // //this.SelTab='Global';
      // console.log(this.globalmed);
      // console.log(this.naamed);
      // //console.log(med);
      // //console.log(this.indexwise);
      // console.log(this.globalindexwise);
      // console.log(this.naaindexwise);
      // console.log(this.data);
      // //console.log(filteredData);
      // //console.log(TotalIndex);
      // console.log(this.NAAIndex);
      // console.log(this.globalIndex);
    })
  }

  NavClick(){
    this.indexclick = false;
    this.parentcard = true;
    if(this.data === null){
    this.showLoader = true;
    }
    this.icon = 'arrow-dropup';
    if(this.sortcard==false)
      {
        this.sorticon = 'arrow-dropdown';
        this.sortcard = true;
      }
  }

  getNaaIndex(element){
    element = element.replace('New Age Alpha ','');
    element = element.replace(' Index','');
    return element;
  }

  getGlobalIndex(element){
    element = element.replace('UR','S&P')
    element = element.replace(' Index','');
    return element;
  }

perc2color(p) {
    var red = p<50 ? 255 : Math.round(256 - (p-50)*5.12);
    var green = p>50 ? 255 : Math.round((p)*5.12);
    //console.log(red,green)
    return "rgb(" + red + "," + green + ",0)";
} 

getColor(med){
  let gc100 = d3.scaleLinear()
  .domain([0, 25, 50, 75, 100])
  .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

  return gc100(med);
}

ApplyTextColor(val) {
  return (val >= 45 && val < 55) ? "#FF9503" : "#fff"
}

onglobalIndexClick(i){
  this.selectedIndexData = this.globalindexwise[this.globalIndex.indexOf(i)].filter(item => item.indexName == i);
  this.unsortedIndexData = this.globalindexwise[this.globalIndex.indexOf(i)].filter(item => item.indexName == i);
  //console.log(i);
  //console.log(this.globalmed[this.globalIndex.indexOf(i)]);
  //document.getElementById('header-circle').style.visibility='visible';
 document.getElementById('header-circle').style.background=this.getColor(this.globalmed[this.globalIndex.indexOf(i)]);
 document.getElementById('header-circle').style.color=this.ApplyTextColor(this.globalmed[this.globalIndex.indexOf(i)]);
 // i = i.replace('UR','S&P');
  //console.log(i);
  this.SelIndexName = i;
  // if(this.indexclick==false){
  //   this.indexclick = true;
  //   this.icon = 'arrow-dropdown'
  // }
  this.compIndexShow = false;
  this.icon = "ios-arrow-dropdown-circle";
  this.parentcard = false;
  //let selectedIndexData = this.globalindexwise.filter(item => item.indexName == i);
  //console.log(this.selectedIndexData);
  //console.log(this.unsortedIndexData);
  this.unsortedIndexData = this.unsortedIndexData.sort((a,b)=>{
    return a.scores - b.scores;
  });
  //console.log(this.unsortedIndexData);
  this.sortcompany();
  this.CompLength = this.selectedIndexData.length;
  this.headermed = this.globalmed[this.globalIndex.indexOf(i)];
  if(this.selComp!=''){
    // console.log(this.selComp);
    // console.log(this.getIDReplace(this.selComp));
    // document.addEventListener('DOMContentLoaded', function() {
    //   var topPos = document.getElementById(this.getIDReplace(this.selComp)).offsetTop;
    // console.log(topPos);
    // });
  }
}

onNaaIndexClick(i){
  this.selectedIndexData = this.naaindexwise[this.NAAIndex.indexOf(i)].filter(item => item.indexName == i);
  this.unsortedIndexData = this.naaindexwise[this.NAAIndex.indexOf(i)].filter(item => item.indexName == i);
  //document.getElementById('header-circle').style.visibility='visible';
 document.getElementById('header-circle').style.background=this.getColor(this.naamed[this.NAAIndex.indexOf(i)]);
 document.getElementById('header-circle').style.color=this.ApplyTextColor(this.naamed[this.NAAIndex.indexOf(i)]);
 //console.log(this.ApplyTextColor(this.naamed[this.NAAIndex.indexOf(i)]));
  // if(this.indexclick==false){
  //   this.indexclick = true;
  //   this.icon = 'arrow-dropdown'
  // }
  this.compIndexShow = false;
  this.icon = "ios-arrow-dropdown-circle";
  this.parentcard = false;
  this.SelIndexName = i;
  this.unsortedIndexData = this.unsortedIndexData.sort((a,b)=>{
    return a.scores - b.scores;
  });
  this.sortcompany();
  this.CompLength = this.selectedIndexData.length;
  this.headermed = this.naamed[this.NAAIndex.indexOf(i)];
  //$('header-comp-span').css('visibility', 'visible');
  //console.log(i);
}

sortcompany(){
  //this.SelIndexName.sort((a,b)=>{})
  if(this.SelFilter == "Human Factor Score (ascending)"){
  this.selectedIndexData.sort((a,b) => {
    return a.scores - b.scores;
    //this.unsortedIndexData = this.selectedIndexData;
  })
}else if(this.SelFilter == "Human Factor Score (descending)"){
  this.selectedIndexData.sort((a,b) => {
    return a.scores - b.scores;
  });
  this.selectedIndexData.reverse();
}else if(this.SelFilter == "Company Name (ascending)"){
  this.selectedIndexData.sort((a,b) => {
    return a.companyName.localeCompare(b.companyName);
  });
}else if(this.SelFilter == "Company Name (descending)"){
  this.selectedIndexData.sort((a,b) => {
    return a.companyName.localeCompare(b.companyName);
  });
  this.selectedIndexData.reverse();
}else if(this.SelFilter == "Ticker (ascending)"){
  this.selectedIndexData.sort((a,b) => {
    return a.ticker.localeCompare(b.ticker);
  });
  
}else if(this.SelFilter == "Ticker (descending)"){
  this.selectedIndexData.sort((a,b) => {
    return a.ticker.localeCompare(b.ticker);
  });
  this.selectedIndexData.reverse();
}
}
ngAfterViewInit(){
  this.GetETFValues();
}

GetETFValues(){
  this.httpclient.get(this.api_url+"/Scores/GetETFMaster").subscribe((stockIndex:any[])=>{
    this.res = stockIndex;
    this.ETFcategory = stockIndex.map(d=> d.category).filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
    
    this.ETFcategory.unshift('All')
    //console.log(this.ETFcategory);
    let i = 0;
    this.ETFNameWise= [];
     for(i=0; i<this.ETFcategory.length; i++)
     {
       if(this.ETFcategory[i]==="All"){
        var temp = stockIndex;
        this.ETFNameWise.push(temp);
       }else{
      var temp = stockIndex.filter(item=>item.category === this.ETFcategory[i]);
      this.ETFNameWise.push(temp);
     }
     }
     this.res.forEach(obj=>{
      let Etfval = { companyName: obj.etfName, isin: obj.assetId, ticker: obj.ticker, indexName: "ETF", country: obj.category };
      this.searchList.push(Etfval);
    });
     //console.log(this.res);
     //console.log(this.ETFNameFull);
    //console.log(this.ETFNameWise);
    //console.log();
    //console.log(temp);
    //console.log(this.roundValue(this.getETFCategoryMed()*100));
  });
}

getETFCategoryMed(ind){
  //console.log(ind);
  var array = [];
  array = this.ETFNameWise[ind].map(item=>item.medianCont);
  //console.log(this.ETFNameWise);
  //console.log(array);
  array = array.sort();
    if (array.length % 2 === 0) { // array with even number elements
      return (array[array.length/2] + array[(array.length / 2) - 1]) / 2;
    }
    else {
      return array[(array.length - 1) / 2]; // array with odd number elements
    }
  //var val = this.getMed(temp);
  //console.log(val);
}

getETFNameMed(){

}

onETFCategoryClick(i){
  if(i=='All')
  {
  this.SelTab='ETFChild';
  this.selCategory=i;
  
  this.ETFNameList = this.res.map(item=>item.etfName);
  this.ETFNameFull = this.res;
  //console.log(this.ETFNameList);
  this.ETFNameMed = this.res.map(item=>this.roundValue(item.medianCount*100));
  }else{
 //console.log('ETF Category Clicked'+" "+i);
  this.SelTab='ETFChild';
  this.selCategory=i;
  var tempp =[];
  tempp = this.ETFCatagoriesComp[this.ETFcategory.indexOf(i)-1];
  //console.log(tempp);
  this.ETFNameList = tempp.map(item=>item.etfName);
 // console.log(this.ETFNameList);
  
  var j;
     for(i=0; i<this.ETFNameList.length; i++)
     {
       var temp = this.res.filter(item=>item.etfName === this.ETFNameList[i]);
       this.ETFNameFull.push(temp[0]);
     }
     var etfnametemp = [];
     for(i=0;i<this.ETFNameList.length;i++){
       var med:any = this.getEtfMed(this.ETFNameList[i]);
        var t:any = [];
        t={'name':this.ETFNameList[i],'med':med}
        etfnametemp.push(t);
     }
     this.compETFNameList = etfnametemp;
     console.log(this.compETFNameList);
     this.compETFNameList.sort((a,b) => {
      return a.med - b.med;
    });
    // console.log(this.ETFNameList);
    //console.log(this.ETFNameFull);
    //var ETFNameMed = ETFNameFull.map(item => item.medianCont);
    //console.log(ETFNameMed);
    //console.log(ETFNameFull[this.ETFNameList.indexOf(i)].)

    this.ETFNameMed = this.ETFNameFull.map(item=>this.roundValue(item.medianCont*100));
  }

    // for(i=0;i<this.ETFNameFull.length;i++)
    // {
    //   temp = this.ETFNameFull[i];
    //   this.ETFNameMed.push(this.roundValue((temp[0].medianCont)*100));
    // }
   // console.log(this.ETFNameMed);
}

getEtfMed(i)
{
  if(i=='All'){
   // var tempmed = this.res.filter(item=>item.e)
  }else{
  //console.log(i);
  var tempmed =  this.ETFNameFull.filter(item=> item.etfName== i);
   //console.log(tempmed);
  return this.roundValue(tempmed[0].medianCont*100);
  }
}

onETFNameClick(i){
  let name = i;
  //console.log(this.ETFNameFull);
  //var tempp = this.ETFNameFull[this.ETFNameList.indexOf(i)];
  //console.log(tempp);
  var tempp = this.ETFNameFull.filter(item=> item.etfName == name);
 // console.log(tempp);
  var CId = tempp[0].assetId;
 // console.log(CId);
  this.httpclient.get(this.api_url+"/Scores/GetETFCurrent/"+CId).subscribe((ETFStocks:any[])=>{
  //  console.log(ETFStocks);
    this.SelAssetId = name;
    this.ETFHoldings = [];
    this.unsortedIndexData = [];
    var j=0;
    for(j=0;j<ETFStocks.length;j++){
      var temp = ETFStocks[j];
      var tempData = this.data.filter(item=> item.isin === temp.isin);
      if(tempData != "")
      {
        this.ETFHoldings.push(tempData[0]);
        this.unsortedIndexData.push(tempData[0]);
      }
    }
    this.selectedIndexData = this.ETFHoldings;
    this.headermed = this.getEtfMed(name);
   // console.log(this.headermed);
    document.getElementById('header-circle').style.visibility='visible';
    document.getElementById('header-circle').style.background=this.getColor(this.getEtfMed(name));
    document.getElementById('header-circle').style.color=this.ApplyTextColor(this.getEtfMed(name));
    //this.unsortedIndexData = this.ETFHoldings;
  //  console.log(this.ETFHoldings);
    this.compIndexShow = false;
  this.icon = "ios-arrow-dropdown-circle";
  //this.parentcard = false;
    this.parentcard = false;
    this.SelIndexName = i;
   // console.log(this.SelIndexName);
    this.unsortedIndexData = this.unsortedIndexData.sort((a,b)=>{
      return a.scores - b.scores;
    });
    this.sortcompany();
    //this.SelIndexName = i;
  //  console.log(this.ETFHoldings);
  });
}

onNavClick(){
  this.stockCollapse = true;
  this.compIndexShow= true;
  this.icon = "ios-arrow-dropup-circle";
}

onNavETFClick(){
  this.stockCollapse = true;
  this.compIndexShow= true;
  this.icon = "ios-arrow-dropup-circle";
    this.parentcard=true;
    this.GetETFValues();
    this.httpclient.get(this.api_url+"/Scores/GetETFMaster").subscribe((stockIndex: any[]) =>{
      var vall = stockIndex.map(item=> item.category);
      this.ETFCatagories = vall.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
    var i;
    
    for(i=0; i < this.ETFCatagories.length; i++){
    let temp = stockIndex.filter((item)=> item.category === this.ETFCatagories[i]);
    this.ETFCatagoriesComp.push(temp);
    }
    this.showLoader = false;
  })
  //console.log(this.SelTab);
}
onStockDivClick(){
  if(this.stockCollapse == true){
    this.stockCollapse = false;
    this.stockIndexShow= false;
    this.compIndexShow= false;
    this.stockIcon = "ios-arrow-dropdown-circle";
    this.icon = "ios-arrow-dropdown-circle";
  }
  //console.log("stock div clicked");
}

onStockBtnClick(){
  if(this.stockIndexShow == false)
  {
  this.stockCollapse = true;
  this.stockIndexShow = true;
  this.stockIcon = "ios-arrow-dropup-circle"; 
  }else{
    this.stockIndexShow = false;
    this.stockIcon = "ios-arrow-dropdown-circle";
  }
}

onCompBtnClick(){
  if(this.compIndexShow == false)
  {
    this.compIndexShow= true;
    this.stockCollapse = true;
    this.icon = "ios-arrow-dropup-circle";
  }else{
    this.compIndexShow = false;
    this.icon = "ios-arrow-dropdown-circle";
    
  }
}

onCompanyClick(e){
  this.selComp = e.companyName;
  this.searchSel = e;
 // console.log(e);
  this.onSearchSelect(e);
  if(e.indexName.indexOf('New Age Alpha ') == -1)
  {
    //console.log('global');
    this.getSectorList(e.industry.toString());
    this.SelSearchObj = e;
    //this.onSearchSelect(e);
    this.onSectorClick(e.industry);
    
    // console.log(this.fullSectorComp);
    // console.log(this.selSectorComp);

  }else{
   // console.log('NAA');
    //console.log(e);
    var temp = this.data.filter(item=> item.companyName == e.companyName);
    temp = temp.filter(item=> item.indexName.indexOf("New Age Alpha ")== -1)
    temp = temp[0];
    this.getSectorList(temp.industry.toString());
    this.SelSearchObj = temp;
    //console.log(temp);
    this.onSectorClick(temp.industry);
    
  }
}

// OpenSeach(){
//   this.selectComponent.open();
// }

searchCompany(event:{component: IonicSelectableComponent,
  text: string}){
    let text = event.text.trim();
    //console.log(text);
    //event.component.startSearch();
    //event.component.endSearch();

    if(text.length == 0)
    {
      //event.component.items = this.data.filter(item=> item.companyName != null);
      this.searchList = this.searchList.filter(item=> item.indexName.indexOf("New Age Alpha") == -1);
      this.LoadsearchList = this.searchList.slice(0,50).map(i=>{
        return i;
      } );
      //console.log(this.searchList);
    }
    else{
      //console.log(this.searchList);
      event.component.items=[];
      event.component.items=this.searchList.filter((item) => {
        return (item.companyName.toLowerCase().indexOf(text.toLowerCase())> -1) || (item.ticker.toLowerCase().indexOf(text.toLowerCase()) > -1);
      });
      
    }   
}

onSearchSelect(e){
  console.log(e);
  this.selComp = e.companyName;
  this.SelSearchObj = e;
  
 // console.log(this.searchSel);
  //console.log(this.searchSel);
  //console.log(this.searchList);
  var industryVal = e.industry;
  //{{roundValue(getETFCategoryMed(ETFcategory.indexOf(searchSel.companyName))*100)}}
  //console.log(this.ETFcategory.indexOf(e.companyName)*100);
 
  //console.log(this.ETFNameFull);
  
  if(e.indexName == "ETF"){
    this.onETFCategoryClick("All");
    this.EtfMed=  this.getEtfMed(e.companyName);
    this.SelTab = '';
    //console.log(this.EtfMed);
  }else{
    this.getSectorList(industryVal.toString())
  //console.log(industryVal.toString().substring(0,2));
  //console.log(e.item.industry);
  this.onSectorClick(e.industry);
  }
  
  
  this.GridHeaderTitle=false;
  if(e.indexName=='ETF')
  {
    this.SelTab = 'ETF';
   // console.log(this.ETFcategory);
    //this.onNavETFClick();
    //this.onETFCategoryClick(e.item.country);
    this.onETFNameClick(e.companyName);
    //console.log(this.ETFNameList);
  }else{
    this.SelTab = 'Global';
  //console.log(this.globalIndex);
  this.onglobalIndexClick(e.indexName);
  }
}

getMoreSearchComp(event:{component: IonicSelectableComponent,text: string}){
  let text = (event.text || '').trim().toLowerCase();
  // if (this.page > 3) {
  //   event.component.disableInfiniteScroll();
  //   return;
  // }
  if(this.LoadsearchList.length == this.searchList.length){
    event.component.disableInfiniteScroll();
    //console.log(this.searchList);
      return;
  }
 // if()
  this.size = this.size+50;
  this.LoadsearchList = this.searchList.slice(0,this.size).map(i=>{
    return i;
  });
  event.component.endInfiniteScroll();
}

getSectorList(data)
{
  var indus = data;
  var i=2;
  this.sectorList = [];
  while((i/2)<5)
  {
    var searchkey = indus.substring(0,i);
    var temp = this.dbGICS.filter(item=> item.code == searchkey);
    //console.log(temp[0]);
    this.sectorList.push(temp[0]);
    i=i+2;
  }
}

onSectorClick(key){
 // console.log(key);
  if(this.stockCollapse == true){
    //this.stockCollapse = false;
    this.stockIndexShow= false;
    this.compIndexShow= false;
    this.stockIcon = "ios-arrow-dropdown-circle";
    this.icon = "ios-arrow-dropdown-circle";
  }
  //console.log(key.toString().length);
  this.fullSectorComp = this.data.filter(item => 
    item.industry.toString().substring(0,key.toString().length) == key
  )
  this.fullSectorComp = this.fullSectorComp.filter(item=> item.indexName.indexOf("New Age Alpha") == -1);
  //console.log(this.SelSearchObj);
  this.selSectorComp = this.fullSectorComp.filter(item=> item.indexName == this.SelSearchObj.indexName);
  this.selSectorComp.sort((a,b) => {
    return a.scores - b.scores;
    //this.unsortedIndexData = this.selectedIndexData;
  })
  this.selSector = this.sectorList[(key.toString().length/2)-1];
  this.SelSecLevTitle = this.sectorHeadings[this.sectorList.indexOf(this.selSector)];
  this.stockMed = this.roundValue(this.getMed(this.selSectorComp)*100);
  document.getElementById('subIndex-circle').style.background = this.getColor(this.roundValue(this.getMed(this.selSectorComp)*100));
  document.getElementById('subIndex-circle').style.color = this.ApplyTextColor(this.roundValue(this.getMed(this.selSectorComp)*100));
  // console.log(this.sectorHeadings[this.sectorList.indexOf(this.selSector)]);
  // console.log(this.selSector);
   //console.log(this.selSectorComp);
   //console.log(this.roundValue(this.getMed(this.selSectorComp)*100));
  //console.log(temp);
}

getIDReplace(id){
  return id.replace(/ /g,'-');
}

onSlide0Click(){
  this.slides.slideTo(0);
  document.getElementById("slide0dot").style.backgroundColor="#FFFFFF"
  document.getElementById("slide1dot").style.backgroundColor="#666"
}

onSlide1Click(){
  this.slides.slideTo(1);
  document.getElementById("slide1dot").style.backgroundColor="#FFFFFF"
  document.getElementById("slide0dot").style.backgroundColor="#666"
}

onSlideChange(){
  
  this.slides.getActiveIndex().then(index => {
    if(index == 0)
  {
    document.getElementById("slide0dot").style.backgroundColor="#FFFFFF"
    document.getElementById("slide1dot").style.backgroundColor="#666"
  }else{
    document.getElementById("slide1dot").style.backgroundColor="#FFFFFF"
    document.getElementById("slide0dot").style.backgroundColor="#666"
  }
  });  
}
}
