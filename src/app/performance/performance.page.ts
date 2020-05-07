import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'slick-carousel/slick/slick';
import { createAnimation } from '@ionic/core';
import { Platform, IonSlides, IonContent, PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements OnInit, AfterViewInit {
  ngAfterViewInit() {
    if(this.mobile){
    // var ref = document.getElementById('IndexListCard');
    // ref.onscroll= this.OnCardScroll;
    }
  }

  mobile : boolean;
  selWith:any;
  selectedIndexData:any;
  selectedIndexName:any;
  selectedIndex:any;
  itemActive:boolean = false;
  selectedCountry:any;
  PerformanceData:any = [];
  showMore:Boolean = false;
  description:String;
  IndexData:any = [];
  Index:any = [];
  CountryClasificationList:any = ['All','USA','Europe','UK','Japan','Dev. World','Dev. World ex US'];
  performanceAPIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexPerformance';
  APIUrl = 'https://api.newagealpha.com/api/Indexes/GetIndexDetails';
  constructor(private platform:Platform, private httpClient:HttpClient, private pickerCtrl:PickerController) { 
    this.selWith= window.innerWidth;
    this.selWith = this.selWith- 30; 
  }

  ngOnInit() {
    
    if(this.platform.is('ipad') || this.platform.is('tablet')){
      this.mobile = false;
    }else{
      this.mobile = true;
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
    this.httpClient.get(this.performanceAPIUrl).subscribe(data=>{
      this.PerformanceData = data;
      console.log(this.PerformanceData);
    
    this.httpClient.get(this.APIUrl).subscribe(data=>{
      this.IndexData = data
      console.log(this.IndexData);
      var i = 0;
      for(i=0; i<this.CountryClasificationList.length;i++){
        var temp = this.filterIndex(this.CountryClasificationList[i]);
        temp= temp.sort((a, b) => {
          return a.sortOrder - b.sortOrder;
        });
        this.Index.push(temp);
     }
     console.log(this.Index);
      //console.log(this.selectedIndex);
      this.OnItemClick('USA');
      document.getElementById('Loader').style.display='none';
    });
  });
  }



  filterIndex(item){
    //CON
    var index = item;
    //console.log(item);
    var filterStr='U.S.';
    var ind = [];
    if(index == 'USA')
    {
      filterStr = 'U.S.';
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
    }else if(index == 'Europe'){
      filterStr = 'Europe'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
    }else if(index == 'Europe'){
      filterStr = 'Europe'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
    }else if(index == 'UK'){
      filterStr = 'UK'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Europe') == -1);
    }else if(index == 'Japan'){
      filterStr = 'Japan'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
    }else if(index == 'Dev. World'){
      filterStr = 'Developed World'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1 && data.indexName.indexOf('Developed World Ex-US') == -1);
    }else if(index == 'Dev. World ex US'){
      filterStr = 'Developed World Ex-US'
      ind = this.IndexData.filter((data)=> data.indexName.indexOf(filterStr) != -1);
    }else if(index == 'All'){
      ind = this.IndexData;
    }
    //console.log(ind);
   // this.selectedIndex = ind[0].indexName;
   // this.selectedIndex = this.selectedIndex.replace('New Age Alpha ','');
    //console.log(this.selectedIndex)
    return ind;
  }

  OnItemClick(item){
    
    this.itemActive = true;
    this.selectedCountry = item;
    this.selectedIndexName = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)][0].indexName.replace('New Age Alpha ','');
    this.onOptionsSelected();    
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
    console.log(this.selectedIndexData);
    console.log(event.target.value);
    var d =this.IndexData.filter(data=> data.indexName.indexOf(event.target.value) != -1);
    this.selectedIndex = d[0];
    var inddata = this.PerformanceData.filter(data => data.indexName == this.selectedIndex.indexName);
    this.selectedIndexData = inddata[0];
    console.log(this.selectedIndexData);
    this.onCancelClick();
    
    setTimeout(()=>{
      this.animateSequenceStart();
    },300);
  }

  onOptionsSelected(){
    this.selectedIndex = this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)];
    var inddata = this.PerformanceData.filter(data => data.indexName.replace('New Age Alpha ','') == this.selectedIndexName);
    this.selectedIndexData = inddata[0];
    this.trimstring();
    this.showMore = false;
    console.log(this.selectedIndex);
    console.log(this.selectedIndexData);
    console.log(this.selectedIndexName);
  }

  trimstring(){
    var that = this;
    if(this.selectedIndexData.description.length > 210 )
    {
      if(this.showMore == true){
        that.description = that.selectedIndexData.description;
         that.description = that.description.replace(/RiskSelectTM/g,'RiskSelect<sup>TM</sup>').replace(/IndexSM/g,'Index<sup>SM</sup>');

         that.description = that.description+"<a id='ShowLess'>Show Less</a>";

         
        //  (click)=\"showMore = false; trimstring();\"
        setTimeout(()=>{
          document.getElementById('desc').getElementsByTagName('a')[0].onclick = function(){
            that.showMore = false;
            that.trimstring();
          }
           var desHeight =  document.getElementById('desc').clientHeight;
           var height = 355 + (desHeight - 82);
           document.getElementById('DataDiv').style.height = 'calc(100vh - '+ height+'px)';
        },100);
        console.log(that.description);
      }else{
        that.description = that.selectedIndexData.description.substring(0,210)+'...';
        that.description = that.description.replace(/RiskSelectTM/g,'RiskSelect<sup>TM</sup>').replace(/IndexSM/g,'Index<sup>SM</sup>');
        that.description = that.description+"<a id='ShowMore'>Show More</a>";
        
        setTimeout(()=>{
          document.getElementById('desc').getElementsByTagName('a')[0].onclick = function(){
            that.showMore = true;
            that.trimstring();
          }

          document.getElementById('DataDiv').style.height = 'calc(100vh - 355px)';
        },100);
        console.log(that.description);
      }
    }else{
      that.description = that.selectedIndexData.description;
      that.description = that.description.replace(/RiskSelectTM/g,'RiskSelect<sup>TM</sup>').replace(/IndexSM/g,'Index<sup>SM</sup>');
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
          this.selectedIndexName = val.Index.text;
          this.onOptionsSelected();
          // this.getColumnOptions();
        }
      }
      ],
      cssClass:'picOptions',
      columns:[{
        name: 'Index',
        
        options: this.getColumnOptions()
      }],

    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    // picker.onDidDismiss().then(async data=>{
    //   let col = await picker.getColumn('day');
    //   // this.selDate = col.options[col.selectedIndex].text;
    //   // console.log(col);
    // })
  }

  getColumnOptions(){
    var options = [];
    this.Index[this.CountryClasificationList.indexOf(this.selectedCountry)].forEach(element => {
      options.push({text:element.indexName.replace('New Age Alpha ',''),value:element.indexName.replace('New Age Alpha ','')});
    });
    return options;
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
}
