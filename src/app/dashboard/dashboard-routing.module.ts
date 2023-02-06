import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { DNotFoundComponent } from './pages/d-not-found/d-not-found.component';
import { DInternalServerComponent } from './pages/d-internal-server/d-internal-server.component';
import { DForbiddenComponent } from './pages/d-forbidden/d-forbidden.component';

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
      },
      {
        path: 'server-error',
        component: DInternalServerComponent
      },
      {
        path: 'forbidden',
        component: DForbiddenComponent
      },
      {
        path: '**',
        component: DNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
