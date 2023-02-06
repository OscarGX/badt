import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'page-one'
      },
      {
        path: 'page-one',
        loadChildren: () => import('../test-routing/page-one/page-one.module').then(m => m.PageOneModule),
      },
      {
        path: 'page-two',
        loadChildren: () => import('../test-routing/page-two/page-two.module').then(m => m.PageTwoModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
