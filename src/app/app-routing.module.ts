import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { IdbpComponentComponent } from './idbp-component/idbp-component.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'idbp', component: IdbpComponentComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
