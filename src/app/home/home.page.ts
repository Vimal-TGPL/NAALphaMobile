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
import { timeInterval, timeout } from 'rxjs/operators';
import { templateJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit {

  @ViewChild(IonSlides,{static:true}) slides: IonSlides;

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
  //console.log(i);
  this.selectedIndexData = this.globalindexwise[this.globalIndex.indexOf(i)].filter(item => item.indexName == i);
  this.unsortedIndexData = this.globalindexwise[this.globalIndex.indexOf(i)].filter(item => item.indexName == i);
  // console.log(this.selectedIndexData);
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
    if(this.selComp!=undefined)
    {
      // console.log(this.selComp);
    setTimeout(()=>{
     // 
     var temp = this.selectedIndexData.filter((item)=> item.companyName == this.selComp);
     var index = this.selectedIndexData.indexOf(temp[0])+1;
     var manInd = (index*35)-240;
     document.getElementById('scrollDiv').scrollTo(0,manInd);
     var sectemp = this.selSectorComp.filter((item)=> item.companyName == this.selComp);
     //console.log(sectemp);
     var secInd = this.selSectorComp.indexOf(sectemp[0])+1;
    // console.log(secInd);
     var mansecInd = (secInd*35)-240;
     document.getElementById('sectorscrollDiv').scrollTo(0,mansecInd);
    // console.log(index);
    //  console.log("Executed")
    },100);
  }
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
  if(this.selComp!=undefined){
    // console.log(this.selComp);
  }
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
  //console.log(i);
  if(i=='All')
  {
  this.SelTab='ETFChild';
  this.selCategory=i;
  
  this.ETFNameList = this.res.map(item=>item.etfName);
  this.ETFNameFull = this.res;
  //console.log(this.ETFNameList);
  this.ETFNameMed = this.ETFNameFull.map(item=>this.roundValue(item.medianCont*100));
 // console.log(this.ETFNameFull);
 // console.log(this.ETFNameMed);
   var etfallnametemp = [];
   for(i=0;i<this.ETFNameList.length;i++){
    var med:any = this.ETFNameMed[i];
    var name:any = this.ETFNameList[i];
    var t:any = [];
    t={'name':name,'med':med};
    etfallnametemp.push(t);
   }
   this.compETFNameList = etfallnametemp;
   this.compETFNameList.sort((a,b) => {
    return a.med - b.med;
  });
//   console.log(this.compETFNameList);
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
    // console.log(this.compETFNameList);
     this.compETFNameList.sort((a,b) => {
      return a.med - b.med;
    });
   //  console.log(this.compETFNameList);
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
        var temp = tempData[0];
        temp.indexType = "ETF";
        this.ETFHoldings.push(temp);
        this.unsortedIndexData.push(temp);
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
  //  console.log(this.unsortedIndexData);
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
    this.scrollToSel();
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
    this.scrollToSel();
  }
}

onCompanyClick(e){
  this.selComp = e.companyName;
  this.searchSel = e;
 // console.log(e);
  
  if(e.hasOwnProperty('indexType')){
 //   console.log("ETF");
    this.getSectorList(e.industry.toString());
    this.SelSearchObj = e;
    this.SelSearchObj.etfName = this.SelIndexName;
    this.onSectorClick(e.industry);
    this.scrollToSel();
  }else if(e.indexName.indexOf('New Age Alpha ') == -1)
  {
    this.onSearchSelect(e);
  //  console.log('global');
    this.getSectorList(e.industry.toString());
    this.SelSearchObj = e;
    //this.onSearchSelect(e);
    this.onSectorClick(e.industry);
    
    // console.log(this.fullSectorComp);
    // console.log(this.selSectorComp);

  }else{
 //   console.log('NAA');
    //console.log(e);
     //var temp = this.data.filter(item=> item.companyName == e.companyName);
     //console.log(temp);
    // temp = temp.filter(item=> item.indexName.indexOf("New Age Alpha ")== -1)
    // temp = temp[0];
    var temp=e;
     this.getSectorList(temp.industry.toString());
     this.SelSearchObj = temp;
    // //console.log(temp);
     this.onSectorClick(temp.industry);
     this.scrollToSel();
  }

  this.slides.slideTo(0);
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
 // console.log(e);
  // if(e.indexName.indexOf("New Age Alpha ")== -1){
    this.selComp = e.companyName;
    this.SelSearchObj = e;
  // }else{
  //   console.log(e);
  //   console.log("NAA");
  //   var temp = this.data.filter((item)=> item.companyName == e.companyName && item.indexName.indexOf("New Age Alpha ")==-1)[0];
  //   //var tempp = temp.filter((item)=>)
  //   //console.log(temp);
  //   this.selComp = temp;
  //   this.SelSearchObj = temp;
  // }
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
  //  console.log(this.selComp);
    this.getSectorList(industryVal.toString())
  //console.log(industryVal.toString().substring(0,2));
  //console.log(e.item.industry);
  //if()
    this.onSectorClick(e.industry);
  //console.log(this.getIDReplace(this.selComp));
 // var id = this.getIDReplace(this.selComp);
  
  }
  
  
  this.GridHeaderTitle=false;
  if(e.indexName=='ETF')
  {
    this.SelTab = 'ETF';
   // console.log(this.ETFcategory);
    //this.onNavETFClick();
    //this.onETFCategoryClick(e.item.country);
    this.onETFNameClick(e.companyName);
    this.slides.slideTo(1);
    //console.log(this.ETFNameList);
  }else{
    this.SelTab = 'Global';
    //console.log(this.globalIndex);
    this.onglobalIndexClick(e.indexName);
    this.slides.slideTo(0);
    
  }
  
  //console.log(this.selComp);
  setTimeout(()=>{
    this.loadData();
  },50);
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
 // console.log(this.sectorList);
}

