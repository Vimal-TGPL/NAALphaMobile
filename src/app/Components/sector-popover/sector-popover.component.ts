import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-sector-popover',
  templateUrl: './sector-popover.component.html',
  styleUrls: ['./sector-popover.component.scss'],
})
export class SectorPopoverComponent implements OnInit {

  sectorList:any = [];
  selComp:any;

  constructor(private navParams: NavParams,private popoverCtrl: PopoverController) {
    
    this.sectorList = this.navParams.get('sectorList');
    this.selComp = this.navParams.get('selComp');
    // console.log(this.sectorList);
    // console.log(this.selComp);
   }

  ngOnInit() {}

  onSecItemClick(i){
    this.popoverCtrl.dismiss(i);
  }

}
