import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { Platform, IonSlides, MenuController, ModalController } from '@ionic/angular';
import * as d3 from 'd3';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { DataHandlerService } from '../services/dataHandler/data-handler.service';
import { DataService } from '../services/shareddata/data.service';
import { MobileSearchComponent } from '../Components/mobile-search/mobile-search.component';
import { SectorPopoverComponent } from '../Components/sector-popover/sector-popover.component';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit {
  // slides={initialSlide: 1};

  slides:any;
  
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
  selIndexData:any;
  CurrSlide:any = 1;
  slideOpts:any = {
    initialSlide : this.CurrSlide,
    slidesPerView:1,
  }
  sectorOrder = [{name: 'Index',order:1},{name:'Sector',order:2},{name:'Industry Group',order:3},{name:'Industry',order:4},{name:'Sub Industry',order:5}];
  
  gC360:any;
  gC100:any;
  gchart:any;
  chartMain:any;
  radius = 170;
  createXrad:any;
  
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
        this.createIndexData();
        setTimeout(() => {
          this.loadData();
        }, 100);
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
    // console.log(selCompInd);
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
      // console.log(indname);
      return indname.name;
    }else if(lev == 3){
      var tempind = ind.slice(0,4);
      var indname = this.dbGICS.filter(i => i.code == tempind)[0];
      // console.log(indname);
      return indname.name;
    }else if(lev == 4){
      var tempind = ind.slice(0,6);
      var indname = this.dbGICS.filter(i => i.code == tempind)[0];
      // console.log(indname);
      return indname.name;
    }else if(lev == 5){
      var tempind = ind.slice(0,8);
      var indname = this.dbGICS.filter(i => i.code == tempind)[0];
      // console.log(indname);
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
      translucent: true,
      cssClass:'sec-popover',
      componentProps: {sectorList:this.sectorList,selComp:this.selComp}
      
    });
    popover.onDidDismiss().then(d=>{
      if(d.data != undefined){
        this.selSec = d.data;
        // console.log(this.selSec);
        this.createIndexData();
        setTimeout(() => {
          this.scrollto();
        }, 50);
      }
    })
    return await popover.present();
  }

  createIndexData(){
    if(this.selSec.length != 0){
      var selSecLvl = this.sectorOrder.filter(i=> i.name == this.selSec.secTitle)[0].order;
      // console.log(selSecLvl);
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
      console.log(this.selIndexData);
    }
  }

  onArrowClick(d){
    if(d == 0 && this.CurrSlide != 0){
      this.scrollto();
    }
    this.CurrSlide = d;
    this.slides = document.getElementById('MainSlider');
    this.slides.slideTo(d);
    
  }

  onSlideChange(evt){
    this.slides = document.getElementById('MainSlider');
    this.slides.getActiveIndex().then(d =>{
      this.CurrSlide = d;
    })
  }

  roundMed(score){
    return this.dataService.roundValue(score);
  }

  onCompanyClick(comp){
    this.selComp = comp;
    this.indexClassifier();
    this.sectorClassifier();
    this.createIndexData();
    this.createMainChart(this.gchart);
  }

  scrollto(){
    var index = this.selIndexData.indexOf(this.selComp);
    var list = document.getElementById('CompList');
    list.scrollTop = 55*(index-3);
  }

  loadData(){
    this.gC360 = d3.scaleLinear()
      .domain([0, 90, 180, 270, 360])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    this.gC100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    this.gchart = d3.select("#gchart");
    // console.log(this.gchart);

    this.chartMain = this.createMainChart(this.gchart); // Create Main Chart circle 
  }

  createMainChart(obj){
    let that = this;

    let sradius = 100;
    var grp1 = obj.append("g").attr("id", "crlChart");
    grp1.append("circle")
    .attr("id", "maincircle")
    .attr("class", "start-ring")
    .attr("fill", "#fff")
    .attr("r", 0)
    .transition()
    .on("end", function () {
      repeat(); repeat1();
      that.createGradienArc();
      that.creatClockSlider();
    });

    function repeat() {
      d3.select(".ringAnim")
        .attr('r', (+sradius))
        .style('opacity', 1)
        .style('stroke-width', '5px')
        .transition()
        //.delay(600)
        //.duration(2000)
        .attr('r', sradius * 1.3)
        .style('stroke-width', '1px')
        .style('opacity', 0)
        .on("end", repeat);
    };
    function repeat1() {
      d3.select(".preloding")
        .style('opacity', .5)
        .transition()
        //.duration(1000)
        .style('opacity', 1)
        .transition()
        //.duration(1000)
        .style('opacity', .5)
        .on("end", repeat1);
    }

    return grp1;
  }



  createGradienArc(){
    let that = this;
    var sMin = 0;
    var sMax = 100;
    d3.select("#maincircle")
        .transition()
        //.delay(300)
        //.duration(1000)
        .attr('r', that.radius + 4)
        .style('stroke-width', '0px')

        .on("end", function () {
          d3.select("#maincircle")
            .transition()
            //.duration(1000)
            .style('stroke-width', '0px');
        });
    d3.select("#gradArc").remove();
    var gArc = d3.select("#crlChart").append("g").attr("id", "gradArc");

    var arc = d3.arc()
      .innerRadius(this.radius - 18)
      .outerRadius(this.radius - 2);

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
          //   linearG2.append("stop").attr("offset", "100%").attr("stop-color", gC100(data[i].score));
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
          //   linearG3.append("stop").attr("offset", "100%").attr("stop-color", gC100(data[i].score));
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

      that.CreateComps();
      that.createCompetitive(this.chartMain);
      that.fillCompetives();
  }

  CreateComps(){
    let that = this;
    var oSvg = this.chartMain;
    var compLst;
    var dta = this.selIndexData;
    var lvl = this.sectorOrder.filter(i=> i.name == this.selSec.secTitle)[0].order;
    oSvg.select('.compLst' + lvl).remove();
    compLst = oSvg.append("g").attr('class', 'compList compLst' + lvl).style("display", "block");

    var compC = compLst.append("g").attr("class", 'compLstC' + lvl);
    var compg = compC.selectAll("g")
      .data(dta)
      .enter().append("g")
      .attr("class", "comp")
      .attr("transform", function (d, i) {
        return "rotate(" + ((i * 360 / dta.length) - 90) + ")";
      })
      .attr("name", function (d) { return d.isin + "_" + d.indexName.replace(/ /g, '_') });

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
        //.attr("fill", "rgba(100,100,100,.5)") 
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
  }

  createCompetitive(grp1) {
    grp1.append("g").attr("id", "gCompetitive");
  }

  creatClockSlider(){
    let that = this;
    var r = d3.select("#maincircle").attr("r");
    that.createXrad = parseInt(r);
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
      //.attr("y", -20)
      .attr("height", "40px")
      .attr("width", "170px")
      .style("display", "none");

      var text = g.append("text")
      .attr("class", "sText")
      .attr("x", + r + (40))
      .attr("dy", 0)
      .style("alignment-baseline", "middle")
      .style("font-size", "12px")
      .style("display", "none")
      .text("0.00");
  }

  fillCompetives(){
    let that = this;
    var dta = this.selIndexData;
    var lvl = this.sectorOrder.filter(i=> i.name == this.selSec.secTitle)[0].order;
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
        //} 
      })

      .attr("transform", function (d) {
        // return "rotate(" + ((d.deg * 3.6) - 90) + ")";
        if (d.cx <= 90) {
          return "rotate(" + (d.cx + 1.0) + ")";
        } else {
          return "rotate(" + (d.cx - 1.0) + ")";
        }

      })

      .style("opacity", function (d) {

        let sMin = 0; //that.sliderRange.value()[0].toFixed(0);
        let sMax = 100;// that.sliderRange.value()[1].toFixed(0);
        let opa = 1;
        if (dta.length > 180) {
          opa = 1 - (((sMax - sMin) / 100) - (.1));
        }

        if (lvl == 4) {
          return opa;
        }
        else {
          // return (distinctISIN.includes(d.isin) ? "1" : opa);
        }
        return opa;
      })
      ;

      // ggs.append("text")
      // .attr("x", function (d) {
      //   return (d.cx) > 90 ? "-202" : "202";
      // })
      // .style("font-family", "Open Sans Bold")
      // .style("fill", function (d) {
      //   return "#666";

      // })
      // .attr("transform", function (d) {
      //   return (d.cx) > 90 ? "rotate(180)" : null;

      // })
      // .style("text-anchor", function (d) {
      //   return (d.cx) > 90 ? "end" : null;
      // })
      // .style("opacity", function (d) {
      //   // let distinctISIN = SelData.map(function (d) { return d.isin; });

      //   let sMin = 0; //that.sliderRange.value()[0].toFixed(0);
      //   let sMax = 100;// that.sliderRange.value()[1].toFixed(0);
      //   let opa = 1;
      //   if (dta.length > 180) {
      //     opa = 1 - (((sMax - sMin) / 100) - (.1));
      //   }

    
      //   if (lvl == 4) {

      //     return opa;

      //   }
      //   else {
      //     // return (distinctISIN.includes(d.isin) ? "1" : opa);
      //   }
      //   return opa;
      // })
      // .attr("class", function (d) {
      //   return "";
      // })
      // // .text(function (d) { return d3.format(".1f")(d.score) + "%" });

      ggs.append("text")
      .attr("x", function (d) {
        return (d.cx) > 90 ? "-235" : "235";
      })

      .attr("transform", function (d) {
        //return (d.deg * 3.6) > 180 ? "rotate(180)" : null;
        return (d.cx) > 90 ? "rotate(180)" : null;

      })
      .style("text-anchor", function (d) {
        //  return (d.deg * 3.6) > 180 ? "end" : null;
        return (d.cx) > 90 ? "end" : null;
      })

      .attr("class", function (d) {
        return "";
      })
      //.text(function (d) { return d.company + " (" + d.ticker + ")"; }).call(that.wrap, 100);
      .text(function (d) {
        if ((d.cx) > 90) {
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
  }
}

