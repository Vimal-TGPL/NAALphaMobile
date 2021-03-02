import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { AuthGaurdService } from '../services/auth-gaurd.service';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path : 'home',
        //canActivate : [AuthGaurdService],
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'change-password',
        loadChildren: () => import('../change-password/change-password.module').then( m => m.ChangePasswordPageModule)
      },
      // {
      //   path: 'performance',
      //   loadChildren: () => import('../performance/performance.module').then( m => m.PerformancePageModule)
      // },
      // {
      //   path: 'investment-solutions',
      //   loadChildren: () => import('../investment-solutions/investment-solutions.module').then( m => m.InvestmentSolutionsPageModule)
      // },
    ]
  },
  {
    path:'',
    redirectTo: '/menu/menu/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
