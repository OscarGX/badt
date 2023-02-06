import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { DForbiddenComponent } from './pages/d-forbidden/d-forbidden.component';
import { DNotFoundComponent } from './pages/d-not-found/d-not-found.component';
import { DInternalServerComponent } from './pages/d-internal-server/d-internal-server.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    DForbiddenComponent,
    DNotFoundComponent,
    DInternalServerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
