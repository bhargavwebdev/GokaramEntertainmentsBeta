import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CulturalsComponent } from './culturals/culturals.component';
import { PerformersListComponent } from './culturals/performers-list/performers-list.component';
import { PerformerComponent } from './culturals/performer/performer.component';
import { GuestsComponent } from './guests/guests.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '',redirectTo:'/main',pathMatch: 'full'},
  {path: 'main', component: MainComponent, children:[
    {path:'',redirectTo:'culturals',pathMatch: 'full'},
      {path:'culturals',component:CulturalsComponent, children:[
      {path: ':id', component: PerformersListComponent},
      {path: ':id/profile', component: PerformerComponent}   
    ]},
    {path:'guest', component: GuestsComponent}   
  ]},
  {path: 'admin', component: AdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
