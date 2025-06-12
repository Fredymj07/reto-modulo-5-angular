import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'app',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'clients/:id', component: ClientsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
