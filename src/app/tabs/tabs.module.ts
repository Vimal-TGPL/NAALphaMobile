import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { IPadHomeToolComponent } from '../Components/i-pad-home-tool/i-pad-home-tool.component';
import { IndexComponent } from '../Components/index/index.component';
import { MatTabsModule } from '@angular/material';
import { ToolComponent } from '../Components/tool/tool.component';
import { SearchtoolComponent } from '../Components/searchtool/searchtool.component';
import { GridComponent } from '../Components/grid/grid.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GicsComponent } from '../Components/gics/gics.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    MatTabsModule,
    FontAwesomeModule
  ],
  declarations: [TabsPage,IPadHomeToolComponent,IndexComponent,ToolComponent,SearchtoolComponent,GridComponent,GicsComponent],
  entryComponents: [SearchtoolComponent]

})
export class TabsPageModule {}
