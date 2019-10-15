import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {AuthenticationService} from './services/authentication.service';
import {FormsModule} from '@angular/forms';
import { EmailComponent } from './email/email.component';


@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    RegisterComponent,
    LoginComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    AngularFireAuth,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
