import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CulturalsComponent } from './culturals/culturals.component';
import { PerformersListComponent } from './culturals/performers-list/performers-list.component';
import { PerformerComponent } from './culturals/performer/performer.component';
import { GuestsComponent } from './guests/guests.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/main/culturals', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, children: [
      { path: '', redirectTo: 'culturals', pathMatch: 'full' },
      {
        path: 'culturals', component: CulturalsComponent, children: [
          // Auth Guard route Protection
          // { path: ':id', component: PerformersListComponent, canActivate: [AuthGuard] },
          { path: ':id', component: PerformersListComponent},
          { path: ':id/profile', component: PerformerComponent }
        ]
      },
      { path: 'guest', component: GuestsComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }