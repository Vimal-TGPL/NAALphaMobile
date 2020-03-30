import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformancePageRoutingModule } from './performance-routing.module';

import { PerformancePage } from './performance.page';

import { IndexComponent} from '../Components/index/index.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable'

import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTabsModule,
    PerformancePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [PerformancePage,IndexComponent]
})
export class PerformancePageModule {}
