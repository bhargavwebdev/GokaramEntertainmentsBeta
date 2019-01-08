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

import * as firebase from 'firebase';
import { AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';

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
    SignupComponent
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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule{

 }
