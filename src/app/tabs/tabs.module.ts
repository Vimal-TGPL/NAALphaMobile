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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    MatTabsModule
  ],
  declarations: [TabsPage,IPadHomeToolComponent,IndexComponent,ToolComponent,SearchtoolComponent],
  entryComponents: [SearchtoolComponent]

})
export class TabsPageModule {}
