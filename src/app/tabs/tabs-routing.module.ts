import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { IPadHomeToolComponent } from '../Components/i-pad-home-tool/i-pad-home-tool.component';
import { IndexComponent } from '../Components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        component: IPadHomeToolComponent
      },
      {
        path: 'investment_solution',
        component: IndexComponent
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
