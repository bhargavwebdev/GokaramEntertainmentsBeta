import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CulturalsComponent } from './culturals/culturals.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PerformersListComponent } from './culturals/performers-list/performers-list.component';
import { PerformerComponent } from './culturals/performer/performer.component';
import { GuestsComponent } from './guests/guests.component';
import { AdminComponent } from './admin/admin.component';
import { CulturalService } from './culturals/cultural.service';
import { PerformerService } from './culturals/performers-list/perfomer.service';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import * as firebase from 'firebase/app';
import { AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CulturalsComponent,
    HeaderComponent,
    MainComponent,
    PerformersListComponent,
    PerformerComponent,
    GuestsComponent,
    AdminComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CulturalService,
    PerformerService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule{

 }
