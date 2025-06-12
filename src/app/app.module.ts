import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsService } from './services/clients.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