onSectorClick(key){
//  console.log(this.SelSearchObj);
  // console.log(e);
  // var key = e.industry;
//  console.log(key);
  if(this.stockCollapse == true){
    //this.stockCollapse = false;
    this.stockIndexShow= false;
    this.compIndexShow= false;
    this.stockIcon = "ios-arrow-dropdown-circle";
    this.icon = "ios-arrow-dropdown-circle";
  }
  this.fullSectorComp = this.data.filter(item => 
    item.industry.toString().substring(0,key.toString().length) == key
  )
 // console.log(this.fullSectorComp);
  //console.log(key.toString().length);
  if(this.SelSearchObj.hasOwnProperty('indexType')){
 //   console.log("etf from onSectorClick");
    this.fullSectorComp = this.ETFHoldings.filter(item => item.industry.toString().substring(0,key.toString().length) == key);
 //   console.log(this.fullSectorComp);
  }
  else if(this.SelSearchObj.indexName.indexOf("New Age Alpha ")==-1){
  
  
  this.fullSectorComp = this.fullSectorComp.filter(item=> item.indexName.indexOf("New Age Alpha") == -1);
  }
  else{
  //  console.log("NAA from On Search Select");
    this.fullSectorComp = this.fullSectorComp.filter(item=> item.indexName.indexOf("New Age Alpha") != -1);
  }
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
  // console.log(this.fullSectorComp);
 //  console.log(this.selSectorComp);
   //console.log(this.roundValue(this.getMed(this.selSectorComp)*100));
  //console.log(temp);
this.loadData();
this.scrollToSel();
  
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

scrollToSel(){
  if(this.selComp!=undefined)
    {
      //console.log(this.selComp);
    setTimeout(()=>{
     // 
     var temp = this.selectedIndexData.filter((item)=> item.companyName == this.selComp);
     var index = this.selectedIndexData.indexOf(temp[0])+1;
     var manInd = (index*35)-240;
     document.getElementById('scrollDiv').scrollTo(0,manInd);
     var sectemp = this.selSectorComp.filter((item)=> item.companyName == this.selComp);
     //console.log(sectemp);
     var secInd = this.selSectorComp.indexOf(sectemp[0])+1;
     //console.log(secInd);
     var mansecInd = (secInd*35)-240;
     document.getElementById('sectorscrollDiv').scrollTo(0,mansecInd);
     //console.log(index);
     // console.log("Executed")
    },100);
  }
}

// Banner Tool 
M_gchart:any;
M_chartMain: any = [];
M_selResData: any = [];
M_tradeDt: string = "";
radius = 170;
M_Companies: any = [];

loadData(){
this.M_gchart = d3.select("#M_gchart");
console.log(this.M_gchart);
this.M_chartMain = this.M_createMainChart(this.M_gchart);
console.log(this.M_chartMain);
}

M_createMainChart(obj){
  console.log(obj);
  d3.select("#maincircle").remove();
  d3.select("#crlChart").remove();

  var grp1 = obj.append("g").attr("id","crlChart");
  grp1.append("circle")
    .attr("id", "maincircle")
    .attr("class", "start-ring")
    .attr("r", 0)
    .attr("fill","#f5f5f5");

  this.M_CreateData();

  return grp1;
}

M_CreateData(){
  var that = this;
  var dbScore: any = [];
 dbScore = this.selSectorComp;
 console.log(this.selSectorComp);
 this.M_selResData = dbScore.sort((a,b)=>{
   return a.scores - b.scores;
 });
 let tradeDt = dbScore[0].tradeDate;
 this.M_tradeDt = tradeDt.slice(4,6)+"/"+tradeDt.slice(6,8)+"/"+tradeDt.slice(0,4);
 this.M_selResData.forEach(function(d,i){
   d.score = d.scores*100;
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
                .delay(10)
                .duration(10)
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

M_creatGradienArc(){
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

  gArc.selectAll('.arc')
            .data(colors)
            .enter()
            .append('path')
            .attr('class', 'arc')
            .attr('d', arc)
            .attr('stroke', 'none')
            .attr('fill', function (d, i) { return 'url(#linearColors' + i + ')'; });

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

M_CreateComps(oSvg, dta, lvl){
  console.log(oSvg);
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
            //.attr("rx", 15)
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
}
