import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpForbiddenComponent } from './error-pages/ep-forbidden/ep-forbidden.component';
import { EpNotFoundComponent } from './error-pages/ep-not-found/ep-not-found.component';
import { EpInternalServerComponent } from './error-pages/ep-internal-server/ep-internal-server.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'forbidden',
    component: EpForbiddenComponent,
  },
  {
    path: 'server-error',
    component: EpInternalServerComponent,
  },
  {
    path: '**',
    component: EpNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
