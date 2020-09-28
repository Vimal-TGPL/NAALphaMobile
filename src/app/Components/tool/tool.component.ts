import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
declare var $: any;
import * as d3 from 'd3/';
import { DataService } from '../../services/shareddata/data.service';
import { ModalController } from '@ionic/angular';
import { SearchtoolComponent } from '../searchtool/searchtool.component';


@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
})
export class ToolComponent implements OnInit, AfterContentInit, AfterViewInit,OnDestroy {

  gchart:any;
  chartMain:any;
  radius = 170;
  dbGICS:any = [];
  selResData:any = [];
  Companies:any = [];
  SelIndexName:any;
  FromClick: string = "";
  currentStockkey = "";
  createXrad: any;
  selTab:string = 'Equities';
  _selTabSub:any;
  // SelTab: string = 'Stocks';
  // SelMode: string = 'Global';
  // SeltabFilter: string = "Global";

  constructor(private modelCtrl: ModalController ,private dataService:DataService, private changedet: ChangeDetectorRef) { 
    this._selTabSub = this.dataService.selTab.subscribe(d=>{
      this.selTab = d;
      // console.log(this.selTab);
    })
  }
  ngOnDestroy(): void {
    this._selTabSub.unsubscribe();
  }

  ngAfterViewInit(): void {
   
  }

  ngAfterContentInit(): void {
    this.loadData();
  }

  ngOnInit() {

  }

  loadData(){
    this.gchart = d3.select("#gchart");
    
    this.chartMain = this.CreateMainChart(this.gchart);
  }

  CreateMainChart(obj){
    let that = this;

    let sradius =100;
    var grp1 = obj.append("g").attr("id", "crlChart");
    grp1.append("circle")
    .attr('id','maincircle')
    .attr('class','start-ring')
    .attr('fill','#fff')
    .attr('r',0)
    .transition()
    .on('end', function() {
      repeat();
      repeat1();
      that.createData("");
    });

    function repeat(){
      d3.select(".ringAnim")
        .attr('r',(+sradius))
        .style('opacity',1)
        .style('stroke-width','5px')
        .transition()
        .attr('r',sradius*1.3)
        .style('opacity',0)
        .style('stroke-width','1px')
        .on('end', repeat);
    };

    function repeat1(){
      d3.select(".preloding")
        .style('opacity', .5)
        .transition()
        .style('opacity', 1)
        .transition()
        .style('opacity', .5)
        .on("end", repeat1);
    }
    return grp1;
  }

  createData(d){
    let that = this;

    that.dbGICS = that.dataService.dbGICS;
    // console.log(that.dbGICS);

    if(d!=""){
      that.dataService.getHistGlobalData(d);
    }else{
      that.dataService.getGlobalData();
    }
    that.dataService.dbScore.subscribe(data =>{
      if(data.length != 0){
        let dbScore = data;
        // console.log(dbScore);
        that.selResData = dbScore;
        var selreslen = that.selResData.length;
        that.selResData.forEach(function (d, i) {
          d.countrygroup = d.indexName.indexOf('Europe') > -1 ? 'Europe' : d.country;
          d.score = d.scores * 100;
          d.deg = d.score;
          d.indname = that.findIndName(that.dbGICS, d.industry);
          d.industry = d.industry + "";
          d.companyName = d.companyName != null ? d.companyName.trim() : "";
          d.company = d.companyName != null ? d.companyName : null;
          d.ticker = d.ticker;
          d.stockKey = d.stockKey;
          d.aisin = d.isin;
          d.isin = "a" + d.stockKey;
          d.Fixeds = "";
          d.cx = ((i * 360 / selreslen) - 90);
          let flt = that.dataService.IndexOrder.filter(function (x) { return x.index == d.indexName })
          d.sortOrder = flt.length > 0 ? flt[0].order : null;
          return d
        });
        // console.log(that.selResData);

        d3.select(".ringAnim").style("display", "none").remove();
        d3.select(".preloding").style("display", "none").remove();

        d3.select('#maincircle')
        .transition()
        .attr('r', that.radius + 4)
        .style('stroke-width','0px')
        .on("end", function () {
          d3.select("#maincircle")
            .transition()
            .style('stroke-width', '0px');

            that.createGradientArc(0,100,that.selResData);
            

            that.Companies = that.selResData.filter(function (val) {
              if (val.indexName.indexOf("New Age Alpha") == -1) {
                return val;
              }
            });

            // console.log(that.Companies);

        that.creatBreadCrumb(that.chartMain);
        that.createKnob();

        that.CreateComps(that.chartMain, that.selResData, "lvl1");

        d3.select(".Homecenter")
            .transition()
            .duration(1000)
            .style('opacity', '1');
        d3.select(".UpdatedBox")
           .transition()
           .duration(1000)
           .style('opacity', '1');

        })

      }
    });
  }

