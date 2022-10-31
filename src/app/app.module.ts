import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// carbon-components-angular default imports
import { UIShellModule, IconModule, GridModule, SearchModule, TilesModule } from 'carbon-components-angular';
import { LoginComponent } from './login-component/login-component';
import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { MenuBlockComponent } from './menu-block/menu-block.component';
import { IdbpComponentComponent } from './idbp-component/idbp-component.component';
import { PageTitleTemplateComponent } from './page-title-template/page-title-template.component';
import { TileTemplateComponent } from './tile-template/tile-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardTitleComponent,
    LoginPageComponent,
    DashboardPageComponent,
    MenuBlockComponent,
    IdbpComponentComponent,
    PageTitleTemplateComponent,
    TileTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    GridModule,
    SearchModule,
    TilesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
