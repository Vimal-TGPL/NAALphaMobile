import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/shareddata/data.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-gics',
  templateUrl: './gics.component.html',
  styleUrls: ['./gics.component.scss'],
})
export class GicsComponent implements OnInit {

  selIndex:any;
  _selIndexSub:any;
  globalGICS:any;
  _globalGICSsub:any;
  selSector:any;
  IndexWise:any;
  _IndexWiseSub:any;
  IndexGICS:any;
  secLevel:any;
  _secLevelSub:any;

  constructor(private dataService:DataService) {
    this._selIndexSub = this.dataService.selIndex.subscribe(d=>{
      this.selIndex = d;
      console.log(this.selIndex);
    });
    this._globalGICSsub = this.dataService.globalGICS.subscribe(d=>{
      this.globalGICS = d;
      console.log(this.globalGICS);
    });
    this._IndexWiseSub = this.dataService.indexWise.subscribe(d=>{
      this.IndexWise = d;
      console.log(this.IndexWise);
      var temp = {
        name: this.selIndex.indexName,
        count: this.IndexWise[this.selIndex.indexName].length,
        med: this.dataService.roundValue(this.dataService.getMed(this.IndexWise[this.selIndex.indexName])*100),
        upto25: this.IndexWise[this.selIndex.indexName].filter(i=> (i.scores*100) < 25).length,
        upto50: this.IndexWise[this.selIndex.indexName].filter(i=>  (i.scores*100) >= 25 &&(i.scores*100) < 50).length,
        upto75: this.IndexWise[this.selIndex.indexName].filter(i=>  (i.scores*100) >= 50 &&(i.scores*100) < 75).length,
        upto100: this.IndexWise[this.selIndex.indexName].filter(i=>  (i.scores*100) >= 75 &&(i.scores*100) < 100).length
      }
      this.IndexGICS = temp;
      console.log(this.IndexGICS);
    });
    this._secLevelSub = dataService.secLevel.subscribe(d =>{
      this.secLevel = d;
      if(this.secLevel == 2){
        this.selSector= 'Index';
      }
    })
   }

  ngOnInit() {}

  getColor(med) {
    let gc100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    return gc100(med);
  }

  onSectorClick(sec){
    this.selSector = sec;
  }
}