  findIndName(data,code){
    var ind = code;
    return data.filter(d => d.code == ind)[0].name;
  }

  createGradientArc(sMin=null, sMax=null, data=null){
    if (data != null && data.length > 0) {
      data.sort(function (x, y) {
        return d3.ascending(parseFloat(x.score), parseFloat(y.score));
      });
    }

    let that = this;
    if(sMin == null){
      sMin = 0;
    }
    if(sMax == null){
      sMax = 100;
    }

    d3.select('#gradArc').remove();
    var gArc = d3.select('#crlChart').append('g').attr('id','gradArc');
    var arc = d3.arc()
      .innerRadius(that.radius - 18)
      .outerRadius(that.radius - 2);

     var gC100 = d3.scaleLinear() 
      .domain([0,25,50,75,100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);

    var colors =[];
    var color1 = d3.scaleLinear()
      .domain([0, 1, 2, 3, 4])
      .range([gC100(sMin),
      gC100(((sMax - sMin) * 25 / 100) + sMin),
      gC100(((sMax - sMin) * 50 / 100) + sMin),
      gC100(((sMax - sMin) * 75 / 100) + sMin),
      gC100(sMax)]);

    var linearGradient = gArc.append('defs');

    var linearG1 = linearGradient.append('linearGradient');

    var gCArcColor = d3.scaleLinear()
      .domain([0, 90, 91, 180, 181, 270, 271, 360])
      .range([0, 100, 0, 100, 0, 100, 0, 100])
    var MaxColor = "";
    var MaxScore = "";
    var Data1 = data.filter(x => x.cx >= -90 && x.cx <= 0);
    // console.log(data);
    // console.log(Data1);
    linearG1.attr("id", "linearColors0")
      .attr("x1", "0").attr("y1", "0").attr("x2", ".5").attr("y2", "1");
    if (data != null) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].cx >= -90 && data[i].cx <= 0) {
          linearG1.append("stop").attr("offset", gCArcColor((data[i].cx) + 90) + "%").attr("stop-color", gC100(data[i].score));
        }
        if (data[i].cx > 0) {
          linearG1.append("stop").attr("offset", "100%").attr("stop-color", gC100(data[i].score));
          break;
        }
      }
      MaxColor = gC100(Data1[Data1.length - 1].score);
      MaxScore = Data1[Data1.length - 1].cx;
    }

    var Data2 = data.filter(x => x.cx >= 1 && x.cx <= 90);
    // console.log(Data2);
    var linearG2 = linearGradient.append("linearGradient");
    linearG2.attr("id", "linearColors1")
      .attr("x1", "0.8").attr("y1", "0").attr("x2", "0.5").attr("y2", "0.5");
    if (data != null) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].cx >= 1 && data[i].cx <= 90) {
          linearG2.append("stop").attr("offset", gCArcColor((data[i].cx) + 90) + "%").attr("stop-color", gC100(data[i].score));
        }
        if (data[i].cx > 90) {
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

    var Data3 = data.filter(x => x.cx >= 91 && x.cx <= 180);
    var linearG3 = linearGradient.append("linearGradient");
    linearG3.attr("id", "linearColors2")
      .attr("x1", "0.8").attr("y1", "0.8").attr("x2", "0").attr("y2", "0.3");
    if (data != null) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].cx >= 91 && data[i].cx <= 180) {
          linearG3.append("stop").attr("offset", gCArcColor((data[i].cx) + 90) + "%").attr("stop-color", gC100(data[i].score));
        }
        if (data[i].cx > 180) {
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

    var Data4 = data.filter(x => x.cx >= 181 && x.cx <= 270);
    var linearG4 = linearGradient.append("linearGradient");
    linearG4.attr("id", "linearColors3")
      .attr("x1", "0").attr("y1", "1").attr("x2", "1").attr("y2", "0");

    if (data != null) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].cx >= 181 && data[i].cx <= 270) {
          linearG4.append("stop").attr("offset", gCArcColor((data[i].cx) + 90) + "%").attr("stop-color", gC100(data[i].score));
        }
        if (data[i].cx > 270) {
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

    gArc.selectAll('.arc')
      .data(colors)
      .enter()
      .append('path')
      .attr('class', 'arc')
      .attr('d', arc)
      .attr('stroke', 'none')
      .attr('fill', function (d, i) { return 'url(#linearColors' + i + ')'; });
  }

  creatBreadCrumb(grp1){
    var arc1 = d3.arc()
      .innerRadius(351)
      .outerRadius(349)
      .startAngle(-1.2)
      .endAngle(-1.9);
    var g = grp1.append("g").attr("id", "gBreadCrumb").attr("transform", "translate(-40 ,15)");
  }

  CreateComps(oSvg, dta, lvl){
    let that = this;
    var compLst;
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
    .attr("name", function (d) { return d.isin + "_" + d.indexName.replace(/ /g, '_') })
    .on("click", function (elemData) {
      var gblSelId = d3.select(this).attr("name");
      // that.assgSelDrpVal = "Equities";
      // that.SelTab = "Global";
      // that.SelMode = "Global";
      // that.SeltabFilter = "Global";
      var d = d3.select(this).datum();
      // if (d3.select("#TimeLine").style("display") != "block") {
      //   d3.select("#btnTimeline").lower();
      //   d3.select("#ggicsLable").raise();
      // }
      // else {
      //   d3.select("#btnTimeline").raise();
      //   d3.select("#ggicsLable").lower();
      // }
      that.fnIndexSelClick(d, "CompClick");
      // that.hideSidebar();
      

      d3.select(".sRect1").style("opacity", "1");
      d3.select(".sRect").style("opacity", "1");
      d3.select(".sRectCompare").style("opacity", "1");
      d3.select(".sRectCompareOverlay").style("opacity", "1");
      d3.select("#cSlider").select(".sText").style("opacity", "1");
      d3.select("#cSlider").select(".sTextReverse").style("opacity", "1");  
    });

  let SelRes = that.selResData;
  // var dmin = d3.min(SelRes.map(x => x.marketCap));
  // var dmax = d3.max(SelRes.map(x => x.marketCap));
  var dmean = d3.mean(SelRes.map(x => x.marketCap));
  var dsum = d3.sum(SelRes.map(x => x.marketCap));

  let ResMarketCap = SelRes.map(x => x.marketCap);
  let LimitedCap = ResMarketCap.filter(x => x < dmean && x != null);
  let dlimitedSum = d3.sum(LimitedCap);

  // var rmax = (dmax - dmin) > 100 ? 100 : (dmax - dmin);
  // rmax = rmax < 50 ? 50 : rmax;

  // var h = d3.scaleLinear()
  //   .domain([dmin, dmax])
  //   .range([0, 50]);

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
        if (d.indexName.indexOf("New Age Alpha") > -1) {
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

  fnIndexSelClick(d, type) {
    let that = this;
    that.SelIndexName = d.indexName;
    let SelRows = that.selResData.filter(x => x.isin == d.isin);
    let RectOn = d3.select(".rectOn");
    let ChkRecton = null;
    if (RectOn.node() != null) {
      ChkRecton = RectOn.node().parentNode.id == "nav-1";
    }
    if (type == "CompClick") { ChkRecton = true; }
    let strtype = type == "" ? (that.FromClick == "ETFClick" ? "ETFCompClick" : (that.FromClick == "indexClick" ? "indexCompClick" : that.FromClick)) : type;
    if (type == "")
      strtype = that.FromClick == "FIClick" ? "FICompClick" : strtype;
    // that.loadComponent = false;
    // that.setClock(d.isin, d.deg * 360 / 100, d.company + " (" + d.ticker + ") [" + d3.format(".1f")(d.score) + "%]", strtype, d.stockKey, d.score);
  }

  createKnob(){
    
  }

  onSelectClick(e){
    this.selTab = e.target.value;
    this.dataService.selTab.next(this.selTab);
  }

  async onSearchInputClick(e){
    // console.log(e);
    const modal = await this.modelCtrl.create({
      component: SearchtoolComponent,
      cssClass: "modal-full"
    });
    modal.present();
  }
}