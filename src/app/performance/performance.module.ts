import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformancePageRoutingModule } from './performance-routing.module';

import { PerformancePage } from './performance.page';

import { IndexComponent} from '../Components/index/index.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformancePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [PerformancePage,IndexComponent]
})
export class PerformancePageModule {}
