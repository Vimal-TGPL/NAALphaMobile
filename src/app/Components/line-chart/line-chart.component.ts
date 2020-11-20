import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/services/dataHandler/data-handler.service';
import * as HighCharts from 'highcharts';
import { ModalController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit,OnDestroy {

  @Input() currentData:any;
  @Input() indexId:any;
  @Input() selSecLvl:any;
  @Input() selComp:any;

  range:any = 0;
  lgChart:any;

  constructor(private dataHandler:DataHandlerService,private modalCtrl:ModalController, private screenOrientation: ScreenOrientation) {
    
   }
  ngOnDestroy() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.range = this.currentData.e;

    setTimeout(() => {
      this.highChartLine();
    }, 1000);
  }




  rangeChange(evt){
    this.range = evt.detail.value;
    this.currentData.e = evt.detail.value == 0 ? 100 : evt.detail.value ;
    this.highChartLine();
  }

  formatedates(value: any) {
    if (value < 10) { return '0' + value; } else { return value; }
  }

  highChartLine(){
    var that = this;
    if(this.selComp != ''){
      let indexValue = [];
      let date = [];
      var Ctype = 'MC';
      var range = '';
      var GICSId = 0;
      if(this.selSecLvl == 1){
        GICSId = 0;
      }else{
        GICSId = that.selComp.industry.slice(0,2*(this.selSecLvl-1));
      }
      range = 'top'+this.currentData.e;
      // console.log(range);
      this.dataHandler.getIndexPreRuns(this.indexId,GICSId,Ctype,range).subscribe((res:any[]) =>{
        // console.log(res);
        if(res.length > 0){

          if (that.lgChart != null) {
            that.lgChart.destroy();
            that.lgChart = null;
          }

          let indexValue1 = [];

          for (let i = 0; i <= (res.length - 1); ++i) {
            indexValue1.push(res[i]['top100']);
            date.push(res[i]['date']);
          }

          var d = new Date(date[date.length - 1]);
          var formatdate = that.formatedates(d.getMonth() + 1) + '/' + that.formatedates(d.getDate()) + '/' + d.getFullYear();
          var series = [];

          series.push({
            name: "All  (" + formatdate + ' : ' + indexValue1[indexValue1.length - 1].toFixed(2) + ")",
            marker: {
              symbol: ''
            },
            color: '#9b9b9b',
            data: indexValue1,
            lineWidth: 0.8
          });

          if (0 < that.range && 100 > that.range) {
            for (let i = 0; i <= (res.length - 1); ++i) {
              //indexValue.push(res[i][that.clkdRgeText + that.SRValue]);
              indexValue.push(res[i]["range"]);
              date.push(res[i]['date']);
            }

            // console.log(indexValue);

            var d = new Date(date[date.length - 1]);
            var formatdate1 = that.formatedates(d.getMonth() + 1) + '/' + that.formatedates(d.getDate()) + '/' + d.getFullYear();

            series.push({
              name: "Top " + that.range + "% (" + formatdate1 + ' : ' + indexValue[indexValue.length - 1].toFixed(2) + ")",
              marker: {
                symbol: 'circle'
              },
              color: '#00b9ff',
              data: indexValue,
              lineWidth: 0.8
            });
          }

          that.lgChart = HighCharts.chart({
            chart:{
              renderTo: 'lineChartModal',
              type: 'spline',
              zoomType:"x",
              pinchType:'x',
              style: {
                fontFamily: 'Open Sans SemiBold'
              }
            }, exporting:{
              url: 'https://export.highcharts.com/',
              enabled: true,
              buttons: {
                contextButton: {
                  menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG'],
                },
              },
            },credits: {
              enabled: false
            },title: {
              text: ''
            },
            subtitle: {
              text: ''
            },
            legend: {

            },xAxis: {
              // minRange: 10,
              type: 'datetime',
              categories: date,
              tickColor: '#f1f1f1',
              //useHTML: true,
              tickWidth: 1,
              labels: {
                // rotation: 310,

                formatter: function () {
                  let d = new Date(this.value);
                  var currentMonth: any = (d.getMonth() + 1);
                  if (currentMonth < 10) { currentMonth = '0' + currentMonth; }
                  return (currentMonth + '/' + d.getFullYear().toString());
                },

                style: {
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  color: '#333',
                  fontSize: '10px',
                }

              }
            },yAxis: {
              maxPadding: 0.2,
              title: {
                text: ''
              },
              labels: {
                style: {
                  color: '#333',
                  fontSize: '10px'
                }, formatter: function () {
                  return HighCharts.numberFormat(this.value, 0, '', ',');
                }
              }
            },tooltip: {
              xDateFormat: '%Y-%m-%d',
              valueDecimals: 2,
              //crosshairs: true,
              shared: true,
              dateTimeLabelFormats: {
                millisecond: "%A, %b %e"
              },
              formatter: function () {
                var d = new Date(this.x);
                function formater(value) { if (value < 10) { return '0' + value; } else { return value; } }
                var formatdate = formater(d.getMonth() + 1) + '/' + formater(d.getDate()) + '/' + d.getFullYear();
                if (this.points.length > 1) { return "<div style='font-size:7pt'>" + formatdate + "<br><b>All : </b> <span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + "</span><br><b>" + that.range + " : </b><span style='font-size: 8pt'>" + this.points[1].y.toFixed(2) + ' </span></div>'; }
                else if (this.points[0].color == "#00b9ff") { return "<div style='font-size:7pt'>" + formatdate + "<br><b>" + that.range + " : </b><span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + '</span></div>'; }
                else { return "<div style='font-size:7pt'>" + formatdate + "<br><b>All : </b><span  style='font-size: 8pt'>" + this.points[0].y.toFixed(2) + '</span></div>'; }
              }
            },plotOptions: {
              spline: {
                marker: {
                  radius: 0.1,
                  lineColor: '#666666',
                  lineWidth: 0.1
                }
              }
            },series: series,
            lang: {
              noData: "No data to display",
            },
            noData: {
              style: {
                fontWeight: 'bold',
                fontSize: '15px',
                color: '#303030'
              }
            }
          })
        }
      });
    }
  }

  onCloseClick(evt){
    this.modalCtrl.dismiss({
      'range':this.range
    });
  }
}
